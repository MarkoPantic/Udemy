 var budgetController = (function () {

     var x = 23;

     var add = function (a) {
         return x + a;
     }

     return {
         publicTest: function (b) {
             return add(b);
         }
     }

 })();




 var UIController = (function () {



 })();




 var controller = (function (budgetCtrl, UItrl) {

    var z = budgetCtrl.publicTest(4);

    return {
        another: function () {
            console.log(z);
        }
    }

 })(budgetController, UIController)



 controller.another()