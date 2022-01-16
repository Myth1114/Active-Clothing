import React from 'react'
import HeroSection from '../Components/HeroSection'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../Redux/Directory/directory.selector'
import { connect } from 'react-redux'
const Directory = ({ section }) => {
  console.log(section)
  return (
    <div className='Directory'>
      {/* {this.state.secttion.map(({ title, id, imageUrl }) => (
          <HeroSection key={id} title={title} />
        ))} */}
      <HeroSection section={section} />
      {/* {section.map((el, index) => {
        return (
          <ul key={index}>
            <li>
              <a href='/#'>{el.title}</a>
            </li>
          </ul>
        )
      })} */}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  section: selectDirectorySections,
})
export default connect(mapStateToProps)(Directory)
