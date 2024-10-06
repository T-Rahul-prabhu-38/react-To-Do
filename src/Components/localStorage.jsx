const todoKey = "todopp";

export const localStorageGetItem = () =>{
    const rawData = localStorage.getItem(todoKey);
    if (!rawData) return [];
    try {
        return JSON.parse(rawData);
    } catch (e) {
        console.error("Error parsing localStorage data:", e);
        return [];
    }
} 

export const localStorageSetItem = (task)=>{
    return localStorage.setItem(todoKey,JSON.stringify(task));
}
