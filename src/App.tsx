import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/mainlayouts";
import JobPages from "./pages/jobpages";
import NotFound from "./pages/notfound";
import JobPage, { jobLoader } from "./pages/jobPage";
import AddJob from "./pages/Addjob";
import 'react-toastify/dist/ReactToastify.css';
import EditPage from "./pages/editjob";

const App = () => {
  const addJob = async (newJob: any) => {
    await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });

    return;
  } 

  const deleteJob = async (id: string) => {
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    })
  }

  const editJob = async (job: any) => {
    await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<JobPages />} />
        <Route path="/jobs/:id" element={<JobPage  deleteJob={deleteJob} />} loader={jobLoader}/>
        <Route path="/edit-job/:id" element={<EditPage editJob={editJob}/>} loader={jobLoader}/>
        <Route path='/add-job' element={<AddJob addJobSubmit={addJob} />} />
        <Route path= "*" element={ <NotFound /> } />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
