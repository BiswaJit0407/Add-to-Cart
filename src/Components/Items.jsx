import React from 'react'

const Items = ({ data ,handleAdd,index}) => {
    const { image, name, price, added } = data;
  return (
    <>
    <div className="w-50 bg-zinc-100 p-4 rounded m-10 justify-center items-center flex flex-col">
        <div className=" w-40 h-40 rounded-md overflow-hidden">
          <img className="w-40 h-40 object-cover" src={image} alt={name} />
        </div>
        <div className=" text-center text-lg mt-3">
          <h1 className="text-md text-center font-semibold">{name}</h1>
          <p className="text-sm text-center font-semibold"> ₹{price}</p>
          <button
          onClick={()=>handleAdd(index)}
            className={`${
              added === false ? "bg-blue-400" : "bg-green-400"
            } rounded px-2 py-1 mt-1 text-white`}
          >
            {added === false ? "Add to Cart" : "Item in Cart"}
          </button>
        </div>
      </div>
      
    </>
  )
}

export default Items
