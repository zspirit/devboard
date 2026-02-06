export const stats = [
  { label: 'Commits', value: '1,247', change: 12, positive: true },
  { label: 'Deployments', value: '89', change: 8, positive: true },
  { label: 'Open Issues', value: '23', change: -5, positive: false },
  { label: 'Uptime', value: '99.9%', change: 0.2, positive: true },
]

export const commitActivity = [
  { day: 'Mon', commits: 12 },
  { day: 'Tue', commits: 19 },
  { day: 'Wed', commits: 8 },
  { day: 'Thu', commits: 25 },
  { day: 'Fri', commits: 17 },
  { day: 'Sat', commits: 5 },
  { day: 'Sun', commits: 3 },
]

export const deployments = [
  { month: 'Aug', success: 14, failed: 2 },
  { month: 'Sep', success: 18, failed: 1 },
  { month: 'Oct', success: 22, failed: 3 },
  { month: 'Nov', success: 16, failed: 0 },
  { month: 'Dec', success: 20, failed: 1 },
  { month: 'Jan', success: 24, failed: 2 },
]

export const recentActivity = [
  { id: 1, type: 'commit', message: 'fix: resolve auth token refresh issue', repo: 'api-gateway', time: '2h ago' },
  { id: 2, type: 'deploy', message: 'Deployed v2.4.1 to production', repo: 'web-app', time: '4h ago' },
  { id: 3, type: 'pr', message: 'feat: add user preferences endpoint', repo: 'api-gateway', time: '6h ago' },
  { id: 4, type: 'issue', message: 'Bug: dashboard not loading on Safari', repo: 'web-app', time: '8h ago' },
  { id: 5, type: 'commit', message: 'refactor: extract validation helpers', repo: 'shared-utils', time: '12h ago' },
  { id: 6, type: 'deploy', message: 'Deployed v1.8.0 to staging', repo: 'api-gateway', time: '1d ago' },
]
