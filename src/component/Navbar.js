import {useEffect} from 'react';
import Products from './Products';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Navbar({products,setSorting}) {

  useEffect(()=>{
    setSorting(products?.products)
  },[])
  
  const handleChange = (e) => {
    
 
  const sort = products.products.filter((val)=>{
    if (e.target.value == ''){
      
      return true;
    }
    else if(val.category == e.target.value){
      return true;
      
    }
  
   })
   console.log('res',sort)
   setSorting(sort);
 
}
 

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="category"
          onChange={handleChange}
        >
          <MenuItem value={"smartphones"}>smartphone</MenuItem>
          <MenuItem value={"laptops"}>laptops</MenuItem>
          <MenuItem value={"fragrances"}>fragrances</MenuItem>
          <MenuItem value={"skincare"}>skincare</MenuItem>
          <MenuItem value={"groceries"}>groceries</MenuItem>
          <MenuItem value={"home-decoration"}>home-decoration</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
