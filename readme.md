# Users Crud Solid

## Como execultar este projeto?

```bash
# clone o projeto e acesse a pasta
git clone https://github.com/NatanRei/test-full-stack-scf-brazil.git
cd test-full-stack-scf-brazil

# instale as dependencias (Necessário Node^18) e prepere o .env
npm install
cp .env.example .env

# suba o container do docker (Necessário Docker)
docker compose up -d

# execulte o projeto
npm run start:dev
```

## Rotas disponíveis

- `GET /users`: Recupera todos os usuários cadastrados
- `GET /user/:uuid`: Recupera um usuário com base no :uuid passado
- `POST /users`: Cria um novo usuário
    - body:
        ```json
        {
            "name": "reis",
            "job": "front ent",
            "password": "369741"
        }
        ```
- `PATCH /users/:uuid`: Edita um usuário, de acordo com o :uuid passado
    - body:
        ```json
        {
            "name": "natan reis",
            "job": "front end"
        }
        ```
- `DELETE /users/:uuid`: Deleta um usuário com base no :uuid passado
- `GET /users/:uuid/readed-times`: Recupera a quantidade de vezes que o user foi lido no endpoint `GET /user/:uuid`

## Quais ferramentas usadas para cumprir o desafio?

- Typescript
- Fastify
- JWT
- Zod
- Prisma
- Docker
- Postgres

## Desafio:

### Introdução

Este projeto possui um banco de dados fake em fakeData.js com apenas um registro.
A ideia é melhorar e o CRUD escrito nos 4 arquivos de teste abaixo.

Será a validada a forma de escrita de código.
Escreva códigos que humanos consigam entender.

Fique a vontade para fazer modificaçoes nos serviços, comentários em código, estrutura, mas seja objetivo.

### [x] teste1.js

GET em /user 

Possuimos neste arquivo um serviço que faz uma busca no banco fake e retorna um registro.
Este código funciona, mas é possivel melhorar.
Veja o que pode deixar ele melhor escrito e mais performatico.

### [x] teste2.js

POST em /users, descubra a intenção dele e o corrija.

### [x] teste3.js

Este procura um usuário e o deleta da base.
Retorne sucesso para o client caso realmente tenha sido excluido e deixe o código mais performatico.

### [x] teste4.js

Atualiza os dados de um usuário especifico.

### [x] teste5.js

Retorne quantas vezes determinado usuário foi lido no teste1.

### [x] teste 6

Definina uma forma de criar permissão para o usuario, defina se o usuário pode deletar ou atualizar usuários. Crie um middleware para validar essas permissões e adicione no teste4 e teste3.
