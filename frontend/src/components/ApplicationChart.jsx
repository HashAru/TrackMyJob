// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

// ChartJS.register(BarElement, CategoryScale, LinearScale);

// function ApplicationChart({ applications }) {
//   const monthCounts = {};
//   applications.forEach(app => {
//     const month = new Date(app.dateApplied).toLocaleString('default', { month: 'short', year: 'numeric' });
//     monthCounts[month] = (monthCounts[month] || 0) + 1;
//   });

//   const data = {
//     labels: Object.keys(monthCounts),
//     datasets: [
//       {
//         label: 'Applications per Month',
//         data: Object.values(monthCounts),
//         backgroundColor: 'rgba(59, 130, 246, 0.7)',
//       }
//     ]
//   };

//   return (
//     <div className="mt-6 p-4 border rounded-xl shadow">
//       <h2 className="text-xl font-bold mb-2">Monthly Applications</h2>
//       <Bar data={data} />
//     </div>
//   );
// }

// export default ApplicationChart;

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
        backgroundColor: 'rgba(59, 130, 246, 0.7)', // blue-500 default
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        borderRadius: 6,
        hoverBackgroundColor: 'rgba(37, 99, 235, 0.8)', // darker blue on hover
        hoverBorderColor: 'rgba(29, 78, 216, 1)',       // solid border on hover
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
        backgroundColor: '#1e40af', // deep blue tooltip
        titleColor: '#fff',
        bodyColor: '#dbeafe',       // light blue text
        borderColor: '#3b82f6',
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
        grid: { color: 'rgba(209, 213, 219, 0.3)' }, // light gray
      },
    },
  };

  return (
    <div className="mt-6 p-4 border rounded-xl shadow bg-gradient-to-br from-blue-50 to-indigo-50">
      <h2 className="text-xl font-bold mb-2 text-blue-700">Monthly Applications</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default ApplicationChart;
