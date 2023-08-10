import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className='w-full bg-white rounded-t-lg '>
      <div>
        <div>
        <Image
          className="w-full h-20 rounded-t-lg "
          src="https://soliloquywp.com/wp-content/uploads/2016/09/How-to-Add-a-Homepage-Slider-in-WordPress.png"
          alt="Slide 1"
          width={0}
          height={0}
        />
        <Image
          className="w-20 h-20 rounded-full"
          src="https://img.freepik.com/free-psd/horizontal-youtube-banner-home-furniture-online-shop_23-2149047881.jpg"
          alt="Slide 1"
          width={0}
          height={0}
        />
        </div>
      </div>
      <div>
        <span>Shrikrushna Patil</span>
      </div>
    </div>
  )
}

export default ProfileCard
