import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "/src/assets/HomePageText.png";
import HomePageGraphic from "/src/assets/girl.jpg";
import SponsorRedBull from "/src/assets/SponsorRedBull.png";
import SponsorFortune from "/src/assets/SponsorFortune.png";
import SponsorForbes from "/src/assets/SponsorForbes.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="bg-gray-20 gap-16 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="h-5/6 w-5/6 items-center justify-center md:mx-auto md:flex"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MANE HADER */}
        <div className=" z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className=" md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <img alt="home-page-text" src={HomePageText} />
            </div>
            <p className="mt-8 text-sm text-primary-500">
              Yoga is a mind and body practice. Various styles of yoga combine
              physical postures, breathing techniques, and meditation or
              relaxation.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="hover: text-sm font-bold text-primary-500 
          underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            ></AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center
        md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-48">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
