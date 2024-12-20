let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    
    voices.forEach((voice, i) => {
        let option = new Option(voice.name + ' (' + voice.lang + ')', i);
        voiceSelect.appendChild(option);
    });

    speech.voice = voices[0];
};

document.querySelector("button").addEventListener("click", () => {
    speech.voice = voices[voiceSelect.value];
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

