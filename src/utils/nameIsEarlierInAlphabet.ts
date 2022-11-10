import { letterIsEarlierInAlphabet } from "./letterIsEarlierInAlphabet";

export function nameIsEarlierInAlphabet(name1: string, name2: string): boolean {
    for(let i=0; i<name1.length; i++){
        const letterIsEarlier = letterIsEarlierInAlphabet(name1[i], name2[i])
        if(letterIsEarlier===true){
            return true
        } else if(letterIsEarlier===false){
            return false
        }
    }
    return true
}