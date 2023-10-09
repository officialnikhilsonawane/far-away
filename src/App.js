import {useState} from 'react'
import Logo from './Component/Logo'
import Form from './Component/Form'
import PackingList from './Component/PackingList'
import Stats from './Component/Stats'


export default function App(){

    //Lifting State Up!
    const [items, setItems] = useState([])

    let wannaClearList = false
    
    function handleAddItems(item){
        setItems((items)=> [...items, item])
    }

    function handleDeleteItem(id){
        setItems((items)=> items.filter((item)=> item.id !== id))
    }

    function handleToggleItem(id){
        setItems((items) => items.map((item)=>
         item.id === id ? {...item, packed: !item.packed} : item 
        ))
    }

    function handleClearList(){
        wannaClearList = window.confirm("Are you sure you want to delete all items from the cart?")
        if(wannaClearList) setItems([])
    }

    return (
        <div className="app">
            <Logo/>
            <Form onAddItems={handleAddItems}/>
            <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList}/>
            <Stats items={items}/>
        </div>
    )
}
