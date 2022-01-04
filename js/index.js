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
            console.log(data)
            addUserDataToDom(data)
            })
        })
    }
        //using the result of the search, display info avout the user 
        //username, avatar_url and link to their profile
    function addUserDataToDom(data) {
        const li = document.createElement('li')
        const userList = document.getElementById('user-list')
        const userName = data.items[0].login
        const id = data.items[0].id
        const avatarUrl = data.items[0].avatar_url
        
        //create p element to add your user data
        const pUserName = document.createElement("p")
        const pId = document.createElement("p")
        const pAvatarUrl = document.createElement("p")

        pUserName.innerText = userName 
        pId.innerText = id
        pAvatarUrl.innerText = avatarUrl

        //append to the page
       li.appendChild(pUserName)
       li.appendChild(pId)
       li.appendChild(pAvatarUrl)
        userList.appendChild(li)
       
    }

document.addEventListener('DOMContentLoaded', init);