import { Carousel } from 'react-carousel-minimal'

function HomeCarousel() {
  const data = [
    {
      image: '/Images/Hello There, Welcome to Zinniprime.png',
      // caption: `<div>
      //             San Francisco
      //             <br/>
      //             Next line
      //           </div>`,
    },
  ]

  // const captionStyle = {
  //   fontSize: '2em',
  //   fontWeight: 'bold',
  // }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className='Carousel'>
      <div style={{ textAlign: 'center' }}>
        {/* <h2>React Carousel Minimal</h2>
        <p>
          Easy to use, responsive and customizable carousel component for React
          Projects.
        </p> */}
        <div
          style={{
            padding: '0 1px',
          }}
        >
          <Carousel
            data={data}
            time={2000}
            // width='850px'
            // height='500px'
            // captionStyle={captionStyle}
            radius='10px'
            // slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition='bottom'
            automatic={true}
            dots={true}
            pauseIconColor='white'
            // pauseIconSize='40px'
            slideBackgroundColor='darkgrey'
            slideImageFit='contained'
            // thumbnails={true}
            // thumbnailWidth='100px'
            style={{
              textAlign: 'center',
              // maxWidth: '850px',
              // maxHeight: '500px',
              margin: '0 auto',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default HomeCarousel
