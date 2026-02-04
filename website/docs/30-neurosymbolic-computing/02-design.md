# Design

> Chatbot neurosimbólico com padrão SOAR  
> e com processamento simbólico executado por computação quântica.

( em análise de cada comoponente ... )
## Componentes
- Usuário fala no chatbot
    - Sistema neural rápido S1, com rota, fallback e políticas
    - Sistema Entende a intenção (uso de LLM específico ou de IBM AI Gateway)
    - Sistema consulta conhecimento existente IA-RAG
    - Sistema propõe operadores plausíveis
        - Depois de Fluxo IA-RAG, Filtros em servidores locais, interatividade e LLM
- Orquestrador SOAR-like
    - Processamento Quântico fornecido por IBM: https://qiskit.qotlabs.org/
    - Cria estado e candidatos
    - Se há conflito/múltiplas opções, sinaliza impasse
    - Padrão arquitetural: https://soar.eecs.umich.edu/soar_manual/02_TheSoarArchitecture/
    - Padrões de ferramenta:
        - LangGraph
            - Grafo de estados
        - Semantic Kernel
            - Process/Agent Framework
        - watsonx Orchestrate
            - Agentic Workflows + AgentOps
                - Para estado/operadores/impasses e observabilidade 
- Sistema de Processamento Simbólico (core lógico):
    - Quântico IBM (S2).
        - QUBO/QAOA/VQE em Qiskit Runtime Estimator
            - para seleção/ordenação de operadores (otimização multi critérios)
        - Resolve o impasse:
            - otimização/viabiliadde
                - QUBO/QAOA/MaxSAT/Grover
                - Qsit Runtime Primitives
                    - Mitigação de erros
        - Grover como checagem de viabilidade
            - Orçamento de portas
            - mitigação do Runtime
    - Operador simbólico é selecionado
        - Osquestrador loga razões/traços-lógicos
        - Se necessário, sub-objetos são criados.
- Camada simbólica (regras)
    - Registro de regras normativas e justificações no orquestrador
        - Pode usar motor SMT/CP
    - Camada decide quando abrir um impasse
    - Camada decide qual função-objetivo mandar ao QPU. (parte clássica de agentes, não vinculada na documentação da tecnologia IBM Quantum)
    - Geração de artefatos explicáveis para a auditoria
        - O por quê:
            - Estado
            - Restrições satisfeitas
            - Função objetivo
            - Metadados primitivos 

## Design de **IA Agêntica Neuro-Simbólica**. 
- Ela resolve o maior problema dos LLMs (a falta de confiabilidade e alucinação) ao usar o LLM apenas como um "motor de linguagem e tradução", enquanto a Ontologia serve como o "sistema de crenças e regras" inegociável.

### 1. Dados retornados por LLM (O Front-end Cognitivo)

Nesta arquitetura, o LLM não é o tomador de decisão final. Ele atua como um **Parser de Intenção**.

* **Papel:** Receber linguagem natural (ex: "Leve o remédio para o quarto 202, mas não corra nos corredores") e gerar um rascunho de intenção.
* **Risco:** O LLM pode esquecer de checar se o quarto 202 existe ou se o robô tem bateria. É aqui que os próximos módulos entram.

### 2. Ontologia Cadastrada (A "Constituição" do Sistema)

Este é o seu **conhecimento estático e axiomático**.

* **O que contém:** Hierarquias (Todo `Robô` é um `Atuador`), restrições (`VelocidadeMáxima` de um `Robô` em `CorredorHospitalar` = 1.0m/s) e topologia (mapa de salas e conexões).
* **Estabilidade:** Ela não muda a menos que o desenvolvedor altere. Ela é a "âncora de realidade".

### 3. Extração de Entidades (O Alinhador Semântico)

Este módulo pega a saída do LLM e a "limpa" usando a Ontologia como dicionário.

* **Processo:** Se o LLM disse "quarto duzentos e dois", o extrator mapeia isso para o identificador único `room_202` definido na Ontologia.
* **Filtragem de Ruído:** Se o LLM mencionar algo que não existe na Ontologia (ex: "use o teletransporte"), o extrator ignora ou levanta um erro, pois não há mapeamento para esse conceito.

### 4. Filtro de Mensagens (O Grounding)

Aqui ocorre o **Semantic Grounding**. É o funil que garante que a intenção do LLM é **fisicamente e logicamente possível**.

* **Verificação de Estado:** O Filtro consulta o estado atual (telemetria) do Executor. "O LLM pediu para levar o remédio, mas o braço robótico está ocupado?".
* **Rejeição Prematura:** Se a mensagem filtrada violar um axioma básico (ex: mover para uma zona proibida), a instrução é descartada antes mesmo de chegar ao raciocínio complexo.

### 5. Reasoning Engine (O Juiz Lógico)

Com as entidades limpas e a intenção validada, o Motor de Raciocínio (como um *SAT Solver* ou *Prolog Engine*) executa a inferência.

* **Cadeia de Pensamento:** Ele não apenas executa; ele planeja. "Para chegar em `room_202`, devo atravessar `hallway_A`. A Ontologia diz que `hallway_A` está em manutenção. Conclusão: Rota alternativa necessária".
* **Determinismo:** Diferente do LLM, se você der a mesma entrada e o mesmo estado, o Reasoning Engine dará **sempre** a mesma saída.

### 6. Executor de Comandos (A Ponte para o Mundo Real)

Divide-se em dois canais:

* **Verbal:** O LLM recebe de volta o plano do Reasoning Engine e o traduz em uma resposta amigável para o usuário ("Estou indo por um caminho alternativo pois o corredor principal está fechado").
* **Físico:** Comandos de baixo nível (ROS, APIs de hardware) que movem motores e sensores.

---

### Vantagens desse Design "Modular e Filtrado"

1. **Segurança Crítica:** O LLM nunca dá ordens diretas aos motores. Ele "pede" ao Reasoning Engine, que "autoriza" baseado na Ontologia.
2. **Explicabilidade (Audit Log):** Se o robô parar, você pode olhar o log e ver: "O LLM pediu ação X, mas o Filtro de Grounding bloqueou porque a Ontologia define o objeto Y como frágil".
3. **Independência de Modelo:** Você pode trocar o LLM (do GPT-4 para um modelo local como o Llama 3) sem precisar reescrever nenhuma regra de negócio ou lógica física, pois elas estão protegidas na Ontologia.

---

### Exemplo de Fluxo no seu Sistema:

* **Usuário:** "Pegue a caixa de metal e coloque na mesa."
* **LLM:** `{acao: "pegar", objeto: "caixa_metal", destino: "mesa"}`.
* **Extração/Grounding:** Consulta Ontologia -> `caixa_metal` pesa 50kg. O `Robô` tem capacidade de 20kg.
* **Reasoning Engine:** Detecta violação de restrição física da Ontologia.
* **Filtro/Feedback:** Retorna erro para o canal verbal.
* **Executor Verbal:** "Sinto muito, a caixa de metal é muito pesada para as minhas especificações atuais."

**Este design é exatamente o que se usa hoje em Robótica de Serviço avançada.**

Você já escolheu quais tecnologias vai usar para o **Reasoning Engine**? (Ex: Práticas como **Datalog**, **Prolog**, ou motores de grafos como **Neo4j/Cypher**?)