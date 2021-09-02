// get error id 
const error = document.getElementById('errors');

// searching field 
const searchBook = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // empty message error 
    if(searchText === ""){
        error.innerText='Please write which book do you want..!';
        }
    else{
        error.innerText='';
    }

    // url link 
    const url=`https://openlibrary.org/search.json?q=${searchText}`;
    searchField.value='';
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchBook(data.docs));
    
}

// display searching books 
const displaySearchBook = docs =>{
          const searchResult=document.getElementById('search-result');
          searchResult.innerHTML='';
        const totalResult = document.getElementById('total-result-field');
             totalResult.innerText=`Total result found:${docs.length}`;
        
            //  creating dynamic div for showing info using for loop
          docs.forEach(book => {
              const div = document.createElement('div');
              div.classList.add('col');
              div.innerHTML=`
              <div class="card">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title">${book.title}</h5>
              <h5>Author:${book.author_name}</h5>
              <h5>Publisher:${book.publisher}
              <h5>First publish:${book.first_publish_year}
              <p class="card-text"></p>
            </div>
          </div>
              `
              searchResult.appendChild(div);
          });
}