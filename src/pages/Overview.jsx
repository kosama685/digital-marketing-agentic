import React from 'react';
import { TrendingUp, Users, Heart, MessageCircle, Mail, Eye, RefreshCw, Download, Plus, Filter, X } from 'lucide-react';

const Overview = () => {
  const activityData = [
    { label: 'Posts Published', value: 24, icon: Plus, color: '#8b5cf6' },
    { label: 'Follows Performed', value: 312, icon: Users, color: '#10b981' },
    { label: 'Likes Sent', value: 486, icon: Heart, color: '#ec4899' },
    { label: 'Comments Posted', value: 89, icon: MessageCircle, color: '#f59e0b' },
    { label: 'DMs Sent', value: 45, icon: Mail, color: '#3b82f6' },
    { label: 'Stories Viewed', value: 156, icon: Eye, color: '#8b5cf6' }
  ];

  const accounts = [
    { id: 1, username: '@fitness_pro', followers: '12.5K', status: 'online', avatar: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, username: '@travel_blog', followers: '8.2K', status: 'online', avatar: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, username: '@food_lover', followers: '5.1K', status: 'offline', avatar: 'https://i.pravatar.cc/150?u=3' }
  ];

  const activityLog = [
    { id: 1, action: 'Followed @user123', account: '@fitness_pro', time: '2m ago', status: 'success' },
    { id: 2, action: 'Liked post', account: '@travel_blog', time: '5m ago', status: 'success' },
    { id: 3, action: 'Comment posted', account: '@fitness_pro', time: '10m ago', status: 'success' },
    { id: 4, action: 'DM sent', account: '@food_lover', time: '15m ago', status: 'error' },
    { id: 5, action: 'Story viewed', account: '@travel_blog', time: '20m ago', status: 'success' }
  ];

  const upcomingPosts = [
    { id: 1, caption: 'Morning workout routine...', time: 'in 2h', image: 'https://picsum.photos/60/60?random=1' },
    { id: 2, caption: 'Sunset at the beach...', time: 'in 5h', image: 'https://picsum.photos/60/60?random=2' },
    { id: 3, caption: 'New recipe video!', time: 'tomorrow 9AM', image: 'https://picsum.photos/60/60?random=3' }
  ];

  return (
    <div style={styles.container}>
      {/* Account Health Card */}
      <div className="card" style={styles.healthCard}>
        <div style={styles.cardHeader}>
          <h3 style={styles.cardTitle}>Account Health</h3>
          <span className="badge badge-success">All Systems Operational</span>
        </div>
        <div style={styles.healthGrid}>
          <div style={styles.healthItem}>
            <span style={styles.healthLabel}>Connected Accounts</span>
            <span style={styles.healthValue}>{accounts.length}</span>
          </div>
          <div style={styles.healthItem}>
            <span style={styles.healthLabel}>Active Automations</span>
            <span style={styles.healthValue}>5</span>
          </div>
          <div style={styles.healthItem}>
            <span style={styles.healthLabel}>API Rate Limit</span>
            <span style={styles.healthValue}>78%</span>
          </div>
          <div style={styles.healthItem}>
            <span style={styles.healthLabel}>System Score</span>
            <span style={{ ...styles.healthValue, color: '#10b981' }}>94%</span>
          </div>
        </div>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: '94%' }}></div>
        </div>
      </div>

      {/* Today's Activity Summary */}
      <div className="grid grid-3" style={styles.activityGrid}>
        {activityData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="card" style={styles.statCard}>
              <div style={{ ...styles.statIcon, background: `${item.color}20` }}>
                <Icon size={24} color={item.color} />
              </div>
              <div>
                <p style={styles.statLabel}>{item.label}</p>
                <p style={styles.statValue}>{item.value.toLocaleString()}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Growth Metrics & Quick Stats */}
      <div className="grid grid-2" style={styles.metricsGrid}>
        <div className="card">
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Growth Metrics (7 days)</h3>
            <div style={styles.cardActions}>
              <button className="btn-secondary" style={styles.smallButton}>
                <RefreshCw size={16} />
              </button>
              <button className="btn-secondary" style={styles.smallButton}>
                <Download size={16} />
              </button>
            </div>
          </div>
          <div style={styles.chartPlaceholder}>
            <TrendingUp size={48} color="#8b5cf6" />
            <p style={styles.chartText}>Follower growth chart visualization</p>
          </div>
          <div style={styles.growthStats}>
            <div style={styles.growthStat}>
              <span style={styles.growthLabel}>Total Followers</span>
              <span style={styles.growthValue}>+1,234</span>
            </div>
            <div style={styles.growthStat}>
              <span style={styles.growthLabel}>Engagement Rate</span>
              <span style={styles.growthValue}>4.8%</span>
            </div>
            <div style={styles.growthStat}>
              <span style={styles.growthLabel}>Profile Visits</span>
              <span style={styles.growthValue}>2,456</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Connected Accounts</h3>
            <button className="btn-primary" style={styles.addButton}>
              <Plus size={16} />
              Add Account
            </button>
          </div>
          <div style={styles.accountsList}>
            {accounts.map((account) => (
              <div key={account.id} style={styles.accountItem}>
                <img src={account.avatar} alt={account.username} style={styles.accountAvatar} />
                <div style={styles.accountInfo}>
                  <span style={styles.accountUsername}>{account.username}</span>
                  <span style={styles.accountFollowers}>{account.followers} followers</span>
                </div>
                <span style={{ ...styles.statusDot, background: account.status === 'online' ? '#10b981' : '#9ca3af' }}></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Log & Upcoming Schedule */}
      <div className="grid grid-2" style={styles.bottomGrid}>
        <div className="card">
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Activity Log</h3>
            <div style={styles.cardActions}>
              <button className="btn-secondary" style={styles.smallButton}>
                <Filter size={16} />
              </button>
              <button className="btn-secondary" style={styles.smallButton}>
                View All
              </button>
            </div>
          </div>
          <div style={styles.activityLog}>
            {activityLog.map((log) => (
              <div key={log.id} style={styles.logItem}>
                <div style={styles.logContent}>
                  <span style={styles.logAction}>{log.action}</span>
                  <span style={styles.logAccount}>{log.account}</span>
                </div>
                <div style={styles.logMeta}>
                  <span style={styles.logTime}>{log.time}</span>
                  <span style={{ ...styles.logStatus, color: log.status === 'success' ? '#10b981' : '#ef4444' }}>
                    {log.status === 'success' ? '✓' : '✗'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Upcoming Schedule</h3>
            <button className="btn-primary" style={styles.smallButton}>
              <Plus size={16} />
            </button>
          </div>
          <div style={styles.scheduleList}>
            {upcomingPosts.map((post) => (
              <div key={post.id} style={styles.scheduleItem}>
                <img src={post.image} alt="" style={styles.scheduleImage} />
                <div style={styles.scheduleInfo}>
                  <p style={styles.scheduleCaption}>{post.caption}</p>
                  <span style={styles.scheduleTime}>{post.time}</span>
                </div>
                <button className="btn-secondary" style={styles.editButton}>Edit</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  healthCard: {
    padding: '24px'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: 'var(--text-primary)'
  },
  cardActions: {
    display: 'flex',
    gap: '8px'
  },
  smallButton: {
    padding: '6px 10px'
  },
  healthGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    marginBottom: '15px'
  },
  healthItem: {
    textAlign: 'center'
  },
  healthLabel: {
    fontSize: '13px',
    color: 'var(--text-secondary)',
    display: 'block',
    marginBottom: '5px'
  },
  healthValue: {
    fontSize: '24px',
    fontWeight: '700',
    color: 'var(--text-primary)'
  },
  progressBar: {
    height: '8px',
    background: 'var(--bg-tertiary)',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
    borderRadius: '4px',
    transition: 'width 0.3s'
  },
  activityGrid: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))'
  },
  statCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '20px'
  },
  statIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  statLabel: {
    fontSize: '13px',
    color: 'var(--text-secondary)',
    marginBottom: '4px'
  },
  statValue: {
    fontSize: '24px',
    fontWeight: '700',
    color: 'var(--text-primary)'
  },
  metricsGrid: {
    minHeight: '300px'
  },
  chartPlaceholder: {
    height: '150px',
    background: 'var(--bg-tertiary)',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px'
  },
  chartText: {
    fontSize: '14px',
    color: 'var(--text-secondary)'
  },
  growthStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
    paddingTop: '15px',
    borderTop: '1px solid var(--border-color)'
  },
  growthStat: {
    textAlign: 'center'
  },
  growthLabel: {
    fontSize: '12px',
    color: 'var(--text-secondary)',
    display: 'block'
  },
  growthValue: {
    fontSize: '18px',
    fontWeight: '600',
    color: 'var(--primary-color)'
  },
  accountsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  accountItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    background: 'var(--bg-tertiary)',
    borderRadius: '10px'
  },
  accountAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  accountInfo: {
    flex: 1
  },
  accountUsername: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--text-primary)',
    display: 'block'
  },
  accountFollowers: {
    fontSize: '12px',
    color: 'var(--text-secondary)'
  },
  statusDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%'
  },
  addButton: {
    padding: '8px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  bottomGrid: {
    minHeight: '280px'
  },
  activityLog: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  logItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    background: 'var(--bg-tertiary)',
    borderRadius: '8px'
  },
  logContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px'
  },
  logAction: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--text-primary)'
  },
  logAccount: {
    fontSize: '12px',
    color: 'var(--text-secondary)'
  },
  logMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  logTime: {
    fontSize: '12px',
    color: 'var(--text-muted)'
  },
  logStatus: {
    fontSize: '16px',
    fontWeight: '600'
  },
  scheduleList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  scheduleItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    background: 'var(--bg-tertiary)',
    borderRadius: '10px'
  },
  scheduleImage: {
    width: '60px',
    height: '60px',
    borderRadius: '8px',
    objectFit: 'cover'
  },
  scheduleInfo: {
    flex: 1
  },
  scheduleCaption: {
    fontSize: '14px',
    color: 'var(--text-primary)',
    marginBottom: '4px'
  },
  scheduleTime: {
    fontSize: '12px',
    color: 'var(--primary-color)',
    fontWeight: '500'
  },
  editButton: {
    padding: '6px 12px',
    fontSize: '12px'
  }
};

export default Overview;
