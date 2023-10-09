function Stats({ items }){
    const numItems = items.length
    const numPacked = items.filter((i)=>i.packed).length
    const itemPercentage = Math.round((numPacked/numItems)*100)

    return (
        <footer className="stats">
            <em>{itemPercentage === 100 ? "You got everything! Ready to go ->" : `You have ${numItems} items on your list, and you already packed ${numPacked} ${itemPercentage}%`}</em>
        </footer>
    )
}

export default Stats