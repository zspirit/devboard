import StatCard from '../components/StatCard'
import CommitChart from '../components/CommitChart'
import DeployChart from '../components/DeployChart'
import { stats } from '../data/mockData'
import './Overview.css'

function Overview() {
  return (
    <div className="overview">
      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <div className="charts-row">
        <CommitChart />
        <DeployChart />
      </div>
    </div>
  )
}

export default Overview
