
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogImage, selectDogImage } from "../../store/dog";

const DogImage = () => {
  const dispatch = useDispatch();
  const dogData = useSelector(selectDogImage);
  
  

  useEffect(() => {
    dispatch(fetchDogImage());
  }, [dispatch]);

  const handleClick = ()=>{
    dispatch(fetchDogImage());
  }

  return (
    <>
      <h1>Dog</h1>
      { dogData? (<>
        <img src={dogData.message} alt="" />
        <button onClick={handleClick}>Refresh</button>
        </>)
      :(
      <> 
      <div>data not found</div>
       
      </>)
      }
      
    </>
  );
};

export default DogImage;
