import { FaFlag } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { MdCurrencyBitcoin } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import CLanguage from "../../public/C.svg";
import CPlusPlus from "../../public/C++.svg";
import HTML from "../../public/html.svg";
import CSS from "../../public/css.svg";
import TailwindCSS from "../../public/tailwind.svg";
import Javascript from "../../public/javascript.svg";
import Typescript from "../../public/typescript.svg";
import MongoDB from "../../public/mongodb.svg";
import MySql from "../../public/mysql.svg";
import PrismaDB from "../../public/prisma.svg";
import Git from "../../public/git.svg";
import Postman from "../../public/postman.svg";
import Docker from "../../public/docker.svg";
import Bash from "../../public/bash.svg";
import Nodejs from "../../public/nodejs.svg";
import Nginx from "../../public/nginx.svg";
import AWS from "../../public/aws.svg";
import Reactjs from "../../public/react.svg";
import Angularjs from "../../public/angular.svg";
import Nextjs from "../../public/next.svg";
import SCSS from "../../public/sass.svg";
import Expressjs from "../../public/express.svg";
import Shopify from "../../public/shopify.svg";
import Redis from "../../public/redis.svg";
import { CiMicrochip } from "react-icons/ci";
import { MdDeveloperMode } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdTimer } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AetherByte from "../../public/Aetherbyte.jpg";
import Modo from "../../public/modo.png";

const styles = "fill-primary h-[15px] w-[15px]";
const cardStyles = "fill-primary h-[22px] w-[22px]";
const tagStyles = "fill-primary h-[12px] w-[12px]";
const images: Record<string, any> = {
  Projects: <FaFlag className={styles} />,
  Experience: <IoStar className={styles} />,
  Clients: <IoPerson className={styles} />,
  ProjectsDisplay: <AiFillProject className="fill-primary h-[25px] w-[25px]" />,
  CryptoCurrency: <MdCurrencyBitcoin className={cardStyles} />,
  WebScraper: <FaGlobeAmericas className={cardStyles} />,
  Discord: <FaDiscord className={cardStyles} />,
  Crud: <IoIosCreate className={cardStyles} />,
  SocialApp: <IoShareSocial className={cardStyles} />,
  MicroController: <CiMicrochip className={tagStyles} />,
  Language: <IoLanguage className={tagStyles} />,
  Time: <IoMdTimer className={tagStyles} />,
  Location: <IoLocationSharp className={tagStyles} />,
  Developer: <MdDeveloperMode className={tagStyles} />,
  MERN: <FaReact className={tagStyles} />,
  Email: <MdEmail className={cardStyles} />,
  HTML,
  CSS,
  TailwindCSS,
  Javascript,
  Typescript,
  C: CLanguage,
  "C++": CPlusPlus,
  MongoDB,
  MySql,
  PrismaDB,
  Git,
  Postman,
  Docker,
  Bash,
  Nodejs,
  AWS,
  Reactjs,
  Angularjs,
  Nextjs,
  Expressjs,
  Nginx,
  SCSS,
  Shopify,
  Redis,
  AetherByte,
  Modo,
};

export default images;
