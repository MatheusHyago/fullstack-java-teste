# O desafio (Consulta de Solicitações de Viagens)

Você deverá criar uma aplicação consumidora de nossa API de webservice para consultar solicitações de viagens e persistir em banco de dados os dados de produtos Aéreos:

Endpoint: https://treinamento.lemontech.com.br/wsselfbooking/WsSelfBookingService?wsdl

Método a ser utilizado: pesquisarSolicitacao.
________________________________________________________________________________________________________________________________________________________________________________

# Fullstack Java Teste

Este projeto foi desenvolvido como um desafio para demonstrar habilidades em desenvolvimento fullstack, utilizando Java no backend e tecnologias web no frontend.

## Tecnologias Utilizadas

### Backend
- **Java 17**: Linguagem utilizada para o desenvolvimento.
- **Spring Boot**: Framework que facilita a criação de APIs REST e aplicações web.
  - `/spring-boot-starter-web`
  - `/spring-boot-starter-data-jpa`
  - `/spring-boot-starter-validation`
  - `/lombok`
- **Maven**: Ferramenta de gerenciamento de dependências e build do projeto.

### Frontend
- **HTML**: Estrutura das páginas.
- **CSS**: Estilização e layout da interface.
- **JavaScript**: Lógica de interatividade e integração com a API.

  
## Estrutura do Projeto

O projeto segue uma estrutura MVC onde as pastas são separadas por suas seguintes funções:

#### **Backend (Spring Boot)**
- `controller/`: Define os endpoints REST da aplicação. São responsáveis por receber requisições e direcioná-las para os serviços.
- `service/`: Contém a lógica de negócios da aplicação.
- `repository/`: Contém as interfaces para acesso ao banco de dados utilizando o **Spring Data JPA**.
- `model/`: Define as entidades que representam tabelas no banco de dados.
- `dto/`: Armazena classes para transferência de dados entre o frontend e backend.
- `config/`: Contém configurações como segurança, CORS, beans personalizados, etc.

#### **Frontend**
- `home.html`: Página principal com a listagem de solicitações carregadas da API.
- `create.html`: Página para criar novas solicitações fictícias.
- `app.js`: Script para interagir com a API e exibir dados.
- `app_create.js`: Script para gerar solicitações fictícias no frontend sem persistência no banco.

Esse modelo mantém a aplicação bem organizada, facilitando o desenvolvimento e manutenção.
