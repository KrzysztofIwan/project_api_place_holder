import React, {useState, useEffect} from 'react';
import { useCookies } from 'react-cookie';
import "./UserProfil.css";

function UserProfil(){
    const [cookies] = useCookies(['userData']);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
          try {
            if (cookies?.userData?.userId !== undefined) {
              const response = await fetch('https://jsonplaceholder.typicode.com/users/' + cookies.userData.userId.toString());
              const jsonData = await response.json();
              setData(jsonData);
            }
          } catch (error) {
            console.error('Błąd pobierania danych:', error);
          }
        }      
        fetchData();
      }, [cookies.userData.userId, data]);


    return(
        <div>
            <h1>Profil użytkownika</h1>
            {data.name !== undefined && data.name !== null
            ? (<><ul className="profile-list">
                    <li className="profile-list-item">
                        <h4>Imie i nazwisko</h4>
                        <p>{data.name}</p>                      
                    </li>
                    <li className="profile-list-item">
                        <h4>Email</h4>
                        <p>{data.email}</p>                        
                    </li>
                    <li className="profile-list-item">
                        <ul className="address-list">
                            <li className="address-list-item">
                                <h4>Adres domowy</h4>
                                <p>Ulica: {data.address.street}</p>
                                <p>Suite: {data.address.suite}</p>
                                <p>Miasto: {data.address.city}</p>
                                <p>Kod pocztowy: {data.address.zipcode}</p>
                            </li>
                        </ul>
                    </li>
                    <li className="profile-list-item">
                        <h4>Telefon</h4>
                        <p>{data.phone}</p>
                    </li>
                    <li className="profile-list-item">
                        <h4>Strona internetowa</h4> 
                        <p>{data.website}</p>
                    </li>
                    <div className="company-data">
                        <li> 
                            <h2>Dane firmy</h2>
                            <ul className="profile-list">
                                <li className="profile-list-item">
                                    <h4>Nazwa</h4>
                                    <p>{data.company.name}</p>
                                </li>
                                <li className="profile-list-item">
                                    <h4>Fraza firmy</h4>
                                   <p>{data.company.catchPhrase}</p> 
                                </li>
                                <li className="profile-list-item">
                                    <h4>BS</h4>
                                    <p>{data.company.bs}</p>
                                </li>
                            </ul>
                        </li>    
                    </div>                    
                </ul></>) 
            : (<h1>Nie udało się załadować profilu użytkownika!!!</h1>)
            }
        </div>
    );
}

export default UserProfil;