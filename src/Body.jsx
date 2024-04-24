import Card from "./Card";
import { useState, useEffect } from "react";
import data from "./Utilities/data";

function Body() {
  const [restrauntList, setrestrauntList] = useState(data);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&collection=83667&tags=layout_CCS_Sandwiches&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    console.log(json);
  };
  return (
    <div className='body'>
      <button
        className='btn-filter'
        onClick={() => {
          const filteredList = restrauntList.filter((res) => res.rating < 3);
          setrestrauntList(filteredList);
        }}
      >
        Top Rated Restraunts
      </button>

      <div className='restraut-container'>
        <div className='rescard'>
          {restrauntList.map((mappedRestraut) => (
            <Card key={mappedRestraut.id} restraunt={mappedRestraut} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Body;
