document.getElementById('speakBtn').addEventListener('click', function() {
    var text = document.getElementById('textToSpeak').value;
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
});
