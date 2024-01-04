import React, {useState, useEffect} from 'react';
import './Login.css';

function Login(){
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [logged, setLogged] = useState(false);

    const checkFormat = () => {
        const errors = {};
        if (!userName.trim()) {
            errors.userName = 'Nie podano lub zła nazwa';
          }
      
          if (!password.trim()) {
            errors.password = 'Nie podano lub złe hasło';
          }
      
          return errors;
    }

    const logoutMethod = () =>{
        setLogged(false);
        userName = setUserName('');
        password = setPassword('');
    }

    const loginMethod = (event) => {
        event.preventDefault();
        const errors = checkFormat();
        if(Object.keys(errors).length === 0){
            console.log('nazwa: ' ,{userName}, ' hasło: ', {password});
            if(data.some(item => item.name === userName)){
                setLogged(true);
            }
            else{                
                setLogged(false);
            }
        }
        else{
            setErrors(errors);
        }       
    }

    useEffect(() => {
        async function fetchData() {
           try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Błąd pobierania danych:', error);
            } finally {
                setLoading(false);                
            }
        }
        fetchData();
    }, [])

    return(
        <div className="login-container">
            {logged ?(
                <>
                <h2>Witaj ponownie {userName}</h2>
                <button onClick={logoutMethod}>Wyloguj</button>
                </>                
            ):( 
            <>
            <h2>Strona Logowania</h2>
	        <form onSubmit={loginMethod} className="login-form">
		        <div className="form-group">
			        <label>Nazwa:            
				        <input
                        type="text"
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value);
                            setErrors({ ...errors, userName: '' });
                          }}
                        />
                        {errors.userName && <span className="error-message">{errors.userName}</span>}
			        </label>
		        </div>
		        <div className="form-group">
			        <label>Hasło:
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setErrors({ ...errors, password: '' });
                        }}
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
			        </label>
		        </div>
		        <div className="form-group">
			        <button type="submit">Zaloguj</button>
		        </div>
	        </form>    
            </>
            )}      
        </div>
    );
};

export default Login;