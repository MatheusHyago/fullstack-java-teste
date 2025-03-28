# O desafio (Consulta de Solicitações de Viagens)

Você deverá criar uma aplicação consumidora de nossa API de webservice para consultar solicitações de viagens e persistir em banco de dados os dados de produtos Aéreos:

Endpoint: https://treinamento.lemontech.com.br/wsselfbooking/WsSelfBookingService?wsdl

Método a ser utilizado: pesquisarSolicitacao.

### Requisito

Consultar as solicitações de viagens filtrando pelos últimos 3 meses e separar apenas as que contenham produtos Aéreos.

### Arquitetura e documentação

Modelo de Arquitetura utilizado: MVC divido em duas partes Backend / Frontend 

Backend estrutura / tecnologia e bibliotecas
Linguagem Java 17
Bibliotecas Spring Boot

Estrutura Backend:

 controller/
 ModelRequestController → Contém os endpoints da API

 service/
 ModelRequestService  → Contém as regras de negócio, incluindo a sincronização de solicitações

 repository/
 ModelRequestRepository  →  Interface de comunicação com o banco de dados utilizando Spring Data JPA

 model/
 ModelRequest  → Entidades da aplicação

 config/
 WsConfig → Configurações para integração SOAP
 WsClient → Cliente SOAP responsável por buscar solicitações externas
 
 Fluxo do Backend 
 
• O usuário faz uma requisição para obter ou sincronizar solicitações.

• O Controller recebe a requisição e chama o Service.

• O Service executa as regras de negócio e acessa o Repository para interagir com o banco de dados. Quando necessário, o WsClient realiza uma integração SOAP para buscar
novas solicitações.

• A resposta é retornada ao frontend ou armazenada no banco.

• usuário faz uma requisição para obter ou sincronizar solicitações.

• Controller recebe a requisição e chama o Service.

• Service executa as regras de negócio e acessa o Repository para interagir com o banco de dados. Quando necessário, o WsClient realiza uma integração SOAP para buscar 
 novas solicitações.

• A resposta é retornada ao frontend ou armazenada no banco.

 frontend (React.js)

components/ → Componentes reutilizáveis

 services/ → Requisições para o backend


### Avaliação

Entre os critérios de avaliação estão:

* Facilidade de configuração do projeto
* Performance
* Código limpo e organização
* Documentação de código
* Documentação do projeto (readme)
* Arquitetura
* Boas práticas de desenvolvimento
* Design Patterns
