# TaskTO-DO-API

Bem-vindo à TaskTO-DO-API! A TaskTO-DO-API é uma API projetada para gerenciar tarefas e listas de afazeres, proporcionando uma solução eficiente para organizar suas atividades diárias.

## Configuração

### Pré-requisitos

Certifique-se de ter os seguintes pré-requisitos instalados antes de prosseguir:

- [Node.js](https://nodejs.org/) (v14.0.0 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- Banco de dados MySQL configurado e em execução

### Instalação

1. Clone este repositório:

    ```bash
    git clone https://github.com/seu-usuario/tasktodo-api.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd tasktodo-api
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Configure o banco de dados editando o arquivo `.env` com suas credenciais:

    ```env
    PORT=4000
    MYSQL_DB=nome_do_banco_de_dados
    MYSQL_USER=seu_usuario
    MYSQL_PASSWORD=sua_senha
    MYSQL_PORT=porta
    ```

5. Execute as migrações do banco de dados para criar as tabelas necessárias:

    ```bash
    npm run migrate
    ```

6. Inicie o servidor em modo de desenvolvimento usando `nodemon`:

    ```bash
    npm run start-dev
    ```

Agora, a TaskTO-DO-API está pronta para ser usada!

## Uso

A API possui os seguintes endpoints:

- **GET /todo**: Retorna a lista de todas as tarefas.
- **POST /todo**: Cria uma nova tarefa com base nos dados fornecidos no corpo da solicitação.
- **PUT /todo/:id**: Atualiza as informações da tarefa com o ID fornecido.
- **DELETE /todo/:id**: Exclui a tarefa com o ID fornecido.

Exemplo de uso:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"id": 1, "title": "Completar Projeto", "done": "false"}' http://localhost:4000/todo
