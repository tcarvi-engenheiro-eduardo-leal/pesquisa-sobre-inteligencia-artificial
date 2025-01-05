# bar

## Barras usando matplotlib

- Plotagem de valores com barras
```shell title="No terminal shell"
pip install matplotlib
```  

```python
import matplotlib
import matplotlib.pyplot as plt
estudantes = ["joão", "Pedro", "Eduardo"]
notas = [8, 6, 3]
plt.bar(x=estudantes, height=notas)
```  
