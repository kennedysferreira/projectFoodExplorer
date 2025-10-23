import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
      font-size: 62.5%;
    }
    
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    body {
      background-color: ${({ theme }) => theme.COLORS.DARK};

      &::-webkit-scrollbar {
        width: 12px;
      }

      &::-webkit-scrollbar-track {
        background: none; 
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
        border-radius: 20px; 
      }
    }

    a {
      text-decoration: none;
    }

    button, a {
      cursor: pointer;
      transition: filter 0.2s;
      border: none;
    }

    input {
      border: none;
    }

    button:hover, a:hover {
      transition: all 200ms ease-in-out;
      filter: brightness(1.3);
    }    

    .red, .green, .blue, .orange, .light-blue{
      height: .8rem;
      width: .8rem;
      border-radius: 100%;
    }

    .red{
      background-color: ${({ theme }) => theme.COLORS.STATUS_CANCELLED};
    }

    .green{
      background-color: ${({ theme }) => theme.COLORS.STATUS_COMPLETED};
    }

    .blue{
      background-color: ${({ theme }) => theme.COLORS.STATUS_IN_KITCHEN};
    }

    .orange{
      background-color: ${({ theme }) => theme.COLORS.STATUS_PENDING};
    }

    .light-blue{
      background-color: ${({ theme }) => theme.COLORS.STATUS_PROCESSING};
    }

    /* ========================================
       TOAST NOTIFICATIONS - Tema Dark
       ======================================== */
    .Toastify__toast-container {
      font-family: 'Roboto', sans-serif;
    }

    .Toastify__toast {
      background: ${({ theme }) => theme.COLORS.DARK_ELEVATED};
      border-radius: 0.8rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      padding: 1.6rem;
      min-height: 6.4rem;
      font-size: 1.4rem;
    }

    .Toastify__toast-body {
      color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
      padding: 0;
      line-height: 1.5;
    }

    .Toastify__toast--success {
      border-left: 4px solid ${({ theme }) => theme.COLORS.SUCCESS};
    }

    .Toastify__toast--success .Toastify__progress-bar {
      background: ${({ theme }) => theme.COLORS.SUCCESS};
    }

    .Toastify__toast--error {
      border-left: 4px solid ${({ theme }) => theme.COLORS.ERROR};
    }

    .Toastify__toast--error .Toastify__progress-bar {
      background: ${({ theme }) => theme.COLORS.ERROR};
    }

    .Toastify__toast--warning {
      border-left: 4px solid ${({ theme }) => theme.COLORS.WARNING};
    }

    .Toastify__toast--warning .Toastify__progress-bar {
      background: ${({ theme }) => theme.COLORS.WARNING};
    }

    .Toastify__toast--info {
      border-left: 4px solid ${({ theme }) => theme.COLORS.TOMATO};
    }

    .Toastify__toast--info .Toastify__progress-bar {
      background: ${({ theme }) => theme.COLORS.TOMATO};
    }

    .Toastify__progress-bar {
      height: 4px;
    }

    .Toastify__close-button {
      color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }

    .Toastify__toast-icon {
      width: 2rem;
      margin-right: 1.2rem;
    }


  /* ========================================
     SMOOTH SCROLL
     ======================================== */
  html {
    scroll-behavior: smooth;
  }

  /* ========================================
     PAGE TRANSITIONS
     ======================================== */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-2rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Aplicar fade-in em todas as páginas principais */
  main {
    animation: fadeIn 0.3s ease-out;
  }

  /* Aplicar em containers de página */
  [data-page-container] {
    animation: fadeIn 0.3s ease-out;
  }
`;

