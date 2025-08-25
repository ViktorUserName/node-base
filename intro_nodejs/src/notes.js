import { insert, getDB, saveDB } from "./db.js";

export const newNote = async (note, tags) => {
    const data = {
        tags,
        content: note,
        id: Date.now().toString()
    }
    await insert(data)
    return data
}

export const getAllNotes = async () => {
    const db = await getDB()
    return db.notes
}

export const findNotes = async (filter) => {
    const notes = await getAllNotes()
    return notes.filter( note => note.content.toLowerCase().includes(filter.toLowerCase()))
}

export const removeAllNotes = async () => {
    await saveDB({notes: []})
}