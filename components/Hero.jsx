import Image from 'next/image';
const Hero = () => {
  return (
    <div className='h-[257px] w-[100%] md:h-[550px] flex items-center justify-center xl:justify-start relative'>
      <Image src='/ima.png' fill alt='image' />
      <h1 className='xl:ml-[77px] w-[273px]  md:w-[490px] flex-wrap font-[700] text-[28px] md:text-[72px] flex justify-center gap-2 md:gap-0 xl:flex-col z-10 text-primary-100'>
        <span>Watch</span>
        <span>Something</span>
        <span>Incredible</span>
      </h1>
    </div>
  );
};

export default Hero;
