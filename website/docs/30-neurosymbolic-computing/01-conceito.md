# Posicionamento da IA Neurosimbólica
- Neurosymbolic Computing mostra-se como uma evolução natural do campo de IA, respondendo críticas por **confiança** e **auditoria** dos sistemas de IA baseados em redes neurais.
- O processamento Neurosimbólico defende que deve-se usar símbolos e lógica para resolver os limites técnicos da Deep Learning (*brittleness* e falta de "entendimento lógico"). A limitação de *brittleness* indica que os modelos neurais LLM podem falhar de forma inesperada e perigosa, devido **variações e incertezas presentes nos dados do mundo real**. Já o problema do entendimento representa a limitação lógica de não perceber, por estatísticas da sequência de tokens, a **lógica de possíveis argumentos ou etapas complexas**.
- Há atualmente, no âmbito acadêmico, debate paradigmático entre as escolhas por:
    - Representações Distribuídas Neurais
        - vs
    - Representações Localistas Simbólicas

## Artigo de Arthur D'Ávila Garcez, Neuro-simbolic AI: The 3rd Wave
> Artur d’Avila Garcez and Luís C. Lamb  
> City, University of London, UK  
> a.garcez@city.ac.uk  
> Federal University of Rio Grande do Sul, Brazil  
> luislamb@acm.org  
> December, 2020  

- Defende que a melhor forma de avançar os sistemas de IA não é com este debate paradigmático, mas pensando na **forma como o conhecimento deve ser representado para o ato de aprender algo e para o ato de raciocinar sobre algo**.

- Com base no artigo "Neurosymbolic AI: The 3rd Wave" e no estado da arte sobre processamento neurosimbólico:  

### 📜 Princípios Fundamentais do Processamento Neurosimbólico  

| | Descrição e Objetivos Principais | Exemplos / Características |
| :--- | :--- | :--- |
| 1. **Integração Híbrida** | Neuronal e simbólico não são apenas conectados, mas se **potencializam**. O sistema usa o melhor de cada um destes designs para tarefas específicas. | Usa redes neurais para percepção (visão, linguagem) e lógica para **raciocínio** e **verificação/auditoria** . |
| 2. **Fundamentação de Símbolos (Symbol Grounding)** | Símbolos abstratos (ex: "cadeira") devem **emergir e ser ancorados** em dados do mundo real (imagens, sensações). | Evita "**símbolos vazios**" **sem conexão semântica com o mundo real**. |
| 3. **Composicionalidade e Generalização no Entendimento dos Símbolos** | O sistema deve poder **combinar conceitos aprendidos** para entender e gerar novas situações não vistas durante o treinamento. (**possibilidade** de flexibilidade da validação lógica) | Entender "empurrar uma cadeira" ao **conhecer** "empurrar" e "cadeira". **O que significa, conforme processamento neurosimbólico, entender "empurrar uma cadeira"?** |
| 4. **Explicabilidade por Design** | O raciocínio deve ser **transparente e rastreável**. Decisões podem ser explicadas tanto em termos de dados estatísticos quanto de regras lógicas. **A auditoria mais formal só pode ocorrer a partir da definição humana e sendo codificada em regras lógicas.** | Fornecer cadeias de inferência (ex: "Classifiquei como fraude PORQUE a regra X foi violada"). |

### 🛑 Desafios Principais do Processamento Neurosimbólico 

