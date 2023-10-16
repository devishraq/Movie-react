import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

const App = () => {
 const [movies, setMovies] = useState([]);
 const [input, setInput] = useState("jurassic");

 useEffect(() => {
  axios
   .get(`https://www.omdbapi.com/?apikey=e634d22c&s=${input}&type=movie`)
   .then((_) => setMovies(_.data.Search))
   .catch((_) => console.log(_));
 }, []);

 const handleClick = () => {
  axios
   .get(`https://www.omdbapi.com/?apikey=e634d22c&s=${input}&type=movie`)
   .then((_) => setMovies(_.data.Search));
 };

 const handleInput = (_) => setInput(_.target.value);

 return (
  <div className='min-h-screen h-fit w-full p-6'>
   <div>
    <h1 className='pt-10 text-4xl text-center text-slate-50'>Movie Market</h1>
    <div className='grid justify-center mt-8'>
     <div className='flex'>
      <input
       type='text'
       className='max-w-lg w-[420px] border-gray-300 rounded-sm py-3 px-3 focus:outline-none focus:border-indigo-500'
       placeholder='search for movies....'
       value={input}
       onChange={handleInput}
      />
      <button
       type='button'
       className='bg-gray-800  border border-gray-700 text-white ml-3 py-2 px-4 rounded-sm'
       onClick={handleClick}
      >
       Search
      </button>
     </div>
    </div>
   </div>

   <div className='justify-center mx-16 my-16 flex flex-wrap gap-10'>
    {movies.map((movie, index) => {
     return (
      <MovieCard
       key={index * Math.random()}
       poster={movie.Poster}
       title={movie.Title}
      />
     );
    })}
   </div>
  </div>
 );
};

export default App;
