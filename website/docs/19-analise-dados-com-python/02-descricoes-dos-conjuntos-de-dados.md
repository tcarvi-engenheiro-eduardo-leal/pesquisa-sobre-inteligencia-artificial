# Descrições dos Conjuntos de Dados


## Recepção dos dados, usando pandas
```python
import pandas as pd
dados = pd.read_csv("/Users/eduardosantosleal/src/github.com/tcarvi/pythonTutorials/myvenv/Curso_de_Estatistica_Parte_2/dados.csv")
```  
- `print(type(dados))`
    - pandas.core.frame.DataFrame
- `type(dados.Renda)`
    - pandas.core.series.Series

## pandas.Series.describe()
- `print(dados.Renda.describe())`  
```python  
"count     76840.000000"       # contagem de elementos  
"mean       2000.383199"       # média aritmética simples dos valores dos elementos  
"std        3323.387730"       # desvio padrão presente entre os valores dos elementos  
"min           0.000000"       # valor mínimo do conjunto dos elementos  
"25%         788.000000"       # Valor da posição 25%, do conjunto ordenado de elementos.  
"50%        1200.000000"       # Valor da posição 50%, do conjunto ordenado de elementos.  
"75%        2000.000000"       # Valor da posição 75%, do conjunto ordenado de elementos.  
"max      200000.000000"       # valor máximo do conjunto dos elementos  
"Name: Renda, dtype: float64"  # nome e tipo do conjunto de dados analisado  
```  

## pandas.Series.unique()
- `# print('Lista dos valores únicos do conjunto: %s' % dados.Renda.unique())`
    - ```python
    %s, in this case, is called "string placeholder"
    %, in this case, is called "string-formatting operator"
    A resposta do processamento é um `NumPy array`.
    "Valores únicos do conjunto: [  800  1150   880 ... 36000  1329  5260]"
    ```  

## pandas.Series.value_counts()
- `# print('Lista cada elemento único do conjunto, indicando quantidade de repetições: \n%s' % dados.Renda.value_counts())`  
    - ```python
    Lista cada elemento único do conjunto, indicando quantidade de repetições:    
    A resposta do processamento é um objeto do tipo Series.  
    Contêm como índice os elementos únicos. E como valor a quantidade de repetições do elemento identificado.  
    Os elementos únicos são apresentados em "descending order", considerando os seus valores de repetição. O primeiro índice indicará o elemento que mais se repete.  
    NA values não são processador por default.   
    Renda  
    "788     6881"           # O elemento que mais se repete é o 788. Este elemento se repete 6881 vezes.
    "1500    4567"  
    "1200    4476"  
    "2000    4233"  
    "1000    4158"  
            "..."   
    "1171       1"  
    "1413       1"  
    "3025       1"  
    "185        1"           # A ordenação se dá por quantidade de repetições e não pelo valor do índice.   
    "5260       1"  
    "Name: count, Length: 1606, dtype: int64"  # nome, quantidade de elementos e tipo do dado analisado.
    ```  

## pandas.Series.mode()
- `print('Moda(s):\n%s' % dados.Renda.mode())`  
    - ```python
    A resposta do processamento é um objeto do tipo Series.  
    Como esta resposta só apresenta 1 dado, temos apenas o índice 0.
    Se houvesse outro dado, teríamos o acréscimo do índice 1.  
    Para cada índice, temos o valor da moda.  
    "Moda(s):"  
    "0    788"                     # temos aqui apenas uma moda para a Serie analisada. O valor da moda é 788. O zero indica a posição na série gerada para a resposta.   
    "Name: Renda, dtype: int64"    # nome e tipo do dado analisado
    ```  

## pandas.Series.min() e pandas.Series.max()
- `print('Valor mínimo: %s. Valor máximo: %s.' % (dados.Idade.min(), dados.Idade.max()))`
- `print('Valor mínimo: %s. Valor máximo: %s.' % (dados.Renda.min(), dados.Renda.max()))`  

## pandas.Series.median()
- `print('Média aritmética simples=%s. Mediana=%s.' % (dados.Renda.mean(), dados.Renda.median()))`

## pandas.Series.nunique()
- `print('Quantidade de dados diferentes, sem considerar a repetição: %s.' % dados.Renda.nunique())`
    - A resposta do processamento é um número do tipo int, com a quantidade de elements não repetidos da série. 
    - Processamento não considera NA values por default.

## pandas.Series.count()
- `print('Quantidade de dados não nulos, considerando inclusive as repetições: %s.' % dados.Renda.count())`  

