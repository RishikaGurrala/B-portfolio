export const getImagrUrl=(path)=>{
    return new URL(`/assests/${path}`, import.meta.url).href;
}











