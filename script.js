let form = document.getElementById('formulario');

    form.addEventListener('submit', function(e){

        e.preventDefault();

        let valido = true;

        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let telefone = document.getElementById('telefone').value;
        let cpf = document.getElementById('cpf').value;

        document.getElementById('erroNome').textContent = '';
        document.getElementById('erroEmail').textContent = '';
        document.getElementById('erroTelefone').textContent = '';
        document.getElementById('erroCPF').textContent = '';

        if (nome.length < 3) {

            document.getElementById('erroNome').textContent = 'Nome deve ter pelo menos 3 caracteres';
            valido = false;
        }

        if (!email.includes('@')){
            
            document.getElementById('erroEmail').textContent = 'Email inválido';
            valido = false;
        } 

        if(senha.length < 6){
            
            document.getElementById('erroSenha').textContent = 'Senha inválida, deve ter pelo menos 6 caracteres';
            valido = false;
        }


        if(valido){
            let resultado = document.getElementById('resultado');

            resultado.innerHTML = `
            
            Dados enviados: <br>
            Nome: ${nome} <br>
            Email: ${email} <br>
            Senha: ${senha} <br>

            `;

            form.reset();
        }




    })

