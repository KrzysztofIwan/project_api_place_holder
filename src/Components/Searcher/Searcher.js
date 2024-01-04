// import React, { useState, useEffect } from 'react';

// function Home(props) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Błąd pobierania danych:', error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []); // Pusta tablica oznacza, że useEffect zostanie uruchomiony tylko raz po zamontowaniu komponentu

//   return (
//     <div>
//       <h1>Do zrobienia w HOME</h1>
//       <h4>
//         1. użytkownicy wszyscy<br />
//         przeglądanie folderów<br />
//         przeglądać zdjęcia <br />
//         filtrować zdjęć po konkretnym userze <br />
//         2. użytkownik jest zalogowany<br />
//         możliwość dodawania nowych zdjęć<br />
//         możliwość usuwania zdjęć należących do użytkownika zalogowanego<br />
//       </h4>
//       {loading ? (
//         <p>Ładowanie...</p>
//       ) : (
//         <div>
//           <h2>Dane z API:</h2>
//           <ul>
//             {data.map((item) => (
//               <li key={item.id}>
//                 <ul>
//                     <li>user id: {item.userId}</li>
//                     <li>tytuł: {item.title}</li>
//                     <li>ciało: {item.body}</li>
//                     <li>id posta: {item.id}</li>
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;