import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <Fragment>
      <Layout>
        <ProductList />
      </Layout>
    </Fragment>
  );
};

export default Home;
