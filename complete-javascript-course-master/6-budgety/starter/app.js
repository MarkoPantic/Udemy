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
            if (type == 'expense') {
                newItem = new Expense(id, des, val);
            } else if (type == 'income') {
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
        inputButton: '.add__btn',
        // incomeContainer: '.income__list',
        // expenseContainer: '.expense__list',

    }

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // income || expense
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }

        },

        addListItem: function (obj, type) {

            //create HTML string with placeholder text

            var html, newHtml, element;


            element = '.' + type + '__list';

            if(type == 'income'){

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description" >%description%</div ><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"<button class="item__delete"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if(type == 'expense'){

                html = ' <div class="item clearfix" id="expense-%id%"><div class="item__description" >%description%</div ><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            
            //Replace placeholder text with actual data

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);


            //Insert

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },

        clearFields: function () {
            
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function (current) {
                current.value = '';
            });

            fieldsArr[0].focus()

        },

        getDOMstrings: function () {
            return DOMstrings
        }
    }

})();



var controller = (function (budgetCtrl, UIctrl) {

    var setEventListeners = function () {

        var dom = UIctrl.getDOMstrings();
        document.querySelector(dom.inputButton).addEventListener('click', ctrlAddItem)


        document.addEventListener('keypress', function (event) {

            if (event.keyCode == 13 || event.which == 13) {

                ctrlAddItem();

            }
        })
    }

    var updateBudget = function () {
        


    }

    var ctrlAddItem = function () {

        var input, newItem;
        //Get input data
        input = UIController.getInput();

        if(input.description !== '' && !isNaN(input.value) && input.value > 0){

            //Add idem to the controller
    
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    
            //Generate item from UICOntroller
    
            UIctrl.addListItem(newItem, input.type);
    
            UIctrl.clearFields();
    
            updateBudget();
        }


    }



    return {
        init: function () {
            console.log('App has started');
            setEventListeners();
        }
    }


})(budgetController, UIController)


controller.init();