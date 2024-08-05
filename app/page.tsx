import LetsWorkTogether from "./components/LetsWorkTogether/LetsWorkTogether";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import Projects from "./components/Projects/Projects";
import Socials from "./components/Socials/Socials";
import Stats from "./components/Stats/Stats";
import TechStack from "./components/TechStack/TechStack";
import WorkExperience from "./components/WorkExperience/WorkExperience";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-2 gap-4 px-4 w-full max-w-screen-2xl sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mx-auto py-16">
        <Stats />
        <Projects />
        <TechStack />
        <PersonalDetails />
        <LetsWorkTogether />
        <Socials />
        <WorkExperience />
      </div>
    </main>
  );
}
