import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
