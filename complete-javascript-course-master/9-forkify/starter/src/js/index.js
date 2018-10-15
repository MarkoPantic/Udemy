import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import { elements, renderLoader, clearLoader } from './views/base';
/*Global state of the app

- Search object
- Current recipe object
- Shopping list object
- Liked recipes

*/

/**
 * Search controller
 */
const state = {};

window.state = state;

const controlSearch = async () => {
    // - get query from the view
    const query = searchView.getInput(); 
    //const query = 'pizza'
    

    if(query){
        // - Create new search obj and add to state obj
        state.search = new Search(query);

        // - prepare UI for results

        searchView.clearInput();

        // - clear results from the previus

        searchView.clearResults();

        renderLoader(elements.searchRes);

        try {
            
            // - search for recipes
            await state.search.getResults();
    
    
            // render results on UI
            clearLoader();
            searchView.renderResults(state.search.result)
        } catch (error) {
            alert('Nesto nije uredu sa receptima');
            clearLoader();
        }


    }
}


elements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    controlSearch();
})

elements.searchResPages.addEventListener('click', (e) => {
    const button = e.target.closest('.btn-inline')
    
    if(button){
        const goToPage = parseInt(button.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage)
    }
})


/**
 * Recipe Controller
 */

const controlRecipe = async () => {
     const id = window.location.hash.replace('#', '');
     if (id) {
         // Prepare the UI for changes
         recipeView.clearRecipe();

         renderLoader(elements.recipe);

         //highlight selected search item
         if (state.search) {
             searchView.highlightSelected(id)
         }
         

         // Create new recipe obj
         state.recipe = new Recipe(id);
         //window.r = state.recipe; // testing!!

         // Get the recipe data

         try {
             
             await state.recipe.getRecipe();
             state.recipe.parseIngredients();
    
             // Calculate time and servings
    
            state.recipe.calcServings();
            state.recipe.calcTime();
    
             // Render the recipe to the UI
             clearLoader();
             recipeView.renderRecipe(state.recipe);
         } catch (error) {
             alert('Nesto nije uredu sa receptom pokusajte kasnije! pozz')
         }

     }
 }



 const controlList = () => {
    // create a new list if there is none yet
    if(!state.list) state.list = new List();

    //add each ingredient to the list and UI

    state.recipe.ingredients.forEach(e => {
        const item = state.list.addItem(e.count, e.unit, e.ingredient);
        listView.renderitem(item);
    });
 }

 //handle delete and update events
console.log(elements);

 elements.shopping.addEventListener('click', e => {

    // const id = e.target.closest('.shopping__item').dataset.itemid;
    // //delete event
    // if(e.target.matches('.shopping__delete, .shopping__delete *')){
    //     state.list.deleteItem(id);
    //     listView.deleteItem(id);
    // }
 });

// Handle delete and update list item events
// elements.shopping.addEventListener('click', e => {
//     // const id = e.target.closest('.shopping__item').dataset.itemid;

//     // // Handle the delete button
//     // if (e.target.matches('.shopping__delete, .shopping__delete *')) {
//     //     // Delete from state
//     //     state.list.deleteItem(id);

//     //     // Delete from UI
//     //     listView.deleteItem(id);

//     //     // Handle the count update
//     // } else if (e.target.matches('.shopping__count-value')) {
//     //     const val = parseFloat(e.target.value, 10);
//     //     state.list.updateCount(id, val);
//     // }
// });

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));


// handling recipe button clicks

elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrese, .btn-decrese *')) {
        if(state.recipe.servings > 1){

            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }

    } else if (e.target.matches('.btn-increse, .btn-increse *')) {
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        controlList();
    }
})


window.l = new List();