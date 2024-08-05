import images from "@/app/constants/images";
import PrimaryButton from "@/app/utils/PrimaryButton";
import PrimaryCard from "@/app/utils/PrimaryCard";
import Title from "@/app/utils/Title";
import Wrapper from "@/app/utils/Wrapper";

const projectsData = [
  {
    title: "Web Scraper",
    icon: images.WebScraper,
    modalContents: (
      <>
        <div>
          <p className="mb-2">
            A web scraper, built with Next.js, Tailwind CSS, and SQL PrismaDB,
            is designed to track and analyze product prices on Amazon.in. Key
            features include:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm">
            <li>
              <strong>Price Tracking:</strong> Scrapes product data and tracks
              price changes over time.
            </li>
            <li>
              <strong>Price History Graph:</strong> Visualizes price
              fluctuations with a detailed graph.
            </li>
            <li>
              <strong>Price Drop Notifications:</strong> Alerts users when a
              product's price drops compared to the last recorded value.
            </li>
            <li>
              <strong>Recent Scrapes:</strong> Provides an overview of the
              latest data collected.
            </li>
          </ul>
          <div className="mt-4 flex gap-2 items-center justify-center">
            <PrimaryButton
              text={"Visit Website"}
              icon={""}
              background={"var(--primary-color)"}
              href="https://github.com/TanithFlory/web-scraper"
            />
            <PrimaryButton
              text={"Code base"}
              icon={""}
              background={"var(--blue-color)"}
              href="https://github.com/TanithFlory/web-scraper"
            />
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Cryptocurrency Tracker",
    icon: images.CryptoCurrency,
    modalContents: (
      <>
        <div>
          <p className="mb-2">
            A Cryptocurrency Tracker, built with React.js, Tailwind CSS allows
            users to monitor and analyze cryptocurrency data. Key features
            include:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm">
            <li>
              <strong>Price Tracking:</strong> Monitors the current prices of
              various cryptocurrencies in real-time.
            </li>
            <li>
              <strong>Volume Tracking:</strong> Keeps track of trading volumes
              to help identify market trends.
            </li>
            <li>
              <strong>Highs and Lows:</strong> Provides data on the highest and
              lowest prices for selected cryptocurrencies.
            </li>
            <li>
              <strong>Graphical Representation:</strong> Visualizes price and
              volume data with interactive graphs.
            </li>
            <li>
              <strong>Trending Coins:</strong> Highlights the top-performing
              cryptocurrencies based on recent trends.
            </li>
            <li>
              <strong>Search Coins:</strong> Search your specific coin.
            </li>
            <li>
              <strong>Cryptocurrency News:</strong> Displays the latest news and
              updates related to the cryptocurrency market.
            </li>
          </ul>
          <div className="mt-4 flex gap-2 items-center justify-center">
            <PrimaryButton
              text={"Visit Website"}
              icon={""}
              background={"var(--primary-color)"}
              href="https://tanithflory.github.io/crypto-tracker/"
            />
            <PrimaryButton
              text={"Code Base"}
              icon={""}
              background={"var(--blue-color)"}
              href="https://github.com/TanithFlory/crypto-tracker"
            />
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Discord Bot",
    icon: images.Discord,
    modalContents: (
      <>
        <div>
          <p className="mb-2">A dynamic Discord Bot with two key features:</p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm">
            <li>
              <strong>Interactive Chat:</strong> Communicate with the bot via
              chat commands to perform various tasks.
            </li>
            <li>
              <strong>Music Playback:</strong> Play music in voice channels with
              control over playback.
            </li>
          </ul>
          <div className="mt-4 flex gap-2 items-center justify-center">
            <PrimaryButton
              text={"Code Base"}
              icon={""}
              background={"var(--blue-color)"}
              maxWidth="280px"
              href="https://github.com/TanithFlory/Discord-Bot"
            />
          </div>
        </div>
      </>
    ),
  },
  {
    title: "CRUD Application",
    icon: images.WebScraper,
    modalContents: (
      <>
        <div>
          <p className="mb-2">
            A CRUD application that efficiently manages data with a modern tech
            stack. Key features include:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm">
            <li>
              <strong>Frontend:</strong> Built with React.js and styled with
              SASS/SCSS.
            </li>
            <li>
              <strong>Backend:</strong> Uses Express.js and Node.js, with
              MongoDB for data storage and Redis for caching.
            </li>
            <li>
              <strong>Deployment:</strong> Served with Nginx for a blog and a
              React.js app, built with Create React App (CRA) and Vite.
            </li>
            <li>
              <strong>Hosting:</strong> Was previously hosted on AWS and is now
              down.
            </li>
          </ul>
          <div className="mt-4 flex gap-2 items-center justify-center">
            <PrimaryButton
              text={"Code Base"}
              maxWidth="280px"
              icon={""}
              background={"var(--blue-color)"}
              href="https://github.com/TanithFlory/celebritree"
            />
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Social App",
    icon: images.SocialApp,
    modalContents: (
      <>
        <div>
          <p className="mb-2">
            A social app designed to facilitate user interactions with features
            for posting updates, commenting, and liking posts. Key features
            include:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm">
            <li>
              <strong>Post Updates:</strong> Share and view posts from other
              users.
            </li>
            <li>
              <strong>Add Comments:</strong> Engage with posts by adding
              comments.
            </li>
            <li>
              <strong>Give Likes:</strong> Show appreciation for posts and
              comments by liking them.
            </li>
          </ul>
          <p className="mt-2">
            The app is built using React and TypeScript for a dynamic and
            type-safe frontend, and Express.js with MongoDB for a robust
            backend.
          </p>
          <div className="mt-4 flex gap-2 items-center justify-center">
            <PrimaryButton
              text={"Code Base"}
              icon={""}
              maxWidth="280px"
              background={"var(--blue-color)"}
              href="https://github.com/TanithFlory/social-app"
            />
          </div>
        </div>
      </>
    ),
  },
];

export default function Projects() {
  return (
    <Wrapper className="flex flex-col items-center justify-start col-span-2 row-span-2 max-md:col-span-3 h-[470px] px-4">
      <Title title="Projects" icon={images.ProjectsDisplay} />
      <div className="w-full space-y-4 my-6 px-6 ">
        {projectsData.map((item, index) => {
          return <PrimaryCard {...item} key={index} isModal={true} />;
        })}
      </div>
    </Wrapper>
  );
}
