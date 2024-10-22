import maldivas3 from '../assets/img/maldivas3.jpeg'
import PropTypes from 'prop-types'

const Maldivas3 = (className) => {
  return (
    <img src={maldivas3} alt='Paisaje de Islas Maldivas' className={`${className} fixed-size-image`} />
  )
}

Maldivas3.propTypes = {
  className: PropTypes.string
}

export default Maldivas3
