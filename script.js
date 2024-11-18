
const modal = document.getElementById("modalCadastro");
const btnCadastro = document.getElementById("btnCadastro");
const fecharModal = document.getElementById("fecharModal");
const formCadastro = document.getElementById("formCadastro");


btnCadastro.addEventListener("click", () => {
    modal.style.display = "flex";
});


fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
});


formCadastro.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;

    // Criando o objeto com os dados do usuário
    const dadosUsuário = {
        nome: nome,
        email: email,
        telefone: telefone,
        cpf: cpf,
        senha: senha
    };

    
    localStorage.setItem("dadosUsuário", JSON.stringify(dadosUsuário));

   
    alert("Seu cadastro foi realizado com sucesso!");

    
    modal.style.display = "none";

    
    window.location.href = "perfil.html";
});


if (window.location.pathname.includes("perfil.html")) {
   
    const userData = JSON.parse(localStorage.getItem("dadosUsuário"));

    if (userData) {
        
        document.getElementById("nomePerfil").textContent = dadosUsuário.nome;
        document.getElementById("emailPerfil").textContent = dadosUsuário.email;
        document.getElementById("telefonePerfil").textContent = dadosUsuário.telefone;
        document.getElementById("cpfPerfil").textContent = dadosUsuário.cpf;
    } else {
        
        alert("Usuário não encontrado. Por favor, faça o cadastro primeiro.");
        window.location.href = "index.html";
    }
}