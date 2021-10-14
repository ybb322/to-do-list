var app = new Vue ({
    el: '#app',
    data: {
        listTitle: 'To-Do List',
        activeItems: 'Current tasks:',
        itemsCounter: 0,
        items: [
        ],
        userMessage: '',
    },
    methods: {
        addItem () {
            this.itemsCounter++
            this.items.push ({message:this.userMessage})
            this.userMessage = ''
            console.log (this.items)
        },
        deleteItem (index) {
            this.itemsCounter--
            this.items.splice(index, 1)
        }
    }
})