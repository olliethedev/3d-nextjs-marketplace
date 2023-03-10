const KEY = "redux";

/*
 *  This is the local storage util. It is used to store the redux state.
 */

export function loadState() {
    try {
        if (typeof window === "undefined") return undefined;
        const serializedState = localStorage.getItem(KEY);
        if (!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.trace(e);
        return undefined;
    }
}

export async function saveState(state: any) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(KEY, serializedState);
    } catch (e) {
        console.trace(e);
    }
}