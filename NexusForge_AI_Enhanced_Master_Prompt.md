# ╔══════════════════════════════════════════════════════════════════════╗
# ║   NEXUSFORGE AI — ENTERPRISE MASTER DEVELOPMENT PROMPT v4.0         ║
# ║   Director Edition | 100+ Projects | Sales & Marketing Focus        ║
# ╚══════════════════════════════════════════════════════════════════════╝

> **WHO THIS IS FOR:** Sales & Marketing Directors managing 100+ client projects, agencies,
> enterprise marketing teams, and SaaS builders who need a production-grade, white-label,
> AI-powered social media + content + CRM + sales automation platform.
>
> **WHAT THIS BUILDS:** A single platform that replaces Hootsuite + HubSpot + Semrush +
> Mailchimp + Zapier + Ahrefs + ManyChat + Buffer + Monday.com — all in one.

---

## ═══════════════════════════════════════════════════════
## PLATFORM IDENTITY & BRAND
## ═══════════════════════════════════════════════════════

```
Platform Name:    NexusForge AI
Tagline:          "One Platform. Every Channel. Zero Limits."
Target Market:    Agencies, Enterprise Marketing Teams, Growth Hackers
Primary Users:    Marketing Directors, Social Media Managers, SEO Teams,
                  Sales Teams, Content Creators, Agency Account Managers
Billing Model:    SaaS (Starter $29 / Pro $79 / Agency $199 / Enterprise Custom)
White-Label:      Full agency white-labeling with custom domain + branding
Client Portal:    Each client gets their own branded login sub-domain
```

---

## ═══════════════════════════════════════════════════════
## TECH STACK — NON-NEGOTIABLE
## ═══════════════════════════════════════════════════════

```
FRONTEND:
  Framework:      Next.js 15 (App Router) + TypeScript (strict mode)
  Styling:        TailwindCSS v4 + shadcn/ui (full component library)
  Animation:      Framer Motion (page transitions, hover states, micro-interactions)
  Charts:         Recharts + Nivo (complex analytics)
  Tables:         TanStack Table v8 (sorting, filtering, pagination, row selection)
  Forms:          React Hook Form + Zod (validation schemas)
  Notifications:  Sonner (toast system)
  Icons:          Lucide React + React Icons
  Calendar:       React Big Calendar + FullCalendar
  Rich Editor:    TipTap (blog editor with AI extension)
  DnD:            @dnd-kit (drag and drop)
  State:          Zustand (global state) + React Query (server state)
  Date:           date-fns
  Canvas:         Konva.js (image editor)
  Celebration:    canvas-confetti

BACKEND:
  Runtime:        Node.js 20+ / Python 3.12 (FastAPI)
  API Style:      REST + GraphQL (Apollo)
  Auth:           NextAuth.js v5 + Passport.js
  Queue:          Bull + Redis (background jobs)
  WebSockets:     Socket.io (real-time features)
  Cache:          Redis (session + API cache)
  Jobs:           node-cron (scheduled tasks)
  Email:          Nodemailer + Resend
  Storage:        AWS S3 / Cloudflare R2
  CDN:            Cloudflare
  PDF:            Puppeteer + jsPDF
  CSV:            PapaParse + xlsx

DATABASE:
  Primary:        PostgreSQL 16 (Supabase or self-hosted)
  Cache/Queue:    Redis 7
  Search:         Meilisearch (full-text search)
  Analytics:      ClickHouse (high-volume event data)
  File Meta:      PostgreSQL with UUID primary keys

AI PROVIDERS:
  OpenAI:         GPT-4o, GPT-4-turbo, DALL-E 3, Whisper
  Anthropic:      Claude 3.5 Sonnet, Claude 3 Opus
  Google:         Gemini 1.5 Pro, Gemini Flash, Imagen
  xAI:            Grok-2, Grok-Vision
  NVIDIA NIM:     Nemotron-3, Mistral-Large, Llama-4 Maverick, Phi-4,
                  Kimi-K2, Llama-3.2 Vision, NV-Embed, Magpie-TTS
  Stability AI:   SDXL, Stable Diffusion 3
  RunwayML:       Gen-3 (video generation)
  ElevenLabs:     Voice cloning + TTS

SOCIAL APIS:
  Meta:           Instagram Graph API + Facebook Graph API
  Pinterest:      Pinterest API v5
  LinkedIn:       LinkedIn Marketing API
  Twitter/X:      X API v2
  TikTok:         TikTok for Developers API
  YouTube:        YouTube Data API v3
  Snapchat:       Snapchat Marketing API
  Reddit:         Reddit API
  Telegram:       Telegram Bot API
  Discord:        Discord Bot API

PAYMENT:
  Stripe:         Subscriptions, usage-based billing, invoices
  PayPal:         Alternative payment
  Paddle:         International SaaS billing

THIRD-PARTY:
  Twilio:         SMS + WhatsApp
  2Captcha:       CAPTCHA solving
  Brightdata:     Proxy network
  SendGrid:       Transactional email
  Zapier/Make:    Workflow automation bridge
  Segment:        Analytics tracking
  Sentry:         Error monitoring
  Datadog:        Performance monitoring
```

---

## ═══════════════════════════════════════════════════════
## DESIGN SYSTEM — ENFORCE STRICTLY
## ═══════════════════════════════════════════════════════

```
COLOR PALETTE (Dark Mode Default):
  Background:     #0A0A0F (near black)
  Card Surface:   #121218 (dark card)
  Card Border:    #1E1E2E (subtle border)
  Elevated:       #1A1A2E (slightly lighter card)
  
  Primary:        #6366F1 (Indigo-500) — main CTA, active states
  Success:        #10B981 (Emerald-500) — success, growth, active
  Warning:        #F59E0B (Amber-500) — warnings, pending, caution
  Danger:         #EF4444 (Red-500) — errors, delete, danger
  Info:           #22D3EE (Cyan-400) — info, links, highlights
  Purple:         #A855F7 (Purple-500) — AI features, premium
  
  Text Primary:   #F8FAFC
  Text Secondary: #94A3B8
  Text Muted:     #475569

TYPOGRAPHY:
  Display:        font-bold text-3xl+    (page titles)
  Heading:        font-semibold text-xl  (section headers)
  Subheading:     font-medium text-lg    (card titles)
  Body:           font-normal text-sm    (content)
  Caption:        font-normal text-xs    (labels, timestamps)
  Code:           font-mono text-sm      (technical text)

SPACING SCALE:
  Cards:          p-6 (standard), p-4 (compact)
  Sections:       gap-6 (standard grid gap)
  Stack:          space-y-4 (vertical stacking)
  Border Radius:  rounded-xl (cards), rounded-2xl (modals), rounded-lg (buttons)

ANIMATION TOKENS:
  Hover Lift:     translateY(-2px) + shadow-lg (200ms ease)
  Button Press:   scale(0.97) (100ms)
  Page Enter:     opacity 0→1 + translateY(10px→0) (300ms)
  Skeleton:       shimmer gradient left→right (1.5s loop)
  Modal Open:     scale(0.95→1) + opacity (200ms)
  Sidebar:        width transition (250ms)

COMPONENT STANDARDS:
  StatCard:       gradient border, count-up animation, sparkline
  DataTable:      sticky header, row hover, bulk select checkbox
  Modal:          backdrop blur, escape key close, focus trap
  Form Fields:    floating label, real-time validation, character count
  Buttons:        loading spinner state, disabled state, icon+text
  Tooltips:       on all truncated text (MANDATORY)
  Empty States:   illustrated, with CTA button (never just "No data")
  Loading:        skeleton shimmer (NEVER just a spinner alone)
```

---

## ═══════════════════════════════════════════════════════
## FOLDER STRUCTURE
## ═══════════════════════════════════════════════════════

```
nexusforge-ai/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth layout group
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── forgot-password/page.tsx
│   ├── (dashboard)/              # Main dashboard layout
│   │   ├── layout.tsx            # Sidebar + navbar + activity stream
│   │   ├── page.tsx              # Dashboard overview
│   │   ├── accounts/page.tsx
│   │   ├── automation/page.tsx
│   │   ├── targeting/page.tsx
│   │   ├── scheduler/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── social-hub/page.tsx
│   │   ├── email/page.tsx
│   │   ├── analytics/page.tsx
│   │   ├── seo/page.tsx
│   │   ├── competitors/page.tsx
│   │   ├── campaigns/page.tsx
│   │   ├── crm/page.tsx          # NEW: CRM & Lead Management
│   │   ├── products/page.tsx
│   │   ├── visitors/page.tsx
│   │   ├── reports/page.tsx
│   │   ├── escalations/page.tsx
│   │   ├── influencers/page.tsx  # NEW: Influencer Management
│   │   ├── agency/page.tsx       # NEW: Agency/Client Management
│   │   ├── ai-studio/page.tsx    # NEW: AI Hub
│   │   ├── billing/page.tsx
│   │   ├── team/page.tsx
│   │   ├── settings/page.tsx
│   │   └── admin/page.tsx        # Admin only
│   └── api/                      # API routes
│       ├── auth/[...nextauth]/
│       ├── ai/generate/
│       ├── social/publish/
│       └── webhooks/
│
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── shared/                   # Global reusable components
│   │   ├── StatCard.tsx
│   │   ├── ModelSelector.tsx
│   │   ├── ActivityStream.tsx
│   │   ├── MediaGallery.tsx
│   │   ├── DataTable.tsx
│   │   ├── ChartCard.tsx
│   │   ├── EmptyState.tsx
│   │   ├── SkeletonCard.tsx
│   │   ├── GlobalSearch.tsx
│   │   ├── NotificationBell.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── AIAssistantPanel.tsx
│   └── views/                    # One file per major view
│       ├── DashboardView.tsx
│       ├── AutomationView.tsx
│       ├── BlogView.tsx
│       ├── CRMView.tsx
│       ├── AgencyView.tsx
│       └── [all other views].tsx
│
├── lib/
│   ├── types.ts                  # All TypeScript interfaces
│   ├── utils.ts                  # Helper functions
│   ├── mockData.ts               # Realistic seed data
│   ├── aiSimulator.ts            # AI response simulation
│   ├── storage.ts                # localStorage helpers
│   ├── constants.ts              # App-wide constants
│   └── validations.ts            # Zod schemas
│
├── hooks/
│   ├── useAuth.ts
│   ├── useAutomation.ts
│   ├── useAI.ts
│   ├── useRealtime.ts
│   └── useLocalStorage.ts
│
├── store/
│   ├── authStore.ts              # Zustand auth store
│   ├── appStore.ts               # Global app state
│   ├── automationStore.ts
│   └── notificationStore.ts
│
└── public/
    ├── demo-avatars/
    └── platform-logos/
```

---

## ═══════════════════════════════════════════════════════
## PHASE 0: LOGIN, AUTH & ROLE SYSTEM
## ═══════════════════════════════════════════════════════

### 0.1 — Login Page (Beautiful, Production-Grade)

```
VISUAL DESIGN:
  - Full-screen dark split layout: left side = animated gradient/brand art,
    right side = centered login card with glassmorphism
  - Logo + tagline at top
  - Animated floating particles or mesh gradient in background
  - Platform trust badges at bottom ("256-bit encryption", "SOC 2 Ready", etc.)

LOGIN CARD CONTAINS:
  Tabs: [Login] [Register] [Forgot Password]

  LOGIN TAB:
    - Email field (with @domain autocomplete)
    - Password field (show/hide toggle)
    - "Remember me for 30 days" checkbox
    - [Sign In] button → loading state → success redirect
    - OR separator
    - [Continue with Google] button (mock OAuth)
    - [Continue with Microsoft] button (mock OAuth)
    - "Forgot password?" link

  REGISTER TAB:
    - First Name + Last Name
    - Work Email
    - Company Name
    - Password (strength meter: Weak/Fair/Strong/Very Strong)
    - Confirm Password
    - Role dropdown: [Marketing Director, Social Media Manager, Agency Owner,
                      Content Creator, SEO Specialist, Other]
    - Terms of Service checkbox
    - [Create Account] → confetti animation on success

  FORGOT PASSWORD TAB:
    - Email field
    - [Send Reset Link] → shows "Check your inbox" confirmation state

DEMO CREDENTIALS (shown as clickable chips):
  [👤 Demo User]  demo@nexusforge.ai / demo2026   → Regular dashboard
  [🛡 Admin]     admin@nexusforge.ai / admin2026  → Full admin access
  [🏢 Agency]    agency@nexusforge.ai / agency2026 → Agency multi-client view

TWO-FACTOR AUTH (post-login trigger):
  - If 2FA enabled for account → show 6-digit OTP input (auto-focus each box)
  - "Authenticator App" or "SMS Code" method selector
  - [Resend Code] countdown (30 seconds)
  - [Trust this device for 30 days] checkbox
  - Backup code fallback link
```

### 0.2 — Role & Permission System

```
ROLES:
┌─────────────────┬──────────────────────────────────────────────────────────┐
│ ROLE            │ PERMISSIONS                                               │
├─────────────────┼──────────────────────────────────────────────────────────┤
│ Super Admin     │ Everything + Platform settings + All clients + Billing    │
│ Admin           │ All features + Team + Feature flags + Client management   │
│ Agency Manager  │ All clients assigned to them + Reports + Billing per slot │
│ Marketing Dir   │ All marketing features + Budget approval + Team reports   │
│ Social Manager  │ Automation + Scheduler + Social Hub + Analytics           │
│ SEO Specialist  │ Blog + SEO tools + Keywords + Site Audit                  │
│ Content Creator │ Blog editor + Media library + Social composer             │
│ Email Marketer  │ Email campaigns + Automation flows + Segmentation         │
│ Viewer/Client   │ Read-only dashboard + Reports assigned to them            │
│ Custom          │ Granular permission picker per section                    │
└─────────────────┴──────────────────────────────────────────────────────────┘

PERMISSION CATEGORIES (granular toggles per role):
  ☑ Dashboard & Overview        ☑ Automation Engine
  ☑ Account Management          ☑ Targeting & Scraping
  ☑ Content Scheduler           ☑ Blog/CMS
  ☑ Social Hub                  ☑ Email Marketing
  ☑ Analytics & Reports         ☑ SEO Tools
  ☑ Competitor Intelligence     ☑ Campaign Management
  ☑ CRM & Leads                 ☑ Influencer Management
  ☑ Products & E-commerce       ☑ Proxy Management
  ☑ Team Management             ☑ Billing & Subscription
  ☑ API Access                  ☑ Admin Panel
  ☑ Client Portal Access        ☑ White-Label Settings
  ☑ AI Model Configuration      ☑ Feature Flag Management
  ☑ Audit Log Access            ☑ Export Data
```

---

## ═══════════════════════════════════════════════════════
## PHASE 1: GLOBAL LAYOUT & NAVIGATION
## ═══════════════════════════════════════════════════════

### 1.1 — Top Navigation Bar

```
LEFT:    [☰ Collapse Sidebar] [NexusForge AI Logo]
         [Workspace Switcher ▼] ← dropdown: all client workspaces + "New Workspace"

CENTER:  [🔍 Search everything... Ctrl+K]
         → Opens command palette overlay
         → Fuzzy search: posts, accounts, campaigns, keywords, contacts, tools
         → Recent searches saved
         → Quick actions: "New Post", "Start Automation", "Run Audit"

RIGHT:   [🌍 Global Time Zone] [📊 Quick Stats popover]
         [🔔 Notifications Bell] ← badge count, dropdown with clickable items
         [⚡ Quick Create +]   ← FAB dropdown: New Post, New Campaign, New Contact
         [🌙/☀ Theme Toggle]
         [👤 User Avatar] ← dropdown:
              My Profile | My Workspaces | Preferences
              Keyboard Shortcuts | What's New
              Help & Support | Sign Out
```

### 1.2 — Left Sidebar (Collapsible, Grouped)

```
When expanded: icon + label + badge/count
When collapsed: icon only + tooltip on hover
Width: 260px expanded / 64px collapsed
Transition: smooth 250ms

NAVIGATION GROUPS:

  📊 OVERVIEW
    🏠 Dashboard              (default landing)
    📈 Live Analytics         (real-time numbers)

  📱 SOCIAL MANAGEMENT
    👤 Account Manager        (all social accounts)
    🤖 Automation Engine      (all auto-actions)
    🎯 Targeting & Scraping   (user lists, scraper)
    📅 Content Scheduler      (calendar + composer)
    🌐 Social Hub             (multi-platform)
    🤝 Influencer Network     (NEW — influencer management)

  ✍️ CONTENT & SEO
    📝 Blog / CMS             (full CMS)
    🔍 SEO / AEO / GEO        (tools suite)
    🖼  Media Library          (assets)
    🎬 AI Studio              (NEW — unified AI workspace)

  📧 MARKETING
    📧 Email Marketing        (campaigns + automation)
    📣 Campaigns              (lifecycle management)
    🏆 Competitor Intel       (SWOT + tracking)

  💼 SALES & CRM (NEW)
    👥 CRM & Contacts         (lead + customer database)
    🛒 Products & Catalog     (e-commerce management)
    💰 Sales Pipeline         (kanban deal tracker)
    📦 Orders & Invoices      (revenue management)

  📊 INTELLIGENCE
    👁  Visitors & Traffic    (web analytics)
    📋 Reports Builder        (custom reports)
    🚨 Escalations            (ticket system)

  ⚙️ CONFIGURATION
    🔒 Proxy Manager          (IP management)
    🏢 Agency / Clients       (NEW — client management)
    💳 Billing & Plans        (subscription)
    👥 Team & Permissions     (user management)
    ⚙️ Settings               (platform config)
    🛡 Admin Panel            (admin only, role-gated)
```

