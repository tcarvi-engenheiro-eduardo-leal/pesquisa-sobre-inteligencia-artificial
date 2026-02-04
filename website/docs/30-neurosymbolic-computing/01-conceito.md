# Posicionamento da IA Neurosimbólica
- Neurosymbolic Computing mostra-se como uma evolução natural do campo de IA, respondendo críticas por confiança e auditoria dos sistemas de IA baseados em redes neurais.
- O processamento Neurosimbólico defende que deve-se usar símbolos e lógica para resolver os limites técnicos da Deep Learning (*brittleness* e falta de "entendimento lógico"). A limitação de *brittleness* indica que os modelos neurais LLM podem falhar de forma inesperada e perigosa, devido variações e incertezas presentes nos dados do mundo real. Já o problema do entendimento representa o problema de lógica não percebida por probabilidade de sequências de tokens.
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

- Defende que a melhor forma de pensar o avanço dos sistemas de IA não é com este debate paradigmático, mas pensando na forma como o conhecimento deve ser representado para que se aprenda algo e para que se raciocine sobre algo.

- Com base no artigo "Neurosymbolic AI: The 3rd Wave" e no estado da arte sobre processamento neurosimbólico:  

### 📜 Princípios Fundamentais do Processamento Neurosimbólico  

| | Descrição e Objetivos Principais | Exemplos / Características |
| :--- | :--- | :--- |
| 1. **Integração Híbrida & Simbiótica** | Neuronal e simbólico não são apenas conectados, mas se **potencializam**. O sistema usa o melhor de cada paradigma para tarefas específicas. | Usa redes neurais para percepção (visão, linguagem) e lógica para **raciocínio** e **verificação/auditoria** . |
| 2. **Fundamentação de Símbolos (Symbol Grounding)** | Símbolos abstratos (ex: "cadeira") devem **emergir e ser ancorados** em dados do mundo real (imagens, sensações) processados pelas redes neurais. | Evita "**símbolos vazios**" **sem conexão semântica com o mundo real**. |
| 3. **Composicionalidade & Generalização** | O sistema deve poder **combinar conceitos aprendidos** para entender e gerar novas situações não vistas durante o treinamento. | Entender "empurrar uma cadeira" ao **conhecer** "empurrar" e "cadeira". **O que significa, conforme processamento neurosimbólico, entender "empurrar uma cadeira"?** |
| 4. **Explicabilidade por Design** | O raciocínio deve ser **transparente e rastreável**. Decisões podem ser explicadas tanto em termos de dados estatísticos quanto de regras lógicas. **A auditoria só pode ocorrer a partir da definição humana e codificável de regras lógicas.** | Fornecer cadeias de inferência (ex: "Classifiquei como fraude PORQUE a regra X foi violada"). |

### 🛑 Desafios Principais do Processamento Neurosimbólico 

| | Descrição e Objetivos Principais | Exemplos / Características |
| :--- | :--- | :--- |
| 1. **Barreira Representacional** | Conciliar **representações distribuídas** (neurais, sub-simbólicas) com **representações localistas** (simbólicas, lógicas) em uma arquitetura **coesa** é complexo. **Como codificar tal sistema?** | **Como um vetor neural se torna um símbolo discreto para o módulo lógico manipular?** Como as diferentes frameworks atuais do mercado codificam esta conversão? Com filtros sobre os tokens e embeddings pré-processados, no fluxo vetorial da rede neural? **Como se codifica este processamento?** |
| 2. **Escalabilidade do Conhecimento** | Criar e manter **bases de conhecimento simbólico** grandes e consistentes é trabalhoso e difícil de automatizar totalmente. **Como verificar as regras lógicas treinadas automaticamente? E como criar novas regras lógicas?** | O "bottleneck do conhecimento" que limitou a IA simbólica clássica. |
| 3. **Aprendizado Integrado de Fim a Fim** | Projetar modelos onde os componentes neural e simbólico **aprendam juntos** de forma estável, em vez de serem apenas encaixados. **Como manter o sistema auditável, mesmo com este aprendizado paralelo e acoplado?** | O gradiente da rede neural precisa "fluir" através do módulo lógico, o que é não trivial. **Um sistema de processamento simbólico que incorpora todo o modelo LLM é possível?** |
| 4. **Avaliação e Benchmarking** | Falta de **métricas e datasets padronizados** para medir o progresso além da precisão bruta, como ganhos em raciocínio e explicabilidade. | Como comparar objetivamente sistemas com arquiteturas neuro-simbólicas radicalmente diferentes? **Há padrões/frameworks para o processamento neurosimbólico?** |


