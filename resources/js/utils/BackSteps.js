export default function () {
    const handleBackEvent = (callback) => {
        window.addEventListener('popstate', callback())
    }
    const unHandleBackEvent = (callback) => {
        window.removeEventListener('popstate', callback())
    }
    return { handleBackEvent, unHandleBackEvent }
}
