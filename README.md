<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

Nest is [MIT licensed](LICENSE).

## Capítulo 1 Primeiros passos com Nest.js

- O que é Nest.js

Gerenciar um aplicativo em grande escala pode ser entediante, especialmente quando construído sem uma estrutura bem planejada e uma estratégia rígida de organização de código. Nest.js ajuda nisso, reforçando a modularidade, seguindo assim o Princípio da Responsabilidade Única, um princípio fundamental da engenharia de software sólida.
Nest.js é uma estrutura Node.js projetada para criar aplicativos de servidor eficientes, confiáveis e escalonáveis. Construído com base em Express e TypeScript, ele adota padrões de design Node.js e Angular para fornecer uma experiência de desenvolvimento coesa. A arquitetura do framework abrange decorators e injeção de dependência, padrões emprestados do Angular, para facilitar melhor organização e reutilização do código.

- Que problema o Nestjs resolve

O desafio de manter a consistência em uma base de código extensa pode ser árduo. O Nest.js oferece uma solução ao incorporar padrões de design de engenharia de software, como SOLID e injeção de dependência. Estes padrões promovem uma arquitetura de código limpa, sustentável e escalável, alinhada com o princípio fundamental do Nest.js de criar código facilmente testável e com baixo acoplamento.

Enquanto estruturas não opinativas, como o Express, proporcionam diversas abordagens para a estruturação do código, essa liberdade de escolha pode resultar em paralisia decisória, consumindo tempo que poderia ser melhor empregado no desenvolvimento de recursos. O Nest.js supera esse obstáculo ao oferecer uma abordagem modular pronta para uso, permitindo uma organização flexível do código enquanto mantém um layout estruturado, em consonância com o seu princípio de modularidade.

Seguir uma decisão organizacional de código inicial pode ser desafiador, especialmente com a rotatividade da equipe de desenvolvimento. A abordagem estruturada e modular do Nest.js ajuda a preservar a integridade da arquitetura ao longo do tempo, facilitando a rápida compreensão da base de código por novos desenvolvedores.

Em resumo, o Nest.js visa solucionar o desafio de criar uma arquitetura robusta para aplicativos de backend. Ao oferecer uma estrutura bem definida e integrar padrões de design consolidados, ele aborda uma preocupação frequente entre os desenvolvedores sobre como organizar a arquitetura para aplicativos corporativos ou de grande porte no servidor.

- Por que Nest.js foi criado

O fundador do Nest.js se baseou na arquitetura de design do Angular, utilizada na construção de aplicativos front-end, como inspiração para criar uma solução no lado do servidor. Essa transferência de conceitos permitiu a adoção de uma arquitetura familiar que incorpora elementos específicos do Nest.js, como módulos, injeção de dependência, provedores e decoradores personalizados. Essa abordagem estratégica reflete o princípio fundamental de modularidade e extensibilidade do Nest.js, facilitando a transição para os desenvolvedores familiarizados com o Angular.

- Por que você deve usar Nest.js

Se você está planejando desenvolver APIs no lado do servidor utilizando TypeScript, o Nest.js é a escolha ideal. Esta estrutura aproveita a tipagem forte e os decoradores, que são características fundamentais do TypeScript, alinhando-se perfeitamente com os princípios da linguagem. Além disso, o Nest.js oferece suporte integrado para injeção de dependência, promovendo uma arquitetura modular e escalável.

O Nest.js é especialmente vantajoso para desenvolvedores que já têm experiência com Angular, pois compartilha muitos paradigmas e sintaxes comuns. Essa familiaridade reduz a curva de aprendizado, facilitando a transição para o Nest.js e melhorando a reutilização e a manutenção do código.

Esta estrutura possibilita a construção de diversos tipos de serviços no backend, desde APIs RESTful e endpoints GraphQL até aplicativos no padrão MVC e WebSockets. Sua flexibilidade permite a adoção de diversos padrões de comunicação, oferecendo uma ampla gama de soluções para o backend.

Desenvolvido para criar aplicativos monolíticos e microsserviços em grande escala, o Nest.js oferece escalabilidade e uma arquitetura modular. O uso do sistema de "Módulo" para organizar o código facilita a realização de testes de unidade e a colaboração entre os membros da equipe de desenvolvimento.

