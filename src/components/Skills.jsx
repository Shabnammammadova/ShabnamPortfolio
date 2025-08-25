"use client";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Html",
    img: "https://devicon-website.vercel.app/api/html5/original-wordmark.svg",
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    img: "https://devicon-website.vercel.app/api/css3/original-wordmark.svg",
    link: "https://css-tricks.com/",
  },
  {
    name: "SASS",
    img: "https://devicon-website.vercel.app/api/sass/original.svg",
    link: "https://sass-lang.com/",
  },
  {
    name: "Bootstrap",
    img: "https://devicon-website.vercel.app/api/bootstrap/original-wordmark.svg",
    link: "https://getbootstrap.com/",
  },
  {
    name: "Tailwind",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
    link: "https://tailwindcss.com/",
  },
  {
    name: "JavaScript",
    img: "https://devicon-website.vercel.app/api/javascript/original.svg",
    link: "https://javascript.info/",
  },
  {
    name: "TypeScript",
    img: "https://devicon-website.vercel.app/api/typescript/original.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
    link: "https://react.dev/",
  },
  {
    name: "Redux",
    img: "https://devicon-website.vercel.app/api/redux/original.svg",
    link: "https://redux.js.org/",
  },
  {
    name: "Material UI",
    img: "https://devicon-website.vercel.app/api/materialui/original.svg",
    link: "https://mui.com/material-ui/",
  },
  {
    name: "Ant D",
    img: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    link: "https://ant.design/",
  },
  {
    name: "Chakra UI",
    img: "https://www.coffeeclass.io/logos/chakra-ui.png",
    link: "https://chakra-ui.com/",
  },
  {
    name: "Styled Components",
    img: "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png",
    link: "https://styled-components.com/",
  },
  {
    name: "Node.js",
    img: "https://devicon-website.vercel.app/api/nodejs/original-wordmark.svg",
    link: "https://nodejs.org/en",
  },
  {
    name: "Express.js",
    img: "https://devicon-website.vercel.app/api/express/original-wordmark.svg",
    link: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    img: "https://devicon-website.vercel.app/api/mongodb/original.svg",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Git",
    img: "https://devicon-website.vercel.app/api/git/original-wordmark.svg",
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    img: "https://devicon-website.vercel.app/api/github/original-wordmark.svg",
    link: "https://github.com/",
  },
  {
    name: "Figma",
    img: "https://devicon-website.vercel.app/api/figma/original.svg",
    link: "https://www.figma.com/",
  },
  {
    name: "Vercel",
    img: "https://pipedream.com/s.v0/app_XaLh2x/logo/orig",
    link: "https://vercel.com",
  },
  {
    name: "Netlify",
    img: "https://raw.githubusercontent.com/detain/svg-logos/master/svg/n/netlify.svg",
    link: "https://www.netlify.com/",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-4 text-white w-full bg-black font-clash font-bold"
    >
      <h2 className="text-6xl font-semibold pt-6 text-purple-700 text-center mb-12 font-playfair">
        Skills
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden 
  w-full 
  xs:max-w-full 
  sm:max-w-full"
      >
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
        >
          {skills.concat(skills).map((skill, index) => (
            <motion.a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1b24] text-white font-clash font-bold p-5 rounded-xl flex flex-col gap-2 text-center items-center justify-center border border-transparent hover:border-purple-600 transition duration-300 min-w-[150px] h-36 border-t-2 border-t-violet-700 
  xs:min-w-[120px] xs:h-28 xs:p-3 xs:gap-1"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 object-contain xs:w-12 xs:h-12"
              />
              <span className="text-lg font-bold font-clash xs:text-sm">
                {skill.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
