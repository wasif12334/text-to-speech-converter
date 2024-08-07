function speak(){
    var text = document.getElementById("input").value;
    var bool = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(bool);
}