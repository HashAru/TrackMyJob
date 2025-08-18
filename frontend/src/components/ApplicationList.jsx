// function ApplicationList({ applications }) {
//   return (
//     <div className="mt-6">
//       <h2 className="text-xl font-bold mb-2">All Applications</h2>
//       <table className="w-full border-collapse border">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Role</th>
//             <th className="border p-2">Company</th>
//             <th className="border p-2">Location</th>
//             <th className="border p-2">Salary</th>
//             <th className="border p-2">Date Applied</th>
//             <th className="border p-2">Interview</th>
//             <th className="border p-2">Resume</th>
//             <th className="border p-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.map(app => (
//             <tr key={app._id}>
//               <td className="border p-2">{app.role}</td>
//               <td className="border p-2">{app.company}</td>
//               <td className="border p-2">{app.location}</td>
//               <td className="border p-2">{app.salary}</td>
//               <td className="border p-2">{new Date(app.dateApplied).toLocaleDateString()}</td>
//               <td className="border p-2">{app.interviewDate ? new Date(app.interviewDate).toLocaleDateString() : '-'}</td>
//               <td className="border p-2">
//                 {app.resumeLink ? <a href={app.resumeLink} target="_blank" className="text-blue-600">View</a> : '-'}
//               </td>
//               <td className="border p-2">{app.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default ApplicationList;

function ApplicationList({ applications }) {
  return (
    <div className="mt-6 bg-white shadow-md rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">All Applications</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Company</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Salary</th>
              <th className="p-3 text-left">Date Applied</th>
              <th className="p-3 text-left">Interview</th>
              <th className="p-3 text-left">Resume</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, idx) => (
              <tr
                key={app._id}
                className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="p-3 text-gray-700">{app.role}</td>
                <td className="p-3 text-gray-700">{app.company}</td>
                <td className="p-3 text-gray-700">{app.location}</td>
                <td className="p-3 text-gray-700">{app.salary}</td>
                <td className="p-3 text-gray-600">
                  {new Date(app.dateApplied).toLocaleDateString()}
                </td>
                <td className="p-3 text-gray-600">
                  {app.interviewDate
                    ? new Date(app.interviewDate).toLocaleDateString()
                    : "-"}
                </td>
                <td className="p-3">
                  {app.resumeLink ? (
                    <a
                      href={app.resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      View
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td
                  className={`p-3 font-semibold ${
                    app.status === "Pending"
                      ? "text-yellow-600"
                      : app.status === "Accepted"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {app.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApplicationList;
