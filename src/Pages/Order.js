import Navbar from "../Component/Navbar";
import Form from "../Component/Form";
import Cart from "../Component/Cart";
import SubNav from "../Component/SubNav";
const Order = () => {
  return (
    <>
      <Navbar />
      <SubNav name={"Shopping Bag"} tag={"Order"} />

      <div id="con_div">
        <Form name={"Shopping Bag"} order={"Order"} />
        <Cart />
      </div>
    </>
  );
};

export default Order;
