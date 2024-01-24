import React, {useState, useEffect} from 'react';
import { useCookies } from 'react-cookie';
import './Login.css';

function Login({onLogin}){
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cookies, removeCookie] = useCookies(['userData']);

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
        removeCookie('userData');
        setUserName('');
        setPassword('');
    }

    const loginMethod = (event) => {
        event.preventDefault();
        const errors = checkFormat();
        if(Object.keys(errors).length === 0){            
            if(data.some(item => item.username === userName)){                
                const UserDataJson = (data.find(x => x.username === userName));
                if(UserDataJson)
                {
                    let userId = UserDataJson.id;
                    console.log("ID użytkownika: ", userId);
                    onLogin({ userName, password, userId});
                }
               else
               {
                    console.log("nie udało sie zalogować");
               }
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
            {cookies.userData?.userName !== undefined ?(
                <>
                <h2>Witaj ponownie {cookies.userData?.userName}</h2>
                <button className='button-logout' onClick={logoutMethod}>Wyloguj</button>
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
			        <button className='button-login' type="submit">Zaloguj</button>
		        </div>
	        </form>    
            </>
            )}      
        </div>
    );
};

export default Login;