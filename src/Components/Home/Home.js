import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    async function fetchAlbums(){
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      const data = await response.json();
      setAlbums(data);
    }
    fetchAlbums();
  }, []);

  useEffect(() => {
    async function fetchUsers(){
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  },[]);
 
  useEffect(() => {
    async function fetchAlbums(){
      let endpoint = 'https://jsonplaceholder.typicode.com/albums';
      if (selectedUser){
        endpoint += `?userId=${selectedUser}`;
      }
      const response = await fetch(endpoint);
      const data = await response.json();
      setAlbums(data);
    }
    fetchAlbums();
  }, [selectedUser]);
  
  const fetchPhotosForAlbum = async (albumId) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    const filteredPhotos = data.filter(photo => photo.albumId === albumId);
    setPhotos(filteredPhotos);
  };

  const handleAlbumClick = (albumId) => {
    setSelectedAlbum(albumId);
    fetchPhotosForAlbum(albumId);
  }

  const handleDeletePhoto = async (photoId) => {
    const updatedPhotos = photos.filter((photo) => photo.id !== photoId);
    setPhotos(updatedPhotos);
  }
  return (
        <div>
          <h2>Galeria</h2>
          <select className='select-users-albums' onChange={(e) => setSelectedUser(e.target.value)}>
            <option value="">Wybierz użytkownika</option>
            {users.map(user =>(
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>

        {selectedAlbum ? (
          <>
          <button className='button-return' onClick={() => setSelectedAlbum(null)}>Powrót do albumów</button>
          <h2>Zdjęcia w albumie {selectedAlbum}</h2>
          <div className='show-photo'>
              {photos.map(photo => (
                <div className='photo' key={photo.id}>
                  <img src={photo.url} alt={photo.title}/>
                  <button className='button-photo-delete' onClick={() => handleDeletePhoto(photo.id)}>Usuń zdjęcie</button>  
                </div>
              ))}
          </div>
          </>
      ) : (
        <>
        <h2>Albums</h2>
        <ul>
          {albums.map(album => (
            <button className='albums' key={album.id} onClick={() => handleAlbumClick(album.id)}>{album.title}</button>
          ))}
        </ul>
        </>
      )}
     </div>
      );
     
    } 
        
        
export default Home;