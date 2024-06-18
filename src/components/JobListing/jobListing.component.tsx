import Jobs from "../Jobs/job.component";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import React, { useEffect } from "react";
import { fetchJobs } from "../../redux/jobs/job.actions";
import Spinner from "../spinner/spinner.component";

interface JobListingPros {
  jobsPage?: boolean;
}

const JobListing: React.FC<JobListingPros> = ({ jobsPage }) => {
  const dispatch = useDispatch<any>();
  const { jobs, loading } = useSelector((state: RootState) => state.job);

  useEffect(() => {
    dispatch(fetchJobs(jobsPage as boolean));
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {jobsPage ? "Browse Jobs" : "Recent Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job: any) => (
              <Jobs key={job.id} {...job}></Jobs>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListing;
