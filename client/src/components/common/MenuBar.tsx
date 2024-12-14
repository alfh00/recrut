import { NavLink } from "react-router";
import useAuthStore from "../../stores/useAuthStore";
// import { logoutUser } from "../../lib/axios";

const MenuBar = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const user = useAuthStore(state => state.user);

  const handleLogout = async () => {
    try {
      // await logoutUser();
      useAuthStore.getState().logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => `
    text-gray-600 hover:text-blue-600 transition-colors
    ${isActive ? 'text-blue-600' : ''}
  `;

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          Recrut.ai
        </NavLink>

        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={getNavLinkClass} end>
            Home
          </NavLink>

          {isAuthenticated && (
            <>
              <NavLink to="/dashboard" className={getNavLinkClass} end>
                Applications
              </NavLink>
              <NavLink to="/dashboard/profile" className={getNavLinkClass}>
                Profile
              </NavLink>
              <NavLink to="/dashboard/jobs" className={getNavLinkClass}>
                Jobs
              </NavLink>
            </>
          )}

          <NavLink to="/about" className={getNavLinkClass} end>
            About
          </NavLink>

        </nav>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-gray-600">
                Welcome, {user?.first_name}
              </span>
              <button
                onClick={handleLogout}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login-register"
                className={({ isActive }) => `
                  text-gray-600 hover:text-blue-600 transition-colors
                  ${isActive ? 'text-blue-600' : ''}
                `}
              >
                Login
              </NavLink>
              <NavLink
                to="/login-register"
                className={({ isActive }) => `
                  bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors
                  ${isActive ? 'bg-blue-700' : ''}
                `}
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default MenuBar;
