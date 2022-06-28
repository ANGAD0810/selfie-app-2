var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = " ";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    speak();

}

function speak() {
    var sy = window.speechSynthesis;
    var s_d = document.getElementById("textbox").value;
    var speakThis = new SpeechSynthesisUtterance(s_d);
    sy.speak(speakThis);
    Webcam.attach(camera);
    

}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:100
});
camera = document.getElementById("camera");