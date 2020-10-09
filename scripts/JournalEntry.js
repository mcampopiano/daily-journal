// Creates an HTML rendering of the journal entry objects

export const JournalEntryComponent = (entry) => {
    return `<li id="entry--${entry.id}" class="journalEntry">
    <h2>${entry.concept}</h2>
        ${entry.entry}
       <p> ${entry.date} </p>
    </li>`
}