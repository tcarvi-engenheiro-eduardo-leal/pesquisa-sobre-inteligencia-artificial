# Install Python

### Instalação conforme site python.org
- https://www.python.org/downloads/
- Atenção: 
    - **Depois de ter o python na sua máquina, sempre opte por usar uma versão temporária do python em uma máquina virtual, pois você terá mais controle sobre este ambiente virtual. Instruções no tópico de "Python Virtual Environment".**

### Instalação para MAC

- Instalação de xcode-select  
```console
xcode-select --install
```
  
- Instalação de easy_install, se não se quiser usar Homebrew.
```console
sudo easy_install pip
```
  
- Instalação de Python/Pip, usando Homebrew.

```console
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
  
```console
(echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/eduardosantosleal/.zprofile
```
  
```console
eval "$(/opt/homebrew/bin/brew shellenv)"
```
  
```console
source ~/.zprofile
```
  
```console
brew update
```
  
```console
brew install python3.12
```  

### Upgrade de PIP, para caso de não usar homebrew

```console title="Para upgrade da versão atual do pip."
pip install --upgrade pip
```  
