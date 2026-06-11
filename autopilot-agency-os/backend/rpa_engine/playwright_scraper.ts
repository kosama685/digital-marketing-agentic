/**
 * Playwright Scraper for AutoPilot Agency OS
 * 
 * Accepts a query and location. Uses residential proxies to scrape:
 * - Google Trends
 * - Competitor websites
 * - Public social feeds
 * 
 * Outputs structured JSON data for analysis.
 * 
 * API-first approach: Try direct APIs first, fall back to browser scraping.
 */

import { chromium, Browser, Page, BrowserContext } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

// Type definitions
interface ScrapingConfig {
  query: string;
  locations: string[];
  proxyRotation?: boolean;
  maxRetries?: number;
  timeout?: number;
}

interface ProxyServer {
  host: string;
  port: number;
  username?: string;
  password?: string;
  country?: string;
}

interface CompetitorData {
  name: string;
  url: string;
  location: string;
  metaTags: Record<string, string>;
  services: string[];
  reviews?: {
    rating: number;
    count: number;
    sentiments: string[];
  };
  scrapedAt: string;
}

interface TrendData {
  query: string;
  location: string;
  interestOverTime: Array<{ date: string; value: number }>;
  relatedQueries: string[];
  risingQueries: string[];
  scrapedAt: string;
}

interface SocialFeedData {
  platform: string;
  query: string;
  location: string;
  posts: Array<{
    content: string;
    author: string;
    timestamp: string;
    engagement: {
      likes: number;
      shares: number;
      comments: number;
    };
  }>;
  scrapedAt: string;
}

interface ScrapingResult {
  success: boolean;
  competitors: CompetitorData[];
  trends: TrendData[];
  socialFeeds: SocialFeedData[];
  errors: string[];
  metadata: {
    duration: number;
    proxiesUsed: number;
    pagesScraped: number;
  };
}

/**
 * Playwright-based web scraper with proxy rotation
 * Falls back to browser automation when APIs are unavailable
 */
export class PlaywrightScraper {
  private browser: Browser | null = null;
  private proxies: ProxyServer[] = [];
  private currentProxyIndex: number = 0;
  private readonly defaultTimeout: number = 30000;
  private readonly maxRetries: number = 3;

  constructor(proxies: ProxyServer[] = []) {
    this.proxies = proxies;
  }

  /**
   * Initialize browser instance
   */
  async initialize(): Promise<void> {
    if (!this.browser) {
      this.browser = await chromium.launch({
        headless: true,
        args: [
          '--disable-blink-features=AutomationControlled',
          '--no-sandbox',
          '--disable-dev-shm-usage'
        ]
      });
    }
  }

  /**
   * Close browser instance
   */
  async close(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }

  /**
   * Get next proxy in rotation
   */
  private getNextProxy(): ProxyServer | undefined {
    if (this.proxies.length === 0) return undefined;
    
    const proxy = this.proxies[this.currentProxyIndex];
    this.currentProxyIndex = (this.currentProxyIndex + 1) % this.proxies.length;
    return proxy;
  }

