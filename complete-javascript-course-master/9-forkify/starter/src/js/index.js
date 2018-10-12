import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';
/*Global state of the app

- Search object
- Current recipe object
- Shopping list object
- Liked recipes

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

        // - search for recipes
        await state.search.getResults();

        // render results on UI

        searchView.renderResults(state.search.result)
    }
}


elements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    controlSearch();
})