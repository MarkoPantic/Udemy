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

    var calculateTotal = function (type) {
        
        var sum = 0;


        data.allItems[type].forEach(function (cur) {
            sum += cur.value;
        });

        data.totals[type] = sum;

    }


    var data = {
        allItems: {
            expense: [],
            income: [],
        },
        totals: {
            expense: 0,
            income: 0
        },
        budget: 0,
        percentage: -1
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

        deleteItem: function (id, type) {
          
            var ids = data.allItems[type].map(function (current) {
                
                return current.id

            })


            index = ids.indexOf(id);

            if(index !== -1){

                data.allItems[type].splice(index, 1);

            }

        },

        calculateBudget: function () {
            
            //Calculate total income and expenses

            calculateTotal('expense');
            calculateTotal('income');

            //Calculate the budget: income - expenses


            data.budget = data.totals.income - data.totals.expense;
            //calculate percentage of income

            if(data.totals.income > 0){

                data.percentage = Math.round((data.totals.expense / data.totals.income) * 100);

            } else {
                data.percentage = -1
            }


        },

        getBudget: function () {
          
            return {
                budget: data.budget,
                totalInc: data.totals.income,
                totalExp: data.totals.expense,
                percentage: data.percentage
            }

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
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'

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
        },


        displayBudget: function (obj) {

            
        
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expenseLabel).textContent = obj.totalExp;
            
            if(obj.percentage > 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }

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
        });

        document.querySelector(dom.container).addEventListener('click', ctrDeleteItem)
    }

    var updateBudget = function () {
        
        budgetCtrl.calculateBudget();

        var budget = budgetCtrl.getBudget();

        UIctrl.displayBudget(budget)

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

    var ctrDeleteItem = function (event) {

        var itemID, splitID, type, id;
        
        itemID = event.target.parentNode.parentNode.parentNode.id;


        if(itemID){

            splitID = itemID.split('-');
            type = splitID[0];
            id = parseInt(splitID[1]);

            // Delete item from the data structure

            budgetCtrl.deleteItem(id, type);

            // Delete item from the UI



            // Update and show the new budget

        }

    }



    return {
        init: function () {
            console.log('App has started');
            setEventListeners();
            UIctrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
        }
    }


})(budgetController, UIController)


controller.init();