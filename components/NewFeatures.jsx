import styles from '../styles';
const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className='flex flex-col flex-1 sm:max-w-[250px] min-w-[210px]'>
    <div
      className={`${styles.flexCenter} size-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <img
        src={imgUrl}
        alt='icon'
        className='object-contain size-1/2'
      />
    </div>
    <h1 className='mt-[26px] font-bold text-[24px] leading-[30px] text-white'>
      {title}
    </h1>
    <p className='mt-[16px] font-normal text-[18px] leading-[32px] text-[#B0B0B0] flex-1'>
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;