import summer from '..images/summer.png'
import fall from '..images/fall.png'
import winter from '..images/winter.png'
import spring from '..images/spring.png'

const SeasonPoster = ( {season} ) => {

    const choosePic = ({season}) => {
        switch (season) {
            case 'Summer':
                return '../images/summer.png'
                break
            case 'Fall':
                return '../images/fall.png'
                break
            case 'Winter':
                return '../images/winter.png'
                break
            case 'Spring':
                return '../images/spring.png'
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