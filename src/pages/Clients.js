import React from 'react'

const Clients = () => {
  return (
    <div>
      <div className='ourClient-container'>
      <div className='our-clients'>
        <p>Our Clients</p>
      </div>
      <div>
        <div className='client-logos clientStyle'>
          <img src={require('../assets/images/icon.png')} alt='client1' />
          <img src={require('../assets/images/icon.png')} alt='client2' />
          <img src={require('../assets/images/icon.png')} alt='client3' />
          <img src={require('../assets/images/icon.png')} alt='client1' />
          <img src={require('../assets/images/icon.png')} alt='client2' />
          <img src={require('../assets/images/icon.png')} alt='client3' />
          <img src={require('../assets/images/icon.png')} alt='client1' />
          <img src={require('../assets/images/icon.png')} alt='client2' />
          <img src={require('../assets/images/icon.png')} alt='client3' />
          <img src={require('../assets/images/icon.png')} alt='client1' />
          <img src={require('../assets/images/icon.png')} alt='client2' />
          <img src={require('../assets/images/icon.png')} alt='client3' />
          <img src={require('../assets/images/icon.png')} alt='client1' />
          <img src={require('../assets/images/icon.png')} alt='client2' />
        </div>
      </div>
      <div className='cta-container'>
      <div className='cta-header'>
      <p>CTA Section</p>
      </div>
      <p className='cta-content'>Lorem ipsum dolor sit amet consectetur. A convallis non praesent ultricies vivamus eget urna aliquam.</p>
      <div className="flex justify-center py-6 relative z-10">
                    {/* <Button variant='contained' className="cta-btn" sx={{borderRadius:"25px",backgroundColor:"#222D37"}} endIcon={<ArrowForward/>}>Contact Us</Button> */}
                </div>
      </div>
    </div>
    </div>
  )
}

export default Clients
