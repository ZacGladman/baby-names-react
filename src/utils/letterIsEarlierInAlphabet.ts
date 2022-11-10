export function letterIsEarlierInAlphabet(letter1: string, letter2: string): boolean | undefined {  
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    if(alphabet.indexOf(letter1.toLowerCase()) < alphabet.indexOf(letter2.toLowerCase())){
        return true
    } else if(alphabet.indexOf(letter1.toLowerCase()) > alphabet.indexOf(letter2.toLowerCase())){
        return false
    }
    return undefined
}