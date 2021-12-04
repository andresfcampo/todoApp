const todo = new Todo()

const input = document.querySelector('.input')
const addBtn = document.querySelector('.addBtn')
const list = document.querySelector ('.list')
const deleteItemBtns = document.querySelectorAll('.itemDelteBtn')

deleteItemBtns.forEach(deleteItemBtns) {
    deleteItemBtns[0].onclick = () => {
        const item = deleteItemBtns.parentElement 
        item.remove()
        }
}

const buildItem = (text) => {
    const li = document.createElement('li')
    li.className = 'listItem'
    li.setAttribute ('id', this.todo.idCount)
    const div = document.createElement('div')
    div.className = 'itemTextContainer'
    const input = document.createElement ('input')
    input.className = 'itemCheckbox'
    input.setAttribute ('type', 'checkbox')
    const span =document.createElement ('span')
    span.className = 'itemText'
    span.innerHTML = text 
    const button = document.createElement ('button')
    button.className = 'itemDeleteBtn'
    button.innerHTML = 'x'

    button.onclick = () => {
        const item = button.parentElement
        item.remove()
    }

    li.appendChild(div)
    li.appendChild(button)
    div.appendChild(input)
    div.appendChild(span)

    return li
}

addBtn.onclick = () => {
    const inputValue = input.value
    todo.addItem(inputValue)
    list.appendChild(buildItem(inputValue))
}