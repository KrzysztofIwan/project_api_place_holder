import React, { useState, useEffect } from 'react';

function Home(props) {
  return(
    <div>
       <h1>Do zrobienia w HOME</h1>
      <h4>
         1. użytkownicy wszyscy<br />
         przeglądanie folderów<br />
         przeglądać zdjęcia <br />
        filtrować zdjęć po konkretnym userze <br />
                 2. użytkownik jest zalogowany<br />
         możliwość dodawania nowych zdjęć<br />
        możliwość usuwania zdjęć należących do użytkownika zalogowanego<br />
       </h4>
  </div>
  );
}

export default Home;