import Image from 'next/image';
const Hero = () => {
  return (
    <div className='h-[257px] md:h-[550px] flex items-start justify-center xl:justify-start relative'>
      <Image src='/ima.png' fill alt='image' />
      Hero
    </div>
  );
};

export default Hero;
