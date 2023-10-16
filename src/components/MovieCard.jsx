const MovieCard = ({ poster, title }) => {
 return (
  <div className='border border-gray-900 shadow-2xl shadow-gray-900 mb-[5.8rem] rounded-md flex flex-col max-w-[200px] w-[200px] h-48 p-7   '>
   <img className='rounded-md w-auto h-48' src={poster} alt='poster' />
   <p className='mt-3 text-base  text-center text-slate-100'>{title}</p>
  </div>
 );
};

export default MovieCard;
