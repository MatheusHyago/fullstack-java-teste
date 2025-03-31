# O desafio (Consulta de Solicitações de Viagens)

Você deverá criar uma aplicação consumidora de nossa API de webservice para consultar solicitações de viagens e persistir em banco de dados os dados de produtos Aéreos:

**Endpoint:** https://treinamento.lemontech.com.br/wsselfbooking/WsSelfBookingService?wsdl  
**Método a ser utilizado:** `pesquisarSolicitacao`

---

# Fullstack Java Teste

Este projeto foi desenvolvido como um desafio para demonstrar habilidades em desenvolvimento fullstack, utilizando **Java** no backend e tecnologias web no frontend.

## Tecnologias Utilizadas

### Backend
- **Java 17**: Linguagem utilizada para o desenvolvimento.
- **Spring Boot**: Framework que facilita a criação de APIs REST e aplicações web.
  - `/spring-boot-starter-web`
  - `/spring-boot-starter-data-jpa`
  - `/spring-boot-starter-validation`
  - `/lombok`
- **Maven**: Ferramenta de gerenciamento de dependências e build do projeto.
- **MySQL**: Banco de dados relacional utilizado para armazenar as solicitações de viagens.

### Frontend
- **HTML**: Estrutura das páginas.
- **CSS**: Estilização e layout da interface.
- **JavaScript**: Lógica de interatividade e integração com a API.

## Estrutura do Projeto

O projeto segue a arquitetura **MVC** para organizar a estrutura de código de maneira clara e modular.

```
fullstack-java-teste/
├── Backend/                       # Código do backend (Spring Boot)
│   ├── src/
│   │   ├── main/java/com/testelemontech/solicitacoes/
│   │   │   ├── controller/     # Controladores REST (Endpoints da API)
│   │   │   ├── service/        # Regras de negócio e lógica de serviços
│   │   │   ├── repository/     # Interfaces de acesso ao banco de dados (Spring Data JPA)
│   │   │   ├── model/          # Entidades (Mapeamento das tabelas do banco)
│   │   │   ├── dto/            # Objetos de transferência de dados
│   │   │   ├── config/         # Configurações do projeto (ex: CORS, Beans, etc.)
│   │   ├── resources/          # Arquivos de configuração e templates
│   │       ├── application.properties  # Configuração do Spring Boot
│   ├── pom.xml                     # Configuração do Maven e dependências
│   ├── README.md                    # Documentação do backend
│   └── .gitignore                    # Arquivos ignorados no controle de versão
│
└── Frontend/                        # Código do frontend (HTML, CSS, JS)
    ├── css/                         # Arquivos de estilo (CSS)
    │   ├── style.css                 # Estilização da listagem
    │   ├── style_create.css          # Estilização da página de criação
    │
    ├── js/                           # Scripts JavaScript
    │   ├── app.js                    # Manipulação de listagem e requisições à API
    │   ├── app_create.js             # Manipulação da criação de novas solicitações
    │
    ├── home.html                      # Página inicial com listagem de solicitações
    ├── create.html                    # Página para criação de solicitações fictícias
    ├── index.html                     # Redirecionamento ou tela inicial do frontend
    ├── README.md                      # Documentação do frontend
    └── .gitignore                      # Arquivos ignorados no controle de versão
```

### **Detalhes das Camadas do Backend**

- **`controller/`**: Define os **endpoints REST** da aplicação. São responsáveis por receber requisições e direcioná-las para os serviços.
- **`service/`**: Contém a **lógica de negócios** da aplicação, como processamento de dados e integração com a API SOAP.
- **`repository/`**: Interfaces para acesso ao banco de dados utilizando **Spring Data JPA**.
- **`model/`**: Define as **entidades** que representam as tabelas do banco de dados.
- **`dto/`**: Contém os **Data Transfer Objects (DTOs)**, que encapsulam dados trafegados entre a API e o frontend.
- **`config/`**: Contém configurações como **CORS**, Beans personalizados e integração com a API SOAP.

### **Frontend**
- `home.html`: Página principal com a listagem de solicitações carregadas da API.
- `create.html`: Página para criar novas solicitações fictícias.
- `app.js`: Script para interagir com a API e exibir dados.
- `app_create.js`: Script para gerar solicitações fictícias no frontend sem persistência no banco.

Esse modelo mantém a aplicação bem organizada, facilitando o desenvolvimento e manutenção.

## Como Executar o Projeto

### **Pré-requisitos**
Certifique-se de ter as seguintes ferramentas instaladas:
- [Java 17+](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Maven](https://maven.apache.org/)
- [MySQL](https://dev.mysql.com/downloads/installer/)
- [Postman](https://www.postman.com/) (opcional, para testar os endpoints da API)

### **Passos para rodar o Backend**
1. Clone este repositório:
   ```sh
   git clone https://github.com/MatheusHyago/fullstack-java-teste.git
   ```
2. Entre na pasta do backend:
   ```sh
   cd fullstack-java-teste/Backend
   ```
3. Configure o banco de dados no `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/db_viagens
   spring.datasource.username=root
   spring.datasource.password=senha
   ```
4. Compile e execute o projeto:
   ```sh
   mvn spring-boot:run
   ```
5. Acesse a API no navegador ou via Postman:
   ```
   http://localhost:8080/solicitacoes
   ```

### **Rodando o Frontend**
1. Navegue até a pasta do frontend:
   ```sh
   cd fullstack-java-teste/Frontend
   ```
2. Abra o arquivo `home.html` no navegador.

## Endpoints Disponíveis

| Método | Endpoint              | Descrição |
|--------|-----------------------|-----------|
| `GET`  | `/solicitacoes`       | Lista todas as solicitações salvas no banco |
| `GET`  | `/solicitacoes/sincronizar` | Sincroniza novas solicitações da API SOAP |
| `POST` | `/solicitacoes`       | Cria uma nova solicitação manualmente |

---

Este projeto foi desenvolvido como parte de um **desafio técnico**, e sua arquitetura permite expansão para novas funcionalidades e integrações futuras.
