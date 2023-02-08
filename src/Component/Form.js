import "../Styles/Form.css";

const Form = (props) => {
  return (
    <div style={{ width: "49%" }}>
      <div>
        <h2 className="form_heading">City</h2>
        <div>
          <form>
            <label for="city"></label>
            <input
              className="short_input"
              type="text"
              id="city"
              name="city"
              placeholder="Enter city"
            ></input>
          </form>
        </div>

        <div>
          <h2 className="form_heading">Address</h2>
          <form>
            <label for="address"></label>
            <input
              style={{ marginBottom: "56px" }}
              className="long_input"
              type="text"
              id="address"
              name="address"
              placeholder="Enter address"
            ></input>
          </form>
        </div>

        <div>
          <h2 className="form_heading">Recipient's details</h2>
          <form>
            <p className="sub_input_label" style={{ marginTop: "30px" }}>
              Name and surname
            </p>
            <label for="name"></label>
            <input
              className="long_input"
              type="text"
              id="namee"
              name="phone"
              placeholder="Enter phone number"
            ></input>
          </form>
          <p className="sub_input_label">Phone</p>
          <form>
            <label for="phone"></label>
            <input
              className="long_input"
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
            ></input>
          </form>
          <p className="sub_input_label">Email</p>
          <form>
            <label for="email"></label>
            <input
              className="long_input"
              type="text"
              id="email"
              name="email"
              placeholder="Enter email"
            ></input>
          </form>
          <div>
            <h2 className="form_heading" style={{ marginTop: "56px" }}>
              Payment method
            </h2>
            <button className="payment_method">Payment card</button> <br></br>
            <button
              className="payment_method"
              style={{ marginBottom: "57.5px" }}
            >
              Cash on delivery
            </button>
          </div>
          <div style={{ display: "flex", marginBottom: "32px" }}>
            <div>
              <input
                input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value="checkbox 1"
              ></input>
            </div>
            <div style={{ marginTop: "-1.5%", marginLeft: "2.5%" }}>
              <p id="checkbox_label">
                I agree to the terms of the offer and the loyalty policy
              </p>
            </div>
          </div>
          <button id="order_btn">Place an order</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
