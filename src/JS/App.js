import "./../CSS/App.css";
import "./../CSS/Bootstrap.min.css";
import Login from "./../Components/Login/Login";
import Main from "./../Components/Main/Main";
import Splash from "./../Components/Splash/Splash";

function App() {
  return (
    <div className="skymeet">
      <Login />
      <Main />
      <Splash />
    </div>
  );
}

window.roomId = "XDC-HTBV-LKB";

window.isLogedIn = 0;

window.refreshPage = () => {
  if (window.isLogedIn === 0) {
    document.querySelector(".class-div").style.display = "none";
    document.querySelector(".login-div").style.display = "block";
  } else {
    document.querySelector(".class-div").style.display = "block";
    document.querySelector(".login-div").style.display = "none";
  }
}

window.onload = () => {
  window.refreshPage();
  setTimeout(() => {
    document.querySelector(".menu-icon").classList.remove("btn");
    document.querySelector(".menu-icon").classList.remove("btn-primary");
  } , 1000);
}

window.onbeforeunload = (e) => {
  if (window.isLogedIn !== 0) {
    return e.preventDefault(),
    e.returnValue = "آیا از خروج اطمینان دارید؟",
    e.returnValue;
  }
}

export default App;