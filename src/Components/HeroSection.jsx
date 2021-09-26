import React from 'react'
import './HeroSection.scss'
import { withRouter } from 'react-router-dom'
import HomeCarousel from './Carousel/Carousel'
// import { Link } from 'react-router-dom'
const Category = ({ section, match, history }) => {
  console.log(section)
  return (
    <section className='HeroSection'>
      <div className='productCategories'>
        <div className='productCategories__heading'>All Categories</div>
        <div className='productCategories__lists'>
          {section.map((el, index) => {
            return (
              <ul key={index}>
                <li>
                  <a href='/#'>{el.title}</a>
                </li>
              </ul>
            )
          })}
        </div>
      </div>
      {/* <div className='AllCategory'>
        <h2>All Categories</h2>
        {section.map((data, key) => {
          return (
            <div>
              <h2>{data.title}</h2>
              <h3>{data.linkUrl}</h3>
            </div>
          )
        })}
      </div> */}
      <div className='Carousel'>
        <HomeCarousel />
      </div>
      <div className='TopDeals'>TopDeals</div>
      <div className='SubCategories'>
        {/* <h2>Sub Categories</h2> */}
        <div className='subCategory'>
          {section.map((el, index) => {
            return (
              <div key={index} className='subCategoryItems'>
                <div
                  className='subCategoryItems__image'
                  onClick={() => history.push(`${match.url}${el.linkUrl}`)}
                >
                  <img className='' src={el.imageUrl} alt='missing'></img>
                </div>
                <span className='subCategoryItems__text'>{el.title}</span>
              </div>
            )
          })}
        </div>
      </div>
      <span></span>
    </section>
  )
}

export default withRouter(Category)
