## Medidas Separatrizes
- Não são influenciados por valores extremos
- Pode ser relevante para se identificar representante de tendência central
- Dividem uma série com mesma lógica da mediana, ou seja, por partes iguais de quantidade de observações, depois dos dados estarem ordenados.
- São valores que separam o rol (os dados ordenados) em quatro (quartis), dez (decis)
ou em cem (percentis) partes iguais. Note que para a sua correta aplicação, exige-se que
os dados estejam organizados num rol ordenado.
#### Quartis 
- dados.Renda.quantile([0.25, 0.5, 0.75])
#### Decis
- dados.Renda.quantile([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9])
- dados.Renda.quantile([n/10 for n in range(1, 10)])
- Para análise gráfica:
```python
seaborn.distplot(
    dados.Idade, 
    hist_kws = {'cumulative': True},
    kde_kws = {'cumulative': True} )
```  

#### Percentis
- dados.Renda.quantile([n/100 for n in range(1, 100)])

#### Box-plot
- 