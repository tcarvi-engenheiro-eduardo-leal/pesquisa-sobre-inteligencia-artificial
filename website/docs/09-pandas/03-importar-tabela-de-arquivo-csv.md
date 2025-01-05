# Importar Tabela de Arquivo csv

## Importação de URI da web
```python
import pandas as pd

try:
    # codigo
    url = 'https://raw.githubusercontent.com/alura-cursos/Pandas/main/superstore_data.csv'
    dados = pd.read_csv(url)
except:
    from pathlib import Path
    path = Path('src/projeto-inteligencia-artificial/notebook/dados.csv').absolute()
    dados = pd.read_csv(path)
finally:
    dados.head()
```  

## Importação de path local
```python
from pathlib import Path
import pandas as pd

path = Path('src/projeto-inteligencia-artificial/notebook/dados.csv').absolute()
dados = pd.read_csv(path)
dados.head()
```  
## Importação de apenas algumas colunas de tabela
```python
from pathlib import Path
import pandas as pdg

path = Path('src/projeto-inteligencia-artificial/notebook/dados.csv').absolute()
dados = pd.read_csv(path_local, usecols=["ObservationDate", "Province/State"])
dados.head()
```  

## Importação de apenas algumas colunas e algumas linhas de tabela
```python
from pathlib import Path
import pandas as pd

path = Path('src/projeto-inteligencia-artificial/notebook/dados.csv').absolute()
dados = pd.read_csv(path_local, usecols=["ObservationDate", "Province/State"], nrows=3)
dados.head()
```  

## Importação e seguinte gravação de tabela, com outro nome
```python
from pathlib import Path
import pandas as pd

path = Path('src/projeto-inteligencia-artificial/notebook/dados.csv').absolute()
dados = pd.read_csv(path_local, usecols=["ObservationDate", "Province/State"], nrows=3)
dados.head()
path_local2 = Path('src/projeto-inteligencia-artificial/notebook/dados2.csv').absolute()
dados.to_csv(path_local2, index=False)
dados2 = pd.read_csv(path_local2, usecols=["ObservationDate", "Province/State"], nrows=3)
# para ver gravação
dados2.head()
```  