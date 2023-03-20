export const AddItem = (product) => {
    return ({
        type : "ADD_ITEM",
        payload: product,
    })
}
export const DelItem = (product) => {
    return ({
        type : "DEL_ITEM",
        payload: product,
    })
}