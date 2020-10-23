// Creates an HTML rendering of the journal entry objects

export const JournalEntryComponent = (entry) => {
    return `<div class="journalEntry">
    <h2>${entry.concept}</h2>
        <p>${entry.entry}</p>
       <p> ${entry.date} </p>
    </div>`
}