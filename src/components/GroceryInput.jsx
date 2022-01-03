import React from "react";
import { useState } from "react";

export const GroceryInput = ({getData}) => {

    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
        // console.log(text)
        getData(text)
        
    }

    return (
        <>
            <input type="text" placeholder="Enter here" onChange={handleChange} />
            <button onClick={handleClick}>Add Item</button>
        </>
    )
}