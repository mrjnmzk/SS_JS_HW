

document.getElementById("btn-vote").addEventListener("click", function (e) {
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function () {
        if (xhttp.status == 200) {
            e.target.textContent = xhttp.responseText
        }
    }
    xhttp.open("GET", "http://localhost:5500/", true);
    xhttp.send();
})



document.getElementById("btn-books").addEventListener("click", function (e) {
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function () {
        if (xhttp.status == 200) {
            const books = JSON.parse(xhttp.responseText)
            const authors = document.getElementById("authors");
            authors.innerText = "";
            books.forEach(function (book) {
                const li = document.createElement("li");
                li.textContent = book.author;
                authors.appendChild(li);
            })
        }
    }
    xhttp.open("GET", "http://localhost:5500/books.json", true);
    xhttp.send();
})

