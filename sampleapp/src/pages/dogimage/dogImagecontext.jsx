
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogImage, selectDogImage } from "../../store/dog";
import { Button } from "@mui/material";
import './dogImage.css';

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
      <div className="main">
        <h1>Dog</h1>
        {dogData ? (
          <>
            <div className="image">
              <img src={dogData.message} alt="Dog" />
            </div>
            <Button onClick={handleClick} variant="outlined">
              Refresh
            </Button>
          </>
        ) : (
          <div>data not found</div>
        )}
      </div>
    </>
  );
}  

export default DogImage;
