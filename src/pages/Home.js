import { Box } from '@mui/system';
import React, { Fragment, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../fetchData';
const Home = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchProducts().then((productData) => {
      setProductData(productData);
    });
  }, []);

  return (
    <Fragment>
      <Layout>
        <ProductList products={productData} />
      </Layout>
    </Fragment>
  );
};

export default Home;
