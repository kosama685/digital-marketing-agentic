import React, { useState } from 'react';
import { Bot, Play, Pause, StopCircle, Settings, Plus, Hash, MapPin, Users, Heart, MessageSquare } from 'lucide-react';

const AutomationEngine = () => {
  const [activeTab, setActiveTab] = useState('follow');
  const [isRunning, setIsRunning] = useState(false);

  const automations = [
    { id: 'follow', name: 'Auto Follow/Unfollow', icon: Users, active: true },
    { id: 'like', name: 'Auto Like', icon: Heart, active: true },
    { id: 'comment', name: 'Auto Comment', icon: MessageSquare, active: false },
    { id: 'dm', name: 'Auto DM', icon: MessageSquare, active: false }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Automation Engine</h1>
          <p style={styles.subtitle}>Configure and manage your automation workflows</p>
        </div>
        <div style={styles.controls}>
          <button
            className={isRunning ? 'btn-danger' : 'btn-primary'}
            style={styles.runButton}
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? <><StopCircle size={20} /> Stop All</> : <><Play size={20} /> Start All</>}
          </button>
        </div>
      </div>

      <div style={styles.tabs}>
        {automations.map((auto) => {
          const Icon = auto.icon;
          return (
            <button
              key={auto.id}
              className={`tab ${activeTab === auto.id ? 'active' : ''}`}
              onClick={() => setActiveTab(auto.id)}
            >
              <Icon size={18} />
              {auto.name}
            </button>
          );
        })}
      </div>

      <div className="card" style={styles.configCard}>
        {activeTab === 'follow' && <FollowConfig isRunning={isRunning} />}
        {activeTab === 'like' && <LikeConfig isRunning={isRunning} />}
        {activeTab === 'comment' && <CommentConfig isRunning={isRunning} />}
        {activeTab === 'dm' && <DMConfig isRunning={isRunning} />}
      </div>
    </div>
  );
};

const FollowConfig = ({ isRunning }) => (
  <div style={styles.configContent}>
    <h3 style={styles.sectionTitle}>Target Source Selection</h3>
    <div style={styles.sources}>
      <label style={styles.sourceCheckbox}>
        <input type="checkbox" defaultChecked />
        <Hash size={18} color="#8b5cf6" />
        <span>Hashtags</span>
        <input type="text" placeholder="#fitness, #gym, #health" style={styles.sourceInput} />
      </label>
      <label style={styles.sourceCheckbox}>
        <input type="checkbox" />
        <MapPin size={18} color="#8b5cf6" />
        <span>Locations</span>
        <input type="text" placeholder="New York, NY" style={styles.sourceInput} />
      </label>
      <label style={styles.sourceCheckbox}>
        <input type="checkbox" defaultChecked />
        <Users size={18} color="#8b5cf6" />
        <span>Competitor Followers</span>
        <input type="text" placeholder="@competitor1, @competitor2" style={styles.sourceInput} />
      </label>
    </div>

    <h3 style={styles.sectionTitle}>Filters & Exclusions</h3>
    <div className="grid grid-2" style={styles.filtersGrid}>
      <div style={styles.filterGroup}>
        <label style={styles.filterLabel}>Follower Count</label>
        <div style={styles.rangeInput}>
          <input type="number" placeholder="Min" defaultValue={100} style={styles.rangeField} />
          <span>-</span>
          <input type="number" placeholder="Max" defaultValue={10000} style={styles.rangeField} />
        </div>
      </div>
      <div style={styles.filterGroup}>
        <label style={styles.filterLabel}>Posts Count</label>
        <div style={styles.rangeInput}>
          <input type="number" placeholder="Min" style={styles.rangeField} />
          <span>-</span>
          <input type="number" placeholder="Max" style={styles.rangeField} />
        </div>
      </div>
    </div>
    <div style={styles.toggles}>
      <label style={styles.toggle}><input type="checkbox" /> Exclude private accounts</label>
      <label style={styles.toggle}><input type="checkbox" /> Exclude business accounts</label>
      <label style={styles.toggle}><input type="checkbox" defaultChecked /> Exclude accounts without pic</label>
      <label style={styles.toggle}><input type="checkbox" /> Exclude verified accounts</label>
    </div>

    <h3 style={styles.sectionTitle}>Action Limits & Timing</h3>
    <div className="grid grid-3" style={styles.limitsGrid}>
      <div style={styles.limitItem}>
        <label style={styles.limitLabel}>Follows per hour</label>
        <input type="number" defaultValue={30} max={60} style={styles.limitInput} />
        <span style={styles.limitMax}>max 60</span>
      </div>
      <div style={styles.limitItem}>
        <label style={styles.limitLabel}>Follows per day</label>
        <input type="number" defaultValue={400} max={1000} style={styles.limitInput} />
        <span style={styles.limitMax}>max 1000</span>
      </div>
      <div style={styles.limitItem}>
        <label style={styles.limitLabel}>Random delay (seconds)</label>
        <div style={styles.delayInput}>
          <input type="number" defaultValue={15} style={styles.delayField} />
          <span>-</span>
          <input type="number" defaultValue={45} style={styles.delayField} />
        </div>
      </div>
    </div>

    <div style={styles.actions}>
      <button className="btn-primary" disabled={isRunning}>{isRunning ? 'Running...' : 'Start Automation'}</button>
      <button className="btn-secondary" disabled={isRunning}>Pause</button>
      <button className="btn-secondary">Save Preset</button>
    </div>
  </div>
);

