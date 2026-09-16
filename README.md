# 🎮 GameZone

Aplicação web desenvolvida em **React** para consulta e exploração de
jogos e ofertas digitais. O projeto apresenta um catálogo de jogos
obtidos por meio da API GamerPower, oferecendo recursos de pesquisa,
filtros, paginação, visualização de detalhes e gerenciamento de
favoritos.

> **Responsável:** Matheus Costa Caxias Faustino

## 📌 Sobre o projeto

O **GameZone** foidesenvolvido com o objetivo de criar uma
experiência simples e organizada para usuários que desejam
encontrar jogos, consultar informações sobre cada oferta e
salvar seus títulos favoritos.

A aplicação também conta com páginas complementares de **Suporte** e
**Pagamentos**, que fazem parte da proposta visual do projeto.

## 🎯 Objetivos

-   Disponibilizar um catálogo de jogos em uma interface organizada.
-   Permitir a pesquisa de jogos pelo título.
-   Facilitar a filtragem dos resultados por plataforma e tipo.
-   Apresentar informações detalhadas sobre cada jogo.
-   Permitir que o usuário salve jogos como favoritos.
-   Organizar os resultados por meio de paginação.
-   Criar uma estrutura visual com páginas de catálogo, suporte e
    pagamentos.

## 🛠️ Tecnologias utilizadas

  -----------------------------------------------------------------------
  Tecnologia                          Utilização
  ----------------------------------- -----------------------------------
  React                               Construção dos componentes e
                                      páginas da aplicação

  Vite                                Ambiente de desenvolvimento e
                                      geração do projeto

  JavaScript                          Lógica, estados, eventos, filtros e
                                      manipulação dos dados

  Axios                               Requisições para a API GamerPower

  React Router DOM                    Navegação entre as páginas

  CSS Modules                         Estilização individual de
                                      componentes e páginas

  React Icons                         Utilização de ícones na interface

  LocalStorage                        Armazenamento dos jogos favoritos
                                      no navegador

  GamerPower API                      Fonte dos dados de jogos e ofertas
  -----------------------------------------------------------------------

## ✨ Funcionalidades

### 🏠 Catálogo

A página inicial apresenta os jogos retornados pela API GamerPower.

Recursos disponíveis:

-   Listagem de jogos em cartões.
-   Pesquisa por título.
-   Filtro por plataforma.
-   Filtro por tipo de oferta, como `Game` e `DLC`.
-   Contador de jogos encontrados.
-   Paginação com até 12 jogos por página.
-   Acesso à página de detalhes.
-   Opção de favoritar um jogo.

### 🔎 Pesquisa e filtros

A pesquisa permite localizar jogos pelo título. Os filtros podem ser
combinados para restringir os resultados conforme a plataforma e o tipo
de oferta selecionados.

Quando uma pesquisa ou filtro é alterado, a paginação é reiniciada para
a primeira página.

### 🎮 Detalhes do jogo

A página de detalhes utiliza o ID do jogo presente na URL para buscar
informações específicas na API.

São apresentados:

-   Imagem do jogo.
-   Título.
-   Descrição.
-   Botão para acessar a oferta original.
-   Opção de adicionar ou remover dos favoritos.
-   Área de requisitos mínimos e informações adicionais.

### ⭐ Favoritos

Os jogos favoritos são armazenados no `LocalStorage` do navegador.

O usuário pode:

-   Adicionar um jogo aos favoritos.
-   Remover um jogo dos favoritos.
-   Consultar a página de favoritos.
-   Limpar todos os favoritos.

> Os favoritos são armazenados localmente no navegador. Eles não são
> sincronizados com uma conta ou banco de dados.

### 🆘 Suporte

A página de suporte apresenta uma estrutura visual com:

-   Tópicos de suporte.
-   Problemas de conta.
-   Downloads e instalações.
-   Pagamentos e reembolsos.
-   Problemas técnicos.
-   Perguntas frequentes.
-   Canais de contato.
-   Dicas de segurança.
-   Área para abertura de chamado.

Alguns elementos são apresentados como parte da interface visual e podem
precisar de integrações futuras para funcionar como serviços reais.

### 💳 Pagamentos

A página de pagamentos apresenta informações visuais relacionadas a:

-   Cartão de crédito.
-   PIX.
-   Boleto bancário.
-   Carteira digital.
-   Reembolsos.
-   Suporte a pagamentos.
-   Promoções e cupons.
-   Segurança.
-   Histórico de compras.

> A página representa uma proposta de interface. O projeto não
> implementa, no código analisado, um processamento real de pagamentos
> ou um fluxo completo de compras.

## 🗂️ Estrutura do projeto

