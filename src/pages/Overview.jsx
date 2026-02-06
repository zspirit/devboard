import StatCard from '../components/StatCard'
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
    </div>
  )
}

export default Overview
