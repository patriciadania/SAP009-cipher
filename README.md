# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Considerações gerais](#3-considerações-gerais)
* [4. Considerações técnicas](#6-considerações-técnicas)


***

## 1. Prefácio

Primeiro projeto feito com a Laboratória, cujo objetivo seria o usuário usar essas ferramentar para criptofragar e descriptografar uma mensagem.

Cifrar significa codificar. A [cifra de César]
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.



## 2. Resumo do projeto

Foi criado essa aplicação quando o usuário indicar qual deslocamento usar para criptografar e descriptografar uma mensagem. Foi feito usando HTML, CSS e JavaScript.
Foi escolhido um tema simples, aonde o usuário poderá criar senhas seguras e enviar mensagens secretas para outras pessoas.



## 3. Considerações gerais

A criação teve o objetivo de forncer ao usuário uma experiência segura e prática. Ela permite a ele escolher um offset que indica qual posição de deslocar os caracteres para que a cifra use, colocar uma mensagem para ser cifrada ou decifrada, visualizar os seus resultados e poder apagar o que foi feito.


## 4. Considerações técnicas

A lógica do projeto foi implementada inteiramente em JavaScript. Nesse
projeto não foi usado bibliotecas ou frameworks, só vanilla
JavaScript.

Para iniciar este projeto foi feito um _fork_ e _clone_ de um
repositório, que contém um _boilerplate_ com testes. Um _boilerplate_ é a
estrutura básica de um projeto que serve como ponto de partida com arquivos
iniciais e configuração básica de dependências e testes.

Os testes unitários  cobriram 100% dos _statements_, _functions_
e _lines_, e  _branches_. O _boilerplate_ já contem o setup
e configurações necessárias para executar os testes assim como _code coverage_
para ver o nível de cobertura dos testes usando o comando `npm test`.


