import Hero from "../components/hero/hero.component";
import HomeCard from "../components/home-card/home.card.component";
import JobListing from "../components/JobListing/jobListing.component";
import ViewAll from "../components/viewAll/viewAll.component";

const Homepage = () => {
  return (
    <>
      <Hero
        title="Become a React Dev"
        subTitle="Find the React job that fits your skills and needs"
      />
      <HomeCard />
      <JobListing/>
      <ViewAll/>
    </>
  );
};

export default Homepage;
