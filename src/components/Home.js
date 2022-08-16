import { useGetAllProductsQuery } from "../features/productsApi";

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log(data, "veri");

  return (
    <div className="py-8 px-16">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error ocuured</p>
      ) : (
        <>
          <h2 className="text-[2.5rem] font-semibold text-center">
            New Arrivals
          </h2>
          <div className="flex justify-between mt-8 flex-wrap ">
            {data?.map((product) => (
              <div
                key={product.productId}
                className="w-64 h-96 max-w-full flex justify-between flex-col my-4 mx-auto rounded-2xl p-4 shadow-shadow-1"
              >
                <h3 className="font-normal text-2xl">{product.title}</h3>

                <img
                  src={product.imgUrl}
                  alt={product.titlel}
                  className="mx-auto w-4/5"
                ></img>

                <div className="flex justify-between items-center">
                  <span>{product.description}</span>
                  <span className="font-bold text-xl">{product.price}</span>
                </div>
                <button className="w-full h-11 rounded-md mt-8 font-normal border-none cursor-pointer outline-none bg-blue-700  text-white tracking-[1.15px]">
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
