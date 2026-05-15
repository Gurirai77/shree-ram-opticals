"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Product = {
  id: string;

  name: string;

  category: string;

  price: number;

  image: string;

  quantity: number;
};

type CartContextType = {
  cartItems: Product[];

  addToCart: (
  product: Omit<Product, "quantity">
) => void;

  removeFromCart: (index: number) => void;

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

  // LOAD FROM STORAGE
  useEffect(() => {

    const storedCart =
      localStorage.getItem("cart");

    if (storedCart) {
      setCartItems(
        JSON.parse(storedCart)
      );
    }

  }, []);

  // SAVE TO STORAGE
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  // ADD TO CART
const addToCart = (
  product: Omit<Product, "quantity">
) => {

  setCartItems((prev) => {

    const existing =
      prev.find(
        (item) =>
          item.id === product.id
      );

    // IF EXISTS
    if (existing) {

      return prev.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      );
    }

    // NEW PRODUCT
    return [
      ...prev,
      {
        ...product,
        quantity: 1,
      },
    ];
  });
};

  // REMOVE
const removeFromCart = (
  index: number
) => {

  setCartItems((prev) =>
    prev.filter(
      (_, i) => i !== index
    )
  );
};

  return (
    <CartContext.Provider
      value={{
        cartItems,

        addToCart,

        removeFromCart,

        totalItems:
          cartItems.length,
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