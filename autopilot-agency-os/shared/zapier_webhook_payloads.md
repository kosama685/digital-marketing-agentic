# Zapier Webhook Bus - Payload Structure Documentation

## Overview
The Zapier Webhook Bus serves as the central integration layer for AutoPilot Agency OS.
It handles approval triggers, execution commands, and status updates between the dashboard
and external services (Buffer, HubSpot, Apollo, Manychat, etc.).

## Base URL Pattern
```
https://hooks.zapier.com/hooks/catch/{ZAP_ID}/{WEBHOOK_NAME}/
```

---

## 1. Approval Webhooks

### 1.1 Approve Single Task
**Endpoint:** `POST /hooks/catch/{zap_id}/approve-task`

**Payload:**
```json
{
  "action": "approve",
  "taskId": "task-uuid-here",
  "taskType": "Strategy|Social|Leads|ERP_Sync|Campaign",
  "companyId": "comp-uuid-here",
  "payload": {
    "locations": ["Dubai", "London"],
    "keywords": 50,
    "posts": 30
  },
  "approvedAt": "2024-01-15T08:30:00.000Z",
  "approvedBy": "user@example.com",
  "webhookCallback": "https://api.autopilot-agency.com/api/v1/approvals/callback"
}
```

**Response Expected:**
```json
{
  "success": true,
  "executionId": "exec-uuid-here",
  "estimatedCompletionTime": "2024-01-15T09:00:00.000Z",
  "message": "Task approved and queued for execution"
}
```

---

### 1.2 Approve All Tasks
**Endpoint:** `POST /hooks/catch/{zap_id}/approve-all`

**Payload:**
```json
{
  "action": "approve_all",
  "companyId": "comp-uuid-here",
  "taskCount": 5,
  "tasks": [
    {
      "taskId": "task-1",
      "taskType": "Strategy",
      "payload": {}
    },
    {
      "taskId": "task-2",
      "taskType": "Social",
      "payload": {}
    }
  ],
  "approvedAt": "2024-01-15T08:30:00.000Z",
  "approvedBy": "user@example.com"
}
```

---

### 1.3 Deny Task
**Endpoint:** `POST /hooks/catch/{zap_id}/deny-task`

**Payload:**
```json
{
  "action": "deny",
  "taskId": "task-uuid-here",
  "companyId": "comp-uuid-here",
  "reason": "Budget constraints - postpone to next month",
  "deniedAt": "2024-01-15T08:30:00.000Z",
  "deniedBy": "user@example.com"
}
```

---

### 1.4 Pause Queue
**Endpoint:** `POST /hooks/catch/{zap_id}/pause-queue`

**Payload:**
```json
{
  "action": "pause",
  "companyId": "comp-uuid-here",
  "pauseReason": "Reviewing strategy adjustments",
  "pausedAt": "2024-01-15T10:00:00.000Z",
  "pausedBy": "user@example.com",
  "affectedTasks": ["task-1", "task-2", "task-3"]
}
```

---

### 1.5 Emergency Stop
**Endpoint:** `POST /hooks/catch/{zap_id}/emergency-stop`

**Payload:**
```json
{
  "action": "emergency_stop",
  "companyId": "comp-uuid-here",
  "reason": "Critical issue detected - immediate halt required",
  "stoppedAt": "2024-01-15T10:00:00.000Z",
  "stoppedBy": "user@example.com",
  "notifyChannels": ["slack", "email", "sms"],
  "escalationLevel": "critical"
}
```

**Response Expected:**
```json
{
  "success": true,
  "stoppedExecutions": 12,
  "notificationsSent": ["slack", "email", "sms"],
  "message": "EMERGENCY STOP executed - All operations halted"
}
```

---

## 2. Execution Webhooks

### 2.1 Social Media Scheduling (Buffer)
**Endpoint:** `POST /hooks/catch/{zap_id}/schedule-social`

**Payload:**
```json
{
  "action": "schedule_social",
  "companyId": "comp-uuid-here",
  "platform": "buffer",
  "posts": [
    {
      "content": "Transform your smile with our premium dental implants! 🦷✨",
      "platforms": ["instagram", "facebook", "linkedin"],
      "scheduledTime": "2024-01-16T09:00:00+04:00",
      "timezone": "Asia/Dubai",
      "location": "Dubai",
      "media": [
        {
          "type": "image",
          "url": "https://cdn.autopilot-agency.com/media/dental-implants-1.jpg"
        }
      ],
      "hashtags": ["#DubaiDental", "#SmileMakeover", "#DentalImplants"]
    }
  ],
  "approvalTaskId": "task-uuid-here"
}
```

