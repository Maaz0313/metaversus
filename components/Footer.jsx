"use client";
import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.xPaddings} py-32 pb-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h4 className="text-[44px] md:text-[64px] font-bold text-white">
          Enter the Metaverse
        </h4>
        <button
          type="button"
          className="flex items-center px-6 py-4 h-fit bg-[#25618B] rounded-[32px] text-white text-base gap-3"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="object-contain size-6"
          />
          <span className="text-base/[20.16px] font-normal">
            ENTER METAVERSE
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-0.5 bg-white/10" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h4 className="text-2xl font-extrabold text-white">METAVERSUS</h4>
          <p className="text-sm font-normal text-white/50">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={social.url}
                  alt={social.name}
                  className="object-contain size-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
