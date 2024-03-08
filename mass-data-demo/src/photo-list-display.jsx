// photo-list-display.js
import React from 'react';

const DisplayPhotos = ({ photoList }) => {
  return (
    <table>
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
            <td><img src= {photo.thumbnailUrl} width="20px" height={"20px"}/></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayPhotos;
