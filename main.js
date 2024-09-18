import './style.css'
import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();

let keys = document.querySelectorAll('.key')
for (let key of keys) {
    let noteToPlay = key.getAttribute('data-note')
    key.addEventListener('mousedown', () => playNote(noteToPlay))
    key.addEventListener('mouseup', () => stopNote())
    key.addEventListener('mouseleave', () => stopNote())
}
document.addEventListener('keypress', ctrlTeclado)

function ctrlTeclado(event){
    let key = event.key
 console.log(key)
    
}

function playNote(note) {
    synth.triggerAttackRelease(note);
}

function stopNote() {
    synth.triggerRelease();
}
