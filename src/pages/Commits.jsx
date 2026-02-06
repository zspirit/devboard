import { commitLog } from '../data/commits'
import './Commits.css'

function Commits() {
  return (
    <div className="commits-page">
      <div className="commits-list">
        {commitLog.map((commit) => (
          <div key={commit.id} className="commit-row">
            <div className="commit-info">
              <span className="commit-message">{commit.message}</span>
              <div className="commit-meta">
                <span className="commit-author">{commit.author}</span>
                <span className="commit-branch">{commit.branch}</span>
                <span className="commit-date">{commit.date}</span>
              </div>
            </div>
            <code className="commit-hash">{commit.id}</code>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Commits
