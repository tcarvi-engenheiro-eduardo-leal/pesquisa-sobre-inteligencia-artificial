# Importar Planilha do Excel ou do Google Planilhas

## Importar Planilha
```python
from pathlib import Path
import pandas as pd

# Download de:
path_local = Path('src/projeto-inteligencia-artificial/notebook/planilhas_poluicao.xlsx').absolute()
print(pd.ExcelFile(path_local).sheet_names)
# [ ]

dados = pd.read_excel(path_local, sheet_name = "GEE Estados")
# Nome da planilha, dentro do arquivo excel que é um diretório de planilhas
dados.head()
```  

## Importar Planilha indicando intervalo de colunas e números de linhas a serem lidas
```python
from pathlib import Path
import pandas as pd

# Download de:
path_local = Path('src/projeto-inteligencia-artificial/notebook/planilhas_poluicao.xlsx').absolute()
print(pd.ExcelFile(path_local).sheet_names)
# [ ]

dados = pd.read_excel(path_local, sheet_name = "GEE Estados", usecols='A:D', nrows=10)
# Nome da planilha, dentro do arquivo excel que é um diretório de planilhas
dados.head()
```  

## Importar Planilha de depois gravar, com outro nome
```python
from pathlib import Path
import pandas as pd

# Download de:
path_local = Path('src/projeto-inteligencia-artificial/notebook/planilhas_poluicao.xlsx').absolute()
print(pd.ExcelFile(path_local).sheet_names)
# [ ]

dados = pd.read_excel(path_local, sheet_name = "GEE Estados", usecols='A:D', nrows=10)
# Nome da planilha, dentro do arquivo excel que é um diretório de planilhas
dados.head()
path_local2 = Path('src/projeto-inteligencia-artificial/notebook/planilhas_poluicao2.xlsx').absolute()
dados.to_excel(path_local2, index=False)
dados2 = pd.read_excel(path_local2, sheet_name = "GEE Estados", usecols='A:D', nrows=10)
dados2.head()
```  

## Importar Planilha do compartilhamento do Google Planilhas
```python
import pandas as pd

sheet_id = 'XXXX'
sheet_name = 'YYYYY'
url_percapita = f'https://docs.google.com/spreadsheets/d/{sheet_id}/gviz/tq?tqx=out:csv&sheet={sheet_name}'
percapita = pd.read_csv(url_percapita)
percapita.head()
```  
