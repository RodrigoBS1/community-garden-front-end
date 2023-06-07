import summer from '..images/cg6.jpg'
import fall from '..images/cg7.jpg'
import winter from '..images/cg8.jpg'
import spring from '..images/cg9.jpg'

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

    return(
        <div className="seasonPoster">
            <div className="seasonImgBox">
                <img src= {choosePic({season})} className="seasonImg"/>
            </div>
            <h1 className> {season} </h1>
        </div>
    )
}
export default SeasonPoster