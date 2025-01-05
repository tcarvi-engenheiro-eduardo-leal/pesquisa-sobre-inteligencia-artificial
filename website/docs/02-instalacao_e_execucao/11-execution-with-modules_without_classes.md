# Python Program Execution with modulos but without classes
- Estrutura de diretórios e arquivos:
    - ./script_principal.py
    - ./add_modulos_path.py
    - ./filename1.py
    - ./filename2.py
    - ./modulos/modulo1/file_de_modulo1.py
    - ./modulos/modulo2/file_de_modulo2.py
    - ./modulos/modulo3/file_de_modulo3_que_importa_modulo4.py  
    - ./modulos/modulo4/file_de_module4.py  
  
```python title="Source file of a Python program: ./script_principal.py"  
import modulos.modulo1.file_de_modulo1
import modulos.modulo2.file_de_modulo2 as SegundoModulo
import modulos.modulo3.file_de_modulo3_que_importa_modulo4 as Modulo3
import filename1
import filename2 as Filename2RenomeadoComAlias


def executar():
    print("************************************************")
    print("**  File: script_principal.py  **")
    filename1.executar()
    Filename2RenomeadoComAlias.executar()
    modulos.modulo1.file_de_modulo1.executar()
    SegundoModulo.executar()
    Modulo3.executar()
    print("**  Fim de script_principal.py  **")
    print("************************************************")


if (__name__ == "__main__"):
    print("************************************************")
    print("script_principal.py chamado diretamente")
    executar()  

```  
  
```python title="Source file of a Python module: ./add_modulos_path.py"  
def update_path_to_unix(windows_path):
    windows_path = windows_path.replace(
        'C:\\libs\\python\\src\\',
        '/Users/eduardosantosleal/src/'
        )
    windows_path = windows_path.replace('\\', '/')
    return windows_path


def dir_modulos_add():
    import sys
    t_dir_src_add = '''C:\\libs\\python\\src\\github.
                        com\\tcarvi\\pythonTutorials\\myvenv\\modulos'''
    if sys.platform.startswith('linux') or sys.platform.startswith('darwin'):
        t_dir_src_add = update_path_to_unix(t_dir_src_add)
    if t_dir_src_add not in sys.path:
        sys.path.append(t_dir_src_add)


if __name__ == "__main__":
    dir_modulos_add()  
```  

```python title="Source file of a Python script: ./filename1.py"  
def executar():
    print("************************************************")
    print("**  File: filename1.py         **")
    print("**  Fim de filename1.py        **")
    print("************************************************")


if (__name__ == "__main__"):
    print("filename1.py chamado para execução diretamente")
    executar()

```  

```python title="Source file of a Python script: ./filename2.py"  
def executar():
    print("************************************************")
    print("**  File: filename2.py         **")
    print("**  Fim de filename2.py        **")
    print("************************************************")


if (__name__ == "__main__"):
    print("filename2.py chamado para execução diretamente")
    executar()

```  

```python title="Source file of a Python module: ./modulos/modulo1/file_de_modulo1.py"  
def executar():
    print("************************************************")
    print("**  File: module1/file_de_module1.py         **")
    print("**  Fim de module1/file_de_module1.py        **")
    print("************************************************")


if (__name__ == "__main__"):
    print("module1/file_de_module1.py chamado para execução diretamente")
    executar()

```

```python title="Source file of a Python module: ./modulos/modulo2/file_de_modulo2.py"  
def executar():
    print("************************************************")
    print("**  File: module2/file_de_module2.py         **")
    print("**  Fim de module2/file_de_module2.py        **")
    print("************************************************")


if (__name__ == "__main__"):
    print("module2/file_de_module2.py chamado para execução diretamente")
    executar()

```  

```python title="Source file of a Python module: ./modulos/modulo3/file_de_modulo3_que_importa_modulo4.py"  
import modulos.modulo4.file_de_modulo4


def executar():
    print("************************************************")
    print("**  File: module3/file_de_modulo3_que_importa_modulo4.py         **")
    print("**  Executando módulo4 dentro de módulo 3    **")
    modulos.modulo4.file_de_modulo4.executar()
    print("**  Término de módulo4 dentro de módulo 3    **")
    print("**  Fim de module3/file_de_modulo3_que_importa_modulo4.py        **")
    print("************************************************")


if (__name__ == "__main__"):
    print("module3/file_de_modulo3_que_importa_modulo4.py chamado diretamente")
    executar()

```  

```python title="Source file of a Python module: ./modulos/modulo4/file_de_modulo4.py"  
def executar():
    print("************************************************")
    print("**  File: module4/file_de_module4.py         **")
    print("**  Fim de module4/file_de_module4.py        **")
    print("************************************************")


if (__name__ == "__main__"):
    print("module4/file_de_module4.py chamado diretamente")
    executar()

```  
