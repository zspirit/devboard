import './StatCard.css'

function StatCard({ label, value, change, positive }) {
  return (
    <div className="stat-card">
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
      {change && (
        <span className={`stat-change ${positive ? 'up' : 'down'}`}>
          {positive ? '+' : ''}{change}%
        </span>
      )}
    </div>
  )
}

export default StatCard
