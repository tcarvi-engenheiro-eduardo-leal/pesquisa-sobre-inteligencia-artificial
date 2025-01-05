# Explorar Visualizaço dos Dados em Gráficos

```python
import numpy as np
url = 'https://raw.githubusercontent.com/alura-cursos/numpy/dados/apples_ts.csv'
dado_importado = np.loadtxt(url,delimiter=',',usecols=np.arange(1,88,1))
dado_shape_correto = dado_importado.T

#
# Ver dado como tabela, para poder trabalhar transformações
#
import matplotlib.pyplot as plt
# Parâmetro cellText é opcional.
# Mas se deve indicar pelo menos este campo ou cellColours.
# cellText: 2D list of str. The texts to place into the table cells.
# cellLoc: The alignment of the text within the cells
# rowLoc: The text alignment of the row header cells
# loc: The position of the cell with respect to ax. 
# edges: The cell edges to be drawn with a line. 
dado_como_tabela = plt.table(cellText=dado_shape_correto,
                              cellLoc="left",
                              rowLoc="left",
                              colLoc="center",
                              loc='top',
                              edges="closed")     
dado_como_tabela

#
# Uso como eixo X as datas de 1 ano
#
datas_ano1 = np.arange(1, 13, 1) # sequência de 1 até 12

#
# Separo cada coluna para plotagem
#
precos_cidade1_ano1 = dado_shape_correto[datas_ano1,1]
precos_cidade2_ano1 = dado_shape_correto[datas_ano1,2]
precos_cidade3_ano1 = dado_shape_correto[datas_ano1,3]
precos_cidade4_ano1 = dado_shape_correto[datas_ano1,4]
precos_cidade5_ano1 = dado_shape_correto[datas_ano1,5]

#
# Plotagem sequencial em um mesmo gráfico
#
plt.plot(datas_ano1, precos_cidade1_ano1)
plt.plot(datas_ano1, precos_cidade2_ano1)
plt.plot(datas_ano1, precos_cidade3_ano1)
plt.plot(datas_ano1, precos_cidade4_ano1)
plt.plot(datas_ano1, precos_cidade5_ano1)

#
# Legenda para o gráfico
#
plt.legend(['ano 1','ano 2','ano 3','ano 4','ano 5'])
```
