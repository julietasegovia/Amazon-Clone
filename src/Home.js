import React from 'react'

function Home() {
  return (
    <div>
      <div className='flex items-center place-content-center'>
         <img
            src="./assets/banner1.jpg"
            className="w-full"
            style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))' }}
            />
      </div>
    </div>
  );
}

export default Home