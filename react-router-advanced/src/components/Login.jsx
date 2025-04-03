const Login = ({ authenticate }) => {
    return (
      <div>
        <h2>Login</h2>
        <button onClick={authenticate}>Login</button>
      </div>
    )
  }
  
  export default Login