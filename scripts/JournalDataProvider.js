/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    }, 
    {
        id: 2,
        date: "09/28/2020",
        concept: "Terminal",
        entry: "Today I learned about using an alias to declare a variable for the terminal, and echo to create a string.",
        mood: "Ok"
    },
    
    {
        id: 3,
        date: "10/2/20",
        concept: "github",
        entry: "Started first group project. Learned how to push to github, approve and then pull each other's work.",
        mood: "Ok"
    }
]

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