const LikeConfig = ({ isRunning }) => (
  <div style={styles.configContent}>
    <h3 style={styles.sectionTitle}>Where to Like Posts</h3>
    <div style={styles.sources}>
      <label style={styles.sourceCheckbox}>
        <input type="checkbox" defaultChecked />
        <Hash size={18} color="#ec4899" />
        <span>Hashtag feeds</span>
        <input type="text" placeholder="#trending, #viral" style={styles.sourceInput} />
      </label>
      <label style={styles.sourceCheckbox}>
        <input type="checkbox" />
        <MapPin size={18} color="#ec4899" />
        <span>Location feeds</span>
        <input type="text" placeholder="Popular venues" style={styles.sourceInput} />
      </label>
      <label style={styles.sourceCheckbox}>
        <input type="checkbox" defaultChecked />
        <Users size={18} color="#ec4899" />
        <span>User feeds</span>
        <input type="text" placeholder="@target1, @target2" style={styles.sourceInput} />
      </label>
    </div>

    <h3 style={styles.sectionTitle}>Like Filters</h3>
    <div className="grid grid-3" style={styles.limitsGrid}>
      <div style={styles.limitItem}>
        <label style={styles.limitLabel}>Post age (hours)</label>
        <input type="number" defaultValue={24} style={styles.limitInput} />
      </div>
      <div style={styles.limitItem}>
        <label style={styles.limitLabel}>Min likes on post</label>
        <input type="number" defaultValue={50} style={styles.limitInput} />
      </div>
      <div style={styles.limitItem}>
        <label style={styles.limitLabel}>Max likes on post</label>
        <input type="number" defaultValue={5000} style={styles.limitInput} />
      </div>
    </div>

    <h3 style={styles.sectionTitle}>Limits</h3>
    <div className="grid grid-2" style={styles.limitsGrid}>
      <div style={styles.limitItem}>
        <label style={styles.limitLabel}>Likes per hour</label>
        <input type="number" defaultValue={60} style={styles.limitInput} />
      </div>
      <div style={styles.limitItem}>
        <label style={styles.limitLabel}>Likes per day</label>
        <input type="number" defaultValue={500} style={styles.limitInput} />
      </div>
    </div>

    <div style={styles.actions}>
      <button className="btn-primary" disabled={isRunning}>{isRunning ? 'Running...' : 'Activate Auto-Like'}</button>
      <button className="btn-secondary">View Queue</button>
      <button className="btn-secondary">History</button>
    </div>
  </div>
);

const CommentConfig = ({ isRunning }) => (
  <div style={styles.configContent}>
    <h3 style={styles.sectionTitle}>Comment Library</h3>
    <div style={styles.commentTemplates}>
      {['Amazing content! 🔥', 'Love this! Keep it up 💪', 'So inspiring! ✨', 'Great work! 👏', 'This is awesome! 😍'].map((template, i) => (
        <div key={i} style={styles.templateChip}>{template}</div>
      ))}
      <button className="btn-secondary" style={styles.addTemplate}>+ Add Template</button>
    </div>

    <div style={styles.spintaxBox}>
      <label style={styles.spintaxLabel}>Use Spintax for variation:</label>
      <code style={styles.spintaxCode}>{'{Great|Awesome|Amazing} {post|content|work}!'}</code>
    </div>

    <h3 style={styles.sectionTitle}>Limits</h3>
    <div className="grid grid-3" style={styles.limitsGrid}>
      <div style={styles.limitItem}>
        <label style={styles.limitLabel}>Comments per hour</label>
        <input type="number" defaultValue={20} style={styles.limitInput} />
      </div>
      <div style={styles.limitItem}>
        <label style={styles.limitLabel}>Comments per day</label>
        <input type="number" defaultValue={150} style={styles.limitInput} />
      </div>
      <div style={styles.limitItem}>
        <label style={styles.limitLabel}>Delay (seconds)</label>
        <input type="number" defaultValue={60} style={styles.limitInput} />
      </div>
    </div>

    <div style={styles.actions}>
      <button className="btn-primary" disabled={isRunning}>{isRunning ? 'Running...' : 'Enable Auto-Comment'}</button>
      <button className="btn-secondary">Test Comment</button>
      <button className="btn-secondary">Logs</button>
    </div>
  </div>
);

