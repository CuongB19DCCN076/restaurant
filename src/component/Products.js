import {useState, useEffect } from 'react';
import Loading from './Loading';
import { NavLink } from "react-router-dom";
function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    const filterProduct = (cat) => {
        const updatePro = data.filter((x)=>{
            return (x.category === cat);
        });
        setFilter(updatePro);
    }
    
    function ShowProducts() {
      return (
        <>
          <div className="buttons d-flex flex-column flex-sm-row justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>
              Electronic
            </button>
          </div>
          {filter.map((product) => {
            return (
              <div key={product.id} className="col-md-3 mb-4" >
                <div  className="card h-100 text-center p-4" width={"18rem"}>
                  <img src={product.image} className="card-img-top" alt={product.title} height={"250px"}/>
                  <div className="card-body">
                    <h5 className="card-title">{product.title.substring(0,14)}...</h5>
                    <p className="card-text lead fw-bold">
                      ${product.price}
                    </p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      );
    }
    useEffect(() => {
        const getProducts = async () =>{
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    },[])
    return ( 
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-border text-center">Latest Product</h1>
                    <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                        {loading ? <Loading cards={8}/> : <ShowProducts /> }
                    
                </div>
            </div>
        </div>
     );
}

export default Products;