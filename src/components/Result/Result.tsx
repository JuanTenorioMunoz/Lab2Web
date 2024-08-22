import "./Result.css";
import movies from "../../../public/data/movies"

type ResultProps = {
    genre: string;
    year: number;
}

const Result = ({ genre, year }: ResultProps) => {
    
    const filteredMovies = movies.filter(movie => 
        movie.genre === genre && movie.releaseYear === year
    );

    const randomMovie = filteredMovies.length > 0 ? 
        filteredMovies[Math.floor(Math.random() * filteredMovies.length)] : null;

    if(randomMovie != null) {
        return (
        <article className="Result">
        <img src={randomMovie.poster} alt={randomMovie.name} className="poster" />
        <h2 className="title">{randomMovie.name}</h2>
        <p className="genre">Genre: {randomMovie.genre}</p>
        <p className="releaseYear">Release Year: {randomMovie.releaseYear}</p>
        </article>
    )}
    
}

export default Result;