const contentContainer = document.querySelector(".form-container")

const render = () => {
    contentContainer.innerHTML = `
    <section class="form">
    <input id="form--date" type="date" />
    <input id="form--concept" type="text" placeholder="concept" />
    <textarea id="form--entry" placeholder="Type entry here"></textarea>
    <select id="form--moodSelect">Current mood
    <option >Select current mood</option>
    <option id="mood--happy">happy</option>
    <option id="mood--sad">sad</option>
    <option id="mood--angry">angry</option>
    <option id="mood--tired">tired</option>
    <option id="mood--disappointed">disappointed</option>
    <option id="mood--frustrated">frustrated</option>
    <option id="mood--overwhelmed">overwhelmed</option>
    <option id="mood--confident">confident</option>
    </section>
    `
}

export const EntryForm = () => {
    render()
}







// **************************FORM AS HARDCODED IN HTML****************************************
// <form action="">
            //    <fieldset>
            //        <label for="journalDate">Date of entry</label>
            //        <input type="date" name="journalDate" id="journalDate">
            //        <label for="conceptsCovered">Concepts covered</label>
            //        <input type="text" name="conceptsCovered" id="conceptsCovered">
            //        <input type="textarea" placeholder="Type entry here">
            //        <label for="moodSelector">Select your mood from the drop down</label>
            //        <select>Current mood
            //            <option>happy</option>
            //            <option>sad</option>
            //            <option>angry</option>
            //            <option>tired</option>
            //        </select>
            //        <input type="button" value="Submit entry">
            //    </fieldset>
//             </form>
// ********************************************************************************************