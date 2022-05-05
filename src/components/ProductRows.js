
function ProductRows (props) {

    // console.log("mein clg", props);

    const filtered = props.products.filter(product => {
        return product.name.toLowerCase().includes(props.search.toLowerCase()) && (product.inStock || product.inStock === props.checkbox)
    })
    console.log('Hallo;',props.search);
    console.log('Hallo;',props.checkbox);
    // const filteredStock = props.stock.filter(product => {
    //     return product.
    // })
  

    return(
    <>
        {filtered.map(product =>{
            return (   
                <tr>
                    <td style={product.inStock ? {color: "black"} : {color: "red"}}>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            )
        })}
    </>
            
    )
}
    
export default ProductRows