
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { RenderJournalEntries } from "./JournalEntryList.js"



getEntries()
.then(() => {
    RenderJournalEntries()
})
