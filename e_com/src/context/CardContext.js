import React, { createContext, useEffect, useState } from 'react'
export const CardContext=createContext()
function CardProvider({children}) {
    const [cart,setCart]=useState([])
    const [itemAmount,setItemAmount]=useState(0)
    const [total,setTotal]=useState(0)
    const [gst,setGst]=useState(0)
    const [watchList, setWatchList] = useState([]);

    const [witemAmount,setWItemAmount]=useState(0)

    
    
   

    
    useEffect(() => {
      if (watchList) {
        const totalAmount = watchList.reduce((accumulator, currentItem) => {
          return accumulator + currentItem.amount;
        }, 0);
    
        setWItemAmount(totalAmount);
        console.log(totalAmount);
      }
    }, [watchList]);

    useEffect(() => {
      if (watchList) {
        setWItemAmount(watchList.length);
        console.log(watchList.length);
      }
    }, [watchList]);
    

useEffect(()=>{
  if(cart)
  {
    const amount=cart.reduce((accumulator,currentItem)=>{
     return accumulator+currentItem.amount;
    },0)
    setItemAmount(amount)
  }
},[cart])

useEffect(()=>{
  const total=cart.reduce((accumulator,currentItem)=>{
    return accumulator+currentItem.price*currentItem.amount;
  },0)
  setTotal(total)
},[cart])

useEffect(() => {
  const gst = cart.reduce((accumulator, currentItem) => {
    return accumulator + (currentItem.price * currentItem.amount * 0.18);
  }, 0);
  setGst(gst);
}, [cart]);





    const addToCart=(product,id)=>{
        const newItem={...product,amount:1};
        const cartItem=cart.find((item)=>{
          return item.id === id;
        })
        if(cartItem)
        {
          const newCart=[...cart].map(item=>{
            if(item.id===id)
            {
              return{...item,amount:cartItem.amount+1}
            }
            else{
              return item;
            }
          })
          setCart(newCart)
        }
        else
        {
          setCart([...cart,newItem])
        }
    }


    
    
   const removeFromCart =(id)=>{
    const newcart=cart.filter(item=>{
      return item.id!==id
    })
    setCart(newcart)
   }

   const clearCart=()=>{
    setCart([])
   }

   const increment=(id)=>{
    const item=cart.find((item)=>item.id===id)
    addToCart(item,id)
   }

   const decrement=(id)=>{
    const cartitem=cart.find((item)=>{
      return item.id === id;
    })
    if(cartitem)
    {
      const newCart=cart.map((item)=>{
        if(item.id===id)
        {
          return {...item,amount:cartitem.amount-1}
        }
        else
        {
          return item;
        }
      })
      setCart(newCart)
    }
    
      if(cartitem.amount<2)
      {
        removeFromCart(id);
      }
    
   }


   const addToWatchList = (product, id) => {
    const newItem = { ...product };
    const isAlreadyInWatchList = watchList.find((item) => item.id === id);
  
    if (!isAlreadyInWatchList) {
      setWatchList([...watchList, newItem]);
    }
  };

  const removeFromWatchList = (id) => {
    const newWatchList = watchList.filter((item) => item.id !== id);
    setWatchList(newWatchList);
  };
  

   
  return (
    <CardContext.Provider value={{addToCart ,cart,removeFromCart,clearCart,increment,decrement,itemAmount,total,gst,watchList,addToWatchList,removeFromWatchList,witemAmount}}>
      {children}
    </CardContext.Provider>
  )
}

export default CardProvider
