import JobListing from "../components/JobListing/jobListing.component";

const JobPages = () => {
    return (
        <section className="bg-blue-50 px-5 py-6">
            <JobListing jobsPage/>
        </section>
    )
}

export default JobPages;