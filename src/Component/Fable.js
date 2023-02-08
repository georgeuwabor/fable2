import "../Styles/Fable.css";
import SubNav from "./SubNav";
const Fable = (props) => {
  return (
    <>
  <SubNav name={'Fable of Klassik'} tag={'Jacket'} />
      <div id="con_div">
        <div id="fable_foto">
          <img src={props.img} alt="" />
        </div>
        <div id="fable_cart">
          <h1 className="name">{props.name}</h1>
          <h1 className="price" style={{ marginBottom: "10%" }}>
            {props.price}
          </h1>
          <button className="btn-cart" style={{ marginBottom: "5%" }}>
            Add to cart
          </button>
          <h3>Product Info</h3>
          <p style={{ marginRight: "15%", marginTop: "-1%" }}>
           {props.desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default Fable;
