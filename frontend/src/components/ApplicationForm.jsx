// import { useState } from 'react';

// function ApplicationForm({ addApplication }) {
//   const [form, setForm] = useState({
//     role: '', company: '', location: '',
//     salary: '', dateApplied: '', interviewDate: '',
//     resumeLink: '', status: 'Applied'
//   });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addApplication(form);
//     setForm({ role: '', company: '', location: '', salary: '', dateApplied: '', interviewDate: '', resumeLink: '', status: 'Applied' });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-6 space-y-2 p-4 border rounded-xl shadow">
//       <div className="grid grid-cols-2 gap-3">
//         <input className="border p-2 rounded" name="role" placeholder="Role" value={form.role} onChange={handleChange} required />
//         <input className="border p-2 rounded" name="company" placeholder="Company" value={form.company} onChange={handleChange} />
//         <input className="border p-2 rounded" name="location" placeholder="Location" value={form.location} onChange={handleChange} />
//         <input className="border p-2 rounded" type="number" name="salary" placeholder="Salary" value={form.salary} onChange={handleChange} />
//         <input className="border p-2 rounded" type="date" name="dateApplied" value={form.dateApplied} onChange={handleChange} required />
//         <input className="border p-2 rounded" type="date" name="interviewDate" value={form.interviewDate} onChange={handleChange} />
//         <input className="border p-2 rounded col-span-2" name="resumeLink" placeholder="Resume Link" value={form.resumeLink} onChange={handleChange} />

//         {/* Status Dropdown */}
//         <select className="border p-2 rounded col-span-2" name="status" value={form.status} onChange={handleChange}>
//           <option>Applied</option>
//           <option>Interview Scheduled</option>
//           <option>Offer</option>
//           <option>Rejected</option>
//         </select>

//       </div>
//       <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Application</button>
//     </form>
//   );
// }

// export default ApplicationForm;


import { useState } from 'react';

function ApplicationForm({ addApplication }) {
  const [form, setForm] = useState({
    role: '', company: '', location: '',
    salary: '', dateApplied: '', interviewDate: '',
    resumeLink: '', status: 'Applied'
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addApplication(form);
    setForm({ role: '', company: '', location: '', salary: '', dateApplied: '', interviewDate: '', resumeLink: '', status: 'Applied' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 space-y-4 p-6 border rounded-2xl shadow-lg 
                 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-100"
    >
      <h2 className="text-2xl font-semibold text-center text-blue-800 mb-4">
        Add a New Application
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          name="role" placeholder="Role" value={form.role} onChange={handleChange} required
        />
        <input
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          name="company" placeholder="Company" value={form.company} onChange={handleChange}
        />
        <input
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          name="location" placeholder="Location" value={form.location} onChange={handleChange}
        />
        <input
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          type="number" name="salary" placeholder="Salary" value={form.salary} onChange={handleChange}
        />
        <input
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          type="date" name="dateApplied" value={form.dateApplied} onChange={handleChange} required
        />
        <input
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          type="date" name="interviewDate" value={form.interviewDate} onChange={handleChange}
        />
        <input
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none col-span-2"
          name="resumeLink" placeholder="Resume Link" value={form.resumeLink} onChange={handleChange}
        />

        {/* Status Dropdown */}
        <select
          className="border p-2 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none col-span-2"
          name="status" value={form.status} onChange={handleChange}
        >
          <option>Applied</option>
          <option>Interview Scheduled</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white 
                     px-6 py-2 rounded-xl shadow hover:from-blue-600 hover:to-purple-600 
                     transition-all duration-200"
        >
          Add Application
        </button>
      </div>
    </form>
  );
}

export default ApplicationForm;
