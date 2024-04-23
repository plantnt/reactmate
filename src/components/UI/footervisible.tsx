import { ReactNode, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface FooterVisibleProps {
  children: ReactNode;
}

const FooterVisible: React.FC<FooterVisibleProps> = ({ children }) => {
  const location = useLocation();

  const [showFoot, setShowFoot] = useState(false)
  const excludedUrls = ['/logIn', '/signUp']
  useEffect(() => {
    {excludedUrls.includes(location.pathname) ? setShowFoot(false) : setShowFoot(true)}
    
  }, [location]);

  return (
    <div>
      {showFoot && children}
    </div>
  );
};

export default FooterVisible;