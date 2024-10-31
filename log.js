function criarConta(event) {
    event.preventDefault(); // Impede que o formulario seja enviado caso de errado

    const nome = document.getElementById('Name').value;
    const senha = document.getElementById('Senha').value;
    const email = document.getElementById('email').value;

    // Uma validação simples
    if (nome === '' || senha === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Aqui e usado pora salvar os dados em um objeto ou localStorage
    const usuario = {
        nome: nome,
        senha: senha,
        email: email
    };

    // Aqui salvei os dados dos usuarios para serem usados futuramente
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Redirecionar para outra página
    window.location.href = 'Sucess.html'; // Altere para a página desejada
}