// get html documents by elementId
const searchField = document.getElementById('search-field');
const error = document.getElementById('errors');
const totalResult = document.getElementById('total-result-field');
const searchResult = document.getElementById('search-result');

// searching field 
const searchBook = () =>{
    const searchText = searchField.value;
    // remove unnecessary empty fields 
    error.innerText='';
    totalResult.innerText='';
    searchResult.innerHTML='';
    // empty string error message 
    if(searchText === ""){
        error.innerText='Please enter which book do you want..!';
        return;
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
            // error handeling 
          if(docs.length === 0){
              error.innerText='No result found';
          }
          else{
             totalResult.innerText=`Total result found:${docs.length}`;
          }
        
            //  creating dynamic div for showing info using for loop
          docs.forEach(book => {
              const div = document.createElement('div');
              div.classList.add('col');
              div.innerHTML=`
              <div class="card h-100">
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