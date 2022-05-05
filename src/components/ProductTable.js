// import { useState } from 'react';
// import jsonData from './../../data.json';
import ProductRows from "./ProductRows"

function ProductTable (props) {
//   const [products, setProducts] = useState(jsonData);
//   console.log('das ist der props von Product Table', props);

  return(
      <div>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
                <ProductRows products={props.products} search={props.search} checkbox={props.checkbox}/>
            </tbody>
        </table>
      </div>    
  )
}

export default ProductTable