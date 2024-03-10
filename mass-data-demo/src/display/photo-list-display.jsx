// photo-list-display.js
import React from 'react';
import './photo-list-display.css'
const DisplayPhotos = ({ photoList }) => {
  return (
    <>
    <h2>Data Display of 15000 Rows</h2>
    <table id="data">
      <thead>
        <tr>
          <th>Album ID</th>
          <th>ID</th>
          <th>Title</th>
          <th>URL</th>
          <th>Thumbnail URL</th>
        </tr>
      </thead>
      <tbody>
        {photoList.map(photo => (
          <tr key={photo.id}>
            <td>{photo.albumId}</td>
            <td>{photo.id}</td>
            <td>{photo.title}</td>
            <td>{photo.url}</td>
            <td><img src= {photo.thumbnailUrl} width="20px" height="20px"/></td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
    
  );
};

export default DisplayPhotos;
