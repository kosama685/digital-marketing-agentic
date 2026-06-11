/**
 * Daily Approval Dashboard for AutoPilot Agency OS
 * 
 * Human-in-the-Loop (HITL) dashboard for reviewing and approving daily tasks.
 * Runs at 8:00 AM local time, compiles "Daily Execution Brief".
 * 
 * Features:
 * - View pending approval tasks
 * - Approve All / Approve Specific / Edit / Pause / Emergency Stop
 * - Integration with Zapier webhooks for execution
 * - Real-time status updates
 */

'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Play, 
  Pause, 
  StopCircle, 
  Edit2, 
  RefreshCw,
  AlertTriangle,
  TrendingUp,
  Users,
  FileText,
  Calendar,
  Send,
  MessageSquare,
  Database
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

// Type definitions
interface ApprovalTask {
  id: string;
  companyId: string;
  taskType: 'Strategy' | 'Social' | 'Leads' | 'ERP_Sync' | 'Campaign';
  title: string;
  description: string;
  payload: any;
  status: 'Pending' | 'Approved' | 'Denied' | 'Executed';
  priority: 'low' | 'normal' | 'high' | 'urgent';
  dueDate?: string;
  createdAt: string;
  webhookUrl?: string;
}

interface DailyBrief {
  date: string;
  summary: {
    leadsFound: number;
    postsDrafted: number;
    competitorsScanned: number;
    erpRecordsSynced: number;
    campaignsReady: number;
  };
  insights: string[];
  alerts: string[];
}

interface DashboardStats {
  totalPending: number;
  totalApproved: number;
  totalDenied: number;
  totalExecuted: number;
}

// Mock data - in production, fetch from API
const mockTasks: ApprovalTask[] = [
  {
    id: 'task-1',
    companyId: 'comp-abc',
    taskType: 'Strategy',
    title: 'Marketing Strategy for Dubai & London',
    description: 'Generated 30-day content plan with 50 localized keywords for dental clinic in Dubai and London',
    payload: {
      locations: ['Dubai', 'London'],
      keywords: 50,
      posts: 30,
      strategy: 'Focus on premium dental implants and teeth whitening services'
    },
    status: 'Pending',
    priority: 'high',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    webhookUrl: 'https://hooks.zapier.com/hooks/catch/12345/abcdef'
  },
  {
    id: 'task-2',
    companyId: 'comp-abc',
    taskType: 'Social',
    title: 'Social Media Posts - Week 1',
    description: '15 posts scheduled for Instagram, Facebook, and LinkedIn across Dubai and London timezones',
    payload: {
      platforms: ['Instagram', 'Facebook', 'LinkedIn'],
      postCount: 15,
      schedule: '9:00 AM local time'
    },
    status: 'Pending',
    priority: 'normal',
    createdAt: new Date(Date.now() - 7200000).toISOString(),
    webhookUrl: 'https://hooks.zapier.com/hooks/catch/12345/social'
  },
  {
    id: 'task-3',
    companyId: 'comp-abc',
    taskType: 'Leads',
    title: 'Lead Enrichment Batch #47',
    description: '50 new leads enriched with company data and revenue estimates from Apollo',
    payload: {
      leadCount: 50,
      source: 'Apollo.io',
      enrichmentFields: ['company_size', 'revenue', 'industry']
    },
    status: 'Pending',
    priority: 'normal',
    createdAt: new Date(Date.now() - 10800000).toISOString(),
    webhookUrl: 'https://hooks.zapier.com/hooks/catch/12345/leads'
  },
  {
    id: 'task-4',
    companyId: 'comp-abc',
    taskType: 'ERP_Sync',
    title: 'HubSpot CRM Sync',
    description: 'Sync 25 new contacts to HubSpot and update deal pipeline',
    payload: {
      contactCount: 25,
      crm: 'HubSpot',
      action: 'create_and_update'
    },
    status: 'Pending',
    priority: 'high',
    createdAt: new Date(Date.now() - 14400000).toISOString(),
    webhookUrl: 'https://hooks.zapier.com/hooks/catch/12345/hubspot'
  },
  {
    id: 'task-5',
    companyId: 'comp-abc',
    taskType: 'Campaign',
    title: 'Email Outreach Campaign - Q1',
    description: '5-email sequence for cold outreach to enterprise leads',
    payload: {
      sequenceLength: 5,
      targetSegment: 'Enterprise',
      expectedReach: 500
    },
    status: 'Pending',
    priority: 'low',
    createdAt: new Date(Date.now() - 18000000).toISOString(),
    webhookUrl: 'https://hooks.zapier.com/hooks/catch/12345/email'
  }
];

