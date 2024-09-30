import { motion } from 'framer-motion'

export default function Answer ({ s, handleClick }) {
  return (
    <motion.li
      // className='answer'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className='answer'
    // onTapCancel={{ scale: 1.9 }}
    >

        <p>{s}</p>
        <div className='wrongMark'>
          <span>X</span>
        </div>
        <div className='correctMark'>
          <span>✔</span>
        </div>
    </motion.li>
  )
}
