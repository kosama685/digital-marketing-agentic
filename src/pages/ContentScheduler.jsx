import React, { useState } from 'react';
import { Calendar, Plus, Upload, Image, Video, FileText, Clock, CheckCircle, X, ChevronLeft, ChevronRight, Edit2, Trash2, Eye, Save, Send } from 'lucide-react';

const ContentScheduler = () => {
  const [viewMode, setViewMode] = useState('month');
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1));
  const [selectedDate, setSelectedDate] = useState(null);
  const [showComposer, setShowComposer] = useState(false);
  const [composerStep, setComposerStep] = useState(1);
  const [scheduledPosts, setScheduledPosts] = useState([
    { id: 1, date: new Date(2026, 5, 3), type: 'photo', caption: 'Summer vibes ☀️', status: 'scheduled', account: '@main' },
    { id: 2, date: new Date(2026, 5, 5), type: 'reel', caption: 'New workout routine 💪', status: 'scheduled', account: '@fitness' },
    { id: 3, date: new Date(2026, 5, 8), type: 'carousel', caption: 'Top 10 tips for...', status: 'draft', account: '@main' },
    { id: 4, date: new Date(2026, 5, 12), type: 'story', caption: 'Behind the scenes', status: 'scheduled', account: '@main' },
    { id: 5, date: new Date(2026, 5, 15), type: 'photo', caption: 'Product launch 🚀', status: 'scheduled', account: '@business' },
  ]);

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const getPostsForDate = (date) => {
    if (!date) return [];
    return scheduledPosts.filter(post => 
      post.date.getDate() === date.getDate() &&
      post.date.getMonth() === date.getMonth() &&
      post.date.getFullYear() === date.getFullYear()
    );
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'photo': return '📸';
      case 'video': return '🎥';
      case 'reel': return '🎬';
      case 'carousel': return '📊';
      case 'story': return '📱';
      default: return '📷';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return '#10b981';
      case 'draft': return '#f59e0b';
      case 'published': return '#8b5cf6';
      case 'error': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const navigateMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Content Scheduler</h1>
          <p style={styles.subtitle}>Plan, create, and schedule your content across all platforms</p>
        </div>
        <button className="btn-primary" onClick={() => setShowComposer(true)}>
          <Plus size={20} />
          New Post
        </button>
      </div>

      {/* Calendar Controls */}
      <div style={styles.calendarControls}>
        <div style={styles.viewTabs}>
          {['month', 'week', 'day', 'list'].map((view) => (
            <button
              key={view}
              onClick={() => setViewMode(view)}
              style={{
                ...styles.viewTab,
                ...(viewMode === view ? styles.activeViewTab : {})
              }}
            >
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </div>
        
        <div style={styles.dateNavigation}>
          <button onClick={() => navigateMonth(-1)} style={styles.navBtn}>
            <ChevronLeft size={20} />
          </button>
          <span style={styles.currentMonth}>
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
          <button onClick={() => navigateMonth(1)} style={styles.navBtn}>
            <ChevronRight size={20} />
          </button>
        </div>

        <div style={styles.calendarActions}>
          <button className="btn-secondary">
            <Upload size={16} /> Import CSV
          </button>
          <button className="btn-secondary">
            <Save size={16} /> Sync
          </button>
        </div>
      </div>

      {/* Month View Calendar */}
      {viewMode === 'month' && (
        <div style={styles.calendarGrid}>
          <div style={styles.weekdays}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} style={styles.weekday}>{day}</div>
            ))}
          </div>
          
          <div style={styles.daysGrid}>
            {getDaysInMonth(currentDate).map((date, index) => {
              const posts = date ? getPostsForDate(date) : [];
              const isToday = date && 
                date.getDate() === new Date().getDate() &&
                date.getMonth() === new Date().getMonth() &&
                date.getFullYear() === new Date().getFullYear();
              
              return (
                <div
                  key={index}
                  style={{
                    ...styles.dayCell,
                    ...(isToday ? styles.todayCell : {}),
                    ...(selectedDate && date && selectedDate.getTime() === date.getTime() ? styles.selectedCell : {})
                  }}
                  onClick={() => date && setSelectedDate(date)}
                >
                  {date && (
                    <>
                      <div style={{
                        ...styles.dayNumber,
                        ...(isToday ? styles.todayNumber : {})
                      }}>
                        {date.getDate()}
                      </div>
                      <div style={styles.postsContainer}>
                        {posts.slice(0, 3).map((post) => (
                          <div
                            key={post.id}
                            style={{
                              ...styles.postBadge,
                              background: getStatusColor(post.status) + '20',
                              border: `1px solid ${getStatusColor(post.status)}`
                            }}
                          >
                            <span>{getTypeIcon(post.type)}</span>
                          </div>
                        ))}
                        {posts.length > 3 && (
                          <div style={styles.moreBadge}>+{posts.length - 3}</div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Legend */}
      <div style={styles.legend}>
        <h4 style={styles.legendTitle}>Legend:</h4>
        <div style={styles.legendItems}>
          <div style={styles.legendItem}><span>📸</span> Photo</div>
          <div style={styles.legendItem}><span>🎥</span> Video</div>
          <div style={styles.legendItem}><span>🎬</span> Reel</div>
          <div style={styles.legendItem}><span>📊</span> Carousel</div>
          <div style={styles.legendItem}><span>📱</span> Story</div>
        </div>
      </div>

      {/* Upcoming Posts List */}
      <div style={styles.upcomingSection}>
        <h3 style={styles.sectionTitle}>Upcoming Scheduled Posts</h3>
        <div style={styles.postsList}>
          {scheduledPosts.map((post) => (
            <div key={post.id} style={styles.postListItem}>
              <div style={styles.postInfo}>
                <span style={styles.postTypeIcon}>{getTypeIcon(post.type)}</span>
                <div>
                  <div style={styles.postCaption}>{post.caption}</div>
                  <div style={styles.postMeta}>
                    <Clock size={12} />
                    {post.date.toLocaleDateString()} • {post.account}
                  </div>
                </div>
              </div>
              <div style={styles.postStatus}>
                <span style={{
                  ...styles.statusBadge,
                  background: getStatusColor(post.status) + '20',
                  color: getStatusColor(post.status)
                }}>
                  {post.status}
                </span>
              </div>
              <div style={styles.postActions}>
                <button style={styles.actionBtn}><Eye size={16} /></button>
                <button style={styles.actionBtn}><Edit2 size={16} /></button>
                <button style={styles.actionBtn}><Trash2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Post Composer Modal */}
      {showComposer && (
        <div style={styles.modalOverlay}>
          <div style={styles.composerModal}>
            <div style={styles.composerHeader}>
              <h3 style={styles.composerTitle}>Create New Post</h3>
              <button onClick={() => setShowComposer(false)} style={styles.closeBtn}>
                <X size={20} />
              </button>
            </div>

            {/* Progress Steps */}
            <div style={styles.progressSteps}>
              {[
                { step: 1, label: 'Media', icon: Image },
                { step: 2, label: 'Caption', icon: FileText },
                { step: 3, label: 'Schedule', icon: Clock }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    style={{
                      ...styles.progressStep,
                      ...(composerStep >= item.step ? styles.activeProgressStep : {})
                    }}
                  >
                    <div style={{
                      ...styles.stepIndicator,
                      ...(composerStep >= item.step ? styles.activeStepIndicator : {})
                    }}>
                      <Icon size={16} />
                    </div>
                    <span style={styles.stepLabel}>{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Step 1: Media Upload */}
            {composerStep === 1 && (
              <div style={styles.composerContent}>
                <div style={styles.uploadArea}>
                  <Upload size={48} color="#8b5cf6" />
                  <h4 style={styles.uploadTitle}>Drag & drop media here</h4>
                  <p style={styles.uploadDesc}>or click to browse</p>
                  <div style={styles.supportedFormats}>
                    <span>Photos: JPG, PNG (max 10MB)</span>
                    <span>Videos: MP4, MOV (max 4GB)</span>
                    <span>Carousels: 2-10 slides</span>
                  </div>
                  <div style={styles.uploadButtons}>
                    <button className="btn-primary">Upload from Computer</button>
                    <button className="btn-secondary">Import from Library</button>
                    <button className="btn-secondary">Use AI Generator</button>
                  </div>
                </div>
                
                <div style={styles.mediaPreview}>
                  <h4 style={styles.previewTitle}>Preview</h4>
                  <div style={styles.thumbnailGrid}>
                    <div style={styles.thumbnailPlaceholder}>
                      <Image size={32} />
                      <span>No media uploaded</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Caption & Details */}
            {composerStep === 2 && (
              <div style={styles.composerContent}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Caption</label>
                  <textarea
                    style={styles.captionTextarea}
                    placeholder="Write your caption here..."
                    rows={6}
                  />
                  <div style={styles.charCounter}>0 / 2200 characters</div>
                </div>

                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>First Comment (Hashtags)</label>
                    <input
                      type="text"
                      placeholder="#fitness #gym #workout"
                      style={styles.formInput}
                    />
                  </div>
                </div>

                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Location</label>
                    <input
                      type="text"
                      placeholder="Search location..."
                      style={styles.formInput}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Tag People</label>
                    <input
                      type="text"
                      placeholder="@username"
                      style={styles.formInput}
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Alt Text (Accessibility)</label>
                  <input
                    type="text"
                    placeholder="Describe image for visually impaired users"
                    style={styles.formInput}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Scheduling */}
            {composerStep === 3 && (
              <div style={styles.composerContent}>
                <div style={styles.publishOptions}>
                  <label style={styles.radioLabel}>
                    <input type="radio" name="publish" defaultChecked />
                    <span>Publish Now</span>
                  </label>
                  <label style={styles.radioLabel}>
                    <input type="radio" name="publish" />
                    <span>Schedule for Later</span>
                  </label>
                </div>

                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Date</label>
                    <input type="date" style={styles.formInput} />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Time</label>
                    <input type="time" style={styles.formInput} />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Timezone</label>
                    <select style={styles.formInput}>
                      <option>EST</option>
                      <option>PST</option>
                      <option>CST</option>
                      <option>MST</option>
                    </select>
                  </div>
                </div>

                <div style={styles.bestTimes}>
                  <h4 style={styles.subTitle}>Best Time Suggestions</h4>
                  <div style={styles.timeSuggestions}>
                    <div style={styles.timeSuggestion}>
                      <Clock size={16} color="#10b981" />
                      <span>Tue 9:00 AM (high engagement)</span>
                    </div>
                    <div style={styles.timeSuggestion}>
                      <Clock size={16} color="#10b981" />
                      <span>Wed 6:00 PM (peak activity)</span>
                    </div>
                  </div>
                </div>

                <div style={styles.advancedOptions}>
                  <h4 style={styles.subTitle}>Advanced Options</h4>
                  <label style={styles.checkboxLabel}>
                    <input type="checkbox" />
                    <span>Auto-delete after 30 days</span>
                  </label>
                  <label style={styles.checkboxLabel}>
                    <input type="checkbox" />
                    <span>Add to story highlights</span>
                  </label>
                  <label style={styles.checkboxLabel}>
                    <input type="checkbox" />
                    <span>Cross-post to Facebook</span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div style={styles.composerFooter}>
              {composerStep > 1 && (
                <button className="btn-secondary" onClick={() => setComposerStep(composerStep - 1)}>
                  Back
                </button>
              )}
              {composerStep < 3 ? (
                <button className="btn-primary" onClick={() => setComposerStep(composerStep + 1)}>
                  Next
                </button>
              ) : (
                <button className="btn-primary" onClick={() => setShowComposer(false)}>
                  <Send size={16} /> Schedule Post
                </button>
              )}
              <button className="btn-secondary">Save as Draft</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  calendarControls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: '16px'
  },
  viewTabs: {
    display: 'flex',
    gap: '4px',
    background: 'var(--bg-tertiary)',
    padding: '4px',
    borderRadius: '8px'
  },
  viewTab: {
    padding: '8px 16px',
    background: 'transparent',
    border: 'none',
    borderRadius: '6px',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '500'
  },
  activeViewTab: {
    background: 'var(--primary-color)',
    color: 'white'
  },
  dateNavigation: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  navBtn: {
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
    borderRadius: '6px',
    padding: '8px',
    cursor: 'pointer',
    color: 'var(--text-primary)'
  },
  currentMonth: {
    fontSize: '16px',
    fontWeight: '600',
    color: 'var(--text-primary)',
    minWidth: '180px',
    textAlign: 'center'
  },
  calendarActions: {
    display: 'flex',
    gap: '8px'
  },
  calendarGrid: {
    background: 'var(--bg-primary)',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
    overflow: 'hidden'
  },
  weekdays: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    background: 'var(--bg-tertiary)'
  },
  weekday: {
    padding: '12px',
    textAlign: 'center',
    fontSize: '13px',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    borderBottom: '1px solid var(--border-color)'
  },
  daysGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '1px',
    background: 'var(--border-color)'
  },
  dayCell: {
    minHeight: '120px',
    background: 'var(--bg-primary)',
    padding: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  todayCell: {
    background: 'rgba(139, 92, 246, 0.05)'
  },
  selectedCell: {
    outline: '2px solid var(--primary-color)',
    outlineOffset: '-2px'
  },
  dayNumber: {
    fontSize: '13px',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    marginBottom: '8px'
  },
  todayNumber: {
    color: 'var(--primary-color)'
  },
  postsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  postBadge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '14px'
  },
  moreBadge: {
    fontSize: '11px',
    color: 'var(--text-secondary)',
    textAlign: 'center',
    padding: '2px'
  },
  legend: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    marginTop: '16px',
    padding: '12px',
    background: 'var(--bg-primary)',
    borderRadius: '8px'
  },
  legendTitle: {
    fontSize: '13px',
    fontWeight: '600',
    color: 'var(--text-secondary)'
  },
  legendItems: {
    display: 'flex',
    gap: '16px'
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    color: 'var(--text-secondary)'
  },
  upcomingSection: {
    marginTop: '24px',
    background: 'var(--bg-primary)',
    borderRadius: '12px',
    padding: '20px'
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: 'var(--text-primary)',
    marginBottom: '16px'
  },
  postsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  postListItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px',
    background: 'var(--bg-secondary)',
    borderRadius: '8px',
    border: '1px solid var(--border-color)'
  },
  postInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: 1
  },
  postTypeIcon: {
    fontSize: '24px'
  },
  postCaption: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--text-primary)',
    marginBottom: '4px'
  },
  postMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '12px',
    color: 'var(--text-secondary)'
  },
  postStatus: {
    marginRight: '16px'
  },
  statusBadge: {
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'capitalize'
  },
  postActions: {
    display: 'flex',
    gap: '8px'
  },
  actionBtn: {
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
    borderRadius: '6px',
    padding: '6px',
    cursor: 'pointer',
    color: 'var(--text-secondary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  composerModal: {
    background: 'var(--bg-primary)',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '700px',
    maxHeight: '90vh',
    overflow: 'auto'
  },
  composerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    borderBottom: '1px solid var(--border-color)'
  },
  composerTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: 'var(--text-primary)'
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--text-secondary)'
  },
  progressSteps: {
    display: 'flex',
    padding: '20px',
    borderBottom: '1px solid var(--border-color)',
    gap: '20px'
  },
  progressStep: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    opacity: 0.5
  },
  activeProgressStep: {
    opacity: 1
  },
  stepIndicator: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'var(--bg-tertiary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-secondary)'
  },
  activeStepIndicator: {
    background: 'var(--primary-color)',
    color: 'white'
  },
  stepLabel: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--text-primary)'
  },
  composerContent: {
    padding: '20px'
  },
  uploadArea: {
    border: '2px dashed var(--border-color)',
    borderRadius: '12px',
    padding: '40px',
    textAlign: 'center',
    marginBottom: '20px'
  },
  uploadTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: 'var(--text-primary)',
    marginTop: '16px',
    marginBottom: '8px'
  },
  uploadDesc: {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    marginBottom: '16px'
  },
  supportedFormats: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    fontSize: '12px',
    color: 'var(--text-secondary)',
    marginBottom: '20px'
  },
  uploadButtons: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center'
  },
  mediaPreview: {
    marginTop: '20px'
  },
  previewTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--text-primary)',
    marginBottom: '12px'
  },
  thumbnailGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '12px'
  },
  thumbnailPlaceholder: {
    aspectRatio: '1',
    background: 'var(--bg-tertiary)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    color: 'var(--text-secondary)',
    fontSize: '12px'
  },
  formGroup: {
    marginBottom: '16px'
  },
  formLabel: {
    display: 'block',
    fontSize: '13px',
    fontWeight: '500',
    color: 'var(--text-primary)',
    marginBottom: '6px'
  },
  formInput: {
    width: '100%',
    padding: '10px 12px',
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    color: 'var(--text-primary)',
    fontSize: '14px'
  },
  captionTextarea: {
    width: '100%',
    padding: '12px',
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    color: 'var(--text-primary)',
    fontSize: '14px',
    resize: 'vertical'
  },
  charCounter: {
    fontSize: '12px',
    color: 'var(--text-secondary)',
    textAlign: 'right',
    marginTop: '4px'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px'
  },
  publishOptions: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px'
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: 'var(--text-primary)',
    cursor: 'pointer'
  },
  bestTimes: {
    padding: '14px',
    background: 'rgba(139, 92, 246, 0.1)',
    borderRadius: '8px',
    marginBottom: '20px'
  },
  subTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--text-primary)',
    marginBottom: '12px'
  },
  timeSuggestions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  timeSuggestion: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    color: 'var(--text-secondary)'
  },
  advancedOptions: {
    marginTop: '20px'
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    color: 'var(--text-primary)',
    marginBottom: '10px',
    cursor: 'pointer'
  },
  composerFooter: {
    display: 'flex',
    gap: '10px',
    padding: '20px',
    borderTop: '1px solid var(--border-color)',
    justifyContent: 'flex-end'
  }
};

export default ContentScheduler;
