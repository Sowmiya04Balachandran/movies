// import React from 'react';

// import Movie from './Movie';
// import classes from './MoviesList.module.css';

// const MovieList = (props) => {
//   return (
//     <ul className={classes['movies-list']}>
//       {props.movies.map((movie) => (
//         <Movie
//           key={movie.id}
//           title={movie.title}
//           releaseDate={movie.releaseDate}
//           openingText={movie.openingText}
//         />
//       ))}
//     </ul>
//   );
// };

// export default MovieList


import React from 'react';
import Movie from './Movie';
import classes from './MoviesList.module.css';

const MoviesList = (props) => {
  const { movies, onDeleteMovie } = props;

  const handleDelete = (id) => {
    onDeleteMovie(id);
  };

  return (
    <ul className={classes['movies-list']}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Movie
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
          <button onClick={() => handleDelete(movie.id)}>Delete Movie</button>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
