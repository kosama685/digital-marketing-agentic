# AutoPilot Agency OS

**Complete SaaS/Agency Automation Platform with Human-in-the-Loop Approval System**

A production-ready automation platform that scrapes competitors, analyzes trends, generates keywords, creates country-wise social schedules, syncs with ERPs, and runs outbound campaigns - all requiring human approval before execution.

## 🚀 Core Features

- **Multi-AI Router**: Dynamic routing between Gemini, Grok, Claude, OpenAI, and Z.AI based on task type and cost
- **RPA Engine**: Playwright scraping, Selenium ERP fallback, UI.Vision macro generation
- **Trend Analysis**: Competitor scanning, keyword generation, 30-day content calendars
- **Omnichannel Execution**: Buffer, HubSpot, Apollo, Manychat integrations with Zapier fallback
- **Daily Approval Dashboard**: Human-in-the-Loop HITL system with Approve/Deny/Edit/Pause/Emergency Stop

## 📁 Project Structure

```
autopilot-agency-os/
├── backend/
│   ├── ai_router/
│   │   └── ai_router.py              # Multi-AI provider router
│   ├── rpa_engine/
│   │   ├── playwright_scraper.ts     # Web scraper with proxy rotation
│   │   ├── selenium_erp_runner.py    # ERP browser automation fallback
│   │   └── uivision_json_generator.ts # UI.Vision macro generator
│   ├── trend_engine/                 # Trend analysis (to be implemented)
│   └── integrations/                 # API wrappers (to be implemented)
├── frontend/
│   └── app/
│       └── approvals/
│           └── page.tsx              # Daily Approval Dashboard
├── prisma/
│   └── schema.prisma                 # Database schema
├── shared/
│   └── zapier_webhook_payloads.md    # Webhook documentation
└── README.md                         # This file
```

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14, React, TailwindCSS, Shadcn/UI |
| Backend | FastAPI (Python) / Node.js |
| Database | PostgreSQL with Prisma ORM |
| Queue | Redis + BullMQ / Celery |
| Browser Automation | Playwright, Selenium, UI.Vision |
| AI Providers | Gemini, Grok (xAI), Claude, OpenAI, Z.AI |
| Integrations | Zapier, Direct APIs (HubSpot, Apollo, Buffer, Manychat) |

## 🔧 Installation

### Prerequisites

- Node.js 18+ and npm
- Python 3.9+
- PostgreSQL 14+
- Redis 6+
- Chrome/Chromium for Playwright

### 1. Clone and Install Dependencies

```bash
cd autopilot-agency-os

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
pip install -r requirements.txt

# Install Playwright browsers
npx playwright install
```

### 2. Database Setup

```bash
# Set up PostgreSQL database
createdb autopilot_agency

# Run Prisma migrations
npx prisma migrate dev --schema=./prisma/schema.prisma
```

### 3. Environment Variables

Create `.env` files:

**Backend `.env`:**
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/autopilot_agency"

# Redis
REDIS_URL="redis://localhost:6379"

# AI Provider Keys
GEMINI_API_KEY="your-gemini-key"
XAI_API_KEY="your-grok-key"
ANTHROPIC_API_KEY="your-claude-key"
OPENAI_API_KEY="your-openai-key"
ZAI_API_KEY="your-zai-key"

# Proxy Configuration (optional)
PROXY_SERVER_1="host:port:username:password"
PROXY_SERVER_2="host:port:username:password"

# ERP Credentials (for Selenium fallback)
ERP_USERNAME="admin"
ERP_PASSWORD="password"
```

**Frontend `.env.local`:**
```env
NEXT_PUBLIC_API_URL="http://localhost:8000"
NEXT_PUBLIC_ZAPIER_WEBHOOK_URL="https://hooks.zapier.com/hooks/catch/YOUR_ID/"
```

## 📖 Usage

### 1. Start the Backend

```bash
cd backend
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### 2. Start the Frontend

```bash
cd frontend
npm run dev
```

### 3. Access the Dashboard

Open `http://localhost:3000/approvals` in your browser.

## 🔌 Core Modules

### Multi-AI Router (`backend/ai_router/ai_router.py`)

Dynamically routes prompts to the best AI provider:

```python
from ai_router import MultiAIRouter, TaskType

router = MultiAIRouter()

# Data analysis (routes to Gemini)
response = await router.analyze_data({
    "competitors": ["Company A", "Company B"],
    "keywords": ["dental implants", "teeth whitening"]
})

# Copywriting (routes to Claude)
response = await router.generate_copy(
    "Promote dental services in Dubai",
    tone="professional"
)

# Social trends (routes to Grok)
response = await router.analyze_trends(social_data)
```

### Playwright Scraper (`backend/rpa_engine/playwright_scraper.ts`)

Scrapes Google Trends, competitors, and social feeds:

```typescript
import { createScraper } from './playwright_scraper';

const scraper = createScraper([
  { host: 'proxy1.com', port: 8080, username: 'user', password: 'pass' }
]);

const results = await scraper.scrape({
  query: 'dental clinic',
  locations: ['Dubai', 'London'],
  proxyRotation: true
});

scraper.saveResults(results, './scraping_results.json');
```

