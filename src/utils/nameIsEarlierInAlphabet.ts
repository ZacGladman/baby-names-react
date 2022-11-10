export function nameIsEarlierInAlphabet(name1: string, name2: string): boolean {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';


    return false
}

function letterIsEarlierInAlphabet(letter1: string, letter2: string): boolean {  
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet.indexOf(letter1) < alphabet.indexOf(letter2) ? true:false
}

/* PROGRAMME isEarlierInAlphabet:
        FOR EACH letter in word1:
            IF letter appears before the same positioned letter in word2 does in the alphabet:
                RETURN true;
            ELSE IF letter appears after:
                RETURN false;
            ELSE: // they're the same letter


*/
