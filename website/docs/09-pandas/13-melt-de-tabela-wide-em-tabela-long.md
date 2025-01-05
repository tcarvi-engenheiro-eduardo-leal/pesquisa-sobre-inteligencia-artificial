# melt() de tabela wide em tabela "long"
- Uso do melt()
- Input: 
    - Uma ou várias colunas no formato "wide"
- Output: 
    - Duas novas colunas, sendo uma com os títulos e outra com os valores, no formato "long".
    - Para 1 coluna, não há modificação na quantidade de linhas.
    - Para 2 ou maior quantidade (Q) de colunas, deve ocorrer a multiplicação do número de linhas pela quantidade de colunas.
- No formato **wide**, também conhecido como **tabela de pivô**, as tabelas têm uma única linha de cabeçalho contendo dados dispersos em diversas colunas.
- No formato **long**, também conhecido como **tabela unpivoted**, 1 ou diversas colunas foram transportadas para apenas 2 colunas. Uma coluna com os títulos dos dados. E outra coluna com os valores dos dados.

```python
import pandas as pd

data_frame = pd. DataFrame(
    'A': {0: 'a', 1: 'aa', 2: 'aaa'},
    'B': {0: 'b', 1: 'bb', 2: 'bbb'},
    'C': {0: 'c', 1: 'cc', 2: 'ccc'},
    'D': {0: 'd', 1: 'dd', 2: 'ddd'},
    'E': {0: 'e', 1: 'ee', 2: 'eee'},
    'F': {0: 'f', 1: 'ff', 2: 'fff'},
    'G': {0: 'g', 1: 'gg', 2: 'ggg'},
    'H': {0: 'h', 1: 'hh', 2: 'hhh'},
    'I': {0: 'i', 1: 'ii', 2: 'iii'},
    'J': {0: 'j', 1: 'jj', 2: 'jjj'},
    'L': {0: 'l', 1: 'll', 2: 'lll'},
    'M': {0: 'm', 1: 'mm', 2: 'mmm'},
)

unpivoted_data_frame = pd.melt(df, id_vars=['A', 'C', 'F'], value_vars=['B', 'E'], var_name = 'var_name', value_name='value_name')
```  

