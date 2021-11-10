import { Card, CardMedia, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import ShoppingCartContext from '../context/shoppingCart/shoppingCartContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { v4 as uuidv4 } from 'uuid';

const CartItem = (props) => {
  const { item } = props;

  const shoppingCartContext = useContext(ShoppingCartContext);
  const { removeFromCart } = shoppingCartContext;

  return (
    <Card key={uuidv4}>
      <Box display='flex'>
        <Box>
          <CardMedia
            component='img'
            sx={{ width: 80, height: 80, p: 1 }}
            image={item.image}
            alt='Live from space album cover'
          />
        </Box>
        <Box
          px={2}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          flexGrow={1}
        >
          <Box>
            <Typography fontWeight='bold'>{item.title}</Typography>
          </Box>
          <Box>
            <Typography fontWeight='bold' color='primary'>
              $ {item.price / 100}
            </Typography>
          </Box>
        </Box>
        <Box
          px={2}
          display='flex'
          flexDirection='column'
          justifyContent='center'
        >
          <Typography fontWeight='bold' color='primary'>
            x {item.quantity}
          </Typography>
        </Box>
        <Box display='flex' flexDirection='column' justifyContent='center'>
          <IconButton
            aria-label='delete'
            onClick={() => removeFromCart(item.id)}
          >
            <DeleteForeverIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default CartItem;
