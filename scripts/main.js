import {useJournalEntries} from "./JournalDataProvider.js"
console.log("Welcome to the main module")

const entries = useJournalEntries()

console.log(entries)