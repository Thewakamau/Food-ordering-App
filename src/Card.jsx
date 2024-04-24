function Card(props) {
  const { restraunt } = props;
  const { name, img, cuisine, rating, time } = restraunt;
  {
    /*destructuring restraunt*/
  }
  return (
    <div className='card'>
      <h3>Name: {name}</h3>
      {/*You can destructure the object props and feed them directly like arguements. The card is receiving data as a prop */}
      <img className='meals' src={img} alt='fried chicken' />
      <h4>Cuisine {cuisine}</h4>
      <h4>Rating {rating}</h4>
      <h4>{time} minutes</h4>
    </div>
  );
}
export default Card;
