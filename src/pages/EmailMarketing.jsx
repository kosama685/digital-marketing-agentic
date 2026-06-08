import React, { useState } from 'react';
import '../styles/index.css';

const EmailMarketing = () => {
  const [activeTab, setActiveTab] = useState('campaigns');
  
  const campaigns = [
    { id: 1, name: 'June Newsletter', status: 'Active', sent: 8432, opens: '42%', clicks: '12%', revenue: '$4,250' },
    { id: 2, name: 'Summer Sale Promo', status: 'Scheduled', sent: 0, opens: '-', clicks: '-', revenue: '-' },
    { id: 3, name: 'Welcome Series', status: 'Active', sent: 1247, opens: '68%', clicks: '24%', revenue: '$8,920' },
    { id: 4, name: 'Abandoned Cart', status: 'Active', sent: 534, opens: '51%', clicks: '18%', revenue: '$3,180' },
  ];

  const segments = [
    { name: 'All Subscribers', count: 8432, description: 'Complete email list' },
    { name: 'Active Customers', count: 3245, description: 'Purchased in last 90 days' },
    { name: 'New Subscribers', count: 892, description: 'Joined last 30 days' },
    { name: 'VIP Customers', count: 234, description: 'Spent >$1000 lifetime' },
    { name: 'Inactive', count: 1567, description: 'No opens in 90 days' },
  ];

  const workflows = [
    { name: 'Welcome Series', trigger: 'New subscriber', emails: 3, active: 892, status: 'Active' },
    { name: 'Abandoned Cart', trigger: 'Cart abandoned', emails: 2, active: 234, status: 'Active' },
    { name: 'Post-Purchase Follow-up', trigger: 'Order completed', emails: 2, active: 1567, status: 'Active' },
    { name: 'Re-engagement', trigger: 'No opens in 60 days', emails: 3, active: 456, status: 'Paused' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>📧 Email Marketing Suite</h1>
        <button className="btn btn-primary">+ New Campaign</button>
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'campaigns' ? 'active' : ''}`}
          onClick={() => setActiveTab('campaigns')}
        >
          Campaigns
        </button>
        <button 
          className={`tab ${activeTab === 'builder' ? 'active' : ''}`}
          onClick={() => setActiveTab('builder')}
        >
          Email Builder
        </button>
        <button 
          className={`tab ${activeTab === 'audience' ? 'active' : ''}`}
          onClick={() => setActiveTab('audience')}
        >
          Audience
        </button>
        <button 
          className={`tab ${activeTab === 'automation' ? 'active' : ''}`}
          onClick={() => setActiveTab('automation')}
        >
          Automation
        </button>
        <button 
          className={`tab ${activeTab === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          Analytics
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'campaigns' && (
          <div className="campaigns-dashboard">
            <div className="campaign-stats">
              <div className="stat-card">
                <h3>Active Campaigns</h3>
                <p className="stat-value">8</p>
              </div>
              <div className="stat-card">
                <h3>Total Budget</h3>
                <p className="stat-value">$15,000</p>
              </div>
              <div className="stat-card">
                <h3>Spent</h3>
                <p className="stat-value">$8,432</p>
                <small>56% of budget</small>
              </div>
              <div className="stat-card">
                <h3>Total Revenue</h3>
                <p className="stat-value success">$42,580</p>
                <small>ROAS: 5.0x</small>
              </div>
            </div>

            <div className="campaigns-list">
              <h2>All Campaigns</h2>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Campaign Name</th>
                    <th>Status</th>
                    <th>Sent</th>
                    <th>Open Rate</th>
                    <th>Click Rate</th>
                    <th>Revenue</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map(campaign => (
                    <tr key={campaign.id}>
                      <td>{campaign.name}</td>
                      <td>
                        <span className={`status-badge ${campaign.status.toLowerCase()}`}>
                          {campaign.status}
                        </span>
                      </td>
                      <td>{campaign.sent.toLocaleString()}</td>
                      <td>{campaign.opens}</td>
                      <td>{campaign.clicks}</td>
                      <td>{campaign.revenue}</td>
                      <td>
                        <button className="btn-icon">Edit</button>
                        <button className="btn-icon">View</button>
                        {campaign.status === 'Active' && <button className="btn-icon">Pause</button>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'builder' && (
          <div className="email-builder">
            <div className="builder-header">
              <h2>✉️ Email Campaign Creator</h2>
              <div className="builder-actions">
                <button className="btn btn-secondary">Save Draft</button>
                <button className="btn btn-secondary">Send Test</button>
                <button className="btn btn-primary">Schedule</button>
              </div>
            </div>

            <div className="builder-config">
              <div className="form-group">
                <label>Campaign Name</label>
                <input type="text" placeholder="e.g., June Newsletter" className="input-full" />
              </div>

              <div className="template-selector">
                <h3>Select Template</h3>
                <div className="template-grid">
                  <div className="template-card selected">
                    <div className="template-preview">📰</div>
                    <p>Newsletter</p>
                  </div>
                  <div className="template-card">
                    <div className="template-preview">🏷️</div>
                    <p>Promotion</p>
                  </div>
                  <div className="template-card">
                    <div className="template-preview">👋</div>
                    <p>Welcome Series</p>
                  </div>
                  <div className="template-card">
                    <div className="template-preview">🚀</div>
                    <p>Product Launch</p>
                  </div>
                  <div className="template-card">
                    <div className="template-preview">📄</div>
                    <p>Blank Canvas</p>
                  </div>
                  <div className="template-card">
                    <div className="template-preview">&lt;/&gt;</div>
                    <p>Custom HTML</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="builder-workspace">
              <div className="content-blocks-panel">
                <h3>Content Blocks</h3>
                <p className="hint">Drag & drop to email</p>
                <div className="blocks-list">
                  <div className="block-item">📝 Text Block</div>
                  <div className="block-item">🖼️ Image</div>
                  <div className="block-item">🔘 Button</div>
                  <div className="block-item">➖ Divider</div>
                  <div className="block-item">⬜ Spacer</div>
                  <div className="block-item">🎥 Video</div>
                  <div className="block-item">📱 Social Links</div>
                  <div className="block-item">⏱️ Countdown</div>
                  <div className="block-item">📊 Product Grid</div>
                  <div className="block-item">📍 Location</div>
                </div>
              </div>

              <div className="email-canvas">
                <div className="email-preview">
                  <div className="email-block header">
                    <h3>[Your Logo Here]</h3>
                  </div>
                  <div className="email-block hero">
                    <div className="placeholder-image">Hero Image</div>
                  </div>
                  <div className="email-block text">
                    <p>Welcome to our newsletter! This is where your content goes...</p>
                  </div>
                  <div className="email-block button">
                    <button className="cta-button">Shop Now</button>
                  </div>
                  <div className="email-block footer">
                    <p>© 2026 Your Company | <a href="#">Unsubscribe</a></p>
                  </div>
                </div>
              </div>

              <div className="email-settings">
                <h3>Email Settings</h3>
                <div className="form-group">
                  <label>Subject Line</label>
                  <input type="text" placeholder="🎉 Exclusive Offer Inside!" className="input-full" />
                </div>
                <div className="form-group">
                  <label>Preview Text</label>
                  <input type="text" placeholder="Don't miss out on this amazing deal..." className="input-full" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>From Name</label>
                    <input type="text" placeholder="Your Name" className="input-full" />
                  </div>
                  <div className="form-group">
                    <label>From Email</label>
                    <input type="email" placeholder="hello@you.com" className="input-full" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Reply-To Email</label>
                  <input type="email" placeholder="support@you.com" className="input-full" />
                </div>

                <div className="personalization-options">
                  <h4>Personalization Tags</h4>
                  <div className="tags-list">
                    <span className="tag">{{first_name}}</span>
                    <span className="tag">{{last_name}}</span>
                    <span className="tag">{{company}}</span>
                    <span className="tag">{{product_recommendation}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'audience' && (
          <div className="audience-manager">
            <div className="audience-header">
              <h2>👥 Audience Segments</h2>
              <div className="audience-actions">
                <button className="btn btn-secondary">Import CSV</button>
                <button className="btn btn-secondary">Export List</button>
                <button className="btn btn-primary">Create Segment</button>
              </div>
            </div>

            <div className="total-subscribers">
              <h3>Total Subscribers: 8,432</h3>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '84%' }}></div>
              </div>
            </div>

            <div className="segments-grid">
              {segments.map((segment, index) => (
                <div key={index} className="segment-card">
                  <h3>{segment.name}</h3>
                  <p className="segment-count">{segment.count.toLocaleString()} subscribers</p>
                  <p className="segment-desc">{segment.description}</p>
                  <div className="segment-actions">
                    <button className="btn btn-sm btn-secondary">Edit</button>
                    <button className="btn btn-sm btn-secondary">View</button>
                    <button className="btn btn-sm btn-primary">Send Campaign</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="segment-builder">
              <h3>Segment Builder</h3>
              <div className="filter-groups">
                <div className="filter-group">
                  <label>Filter by:</label>
                  <select className="input-full">
                    <option>Signup date</option>
                    <option>Location</option>
                    <option>Purchase history</option>
                    <option>Engagement level</option>
                    <option>Custom fields</option>
                    <option>Tags</option>
                  </select>
                </div>
                <div className="filter-condition">
                  <input type="text" placeholder="e.g., Last 30 days" className="input-full" />
                </div>
                <button className="btn btn-sm btn-secondary">+ Add Condition</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'automation' && (
          <div className="automation-workflows">
            <div className="workflows-header">
              <h2>🔄 Email Automation Flows</h2>
              <button className="btn btn-primary">+ Create Workflow</button>
            </div>

            <div className="active-workflows-count">
              <p>Active Workflows: 5</p>
            </div>

            <div className="workflows-list">
              {workflows.map((workflow, index) => (
                <div key={index} className="workflow-card">
                  <div className="workflow-header">
                    <h3>{workflow.name}</h3>
                    <span className={`status-badge ${workflow.status.toLowerCase()}`}>
                      {workflow.status}
                    </span>
                  </div>
                  <div className="workflow-details">
                    <p><strong>Trigger:</strong> {workflow.trigger}</p>
                    <p><strong>Emails:</strong> {workflow.emails}</p>
                    <p><strong>Currently Active:</strong> {workflow.active.toLocaleString()}</p>
                  </div>
                  <div className="workflow-actions">
                    <button className="btn btn-sm btn-secondary">Edit</button>
                    <button className="btn btn-sm btn-secondary">
                      {workflow.status === 'Active' ? 'Pause' : 'Activate'}
                    </button>
                    <button className="btn btn-sm btn-secondary">Analytics</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="workflow-builder-preview">
              <h3>Workflow Builder Interface</h3>
              <div className="workflow-flow">
                <div className="flow-step start">[Start]</div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step trigger">Trigger: Subscriber joins list</div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step email">Email 1: Welcome<br/><small>Send immediately</small></div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step wait">Wait 2 days</div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step email">Email 2: Tips & Tricks<br/><small>Send at 9:00 AM</small></div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step wait">Wait 3 days</div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step email">Email 3: Special Offer<br/><small>Send at 2:00 PM</small></div>
                <div className="flow-arrow">↓</div>
                <div className="flow-step end">[End]</div>
              </div>
              <div className="workflow-conditions">
                <h4>Conditions</h4>
                <label><input type="checkbox" defaultChecked /> Only if opened previous email</label>
                <label><input type="checkbox" /> Exclude if purchased</label>
              </div>
              <div className="workflow-actions-bar">
                <button className="btn btn-secondary">+ Add Step</button>
                <button className="btn btn-secondary">Test Flow</button>
                <button className="btn btn-primary">Activate</button>
              </div>
            </div>

            <div className="available-triggers">
              <h3>Available Triggers</h3>
              <div className="trigger-tags">
                <span className="trigger-tag">List subscription</span>
                <span className="trigger-tag">Form submission</span>
                <span className="trigger-tag">Purchase made</span>
                <span className="trigger-tag">Cart abandoned</span>
                <span className="trigger-tag">Birthday</span>
                <span className="trigger-tag">Anniversary</span>
                <span className="trigger-tag">Tag added</span>
                <span className="trigger-tag">Custom event</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="email-analytics">
            <div className="analytics-header">
              <h2>📊 Email Analytics</h2>
              <select className="date-range">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>All time</option>
              </select>
            </div>

            <div className="email-metrics">
              <div className="metric-card">
                <h4>Total Sent</h4>
                <p className="metric-value">12,458</p>
                <span className="metric-change positive">↗ +18%</span>
              </div>
              <div className="metric-card">
                <h4>Avg Open Rate</h4>
                <p className="metric-value">52.3%</p>
                <span className="metric-change positive">↗ +4.2%</span>
              </div>
              <div className="metric-card">
                <h4>Avg Click Rate</h4>
                <p className="metric-value">16.8%</p>
                <span className="metric-change positive">↗ +2.1%</span>
              </div>
              <div className="metric-card">
                <h4>Total Revenue</h4>
                <p className="metric-value">$16,350</p>
                <span className="metric-change positive">↗ +28%</span>
              </div>
              <div className="metric-card">
                <h4>Unsubscribe Rate</h4>
                <p className="metric-value">0.8%</p>
                <span className="metric-change negative">↘ -0.2%</span>
              </div>
              <div className="metric-card">
                <h4>List Growth</h4>
                <p className="metric-value">+892</p>
                <span className="metric-change positive">This period</span>
              </div>
            </div>

            <div className="campaign-performance">
              <h3>Campaign Performance Comparison</h3>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Campaign</th>
                    <th>Sent</th>
                    <th>Delivered</th>
                    <th>Opens</th>
                    <th>Clicks</th>
                    <th>Bounces</th>
                    <th>Unsubscribes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>June Newsletter</td>
                    <td>8,432</td>
                    <td>8,389 (99.5%)</td>
                    <td>3,523 (42%)</td>
                    <td>1,011 (12%)</td>
                    <td>43 (0.5%)</td>
                    <td>67 (0.8%)</td>
                  </tr>
                  <tr>
                    <td>Welcome Series</td>
                    <td>1,247</td>
                    <td>1,238 (99.3%)</td>
                    <td>842 (68%)</td>
                    <td>297 (24%)</td>
                    <td>9 (0.7%)</td>
                    <td>12 (1.0%)</td>
                  </tr>
                  <tr>
                    <td>Abandoned Cart</td>
                    <td>534</td>
                    <td>531 (99.4%)</td>
                    <td>271 (51%)</td>
                    <td>96 (18%)</td>
                    <td>3 (0.6%)</td>
                    <td>5 (0.9%)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="best-performing-emails">
              <h3>Best Performing Emails</h3>
              <div className="email-list">
                <div className="email-item">
                  <span className="rank">1</span>
                  <span className="email-name">Summer Sale Launch</span>
                  <span className="email-metrics">68% open, 32% click</span>
                </div>
                <div className="email-item">
                  <span className="rank">2</span>
                  <span className="email-name">VIP Early Access</span>
                  <span className="email-metrics">72% open, 28% click</span>
                </div>
                <div className="email-item">
                  <span className="rank">3</span>
                  <span className="email-name">Welcome Email #1</span>
                  <span className="email-metrics">65% open, 24% click</span>
                </div>
              </div>
            </div>

            <div className="analytics-actions">
              <button className="btn btn-secondary">Compare Campaigns</button>
              <button className="btn btn-secondary">Export CSV</button>
              <button className="btn btn-primary">Generate Report</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailMarketing;