``` text
src/
├── assets/
├── components/
│   ├── Cabecalho/
│   ├── Filter/
│   ├── GameCard/
│   ├── MenuBarra/
│   ├── Pagination/
│   └── SearchBar/
├── pages/
│   ├── Catalogo.jsx
│   ├── DetalhesJogo.jsx
│   ├── Favoritos.jsx
│   ├── Pagamentos.jsx
│   └── Suporte.jsx
├── utils/
│   └── favoritos.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

### Principais arquivos

-   `App.jsx`: define as rotas da aplicação.
-   `Catalogo.jsx`: carrega os jogos, aplica filtros e controla a
    paginação.
-   `DetalhesJogo.jsx`: apresenta as informações de um jogo específico.
-   `Favoritos.jsx`: exibe os jogos salvos no navegador.
-   `Suporte.jsx`: apresenta a página de suporte.
-   `Pagamentos.jsx`: apresenta a página de pagamentos.
-   `GameCard`: componente responsável pela apresentação dos jogos.
-   `Filter`: componente de filtros.
-   `SearchBar`: componente de pesquisa.
-   `Pagination`: componente de navegação entre páginas.
-   `favoritos.js`: reúne as funções de adicionar, remover, buscar e
    limpar favoritos.

## 🌐 Integração com a API

O projeto utiliza a API pública da GamerPower para buscar os dados dos
jogos.

### Endpoint para listar as ofertas

``` text
https://www.gamerpower.com/api/giveaways
```

### Endpoint para consultar os detalhes de uma oferta

``` text
https://www.gamerpower.com/api/giveaway?id=ID_DO_JOGO
```

A listagem é utilizada no catálogo. Quando o usuário acessa um jogo, o
ID informado na rota é usado para buscar seus detalhes.

Como a aplicação depende de uma API externa, mudanças na disponibilidade
do serviço ou no formato dos dados podem afetar o funcionamento do
catálogo.

## 🧭 Rotas da aplicação

  Rota            Descrição
  --------------- -------------------------------
  `/`             Página principal do catálogo
  `/favoritos`    Página de jogos favoritos
  `/jogo/:id`     Página de detalhes de um jogo
  `/suporte`      Página de suporte
  `/pagamentos`   Página de pagamentos
  `*`             Página de erro 404

## 🚀 Como executar o projeto

### Pré-requisitos

-   Node.js instalado.
-   NPM instalado.
-   Git instalado, caso o projeto seja clonado do GitHub.

### Instalação

1.  Clone o repositório:

``` bash
git clone URL_DO_REPOSITORIO
```

2.  Acesse a pasta do projeto:

``` bash
cd GameZone
```

3.  Instale as dependências:

``` bash
npm install
```

4.  Inicie o servidor de desenvolvimento:

``` bash
npm run dev
```

5.  Abra no navegador o endereço apresentado pelo Vite, normalmente:

``` text
http://localhost:5173
```

## 📦 Scripts disponíveis

  Comando             Função
  ------------------- ---------------------------------------------------
  `npm run dev`       Inicia o ambiente de desenvolvimento
  `npm run build`     Gera a versão de produção
  `npm run lint`      Verifica possíveis problemas no código com ESLint
  `npm run preview`   Executa uma prévia da versão de produção

## ⚠️ Limitações atuais

-   O catálogo depende da API GamerPower.
-   Os favoritos são armazenados apenas no navegador por meio do
    `LocalStorage`.
-   A página de pagamentos é uma interface visual e não possui
    processamento real de transações.
-   A página de suporte contém elementos visuais que podem precisar de
    integração com canais reais.
-   Os requisitos mínimos apresentados na página de detalhes não são
    preenchidos dinamicamente com dados específicos do jogo.
-   Algumas opções da interface podem ser ampliadas em versões futuras.

## 🔮 Melhorias futuras

-   Implementar tratamento visual de carregamento e erros no catálogo.
-   Melhorar a atualização dos favoritos entre páginas e abas.
-   Integrar canais reais de suporte e contato.
-   Adicionar testes automatizados para filtros, rotas e favoritos.
-   Exibir requisitos mínimos com dados reais, quando disponíveis na
    API.
-   Implementar acessibilidade com navegação por teclado, rótulos e
    textos alternativos.
-   Integrar um sistema de pagamentos real somente por meio de um
    serviço seguro e adequado ao projeto, caso essa funcionalidade seja
    necessária.

## 📚 Aprendizados obtidos

Durante o desenvolvimento do projeto, foram trabalhados conceitos
importantes de desenvolvimento front-end, como:

-   Criação e reutilização de componentes em React.
-   Uso de `useState` e `useEffect`.
-   Comunicação com APIs externas utilizando Axios.
-   Configuração de rotas com React Router DOM.
-   Aplicação de filtros e paginação.
-   Organização de estilos com CSS Modules.
-   Armazenamento de dados no `LocalStorage`.
-   Organização de pastas e separação de responsabilidades.
-   Criação de interfaces responsivas e componentes reutilizáveis.

## 👤 Responsável

**Matheus Costa Caxias Faustino**

Projeto: **GameZone**