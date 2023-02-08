import translateTitle from './translate/title'
function handleMakeFirstLetterLowercase(string = "") {
    return string.charAt(0).toLowerCase() + string.slice(1)
}

function handleMakeFirstLetterUppercase(string = "") {
    return string.charAt(0).toLocaleUpperCase() + string.slice(1)
}
function handleGetTitle(key, language, uppercase) {
    const title = translateTitle[key]?.[language] || key
    return uppercase ? handleMakeFirstLetterUppercase(title) : title
}
export {
    handleMakeFirstLetterLowercase,
    handleGetTitle
}
