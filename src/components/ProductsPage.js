import { useState } from 'react';
import jsonData from './../data.json';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {

  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');
  const [checkbox, setCheckbox] = useState(false);



  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar setSearch={setSearch} setCheckbox={setCheckbox}/>
        <ProductTable products={products} search={search} checkbox={checkbox}/>
      </div>    
  )
}

export default ProductsPage