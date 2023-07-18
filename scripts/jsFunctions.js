function showAlert(message) {
    console.log(message)
}

const radios = {};

function muteRadio(radioName) {
    const radio = radios[radioName];
    radio.muted = true;
}

function unmuteRadio(radioName) {
    const radio = radios[radioName];
    radio.muted = false;
    console.log(`${radioName} muted ${radio.muted}`)
    document.title = `${radioName} - radio.spreyo.xyz`
}

// function playRadio(radio) {
//     const europa2 = new Audio("https://stream.bauermedia.sk/europa2.mp3")
//     console.log("playing audio")
//     // europa2.muted = true;
//     europa2.id = "europa2"
//     europa2.play();
// }

function newRadio(radioName, audioStream) {
    const radio = new Audio(audioStream);
    radio.id = radioName;
    // radio.defaultMuted = true;
    radio.muted = true;
    radios[radioName] = radio;
    radio.play();
    console.log("new radio " + radioName + ' ' + audioStream);
    console.log(radios)
}


