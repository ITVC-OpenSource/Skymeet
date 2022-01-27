import "./Login.css";
import logo from "./../../img/logo.png";
import users from "./../../DB/users.json";
import Skymeet from  "./../../JS/lib.js";

function Login() {
  return (
    <div className="login-div">
      <div className="Form text-center">
        <img style={{width: "50px" , height: "50px" , borderRadius: "50%" , border: "1px solid #FFFFFF" , margin: "10px",}} src={logo} alt=""></img>
        <br></br>
        <h5 style={{color: "#1C8BAF",}}>اسکای میت - ورود</h5>
        <h6 className="stateText">خطایی وجود ندارد...</h6>
        <input dir="auto" autoComplete="off" type="text" className="uname" id="floatingInput" placeholder="نام کاربری" />
        <input dir="auto" autoComplete="off" type="password" className="passw" id="floatingPassword" placeholder="گذرواژه" />
        <div className="d-inline">
            <button className="btn-pr btn-lg ms-0 guest mt-3" style={{width: "47.5%" , margin: "2.5%"}}>میهمان</button>
            <button className="btn-pr btn-lg me-0 login mt-3" onClick={login} style={{width: "47.5%" , margin: "2.5%"}}>ورود</button>
        </div>
      </div>
      <a href="https://skymeet.ir" onClick={(e) => {e.preventDefault();window.open("https://skymeet.ir");}}>
        <p dir="ltr" className="fixed-bottom text-center" style={{color: "#8CDBF4" , margin: "2.5px"}}>©Skymeet</p>
      </a>
    </div>
  );
}

const login = () => {
  var stateText = document.querySelector(".stateText");
  let uname = document.querySelector(".uname").value;
  let passw = document.querySelector(".passw").value;
  users.forEach(user => {
    if (user.uname === uname && user.passw === passw) {
      Skymeet.splash();
      var r = Skymeet.join(uname);
      if (r === false) {
        return false;
      }
    } else {
      stateText.style.display = "block";
      stateText.innerText = "نام کاربری یا گذرواژه نادرست است.";
    }
  });
}

export default Login;
