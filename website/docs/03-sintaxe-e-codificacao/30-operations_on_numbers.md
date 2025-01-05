# Operations on numerical types

```python
# Addition
# result = x + y

# Subtraction
# result = x - y

# Multiplication
# result = x * y

# Divisão com resultado no conjunto de Reais
# Resultado sempre terá tipo de float!
print("result = x / y") 
result = 9 / 3
print(result)
result = 9.0 / 3
print(result)
result = 10 / 3
print(result)
result = 10.2 / 3
print(result)
result = 10.2 / 3.0
print(result)

# integer division
#    - floored quotient 
#    - divisão com resultado inteiro tendendo para valor menor
# The result is always rounded towards minus infinity: 
#      1//2 is 0, 
#   (-1)//2 is -1, 
#      1//(-2) is -1, and 
#   (-1)//(-2) is 0.
print("result = x // y") 
# No caso seguinte o resultado será de int. 
result = 9 // 3 # result = 3
print(result)
# MAS, no caso seguinte o resultado será de float pois 1 dos números é do tipo float. 
result = 9.0 // 3 # result = 3.0
print(result)
# O próximo caso é bastante estranho!!!!!
# Mas a lógica é a seguinte.
#     Divide-se 9.9 // 3.
#     O resultado é 3.3
#     O processamento traz resposta para menor valor, no caso 3.0
#     Como se usou float, a resposta vem como 3.0
#     Esta é a lógica do processamento estranho...
result = 9.9 // 3 # result = 3.0
print(result)
# Fica ainda pior quando se usa número negativo!!!!!
# Mas a lógica é a seguinte.
#     Divide-se -9.9 // 3.
#     O resultado é -3.3
#     O processamento traz resposta para menor valor, no caso -4.0
#     Como se usou float, a resposta vem como -4.0
#     Esta é a lógica do processamento ainda mais estranho...
result = -9.9 // 3 # result = -4.0
print(result)
# No caso seguinte o resultado será de int. 
# E ocorre o corte do decimal, resultado indo para posição numericamente menor.
result = 10 // 3 # result = 3
print(result)
# No caso seguinte o resultado será de int. 
# E ocorre o corte do decimal, resultado indo para posição numericamente menor.
result = -10 // 3 # result = -4 . Pois -4 é o número inteiro menor logo abaixo de -3,3.
print(result)
# No caso seguinte o resultado será de float, pois um dos números processados é um float.
#   Mas sem mantem a lógica do menor número inteiro.
#   10.2 // 3 vai dar 3.4. Mas menor número é 3.0. 
result = 10.2 // 3 # result = 3.0
print(result)
# No caso seguinte o resultado será de int. 
#   -10.2 // 3 vai dar -3.4. Mas menor número é -4.0. 
result = -10.2 // 3.0 # result = -4.0
print(result)

# Remainder of x divided by y
# Módulo operator %
# result = x % y

# x negated
# result = -x

# x unchanged
# result = +x

# absolute value or magnitude of x
# result = abs(x)

# int value
# result = int(x)

# float value
# result = float(x)

# complex value
# A complex number with real part re, imaginary part im. im defaults to zero
re = 3
im = 5
result = complex(re, im)
print(result)

# Conjugate of complex number
result_conjugate = result.conjugate()
print(result_conjugate)

# Geração de par (x // y, x % y)
x = 5
y = 8
# gera tuple com resultado da integer-division, e com o resto de tal divisão
result = divmod(x, y) # (x // y, x % y)
print(result)

# Exponenciação
# Operação de elevar base a um expoente
# result = pow(x, y) # x to the power y
# result = x ** y    # x to the power y
```  

- Python fully supports mixed arithmetic: 
    - When a binary arithmetic operator has operands of different numeric types, the operand with the “narrower” type is widened to that of the other.
- Integer is narrower than floating point, which is narrower than complex. 
- A comparison between numbers of different types behaves as though the exact values of those numbers were being compared.
- Conversion from float to int truncates, discarding the fractional part.
- Python defines pow(0, 0) and 0 ** 0 to be 1, as is common for programming languages.

- Additional Methods on Integer Types:
```python  
# int.bit_length()
print((-37).bit_length())
#int.bit_count()
print((37).bit_count())
# int.to_bytes(length=1, byteorder='big', *, signed=False)
print((37).to_bytes())
# **classmethod** `int.from_bytes(bytes, byteorder='big', *, signed=False)
# int.from_bytes(b'\x00\x10', byteorder='big')
#int.as_integer_ratio()
#int.is_integer()
```
