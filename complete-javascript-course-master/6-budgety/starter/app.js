var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }


    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }


    var data = {
        allItems: {
            expense: [],
            income: [],
        },
        totals: {
            expense: 0,
            income: 0
        }
    };

    return {
        addItem: function (type, des, val) {
            var newItem, id;

            //Create new id
            if (data.allItems[type].length > 0) {
                id = data.allItems[type][data.allItems[type].length - 1].id + 1
            } else {
                id = 0;
            }


            //Create new item
            if(type == 'expense'){
                newItem = new Expense(id, des, val);
            } else if(type == 'income'){
                newItem = new Income(id, des, val);
            }


            //Push it into array
            data.allItems[type].push(newItem);

            // return item
            return newItem
        },
        testing: function () {
            console.log(data)
        }
    }


})();




var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // income || expense
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
            
        },

        getDOMstrings: function () {
            return DOMstrings
        }
    }

})();



var controller = (function (budgetCtrl, UIctrl) {

    var setEventListeners = function() {

        var dom = UIctrl.getDOMstrings();
        document.querySelector(dom.inputButton).addEventListener('click', ctrlAddItem)


        document.addEventListener('keypress', function (event) {

            if (event.keyCode == 13 || event.which == 13) {

                ctrlAddItem();

            }
        })
    }

    var ctrlAddItem = function () {

        var input, newItem;
        //Get input data
        input = UIController.getInput()

        //Add idem to the controller

        newItem = budgetCtrl.addItem(input.type, input.description, input.value);


        
    }

   

    return {
        init: function () {
            console.log('App has started');
            setEventListeners();
        }
    }
    

})(budgetController, UIController)


controller.init();