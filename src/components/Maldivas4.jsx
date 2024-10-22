import maldivas4 from '../assets/img/maldivas4.jpeg'
import PropTypes from 'prop-types'

const Maldivas4 = (className) => {
  return (
    <img src={maldivas4} alt='Paisaje de Islas Maldivas' className={`${className} fixed-size-image`} />
  )
}

Maldivas4.propTypes = {
  className: PropTypes.string
}

export default Maldivas4
