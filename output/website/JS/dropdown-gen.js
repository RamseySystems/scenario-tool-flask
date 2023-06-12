let html = ''

const array = ["Ayra excel"]

for (const file of array) {
    html += `
        <li>
            <a class='dropdown-item' id='${file}'>${file}</a>
        </li>
    `
}

document.getElementById('dropdown').innerHTML = html