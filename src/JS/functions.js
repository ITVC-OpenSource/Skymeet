const functions = {
    soundState: 1,
    soundStateChange: () => {
        if (functions.soundState === 1) {
            let videos = document.querySelectorAll("video");
            videos.forEach((videoEL) => {
                videoEL.muted = true;
            });
            let audios = document.querySelectorAll("video");
            audios.forEach((audioEL) => {
                audioEL.muted = true;
            });
            document.querySelector(".soundIconOne").classList.remove("active");
            document.querySelector(".soundIconOne").classList.add("hidden");
            document.querySelector(".soundIconTwo").classList.remove("hidden");
            functions.soundState = 0;
        } else {
            let videos = document.querySelectorAll("video");
            videos.forEach((videoEL) => {
                videoEL.muted = false;
            });
            let audios = document.querySelectorAll("video");
            audios.forEach((audioEL) => {
                audioEL.muted = false;
            });
            document.querySelector(".soundIconTwo").classList.remove("active");
            document.querySelector(".soundIconTwo").classList.add("hidden");
            document.querySelector(".soundIconOne").classList.add("active");
            document.querySelector(".soundIconOne").classList.remove("hidden");
            functions.soundState = 1;
        }
    },
    userInfo: () => {
        if (document.querySelector(".userInfo") === null) {
            let ui = document.createElement("div");
            ui.className = "userInfo";
            ui.innerHTML = `

            `;
            document.querySelector(".skymeet").append(ui);
        }
    }
}

window.functions = functions;

export default functions;