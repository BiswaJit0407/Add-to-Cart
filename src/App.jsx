
import { useState } from 'react';
import './App.css'
import Cart from './Components/Cart';
import Items from './Components/Items';


const menu = [
  {
    name: "Food1",
    price: 20,
    image:
      "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600",
    added: false,
  },
  {
    name: "Food2",
    price: 50,
    image:
      "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600",
    added: false,
  },
  {
    name: "food3",
    price: 100,
    image:
      "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    added: false,
  },
];


function App() {

  const[cartdata,setCartData]=useState(menu)

  const handleAdd=(index)=>{
    setCartData((prev)=>{
      return prev.map((item,itemindex)=>{

        if(itemindex===index){
          return{...item,added:!item.added}
        }
        return item;

      })
    })
  }
  

  return (
    <>
     <div className="w-full h-screen bg-zinc-300">
        <Cart data={cartdata} />
        <div className="px-20 flex gap-6 mt-10 flex-wrap">
          {cartdata.map((obj, index) => {
            return (
              <Items
                key={index}
                
                index={index}
                data={obj}
                handleAdd={handleAdd}
                
              />
            );
          })}
        </div>
      </div>
    </>
  )
}

export default App
