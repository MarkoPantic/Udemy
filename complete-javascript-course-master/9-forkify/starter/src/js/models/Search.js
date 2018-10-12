import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults() {

        const key = '04d0dcb987fa538a913fdc513fa2d2e6';

        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes
            //console.log(this.result);

        } catch (error) {
            alert(error)
        }

    }
}