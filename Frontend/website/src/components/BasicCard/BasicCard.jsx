import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function BasicCard({ id, name, description, price, image }) {
  const navigate=useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  function addToCart(){
    if(sessionStorage.getItem('uniqueId')==null){
      navigate('/login')
    }

    const productName = name; 
    const productPrice = price;
    const clientId = sessionStorage.getItem('uniqueId');
    const productId = id;
    axios.post('http://localhost:3000/api/add-order', {productName, productPrice, clientId, productId})
        .then(result => {console.log(result) 
            if(result.data==="Success"){
              toast.success('Product successfully added to cart')
            }
            else{
              toast.error('Product not added to cart')
            }
        
        })
        .catch(err => console.log(err))
  }

  return (
    <Card sx={{ height: 250, width: 250, backgroundColor: '#f0f0f0' ,border: '2px solid green',borderRadius: '8px',}}>
      <div>
      <Typography level="title-lg" sx={{ fontFamily: 'Roboto, sans-serif', color: 'green' }}>
        {name}
      </Typography>

      <Typography level="body-sm" sx={{ fontFamily: 'YourSpecialFont, sans-serif', color: '#808080' }}>
        {description}
      </Typography>
        
      </div>
      
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={image}
          loading="lazy"
          alt=""
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transition: 'transform 0.2s ease', 
            transform: isHovered ? 'scale(1.1)' : 'scale(1)' 
          }}
        />
      </AspectRatio>

      <CardContent orientation="horizontal">
        <div>
          <Typography fontSize="lg" fontWeight="lg" sx={{ color: 'green' }}>
            ${price}
          </Typography>
        </div>


        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label={`Explore ${name}`}
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 ,backgroundColor: 'green', borderRadius: '10%', '&:hover': {
            backgroundColor: 'darkgreen', 
          }}}
          onClick={addToCart}
        >
          Add to Cart
        </Button>

      </CardContent>

    </Card>
  );
}

export default BasicCard;
