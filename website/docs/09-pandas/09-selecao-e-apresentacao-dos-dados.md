# Seleção e Apresentação dos Dados
  
# Seleção
```python
from pathlib import Path
import pandas as pd

path = Path('src/projeto-inteligencia-artificial/notebook/dados.csv').absolute()
dados = pd.read_csv(path)

print(dados['ObservationDate'])
print(dados.ObservationDate)
print(dados['Confirmed'])
print(dados.Confirmed)
print(dados['Deaths'])
print(dados.Deaths)
print(dados['Recovered'])
print(dados.Recovered)
```  
  
# Seleção com groupby
- groupby agrupa os dados para permitir que você execute operações em cada grupo criado. 
- Esse método divide os dados com base na coluna e/ou condição desejada em grupos.
- Este método aplica a função desejada nos grupo criados, individualmente, combinando o resultado em uma única saída.
- Etapas:
    - Dividir os dados em grupos com base em alguns critérios;
    - Aplicar uma função a cada grupo de forma independente;
    - Combinar os resultados em uma estrutura de dados, geralmente em um DataFrame ou em uma Series.
  
```python  
# Dados numéricos para cálculo de mean()
dados = dados[['Confirmed', 'Deaths', 'Recovered']]

# Extrai coluna "Confirmed" e a fixa com index. Gera uma tabela com estes dados.
# O valor de "Confirmed" não se repete mais. Esta é a análise...
print(dados.groupby('Confirmed'))
# Depois apresenta média dos valores do index em todas as colunas numéricas.
print(dados.groupby('Confirmed').mean())

print(dados.groupby('Confirmed'))
# Depois apresenta média dos valores do index apenas na coluna "Recovered".
print(dados.groupby('Confirmed')['Recovered'].mean())

print(dados.groupby('Confirmed'))
# Depois apresenta média dos valores do index apenas na coluna "Recovered".
# Usando adicionalmente a ordenação ascendente, começando da linha 1.
print(dados.groupby('Confirmed')['Recovered'].mean().sort_values(ascending=True))
```  

# Plotagem usando pandas
```python
from pathlib import Path
import pandas as pd

path = Path('src/projeto-inteligencia-artificial/notebook/dados.csv').absolute()
dados = pd.read_csv(path)

# kind: bar (vertical bar plot)
dados.Confirmed.plot(kind='bar', figsize=(14, 10), color="purple")

# kind: barh (horizontal bar plot)
dados.Confirmed.plot(kind='barh', figsize=(14, 10), color="purple")

# kind: line (line plot)
dados.Confirmed.plot(kind='line', figsize=(14, 10), color="purple")

# kind: hist (histograma)
dados.Confirmed.plot(kind='hist', figsize=(14, 10), color="purple")

# kind: area (area plot)
dados.Confirmed.plot(kind='area', figsize=(14, 10), color="purple")

# kind: pie (pie plot)
dados.Confirmed.plot(kind='pie', figsize=(14, 10), color="purple")
```
