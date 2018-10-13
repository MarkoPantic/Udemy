import Search from './models/Search';
import Recipe from './models/Recipe'
import * as searchView from './views/searchView';
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

const controlSearch = async () => {
    // - get query from the view
    const query = searchView.getInput(); // for now!

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

         // Create new recipe obj
         state.recipe = new Recipe(id);

         // Get the recipe data

         try {
             
             await state.recipe.getRecipe();
    
             // Calculate time and servings
    
            state.recipe.calcServings();
            state.recipe.calcTime();
    
             // Render the recipe to the UI
             console.log(state.recipe);
         } catch (error) {
             alert('Nesto nije uredu sa receptom pokusajte kasnije! pozz')
         }

     }
 }

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));