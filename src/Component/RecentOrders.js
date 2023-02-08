const RecentOrder = (props) => {
  return (
    <>
      <div id="recent_orders_container">
        <div id="recent_orders_heading_container">
          <h1 className="recent_orders_heading">
            <strong>Recent orders</strong>
          </h1>
        </div>
        <div id="recent_orders">
          <div className="flex_order">
            <p className="flex_order_heading">Number</p>
            <p className="flex_order_heading" style={{ width: "50%" }}>
              Order
            </p>
            <p className="flex_order_heading">Date</p>
            <p className="flex_order_heading">Summary</p>
          </div>
          <div id="recent_details">
            <p className="flex_details">{props.Number}</p>
            <p className="flex_details" style={{ width: "50%" }}>
              {props.Order}
            </p>
            <p className="flex_details">{props.Date}</p>
            <p className="flex_details">{props.Summary}</p>
          </div>
          <div id="recent_details">
            <p className="flex_details">{props.Number}</p>
            <p className="flex_details" style={{ width: "50%" }}>
              {props.Order}
            </p>
            <p className="flex_details">{props.Date}</p>
            <p className="flex_details">{props.Summary}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentOrder;
