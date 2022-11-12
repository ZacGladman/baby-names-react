import { babyNamesProps } from "../baby-names";

export function nameMatchesInput(name: string, searchInput: string): boolean {
    return name.toLowerCase().includes(searchInput.toLowerCase())
}

export function nameFilter(array: babyNamesProps[], searchInput: string): babyNamesProps[]{
    const filteredArray = [];
    for(const element of array){
        if(nameMatchesInput(element.name, searchInput)){
            filteredArray.push(element)
        }
    }
    return filteredArray
}