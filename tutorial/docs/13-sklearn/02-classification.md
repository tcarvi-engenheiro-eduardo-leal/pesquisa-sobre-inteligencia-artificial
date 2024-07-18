# Classification

## Etapas
- **Descrição dos dados** dos items que serão classificados:
    - Item do tipo0, com classe "0"
    - Item do tipo1, com classe "1"
    - Primeira Feature, definida como "Feature1"
    - Segunda Feature, definida como "Feature2"
    - Terceira Feature, definida como "Feature3"
- **Modelo de Features dos Items** que serão classificados:
    - Item=Container_de_features, no formato de list.
    - Cada Item possui 3 features [Feature1, Feature2,  Feature3].
        - Feature1 indica a existência ou não da feature 1.
        - Feature2 indica a existência ou não da feature 2.
        - Feature3 indica a existência ou não da feature 3.
    - Cada feature pode ter valor 0 ou 1. 
        - Valor 0 indica que o item **NÃO POSSUI** a feature
        - Valor 1 indica que o item **POSSUI** a feature
    - Definição do modelo de feature dos item:
        - `modelo_de_features_do_item = [feature1, feature2, feature3]`
- **Modelo de Classes dos Items** que serão classificados:
    - Cada Item pode ser de 2 tipos:
        - Do tipo_p, com classe1 e valor 0
        - Do tipo_q, com classe2 e valor 1
    - Definição do modelo da classe dos items:
        - `modelo_das_classes_do_item = [ valor_da_classe ]`
- **Dados reais das features dos items, para treino**, seguindo o modelo definido anteriormente.
    - Código python:
    ```python
    item_1 = [1, 1, 1]
    item_2 = [0, 0, 1]
    item_3 = [0, 1, 0]
    item_4 = [1, 1, 1]
    item_5 = [0, 0, 1]
    item_6 = [0, 1, 0]
    # 6 items com 3 features cada.
    train_x = [item_1, item_2, item_3, item_4, item_5, item_6]
    ```
- **Dados reais das classes dos items, para treino**, seguindo o modelo definido anteriormente.
    - Código python:
    ```python
    # 6 items com 1 classe cada, indicando que item é do tipo_p ou do tipo_q
    train_y = [0, 0, 0, 1, 1, 1]
    ```
- **Treinamento com dados reais**
    - Código python:
    ```python
    # Processamento matemático: f(X) = Y
    train_x = [item_1, item_2, item_3, item_4, item_5, item_6]
    train_y = [0, 0, 0, 1, 1, 1]
    from sklearn.svm import LinearSVC
    modelo_estimador = LinearSVC()
    modelo_estimador.fit(train_x, train_y)
    ```  
    - Sistema de "Machine Learning" passa a ter conhecimento dos dados usados no treino.
    - Estimador (*estimator*) do "Machine Learning" já pode tentar classificar.
- **Testes para vefificar qualidade das estimativas**:
    - Definir novo conjunto de dados reais e identificar como "resultados esperados".
    - Código python:
    ```python
    animal_misterisoA = [1, 1, 1] # Eu sei que o animal é tipoP mas não informo para aplicativo.
    animal_misterisoB = [1, 1, 0] # Eu sei que o animal é tipoQ mas não informo para aplicativo.
    animal_misterisoC = [0, 1, 1] # Eu sei que o animal é tipoQ mas não informo para aplicativo.
    ```  
    - Estimar com Algoritmos Estimadores do modelo sklearn
        - Código python:
        ```python
        # Processamento matemático: f(X) = previsões
        test_x = [animal_misterisoA, animal_misterisoB, animal_misterisoC]
        test_y = [0, 1, 1] # Resultados Esperados # Labels reais
        # Gera Previsões
        previsoes = modelo_estimador.predict(test_x)
        # Sistema retorna previsoes como um NumpyArray = array([0, 1, 0]), nos informando que:
        # animal_misterisoA é do tipo P
        # animal_misterisoB é do tipo Q
        # animal_misterisoC é do tipo P
        ```  
    - Verificar acurácia da estimativa
        - Código python:
        ```python
        # Identificação de taxa de acerto sem biblioteca accuracy_score
        verificacao = (test_y == previsoes)
        # verificacao retorna array([True, True, False])
        # Sistema acertou na primeira e segunda estimativa. Mas errou na terceira.
        #Taxa de acerto
        corretos = verificacao.sum() # Número que quantidades de True
        taxa_de_acerto = corretos / len(verificacao)
        print("Taxa de acerto: %.2f" %(taxa_de_acerto * 100))

        ## Identificação de taxa de acerto com biblioteca accuracy_score de sklearn.metrics
        from sklearn.metrics import accuracy_score
        taxa_de_acerto = accuracy_score(test_y, previsoes)
        print("Taxa de acerto: %.2f" %(taxa_de_acerto * 100))
        ```
- **Retreinamento com dados usados anteriormente nos testes**:
    - Treinar novamente com os novos dados dos "resultados esperados".
    - Se necessário, devido problema nos testes anteriores, aumentar a quantidade de dados do treino e retestar.
- **Otimizar o algoritmo de classificação**
    - Análise gráfica da dispersão de pontos da classificação.
- **Executar a classificação**
    - Você deve ter agora um sistema de inteligência artificial que usa estimadores da bibliioteca sklearn.
    - Pode-se também criar sistemas de inteligência artificial
        - com estimadores de outras bibliotecas do mercado, como:
            - PyTorch, 
            - TensorFlow ou 
            - TinyML
