import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Sidebar from './Sidebar';
import Header from './Header';
import Overview from '../pages/Overview';
import AccountManagement from '../pages/AccountManagement';
import AutomationEngine from '../pages/AutomationEngine';
import TargetingScraping from '../pages/TargetingScraping';
import ContentScheduler from '../pages/ContentScheduler';
import BlogCMS from '../pages/BlogCMS';
import SocialHub from '../pages/SocialHub';
import EmailMarketing from '../pages/EmailMarketing';
import { Home, Users, Bot, Target, Calendar, FileText, MessageCircle, Mail, BarChart3, Search, Building, CreditCard, Settings } from 'lucide-react';

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('overview');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'warning', message: 'Action block warning on @account1', time: '5m ago' },
    { id: 2, type: 'success', message: '50 posts published successfully', time: '1h ago' },
    { id: 3, type: 'info', message: 'New follower: @user123', time: '2h ago' }
  ]);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'accounts', label: 'Account Management', icon: Users },
    { id: 'automation', label: 'Automation Engine', icon: Bot },
    { id: 'targeting', label: 'Targeting & Scraping', icon: Target },
    { id: 'scheduler', label: 'Content Scheduler', icon: Calendar },
    { id: 'blog', label: 'Blog/CMS Manager', icon: FileText },
    { id: 'social', label: 'Social Hub', icon: MessageCircle },
    { id: 'email', label: 'Email Marketing', icon: Mail },
    { id: 'analytics', label: 'Analytics & Reports', icon: BarChart3 },
    { id: 'seo', label: 'SEO/AEO/GEO Tools', icon: Search },
    { id: 'competitor', label: 'Competitor Intelligence', icon: Building },
    { id: 'billing', label: 'Billing & Subscription', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'overview': return <Overview />;
      case 'accounts': return <AccountManagement />;
      case 'automation': return <AutomationEngine />;
      case 'targeting': return <TargetingScraping />;
      case 'scheduler': return <ContentScheduler />;
      case 'blog': return <BlogCMS />;
      case 'social': return <SocialHub />;
      case 'email': return <EmailMarketing />;
      default: return <Overview />;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-secondary)' }} data-theme={darkMode ? 'dark' : 'light'}>
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        menuItems={menuItems}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />
      
      <div style={{ flex: 1, marginLeft: sidebarCollapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)', transition: 'margin-left 0.3s' }}>
        <Header
          user={user}
          onLogout={logout}
          notifications={notifications}
          onClearNotifications={() => setNotifications([])}
          darkMode={darkMode}
        />
        
        <main style={{ padding: '24px' }}>
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
