import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Shield, Mail, Lock, Eye, EyeOff, Smartphone, CheckCircle, AlertCircle } from 'lucide-react';

const LoginPortal = ({ onLoginSuccess }) => {
  const { login, twoFAEnabled } = useAuth();
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    twoFACode: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [show2FAInput, setShow2FAInput] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await login(formData.email, formData.password, formData.twoFACode);
      if (result.success) {
        setSuccess('Login successful! Redirecting...');
        setTimeout(() => onLoginSuccess(), 1000);
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setIsLoading(true);
    // Simulated registration
    setTimeout(() => {
      setSuccess('Registration successful! Please check your email to verify.');
      setActiveTab('login');
      setIsLoading(false);
    }, 1500);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setSuccess('Password reset link sent to your email!');
      setActiveTab('login');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginCard}>
        <div style={styles.logo}>
          <Shield size={48} color="#8b5cf6" />
          <h1 style={styles.title}>InstaAuto Pro</h1>
          <p style={styles.subtitle}>Multi-Tenant Automation Platform</p>
        </div>

        <div style={styles.tabs}>
          <button
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
          <button
            className={`tab ${activeTab === 'forgot' ? 'active' : ''}`}
            onClick={() => setActiveTab('forgot')}
          >
            Forgot Password
          </button>
        </div>

        {error && (
          <div style={styles.errorBox}>
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div style={styles.successBox}>
            <CheckCircle size={18} />
            <span>{success}</span>
          </div>
        )}

        {activeTab === 'login' && (
          <form onSubmit={handleLogin} style={styles.form}>
            <div style={styles.inputGroup}>
              <Mail size={20} color="#6b7280" />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={styles.inputWithIcon}
              />
            </div>

            <div style={styles.inputGroup}>
              <Lock size={20} color="#6b7280" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                style={styles.inputWithIcon}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.eyeButton}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {show2FAInput && (
              <div style={styles.inputGroup}>
                <Smartphone size={20} color="#6b7280" />
                <input
                  type="text"
                  name="twoFACode"
                  placeholder="Enter 2FA code"
                  value={formData.twoFACode}
                  onChange={handleInputChange}
                  maxLength={6}
                  style={{ ...styles.inputWithIcon, textAlign: 'center', letterSpacing: '8px' }}
                />
              </div>
            )}

            <button type="submit" className="btn-primary" style={styles.submitButton} disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>

            <div style={styles.divider}>
              <span>or continue with</span>
            </div>

            <div style={styles.oauthButtons}>
              <button type="button" className="btn-secondary" style={styles.oauthButton}>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button type="button" className="btn-secondary" style={styles.oauthButton}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#00A4EF">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-2.097 1.029-2.833-.103-.253-.446-1.27.098-2.641 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.371.203 2.388.1 2.641.64.736 1.028 1.742 1.028 2.833 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                Microsoft
              </button>
            </div>

            <div style={styles.links}>
              <button type="button" onClick={() => setShow2FAInput(!show2FAInput)} style={styles.linkButton}>
                Enable 2FA
              </button>
              <button type="button" onClick={() => setActiveTab('forgot')} style={styles.linkButton}>
                Forgot Password?
              </button>
            </div>
          </form>
        )}

        {activeTab === 'register' && (
          <form onSubmit={handleRegister} style={styles.form}>
            <div style={styles.inputGroup}>
              <Mail size={20} color="#6b7280" />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={styles.inputWithIcon}
              />
            </div>

            <div style={styles.inputGroup}>
              <Lock size={20} color="#6b7280" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                style={styles.inputWithIcon}
              />
            </div>

            <div style={styles.inputGroup}>
              <Lock size={20} color="#6b7280" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                style={styles.inputWithIcon}
              />
            </div>

            <button type="submit" className="btn-primary" style={styles.submitButton} disabled={isLoading}>
              {isLoading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>
        )}

        {activeTab === 'forgot' && (
          <form onSubmit={handleForgotPassword} style={styles.form}>
            <p style={styles.forgotText}>
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <div style={styles.inputGroup}>
              <Mail size={20} color="#6b7280" />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={styles.inputWithIcon}
              />
            </div>

            <button type="submit" className="btn-primary" style={styles.submitButton} disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </button>

            <button type="button" onClick={() => setActiveTab('login')} style={styles.backButton}>
              ← Back to Login
            </button>
          </form>
        )}

        <div style={styles.securityNote}>
          <Shield size={16} color="#10b981" />
          <span>Secured with 256-bit encryption</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  loginCard: {
    background: 'white',
    borderRadius: '20px',
    padding: '40px',
    width: '100%',
    maxWidth: '450px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
  },
  logo: {
    textAlign: 'center',
    marginBottom: '30px'
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#111827',
    marginTop: '15px'
  },
  subtitle: {
    fontSize: '14px',
    color: '#6b7280',
    marginTop: '5px'
  },
  tabs: {
    marginBottom: '25px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  inputGroup: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  inputWithIcon: {
    width: '100%',
    paddingLeft: '45px',
    paddingRight: '45px'
  },
  eyeButton: {
    position: 'absolute',
    right: '12px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#6b7280',
    padding: '5px'
  },
  submitButton: {
    width: '100%',
    marginTop: '10px'
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0'
  },
  oauthButtons: {
    display: 'flex',
    gap: '10px'
  },
  oauthButton: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px'
  },
  linkButton: {
    background: 'none',
    border: 'none',
    color: '#8b5cf6',
    fontSize: '13px',
    textDecoration: 'underline'
  },
  backButton: {
    background: 'none',
    border: 'none',
    color: '#6b7280',
    fontSize: '14px',
    marginTop: '10px'
  },
  forgotText: {
    color: '#6b7280',
    fontSize: '14px',
    marginBottom: '15px',
    lineHeight: '1.6'
  },
  errorBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px',
    background: 'rgba(239, 68, 68, 0.1)',
    borderRadius: '8px',
    color: '#ef4444',
    fontSize: '14px',
    marginBottom: '15px'
  },
  successBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px',
    background: 'rgba(16, 185, 129, 0.1)',
    borderRadius: '8px',
    color: '#10b981',
    fontSize: '14px',
    marginBottom: '15px'
  },
  securityNote: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '25px',
    color: '#10b981',
    fontSize: '12px'
  }
};

export default LoginPortal;
