
function Select(props){

    const handleChange =(e)=>{
        props.onChange(e.currentTarget.value)
    }
    return (
        <select onChange={handleChange}>
            <option value ={32}>32</option>
            <option value={60}>60</option>
            <option value={100}>100</option>
        </select>
    )

}




export default Select;