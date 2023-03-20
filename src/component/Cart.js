import { useSelector, useDispatch } from "react-redux";
import { AddItem, DelItem } from "../redux/action/index";
function Cart() {
  const state = useSelector((state) => state.reducerProduct);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(AddItem(product));
  };
  const delProduct = (product) => {
    dispatch(DelItem(product));
  };
  const price = state.reduce((total, product) => {
    return total + product.price * product.qty;
  }, 0)
  return (
    <div className="container my-5 d-flex flex-column justify-content-center text-center">
        <h2 className="mb-3 ">Your Cart</h2>
      {state.map((product) => {
        return (
          <div className="row mb-3 mx-5 d-flex justify-content-center">
            <div className="col-md-4  border-top border-bottom border-start border-success border-2">
              <img
                src={product.image}
                alt={product.title}
                height={"200px"}
                width={"180px"}
              />
            </div>
            <div className="col-md-4  border-top border-bottom border-end border-success border-2 d-flex align-items-center flex-column justify-content-center">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">
                {product.qty} X ${product.price} = ${" "}
                {(product.price * product.qty).toFixed(2)}
              </p>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-dark me-4"
                  onClick={() => delProduct(product)}
                >
                  Delete quantity
                </button>
                <button
                  className="btn btn-dark me-4"
                  onClick={() => addProduct(product)}
                >
                  Add quantity
                </button>
              </div>
            </div>
            
          </div>
        );
      })}
      <div className="d-flex justify-content-center align-items-center"> <span className="lead fw-bold">Total money payable: ${price.toFixed(2)}</span> </div>
    </div>
  );
}

export default Cart;
