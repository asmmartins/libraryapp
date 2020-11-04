### UI

#### Introdução

A interface gráfica com o usuário será implementada usando o framework [Angular](https://angular.io/docs).

O applicativo pode ser acesso pelo seguinte endereço: https://thankful-island-0c8d04f10.azurestaticapps.net

O código fonte está no Github: https://github.com/asmmartins/libraryapp

#### Arquitetura

A inteface é modularizada de acordo com os casos de uso.

A ideia de dividir os sistemas em módulos percorre por todas as soluções (front-end ou back-end).

#### Setup

Instalar as seguintes ferramentas:
* [Git](https://git-scm.com/download/win)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Node JS](https://nodejs.org/en/)

* O projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 10.0.3.

* Acessar o diretório raiz da ui e executar:
```
npm install
```

* Executar testes:
```
npm test
```

* Após instaladas dependências do node, o comando abaixo irá compiliar e executar a interface. Navegue até `http://localhost:4200/`. A aplicação irá automaticamente realizar reload caso algum arquivo seja modificado.
```
npm start
```

Outras opções de comandos:

* Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.
* Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist /`. Use o sinalizador `--prod` para uma construção de produção.
* Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).
* Execute `ng e2e` para executar end-to-end testes via [Protractor](http://www.protractortest.org/).