import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'

function Stars(props) {
    let restOfStar = Math.abs(props.stars - parseInt(props.stars).toFixed())
    if (props.stars === 0) {
        return (
            <>
            <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
            <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
            <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
            <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
            <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
            </>
        );
    } else if (props.stars >= 5) {
        return (
            <>
            <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
            <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
            <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
            <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
            <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
            </>
        );
    }
    if (props.stars === (1 + restOfStar)) {
        if (restOfStar !== 0) {
            return (
                <>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStarHalfAlt} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
                </>
            );
        } else {
            return (
                <>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
                </>
            );
        }
    } else if (props.stars === (2 + restOfStar)) {
        if (restOfStar !== 0) {
            return (
                <>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStarHalfAlt} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
                </>
            );
        } else {
            return (
                <>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
                </>
            );
        }
    } else if (props.stars === (3 + restOfStar)) {
        if (restOfStar !== 0) {
            return (
                <>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStarHalfAlt} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
                </>
            );
        } else {
            return (
                <>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
                </>
            );
        }
    } else if (props.stars === (4 + restOfStar)) {
        if (restOfStar !== 0) {
            return (
                <>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStarHalfAlt} /></span></a></li>
                </>
            );
        } else {
            return (
                <>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStar} /></span></a></li>
                <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
                </>
            );
        }
    } else if (props.stars === (0 + restOfStar)) {
        return (
            <>
            <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={faStarHalfAlt} /></span></a></li>
            <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
            <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
            <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
            <li><a href="#"><span aria-hidden="true"><FontAwesomeIcon icon={regularStar} /></span></a></li>
            </>
        );
        
    }
  }
  
  export default Stars;
  