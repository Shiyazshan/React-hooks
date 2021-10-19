import React, { useState } from 'react'
import Griffin from "../../assets/images/image1.png"
import Hester from "../../assets/images/image2.png"
import Danny from "../../assets/images/image3.png"
import Joshua from "../../assets/images/image4.png"
import Jon from "../../assets/images/image5.png"


export default function Birthday() {
    const [items, setItems] = useState([
        {
            name:"Griffin Wooldridge",
            age:20,
            img: Griffin
        },
        {
            name:"Hester Hogan",
            age:23,
            img: Hester
        },
        {
            name:"Danny Winget",
            age:25,
            img:Danny
        },
        {
            name:"Jon vettinger",
            age:23,
            img:Joshua
        },
        {
            name:"Joshua Vergara",
            age:20,
            img:Jon
        }
    ])
    const renderItem= () => {
        return items.map((item) => (
                <li>
                    <div className="left">
                        <img src={item.img} alt="Images" />
                    </div>
                    <div className="right">
                        <h3>{item.name}</h3>
                        <h5>{item.age}</h5>
                    </div>
                </li>
                ))
    }
    const clearAll= () => {
        setItems([])
    }
    return (
        <div className="birthday">
            <h2>5 birthdays today</h2>
            <ul>
                {renderItem()}
            </ul >
            <a className="button"  onClick={()=> clearAll()}>Clear All</a>
        </div>
    )
}
