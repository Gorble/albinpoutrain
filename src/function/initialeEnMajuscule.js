export function initialeEnMajuscule(chaine) {
    if (chaine.length === 0) {
        return chaine; 
    }

    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}