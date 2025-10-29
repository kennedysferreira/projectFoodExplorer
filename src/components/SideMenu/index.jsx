import { Footer } from "../Footer";
import { IoMdClose } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Container, MenuHeader, MenuContent, MenuFooter } from "./style";

import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';
import { useNavigate } from 'react-router-dom';

export function SideMenu({ menuIsOpen, menuIsClose }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const verifyAdminRole = user.role === USER_ROLE.ADMIN;
  const [isClosing, setIsClosing] = useState(false);

  function handleCloseMenu() {
    setIsClosing(true);
    setTimeout(() => {
      menuIsClose();
      setIsClosing(false);
    }, 300);
  }

  function handleNavigation(path) {
    navigate(path);
    handleCloseMenu();
  }

  function handleLogout() {
    logout();
    handleCloseMenu();
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        menuIsClose();
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuIsClose]);

  return (
    <Container data-menu-is-open={menuIsOpen} data-menu-is-closing={isClosing}>
      <MenuHeader onClick={handleCloseMenu}>
        <IoMdClose size={24} />
        <span>Menu</span>
      </MenuHeader>

      <MenuContent>
        {verifyAdminRole && (
          <>
            <button className="menu-option" onClick={() => handleNavigation('/newplate')}>
              Novo Prato
            </button>
            <button className="menu-option" onClick={() => handleNavigation('/admin-payments')}>
              Pagamentos Pendentes
            </button>
            <button className="menu-option" onClick={() => handleNavigation('/payment-history')}>
              Histórico de Pagamentos
            </button>
          </>
        )}
        {!verifyAdminRole && (
          <button className="menu-option" onClick={() => handleNavigation('/favorites')}>
            Favoritos
          </button>
        )}
        <button className="menu-option" onClick={() => handleNavigation('/order-history')}>
          Histórico de pedidos
        </button>
        <button className="menu-option" onClick={() => handleNavigation('/profile')}>
          Perfil
        </button>
      </MenuContent>

      <MenuFooter>
        <button className="logout-button" onClick={handleLogout}>
          <FiLogOut size={20} />
          <span>Sair</span>
        </button>
      </MenuFooter>

      <Footer />
    </Container>
  );
}
