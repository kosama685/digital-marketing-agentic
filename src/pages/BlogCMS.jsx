import React, { useState } from 'react';
import '../styles/index.css';

const BlogCMS = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [posts, setPosts] = useState([
    { id: 1, title: 'SEO Guide for 2026', status: 'Published', views: 2100, date: '2026-06-01' },
    { id: 2, title: 'AI Trends in Marketing', status: 'Draft', views: 0, date: '-' },
    { id: 3, title: 'Instagram Growth Strategies', status: 'Scheduled', views: 0, date: '2026-06-15' },
    { id: 4, title: 'Content Marketing Tips', status: 'Published', views: 1543, date: '2026-05-28' },
  ]);

  const stats = {
    total: 127,
    published: 98,
    drafts: 24,
    scheduled: 5,
    views: '45.2K',
    avgTime: '3:42'
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>✍️ Blog/CMS Manager</h1>
        <div className="header-actions">
          <button className="btn btn-secondary">Import from URL</button>
          <button className="btn btn-primary">+ New Post</button>
        </div>
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={`tab ${activeTab === 'editor' ? 'active' : ''}`}
          onClick={() => setActiveTab('editor')}
        >
          Editor
        </button>
        <button 
          className={`tab ${activeTab === 'ai-studio' ? 'active' : ''}`}
          onClick={() => setActiveTab('ai-studio')}
        >
          AI Content Studio
        </button>
        <button 
          className={`tab ${activeTab === 'seo' ? 'active' : ''}`}
          onClick={() => setActiveTab('seo')}
        >
          SEO Optimizer
        </button>
        <button 
          className={`tab ${activeTab === 'media' ? 'active' : ''}`}
          onClick={() => setActiveTab('media')}
        >
          Media Library
        </button>
        <button 
          className={`tab ${activeTab === 'calendar' ? 'active' : ''}`}
          onClick={() => setActiveTab('calendar')}
        >
          Editorial Calendar
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'dashboard' && (
          <div className="blog-dashboard">
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Posts</h3>
                <p className="stat-value">{stats.total}</p>
              </div>
              <div className="stat-card">
                <h3>Published</h3>
                <p className="stat-value success">{stats.published}</p>
              </div>
              <div className="stat-card">
                <h3>Drafts</h3>
                <p className="stat-value warning">{stats.drafts}</p>
              </div>
              <div className="stat-card">
                <h3>Scheduled</h3>
                <p className="stat-value info">{stats.scheduled}</p>
              </div>
              <div className="stat-card">
                <h3>Total Views</h3>
                <p className="stat-value">{stats.views}</p>
              </div>
              <div className="stat-card">
                <h3>Avg. Time on Page</h3>
                <p className="stat-value">{stats.avgTime}</p>
              </div>
            </div>

            <div className="recent-posts">
              <h2>Recent Posts</h2>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Views</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map(post => (
                    <tr key={post.id}>
                      <td>{post.title}</td>
                      <td>
                        <span className={`status-badge ${post.status.toLowerCase()}`}>
                          {post.status}
                        </span>
                      </td>
                      <td>{post.views.toLocaleString()}</td>
                      <td>{post.date}</td>
                      <td>
                        <button className="btn-icon">Edit</button>
                        <button className="btn-icon">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'editor' && (
          <div className="post-editor">
            <div className="editor-section">
              <label>Title</label>
              <input type="text" placeholder="Enter post title..." className="input-full" />
            </div>
            
            <div className="editor-row">
              <div className="editor-section">
                <label>Slug</label>
                <input type="text" placeholder="/your-post-slug" className="input-full" />
              </div>
              <div className="editor-section">
                <label>Category</label>
                <select className="input-full">
                  <option>Marketing</option>
                  <option>Technology</option>
                  <option>Business</option>
                  <option>Social Media</option>
                </select>
              </div>
              <div className="editor-section">
                <label>Tags</label>
                <input type="text" placeholder="Add tags..." className="input-full" />
              </div>
            </div>

            <div className="editor-section">
              <label>Featured Image</label>
              <div className="upload-area">
                <p>Drag & drop or click to upload</p>
                <div className="upload-buttons">
                  <button className="btn btn-secondary">Upload</button>
                  <button className="btn btn-secondary">AI Generate</button>
                  <button className="btn btn-secondary">From Library</button>
                </div>
              </div>
            </div>

            <div className="editor-section">
              <label>Content Editor</label>
              <div className="wysiwyg-toolbar">
                <button className="toolbar-btn"><b>B</b></button>
                <button className="toolbar-btn"><i>I</i></button>
                <button className="toolbar-btn"><u>U</u></button>
                <button className="toolbar-btn">H1</button>
                <button className="toolbar-btn">H2</button>
                <button className="toolbar-btn">H3</button>
                <button className="toolbar-btn">🔗 Link</button>
                <button className="toolbar-btn">🖼️ Image</button>
                <span className="toolbar-divider">|</span>
                <button className="toolbar-btn ai-btn">✨ AI Write</button>
                <button className="toolbar-btn ai-btn">✨ AI Expand</button>
                <button className="toolbar-btn ai-btn">✨ AI Summarize</button>
              </div>
              <textarea 
                className="wysiwyg-editor" 
                placeholder="Write your content here..."
                rows={15}
              ></textarea>
            </div>

            <div className="editor-section">
              <label>Excerpt</label>
              <textarea 
                placeholder="Short description for SEO..." 
                className="input-full"
                rows={3}
              ></textarea>
            </div>

            <div className="editor-row">
              <div className="editor-section">
                <label>Meta Title</label>
                <input type="text" placeholder="SEO title..." className="input-full" />
                <small>60 characters max</small>
              </div>
              <div className="editor-section">
                <label>Meta Description</label>
                <input type="text" placeholder="SEO description..." className="input-full" />
                <small>160 characters max</small>
              </div>
            </div>

            <div className="editor-actions">
              <button className="btn btn-secondary">Save Draft</button>
              <button className="btn btn-secondary">Preview</button>
              <button className="btn btn-primary">Publish</button>
            </div>
          </div>
        )}

        {activeTab === 'ai-studio' && (
          <div className="ai-studio">
            <h2>🤖 AI Content Studio</h2>
            
            <div className="ai-config">
              <div className="form-group">
                <label>Select AI Model</label>
                <select className="input-full">
                  <option>ChatGPT-4 (OpenAI)</option>
                  <option>Claude 3 (Anthropic)</option>
                  <option>Gemini Pro (Google)</option>
                  <option>Grok (xAI)</option>
                  <option>NVIDIA Nemotron</option>
                  <option>Auto (Best for task)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Content Type</label>
                <select className="input-full">
                  <option>Blog Post (Long-form)</option>
                  <option>Social Media Caption</option>
                  <option>Email Newsletter</option>
                  <option>Product Description</option>
                  <option>Ad Copy</option>
                  <option>Video Script</option>
                  <option>Press Release</option>
                </select>
              </div>

              <div className="form-group">
                <label>Topic/Keyword</label>
                <input type="text" placeholder="e.g., Instagram automation strategies" className="input-full" />
              </div>

              <div className="form-group">
                <label>Tone</label>
                <select className="input-full">
                  <option>Professional</option>
                  <option>Casual</option>
                  <option>Friendly</option>
                  <option>Authoritative</option>
                  <option>Witty</option>
                </select>
              </div>

              <div className="form-group">
                <label>Length</label>
                <input type="text" defaultValue="1500 words" className="input-full" />
              </div>

              <div className="form-group">
                <label>Include</label>
                <div className="checkbox-group">
                  <label><input type="checkbox" defaultChecked /> Headings (H2, H3)</label>
                  <label><input type="checkbox" defaultChecked /> Bullet points</label>
                  <label><input type="checkbox" defaultChecked /> Statistics</label>
                  <label><input type="checkbox" defaultChecked /> Examples</label>
                  <label><input type="checkbox" defaultChecked /> Call-to-action</label>
                  <label><input type="checkbox" defaultChecked /> SEO keywords</label>
                </div>
              </div>
            </div>

            <button className="btn btn-primary btn-large">✨ Generate Content</button>

            <div className="ai-assistants">
              <h3>AI Writing Assistants</h3>
              <div className="assistant-grid">
                <button className="btn btn-secondary">AI Write Intro</button>
                <button className="btn btn-secondary">AI Expand</button>
                <button className="btn btn-secondary">AI Summarize</button>
                <button className="btn btn-secondary">AI Rewrite</button>
                <button className="btn btn-secondary">AI Translate</button>
                <button className="btn btn-secondary">AI Fix Grammar</button>
                <button className="btn btn-secondary">AI Suggest Headlines</button>
                <button className="btn btn-secondary">AI Generate FAQ</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'seo' && (
          <div className="seo-optimizer">
            <h2>🔍 SEO Content Optimizer</h2>
            
            <div className="seo-input">
              <label>Focus Keyword</label>
              <input type="text" defaultValue="instagram growth" className="input-full" />
            </div>

            <div className="seo-score">
              <div className="score-circle">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" strokeWidth="8" />
                  <circle 
                    cx="50" cy="50" r="45" 
                    fill="none" stroke="#4CAF50" strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset="51"
                    transform="rotate(-90 50 50)"
                  />
                  <text x="50" y="55" textAnchor="middle" fontSize="24" fontWeight="bold">82</text>
                </svg>
              </div>
              <p>Real-Time Score: 82/100</p>
            </div>

            <div className="seo-checklist">
              <h3>On-Page SEO Checklist</h3>
              <div className="checklist-item ✓">✓ Keyword in title (Position 1)</div>
              <div className="checklist-item ✓">✓ Keyword in meta description</div>
              <div className="checklist-item ✓">✓ Keyword in URL slug</div>
              <div className="checklist-item ✓">✓ Keyword in first 100 words</div>
              <div className="checklist-item ⚠">⚠ Keyword density: 1.2% (aim 1-2%)</div>
              <div className="checklist-item ✓">✓ Keyword in H1 heading</div>
              <div className="checklist-item ⚠">⚠ Keyword in 2/5 H2 headings</div>
              <div className="checklist-item ✓">✓ Image alt text includes keyword</div>
              <div className="checklist-item ✓">✓ Internal links: 3</div>
              <div className="checklist-item ⚠">⚠ External links: 1 (add more)</div>
              <div className="checklist-item ✓">✓ Content length: 1,847 words</div>
              <div className="checklist-item ✓">✓ Readability: Grade 8 (Good)</div>
              <div className="checklist-item ✓">✓ Mobile-friendly formatting</div>
            </div>

            <div className="related-keywords">
              <h3>Related Keywords to Include</h3>
              <div className="keyword-tags">
                <span className="keyword-tag">instagram marketing (0 uses)</span>
                <span className="keyword-tag">social media growth (1 use)</span>
                <span className="keyword-tag">instagram algorithm (0 uses)</span>
                <span className="keyword-tag">follower growth (2 uses)</span>
                <span className="keyword-tag">engagement rate (1 use)</span>
              </div>
            </div>

            <div className="seo-actions">
              <button className="btn btn-primary">Auto-Optimize</button>
              <button className="btn btn-secondary">View Suggestions</button>
              <button className="btn btn-secondary">Export Report</button>
            </div>
          </div>
        )}

        {activeTab === 'media' && (
          <div className="media-library">
            <div className="media-header">
              <h2>📁 Media Library</h2>
              <div className="media-actions">
                <button className="btn btn-secondary">AI Generate</button>
                <button className="btn btn-primary">Upload Files</button>
              </div>
            </div>

            <div className="storage-info">
              <p>Storage: 2.4 GB / 10 GB used</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '24%' }}></div>
              </div>
            </div>

            <div className="media-filters">
              <button className="filter-btn active">All</button>
              <button className="filter-btn">Images</button>
              <button className="filter-btn">Videos</button>
              <button className="filter-btn">Documents</button>
            </div>

            <div className="media-grid">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="media-item">
                  <div className="media-thumbnail">
                    <span>📷</span>
                  </div>
                  <p>IMG_{i}.jpg</p>
                  <small>{(i * 0.5).toFixed(1)} MB</small>
                </div>
              ))}
            </div>

            <div className="media-folders">
              <h3>Folders</h3>
              <div className="folder-list">
                <div className="folder-item">📁 Blog Images</div>
                <div className="folder-item">📁 Social Media</div>
                <div className="folder-item">📁 Product Photos</div>
                <div className="folder-item">📁 Videos</div>
                <div className="folder-item">➕ New Folder</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="editorial-calendar">
            <div className="calendar-header">
              <h2>📅 Editorial Calendar</h2>
              <div className="calendar-actions">
                <button className="btn btn-secondary">Export Calendar</button>
                <button className="btn btn-primary">+ New Post</button>
              </div>
            </div>

            <div className="calendar-view">
              <h3>June 2026 Content Plan</h3>
              
              <div className="content-weeks">
                <div className="week-block">
                  <h4>Week 1 (Jun 1-7)</h4>
                  <div className="post-item published">Mon: "SEO Basics" - Published ✓</div>
                  <div className="post-item published">Wed: "AI Tools" - Published ✓</div>
                  <div className="post-item scheduled">Fri: "Content Strategy" - Scheduled</div>
                </div>

                <div className="week-block">
                  <h4>Week 2 (Jun 8-14)</h4>
                  <div className="post-item draft">Mon: "Instagram Growth" - Draft</div>
                  <div className="post-item empty">Wed: [Empty - Create Post]</div>
                  <div className="post-item idea">Fri: "Email Marketing" - Idea</div>
                </div>

                <div className="week-block">
                  <h4>Week 3 (Jun 15-21)</h4>
                  <div className="post-item empty">Mon: [Empty]</div>
                  <div className="post-item empty">Wed: [Empty]</div>
                  <div className="post-item empty">Fri: [Empty]</div>
                </div>
              </div>

              <div className="content-pillars">
                <h4>Content Pillars</h4>
                <div className="pillar-bar">
                  <span>Marketing</span>
                  <div className="pillar-progress" style={{ width: '45%' }}>45%</div>
                </div>
                <div className="pillar-bar">
                  <span>Technology</span>
                  <div className="pillar-progress" style={{ width: '30%' }}>30%</div>
                </div>
                <div className="pillar-bar">
                  <span>Business</span>
                  <div className="pillar-progress" style={{ width: '25%' }}>25%</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCMS;
