import { useState, useEffect, useCallback } from "react";
import type { LocalizedName } from "@/mocks/restaurants";

export interface CartItem {
  menuItemId: string;
  name: LocalizedName | string;
  price: number;
  quantity: number;
  image: string;
}

const CART_KEY = "foodi-cart";
const RESTAURANT_KEY = "foodi-cart-restaurant";

export interface CartRestaurant {
  id: string;
  name: LocalizedName | string;
}

function getStoredCart(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function getStoredRestaurant(): CartRestaurant | null {
  try {
    return JSON.parse(localStorage.getItem(RESTAURANT_KEY) || "null");
  } catch {
    return null;
  }
}

function saveCart(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-updated"));
}

function saveRestaurant(restaurant: CartRestaurant | null) {
  if (restaurant) {
    localStorage.setItem(RESTAURANT_KEY, JSON.stringify(restaurant));
  } else {
    localStorage.removeItem(RESTAURANT_KEY);
  }
  window.dispatchEvent(new Event("cart-updated"));
}

export function addCartItem(
  item: CartItem,
  restaurant: CartRestaurant
): CartItem[] {
  const cart = getStoredCart();
  const existing = cart.find((c) => c.menuItemId === item.menuItemId);
  let newCart: CartItem[];
  if (existing) {
    newCart = cart.map((c) =>
      c.menuItemId === item.menuItemId
        ? { ...c, quantity: c.quantity + item.quantity }
        : c
    );
  } else {
    newCart = [...cart, item];
  }
  saveCart(newCart);
  saveRestaurant(restaurant);
  return newCart;
}

export function updateCartQty(menuItemId: string, delta: number): CartItem[] {
  const cart = getStoredCart();
  const newCart = cart
    .map((c) =>
      c.menuItemId === menuItemId
        ? { ...c, quantity: Math.max(0, c.quantity + delta) }
        : c
    )
    .filter((c) => c.quantity > 0);
  if (newCart.length === 0) {
    clearCart();
    return [];
  }
  saveCart(newCart);
  return newCart;
}

export function removeCartItem(menuItemId: string): CartItem[] {
  const cart = getStoredCart();
  const newCart = cart.filter((c) => c.menuItemId !== menuItemId);
  if (newCart.length === 0) {
    clearCart();
    return [];
  }
  saveCart(newCart);
  return newCart;
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
  localStorage.removeItem(RESTAURANT_KEY);
  window.dispatchEvent(new Event("cart-updated"));
}

export function getCart(): CartItem[] {
  return getStoredCart();
}

export function getCartRestaurant(): CartRestaurant | null {
  return getStoredRestaurant();
}

export function getCartTotal(): number {
  return getStoredCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getCartCount(): number {
  return getStoredCart().reduce((sum, item) => sum + item.quantity, 0);
}

export function useCart() {
  const [cart, setCartState] = useState<CartItem[]>(getStoredCart);
  const [restaurant, setRestaurantState] = useState<CartRestaurant | null>(getStoredRestaurant);

  const refresh = useCallback(() => {
    setCartState(getStoredCart());
    setRestaurantState(getStoredRestaurant());
  }, []);

  useEffect(() => {
    const handler = () => refresh();
    window.addEventListener("cart-updated", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("cart-updated", handler);
      window.removeEventListener("storage", handler);
    };
  }, [refresh]);

  return { cart, restaurant, refresh };
}