import React from 'react'



function Cards() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='border-2 border-black rounded-2xl p-4 bg-black'>
            <img src="https://static1.bigstockphoto.com/1/4/2/large1500/241580950.jpg" alt="image1" className='rounded-2xl'/>
        </div>
        <div className='border-2 border-black rounded-2xl p-4 bg-black'>
            <img src="https://th.bing.com/th/id/OIP.kSNLZOi4M8JthvPucO61dAHaHa?w=1173&h=1173&rs=1&pid=ImgDetMain&cb=idpwebpc2" alt="image2" className='rounded-2xl' />
        </div>
        <div className='border-2 border-black rounded-2xl p-4 bg-black' >
           <img src="https://images.iphonephotographyschool.com/10667/1494/Mood-Emotion-iPhone-Photos-1.jpg" alt="" className='rounded-2xl'  />
          </div>
      
    </div>
  )
}


export default Cards
