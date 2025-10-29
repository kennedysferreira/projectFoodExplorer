import { Button } from "../Button";
import { SideMenu } from "../SideMenu";
import { InputSearch } from "../InputSearch";
import { FoodExplorer } from "../FoodExplorer";
import { useNavigate } from "react-router-dom";
import { FoodExplorerAdmin } from "../FoodExplorerAdmin";
import {
  Container,
  MenuHamburger,
  Logo,
  NavLinks,
  ProfileMenu,
  AdminActions,
} from "./style";

import { RxHamburgerMenu } from "react-icons/rx";
import { FiUser, FiHeart, FiClock, FiLogOut, FiDollarSign, FiList } from "react-icons/fi";
import { TbChefHat } from "react-icons/tb";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { useState, useEffect, useRef } from "react";

export function Header() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileRef = useRef(null);

  const verifyAdminRole = user.role === USER_ROLE.ADMIN;

  function handleOutsideClick(event) {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setProfileMenuOpen(false);
    }
  }

  function handleLogout() {
    logout();
    navigate("/");
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <Container>
      {/* Mobile: Hamburguer Menu */}
      <MenuHamburger onClick={() => setMenuIsOpen(true)}>
        <RxHamburgerMenu size={24} />
      </MenuHamburger>

      {/* Logo */}
      <Logo onClick={() => navigate("/")}>
        {verifyAdminRole ? <FoodExplorerAdmin /> : <FoodExplorer />}
      </Logo>

      {/* Search Bar */}
      <InputSearch />

      {/* Desktop: Navigation Links (apenas para usuários) */}
      {!verifyAdminRole && (
        <NavLinks>
          <button className="nav-link" onClick={() => navigate("/order-history")}>
            <FiClock size={18} />
            <span>Pedidos</span>
          </button>
          <button className="nav-link" onClick={() => navigate("/favorites")}>
            <FiHeart size={18} />
            <span>Favoritos</span>
          </button>
        </NavLinks>
      )}

      {/* Desktop: Admin Actions */}
      {verifyAdminRole && (
        <AdminActions>
          <button
            className="admin-link"
            onClick={() => navigate("/admin-payments")}
            title="Pagamentos Pendentes"
          >
            <FiDollarSign size={20} />
          </button>
          <Button
            title="Novo Prato"
            onClick={() => navigate("/newplate")}
          />
        </AdminActions>
      )}

      {/* Desktop: Profile Menu */}
      <ProfileMenu ref={profileRef} $isOpen={profileMenuOpen}>
        <button
          className="profile-trigger"
          onClick={() => setProfileMenuOpen(!profileMenuOpen)}
        >
          <FiUser size={20} />
          <span>{user.name || "Perfil"}</span>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="currentColor"
            className={profileMenuOpen ? "rotate" : ""}
          >
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </button>

        <div className="profile-dropdown">
          <button onClick={() => { navigate("/profile"); setProfileMenuOpen(false); }}>
            <FiUser size={16} />
            Meu Perfil
          </button>
          {!verifyAdminRole && (
            <button onClick={() => {
              navigate("/profile");
              setProfileMenuOpen(false);
              setTimeout(() => {
                const element = document.querySelector('[data-section="addresses"]');
                if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 100);
            }}>
              <TbChefHat size={16} />
              Endereços
            </button>
          )}
          {verifyAdminRole && (
            <>
              <button onClick={() => { navigate("/admin-payments"); setProfileMenuOpen(false); }}>
                <FiDollarSign size={16} />
                Pagamentos Pendentes
              </button>
              <button onClick={() => { navigate("/payment-history"); setProfileMenuOpen(false); }}>
                <FiList size={16} />
                Histórico de Pagamentos
              </button>
            </>
          )}
          <button onClick={() => { navigate("/order-history"); setProfileMenuOpen(false); }}>
            <FiClock size={16} />
            Pedidos
          </button>
          {!verifyAdminRole && (
            <button onClick={() => { navigate("/favorites"); setProfileMenuOpen(false); }}>
              <FiHeart size={16} />
              Favoritos
            </button>
          )}
          <div className="divider"></div>
          <button onClick={handleLogout} className="logout">
            <FiLogOut size={16} />
            Sair
          </button>
        </div>
      </ProfileMenu>

      {/* Mobile: Side Menu */}
      <SideMenu
        menuIsOpen={menuIsOpen}
        menuIsClose={() => setMenuIsOpen(false)}
      />
    </Container>
  );
}
