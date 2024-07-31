import Link from "next/link";

import {
  RiLinkedinLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";
import {
  IoDocumentText
} from "react-icons/io5";
import {
  SiGmail
} from "react-icons/si";

export const socialData = [

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sunil-shuraj-n/",
    Icon: RiLinkedinLine,
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/shuraj_03/",
    Icon: RiInstagramLine,
  },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/1bOjqItGQ_9WB3xS7XEsRZw8pj53ErpzP/view?usp=sharing",
    Icon: IoDocumentText ,
  },
  {
    name: "Mail",
    link: "mailto:sunilshruaj.n@gmail.com",
    Icon: SiGmail,
  },
  {
    name: "Github",
    link: "https://github.com/shuraj03",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
