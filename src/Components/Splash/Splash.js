import loader from "./../../img/loading.svg";

export default function Splash() {
    return (
        <div className="splash" style={{display: "none",}}>
            <img src={loader} alt="درحال بارگذاری..." />
        </div>
    );
}