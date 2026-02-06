import { recentActivity } from '../data/mockData'
import './ActivityFeed.css'

const typeColors = {
  commit: '#58a6ff',
  deploy: '#3fb950',
  pr: '#a371f7',
  issue: '#f85149',
}

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h3 className="feed-title">Recent Activity</h3>
      <div className="feed-list">
        {recentActivity.map((item) => (
          <div key={item.id} className="feed-item">
            <div
              className="feed-dot"
              style={{ background: typeColors[item.type] }}
            />
            <div className="feed-content">
              <span className="feed-message">{item.message}</span>
              <div className="feed-meta">
                <span className="feed-repo">{item.repo}</span>
                <span className="feed-time">{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed
