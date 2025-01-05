# Análise do leadtime
- Análise de tendência central
    - Cálculo de médias
        - Média Aritmética Simples  
        ```python
        import pandas as pd
        import numpy as np
        data = {'valores': [10, 20, 30, 40, 50]}
        df = pd.DataFrame(data)
        media_aritmetica_simples = df['valores'].mean()
        print(media_aritmetica_simples)
        matriz_valores = np.array([[10, 20, 30, 40, 50]])
        media_aritmetica_simples = np.sum(matriz_valores)/len(matriz_valores)
        print(media_aritmetica_simples)
        ```  
        - Média Aritmética Ponderada   
        ```python
        import pandas as pd
        import numpy as np
        data = {'valores': [10, 20, 30, 40, 50], "pesos": [1, 2, 3, 4, 5]}
        df = pd.DataFrame(data)
        media_ponderada = ( df['valores'] * df['pesos'] ).sum() / df["pesos"].sum()
        print(media_ponderada)
        matriz_valores = np.array([[10, 20, 30, 40, 50]])
        matriz_pesos = np.array([[1, 2, 3, 4, 5]])
        matriz_valores_ponderados = matriz_valores * matriz_pesos
        media_ponderada = np.sum(matriz_valores_ponderados)/np.sum(matriz_pesos)
        print(media_ponderada)
        ```  
        - Média Geométrica  
        ```python
        import pandas as pd
        import numpy as np
        data = {'valores': [10, 20, 30, 40, 50]}
        df = pd.DataFrame(data)
        media_geometrica = df['valores'].prod() ** (1/len(df['valores']))
        print(media_geometrica)
        matriz_valores = np.array([[10, 20, 30, 40, 50]])
        media_geometrica = np.prod(matriz_valores) ** (1/len(matriz_valores)
        print(media_aritmetica_simples)
        ```  
    - Cálculo de medianas
        - Script:          
        ```python
        import pandas as pd
        import numpy as np
        data = {'valores': [10, 20, 30, 40, 50]}
        df = pd.DataFrame(data)
        mediana = df['valores'].median()
        print(mediana)
        matriz_valores = np.array([[10, 20, 30, 40, 50]])
        mediana = np.median(matriz_valores)
        print(mediana)
        ```  
    - Cálculo de modas
        - Script:          
        ```python
        import pandas as pd
        import numpy as np
        data = {'valores': [10, 20, 30, 40, 50]}
        df = pd.DataFrame(data)
        moda = df['valores'].mode()
        print(moda)
        from scipy import stats
        matriz_valores = np.array([[10, 20, 30, 40, 50]])
        moda = stats.mode(matriz_valores)
        print(moda)
        ```  
    - Objetivo da análise de tendência central: definir valor típico do leadtime
- Análise de dispersão
    - Desvio Médio Absoluto
        - Indica a média das distâncias entre cada valor e a média do conjunto de dados.
        - Indica o quão disperso os valores estão em relação à média.
        - Este tipo de cálculo de desvio é menos sensível a valores extremos do que a variância e o desvio padrão.
        - 1) Calcular a média aritmética simples dos valores no conjunto de dados
        - 2) Para cada valor, encontre a diferença absoluta entre o valor e a média encontrada para o conjunto.
        - 3) Calcule a média dessas diferenças absolutas.  
        ```python  
        import pandas as pd
        import numpy as np
        data = {'valores': [10, 20, 30, 40, 50]}
        df = pd.DataFrame(data)
        desvio_medio_absoluto = df['valores'].mad()
        print(desvio_medio_absoluto)
        matriz_valores = np.array([[10, 20, 30, 40, 50]])
        desvio_medio_absoluto = np.mean(np.abs(valores - media)) 
        print(desvio_medio_absoluto)
        ```  
    - Cálculo de variância
    - Cálculo de desvio-padrão
    ```python 
    import pandas as pd
    import numpy as np
    data = {'valores': [10, 20, 30, 40, 50]}
    df = pd.DataFrame(data)
    desvio_padrao = df['valores'].std()
    print(desvio_padrao)
    matriz_valores = np.array([[10, 20, 30, 40, 50]])
    desvio_padrao = np.std(df['valores'])
    print(desvio_padrao)
    ```  
    - Objetivo: qualificar a dispersão dos dados e entender o quão variáveis são os tempos de atendimento
- Análises gráficas
    - Plotagem do histograma
        - Objetivos: visualizar a distribuição dos leadtimes ao longo do tempo e as variações sazonais
        ```python
        import pandas as pd
        import numpy as np
        import matplotlib.pyplot as plt
        data = {'valores': [10, 20, 30, 40, 50]}
        df = pd.DataFrame(data)
        # Criando o histograma
        plt.hist(df['valores'], bins=5, color='skyblue', edgecolor='black')
        plt.xlabel('Valores')
        plt.ylabel('Frequência')
        plt.title('Histograma de Valores')
        plt.show()
        ```  
    140

