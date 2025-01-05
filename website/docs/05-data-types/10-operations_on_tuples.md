# Operations on tuples

```python 
variable_tuple_name0 = () 
variable_tuple_name1 = ('jack', 'otherjack')
variable_tuple_name2 = (23, 40, 67)
```  

## Tuples no assignment duplo
```python
def retornarTuple(parameter1, parameter2, parameter3):
    return (parameter1, parameter2, parameter3)

var_name1, var_name2, _ = retornarTuple("algum_argumento", "outro_argumento", 12)
```  

## Tuples no assignment triplo
```python
def retornarTuple(parameter1, parameter2, parameter3):
    return (parameter1, parameter2, parameter3)

var_name1, var_name2, var_name3 = retornarTuple("algum_argumento", "outro_argumento", 12)
```  

## Tuples no assignment quadruplo
```python
def retornarTuple(parameter1, parameter2, parameter3, parameter4):
    return (parameter1, parameter2, parameter3, parameter4)

var_name1, var_name2, var_name3, var_name4 = retornarTuple("algum_argumento", "outro_argumento", 12, "ultimo")
```  

- count()
- index()
- sorted() # Ordena dados da tupla em uma lista criada com seus elementos.