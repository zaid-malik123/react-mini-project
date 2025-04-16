import React from 'react'

function Card({item}) {
  return (
    <div className='w-[300px] p-[10px] border'>
      <div className='h-[250px] w-full bg-zinc-400'>
        <img className='h-full w-full object-cover' src={item.image} alt="" />
      </div>
      <h1 className='text-xl mt-3'>{item.title}</h1>
      <h3 className='text-2xl font-bold mt-5'>${item.price}</h3>
    </div>
  )
}

export default Card
