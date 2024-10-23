const url = "https://go-wash-api.onrender.com/api/login"

async function login () {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "email": email,
            "password": senha,
            "user_type_id": 1,
        }), 
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let data = await response.json();
    if(response.ok){
        localStorage.setItem("user", JSON.stringify(data))
        alert("Seja bem vindo")
        location.href = '../view/home.html';
    } else {
        alert(data.data.errors)
    }
}


/* get pega dados */
/* set atualiza dados */

/* function cadastroEndereco(){
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user.access_token)
}

cadastroEndereco();  */