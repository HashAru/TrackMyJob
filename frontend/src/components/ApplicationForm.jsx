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
    <form onSubmit={handleSubmit} className="mb-6 space-y-2 p-4 border rounded-xl shadow">
      <div className="grid grid-cols-2 gap-3">
        <input className="border p-2 rounded" name="role" placeholder="Role" value={form.role} onChange={handleChange} required />
        <input className="border p-2 rounded" name="company" placeholder="Company" value={form.company} onChange={handleChange} />
        <input className="border p-2 rounded" name="location" placeholder="Location" value={form.location} onChange={handleChange} />
        <input className="border p-2 rounded" type="number" name="salary" placeholder="Salary" value={form.salary} onChange={handleChange} />
        <input className="border p-2 rounded" type="date" name="dateApplied" value={form.dateApplied} onChange={handleChange} required />
        <input className="border p-2 rounded" type="date" name="interviewDate" value={form.interviewDate} onChange={handleChange} />
        <input className="border p-2 rounded col-span-2" name="resumeLink" placeholder="Resume Link" value={form.resumeLink} onChange={handleChange} />

        {/* Status Dropdown */}
        <select className="border p-2 rounded col-span-2" name="status" value={form.status} onChange={handleChange}>
          <option>Applied</option>
          <option>Interview Scheduled</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Application</button>
    </form>
  );
}

export default ApplicationForm;
