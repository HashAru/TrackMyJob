// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function ApplicationChartStatus({ applications }) {
//   const counts = {};
//   applications.forEach(a => { counts[a.status] = (counts[a.status] || 0) + 1; });
//   const labels = Object.keys(counts);
//   const data = { labels, datasets: [{ label: 'By Status', data: labels.map(l => counts[l]) }] };
//   return (
//     <div className="mt-6 p-4 border rounded-xl shadow">
//       <h2 className="text-xl font-bold mb-2">Applications by Status</h2>
//       <Pie data={data} />
//     </div>
//   );
// }

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ApplicationChartStatus({ applications }) {
  const counts = {};
  applications.forEach(a => {
    counts[a.status] = (counts[a.status] || 0) + 1;
  });

  const labels = Object.keys(counts);
  const data = {
    labels,
    datasets: [
      {
        label: 'By Status',
        data: labels.map(l => counts[l]),
        backgroundColor: [
          'rgba(99, 102, 241, 0.7)',  // Indigo
          'rgba(168, 85, 247, 0.7)',  // Purple
          'rgba(59, 130, 246, 0.7)',  // Blue
          'rgba(139, 92, 246, 0.7)',  // Violet
        ],
        borderColor: [
          'rgba(99, 102, 241, 1)',
          'rgba(168, 85, 247, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(139, 92, 246, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#1f2937', // gray-800 for text
          font: { size: 14, weight: '500' },
        },
      },
    },
  };

  return (
    <div className="mt-6 p-4 border rounded-xl shadow bg-gradient-to-br from-indigo-50 to-purple-50">
      <h2 className="text-xl font-bold mb-2 text-indigo-700">Applications by Status</h2>
      <Pie data={data} options={options} />
    </div>
  );
}