### Selenium ERP Runner (`backend/rpa_engine/selenium_erp_runner.py`)

Fallback for legacy ERP systems when APIs are unavailable:

```python
from selenium_erp_runner import SeleniumERPRunner, ERPConfig, ERPType

config = ERPConfig(
    erp_type=ERPType.ODOO,
    base_url="https://your-odoo.com/web/login",
    username="admin",
    password="password"
)

with SeleniumERPRunner(config) as runner:
    if runner.login():
        inventory = runner.extract_inventory_data()
        invoices = runner.extract_invoice_data()
```

### UI.Vision Macro Generator (`backend/rpa_engine/uivision_json_generator.ts`)

Generates browser automation macros:

```typescript
import { createMacroGenerator } from './uivision_json_generator';

const generator = createMacroGenerator('./macros');

// Generate HubSpot lead creation macro
const macro = generator.generateHubSpotLeadMacro(
  'https://app.hubspot.com/contacts',
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    company: 'Acme Corp'
  }
);

generator.saveMacro(macro, 'hubspot_lead_creation.json');
```

### Daily Approval Dashboard (`frontend/app/approvals/page.tsx`)

React component with full HITL functionality:

- **Approve All**: Execute all pending tasks
- **Approve Specific**: Individual task approval
- **Edit**: Modify task before approval
- **Pause**: Temporarily halt queue
- **Emergency Stop**: Immediate halt of all operations

## 🔄 Workflow Examples

### Workflow A: Competitor Scraping → Keyword Generation → Approval

1. User inputs: Company "ABC Dental" + Locations ["Dubai", "London"]
2. Playwright scrapes top 5 competitors in each location
3. AI Router (Gemini) clusters data for keyword gaps
4. AI Router (Claude) generates 30 localized posts + 50 keywords
5. Data saved to PostgreSQL
6. ApprovalTask created → Slack notification sent
7. User reviews at `/approvals` dashboard
8. User clicks "Approve Strategy" → Zapier webhook triggers execution

### Workflow B: Social Scheduling with Timezone Awareness

1. User approves strategy from Workflow A
2. System converts post times to local timezones:
   - Dubai: 9:00 AM GST
   - London: 9:00 AM GMT
3. Buffer API schedules posts (or Playwright fallback)
4. Manychat DM flow generated: "If user comments 'SMILE', send booking link"
5. Audit log updated via Zapier

### Workflow C: Lead Enrichment → ERP Sync (API + Browser Fallback)

1. New lead captured via Manychat DM
2. Apollo API enriches lead with company data
3. HubSpot API creates contact
4. **If HubSpot API fails**: Selenium logs into web UI and manually inputs data
5. Daily summary sent: "15 new leads enriched and added to ERP"

## 🎯 Feature Checklist

### Onboarding
- [x] Add Company
- [x] Add Multiple Locations
- [ ] Detect Industry (AI-powered)
- [ ] Connect ERP

### Research
- [x] Run Competitor Scan (Playwright)
- [x] Run Trend Scan (Google Trends)
- [x] Generate Keywords (AI Router)
- [ ] Export Report

### AI Strategy
- [x] Generate 30-Day Plan
- [x] Regenerate with AI
- [x] Edit Tone
- [x] Approve (HITL)

### Social
- [x] Generate Posts
- [x] Preview
- [x] Localize Language
- [x] Schedule by Timezone
- [x] Approve
- [x] Pause Queue

### Leads/ERP
- [x] Find Leads
- [x] Enrich (Apollo integration)
- [x] Sync to ERP
- [ ] Create Invoice/Deal
- [x] Approve Outreach

### RPA/Browser
- [x] Generate UI.Vision JSON
- [x] Run Playwright Script
- [x] Run Selenium Fallback

### Dashboard
- [x] Approve All
- [x] Deny
- [x] Edit
- [x] Pause
- [x] Emergency Stop
- [x] View Audit Log

## 📡 Zapier Webhook Integration

See `shared/zapier_webhook_payloads.md` for complete webhook documentation.

### Example: Approve Task Webhook

```json
POST https://hooks.zapier.com/hooks/catch/{zap_id}/approve-task

{
  "action": "approve",
  "taskId": "task-uuid",
  "taskType": "Social",
  "payload": {
    "posts": 15,
    "platforms": ["instagram", "facebook"]
  },
  "approvedAt": "2024-01-15T08:30:00.000Z"
}
```

## 🔒 Security

- HMAC signature verification for webhooks
- API key encryption at rest
- Rate limiting (100 req/min standard, unlimited for emergency stop)
- Role-based access control (RBAC)
- Audit logging for all actions

## 📊 Monitoring

Key metrics to track:
- Tasks pending/approved/denied
- Average approval time
- API success/failure rates
- Scraping success rates
- Cost per AI provider
- Execution duration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For issues and questions:
- GitHub Issues: https://github.com/autopilot-agency/os/issues
- Documentation: https://docs.autopilot-agency.com
- Email: support@autopilot-agency.com

---

**Built with ❤️ by the AutoPilot Agency Team**

*Zero-touch automation with human oversight.*
