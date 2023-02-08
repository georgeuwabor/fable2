import Hello from "./Hello";
import "../Styles/HelloName.css";
import CardPoint from "./CardPoint";
import RecentOrder from "./RecentOrders";

const HelloName = (props) => {
  return (
    <>
      <div>
        <Hello name={"Darya!"} />
        <CardPoint />
        <RecentOrder
          Number={849234}
          Order={"Jacket KLS Black M, Trousers KLS Black M, Shirt KLS White M"}
          Date={"20.09.2022"}
          Summary={"€" + 180}
        />
      </div>
    </>
  );
};

export default HelloName;
