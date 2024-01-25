import React, { useEffect, useState } from "react";
import './Searcher.css';
const PhotoSearchEngine = () => {
    const [photos, setPhotos] = useState([]);
    const [selectedPhotoId, setSelectedPhotoId] = useState('');
    const [photoData, setPhotoData] = useState(null);
    const [users, setUsers] = useState([]);
    const [selectedUsersId, setSelectedUsersId] = useState('');
    const [usersData, setUsersData] = useState(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                const data = await response.json();
                setPhotos(data);
            
        };
        fetchPhotos();
    }, []);

    useEffect(() => {
        const fetchUsers = async() => {

            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const PhotoSearch =  () => {
        const selectedPhoto = photos.find(photo => photo.id === parseInt(selectedPhotoId));
        setPhotoData(selectedPhoto);
    };

    const UserSearch = async () => {
        const selectedUsers = users.find(users => users.id === parseInt(selectedUsersId));
        setUsersData(selectedUsers);
    };
    
    return (
        <div>
            <h2>Wyszukaj zdjęcie</h2>
            <select className="select-searcher" onChange={(e) => setSelectedPhotoId(e.target.value)}>
                <option value="" disabled>Wybierz ID</option>
                {photos.map((photo) => (
                    <option key={photo.id} value={photo.id}>
                {photo.id}
                    </option>
                ))}
            </select>
            <button className="searcher" onClick={PhotoSearch}>Wyszukaj</button>

            {photoData && (
                <div>
                    <h3>Szczegóły zdjęcia</h3>
                    <p>ID: {photoData.id}</p>
                    <p>Tytuł: {photoData.title}</p>
                    <img src={photoData.url} alt={photoData.tiltle}/>
                </div>

            )}
            <h2>Wyszukaj użytkownika</h2>
            <select className="select-searcher" onChange={(e) => setSelectedUsersId(e.target.value)}>
                <option value="" disabled>Wybierz ID</option>
                {users.map((users) => (
                    <option key={users.id} value={users.id}>
                        {users.id}
                    </option>
                ))}
            </select>
            <button className="searcher" onClick={UserSearch}>Wyszukaj</button>

            {usersData && (
                <div>
                    
                    <ul className="profile-list">
                    <li className="profile-list-item">
                        <h4>Imie i nazwisko</h4>
                        <p>{usersData.name}</p>                      
                    </li>
                    <li className="profile-list-item">
                        <h4>Email</h4>
                        <p>{usersData.email}</p>                        
                    </li>
                    <li className="profile-list-item">
                        <ul className="address-list">
                            <li className="address-list-item">
                                <h4>Adres domowy</h4>
                                <p>Ulica: {usersData.address.street}</p>
                                <p>Suite: {usersData.address.suite}</p>
                                <p>Miasto: {usersData.address.city}</p>
                                <p>Kod pocztowy: {usersData.address.zipcode}</p>
                            </li>
                        </ul>
                    </li>
                    <li className="profile-list-item">
                        <h4>Telefon</h4>
                        <p>{usersData.phone}</p>
                    </li>
                    <li className="profile-list-item">
                        <h4>Strona internetowa</h4> 
                        <p>{usersData.website}</p>
                    </li>
                    <div className="company-data">
                        <li> 
                            <h2>Dane firmy</h2>
                            <ul className="profile-list">
                                <li className="profile-list-item">
                                    <h4>Nazwa</h4>
                                    <p>{usersData.company.name}</p>
                                </li>
                                <li className="profile-list-item">
                                    <h4>Fraza firmy</h4>
                                   <p>{usersData.company.catchPhrase}</p> 
                                </li>
                                <li className="profile-list-item">
                                    <h4>BS</h4>
                                    <p>{usersData.company.bs}</p>
                                </li>
                            </ul>
                        </li>    
                    </div>                    
                </ul>
                </div>
            )}
        </div>
    
    )
}
export default PhotoSearchEngine;