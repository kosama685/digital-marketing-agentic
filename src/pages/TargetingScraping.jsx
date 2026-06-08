import React, { useState } from 'react';
import { Search, Download, Upload, Filter, Users, Hash, MapPin, Link, Eye, MessageSquare, Compass, FileText, CheckCircle, XCircle, AlertCircle, Building, Plus } from 'lucide-react';

const TargetingScraping = () => {
  const [activeTab, setActiveTab] = useState('scraper');
  const [scrapingSource, setScrapingSource] = useState('hashtags');
  const [isScraping, setIsScraping] = useState(false);
  const [scrapedUsers, setScrapedUsers] = useState([
    { username: 'fitness_pro', fullName: 'Fitness Pro', followers: 12500, following: 890, posts: 342, bio: 'Fitness coach | Nutrition expert', hasProfilePic: true, hasBio: true, engagementRate: 4.2, lastActive: '2 days ago' },
    { username: 'gym_life', fullName: 'Gym Life', followers: 8900, following: 1200, posts: 156, bio: 'Daily gym motivation', hasProfilePic: true, hasBio: true, engagementRate: 3.8, lastActive: '1 day ago' },
    { username: 'health_guru', fullName: 'Health Guru', followers: 25000, following: 450, posts: 521, bio: 'Wellness & Health Tips', hasProfilePic: true, hasBio: true, engagementRate: 5.1, lastActive: '5 hours ago' },
    { username: 'workout_daily', fullName: 'Daily Workouts', followers: 5600, following: 2100, posts: 89, bio: '', hasProfilePic: true, hasBio: false, engagementRate: 2.9, lastActive: '1 week ago' },
    { username: 'yoga_master', fullName: 'Yoga Master', followers: 18200, following: 320, posts: 412, bio: 'Yoga instructor | Mindfulness', hasProfilePic: true, hasBio: true, engagementRate: 4.7, lastActive: '3 hours ago' },
  ]);

  const scrapingSources = [
    { id: 'hashtags', label: 'Hashtag Posts', icon: Hash, description: 'Extract users from hashtag feeds' },
    { id: 'locations', label: 'Location Posts', icon: MapPin, description: 'Scrape users from location tags' },
    { id: 'competitor-followers', label: 'Competitor Followers', icon: Users, description: 'Get follower lists from competitors' },
    { id: 'competitor-following', label: 'Competitor Following', icon: Users, description: 'Get following lists from competitors' },
    { id: 'post-likers', label: 'Post Likers', icon: Eye, description: 'Extract users who liked specific posts' },
    { id: 'post-commenters', label: 'Post Commenters', icon: MessageSquare, description: 'Get users who commented on posts' },
    { id: 'explore', label: 'Explore Page', icon: Compass, description: 'Scrape trending post users' },
  ];

  const hashtagData = [
    { tag: '#fitness', posts: '450M', recent24h: '125K', engagement: '3.2%', competition: 'High', trend: '+12%' },
    { tag: '#fitnessmotivation', posts: '85M', recent24h: '32K', engagement: '4.1%', competition: 'Medium', trend: '+8%' },
    { tag: '#fitnessjourney', posts: '42M', recent24h: '18K', engagement: '4.5%', competition: 'Medium', trend: '+15%' },
    { tag: '#fitnesslife', posts: '38M', recent24h: '15K', engagement: '3.8%', competition: 'Medium', trend: '+5%' },
    { tag: '#gym', posts: '320M', recent24h: '95K', engagement: '2.9%', competition: 'High', trend: '+3%' },
  ];

  const competitors = [
    { username: '@competitor1', followers: '125K', growth: '+2.3%', engagement: '4.2%', posts: 342, avgLikes: 5200, avgComments: 180 },
    { username: '@competitor2', followers: '89K', growth: '+1.8%', engagement: '3.9%', posts: 256, avgLikes: 3400, avgComments: 120 },
    { username: '@competitor3', followers: '210K', growth: '+3.1%', engagement: '5.1%', posts: 512, avgLikes: 10500, avgComments: 340 },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Targeting & Scraping Engine</h1>
        <p style={styles.subtitle}>Advanced user extraction and intelligence tools</p>
      </div>

      {/* Tab Navigation */}
      <div style={styles.tabs}>
        <button
          onClick={() => setActiveTab('scraper')}
          style={{
            ...styles.tab,
            ...(activeTab === 'scraper' ? styles.activeTab : {})
          }}
        >
          <Users size={18} />
          User Scraper
        </button>
        <button
          onClick={() => setActiveTab('hashtags')}
          style={{
            ...styles.tab,
            ...(activeTab === 'hashtags' ? styles.activeTab : {})
          }}
        >
          <Hash size={18} />
          Hashtag Research
        </button>
        <button
          onClick={() => setActiveTab('competitor')}
          style={{
            ...styles.tab,
            ...(activeTab === 'competitor' ? styles.activeTab : {})
          }}
        >
          <Building size={18} />
          Competitor Intelligence
        </button>
      </div>

      {/* User Scraper Tab */}
      {activeTab === 'scraper' && (
        <div style={styles.content}>
          <div style={styles.twoColumn}>
            {/* Left Panel - Configuration */}
            <div style={styles.leftPanel}>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Scraping Sources</h3>
                <div style={styles.sourceGrid}>
                  {scrapingSources.map((source) => {
                    const Icon = source.icon;
                    return (
                      <button
                        key={source.id}
                        onClick={() => setScrapingSource(source.id)}
                        style={{
                          ...styles.sourceButton,
                          ...(scrapingSource === source.id ? styles.activeSource : {})
                        }}
                      >
                        <Icon size={24} color={scrapingSource === source.id ? '#8b5cf6' : '#6b7280'} />
                        <span style={styles.sourceLabel}>{source.label}</span>
                        <span style={styles.sourceDesc}>{source.description}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Input Parameters</h3>
                {scrapingSource === 'hashtags' && (
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Hashtags (comma separated)</label>
                    <input
                      type="text"
                      placeholder="#fitness, #gym, #health"
                      style={styles.input}
                    />
                  </div>
                )}
                {scrapingSource === 'locations' && (
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Location Search</label>
                    <input
                      type="text"
                      placeholder="Los Angeles, CA"
                      style={styles.input}
                    />
                  </div>
                )}
                {(scrapingSource === 'competitor-followers' || scrapingSource === 'competitor-following') && (
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Competitor Accounts (@username)</label>
                    <input
                      type="text"
                      placeholder="@competitor1, @competitor2"
                      style={styles.input}
                    />
                  </div>
                )}
                {(scrapingSource === 'post-likers' || scrapingSource === 'post-commenters') && (
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Post URL</label>
                    <input
                      type="text"
                      placeholder="https://instagram.com/p/..."
                      style={styles.input}
                    />
                  </div>
                )}
              </div>

              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Extraction Filters</h3>
                <div style={styles.filterGrid}>
                  <div style={styles.filterRow}>
                    <div style={styles.filterInput}>
                      <label style={styles.labelSmall}>Min Followers</label>
                      <input type="number" defaultValue={100} style={styles.smallInput} />
                    </div>
                    <div style={styles.filterInput}>
                      <label style={styles.labelSmall}>Max Followers</label>
                      <input type="number" defaultValue={50000} style={styles.smallInput} />
                    </div>
                  </div>
                  <div style={styles.filterRow}>
                    <div style={styles.filterInput}>
                      <label style={styles.labelSmall}>Min Posts</label>
                      <input type="number" defaultValue={10} style={styles.smallInput} />
                    </div>
                    <div style={styles.filterInput}>
                      <label style={styles.labelSmall}>Last Active (days)</label>
                      <input type="number" defaultValue={30} style={styles.smallInput} />
                    </div>
                  </div>
                </div>
                <div style={styles.checkboxGroup}>
                  <label style={styles.checkbox}>
                    <input type="checkbox" defaultChecked />
                    <span>Has profile picture</span>
                  </label>
                  <label style={styles.checkbox}>
                    <input type="checkbox" defaultChecked />
                    <span>Has bio</span>
                  </label>
                  <label style={styles.checkbox}>
                    <input type="checkbox" />
                    <span>Has external link</span>
                  </label>
                  <label style={styles.checkbox}>
                    <input type="checkbox" defaultChecked />
                    <span>Personal accounts</span>
                  </label>
                  <label style={styles.checkbox}>
                    <input type="checkbox" defaultChecked />
                    <span>Business accounts</span>
                  </label>
                  <label style={styles.checkbox}>
                    <input type="checkbox" defaultChecked />
                    <span>Creator accounts</span>
                  </label>
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Language</label>
                  <select style={styles.select}>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                    <option>All Languages</option>
                  </select>
                </div>
              </div>

              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Scraping Limits</h3>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Users per hour (max 500)</label>
                  <input type="range" min={50} max={500} defaultValue={200} style={styles.range} />
                  <div style={styles.rangeValue}>200 users/hour</div>
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Delay between requests (seconds)</label>
                  <div style={styles.rangeRow}>
                    <input type="number" defaultValue={2} style={styles.smallInput} />
                    <span style={styles.rangeSeparator}>-</span>
                    <input type="number" defaultValue={5} style={styles.smallInput} />
                  </div>
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Save to List</label>
                  <input type="text" placeholder="New Target List" style={styles.input} />
                </div>
              </div>

              <div style={styles.actionButtons}>
                <button
                  className="btn-primary"
                  onClick={() => setIsScraping(!isScraping)}
                  style={styles.btnFull}
                >
                  {isScraping ? '⏹ Stop Scraping' : '▶ Start Scraping'}
                </button>
                <button className="btn-secondary" style={styles.btnHalf}>
                  <Eye size={16} /> Preview
                </button>
                <button className="btn-secondary" style={styles.btnHalf}>
                  <Download size={16} /> Export CSV
                </button>
              </div>
            </div>

            {/* Right Panel - Results */}
            <div style={styles.rightPanel}>
              <div style={styles.card}>
                <div style={styles.resultsHeader}>
                  <h3 style={styles.cardTitle}>Extracted Users</h3>
                  <div style={styles.resultsStats}>
                    <span style={styles.stat}><CheckCircle size={16} color="#10b981" /> {scrapedUsers.length} found</span>
                    <span style={styles.stat}><AlertCircle size={16} color="#f59e0b" /> 0 errors</span>
                  </div>
                </div>

                <div style={styles.tableContainer}>
                  <table style={styles.table}>
                    <thead>
                      <tr>
                        <th style={styles.th}>Username</th>
                        <th style={styles.th}>Followers</th>
                        <th style={styles.th}>Posts</th>
                        <th style={styles.th}>Engagement</th>
                        <th style={styles.th}>Last Active</th>
                        <th style={styles.th}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scrapedUsers.map((user, index) => (
                        <tr key={index} style={styles.tr}>
                          <td style={styles.td}>
                            <div style={styles.userCell}>
                              <div style={styles.avatar}>{user.username[0].toUpperCase()}</div>
                              <div>
                                <div style={styles.username}>{user.username}</div>
                                <div style={styles.fullName}>{user.fullName}</div>
                              </div>
                            </div>
                          </td>
                          <td style={styles.td}>{user.followers.toLocaleString()}</td>
                          <td style={styles.td}>{user.posts}</td>
                          <td style={styles.td}>
                            <span style={{
                              ...styles.engagementBadge,
                              background: user.engagementRate >= 4 ? '#d1fae5' : '#fef3c7',
                              color: user.engagementRate >= 4 ? '#065f46' : '#92400e'
                            }}>
                              {user.engagementRate}%
                            </span>
                          </td>
                          <td style={styles.td}>{user.lastActive}</td>
                          <td style={styles.td}>
                            {user.hasBio && user.hasProfilePic ? (
                              <CheckCircle size={18} color="#10b981" />
                            ) : (
                              <AlertCircle size={18} color="#f59e0b" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={styles.dataPoints}>
                  <h4 style={styles.subTitle}>Data Points Collected:</h4>
                  <div style={styles.badgeGrid}>
                    <span style={styles.badge}>✓ Username</span>
                    <span style={styles.badge}>✓ Full name</span>
                    <span style={styles.badge}>✓ Bio text</span>
                    <span style={styles.badge}>✓ Follower count</span>
                    <span style={styles.badge}>✓ Following count</span>
                    <span style={styles.badge}>✓ Post count</span>
                    <span style={styles.badge}>✓ Profile picture URL</span>
                    <span style={styles.badge}>✓ External link</span>
                    <span style={styles.badge}>✓ Contact info</span>
                    <span style={styles.badge}>✓ Recent posts</span>
                    <span style={styles.badge}>✓ Engagement rate</span>
                    <span style={styles.badge}>✓ Account category</span>
                    <span style={styles.badge}>✓ Verification status</span>
                    <span style={styles.badge}>✓ Private/public status</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hashtag Research Tab */}
      {activeTab === 'hashtags' && (
        <div style={styles.content}>
          <div style={styles.twoColumn}>
            <div style={styles.leftPanel}>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Hashtag Analyzer</h3>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Search Hashtag</label>
                  <div style={styles.searchRow}>
                    <input
                      type="text"
                      defaultValue="#fitness"
                      style={{ ...styles.input, flex: 1 }}
                    />
                    <button className="btn-primary" style={styles.searchBtn}>
                      <Search size={18} /> Analyze
                    </button>
                  </div>
                </div>

                <div style={styles.hashtagMetrics}>
                  <div style={styles.metricCard}>
                    <div style={styles.metricValue}>450M</div>
                    <div style={styles.metricLabel}>Total Posts</div>
                  </div>
                  <div style={styles.metricCard}>
                    <div style={styles.metricValue}>125K</div>
                    <div style={styles.metricLabel}>Recent (24h)</div>
                  </div>
                  <div style={styles.metricCard}>
                    <div style={styles.metricValue}>3.2%</div>
                    <div style={styles.metricLabel}>Avg Engagement</div>
                  </div>
                  <div style={styles.metricCard}>
                    <div style={{ ...styles.metricValue, color: '#f59e0b' }}>High</div>
                    <div style={styles.metricLabel}>Competition</div>
                  </div>
                  <div style={styles.metricCard}>
                    <div style={{ ...styles.metricValue, color: '#10b981' }}>+12%</div>
                    <div style={styles.metricLabel}>Growth Trend</div>
                  </div>
                </div>

                <div style={styles.analysisSection}>
                  <h4 style={styles.subTitle}>Top Posting Time</h4>
                  <p style={styles.analysisText}>6:00 PM - 9:00 PM</p>
                </div>
                <div style={styles.analysisSection}>
                  <h4 style={styles.subTitle}>Avg Likes on Top Posts</h4>
                  <p style={styles.analysisText}>2,450 likes</p>
                </div>
                <div style={styles.analysisSection}>
                  <h4 style={styles.subTitle}>Best Content Type</h4>
                  <p style={styles.analysisText}>Reels (highest engagement)</p>
                </div>
              </div>

              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Related Hashtags</h3>
                <div style={styles.hashtagList}>
                  {hashtagData.slice(1).map((item, index) => (
                    <div key={index} style={styles.hashtagItem}>
                      <span style={styles.hashtagName}>{item.tag}</span>
                      <span style={styles.hashtagPosts}>{item.posts}</span>
                      <button className="btn-sm" style={styles.addBtn}>+</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={styles.rightPanel}>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Hashtag Strategy Builder</h3>
                <p style={styles.strategyDesc}>Create balanced hashtag sets for optimal reach</p>

                <div style={styles.strategyBuilder}>
                  <div style={styles.strategySection}>
                    <div style={styles.strategyHeader}>
                      <span style={styles.strategyLabel}>High Competition (1M+ posts)</span>
                      <span style={styles.strategyCount}>0/10</span>
                    </div>
                    <div style={styles.hashtagInputArea}>
                      <input type="text" placeholder="Add high competition hashtags..." style={styles.hashtagInput} />
                    </div>
                  </div>

                  <div style={styles.strategySection}>
                    <div style={styles.strategyHeader}>
                      <span style={styles.strategyLabel}>Medium Competition (100K-1M posts)</span>
                      <span style={styles.strategyCount}>0/10</span>
                    </div>
                    <div style={styles.hashtagInputArea}>
                      <input type="text" placeholder="Add medium competition hashtags..." style={styles.hashtagInput} />
                    </div>
                  </div>

                  <div style={styles.strategySection}>
                    <div style={styles.strategyHeader}>
                      <span style={styles.strategyLabel}>Low Competition (&lt;100K posts)</span>
                      <span style={styles.strategyCount}>0/10</span>
                    </div>
                    <div style={styles.hashtagInputArea}>
                      <input type="text" placeholder="Add low competition hashtags..." style={styles.hashtagInput} />
                    </div>
                  </div>
                </div>

                <div style={styles.strategyTips}>
                  <h4 style={styles.subTitle}>Strategy Tips:</h4>
                  <ul style={styles.tipList}>
                    <li>Mix hashtag sizes for balanced reach</li>
                    <li>Rotate hashtags to avoid shadowban</li>
                    <li>Use niche-specific tags for targeted audience</li>
                    <li>Save multiple sets for different content types</li>
                  </ul>
                </div>

                <div style={styles.actionButtons}>
                  <button className="btn-primary" style={styles.btnFull}>Save Set</button>
                  <button className="btn-secondary" style={styles.btnHalf}>Export</button>
                  <button className="btn-secondary" style={styles.btnHalf}>Schedule</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Competitor Intelligence Tab */}
      {activeTab === 'competitor' && (
        <div style={styles.content}>
          <div style={styles.card}>
            <div style={styles.competitorHeader}>
              <h3 style={styles.cardTitle}>Tracked Competitors</h3>
              <button className="btn-primary">
                <Plus size={18} /> Add Competitor
              </button>
            </div>

            <div style={styles.competitorGrid}>
              {competitors.map((competitor, index) => (
                <div key={index} style={styles.competitorCard}>
                  <div style={styles.competitorHeaderRow}>
                    <div style={styles.competitorAvatar}>{competitor.username[1].toUpperCase()}</div>
                    <div style={styles.competitorInfo}>
                      <div style={styles.competitorName}>{competitor.username}</div>
                      <div style={styles.competitorFollowers}>{competitor.followers} followers</div>
                    </div>
                    <button style={styles.moreBtn}>⋮</button>
                  </div>

                  <div style={styles.competitorMetrics}>
                    <div style={styles.compMetric}>
                      <div style={styles.compMetricValue}>{competitor.growth}</div>
                      <div style={styles.compMetricLabel}>Growth</div>
                    </div>
                    <div style={styles.compMetric}>
                      <div style={styles.compMetricValue}>{competitor.engagement}</div>
                      <div style={styles.compMetricLabel}>Engagement</div>
                    </div>
                    <div style={styles.compMetric}>
                      <div style={styles.compMetricValue}>{competitor.posts}</div>
                      <div style={styles.compMetricLabel}>Posts</div>
                    </div>
                  </div>

                  <div style={styles.competitorStats}>
                    <div style={styles.statRow}>
                      <span>Avg Likes:</span>
                      <strong>{competitor.avgLikes.toLocaleString()}</strong>
                    </div>
                    <div style={styles.statRow}>
                      <span>Avg Comments:</span>
                      <strong>{competitor.avgComments.toLocaleString()}</strong>
                    </div>
                  </div>

                  <div style={styles.competitorActions}>
                    <button className="btn-sm btn-secondary" style={styles.compBtn}>View Analysis</button>
                    <button className="btn-sm btn-secondary" style={styles.compBtn}>Export Report</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.twoColumn}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Data Extraction Options</h3>
              <div style={styles.checkboxGroup}>
                <label style={styles.checkbox}>
                  <input type="checkbox" defaultChecked />
                  <span>All posts from last 90 days</span>
                </label>
                <label style={styles.checkbox}>
                  <input type="checkbox" defaultChecked />
                  <span>Caption text & hashtags</span>
                </label>
                <label style={styles.checkbox}>
                  <input type="checkbox" defaultChecked />
                  <span>Like/comment counts</span>
                </label>
                <label style={styles.checkbox}>
                  <input type="checkbox" defaultChecked />
                  <span>Post timestamps</span>
                </label>
                <label style={styles.checkbox}>
                  <input type="checkbox" />
                  <span>Media URLs</span>
                </label>
                <label style={styles.checkbox}>
                  <input type="checkbox" />
                  <span>Story highlights</span>
                </label>
              </div>
              <button className="btn-primary" style={styles.btnFull}>Run Analysis</button>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Analysis Dashboard Preview</h3>
              <div style={styles.analysisPreview}>
                <div style={styles.previewChart}>
                  <div style={styles.chartPlaceholder}>Follower Growth Comparison Chart</div>
                </div>
                <div style={styles.previewInsights}>
                  <h4 style={styles.subTitle}>Key Insights:</h4>
                  <ul style={styles.insightList}>
                    <li>@competitor3 posts most at 7 PM</li>
                    <li>Reels get 3x more engagement than photos</li>
                    <li>Top hashtags: #fitness #workout #gym</li>
                    <li>Content gap: No tutorial videos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1600px',
    margin: '0 auto'
  },
  header: {
    marginBottom: '24px'
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '8px'
  },
  subtitle: {
    fontSize: '14px',
    color: 'var(--text-secondary)'
  },
  tabs: {
    display: 'flex',
    gap: '8px',
    marginBottom: '24px',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '0'
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    background: 'transparent',
    border: 'none',
    borderBottom: '2px solid transparent',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s'
  },
  activeTab: {
    color: 'var(--primary-color)',
    borderBottomColor: 'var(--primary-color)'
  },
  content: {
    background: 'var(--bg-primary)',
    borderRadius: '12px',
    padding: '24px'
  },
  twoColumn: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px'
  },
  leftPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  rightPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  card: {
    background: 'var(--bg-secondary)',
    borderRadius: '10px',
    padding: '20px',
    border: '1px solid var(--border-color)'
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: 'var(--text-primary)',
    marginBottom: '16px'
  },
  subTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--text-primary)',
    marginBottom: '12px'
  },
  sourceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px'
  },
  sourceButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    padding: '16px',
    background: 'var(--bg-tertiary)',
    border: '2px solid transparent',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  activeSource: {
    borderColor: 'var(--primary-color)',
    background: 'rgba(139, 92, 246, 0.1)'
  },
  sourceLabel: {
    fontSize: '13px',
    fontWeight: '600',
    color: 'var(--text-primary)'
  },
  sourceDesc: {
    fontSize: '11px',
    color: 'var(--text-secondary)',
    textAlign: 'center'
  },
  inputGroup: {
    marginBottom: '16px'
  },
  label: {
    display: 'block',
    fontSize: '13px',
    fontWeight: '500',
    color: 'var(--text-primary)',
    marginBottom: '6px'
  },
  labelSmall: {
    fontSize: '12px',
    color: 'var(--text-secondary)',
    marginBottom: '4px'
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    color: 'var(--text-primary)',
    fontSize: '14px'
  },
  smallInput: {
    width: '100%',
    padding: '8px',
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
    borderRadius: '6px',
    color: 'var(--text-primary)',
    fontSize: '13px'
  },
  select: {
    width: '100%',
    padding: '10px 12px',
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    color: 'var(--text-primary)',
    fontSize: '14px'
  },
  filterGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginBottom: '16px'
  },
  filterRow: {
    display: 'flex',
    gap: '12px'
  },
  filterInput: {
    flex: 1
  },
  checkboxGroup: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginBottom: '16px'
  },
  checkbox: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    color: 'var(--text-primary)',
    cursor: 'pointer'
  },
  range: {
    width: '100%',
    marginBottom: '8px'
  },
  rangeValue: {
    fontSize: '13px',
    color: 'var(--text-secondary)'
  },
  rangeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  rangeSeparator: {
    color: 'var(--text-secondary)'
  },
  actionButtons: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px'
  },
  btnFull: {
    gridColumn: '1 / -1'
  },
  btnHalf: {},
  resultsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  resultsStats: {
    display: 'flex',
    gap: '16px'
  },
  stat: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    color: 'var(--text-secondary)'
  },
  tableContainer: {
    overflowX: 'auto'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  th: {
    textAlign: 'left',
    padding: '12px',
    fontSize: '12px',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    borderTop: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)'
  },
  tr: {
    borderBottom: '1px solid var(--border-color)'
  },
  td: {
    padding: '12px',
    fontSize: '13px',
    color: 'var(--text-primary)'
  },
  userCell: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  avatar: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: 'var(--primary-color)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: '600'
  },
  username: {
    fontWeight: '600',
    color: 'var(--text-primary)'
  },
  fullName: {
    fontSize: '12px',
    color: 'var(--text-secondary)'
  },
  engagementBadge: {
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '600'
  },
  dataPoints: {
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: '1px solid var(--border-color)'
  },
  badgeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '8px'
  },
  badge: {
    display: 'inline-block',
    padding: '6px 10px',
    background: 'var(--bg-tertiary)',
    borderRadius: '6px',
    fontSize: '12px',
    color: 'var(--text-secondary)'
  },
  hashtagMetrics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '12px',
    marginBottom: '20px'
  },
  metricCard: {
    padding: '16px',
    background: 'var(--bg-tertiary)',
    borderRadius: '8px',
    textAlign: 'center'
  },
  metricValue: {
    fontSize: '20px',
    fontWeight: '700',
    color: 'var(--primary-color)',
    marginBottom: '4px'
  },
  metricLabel: {
    fontSize: '11px',
    color: 'var(--text-secondary)'
  },
  analysisSection: {
    marginBottom: '16px'
  },
  analysisText: {
    fontSize: '14px',
    color: 'var(--text-primary)'
  },
  hashtagList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  hashtagItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px',
    background: 'var(--bg-tertiary)',
    borderRadius: '8px'
  },
  hashtagName: {
    flex: 1,
    fontSize: '14px',
    color: 'var(--text-primary)'
  },
  hashtagPosts: {
    fontSize: '12px',
    color: 'var(--text-secondary)'
  },
  addBtn: {
    padding: '4px 10px'
  },
  strategyDesc: {
    fontSize: '13px',
    color: 'var(--text-secondary)',
    marginBottom: '16px'
  },
  strategyBuilder: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '20px'
  },
  strategySection: {
    padding: '14px',
    background: 'var(--bg-tertiary)',
    borderRadius: '8px'
  },
  strategyHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px'
  },
  strategyLabel: {
    fontSize: '13px',
    fontWeight: '600',
    color: 'var(--text-primary)'
  },
  strategyCount: {
    fontSize: '12px',
    color: 'var(--text-secondary)'
  },
  hashtagInputArea: {
    width: '100%'
  },
  hashtagInput: {
    width: '100%',
    padding: '10px',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    borderRadius: '6px',
    color: 'var(--text-primary)',
    fontSize: '13px'
  },
  strategyTips: {
    padding: '14px',
    background: 'rgba(139, 92, 246, 0.1)',
    borderRadius: '8px',
    marginBottom: '20px'
  },
  tipList: {
    paddingLeft: '20px',
    fontSize: '13px',
    color: 'var(--text-secondary)',
    lineHeight: '1.8'
  },
  searchRow: {
    display: 'flex',
    gap: '10px'
  },
  searchBtn: {
    padding: '10px 20px'
  },
  competitorHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  competitorGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginBottom: '24px'
  },
  competitorCard: {
    padding: '16px',
    background: 'var(--bg-tertiary)',
    borderRadius: '10px',
    border: '1px solid var(--border-color)'
  },
  competitorHeaderRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px'
  },
  competitorAvatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'var(--primary-color)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: '600'
  },
  competitorInfo: {
    flex: 1
  },
  competitorName: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--text-primary)'
  },
  competitorFollowers: {
    fontSize: '12px',
    color: 'var(--text-secondary)'
  },
  moreBtn: {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: 'var(--text-secondary)'
  },
  competitorMetrics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '8px',
    marginBottom: '16px'
  },
  compMetric: {
    textAlign: 'center',
    padding: '10px',
    background: 'var(--bg-secondary)',
    borderRadius: '6px'
  },
  compMetricValue: {
    fontSize: '16px',
    fontWeight: '700',
    color: 'var(--primary-color)',
    marginBottom: '4px'
  },
  compMetricLabel: {
    fontSize: '10px',
    color: 'var(--text-secondary)'
  },
  competitorStats: {
    marginBottom: '16px'
  },
  statRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    fontSize: '13px',
    color: 'var(--text-secondary)',
    borderBottom: '1px solid var(--border-color)'
  },
  competitorActions: {
    display: 'flex',
    gap: '8px'
  },
  compBtn: {
    flex: 1
  },
  analysisPreview: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  previewChart: {
    height: '200px',
    background: 'var(--bg-tertiary)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  chartPlaceholder: {
    color: 'var(--text-secondary)',
    fontSize: '14px'
  },
  previewInsights: {
    padding: '14px',
    background: 'var(--bg-tertiary)',
    borderRadius: '8px'
  },
  insightList: {
    paddingLeft: '20px',
    fontSize: '13px',
    color: 'var(--text-secondary)',
    lineHeight: '1.8'
  }
};

export default TargetingScraping;
