import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  color: #1A1C1E;
  margin-bottom: 8px;
`;

const ProductPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #4ade80;
`;

const ProductWeight = styled.span`
  font-size: 0.8rem;
  color: #64748B;
  margin-left: 8px;
`;

const ProductCard = ({ product }) => {
  const { name, price, image, weight } = product;

  return (
    <Card>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>
        ${price}
        <ProductWeight>{weight}</ProductWeight>
      </ProductPrice>
    </Card>
  );
};

export default ProductCard;