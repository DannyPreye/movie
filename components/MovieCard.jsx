const MovieCard = ({ name, img, className }) => {
  return (
    <div
      className={`${className} w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-[12px] overflow-hidden bg-primary-900 grid place-items-center`}
    >
      <p className='font-dms font-[400] text-[24px] text-primary-100 leading-[31px] text-center'>
        {name}
      </p>
    </div>
  );
};
export default MovieCard;
