import {saveJournalEntry} from "./JournalDataProvider.js"
import { getMoods, useMoods } from "./MoodDataProvider.js"
const contentContainer = document.querySelector(".form-container")
const eventHub = document.querySelector("#container")

const render = (moodArr) => {
    contentContainer.innerHTML = `
    <section class="form">
    <input id="form--date" type="date" />
    <input id="form--concept" type="text" placeholder="concept" />
    <textarea id="form--entry" placeholder="Type entry here"></textarea>
    <select id="form--moodSelect">
    <option value="0">Select current mood</option>
    ${moodArr.map(mood => {
        return `<option value="${mood.id}">${mood.label}</option>`
    }).join("")}
    </select>
    <button id="saveEntry">Save</button>
    </section>
    `
}

export const EntryForm = () => {
    getMoods()
    .then(() => {

        render(useMoods())
    })
}


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {
        const date = document.querySelector("#form--date").value
        const concept = document.querySelector("#form--concept").value
        const entry = document.querySelector("#form--entry").value
        const moodId = document.querySelector("#form--moodSelect").value
        // console.log("mood value", mood)

        const newEntry = {
            concept,
            entry,
            moodId,
            date,
        } 
        // console.log("new object", newEntry)
        saveJournalEntry(newEntry)
    }
})