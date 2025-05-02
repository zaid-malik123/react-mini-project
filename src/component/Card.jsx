import React from 'react'

function Card({ item }) {
  return (
    <div className='w-full sm:w-[300px] p-4 sm:p-6 border'>
      {/* Image Section */}
      <div className='h-[250px] w-full bg-zinc-400'>
        <img className='h-full w-full object-cover' src={item.image} alt={item.title} />
      </div>

      {/* Title */}
      <h1 className='text-lg sm:text-xl mt-3'>{item.title}</h1>

      {/* Price */}
      <h3 className='text-xl sm:text-2xl font-bold mt-4'>{item.price}</h3>
    </div>
  )
}

export default Card
