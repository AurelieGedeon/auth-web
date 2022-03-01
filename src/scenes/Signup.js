export default function Signup({ setToken, setIsUser }) {
  return (
    <>
      <h1> Sign Up</h1>
      <form>
        <label>
          Email:
          <input type="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <input type="submit" value="Sign up" />
      </form>
      <button>Login</button>
    </>
  );
}