**Response Expected:**
```json
{
  "success": true,
  "scheduledPosts": [
    {
      "postId": "buffer-post-id",
      "platform": "instagram",
      "scheduledTime": "2024-01-16T09:00:00+04:00",
      "status": "scheduled"
    }
  ]
}
```

---

### 2.2 CRM Sync (HubSpot)
**Endpoint:** `POST /hooks/catch/{zap_id}/sync-crm`

**Payload:**
```json
{
  "action": "sync_crm",
  "companyId": "comp-uuid-here",
  "crm": "hubspot",
  "contacts": [
    {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "phone": "+1234567890",
      "company": "Acme Corp",
      "properties": {
        "lifecyclestage": "lead",
        "lead_source": "Instagram DM Automation",
        "enriched_data": {
          "company_size": "50-200",
          "revenue": "$5M-$10M",
          "industry": "Technology"
        }
      }
    }
  ],
  "pipelineUpdate": {
    "pipelineId": "pipeline-uuid",
    "dealStage": "qualification",
    "dealAmount": 5000
  },
  "approvalTaskId": "task-uuid-here"
}
```

---

### 2.3 Lead Enrichment (Apollo)
**Endpoint:** `POST /hooks/catch/{zap_id}/enrich-leads`

**Payload:**
```json
{
  "action": "enrich_leads",
  "companyId": "comp-uuid-here",
  "source": "apollo",
  "leads": [
    {
      "id": "lead-uuid",
      "email": "prospect@company.com",
      "enrichmentFields": ["company_size", "revenue", "industry", "technologies"]
    }
  ],
  "approvalTaskId": "task-uuid-here"
}
```

---

### 2.4 DM Automation Flow (Manychat)
**Endpoint:** `POST /hooks/catch/{zap_id}/manychat-flow`

**Payload:**
```json
{
  "action": "create_dm_flow",
  "companyId": "comp-uuid-here",
  "platform": "instagram",
  "flow": {
    "name": "Dental Consultation Booking",
    "trigger": {
      "type": "keyword",
      "keyword": "SMILE",
      "matchType": "contains"
    },
    "actions": [
      {
        "type": "send_message",
        "message": "Hi! 👋 Ready to transform your smile? Book your free consultation now!"
      },
      {
        "type": "send_button",
        "text": "Choose an option:",
        "buttons": [
          {
            "type": "web_url",
            "title": "Book Now",
            "url": "https://booking.example.com/dental"
          },
          {
            "type": "postback",
            "title": "Learn More",
            "payload": "LEARN_MORE"
          }
        ]
      }
    ]
  },
  "approvalTaskId": "task-uuid-here"
}
```

---

### 2.5 Email Campaign (ActiveCampaign/HubSpot)
**Endpoint:** `POST /hooks/catch/{zap_id}/email-campaign`

**Payload:**
```json
{
  "action": "email_campaign",
  "companyId": "comp-uuid-here",
  "campaign": {
    "name": "Q1 Enterprise Outreach",
    "sequence": [
      {
        "day": 0,
        "subject": "Quick question about {{company_name}}",
        "body": "Hi {{first_name}},\n\nI noticed {{company_name}} is...\n\nBest,\n{{sender_name}}",
        "sendTime": "09:00"
      },
      {
        "day": 3,
        "subject": "Following up",
        "body": "Hi {{first_name}},\n\nJust wanted to follow up...\n\nBest,\n{{sender_name}}",
        "sendTime": "14:00"
      }
    ],
    "targetSegment": "Enterprise",
    "expectedReach": 500
  },
  "approvalTaskId": "task-uuid-here"
}
```

---

## 3. Status Update Webhooks (Callbacks)

### 3.1 Execution Started
**Endpoint:** `POST /hooks/catch/{zap_id}/execution-started`

**Payload:**
```json
{
  "eventType": "execution_started",
  "executionId": "exec-uuid-here",
  "taskId": "task-uuid-here",
  "companyId": "comp-uuid-here",
  "startedAt": "2024-01-15T08:35:00.000Z",
  "estimatedCompletion": "2024-01-15T09:00:00.000Z"
}
```

