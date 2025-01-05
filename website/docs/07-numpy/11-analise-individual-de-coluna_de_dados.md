# Análise individual de coluna

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
print(dado_como_tabela)


# Estudo individual de todo o gráfico da cidade 1
# dado_shape_correto[:,0] = np.arange(1,88,1) # sequência de 1 até 87
plt.plot(np.arange(1,88,1),dado_shape_correto[:,1])
plt.legend(['preços na cidade 1'])

#
# Verificação de Dados Defeituosos
#
# Estudo individual de todo o gráfico da cidade 1
soma_de_nan1 = sum(np.isnan(dado_shape_correto[:,1]))
print(soma_de_nan1)
# Teste para demais Gráficos
soma_de_nan2 = sum(np.isnan(dado_shape_correto[:,2]))
print(soma_de_nan2)
soma_de_nan3 = sum(np.isnan(dado_shape_correto[:,3]))
print(soma_de_nan3)
soma_de_nan4 = sum(np.isnan(dado_shape_correto[:,4]))
print(soma_de_nan4)
soma_de_nan5 = sum(np.isnan(dado_shape_correto[:,5]))
print(soma_de_nan5)
```  

### Correção de Erro Identificado no dado 2
```python
dados_coluna = dado_shape_correto[:,2]
lista_de_defeitos_em_coluna_escolhida = [i for i in range(len(dados_coluna)) if np.isnan(dados_coluna[i])]
lista_de_defeitos_em_coluna_escolhida

#
# Script para correção pontual
#
for i in lista_de_defeitos_em_coluna_escolhida:
  if i == 0 and np.nan(dados_coluna[1]) != True:
    dados_coluna[i] = dados_coluna[1]
  elif i == len(lista_de_defeitos_em_coluna_escolhida) - 1 and np.nan(dados_coluna[len(lista_de_defeitos_em_coluna_escolhida) - 2]) != True:
      dados_coluna[i] = dados_coluna[len(lista_de_defeitos_em_coluna_escolhida) - 2]
  else:
    dados_coluna[i] = np.mean([dados_coluna[i-1],dados_coluna[i+1]])
# Teste
# problema resolvido, mas script não é perfeito. Alguns dados geram erro...
soma_de_nan2 = sum(np.isnan(dados_coluna))
print(soma_de_nan2)
```  
