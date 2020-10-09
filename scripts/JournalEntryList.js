import {useJournalEntries} from "./JournalDataProvider.js"
import {JournalEntryComponent} from "./JournalEntry.js"

const entryContainer = document.querySelector(".past-entries")
const collection = useJournalEntries()


// creates the individual entries and puts them in the HTML
export const RenderJournalEntries = () => {
      for (const entry of collection) {
        entryContainer.innerHTML += JournalEntryComponent(entry)
    }
}