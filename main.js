let searchButton = document.querySelector('#searchFruit')


function searchFruit(){

    let userInput = document.querySelector('#tracker').value.toLowerCase() //.value is not a function, it is a property
    console.log(`${userInput} has been searched!`)
}
searchButton.addEventListener('click', searchFruit)