### 1.3 — Right Live Activity Stream (NON-OVERLAPPING — FIXED)

```
IMPLEMENTATION: Fixed right panel, 280px wide, ALWAYS behind main content
z-index hierarchy:
  Sidebar:       z-40
  Top Navbar:    z-50
  Main Content:  z-10
  Activity Panel: z-30 (right side, below navbar)
  Modals:        z-60
  Toasts:        z-70

ACTIVITY STREAM PANEL:
  Header: "⚡ Live Activity" + [Clear] [Pause/Resume] [Filter ▼]

  Each activity item shows:
    [Platform Icon] [Action Description]   [timestamp]
    @account_name                          2s ago
    [Status dot: green=success, red=fail, yellow=pending]

  ACTIVITY TYPES (with colors):
    🟢 Followed @username                  (indigo)
    🟢 Liked post by @username             (emerald)
    🟢 Comment posted: "Great content!"   (blue)
    🟡 DM sent to @username (queued)       (amber)
    🟢 Story viewed: @username             (cyan)
    🔴 Action blocked — cooling down      (red)
    🟢 Post published to Instagram         (indigo)
    🟢 Email campaign sent (892 rcpt)      (purple)
    🟢 Keyword scraped: 234 users          (teal)
    🟡 AI generating content...           (purple blink)
    🟢 SEO score improved: 72→85          (emerald)
    🟢 New follower: @username            (green)
    🔴 Proxy error — switched to backup   (red)

  Auto-populates every 8-15 seconds when any automation is active
  Max 100 items visible, auto-scroll with pause-on-hover
  Filter by: Platform, Action Type, Account, Status
  [View Full Log] button → opens Analytics > Audit Log
```

---

## ═══════════════════════════════════════════════════════
## PHASE 2: DASHBOARD OVERVIEW
## ═══════════════════════════════════════════════════════

### 2.1 — Hero Stats Row (Count-Up Animation)

```
WIDGET 1: Account Health
  ┌────────────────────────────────┐
  │  🟢 System Health: 97%         │
  │  Connected Accounts: 7         │
  │  Active Automations: 5         │
  │  API Rate: 234/1000 used       │
  │  [▓▓▓▓▓▓▓▓░░] 23% API usage   │
  └────────────────────────────────┘

WIDGET 2: Today's Action Summary
  ┌────────────────────────────────┐
  │  📊 Today's Activity           │
  │  Follows:    347  ↗ +12%       │
  │  Likes:      892  ↗ +8%        │
  │  Comments:   145  ↗ +23%       │
  │  DMs Sent:    52  ↗ +5%        │
  │  Stories:    234  ↗ +18%       │
  │  Posts:        3  (scheduled: 5)│
  └────────────────────────────────┘

WIDGET 3: Revenue & Sales (NEW)
  ┌────────────────────────────────┐
  │  💰 Revenue Today              │
  │  $2,847 ↗ +34%                 │
  │  New Leads: 23                 │
  │  Deals Closed: 4               │
  │  Pipeline Value: $128K         │
  │  [View CRM Pipeline]           │
  └────────────────────────────────┘

WIDGET 4: Growth (7-day sparkline)
  ┌────────────────────────────────┐
  │  📈 Follower Growth            │
  │  +1,247 this week              │
  │  ↗ 12.4% avg engagement        │
  │  [Sparkline chart here]        │
  │  Reach: 45.2K  Imp: 128K       │
  └────────────────────────────────┘
```

### 2.2 — Main Dashboard Grid (Customizable Widget Layout)

```
ROW 1: Follower Growth Chart (Recharts LineChart, 30 days)
  - Multi-account overlay
  - Platform filter chips (IG / FB / LI / TT / Pinterest)
  - Hover tooltip with exact numbers
  - [7d] [30d] [90d] [Custom] tabs
  - Export PNG/CSV button

ROW 2: Left = Engagement Rate Bar Chart | Right = Upcoming Scheduled Posts
  Left: Platform comparison bars + target line
  Right: Next 5 posts with thumbnail, platform, time countdown, [Quick Edit]

ROW 3: Left = Best Performing Post Card | Right = Automation Status
  Left: Thumbnail + metrics (likes, comments, shares, reach, saves)
        [Boost Post] [Repurpose] [View Details] buttons
  Right: Per-automation ON/OFF toggles with action counts
         [Start All] [Pause All] master switches

ROW 4: Left = Active Campaigns Summary | Right = AI Usage Stats
  Left: Mini campaign cards with budget burn bars
  Right: AI model usage this month, tokens consumed, cost estimate

ROW 5: CRM Mini Pipeline (NEW)
  Visual kanban preview: Lead → Qualified → Proposal → Closed
  Drag to move, click to expand
  Total pipeline value displayed

ROW 6: Alert Center
  Color-coded alerts: ⚠️ warnings | 🔴 critical | ℹ️ info
  Clickable → navigates to relevant section to fix
  Dismiss button per alert
  "Action Required" vs "Informational" tabs

DASHBOARD CUSTOMIZATION:
  [Customize Widgets] button → opens drag-drop widget picker
  Show/hide any widget, resize 1x/2x/3x columns
  Saved layout persists in localStorage
  [Reset to Default] option
```

---

## ═══════════════════════════════════════════════════════
## PHASE 3: ACCOUNT MANAGEMENT (FULL DETAIL)
## ═══════════════════════════════════════════════════════

### 3.1 — Account List View

```
TOOLBAR:
  [+ Add Account] [Bulk Actions ▼] [Group by: Tags ▼] [Filter] [Search]

ACCOUNT CARD (grid or list toggle):
  ┌────────────────────────────────────────────────┐
  │ [Avatar]  @username          ✓ Verified         │
  │           Business Account   🟢 Online           │
  │           12,547 followers   234 following       │
  │           Last action: 2 min ago                │
  │                                                  │
  │  [▶ Automation ON]   Proxy: US-NY 🟢             │
  │  Warm-up: Day 8/30   Health Score: 94%           │
  │  Rate limit: 47% used today                      │
  │                                                  │
  │  [Switch] [Edit] [Analytics] [Pause] [···]       │
  └────────────────────────────────────────────────┘

ACCOUNT GROUPS (tag-based):
  Create group: "Client A", "Niche: Fitness", "Personal"
  Assign accounts to groups
  Filter/view by group
  Bulk actions per group

ACCOUNT DETAILS DRAWER (slide-in from right):
  Tabs: [Profile] [Automations] [Analytics] [Security] [Proxy] [Warm-up]
  
  Profile Tab:
    - Live avatar preview
    - Editable: name, bio (150 char + emoji picker), website, category
    - Contact info: email, phone
    - [Save Changes] [Preview as Instagram] [Revert Changes]
  
  Security Tab:
    - 2FA status + enable/configure
    - Backup codes (reveal + download)
    - Active sessions list (device + IP + last seen)
    - [Terminate Session] per device
    - Login challenge history
    - Challenge solver settings
  
  Warm-up Tab:
    - Toggle warm-up mode ON/OFF
    - Current day: 8 of 30
    - Daily action limit ramp (chart showing gradual increase)
    - Custom schedule: [7 days] [14 days] [30 days]
    - Actions today: 124 / limit: 200
    - [Reset Warm-up] [Skip Phase]
```

### 3.2 — Add Account Wizard (5-Step Modal)

```
STEPPER HEADER: Step 1 ──── Step 2 ──── Step 3 ──── Step 4 ──── Step 5

STEP 1: Platform Selection + Credentials
  Platform chips: [Instagram] [Facebook] [TikTok] [LinkedIn] [Pinterest]
                  [Twitter/X] [YouTube] [Snapchat]
  (Selecting platform shows platform-specific fields)
  
  Instagram selected:
    Username field (@ prefix auto-added)
    Password field (encrypted, eye toggle)
    [🔍 Check Account Status] → shows: Public/Private, Followers, Account Type
    Detected: Business account ✓

STEP 2: Two-Factor Authentication
  "Is 2FA enabled on this account?" [Yes] [No]
  If Yes: Show 6-digit OTP input boxes (auto-focus, auto-advance)
  Methods: [Authenticator App] [SMS Code] [Email Code]
  Backup code entry field
  QR code scanner mock for authenticator

STEP 3: Proxy Assignment
  [Skip — No Proxy] or configure:
  Select from existing proxies (dropdown with latency + location)
  [+ Add New Proxy] → inline mini form
  [Test Connection] → shows ping + success/fail
  Fingerprint: [Randomize Browser Profile ☑]

STEP 4: Warm-up & Limits
  Master warm-up toggle: [ENABLED ☑]
  Duration: [7 days] [14 days] [30 days] selector
  Starting action limit: 50/day → ramps to full limit over duration
  Preview ramp chart (mini bar chart)
  Night mode pause: [10 PM → 9 AM ☑]

STEP 5: Review & Complete
  Summary card showing all settings
  [✓ Account added: @username]
  Auto-confetti animation on success
  [Add Another Account] [Go to Dashboard] [Configure Automations]
```

---

## ═══════════════════════════════════════════════════════
## PHASE 4: AUTOMATION ENGINE (ALL 8 ACTION TYPES)
## ═══════════════════════════════════════════════════════

### GLOBAL AUTOMATION CONTROL

```
TOP OF PAGE:
  Master toggle: [ALL AUTOMATIONS: RUNNING ●] ← big green switch
  Global stats: Actions today: 1,847 | Success: 94.3% | Blocked: 0
  [Emergency Stop All] button (red, prominent)
  [Export Automation Report] [Activity Timeline]

NAVIGATION TABS:
  [Follow] [Unfollow] [Like] [Comment] [DM] [Story] [Engagement] [Agent AI]
```

### 4.1 — Auto Follow/Unfollow (Full Detail)

```
LAYOUT: Two-column — Config left, Live Stats right

TARGET SOURCE PANEL:
  Each source has its own enabled toggle + input:
  
  ☑ HASHTAGS
    Tag input with autocomplete: #fitness, #gym, #health
    [Analyze hashtag competition] → shows post count
    Saved hashtag sets dropdown
  
  ☑ LOCATIONS
    Search field with map picker
    Saved locations list
    Radius selector: 1km, 5km, 25km, 50km
  
  ☑ COMPETITOR FOLLOWERS
    @handle input (add up to 10)
    [Preview follower count before scraping]
    Order: [Newest followers first / Oldest / Random]
  
  ☑ POST LIKERS
    Post URL input
    [Validate URL] → shows post preview + like count
  
  ☑ EXPLORE PAGE
    Categories: All / Fitness / Fashion / Food / Tech / Travel
  
  ☑ USER-UPLOADED LIST
    [Upload CSV] → preview table → validate
    [Use scraped list] → connects to Targeting module

ADVANCED FILTERS PANEL:
  Range sliders (min-max) with live number display:
    Follower Count:  [  100 ════════════ 50,000 ]
    Following Count: [   50 ════════════ 10,000 ]
    Posts Count:     [    5 ════════════  5,000 ]
    Engagement Rate: [  0.5% ══════════   10% ]

  Checkboxes:
    ☑ Exclude private accounts
    ☐ Exclude business accounts  
    ☐ Exclude verified accounts
    ☑ Require profile picture
    ☑ Require bio text
    ☐ Must have website link
    ☑ Must be active (posted in last 30 days)

  Language filter: [English ▼] (multi-select)
  
  Blacklist: tag input (loads from Targeting module)
  Whitelist: tag input (never touch these accounts)

TIMING & LIMITS PANEL:
  Sliders with safety warnings:
    Follows per hour:   [──●──] 30   (Max: 60  ⚠️ >40 = risky)
    Follows per day:    [──●──] 400  (Max: 1000 ⚠️ >500 = risky)
    Random delay:       [15] to [45] seconds (randomness prevents detection)
  
  Operating schedule:
    Start time: [09:00] End time: [22:00]
    Days: [Mon ☑] [Tue ☑] [Wed ☑] [Thu ☑] [Fri ☑] [Sat ☐] [Sun ☐]
    Night mode: [Pause 10 PM → 9 AM ☑]
    Holiday blackout: [+ Add dates]

LIVE STATS SIDEBAR:
  Today: 234 follows | 0 blocks | 94% success
  This hour: 28/30 follows used
  Queue: 1,247 users loaded
  [Preview Queue] → shows next 20 accounts to follow

BUTTONS:
  [▶ Start Following]  [⏸ Pause]  [⏹ Stop]  [💾 Save as Preset]
  [Load Preset ▼]  [Reset to Defaults]

UNFOLLOW TAB (within same view):
  Unfollow criteria (each toggleable):
    ☑ Non-followers after [7] days
    ☑ All followed accounts after [30] days
    ☑ Inactive accounts (no posts in [90] days)
    ☑ Mass cleanup: [100] unfollows/day
  
  Safety locks:
    Never unfollow: ☑ Whitelisted | ☑ Verified | ☑ >50K followers
  
  Preview mode: [Generate Unfollow List] → table with preview + manual exclusions
  [Start Unfollowing] [Pause] [Stop]
```

### 4.2 — Auto Like (Full Config)

```
Sources: Same as Follow (Hashtags, Locations, Users, Explore, Competitor posts)

Filters:
  Post age: Last [24] hours only toggle
  Min likes on post: [50]    Max likes: [5000]
  Post type: ☑ Photos  ☑ Videos  ☑ Carousels  ☑ Reels
  Skip already-liked: ☑ Yes
  Skip own posts: ☑ Yes
  Skip posts from blacklisted: ☑ Yes

Limits:
  Likes per hour: [60]  (Max: 150 — platform limit)
  Likes per day: [500]  (Max: 1000)
  Delay: [10] to [30] seconds

Queue View: Shows next 50 posts to like (thumbnail grid)
History: Table of all liked posts (account, post preview, timestamp)

[Activate Auto-Like] [View Queue] [History] [Schedule] [Pause] [Stop]
```

### 4.3 — Auto Comment (Spintax + AI)

```
SOURCE TARGETING: Same sources as Like

COMMENT LIBRARY:
  [+ Add Template] button
  Each template has:
    - Text input with spintax support
    - Emoji picker button
    - Preview button (shows random expansion)
    - Platform tags (IG / FB / LI)
    - Delete button
  
  Spintax helper: Type {Great|Awesome|Amazing} {content|post|work}!
  Preview expansion: "Awesome post!" | "Great content!" | "Amazing work!"
  
  Built-in templates by category:
    General: 10 templates
    E-commerce: 8 templates
    Fitness: 6 templates
    Fashion: 6 templates
    Food: 5 templates
  [Import Templates CSV] [Export Templates]

AI COMMENT GENERATION:
  Toggle: [Use AI to generate contextual comments ☑]
  Model: [Select AI Model ▼]
  Tone: [Friendly / Professional / Enthusiastic / Casual]
  AI reads post caption → generates relevant comment
  Preview before posting: [Show preview ☑]
  Confidence threshold: [85%] — skip if AI isn't sure

SMART FILTERS:
  ☑ Skip posts with >500 existing comments (already too crowded)
  ☑ Skip if post mentions competitor
  ☑ Avoid URLs in comments (spam trigger)
  ☑ No duplicate comments in same session
  ☑ Language matching (comment in post's language)
  Max comments per post: [1] (safety)
  Skip verified/celebrity accounts: ☐

LIMITS:
  Per hour: [20]  |  Per day: [150]
  Delay: [45] to [90] seconds

SPINTAX TESTER: Input spintax → "Generate 5 random" → shows variations
[Enable Auto-Comment] [Test Comment (send to yourself)] [View Logs]
```

### 4.4 — Auto DM System (Full)

