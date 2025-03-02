import React from 'react'

const Cart = ({data}) => {
  return (
    <>
    <div className='w-full px-4 py-3 flex justify-between items-center'>
                <h1>My shopping</h1>
                <div className='flex p-2 bg-zinc-400 rounded-md text-white  text-sm gap-1'>
                    <h2> My Cart</h2>
                    <h3 className='text-red-700 text-base'>{data.filter(item=>item.added).length}</h3>
                </div>

            </div>
      
    </>
  )
}

export default Cart