O Nest.js também oferece integrações nativas com diversas ferramentas externas, como o Mongoose para MongoDB e o TypeORM para diversos bancos de dados, incluindo o Postgres, entre outros. Essa extensibilidade permite que os desenvolvedores incorporem uma variedade de funcionalidades sem escrever código repetitivo, tornando a estrutura extremamente versátil.

- Benefícios de usar Nest.js

● Aproveite a familiar sintaxe de estilo Angular para o desenvolvimento no backend, um recurso distintivo do Nest.js que promove consistência e reutilização em toda a pilha de tecnologia. Essa sintaxe permite que os desenvolvedores que já estão familiarizados com Angular façam uma transição suave para o desenvolvimento no backend.

● Tire proveito da documentação abrangente e dos exemplos fornecidos pelo Nest.js. Isso não só acelera a curva de aprendizado, mas também está alinhado com o princípio do Nest.js de ser amigável ao desenvolvedor e fácil de aprender.

● Beneficie-se do foco da estrutura em uma arquitetura sólida e no desenvolvimento ágil. O Nest.js adota o padrão de arquitetura modular, facilitando a separação de preocupações e tornando os testes mais simples, o que, por sua vez, acelera o processo de desenvolvimento.

- Que tipo de aplicativo você pode construir

● Com o Nest.js, você pode desenvolver APIs REST e GraphQL no backend, aproveitando sua arquitetura modular que promove a reutilização e manutenção do código. O suporte integrado da estrutura para essas linguagens de consulta simplifica o desenvolvimento rápido de APIs.

● Construa microsserviços utilizando o Nest.js e aproveite seu suporte nativo a diversas camadas de transporte de mensagens. Essa abordagem está alinhada com os princípios da arquitetura de microsserviços, que preconiza componentes pouco acoplados e implantáveis de forma independente.

● Desenvolva o backend para um aplicativo de streaming utilizando o Nest.js, que oferece suporte à manipulação de dados assíncronos por meio de Observables. O Nest.js facilita a manipulação de fluxos de dados em tempo real, graças à sua integração com bibliotecas como RxJS.

● Crie o backend para um aplicativo em tempo real com o Nest.js, aproveitando seu suporte WebSocket para comunicação bidirecional em tempo real. Isso é fundamental para aplicativos que exigem atualização e interação instantânea de dados, seguindo os princípios do desenvolvimento de sistemas em tempo real.

- Quem está usando Nest.js em produção

● A Roche, uma empresa multinacional de cuidados de saúde com divisões farmacêutica e diagnóstica, confia no Nest.js em seu site principal para oferecer serviços confiáveis aos pacientes e expandir seus serviços.

● A Adidas, líder europeia e segunda maior fabricante mundial de roupas esportivas, utiliza o Nest.js para construir aplicativos eficientes e escaláveis, aproveitando seu alcance global e popularidade para fornecer uma experiência de usuário superior.

● A Decathlon, varejista de artigos esportivos presente em mais de 1.500 lojas em 57 países, adotou o Nest.js como backend de seu aplicativo web para escalar e manter sua base de código legada.

- Criando um projeto Nestjs

Antes de começar a criar seu projeto Nest.js, certifique-se de ter o Node.js instalado em sua máquina.

Aqui estão as etapas para criar o projeto Nest.js:

1. Instale o CLI globalmente:

```bash
npm install -g @nestjs/cli
```

2. Crie um novo projeto usando o Nest CLI:

```bash
nest new [nome do projeto]
```

Por exemplo, se você deseja criar um projeto chamado "n-fundamentos", execute o seguinte comando:

```bash
nest new minhaApi
```

3. Inicie o projeto:
   Após a criação bem-sucedida do projeto, você pode iniciá-lo com o seguinte comando:

```bash
cd [nome do projeto]
npm run start:dev
```

Se você estiver usando o exemplo anterior, o comando será:

```bash
cd minhaApi
npm run start:dev
```

O projeto será executado em http://localhost:3000.

- Estrutura de diretórios do projeto

A estrutura de diretórios de um projeto Nest.js segue uma convenção específica:

