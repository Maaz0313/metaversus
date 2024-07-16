"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText
        title="| People on the World"
        textStyles="text-center"
      />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="object-cover size-full"
        />
        <img
          src="marker.png"
          alt="marker"
          className="absolute bottom-[32px] right-[61px] h-[122px]"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#414456]">
          <img
            src="people-01.png"
            alt="people"
            className="size-full"
          />
        </div>

        <img
          src="marker.png"
          alt="marker"
          className="absolute top-[34px] left-[60px] h-[122px]"
        />
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#414456]">
          <img
            src="/people-02.png"
            alt="people"
            className="size-full"
          />
        </div>

        <img
          src="marker.png"
          alt="marker"
          className="absolute top-[270px] left-[528px] h-[122px]"
        />
        <div className="absolute top-[275px] left-[547px] w-[70px] h-[70px] p-[6px] rounded-full bg-[#414456]">
          <img
            src="people-03.png"
            alt="people"
            className="size-full"
          />
        </div>

        <div className="absolute top-[34%] left-[21%] w-[196px] h-[150px] p-[6px] border-[#41517f] rounded-[24px] bg-[#5D6680] drop-shadow-[0_0_30px_#995ec7]">
          <img
            src="The Upside Down.png"
            alt="people"
            className="size-full"
          />

          <img
            src="people-04.png"
            className="absolute bottom-12 left-11 size-[24px] object-cover rounded-[24px]"
            alt="avatar"
          />
          <img
            src="people-05.png"
            className="absolute bottom-12 left-[34px] size-[24px] object-cover rounded-[24px]"
            alt="avatar"
          />
          <img
            src="people-06.png"
            className="absolute bottom-12 left-[24px] size-[24px] object-cover rounded-[24px]"
            alt="avatar"
          />
          <p className="absolute bottom-[52px] left-[74px] font-normal text-xs leading-[15px] text-[#FFFFFF]">
            + 264 has joined
          </p>
          <h6 className="absolute bottom-[12px] left-[24px] text-[18px]/[22px] w-full font-bold text-white">
            The Upside Down
          </h6>
        </div>
        <div className="absolute top-[8.4%] right-[21%] w-[196px] h-[150px] p-[6px] border-[#41517f] rounded-[24px] bg-[#5D6680]">
          <img
            src="Hawkins Labs.png"
            alt="people"
            className="size-full"
          />

          <img
            src="people-04.png"
            className="absolute top-[70px] left-11 size-[24px] object-cover rounded-[24px]"
            alt="avatar"
          />
          <img
            src="people-05.png"
            className="absolute top-[70px] left-[34px] size-[24px] object-cover rounded-[24px]"
            alt="avatar"
          />
          <img
            src="people-06.png"
            className="absolute top-[70px] left-[24px] size-[24px] object-cover rounded-[24px]"
            alt="avatar"
          />
          <p className="absolute top-[74px] left-[74px] font-normal text-xs leading-[15px] text-[#FFFFFF]">
            + 264 has joined
          </p>
          <h6 className="absolute top-[106px] left-[22px] text-[18px]/[22px] w-full font-bold text-white">
            Hawkins Labs
          </h6>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
