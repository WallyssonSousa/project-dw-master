const url = "https://go-wash-api.onrender.com/api/auth/address";

async function listarEnderecos() {
    let response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token,
        }
    });

    if (response.ok) {
        let data = await response.json();
        console.log(data.data);
        exibirEnderecos(data.data);
    } else {
        alert("Erro ao listar os endereços; Tente novamente!");
    }
}

async function deletarEndereco(id) {
    const url = `https://go-wash-api.onrender.com/api/auth/address/${id}`;
    let response = await fetch(url, {
        method: "DELETE",
        headers: {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token,
        }
    });

    if (response.ok) {
        alert("Endereço deletdo com sucesso! Atualizando lista...");
        listarEnderecos();
    } else {
        alert("Erro ao deletar o endereço; Tente novamente!");
    }
}

function exibirEnderecos(enderecos) {
    let listaEnderecos = document.getElementById('listaEnderecos');
    let linhas = enderecos.map((endereco) => `
        <tr>
            <td>${endereco.title}</td>
            <td>${endereco.address}</td>
            <td>${endereco.number}</td>
            <td>${endereco.complement}</td>
            <td>
                <button class="buttonCrud" onclick="editarEndereco(${endereco.id})">Editar</button>
            </td>
            <td>
                <button class="buttonCrud" onclick="deletarEndereco(${endereco.id})">Excluir</button>
            </td>
        </tr>
    `).join('');
    listaEnderecos.innerHTML = linhas;
}

function editarEndereco(id){
    location.href = `atualizar_end.html?id=${id}`;
}

listarEnderecos()