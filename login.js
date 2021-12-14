form.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    let login = inputLogin.value.trim()
    let passwordb = inputPassword.value.trim()
    // console.log(login,password);
    fetch('https://reqres.in/api/login',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            email: login,
            password: passwordb,
        }),
        
    }).then(response => response.json())
      .then(data => {
          window.localStorage.setItem('auth',JSON.stringify(data))
          window.location.replace('index.html')
      });
})