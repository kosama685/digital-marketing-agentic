import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const CompetitorIntelligence = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddCompetitor, setShowAddCompetitor] = useState(false);

  const competitors = [
    {
      id: 1,
      username: '@competitor1',
      followers: 45200,
      followerGrowth: 12,
      engagement: 4.8,
      postsPerMonth: 24,
      lastPost: '2 hours ago',
      recentActivity: [
        { type: 'post', content: 'New Reel: 15K views', time: '2 hours ago' },
        { type: 'growth', content: 'Gained 234 followers today', time: 'Today' },
      ],
    },
    {
      id: 2,
      username: '@competitor2',
      followers: 32100,
      followerGrowth: 8,
      engagement: 3.9,
      postsPerMonth: 18,
      lastPost: '5 hours ago',
      recentActivity: [
        { type: 'post', content: 'Posted new carousel', time: '5 hours ago' },
        { type: 'story', content: '3 new stories', time: '1 hour ago' },
      ],
    },
    {
      id: 3,
      username: '@premium_brand',
      followers: 68500,
      followerGrowth: 15,
      engagement: 5.2,
      postsPerMonth: 30,
      lastPost: '30 min ago',
      recentActivity: [
        { type: 'post', content: 'Product launch post', time: '30 min ago' },
        { type: 'ad', content: 'Running sponsored ads', time: 'Active' },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Competitor Intelligence</h1>
          <p className="text-gray-500 dark:text-gray-400">Track and analyze your competitors' performance</p>
        </div>
        <button
          onClick={() => setShowAddCompetitor(true)}
          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          + Add Competitor
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Tracked Competitors</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">5</p>
          <p className="text-sm text-green-500 mt-2">↗ +2 this month</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Your Market Share</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">18%</p>
          <p className="text-sm text-yellow-500 mt-2">3rd position</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Avg Competitor Engagement</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">4.6%</p>
          <p className="text-sm text-green-500 mt-2">You: 5.2% ✓</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Content Gap</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">-2/wk</p>
          <p className="text-sm text-red-500 mt-2">Need more posts</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {['dashboard', 'swot', 'positioning'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                activeTab === tab
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          {/* Competitor Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {competitors.map((comp) => (
              <div key={comp.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {comp.username.charAt(1).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{comp.username}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Last: {comp.lastPost}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Followers</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{(comp.followers / 1000).toFixed(1)}K</p>
                    <p className="text-xs text-green-500">↗ +{comp.followerGrowth}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Engagement</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{comp.engagement}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Posts/Mo</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{comp.postsPerMonth}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-4">
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Recent Activity</p>
                  {comp.recentActivity.map((activity, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-sm mb-2 last:mb-0">
                      <span className="text-purple-500">•</span>
                      <div>
                        <p className="text-gray-900 dark:text-white">{activity.content}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    View Profile
                  </button>
                  <button className="flex-1 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    Compare
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Market Share Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Market Share Analysis</h3>
            <div className="flex items-center justify-center space-x-8">
              {/* Simple pie chart visualization */}
              <div className="relative w-48 h-48">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="20" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#a855f7" strokeWidth="20" strokeDasharray="113 251" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#ec4899" strokeWidth="20" strokeDasharray="88 251" strokeDashoffset="-113" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="20" strokeDasharray="63 251" strokeDashoffset="-201" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="20" strokeDasharray="50 251" strokeDashoffset="-264" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">18%</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Your share</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">@competitor1 (35%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">@competitor2 (25%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">@premium_brand (22%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">You (18%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Comparison */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">30-Day Growth Comparison</h3>
            <div className="h-64 flex items-end justify-around space-x-2">
              {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week, idx) => (
                <div key={week} className="flex-1 flex items-end justify-center space-x-1 h-full">
                  <div className="w-4 bg-purple-500 rounded-t" style={{ height: `${60 + idx * 10}%` }}></div>
                  <div className="w-4 bg-pink-500 rounded-t" style={{ height: `${50 + idx * 8}%` }}></div>
                  <div className="w-4 bg-blue-500 rounded-t" style={{ height: `${70 + idx * 5}%` }}></div>
                  <div className="w-4 bg-green-500 rounded-t" style={{ height: `${45 + idx * 12}%` }}></div>
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">@competitor1</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">@competitor2</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">@premium_brand</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">You</span>
              </div>
            </div>
          </div>

          {/* Content Gap Analysis */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Content Gap Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Your posting frequency</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">3x/week</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Competitors average</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">5x/week</p>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-1">Recommendation</p>
                <p className="text-lg font-bold text-yellow-700 dark:text-yellow-300">+2 posts/week</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SWOT Analysis Tab */}
      {activeTab === 'swot' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SWOT Analysis</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Your Brand vs @competitor1</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Strengths */}
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center">
                  <span className="mr-2">✓</span> STRENGTHS
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Higher engagement rate (5.2% vs 4.8%)</li>
                  <li>• Better video quality</li>
                  <li>• Stronger brand visuals</li>
                  <li>• More authentic community</li>
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center">
                  <span className="mr-2">⚠</span> WEAKNESSES
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Lower posting frequency</li>
                  <li>• Smaller follower base</li>
                  <li>• Limited video content</li>
                  <li>• No Stories highlights</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Opportunities */}
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-3 flex items-center">
                  <span className="mr-2">→</span> OPPORTUNITIES
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• New Reels feature adoption</li>
                  <li>• Trending hashtag #viral2026</li>
                  <li>• Collab opportunity with @influencer</li>
                  <li>• Expand to TikTok</li>
                </ul>
              </div>

              {/* Threats */}
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-3 flex items-center">
                  <span className="mr-2">←</span> THREATS
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Competitor running ads</li>
                  <li>• Algorithm changes</li>
                  <li>• Competitor influencer partnerships</li>
                  <li>• Price war emerging</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Action Items</h4>
              <div className="space-y-2">
                {[
                  'Increase posting to 5x/week',
                  'Create video content strategy',
                  'Set up Story highlights',
                  'Launch Reels campaign',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <input type="checkbox" className="w-4 h-4 text-purple-600 rounded" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-2 mt-6">
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                Save Analysis
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Share Report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Positioning Map Tab */}
      {activeTab === 'positioning' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Market Positioning Map</h3>
            
            {/* Positioning Matrix */}
            <div className="relative h-96 border-l-2 border-b-2 border-gray-300 dark:border-gray-600 mx-8 mb-8">
              {/* Y-axis label */}
              <div className="absolute -left-8 top-1/2 transform -rotate-90 text-sm font-medium text-gray-700 dark:text-gray-300">
                Quality (Low → High)
              </div>
              {/* X-axis label */}
              <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Price (Low → High)
              </div>

              {/* Grid lines */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                <div className="border-r border-t border-gray-200 dark:border-gray-700"></div>
                <div className="border-t border-gray-200 dark:border-gray-700"></div>
                <div className="border-r border-gray-200 dark:border-gray-700"></div>
                <div></div>
              </div>

              {/* Competitor dots */}
              <div className="absolute top-[20%] right-[25%] w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  @premium_brand
                </div>
              </div>
              <div className="absolute top-[40%] right-[60%] w-4 h-4 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  You
                </div>
              </div>
              <div className="absolute top-[55%] right-[40%] w-4 h-4 bg-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  @competitor2
                </div>
              </div>
              <div className="absolute top-[65%] right-[70%] w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  @competitor1
                </div>
              </div>
              <div className="absolute top-[80%] right-[30%] w-4 h-4 bg-gray-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  @budget_option
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">You (Premium-Mid)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">@premium_brand</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">@competitor2</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">@competitor1</span>
              </div>
            </div>

            {/* Analysis */}
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Quadrant Analysis</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Your Position</p>
                  <p className="font-medium text-gray-900 dark:text-white">Premium-Mid (Good position)</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Opportunity</p>
                  <p className="font-medium text-green-600 dark:text-green-400">Move up (quality improvement)</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Threat</p>
                  <p className="font-medium text-red-600 dark:text-red-400">@premium_brand above you</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-2 mt-6">
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                Adjust Axes
              </button>
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                Add Competitors
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Export PNG
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Competitor Modal */}
      {showAddCompetitor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Add Competitor</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Instagram Username</label>
                <input type="text" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white" placeholder="@competitor" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tracking Options</label>
                <div className="space-y-2">
                  {['Follower growth', 'Engagement rate', 'Posting frequency', 'Hashtag usage', 'Top performing posts'].map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-purple-600 rounded" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-2">
              <button onClick={() => setShowAddCompetitor(false)} className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">Cancel</button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Track Competitor</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompetitorIntelligence;
