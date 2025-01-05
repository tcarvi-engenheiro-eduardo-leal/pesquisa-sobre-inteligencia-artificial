# Otimização nos dados de Treino e de Teste
- Etapas:

## Separar os dados, antes do treinamento:
- Divisão dos dados em:
    - train_x
    - train_y
    - test_x
    - test_y
   
```python
import pandas as pd

uri='https://gist.githubusercontent.com/guilhermesilveira/2d2efa37d66b6c84a722ea627a897ced/raw/10968b997d885cbded1c92938c7a9912ba41c615/tracking.csv'
dados = pd.read_csv(uri)
mapa_alteracao_titulos = {
    "home": "homepage",
    "how_it_works": "como_funciona",
    "contact": "contato",
    "bought": "comprado"
}
dados = dados.rename(columns=mapa_alteracao_titulos)
x = dados[["homepage", "como_funciona", "contato"]]
y = dados["comprado"]
```

```python  
print(x.shape)
print(y.shape)
```

```python
treino_x = x[:75]
treino_y = y[:75]
teste_x = x[75:]
teste_y = y[75:]
```  

## Treino
```python
from sklearn.svm import LinearSVC
modelo = LinearSVC()
modelo.fit(treino_x, treino_y)
```

## Teste e identificação da acurácia
```python
previsoes = modelo.predict(teste_x)
from sklearn.metrics import accuracy_score
acuracia = accuracy_score(teste_y, previsoes) * 100
print("A acurácia de %.2f%%" % acuracia)
```  

## Avaliação dos dados usados no treino e no teste, para pensar na otimização
```python  
treino_x.value_counts()
treino_y.value_counts()
teste_x.value_counts()
teste_y.value_counts()
```  

## Nova separação dos dados, com split de sklearn, reteste e reidentificação da acurácia
```python
from sklearn.model_selection import train_test_split
SEED = 20
treino_x, teste_x, treino_y, teste_y = train_test_split(x, y, random_state = SEED, test_size = 0.25)
# retreino
from sklearn.svm import LinearSVC
modelo = LinearSVC()
modelo.fit(treino_x, treino_y)
# reteste
previsoes = modelo.predict(teste_x)
#reidentificação da acurácia
from sklearn.metrics import accuracy_score
acuracia = accuracy_score(teste_y, previsoes) * 100
print("A acurácia de %.2f%%" % acuracia)
```  

## Nova separação dos dados, mas usando recurso de estratificação, para dados não ficarem enviesados
```python
# Mudança na chamada do split, para estratificação pelos valroes padrões de y
from sklearn.model_selection import train_test_split
SEED = 20
treino_x, teste_x, treino_y, teste_y = train_test_split(x, y, 
                                                        random_state = SEED,
                                                        test_size = 0.25,
                                                        stratify = y)
# retreino
from sklearn.svm import LinearSVC
modelo = LinearSVC()
modelo.fit(treino_x, treino_y)
# reteste e reidentificação da acurácia
previsoes = modelo.predict(teste_x)
from sklearn.metrics import accuracy_score
acuracia = accuracy_score(teste_y, previsoes) * 100
print("A acurácia de %.2f%%" % acuracia)
```  

## Avaliar novamente os dados usados no treino e no teste, para confirmar otimização na seleção dos dados
```python  
treino_x.value_counts()
treino_y.value_counts()
teste_x.value_counts()
teste_y.value_counts()
```  
