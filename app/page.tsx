import Projects from "./components/Projects/Projects";
import Stats from "./components/Stats/Stats";

export default function Home() {
  return (
    <main>
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-4 w-full  sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-6">
        <Stats />
        <Projects />
      </div>
    </main>
  );
}
