import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
  getTotals,
} from "features/cartSlice";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
function Cart() {
  const cart = useSelector((state) => state.cartSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  return (
    <div className="container mx-auto px-3 py-8">
      <h2 className="font-normal text-3xl text-center">Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="mt-8 text-xl text-gray-400 flex flex-col items-center">
          <p> You cart is currently empty</p>
          <div className="mt-4">
            <Link
              to="/"
              className="flex items-center no-underline text-gray-400 hover:text-gray-700 transition-all"
            >
              <BsArrowLeft />
              <span className="ml-2">Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="mt-8 mb-4 mx-0 grid items-center grid-cols-template-col-1 gap-x-2">
            <h3 className="font-normal text-sm uppercase pl-2">Product</h3>
            <h3 className="font-normal text-sm uppercase">price</h3>
            <h3 className="font-normal text-sm uppercase">quantity</h3>
            <h3 className="font-normal text-sm uppercase pr-2 justify-self-end">
              total
            </h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div
                className="grid items-center grid-cols-template-col-1 gap-x-2 border-t border-[#bbb] border-solid py-4"
                key={cartItem.productId}
              >
                <div className="flex">
                  <img
                    src={cartItem.imgUrl}
                    alt={cartItem.title}
                    className="max-w-full w-[100px] mr-4"
                  />
                  <div>
                    <h3 className="font-normal">{cartItem.title}</h3>
                    <p>{cartItem.description}</p>
                    <button
                      onClick={() => handleRemoveFromCart(cartItem)}
                      className="cursor-pointer border-none outline-none mt-3 bg-none text-gray-500 hover:text-black transition-all"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-product-price">${cartItem.price}</div>
                <div className="flex items-start justify-center w-32 max-w-full border-[.5px] border-solid border-gray-400 rounded">
                  <button
                    onClick={() => handleDecreaseCart(cartItem)}
                    className="border-none outline-none bg-none py-3 px-6 cursor-pointer"
                  >
                    -
                  </button>
                  <div className="py-3">{cartItem.cartQuantity}</div>
                  <button
                    onClick={() => handleIncreaseCart(cartItem)}
                    className="border-none outline-none bg-none py-3 px-6 cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <div className="justify-self-end font-bold pr-2">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center border-t border-solid border-[#bbb] pt-8">
            <button
              onClick={() => dispatch(clearCart())}
              className="max-w-full w-32 h-10 rounded text-gray-400 font-normal tracking-widest border-gray-400 border-solid border bg-none outline-none cursor-pointer"
            >
              Clear Cart
            </button>
            <div className="max-w-full w-[270px]">
              <div className="flex justify-between text-xl">
                <span>SubTotal</span>
                <span className="font-bold">${cart.cartTotalAmount}</span>
              </div>
              <p className="text-sm font-extralight my-2 ">
                Taxes and shipping calculated at checkout
              </p>
              <button className="w-full h-10 rounded text-white bg-blue-400 font-normal tracking-widest  border-none bg-none outline-none cursor-pointer">
                Check out
              </button>
              <div className="mt-4 ">
                <Link
                  to="/"
                  className="flex items-center no-underline text-gray-500"
                >
                  <BsArrowLeft />
                  <span className="ml-2">Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
