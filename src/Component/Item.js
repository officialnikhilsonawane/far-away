function Item({objItem, onDeleteItem, onToggleItem}){
    return (
    <>
    <li>
        <input type="checkbox" value={objItem.packed} onChange={()=>onToggleItem(objItem.id)}/>
        <span style={objItem.packed ? { textDecoration: "line-through" } : {}}>
        {objItem.quantity} {objItem.description}
        </span>
        {/* //This is the important line in this react directly calls the callback function on clicking the button, so we use function expression */}
        <button onClick={()=>onDeleteItem(objItem.id)}>&#215;</button>
    </li>
    </> )
}
export default Item