O Nest.js designa a pasta src como o local onde você irá colocar o código-fonte da sua aplicação. Essa organização adere à arquitetura modular do Nest.js, promovendo uma melhor organização e separação de preocupações dentro da sua aplicação.

Dentro da pasta src, o arquivo main.ts serve como o ponto de entrada da sua aplicação Nest.js. Este arquivo é responsável por inicializar a aplicação, utilizando a função principal do Nest.js, NestFactory, para criar uma instância da sua aplicação Nest.

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
```

O arquivo main.ts atua como o ponto de entrada da aplicação e emprega a função principal do NestFactory para instanciar uma aplicação Nest. No Nest.js, o NestFactory é crucial para inicializar a aplicação, configurar o sistema de injeção de dependências e inicializar os módulos. Isso segue o princípio do Nest.js de desenvolvimento modular e configuração centralizada.

Além disso, alguns outros arquivos e pastas importantes incluem:

- `app.controller.ts`: Este é um arquivo de controller básico contendo uma única rota. Os controllers no Nest.js são responsáveis pelo tratamento de requisições e envio de respostas, atuando como uma interface entre o cliente e o servidor.
- `app.controller.spec.ts`: Este arquivo contém testes unitários para o controller, seguindo o foco do Nest.js no desenvolvimento orientado a testes (TDD).
- `app.module.ts`: Este é o módulo raiz da aplicação, que importa outros módulos e provedores. Os módulos do Nest.js funcionam como unidades organizacionais e seguem o Princípio da Responsabilidade Única.
- `app.service.ts`: Um arquivo de serviço básico com um único método. No Nest.js, os serviços encapsulam a lógica de negócios e podem ser injetados nos controllers, promovendo a Injeção de Dependência e a Separação de Preocupações.

Além disso, existem alguns arquivos de configuração importantes:

- `nest-cli.json`: Utilizado para configurações específicas do Nest.js, este arquivo permite a personalização das opções do compilador, ativos e outras configurações.
- `.prettierrc`: Este arquivo é usado para configurar o Prettier, auxiliando na formatação do código e na consistência de estilo dentro do projeto Nest.js.
- `tsconfig.json`: Este arquivo de configuração é para o TypeScript e determina como o compilador TypeScript se comportará. Isso está alinhado com o uso do TypeScript pelo Nest.js para tipagem forte e melhor qualidade de código.

## Capítulo 2 Criando uma api REST

Oque sao module em nest?

Um módulo no Nest.js serve como a base fundamental de um aplicativo, seguindo o princípio de modularidade da estrutura para uma organização mais eficiente do código. Cada módulo encapsula provedores, controladores, importações e exportações, constituindo uma unidade coesa de funcionalidades relacionadas.

- **Provedores**: No Nest.js, os provedores são classes que desempenham funções de serviço, fábrica ou repositório. Eles encapsulam a lógica de negócios e podem ser injetados em controladores ou outros serviços.

- **Controladores**: Os controladores têm a responsabilidade de lidar com as solicitações HTTP recebidas e enviar respostas de volta ao cliente, seguindo o padrão de controlador adotado pelo Nest.js para o tratamento de solicitações.

- **Imports**: Esta matriz especifica os módulos externos necessários para o módulo atual, promovendo a reutilização de código e a separação de interesses.

- **Exportações**: São utilizadas para disponibilizar serviços para outros módulos, refletindo o foco do Nest.js em encapsulamento e design modular.

O seu aplicativo Nest.js geralmente conterá um módulo raiz, específico da estrutura Nest.js. Este módulo serve como ponto de entrada e é responsável por instanciar controladores, provedores e outros elementos essenciais do aplicativo. No Nest.js, essa arquitetura segue o princípio de "Isolamento de Módulo", garantindo que a aplicação seja organizada em módulos funcionais ou baseados em recursos distintos.

```typescript
@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

Para ilustrar, vamos considerar a construção do backend para um aplicativo semelhante ao Spotify. Podemos dividir nosso aplicativo em módulos de acordo com as funcionalidades e recursos específicos.

- Modulo da Aplicação

1. Artist Module
2. Songs Module
3. Auth Module

