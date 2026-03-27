let form = document.getElementById('formulario');

    form.addEventListener('submit', function(e){


        const cpfsExistentes = [123454678];

        e.preventDefault();

        let valido = true;

        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let telefone = document.getElementById('telefone').value;
        let cpf = document.getElementById('cpf').value;
        let idade = document.getElementById('idade').value;
        let cidade = document.getElementById('cidade').value;
        let horas = document.getElementById('horas').value;
        let motivo = document.getElementById('motivo').value;
        let termos = document.getElementById('termos').value;
        let moradia = document.querySelector('input[name="moradia"]:checked');
        let quintal = document.querySelector('input[name="quintal"]:checked');
        let pet = document.querySelector('input[name="pet"]:checked');



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

        if (cpfsExistentes.includes(cpf)){
        document.getElementById('erroCPF').textContent = "CPF já cadastrado";
        valido = false;
    }

        if(idade < 18){
            
            document.getElementById('erroIdade').textContent = 'Idade insuficiente, deve ser pelo menos 18 anos ';
            valido = false;
        }

        if (moradia && quintal){
        if (moradia.value === "apartamento" && quintal.value === "sim"){
            erroQuintal.textContent = "Apartamento não pode ter quintal";
            valido = false;
        }

        if (moradia.value === "apartamento"){
            if (!confirm("O local permite animais?")){
                valido = false;
            }
        }

        if (moradia.value === "casa"){
            if (!confirm("O quintal é seguro?")){
                valido = false;
            }
        }
    }

        if (pet && pet.value === "nao"){
        alert("A ONG poderá acompanhar sua adaptação.");
    }

    if (motivo.includes("não tenho dinheiro")){
        erroMotivo.textContent = "Condição financeira insuficiente";
        valido = false;
    }

    if (motivo.includes("hoje")){
        alert("Sua adoção parece muito impulsiva, pense melhor quando deseja adotar ");
    }

        if(motivo.length < 10){
            document.getElementById('erroIdade').textContent = 'Sua explicação deve ter no minimo 10 caracteres';
            valido = false;

        }

         if (isNaN(horas)){
           document.getElementById('erroHoras').textContent = "Horas inválidas";
            valido = false;
    }

        if (horas > 8){
           let justificativa = prompt("O pet não deve ficar sozinho por mais de 8 horas, justifique o motivo:");
           if (!justificativa){
            valido = false;
                  }

        }

        if (!termos){
        document.getElementById('erroTermos').textContent = "Aceite os termos";
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

            `;

            form.reset();
        }
    
    })