```
TRIGGER CONFIGURATION (each with ON/OFF + settings):

  🔔 NEW FOLLOWER DM
    Delay after follow: [1 hour] slider
    Only if they follow back: ☑ Yes
    Template: [Select template ▼] or [Create new]
  
  📢 MENTION RESPONSE
    Trigger: When @mentioned in post/story
    Response time: [15 minutes] [30 minutes] [1 hour]
    Template: context-aware response
  
  💬 COMMENT-TRIGGERED DM
    When someone comments on your post:
      Filter: First-time commenters only ☑
      Keyword triggers: "price", "info", "how much" → sends pricing DM
  
  📱 STORY REPLY DM
    Keywords in their story reply → trigger DM
    Emoji reactions → trigger specific response
  
  📋 MANUAL LIST
    Upload CSV of usernames → send DM campaign
    Preview recipient list before sending
    Scheduled send: date/time picker

MESSAGE TEMPLATE BUILDER:
  Template name field
  Message body (rich textarea with variable inserter)
  Variables: {first_name}, {username}, {location}, {link}, {coupon_code}
  Attach media: ☑ Optional image/video attachment [Upload]
  Preview as recipient sees it (Instagram DM mockup UI)
  
  Multi-message sequence (drip):
    Message 1: Send immediately
    Message 2: Wait [2] days → send follow-up
    Message 3: Wait [5] days → send final
    Stop if they reply at any point: ☑ Yes

AI PERSONALIZATION:
  [AI Personalize ☑] → AI reads recipient's bio + recent posts
  → Adds 1 personalized sentence to opening of DM
  Model: [Select ▼]

SAFETY SETTINGS:
  Max DMs/hour: [10]   |   Max DMs/day: [50]
  Delay between DMs: [5] to [15] minutes
  Stop if message fails 3 times: ☑
  Unsubscribe keyword: "STOP" → adds to blacklist automatically
  
ANALYTICS:
  Delivered: 892  |  Opened: 534 (59.8%)  |  Replied: 127 (14.2%)
  Unsubscribed: 12  |  Failed: 3
  [View Full Analytics] [Export Report]

[Activate DM Bot] [Test Send to @yourself] [Pause] [History]
```

### 4.5 — Story View & Engagement Bot

```
TARGET SOURCE:
  ☑ All followers  ☑ All following  ☑ Uploaded CSV  ☑ Competitor followers

VIEW SETTINGS:
  View order: [Random] [Chronological] [By followers: largest first]
  Max stories/day: [100]  Delay between: [3] to [8] seconds
  View all slides: ☑ Yes (don't skip)
  Pause and read: [2-4] seconds per slide (human-like)

REACTIONS:
  Auto-react to stories containing keywords:
    Keyword: "sale" → React: ❤️
    Keyword: "new"  → React: 🔥
    Keyword: "love" → React: 😍
  [+ Add reaction rule]

STORY REPLY:
  Trigger keywords in story → auto-reply DM
  Template library for story replies
  [Enable Story Replies ☑]

[Enable Story Bot] [View Queue] [Analytics]
```

### 4.6 — Post Engagement Auto-Reply

```
COMMENT AUTO-REPLY RULES (if/then builder):
  Rule 1: Contains ["price","cost","how much"] → "DM sent with pricing! 💌"
  Rule 2: Contains ["link","website","where"] → "Link in bio! 🔗"
  Rule 3: Contains ["?"] → AI-generated answer
  Rule 4: Positive sentiment (AI) → "Thank you so much! ❤️"
  Rule 5: Negative sentiment (AI) → Escalate to human
  Default: "Thanks for commenting! 😊"
  
  [+ Add Rule]  [Test Rules]  [Import Rules]

AUTO-LIKE COMMENTS:
  Like all comments on your posts: ☑ Yes
  Only if >3 words: ☑ Filter short comments
  Delay: [5] to [15] seconds per like

AUTO-REPLY TO DMs:
  FAQ bot: Add Q&A pairs
    Q: "What's your price?" → A: "Check our plans at [link]"
    Q: "Do you ship internationally?" → A: "Yes! We ship worldwide."
  [+ Add FAQ]
  
  Fallback: "I'll have a team member respond shortly! 🙏"
  Human handoff trigger: keyword "human", "agent", "help"

[Enable Auto-Engagement] [Configure FAQs] [View Logs]
```

### 4.7 — Agentic AI Control Center (Autonomous Mode)

```
MASTER AGENTIC MODE:
  ╔════════════════════════════════════════════════════╗
  ║  🤖 AGENTIC AI MODE                               ║
  ║  Status: [ACTIVE ●] [PAUSED ○] [STOPPED ○]        ║
  ║                                                    ║
  ║  Primary Reasoning Model: [kimi-k2.6 ▼]           ║
  ║  Actions Today: 1,847 | Success: 94.3%             ║
  ║  Last Decision: "Replied to @fitness_coach" 2m ago ║
  ║  Human Approval Required if confidence < [85%]     ║
  ╚════════════════════════════════════════════════════╝

AGENT 1 — COMMENT REPLY AGENT:
  ☑ Enable
  Intelligence:
    → AI reads comment context + post topic
    → Scores comment value (0-100)
    → Only responds to score > [70]
    → Generates natural, non-repetitive replies
    → Continues thread conversations with memory
  
  Reply Strategy:
    ☑ Questions → Helpful, informative answers
    ☑ Positive comments → Warm thank + engage deeper
    ☑ Negative/complaints → Empathetic, solution-focused
    ☑ Sales intent detected → Offer to DM with details
    ☑ Competitor mention → Neutral professional response
  
  Guardrails:
    Max replies/hour: [25]
    Max per post: [3]
    Cooldown between replies: [30-90] seconds
    Avoid: emojis-only replies, generic "thanks", repetition

AGENT 2 — DM CONVERSATION AGENT:
  ☑ Enable
  Capabilities:
    → Full multi-turn memory per conversation
    → Knows: products, pricing, policies (feed it a knowledge base)
    → Lead qualification scoring (Hot/Warm/Cold)
    → Books appointments / demos (calendar link integration)
    → Handoff trigger: [confidence < 70% OR user requests human]
  
  Knowledge Base:
    [+ Add FAQ] [Upload Product Catalog PDF] [Add Policy Docs]
    Docs indexed for AI: product_catalog.pdf, faq.txt, pricing.md
  
  Personality preset: [Professional] [Friendly] [Witty] [Custom]
  Custom persona name: [Example: "Emma from NexusForge"]
  
  Conversation Memory: Per-user thread history (last 50 messages)
  [Test Conversation] modal → chat with the agent yourself
  [View All Active Conversations] [Escalation Queue]

AGENT 3 — GROUP SHARE AGENT:
  ☑ Enable
  Connected Groups:
    Facebook Groups (12 connected) [Manage]
    LinkedIn Groups (7 connected) [Manage]
    Telegram Channels (4 connected) [Manage]
    Discord Servers (2 connected) [Manage]
  
  Smart Sharing Rules:
    → Analyze post → match to most relevant groups
    → Adapt caption tone per group (formal for LinkedIn, casual for Facebook)
    → Optimal time per group (based on engagement history)
    → Frequency cap: max 1 post/group/day
    → Duplicate prevention: 7-day memory per group
    → Compliance check: flags anything potentially spammy
  
  Content filter:
    ☑ Only share posts approved by editor/admin
    ☑ Never share posts marked "No Group Share"
    ☑ AI compliance scan before every share

AGENT WORKFLOW BUILDER (Visual):
  Drag nodes to create custom agent flows:
    [Trigger Node] → [Observe Node] → [Decide Node] → [Act Node] → [Log Node]
  
  Example flow:
    Trigger: New comment detected
    Observe:  AI analyzes comment sentiment + intent + engagement value
    Decide:   Score 85+ → Reply | Score 70-85 → Add to review queue
    Act:      Generate + post contextual reply
    Log:      Save to audit trail with confidence score

AGENT MONITORING DASHBOARD:
  Real-time decision feed: every AI decision shown with reasoning
  Confidence score per action (color-coded: green >80, yellow 60-80, red <60)
  Human Approval Queue: 
    [Approve ✓] [Reject ✗] [Edit + Approve ✏] per pending action
  Performance over 30 days:
    Total actions: 54,231
    AI accuracy: 94.3%
    Human escalations: 5.7%
    Avg confidence: 87.2%

SAFETY PANEL:
  [⛔ Pause All Agents] — single click emergency stop
  Rate limits enforced per platform
  Shadowban detection: [Alert if engagement drops >30% ☑]
  Spam score monitoring: alert if > 5% of replies flagged
  Full audit trail: every AI decision logged with timestamp + reasoning

[Enable Full Agentic Mode] [Configure Knowledge Base] [View Agent Analytics]
```

---

## ═══════════════════════════════════════════════════════
## PHASE 5: TARGETING & SCRAPING ENGINE
## ═══════════════════════════════════════════════════════

### 5.1 — Advanced User Scraper

```
SCRAPING TABS: [Hashtag] [Location] [Competitor] [Post Likers] [Commenters] [Explore]

HASHTAG SCRAPER:
  Input: #fitness, #gym (multi-tag supported)
  Options: Top posts only / Recent posts / Both
  [Start Scraping] → progress bar → results table

RESULTS TABLE (TanStack Table):
  Columns: Avatar | Username | Name | Followers | Following | Posts | 
           EngRate | Account Type | Has Bio | Has Link | Last Active | 
           Location | Actions
  
  Per-row actions:
    [Add to List] [View Profile] [Add to Whitelist] [Add to Blacklist]
    [Queue DM] [Start Following]
  
  Bulk actions (checkbox select):
    [Add Selected to List] [Export Selected CSV] [Follow Selected]
    [Blacklist Selected] [DM Campaign to Selected]
  
  Column filters + sort on every column
  Export full results: [CSV] [XLSX] [Copy to Clipboard]

SAVED LISTS:
  All scraped lists saved here
  [Fitness Leads - 1,247 users - Jun 8]
  [NYC Foodies - 892 users - Jun 5]
  [Competitor X Followers - 3,421 - Jun 3]
  [+ New List] [Merge Lists] [Delete]
  
  Per list: [View] [Use in Automation] [Export] [Edit Name] [Delete]

WHITELIST & BLACKLIST MANAGER:
  Separate tabs: [Whitelist] [Blacklist]
  Add by: username, CSV import, from scraper results
  Sync to all automations: ☑ Auto-apply
  [Download Full List] [Clear List] [Merge lists]
```

### 5.2 — Hashtag Intelligence

```
HASHTAG ANALYZER:
  Input: Enter hashtag (without #) → [Analyze]
  
  Results card:
    Total posts: 450M
    Posts last 24h: 125K
    Avg engagement rate: 3.2%
    Competition level: 🔴 High / 🟡 Medium / 🟢 Low
    Growth trend: ↗ +12% (12-month chart sparkline)
    Best time to post: 6 PM - 9 PM EST
    Top content type: Reels (67%)
    Recommended follower range for visibility: 5K - 50K

  Related hashtags table:
    Tag | Posts | Avg Engagement | Competition | Recommended?
    Sortable, add to set with one click

HASHTAG SET BUILDER:
  Strategy guide shown: "Mix 10 high (1M+) + 10 medium (100K-1M) + 10 low (<100K)"
  Drag hashtags into three buckets: [High] [Medium] [Low]
  Current count: 0/30
  [AI Suggest 30 Best] → fills all three buckets automatically
  [Save Set] with custom name
  [Use in Post] [Use in Automation] [Schedule Rotation]

HASHTAG ROTATION:
  Create rotation schedule: Set A on Mon/Wed, Set B on Tue/Thu, Set C on Fri/Sun
  Anti-shadowban protection: never repeat same 30 tags consecutively
```

### 5.3 — Competitor Intelligence Scraper

```
COMPETITOR SETUP:
  Add up to 20 competitor handles
  Per competitor:
    Username, Notes (e.g., "Main rival in fitness niche"), Priority: [High/Med/Low]
  
  Auto-tracking (runs daily):
    Follower count history
    Post frequency (posts per week avg)
    Engagement rate per post
    Hashtag usage frequency map
    Posting time distribution heatmap
    Content type breakdown (Photo/Video/Reel/Carousel)
    Caption length average
    Story frequency

COMPETITOR ANALYSIS DASHBOARD:
  Comparison chart: Your account vs 3 competitors (selectable)
  Metrics: Followers / Engagement / Posts/week
  
  TOP POSTS ANALYSIS:
    Best 10 posts from each competitor in last 90 days
    Metrics: likes, comments, engagement%, post type, time posted, hashtags
    [Copy hashtags] [Save post idea] buttons per row
  
  HASHTAG OVERLAP MAP:
    Venn diagram: "You use these, they use these, overlap is these"
    Opportunity hashtags: hashtags competitors use that you don't
  
  POSTING CALENDAR HEATMAP:
    24x7 grid showing when competitor posts (darker = more posts)
    Identify their gaps → your opportunity
  
  CONTENT GAP REPORT:
    Topics they cover that you haven't
    AI-suggested content ideas to fill gaps
    [Generate Blog Post] [Schedule Social Post] per gap

[Add Competitor] [Run Manual Analysis] [Set Daily Alert] [Export PDF Report]
```

---

## ═══════════════════════════════════════════════════════
## PHASE 6: CONTENT SCHEDULER & PUBLISHER
## ═══════════════════════════════════════════════════════

### 6.1 — Visual Content Calendar

```
VIEW MODES: [📅 Month] [📅 Week] [📅 Day] [📋 List] [🗂 Kanban by Status]

MONTH VIEW:
  Each day cell shows:
    Platform colored dots (IG = purple, FB = blue, etc.)
    Post type icon + time
    Account name (first 2 accounts, +N more)
    Hover → preview tooltip with thumbnail
  
  Click empty day → "New Post" modal opens prefilled with that date
  Click existing post → post detail drawer opens
  
  Drag and Drop:
    Drag post to new date → confirm dialog → updates schedule
    Drag to different week → scroll while dragging
    Ctrl+drag → copy post to new date
  
  Bulk selection:
    Click [Select Mode] → checkbox on each post
    [Bulk: Delete | Reschedule | Duplicate | Change Account]

WEEK VIEW:
  Time-based grid (24h or 8 AM - 10 PM)
  Posts as cards positioned at their scheduled time
  Best times highlighted in soft green background
  Platform color-coded cards
  Drag to different time slot

LIST VIEW (TanStack Table):
  All scheduled posts in chronological order
  Columns: Thumbnail | Title/Caption preview | Platform | Account | 
           Type | Status | Date/Time | Engagement (if published)
  [Edit] [Duplicate] [Delete] [Publish Now] per row
  Filter by: Status, Platform, Account, Date range, Type
  Sort by any column

UPCOMING POSTS SIDEBAR (persistent):
  Next 5 posts countdown cards
  "Posting in 2h 34m" with live countdown
  [Quick Edit] [Post Now] [Skip] per card

IMPORT / EXPORT:
  [Import CSV] → maps columns → preview → validate → add to calendar
  [Export Calendar] → PDF (printable monthly grid) or ICS (Google Calendar)
  [Sync with Google Calendar] (two-way)
  [Print Monthly Plan] → print-optimized layout
```

### 6.2 — Post Composer (Full Multi-Step)

