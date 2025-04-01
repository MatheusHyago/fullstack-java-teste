# O desafio (Consulta de Solicitações de Viagens)

Você deverá criar uma aplicação consumidora de nossa API de webservice para consultar solicitações de viagens e persistir em banco de dados os dados de produtos Aéreos:

**Endpoint:** https://treinamento.lemontech.com.br/wsselfbooking/WsSelfBookingService?wsdl  
**Método:** `pesquisarSolicitacao`

---

# Fullstack Java Teste

Projeto desenvolvido para demonstrar habilidades em desenvolvimento fullstack com **Java** no backend e tecnologias web no frontend.  
A aplicação consome uma **API SOAP** para buscar solicitações de viagens, armazena dados em um banco **MySQL** e expõe endpoints REST.

---

## Tecnologias Utilizadas

### Backend
- **Java 17**
- **Spring Boot**
  - `spring-boot-starter-web`
  - `spring-boot-starter-data-jpa`
  - `spring-boot-starter-validation`
  - `spring-boot-starter-security`
  - `lombok`
- **Maven**
- **MySQL**

### Frontend
- **HTML, CSS, JavaScript**
- **Fetch API**

---

## Estrutura do Projeto

Arquitetura **MVC** dividindo responsabilidades para manutenção e escalabilidade.

    fullstack-java-teste/
    ├── Backend/                         
    │   ├── src/
    │   │   ├── main/java/com/testelemontech/solicitacoes/
    │   │   │   ├── controller/     # Define os endpoints da API
    │   │   │   ├── service/        # Regras de negócio e chamadas à API SOAP
    │   │   │   ├── repository/     # Persistência de dados (Spring Data JPA)
    │   │   │   ├── model/          # Entidades que representam tabelas do banco
    │   │   │   ├── config/         # Configuração do Spring Boot e integração SOAP
    │   ├── resources/
    │       ├── application.properties  # Configurações gerais do projeto
    │   ├── pom.xml                 # Dependências do Maven
    └── Frontend/                    
        ├── css/                     # Estilos (CSS)
        ├── js/                      # Scripts para manipulação da API
        ├── home.html                # Página principal com listagem de solicitações
        ├── create.html              # Página para criar solicitações fictícias


---

## Como Executar o Projeto

### Pré-requisitos
- [Java 17+](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Maven](https://maven.apache.org/)
- [MySQL](https://dev.mysql.com/downloads/installer/)
- [Postman](https://www.postman.com/) (opcional)

### Configuração das Variáveis de Ambiente
Defina as seguintes variáveis antes de rodar o backend:
```sh
export MYSQL_HOST= host local
export MYSQL_PORT= porta local
export MYSQL_DB= schema mysql
export MYSQL_USER= seu_usuario
export MYSQL_PASSWORD= sua_senha
export SERVER_PORT=8081
export SOAP_USERNAME=seu_usuario
export SOAP_PASSWORD=sua_senha
export SOAP_WSDL_URL=https://treinamento.lemontech.com.br/wsselfbooking/WsSelfBookingService?wsdl
```

### Rodando o Backend
1. Clone o repositório:
   ```sh
   git clone https://github.com/MatheusHyago/fullstack-java-teste.git
   ```
2. Entre na pasta do backend:
   ```sh
   cd fullstack-java-teste/Backend
   ```
3. Compile e execute:
   ```sh
   mvn spring-boot:run
   ```
4. Teste a API em:
   
http://localhost:8081/solicitacoes
   
http://localhost:8081/solicitacoes/sincronizar

### Rodando o Frontend - Abra `home.html` no navegador.
```
