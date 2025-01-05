# Broadcasting
- Permite trabalhar com operações em arrays de formas e tamanhos diferentes.
```python
import numpy as np

a = np.array([[1, 2], [3, 4]])
b = np.array([10, 20])

# broadcasting para soma
# Numpy faz com que b tenha mesma forma do array a.
# As estruturas de b são duplicadas para esta nova forma.
a + b
```  
