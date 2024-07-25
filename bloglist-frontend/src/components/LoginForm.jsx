const LoginForm = ({ onLogin,username,handleUsernameChange,password,handlePassChange }) => {
  return(<div>
    <form onSubmit = {onLogin}>
      <div>
                Username: <input value ={username} onChange ={handleUsernameChange} />
      </div>
      <div>
                Password: <input type = 'password' value ={password} onChange ={handlePassChange} />

      </div>
      <div>
        <button type ='submit '>login</button>
      </div>

    </form>

  </div>
  )
}
export default LoginForm