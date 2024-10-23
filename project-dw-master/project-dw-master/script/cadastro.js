const url = "https://go-wash-api.onrender.com/api/user";

const cadastro = async () => {
 
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let senha = document.getElementById('password').value;
        let cpf_cnpj = document.getElementById('cpf_cnpj').value;
        let data_aniversario = document.getElementById('dataDeAniversario').value;
        let termos = document.getElementById('termos').checked;

        let response = await fetch(url, {
            method: "POST", 
            body: JSON.stringify({
                "name": name, 
                "email": email,
                "user_type_id": 1, 
                "password": senha,
                "cpf_cnpj": cpf_cnpj,
                "terms": termos, 
                "birthday": data_aniversario 
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            let data = await response.json();
            console.log(data.data); 
            alert(data.data);
            location.href = '../view/loginn.html';
        } else {
            let errorData = await response.json();
            
            if (errorData.data.errors) {
                if (errorData.data.errors.name) {
                    alert(errorData.data.errors.name[0]);
                }
                if (errorData.data.errors.email) {
                    alert(errorData.data.errors.email[0]);
                }
                if (errorData.data.errors.password) {
                    alert(errorData.data.errors.password[0]);
                }
                if (errorData.data.errors.cpf_cnpj) {
                    alert(errorData.data.errors.cpf_cnpj[0]);
                }
                if (errorData.data.errors.birthday) {
                    alert(errorData.data.errors.birthday[0]);
                }
                if (errorData.data.errors.terms) {
                    alert(errorData.data.errors.terms[0]);
                }
            } else {
                alert('Erro desconhecido. Por favor, tente novamente mais tarde.');
            }
        }
    }
        



