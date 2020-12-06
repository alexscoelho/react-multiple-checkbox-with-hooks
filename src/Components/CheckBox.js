import React, {useState} from "react";

export const CheckBox = ({data}) => {
    const [checkedItems, setCheckedItems] = useState({})
    const handleCheckBoxChange = event => {
        const value = event.target.checked;
        const name = event.target.name;
        setCheckedItems({
            ...checkedItems,[name]: value
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        alert(`You have selected ${Object.keys(checkedItems).length} users` )
    }
    return (
    <form>
        {data.map(user => 
        <label key={user.id}>
          <input 
          onChange={handleCheckBoxChange} 
          type="checkbox" 
          checked={checkedItems.value}
          name={user.username} />
          {user.username}<br/>
        </label>)} 
        <button onClick={handleSubmit}>Submit</button>
      </form>
    )
}