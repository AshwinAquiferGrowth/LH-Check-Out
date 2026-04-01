import { createContext, useContext, useReducer, useMemo } from 'react'
import { brandInfo } from '../data/products'

const CartContext = createContext(null)

const initialState = {
  items: [],
  isDrawerOpen: false,
  checkoutStep: 0, // 0=homepage, 1=info, 2=shipping, 3=payment, 4=confirmation
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.payload.id)
      if (existing) {
        return {
          ...state,
          isDrawerOpen: true,
          items: state.items.map((i) =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        }
      }
      return {
        ...state,
        isDrawerOpen: true,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      }
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      }

    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => i.id !== action.payload.id),
        }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      }
    }

    case 'OPEN_DRAWER':
      return { ...state, isDrawerOpen: true }

    case 'CLOSE_DRAWER':
      return { ...state, isDrawerOpen: false }

    case 'SET_CHECKOUT_STEP':
      return { ...state, checkoutStep: action.payload, isDrawerOpen: false }

    case 'CLEAR_CART':
      return { ...state, items: [], checkoutStep: 0 }

    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const derived = useMemo(() => {
    const cartCount = state.items.reduce((sum, i) => sum + i.quantity, 0)
    const cartTotal = state.items.reduce(
      (sum, i) => sum + parseFloat(i.price) * i.quantity,
      0
    )
    const freeShippingRemaining = Math.max(
      0,
      brandInfo.freeShippingThreshold - cartTotal
    )
    return { cartCount, cartTotal, freeShippingRemaining }
  }, [state.items])

  const value = useMemo(
    () => ({ state, dispatch, ...derived }),
    [state, dispatch, derived]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
