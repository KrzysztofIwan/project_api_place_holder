import React, { useEffect, useState } from "react";

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
            <select onChange={(e) => setSelectedPhotoId(e.target.value)}>
                <option value="" disabled>Wybierz ID</option>
                {photos.map((photo) => (
                    <option key={photo.id} value={photo.id}>
                {photo.id}
                    </option>
                ))}
            </select>
            <button onClick={PhotoSearch}>Wyszukaj</button>

            {photoData && (
                <div>
                    <h3>Szczegóły zdjęcia</h3>
                    <p>ID: {photoData.id}</p>
                    <p>Tytuł: {photoData.title}</p>
                    <img src={photoData.url} alt={photoData.tiltle}/>
                </div>

            )}
            <h2>Wyszukaj użytkownika</h2>
            <select onChange={(e) => setSelectedUsersId(e.target.value)}>
                <option value="" disabled>Wybierz ID</option>
                {users.map((users) => (
                    <option key={users.id} value={users.id}>
                        {users.id}
                    </option>
                ))}
            </select>
            <button onClick={UserSearch}>Wyszukaj</button>

            {usersData && (
                <div>
                    
                    <h3>Szczegóły użytkownika</h3>
                    <p>ID: {usersData.id}</p>
                    <p>Imię: {usersData.name}</p>
                    <p>Nick: {usersData.username}</p>
                    <p>E-Mail: {usersData.email}</p>
                    <h5>Adres zamieszkania:</h5>
                    <p>Ulica: {usersData.address.street}</p>
                    <p>Nr. mieszkania: {usersData.address.suite}</p>
                    <p>Miasto: {usersData.address.city}</p>
                    <p>Kod pocztowy: {usersData.address.zipcode}</p>
                    <h6>Współrzędne:</h6>
                    <p>Szerokość geograficzna: {usersData.address.geo.lat}</p>
                    <p>Długość geograficzna: {usersData.address.geo.lng}</p>
                    <p>Numer telefonu: {usersData.phone}</p>
                    <p>Adres strony internetowej: {usersData.website}</p>
                    <h5>Miejsce pracy</h5>
                    <p>Nazwa firmy: {usersData.company.name}</p>
                    <p>Slogan firmy: {usersData.company.catchPhrase}</p>
                    <p>Działalność biznesowa: {usersData.company.bs}</p>
                </div>
            )}
        </div>
    
    )
}
export default PhotoSearchEngine;