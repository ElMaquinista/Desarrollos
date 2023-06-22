// Grab DOM elements
const video = document.querySelector(".video");
const playButton = document.querySelector(".play");
const playButtonIcon = playButton.querySelector("i");
const stopButton = document.querySelector(".stop");
const progressBar = document.querySelector(".progress")
const timestamp = document.querySelector(".timestamp")
const download = document.querySelector(".download");

// Listen for events
video.addEventListener("click", playPauseVideo);
progressBar.addEventListener("change", setVideoProgress)
playButton.addEventListener("click", playPauseVideo);
stopButton.addEventListener("click", stopVideo);
video.addEventListener("timeupdate", updateVideoProgress)
download.addEventListener("click", updateVideoProgress)

// Utility functions
function playPauseVideo() {

    video[video.paused ? "play" : "pause"]()
    playButtonToggleIcon()
}

function playButtonToggleIcon() {
    if (video.paused) {
        playButtonIcon.classList.remove("fa-pause")
        playButtonIcon.classList.add("fa-play")
    } else {
        playButtonIcon.classList.remove("fa-play")
        playButtonIcon.classList.add("fa-pause")
    }
}

function stopVideo() {
    video.pause()
    video.currentTime = 0
    playButtonToggleIcon()
    progressBar.value = 0
}

function setVideoProgress() {
    video.currentTime = Number((progressBar.value * video.duration) / 100)
}

function updateVideoProgress() {
    progressBar.value = Number((video.currentTime / video.duration) * 100)
    let minutes = Math.floor(video.currentTime / 60)
    let seconds = Math.floor(video.currentTime % 60)
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    timestamp.textContent = `${minutes}:${seconds}`
}

function download_video() {

}

// ----------------------------------------------------
function downloadBlob(blob, name) {
    // Convertir el blob en Blob URL (una URL especial que apunta a un objeto almacenado en la memoria del navegador)
    const blobUrl = URL.createObjectURL(blob);

    // Crear link de descarga y apuntar al Blob URL
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = name;
    document.body.appendChild(link);

    // Ejecutar el evento click del enlace creado anteriormente
    // Es necesario hacerlo de esta manera porque en Firefox link.click() no funciona
    link.dispatchEvent(
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        })
    );

    // Eliminar el link del DOM
    document.body.removeChild(link);
}

// Cómo usarlo


function descargarblob() {
    let jsonBlob = new Blob(['{"name": "Teodomiro"},{"name": "Agapito"}'])
    downloadBlob(jsonBlob, 'usuarios.json');
}


function descargar_blob_video() {
    const url = "https://emergenciadesarrollo.s3.amazonaws.com/47564041/3c5891c1-1f74-44f4-b864-5e4e82cdaa31/archive.mp4";
    const blob = new Blob([url], { type: "video\/mp4" });
    // const blobUrl = URL.createObjectURL(blob);
    downloadBlob(blob, 'video.mp4');
}

function blob_url() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://emergenciadesarrollo.s3.amazonaws.com/47564041/3c5891c1-1f74-44f4-b864-5e4e82cdaa31/archive.mp4");
    xhr.responseType = "arraybuffer";

    xhr.onload = function (e) {
        let blob = new Blob([xhr.response]);
        let url = URL.createObjectURL(blob);

        console.log(url);

        downloadBlob(blob, 'video.mp4');
    }

    console.log("Final de lanzamiento de blob_url ");

}

//---------------------------------------------------------------------------------------
var file_fecth = null;

async function video_a_blob() {

    let peticion_archivo = await fetch("archive.mp4");

    if (peticion_archivo.status === 200) {
        console.log("peticion_archivo", peticion_archivo);

        let blob = await peticion_archivo.blob();

        console.log("blob", blob);

        file_fecth = new File([blob], 'video', { type: blob.type });

        console.log(file_fecth);

        downloadBlob(blob, 'video.mp4');
    }else if(peticion_archivo.status === 404){
        alert("el video no se encontró");
    }else{
        alert("el video no esta listo");
    }

} 