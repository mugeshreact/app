import axios from "axios";
import React,{useState,useEffect} from "react";
import styles from './Products.module.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from "./Navbar";
import { TableSortLabel } from "@mui/material";




const Products = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const settings = {
        dots: true,
        infinite: false,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear"
      };
    

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

  const baseURL = 'https://dummyjson.com/products';  
  const [products, setProducts] = useState(null);
  const [ismodal,setIsmodal] = useState(null);
  const [load, setload] = useState([]);
  const [sorting,setSorting] = useState([]);
  
function rendering(str){
  console.log('hello',str)
  const loading = sorting?.filter((val)=>{
    if (str === ''){
      return true;
    }
    else if(val.title.toLowerCase().includes(str.toLowerCase())){
      return true;
    }  
   })
   setload(loading);
}

  function reading(e){

    rendering(e.target.value)
     
     
   
  }
  console.log(sorting,'remo')
  

  const ModalProducts = (id) => {
    let updatedProducts = products.products.filter((Products) => Products.id === id);
    console.log(updatedProducts,"resp")
     setIsmodal(updatedProducts[0]);
     setOpen(true);
  };

  const params =load.length<1 ? products?.products : load ;
  
  console.log(params)
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
    rendering('')
  
  }, []);

  useEffect(()=>{
    rendering('')
  },[sorting])

  if (!products){ return null;}

  return (
    <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.navin}>
    <input  
    type="search"
    name="search-form"
    id="search-form"
    className="search-input"
    placeholder="Search for..."
   onChange={reading} />
   </div>    
     <div className={styles.navbtn}>
       
       <Navbar products={ products}  setSorting={setSorting}/>
         
         </div>
    </div>

        {console.log('mug',products.products)}
       {params.length>0?params.map((props)   => {
        const { id, title, price,images,description,category} = props;
        return (

        

          <div className={styles.item} key={id}>
            <img src={images[0]} className={styles.img}/>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.price}>${price}</h3>
            <h5 className={styles.description}>{description}</h5>
            <p className={styles.review}>reviews {category}</p>
            <Button onClick={()=>{ModalProducts(id)}} >Know More....</Button>
          </div>
        );
      }):null
    } 
      <Modal    
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description">
                <Box sx={{ ...style, width: 400 ,bgcolor:"white" }}>
                    <div key={ismodal?.id}>
                    <div>
                    <Slider {...settings}>
                    
                    {ismodal?.images?.map((images)=>(
                        <div >
                          
                            <img src={images} className={styles.img}/>
                            
                            </div>
                    )     
                    )}
                    </Slider>
                    </div>
                   
                    <h2 className={styles.title}>{ismodal?.title}</h2>
                    
                    <h3 className={styles.price}>${ismodal?.price}</h3>
                    <h5 className={styles.description}>{ismodal?.description}</h5>
                    <p className={styles.review}>reviews {ismodal?.rating}</p>
                    <p>{ismodal?.category}</p>
                    <p>discountPercentage : {ismodal?.discountPercentage} %</p>
                    <p>Stock Remaining : {ismodal?.stock} items only left</p>
                    </div>
                </Box>
           </Modal>
    </div>
  );
}
export default Products;