```
TRIGGER: [+ New Post] button or clicking calendar date

STEP 1 — PLATFORM & ACCOUNT
  Select platforms (multi-select chips):
    [📸 Instagram Feed] [📱 Instagram Stories] [🎬 Instagram Reels]
    [📘 Facebook Page] [📌 Pinterest] [💼 LinkedIn] [🐦 Twitter/X] [🎵 TikTok]
  
  Select account(s): Account cards, click to select, multi-select supported
  Post type auto-detects from platform selection

STEP 2 — MEDIA UPLOAD
  Drop zone (large, dashed border):
    Click to browse or drag files here
    Accepts: JPG, PNG, GIF, WebP, MP4, MOV, AVI
    Max: 10 images (carousel) or 1 video
  
  Uploaded media grid:
    Thumbnails with reorder (drag handles)
    Hover: [Crop] [Filter] [Remove] [Set as Cover]
    Click: opens inline editor
  
  Import options:
    [Import from Media Library] → opens gallery modal
    [Use AI Generated Image] → AI image prompt input → generates
    [Import from URL] → paste image/video URL
  
  INLINE IMAGE EDITOR (Konva.js):
    Crop presets: [1:1 Square] [4:5 Portrait] [16:9 Landscape] [9:16 Story] [Free]
    Pixel dimensions shown
    Filters: Clarendon / Gingham / Juno / Lark / Ludwig / Perpetua / Valencia
    Adjustments: Brightness / Contrast / Saturation / Warmth / Sharpness / Vignette
    Text overlay: [+Text] → drag to position, resize, font/color picker
    Stickers: Emoji picker with placement
    Blur tool: brush blur (privacy protection)
    [Apply] [Reset] [Undo/Redo]

STEP 3 — CAPTION & CONTENT
  Primary Caption Area:
    Textarea (expandable)
    Character counter: 234/2200 (color shifts to amber at 2000, red at 2200)
    Platform-specific limits shown per selected platform
    [Emoji Picker 😊] → searchable emoji grid
    Mention autocomplete: type @ → suggest accounts from your list
    Hashtag autocomplete: type # → suggest from saved hashtag sets
  
  AI Caption Generator:
    [🤖 AI Generate Caption] button → modal:
      Topic/context input
      Tone: [Engaging / Professional / Humorous / Inspirational / Promotional]
      Length: [Short (50 words)] [Medium (100)] [Long (200+)]
      Include hashtags: ☑ Yes
      Model: [Select AI ▼]
      [Generate] → streaming output shown character by character
      [Insert] [Regenerate] [Copy]
  
  Platform-Specific Captions (if multiple platforms selected):
    Toggle: [Universal Caption] ↔ [Customize Per Platform]
    Per platform tab: Instagram / Facebook / LinkedIn / Pinterest
    Each with its own caption field
    [AI Adapt for this Platform] button per tab
  
  First Comment (Instagram):
    Auto-post first comment with hashtags (keeps caption clean)
    [Add hashtags to first comment ☑]
    Hashtag field: add from saved sets or type manually
  
  Additional Fields:
    Location: searchable + map pin
    Tag People: @username input
    Alt Text (accessibility): textarea with [AI Generate Alt Text] button
    Link (for platforms that support it): URL field + [Shorten URL]

STEP 4 — SCHEDULING
  Publish timing:
    ○ Publish Now → [Publish Now] button (confirm dialog)
    ○ Schedule → Date picker + Time picker + Timezone dropdown
    ○ Add to Queue → auto-assigns to next open optimal time slot
  
  Smart Suggestions:
    "Based on your audience analytics, best times this week:"
    [Tue 9:00 AM ✓] [Wed 6:30 PM] [Thu 12:00 PM]
    Click suggestion → auto-fills date/time
  
  Advanced Options (collapsible):
    ☑ Auto-delete after [30] days
    ☑ Add to Story Highlights (Instagram)
    ☑ Cross-post to Facebook
    ☑ Share to Pinterest boards
    ☐ Send email notification when published
    ☑ Add to campaign: [Select campaign ▼]
    ☑ Tag as: [Promotional / Educational / Entertainment]

STEP 5 — PREVIEW & CONFIRM
  Platform previews side by side (horizontal scroll)
  Each preview shows realistic platform UI mock
  [< Back] [Save as Draft] [Schedule Post]
  Draft saves to drafts section, accessible from calendar
```

### 6.3 — Bulk CSV Import

```
PAGE SECTIONS:

  TEMPLATE DOWNLOADER:
    Shows column specs with descriptions
    [Download Template CSV] → downloads prefilled example
    Example row shown in table format
  
  UPLOAD ZONE:
    Drop CSV file or [Browse]
    Also: [Connect Google Sheets] → import directly from sheet
    Also: [Connect Airtable] → import from Airtable base
  
  COLUMN MAPPER:
    Auto-detects columns, manual override
    CSV Header → Platform Field (dropdown per row)
    Required/Optional badge per field
  
  VALIDATION RESULTS:
    ✓ 45/50 rows valid
    ⚠ 5 rows have errors:
      Row 12: Missing required 'caption' field
      Row 23: Invalid date format
      Row 31: media_url returns 404
    [Fix Errors] [Import Valid Only] [Download Error Report]
  
  PREVIEW TABLE (first 10 rows):
    Thumbnail | Caption | Platform | Account | Scheduled Time | Status
  
  IMPORT OPTIONS:
    ☑ Skip duplicate posts (same caption + date)
    ☑ Notify me when all posts are published
    [Import All Valid Rows] → progress bar → success summary
```

---

## ═══════════════════════════════════════════════════════
## PHASE 7: BLOG / CMS MANAGER (MASSIVELY ENHANCED)
## ═══════════════════════════════════════════════════════

### 7.1 — Blog Dashboard

```
HEADER STATS ROW:
  Total Posts: 127 | Published: 98 | Drafts: 24 | Scheduled: 5 | Archived: 0
  Total Views: 45.2K | Avg Time on Page: 3:42 | Bounce Rate: 42% | 
  Top Post: "Instagram Growth Guide" (2,147 views)
  SEO Score Avg: 76/100

QUICK ACTIONS:
  [+ New Post] [🤖 AI Generate 2 Posts Today] [Import from URL] [Bulk Edit]
  
  "AI Generate 2 Posts Today" — DAILY FEATURE:
    Checks if 2 posts already generated today
    If yes: "2/2 posts generated today. Next batch: tomorrow 9 AM"
    If no: Opens AI Generation wizard (see section 7.6)

POSTS TABLE (TanStack Table):
  Columns: ☐ | Featured Image | Title | Status | Category | SEO Score | 
           Word Count | Views | Author | Publish Date | Actions
  
  SEO Score badge:
    90-100 = green "Excellent"
    75-89  = blue "Good"
    60-74  = yellow "Needs Work"
    <60    = red "Poor"
  
  Row actions: [Edit] [Preview] [Duplicate] [Cross-post to Social] 
               [SEO Check] [Delete]
  Bulk actions: [Publish] [Unpublish] [Delete] [Change Category] 
                [Export] [Recalculate SEO]

CATEGORIES & TAGS SIDEBAR:
  Categories: [+ Add] list with post count
  Tags: tag cloud with size = usage count
  [Manage Taxonomies] → full CRUD

CONTENT CALENDAR (Blog):
  Same calendar component as social, but Blog-specific
  Color-coded by content pillar
  Workflow status visible (Idea/Draft/Review/Scheduled/Published)
  Editorial deadlines

SEARCH:
  Full-text search across all posts (title + content + tags)
  Powered by Meilisearch (fast, typo-tolerant)
  Filter by: Date, Category, Author, Status, SEO score range
```

### 7.2 — Full Post Editor

```
EDITOR LAYOUT: Three-column
  Left:   Outline panel + Document stats
  Center: Writing area (TipTap WYSIWYG)
  Right:  SEO panel + Publishing controls

TITLE FIELD:
  Large prominent input
  Live character count
  [Analyze Title] → runs viral title checker (see 7.3)
  Suggestions appear below if score < 70

SLUG:
  Auto-generated from title
  Editable
  [Copy URL] button
  Canonical URL shown: https://yourblog.com/[slug]

RICH TEXT EDITOR (TipTap):
  Toolbar:
    Format: Bold / Italic / Underline / Strikethrough / Code / Highlight
    Headings: H1 / H2 / H3 / H4
    Lists: Bullet / Numbered / Task list (checkbox items)
    Insert: Link / Image / Video embed / Table / HR / Blockquote
    Alignment: Left / Center / Right / Justify
    Undo / Redo
    [Clear Formatting]
    [Source/HTML view]
  
  AI Writing Toolbar (floating or fixed panel):
    [✍ AI Write Section] → prompt → generates section
    [↕ AI Expand] → select text → elaborates
    [⬇ AI Summarize] → select text → condenses
    [🔄 AI Rewrite] → rephrase in different way
    [🌍 AI Translate] → select text → choose language → translates
    [✓ AI Fix Grammar] → proofread + show corrections
    [💡 AI Suggest Headlines] → returns 10 H2 heading options
    [❓ AI Generate FAQ] → creates Q&A section from content
    [📊 AI Add Statistics] → adds relevant stats/data points
    [🔗 AI Suggest Internal Links] → suggests related blog posts to link
  
  CONTENT BLOCKS (beyond text):
    [+ Insert Block] menu:
      Quote / Callout (info/warning/tip/danger) / Code block
      Image gallery (2-3 column grid) / Before-After slider
      Comparison table / Stats/Numbers section
      CTA button / Product card / FAQ accordion
      Author bio / Subscribe box / Related posts

  LIVE PREVIEW:
    Toggle [Edit] ↔ [Preview]
    Preview shows styled as published article
    Mobile preview: [Phone mockup view]

OUTLINE PANEL (left):
  Auto-extracted H2/H3 headings
  Click to jump to section
  Drag to reorder sections
  Missing sections flagged: "⚠ No H2 after intro"

WORD COUNT & STATS (live):
  Words: 1,247 | Characters: 7,832 | Reading time: 5 min
  Readability Grade: 8.2 (Flesch-Kincaid)
  Sentences: 94 | Paragraphs: 22
  Passive voice: 12%

FEATURED IMAGE:
  [Upload] [AI Generate] [Media Library]
  AI Generate: Text prompt → model generates → preview → use/regenerate
  Shows responsive preview: desktop + mobile

CATEGORIES & TAGS:
  Category: searchable dropdown + [+ Create new]
  Tags: tag input with autocomplete from existing tags

EXCERPT:
  Textarea for SEO-friendly excerpt
  [AI Generate Excerpt] → fills from content

AUTHOR:
  Select from team members (dropdown)
  Or: ghost authoring (show different author name)

SEO PANEL (right, persistent):
  Real-time score gauge: 82/100
  Focus keyword input
  Checklist (see 7.4)
  [View Full SEO Analysis] → expands to dedicated SEO panel

PUBLISHING CONTROLS:
  Status: [Draft ▼] / Published / Scheduled / Review
  Author: dropdown
  Date: Now / Schedule (date+time picker)
  Visibility: Public / Private / Password protected
  ☑ Allow comments
  ☑ Include in sitemap
  ☑ Feature on homepage
  
  [Save Draft] (auto-saves every 30s)
  [Preview] (opens in new tab)
  [Submit for Review] (if editor role)
  [Publish Now] / [Schedule]
  
  Post-publish:
    "🎉 Post published!"
    [Share to Social ▼] → quick-post to all connected platforms
    [Copy link] [View on site]

VERSION HISTORY:
  [Version History ▼] → dropdown showing:
    v1.3 - Jun 8 2:34 PM (current)
    v1.2 - Jun 8 1:15 PM
    v1.1 - Jun 7 4:22 PM
  Click any version → preview → [Restore this version]
```

### 7.3 — Viral Title Checker (Real-Time)

```
INTEGRATION: Embedded in post editor title field (triggers on title change)
Also: Standalone tool accessible from Blog dashboard

SCORING ENGINE (rules-based, instant):
  Word count:         6-8 words → +15 pts
  Character count:    40-60 chars → +10 pts
  Contains number:    "7 Ways..." → +12 pts
  Power words:        proven, ultimate, secret, hack, best → +10 pts each (max 2)
  Emotional trigger:  fear, curiosity, joy, anger → +8 pts
  Clarity:            no jargon → +10 pts
  Keyword position:   keyword in first 3 words → +10 pts
  Question format:    "How to...?" → +5 pts
  Negative framing:   "Why X fails" → +5 pts
  Specificity:        "27%" better than "many" → +8 pts

SCORE DISPLAY:
  Large radial gauge: 78/100
  Color: red < 60 | yellow 60-75 | green > 75
  
  Breakdown bars:
    Clarity:        [████████░░] 80%
    SEO Power:      [████████████] 85%
    Emotional Impact:[███████░░░] 70%
    Word Balance:   [█████████░] 90%
    Specificity:    [██████░░░░] 60%

PLATFORM SCORES:
  Google Search: 82/100  Facebook: 76/100  LinkedIn: 79/100  Twitter: 88/100

AI SUGGESTIONS (5 alternatives with scores):
  1. "10 Proven Instagram Growth Hacks for 2026" — Score: 84 [Use This]
  2. "How to Grow Instagram Fast: 10 Strategies" — Score: 81 [Use This]
  3. "Instagram Growth Blueprint: 10 Tactics That Work" — Score: 79 [Use This]
  Each suggestion: click to replace current title

[Regenerate All Suggestions] [Export Analysis]
```

### 7.4 — Real-Time SEO Optimizer

```
PANEL SECTIONS:

  SCORE HEADER:
    Large circular score: 82/100
    Progress ring animated
    Grade: B+ | "Needs Work" | "Good" | "Excellent"
    [Run Full SEO Check] (refresh)

  ON-PAGE CHECKLIST (live, checks every keystroke):
    Focus Keyword: [instagram growth] field at top
    
    ✓ Keyword in page title
    ✓ Keyword in meta description  
    ✓ Keyword in URL slug
    ✓ Keyword in first 100 words of content
    ⚠ Keyword density 0.8% → aim for 1-2% (add 3 more uses)
    ✓ Keyword in H1 heading
    ⚠ Keyword in only 2/5 H2 headings → add to 2 more
    ✓ Image alt text contains keyword
    ✓ Internal links: 3 (minimum met)
    ⚠ External links: 1 → add 2-3 authoritative external links
    ✓ Content length: 1,847 words → above 1,500 minimum
    ✓ Readability: Grade 8 (Target: 6-10)
    ⚠ Passive voice: 14% → reduce to below 10%
    ✓ Meta description length: 155 chars (optimal)
    ✓ Title tag length: 58 chars (optimal)
    ⚠ No FAQ schema markup → [Generate FAQ Schema]

  RELATED KEYWORDS PANEL:
    Keyword | Uses in content | Recommended
    instagram marketing      | 0 | Add 2x
    social media growth      | 1 | Add 1x
    instagram algorithm      | 0 | Add 2x
    follower engagement      | 2 | ✓ Good
    [AI Add Missing Keywords] → auto-inserts into content

  READABILITY ANALYSIS:
    Flesch-Kincaid Score: 65.2 (Standard)
    Avg sentence length: 18 words (Good — aim <20)
    Passive voice: 14% (Reduce — aim <10%)
    Transition words: 24% (aim >30%)
    Consecutive sentences: none (Good)

  SCHEMA MARKUP:
    Current schemas: None
    [+ Add Article Schema] [+ Add FAQ Schema] [+ Add HowTo Schema]
    [+ Add BreadcrumbList] [+ Add Author Schema]
    Schema code preview + copy

  SOCIAL PREVIEW:
    Google SERP:   [realistic preview of search result]
    Facebook OG:   [social share preview card]
    Twitter Card:  [Twitter share preview]
    Edit OG title / OG description / OG image here

  AEO MODE (Answer Engine Optimization):
    Toggle: [Standard SEO] ↔ [AEO Mode ☑]
    AEO Panel:
      Featured Snippet Optimization:
        ☑ Direct answer in first 50 words
        ☑ Structured list format (AI: use H2 question + bullet answer)
        ☑ "What is" definition present
        ☑ Table of Contents with jump links
      
      Voice Search Optimization:
        ☑ Conversational language
        ☑ Question-based H2s (who, what, when, where, why, how)
        ☑ Short 40-50 word answer blocks
      
      [Optimize for AEO] → AI rewrites intro + adds structured answers

  GEO MODE (Generative Engine Optimization):
    Toggle for GEO features
    Citability Score: 68/100
    Recommendations:
      ☑ Add original data/statistics
      ☑ Include author expertise signals
      ☑ Add publication date + update date
      ☑ Cite reputable sources
      ☑ Add structured data markup
      ☑ Use clear, definitive statements
    [Optimize for AI Search Engines] → applies GEO improvements
```

### 7.5 — AI Content Generation (Daily 2 Posts Feature)

```
ACCESS: [🤖 Generate Today's 2 Posts] button on Blog Dashboard

DUPLICATE CHECK (before generation):
  System checks last 90 days of published posts
  Similarity algorithm (cosine similarity on titles + topics)
  If similar post exists (>70% match):
    "⚠️ Similar post detected: 'Instagram Growth for Beginners' (Jun 3)"
    Options: [Generate on different angle] [Proceed anyway] [View existing post]
  Forces unique angles per generation

GENERATION WIZARD — STEP 1: Research Phase
  [Select AI Model ▼] — full model selector (see Phase 16)
  
  Keyword Research (runs automatically):
    "Running keyword research for your niche..."
    Results: 10 seed keywords with volume + KD + opportunity score
    AI selects 2 best opportunities (low KD, high volume, matches your content pillar)
  
  Gap Analysis (runs automatically):
    "Analyzing competitor content..."
    Shows 5 topics competitors rank for that you don't have posts about
    Marks the 2 selected topics as "Gap Opportunity"

GENERATION WIZARD — STEP 2: Outline Preview
  For each of 2 posts, shows:
    Proposed title (viral score shown)
    Proposed outline: H2 + H3 structure
    Target keyword + secondary keywords
    Estimated word count
    Suggested content format: How-to / Listicle / Guide / Case Study
  
  [Edit Outline] buttons — adjust before full generation
  [Regenerate Outline] [Accept Both Outlines → Generate Full Posts]

GENERATION WIZARD — STEP 3: Full Generation
  Live streaming output — text appears word by word
  Two columns: Post 1 (left) and Post 2 (right)
  Progress indicators:
    [▓▓▓▓▓▓▓▓░░] Generating Post 1: "10 Instagram Growth Tactics..."
    AI steps shown: "Researching... Writing intro... Adding examples... SEO pass..."
  
  When complete:
    SEO score auto-calculated and shown
    Uniqueness verified: "✓ 98% unique content (no plagiarism detected)"
    Recommended featured image prompts shown
    [Generate Featured Image] button per post (uses selected AI model)

GENERATION WIZARD — STEP 4: Review & Publish
  Two post preview cards:
  ┌──────────────────────────────────────────────────────┐
  │  POST 1: "10 Proven Instagram Growth Tactics 2026"    │
  │  SEO Score: 87/100 | Words: 1,842 | Read: 8 min       │
  │  Keyword: instagram growth tactics | KD: 32           │
  │  [Featured Image preview]                             │
  │                                                       │
  │  [✏ Edit Full Post] [👁 Preview] [📅 Schedule]         │
  │  [📤 Publish Now] [📱 Cross-post to Social]            │
  └──────────────────────────────────────────────────────┘

  Per post actions:
    [Edit Full Post] → opens full editor with generated content
    [Preview] → rendered preview in new tab
    [Schedule] → date/time picker → adds to editorial calendar
    [Publish Now] → publishes immediately
    [Cross-post to Social] → opens social post composer prefilled
    [Reject + Regenerate] → generates replacement

  Admin setting check:
    "Daily 2 Posts enabled for: yoursite.com ✓"
    If disabled by admin: shows locked state with "Contact admin to enable"

DAILY GENERATION LOG:
  History of all AI-generated posts
  Date | Post titles | Model used | SEO scores | Published?
```

