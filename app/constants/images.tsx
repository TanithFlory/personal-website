import { FaFlag } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

const styles = "fill-primary h-[15px] w-[15px]";

const images: Record<string, JSX.Element> = {
  Projects: <FaFlag className={styles}/>,
  Experience:<IoStar className={styles}/>,
  Clients:<IoPerson className={styles}/>
};

export default images;
