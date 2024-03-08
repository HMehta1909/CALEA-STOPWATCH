import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import DisplayPhotos from './photo-list-display'

function App() {
  const [photoList, setPhotoList] = useState([{}])

  
  const getPhotoList = async()=>{
    //using axios
    axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(
            (res)=>{
              setPhotoList(res.data);
              
            }
        )
        
        
}
// setPhotoList(photoList);
useEffect(()=>{
console.log(photoList)
setPhotoList(photoList)
},[photoList])





  return (
    <div className="App">
      <DisplayPhotos photoList={photoList}></DisplayPhotos>
    </div>
  );
}

export default App;