---

### 3.2 Execution Completed
**Endpoint:** `POST /hooks/catch/{zap_id}/execution-completed`

**Payload:**
```json
{
  "eventType": "execution_completed",
  "executionId": "exec-uuid-here",
  "taskId": "task-uuid-here",
  "companyId": "comp-uuid-here",
  "completedAt": "2024-01-15T09:00:00.000Z",
  "results": {
    "postsScheduled": 15,
    "leadsEnriched": 50,
    "contactsSynced": 25
  },
  "errors": []
}
```

---

### 3.3 Execution Failed
**Endpoint:** `POST /hooks/catch/{zap_id}/execution-failed`

**Payload:**
```json
{
  "eventType": "execution_failed",
  "executionId": "exec-uuid-here",
  "taskId": "task-uuid-here",
  "companyId": "comp-uuid-here",
  "failedAt": "2024-01-15T08:45:00.000Z",
  "error": {
    "code": "API_RATE_LIMIT",
    "message": "HubSpot API rate limit exceeded",
    "retryable": true,
    "retryAfter": "2024-01-15T09:00:00.000Z"
  },
  "partialResults": {
    "postsScheduled": 10,
    "postsFailed": 5
  }
}
```

---

## 4. Notification Webhooks

### 4.1 Daily Brief Ready
**Endpoint:** `POST /hooks/catch/{zap_id}/daily-brief-ready`

**Payload:**
```json
{
  "eventType": "daily_brief_ready",
  "companyId": "comp-uuid-here",
  "date": "2024-01-15",
  "generatedAt": "2024-01-15T08:00:00.000Z",
  "summary": {
    "leadsFound": 50,
    "postsDrafted": 15,
    "competitorsScanned": 12,
    "erpRecordsSynced": 25,
    "campaignsReady": 3
  },
  "pendingApprovals": 5,
  "dashboardUrl": "https://app.autopilot-agency.com/approvals",
  "channels": {
    "slack": {
      "channel": "#marketing-automation",
      "message": "📊 Daily brief ready for review!"
    },
    "email": {
      "recipients": ["manager@example.com"],
      "subject": "Daily Approval Brief - 5 tasks pending"
    },
    "whatsapp": {
      "phone": "+1234567890",
      "message": "Good morning! Your daily automation brief is ready."
    }
  }
}
```

---

## Error Handling

All webhooks should implement proper error handling:

```json
{
  "success": false,
  "error": {
    "code": "INVALID_PAYLOAD",
    "message": "Missing required field: taskId",
    "details": {
      "field": "taskId",
      "expected": "string",
      "received": "undefined"
    }
  },
  "timestamp": "2024-01-15T08:30:00.000Z"
}
```

### Common Error Codes:
- `INVALID_PAYLOAD` - Missing or malformed data
- `AUTHENTICATION_FAILED` - Invalid API key or token
- `RATE_LIMIT_EXCEEDED` - Too many requests
- `SERVICE_UNAVAILABLE` - External service down
- `TIMEOUT` - Request took too long
- `PERMISSION_DENIED` - Insufficient permissions

---

## Security Headers

All webhook requests should include:

```
X-AutoPilot-Signature: sha256=<hmac_signature>
X-AutoPilot-Timestamp: <unix_timestamp>
X-AutoPilot-Event-Type: <event_type>
Content-Type: application/json
```

### Signature Verification:
```javascript
const crypto = require('crypto');

function verifySignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}
```

---

## Rate Limiting

- Standard webhooks: 100 requests/minute
- Emergency stop: Unlimited (highest priority)
- Status callbacks: 500 requests/minute

Rate limit headers in response:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1642248000
```

---

## Testing

Use Zapier's built-in testing or tools like:
- Postman Collections
- ngrok for local testing
- Webhook.site for debugging

Example curl command:
```bash
curl -X POST https://hooks.zapier.com/hooks/catch/12345/abcdef \
  -H "Content-Type: application/json" \
  -H "X-AutoPilot-Signature: sha256=abc123..." \
  -d '{
    "action": "approve",
    "taskId": "task-123",
    "taskType": "Social",
    "approvedAt": "2024-01-15T08:30:00.000Z"
  }'
```
