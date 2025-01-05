# Operador de Partição

## Partição de tuple em nova tuple
```python
valores_tuple = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
print(valores_tuple[2:4]) ## Print tuple com elementos de index 2 e 3.
print(valores_tuple[2:6]) ## Print tuple com elementos de index 2,3,4 e 5.
print(valores_tuple[:6]) ## Print tuple com elementos de index 0,1,2,3,4 e 5.
print(valores_tuple[6:]) ## Print tuple com elementos de index 6 até o último existente.
```

## Partição de list em nova list
```python
valores_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(valores_list[2:4]) ## Print list com elementos de index 2 e 3.
print(valores_list[2:6]) ## Print list com elementos de index 2,3,4 e 5.
print(valores_list[:6]) ## Print list com elementos de index 0,1,2,3,4 e 5.
print(valores_list[6:]) ## Print list com elementos de index 6 até o último.
