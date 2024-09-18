let content = document.getElementById('content')
let home = document.getElementById('home')
let contact = document.getElementById('contact')
let about = document.getElementById('about')

window.onload = fetchHtml('home')

window.addEventListener('popstate', (event) => {
    /*     alert(
      `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
    ); */
    switch (event.state.page) {
        case 1:
            fetchHtml('home')
            break
        case 2:
            fetchHtml('about')
            break
        case 3:
            fetchHtml('contact')
            break
        default:
            fetchHtml('home')
    }
})


home.addEventListener('click', (e) => {
    e.preventDefault
    history.pushState({ page: 1 }, 'home', 'home.html')
    fetchHtml('home')
})
about.addEventListener('click', (e) => {
    e.preventDefault

    history.pushState({ page: 2 }, 'about', 'about.html')
    fetchHtml('about')
})
contact.addEventListener('click', (e) => {
    e.preventDefault

    history.pushState({ page: 3 }, 'contact', 'contact.html')
    fetchHtml('contact')
})

function fetchHtml(filename) {
     const loader =  document.querySelector(".loadingArea"); 
     loader.classList.add("showLoader")
    fetch(`./${filename}.html`)
        .then((response) => {
            return response.text()
        })
        .then((html) => {const loader =  document.querySelector(".loadingArea"); 
            loader.classList.remove("showLoader")
            content.innerHTML = html
        })
}

