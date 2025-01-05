# Verificação: múltiplo de número

```python
number = 45
ehMultimploDe3 = number % 3 == 0
print(ehMultimploDe3)
```

## Com lambda
```python
ehMultimploDivisor = lambda multiplo, divisor : multiplo % divisor == 0
print(ehMultimploDivisor(9,3))
```
