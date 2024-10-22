import maldivas2 from '../assets/img/maldivas2.jpeg'
import PropTypes from 'prop-types'

const Maldivas2 = (className) => {
  return (
    <img src={maldivas2} alt='Paisaje de Islas Maldivas' className={`${className} fixed-size-image`} />
  )
}

Maldivas2.propTypes = {
  className: PropTypes.string
}

export default Maldivas2
