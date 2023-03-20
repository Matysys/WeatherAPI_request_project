# Aplicação básica que consome uma API de clima

Nesse projetinho há um campo da qual você digita o nome da cidade, se possível siga o padrão de `City, State, Country` para conseguir resultados precisos sem erros.

O consumo da API é feito com uso da biblioteca `axios()` para fazer a requisição HTTP.

Assim que o nome da cidade for digitado e o usuário clicar no botão do lado, a API retornará esses dados abaixo:

* Nome da cidade (novamente)
* Bandeira do país
* Temperatura
* Umidade
* Velocidade do vento

Se por alguma razão a requisição não funcionar via GitHub Pages, baixe esse projeto e execute via `localhost`, abra o arquivo `script.js` e altere a seguinte linha abaixo:

```js
const API_key = "" //Coloque sua chave API aqui;
```
Você pode obter uma chave gratuitamente fazendo um cadastro [AQUI](https://openweathermap.org/api) e depois copiando e colando no local que eu indiquei.
 
