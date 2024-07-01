import { FaFlag } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { MdCurrencyBitcoin } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";

const styles = "fill-primary h-[15px] w-[15px]";
const cardStyles = "fill-primary h-[22px] w-[22px]";
const images: Record<string, JSX.Element> = {
  Projects: <FaFlag className={styles} />,
  Experience: <IoStar className={styles} />,
  Clients: <IoPerson className={styles} />,
  ProjectsDisplay: <AiFillProject className='fill-primary h-[25px] w-[25px]' />,
  CryptoCurrency: <MdCurrencyBitcoin className={cardStyles} />,
  WebScraper: <FaGlobeAmericas className={cardStyles} />,
  Discord: <FaDiscord className={cardStyles} />,
  Crud: <IoIosCreate className={cardStyles} />,
  SocialApp: <IoShareSocial className={cardStyles} />,
};

export default images;
