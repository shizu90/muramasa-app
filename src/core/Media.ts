export default class Media{
    #data: {image: string, countLength: string, title: string}
    #favorited: boolean
    #id: string
    #progress: string
    #type: string
    #count: number

    constructor(data: any, favorited: boolean, id: any, progress: string, type: string, count: number){
        this.#data = data
        this.#favorited = favorited
        this.#id = id
        this.#progress = progress
        this.#type = type
        this.#count = count | 0
    }
    get id() {
        return this.#id
    }
    get data() {
        return this.#data
    }
    get favorited() {
        return this.#favorited
    }
    get progress() {
        return this.#progress
    }
    get type() {
        return this.#type
    }
    get count() {
        return this.#count
    }
    set favorited(favorited){
        this.#favorited = favorited
    }
    set progress(progress){
        this.#progress = progress
    }
    set count(count){
        this.#count = count
    }
}