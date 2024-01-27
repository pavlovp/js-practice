
const $ = (s) => document.getElementById(s)

const ctr = {
    entries: [],

    nameValid: true,
    phoneValid: true,

    addEntry: (obj) => {

        ctr.entries.push(obj)
        dom.addRow(obj)

        const entriesString = JSON.stringify(ctr.entries)
        window.localStorage.setItem('entries', entriesString)
    },

    setEntries: (items) => {
        ctr.entries = items
        const entriesString = JSON.stringify(ctr.entries)
        window.localStorage.setItem('entries', entriesString)
        dom.renderEntries(items)
    },
    loadSavedEntries: () => {
        let savedItems = window.localStorage.getItem('entries');
        if (savedItems) {
            const items = JSON.parse(savedItems)
            ctr.entries = items
            dom.renderEntries(ctr.entries)
        }
    },
    filter: (filterValue) => {
        const res = ctr.entries.filter(item => item.name.toLowerCase().indexOf(filterValue) > -1)
        dom.renderEntries(res)
    },
    deleteItem: (id) => {
        const newItems = ctr.entries.filter(item => item.id != id)
        ctr.setEntries(newItems)
    }
}

export { $ }
export default ctr