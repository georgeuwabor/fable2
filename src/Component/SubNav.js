const SubNav = (props) => {
  return (
    <>
      <div id="shopping_details">
        <p>{props.name}</p>
        <p>-</p>
        <p>{props.tag}</p>
      </div>
    </>
  );
};

export default SubNav;