Para organizar os casos de uso do seu aplicativo de forma modular, divida-os em módulos de recursos, como Módulo de Artistas, Módulo de Músicas e Módulo de Autenticação. No Nest.js, os módulos são unidades organizacionais fundamentais que seguem o princípio da modularização, permitindo uma melhor reutilização do código e uma separação mais clara de interesses. Esta abordagem agiliza o desenvolvimento, pois os módulos encapsulam funcionalidades relacionadas e podem ser desenvolvidos ou mantidos de forma independente.

Cada módulo terá seus próprios provedores, serviços e controladores. Agora é hora de criar um módulo. Por exemplo, para criar um módulo de músicas usando o Nest CLI, você pode executar o seguinte comando:

```bash
nest generate module songs
```

Isso criará um módulo de músicas em seu aplicativo e adicionará a entrada SongsModule no AppModule automaticamente, permitindo que você comece a desenvolver as funcionalidades relacionadas a músicas de forma organizada e modular.

- Oque é um Controller

Os controladores no Nest.js desempenham um papel fundamental no gerenciamento das solicitações recebidas e no envio de respostas de volta ao cliente. Eles representam a camada de controle no padrão MVC (Model-View-Controller) que o Nest.js utiliza para arquitetura de aplicativos.

No contexto da construção do backend de um aplicativo semelhante ao Spotify, imagine que você deseje buscar todas as músicas do artista Lairton e seus teclados. A responsabilidade de lidar com esse tipo de solicitação recai principalmente nos controladores, específicos para esse caso de uso - o SongsController.

Quando o navegador inicia uma solicitação para buscar todas as músicas, seu aplicativo Nest.js irá processá-la por meio do SongsController e seu método findAll, que foi projetado especificamente para interagir com os serviços subjacentes, recuperar os dados e enviá-los de volta ao cliente.

Você pode criar esses endpoints no seu aplicativo. Por exemplo:

- `GET http://localhost:3000/songs`
- `GET http://localhost:3000/songs/1`
- `POST http://localhost:3000/songs`
- `PUT http://localhost:3000/songs/1`
- `DELETE http://localhost:3000/songs/1`

Criar um controlador é bastante simples com o Nest CLI. Por exemplo, para criar um SongsController, você pode executar o seguinte comando:

```bash
nest generate controller songs
```

Isso criará o SongsController dentro do diretório de músicas e o Nest.js também adicionará a entrada para o SongsController no SongsModule. Em seguida, você pode definir os métodos do controlador para lidar com os diferentes endpoints, como mostrado no exemplo abaixo:

```typescript
@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'create a new song endpoint';
  }

  @Get()
  findAll() {
    return 'find all songs endpoint';
  }

  @Get(':id')
  findOne() {
    return 'find song based on id';
  }

  @Put(':id')
  update() {
    return 'update song based on id';
  }

  @Delete(':id')
  remove() {
    return 'delete a song based on id';
  }
}
```

Neste exemplo, estamos retornando mensagens simples para indicar que as rotas foram criadas. No Nest.js, você pode especificar parâmetros dinâmicos em suas rotas usando dois pontos seguidos do nome do parâmetro, como `@Get(':id')`. Isso segue o princípio do Nest.js de utilizar decoradores para lidar com tarefas HTTP comuns, simplificando a base de código e tornando-a mais legível.

- Oque é um service

Os service no Nest.js são provedores, o que significa que você pode injetá-los em módulos e classes por meio de injeção de dependência. No Nest.js, um serviço não é apenas uma construção, mas um cidadão de primeira classe, gerenciado pelo contêiner de Inversão de Controle (IoC) integrado à estrutura. Ao contrário do Express.js, onde middleware ou funções JavaScript simples frequentemente servem ao mesmo propósito, mas sem gerenciamento formal de dependências, os service Nest.js oferecem uma maneira estruturada de escrever lógica de negócios, tornando o aplicativo mais fácil de manter e testável.

Um serviço em Nest.js é responsável por buscar dados do banco de dados e salvá-los de volta no banco de dados, funcionando como uma ligação entre o controlador e o banco de dados. Este conceito está alinhado com a adesão do Nest.js ao Princípio de Responsabilidade Única, separando a lógica de negócios da camada do controlador, um forte contraste com o Express.js, onde as funções são frequentemente delineadas de forma menos clara.

