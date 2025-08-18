import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

function ApplicationChart({ applications }) {
  const monthCounts = {};
  applications.forEach(app => {
    const month = new Date(app.dateApplied).toLocaleString('default', { month: 'short', year: 'numeric' });
    monthCounts[month] = (monthCounts[month] || 0) + 1;
  });

  const data = {
    labels: Object.keys(monthCounts),
    datasets: [
      {
        label: 'Applications per Month',
        data: Object.values(monthCounts),
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
      }
    ]
  };

  return (
    <div className="mt-6 p-4 border rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">Monthly Applications</h2>
      <Bar data={data} />
    </div>
  );
}

export default ApplicationChart;
