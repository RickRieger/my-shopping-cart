import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import Layout from '../components/Layout';
import ReplayIcon from '@mui/icons-material/Replay';
import ShoppingCartContext from '../context/shoppingCart/shoppingCartContext';
const CartPage = () => {
  

  const shoppingCartContext = useContext(ShoppingCartContext);
  const { shoppingCart, total, emptyCart } = shoppingCartContext;

  if (shoppingCart.length < 1) {
    return <Layout>theres no items to show here</Layout>;
  }

  return (
    <Layout>
      <Box>
        {shoppingCart.map((item) => (
          <Box key={item.indexOf} mb={4}>
            <CartItem item={item} />
          </Box>
        ))}
      </Box>
      <Box display='flex' flexDirection='column' alignItems='center' mt={6}>
        <Box mb={2}>
          <Typography fontWeight='bold'>Total: $ {total/100}</Typography>
        </Box>
        <Box mb={2}>
          <Button
            variant='contained'
            onClick={emptyCart}
            startIcon={<ReplayIcon />}
          >
            Empty Cart
          </Button>
        </Box>
        <Box mb={2}>
        <Link to="/">
            <Button variant="contained">Back to home</Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};

export default CartPage;
