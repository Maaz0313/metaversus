'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => {
  const modifyImageName = (name) => {
    if (name.length <= 6) return name; // Return original name if it's too short
    const nameWithoutSlash = name.slice(1); // Remove the first '/'
    return nameWithoutSlash.slice(0, -4); // Remove last 4 characters
  };
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className='flex flex-col gap-4 md:flex-row'
    >
      <img
        src={imgUrl}
        alt={modifyImageName(imgUrl)}
        className='object-cover w-full h-[250px] rounded-[32px] md:w-[270px]'
      />

      <div className='flex items-center justify-between w-full'>
        <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
          <h4 className='font-normal lg:text-[42px] text-[26px] text-white'>
            {title}
          </h4>
          <p className='mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white'>
            {subtitle}
          </p>
        </div>
        <a
          href='/'
          target='_blank'
          className='hidden items-center justify-center lg:flex size-[100px] rounded-full border-[1px] border-white bg-transparent cursor-pointer'
        >
          <img
            src='arrow.svg'
            alt='arrow'
            className='size-[40%] object-contain'
          />
        </a>
      </div>
    </motion.div>
  );
};

export default InsightCard;