### 7.6 — Media Gallery (Digital Asset Manager)

```
STORAGE BAR: [████████░░░░░░░░░░] 2.4 GB / 10 GB used (24%)
[Upload Files] [AI Generate Image] [+ New Folder]

VIEW CONTROLS:
  Filter tabs: [All] [Images] [Videos] [Documents] [Generated by AI]
  View: [Grid (4col)] [Grid (6col)] [List] [Masonry]
  Sort: Date / Name / Size / Type / Most Used

FOLDER TREE (left sidebar):
  📁 All Media (234 files)
  📁 Blog Images (89)
  📁 Social Media (123)
    📁 Instagram Posts (67)
    📁 Stories (34)
    📁 Reels Thumbnails (22)
  📁 Product Photos (45)
  📁 Videos (12)
  📁 AI Generated (34)
  📁 Brand Assets (logos, templates)
  [+ New Folder] [Rename] [Delete]

MEDIA GRID:
  Each thumbnail:
    Hover: file name + size + dimensions overlay
    Click: opens detail/preview modal
    Top-left: type badge (IMG / VID / DOC)
    Top-right: [☐ Select] checkbox
    Bottom: quick action icons [✏] [⬇] [🗑]
  
  Bulk selection mode:
    [Select All] [Deselect All]
    Bulk actions: [Delete Selected] [Download ZIP] [Move to Folder] [Add Tags]

MEDIA DETAIL MODAL:
  Left: Full preview (image/video player/doc icon)
  Right:
    File name (editable inline)
    File type, size, dimensions, upload date
    Folder: [Move to folder ▼]
    Tags: tag input (add/remove)
    Alt text (for accessibility + SEO)
    Used in: [Posts: 3] [Blog posts: 1] — lists where it's used
    [Edit Image] [Download] [Copy URL] [Delete]
    [Use in Current Post] (if editor is open)

AI IMAGE GENERATOR (modal):
  Model selector: [DALL-E 3] [Stable Diffusion 3] [Imagen] [Custom ▼]
  Prompt: text area with prompt tips
  Style: [Photo] [Illustration] [3D Render] [Flat Design] [Oil Painting]
  Aspect ratio: [1:1] [4:5] [16:9] [9:16]
  [Generate x4] → shows 4 variations
  Select best → [Save to Library] [Use Now]

SEARCH:
  Full-text search on file names + tags + alt text
  Filter: by date range, file type, folder, AI-generated flag
```

---

## ═══════════════════════════════════════════════════════
## PHASE 8: SOCIAL HUB (MULTI-PLATFORM)
## ═══════════════════════════════════════════════════════

### 8.1 — Platform Connection Manager

```
PLATFORMS GRID (3x3):
  Each platform card:
  ┌────────────────────────────────┐
  │ [Platform Logo]  Instagram     │
  │ Status: ✓ Connected            │
  │ @youraccount • Business        │
  │ 12,547 followers               │
  │ Token expires: 60 days         │
  │                                │
  │ [Manage] [Refresh] [Disconnect]│
  └────────────────────────────────┘
  
  Not connected state:
  ┌────────────────────────────────┐
  │ [Platform Logo]  Twitter/X     │
  │ Status: ○ Not Connected        │
  │                                │
  │ [Connect Account]              │
  └────────────────────────────────┘

MOCK OAUTH FLOW (clicking Connect):
  1. "Connecting to [Platform]..."
  2. Modal: "Authorize NexusForge AI to access your [Platform] account"
     Shows permission list (read posts, write posts, read analytics, etc.)
  3. [Authorize] button → success animation
  4. Account card appears with follower count + avatar
  5. Toast: "✓ @username connected to Facebook successfully!"

MULTI-ACCOUNT SUPPORT:
  Multiple accounts per platform
  [+ Add Another Instagram Account]
  Accounts shown in a list with [Switch Active] button
  Per account: token status, expiry, last refresh

TOKEN HEALTH MONITOR:
  Alerts when token expires in <7 days
  [Refresh Token] button → re-authorizes
  Error state: shows troubleshooting steps
```

### 8.2 — Cross-Platform Analytics

```
DATE RANGE SELECTOR: [Last 7d] [30d] [90d] [Custom range] + [Compare period ▼]

AGGREGATE METRICS (top row):
  Total Reach: 128.4K   Total Followers: 45.2K (+12%)
  Avg Engagement: 4.8%   Posts Published: 127
  Video Views: 234K      Link Clicks: 8,421

PER-PLATFORM BREAKDOWN (expandable cards):
  Instagram Card:
    Followers: 12.5K | Growth: +8% | Engagement: 5.2%
    Reach: 45.3K | Impressions: 128K | Profile Visits: 3.2K
    Top post thumbnail + metrics
    Best time to post: heatmap (7x24 grid, green = high engagement)
    [View Instagram Analytics →]

COMBINED CHARTS:
  1. Follower Growth Line Chart (all platforms overlaid)
  2. Engagement Rate Bar Chart (per platform per week)
  3. Content Performance Pie (by post type: Photo/Video/Reel/Story)
  4. Best Posting Times Heatmap (combined across platforms)
  5. Platform Comparison Radar Chart (5 metrics, all platforms)
  6. Revenue Attribution: Which social platform drives most sales

BEST PERFORMING CONTENT (cross-platform):
  Top 10 posts table: Platform | Thumbnail | Type | Views | Engagement | Date
  [Repurpose Best Performers] → opens bulk repurposing workflow
```

---

## ═══════════════════════════════════════════════════════
## PHASE 9: CRM & SALES PIPELINE (NEW — DIRECTOR FEATURE)
## ═══════════════════════════════════════════════════════

### 9.1 — Contact Database

```
CONTACT LIST (TanStack Table):
  Columns: ☐ | Avatar | Name | Email | Phone | Company | Role | 
           Source | Lead Score | Stage | Last Contact | Tags | Actions
  
  Lead Score badge (0-100):
    80-100 = 🔥 Hot
    50-79  = 🌡 Warm  
    20-49  = ❄ Cold
    0-19   = 💤 Inactive
  
  Source badge: Instagram / Facebook / LinkedIn / Email / Website / Manual

ADD/EDIT CONTACT MODAL:
  Personal: First/Last name, email, phone, photo upload
  Company: company name, website, industry, size, revenue
  Social profiles: Instagram handle, LinkedIn URL, Twitter
  Lead info: Stage, Lead Score (editable), Assigned To, Source
  Notes: rich text area
  Tags: multi-tag input
  Custom fields: any field your team defines
  Activity history: auto-populated from interactions

CONTACT DETAIL PAGE:
  Left: Contact card + edit
  Center: Activity timeline (emails sent, DMs, calls, notes)
  Right: 
    Lead score breakdown
    Assigned automations
    Email campaigns received
    Social interactions tracked
    Next action reminder
    [Schedule Follow-up] [Send Email] [Send DM] [Log Call]

IMPORT/EXPORT:
  [Import CSV] → mapper → validate → import with duplicate check
  [Export Selected] → CSV / Excel
  [Sync from Social] → pulls new followers → creates leads
  [Sync to Email Marketing] → pushes contacts to email segments

SOCIAL → CRM BRIDGE:
  When someone follows you: option to "Auto-create lead" ☑
  When someone DMs: option to "Auto-create or update lead" ☑
  When someone comments: option to "Add to lead pool" ☑
  Lead enrichment: AI fills in missing data from public profiles
```

### 9.2 — Sales Pipeline (Kanban)

```
PIPELINE VIEW (horizontal kanban):
  Columns (customizable):
    LEAD (23)      QUALIFIED (15)    PROPOSAL (8)    NEGOTIATION (4)    CLOSED WON (12)    CLOSED LOST (7)
    $234K total    $187K total       $89K total      $45K total         $312K closed       $78K lost

  DEAL CARD:
    Company logo + name
    Deal value: $2,500
    Owner: [Avatar] Sarah
    Close date: Jun 30
    [Color bar = deal health: green/yellow/red]
    Drag to move between stages

  CLICK DEAL CARD → DETAIL DRAWER:
    Overview: value, stage, probability, close date, assigned, created
    Activity timeline: calls, emails, proposals sent, meetings
    Products/Services in this deal
    Contacts associated
    Notes (rich text)
    Documents (proposals, contracts) — file upload
    Next steps checklist
    [Edit] [Move Stage ▼] [Clone] [Delete]

PIPELINE METRICS BAR:
  Total pipeline: $678K
  Weighted pipeline: $423K (probability-adjusted)
  Avg deal size: $3,200
  Win rate: 68%
  Avg days to close: 24

LIST VIEW (alternative):
  Same deals in sortable table format
  Filter by owner, stage, value range, close date, tag
  Bulk: [Move Stage] [Reassign] [Export]

DEAL CREATION MODAL:
  Deal name, associated contact/company (search)
  Value, currency, probability %
  Expected close date
  Pipeline + Stage
  Owner (team member)
  Tags + Notes
  [Create Deal]

FORECAST VIEW:
  Monthly revenue forecast: bar chart (closed vs pipeline vs target)
  Per rep: name, deals, pipeline value, closed this month, quota %
  [Set Quota per Rep] → sets targets
```

### 9.3 — Lead Scoring & Automation

```
LEAD SCORING RULES:
  Each rule adds/subtracts points:
  +20 Opened email campaign
  +15 Clicked link in email
  +10 Visited pricing page
  +25 Requested demo
  +5  Followed on Instagram
  +8  Replied to DM
  +12 Downloaded lead magnet
  -10 Unsubscribed from email
  -5  No activity for 30 days
  [+ Add Rule] [Import Rules] [Reset All Scores]

AUTOMATION TRIGGERS ON SCORE THRESHOLD:
  If score reaches 50 → Move to "Qualified"
  If score reaches 75 → Assign to sales rep + alert
  If score reaches 90 → Mark as "Hot Lead" + send special offer DM
  If score drops below 20 → Move to "Inactive" + remove from sequences

LEAD FORMS (landing page integration):
  [Create Lead Form] → drag-drop form builder
  Fields: name, email, company, phone, interest, source
  Embed code: HTML snippet + WordPress shortcode + React component
  Auto-routes new leads to pipeline

WORKFLOW: SOCIAL TO SALE JOURNEY
  1. User follows Instagram → Auto-creates lead (score: 5)
  2. User watches Story → score +3
  3. User clicks link in bio → score +10, visits pricing page +10
  4. Score hits 28 → Enters email welcome sequence
  5. User opens email → +20, clicks CTA → +15 → score = 63
  6. Score 63 → Marked "Warm" → Sales rep notified
  7. Sales rep sends personal DM → books demo
  8. Demo held → Deal created in pipeline ($2,500)
  All tracked automatically
```

---

## ═══════════════════════════════════════════════════════
## PHASE 10: EMAIL MARKETING SUITE (FULL)
## ═══════════════════════════════════════════════════════

### 10.1 — Campaign Dashboard

```
CAMPAIGN STATUSES: [All] [Draft] [Scheduled] [Sent] [Paused] [Automated]

CAMPAIGN CARD:
  Subject line, type (Newsletter/Promotional/Automated)
  Sent: Jun 5 | Recipients: 8,432
  Open Rate: 42.1% (industry avg: 21%) ↗ 
  Click Rate: 8.7% (industry avg: 2.6%) ↗
  Unsubscribes: 12 (0.14%)
  Revenue attributed: $3,420
  [View Report] [Duplicate] [Archive]

METRICS SUMMARY BAR:
  Total sent this month: 34,521
  Avg open rate: 38.4%
  Avg click rate: 7.2%
  Total revenue attributed: $12,840
  New subscribers: +234  |  Unsubscribes: -89
```

### 10.2 — Email Builder (Drag-Drop Blocks)

```
TEMPLATE LIBRARY:
  Categories: [Blank] [Newsletter] [Promotion] [Announcement] [Event] 
              [Welcome] [Product Launch] [Re-engagement] [Transactional]
  Each template: preview thumbnail + [Use Template] [Preview]
  [Import HTML] for custom templates

EMAIL CANVAS (drag-drop builder):
  Left sidebar: block types
    Layout: Single column / Two column / Three column / Header / Footer
    Content: Text / Image / Button / Divider / Spacer / Video thumbnail
    Social: Social media links bar
    Dynamic: Countdown timer / Product feed / Subscriber name
  
  Main canvas:
    Each block: hover to see [Edit] [Duplicate] [Delete] [Move ↑↓]
    Click to edit inline
    Resize handles on images
    Color picker for backgrounds
    Font picker for text
    Mobile/Desktop toggle preview
  
  Right panel (context-sensitive):
    When text block selected: typography, color, alignment, link
    When image selected: upload new, alt text, link, border radius
    When button selected: text, link, style, size, color, full-width toggle
    Global styles: background color, font family, link color

PERSONALIZATION:
  [Insert Variable ▼] → {{first_name}} {{company}} {{city}} {{custom_field}}
  Preview personalization: type test name → see how it looks
  Fallback: {{first_name | default: "there"}}

A/B TEST SETUP (within campaign):
  What to test: [Subject Line] [From Name] [Send Time] [Content]
  Variant A / B inputs
  Test size: 20% each, winner gets remaining 60%
  Duration: [4 hours] [24 hours] [48 hours]
  Winner by: [Open Rate] [Click Rate] [Conversions]

SCHEDULE:
  Send now / Schedule (date+time+timezone) / Send at best time per recipient
  Throttle: send [100] emails per [minute] (for large lists)
  [Send Test Email to myself] before scheduling

SUBJECT LINE OPTIMIZER:
  Enter subject → instant score + emoji suggestions + alternative options
  Same viral title checker logic adapted for email
```

### 10.3 — Automation Flows (Visual Builder)

```
FLOW BUILDER CANVAS:
  Drag nodes from sidebar onto canvas
  Connect with arrows (click output dot → drag to input dot)
  
  NODE TYPES:
    🔵 Triggers: Subscribed / Tag Added / Form Submitted / Date / 
                 Purchase / Cart Abandoned / Custom Event / Webhook
    
    🟡 Conditions: If/Else branching
                   Conditions: email opened / clicked / tag has / field equals
    
    🟠 Actions:   Send Email / Add Tag / Remove Tag / Move to Segment / 
                  Update Field / Notify Team / Add to CRM / 
                  Webhook / Wait (delay)
    
    🔴 Exits:     End Flow / Move to different flow

  EXAMPLE WELCOME FLOW:
    [Trigger: New Subscriber]
      → Send "Welcome Email" (immediate)
      → Wait 2 days
      → Condition: Did they open welcome email?
        YES → Send "Getting Started Tips"
        NO  → Send "Did you get our email?" (re-engagement)
      → Wait 3 days
      → Send "Special Offer for New Members"
      → Add tag: "Welcome Series Complete"
      → End

  FLOW ANALYTICS OVERLAY:
    Hover any node → see:
      Entered: 1,247 subscribers
      Completed: 892 (71.5%)
      Open rate (if email node): 38.2%
      Click rate: 8.4%
      Exited early: 127

  [Activate Flow] [Pause Flow] [Duplicate] [Export] [Analytics Report]
```

### 10.4 — Subscriber Management

```
SUBSCRIBER TABLE (TanStack):
  Email | Name | Signup Date | Source | Status | Last Opened | Segments | Tags
  Status: Active / Unsubscribed / Bounced / Complained
  Per row: [View Profile] [Edit] [Send Email] [Unsubscribe] [Delete]

SUBSCRIBER PROFILE PAGE:
  Header: name, email, avatar, subscription status, lead score
  
  Tabs:
    Activity: timeline of all email interactions
    Segments: which segments they're in
    Tags: all applied tags
    CRM: linked CRM contact
    Preferences: what they subscribed to, frequency
    GDPR: consent record, right to erasure button

SEGMENT BUILDER:
  Create any combination:
    AND / OR logic
    Conditions:
      Email activity: opened/clicked/bounced in last X days
      Demographic: location, timezone, language
      Tags: has/doesn't have specific tags
      Custom fields: any field = value
      Engagement score: > < between
      Date: subscribed before/after
      Sequence: in/not in specific flow
  
  Preview count before saving: "This segment contains 1,247 subscribers"
  [Save Segment] [Test Sample (5 random)] [Download CSV]

IMPORT:
  CSV import with field mapper
  Duplicate detection: [Skip] [Update] [Create new]
  Consent checkbox required: ☑ "I confirm these contacts gave consent"
  Tags to apply to all imported: [tag input]
```

