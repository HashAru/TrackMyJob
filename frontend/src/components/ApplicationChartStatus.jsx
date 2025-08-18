import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function ApplicationChartStatus({ applications }) {
  const counts = {};
  applications.forEach(a => { counts[a.status] = (counts[a.status] || 0) + 1; });
  const labels = Object.keys(counts);
  const data = { labels, datasets: [{ label: 'By Status', data: labels.map(l => counts[l]) }] };
  return (
    <div className="mt-6 p-4 border rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">Applications by Status</h2>
      <Pie data={data} />
    </div>
  );
}
