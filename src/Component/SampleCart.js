const SampleCart = (props) => {
  return (
    <>
      <div id="cart_container">
        <div id='cart_foto"'>
          <img id="cart_img" src={props.img} alt="" />
        </div>

        <div id="cart_info">
          <div style={{ marginTop: "-4%" }}>
            <h1 id="cart_info_name">{props.kls}</h1>
            <p id="cart_info_collection">{props.collection}</p>
            <p id="cart_info_article">{props.article}</p>
          </div>

          <div className="cart_info1">
            <div className="info_properties">
              Size: <p className="info_values">{props.size}</p>
            </div>
            <div className="info_properties">
              Color: <p className="info_values">{props.color}</p>{" "}
            </div>
            <div id="qua_container">
              <div className="info_properties">Quatity:</div>
              <div id="qua_div">
                <p>-</p>
                <p className="info_values">{props.quatity}</p>
                <p>+</p>
              </div>
            </div>
          </div>

          <div id="price_container">
            <div className="info_properties">
              Price: <p className="info_values">{props.price}</p>
            </div>
            <div id="info_delete">Delete</div>
          </div>

        </div>
      </div>
    </>
  );
};

export default SampleCart;
