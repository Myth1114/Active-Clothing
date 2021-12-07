import React from 'react'
import './HeroSection.scss'
import { withRouter } from 'react-router-dom'
import HomeCarousel from './Carousel/Carousel'
// import { Link } from 'react-router-dom'
const Category = ({ section, match, history }) => {
  console.log('this is section', match)
  return (
    <section className='HeroSection'>
      <div className='productCategories'>
        <div className='PrimaryHeading'>All Categories</div>
        <div className='productCategories__lists'>
          {section.map((el, index) => {
            return (
              <ul key={index}>
                <li onClick={() => history.push(`${match.url}${el.linkUrl}`)}>
                  <span>{el.title}</span>
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
      <div className='TopDeals'>
        <div className='PrimaryHeading'> TopDeals</div>

        <div className='TopDealsBox'>
          <div className='TopDealsBox__Items'>
            <img
              className='TopDealsBox__Items--Image'
              src='/Images/mens.jpeg'
              alt=''
            ></img>
            <span className='TopDealsBox__Items--Text'>35% OFF</span>
          </div>
          <div className='TopDealsBox__Items'>
            <img
              className='TopDealsBox__Items--Image'
              src='/Images/jackets.jpeg'
              alt=''
            ></img>
            <span className='TopDealsBox__Items--Text'>20% OFF</span>
          </div>
          <div className='TopDealsBox__Items'>
            <img
              className='TopDealsBox__Items--Image'
              src='/Images/hats.jpg'
              alt=''
            ></img>
            <span className='TopDealsBox__Items--Text'>20% OFF</span>
          </div>
          <div className='TopDealsBox__Items'>
            <img
              className='TopDealsBox__Items--Image'
              src='/Images/sneakers.jpeg'
              alt=''
            ></img>
            <span className='TopDealsBox__Items--Text'>20% OFF</span>
          </div>
        </div>
      </div>
      <div className='SubCategories'>
        {/* <h2>Sub Categories</h2> */}
        <div className='subCategory'>
          {section.map((el, index) => {
            return (
              <div key={index} className='image_wrap'>
                <img src={el.imageUrl} alt='missing' />
                <div
                  className='grad dark_edge'
                  onClick={() => history.push(`${match.url}${el.linkUrl}`)}
                ></div>
                <div className='image_text'>{el.title}</div>
              </div>

              // <div key={index} className='subCategoryItems'>
              //   <div
              //     className='subCategoryItems__image'
              //     onClick={() => history.push(`${match.url}${el.linkUrl}`)}
              //   >
              //     <img className='' src={el.imageUrl} alt='missing'></img>
              //   </div>
              //   <span className='subCategoryItems__text'>{el.title}</span>
              // </div>
            )
          })}
        </div>
      </div>
      <span></span>
    </section>
  )
}

export default withRouter(Category)
