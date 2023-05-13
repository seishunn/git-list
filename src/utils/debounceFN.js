export const debounceFN = (callback, ms) => {
    let timeout;

    return function () {
        const fnCall = () => {callback.apply(this, arguments)}

        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms);
    }
}