import React from 'react';
import { Shield, ChevronLeft, ChevronRight, Moon, Sun, Plus } from 'lucide-react';

const Sidebar = ({ collapsed, onToggle, menuItems, currentPage, onPageChange, darkMode, onToggleDarkMode }) => {
  return (
    <aside style={{
      ...styles.sidebar,
      width: collapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)'
    }}>
      <div style={styles.logoSection}>
        {!collapsed && (
          <>
            <Shield size={32} color="#8b5cf6" />
            <span style={styles.logoText}>InstaAuto Pro</span>
          </>
        )}
        <button onClick={onToggle} style={styles.toggleButton}>
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav style={styles.nav}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              style={{
                ...styles.navItem,
                background: isActive ? 'var(--primary-color)' : 'transparent',
                color: isActive ? 'white' : 'var(--text-secondary)',
                justifyContent: collapsed ? 'center' : 'flex-start'
              }}
              title={collapsed ? item.label : ''}
            >
              <Icon size={20} />
              {!collapsed && <span style={styles.navItemText}>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      <div style={styles.bottomSection}>
        {!collapsed && (
          <button className="btn-primary" style={styles.fab}>
            <Plus size={20} />
            <span>Quick Action</span>
          </button>
        )}
        
        <button
          onClick={onToggleDarkMode}
          style={{
            ...styles.themeToggle,
            justifyContent: collapsed ? 'center' : 'flex-start'
          }}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          {!collapsed && <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
        </button>
      </div>
    </aside>
  );
};

const styles = {
  sidebar: {
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    background: 'var(--bg-primary)',
    borderRight: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'width 0.3s',
    zIndex: 100
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    borderBottom: '1px solid var(--border-color)',
    gap: '10px'
  },
  logoText: {
    fontSize: '18px',
    fontWeight: '700',
    color: 'var(--text-primary)'
  },
  toggleButton: {
    background: 'var(--bg-tertiary)',
    border: 'none',
    borderRadius: '6px',
    padding: '8px',
    color: 'var(--text-secondary)',
    cursor: 'pointer'
  },
  nav: {
    flex: 1,
    padding: '15px 10px',
    overflowY: 'auto'
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  navItemText: {
    fontSize: '14px',
    fontWeight: '500'
  },
  bottomSection: {
    padding: '15px',
    borderTop: '1px solid var(--border-color)'
  },
  fab: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    marginBottom: '10px'
  },
  themeToggle: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    background: 'transparent',
    border: '1px solid var(--border-color)',
    color: 'var(--text-secondary)',
    cursor: 'pointer'
  }
};

export default Sidebar;
