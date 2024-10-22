import maldivas10 from '../assets/img/maldivas10.jpeg'
import PropTypes from 'prop-types'

const Maldivas10 = (className) => {
  return (
    <img src={maldivas10} alt='Paisaje de Islas Maldivas' className={`${className} fixed-size-image`}/>
  )
}

Maldivas10.propTypes = {
    className: PropTypes.string
}

export default Maldivas10
