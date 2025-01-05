# Classificação de dados quantitativos em intervalos de nome

## Criação de classes para variáveis quantitativas
#### Identificação dos limites e dos valores relevantas
- dados.Renda.min()
- dados.Renda.max()
- classes = [0, 1576, 3152, 7890, 15900, 20000]
#### Criação de labels para os limites escolhidos anteriormente
labels = ['E', 'D', 'C', 'B ', 'A']
#### Uso de pandas.cut para criar classes
- Usando:
    - bins = valors de limite
    - labels = labels de tais valores de limite
    - include_lowest = True se há desejo de mostrar o valor limite inicial
```python  
dados.Renda.cut(x = dados.Renda,
       bins = classes,
       labels = labels,
       include_lowest = True)
```  
- Tendo serie de valores de renda, 
pd.value_counts(
    pd.cut(x = dados.Renda,
        bins = classes,
        labels = labels,
        include_lowest = True)
)
pd.value_counts(
    pd.cut(x = dados.Renda,
        bins = classes,
        labels = labels,
        include_lowest = True)
, Normalize = True) * 100