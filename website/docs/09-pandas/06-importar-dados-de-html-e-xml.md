# Importar Dados de HTML e de XML

## Importe básico de tag table
```python
from pathlib import Path
import pandas as pd

path_local = Path('src/projeto-inteligencia-artificial/notebook/filmes_wikipedia.html').absolute()
dados = pd.read_html(path_local) # importa apenas dados de table
print(dados)
```   

## Avaliação dos Dados Importados
```python
from pathlib import Path
import pandas as pd

path_local = Path('src/projeto-inteligencia-artificial/notebook/filmes_wikipedia.html').absolute()
dados = pd.read_html(path_local) # importa apenas dados de table
print(type(dados))
print(len(dados))
print(dados[1])
```  

## Seleção de Dados do HTML
```python
from pathlib import Path
import pandas as pd

path_local = Path('src/projeto-inteligencia-artificial/notebook/filmes_wikipedia.html').absolute()
dados = pd.read_html(path_local) # importa apenas dados de table
print(type(dados))
print(len(dados))
print(dados[1])

dados_selecionados = dados[1]
```  

## Seleção de Dados do HTML
```python
from pathlib import Path
import pandas as pd

path_local = Path('src/projeto-inteligencia-artificial/notebook/filmes_wikipedia.html').absolute()
dados = pd.read_html(path_local) # importa apenas dados de table
print(type(dados))
print(len(dados))
print(dados[1])

dados_selecionados = dados[1]
```  

## Gravação de Dados do HTML
```python
from pathlib import Path
import pandas as pd

path_local = Path('src/projeto-inteligencia-artificial/notebook/filmes_wikipedia.html').absolute()
dados = pd.read_html(path_local) # importa apenas dados de table
print(type(dados))
print(len(dados))
print(dados[1])

dados_selecionados = dados[1]\

path_local2 = Path('src/projeto-inteligencia-artificial/notebook/filmes_wikipedia2.html').absolute()
dados_selecionados.to_html(path_local2)

# Releitura para confirmação da operação de gravação
dados_ja_gravado = pd.read_html(path_local2)
print(dado_ja_gravado)
```  

## Importe e Gravação de Dados de XML
```python
from pathlib import Path
import pandas as pd

path_local = Path('src/projeto-inteligencia-artificial/notebook/imdb_top_1000.xml').absolute()
dados = pd.read_html(path_local)
print(type(dados))
print(len(dados))

path_local2 = Path('src/projeto-inteligencia-artificial/notebook/imdb_top_1000_2.xml').absolute()
dados_selecionados.to_xml(path_local2)

# Releitura para confirmação da operação de gravação
dados_ja_gravado = pd.read_xml(path_local2)
print(dado_ja_gravado)
```  
