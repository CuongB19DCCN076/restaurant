const cart = []
const reducerProduct = (state = cart, action) => {
    const product = action.payload;
    switch(action.type){
        case "ADD_ITEM":
            const exist = state.find((item) => item.id === product.id);
            if(exist){
                return state.map((item) => item.id === product.id ? {...item, qty: item.qty + 1} : item);
            }else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }
            break;
        case "DEL_ITEM":
            const exist1 = state.find((item) => item.id === product.id);
            if(exist1.qty === 1){
                return state.filter(item => item.id !== exist1.id)
            }else {
                return state.map((item) => item.id === exist1.id ? {...item, qty: item.qty - 1} : item)
            }
            break;
        default:
            return state;
            break;
    }
}
export default reducerProduct;