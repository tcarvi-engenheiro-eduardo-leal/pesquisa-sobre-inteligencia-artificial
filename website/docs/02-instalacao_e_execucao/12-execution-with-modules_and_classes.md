# Python Program Execution with modulos and Classes
- Estrutura de diretórios e arquivos:
    - ./script_principal.py
    - ./add_modulos_path.py
    - ./modulos/file_de_classes_em_diretorio_necessariamente_root_de_import.py
  
```python title="Source file of a Python program: ./script_principal.py"  
from modulos.file_de_classes_em_diretorio_necessariamente_root_de_import import ClasseEmDiretorioNecessariamenteRootDeImport


def executar():
    print("************************************************")
    print("**  File: script_principal.py  **")
    instancia1 = ClasseEmDiretorioNecessariamenteRootDeImport()
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

```python title="Source file of a Python script: ./modulos/file_de_classes_em_diretorio_de_import.py"  
class ClasseEmDiretorioDeImport:
    
    def __init__(self):
        print("ClasseEmDiretorioDeImport iniciada com constructor")

```  
