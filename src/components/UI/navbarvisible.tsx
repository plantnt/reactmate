import { ReactNode, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface NavbarVisibleProps {
  children: ReactNode;
}

const NavbarVisible: React.FC<NavbarVisibleProps> = ({ children }) => {
  const location = useLocation();

  const [showNav, setShowNav] = useState(false)
  const excludedUrls = ['/logIn', '/signUp']
  useEffect(() => {
    console.log("Location: ", location);
    {excludedUrls.includes(location.pathname) ? setShowNav(false) : setShowNav(true)}
    
  }, [location]);

  return (
    <div>
      {showNav && children}
    </div>
  );
};

export default NavbarVisible;