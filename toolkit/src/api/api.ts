import axios from "axios";


export class AxiosApi {

    static async getByTitle({title}: { title: string }) {
        return axios.get(`https://www.omdbapi.com?apikey=fbc0d808&s=${title}`)
    }

    static async getById({id}: { id: string | undefined }) {
        return axios.get(`https://www.omdbapi.com?apikey=fbc0d808&i=${id}`)

    }
}