const DMConfig = ({ isRunning }) => (
  <div style={styles.configContent}>
    <h3 style={styles.sectionTitle}>When to Send DM</h3>
    <div style={styles.triggers}>
      <label style={styles.triggerCheckbox}>
        <input type="checkbox" defaultChecked />
        <span>New follower</span>
        <input type="text" placeholder="Delay after follow" defaultValue="1 hour" style={styles.triggerInput} />
      </label>
      <label style={styles.triggerCheckbox}>
        <input type="checkbox" />
        <span>User mentions your account</span>
        <input type="text" placeholder="Reply within" defaultValue="30 minutes" style={styles.triggerInput} />
      </label>
      <label style={styles.triggerCheckbox}>
        <input type="checkbox" />
        <span>User comments on your post</span>
        <span style={styles.triggerNote}>First-time commenters only</span>
      </label>
    </div>

    <h3 style={styles.sectionTitle}>Message Templates</h3>
    <div style={styles.templateBox}>
      <label style={styles.templateLabel}>Welcome Template:</label>
      <textarea style={styles.templateTextarea} defaultValue='Hey {name}! Thanks for following us 🙌 Check out our latest post! Want to collaborate? Reply here!' />
      <p style={styles.variablesTip}>Variables: {'{name}'}, {'{username}'}, {'{interest}'}, {'{link}'}</p>
    </div>

    <h3 style={styles.sectionTitle}>Safety Settings</h3>
    <div className="grid grid-3" style={styles.limitsGrid}>
      <div style={styles.limitItem}>
        <label style={styles.limitLabel}>Max DMs per hour</label>
        <input type="number" defaultValue={10} style={styles.limitInput} />
      </div>
      <div style={styles.limitItem}>
        <label style={styles.limitLabel}>Max DMs per day</label>
        <input type="number" defaultValue={50} style={styles.limitInput} />
      </div>
      <div style={styles.limitItem}>
        <label style={styles.limitLabel}>Delay (minutes)</label>
        <input type="number" defaultValue={10} style={styles.limitInput} />
      </div>
    </div>

    <div style={styles.actions}>
      <button className="btn-primary" disabled={isRunning}>{isRunning ? 'Running...' : 'Activate DM Bot'}</button>
      <button className="btn-secondary">Test Send</button>
      <button className="btn-secondary">Analytics</button>
    </div>
  </div>
);

const styles = {
  container: { display: 'flex', flexDirection: 'column', gap: '24px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: '24px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' },
  subtitle: { fontSize: '14px', color: 'var(--text-secondary)' },
  controls: { display: 'flex', gap: '12px' },
  runButton: { display: 'flex', alignItems: 'center', gap: '8px' },
  tabs: { display: 'flex', gap: '4px', background: 'var(--bg-tertiary)', padding: '4px', borderRadius: '8px', flexWrap: 'wrap' },
  configCard: { padding: '24px' },
  configContent: { display: 'flex', flexDirection: 'column', gap: '24px' },
  sectionTitle: { fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '12px' },
  sources: { display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' },
  sourceCheckbox: { display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: 'var(--bg-tertiary)', borderRadius: '8px' },
  sourceInput: { flex: 1, marginLeft: 'auto', minWidth: '200px' },
  filtersGrid: { marginBottom: '20px' },
  filterGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
  filterLabel: { fontSize: '13px', color: 'var(--text-secondary)' },
  rangeInput: { display: 'flex', alignItems: 'center', gap: '10px' },
  rangeField: { width: '100px' },
  toggles: { display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '20px' },
  toggle: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' },
  limitsGrid: { marginBottom: '20px' },
  limitItem: { display: 'flex', flexDirection: 'column', gap: '8px' },
  limitLabel: { fontSize: '13px', color: 'var(--text-secondary)' },
  limitInput: { width: '100%' },
  limitMax: { fontSize: '11px', color: 'var(--text-muted)' },
  delayInput: { display: 'flex', alignItems: 'center', gap: '10px' },
  delayField: { width: '80px' },
  actions: { display: 'flex', gap: '12px', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' },
  commentTemplates: { display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '15px' },
  templateChip: { padding: '8px 14px', background: 'var(--bg-tertiary)', borderRadius: '20px', fontSize: '13px', color: 'var(--text-primary)' },
  addTemplate: { padding: '8px 14px' },
  spintaxBox: { padding: '15px', background: 'var(--bg-tertiary)', borderRadius: '8px', marginBottom: '20px' },
  spintaxLabel: { fontSize: '13px', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' },
  spintaxCode: { fontSize: '13px', color: 'var(--primary-color)', background: 'var(--bg-primary)', padding: '8px 12px', borderRadius: '6px' },
  triggers: { display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' },
  triggerCheckbox: { display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: 'var(--bg-tertiary)', borderRadius: '8px' },
  triggerInput: { marginLeft: 'auto', width: '150px' },
  triggerNote: { fontSize: '12px', color: 'var(--text-muted)', marginLeft: '10px' },
  templateBox: { marginBottom: '20px' },
  templateLabel: { fontSize: '13px', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' },
  templateTextarea: { width: '100%', minHeight: '100px', resize: 'vertical' },
  variablesTip: { fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }
};

export default AutomationEngine;
