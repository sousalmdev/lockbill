document.addEventListener('DOMContentLoaded', function() {
    const submit = document.querySelector('#submit-debt');

    submit.addEventListener('click', function() {
        const type = document.querySelector('#select-debt').value;
        const value = document.querySelector('#debt-val').value;
        const desc = document.querySelector('#debt-desc').value;

        // Criar a div com as informações fornecidas
        const sec = document.createElement('section');
        sec.classList.add('list-content'); // Adicionando a classe row
        sec.style = `
        border:3px solid rgba(46, 202, 194, 0.617);
        border-radius: .4rem;
        background: linear-gradient(80deg,#8787873c 20% , rgb(55, 55, 55));
        display: flex;
        flex-direction: row; // Mantendo row para os elementos ficarem em linha
        width:25rem;  
        align-items: center;
        justify-content: space-between; // Espaço entre os elementos
        padding: 1rem;`;

        const contentDiv = document.createElement('div'); // Elemento para agrupar o título e o tipo
        contentDiv.style = `
        display: flex;
        flex-direction: column;
        width:25rem;`

        const descValuePara = document.createElement('h2');
        descValuePara.textContent = `${desc.toUpperCase()} - R$${value},00`;
        descValuePara.style = `
        color: rgb(204, 204, 204, 0.9);
        font-size:1.2rem;
        text-decoration:underline .5px;
        margin-bottom: 0.5rem;`; // Espaço entre o título e o tipo

        const typePara = document.createElement('p');
        typePara.textContent = `Tipo: ${type}`;
        typePara.style = `
        cursor:pointer;
        font-size: 1rem;
        margin-top: 0;`; // Remover margem superior para evitar espaçamento indesejado

        const spanDiv = document.createElement('div');
        spanDiv.className = 'spanDiv';
        spanDiv.style = `
        display: flex;
        align-items: center;`;

        const editButton = document.createElement('span');
        editButton.id = 'edit';
        editButton.className = 'material-icons md-24';
        editButton.textContent = 'edit';
        editButton.style = 'margin-right:8px; cursor: pointer;';

        const deleteButton = document.createElement('span');
        deleteButton.id = 'delete';
        deleteButton.className = 'material-icons md-24';
        deleteButton.textContent = 'delete';
        deleteButton.style = 'cursor: pointer;';

        contentDiv.appendChild(descValuePara);
        contentDiv.appendChild(typePara);

        sec.appendChild(contentDiv);
        sec.appendChild(spanDiv);
        spanDiv.appendChild(editButton);
        spanDiv.appendChild(deleteButton);

        // Adicionar a div criada ao DOM dentro da div com id 'list'
        document.getElementById('list').appendChild(sec);

        deleteButton.addEventListener('click',function(){
        sec.remove();
        });

        editButton.addEventListener('click', function() {
            // Habilitar a edição do conteúdo
            saveButton.style.display='block'
            descValuePara.contentEditable = true;
            descValuePara.focus();
            editButton.style.display='none';
            deleteButton.style.display='none';
            typePara.addEventListener('click', function(event) {
                // Cria um novo select para as opções
                const selectType = document.createElement('select');
                selectType.id = 'select-debt';
            
                // Adiciona as opções ao select
                const options = ['Despesas', 'Serviços Gerais', 'Entretenimento', 'Roupas e acessórios', 'Tributos Obrigatórios'];
                options.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.textContent = option;
                    optionElement.value = option;
                    selectType.appendChild(optionElement);
                });
            
                // Define o valor atual do tipo como a opção selecionada
                selectType.value = typePara.textContent.trim();
            
                selectType.addEventListener('change', function() {
                    // Atualiza o conteúdo do tipo (p) com o valor selecionado
                    typePara.textContent = `Tipo: ${selectType.value}`;
                });
            
                // Substitui o tipo (p) pelo novo select
                typePara.textContent = '';
                typePara.appendChild(selectType);
            
                // Abre o menu suspenso quando clicamos no elemento typePara
                options.focus();
            });
        })            
            // Criar o botão "Salvar"
            const saveButton = document.createElement('button');
            saveButton.textContent = 'Salvar';
            saveButton.style = `
            display:none;
            background:none;
            border:none;
            font-size:1rem;
            padding:10px;
            color: rgb(204, 204, 204, 0.9);
            margin-left:8px;
            cursor:pointer;
            align-self:center
            `
        
            // Adicionar um evento de clique ao botão "Salvar"
            saveButton.addEventListener('click', function() {
                // Desabilitar a edição do conteúdo quando o botão "Salvar" for clicado
                descValuePara.contentEditable = false;
                saveButton.remove();
                editButton.style.display='block';
                deleteButton.style.display='block';
                typePara.textContent = selectType.value;  
                  ;
            });
                sec.appendChild(saveButton)
            
            // Adicionar o botão "Salvar" ao elemento que está sendo editado
        
        });
        // Limpar os campos após o envio
        document.querySelector('#select-debt').value = '';
        document.querySelector('#debt-val').value = '';
        document.querySelector('#debt-desc').value = '';

    });
