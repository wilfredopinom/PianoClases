
import{test,expect}from  "vitest"
import getNoteFromkey from './noteUtils'


test('si le paso la letra a devolverá C4', ()=>{

let note= getNoteFromkey ('a')
expect(note).toBe('C4')



})

test('si le paso la letra A devolverá C4', ()=>{

    let note= getNoteFromkey ('A')
    expect(note).toBe('C4')
   } )

test('si le paso letra A devolverá undefined', ()=>{

    let note= getNoteFromkey ()
    expect(note).toBeUndefined()
   } )

   test('si le paso letra A devolverá undefined', ()=>{

    let note= getNoteFromkey (undefined)
    expect(note).toBeUndefined()
   } )