---

## ═══════════════════════════════════════════════════════
## PHASE 11: CAMPAIGN MANAGEMENT (FULL)
## ═══════════════════════════════════════════════════════

### 11.1 — Campaign Lifecycle Kanban

```
COLUMNS:
  IDEA        PLANNING      BRIEFING      IN PROGRESS    REVIEW       ACTIVE        COMPLETED
  (5)         (3)           (2)           (4)            (2)          (8)           (23)

CAMPAIGN CARD:
  Campaign name (bold)
  Type badge: [Paid Social] [Organic] [Email] [SEO] [Influencer] [PR]
  Budget: $3,000 | Spent: $1,842 (61%)
  Duration: Jun 1 → Jun 30
  Owner avatar
  Progress bar + % complete
  Quick metric: Conversions: 187 | ROAS: 4.2x

CAMPAIGN DETAIL (full page / large drawer):
  Header: Name, status badge, [Edit] [Duplicate] [Archive] [Delete]
  
  Overview tab:
    Campaign brief (rich text)
    Objectives: Awareness / Traffic / Leads / Sales / Retention
    KPIs set: target reach / clicks / conversions / revenue
    
  Budget tab:
    Total budget input / daily budget
    Burn rate chart (actual vs paced)
    [⚠ Burn rate $123/day — over budget by $23/day]
    Budget adjustments log
  
  Channels tab:
    Per channel toggles: Instagram / Facebook / LinkedIn / Email / Pinterest
    Channel-specific settings
    Cross-channel budget allocation pie chart
  
  Creatives tab:
    Upload ads (images, videos)
    Organize by ad set
    Ad preview per platform
    Performance per creative (if running)
  
  Audience tab:
    Target demographics, interests, behaviors
    Lookalike audience settings
    Custom audiences from CRM
  
  A/B Tests tab:
    Active tests, results, winner
  
  Performance tab:
    Real-time metrics: reach, impressions, clicks, CTR, conversions
    ROAS calculator (auto-calculated + manual revenue input)
    Goal progress bars
    [Export Report] [Share with Client]

CAMPAIGN CREATION WIZARD (5-step modal):
  Step 1: Basics (name, type, objective, dates)
  Step 2: Budget (total, daily split, channels allocation)
  Step 3: Audience (demographics, interests, geographic)
  Step 4: Creatives (upload assets, write copy)
  Step 5: Review + Launch
```

### 11.2 — ROI Calculator & Analytics

```
ROI CALCULATOR PAGE:
  Input fields:
    Ad Spend: [$1,842]
    Creative Production Cost: [$500]
    Tool & Platform Costs: [$200]
    Team Hours × Rate: [10 hrs × $50/hr = $500]
    Total Cost: $3,042 (auto-calculated)
  
    Revenue Generated: [$10,680]
    New Customers Acquired: [187]
    Avg Order Value: [$57.11] (auto-calculated)
    Customer Lifetime Value: [$340] (input)
  
  Output metrics (auto-calculated with animation):
    ROAS: 5.8x          (Revenue / Ad Spend)
    ROI:  251%          ((Revenue - Cost) / Cost × 100)
    CPA:  $16.26        (Total Cost / Customers)
    LTV:ROAS = 11.2x   (CLV-based ROAS)
    Break-even ROAS: 2.1x
    
  WHAT-IF SCENARIOS:
    Drag sliders:
      If Ad Spend → +20%: ROAS = 5.2x, ROI = 198%
      If Conversion Rate → +10%: ROAS = 6.4x, ROI = 288%
    Live recalculates as you adjust

  [Export PDF Report] [Save Scenario] [Compare Scenarios]
```

---

## ═══════════════════════════════════════════════════════
## PHASE 12: COMPETITOR INTELLIGENCE
## ═══════════════════════════════════════════════════════

### 12.1 — Competitor Dashboard

```
ADD COMPETITOR: Handle input → validates → creates competitor card
Max 20 competitors tracked simultaneously

COMPETITOR CARD:
  @competitor1 • 45.2K followers ↗ +12%
  Engagement: 4.8% | Posts/mo: 24
  Last post: 2 hours ago
  Ad activity: 🔴 Running ads detected
  [Full Analysis] [Compare to Me] [Alert Settings]

COMPARISON VIEW (select up to 4 including yourself):
  Metrics compared in table:
    Follower count, growth rate, engagement rate, posts/week,
    avg likes, avg comments, top hashtag, top content type
  
  Visual comparison: grouped bar chart per metric
  Winner highlighted per metric

MARKET SHARE PIE CHART:
  Your brand: 18%   Competitor 1: 35%   Competitor 2: 25%   Others: 22%
  Animated, hover for details

GROWTH TREND LINE CHART:
  30/90 day follower growth all competitors + you on same chart
  Highlight crossing points ("You overtook Competitor 2 on Jun 3")
```

### 12.2 — SWOT Analysis Tool

```
SWOT GRID (2x2 editable):
  Each quadrant:
    Title + color header
    Editable text items (click to edit)
    [+ Add item] per quadrant
    [AI Generate SWOT] → fills all 4 quadrants using competitor data
    AI generates based on:
      Your metrics vs their metrics (strengths/weaknesses)
      Market trends + competitor activity (opportunities/threats)
  
  [Save Analysis] [Export PDF] [Share Link]
  Version history: [Compare to last month's SWOT]

AI SWOT GENERATION:
  Model selector → [Generate SWOT vs @competitor1]
  Loading state: "Analyzing 90 days of data..."
  Output streams into quadrants
  [Regenerate] [Accept] [Edit]
```

### 12.3 — Market Positioning Map

```
2x2 INTERACTIVE SVG MAP:
  X-axis label: [Price ▼] (changeable: Price / Quality / Speed / Value)
  Y-axis label: [Quality ▼] (changeable)
  
  Each brand = draggable dot
  Your brand: star shape in indigo
  Competitors: circles with first letter
  
  DRAG DOTS to reposition
  Hover dot: popup with brand name + axis values
  
  Right panel: updates live based on dot positions
    "You are positioned as: Premium-Mid Quality"
    "Opportunity: High-Quality niche is underserved"
    "Threat: @competitor1 is targeting your exact quadrant"
  
  [Add Competitor Dot] [Remove Dot] [Reset] [Export PNG]
  [AI Position Brands] → AI places all brands based on analyzed data
```

---

## ═══════════════════════════════════════════════════════
## PHASE 13: SEO / AEO / GEO TOOLS SUITE
## ═══════════════════════════════════════════════════════

### 13.1 — Keyword Research Tool

```
INPUT: Seed keyword entry + [Search]
SECONDARY INPUTS: Country, Language, Timeframe

KEYWORD OVERVIEW CARD:
  Main keyword with all metrics shown prominently
  12-month trend sparkline chart
  SERP features: Featured Snippet / PAA / Shopping / Video / Local

KEYWORD IDEAS TABLE (TanStack — sortable):
  Keyword | Monthly Volume | KD (0-100) | CPC | Competition | Intent | Trend | Opportunity Score
  
  Intent badges: 🔵 Informational | 🟠 Commercial | 🔴 Transactional | 🟢 Navigational
  Opportunity Score = (Volume / KD) × intent multiplier
  
  Actions per row:
    [+ Add to List] [View SERP] [Create Content] [Track Ranking]
  
  Bulk actions:
    [Add Selected to Saved List] [Export Selected] [Create Posts for All]

FILTER PANEL:
  Volume slider, KD slider, CPC slider
  Intent checkboxes, SERP feature checkboxes
  "Questions only" toggle (who/what/when/where/why/how)

PEOPLE ALSO ASK:
  Top 10 PAA questions for the keyword
  [Answer this question] → opens blog editor with question as H2

SAVED KEYWORD LISTS:
  [+ New List] name it
  All keyword lists shown
  Per list: [View] [Use in SEO audit] [Export] [Delete]

COMPETITOR KEYWORD GAP:
  Enter your domain + competitor domain
  "Keywords they rank for that you don't" table
  Sorted by: traffic potential
  [Create content to compete] per keyword
```

### 13.2 — Site Audit Tool

```
INPUT: URL field + [Run Full Audit] + crawl depth selector

PROGRESS BAR during audit:
  "Crawling pages... 34/127 pages analyzed"
  ETA shown

RESULTS DASHBOARD:
  Overall Health Score: 78/100 (large gauge)
  
  Category scores:
    Technical SEO:    82/100 [████████░░]
    On-Page SEO:      76/100 [███████░░░]
    Content Quality:  71/100 [███████░░░]
    Performance:      68/100 [██████░░░░]
    Mobile:           88/100 [████████░░]
    Security:         95/100 [█████████░]
    Accessibility:    74/100 [███████░░░]
    Structured Data:  55/100 [█████░░░░░]

  ISSUE LIST (prioritized by impact):
    🔴 Critical (must fix):
      • 5 pages return 404 error [View pages] [Fix suggestion]
      • 12 pages missing meta description [View pages] [Auto-generate]
      • 8 pages with load time >3s [View pages] [Optimization tips]
    
    🟡 Warnings (should fix):
      • 23 images missing alt text [View all] [Batch add alt text]
      • 15 pages with thin content (<300 words) [View pages]
      • 4 pages with duplicate title tags [View pages]
    
    ✅ Passed (45 checks):
      • SSL certificate valid (expires in 342 days)
      • XML sitemap present and valid
      • robots.txt properly configured
      • Mobile-friendly (Google Mobile Test: Pass)

  [View Full Issue List] [Export Report] [Schedule Weekly Scan]
  
  "Quick Fix Mode":
    Per issue: [AI Suggest Fix] → shows code/content change needed
    Some issues: [Auto-Fix] button (e.g., auto-generate missing meta descriptions)
    Track improvements: "Fixed 8 issues — health score: 78 → 84"
```

### 13.3 — Content Optimizer (AEO + GEO)

```
INPUT:
  Paste content OR enter URL to fetch
  Focus keyword input
  Mode selector: [Standard SEO] [AEO] [GEO] [All Three]
  [Analyze →]

DUAL-PANEL LAYOUT:
  Left:  Original content
  Right: Optimized suggestions / AI-rewritten version

STANDARD SEO ANALYSIS: (as detailed in Phase 7.4)

AEO ANALYSIS:
  Answer Structure Score: 72/100
  
  Featured Snippet Opportunities:
    ☑ Add direct answer box in first 100 words
    ☑ Include definition of target keyword
    ☑ Format as numbered list (How-to content detected)
    ⚠ No table present (could earn table snippet)
  
  PAA Coverage:
    5 related questions found → 2/5 answered in content → add 3 more
    [AI Generate Answers] → adds Q&A section to content
  
  Voice Search Readiness:
    ☑ Conversational tone detected
    ⚠ Answers average 87 words → reduce to <50 for voice
    ☑ Question-based headings present

GEO ANALYSIS (for AI/LLM citability):
  Citability Score: 58/100
  
  AI Search Engine Readiness:
    ☑ Clear, definitive statements (not vague)
    ⚠ No original data or statistics cited
    ⚠ No visible author expertise signals
    ☑ Publication date present
    ⚠ No structured data markup
    ⚠ No clear entity definitions
    ☑ Comprehensive topic coverage
  
  [Add Expertise Signals] → prompts for author bio + credentials
  [Generate Statistics Section] → AI creates data-rich paragraph
  [Apply Structured Data] → adds JSON-LD schema markup

[Apply All Suggested Optimizations] → shows diff view before applying
[Copy Optimized Content] [Save as New Version] [Update in CMS]
```

### 13.4 — Backlink Tracker

```
DOMAIN OVERVIEW CARD:
  Domain Authority: 45/100
  Total Backlinks: 1,247
  Referring Domains: 342
  New (30d): +23    Lost (30d): -8
  Dofollow: 71%     Nofollow: 29%

BACKLINK TABLE:
  Source URL | Source Domain | DA | Type | Anchor Text | First Found | Status
  Status: Active / Lost / Redirect / 404
  Sort by DA (show high DA first by default)
  [Filter: Active only] [Show only lost] [Show new this week]

NEW/LOST ALERTS:
  "🔥 New DA 93 link from techcrunch.com — 2 days ago"
  "⚠️ Lost link from businessinsider.com (page deleted)"

ANCHOR TEXT PIE CHART:
  Branded / Exact match / Partial / Generic / URL / Others

COMPETITOR BACKLINK GAP:
  Find backlinks competitors have that you don't
  Priority opportunities: sites that link to 3+ competitors → high chance

LINK OUTREACH TOOL:
  Find contact email for link opportunities
  [Generate Outreach Email] → AI writes personalized pitch

DISAVOW TOOL:
  Flag spammy links → generates disavow.txt for Google Search Console

[Alert Settings] → notify when: new link found / link lost / DA changes
```

---

## ═══════════════════════════════════════════════════════
## PHASE 14: INFLUENCER NETWORK (NEW — DIRECTOR FEATURE)
## ═══════════════════════════════════════════════════════

### 14.1 — Influencer Discovery

```
SEARCH & FILTER:
  Keyword/niche search: "fitness" "sustainable fashion" "tech gadgets"
  Platform: [Instagram] [TikTok] [YouTube] [Twitter]
  
  Filters:
    Followers: [1K Nano] [10K Micro] [100K Mid] [1M Macro] [10M Mega]
    Engagement Rate: [>1%] [>3%] [>5%] [>10%]
    Location: country / city
    Language
    Content Category (multi-select)
    Verified: ☐ Only verified
    Authenticity Score: > [75%] (fake follower check)
    Price Range: [$] [$$] [$$$]

INFLUENCER CARD:
  Photo | @handle | Platform | Followers | ER | Niche | Location
  Authenticity: 94% | Avg Views: 45K | Avg Likes: 2.1K
  Estimated Post Cost: $450-$800
  [View Profile] [Save to Campaign] [Reach Out]

INFLUENCER PROFILE PAGE:
  Full analytics: audience demographics, top content, performance history
  Collaboration history (if any previous)
  Follower quality analysis (real vs fake breakdown)
  Audience overlap with your followers
  Content calendar (public posts history heatmap)
  [Create Collaboration Brief] [Send Partnership Request] [Add to List]
```

### 14.2 — Influencer Campaign Manager

```
CAMPAIGN BOARD (per influencer campaign):
  Influencers organized by status:
    Discovered → Shortlisted → Contacted → Negotiating → Contracted → Live → Completed
  
  Per influencer card:
    Name, platform, followers
    Content type agreed: Story / Post / Reel / YouTube video
    Deliverables: 3 Stories + 1 Post
    Rate agreed: $650
    Deadline: Jun 20
    Status: [On Track / At Risk / Overdue]
    [View Brief] [Track Content] [Request Revision] [Approve] [Pay]

BRIEF BUILDER:
  Campaign objective
  Target audience description
  Content requirements: do's and don'ts
  Brand guidelines attachment
  Hashtags required
  Mention requirements
  Posting schedule
  Payment terms
  [Generate Brief PDF] → client-ready brief document

PERFORMANCE TRACKING:
  Per influencer: reach, impressions, engagement, link clicks, conversions, CPM, CPA
  Aggregate: total reach, total cost, blended CPM, total conversions, ROAS
  Compare influencer performance: bar chart
  Top performing: @username drove 234 conversions at $4.20 CPA
```

---

## ═══════════════════════════════════════════════════════
## PHASE 15: AGENCY / CLIENT MANAGEMENT (NEW — DIRECTOR FEATURE)
## ═══════════════════════════════════════════════════════

### 15.1 — Multi-Client Workspace

```
WORKSPACE SWITCHER (top navbar dropdown):
  My Agency Dashboard
  ─────────────────
  ★ Client A - FitLife Apparel
  ★ Client B - TechStart Inc
  ★ Client C - Restaurant Chain
  ... (all 100+ clients)
  ─────────────────
  [+ Add New Client Workspace]

CLIENT LIST PAGE (main agency view):
  Table: Logo | Client Name | Industry | Accounts | Active Campaigns | 
         Monthly Revenue | Health Score | Account Manager | Status | Actions
  
  Health Score: automatic calculation:
    Green (>80): all automations running, posts scheduled, no alerts
    Yellow (60-80): some warnings
    Red (<60): needs attention (account issues, expired tokens, etc.)
  
  Bulk actions: [Pause All Automations] [Generate Monthly Reports] [Export]

CREATE CLIENT WORKSPACE:
  Client name, industry, website URL
  Assign account manager (your team member)
  Select plan template (what features they can access)
  Upload logo (for their white-labeled portal)
  Custom sub-domain: [clientname.nexusforge.ai]
  [Create Workspace]

IMPERSONATE CLIENT:
  [Switch to Client View] → changes entire dashboard to that client's limited view
  "[Impersonating: FitLife Apparel]" banner shown
  [Exit Impersonation] returns to agency view
  Client sees only their data + features you enabled
```

