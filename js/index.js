//when form is submitted take the value of that input and search gitHub

const init = () => {
    const inputForm = document.querySelector('#github-form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#search');
        // console.log(input.value)

        fetch(`https://api.github.com/search/users?q=${input.value}`)     
        .then(response => response.json())
        .then(data => { 
            // console.log(data)
            addUserDataToDom(data)
            })

               //using the result of the search, display info avout the user 
           //username, avatar_url and link to their profile

 
        })
    }
  
    function addUserDataToDom(data) {
        const li = document.createElement('li')
        const userList = document.getElementById('user-list')
        const userName = data.items[0].login
        const url = data.items[0].url
        const avatarUrl = data.items[0].avatar_url
       li.innerHTML = userName
    
        userList.appendChild(li)
    }

document.addEventListener('DOMContentLoaded', init);