import maldivas8 from '../assets/img/maldivas8.jpeg'
import PropTypes from 'prop-types'

const Maldivas8 = (className) => {
  return (
    <img src={maldivas8} alt='Paisaje de Islas Maldivas' className={`${className} fixed-size-image`} />
  )
}

Maldivas8.propTypes = {
  className: PropTypes.string
}

export default Maldivas8
