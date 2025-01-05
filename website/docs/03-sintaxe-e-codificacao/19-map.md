# map(function,iterable)
- The map() function executes a specified function for each item in an iterable. 
- The item is sent to the function as a parameter.
- Pode haver o retorno de dados, no formato de map.
- `map(function, iterables)`
    - `function`	Required. The function to execute for each item
    - `iterable`	Required. A sequence, collection or an iterator object. 

```python
def myfunc(a):
  return len(a)

x = map(myfunc, ('apple', 'banana', 'cherry'))

print(x)  # <map object at 0x150f5e2c4130>

#convert the map into a list, for readability:
print(list(x)) # [5, 6, 6]
```

## Uso de map() com lambda
- Código pode gerar dificuldades de leitura. Ter cuidado...
```python 
# map(lambda variavel_representante_do_input: expr_processamento_input, iteravel_com_os_inputs_a_serem_usados)
map_variable = map(lambda x : x + 2, [1, 2, 3]) # Retorna map() com valores 3, 4, 5.
print(list(map_variable)) # Imprime lista [3, 4, 5] que tem valores do map(). 
```