| | Descrição e Objetivos Principais | Exemplos / Características |
| :--- | :--- | :--- |
| 1. **Barreira Representacional** | Conciliar **representações distribuídas** (neurais, sub-simbólicas) com **representações localistas** (simbólicas, lógicas) em uma arquitetura **coesa** é complexo. **Como codificar tal conciliação/transformação?** | **Como um vetor neural se torna um símbolo discreto para o módulo lógico manipular?** Como as diferentes frameworks atuais do mercado codificam esta conversão? Com filtros sobre os tokens e embeddings pré-processados, no fluxo vetorial da rede neural? **Como se codifica este processamento?** |
| 2. **Escalabilidade do Conhecimento** | Criar e manter **bases de conhecimento simbólico** grandes e consistentes é trabalhoso e difícil de automatizar totalmente. **Como verificar as regras lógicas treinadas automaticamente? E como criar novas regras lógicas, tanto automaticamente quando por codificação humana?** | Este é o "***bottleneck*** **do conhecimento**" que limitou a IA simbólica clássica. Com a maior facilidade da IA Generativa, tal problema de codificação e de design pode ser resolvido? Pode-se criar uma base de conhecimento simbólico a partir dos LLMs atuais? |
| 3. **Aprendizado Integrado de Fim a Fim** | Projetar modelos onde os componentes neural e simbólico **aprendam juntos** de forma estável, em vez de serem apenas encaixados. **Como manter o sistema auditável, mesmo com este aprendizado paralelo e acoplado?** Qual o melhor design para um sistema de IA auditável, com 100% de confiabilidade?| O gradiente da rede neural precisa "fluir" através do módulo lógico, o que é não trivial. **Um sistema de processamento simbólico que processa todo o fluxo do modelo LLM é possível?** |
| 4. **Avaliação e Benchmarking** | Falta de **métricas e datasets padronizados** para medir o progresso. Como medir a precisão e os ganhos empresariais devido raciocínio e explicabilidade? | Como comparar objetivamente sistemas com arquiteturas neuro-simbólicas radicalmente diferentes? **Há padrões/frameworks para o processamento neurosimbólico?** |


### 🚀 Direções Futuras (Roadmap) do Processamento Neurosimbólico 
| | Descrição e Objetivos Principais | Exemplos / Características |
| :--- | :--- | :--- |
| 1. **Arquiteturas Modulares e Dinâmicas** | Sistemas onde **módulos especializados** (neurais para tarefas, e simbólicos para raciocínio) são ativados dinamicamente conforme a necessidade. **Como codificar o filtro? Com o filtro de assuntos e com geração de botões interativos? Ou com perguntas que funcionam como os botões do atuais agentes de IA, que autorizam a execução de trabalhos?** | Inspirado na conceituação dos padrões psicológicos do "Sistema 1" e do "Sistema 2" do cérebro humano (conforme psicólogo Kahneman). Pode ocorrer execução isolada ou integrada, entre estes dois estados mentais. O estado 1 vincula-se com o design neural de um sistema de IA, e o estado 2 vincula-se com o design simbólico de um sistema de IA. A Unificação entre estes 2 Estados ocorre com a nomenclarura "***System 1 & 2***". Neste processamento integrado, executa-se o **processamento lento neurosimbólico 2 sobre os símbolos gerados pelo sistema rápido neural 1.** O que se debate aqui é como modularizar e como integrar estes dois processamentos. |
| 2. **Raciocínio Probabilístico e Senso Comum** | Integrar **lógica com incerteza** para lidar com conhecimento do mundo real, que é muitas vezes incompleto ou aproximado. | Combinar redes bayesianas com representações simbólicas. (Sistema de ia neurosimbólico deve ser flexível para configurar o nível e inferência aceitável, para a auditoria. Como codificar este "***Reasoning Engine***?") É um equívoco controlar completamente a definição de todos os possíveis **símbolos** e o **processamento lógico** sobre todos estes símbolos. O que se deve fazer é controlar a inferência aceitável sobre regras lógicas, mediante a escolha da probabilidade aceitável para os símbolos e para os predicados lógicos. O sistema deve permitir este controle humano. E tudo deve ser exposto na camada de auditoria. |
| 3. **Aprendizado com Poucos Dados e Generalização** | Usar **conhecimento simbólico como guia ou restrição** para o aprendizado neural, reduzindo a necessidade de enormes volumes de dados. | Indução de regras a partir de poucos exemplos ("few-shot learning") (não entendi ainda, onde tal funcionalidade se insere no design da integração System 1 & 2...). |
| 4. **Aplicações em Domínios Críticos** | Foco em áreas onde **explicabilidade, segurança e confiança** são obrigatórias: diagnóstico médico, controle de sistemas autônomos, finanças, cibersegurança. | Onde os sistemas de "caixa preta" puramente neurais são inaceitáveis pois não conseguem gerar produtos confiáveis e auditáveis para a empresa. |

### Estado da Arte do Processamento Neurosimbólico (fluxo com Sistema 1 & 2)

