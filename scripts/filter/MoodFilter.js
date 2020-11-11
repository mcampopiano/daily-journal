import {getMoods, useMoods} from "../MoodDataProvider.js"



export const MoodFilter = (moods) => {
    // getMoods().then(() => {
        // const moods  = useMoods()
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
    // })
}