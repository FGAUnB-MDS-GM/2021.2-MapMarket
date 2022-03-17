# Descrição da Arquitetura de Software

A arquitetura Model-View-Controller foi escolhida por ter uma organização clara e por prover uma boa manutenibilidade, já que as responsabilidades de cada camada são bem divididas.

A camada View ficará responsável por renderizar as páginas e os aspectos visuais da aplicação, nela terá o conjunto de páginas a serem renderizadas e diversos componentes mais utilizados nessas páginas.

A camada Controller irá receber requisições do usuário e pode atualizar a página imediatamente ou se necessário manipulação com dados no banco de dados, levará a requisição à camada model que ficará responsável em fazer a devida manipulação. O controller também conterá validações, quando necessário, para que o usuário não mande dados repetidos ou inválidos ao banco de dados.

A camada model é responsável por guarda a estruturas de bando de dados e por fazer a lógica de negócio, quando o usuário fazer tal requisição.