### 15.2 — White-Label Client Portal

```
PER-CLIENT BRANDING:
  Upload client logo → appears in portal header
  Brand colors: primary, secondary (CSS variables applied)
  Custom domain: portal.clientsite.com (DNS instructions provided)
  Remove "Powered by NexusForge" option (agency plan)
  Custom email sender name: reports come from agency email

CLIENT PORTAL VIEW (what client sees):
  Limited dashboard: only their accounts, posts, analytics
  No access to: automation config, proxy, admin, other clients
  Read-only by default, write access per permission toggle
  Custom welcome message

CLIENT REPORTS:
  Auto-generated PDF reports branded with client logo
  Monthly performance → auto-sent to client email
  Report template: results dashboard + growth chart + recommendations
  White-label PDF (no NexusForge mention unless you choose)
  [Schedule Monthly Client Reports] (set once, auto-sends)

CLIENT BILLING (agency billing to their clients):
  Invoice generator: client name, services, costs, monthly recurring
  [Generate Invoice PDF] [Send via Email] [Mark as Paid]
  Tracks: what you charge each client vs what you pay NexusForge
  Profit margin calculator per client
```

### 15.3 — Admin Panel (Admin Role Only)

```
ADMIN DASHBOARD:
  Platform health: uptime, error rate, queue depth, active users
  Usage stats: API calls today, AI tokens used, storage used
  Revenue: MRR, ARR, churn rate, new customers

FEATURE FLAGS (per-platform toggles):
  Toggle features on/off globally or per workspace:
    ☑ Blog / CMS Module
    ☑ Daily 2 Posts Pilot
    ☑ Advanced Automation Engine
    ☑ Agentic AI Mode
    ☑ Email Marketing Suite
    ☑ Influencer Network
    ☑ CRM & Sales Pipeline
    ☑ White-Label Features
    ☑ API Access (per workspace)

WEBSITES & FEATURE FLAGS TABLE:
  URL | Blog Feature | Daily Posts | Auto Posting | Status | Actions
  yoursite.com | ✓ Enabled | ✓ Enabled | Running | Active | [Configure]
  client2.com  | ✓ Enabled | ✗ Disabled | Paused | Active | [Configure]
  client3.com  | ✗ Disabled | ✗ Disabled | - | Inactive | [Enable]
  
  [+ Add Website]
  Per-site toggles: "Blog Option Enabled" | "Daily 2 SEO Posts Enabled"
  
  [Trigger Daily Auto Posts for All Enabled Sites] — master run button
    → triggers generation for ALL sites with Daily Posts enabled
    → logs progress in real-time activity panel
    → completion summary: "Generated 2 posts for 12 sites (24 total posts)"

  "Check Blog Feature Availability" per site:
    Badges: [✓ Accessible] [⚠ Reachable but errors] [✗ Unreachable]

USER MANAGEMENT:
  All users table: name, email, role, workspace, last active, status
  [Edit Role] [Reset Password] [Suspend Account] [Delete]
  [Invite New User] [Bulk Import Users]

AUDIT LOG (full platform):
  Every action across all workspaces
  Filter: user, workspace, action type, date, status
  Export for compliance

PLATFORM SETTINGS:
  AI model API keys management
  Social platform API credentials
  Email provider settings
  Payment gateway configuration
  Storage provider configuration
  Webhook endpoints
  Rate limit configurations per plan
```

---

## ═══════════════════════════════════════════════════════
## PHASE 16: AI STUDIO (UNIFIED AI HUB)
## ═══════════════════════════════════════════════════════

### 16.1 — Global Model Selector Component

```
ACCESSIBLE FROM: Every content generation button across the platform

SELECTOR UI: Searchable grid with model cards

MODEL CARDS (each shows):
  Provider badge (OpenAI / Anthropic / Google / NVIDIA / xAI / Meta / etc.)
  Model name + version
  Capability tags: [Text] [Vision] [Code] [Reasoning] [Multimodal] [TTS] [Video]
  Speed: ⚡ Fast | ⚡⚡ Very Fast | 🐌 Slower (better quality)
  Best for: short description
  Cost tier: $ $$ $$$

AVAILABLE MODELS:
  ┌─────────────────────────────────────────────────────────────────┐
  │ Provider   │ Model                              │ Best For      │
  ├────────────┼────────────────────────────────────┼───────────────┤
  │ NVIDIA NIM │ kimi-k2.6                          │ Reasoning     │
  │ NVIDIA NIM │ nemotron-3-nano-omni-30b-reasoning │ Agentic AI    │
  │ NVIDIA NIM │ riva-translate-4b-instruct         │ Translation   │
  │ NVIDIA NIM │ mistral-large-3-675b-instruct      │ Long content  │
  │ NVIDIA NIM │ ministral-14b-instruct             │ Balanced      │
  │ NVIDIA NIM │ nemotron-nano-12b-v2-vl            │ Vision+Text   │
  │ NVIDIA NIM │ llama-4-maverick-17b-128e-instruct │ Creative      │
  │ NVIDIA NIM │ phi-4-multimodal-instruct          │ Multimodal    │
  │ NVIDIA NIM │ llama-3.2-11b-vision-instruct      │ Vision cheap  │
  │ NVIDIA NIM │ llama-3.2-90b-vision-instruct      │ Vision best   │
  │ NVIDIA NIM │ nv-embed-v1                        │ Embeddings    │
  │ NVIDIA NIM │ paligemma                          │ Image+Text    │
  │ NVIDIA NIM │ magpie-tts-zeroshot                │ Voice/TTS     │
  │ OpenAI     │ GPT-4o                             │ Best overall  │
  │ OpenAI     │ GPT-4-turbo                        │ Speed+quality │
  │ OpenAI     │ DALL-E 3                           │ Image gen     │
  │ OpenAI     │ Whisper                            │ Transcription │
  │ Anthropic  │ Claude 3.5 Sonnet                  │ Long content  │
  │ Anthropic  │ Claude 3 Opus                      │ Complex tasks │
  │ Google     │ Gemini 1.5 Pro                     │ Multimodal    │
  │ Google     │ Gemini Flash                       │ Fast + cheap  │
  │ Google     │ Imagen                             │ Image gen     │
  │ xAI        │ Grok-2                             │ Real-time data│
  │ xAI        │ Grok-Vision                        │ Images        │
  │ Stability  │ Stable Diffusion 3                 │ Image gen     │
  │ RunwayML   │ Gen-3                              │ Video gen     │
  │ ElevenLabs │ Turbo v2                           │ Voice clone   │
  └─────────────────────────────────────────────────────────────────┘

AI ROUTING RULES (auto-select if "Auto" chosen):
  Blog post generation → Claude 3.5 Sonnet
  Social captions → GPT-4o
  Agentic reasoning → kimi-k2.6
  Image generation → DALL-E 3 or Stable Diffusion 3
  Translation → riva-translate-4b-instruct
  Code tasks → nemotron-3-nano-omni-30b-reasoning
  Real-time queries → Grok-2
  Voice/TTS → magpie-tts-zeroshot or ElevenLabs
  Vision tasks → llama-3.2-90b-vision-instruct or Gemini Flash
  Embeddings → nv-embed-v1

WHEN GENERATING (loading state):
  "Calling kimi-k2.6..."
  Step progress: "Analyzing topic... Structuring content... Optimizing for SEO..."
  Streaming output (text appears word by word)
  Token usage shown when complete: "Used 1,247 tokens"
```

### 16.2 — AI Studio Workspace

```
TABS: [Content Generator] [Image Studio] [Video Studio] [Voice Studio] 
      [Code Assistant] [Translation] [Workflow Builder] [API Playground]

CONTENT GENERATOR TAB:
  Model selector
  Template presets: Blog Post / Social Caption / Email / Ad Copy / Product Description /
                    Video Script / Press Release / Newsletter / Landing Page
  
  Input section:
    Topic/keyword, audience, tone, length, include/exclude keywords
    Outline (optional): drag-sort list
    Reference content (paste competitor content for style reference)
  
  [Generate] → streaming output
  
  Output section:
    Full content rendered with formatting
    [Copy] [Insert to Editor] [Save to Library] [Regenerate] [Edit + Regenerate]
    Metrics: word count, reading time, AI model used, tokens consumed
    [Open in Blog Editor] [Schedule to Social] [Send as Email]

IMAGE STUDIO TAB:
  Model selector (DALL-E 3 / Stable Diffusion / Imagen / paligemma)
  Prompt text area with [✨ Enhance Prompt] button
  Style selector: Photorealistic / Illustration / 3D / Watercolor / Cinematic
  Aspect ratio: 1:1 / 16:9 / 9:16 / 4:5
  [Generate x4] → 4 variations shown in 2x2 grid
  
  Image tools:
    [Variations] [Edit with Text] [Upscale] [Remove Background] [Style Transfer]
  
  Save to Media Library with tags

VIDEO STUDIO TAB:
  Model: RunwayML Gen-3
  Text-to-video prompt
  Image-to-video (upload reference image)
  Duration: 4s / 8s / 16s
  Style: Cinematic / Documentary / Animation
  [Generate Video] → preview + download

VOICE STUDIO TAB:
  Model: magpie-tts-zeroshot or ElevenLabs
  Text input (script)
  Voice clone: upload 30s audio sample → clones voice
  Pre-built voices: Professional Male / Female / News Anchor / Podcast Host
  Speed, pitch, emotion controls
  [Generate Audio] → playback + download MP3

WORKFLOW BUILDER TAB:
  Visual node editor for AI pipelines
  Example: "Blog post URL → Extract key points → Generate 5 social posts → Schedule all"
  Save workflow → run on demand or on schedule
  [Run Workflow] [Schedule Daily] [Export as Template]
```

---

## ═══════════════════════════════════════════════════════
## PHASE 17: ANALYTICS & REPORTS
## ═══════════════════════════════════════════════════════

### 17.1 — Analytics Dashboard

```
DATE PICKER: [Today] [7 days] [30 days] [90 days] [Custom] | Compare: ☐ Previous period

METRICS OVERVIEW (top row, count-up animation):
  Total Followers | Follower Growth% | Total Reach | Avg Engagement | Posts Published
  Plus: Revenue ($) | Leads Generated | Conversions | Email Open Rate

CHARTS SECTION (interactive Recharts):

  Chart 1: Follower Growth (multi-line, per platform)
    Tooltip: date + all platforms' values
    Click platform in legend to toggle
    Zoom + pan on large date ranges

  Chart 2: Engagement Rate (bar chart)
    Per platform + week-over-week
    Benchmark line: industry average (dashed)

  Chart 3: Content Performance by Type
    Grouped bars: Photo / Video / Reel / Story / Carousel
    Metrics: reach, engagement, saves

  Chart 4: Best Posting Times Heatmap
    7x24 grid (days × hours)
    Green gradient: darker = higher engagement
    Peak times highlighted

  Chart 5: Top Posts Gallery
    3-column grid of best 9 posts
    Sorted by engagement rate
    Each: platform icon, metrics, date
    [Repurpose] [Boost] per post

  Chart 6: Audience Demographics
    Age distribution bar chart
    Gender split pie
    Top cities map (world heatmap)
    Device type pie (mobile vs desktop)

  Chart 7: Revenue Attribution
    Which platforms/posts drove sales
    First touch vs last touch attribution
    Campaign performance comparison

CUSTOM DASHBOARD:
  [+ Add Widget] → pick from 20+ widget types
  Drag to rearrange
  [Save Layout] [Share Dashboard Link] [Set as Default]
```

### 17.2 — Report Builder

```
PREBUILT REPORTS:
  [Executive Summary] [Social Performance] [Campaign Results] [SEO Report]
  [Email Marketing] [Competitor Analysis] [Content Audit] [ROI Analysis]
  
  Each: one-click generate, preview, download

CUSTOM REPORT BUILDER:
  Report name + description
  
  Metric picker (drag-drop or checkbox list):
    Social: Followers, Reach, Impressions, Engagement Rate, Saves, Profile Visits
    Content: Posts Published, Best Performer, Content Type Mix
    Email: Open Rate, Click Rate, Revenue, Unsubscribes
    SEO: Rankings, Organic Traffic, Backlinks, Site Score
    CRM: Leads, Conversions, Pipeline Value, Revenue
    Campaigns: ROAS, CPA, Budget Utilization, A/B Test Results
  
  Date range, accounts to include
  Comparison period: ☑ Show vs previous period
  
  Layout options:
    Charts only / Data tables / Mixed / Executive summary style
  
  Branding:
    ☑ Include company logo
    ☑ Custom brand colors
    ☑ Include agency/author info
    ☑ White-label (remove NexusForge branding)
  
  Export formats:
    [📄 PDF] [📊 Excel/CSV] [📑 PowerPoint] [🌐 HTML (interactive)]
    [📧 Email report] → send directly to client or stakeholder emails
  
  Scheduling:
    ○ Generate now
    ○ Weekly: every Monday 9 AM
    ○ Monthly: 1st of each month
    Recipients: email field (multiple)
  
  [Preview Report] → full report shown inline
  [Generate & Download] [Save as Template]
```

---

## ═══════════════════════════════════════════════════════
## PHASE 18: PRODUCTS, VISITORS & ESCALATIONS
## ═══════════════════════════════════════════════════════

### 18.1 — Product Catalog & E-Commerce

```
PRODUCT LIST (TanStack Table + Grid toggle):
  Image | Name | SKU | Category | Price | Stock | Status | Sales | Actions

ADD/EDIT PRODUCT MODAL:
  Basic: Name, SKU, description (rich text), category, tags
  Media: multiple image upload, reorder, set primary
  Pricing: regular price, sale price, cost (for margin calc)
  Inventory: stock count, low stock alert threshold, backorder setting
  Shipping: weight, dimensions, free shipping toggle
  SEO: meta title, meta description, focus keyword
  Social: [Promote to Instagram] [Schedule Product Post] buttons

PRODUCT ANALYTICS:
  Per product: views, add-to-carts, purchases, revenue, conversion rate
  Top products chart: bar chart by revenue
  Inventory alerts: [⚠ Low Stock: 3 units remaining]

SOCIAL PROMOTION:
  Click [Promote Product] → opens social post composer
  Product image auto-loaded, product details pre-filled in caption
  [Create Instagram Shopping post] [Pin to Pinterest] [LinkedIn showcase]

CSV IMPORT: bulk upload product catalog
EXPORT: download current catalog as CSV/Excel
```

### 18.2 — Visitor Analytics

```
LIVE COUNTER: "247 visitors online right now" with pulsing dot
Updates every 30 seconds

REAL-TIME MAP: World map with visitor location dots

TRAFFIC OVERVIEW (charts):
  Sessions, page views, unique visitors — time series chart
  Bounce rate, avg session duration, pages per session

TRAFFIC SOURCES PIE:
  Organic Search / Direct / Social Media / Email / Referral / Paid
  Click segment → drills down to source details

SOCIAL TRAFFIC BREAKDOWN:
  Instagram: 1,247 sessions | Facebook: 892 | LinkedIn: 234
  [View which posts drove traffic] → links to post analytics

TOP PAGES TABLE:
  Page URL | Views | Avg Time | Bounce Rate | Conversions
  [View page] [Optimize SEO] [Create content for] per row

USER DEMOGRAPHICS:
  Country / City breakdown table
  Age group estimates
  Device type: Mobile 67% / Desktop 28% / Tablet 5%

SOCIAL PROFILE LINKING:
  Match visitor behavior to social profiles (where possible)
  "23 visitors came from @username's story mention"
```

### 18.3 — Escalations & Support Tickets

```
TICKET BOARD (Kanban):
  OPEN (12) | IN PROGRESS (5) | PENDING (3) | RESOLVED (89) | CLOSED (234)

TICKET CARD:
  #1042 | Subject: "Automation blocked on @account3"
  Priority: 🔴 High | Assignee: [Avatar] Sarah | SLA: 2h 14m remaining
  Created: 2h ago | Last update: 45m ago
  Quick actions: [Take Ticket] [Escalate] [Resolve]

TICKET DETAIL PAGE:
  Header: ticket number, subject, status badge, priority, SLA timer
  
  Left column:
    Description (full text)
    Comment thread (most recent at bottom)
    [Add comment] (rich text + file attach)
    Activity log: status changes, assignments, etc.
  
  Right column:
    Assigned to (change assignee)
    Priority: [Critical / High / Medium / Low]
    Category: [Account Issue / Automation / Billing / Bug / Feature Request]
    SLA deadline countdown
    Created by / date
    Related: [Link to related account / automation / campaign]
    [Resolve] [Close] [Escalate] [Duplicate] [Delete]

CREATE TICKET:
  Subject, description, priority, category, assignee
  Attach files (screenshots, logs)
  Auto-created tickets: when system detects critical issues (proxy failure, account block, etc.)

SLA SETTINGS:
  Per priority: Critical = 1h, High = 4h, Medium = 24h, Low = 72h
  Breach alerts: notify assignee + manager
  Reports: SLA compliance rate per month
```

