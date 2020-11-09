// Creates an HTML rendering of the journal entry objects

export const JournalEntryComponent = (entry) => {
    return `<div class="journalEntry">
    <h2>${entry.concept}</h2>
        <p> ${entry.date} </p>
        <p>${entry.entry}</p>
        <p>Mood at time of entry: ${entry.mood.label}</p>
        <button id="deleteEntry--${entry.id}">Delete Entry</button>
    </div>`
}