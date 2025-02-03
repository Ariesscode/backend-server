let searchButton = document.querySelector('#searchFruit')


async function searchFruit() {
    let userInput = document.querySelector('#tracker').value.toLowerCase() //.value is not a function, it is a property

    let url = `https://backend-server-app-08b12f65f3cf.herokuapp.com/api/${userInput}`
    console.log(`${userInput} has been searched!`)

    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error(`${res.status}`)

        }
        const data = await res.json()
        console.log(data)
    } catch(error){
        console.error(`${error}`)
    }

}
searchButton.addEventListener('click', searchFruit)
