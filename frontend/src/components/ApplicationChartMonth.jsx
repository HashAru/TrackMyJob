import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ApplicationChartMonth({ applications }) {
  const counts = {};
  applications.forEach(a => {
    const key = new Date(a.dateApplied).toLocaleString('default', { month: 'short', year: 'numeric' });
    counts[key] = (counts[key] || 0) + 1;
  });
  const labels = Object.keys(counts);
  const data = {
    labels,
    datasets: [{ label: 'Applications / Month', data: labels.map(l => counts[l]) }]
  };
  return (
    <div className="mt-6 p-4 border rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">Monthly Applications</h2>
      <Bar data={data} />
    </div>
  );
}
