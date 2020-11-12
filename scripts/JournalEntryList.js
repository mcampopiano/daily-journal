import {deleteEntry, getEntries, useJournalEntries} from "./JournalDataProvider.js"
import {JournalEntryComponent} from "./JournalEntry.js"

const entryContainer = document.querySelector(".past-entries")
const eventHub = document.querySelector("#container")

eventHub.addEventListener("journalStateChanged", () => RenderJournalEntries())
let entryCollection = []

// creates the individual entries and puts them in the HTML
export const RenderJournalEntries = () => {
  getEntries()
  .then(() => {
    // let entryString = ''
    
    entryCollection = useJournalEntries()
    // console.log("collection ", collection)
    // for (const entry of collection) {
      // entryString += JournalEntryComponent(entry)
      render(entryCollection)
  }
  // entryContainer.innerHTML = `<h2>Previous entries:</h2> ${entryString}`
  )
}

const render = (entries) => {
  let entryString = ""
  entries.forEach(entry => {
    entryString += JournalEntryComponent(entry)
  })
  entryContainer.innerHTML = `<h2>Previous entries:</h2> ${entryString}`
}

eventHub.addEventListener("click", event => {
  if (event.target.id.startsWith("deleteEntry--")) {
    const [prefix, id] = event.target.id.split("--")
    deleteEntry(id)
    .then(RenderJournalEntries)
  }
})

eventHub.addEventListener("moodChosen", event => {
  const Id = event.detail.moodId
  entryCollection = useJournalEntries()
  const filteredEntries = entryCollection.filter(ec => ec.moodId === Id)
  if (filteredEntries.length === 0) {
    window.alert("No entries recorded with selected mood")
  } else {

    render(filteredEntries)
  }

})