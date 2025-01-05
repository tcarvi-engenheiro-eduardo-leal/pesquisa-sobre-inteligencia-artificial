# Manipular dados em coluna de tabela
- Escolher melhor dados do eixo X e visualizar gráfico
```python
import numpy as np
url = 'https://raw.githubusercontent.com/alura-cursos/numpy/dados/apples_ts.csv'
dado_importado = np.loadtxt(url,delimiter=',',usecols=np.arange(1,88,1))
dado_shape_correto = dado_importado.T
# Identificado que datas se apresentam de forma errada.
# Datas de apresentam como 1.2013, 2.2013, 3.2013, ...
#
# Deve-se, como cientista de dados, olhar o dado e decidir como formatá-lo.
# Ou como manipulá-lo.
# Haverá criatividade neste processo!
#
datas = nparange(1, 88, 1) # Defini uma sequência numérica para as datas!
precos = dado_shape_correto[:,1:] # Todas as linhas. Todas as colunas, com excessão da primeira coluna de datas.
# Para teste de visualização
import matplotlib.pyplot as plt
plt.plot(datas,precos[:,0])  
``` 