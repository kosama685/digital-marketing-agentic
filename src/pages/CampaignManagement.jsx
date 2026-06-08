import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const CampaignManagement = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const campaigns = [
    {
      id: 1,
      name: 'Summer Sale 2026',
      status: 'active',
      budget: 3000,
      spent: 1842,
      startDate: 'Jun 1',
      endDate: 'Jun 30',
      reach: 45200,
      clicks: 2341,
      conversions: 187,
      roas: 4.2,
    },
    {
      id: 2,
      name: 'Product Launch - Widget Pro',
      status: 'planning',
      budget: 5000,
      spent: 0,
      startDate: 'Jul 15',
      endDate: 'Aug 15',
      reach: 0,
      clicks: 0,
      conversions: 0,
      roas: 0,
    },
    {
      id: 3,
      name: 'Brand Awareness Q2',
      status: 'completed',
      budget: 4000,
      spent: 3890,
      startDate: 'Apr 1',
      endDate: 'Jun 30',
      reach: 128000,
      clicks: 8420,
      conversions: 542,
      roas: 5.8,
    },
  ];

  const abTests = [
    {
      id: 1,
      name: 'Ad Creative Test',
      variant: 'image',
      status: 'running',
      variantA: { name: 'Summer Theme', impressions: 12400, clicks: 892, conversions: 67 },
      variantB: { name: 'Product Focus', impressions: 11800, clicks: 1024, conversions: 89 },
      winner: null,
      confidence: 87,
    },
    {
      id: 2,
      name: 'Headline Comparison',
      variant: 'headline',
      status: 'completed',
      variantA: { name: 'Shop Now', impressions: 8900, clicks: 445, conversions: 34 },
      variantB: { name: 'Limited Offer', impressions: 9200, clicks: 612, conversions: 58 },
      winner: 'B',
      confidence: 95,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Campaign Management</h1>
          <p className="text-gray-500 dark:text-gray-400">Create, manage, and optimize your marketing campaigns</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          + Create Campaign
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Active Campaigns</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">8</p>
          <p className="text-sm text-green-500 mt-2">↗ 2 new this month</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Total Budget</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">$15,000</p>
          <p className="text-sm text-gray-500 mt-2">Across all campaigns</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Total Spent</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">$8,432</p>
          <p className="text-sm text-yellow-500 mt-2">56% of budget</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Average ROAS</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">4.8x</p>
          <p className="text-sm text-green-500 mt-2">↗ +12% vs last month</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {['overview', 'campaigns', 'ab-tests', 'roi'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                activeTab === tab
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab.replace('-', ' ')}
            </button>
          ))}
        </nav>
      </div>

      {/* Campaign Cards */}
      {activeTab === 'overview' || activeTab === 'campaigns' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{campaign.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{campaign.startDate} - {campaign.endDate}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  campaign.status === 'active' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                  campaign.status === 'planning' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                  'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                }`}>
                  {campaign.status}
                </span>
              </div>

              {/* Budget Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500 dark:text-gray-400">Budget Usage</span>
                  <span className="text-gray-900 dark:text-white">${campaign.spent} / ${campaign.budget}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all"
                    style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                  />
                </div>
              </div>

              {/* Performance Metrics */}
              {campaign.status !== 'planning' && (
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Reach</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{(campaign.reach / 1000).toFixed(1)}K</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Clicks</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{campaign.clicks.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Conversions</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{campaign.conversions}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">ROAS</p>
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400">{campaign.roas}x</p>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-2">
                <button className="flex-1 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  View Details
                </button>
                <button className="flex-1 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  Edit
                </button>
                {campaign.status === 'active' && (
                  <button className="flex-1 px-3 py-2 text-sm bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-colors">
                    Pause
                  </button>
                )}
                {campaign.status === 'planning' && (
                  <button className="flex-1 px-3 py-2 text-sm bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
                    Launch
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {/* A/B Tests Tab */}
      {activeTab === 'ab-tests' && (
        <div className="space-y-6">
          {abTests.map((test) => (
            <div key={test.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{test.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Testing: {test.variant}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    test.status === 'running' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                  }`}>
                    {test.status}
                  </span>
                  {test.winner && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                      Winner: Variant {test.winner}
                    </span>
                  )}
                </div>
              </div>

              {/* Variants Comparison */}
              <div className="grid grid-cols-2 gap-6">
                {/* Variant A */}
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Variant A (Control)</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{test.variantA.name}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Impressions</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{test.variantA.impressions.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Clicks</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{test.variantA.clicks.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Conversions</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{test.variantA.conversions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">CTR</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{((test.variantA.clicks / test.variantA.impressions) * 100).toFixed(2)}%</span>
                    </div>
                  </div>
                </div>

                {/* Variant B */}
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Variant B</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{test.variantB.name}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Impressions</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{test.variantB.impressions.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Clicks</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{test.variantB.clicks.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Conversions</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{test.variantB.conversions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">CTR</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{((test.variantB.clicks / test.variantB.impressions) * 100).toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confidence Level */}
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500 dark:text-gray-400">Statistical Confidence</span>
                  <span className="text-gray-900 dark:text-white">{test.confidence}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${test.confidence >= 95 ? 'bg-green-500' : 'bg-yellow-500'}`}
                    style={{ width: `${test.confidence}%` }}
                  />
                </div>
                {test.confidence >= 95 && !test.winner && (
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2">Ready to declare winner!</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex space-x-2 mt-6">
                <button className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  View Results
                </button>
                {!test.winner && test.confidence >= 95 && (
                  <button className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Declare Winner
                  </button>
                )}
                {test.winner && (
                  <button className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Scale Winner
                  </button>
                )}
              </div>
            </div>
          ))}

          <button className="w-full py-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl text-gray-500 dark:text-gray-400 hover:border-purple-500 hover:text-purple-500 transition-colors">
            + Create New A/B Test
          </button>
        </div>
      )}

      {/* ROI Calculator Tab */}
      {activeTab === 'roi' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ROI Calculator */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Campaign ROI Calculator</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Campaign</label>
                <select className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white">
                  <option>Summer Sale 2026</option>
                  <option>Product Launch - Widget Pro</option>
                  <option>Brand Awareness Q2</option>
                </select>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Investment</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Ad Spend</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">$1,842</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Creative Costs</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">$500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Tool Subscriptions</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">$200</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                    <span className="font-medium text-gray-900 dark:text-white">Total Cost</span>
                    <span className="font-bold text-gray-900 dark:text-white">$2,542</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Returns</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Revenue Generated</span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">$10,680</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">New Customers</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">187</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Avg Order Value</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">$57.11</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Performance Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400">ROAS</p>
                    <p className="text-xl font-bold text-green-600 dark:text-green-400">5.8x</p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400">ROI</p>
                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">320%</p>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400">CPA</p>
                    <p className="text-xl font-bold text-purple-600 dark:text-purple-400">$13.59</p>
                  </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Profit Margin</p>
                    <p className="text-xl font-bold text-orange-600 dark:text-orange-400">68%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-2 mt-6">
              <button className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                Adjust Budget
              </button>
              <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Export Report
              </button>
            </div>
          </div>

          {/* Budget Tracking */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Budget Tracking</h3>

            {campaigns.filter(c => c.status === 'active').map((campaign) => (
              <div key={campaign.id} className="mb-6 last:mb-0">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">{campaign.name}</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ${campaign.budget - campaign.spent} remaining
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                  <div
                    className={`h-3 rounded-full transition-all ${
                      (campaign.spent / campaign.budget) > 0.8 ? 'bg-red-500' :
                      (campaign.spent / campaign.budget) > 0.6 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>${campaign.spent.toLocaleString()} spent</span>
                  <span>${campaign.budget.toLocaleString()} total</span>
                </div>
                <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Days Left</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">15</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Daily Budget</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">$100</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Burn Rate</p>
                      <p className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">$123/day ⚠️</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Create Campaign Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Create New Campaign</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Campaign Name</label>
                <input type="text" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white" placeholder="Enter campaign name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Start Date</label>
                  <input type="date" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">End Date</label>
                  <input type="date" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Budget ($)</label>
                <input type="number" className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white" placeholder="5000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Objective</label>
                <select className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white">
                  <option>Brand Awareness</option>
                  <option>Traffic</option>
                  <option>Conversions</option>
                  <option>Lead Generation</option>
                </select>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-2">
              <button onClick={() => setShowCreateModal(false)} className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">Cancel</button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">Create Campaign</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignManagement;
