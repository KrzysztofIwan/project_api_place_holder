import React, {useState, useEffect} from 'react';
import { useCookies } from 'react-cookie';

function UserProfil(){
    const [cookies] = useCookies(['userData']);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
           try 
           {
                if(cookies?.userData?.userId !== undefined){
                    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + cookies.userData.userId.toString());
                    const jsonData = await response.json();
                    setData(jsonData);
                }                
            } catch (error) {
                console.error('Błąd pobierania danych:', error);
            }
        }
        fetchData();
    }, [])


    return(
        <div>
            <h1>Profil użytkownika</h1>
            {data !== undefined
            ? (<><ul>
                    <li>Imie i nazwisko:  {data.name}</li>
                    <li>Email: {data.email}</li>
                    <li>Adres:
                        <ul>
                            <li>Ulica: {data.address.street}</li>
                            <li>Suite: {data.address.suite}</li>
                            <li>Miasto: {data.address.city}</li>
                            <li>Kod pocztowy: {data.address.zipcode}</li>
                        </ul>
                    </li>
                    <li>Telefon: {data.phone}</li>
                    <li>Strona internetowa: {data.website}</li>
                </ul></>) 
            : (<h1>Nie udało się załadować profilu użytkownika!!!</h1>)
            }
        </div>
    );
}

export default UserProfil;