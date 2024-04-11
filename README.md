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
