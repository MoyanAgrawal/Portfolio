import Link from "next/link";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
//   FaYoutube,
//   FaTwitter,
// } from "react-icons/fa";
import { socials } from "@/constants/path";
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, idx) => {
        return (
          <Link href={item.path} className={iconStyles} key={idx}>
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
