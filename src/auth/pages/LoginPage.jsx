import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const [name = '', setName] = useState();

  const { login } = useContext( AuthContext );

  const navigate = useNavigate();

  const onInputChange = (e) => {
    setName(e.target.value.trim());
  }

  const onFormSubmit = (e) => {

    e.preventDefault();

    if(!name && name.trim().length <= 1) return;
    
    let lastPath = '/';
    const userName = localStorage.getItem('userName') || name;

    if( userName === name ) {
      lastPath = localStorage.getItem('lastPath');
    }
    
    login(name);

    navigate(lastPath, {
      replace: true
    })

  }



  return (
    <>
      <div className="container mt-5">
        <h1>LoginPage</h1>
        <hr />

        <form onSubmit={onFormSubmit}>
          <input type="text" placeholder="Type your name" name="userName" className="mx-3" onChange={onInputChange} />
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </>
  )
}
