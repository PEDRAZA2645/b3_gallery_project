import maldivas7 from '../assets/img/maldivas7.jpeg'
import PropTypes from 'prop-types'

const Maldivas7 = (className) => {
  return (
    <img src={maldivas7} alt='Paisaje de Islas Maldivas' className={`${className} fixed-size-image`} />
  )
}

Maldivas7.propTypes = {
  className: PropTypes.string
}

export default Maldivas7
