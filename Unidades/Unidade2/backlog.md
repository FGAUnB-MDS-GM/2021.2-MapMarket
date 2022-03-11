# Requisitos Funcionais

| Nº   | Requisito                                                                                                       | Prioridade |
|------|-----------------------------------------------------------------------------------------------------------------|------------|
| RF1  | Deve ser possível realizar gestão de cliente                                                                    | ALTA       |
| RF2  | Deve ser possível realizar gestão de mercados                                                                   | ALTA       |
| RF3  | Deve ser possível realizar validação de acesso dos usuários                                                     | ALTA       |
| RF4  | Deve ser possível realizar gestão de lista de compras                                                           | ALTA       |
| RF5  | Deve ser possível realizar gestão de lista de compras recorrentes                                               | MÉDIA      |
| RF6  | Deve ser possível realizar agendamento de compras                                                               | BAIXA      |
| RF7  | Deve ser possível realizar consulta de produtos (adicionar filtros”funcionalidades”); #resultados são os mesmos | ALTA       |
| RF8  | Deve ser possível adicionar comentários aos produtos (ex: escolher data de validade, melancia gigante)          | BAIXA      |
| RF9  | Aplicação terá um sistema de pontuação e descontos;                                                             | MÉDIA      |
 | RF10 | Aplicação terá um sistema de chat online para comunicação cliente-mercado                                       | ALTA       |

#### Obs:
Prioridade ALTA diz respeito a histórias com maior grau de importância, maior valor de mercado, para o projeto e devem ser implementadas primeiro. Prioridade MÉDIA é relacionada a histórias que apresentam bom valor de mercado, mas não fazem parte do MVP. Prioridade BAIXA apresentam menor grau de importância para o projeto.
## Requisitos Não Funcionais

| Nº   |Requisitos não Funcionais (Classificação)|Requisitos Não Funcionais|
|------|-----------------------------------------|-------------------------|
| RNF1 |Requisitos de portabilidade|Aplicação deve ser web responsiva|
| RNF2 |Requisitos de portabilidade|Aplicação deve ser suportada em: Chrome, Safari e Firefox|
| RNF3 |Requisitos legais|Aplicação deve seguir em conformidade com a LGPD (Consentimento do cidadão, Finalidade e necessidade)|
| RNF4 |Requisitos de facilidade de uso|A interação com o usuário deverá ser feita por meio de interface gráfica|
| RNF5 |Requisitos da organização|O backend será em Node.JS e o fronted será em React|
| RNF6 |Requisitos da organização|Aplicação deve possuir um conjunto de dados, produtos e mercados, pré-cadastrados|

---

## MVP
### Requisitos Funcionais
- RF1: Deve ser possível realizar gestão de cliente
- RF2: Deve ser possível realizar gestão de mercados
- RF3: Deve ser possível realizar validação de acesso dos usuários
- RF4: Deve ser possível realizar gestão de lista de compras
- RF7: Deve ser possível realizar consulta de produtos
- RF10: Aplicação terá um sistema de chat online para comunicação cliente-mercado

### Requisitos não Funcionais
- RNF1: Aplicação deve ser web responsiva
- RNF2: Aplicação deve ser suportada em: Chrome, Safari e Firefox
- RNF4: A interação com o usuário deverá ser feita por meio de interface gráfica
- RNF5: O backend será em Node.JS e o fronted será em React
- RNF6: Aplicação deve possuir um conjunto de dados pré-cadastrados


## Backlog

| Feature | ID  | História | Prioridade |
|---------|-----|----------|------------|
| Gestão de Usuários| R1  | Eu, como usuário, desejo me cadastrar como cliente na plataforma | ALTA |
| Gestão de Clientes | R2  |Eu, como cliente, desejo editar minhas informações na plataforma| ALTA|
|Gestão de Usuário| R3  |Eu, como usuário, desejo me cadastrar como mercado na plataforma|ALTA|
|Gestão de Mercado| R4  |Eu, como mercado, desejo editar minhas informações na plataforma|ALTA|
|Gestão de Mercado| R5  |Eu, como mercado, desejo me cadastrar produto na plataforma|ALTA|
|Gestão de Mercado| R6  |Eu, como mercado, desejo editar informações de produto na plataforma|ALTA|
|Gestão de Usuário| R7  |Eu, como usuário, desejo realizar login na plataforma|ALTA|
|Gestão de Usuários| R8  |Eu, como usuário, desejo realizar logout na plataforma|ALTA|
|Gestão Compras| R9  |Eu, como cliente, desejo criar lista de compras|ALTA|
|Gestão Compras| R10 |Eu, como cliente, desejo criar lista de compras recorrentes|ALTA|
|Gestão Compras| R11 |Eu, como cliente, desejo editar lista de compras recorrentes|MÉDIA|
|Gestão Compras| R12 |Eu, como cliente, desejo deletar lista de compras recorrentes|MÉDIA|
|Gestão Compras| R13 |Eu, como cliente, desejo realizar compra de uma lista de compras|ALTA|
|Gestão Compras| R14 |Eu, como cliente, desejo agendar compra de uma lista de compras|BAIXA|
|Buscas| R15 |Eu, como cliente, desejo realizar busca por produtos especificando os parâmetros|ALTA|
|Gestão Compras| R16 |Eu, como cliente, desejo adicionar comentário a um produto da lista de compras|BAIXA|
|Gestão Compras| R17 |Eu, como cliente, desejo excluir comentário a um produto da lista de compras|BAIXA|
|Gestão Usuário| R18 |Eu, como cliente, desejo receber pontos por compras realizadas|MÉDIA|
|Gestão Usuário| R19 |Eu, como cliente, desejo trocar pontos por compras realizadas por descontos.|MÉDIA|
|Gestão Usuário| R20 |Eu, como cliente, desejo me comunicar com mercado por chat online|ALTA|
|Gestão Mercado| R21 |Eu, como mercado, desejo me comunicar com cliente por chat online|ALTA|






