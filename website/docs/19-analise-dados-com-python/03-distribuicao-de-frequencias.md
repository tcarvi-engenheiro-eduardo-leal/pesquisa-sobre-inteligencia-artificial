# Distribuição de Frequências
- Arranjo de valores em que uma ou mais variáveis ​​tomam, em forma percentual, em uma amostra.
- Cada entrada considerada, além de seu valor, contém também a frequência ou a contagem das suas ocorrências, dentro do grupo ou intervalo considerado.
- A tabela "Distribuição de Frequências" resume a distribuição percentual dos valores da amostra.
- O agrupamento de dados na tabela "Distribuição de Frequências" é dividida em classes mutuamente exclusivas e indica o número de ocorrências de cada classe agrupada.
- Pode se apresentar de forma tabular como:
    - Tabela de Distribuição de Frequências
- Ou pode se apresentar graficamente como:
    - Histograma
    - Gráfico de linha
    - Gráfico de barras verticais (padrão)
    - Gráfico de barras horizontais
    - Gráfico de setores
    - Gráfico de área
    - Gráfico de box-plot
        - Todos estes gráficos devem ser configurados para mostrar em um dos eixos os valores percentuais ou a contagem de repetições dos dados.
        - O box-plot possui o diferencial de mostrar também medidas de tendência central como médias e medianas e os valores extremos ou mesmo os outliers.
        - Deve-se olhar para o box-plot e perceber a relação entre os valores de tendência central e os valores de extremidade com a forma volumétrica do gráfico de frequências.
- As distribuições de frequência são usadas tanto para dados qualitativos quanto para dados quantitativos.
- Pode ser necessário segmentar os dados quantitativos em classes se eles apresentarem grande diversidade de valores, o que faria que não existisse variação considerável nas frequências e dificultaria a leitura dos dados.

## Análise Gráfica da Distribuição de Frequências
### Assimetria nas Frequências
- A distribuição de frequência é considerada enviesada quando a sua média e sua mediana possuem valores demasiadamente diferentes. Ou seja, o gráfico não apresenta suficiente simetria e deve ter elementos com valores de frequência excessivos em um dos lados do gráfico. Vale a pena plotar o gráfico e tentar entender o motivo da assimetria na distribuição de frequências. 
- A distruição de frequências pode ser considerada assimétrica à direita ou à esquerda do gráfico. 
- A simetria de um gráfico de distribuição de frequência indica um dos indicadores da análise gráfica. A relevência deste indicador depende das características do dado analisado.  

### Curtose
- A `curtose` de uma distribuição de frequência é a concentração dos escores percentuais na média aritmética simples dos dados. Neste caso, a  média e a mediana do gráfico devem ter valores aproximados. 
- O gráfico de uma curtose apresenta pico de distribuição no centro do gráfico, podendo ser mais ou menos achatada em relação a uma curva normal dos dados.  
- Deve-se buscar entender o motivo da concentracão de dados, na posição da mediana. 
- Os indicadores `variância` e `desvio-padrão` podem ser usados para descrever o nível de achatamento do gráfico da `curtose`.

## Uso do Pandas para entender a distruição de frequências

### Contagem de valores diferentes
- `dados.Sexo.value_counts()`

### Contagem percentual de valores diferentes, com percentuais de 0 até 1:
- Análise com pandas
    - `frequencia = dados.Sexo.value_counts(normalize=True)`

### Contagem percentual de valores diferentes, com percentuais de 0 até 100:
- Análise com pandas
    - `porcentagem = dados.Sexo.value_counts(normalize=True)*100`

### DataFrame de frequências
- Tendo duas séries que apresentam o mesmo índice, pode-se criar um DataFrame que tenha este mesmo índice e como colunas, os valores das Séries relacionadas.  
```python
frequencia = serie_segmentada_com_labels_de_intervalos.value_counts()
porcentagem = serie_segmentada_com_labels_de_intervalos.value_counts(normalize=True)
"dataframe1 = pd.DataFrame({'Frequência': frequencia, 'Porcentagem (%)': porcentagem})"
dataframeDescending = dataframe1.sort_index(ascending=False)
```  

### Histograma
- Valores dos dados no eixo X
- Porcentagem dos dados no eixo Y
- Eixo Y com label Frequency
- Tipo de gráfico de barras
```python  
frequencia.plot.hist(columns = ['frequencia'])
```

### Gráfico de Barra Verticais
- Valores dos dados no eixo X, segmentados com labels
- Contagem dos dados no eixo Y
- Eixo X com label do nome da Série analisada
```python  
frequencia.plot.bar()
```  

### Gráfico de Barra Horizontais
- Valores dos dados no eixo Y, segmentados com labels
- Contagem dos dados no eixo X
- Eixo Y com label do nome da Série analisada
```python  
frequencia.plot.barh()
```  

### Gráfico de Área
- Valores dos dados no eixo X, segmentados com labels
- Contagem dos dados no eixo Y
- Eixo X com label do nome da Série analisada
```python  
frequencia.plot.area()
```

### Gráfico de Setores
- Setores com tamanho propocional à quantidade das categorias de dados
- Linha do círculo com labels das categorias dos dados
- Nomeação do grático no lado esquerdo, fora do círculo, com o label "count"
```python  
frequencia.plot.pie()
```  

### Gráfico de Linha
- Valores dos dados no eixo X, segmentados com labels
- Contagem dos dados no eixo Y
- Eixo X com label do nome da Série analisada
```python  
frequencia.plot.line()
```

### Gráfico de BoxPlot
```python  
frequencia.plot.box(color = 'blue')
```

### Distribuição de Frequências para Variáveis Qualitativas
- Tem distribuição assimétric ou normal?
- Tem outline ?
- Precisa de alguma transformação dos dados ?

### Como converter uma série de dados quantitavos (discretos ou contínuos) para uma série de dados qualitativos?
```python  
dados_que_serao_segmentados = dados.Renda
limites_das_classes_de_intervalo = [
    dados.Renda.min(),
    2 * 788,
    5 * 788,
    15 * 788,
    25 * 788,
    dados.Renda.max()
    ]
labels_das_classes_de_intervalo = [
    'E',
    'D',
    'C',
    'B',
    'A''
    ]
serie_segmentada_com_labels_de_intervalos = pd.cut(
    x = dados_que_serao_segmentados,
    bins = limites_das_classes_de_intervalo,
    labels = labels_das_classes_de_intervalo,
    include_lowest = True
    )
```  

