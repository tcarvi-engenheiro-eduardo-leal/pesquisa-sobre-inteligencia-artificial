# Exercício 6 - Identificar Modelo de Dados para Machine Learning

1) Importe dados de https://raw.githubusercontent.com/guilhermesilveira/machine-learning/master/capitulo6/buscas.csv
2) Conheça as colunas de feature "home", "busca" e "logado".
3) Conheça a coluna "comprou".
4) Exclua todas as linhas com NaN.
5) Identifique modelo de dados para prever se os clientes do site devem ou não comprar um produto na loja web.
6) Separe colunas de input (features) e de output (classe). 5.1
7) Segmentize dados de treino e de testes, na proporção respectiva de 60% e 40%.
    - Verifique acurácia do sistema de machine learning.
    - Gere estimativa para novos dados de input, sem ter conhecimento dos dados de saída.
8) Apresente relatório das estimativas usando Power BI.
- **Tempo de execução:** 
    - 24/07/2024:**2 min e 27 seg**

## Resolução:
```python  
import pandas as pd

uri = 'https://raw.githubusercontent.com/guilhermesilveira/machine-learning/master/capitulo6/buscas.csv'
dados = pd.read_csv(uri) #1
dados.head() #2 #3
```  

```python
dados.dropna(axis=0, inplace=True) #4
mapa_alteracao_titulos = {
    "home": "acessou_pagina_home",
    "logado": "esta_logado",
    "comprou": "faz_compra"
}
dados.rename(columns=mapa_alteracao_titulos, inplace=True)
dados["faz_compra"] = [1 if x == "sim" else 0 for x in dados["faz_compra"]]
dados.head()
```  

```python
# modelo de dados
# features = [acessou_pagina_home, esta_logado]
# classe = [faz_compra]

x = dados[["acessou_pagina_home", "esta_logado"]] #6
y = dados["faz_compra"] #6

# train_x = 60%
# train_y = 60%
# test_x = 40%
# test_y = 40%

limite = int(len(x)*0.6)

train_x = x[:limite] #7 com 60%
train_y = y[:limite] #7 com 60%
test_x = x[limite:] #7 com 40%
test_y = y[limite:] #7 com 40%

```

```python
# execução do treinamento
from sklearn.svm import LinearSVC

modelo_estimador = LinearSVC()
modelo_estimador.fit(train_x, train_y)