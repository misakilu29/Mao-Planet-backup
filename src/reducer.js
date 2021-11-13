export const initialState = {
  basket: [],
  heart: [],
}

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price * 1 + amount, 0)

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_TO_BASKET':
      // console.log(action.item)
      const item2 = { ...action.item, quantity: 1 }
      return {
        ...state,
        basket: [...state.basket, item2],
      }
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      }
    case 'ADD_TO_HEART':
      // console.log(action.item)
      const item3 = { ...action.item, quantity: 1 }
      return {
        ...state,
        heart: [...state.heart, item3],
      }
    case 'ENPTY_BASKET':
      return {
        ...state,
        basket: [],
      }

    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.item === action.id
      )
      let newBasket = [...state.basket]

      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `cant remove product (id: ${action.id}) as its not in basket!`
        )
      }
      return {
        ...state,
        basket: newBasket,
      }

    default:
      return state
  }
}

export default reducer
