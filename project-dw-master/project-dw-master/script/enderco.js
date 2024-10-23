const url = "https://go-wash-api.onrender.com/api/auth/address";

async function endereco() {

    let title = document.getElementById('title').value;
    let cep = document.getElementById('cep').value;
    let address = document.getElementById('address').value;
    let number = document.getElementById('number').value;
    let complement = document.getElementById('complement').value;

    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "title": title,
            "cep": cep,
            /* "user_type_id": 1, */
            "address": address,
            "number": number,
            "complement": complement,
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ' Bearer ' + JSON.parse(localStorage.getItem('user')).access_token,
        }
    });

    if (response.ok) {
        let data = await response.json();
        console.log(data.data);
        alert("Endereço cadastrado com sucesso")
        location.href = '../view/home.html';
    } else {
        alert("Erro ao cadastrar o usuário; Tente novamente!")
    }
}
