import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img src="/a.webp" className="card-img" alt="..." height={"550px"} />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container ">
            <h5 className="card-title display-3 fw-border mb-0">NEW SEASION</h5>
            <p className="card-text">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