Um serviço pode ser injetado em um controlador usando o sistema integrado de injeção de dependência do Nest.js. Você também pode exportar o serviço do módulo atual, possibilitando seu uso em outras partes desse módulo específico. Esta é mais uma característica onde o Nest.js se diferencia de frameworks como o Express.js, oferecendo suporte nativo para modularidade e reutilização de código através de seu sistema de exportação.

Nesta lição, vamos nos concentrar na criação do serviço de músicas, um componente específico feito sob medida para gerenciar dados relacionados a músicas. Criar serviços especializados para diferentes aspectos do seu aplicativo promove melhor capacidade de manutenção e é a base da arquitetura modular do Nest.js.

- Criando um service

Para completar a implementação do serviço de músicas, vamos detalhar mais a configuração e funcionalidades.

Primeiro, é necessário definir o serviço de músicas (`SongsService`). Podemos fazer isso usando o Nest CLI:

```bash
nest generate service songs
```

Este comando criará o `SongsService` dentro da pasta de músicas e registrará automaticamente o `SongsService` no `SongsModule` como um provedor, permitindo que ele seja injetado em outros componentes.

```typescript
@Injectable()
export class SongsService {
  private readonly songs: Song[] = [];

  create(song: Song): Song[] {
    this.songs.push(song);
    return this.songs;
  }

  findAll(): Song[] {
    return this.songs;
  }
}
```

Agora, vamos revisar a funcionalidade do service de músicas:

- **create**: Este método permite adicionar novas músicas ao array de músicas. Ele segue a filosofia de design do Nest.js de estruturar o código em torno de módulos e serviços bem definidos, proporcionando uma abordagem mais estruturada e declarativa em comparação com o Express.js.

- **findAll**: Este método retorna todas as músicas do array. No Nest.js, este é um caso de uso comum para um manipulador de solicitação GET dentro de um controlador e é mais declarativo em comparação com o tratamento de rotas no Express.js, que geralmente requer middleware para tal funcionalidade.

Com o `SongsService` configurado, podemos injetá-lo em outros componentes, como o `SongsController`, para fornecer funcionalidades de busca e criação de músicas. Essa abordagem promove a modularidade e a reutilização de código, fundamentais para a arquitetura do Nest.js.

- Injetando o Service no Controller

Para utilizar o `SongsService` dentro do `SongsController`, primeiro, vamos injetá-lo no construtor do controlador. No Nest.js, isso demonstra o sistema de Injeção de Dependência (DI), um princípio fundamental da estrutura para desacoplar componentes. Isso promove uma abordagem mais estruturada e modular, alinhada aos princípios SOLID, em comparação com o Express.js, onde as funções de middleware e gerenciamento de rotas geralmente se misturam à lógica de negócios.

```typescript
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post()
  create() {
    return this.songsService.create(
      'Morango do nordeste de Lairton e seus teclados',
    );
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }
}
```

Chamamos o método `create` do `SongService` no endpoint de criação de músicas (`POST`) e o método `findAll` no endpoint de busca de todas as músicas (`GET`).

- Testando a rota GET songs

Para testar a rota `GET /songs`, execute o aplicativo e envie uma solicitação para `http://localhost:3000/songs`. Se nenhum item estiver presente no array `songs`, espere uma resposta vazia `[]` com um código de status `200`. Ao contrário do Express.js, onde você definiria manualmente o código e o corpo da resposta, o Nest.js aproveita decoradores e injeção de dependência para agilizar o gerenciamento de respostas da API.

- Testando a rota POST songs

Quando você envia a solicitação `POST http://localhost:3000/songs` do seu cliente REST, isso criará uma nova música no array de músicas gerenciado pelo `SongsService`.

Após criar a música, ao enviar a solicitação `GET http://localhost:3000/songs` novamente, você receberá o array atualizado de músicas como resposta. Isso demonstra a funcionalidade completa do endpoint de criação de músicas e como o sistema de serviço gerencia os dados para fornecer uma resposta atualizada ao solicitar todas as músicas.
