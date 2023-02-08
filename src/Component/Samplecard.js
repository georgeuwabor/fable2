const Sample = (props) => {
  return (
    <>
      <div>
        <img src={props.img} alt="" id="sample_card_img"/>
        <div className="jacket">
          <p id="name">{props.name}</p>
          <p id="price">{props.price}</p>
        </div>
      </div>
    </>
  );
};

export default Sample;
