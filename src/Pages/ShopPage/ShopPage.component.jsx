import React from 'react'
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview'
import Shop_Data from '../../shop.data'
class ShopPage extends React.Component {
  constructor() {
    super()
    this.state = {
      collections: Shop_Data,
    }
  }
  render() {
    const { collections } = this.state
    console.log({ collections })
    return (
      <div className='collection'>
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage
