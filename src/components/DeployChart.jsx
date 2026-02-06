import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { deployments } from '../data/mockData'
import './ChartCard.css'

function DeployChart() {
  return (
    <div className="chart-card">
      <h3 className="chart-title">Deployments</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={deployments}>
            <XAxis dataKey="month" stroke="#8b949e" fontSize={12} />
            <YAxis stroke="#8b949e" fontSize={12} />
            <Tooltip
              contentStyle={{
                background: '#1c2128',
                border: '1px solid #21262d',
                borderRadius: '6px',
                color: '#e1e4e8',
              }}
            />
            <Area
              type="monotone"
              dataKey="success"
              stroke="#3fb950"
              fill="#3fb95022"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="failed"
              stroke="#f85149"
              fill="#f8514922"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DeployChart