## pandas.Series.nlargest()
- `print('10 maiores valores:\n%s.' % dados.Renda.nlargest(4))`
    - ```python
    A resposta do processamento é um objeto do tipo Series.
    Temos como índice o elemento identificado.  
    E temos como valor do elemento o número de repetições.  
    A ordem de apresentação é do maior para o menor (decreasing order)
    "4 maiores valores:" 
    "28110    200000"     # O elemento que mais se repete é o 28110. Repete-se 200000.
    "43693    200000"
    "56141    200000"
    "43694    120000"
    "Name: Renda, dtype: int64."
    ``` 

## pandas.Series.nsmallest()
- `print('3 menores valores:\n%s.' % dados.Renda.nsmallest(3))`
    - ```python
    3 elementos com menores valores de repetição:
    "42     0"                 # O elemento que menos se repete é o 42. Mas não se repete nenhuma vez. Por isso, valor zero.
    "68     0"                  # O segundo elemento que menos se repete é o 68. Mas não se repete nenhuma vez. Por isso, valor zero. 
    "130    0"                  # O terceito elemento que menos se repete é o 130. Mas não se repete nenhuma vez. Por isso, valor zero.
    "Name: Renda, dtype: int64." # Nome e tipo do conjunto de dados analisados.
    ```  

## pandas.Series.quantile()
- `print('Posição ordenada de 25 porcent: %s.' % dados.Renda.quantile(.25))`
    - ```python  
    Processamento retorna um número float para o caso do parâmetro q indicar uma posição como float. Por exemplo, para o caso de se indicar o parâmetro q=0.25  
    Se o parâmetro q for indicado como um array, uma série será retornada.  
    Não se considera a soma ou o peso dos valores, para se identificar a posição dos elementos.
    Apenas se identifica um elemento ordenado na posição de 25%.
    Pode ocorrer que 2 elementos se encontrem na posição de 25%. Para este caso, o parâmetro interpolation indica como se deve escolher entre estes dois valores. 
    "Posição ordenada de 25 porcent: 788.0."
    ``` 
- `print('Posição ordenada de 50 e 75 porcent:\n%s.' % dados.Renda.quantile([.5, .75]))`
    - ```python  
    Como o parâmetro q foi indicado como um array-like, o processamento retorna uma série.
    A série apresentará como índice a posição do elemmento. E como valor, o valor numérico do elemento posicionado.  
    Não se considera a soma ou o peso dos valores, para se identificar a posição dos elementos.
    Apenas se identifica um elemento ordenado na posição de 25% e 75%.
    Pode ocorrer que e elementos se encontrem em cada uma das posição de 25% e 75%. Para este caso, o parâmetro interpolation indica como se deve escolher entre estes dois valores. 
    "Posição ordenada de 25 e 75 porcent:"
    "0.25     788.0"               # Na posicão de 25% temos o elemento de valor 788,00
    "0.50    1200.0"               # Na posicão de 50% temos o elemento de valor 1200,00
    "Name: Renda, dtype: float64."
    ``` 

## pandas.Series.var()
- `print('Variância do conjunto: %s.' % dados.Renda.var())`
    - ```python
    A variância é um indicador de dispersão dos dados.  
    Mas este indicador não possui grandeza tão semelhante à grandeza dos dados analisados.
    Mas pode-se, em comparações de situações onde não se alterou tando a grandeza dos dados analisados, comparar a variância de dois conjuntos numéricos. O valor de variância não precisa ter grandeza próxima à dos dados analisados.    
    "Variância do conjunto: 11044906.006217021."  # Neste caso, percebe-se que o valor 11044906 se mostra como um valor muito alto para se avaliar quanto um dado de renda se diferencia de outro dado de renda.
    ```

## pandas.Series.std()
- `print('Desvio padrão do conjunto: %s.' % dados.Renda.std())`
    - ```python
    O desvio padrão também é um indicador de dispersão dos dados.  
    Mas este indicador possui grandeza mais semelhante/próxima da grandeza dos dados analisados.
    Assim, normalmente se usa o indicador desvio-padrão e não a variância, para a análise descritiva de dados que tratam de dados da vida real.  
    A análise dos dados pode indicar se a variância ou o desvio-padrão devem ser escoolhidos como indicadores de dispersão de dados.  
    "Desvio padrão do conjunto: 3323.3877303464037."  # Neste caso, percebe-se que o valor 3323 se mostra como um valor que gera mais facilidade de entendimento, quando avaliamos a comparação entre rendas diferentes.
    ```
