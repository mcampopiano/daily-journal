import {saveJournalEntry} from "./JournalDataProvider.js"
const contentContainer = document.querySelector(".form-container")
const eventHub = document.querySelector("#container")

const render = () => {
    contentContainer.innerHTML = `
    <section class="form">
    <input id="form--date" type="date" />
    <input id="form--concept" type="text" placeholder="concept" />
    <textarea id="form--entry" placeholder="Type entry here"></textarea>
    <select id="form--moodSelect">
    <option >Select current mood</option>
    <option class="mood">happy</option>
    <option class="mood">sad</option>
    <option class="mood">angry</option>
    <option class="mood">tired</option>
    <option class="mood">disappointed</option>
    <option class="mood">frustrated</option>
    <option class="mood">overwhelmed</option>
    <option class="mood">confident</option>
    </select>
    <button id="saveEntry">Save</button>
    </section>
    `
}

export const EntryForm = () => {
    render()
}


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {
        console.log("I was clicked!")
        const date = document.querySelector("#form--date").value
        const concept = document.querySelector("#form--concept").value
        const entry = document.querySelector("#form--entry").value
        const mood = document.querySelector("#form--moodSelect").value
        // console.log("mood value", mood)

        const newEntry = {
            concept: concept,
            entry: entry,
            mood: mood,
            date: date
        } 
        // console.log("new object", newEntry)
        saveJournalEntry(newEntry)
    }
})