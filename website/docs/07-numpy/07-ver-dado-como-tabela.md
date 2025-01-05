# Ver dado como tabela
- Plotar tabela tendo como dados um array NumPy de 2 dimensões
```python
import numpy as np
url = 'https://raw.githubusercontent.com/alura-cursos/numpy/dados/apples_ts.csv'
dado_importado = np.loadtxt(url,delimiter=',',usecols=np.arange(1,88,1))
dado_shape_correto = dado_importado.T
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
``` 
