import React from 'react';

import { useRequest } from '../hooks/useRequest.js';
import Container from '../Components/Container/Container.jsx';
import ProductCard from '../Components/ProductCard/ProductCard.jsx';

const Products = () => {
   const { data, loading } = useRequest('/product');

  return (
    <Container title="Productos">
      {loading ? (
        <span>Cargando</span>
      ) : (
        data.map((product) => (
          <div key={product.sku} className="col-3">
            <ProductCard description={product.name} title={product.name} />
          </div>
        ))
      )}
    </Container>
  );
};

export default Products;
