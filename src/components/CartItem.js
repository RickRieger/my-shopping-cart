import {
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import ShoppingCartContext from '../context/shoppingCart/shoppingCartContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CartItem = (props) => {
  const { item } = props;

  const shoppingCartContext = useContext(ShoppingCartContext);
  const { removeFromCart, handleIncrement, handleDecrement } =
    shoppingCartContext;

  const buttons = [
    <Button key='one' onClick={() => handleIncrement(item.id)}>
      increase
    </Button>,
    <Button
      key='two'
      disabled={item.quantity === 1 ? true : false}
      onClick={() => handleDecrement(item.id)}
    >
      decrease
    </Button>,
  ];

  return (
    <Card>
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
          sx={{
            display: 'flex',
            '& > *': {
              m: 1,
            },
          }}
        >
          <ButtonGroup
            orientation='vertical'
            aria-label='vertical contained button group'
            variant='text'
          >
            {buttons}
          </ButtonGroup>
        </Box>

        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
        ></Box>
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
