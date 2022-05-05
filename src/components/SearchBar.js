
function SearchBar (props) {

    const handleInputChange = event => {
        props.setSearch(event.target.value)
    }

    const handleInputCheckBox = event => {
        props.setCheckbox(event.target.checked)

    }
  
  return(
    <>
      <p>Search</p>

      <div>
        <input type="text" placeholder="Search..." name="search" onChange={handleInputChange}/>
      </div>   
      <div>
        <input type="checkbox" onClick={handleInputCheckBox}/> only show products in stock
      </div> 
    </>
  )
}

export default SearchBar