### 🚀 Direções Futuras (Roadmap) do Processamento Neurosimbólico 
| | Descrição e Objetivos Principais | Exemplos / Características |
| :--- | :--- | :--- |
| 1. **Arquiteturas Modulares e Dinâmicas** | Sistemas onde **módulos especializados** (neurais para tarefas, simbólicos para raciocínio) são ativados dinamicamente conforme a necessidade. **Como codificar o filtro? Com o filtro de assuntos e com geração de botões interativos? Ou com perguntas que funcionam como os botões do atuais agentes de IA?** | Inspirado na unificação/integração entre os padrões psicológicos dos "Sistemas 1 e 2" do cérebro humano (Kahneman), com processamento computacional **Sistema 1 & 2**. Ou seja, executa-se o **processamento lento neurosimbólico 2 sobre os símbolos gerados pelo sistema rápido neural 1.** |
| 2. **Raciocínio Probabilístico e Senso Comum** | Integrar **lógica com incerteza** para lidar com conhecimento do mundo real, que é muitas vezes incompleto ou aproximado. | Combinar redes bayesianas com representações simbólicas. |
| 3. **Aprendizado com Poucos Dados e Generalização** | Usar **conhecimento simbólico como guia ou restrição** para o aprendizado neural, reduzindo a necessidade de enormes volumes de dados. | Indução de regras a partir de poucos exemplos ("few-shot learning"). |
| 4. **Aplicações em Domínios Críticos** | Foco em áreas onde **explicabilidade, segurança e confiança** são obrigatórias: diagnóstico médico, controle de sistemas autônomos, finanças, cibersegurança. | Onde os sistemas de "caixa preta" puramente neurais são inaceitáveis. |

### Estado da Arte Atual do Processamento Neurosimbólico (fluxo com Sistema 1 & 2)
- Arquiteturas Possíveis e já implementadas na atualidade:
    - DeepProbLog
        - Integração entre sistema 1 e 2 com processamentos probabilísticos
        - Lógica probabilística
        - **Como codificar esta integração?**
    - LTN (logic Tensor Networks)
        - Integração entre sistema 1 e 2 com processamento diferenciável
        - Lógica Fuzzy
        - **Como codificar esta integração?**
    - ACT-R
        - Integração entre sistema 1 e 2 com arquitetura cognitiva
        - Tratamento simbólico
        - **Como codificar esta integração?**
    - Soar
        - Integração entre sistema 1 e 2 com arquitetura cognitiva
        - Tratamento simbólico
        - **Como codificar esta integração?** 
    - **Qual a diferença entre a codificação do fluxo ACT-R e do fluxo Soar?**
        - Posso inovar a integração ACT-R e Soar com a computação qunântica (IBM), para maior escalabilidade, velocidade?

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
- Consultar um Grafo de Conhecimento é ordens de magnitude mais eficiente do que processar uma resposta via LLM.

### 💡 Síntese: O Caminho para a Próxima Onda em IA
A visão apresentada no artigo é que a **IA Neurosimbólica não é apenas uma técnica a mais, mas uma mudança de paradigma**. Seus princípios buscam restaurar a **semântica, a composicionalidade e a explicabilidade** no coração da IA. Os desafios são profundos, pois envolvem reconciliar duas linguagens computacionais fundamentalmente diferentes. As direções futuras apontam para sistemas mais **modulares, dinâmicos e focados em raciocínio**, que transcendam o paradigma atual de "aprendizado estatístico de correlações em dados massivos".

## Futuro: Sistemas Híbridos (Neuro-Simbólicos)
- Dual Process Models: 
    - Ele cita a ideia de "Raciocínio Rápido e Lento" de Daniel Kahneman.
    - O LLM seria o processo rápido (intuitivo, mas propenso a erros), enquanto o componente simbólico seria o processo lento (deliberativo e confiável).
- Arquitetura Híbrida:
    - O futuro aponta para o uso de LLMs para interface de linguagem natural (traduzindo perguntas em queries), mas utilizando Grafos de Conhecimento para fornecer as respostas factuais.
- Ontologias e planejamento são essenciais para criar sistemas de IA que sejam confiáveis, eficientes e explicáveis.