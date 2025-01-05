# Bitwise Operations on ints

- Usar apenas com números inteiros.
- O resultado considera: `two’s complement with an infinite number of sign bits`.
- Prioridade na execução:
    - Menor do que operações numéricas
    - Maior do que comparações
- O operador "unary" chamado de `inverted` ~ tem a mesma prioridade de execução que outros opedores numéridos do tipo "unary" como "+" ou "-".
- `x | y` (***bitwise or*** of "x and y")
- `x ^ y` (***bitwise exclusive or*** of "x and y")
- `x &  y` (***bitwise and*** of "x and y")
- `x << n` (x ***shifted left by*** n ***bits***)
    - Os bits são movidos para equerda. Novos valores que aparecem na direita são de bits desligados.
    - É equivalente a multiplicar por 2 "n" vezes.
- `x >> n` (x ***shifted right by*** n ***bits***)
    - Os bits são movidos para direita. Novos valores que aparecem na direita são de bits desligados.
    - É equivalente a fazer floor divivion pela potência de 2 elevado a "n".
- `~x` (the bits of x ***inverted***)
    - Como o sinal também muda, o processo apenas não muda os bits de ativado para inativado, na lógica de valores positivos!
    - A fórmula do resultado é igual a `-(x+1)`
```python
print(~0) # -1
print(~1) # -2
print(~2) # -3
print(~3) # -4
print(~(-1)) # 0
print(~(-2)) # 1
print(~(-3)) # 2
print(~(-4)) # 3
print(2 | 1) # 3
print(2 | 2) # 2
print(2 ^ 1) # 3
print(2 ^ 2) # 0
print(2 & 1) # 0
print(2 & 2) # 2
# Sobre ordem de execução:
print(2 | 1 + 1) # 2
print(2 | 2 + 2) # 6
print(2 & 1 + 1) # 2
print(2 & 2 + 2) # 0
```