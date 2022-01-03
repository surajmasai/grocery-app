import React from "react";



import { GroceryInput } from "./GroceryInput";

import { useState } from "react";



import { GroceryList } from "./GroceryList";

import { nanoid } from "nanoid";


export const Grocery = () => {
    
    const [list, setList] = useState([])

    const handleClick = (data) => {

        console.log("data in parent", data)

        const payload = {
            title: data,
            status: false,
            id: nanoid(5),
        }

        setList([...list, payload])

    };

     const handleDelete = (id) => {

       
        const result = list.filter((item) => item.id !== id);

        setList(result);
        
    }


    return (
        <div>
            <GroceryInput getData={handleClick} />
            <div className="itemlist">
            {list.map((e, i) => (
                <GroceryList key={e.id} {...e} handleDelete={handleDelete} />
            ))}
            </div>

        </div>
    )
}