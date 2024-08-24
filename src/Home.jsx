import React from 'react'

function Home() {
  return (
    <div>
        <video controls width="100%" loop autoPlay={true}>
            <source type="video/mp4" src='pizzaeating.mp4'/>
        </video>
    </div>
  )
}

export default Home