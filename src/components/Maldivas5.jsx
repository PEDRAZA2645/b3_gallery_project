import maldivas5 from '../assets/img/maldivas5.jpeg'
import PropTypes from 'prop-types'

const Maldivas5 = (className) => {
  return (
    <img src={maldivas5} alt='Paisaje de Islas Maldivas' className={`${className} fixed-size-image`} />
  )
}

Maldivas5.propTypes = {
  className: PropTypes.string
}

export default Maldivas5
