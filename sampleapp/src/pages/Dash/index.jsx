
import './.../App.css';
import Home from './pages/Home';

import { useSelector, useDispatch } from 'react-redux';
import { fetchDogImage } from './store/store';

const DogImageLoader = () => {
  const dispatch = useDispatch();
  const dogImage = useSelector((state) => state.dogImage);

  const handleButtonClick = () => {
    dispatch(fetchDogImage());
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick}>Load Dog Image</button>
      {dogImage.status === 'loading' && <p>Loading...</p>}
      {dogImage.status === 'succeeded' && <img src={dogImage.imageUrl} alt="A cute dog" />}
      {dogImage.status === 'failed' && <p>Error: {dogImage.error}</p>}
    </div>
  );
};

export default DogImageLoader;
