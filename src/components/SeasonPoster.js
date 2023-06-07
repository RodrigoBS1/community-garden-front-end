import summer from '../images/cg6.jpeg'
import fall from '../images/cg7.jpeg'
import winter from '../images/cg8.jpeg'
import spring from '../images/cg9.jpeg'

const SeasonPoster = ( {season} ) => {

    const choosePic = ({season}) => {
        switch (season) {
            case 'Summer':
                return summer
                break
            case 'Fall':
                return fall
                break
            case 'Winter':
                return winter
                break
            case 'Spring':
                return spring
                break
        }
    }
    
    const handleClick = event =>{
        <SeasonInfo season={season}/>
    }

    return(
        <div className="seasonPoster">
            <div className="seasonImgBox">
                <img 
                src= {choosePic({season})} 
                className="seasonImg"
                onclick={handleClick}
                />
            </div>
            <h1> {season} </h1>
        </div>
    )
}
export default SeasonPoster