#### Neural-as-Predicate
- Estado da Arte: **Padrão** ***Neural-as-Predicate***
    - Exemplos: DeepProbLog, NeurASP e DeepStochLog
    - ***DeepProbLog***
        - **ProbLog** é uma **extensão probabilística** para o processamento lógico da linguagem Prolog.
        - Já **DeepProbLog** é uma **extensão do ProbLog** em que predicados probabilisticos são extraídos do processamento feito pelas redes neurais.
        - Processamento do Sistema Neural:
            - Gera predicados probabilisticos
            - A probalidade dos predicados é definida pela rede neural.
            - Então, o output desta etapa é: predicados lógicos com indicação de suas probabilidades.
        - Processamento do Sistema Simbólico:
            - Processa os predicados com processamento de lógica probabilística.
        - **Como codificar a integração Sistema 1 & 2?**
            - Você codifica regras lógicas probabilísticas para processar predicados extraídos das redes neurais.
            - A codificação do teinamento é mais simples, pois o erro é calculado no nível lógico.
                - O sistema treina a rede neural apenas indiretamente, usando o erro calculado no nível lógico-probabilístico.
                - O sistema apenas aprende o que é útil para satisfazer regras lógicas.
            - Conhecimento necessário do codificador:
                - Regras Lógicas
                - Cálculos de probabilidade
                - Deep Learning
        - Limitações:
            - Inferência pode ser computacionalmente pesada
            - Escalabilidade ainda é um desafio
        - Casos de uso atuais:
            - neuro-symbolic reasoning
            - sistemas híbridos explicáveis
        - Implementação em Python
        - Integração com PyTorch
        - Usa ProbLog, PySDD e SWI-Prolog
        - Código-fonte: ML-KUEeuven/deepproblog

#### Logic-as-Constraint
- Estado da Arte: **Padrão** ***Logic-as-Loss or Logic-as-Constraint***
    - Exemplos: LTN, Semantic Loss, DL2 e SBR.
    - **LTN** (***Logic Tensor Networks***)
        - LTN reinterpreta o processamento da lógica de primeira ordem:
            - Constante da Lógica -> vetores (embeddings)
            - Predicados da Lógica -> Funções Neurais
            - Fórmulas da Lógica -> Funcões Contínuas [0,1]
            - Valor booleano da Lógica -> Grau de Satisfação
        - Usa lógica fuzzy diferenciável:
            - operador AND -> min(a,b)
            - operador OR -> max(a,b)
            - operador NOT -> 1-a
            - operador IMPLIES -> 1-a + b
        - Em resumo, o processamneto LTN é bastante complexo e requer meses de estudo para entender a forma como transforma o processamento lógico de primeira ordem para o processamento de funções (lógica fuzzy diferenciável).
        - **Como codificar a integração Sistema 1 & 2?**
            - Integração entre sistema 1 e 2 com processamento diferenciável.
            - Uso de funções de frameworks que executam o processamento LTN.
#### ACT-R
- ACT-R
    - Integração entre sistema 1 e 2 com arquitetura cognitiva
    - Tratamento simbólico
    - **Como codificar esta integração?**

#### SOAR
- Soar
    - Integração entre sistema 1 e 2 com arquitetura cognitiva
    - Tratamento simbólico
    - **Como codificar esta integração?** 
- **Qual a diferença entre a codificação do fluxo ACT-R e do fluxo Soar?**
    - Posso inovar a integração ACT-R e Soar com a computação qunântica (IBM), para maior escalabilidade, velocidade?

