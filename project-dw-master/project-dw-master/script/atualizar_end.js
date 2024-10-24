const url = "https://go-wash-api.onrender.com/api/auth/address";
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function carregarEndereco() {
    console.log("ID do endereço:", id); // Verifica o ID

    let response = await fetch(`${url}/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token,
        }
    });

    if (response.ok) {
        let responseData = await response.json();
        console.log(responseData); // Inspecione a estrutura

        // Ajuste conforme a estrutura correta
        let data = responseData.data; // Caso os dados estejam aninhados

        document.getElementById('title').value = data.title;
        document.getElementById('cep').value = data.cep;
        document.getElementById('address').value = data.address;
        document.getElementById('number').value = data.number;
        document.getElementById('complement').value = data.complement;
    } else {
        alert("Erro ao carregar o endereço; Tente novamente!");
    }
}

async function atualizarEndereco(event) {
    event.preventDefault();

    const updatedData = {
        title: document.getElementById('title').value,
        cep: document.getElementById('cep').value,
        address: document.getElementById('address').value,
        number: document.getElementById('number').value,
        complement: document.getElementById('complement').value,
    };

    let response = await fetch(`${url}/${id}`, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token,
        },
        body: JSON.stringify(updatedData),
    });

    if (response.ok) {
        alert("Endereço atualizado com sucesso!");
        window.location.href = '../view/home.html';
    } else {
        alert("Erro ao atualizar o endereço; Tente novamente!");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    carregarEndereco();
    document.getElementById('formEditEndereco').addEventListener('submit', atualizarEndereco);
});