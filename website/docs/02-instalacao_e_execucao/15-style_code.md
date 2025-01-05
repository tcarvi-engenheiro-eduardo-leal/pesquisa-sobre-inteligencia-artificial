# Style code
### PEP8=pycodestyle Install:

```console title="Install pep8=pycodestyle"
pip install pycodestyle
```  
  
```console title="Upgrade PEP8=pycodestyle"
pip install --upgrade pycodestyle
```  

### PEP8=pycodestyle Execution:
```console title="PEP8=pycodestyle execution"
pycodestyle [filename].py
```  

- Python code should adhere to **PEP 8**, with the following clarifications:
    - Only use **four spaces for indentation**, no tabs.
    - Use **Unix-style end of line** (LF, aka '\n' character).
    - **Spaces around operators** (except for keyword arguments).
    - Use **CamelCase for classes and exception types**. 
        - Use **underscore_case for everything else**.
- pycodestyle automatically format your code using autopep8.
    - Use make format to format both C/C++ and Python code in the entire repository, or integrate it in your IDE.


