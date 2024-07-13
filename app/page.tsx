import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import Projects from "./components/Projects/Projects";
import Stats from "./components/Stats/Stats";
import TechStack from "./components/TechStack/TechStack";
import WorkExperience from "./components/WorkExperience/WorkExperience";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-2 gap-4 w-full max-w-screen-2xl sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-6 mx-auto">
        <Stats />
        <Projects />
        <TechStack />
        <PersonalDetails />
        <WorkExperience />
      </div>
    </main>
  );
}
