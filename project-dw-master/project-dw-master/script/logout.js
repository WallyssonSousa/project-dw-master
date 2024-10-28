function logout(){
    localStorage.removeItem('user');
    window.location.href = '../view/login.html';
}

document.getElementById('buttonLogout').addEventListener('click', logout)