---

## ═══════════════════════════════════════════════════════
## PHASE 19: PROXY & IP MANAGEMENT
## ═══════════════════════════════════════════════════════

```
PROXY LIST (TanStack Table):
  Status | IP:Port | Type | Location | Speed | Assigned Account | Last Tested | Actions

PROXY TYPES:
  🏠 Residential — Highest trust, real ISP IPs, best for IG
  📱 Mobile 4G/5G — Second best, carrier IPs
  🏢 Datacenter — Fastest, cheapest, higher detection risk
  📡 ISP Static — Hybrid (datacenter IP with ISP registration)

ADD PROXY MODAL:
  IP:Port input
  Authentication: [User:Pass] or [No Auth]
  Type selector
  Country/City targeting
  [Test Connection] → shows: latency, anonymity level, geo location, platform detection test
  Assign to account: optional

PROXY HEALTH MONITOR:
  Auto-test all proxies every 30 minutes
  Status: Online ✓ / Slow ⚠ / Offline ✗ / Blocked 🔴
  Color-coded status dots

ROTATION SETTINGS:
  Auto-rotate: every [30] minutes per account
  Failover: if proxy goes down → auto-switch to backup in [30] seconds
  Sticky sessions: keep same IP for [10] minutes per session
  Never reuse same IP for same account within [6] hours

ACCOUNT-PROXY BINDING:
  In account edit: [Assign Proxy ▼]
  One proxy per account (prevent IP mixing)
  [Swap Proxy] [Test Proxy on this Account]

BULK IMPORT:
  [Import Proxy List] → paste list (one per line) → validate all → import

USAGE STATS PER PROXY:
  Daily requests, data used, accounts assigned, success rate
```

---

## ═══════════════════════════════════════════════════════
## PHASE 20: SETTINGS & CONFIGURATION
## ═══════════════════════════════════════════════════════

```
SETTINGS TABS:

  PROFILE:
    Name, email, profile picture
    Timezone, language, date format
    [Save Changes]

  WORKSPACE:
    Workspace name, logo, custom domain
    Industry, timezone
    Default currency
    [Configure Workspace]

  NOTIFICATIONS:
    Email notifications: ☑ Weekly summary / ☑ Alert: account blocked / etc.
    Push notifications: browser push opt-in
    In-app notifications: all types with toggle
    Slack integration: webhook URL → pipe alerts to Slack channel

  API & INTEGRATIONS:
    API Keys: [Generate Key] [Revoke] — for developers
    Zapier webhook: URL + test trigger
    Webhooks: [+ Add Webhook] → URL + events to trigger on
    Third-party integrations:
      [Connect Shopify] [Connect WooCommerce] [Connect HubSpot]
      [Connect Salesforce] [Connect Slack] [Connect Notion] [Connect Airtable]

  SECURITY:
    Change password
    2FA setup/manage
    Active sessions list + terminate
    IP whitelist (for team, lock admin to specific IPs)
    Security audit log (last 90 days of security events)
    [Download Account Data] (GDPR data portability)
    [Delete Account] (with confirmation)

  THEME:
    Dark mode / Light mode / System default
    Accent color: 6 preset options
    Compact density: Standard / Compact / Comfortable
    Preview of current theme

  BRAND:
    Upload logo
    Brand colors (used in reports + client portal)
    Company details (for reports header/footer)
    Default email signature

  KEYBOARD SHORTCUTS:
    Full reference card
    All shortcuts listed (Ctrl+K for search, etc.)
    [Print Shortcut Card]
```

---

## ═══════════════════════════════════════════════════════
## PHASE 21: BILLING & SUBSCRIPTION
## ═══════════════════════════════════════════════════════

```
PLAN COMPARISON TABLE:
┌─────────────────┬──────────┬──────────┬──────────────┬─────────────────┐
│ Feature         │ Starter  │ Pro      │ Agency       │ Enterprise      │
├─────────────────┼──────────┼──────────┼──────────────┼─────────────────┤
│ Price           │ $29/mo   │ $79/mo   │ $199/mo      │ Custom          │
│ Social Accounts │ 3        │ 10       │ Unlimited     │ Unlimited       │
│ Auto Actions/mo │ 1,000    │ 5,000    │ 25,000        │ Unlimited       │
│ Team Members    │ 1        │ 5        │ 20            │ Unlimited       │
│ Client Workspaces│ -       │ 3        │ Unlimited     │ Unlimited       │
│ Blog/CMS        │ Basic    │ Full     │ Full          │ Custom          │
│ AI Models       │ 3 models │ 10 models│ All models    │ Priority access │
│ Email Marketing │ -        │ 5K subs  │ 50K subs      │ Unlimited       │
│ CRM & Pipeline  │ Basic    │ Full     │ Full          │ Full + Custom   │
│ Influencer Mgmt │ -        │ -        │ ✓             │ ✓               │
│ White-Label     │ -        │ -        │ ✓             │ ✓               │
│ Custom Domain   │ -        │ -        │ ✓             │ ✓               │
│ API Access      │ -        │ ✓        │ ✓             │ ✓ + Priority    │
│ Daily AI Posts  │ 1 site   │ 5 sites  │ Unlimited      │ Unlimited       │
│ Report Export   │ PDF only │ All formats│ All formats  │ Custom branded  │
│ Support         │ Email    │ Priority │ 24/7 Chat     │ Dedicated CSM   │
│ Onboarding      │ Self-serve│ Webinar │ 1:1 Session   │ Full onboarding │
│ SLA             │ -        │ 99.5%    │ 99.9%         │ 99.99%          │
└─────────────────┴──────────┴──────────┴──────────────┴─────────────────┘

CURRENT PLAN SECTION:
  Large plan card with usage bars
  Actions used: [████████░░] 3,245/5,000 (65%)
  Storage used: [████░░░░░░] 4.2/10 GB (42%)
  Team seats: [███░░] 3/5 used
  
  [Upgrade Plan] [Downgrade] [Cancel Subscription]
  Cancellation: shows retention offer before confirming

PAYMENT:
  Card on file with brand logo
  [Update Card] → Stripe elements iframe
  [Add Backup Payment Method]
  Billing address (for invoice)

BILLING HISTORY:
  Invoice table: date, description, amount, status, [Download PDF]
  Auto-invoice generation
  Annual vs monthly toggle (annual = 2 months free)

ADD-ONS (optional):
  Extra AI tokens: $20/mo = 500K tokens
  Extra storage: $10/mo = 10 GB
  Extra social accounts: $5/mo each
  Dedicated IP pool: $50/mo
  White-glove onboarding: one-time $299
  [Add to Plan ▼]
```

---

## ═══════════════════════════════════════════════════════
## IMPLEMENTATION REQUIREMENTS (HARD REQUIREMENTS)
## ═══════════════════════════════════════════════════════

### Data Persistence (localStorage Keys)
```javascript
nexusforge_auth          // Current user session + role
nexusforge_accounts      // All social media accounts + credentials
nexusforge_automations   // Automation configs per account
nexusforge_posts         // All posts (draft/scheduled/published)
nexusforge_calendar      // Calendar event positions
nexusforge_blog_posts    // All blog posts
nexusforge_contacts      // CRM contacts
nexusforge_deals         // Sales pipeline deals
nexusforge_campaigns     // Marketing campaigns
nexusforge_competitors   // Tracked competitors
nexusforge_keywords      // Saved keyword lists
nexusforge_proxies       // Proxy list
nexusforge_activity_log  // Full activity history
nexusforge_notifications // Notification queue
nexusforge_settings      // User preferences + theme
nexusforge_media_library // Media file metadata
nexusforge_templates     // Email + post templates
nexusforge_workflows     // Automation rules + flows
nexusforge_reports       // Saved report configs
nexusforge_segments      // Email audience segments
nexusforge_influencers   // Influencer database + campaigns
nexusforge_workspaces    // Multi-client workspaces (admin)
nexusforge_feature_flags // Feature toggles (admin)
nexusforge_daily_posts   // Daily generation history (duplicate check)
```

### Mock Data Seeds (load on first visit)
```
- 7 demo social media accounts (mix of platforms)
- 50 demo blog posts with realistic SEO scores
- 30 days of historical analytics data
- 5 active automation configs
- 20 demo CRM contacts with full profiles
- 8 active campaigns with spending data
- 12 competitors tracked
- 100 keywords in various lists
- 10 proxies with different statuses
- 234 activity log entries (30 days)
- 15 scheduled posts in calendar
- 3 active email campaigns with stats
- 5 email automation flows
- Complete SWOT analysis for one competitor
- 50 media files in gallery with folders
- 10 email templates
- 8 automation rules
- 20 influencer profiles
```

### Real-Time Features (simulated with setInterval)
```javascript
// Activity stream: new entry every 8-15 seconds when automations running
// Dashboard stats: refresh every 60 seconds
// Notification bell: new notification every 3-5 minutes
// Live visitor counter: changes every 30 seconds
// Agent AI decisions: new decision every 15-30 seconds when agent active
// Automation queue: updates every 10 seconds during automation run
// Proxy health: re-checks every 5 minutes
// Email send progress: updates every 2 seconds during campaign send
```

### Toast Notification Standards
```javascript
// Success: green, 3 seconds, with action button where relevant
// Error: red, 5 seconds, with retry button
// Warning: yellow, 4 seconds, with resolve button
// Info: blue, 3 seconds
// Loading: persistent until resolved
// All toasts dismissible by click/X
```

### Loading State Requirements
```
EVERY async action MUST have:
  1. Button: loading spinner + disabled state while processing
  2. Content area: skeleton shimmer cards matching expected content shape
  3. Table: skeleton rows (3-5) while loading
  4. Chart: skeleton bars/lines while loading
  5. AI generation: streaming text output (not all-at-once)
  6. File upload: progress bar (0→100%)
  7. Audit: step-by-step progress with current step highlighted
```

### Form Validation Standards
```
All forms use React Hook Form + Zod
Real-time validation on field blur
Error messages below field (red, descriptive)
Success checkmark on valid fields
Submit button disabled until all required fields valid
Character counters on text fields with limits
URL fields: validate format + optionally test if reachable
Email fields: validate format + suggest domain corrections
Phone fields: format mask + country code selector
```

---

## ═══════════════════════════════════════════════════════
## DELIVERABLES CHECKLIST
## ═══════════════════════════════════════════════════════

```
PROJECT SETUP:
  ☐ next.config.ts with all necessary settings
  ☐ tailwind.config.ts with custom design tokens
  ☐ package.json with all dependencies + correct versions
  ☐ TypeScript strict mode configuration
  ☐ shadcn/ui properly initialized + all needed components
  ☐ README.md with clear setup instructions (npm install && npm run dev)

GLOBAL:
  ☐ Login page (split layout, 3 tabs, mock OAuth, 2FA)
  ☐ Sidebar navigation (all items, collapsible, active states, role-gated)
  ☐ Top navbar (search, notifications, theme toggle, user menu)
  ☐ Right activity stream (non-overlapping, real-time simulation)
  ☐ Global model selector component (all models listed)
  ☐ Dark/light theme toggle with localStorage persistence
  ☐ Global keyboard shortcuts (Ctrl+K search, etc.)
  ☐ Mobile responsive (works on 375px+)

ALL 20+ VIEWS:
  ☐ Dashboard Overview
  ☐ Account Management + Onboarding Wizard
  ☐ Automation Engine (all 7 action types + Agentic AI)
  ☐ Targeting & Scraping (all scraper types)
  ☐ Content Scheduler (calendar + composer)
  ☐ Blog/CMS (editor + SEO + Daily 2 Posts feature)
  ☐ Social Hub (platform connections + analytics)
  ☐ Email Marketing (builder + flows + segments)
  ☐ CRM & Sales Pipeline (contacts + kanban + lead scoring)
  ☐ Campaigns (lifecycle + A/B + ROI)
  ☐ Competitor Intelligence (SWOT + map + scraper)
  ☐ SEO/AEO/GEO Tools (keyword + audit + content optimizer)
  ☐ Influencer Network (discovery + campaign management)
  ☐ Agency/Client Management (workspaces + white-label + portal)
  ☐ AI Studio (all generation types + workflow builder)
  ☐ Analytics & Reports (charts + report builder)
  ☐ Products & Catalog
  ☐ Visitors & Traffic
  ☐ Escalations & Tickets
  ☐ Proxy Management
  ☐ Billing & Subscription
  ☐ Team & Permissions
  ☐ Settings (all tabs)
  ☐ Admin Panel (feature flags + websites + user management)

POST-BUILD:
  ☐ worklog.md (full changelog, feature list, known limitations)
  ☐ All mock data seeds realistic and comprehensive
  ☐ Zero dead buttons (every button does something)
  ☐ Zero "coming soon" placeholders
  ☐ Zero text overflow without tooltip
  ☐ Zero z-index conflicts (activity stream never overlaps content)
  ☐ All forms validate properly
  ☐ All data persists in localStorage
  ☐ All AI calls have realistic simulation with streaming
  ☐ Confetti on major success events (first post published, campaign launched)
```

---

## ═══════════════════════════════════════════════════════
## KEY DEMO FLOWS TO TEST
## ═══════════════════════════════════════════════════════

```
FLOW 1: New User Journey
  Login as demo → Dashboard → Add Instagram account (wizard) →
  Configure Auto Follow → Start Automation → Watch activity stream fill →
  Check follower growth chart updated

FLOW 2: Content Creation Pipeline
  Blog → Generate Today's 2 Posts → Select AI model → Research phase →
  Review outlines → Full generation → Edit post 1 → Schedule to Jun 10 →
  Cross-post to Social → Calendar shows post → Social Hub shows scheduled

FLOW 3: Lead Generation Cycle
  Social Hub → Instagram connected → New follower auto-creates CRM contact →
  Contact appears in CRM → Lead score increases as they engage →
  Email campaign sent → Lead score hits 75 → Pipeline deal created →
  Sales rep notified → Demo booked → Deal moved to "Won"

FLOW 4: Agency Client Management (Admin Login)
  Login as admin → Agency view → Create new client workspace →
  Configure feature flags → Enable Daily Posts for client site →
  Switch to client view → Client dashboard shown → Exit impersonation →
  Trigger Daily Posts for all sites → Watch activity log

FLOW 5: Full SEO Audit
  SEO Tools → Site Audit → Enter URL → Run audit →
  See score + issues → Click "Auto-Fix" on meta descriptions →
  Score improves → Content Optimizer → Paste article → AEO mode →
  Apply optimizations → Score jumps → Export PDF report

FLOW 6: Campaign Full Lifecycle
  Campaigns → Create → Budget wizard → Set KPIs → Launch →
  Watch metrics update → A/B test setup → Results → Declare winner →
  ROI Calculator → See ROAS + ROI → Export report → Share with client

FLOW 7: Agentic AI Mode
  Automation → Agentic AI tab → Enable Agent →
  Watch AI decision feed in real-time → Comment detected →
  AI scores comment → Generates contextual reply →
  Shows in approval queue → Approve → Posted to activity stream →
  Human review queue for low-confidence actions
```

---

## ═══════════════════════════════════════════════════════
## ESTIMATED BUILD COMPLEXITY
## ═══════════════════════════════════════════════════════

```
Total Estimated Development Time:   8-14 months (team of 5-10)
Solo Developer Estimate:            18-24 months
AI-Assisted Development:            4-8 months (with Claude/Copilot assistance)

Team Recommended:
  Frontend Lead (Next.js + TypeScript):    2 developers
  Backend Lead (Node.js + DB):             2 developers
  AI/ML Integration:                       1 developer
  UI/UX Designer:                          1 designer
  DevOps/Infrastructure:                   1 engineer
  QA:                                      1 tester
  Product Manager:                         1 PM (you, as Director)

This prompt + spec is your complete product requirements document (PRD).
Every screen, every button, every interaction is defined.
Hand this to your development team and they have everything they need.

Total Features Defined:   200+
Total Views:              25+
AI Models Integrated:     25+
Social Platforms:         8+
Third-Party Services:     20+
```

---

*NexusForge AI — Built for Directors who manage 100+ projects and need one platform to rule them all.*
*Last Updated: June 2026 | Version 4.0 — Director Edition*
