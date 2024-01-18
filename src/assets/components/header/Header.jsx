
import './header.css'
const Header = ({sortFunctionUp, sortFunctionDown, bestRate, sortAtoZ, sortZtoA, showGenre}) => {

    return ( 
        <>
        <header>
        <button onClick={sortFunctionUp}>sort year up</button>
        <button onClick={sortFunctionDown}>sort year down</button>
        <button onClick={bestRate}>best rate</button>
        <button onClick={sortAtoZ}>A - Z</button>
        <button onClick={sortZtoA}>Z - A</button>
        <div>
        <select onChange={showGenre}>
            <option value="Action">Action</option>
            <option value="Adventure">Adeventure</option>
            <option value="Animation">Animation</option>
            <option value="Biography">Biography</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Family">Family</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Film-Noir">Film-Noir</option>
            <option value="Horror">Horror</option>
            <option value="History">History</option>
            <option value="Music">Music</option>
            <option value="Musical">Musical</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Sport">Sport</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thriller</option>
            <option value="War">War</option>
            <option value="Western">Western</option>
        </select>
        </div>
        </header>
        </>
     );
}
 
export default Header;