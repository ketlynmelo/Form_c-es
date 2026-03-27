let form = document.getElementById('formulario');

    form.addEventListener('submit', function(e){

        e.preventDefault();

        let valido = true;

        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let telefone = document.getElementById('telefone').value;
        let cpf = document.getElementById('cpf').value;
        let idade = document.getElementById('idade').value;
        let cidade = document.getElementById('cidade').value;
        let moradia = document.getElementById('moradia').value;
        let quintal = document.getElementById('quintal').value;
        let horas = document.getElementById('horas').value;
        let motivo = document.getElementById('motivo').value;
        let termos = document.getElementById('Termos').value;



        document.getElementById('erroNome').textContent = '';
        document.getElementById('erroEmail').textContent = '';
        document.getElementById('erroTelefone').textContent = '';
        document.getElementById('erroCPF').textContent = '';
        document.getElementById('erroIdade').textContent = '';
        document.getElementById('erroCidade').textContent = '';
        document.getElementById('erroMoradia').textContent = '';
        document.getElementById('erroQuintal').textContent = '';
        document.getElementById('erroHoras').textContent = '';
        document.getElementById('erroMotivo').textContent = '';
        document.getElementById('erroTermos').textContent = '';

        if (nome.length < 3) {

            document.getElementById('erroNome').textContent = 'Nome deve ter pelo menos 3 caracteres';
            valido = false;
        }

        if (!email.includes('@')){
            
            document.getElementById('erroEmail').textContent = 'Email inválido';
            valido = false;
        } 

        if(telefone.length < 8){
            
            document.getElementById('erroTelefone').textContent = 'Telefone inválido, deve ter pelo menos 8 caracteres';
            valido = false;
        }

        if(idade.length < 18){
            
            document.getElementById('erroIdade').textContent = 'Idade insuficiente, deve ser pelo menos 18 anos ';
            valido = false;
        }

        if(moradia= Apartamento){
           let local = prompt("O seu local aceita animais?");
           if (local=="Não || não || Nao || Nao"){
            

           }


        }

        if(quintal.length ){
            document.getElementById('erroQuintal').textContent = 'Resposta incorreta, deve falar sim ou não!';
            valido = false;

        }

        if(pet.length ){
            document.getElementById('erroPet').textContent = 'Resposta incorreta, deve falar sim ou não!';
            valido = false;

        }

        if(motivo.length < 10){
            document.getElementById('erroIdade').textContent = 'Sua explicação deve ter no minimo 10 caracteres';
            valido = false;

        }


        if(valido){
            let resultado = document.getElementById('resultado');

            resultado.innerHTML = `
            
            Dados enviados: <br>
            Nome: ${nome} <br>
            Email: ${email} <br>
            Telefone: ${telefone} <br>
            CPF: ${cpf} <br>
            Idade: ${idade} <br>
            Cidade: ${cidade} <br>
            Tipo de moradia: ${moradia} <br>
            Possui quintal: ${quintal} <br>
            Já teve pet antes: ${pet} <br>
            Quantas horas o animal ficará sozinho por dia: ${horas} <br>
            Motivo da adoção: ${motivo} <br>

            `;

            form.reset();
        }




    })

