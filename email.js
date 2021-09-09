// get All id 
const searchInput = document.getElementById('search-input');
const submitButton = document.getElementById('Submit-button');
const errorDiv = document.getElementById('error')

submitButton.addEventListener('click', () => {
    const searchText = searchInput.value;
    if (searchText === '') {
        errorDiv.innerHTML = `
            <h2 class="text-light">Input Field Can not be Empty!!</h2>
        `;
        return;
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const result = re.test(searchText);
    searchInput.value = '';

    if (result) {
        errorDiv.innerHTML = `
            <h2 class="text-success">Your Email is Valid</h2>
        `;
    } else {
        errorDiv.innerHTML = `
            <h2 class="text-danger">Your Email is Un-Valid</h2>
        `;
    }
})
