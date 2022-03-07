
<span style="color:red">Todo esse conteúdo deveria estar no site do projeto.</span>
<span style="color:red">onde está o vídeo de apresentação da Unidade 2?</span>

# 1. VISÃO GERAL DO PRODUTO
## 1.1 Declaração do Problema
Usuários de serviços de entrega de supermercados têm dificuldade em escolher produtos como frutas e legumes, além da comunicação ineficiente caso não haja um produto em estoque

## 1.2 Declaração de Posição do Produto

|Para | Solucionar a dificuldade de comunicação entre mercado e cliente e dar maior autonomia às escolhas |
|Quem | Utiliza serviços de entrega |
|O (nome do produto) | MapMarket |
|Que | É capaz possibilitar a criação de listas de compras recorrentes, facilitar a comunicação entre cliente e mercado, e possibilitar escolher o estado de produtos como frutas e verduras |
|Ao contrário | Supermercado Now, Rappi |
|Nosso produto | Possibilita a criação de uma lista de compras recorrentes, é capaz de agendar uma compra,               |
disponibiliza um chat para a comunicação entre cliente e mercado, contém sistema de pontuação e descontos |

## 1.3 Objetivos do Produto
1. Facilitar a integração mercado-cliente no ato da compra.
2. Garantir a satisfação do cliente ao comprar produtos hortifruti.
3. Fidelizar o cliente ao mercado, por meio de programas de pontos e descontos.

##1.4 Escopo do produto
###1.4.1 Requisitos Funcionais

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

##1.4.2 Requisitos não Funcionais

| Nº   |Requisitos não Funcionais (Classificação)|Requisitos Não Funcionais|
|------|-----------------------------------------|-------------------------|
| RNF1 |Requisitos de portabilidade|Aplicação deve ser web responsiva|
| RNF2 |Requisitos de portabilidade|Aplicação deve ser suportada em: Chrome, Safari e Firefox|
| RNF3 |Requisitos legais|Aplicação deve seguir em conformidade com a LGPD (Consentimento do cidadão, Finalidade e necessidade)|
| RNF4 |Requisitos de facilidade de uso|A interação com o usuário deverá ser feita por meio de interface gráfica|
| RNF5 |Requisitos da organização|O backend será em Node.JS e o fronted será em React|
| RNF6 |Requisitos da organização|Aplicação deve possuir um conjunto de dados, produtos e mercados, pré-cadastrados|

---
## 1.5 Mínimo Produto Viável (MVP)
# #ADICIONAR LINK CANVAS MVP

<span style="color:red">onde está o LINK CANVAS MVP?</span>

###1.5.1 Requisitos Funcionais

	• RF1: Deve ser possível realizar gestão de cliente
    • RF2: Deve ser possível realizar gestão de mercados
    • RF3: Deve ser possível realizar validação de acesso dos usuários
    • RF4: Deve ser possível realizar gestão de lista de compras
    • RF7: Deve ser possível realizar consulta de produtos
    • RF10: Aplicação terá um sistema de chat online para comunicação cliente-mercado

###1.5.2 Requisitos não Funcionais

    • RNF1: Aplicação deve ser web responsiva
    • RNF2: Aplicação deve ser suportada em: Chrome, Safari e Firefox
    • RNF4: A interação com o usuário deverá ser feita por meio de interface gráfica
    • RNF5: O backend será em Node.JS e o fronted será em React
    • RNF6: Aplicação deve possuir um conjunto de dados pré-cadastrados


# 2. ABORDAGEM DE DESENVOLVIMENTO DE SOFTWARE
## 2.1 Metodologia
Utilizaremos o Método de Scrum Master para a organização e atualização do projeto.

## 2.2 Processo

| Atividade                                 | Objetivo                                                                                                                                                                        | Papel                                     |
|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| Estabelecer os prazos de cada sprint      | Escolher os prazos de cada sprint para o desenvolvimento de requisitos                                                                                                          | Scrum Master e Project Owner              |
| Realizar escopo do produto                | Escolhas de todas as características do produto                                                                                                                                 | Product Owner e Equipe de Desenvolvimento |
| Realizar prototipagem                     | Fazer o protótipo das páginas que será seguido para o desenvolvimento do software                                                                                               | Desenvolvedor                             |
| Realizar estudo das Tecnologias           | Estudar as tecnologias utilizadas para o desenvolvimento de software                                                                                                            | Desenvolvedor                             |
| Realizar o desenvolvimento dos requisitos | Desenvolver os requisitos do produto                                                                                                                                            | Desenvolvedor                             |
| Realizar versionamento                    | Criar versões do projeto para o Product Owner e o Scrum Master, poderem ter uma visão mais próxima do desenvolvimento do produto, além de ter uma versão beta para poder testar | Desenvolvedor                             |
| Realizar Refatoração                      | Melhorar o entendimento e qualidade do código do produto de software                                                                                                            | Desenvolvedor                             |
| Realizar Revisão                          | Revisar o código do produto de software                                                                                                                                         | Desenvolvedor                             |

