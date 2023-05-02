import React from 'react'
import data from '../../Data.json'
import "./pages.css"

const Resturant = () => {
    console.log(data)
  return (
    <div className='available__resturant'>
        {
            data.map(elem =>{
                return <div className='resturantContainer'>
                    <h1>{elem.resturantName}</h1>
                    <div className="dishes">
                        {elem.Availabledish.map(elem =>{
                            return <div>
                                <h2>{elem.foodName}</h2>
                                <img src={elem.img} alt="" width={250} height={250}/>
                                <h3>Price : Rs {elem.Price}</h3>
                                <h4>Rating : {elem.rating}</h4>
                            </div>
                        })}
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default Resturant;