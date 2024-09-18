import getNoteFromkey from './noteUtils';
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
document.addEventListener('keyup', stopNote)

function ctrlTeclado(event) {
    let keyName = event.key

   // let note = keyMap[keyName]
   let note= getNoteFromkey(keyName)
   //obtiene el nombre de la nota a partir de la tecla del teclado
    playNote(note)
}

function playNote(note) {
    synth.triggerAttackRelease(note);
}

function stopNote() {
    synth.triggerRelease();
}
