import FableFoto from "../Asset/FableFoto.svg";

const CardPoint = () => {
  return (
    <>
      <div id="cardpoint_container">
        <div className="cardpoint_img">
          <img src={FableFoto} alt="" />
        </div>
        <div style={{ padding: "5%" }}>
          <div className="cardpoint_info">
            <p>Bonus Card</p>
            <p>250 points</p>
          </div>
          <div className="cardpoint_info_">
            <p>Cashback</p>
            <p>5%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPoint;
