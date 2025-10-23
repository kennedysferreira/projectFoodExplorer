import { createContext, useContext, useState, useEffect, useCallback } from "react";

const CartContext = createContext({});

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Carregar carrinho do localStorage na inicialização
  useEffect(() => {
    loadCart();
  }, []);

  // Salvar no localStorage sempre que o carrinho mudar
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("pedidos", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("pedidos");
    }

    // Disparar evento customizado para atualizar outros componentes
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cartItems]);

  // Carregar carrinho do localStorage
  const loadCart = useCallback(() => {
    try {
      const storedCart = localStorage.getItem("pedidos");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Erro ao carregar carrinho:", error);
    }
  }, []);

  // Adicionar ou atualizar item no carrinho
  const addItem = useCallback((plate, quantity = 1) => {
    if (!plate || quantity <= 0) {
      return;
    }

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.plate.id === plate.id
      );

      const pricePerUnit = parseFloat(plate.value.replace(",", "."));
      const totalPrice = (pricePerUnit * quantity).toFixed(2);

      const newItem = {
        plate,
        quantity,
        price: totalPrice,
      };

      if (existingIndex >= 0) {
        // Atualizar item existente
        const updatedItems = [...prevItems];
        updatedItems[existingIndex] = newItem;
        return updatedItems;
      } else {
        // Adicionar novo item
        return [...prevItems, newItem];
      }
    });
  }, []);

  // Atualizar quantidade de um item
  const updateQuantity = useCallback((plateId, quantity) => {
    if (quantity <= 0) {
      removeItem(plateId);
      return;
    }

    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.plate.id === plateId) {
          const pricePerUnit = parseFloat(item.plate.value.replace(",", "."));
          const totalPrice = (pricePerUnit * quantity).toFixed(2);
          return {
            ...item,
            quantity,
            price: totalPrice,
          };
        }
        return item;
      });
    });
  }, []);

  // Remover item do carrinho
  const removeItem = useCallback((plateId) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.plate.id !== plateId);
    });
  }, []);

  // Limpar carrinho
  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  // Obter quantidade de um item específico (não usa useCallback para evitar loops)
  const getItemQuantity = (plateId) => {
    const item = cartItems.find((item) => item.plate.id === plateId);
    return item ? item.quantity : 0;
  };

  // Verificar se item está no carrinho
  const isInCart = (plateId) => {
    return cartItems.some((item) => item.plate.id === plateId);
  };

  // Calcular total de itens
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Calcular total em valor
  const getTotalValue = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(",", "."));
      return total + price;
    }, 0);
  };

  // Calcular subtotal (sem taxas)
  const getSubtotal = () => {
    return cartItems.reduce((sum, item) => {
      return sum + parseFloat(item.price.replace(",", "."));
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isLoading,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        getItemQuantity,
        isInCart,
        getTotalItems,
        getTotalValue,
        getSubtotal,
        loadCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }

  return context;
}

export { CartProvider, useCart };
