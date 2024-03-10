import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
function Products() {
  const Products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      url: "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
      color: "bg-red-200",
      bgimage:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c621a3aa0ee3ae147d692_arqitel-bg-p-2000.webp",
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
      url: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
      color: "bg-red-200",
      bgimage:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41319bda140bccae204ae_bg%202.png",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
      url: "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
      color: "bg-red-200",
      bgimage:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299a728ba3624405c1f46_Year%20in%20Review%202022%20bg-p-1600.png",
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: true,
      url: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
      color: "bg-red-200",
      bgimage:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2ccf5af18668cfbd3a8d6_bg%201-p-1600.png",
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
      url: "https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm",
      color: "bg-red-200",
      bgimage:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/6450586e80fac7eb1655014f_yir2022%E2%80%93bg-p-2000.png",
    },
    {
      title: "Summon",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
      url: "https://cdn.refokus.com/website/2022/videos/summon.webm",
      color: "bg-red-200",
      bgimage:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/63529a2b9a478df1ef5a0435_Haufe.de%20bg-p-1600.png",
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
      url: "https://cdn.refokus.com/website/2022/videos/rainfall.webm",
      color: "bg-red-200",
      bgimage:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299ec9a478d08095a0122_Rainfall%20bg-p-1600.png",
    },
    {
      title: "Jungle",
      description:
        "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
      live: true,
      case: false,
      url: "https://cdn.refokus.com/website/jungle-4-3-.webm",
      color: "bg-red-200",
      bgimage:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/63ede953b6b5f3582560753a_Work%20Background-p-2000.jpg",
    },
    {
      title: "Silvr",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
      case: false,
      url: "https://cdn.refokus.com/website/2022/videos/Silvr.webm",
      bgimage:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64b7dbf5f12bc6fafbfb90fa_Candid%20Work%20Background.jpg",
    },
    {
      title: "Remind",
      description:
        "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
      live: true,
      case: true,
      url: "https://cdn.refokus.com/website/2022/videos/remind.webm",
      color: "bg-red-200",
      bgimage:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/63529a2191211c3ebc67e4b7_Remind%20bg-p-1600.png",
    },
    {
      title: "Like Magic",
      description:
        "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      live: true,
      case: true,
      url: "https://cdn.refokus.com/website/2022/videos/weglotlikemagic.webm",
      color: "bg-red-200",
      bgimage:
      "https://assets-global.website-files.com/6334198f239547f2fccd84c1/637e6790db842e13a0e0aa51_Work-Background-p-2000.png",
     },
    {
      title: "Rocket",
      description:
        "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
      live: true,
      case: true,
      url: "https://cdn.refokus.com/website/2022/videos/rocketchat.webm",
      bgimage:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/635299c0532977f3221f06f5_Summon%20bg-p-2000.png",
     },
    {
      title: "Showcase",
      description:
        "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
      live: true,
      case: false,
      url: "https://cdn.refokus.com/refokus-redesign/showcase_4_3.mp4",
      color: "bg-red-800",
      bgimage:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/6352999803e7fe5651137f1e_Showcase%20Website%20bg-p-1600.png",
    },
  ];
  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };
  return (
    <div className="relative mt-32 ">
      {Products.map((items, index) => (
        <Product key={index} items={items} index={index} mover={mover} />
      ))}
      <div className="window absolute top-0 pointer-events-none w-full h-full ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.6 }}
          className="window absolute left-1/2 w-[32rem] h-[23rem] overflow-hidden"
        >
          {Products.map((items, index) => (
            <motion.div
              key={index}
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.4 }}
              className="w-full h-full rounded-xl overflow-hidden"
            >
              <video src={items.url} autoPlay muted loop></video>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
