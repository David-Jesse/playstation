import {assets, essentialAssets} from "./constants";


// Defining specifiv type for class Arguments
type ClassValue =  string | boolean | null | undefined;
type ClassArray = Array<ClassArray | ClassArray>;
type ClassArg = ClassValue | ClassArray;
// This function allows one to compare several classNames together
// For conditional classes, just pass in the condition (boolean)
// as the first element in the array and pass the classes you want to merge
// as the other items in the array
// @param {Array.<String | [Boolean, ...String]>} args

export const mergeClasses = (...args: ClassArg[]): string => {
    return args.reduce((accumulator: string, currentValue: ClassArg) => {
        if (Array.isArray(currentValue)) {
            const [bool, ...rest] = currentValue;
            if (bool) {
                return `${accumulator} ${mergeClasses(...rest)}`;
            } 
            return accumulator;
        } 
        if (!currentValue) {
            return accumulator;
        } 
        return `${accumulator ? `${accumulator}` : ""} ${currentValue}`
    }, "");
};

export const playNavigationAudio = () => {
    const navAudio = new Audio(assets.collectionAudio);
    navAudio.play();
}

export const secondsToHms = (d: number) => {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor((d % 3600) / 60);
    const s = Math.floor((d % 3600) % 60);

    const hDisplay = h > 0 ? h + (h === 1 ? " hr " : " hrs ") : "";
    const mDisplay = m > 0 ? m + (m === 1 ? " min " : " mins ") : ""
    const sDisplay = s > 0 ? s + (s === 1 ? " s " : " s ") : "";
    return hDisplay + mDisplay + sDisplay;
};

export const fetchEssentialAssets = () => {
    return Promise.all(essentialAssets.map((url) => fetch(url)));
}

export const fetchAllAssets = () => {
    Promise.all(Object.values(assets).map((url) => fetch(url)));
}

export const pageLoading = (): boolean => {
    const loaderElement = document.getElementById("loader");
    // return false if the page is loaded
    if (!loaderElement) {
        return false;
    }
    return window.getComputedStyle(loaderElement).display !== "none";
}