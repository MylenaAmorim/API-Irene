# API-Irene

## Objetivo
#### Possibilitar as pessoas encontrarem e cadastrarem ONG’s, para que as pessoas que querem ajudar pessoas ou animais fazendo doações ou sendo voluntário e não saibem onde encontrar esses locais, possam encontrar ONG’s de maneira rápida e simples.


## Rotas

#### GET ongs
Rota que retorna uma lista com todas as ONG’s e seus dados.

#### GET ongs/:id
Rota que retorna os dados de uma ONG, baseado no id.

#### GET ongs/ongsPorTipoDoacoes/:id
Rota que retorna as ONG’s, baseadas no id do tipo de doação passada no parâmetro.

#### POST ongs
Rota que recebe uma nova ONG, adiciona ela à lista e retorna os dados do mesmo.

#### PATCH ongs/:id
Rota que atualiza os dados de uma ONG e retorna seus dados atualizados.

#### DELETE ongs/:id
Rota que deleta uma ONG baseada em seu id.

#### GET tiposDoacoesRecebidas
Rota que retorna uma lista com todos os tipos de doações que as ONG 's podem receber e os seus dados.

#### GET tiposDoacoesRecebidas/:id
Rota que retorna os dados de um tipo de doação, baseado no id.

#### POST tiposDoacoesRecebidas
Rota que recebe um novo tipo de doação, adiciona ele a lista e retorna os dados do mesmo.

#### PATCH tiposDoacoesRecebidas/:id
Rota que atualiza os dados de um tipo de doação recebida e retorna seus dados atualizados.

#### DELETE tiposDoacoesRecebidas/:id
Rota que deleta um tipo de doação recebida baseado em seu id.


## Desafios
#### Gostaria de implementar a função de cadastro e pesquisa de pontos de doações. E também, a opção de buscar ONG’s e pontos de doações baseado no filtro de pesquisa e também retornar a localização do ponto de doação ou ONG no Google Maps utilizando a API do Google.
