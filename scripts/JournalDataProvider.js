/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const eventHub = document.querySelector("#container")

const dispatchStateChangeEvent = () => {
    const entryStateChanged = new CustomEvent("journalStateChanged")
    eventHub.dispatchEvent(entryStateChanged)
}

let journal = []

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

// Now that the entries have been moved to the json api, I need to fetch them then put them in the journal array
export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood")
        .then(response => response.json())
        .then(parsedEntries => {
            // console.log("parsed entries", parsedEntries)
            journal = parsedEntries
        })
}

export const saveJournalEntry = (newEntry) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}

export const deleteEntry = (entryId) => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE"
    })
    .then(getEntries)
}