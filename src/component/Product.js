import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import {useDispatch} from "react-redux";
import {AddItem, DelItem} from "../redux/action/index";
function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);
  const addProduct = (product) => {
    dispatch(AddItem(product));
  }
  const Loading = () => {
    return (<div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
            <Skeleton height={400} width={400}  />
        </div>
        <div className="col-md-6 " style={{lineHeight:2}}>
        <Skeleton height={50} width={300}  />
        <Skeleton height={75}  />
        <Skeleton height={25} width={150}  />
        <Skeleton height={50} width={150}/>
        <Skeleton height={200} />
        <div className="d-flex">
            <Skeleton height={50} width={100}  />
        <Skeleton height={50} width={100} style={{marginLeft:6}} />
        </div>
        </div>
    </div>);
  };
  const ShowProduct = () => {
    return (
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={product.image}
              alt={product.tilte}
              height={"400px"}
              width={"400px"}
            />
          </div>
          <div className="col-md-6 ">
            <h4  className="text-uppercase text-black-50">
                {product.category}
            </h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-border d-flex align-items-center">
                Rating {product.rating && product.rating.rate}
                <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">
                $ {product.price}
            </h3>
            <p className="lead">{product.description}</p>
            <button className="btn btn-outline-dark py-2 me-2" onClick={() => addProduct(product)}>
                Add to Cart
            </button>
            <NavLink to={"/cart"} className="btn btn-dark py-2">
                Go to Cart
            </NavLink>
          </div>
        </div>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
}

export default Product;
