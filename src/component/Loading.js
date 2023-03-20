import Skeleton from "react-loading-skeleton";
function Loading({ cards }) {
  return Array(cards)
    .fill(0)
    .map((_, i) => {
      return (
        <>
          <Skeleton className="col-md-3 mb-4" key={i}>
            <div className="card h-100 text-center p-4" width={"18rem"}>
              <Skeleton className="card-img-top" height={250} />
              <div className="card-body">
                <Skeleton className="card-title" />
                <Skeleton className="card-text lead fw-bold" />
                <Skeleton className="btn btn-outline-dark" />
              </div>
            </div>
          </Skeleton>
        </>
      );
    });
}

export default Loading;
