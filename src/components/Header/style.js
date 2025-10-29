import styled from "styled-components";

export const Container = styled.header`
  /* Mobile First */
  height: 7rem;
  background-color: ${({ theme }) => theme.COLORS.DARK};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.SPACING.MD};
  gap: ${({ theme }) => theme.SPACING.SM};
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.Z_INDEX.STICKY};

  /* Tablet */
  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    height: 8rem;
    padding: 0 ${({ theme }) => theme.SPACING.XL};
    gap: ${({ theme }) => theme.SPACING.LG};
  }

  /* Desktop */
  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    height: 9rem;
    padding: 0 ${({ theme }) => theme.SPACING.XXL};
    gap: ${({ theme }) => theme.SPACING.XL};
  }
`;

export const MenuHamburger = styled.button`
  /* Mobile First */
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.SPACING.XS};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  transition: ${({ theme }) => theme.TRANSITION.FAST};

  svg {
    flex-shrink: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.COLORS.TOMATO};
  }

  &:active {
    transform: scale(0.95);
  }

  /* Desktop - Hide */
  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: none;
  }
`;

export const Logo = styled.div`
  /* Mobile First */
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.TRANSITION.NORMAL};
  flex-shrink: 0;

  div {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.SPACING.XS};
  }

  div p {
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
    font-family: "Poppins", sans-serif;
  }

  div img {
    width: 2.4rem;
    height: 2.4rem;
  }

  &:active {
    transform: scale(0.98);
  }

  /* Tablet */
  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.MEDIUM}) {
    div p {
      font-size: ${({ theme }) => theme.FONT_SIZE.XL};
    }

    div img {
      width: 2.8rem;
      height: 2.8rem;
    }
  }

  /* Desktop */
  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    &:hover {
      transform: scale(1.02);
    }

    div p {
      font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
    }

    div img {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`;

export const NavLinks = styled.nav`
  display: none;

  /* Desktop - Show */
  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.SPACING.MD};

    .nav-link {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.SPACING.XS};
      padding: ${({ theme }) => theme.SPACING.SM} ${({ theme }) => theme.SPACING.MD};
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
      font-size: ${({ theme }) => theme.FONT_SIZE.SM};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT.MEDIUM};
      cursor: pointer;
      border-radius: ${({ theme }) => theme.RADIUS.SM};
      transition: ${({ theme }) => theme.TRANSITION.FAST};
      white-space: nowrap;

      svg {
        flex-shrink: 0;
      }

      &:hover {
        color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
        background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
      }

      &:active {
        transform: scale(0.98);
      }
    }
  }
`;

export const AdminActions = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.SPACING.MD};
    width: auto;

    button {
      white-space: nowrap;
    }

    button:not(.admin-link) {
      min-width: 15rem;
    }

    .admin-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
      border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
      border-radius: ${({ theme }) => theme.RADIUS.MD};
      color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
      cursor: pointer;
      transition: ${({ theme }) => theme.TRANSITION.FAST};

      &:hover {
        border-color: ${({ theme }) => theme.COLORS.TOMATO};
        background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
        color: ${({ theme }) => theme.COLORS.TOMATO};
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }
`;

export const ProfileMenu = styled.div`
  display: none;
  position: relative;

  /* Desktop - Show */
  @media (min-width: ${({ theme }) => theme.MEDIA_QUERY.LARGE}) {
    display: flex;
    flex-shrink: 0;

    .profile-trigger {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.SPACING.SM};
      padding: ${({ theme }) => theme.SPACING.SM} ${({ theme }) => theme.SPACING.MD};
      background: none;
      border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
      border-radius: ${({ theme }) => theme.RADIUS.MD};
      color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
      font-size: ${({ theme }) => theme.FONT_SIZE.SM};
      font-weight: ${({ theme }) => theme.FONT_WEIGHT.MEDIUM};
      cursor: pointer;
      transition: ${({ theme }) => theme.TRANSITION.FAST};
      white-space: nowrap;
      min-width: 14rem;
      justify-content: space-between;

      svg {
        flex-shrink: 0;

        &.rotate {
          transform: rotate(180deg);
        }
      }

      &:hover {
        border-color: ${({ theme }) => theme.COLORS.TOMATO};
        background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
      }
    }

    .profile-dropdown {
      display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
      flex-direction: column;
      position: absolute;
      top: calc(100% + ${({ theme }) => theme.SPACING.XS});
      right: 0;
      min-width: 20rem;
      background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
      border: 1px solid ${({ theme }) => theme.COLORS.DARK_BORDER};
      border-radius: ${({ theme }) => theme.RADIUS.MD};
      box-shadow: ${({ theme }) => theme.SHADOW.LG};
      padding: ${({ theme }) => theme.SPACING.XS};
      z-index: ${({ theme }) => theme.Z_INDEX.DROPDOWN};
      animation: slideDown 200ms ease-out;

      button {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.SPACING.SM};
        padding: ${({ theme }) => theme.SPACING.SM} ${({ theme }) => theme.SPACING.MD};
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
        font-size: ${({ theme }) => theme.FONT_SIZE.SM};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
        cursor: pointer;
        border-radius: ${({ theme }) => theme.RADIUS.SM};
        transition: ${({ theme }) => theme.TRANSITION.FAST};
        text-align: left;
        width: 100%;

        svg {
          color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
          flex-shrink: 0;
        }

        &:hover {
          background: ${({ theme }) => theme.COLORS.DARK_SURFACE};
        }

        &.logout {
          color: ${({ theme }) => theme.COLORS.ERROR};

          svg {
            color: ${({ theme }) => theme.COLORS.ERROR};
          }

          &:hover {
            background: rgba(232, 63, 91, 0.1);
          }
        }
      }

      .divider {
        height: 1px;
        background: ${({ theme }) => theme.COLORS.DARK_BORDER};
        margin: ${({ theme }) => theme.SPACING.XS} 0;
      }
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-${({ theme }) => theme.SPACING.SM});
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;
