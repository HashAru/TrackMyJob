// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// export default function ApplicationChartMonth({ applications }) {
//   const counts = {};
//   applications.forEach(a => {
//     const key = new Date(a.dateApplied).toLocaleString('default', { month: 'short', year: 'numeric' });
//     counts[key] = (counts[key] || 0) + 1;
//   });
//   const labels = Object.keys(counts);
//   const data = {
//     labels,
//     datasets: [{ label: 'Applications / Month', data: labels.map(l => counts[l]) }]
//   };
//   return (
//     <div className="mt-6 p-4 border rounded-xl shadow">
//       <h2 className="text-xl font-bold mb-2">Monthly Applications</h2>
//       <Bar data={data} />
//     </div>
//   );
// }

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ApplicationChartMonth({ applications }) {
  const counts = {};
  applications.forEach((a) => {
    const key = new Date(a.dateApplied).toLocaleString('default', {
      month: 'short',
      year: 'numeric',
    });
    counts[key] = (counts[key] || 0) + 1;
  });

  const labels = Object.keys(counts);
  const data = {
    labels,
    datasets: [
      {
        label: 'Applications / Month',
        data: labels.map((l) => counts[l]),
        backgroundColor: 'rgba(99, 102, 241, 0.7)',   // Indigo (default)
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2,
        borderRadius: 6,
        hoverBackgroundColor: 'rgba(139, 92, 246, 0.8)', // Purple on hover
        hoverBorderColor: 'rgba(139, 92, 246, 1)',       // Purple solid border
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#374151', // gray-700
          font: { size: 14, weight: '500' },
        },
      },
      tooltip: {
        backgroundColor: '#4f46e5', // Indigo tooltip
        titleColor: '#fff',
        bodyColor: '#e0e7ff',
        borderColor: '#6366f1',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#4b5563',
          font: { size: 12 },
        },
        grid: { display: false },
      },
      y: {
        ticks: {
          color: '#4b5563',
          font: { size: 12 },
          stepSize: 1,
        },
        grid: {
          color: 'rgba(209, 213, 219, 0.3)',
        },
      },
    },
  };

  return (
    <div className="mt-6 p-4 border rounded-xl shadow bg-gradient-to-br from-indigo-50 to-purple-50">
      <h2 className="text-xl font-bold mb-2 text-indigo-700">Monthly Applications</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
