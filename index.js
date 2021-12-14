const token = JSON.parse(window.localStorage.getItem('auth'));
if(!token){
    window.location.replace('login.html')
}





function render(arra){
    arra.forEach(name => {
        let newli = document.createElement('li')
        let newimg = document.createElement('img')
        newimg.setAttribute('src',name.avatar)
        newli.textContent = name.first_name
        list.appendChild(newli)
        list.appendChild(newimg)
    });
}


fetch('https://reqres.in/api/users?page=2')
.then(Response => Response.json())
.then(data => {
    render(data.data    )
    // console.log(data.Search);
})