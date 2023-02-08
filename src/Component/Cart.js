import "../Styles/Cart.css";
import SampleCart from "./SampleCart";
import Sample1 from "../Asset/Sample1.svg";
import Sample2 from "../Asset/Sample2.svg";
import Sample3 from "../Asset/Sample3.svg";
import SummaryCart from "./SummaryCart";

const Cart = (props) => {
  return (
    <div style={{ width: "49%" }}>
      <div id="List_container">
        <div className="card_bag">
          <SampleCart
            img={Sample1}
            kls={"Jacket KLS"}
            collection={"Collection: KLASSIK OF FABLE"}
            article={"Article: M0592001"}
            size={"M"}
            color={"black"}
            quatity={"1"}
            price={"$105"}
          />
        </div>
        <div className="card_bag">
          <SampleCart
            img={Sample2}
            kls={"Shirt KLS"}
            collection={"Collection: KLASSIK OF FABLE"}
            article={"Article: A0521005"}
            size={"M"}
            color={"black"}
            quatity={"1"}
            price={"$105"}
          />
        </div>
        <div className="card_bag">
          <SampleCart
            img={Sample3}
            kls={"Trouser KLS"}
            collection={"Collection: KLASSIK OF FABLE"}
            article={"Article: H0522001"}
            size={"M"}
            color={"black"}
            quatity={"1"}
            price={"$105"}
          />
        </div>
        
      </div>
      <div id="card_bag_summary">
        <SummaryCart />
      </div>
    </div>
  );
};

export default Cart;
