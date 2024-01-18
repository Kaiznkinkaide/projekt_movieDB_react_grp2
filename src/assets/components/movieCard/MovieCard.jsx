import './moviecard.css'
const MovieCard = ({title, year, director, duration, genre, rating}) => {
    return ( 
        <>
        <p>{title}</p>
        <p>{year}</p>
        <p>{director}</p>
        <p>{duration}</p>
        <p>{rating}</p>
        {genre.map ((genre) =>
        <p>{genre}</p>
        )}
        </>
     );
}
 
export default MovieCard;