export default {
  AddCounter(state,payload) {
    payload.count++
  },
  AddToCart(state,payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
//mutations唯一的目的就是修改state中的状态
//mutations中的每个方法尽可能完成的事件比较单一