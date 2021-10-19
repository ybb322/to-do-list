var app = new Vue ({
    el: '#app',
    data: {
        listTitle: 'To-Do List',
        activeItems: 'Current tasks:',
        itemsCounter: 0,
        items: [
        ],
        userMessage: '',
        editMessage: '',
        activeEditing: true,
        changesDisplay: false,
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
        },
        editItem (index) {

            this.editMessage = this.items[index].message;
            if (this.changesDisplay == false) {
            
            this.changesDisplay = true; 
            }
        },
        saveChanges (index) {
            this.items[index].message = this.editMessage;
            this.changesDisplay = false;
        },
        cancelChanges () {
            this.editMessage = '';
            this.changesDisplay = false;
        }
    }
})