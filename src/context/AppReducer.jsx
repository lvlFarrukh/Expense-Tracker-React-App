export default (state, action) => {
    console.log(state)
    switch (action.type) {
      case 'DELETE_TRANSACTION':
        return {
            ...state,
            transaction: state.transaction.filter(v => v.id !== action.payload )
        }
    //   case 'DECREMENT':
    //     return state - 1
      default:
        return state
    }
  }