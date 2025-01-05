# plt.plot()
```python
import matplotlib.pyplot as plt
import numpy as np

xpoints = np.array([0,6])
ypoints = np.array([0,250])

plt.plot(xpoints, ypoints)
plt.show()
```  

## Type of markers
- `marker = 'o'`
    - 'o',
    - '*',
    - '.',
    - ',',
    - 'x',
    - 'X',
    - '^',
    - ' ',
    - e outros marcadores ...

## Estilo da linha
- `ls = 'r'`
    - '-' 'solid',
    - ':' 'dotted',
    - '--' 'dashed',
    - '-.' 'dashdot',
    - '' 'None'

## Color do gráfico
- `c = 'r'`
    - 'r' 'red'
    - 'g' 'green'
    - 'b' 'blue'
    - 'c' 'cyan'
    - 'm' 'magenta'
    - 'y' 'yellow'
    - 'k' 'black'
    - 'w' 'white'

## Size of the marker:
- `ms = 20`

## Color do edge do marcador
- `mec = 'r'`

## Color of the edge of the marker
- `mfc = 'blue'`

## Linewidth of the line
- `linewidth = '20,5'`

## Labels para Eixos Fixos X e Y
- `plt.xlabel("Nome Escolhido")`
- `plt.ylabel("Nome Escolhido")`

## Título do Gráfico
- `plt.tifle('Título do gráfico')`

## Grid no gráfico
- `plt.grid()`
    - `plt.grid(axis = 'x')`
    - `plt.grid(axis = 'y')`

## Multiplas Plotagens
- Gráfico ao lodo do outro:
    - `plt.subplot(1,2,1)` # figure has 1 row, 2 columns, and this plot is the first plot
    - `plt.subplot(1,2,2)` # figure has 1 row, 2 columns, and this plot is the second plot
- Gráfico embaixo do outro:
    - `plt.subplot(2,1,1)` # figure has 2 row, 1 columns, and this plot is the first plot
    - `plt.subplot(1,1,2)` # figure has 2 row, 1 columns, and this plot is the second plot
- Título superior de todos os gráficos:
    - `plt.subtitle('Titulo Qualquer')`