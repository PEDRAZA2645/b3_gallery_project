

import maldivas9 from '../assets/img/maldivas9.jpeg'
import PropTypes from 'prop-types'

const Maldivas9 = (className) => {
  return (
    <img src={maldivas9} alt='Paisaje de Islas Maldivas' className={`${className} fixed-size-image`} />
  )
}

Maldivas9.propTypes = {
  className: PropTypes.string
}

export default Maldivas9
