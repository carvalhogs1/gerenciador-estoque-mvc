## Sobre o projeto
O projeto consiste em um aplicativo para gerenciar estoque.

## Tecnologias

- [NodeJS](https://nodejs.org/pt)
- [Express](https://expressjs.com/pt-br/)
- [MySQL](https://www.mysql.com/)
- [Arquitetura MVC](https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308)
- [EJS](https://ejs.co/)


## Criar banco e tabela do projeto

```sql


/**
ADICIONEM AQUI OS COMANDOS DE CRIAR BANCO E TABELA
**/


- APERTE COM O BOTÃO DIREITO DO MOUSE NO LADO ESQUERDO DA TELA SCHEMAS
- SELECIONE CREATE SCHEMAS
- ESCOLHA UM NOME E DE APPLY
- DE UM APPLY NOVAMENTE
- E FINISH, BANCO DE DADOS CRIADO
- AGORA APERTE NA PASTINHA QUE FICA EM BAIXO DE FILE NO CANTO SUPERIOR ESQUERDO
- DIGITE USE E O NOME DO BANCO DE DADOS CRIADOS COLOQUE UM PONTO E VIRGULA NA FRENTE
- SELECIONE ESSE CODIGO COM O MOUSE E APERTE NO RAIO QUE FICA EM CIMA DO USE DIGITADO
- AGORA USE O SEGUINTE COMANDO PARA CRIAR A TABELA DE USUARIOS

create table usuarios(
id int primary key auto_increment,
nome varchar(255),
email varchar(255) unique,
senha varchar(255),
criadoEm date
);

-E PARA A TABELA DE PRODUTOS

create table produtos(
id int primary key auto_increment,
produto varchar(255),
fornecedor varchar(255),
quantidade varchar(255),
criadoEm date
);

- 


```

## Como executar o projeto

```bash
## Clone o projeto
git clone LINK_DO_REPOSITORIO

## Entre na pasta do projeto
cd NOME_DA_PASTA

## Instale as dependências
npm install

## Inicie o projeto
npm run dev
```

Made with ♥ by [Kaique Covo](www.linkedin.com/in/kaiquecovo) :wave: