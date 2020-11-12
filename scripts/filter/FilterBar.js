import { getMoods, useMoods } from "../MoodDataProvider.js"
import {MoodFilter} from "./MoodFilter.js"
const contentContainer = document.querySelector(".filters")

export const FilterBar = () => {
    const render = () => {
        getMoods().then(() => {
            contentContainer.innerHTML = `
            ${MoodFilter()}
            `
        })
    }
    render()
}