## 2.3 Procedimentos

| Atividade                                 | Método                                                                                                                               | Ferramenta                           |
|-------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| Estabelecer os prazos de cada sprint      | planning poker                                                                                                                       | Planilha excel                       |
| Realizar escopo do produto                | Lean inception                                                                                                                       | Mural                                |
| Realizar prototipagem                     | Criação das estruturas e design de cada página assim como a relações entre elas                                                      | Figma                                |
| Realizar estudo das Tecnologias           | Estudar e aprimorar as habilidades dos desenvolvedores por meio de cursos e material disponível como livros e documentação           | Udemy, YouTube, Documentos           |
| Realizar o desenvolvimento dos requisitos | Desenvolver os requisitos estabelecidos em cada sprint                                                                               | Vs Code, Node.js, Reactive e MongoDB |
| Realizar versionamento                    | Separar o progresso de desenvolvimento do produto de software                                                                        | GitHub                               |
| Realizar Refatoração                      | Melhorar o entendimento e qualidade do código do produto de software                                                                 | Desenvolvedor                        |
| Realizar Revisão                          | Analisar como o código foi escrito e reescrevê-lo com o objetivo de tornar sua leitura mais fácil, renomeando variáveis, funções etc | GitHub/VsCode                        |

# 3 VISÃO GERAL DO PROJETO
## 3.1 Organização do Projeto

| Papel                 |Atribuições|Responsável|Participantes|
|-----------------------|-----------|-----------|-------------|
| Desenvolvedor         |Codificar o produto, realizar refatoração, realizar teste dos códigos|Pedro|Pablo, Samuel|
| Dono do Produto       |Atualizar o escopo do produto, organizar o escopo das sprints, validar as entregas|Samuel|Pablo, Pedro|
| Analista de Qualidade |Garantir a qualidade do produto, garantir o cumprimento do conceito de pronto, realizar inspeções de código|Pablo|Pedro, Samuel|
| Scrum master          |Gerenciar a equipe de desenvolvimento, organizar reuniões entre a equipe de desenvolvimento e o dono do produto, garante que a estrutura do projeto seja seguido|Pedro|Pablo, Samuel|

## 3.2 Planejamento das Fases e/ou Iterações do Projeto
|Sprint|Produto (Entrega)|Data Início|Data Fim|
|------|-----------------|-----------|--------|
|Sprint 1|Definição do Produto|18/01/22|03/02/22|
|Sprint 2|MVP e Planejamento do Projeto|08/02/22|24/02/22|
|Sprint 3|Cadastro de cliente, cadastro de mercado, editar informações de cliente e mercado|01/03/22|17/03/22|


## 3.3 Matriz de Comunicação

| Descrição                                                                  | Área/Envolvidos      | Periodicidade | Produtos Gerados      |
|----------------------------------------------------------------------------|----------------------|---------------|-----------------------|
| Reunião semanais para alinhamento da equipe e acompanhamento de atividades | 	Equipe do Projeto   | 	Semanal      | 	Relatórios da sprint |
 | Apresentação do progresso da equipe                                        | 	Equipe  e Professor | 	Mensal       | 	Ao fim de cada Módulo |


## 3.4 Gerenciamento de Riscos 
| Risco                  | 	Ação para mitigar                                                                                          |
|------------------------|-------------------------------------------------------------------------------------------------------------|
| Horários incompatíveis | 	Organizar agendas semanais em grupo para combater a perda de reuniões por incompatibilidade de horários |
| Não cumprir o MVP      | 	Revisar entregas semanais dos requisitos a fim de cumprir o MVP|




# 4 LIÇÕES APRENDIDAS
## 4.1 Unidade 1
- Entendimento das diversas abordagens para se desenvolver um software ou produto.
- Swebok - Entendimento das disciplinas de desenvolvimento de software.
- SAFe

<span style="color:red">Lições aprendidas da Unidade 2?</span>
<span style="color:red">Kanban? dei uma olhada no ZenHub e está bastante desatualizado.</span>

# 5 REFERÊNCIAS BIBLIOGRÁFICAS
_Swebok v3.0, IEE, GUIDE TO THE SOFTWARE ENGINEERING BODY OF KNOWLEDGE
Sommerville, Ian Engenharia de software/ Ian Sommerville; tradução Luiz
Cláudio Queiroz; revisão técnica Fábio Levy Siqueira. -- 10. ed. -- São Paulo:
Pearson Education do Brasil, 2018_

### Participantes
Pedro Menezes Rodiguero - 190139323
Samuel Alves Sato - 200069322
Pablo Christianno Silva Guedes - 200042416
