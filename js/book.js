const searchBook = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const url=`https://openlibrary.org/search.json?q=javascript`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}
searchBook();