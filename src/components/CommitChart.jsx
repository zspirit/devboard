import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { commitActivity } from '../data/mockData'
import './ChartCard.css'

function CommitChart() {
  return (
    <div className="chart-card">
      <h3 className="chart-title">Commit Activity</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={commitActivity}>
            <XAxis dataKey="day" stroke="#8b949e" fontSize={12} />
            <YAxis stroke="#8b949e" fontSize={12} />
            <Tooltip
              contentStyle={{
                background: '#1c2128',
                border: '1px solid #21262d',
                borderRadius: '6px',
                color: '#e1e4e8',
              }}
            />
            <Bar dataKey="commits" fill="#58a6ff" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default CommitChart
