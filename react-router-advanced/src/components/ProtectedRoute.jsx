// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import PropTypes from 'prop-types';

/**
 * ProtectedRoute component that checks authentication before rendering child routes
 * @param {Object} props - Component props
 * @param {ReactNode} [props.children] - Optional children to render when authenticated
 * @param {boolean} [props.redirectToLogin=true] - Whether to redirect to login when unauthenticated
 * @returns {ReactNode} - Either the protected content or a redirect
 */
const ProtectedRoute = ({ children, redirectToLogin = true }) => {
  const { user, loading } = useAuth();

  // Show loading state while auth status is being determined
  if (loading) {
    return <div className="auth-loading">Checking authentication...</div>;
  }

  // If no user and we should redirect, go to login
  if (!user && redirectToLogin) {
    return <Navigate to="/login" replace />;
  }

  // If no user but we shouldn't redirect, show unauthorized message
  if (!user) {
    return (
      <div className="unauthorized">
        <h2>Unauthorized Access</h2>
        <p>You need to be logged in to view this content.</p>
      </div>
    );
  }

  // Render children if provided, otherwise render Outlet for nested routes
  return children ? children : <Outlet />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  redirectToLogin: PropTypes.bool,
};

export default ProtectedRoute;