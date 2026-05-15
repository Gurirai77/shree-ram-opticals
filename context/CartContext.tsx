"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

type Product = {
  id: string;

  name: string;

  price: number;

  image: string;
};

type CartContextType = {
  cartItems: Product[];

  addToCart: (product: Product) => void;

  removeFromCart: (id: string) => void;

  totalItems: number;
};

const CartContext =
  createContext<CartContextType | null>(
    null
  );

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] =
    useState<Product[]>([]);

  // ADD TO CART
  const addToCart = (product: Product) => {
    setCartItems((prev) => [
      ...prev,
      product,
    ]);
  };

  // REMOVE
  const removeFromCart = (id: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,

        addToCart,

        removeFromCart,

        totalItems: cartItems.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// HOOK
export const useCart = () => {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
};