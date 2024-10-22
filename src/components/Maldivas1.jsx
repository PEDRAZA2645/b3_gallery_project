import maldivas1 from '../assets/img/maldivas1.jpeg'
import PropTypes from 'prop-types'

const Maldivas1 = ({className}) => {
  return (
    <img src={maldivas1} alt='Paisaje de Islas Maldivas' className={`${className} fixed-size-image`} />
  )
}

Maldivas1.propTypes = {
  className: PropTypes.string
}

export default Maldivas1
