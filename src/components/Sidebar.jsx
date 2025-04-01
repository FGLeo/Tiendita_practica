import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  HomeIcon,
  ChartBarIcon,
  FolderIcon,
  CheckCircleIcon,
  ChartPieIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';

const SidebarContainer = styled.div`
  width: ${props => props.isCollapsed ? '64px' : '260px'};
  height: 100vh;
  background: #1A1C1E;
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  transition: width 0.3s ease;
  overflow-x: hidden;
`;

const ToggleButton = styled.button`
  position: absolute;
  right: -12px;
  top: 20px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #1A1C1E;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  transform: ${props => props.isCollapsed ? 'rotate(180deg)' : 'rotate(0)'};
  z-index: 10;
`;

const MenuText = styled.span`
  opacity: ${props => props.isCollapsed ? '0' : '1'};
  transition: opacity 0.2s ease;
  white-space: nowrap;
`;

const Logo = styled.div`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchBar = styled.div`
  margin-bottom: 20px;
  
  input {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: none;
    background: #2A2D30;
    color: white;
    
    &::placeholder {
      color: #6B7280;
    }
  }
`;

const MenuSection = styled.div`
  flex: 1;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px;
  color: #9CA3AF;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 8px;
  gap: 12px;
  transition: all 0.3s ease;
  
  &:hover, &.active {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`;

const BottomSection = styled.div`
  border-top: 1px solid #2A2D30;
  padding-top: 20px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  color: white;
  opacity: ${props => props.isCollapsed ? '0' : '1'};
  transition: opacity 0.2s ease;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .user-info {
    flex: 1;
    
    .name {
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    .email {
      font-size: 0.8rem;
      color: #9CA3AF;
    }
  }
`;

const NotificationBadge = styled.span`
  background: #818CF8;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  opacity: ${props => props.isCollapsed ? '0' : '1'};
  transition: opacity 0.2s ease;
`;

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <SidebarContainer isCollapsed={isCollapsed}>
      <ToggleButton 
        isCollapsed={isCollapsed}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <Bars3Icon width={16} />
      </ToggleButton>

      <Logo>
        <IconWrapper>
          <RocketLaunchIcon />
        </IconWrapper>
        <MenuText isCollapsed={isCollapsed}>Untitled</MenuText>
      </Logo>

      <SearchBar>
        {!isCollapsed && <input type="text" placeholder="Search" />}
      </SearchBar>

      <MenuSection>
        <MenuItem to="/home">
          <IconWrapper>
            <HomeIcon />
          </IconWrapper>
          <MenuText isCollapsed={isCollapsed}>Home</MenuText>
        </MenuItem>
        <MenuItem to="/dashboard">
          <IconWrapper>
            <ChartBarIcon />
          </IconWrapper>
          <MenuText isCollapsed={isCollapsed}>Dashboard</MenuText>
        </MenuItem>
        <MenuItem to="/projects">
          <IconWrapper>
            <FolderIcon />
          </IconWrapper>
          <MenuText isCollapsed={isCollapsed}>Projects</MenuText>
        </MenuItem>
        <MenuItem to="/tasks">
          <IconWrapper>
            <CheckCircleIcon />
          </IconWrapper>
          <MenuText isCollapsed={isCollapsed}>Tasks</MenuText>
        </MenuItem>
        <MenuItem to="/reporting">
          <IconWrapper>
            <ChartPieIcon />
          </IconWrapper>
          <MenuText isCollapsed={isCollapsed}>Reporting</MenuText>
        </MenuItem>
      </MenuSection>

      <BottomSection>
        <MenuItem to="/notifications">
          <IconWrapper>
            <BellIcon />
          </IconWrapper>
          <MenuText isCollapsed={isCollapsed}>Notification</MenuText>
          <NotificationBadge isCollapsed={isCollapsed}>12</NotificationBadge>
        </MenuItem>
        <MenuItem to="/support">
          <IconWrapper>
            <QuestionMarkCircleIcon />
          </IconWrapper>
          <MenuText isCollapsed={isCollapsed}>Support</MenuText>
        </MenuItem>
        <MenuItem to="/settings">
          <IconWrapper>
            <Cog6ToothIcon />
          </IconWrapper>
          <MenuText isCollapsed={isCollapsed}>Settings</MenuText>
        </MenuItem>

        <UserProfile isCollapsed={isCollapsed}>
          <img src="https://via.placeholder.com/32" alt="User" />
          <div className="user-info">
            <div className="name">Brooklyn Simmons</div>
            <div className="email">brooklyn@simmons.com</div>
          </div>
        </UserProfile>
      </BottomSection>
    </SidebarContainer>
  );
};

export default Sidebar;