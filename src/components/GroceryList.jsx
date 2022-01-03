export const GroceryList = ({ title, id, handleDelete }) => {
     
    // console.log(title, status, id)
    return (
        <div className="alltask">
            <p>{title}</p>
            {/* <p>{status} </p> */}
            <button onClick={() => handleDelete(id)}>delete</button>
            </div>
            

    )
 }