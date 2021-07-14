import { MovieCard } from './MovieCard';

import '../styles/content.scss';

interface MovieProps {
  movies: {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }[];
  selectedGenreTitle: string;
  
}


export function Content(props: MovieProps) {
  // Complete aqui
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {props.selectedGenreTitle}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}