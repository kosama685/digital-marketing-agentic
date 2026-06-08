import React, { useState } from 'react';
import '../styles/index.css';

const SocialHub = () => {
  const [activeTab, setActiveTab] = useState('connections');
  const [connectedAccounts, setConnectedAccounts] = useState([
    { platform: 'Instagram', handle: '@youraccount', type: 'Business', followers: '12.5K', status: 'Connected' },
    { platform: 'Facebook', handle: 'Your Page', type: 'Page', followers: '15K', status: 'Connected' },
    { platform: 'Pinterest', handle: '@yourprofile', type: 'Profile', followers: '3.2K', status: 'Connected' },
    { platform: 'LinkedIn', handle: 'Your Company', type: 'Company', followers: '8.7K', status: 'Connected' },
  ]);

  const platforms = [
    { name: 'Twitter/X', icon: '🐦', connected: false },
    { name: 'TikTok', icon: '🎵', connected: false },
    { name: 'YouTube', icon: '📺', connected: false },
    { name: 'Snapchat', icon: '👻', connected: false },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>🌐 Social Hub</h1>
        <p>Multi-Platform Management</p>
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'connections' ? 'active' : ''}`}
          onClick={() => setActiveTab('connections')}
        >
          Account Connections
        </button>
        <button 
          className={`tab ${activeTab === 'composer' ? 'active' : ''}`}
          onClick={() => setActiveTab('composer')}
        >
          Unified Composer
        </button>
        <button 
          className={`tab ${activeTab === 'calendar' ? 'active' : ''}`}
          onClick={() => setActiveTab('calendar')}
        >
          Social Calendar
        </button>
        <button 
          className={`tab ${activeTab === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          Analytics
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'connections' && (
          <div className="social-connections">
            <h2>Connected Accounts</h2>
            
            <div className="accounts-grid">
              {connectedAccounts.map((account, index) => (
                <div key={index} className="account-card connected">
                  <div className="account-header">
                    <span className="platform-icon">
                      {account.platform === 'Instagram' && '📸'}
                      {account.platform === 'Facebook' && '📘'}
                      {account.platform === 'Pinterest' && '📌'}
                      {account.platform === 'LinkedIn' && '💼'}
                    </span>
                    <div className="account-info">
                      <h3>{account.platform}</h3>
                      <p>{account.handle}</p>
                    </div>
                    <span className="status-badge connected">{account.status}</span>
                  </div>
                  <div className="account-details">
                    <p>Type: {account.type}</p>
                    <p>Followers: {account.followers}</p>
                  </div>
                  <div className="account-actions">
                    <button className="btn btn-sm btn-secondary">Refresh Token</button>
                    <button className="btn btn-sm btn-danger">Disconnect</button>
                  </div>
                </div>
              ))}

              {platforms.map((platform, index) => (
                <div key={index} className="account-card disconnected">
                  <div className="account-header">
                    <span className="platform-icon">{platform.icon}</span>
                    <div className="account-info">
                      <h3>{platform.name}</h3>
                      <p>Not connected</p>
                    </div>
                  </div>
                  <button className="btn btn-primary btn-full">Connect Account</button>
                </div>
              ))}
            </div>

            <div className="oauth-info">
              <h3>OAuth Connection Flow</h3>
              <ol>
                <li>Select platform</li>
                <li>Redirect to platform login</li>
                <li>Grant permissions</li>
                <li>Receive access token</li>
                <li>Store securely (encrypted)</li>
                <li>Auto-refresh tokens</li>
              </ol>
            </div>
          </div>
        )}

        {activeTab === 'composer' && (
          <div className="unified-composer">
            <h2>Create Multi-Platform Post</h2>

            <div className="composer-section">
              <h3>Select Platforms</h3>
              <div className="platform-selector">
                <label className="platform-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span>📸 Instagram Feed</span>
                </label>
                <label className="platform-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span>📱 Instagram Stories</span>
                </label>
                <label className="platform-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span>🎥 Instagram Reels</span>
                </label>
                <label className="platform-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span>📘 Facebook Page</span>
                </label>
                <label className="platform-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span>📌 Pinterest</span>
                </label>
                <label className="platform-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span>💼 LinkedIn</span>
                </label>
                <label className="platform-checkbox">
                  <input type="checkbox" />
                  <span>🐦 Twitter/X</span>
                </label>
                <label className="platform-checkbox">
                  <input type="checkbox" />
                  <span>🎵 TikTok</span>
                </label>
              </div>
            </div>

            <div className="composer-section">
              <h3>Media Upload</h3>
              <div className="upload-area">
                <p>Drag & drop or click to upload</p>
                <p className="upload-hint">Supports: JPG, PNG, MP4, MOV</p>
                <div className="upload-buttons">
                  <button className="btn btn-secondary">Upload from Computer</button>
                  <button className="btn btn-secondary">Import from Library</button>
                </div>
              </div>
              
              <div className="platform-dimensions">
                <h4>Platform-Specific Optimization</h4>
                <div className="dimension-grid">
                  <div className="dimension-item">
                    <strong>Instagram:</strong> 1080x1080 (1:1)
                  </div>
                  <div className="dimension-item">
                    <strong>Facebook:</strong> 1200x630 (1.91:1)
                  </div>
                  <div className="dimension-item">
                    <strong>Pinterest:</strong> 1000x1500 (2:3)
                  </div>
                  <div className="dimension-item">
                    <strong>LinkedIn:</strong> 1200x627 (1.91:1)
                  </div>
                </div>
              </div>
            </div>

            <div className="composer-section">
              <h3>Caption</h3>
              <textarea 
                placeholder="Write your universal caption here... (All platforms will use this by default)"
                className="input-full"
                rows={5}
              ></textarea>
              
              <div className="caption-toggles">
                <button className="btn btn-sm btn-secondary">Customize per platform ▼</button>
                <button className="btn btn-sm btn-secondary">📋 Emoji Picker</button>
                <button className="btn btn-sm btn-secondary">#️⃣ Hashtag Manager</button>
              </div>
            </div>

            <div className="composer-section">
              <h3>Platform-Specific Captions</h3>
              <div className="platform-captions">
                <div className="caption-input">
                  <label>📸 Instagram</label>
                  <textarea placeholder="Short, emoji-heavy caption..." rows={2}></textarea>
                </div>
                <div className="caption-input">
                  <label>💼 LinkedIn</label>
                  <textarea placeholder="Professional tone..." rows={2}></textarea>
                </div>
                <div className="caption-input">
                  <label>📌 Pinterest</label>
                  <textarea placeholder="Keyword-rich description..." rows={2}></textarea>
                </div>
                <div className="caption-input">
                  <label>📘 Facebook</label>
                  <textarea placeholder="Engaging question..." rows={2}></textarea>
                </div>
              </div>
            </div>

            <div className="composer-section">
              <h3>Hashtags</h3>
              <div className="hashtag-groups">
                <div className="hashtag-input">
                  <label>Instagram</label>
                  <input type="text" placeholder="#marketing #business #growth" />
                </div>
                <div className="hashtag-input">
                  <label>LinkedIn</label>
                  <input type="text" placeholder="#leadership #strategy" />
                </div>
                <div className="hashtag-input">
                  <label>Pinterest</label>
                  <input type="text" placeholder="#marketingtips" />
                </div>
              </div>
            </div>

            <div className="composer-section">
              <h3>Scheduling</h3>
              <div className="schedule-options">
                <label className="radio-option">
                  <input type="radio" name="publish" defaultChecked />
                  <span>Publish Now</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="publish" />
                  <span>Schedule for Later</span>
                </label>
              </div>
              
              <div className="schedule-inputs">
                <div className="input-group">
                  <label>Date</label>
                  <input type="date" defaultValue="2026-06-15" />
                </div>
                <div className="input-group">
                  <label>Time</label>
                  <input type="time" defaultValue="10:00" />
                </div>
                <div className="input-group">
                  <label>Timezone</label>
                  <select>
                    <option>EST (Eastern)</option>
                    <option>PST (Pacific)</option>
                    <option>GMT (London)</option>
                  </select>
                </div>
              </div>
              
              <label className="checkbox-option">
                <input type="checkbox" defaultChecked />
                <span>✨ Auto-suggest best times</span>
              </label>
            </div>

            <div className="composer-actions">
              <button className="btn btn-secondary">Save as Template</button>
              <button className="btn btn-secondary">Preview All</button>
              <button className="btn btn-primary">Schedule Post</button>
            </div>
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="social-calendar">
            <div className="calendar-header">
              <h2>📅 Social Media Calendar</h2>
              <div className="calendar-controls">
                <div className="view-selector">
                  <button className="btn btn-sm active">Month</button>
                  <button className="btn btn-sm">Week</button>
                  <button className="btn btn-sm">Day</button>
                  <button className="btn btn-sm">List</button>
                </div>
                <div className="platform-filter">
                  <label><input type="checkbox" defaultChecked /> 📸 IG</label>
                  <label><input type="checkbox" defaultChecked /> 📘 FB</label>
                  <label><input type="checkbox" defaultChecked /> 📌 PIN</label>
                  <label><input type="checkbox" defaultChecked /> 💼 LI</label>
                </div>
              </div>
            </div>

            <div className="calendar-grid">
              <div className="calendar-weekdays">
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
                <div>Sun</div>
              </div>
              
              <div className="calendar-days">
                {/* Empty cells for previous month */}
                {[...Array(2)].map((_, i) => (
                  <div key={`empty-${i}`} className="calendar-day empty"></div>
                ))}
                
                {/* Days with posts */}
                {[...Array(30)].map((_, i) => {
                  const day = i + 1;
                  const hasPosts = [1, 2, 3, 5, 7, 10, 12, 15, 18, 20, 22, 25, 28].includes(day);
                  return (
                    <div key={day} className={`calendar-day ${hasPosts ? 'has-posts' : ''}`}>
                      <span className="day-number">{day}</span>
                      {day === 1 && <div className="post-dot instagram">IG:Reel</div>}
                      {day === 2 && <div className="post-dot facebook">FB:Img</div>}
                      {day === 3 && <div className="post-dot instagram">IG:Story</div>}
                      {day === 5 && <div className="post-dot linkedin">LI:Art</div>}
                      {day === 7 && <div className="post-dot pinterest">PIN:Img</div>}
                      {day === 10 && <div className="post-dot instagram">IG:Reel</div>}
                      {day === 12 && <div className="post-dot facebook">FB:Video</div>}
                      {day === 15 && <div className="post-dot instagram">IG:Post</div>}
                      {day === 18 && <div className="post-dot linkedin">LI:Post</div>}
                      {day === 20 && <div className="post-dot instagram">IG:Story</div>}
                      {day === 22 && <div className="post-dot pinterest">PIN:Pin</div>}
                      {day === 25 && <div className="post-dot facebook">FB:Post</div>}
                      {day === 28 && <div className="post-dot instagram">IG:Reel</div>}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="calendar-legend">
              <h4>Legend</h4>
              <div className="legend-items">
                <span className="legend-item"><span className="dot instagram"></span> Instagram</span>
                <span className="legend-item"><span className="dot facebook"></span> Facebook</span>
                <span className="legend-item"><span className="dot pinterest"></span> Pinterest</span>
                <span className="legend-item"><span className="dot linkedin"></span> LinkedIn</span>
                <span className="legend-item"><span className="dot twitter"></span> Twitter</span>
                <span className="legend-item"><span className="dot tiktok"></span> TikTok</span>
              </div>
            </div>

            <div className="calendar-gaps">
              <h4>Content Gaps</h4>
              <p className="warning">⚠ Jun 12-14: No posts scheduled</p>
              <button className="btn btn-sm btn-primary">+ Quick Add</button>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="social-analytics">
            <div className="analytics-header">
              <h2>📊 Analytics Overview</h2>
              <select className="date-range">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Custom range</option>
              </select>
            </div>

            <div className="combined-metrics">
              <h3>Combined Metrics (All Platforms)</h3>
              <div className="metrics-grid">
                <div className="metric-card">
                  <h4>Total Followers</h4>
                  <p className="metric-value">45.2K</p>
                  <span className="metric-change positive">↗ +12%</span>
                </div>
                <div className="metric-card">
                  <h4>Total Posts Published</h4>
                  <p className="metric-value">127</p>
                  <span className="metric-change neutral">This period</span>
                </div>
                <div className="metric-card">
                  <h4>Avg Engagement Rate</h4>
                  <p className="metric-value">4.8%</p>
                  <span className="metric-change positive">↗ +0.5%</span>
                </div>
              </div>
            </div>

            <div className="platform-breakdown">
              <div className="platform-analytics">
                <h3>📸 Instagram</h3>
                <div className="platform-metrics">
                  <div className="metric-row">
                    <span>Followers:</span>
                    <strong>12.5K ↗ +8%</strong>
                  </div>
                  <div className="metric-row">
                    <span>Engagement:</span>
                    <strong>5.2%</strong>
                  </div>
                  <div className="metric-row">
                    <span>Reach:</span>
                    <strong>45.3K</strong>
                  </div>
                  <div className="metric-row">
                    <span>Impressions:</span>
                    <strong>128K</strong>
                  </div>
                  <div className="metric-row">
                    <span>Profile Visits:</span>
                    <strong>3.2K</strong>
                  </div>
                </div>
                <div className="top-post">
                  <h4>Top Post</h4>
                  <div className="post-preview">
                    <span className="thumbnail">🖼️</span>
                    <span>2.4K likes, 156 comments</span>
                  </div>
                </div>
              </div>

              <div className="platform-analytics">
                <h3>📘 Facebook</h3>
                <div className="platform-metrics">
                  <div className="metric-row">
                    <span>Page Likes:</span>
                    <strong>15K ↗ +5%</strong>
                  </div>
                  <div className="metric-row">
                    <span>Engagement:</span>
                    <strong>3.1%</strong>
                  </div>
                  <div className="metric-row">
                    <span>Reach:</span>
                    <strong>32K</strong>
                  </div>
                  <div className="metric-row">
                    <span>Video Views:</span>
                    <strong>18K</strong>
                  </div>
                </div>
              </div>

              <div className="platform-analytics">
                <h3>📌 Pinterest</h3>
                <div className="platform-metrics">
                  <div className="metric-row">
                    <span>Followers:</span>
                    <strong>3.2K ↗ +15%</strong>
                  </div>
                  <div className="metric-row">
                    <span>Monthly Views:</span>
                    <strong>89K</strong>
                  </div>
                  <div className="metric-row">
                    <span>Saves:</span>
                    <strong>4.5K</strong>
                  </div>
                  <div className="metric-row">
                    <span>Outbound Clicks:</span>
                    <strong>1.2K</strong>
                  </div>
                </div>
              </div>

              <div className="platform-analytics">
                <h3>💼 LinkedIn</h3>
                <div className="platform-metrics">
                  <div className="metric-row">
                    <span>Followers:</span>
                    <strong>8.7K ↗ +6%</strong>
                  </div>
                  <div className="metric-row">
                    <span>Engagement:</span>
                    <strong>4.1%</strong>
                  </div>
                  <div className="metric-row">
                    <span>Impressions:</span>
                    <strong>52K</strong>
                  </div>
                  <div className="metric-row">
                    <span>Click-through:</span>
                    <strong>2.3K</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="best-performing">
              <h3>Best Performing Content</h3>
              <div className="content-list">
                <div className="content-item">
                  <span className="rank">1</span>
                  <span className="platform">📸</span>
                  <span className="content-type">Reel</span>
                  <span className="metrics">15K views, 1.2K likes</span>
                </div>
                <div className="content-item">
                  <span className="rank">2</span>
                  <span className="platform">📸</span>
                  <span className="content-type">Carousel</span>
                  <span className="metrics">8.2K reach, 543 saves</span>
                </div>
                <div className="content-item">
                  <span className="rank">3</span>
                  <span className="platform">📱</span>
                  <span className="content-type">Story</span>
                  <span className="metrics">4.5K taps, 234 replies</span>
                </div>
              </div>
            </div>

            <div className="analytics-actions">
              <button className="btn btn-secondary">Compare Platforms</button>
              <button className="btn btn-secondary">Set Goals</button>
              <button className="btn btn-primary">Export PDF Report</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialHub;
