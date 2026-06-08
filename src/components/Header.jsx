import React, { useState } from 'react';
import { Bell, ChevronDown, LogOut, User, Shield, Moon, Sun, X } from 'lucide-react';

const Header = ({ user, onLogout, notifications, onClearNotifications, darkMode }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'warning': return '⚠️';
      case 'success': return '✅';
      case 'info': return 'ℹ️';
      default: return '🔔';
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.breadcrumb}>
        <span>Dashboard</span>
        <span style={styles.breadcrumbSeparator}>/</span>
        <span style={styles.breadcrumbCurrent}>Overview</span>
      </div>

      <div style={styles.rightSection}>
        <div style={styles.notificationsWrapper}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            style={styles.iconButton}
          >
            <Bell size={20} />
            {notifications.length > 0 && (
              <span style={styles.badge}>{notifications.length}</span>
            )}
          </button>

          {showNotifications && (
            <div style={styles.dropdown}>
              <div style={styles.dropdownHeader}>
                <h4 style={styles.dropdownTitle}>Notifications</h4>
                <button onClick={onClearNotifications} style={styles.clearButton}>
                  Clear all
                </button>
              </div>
              <div style={styles.notificationList}>
                {notifications.length === 0 ? (
                  <p style={styles.emptyMessage}>No notifications</p>
                ) : (
                  notifications.map((notif) => (
                    <div key={notif.id} style={styles.notificationItem}>
                      <span style={styles.notificationIcon}>{getNotificationIcon(notif.type)}</span>
                      <div style={styles.notificationContent}>
                        <p style={styles.notificationText}>{notif.message}</p>
                        <span style={styles.notificationTime}>{notif.time}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        <div style={styles.profileWrapper}>
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            style={styles.profileButton}
          >
            <img src={user?.avatar} alt={user?.name} style={styles.avatar} />
            <div style={styles.profileInfo}>
              <span style={styles.profileName}>{user?.name}</span>
              <span style={styles.profileRole}>{user?.role}</span>
            </div>
            <ChevronDown size={16} color="#6b7280" />
          </button>

          {showProfileMenu && (
            <div style={{ ...styles.dropdown, right: 0, left: 'auto' }}>
              <div style={styles.profileMenuItem}>
                <User size={18} />
                <span>My Profile</span>
              </div>
              <div style={styles.profileMenuItem}>
                <Shield size={18} />
                <span>Security Settings</span>
              </div>
              <div style={styles.divider}></div>
              <button onClick={onLogout} style={styles.logoutButton}>
                <LogOut size={18} />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    height: 'var(--header-height)',
    background: 'var(--bg-primary)',
    borderBottom: '1px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    zIndex: 50
  },
  breadcrumb: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: 'var(--text-secondary)'
  },
  breadcrumbSeparator: {
    color: 'var(--border-color)'
  },
  breadcrumbCurrent: {
    color: 'var(--text-primary)',
    fontWeight: '500'
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  iconButton: {
    position: 'relative',
    background: 'transparent',
    border: 'none',
    padding: '8px',
    borderRadius: '8px',
    color: 'var(--text-secondary)',
    cursor: 'pointer'
  },
  badge: {
    position: 'absolute',
    top: '4px',
    right: '4px',
    background: 'var(--danger-color)',
    color: 'white',
    fontSize: '10px',
    fontWeight: '600',
    minWidth: '16px',
    height: '16px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileWrapper: {
    position: 'relative'
  },
  profileButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: 'transparent',
    border: '1px solid var(--border-color)',
    padding: '6px 12px',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  profileName: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--text-primary)'
  },
  profileRole: {
    fontSize: '12px',
    color: 'var(--text-secondary)'
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    right: '0',
    marginTop: '8px',
    background: 'var(--bg-primary)',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    boxShadow: 'var(--shadow-lg)',
    minWidth: '220px',
    zIndex: 100
  },
  dropdownHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    borderBottom: '1px solid var(--border-color)'
  },
  dropdownTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--text-primary)'
  },
  clearButton: {
    background: 'none',
    border: 'none',
    color: 'var(--primary-color)',
    fontSize: '12px',
    cursor: 'pointer'
  },
  notificationList: {
    maxHeight: '300px',
    overflowY: 'auto'
  },
  notificationItem: {
    display: 'flex',
    gap: '12px',
    padding: '12px 16px',
    borderBottom: '1px solid var(--border-color)'
  },
  notificationIcon: {
    fontSize: '18px'
  },
  notificationContent: {
    flex: 1
  },
  notificationText: {
    fontSize: '13px',
    color: 'var(--text-primary)',
    marginBottom: '4px'
  },
  notificationTime: {
    fontSize: '11px',
    color: 'var(--text-muted)'
  },
  emptyMessage: {
    padding: '20px',
    textAlign: 'center',
    color: 'var(--text-secondary)',
    fontSize: '14px'
  },
  profileMenuItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 16px',
    color: 'var(--text-primary)',
    fontSize: '14px',
    cursor: 'pointer'
  },
  divider: {
    height: '1px',
    background: 'var(--border-color)',
    margin: '8px 0'
  },
  logoutButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
    padding: '10px 16px',
    background: 'none',
    border: 'none',
    color: 'var(--danger-color)',
    fontSize: '14px',
    cursor: 'pointer'
  }
};

export default Header;
