import "./Main.css";
import Timer from "./../Timer/Timer.js";
import Skymeet from "./../../JS/lib.js";
import { Dropdown } from "react-bootstrap";

function Main() {
    return (
    <div className="class-div">
      <div className="header-content bg-l w-100 d-flex text-d" style={{position: "relative" , height: "50px" , borderBottom: "1px solid #FFFFFF"}}>
        {/* <div style={{height: "50px" , fontSize: "25px" , alignItems: "center" , flexDirection: "row" , display: "inline"}}> */}
        <div style={{height: "50px" , top: "0%" , bottom: "0%" , marginTop: "auto" , marginBottom: "auto" , fontSize: "20px" , paddingTop: "7.5px" , paddingRight: "7.5px"}}>
          <p className="p-0 m-0">اسکای میت » {roomName}</p>
          <div className="position-absolute top-0 end-0 fill-d d-flex" style={{padding: "10px" , flexDirection: "row-reverse"}}>
            <svg width="24" height="24" className="icon" style={{marginTop: "2px" , marginRight: "2px"}}>
              <use xlinkHref="icons.svg?v12.5.6#shape_access_time"></use>
            </svg>
            <Timer />
          </div>
        </div>
      </div>
      <div className="control-buttons" style={{padding: "4px 8px"}}>
        <div className="buttons d-ltr">
          <button title="خروجی صدا" className="nbg-btn btn-on mx-1" type="button" onClick={Skymeet.functions.soundStateChange}>
            <span className="btn-text"></span>
            <svg width="30" height="30" className="icon icon-on fill-l active soundIconOne">
              <use xlinkHref="icons.svg?v12.5.6#shape_volume_up"></use>
            </svg>
            <svg width="30" height="30" className="icon icon-off fill-l hidden soundIconTwo">
              <use xlinkHref="icons.svg?v12.5.6#shape_volume_off"></use>
            </svg>
          </button>
          <button title="میکروفون" className="nbg-btn icon-button mx-1" type="button">
            <span className="btn-text"></span>
            <svg width="30" height="30" className="icon icon-on fill-l hidden micIconOne">
              <use xlinkHref="icons.svg?v12.5.6#shape_mic"></use>
            </svg>
            <svg width="30" height="30" className="icon icon-off fill-l micIconTwo">
              <use xlinkHref="icons.svg?v12.5.6#shape_mic_off"></use>
            </svg>
          </button>
          <button title="دوربین" className="nbg-btn icon-button mx-1" type="button">
            <span className="btn-text"></span>
            <svg width="30" height="30" className="icon icon-off fill-l webcamIcon">
              <use xlinkHref="icons.svg?v12.5.6#shape_videocam"></use>
            </svg>
          </button>
          <button title="اشتراک دسکتاپ" className="nbg-btn icon-button mx-1" type="button">
            <span className="btn-text"></span>
            <svg width="30" height="30" className="icon icon-off fill-l shareDesktopIcon">
              <use xlinkHref="icons.svg?v12.5.6#shape_laptop"></use>
            </svg>
          </button>
        </div>
        <div className="menu">
          <Dropdown style={{width: "fit-content"}}>
            <Dropdown.Toggle className="nbg-btn menu-icon fill-l">
              <svg width="30" height="30" className="icon">
                <use xlinkHref="icons.svg?v12.5.6#shape_menu"></use>
              </svg>
            </Dropdown.Toggle>

            <Dropdown.Menu className="bg-l" style={{background: "#8CDBF4"}}>
              <Dropdown.Item className="text-d fill-d" style={{color: "#1C8BAF"}} onClick={Skymeet.functions.userInfo}>
                <svg width="24" height="24" className="icon ">
                  <use xlinkHref="icons.svg?v12.5.6#shape_info_outline"></use>
                </svg>اطلاعات کاربری</Dropdown.Item>
              <Dropdown.Item className="text-d" style={{color: "#1C8BAF"}}>Another action</Dropdown.Item>
              <Dropdown.Item className="text-d" style={{color: "#1C8BAF"}}>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="class-container">
        <div className="right-container"></div>
        <div className="main-container"></div>
      </div>
      <div className="wrtc">
        <audio className="wrtc-audio"></audio>
      </div>
    </div>
  );
}

const roomName = "اتاق اصلی";

export default Main;