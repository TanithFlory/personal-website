import Projects from "./components/Projects/Projects";
import Stats from "./components/Stats/Stats";
import TechStack from "./components/TechStack/TechStack";

export default function Home() {
  return (
    <main>
      <div className="max-w-[1550px] mx-auto grid grid-cols-2 gap-4 w-full  sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-6">
        <Stats />
        <Projects />
        <TechStack />
      </div>
    </main>
  );
}
