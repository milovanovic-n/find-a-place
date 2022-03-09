import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100'>
        <div className='space-y-4 text-xs text-gray-800'>
          <h5 className='font-bold'>ABOUT</h5>
          <p>How Find-Place works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Find-Place plus</p>
          <p>Find-Place luxe</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
          <h5 className='font-bold'>COMMUNITY</h5>
          <p>Accesibility</p>
          <p>This is not a real site</p>
          <p>Its a pretty clone</p>
          <p>Refferals accepted</p>
          <p>Find-Place fan</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
          <h5 className='font-bold'>HOST</h5>
          <p>Find-Place</p>
          <p>Presents</p>
          <p>Investors</p>
          <p>Zero to Full Stack</p>
          <p>Join now</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
          <h5 className='font-bold'>SUPPORT</h5>
          <p>Find-Place Help</p>
          <p>Trust & Safety</p>
          <p>Investors</p>
          <p>Find-Place plus</p>
          <p>Find-Place luxe</p>
        </div>
    </div>
  )
}

export default Footer