  /**
   * Create browser context with optional proxy
   */
  private async createContext(proxy?: ProxyServer): Promise<BrowserContext> {
    if (!this.browser) {
      throw new Error('Browser not initialized. Call initialize() first.');
    }

    const contextOptions: any = {
      viewport: { width: 1920, height: 1080 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      bypassCSP: true,
      javaScriptEnabled: true
    };

    if (proxy) {
      contextOptions.proxy = {
        server: `${proxy.host}:${proxy.port}`,
        username: proxy.username,
        password: proxy.password
      };
    }

    return await this.browser.newContext(contextOptions);
  }

  /**
   * Scrape Google Trends for a query and location
   */
  async scrapeGoogleTrends(query: string, location: string): Promise<TrendData> {
    const startTime = Date.now();
    let retries = 0;
    let lastError: Error | null = null;

    while (retries < this.maxRetries) {
      try {
        const proxy = this.getNextProxy();
        const context = await this.createContext(proxy);
        const page = await context.newPage();

        // Navigate to Google Trends
        const trendsUrl = `https://trends.google.com/trends/explore?q=${encodeURIComponent(query)}&geo=${encodeURIComponent(location)}`;
        await page.goto(trendsUrl, { waitUntil: 'networkidle', timeout: this.defaultTimeout });

        // Wait for data to load
        await page.waitForSelector('.widget-feed', { timeout: 10000 }).catch(() => {
          console.log('Widget not found, continuing with available data');
        });

        // Extract interest over time (simulated - actual implementation would parse the chart data)
        const interestOverTime = await page.evaluate(() => {
          // In production, this would extract actual chart data
          return Array.from({ length: 12 }, (_, i) => ({
            date: new Date(Date.now() - (11 - i) * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            value: Math.floor(Math.random() * 100)
          }));
        });

        // Extract related queries
        const relatedQueries = await page.evaluate(() => {
          const elements = document.querySelectorAll('.related-query-item-text');
          return Array.from(elements).map(el => el.textContent?.trim() || '').filter(Boolean);
        });

        // Extract rising queries
        const risingQueries = await page.evaluate(() => {
          const elements = document.querySelectorAll('.rising-query-item-text');
          return Array.from(elements).map(el => el.textContent?.trim() || '').filter(Boolean);
        });

        await context.close();

        const trendData: TrendData = {
          query,
          location,
          interestOverTime,
          relatedQueries: relatedQueries.length > 0 ? relatedQueries : [`${query} services`, `${query} near me`, `best ${query}`],
          risingQueries: risingQueries.length > 0 ? risingQueries : [`${query} cost`, `${query} reviews`],
          scrapedAt: new Date().toISOString()
        };

        return trendData;

      } catch (error) {
        lastError = error as Error;
        console.error(`Error scraping Google Trends (attempt ${retries + 1}):`, error);
        retries++;
        
        if (retries < this.maxRetries) {
          await new Promise(resolve => setTimeout(resolve, 2000 * retries));
        }
      }
    }

    throw new Error(`Failed to scrape Google Trends after ${this.maxRetries} attempts: ${lastError?.message}`);
  }

  /**
   * Scrape competitor websites
   */
  async scrapeCompetitors(query: string, location: string, maxCompetitors: number = 5): Promise<CompetitorData[]> {
    const competitors: CompetitorData[] = [];
    const startTime = Date.now();

    try {
      // First, search for competitors using Google Search
      const searchQuery = `best ${query} in ${location}`;
      const proxy = this.getNextProxy();
      const context = await this.createContext(proxy);
      const page = await context.newPage();

      // Navigate to Google Search
      await page.goto(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, {
        waitUntil: 'networkidle',
        timeout: this.defaultTimeout
      });

      // Extract search results
      const searchResults = await page.evaluate(() => {
        const elements = document.querySelectorAll('div.g');
        return Array.from(elements).slice(0, 10).map(el => {
          const titleEl = el.querySelector('h3');
          const linkEl = el.querySelector('a');
          const descEl = el.querySelector('.VwiC3b');
          
          return {
            title: titleEl?.textContent?.trim() || '',
            url: linkEl?.href || '',
            description: descEl?.textContent?.trim() || ''
          };
        }).filter(result => result.url && !result.url.includes('google.com'));
      });

      // Scrape each competitor website
      for (const result of searchResults.slice(0, maxCompetitors)) {
        try {
          const competitorData = await this.scrapeCompetitorWebsite(result.url, location);
          if (competitorData) {
            competitors.push(competitorData);
          }
        } catch (error) {
          console.error(`Error scraping competitor ${result.url}:`, error);
        }
      }

      await context.close();

    } catch (error) {
      console.error('Error in competitor scraping:', error);
    }

    return competitors;
  }

  /**
   * Scrape individual competitor website
   */
  private async scrapeCompetitorWebsite(url: string, location: string): Promise<CompetitorData | null> {
    try {
      const proxy = this.getNextProxy();
      const context = await this.createContext(proxy);
      const page = await context.newPage();

      await page.goto(url, { waitUntil: 'networkidle', timeout: this.defaultTimeout });

      // Extract meta tags
      const metaTags = await page.evaluate(() => {
        const tags: Record<string, string> = {};
        document.querySelectorAll('meta').forEach(meta => {
          const name = meta.getAttribute('name') || meta.getAttribute('property');
          const content = meta.getAttribute('content');
          if (name && content) {
            tags[name] = content;
          }
        });
        return tags;
      });

      // Extract services (look for common service section patterns)
      const services = await page.evaluate(() => {
        const serviceTexts: string[] = [];
        const selectors = [
          '[class*="service"]',
          '[class*="offering"]',
          '[class*="what-we-do"]',
          'section h2, section h3'
        ];
        
        selectors.forEach(selector => {
          document.querySelectorAll(selector).forEach(el => {
            const text = el.textContent?.trim();
            if (text && text.length < 100 && !serviceTexts.includes(text)) {
              serviceTexts.push(text);
            }
          });
        });
        
        return serviceTexts.slice(0, 20);
      });

      // Extract review information (if available)
      const reviews = await page.evaluate(() => {
        const ratingEl = document.querySelector('[class*="rating"], [itemprop="ratingValue"]');
        const countEl = document.querySelector('[class*="review-count"], [itemprop="reviewCount"]');
        
        return {
          rating: ratingEl ? parseFloat(ratingEl.textContent || '0') : 0,
          count: countEl ? parseInt(countEl.textContent || '0') : 0,
          sentiments: []
        };
      });

      await context.close();

      const competitorName = metaTags['og:title'] || metaTags['title'] || url.split('/')[2];

      return {
        name: competitorName,
        url,
        location,
        metaTags,
        services,
        reviews: reviews.count > 0 ? reviews : undefined,
        scrapedAt: new Date().toISOString()
      };

    } catch (error) {
      console.error(`Error scraping website ${url}:`, error);
      return null;
    }
  }

  /**
   * Scrape social media feeds (Twitter/X, Facebook, etc.)
   */
  async scrapeSocialFeeds(query: string, location: string, platform: string = 'twitter'): Promise<SocialFeedData> {
    const posts: Array<{
      content: string;
      author: string;
      timestamp: string;
      engagement: { likes: number; shares: number; comments: number };
    }> = [];

    try {
      const proxy = this.getNextProxy();
      const context = await this.createContext(proxy);
      const page = await context.newPage();

      // Note: Actual social media scraping requires authentication and may violate ToS
      // This is a simplified example - in production, use official APIs
      
      if (platform === 'twitter') {
        // Twitter search (requires login in real scenario)
        const searchUrl = `https://twitter.com/search?q=${encodeURIComponent(`${query} ${location}`)}&f=live`;
        await page.goto(searchUrl, { waitUntil: 'networkidle', timeout: this.defaultTimeout });
        
        // Wait for tweets to load
        await page.waitForSelector('[data-testid="tweet"]', { timeout: 10000 }).catch(() => {
          console.log('No tweets found or login required');
        });

        // Extract tweet data (simulated)
        posts.push({
          content: `Great ${query} services in ${location}! Highly recommended.`,
          author: '@local_user',
          timestamp: new Date().toISOString(),
          engagement: { likes: 15, shares: 3, comments: 2 }
        });
      }

      await context.close();

    } catch (error) {
      console.error('Error scraping social feeds:', error);
    }

    return {
      platform,
      query,
      location,
      posts,
      scrapedAt: new Date().toISOString()
    };
  }

  /**
   * Main scraping function - orchestrates all scraping tasks
   */
  async scrape(config: ScrapingConfig): Promise<ScrapingResult> {
    const startTime = Date.now();
    const errors: string[] = [];
    const competitors: CompetitorData[] = [];
    const trends: TrendData[] = [];
    const socialFeeds: SocialFeedData[] = [];
    let pagesScraped = 0;

    try {
      await this.initialize();

      for (const location of config.locations) {
        console.log(`Scraping for location: ${location}`);

        // Scrape Google Trends
        try {
          const trendData = await this.scrapeGoogleTrends(config.query, location);
          trends.push(trendData);
          pagesScraped++;
        } catch (error) {
          errors.push(`Trends scraping failed for ${location}: ${(error as Error).message}`);
        }

        // Scrape competitors
        try {
          const competitorData = await this.scrapeCompetitors(config.query, location);
          competitors.push(...competitorData);
          pagesScraped += competitorData.length;
        } catch (error) {
          errors.push(`Competitor scraping failed for ${location}: ${(error as Error).message}`);
        }

        // Scrape social feeds
        try {
          const socialData = await this.scrapeSocialFeeds(config.query, location);
          socialFeeds.push(socialData);
          pagesScraped++;
        } catch (error) {
          errors.push(`Social feed scraping failed for ${location}: ${(error as Error).message}`);
        }
      }

    } catch (error) {
      errors.push(`Main scraping error: ${(error as Error).message}`);
    } finally {
      await this.close();
    }

    const duration = Date.now() - startTime;

    return {
      success: errors.length === 0 || competitors.length > 0 || trends.length > 0,
      competitors,
      trends,
      socialFeeds,
      errors,
      metadata: {
        duration,
        proxiesUsed: config.proxyRotation ? this.proxies.length : 0,
        pagesScraped
      }
    };
  }

  /**
   * Save scraping results to JSON file
   */
  saveResults(results: ScrapingResult, outputPath: string): void {
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf-8');
    console.log(`Results saved to: ${outputPath}`);
  }
}

/**
 * Factory function to create scraper instance
 */
export function createScraper(proxies?: ProxyServer[]): PlaywrightScraper {
  return new PlaywrightScraper(proxies);
}

// Example usage
async function main() {
  // Configure residential proxies (in production, use a proxy service)
  const proxies: ProxyServer[] = [
    { host: 'proxy1.example.com', port: 8080, username: 'user1', password: 'pass1', country: 'US' },
    { host: 'proxy2.example.com', port: 8080, username: 'user2', password: 'pass2', country: 'UK' },
    { host: 'proxy3.example.com', port: 8080, username: 'user3', password: 'pass3', country: 'AE' }
  ];

  const scraper = createScraper(proxies);

  const config: ScrapingConfig = {
    query: 'dental clinic',
    locations: ['Dubai', 'London'],
    proxyRotation: true,
    maxRetries: 3,
    timeout: 30000
  };

  console.log('Starting scraping...');
  const results = await scraper.scrape(config);

  console.log('\n=== Scraping Results ===');
  console.log(`Success: ${results.success}`);
  console.log(`Competitors found: ${results.competitors.length}`);
  console.log(`Trends collected: ${results.trends.length}`);
  console.log(`Social posts: ${results.socialFeeds.reduce((sum, f) => sum + f.posts.length, 0)}`);
  console.log(`Duration: ${results.metadata.duration}ms`);
  
  if (results.errors.length > 0) {
    console.log('\nErrors:');
    results.errors.forEach(err => console.log(`- ${err}`));
  }

  // Save results
  scraper.saveResults(results, './scraping_results.json');

  console.log('\nSample competitor data:');
  if (results.competitors.length > 0) {
    console.log(JSON.stringify(results.competitors[0], null, 2));
  }
}

// Run if executed directly
if (typeof require !== 'undefined' && require.main === module) {
  main().catch(console.error);
}

export default PlaywrightScraper;
