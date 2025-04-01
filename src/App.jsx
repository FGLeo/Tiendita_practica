import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import styled from 'styled-components';
import Sidebar, { SidebarContainer } from './components/Sidebar';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.main`
  margin-left: 64px;
  padding: 20px;
  flex: 1;
  transition: margin-left 0.3s ease;
  width: calc(100% - 64px);

  ${SidebarContainer}:hover + & {
    margin-left: 260px;
    width: calc(100% - 260px);
  }
`;

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <Layout>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </Layout>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;