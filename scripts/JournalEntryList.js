import {getEntries, useJournalEntries} from "./JournalDataProvider.js"
import {JournalEntryComponent} from "./JournalEntry.js"

const entryContainer = document.querySelector(".past-entries")
const eventHub = document.querySelector("#container")

eventHub.addEventListener("journalStateChanged", () => RenderJournalEntries())


// creates the individual entries and puts them in the HTML
export const RenderJournalEntries = () => {
  getEntries()
  .then(() => {
    let entryString = ''
    const collection = useJournalEntries()
    console.log("collection ", collection)
    for (const entry of collection) {
      entryString += JournalEntryComponent(entry)
  }
  entryContainer.innerHTML += entryString
  })
}