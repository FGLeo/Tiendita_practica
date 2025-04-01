import React from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList';

const DashboardContainer = styled.div`
  padding: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #1A1C1E;
  font-weight: 600;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
`;

const StatCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h3 {
    color: #64748B;
    font-size: 0.9rem;
    margin-bottom: 8px;
  }

  .value {
    font-size: 1.8rem;
    font-weight: 600;
    color: #1A1C1E;
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header>
        <Title>Dashboard</Title>
      </Header>

      <StatsContainer>
        <StatCard>
          <h3>Total Sales</h3>
          <div className="value">$12,345</div>
        </StatCard>
        <StatCard>
          <h3>Products</h3>
          <div className="value">48</div>
        </StatCard>
        <StatCard>
          <h3>Active Orders</h3>
          <div className="value">16</div>
        </StatCard>
        <StatCard>
          <h3>Customers</h3>
          <div className="value">256</div>
        </StatCard>
      </StatsContainer>

      <ProductList title="Recent Products" />
    </DashboardContainer>
  );
};

export default Dashboard;