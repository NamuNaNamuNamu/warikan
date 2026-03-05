import titleHTML from './screens/title.html?raw'

export function screenSelector() {
    const HTMLElement = {
        title: document.getElementById("screen-title"),
    };

    HTMLElement.title.innerHTML = titleHTML;
}