# O desafio (Consulta de Solicitações de Viagens)

Você deverá criar uma aplicação consumidora de nossa API de webservice para consultar solicitações de viagens e persistir em banco de dados os dados de produtos Aéreos:

**Endpoint:** https://treinamento.lemontech.com.br/wsselfbooking/WsSelfBookingService?wsdl  
**Método a ser utilizado:** `pesquisarSolicitacao`

---

# Fullstack Java Teste

Este projeto foi desenvolvido como parte de um desafio técnico, demonstrando habilidades em desenvolvimento fullstack com **Java** no backend e tecnologias web no frontend. A aplicação consome uma **API SOAP** para buscar solicitações de viagens, armazenando os dados em um banco **MySQL** e expondo endpoints REST para consulta e manipulação.

---

## Tecnologias Utilizadas

### **Backend**
- **Java 17**: Linguagem principal do projeto.
- **Spring Boot**: Framework para construção de APIs REST.
  - `spring-boot-starter-web`
  - `spring-boot-starter-data-jpa`
  - `spring-boot-starter-validation`
  - `spring-boot-starter-security`
  - `lombok`
- **Maven**: Gerenciador de dependências e automação do build.
- **MySQL**: Banco de dados para armazenar as solicitações.

### **Frontend**
- **HTML, CSS e JavaScript**: Construção da interface do usuário.
- **Fetch API**: Comunicação assíncrona com o backend.

---

## Estrutura do Projeto

O projeto segue a arquitetura **MVC** (Model-View-Controller), dividindo responsabilidades de forma modular para facilitar manutenção e escalabilidade.

```
fullstack-java-teste/
├── Backend/                         
│   ├── src/
│   │   ├── main/java/com/testelemontech/solicitacoes/
│   │   │   ├── controller/     # Define os endpoints da API
│   │   │   ├── service/        # Regras de negócio e chamadas à API SOAP
│   │   │   ├── repository/     # Persistência de dados (Spring Data JPA)
│   │   │   ├── model/          # Entidades que representam tabelas do banco
│   │   │   ├── config/         # Configuração do Spring Boot e integração SOAP
│   │   ├── resources/
│   │       ├── application.properties  # Configurações gerais do projeto
│   ├── pom.xml                 # Dependências do Maven
│
└── Frontend/                    
    ├── css/                     # Estilos (CSS)
    ├── js/                      # Scripts para manipulação da API
    ├── home.html                # Página principal com listagem de solicitações
    ├── create.html              # Página para criar solicitações ficticias
```

---

## Como Executar o Projeto

### **Pré-requisitos**
Certifique-se de ter as seguintes ferramentas instaladas:
- [Java 17+](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Maven](https://maven.apache.org/)
- [MySQL](https://dev.mysql.com/downloads/installer/)
- [Postman](https://www.postman.com/) (opcional, para testar a API)

### **Configuração das Variáveis de Ambiente**
Para garantir a **segurança das credenciais**, utilizamos **variáveis de ambiente**. Certifique-se de definir as seguintes variáveis no seu sistema antes de rodar o backend:

```sh
export MYSQL_HOST=localhost
export MYSQL_PORT=3306
export MYSQL_DB=db_viagens
export MYSQL_USER=root
export MYSQL_PASSWORD=minha_senha_secreta
export SERVER_PORT=8081
export SOAP_USERNAME=seu_usuario
export SOAP_PASSWORD=sua_senha
export SOAP_WSDL_URL=https://treinamento.lemontech.com.br/wsselfbooking/WsSelfBookingService?wsdl
```

### **Rodando o Backend**
1. Clone este repositório:
   ```sh
   git clone https://github.com/MatheusHyago/fullstack-java-teste.git
   ```
2. Entre na pasta do backend:
   ```sh
   cd fullstack-java-teste/Backend
   ```
3. Compile e execute o projeto:
   ```sh
   mvn spring-boot:run
   ```
4. Acesse a API no navegador ou via Postman:
   ```
   http://localhost:8081/solicitacoes
   ```

### **Rodando o Frontend**
1. Navegue até a pasta do frontend:
   ```sh
   cd fullstack-java-teste/Frontend
   ```
2. Abra `home.html` no navegador.

---

## Endpoints Disponíveis

| Método | Endpoint                   | Descrição |
|--------|----------------------------|-----------|
| `GET`  | `/solicitacoes`            | Lista todas as solicitações armazenadas |
| `GET`  | `/solicitacoes/sincronizar` | Sincroniza novas solicitações da API SOAP |

---
