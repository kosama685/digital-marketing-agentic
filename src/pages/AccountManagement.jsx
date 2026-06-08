import React from 'react';
import { Users, Plus, Search, Filter, MoreVertical, Edit, BarChart3, Pause, Trash2 } from 'lucide-react';

const AccountManagement = () => {
  const accounts = [
    { id: 1, username: '@fitness_pro', followers: '12.5K', following: '890', posts: 234, type: 'Business', verified: true, status: 'online', avatar: 'https://i.pravatar.cc/150?u=1', lastActive: '2m ago' },
    { id: 2, username: '@travel_blog', followers: '8.2K', following: '1.2K', posts: 156, type: 'Creator', verified: false, status: 'online', avatar: 'https://i.pravatar.cc/150?u=2', lastActive: '5m ago' },
    { id: 3, username: '@food_lover', followers: '5.1K', following: '650', posts: 89, type: 'Personal', verified: false, status: 'offline', avatar: 'https://i.pravatar.cc/150?u=3', lastActive: '1h ago' },
    { id: 4, username: '@tech_reviews', followers: '25.3K', following: '340', posts: 412, type: 'Business', verified: true, status: 'online', avatar: 'https://i.pravatar.cc/150?u=4', lastActive: 'Now' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Account Management</h1>
          <p style={styles.subtitle}>Manage your connected Instagram accounts</p>
        </div>
        <button className="btn-primary" style={styles.addButton}>
          <Plus size={20} />
          Add Account
        </button>
      </div>

      <div className="card" style={styles.filterCard}>
        <div style={styles.searchBox}>
          <Search size={20} color="#6b7280" />
          <input type="text" placeholder="Search accounts..." style={styles.searchInput} />
        </div>
        <div style={styles.filters}>
          <select style={styles.select}>
            <option>All Types</option>
            <option>Personal</option>
            <option>Business</option>
            <option>Creator</option>
          </select>
          <select style={styles.select}>
            <option>All Status</option>
            <option>Online</option>
            <option>Offline</option>
            <option>Error</option>
          </select>
          <button className="btn-secondary" style={styles.filterButton}>
            <Filter size={16} />
            More Filters
          </button>
        </div>
      </div>

      <div style={styles.accountsGrid}>
        {accounts.map((account) => (
          <div key={account.id} className="card" style={styles.accountCard}>
            <div style={styles.cardHeader}>
              <div style={styles.accountHeader}>
                <img src={account.avatar} alt={account.username} style={styles.avatar} />
                <div style={styles.accountInfo}>
                  <div style={styles.usernameRow}>
                    <span style={styles.username}>{account.username}</span>
                    {account.verified && <span style={styles.verifiedBadge}>✓</span>}
                  </div>
                  <span className="badge" style={{ background: account.type === 'Business' ? '#dbeafe' : account.type === 'Creator' ? '#fce7f3' : '#d1fae5', color: account.type === 'Business' ? '#1e40af' : account.type === 'Creator' ? '#9d174d' : '#065f46' }}>
                    {account.type}
                  </span>
                </div>
              </div>
              <button className="btn-secondary" style={styles.menuButton}>
                <MoreVertical size={18} />
              </button>
            </div>

            <div style={styles.stats}>
              <div style={styles.statItem}>
                <span style={styles.statValue}>{account.followers}</span>
                <span style={styles.statLabel}>Followers</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statValue}>{account.following}</span>
                <span style={styles.statLabel}>Following</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statValue}>{account.posts}</span>
                <span style={styles.statLabel}>Posts</span>
              </div>
            </div>

            <div style={styles.footer}>
              <div style={styles.statusRow}>
                <span style={{ ...styles.statusDot, background: account.status === 'online' ? '#10b981' : '#9ca3af' }}></span>
                <span style={styles.statusText}>{account.status === 'online' ? 'Connected' : 'Disconnected'}</span>
                <span style={styles.lastActive}>Last active: {account.lastActive}</span>
              </div>
              <div style={styles.actions}>
                <button className="btn-secondary" style={styles.actionButton} title="View Analytics">
                  <BarChart3 size={18} />
                </button>
                <button className="btn-secondary" style={styles.actionButton} title="Edit Profile">
                  <Edit size={18} />
                </button>
                <button className="btn-secondary" style={styles.actionButton} title="Pause Automation">
                  <Pause size={18} />
                </button>
                <button className="btn-danger" style={styles.actionButton} title="Disconnect">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '4px'
  },
  subtitle: {
    fontSize: '14px',
    color: 'var(--text-secondary)'
  },
  addButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  filterCard: {
    padding: '20px'
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    background: 'var(--bg-tertiary)',
    borderRadius: '10px',
    padding: '10px 16px',
    marginBottom: '15px'
  },
  searchInput: {
    flex: 1,
    border: 'none',
    background: 'transparent',
    fontSize: '14px',
    padding: '0'
  },
  filters: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  },
  select: {
    padding: '10px 14px',
    minWidth: '140px'
  },
  filterButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '10px 16px'
  },
  accountsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '20px'
  },
  accountCard: {
    padding: '20px'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px'
  },
  accountHeader: {
    display: 'flex',
    gap: '12px'
  },
  avatar: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  accountInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  usernameRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  username: {
    fontSize: '16px',
    fontWeight: '600',
    color: 'var(--text-primary)'
  },
  verifiedBadge: {
    color: '#3b82f6',
    fontSize: '14px'
  },
  menuButton: {
    padding: '6px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--text-secondary)'
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
    padding: '15px 0',
    borderTop: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)',
    marginBottom: '15px'
  },
  statItem: {
    textAlign: 'center'
  },
  statValue: {
    fontSize: '18px',
    fontWeight: '700',
    color: 'var(--text-primary)',
    display: 'block'
  },
  statLabel: {
    fontSize: '12px',
    color: 'var(--text-secondary)'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  statusRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%'
  },
  statusText: {
    fontSize: '13px',
    fontWeight: '500',
    color: 'var(--text-primary)'
  },
  lastActive: {
    fontSize: '12px',
    color: 'var(--text-muted)'
  },
  actions: {
    display: 'flex',
    gap: '6px'
  },
  actionButton: {
    padding: '8px'
  }
};

export default AccountManagement;
