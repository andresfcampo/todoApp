class Todo {
    constructor(){
        this.todoItems = []
    }
    
    addItem (itemText) {
        const item = {
            text: itemText,
            isCompleted: false
        } 

        this.todoItems.push(item)
    }

    deleteItem (index) {
        this.todoItems.splice(index,1)
    }

    toggleItem(index) {
        this.todoItems[index].isCompleted = !this.todoItems[index].isCompleted
    }
}

if (typeof module !== 'undefined') {
    module.exports = Todo
}