const mockDailyBrief: DailyBrief = {
  date: new Date().toISOString().split('T')[0],
  summary: {
    leadsFound: 50,
    postsDrafted: 15,
    competitorsScanned: 12,
    erpRecordsSynced: 25,
    campaignsReady: 3
  },
  insights: [
    'Competitor price drop detected in Dubai market (-15%)',
    'High engagement trend for "dental implants" keywords in London',
    'Best posting time identified: 9:00 AM GST for Dubai, 2:00 PM GMT for London'
  ],
  alerts: [
    'HubSpot API rate limit approaching (80% used)',
    '2 competitor websites blocked scraping - using fallback'
  ]
};

export default function DailyApprovalDashboard() {
  const [tasks, setTasks] = useState<ApprovalTask[]>([]);
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalPending: 0,
    totalApproved: 0,
    totalDenied: 0,
    totalExecuted: 0
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<ApprovalTask | null>(null);
  const [editDescription, setEditDescription] = useState('');
  const [notificationSent, setNotificationSent] = useState(false);

  // Fetch tasks on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    try {
      // In production: fetch from API
      // const response = await fetch('/api/approvals/tasks?status=Pending');
      // const data = await response.json();
      
      // Using mock data for demonstration
      setTasks(mockTasks);
      
      // Calculate stats
      setStats({
        totalPending: mockTasks.filter(t => t.status === 'Pending').length,
        totalApproved: mockTasks.filter(t => t.status === 'Approved').length,
        totalDenied: mockTasks.filter(t => t.status === 'Denied').length,
        totalExecuted: mockTasks.filter(t => t.status === 'Executed').length
      });
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }

  // Handle individual task approval
  async function handleApproveTask(taskId: string) {
    setIsProcessing(true);
    try {
      const task = tasks.find(t => t.id === taskId);
      if (!task) return;

      // Trigger Zapier webhook or API endpoint
      if (task.webhookUrl) {
        await fetch(task.webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'approve',
            taskId: task.id,
            taskType: task.taskType,
            payload: task.payload,
            approvedAt: new Date().toISOString()
          })
        });
      }

      // Update local state
      setTasks(prev => prev.map(t => 
        t.id === taskId ? { ...t, status: 'Approved', approvedAt: new Date().toISOString() } : t
      ));

      // Show success notification
      showNotification(`Task "${task.title}" approved successfully!`);
    } catch (error) {
      console.error('Error approving task:', error);
      showNotification('Failed to approve task', 'error');
    } finally {
      setIsProcessing(false);
    }
  }

  // Handle approve all pending tasks
  async function handleApproveAll() {
    setIsProcessing(true);
    try {
      const pendingTasks = tasks.filter(t => t.status === 'Pending');
      
      for (const task of pendingTasks) {
        if (task.webhookUrl) {
          await fetch(task.webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'approve_all',
              taskId: task.id,
              taskType: task.taskType,
              payload: task.payload,
              approvedAt: new Date().toISOString()
            })
          });
        }
        
        setTasks(prev => prev.map(t => 
          t.id === task.id ? { ...t, status: 'Approved', approvedAt: new Date().toISOString() } : t
        ));
      }

      showNotification(`Approved ${pendingTasks.length} tasks successfully!`);
    } catch (error) {
      console.error('Error approving all tasks:', error);
      showNotification('Failed to approve some tasks', 'error');
    } finally {
      setIsProcessing(false);
    }
  }

  // Handle task denial
  async function handleDenyTask(taskId: string, reason?: string) {
    setIsProcessing(true);
    try {
      const task = tasks.find(t => t.id === taskId);
      if (!task) return;

      if (task.webhookUrl) {
        await fetch(task.webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'deny',
            taskId: task.id,
            reason: reason || 'No reason provided'
          })
        });
      }

      setTasks(prev => prev.map(t => 
        t.id === taskId ? { ...t, status: 'Denied', deniedAt: new Date().toISOString(), deniedReason: reason } : t
      ));

      showNotification(`Task "${task.title}" denied`);
    } catch (error) {
      console.error('Error denying task:', error);
    } finally {
      setIsProcessing(false);
    }
  }

  // Handle pause queue
  async function handlePauseQueue() {
    setIsProcessing(true);
    try {
      // Send pause signal to all active webhooks
      const activeTasks = tasks.filter(t => t.status === 'Approved' && !t.executedAt);
      
      for (const task of activeTasks) {
        if (task.webhookUrl) {
          await fetch(task.webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'pause', taskId: task.id })
          });
        }
      }

      showNotification('Queue paused successfully');
    } catch (error) {
      console.error('Error pausing queue:', error);
    } finally {
      setIsProcessing(false);
    }
  }

  // Handle emergency stop
  async function handleEmergencyStop() {
    setIsProcessing(true);
    try {
      // Send emergency stop to all webhooks
      const allActiveTasks = tasks.filter(t => 
        t.status === 'Approved' || t.status === 'Executed'
      );
      
      for (const task of allActiveTasks) {
        if (task.webhookUrl) {
          await fetch(`${task.webhookUrl}/emergency-stop`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'emergency_stop', taskId: task.id })
          });
        }
      }

      showNotification('EMERGENCY STOP activated - All operations halted', 'warning');
    } catch (error) {
      console.error('Error executing emergency stop:', error);
    } finally {
      setIsProcessing(false);
    }
  }

  // Handle edit task
  function handleEditTask(task: ApprovalTask) {
    setEditingTask(task);
    setEditDescription(task.description);
    setEditDialogOpen(true);
  }

  async function handleSaveEdit() {
    if (!editingTask) return;

    setIsProcessing(true);
    try {
      // Save edited description
      setTasks(prev => prev.map(t => 
        t.id === editingTask.id ? { ...t, description: editDescription } : t
      ));

      setEditDialogOpen(false);
      setEditingTask(null);
      showNotification('Task updated successfully');
    } catch (error) {
      console.error('Error saving edit:', error);
    } finally {
      setIsProcessing(false);
    }
  }

  // Show notification
  function showNotification(message: string, type: 'success' | 'error' | 'warning' = 'success') {
    // In production, use a proper toast/notification system
    console.log(`[${type.toUpperCase()}] ${message}`);
    
    // Simple browser notification
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('AutoPilot Agency OS', {
        body: message,
        icon: '/icon.png'
      });
    }
  }

  // Get priority badge color
  function getPriorityColor(priority: string) {
    switch (priority) {
      case 'urgent': return 'bg-red-500 text-white';
      case 'high': return 'bg-orange-500 text-white';
      case 'normal': return 'bg-blue-500 text-white';
      case 'low': return 'bg-gray-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  }

  // Get task type icon
  function getTaskTypeIcon(taskType: string) {
    switch (taskType) {
      case 'Strategy': return <TrendingUp className="h-5 w-5" />;
      case 'Social': return <MessageSquare className="h-5 w-5" />;
      case 'Leads': return <Users className="h-5 w-5" />;
      case 'ERP_Sync': return <Database className="h-5 w-5" />;
      case 'Campaign': return <Send className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Daily Approval Dashboard</h1>
            <p className="text-gray-600 mt-2">
              Review and approve today's automated tasks • {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={handlePauseQueue}
              disabled={isProcessing}
              className="gap-2"
            >
              <Pause className="h-4 w-4" />
              Pause Queue
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleEmergencyStop}
              disabled={isProcessing}
              className="gap-2"
            >
              <StopCircle className="h-4 w-4" />
              Emergency Stop
            </Button>
          </div>
        </div>

        {/* Daily Brief Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Leads Found</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{mockDailyBrief.summary.leadsFound}</div>
              <p className="text-xs text-gray-500 mt-1">+12 from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Posts Drafted</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{mockDailyBrief.summary.postsDrafted}</div>
              <p className="text-xs text-gray-500 mt-1">Ready for review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Competitors Scanned</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{mockDailyBrief.summary.competitorsScanned}</div>
              <p className="text-xs text-gray-500 mt-1">Across all locations</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">ERP Records Synced</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{mockDailyBrief.summary.erpRecordsSynced}</div>
              <p className="text-xs text-gray-500 mt-1">Last sync: 2 hours ago</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Campaigns Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{mockDailyBrief.summary.campaignsReady}</div>
              <p className="text-xs text-gray-500 mt-1">Awaiting approval</p>
            </CardContent>
          </Card>
        </div>

        {/* Insights and Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Alert className="bg-green-50 border-green-200">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">Key Insights</AlertTitle>
            <AlertDescription className="text-green-700">
              <ul className="list-disc list-inside space-y-1 mt-2">
                {mockDailyBrief.insights.map((insight, i) => (
                  <li key={i}>{insight}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>

          <Alert className="bg-yellow-50 border-yellow-200">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <AlertTitle className="text-yellow-800">Alerts</AlertTitle>
            <AlertDescription className="text-yellow-700">
              <ul className="list-disc list-inside space-y-1 mt-2">
                {mockDailyBrief.alerts.map((alert, i) => (
                  <li key={i}>{alert}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        </div>

        {/* Stats Overview */}
        <div className="flex gap-4 mb-6">
          <Badge variant="outline" className="px-4 py-2 text-lg">
            <Clock className="h-4 w-4 mr-2" />
            Pending: {stats.totalPending}
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-lg">
            <CheckCircle2 className="h-4 w-4 mr-2 text-green-600" />
            Approved: {stats.totalApproved}
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-lg">
            <XCircle className="h-4 w-4 mr-2 text-red-600" />
            Denied: {stats.totalDenied}
          </Badge>
          <Badge variant="outline" className="px-4 py-2 text-lg">
            <Play className="h-4 w-4 mr-2 text-blue-600" />
            Executed: {stats.totalExecuted}
          </Badge>
        </div>

        {/* Action Buttons */}
        {stats.totalPending > 0 && (
          <div className="mb-6">
            <Button 
              onClick={handleApproveAll}
              disabled={isProcessing || stats.totalPending === 0}
              className="gap-2 h-12 px-8 text-lg"
              size="lg"
            >
              <CheckCircle2 className="h-5 w-5" />
              Approve All ({stats.totalPending} tasks)
            </Button>
          </div>
        )}

        {/* Tasks List */}
        <Tabs defaultValue="pending" className="space-y-4">
          <TabsList>
            <TabsTrigger value="pending">
              Pending ({stats.totalPending})
            </TabsTrigger>
            <TabsTrigger value="approved">
              Approved ({stats.totalApproved})
            </TabsTrigger>
            <TabsTrigger value="all">
              All Tasks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {tasks.filter(t => t.status === 'Pending').map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onApprove={() => handleApproveTask(task.id)}
                onDeny={() => handleDenyTask(task.id)}
                onEdit={() => handleEditTask(task)}
                isProcessing={isProcessing}
              />
            ))}
          </TabsContent>

          <TabsContent value="approved" className="space-y-4">
            {tasks.filter(t => t.status === 'Approved').map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onApprove={() => handleApproveTask(task.id)}
                onDeny={() => handleDenyTask(task.id)}
                onEdit={() => handleEditTask(task)}
                isProcessing={isProcessing}
              />
            ))}
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
            {tasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onApprove={() => handleApproveTask(task.id)}
                onDeny={() => handleDenyTask(task.id)}
                onEdit={() => handleEditTask(task)}
                isProcessing={isProcessing}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>
              Modify the task description before approval
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                rows={6}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveEdit} disabled={isProcessing}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Task Card Component
function TaskCard({ 
  task, 
  onApprove, 
  onDeny, 
  onEdit,
  isProcessing 
}: { 
  task: ApprovalTask; 
  onApprove: () => void; 
  onDeny: () => void;
  onEdit: () => void;
  isProcessing: boolean;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              {getTaskTypeIcon(task.taskType)}
            </div>
            <div>
              <CardTitle className="text-lg">{task.title}</CardTitle>
              <CardDescription className="flex items-center gap-2 mt-1">
                <Badge className={getPriorityColor(task.priority)}>
                  {task.priority.toUpperCase()}
                </Badge>
                <span className="text-gray-500">
                  Created {formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}
                </span>
              </CardDescription>
            </div>
          </div>
          <Badge 
            variant={task.status === 'Pending' ? 'default' : 
                   task.status === 'Approved' ? 'default' : 
                   task.status === 'Denied' ? 'destructive' : 'secondary'}
            className={
              task.status === 'Pending' ? 'bg-yellow-500 text-white' :
              task.status === 'Approved' ? 'bg-green-500 text-white' :
              task.status === 'Denied' ? 'bg-red-500 text-white' :
              'bg-blue-500 text-white'
            }
          >
            {task.status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-700">{task.description}</p>
        
        {task.dueDate && (
          <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
            <Calendar className="h-4 w-4" />
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </div>
        )}

        {/* Payload Preview */}
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-xs font-semibold text-gray-600 mb-2">Payload Preview:</p>
          <pre className="text-xs text-gray-700 overflow-x-auto">
            {JSON.stringify(task.payload, null, 2).slice(0, 300)}
            {JSON.stringify(task.payload, null, 2).length > 300 ? '...' : ''}
          </pre>
        </div>
      </CardContent>

      {task.status === 'Pending' && (
        <CardFooter className="flex justify-between gap-2">
          <div className="flex gap-2">
            <Button 
              onClick={onApprove} 
              disabled={isProcessing}
              className="gap-2 bg-green-600 hover:bg-green-700"
            >
              <CheckCircle2 className="h-4 w-4" />
              Approve
            </Button>
            <Button 
              onClick={onDeny} 
              variant="outline"
              disabled={isProcessing}
              className="gap-2"
            >
              <XCircle className="h-4 w-4" />
              Deny
            </Button>
          </div>
          <Button 
            onClick={onEdit} 
            variant="outline"
            disabled={isProcessing}
            className="gap-2"
          >
            <Edit2 className="h-4 w-4" />
            Edit
          </Button>
        </CardFooter>
      )}

      {task.status === 'Approved' && (
        <CardFooter>
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle2 className="h-5 w-5" />
            <span>Approved - Ready for execution</span>
          </div>
        </CardFooter>
      )}

      {task.status === 'Denied' && (
        <CardFooter>
          <div className="flex items-center gap-2 text-red-600">
            <XCircle className="h-5 w-5" />
            <span>Denied {task.deniedReason ? `- ${task.deniedReason}` : ''}</span>
          </div>
        </CardFooter>
      )}

      {task.status === 'Executed' && (
        <CardFooter>
          <div className="flex items-center gap-2 text-blue-600">
            <Play className="h-5 w-5" />
            <span>Executed on {task.executedAt ? new Date(task.executedAt).toLocaleString() : 'N/A'}</span>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}

// Helper function for icons
function getTaskTypeIcon(taskType: string) {
  switch (taskType) {
    case 'Strategy': return <TrendingUp className="h-5 w-5" />;
    case 'Social': return <MessageSquare className="h-5 w-5" />;
    case 'Leads': return <Users className="h-5 w-5" />;
    case 'ERP_Sync': return <Database className="h-5 w-5" />;
    case 'Campaign': return <Send className="h-5 w-5" />;
    default: return <FileText className="h-5 w-5" />;
  }
}
