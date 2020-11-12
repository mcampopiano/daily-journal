import {useMoods} from "../MoodDataProvider.js"

const eventHub = document.querySelector("#container")



export const MoodFilter = () => {
        const moods  = useMoods()
        console.log("moods: ", moods)
        return `
        <fieldset class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            ${
                moods.map(mood => {
                    return `<input type="radio" id="moodFilter--${mood.label}" name="moodFilter" value="${mood.id}"/>
                    <label for="moodFilter--${mood.label}">${mood.label}</label>
                    `
                }).join("")
            }
        </fieldset>
        `
}

eventHub.addEventListener("change", event => {
    if (event.target.name === "moodFilter") {
        const filterChosen = new CustomEvent("moodChosen", {
            detail: {
                moodId: parseInt(event.target.value)
            }
        })
        eventHub.dispatchEvent(filterChosen)
    }
})