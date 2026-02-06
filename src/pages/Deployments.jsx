import { deploymentLog } from '../data/deployments'
import './Deployments.css'

function Deployments() {
  return (
    <div className="deployments-page">
      <div className="deploy-list">
        {deploymentLog.map((deploy) => (
          <div key={deploy.id} className="deploy-row">
            <div className="deploy-info">
              <span className="deploy-version">{deploy.version}</span>
              <span className={`deploy-env ${deploy.env}`}>{deploy.env}</span>
            </div>
            <span className={`deploy-status ${deploy.status}`}>
              {deploy.status}
            </span>
            <span className="deploy-duration">{deploy.duration}</span>
            <span className="deploy-date">{deploy.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Deployments
