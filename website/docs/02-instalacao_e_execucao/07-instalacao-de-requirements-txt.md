# Instalação de requirements.txt
- Liste bibliotecas instaladas no ambiente em execução.
```
pip list
```  
- Instale aplicativos na linha de comando com *pip*.
```
pip install lib-name
```  
```
pip install lib-name==3.2.1
```  
- Copie a lista de bibliotecas python instaladas no ambiente atual para arquivo requirements.txt, apagando conteúdo anterior.
```  
pip freeze > requirement.txt
```  
- Reinstale a qualquer momento as dependências listadas em requirements.txt.
```
pip install -r requeriments.txt
```  
