import React from 'react'
import HeroSection from '../Components/HeroSection'

class Directory extends React.Component {
  constructor() {
    super()
    this.state = {
      section: [
        {
          title: 'hats',
          imageUrl: '/Images/hats.jpg',
          id: 1,
          linkUrl: 'shop/hats',
        },
        {
          title: 'jackets',
          imageUrl: '/Images/jackets.jpeg',
          id: 2,
          linkUrl: 'shop/jackets',
        },
        {
          title: 'sneakers',
          imageUrl: '/Images/sneakers.jpeg',
          id: 3,
          linkUrl: 'shop/sneakers',
        },
        {
          title: 'womens',
          imageUrl: '/Images/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens',
        },
        {
          title: 'mens',
          imageUrl: '/Images/mens.jpeg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
        },
      ],
    }
  }
  render() {
    return (
      <div className='Directory'>
        {/* {this.state.secttion.map(({ title, id, imageUrl }) => (
          <HeroSection key={id} title={title} />
        ))} */}
        <HeroSection section={this.state.section} />
      </div>
    )
  }
}

export default Directory
