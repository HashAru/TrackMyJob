function ApplicationList({ applications }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">All Applications</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Role</th>
            <th className="border p-2">Company</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Salary</th>
            <th className="border p-2">Date Applied</th>
            <th className="border p-2">Interview</th>
            <th className="border p-2">Resume</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app._id}>
              <td className="border p-2">{app.role}</td>
              <td className="border p-2">{app.company}</td>
              <td className="border p-2">{app.location}</td>
              <td className="border p-2">{app.salary}</td>
              <td className="border p-2">{new Date(app.dateApplied).toLocaleDateString()}</td>
              <td className="border p-2">{app.interviewDate ? new Date(app.interviewDate).toLocaleDateString() : '-'}</td>
              <td className="border p-2">
                {app.resumeLink ? <a href={app.resumeLink} target="_blank" className="text-blue-600">View</a> : '-'}
              </td>
              <td className="border p-2">{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ApplicationList;
