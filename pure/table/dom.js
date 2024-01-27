import ctr, { $ } from './table.js';
import { debounce } from '/utils.js';

const dom = {
    name: $('nameInput'),
    nameError: $('nameError'),
    showNameError: (show) => {
        dom.name.style.borderColor = show ? 'red' : 'black'
        dom.nameError.style.display = show ? 'inline' : 'none'
    },
    addBtn: $('addBtn'),

    phone: $('phoneInput'),
    phoneError: $('phoneError'),
    showPhoneError: (show) => {
        dom.phone.style.borderColor = show ? 'red' : 'black'
        dom.phoneError.style.display = show ? 'inline' : 'none'
    },
    hideErrors: () => {
        dom.showNameError(false)
        dom.showPhoneError(false)
    },

    sex: $('sexInput'),
    table: $('table'),
    tbody: $('tbody'),
    nameFilter: $('nameFilter'),

    addRow: (item) => {
        const rw = dom.makeRow(item)
        dom.tbody.appendChild(rw)
    },
    makeRow: (item) => {
        const newRow = document.createElement('tr')
        const nameCell = document.createElement('td')
        nameCell.textContent = item.name;

        const phoneCell = document.createElement('td')
        phoneCell.textContent = item.phone

        const dcell = document.createElement('td')
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.addEventListener('click', () => {
            ctr.deleteItem(item.id)
        })

        const sexCell = document.createElement('td')
        sexCell.innerText = item.sex

        dcell.appendChild(deleteButton)

        newRow.replaceChildren(nameCell, phoneCell, sexCell, dcell)
        return newRow
    },
    renderEntries: (entries) => {
        const fragment = document.createDocumentFragment()
        entries.forEach((item) => {
            const r = dom.makeRow(item)
            fragment.appendChild(r)
        });

        dom.tbody.replaceChildren(fragment)
    }
}


window.dom = dom
window.ctr = ctr

dom.addBtn.addEventListener('click', () => {
    let newObj = {
        id: Math.floor(Math.random() * 10000),
        name: dom.name.value.trim(),
        phone: dom.phone.value.trim(),
        sex: dom.sex.value,
    }

    let valid = true

    if (!newObj.name) {
        valid = false
        dom.showNameError(true)
    }
    if (!newObj.phone) {
        valid = false
        dom.showPhoneError(true)
    }

    if (valid) {
        ctr.addEntry(newObj)

        dom.name.value = ''
        dom.phone.value = ''
    }

})

dom.nameFilter.addEventListener('input',
    debounce(
        (ev) => {
            const val = ev.target.value
            ctr.filter(val)
        }, 1500
    ))

addEventListener("DOMContentLoaded", () => {
    ctr.loadSavedEntries()
    dom.hideErrors()
})

const showPage = (pageId) => {
    const pages = document.querySelectorAll('.page')
    for (const page of pages) {
        page.style.display = 'none'
    }

    const pg = document.getElementById(pageId)
    pg.style.display = 'block'
}

showPage(window.location.hash.slice(1) || 'todoPage')

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1)
    showPage(hash)
})