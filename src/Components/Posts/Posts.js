import React, {useState, useEffect} from 'react';
import './Posts.css';

function Posts(){
    const [posts, setPosts] = useState([]);
    const [selectedPosts, setSelectedPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [postsCount, setPostCount] = useState(0);

    useEffect(() => {
        async function fetchData() {
           try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const jsonData = await response.json();
                setPosts(jsonData);
            } catch (error) {
                console.error('Błąd pobierania danych:', error);
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        async function fetchData() {
           try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const jsonData = await response.json();
                setUsers(jsonData);
            } catch (error) {
                console.error('Błąd pobierania danych:', error);
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        async function fetchPosts(){
          let endpoint = 'https://jsonplaceholder.typicode.com/posts';
          if (selectedUser){
            endpoint += `?userId=${selectedUser}`;
          }
          const response = await fetch(endpoint);
          const data = await response.json();
          setSelectedPosts(data);
        }
        fetchPosts();
      }, [selectedUser]);

      useEffect(() => {
        const postElements = document.querySelectorAll('.post');
        setPostCount(postElements.length);
      }, [selectedPosts]);

    return (
       <div>
            <h1>Filter Użytkownicy</h1>
            <select  className = "post-user-select" onChange={(e) => setSelectedUser(e.target.value)}>
            <option value="" className='post-user-select-options'>Wybierz użytkownika</option>
            {users.map(user =>(
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
                
          
            {selectedUser !== '' ? (
            <>
            <h1>Posty</h1>
            <h3>Liczba postów wybranego użytkownika: {postsCount}</h3>
            {selectedPosts.map(post => (
                <div key={post.id} className = "post">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
                
            </>
            )
            : (
            <>
            <h1>Wszystkie posty</h1>
            <h3>Liczba wszystkich postów: {postsCount}</h3>
            {posts.map(post => (
                <div key={post.id} className = "post">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
            ))}
            </>
            )}
       </div>
    );    
}

export default Posts;