#### Padrões do Mercado
| **Padrão** | **É Explicitamente Simbólico** | **Faz Processamento Diferenciável** | **Faz Processamento Probabilístico** | **Status Atual** |
|---|:---:|:---:|:---:|:---:|
| Neural-as_Predicate | ![](/img/icons/check.svg "Sim") | ![](/img/icons/check.svg "Sim") | ![](/img/icons/check.svg "Sim — valores contínuos / fuzzy") | ![](/img/icons/status-emerging.svg "Emergente") |
| Logic-as-Loss | ![](/img/icons/check.svg "Sim — lógica expressa como restrição") | ![](/img/icons/check.svg "Sim — perda diferenciável") | ![](/img/icons/partial.svg "Parcial — pode usar soft truth / fuzzy") | ![](/img/icons/status-emerging.svg "Uso em pesquisa e algumas aplicações") |
| Symbolic-Prior | ![](/img/icons/check.svg "Sim — conhecimento simbólico como prior") | ![](/img/icons/partial.svg "Parcial — depende da implementação (soft priors vs rígido)") | ![](/img/icons/partial.svg "Parcial — priors podem ser probabilísticos") | ![](/img/icons/status-adopted.svg "Adotado / usado em aplicações") |
| Neural Reasoners | ![](/img/icons/cross.svg "Não necessariamente — geralmente subsimbólico") | ![](/img/icons/check.svg "Sim") | ![](/img/icons/partial.svg "Parcial — saída probabilística possível") | ![](/img/icons/status-emerging.svg "Amplo uso em pesquisa e aplicações") |
| Program Induction | ![](/img/icons/check.svg "Sim — programas como estruturas simbólicas") | ![](/img/icons/partial.svg "Parcial — interpretadores diferenciáveis existem") | ![](/img/icons/partial.svg "Parcial — pode ser probabilístico") | ![](/img/icons/status-emerging.svg "Pesquisa ativa / casos de uso específicos") |
| LLM + Símbolos | ![](/img/icons/check.svg "Sim — integração com módulos simbólicos") | ![](/img/icons/partial.svg "Parcial — LLM é diferenciável; módulos simbólicos podem não ser") | ![](/img/icons/check.svg "Sim — LLMs são modelos probabilísticos") | ![](/img/icons/status-adopted.svg "Muito adotado / prática corrente") |

> **Nota:** Ícones: ![](/img/icons/check.svg) = Sim, ![](/img/icons/cross.svg) = Não, ![](/img/icons/partial.svg) = Parcial/Depende. Os **Status** foram avaliados com base em uso atual na pesquisa e em aplicações práticas.

## Raciocínio Lógico
- A IA simbólica usa lógica matemática e teoria dos conjuntos para representar conhecimento.
- Exemplifica com o conceito de que, se "X é um gato" e "gatos são mamíferos", podemos concluir logicamente que "X é um mamífero".

## Ontologias e Grafos de Conhecimento
### Knowledge Graphs
- São a manifestação moderna da IA simbólica.
- Eles conectam entidades do mundo real (nós) através de relacionamentos (arestas).
- Grafos de Conhecimento fornecem fatos curados e auditáveis

### Ontologias
- Funcionam como o "modelo" ou esquema para o grafo, d  efinindo conceitos, propriedades e restrições lógicas.

### Semântica
- A semântica trata do significado e de como o software interpreta os dados.
- Formatos de dados como JSON não são "fáceis de entender" por si só, demonstrando que, sem um contexto definido (grounding), as máquinas não compreendem o significado real dos campos.

### Explicabilidade
- O raciocínio simbólico permite rastrear exatamente por que uma resposta foi dada, algo que os LLMs (caixas-pretas) não conseguem fazer facilmente.

### Eficiência Energética:
- Para consultas fractuais bem estruturadas, grafos de conhecimento tendem a ser muito mais eficientes do que inferências via LLM.

### 💡 Síntese: O Caminho para a Próxima Onda em IA
A visão apresentada no artigo é que a **IA Neurosimbólica não é apenas uma técnica a mais, mas uma mudança de paradigma**. Seus princípios buscam restaurar a **semântica, a composicionalidade e a explicabilidade** no coração da IA. Os desafios são profundos, pois envolvem reconciliar duas linguagens computacionais fundamentalmente diferentes. As direções futuras apontam para sistemas mais **modulares, dinâmicos e focados em raciocínio**, que transcendam o paradigma atual de "aprendizado estatístico de correlações em dados massivos".

## Futuro: Sistemas Híbridos (Neuro-Simbólicos)
- Dual Process Models: 
    - Ele cita a ideia de "Raciocínio Rápido e Lento" de Daniel Kahneman.
    - O LLM seria o processo rápido (intuitivo, mas propenso a erros), enquanto o componente simbólico seria o processo lento (deliberativo e confiável).
- Arquitetura Híbrida:
    - O futuro aponta para o uso de LLMs para interface de linguagem natural (traduzindo perguntas em queries), mas utilizando Grafos de Conhecimento para fornecer as respostas factuais.
- Ontologias e planejamento são essenciais para criar sistemas de IA que sejam confiáveis, eficientes e explicáveis.