
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { RenderJournalEntries } from "./JournalEntryList.js"
import { EntryForm } from "./JournalFormComponent.js"
import { getMoods, useMoods } from "./MoodDataProvider.js"

RenderJournalEntries()
EntryForm()

getMoods()
.then(() => {
    console.log("moods:", useMoods())
})