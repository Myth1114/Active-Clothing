import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Directory from '../../Directory/Directory'

const Homepage = ({ currentuser }) => {
  return (
    <div className='Homepage'>
      <Directory />
      <Banner />
    </div>
  )
}

export default Homepage
