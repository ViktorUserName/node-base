import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { newNote, getAllNotes, findNotes, removeAllNotes } from "./notes.js";

const listNotes = (notes) => {
  notes.forEach(note => {
    console.log('\n')
    console.log('id: ', note.id)
    console.log('tags: ', note.tags.join(', ')) 
    console.log('note: ', note.content)
  })
}

yargs(hideBin(process.argv))
    .command('add <note>', 'Add a new note', (yargs) => {
        return yargs.positional('note', {
            describe: 'The note content',
            type: 'string'
        })
    }, async (argv) => {
        const tags = argv.tags ? argv.tags.split(',') : []
        const note = await newNote(argv.note, tags)
        console.log('Adding a new note:', note.id);
    })
    .options('tags', {
        alias: 't',
        type: 'string',
        description: 'Tags for the note'
    })

    .command('all', 'get all notes', () => { }, async (argv) => {
        const notes = await getAllNotes()
        listNotes(notes)
    })

    .command('find <filter>', 'get matching notes', (yargs) => {
        return yargs.positional('filter', {
            describe: 'Filter for searching notes',
            type: 'string'
        })
    }, async (argv) => {
        const notes = await findNotes(argv.filter)
        listNotes(notes)
    })

    .command('web [port]', 'start web server', yargs => {
        return yargs
            .positional(
                'port', {
                    describe: 'Port to bind on',
                    default: 5000,
                    type: 'number'
                })
    }, async(argv) => {})

    .command('removeAll', 'remove all notes', () => { }, async (argv) => {
        await removeAllNotes()
        console.log('All notes removed')
    })
    .demandCommand(1)
    .parse()
