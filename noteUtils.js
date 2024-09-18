let keyMap = {
    a: 'C4',w: 'C#4',s: 'D4', e: 'D#4', d: 'E#', f: 'F4', 
    t: 'F#4', g: 'G4', y: 'G#4', h: 'A4',u: 'A#4', j: 'B4', k: 'C5'
}
export default function getNoteFromkey(key){
    if (key !=null){
        
    let note= keyMap [key.toLowerCase()];
    return note;
    }else{
        return undefined
    }
}
