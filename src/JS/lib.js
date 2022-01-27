import Peer from 'peerjs';
import functions from "./functions.js";

const Skymeet = {
    wss: "192.168.1.100:8000",
    WebSocket: "",
    Peer: "",
    roomId: window.roomId,
    splash: () => {
        document.querySelector(".splash").style.display = "";
    },
    unsplash: () => {
        document.querySelector(".splash").style.display = "none";
    },
    join: (uname) => {
        if (Skymeet.WebSocket === "" || Skymeet.Peer === "") {
            let ws = Skymeet.WebSocket = new WebSocket("ws://" + Skymeet.wss);
            let peer = Skymeet.Peer = new Peer(undefined, {
                host: '192.168.1.100',
                port: 9000,
                path: '/skymeet'
            });
            peer.on("open" , (id) => {
                peer.on("call" , (call) => {
                    let gum = navigator.mediaDevices.getUserMedia({audio: true , video: true});
                    gum.then((stream) => {
                        call.answer(stream);
                        call.on('stream', function(stream) {
                            document.querySelector(".wrtc-audio").srcObject = stream;
                            document.querySelector(".wrtc-audio").play();
                        });
                    });
                });
            });
            var stateText = document.querySelector(".stateText");
            peer.onerror = () => {
                stateText.style.display = "block";
                stateText.innerText = "ورود به اتاق با خطا روبرو شد!";
                Skymeet.unsplash();
                let peer = Skymeet.Peer = new Peer(undefined, {
                    host: 'localhost',
                    port: 9000,
                    path: '/skymeet'
                });
                return false;
            }
            ws.onerror = () => {
                stateText.style.display = "block";
                stateText.innerText = "ورود به اتاق با خطا روبرو شد!";
                Skymeet.unsplash();
                let ws = Skymeet.WebSocket = new WebSocket("ws://" + Skymeet.wss);
                return false;
            }
            ws.onopen = () => {
                let data = Skymeet.roomId + "/" + uname;
                let joinMessage = JSON.stringify({action: "join" , data: data});
                ws.send(joinMessage);
            }
            Skymeet.splash();
            setTimeout(() => {
                Skymeet.splash();
                if (Skymeet.WebSocket.OPEN === 1 && Skymeet.Peer.open === true) {
                    window.isLogedIn = 1;
                    Skymeet.unsplash();
                    window.refreshPage();
                    clearInterval(si);
                }
            } , 1000);
            var si = setInterval(() => {
                setInterval(() => {Skymeet.splash();} , 1);
                if (Skymeet.WebSocket.OPEN !== 1) {
                    let ws = Skymeet.WebSocket = new WebSocket("ws://" + Skymeet.wss);
                }
                if (Skymeet.Peer.open !== true) {
                    let peer = Skymeet.Peer = new Peer(undefined, {
                        host: 'localhost',
                        port: 9000,
                        path: '/skymeet'
                    });
                }
                if (Skymeet.WebSocket.OPEN === 1 && Skymeet.Peer.open === true) {
                    window.isLogedIn = 1;
                    Skymeet.unsplash();
                    window.refreshPage();
                    clearInterval(si);
                }
            } , 5000);
        } else {
            window.isLogedIn = 1;
            Skymeet.unsplash();
            window.refreshPage();
        }
    },
    functions: functions
}

window.Skymeet = Skymeet;

export default Skymeet;