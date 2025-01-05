# Query dos Dados
```python
import pandas as pd

url = 'xxxxxxx'
dados = pd.read_csv(url, sep=';')

print(dados.shape) # (x,y) # -> x-> collumns, y -> lines
print(dados.columns)
print(dados.info())

# seleção e apresentação de dados
print(dados['Tipo']) # Imprime a coluna Tipe como Serie
print(dados[['Tipo', 'Quarto']]) # Imprime a coluna Tipe como Serie
print(dados['Valor'].mean()) # extrai comuna 
print(dados.groupby('Tipo').mean(numeric_value=TRUE)) # extrai coluna "Tipo" e fixa com index. Depois apresenta média dos valores do index em todas as colunas.
print(dados.groupby('Tipo')['Valor'].mean()) # extrai coluna "Tipo" e fixa com index. Depois apresenta média dos valores do index em todas as colunas.
print(dados.groupby('Tipo')['Valor'].mean().sort_values('Valor')) # extrai coluna "Tipo" e fixa com index. Depois apresenta média dos valores do index em todas as colunas.
print(dados.groupby('Tipo')[['Valor','XXXXX']].mean()) # extrai coluna "Tipo" e fixa com index. Depois apresenta média dos valores do index em todas as colunas.
dados.precos.plot(kind='barh', figsise=(14, 10), color="purple")
dados.Tipo.unique()

# Query de dados
imoveis_comerciais = ['Conjunto Comercial/Sala', 'Predio Inteiro']
dados.query('@imoveis_comerciais in Tipo')
dados.query('@imoveis_comerciais not in Tipo')

# Nova Query de Dados
df.query('Tipo == "Apartamento"')

# Nova query de dados
df.query('Valor == 0 | Condominio == 0')
```  
