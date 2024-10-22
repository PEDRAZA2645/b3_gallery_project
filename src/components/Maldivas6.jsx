import maldivas6 from '../assets/img/maldivas6.jpeg'
import PropTypes from 'prop-types'

const Maldivas6 = (className) => {
  return (
    <img src={maldivas6} alt='Paisaje de Islas Maldivas' className={`${className} fixed-size-image`} />
  )
}

Maldivas6.propTypes = {
  className: PropTypes.string
}

export default Maldivas6
