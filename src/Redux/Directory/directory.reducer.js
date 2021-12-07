const initialState = {
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

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
