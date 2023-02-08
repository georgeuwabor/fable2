const SummaryCart = () => {
  return (
    <>
      <div id="flex_column">
        <div className="flex_content">
          <p>Summary:</p>
          <p>$340</p>
        </div>
        <div className="flex_content">
          <p>Delivery: </p>
          <p>$0</p>
        </div>
        <div className="flex_content">
          <p>Promocode:</p>
          <p>$340</p>
        </div>
      </div>

      <div className="flex_content">
        <p className="summary_details">
          <strong>Total:</strong>
        </p>
        <p className="summary_details">
          <strong>$340</strong>
        </p>
      </div>

      <div className="input_container">
        <input className="input_details" placeholder="Enter promocode" />
        <button className="btn_details">Apply</button>
      </div>
    </>
  );
};

export default SummaryCart;
