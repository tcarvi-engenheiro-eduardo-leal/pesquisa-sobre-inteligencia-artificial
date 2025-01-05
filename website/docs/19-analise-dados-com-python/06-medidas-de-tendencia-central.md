## Medidas de Tendência Central
- As medidas de tendência central são usadas para resumir os dados em torno de um ponto central, representando uma “média” ou um “valor típico” que pode ser usado para descrever os dados em termos mais simples. 
- Tais medidas são partes fundamentais da análise de dados em estatística descritiva.
- Exemplo:
    - Média aritmética
    - Média geométrica
    - Mediana
    - Moda

### Média
- A soma de todos os valores dos dados dividida pelo número total de valores.
- É uma medida útil para resumir dados simétricos em torno de uma média comum.
- A média é muito sensível a valores extremos, então pode não ser a melhor medida de tendência central para conjuntos de dados com outliers.
- Tipos:
    - Média aritmética simples
    - Média aritmética ponderada
    - Média geométrica

#### Renda Média sem agrupamento, considerando o n como todos os dados de renda
- dados.Renda.mean()

#### Renda Média por agrupamento de sexo
- Considera a média de valores quantitativos de uma serie
   - dados[Renda].mean()
- Ou considera a média de valores quantitativos de uma serie considerando antes um agrupamento de dados nominais
    - dados.groupby(['Sexo'])[Renda].mean()

### Média Geométrica
- Raiz elevado a n da multiplicação entre si dos elementos de um conjunto. Sendo n o número de elementos que são multiplicados entre si.
- Ex: qual a média geométrica entre 3 e 27? Raize quadrado de ( 3 x 27 ).

### Mediana 
- É o valor que divide o conjunto de dados em duas partes iguais, sendo que metade dos valores estão acima dela e metade estão abaixo.
- A mediana é útil para resumir conjuntos de dados que não são simétricos e podem conter valores extremos.
- Se estivermos trabalhando com o conjunto de dados de salários de uma empresa, a mediana pode ser uma medida mais representativa do salário típico do que a média, pois a presença de um pequeno número de funcionários com salários muito altos poderia distorcer a média para cima.
- Para calcular a mediana, primeiro é necessário ordenar os dados em ordem crescente ou decrescente. Em seguida, encontre o valor que está no meio da lista.
  - Se houver um número impar de valores, existe um valor no meio do conjunto. A posição deste elemento pode ser econtrado com o cálculo de posição = (n + 1) / 2 
  - Se houver um número par de valores, a mediana é a média dos dois valores do meio. Posição 1 = n/2 e posiçã2 = n/2 + 1 
- Encontra o valor intermediário de uma série de valores quantitativos
- Valores quantitativos são ordenados antes da localização
    - dados.Renda.median()
    - dados.Renda.quantile()
    - dados.Renda.quantile([0.5])

#### Moda
- Indica valor que mais se repete em uma serie 
- Se os valores encontrados se repetem na mesma quantidade, cada valor é uma moda.
- A moda pode ser útil para resumir conjuntos de dados com valores discretos, como o número de filhos em uma família.
- Por exemplo, se analisarmos os dados de uma pesquisa sobre a quantidade de filhos por família em uma cidade, podemos determinar que a moda é 2, indicando que a maioria das famílias tem dois filhos.
- Uma amostra pode ser amodal, quando não possui moda, bimodal, quando possuir dois valores modais e multimodal quando possui mais do que dois valores modais.
- dados.Idade.mode()
#### Relação entre Média, Mediana e Moda
- Assimetria à Direita
    - `Moda < Mediana < Média`
- Simétrica
    - `Moda = Mediana = Média`
- Assimetria à Esquerda
    - `Média < Mediana < Moda` 

