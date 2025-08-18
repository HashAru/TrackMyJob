import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './context/AuthContext';
import AuthForm from './components/AuthForm';
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './components/ApplicationList';
import ApplicationChartMonth from './components/ApplicationChartMonth';
import ApplicationChartStatus from './components/ApplicationChartStatus';


function App() {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (!user) return;
    axios.get('http://localhost:5000/api/applications', {
      headers: { Authorization: `Bearer ${user.token}` }
    }).then(res => setApplications(res.data));
  }, [user]);

  const addApplication = (payload) => {
    axios.post('http://localhost:5000/api/applications', payload, {
      headers: { Authorization: `Bearer ${user.token}` }
    }).then(res => setApplications(prev => [res.data, ...prev]));
  };

  return (
    

    // <div> <p> App is rendering</p>
    // <h1 className="text-4xl font-bold text-blue-600">Tailwind is Working 🚀</h1>
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Job Application Tracker</h1>
      <AuthForm />
      {user && (
        <>
          <ApplicationForm addApplication={addApplication} />
          <ApplicationChartMonth applications={applications} />
          <ApplicationChartStatus applications={applications} />
          <ApplicationList applications={applications} />
        </>
      )}
    </div>
    // </div>
  );
}
export default App

// function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <h1 className="text-4xl font-bold text-blue-500">
//         Hello Tailwind + Vite 🚀
//       </h1>
//     </div>
//   )
// }

// export default App