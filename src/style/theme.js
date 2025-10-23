export const theme = {
  COLORS: {
    // ========================================
    // COR PRINCIPAL - IDENTIDADE VISUAL SUSHIHANA
    // ========================================
    TOMATO: "#ec2927", // Vermelho principal da logo - USAR EM TODOS OS BOTÕES PRIMÁRIOS
    PRIMARY: "#ec2927", // Mesmo que TOMATO (mantido para consistência)
    PRIMARY_HOVER: "#ff3937", // Hover de ações principais

    // Base Colors (mantidas para compatibilidade)
    LIGHT_100: "#FDFDFD",
    LIGHT_200: "#FFFAF1",
    LIGHT_300: "#E1E1E6",
    LIGHT_400: "#C4C4CC",
    LIGHT_500: "#7C7C8A",
    LIGHT_600: "#76797B",
    LIGHT_700: "#4D585E",

    // Background Colors
    DARK: "#000000", // Fundo principal
    DARK_SURFACE: "#0D161B", // Cards, Header, Footer
    DARK_ELEVATED: "#1A2329", // Modais, Dropdowns
    DARK_BORDER: "#2A3439", // Bordas e divisores

    // Semantic Colors (padrão apps delivery)
    SUCCESS: "#04D361", // Sucesso, pedido confirmado
    SUCCESS_LIGHT: "#05f770",

    WARNING: "#FBA94C", // Avisos, pendências
    WARNING_LIGHT: "#ffbb6b",
    CARROT_100: "#FBA94C", // Alias para WARNING (compatibilidade)

    ERROR: "#E83F5B", // Erros, cancelamentos
    ERROR_LIGHT: "#ff5570",

    INFO: "#065E7C", // Informações
    INFO_LIGHT: "#0880a8",
    CAKE_100: "#065E7C", // Alias para INFO (compatibilidade)

    MINT_100: "#04D361", // Alias para SUCCESS (compatibilidade)

    // Status Colors
    STATUS_PENDING: "#FBA94C", // Pendente (laranja)
    STATUS_PROCESSING: "#5BC0DE", // Processando (azul claro)
    STATUS_CONFIRMED: "#04D361", // Confirmado (verde)
    STATUS_COMPLETED: "#04D361", // Finalizado (verde)
    STATUS_CANCELLED: "#E83F5B", // Cancelado (vermelho erro)
    STATUS_IN_KITCHEN: "#8B5CF6", // Na cozinha (roxo)

    // Text Colors
    TEXT_PRIMARY: "#FDFDFD", // Texto principal
    TEXT_SECONDARY: "#C4C4CC", // Texto secundário
    TEXT_TERTIARY: "#7C7C8A", // Texto terciário
    TEXT_DISABLED: "#4D585E", // Texto desabilitado
  },

  // Spacing Scale (padrão 8px base)
  SPACING: {
    XXS: "0.4rem", // 4px
    XS: "0.8rem", // 8px
    SM: "1.2rem", // 12px
    MD: "1.6rem", // 16px
    LG: "2.4rem", // 24px
    XL: "3.2rem", // 32px
    XXL: "4.8rem", // 48px
    XXXL: "6.4rem", // 64px
  },

  // Border Radius Scale
  RADIUS: {
    XS: "0.4rem", // 4px
    SM: "0.8rem", // 8px
    MD: "1.2rem", // 12px
    LG: "1.6rem", // 16px
    XL: "2.4rem", // 24px
    FULL: "9999px", // Circular
  },

  // Typography Scale
  FONT_SIZE: {
    XXS: "1.0rem", // 10px
    XS: "1.2rem", // 12px
    SM: "1.4rem", // 14px
    MD: "1.6rem", // 16px (base)
    LG: "1.8rem", // 18px
    XL: "2.0rem", // 20px
    XXL: "2.4rem", // 24px
    XXXL: "3.2rem", // 32px
    HUGE: "4.0rem", // 40px
  },

  FONT_WEIGHT: {
    LIGHT: 300,
    REGULAR: 400,
    MEDIUM: 500,
    SEMIBOLD: 600,
    BOLD: 700,
  },

  LINE_HEIGHT: {
    TIGHT: 1.2,
    NORMAL: 1.5,
    RELAXED: 1.75,
  },

  // Shadow Scale
  SHADOW: {
    XS: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    SM: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    MD: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    LG: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    XL: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    FLOATING: "0 8px 16px rgba(236, 41, 39, 0.2)", // Para botão flutuante
  },

  // Transitions
  TRANSITION: {
    FAST: "150ms ease-in-out",
    NORMAL: "200ms ease-in-out",
    SLOW: "300ms ease-in-out",
  },

  // Z-index Scale
  Z_INDEX: {
    DROPDOWN: 100,
    STICKY: 200,
    FIXED: 300,
    MODAL_BACKDROP: 400,
    MODAL: 500,
    POPOVER: 600,
    TOOLTIP: 700,
  },

  // Breakpoints
  MEDIA_QUERY: {
    SMALL_P: "320px",
    SMALL_M: "375px",
    SMALL_G: "425px",
    MEDIUM: "768px",
    LARGE: "1024px",
    LARGE_G: "1440px",
  },
};
