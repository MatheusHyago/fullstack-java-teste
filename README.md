# O desafio (Consulta de Solicitações de Viagens)

Você deverá criar uma aplicação consumidora de nossa API de webservice para consultar solicitações de viagens e persistir em banco de dados os dados de produtos Aéreos:

Endpoint: https://treinamento.lemontech.com.br/wsselfbooking/WsSelfBookingService?wsdl

Método a ser utilizado: pesquisarSolicitacao.
________________________________________________________________________________________________________________________________________________________________________________

# Fullstack Java Teste

Este projeto foi desenvolvido como um desafio para demonstrar habilidades em desenvolvimento fullstack, utilizando Java no backend e tecnologias web no frontend.

## Tecnologias Utilizadas

### Backend
- **Java 11**: Linguagem utilizada para o desenvolvimento.
- **Spring Boot**: Framework que facilita a criação de APIs REST e aplicações web.
- **Maven**: Ferramenta de gerenciamento de dependências e build do projeto.

### Frontend
- **HTML5**: Estrutura das páginas.
- **CSS3**: Estilização e layout da interface.
- **JavaScript**: Lógica de interatividade e integração com a API.
- **Fetch API**: Comunicação assíncrona com o backend para obtenção e envio de dados.

## Estrutura do Projeto

```plaintext
fullstack-java-teste/
├── Backend/             # Código do backend (Spring Boot)
│   ├── src/
│   └── pom.xml          # Configuração do Maven
└── Frontend/            # Código do frontend
    ├── css/             # Arquivos de estilo (CSS)
    ├── js/              # Scripts JavaScript (ex.: app.js, app_create.js)
    ├── home.html        # Página inicial com listagem de solicitações
    └── create.html      # Página para criação de solicitações fictícias
