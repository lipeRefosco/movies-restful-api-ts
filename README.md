# Avaliação Técnica da UBots

> ***Disclaimer***: Eu não consegui terminar a tempo, mas considerem a avaliar o código até o momento.

> Só tive tempo para trabalhar no projeto a noite, pois trabalho a tarde e estou estudando para uma prova de Inteligencia Artificial da faculdade, que é na segunda-feira.

## Como foi projetado

### Entidades

O início do projeto começou pela identificação das entidade. Foi mapeado 3 tipos, são elas: *movie*, *category*, *detail*.

![Entities](./docs/entities.png)

Pretendia criar uma tabela chamada "*movies_list*" com identificadores (ID's) públicos utilizando uuid e "linkando" as entidades utilizando os ids privados internos do sistema (menos das categorias) como mostra na imagem acima.

### Arquitetura (Software Architecture)

No início comecei a desenvolver em *clean architecture*, mas não foi uma escolha muito inteligente dado ao tamanho do escopo do projeto. É muito código para um simples crud. Errei, mas aprendi bastante (¯\\\_(ツ)_/¯) .

## Hacker Rank Problems
Abaixo os links com a resolução dos problemas propostos

Linkedlist Has Cycle:
https://github.com/lipeRefosco/hackerrank-solutions/blob/main/solutions/cycle_detection.py

AVL Tree:
https://github.com/lipeRefosco/hackerrank-solutions
[Sem solução no momento]


## Continuação do projeto
Vou continuar a implementação do projeto em outro repositório porque não dá para dar fork sendo o dono do repo.

http://github.com/lipeRefosco/movies-restful-api-ts

Obrigado.
