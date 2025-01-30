export default function MetricCard({ title, value }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <div className="text-sm text-gray-600">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    )
  }