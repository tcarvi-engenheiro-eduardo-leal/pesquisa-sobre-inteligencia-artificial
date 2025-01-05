# Manipulação de Dados

## Alterar Título das Colunas

```python
from pathlib import Path
import pandas as pd

path = Path('src/projeto-inteligencia-artificial/notebook/dados.csv').absolute()
dados = pd.read_csv(path)

print(dados.columns)
```  

```python
mapa_alteracao_titulos = {
   'Confirmed':'confirmado_com_covid',
   'Deaths':'obitos',
   'Recovered':'recuperados'
}

dados = dados.rename(columns = mapa_alteracao_titulos)
print(dados.columns)
```

## Mudar Ordem e Excluir Colunas de DataFrame
```python
from pathlib import Path
import pandas as pd

path = Path('src/projeto-inteligencia-artificial/notebook/dados.csv').absolute()
dados = pd.read_csv(path)

print(dados.head())
```  

```python
# Escolha da ordem e seleção dos dados
dados = dados[['confirmado_com_covid', 'obitos', 'recuperados']]

print(dados.head())
```  

## Mudar Caixa Alta de todas as células de uma colunas do DataFrame
```python
from pathlib import Path
import pandas as pd

path = Path('src/projeto-inteligencia-artificial/notebook/dados.csv').absolute()
dados = pd.read_csv(path)
print(dados.head())
dados['Country/Region'] = dados['Country/Region'].str.upper()
print(dados.head())
```  

## Substituir texto de todas as células de uma colunas do DataFrame
```python
from pathlib import Path
import pandas as pd

path = Path('src/projeto-inteligencia-artificial/notebook/dados.csv').absolute()
dados = pd.read_csv(path)
print(dados.head())
dados['Country/Region'] = dados['Country/Region'].str.replace("Region","Regiao")
print(dados.head())
```  
