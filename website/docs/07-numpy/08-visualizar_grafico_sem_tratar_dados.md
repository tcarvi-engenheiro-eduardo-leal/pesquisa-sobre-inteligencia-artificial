# Visualizar Gráfico sem Tratar Dados
```python
import numpy as np
url = 'https://raw.githubusercontent.com/alura-cursos/numpy/dados/apples_ts.csv'
dado_importado = np.loadtxt(url,delimiter=',',usecols=np.arange(1,88,1))
dado_shape_correto = dado_importado.T
datas = dado_shape_correto[:,0] # Todas as linhas. Apenas a primeira coluna numerada como 0.
precos = dado_shape_correto[:,1:] # Todas as linhas. Todas as colunas, com excessão da primeira coluna de datas.
import matplotlib.pyplot as plt
plt.plot(datas,precos[:,0])
```
