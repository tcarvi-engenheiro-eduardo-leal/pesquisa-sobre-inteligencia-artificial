# filter(function,iterable)
- Retorna um objeto do tipo filter
  - O objeto do tipo filter é uma sequência de valores filtrados.
  - Apenas o valores que foram testados e aprovados com True, pela function, são retornados junto com o filter.
    
- `filter(function, iterable)`
    - `function`	A Function to be run for each item in the iterable
    - `iterable`	The iterable to be filtered

```python
ages = [5, 12, 17, 18, 24, 32]

def myFunc(x):
  if x < 18:
    return False
  else:
    return True

adults = filter(myFunc, ages)

for x in adults:
  print(x) # Não retorna True ou False. Retorna os valores aceitos devido retorno True. 
  # Print 18, 24, 32
```


## Uso de filter() com lambda
- Código pode gerar dificuldades de leitura. Ter cuidado...
```python 
# map(lambda variavel_representante_do_input: expr_processamento_input, iteravel_com_os_inputs_a_serem_usados)
filtered_variables = filter(lambda x : x <= 2, [1, 2, 3])
print(filtered_variables) # objeto to tipo filter
# Não retorna True ou False. Retorna os valores aceitos com True. 
print(list(filtered_variables)) # Imprime [1, 2]
```
