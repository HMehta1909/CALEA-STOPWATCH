import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import DisplayPhotos from './display/photo-list-display'

function App() {
  const [photoList, setPhotoList] = useState([]);

  const getPhotoList = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
      setPhotoList([...response.data, ...response.data, ...response.data]);
    } catch (error) {
      console.error('Error fetching photo list:', error);
    }
  };

  useEffect(() => {
    getPhotoList();
    
    console.log(photoList)
  }, []); 
  
  return (
    <div className="App">
      <DisplayPhotos photoList={photoList}></DisplayPhotos>
    </div>
  );
}

export default App;
