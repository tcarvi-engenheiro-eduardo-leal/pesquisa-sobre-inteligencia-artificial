# Design

> Chatbot neurosimbólico
> com processamento simbólico executado por computação quântica.

( em análise de cada comoponente ... )

## Design de **IA Agêntica Neuro-Simbólica**. 

### 1. Camada de Fluxo de Dados retornados por LLM (O Front-end Cognitivo)
- Partes:
    - Usuário
    - Aplicação Chatbot
    - Servidor para transporte de mensagens
    - LLM
- O chatbot deve se comunicar com LLM usando o seguinte prompt:
    - System_Prompt:
        - Tendo como base a comunicação do User_Prompt, defina:
            - Intent: intenção do Usuários
            - Action ou Actions solicitadas
            - Entidade Sujeita/Ativa de cada Action
            - Entidade Objeto/Passiva de cada Action
            - Circunstâncias de cada Action
    - User Prompt:
        - Envio de mensagens, com alguns filtros de servidor instalado localmente na Cloud.
- O LLM atua como um **Parser de Intenção**.
- Descrição do compomente:
    - Sistema neural rápido S1, com rota, fallback e políticas
    - Sistema consulta conhecimento existente IA-RAG
    - Sistema propõe operadores plausíveis
    - Faz uso de Fluxo IA-RAG, filtros em servidores locais, interatividade do usuário.

### 2. Extração de Entidades a partir da comunicação com LLM (O Alinhador Semântico)
- Execução em Ambiente cloud.
- Este módulo pega a saída do LLM e a "limpa" usando a Ontologia como dicionário.
    - **Processo:** Se o LLM disse "quarto duzentos e dois", o extrator mapeia isso para o identificador único `room_202` definido na Ontologia.
- **Filtragem de Ruído:** Se o LLM mencionar algo que não existe na Ontologia (ex: "use o teletransporte"), o extrator ignora ou levanta um erro, pois não há mapeamento para esse conceito.

### 3. Ontologia Cadastrada (A "Constituição" do Sistema)
- Execução em computadores quânticos da IBM, usando qiskit 2.2.
- Há uma parte do **conhecimento que é estático e axiomático**.
    - **O que contém:** Hierarquias (Todo `Robô` é um `Atuador`), restrições (`VelocidadeMáxima` de um `Robô` em `CorredorHospitalar` = 1.0m/s) e topologia (mapa de salas e conexões).
- E há outra parte que representa descrições momentâneas.
    - **Estabilidade:** Ela não muda a menos que o desenvolvedor altere. Ela é a "âncora de realidade".
- é usado como padrão de referência para intenções, junto com regras que modificam a probabilidade do padrão ser uma intenção cadastrada. 

### 4. Processador de Mensagens Filtradas (Semantic Grounding)
- Execução em computadores quânticos da IBM, usando qiskit 2.2.
- Executado pela biblioteca DeepProbLog
- É o funil que garante que a intenção do LLM é **fisicamente e logicamente possível**, devido a sua probabiliade, diante dos padrões da ontologia.
    - **Verificação de Estado:** O Filtro consulta o estado atual (telemetria) do Executor.
    - "O médico pediu para levar o remédio, mas o braço robótico está ocupado?".
- **Rejeição Prematura:** Se a mensagem filtrada violar um axioma básico (ex: mover para uma zona proibida), a instrução é descartada antes mesmo de chegar ao raciocínio complexo.

### 5. Reasoning Engine da Itenção (O Juiz Lógico de DeepProbLog)
- Execução em computadores quânticos da IBM, usando qiskit 2.2.
- Fornecido por DeepProbLog.

### 6. Auditoria sobre o Reasoning Engine da Intenção (auditoria de DeepProblLg)
- Execução em Ambiente cloud.
- Fornecido por DeepProbLog.

### 7. Reasoning Engine da Execução (O Juiz Lógico da Aplicação)
- Execução em computadores quânticos da IBM, usando qiskit 2.2.
- Com as entidades limpas e a intenção validada, o Motor de Raciocínio (como um *SAT Solver* ou *Prolog Engine*) executa a inferência final decisora.

### 8. Auditoria sobre o Reasoning Engine da Execução
- Execução em Ambiente cloud.
- **Cadeia de Pensamento:** Ele não apenas executa; ele planeja. "Para chegar em `room_202`, devo atravessar `hallway_A`. A Ontologia diz que `hallway_A` está em manutenção. Conclusão: Rota alternativa necessária".
- **Determinismo:** Diferente do LLM, se você der a mesma entrada e o mesmo estado, o Reasoning Engine dará **sempre** a mesma saída. Tal output de auditoria estará na cloud da empresa.

### 9. Agente Executor de Comandos (A Ponte para o Mundo Real)
- Execução em Ambiente cloud.
- Divide-se em dois canais:
    - **Verbal:** O LLM recebe de volta o plano do Reasoning Engine e o traduz em uma resposta amigável para o usuário ("Estou indo por um caminho alternativo pois o corredor principal está fechado").
    - **Físico:** Comandos de baixo nível (ROS, APIs de hardware) que movem motores e sensores.

### 10. Treinamento do DeepProbLog
- Execução em Ambiente cloud.
- Treinamento para indicação de probabilidades.

### 11. Treinamento para a recusa de Decisões do Reasoning Engine e para a execução do agente
- Execução em computadores quânticos da IBM, usando qiskit 2.2.
- Treinamento para replicação da recusa de execuções
- Treinamento sobre os passos de execução do agente que recebe ordens do Reasoning Engine.

### 12. Treinamento do Agente Executor
- Na cloud da Empresa
- Treinamento dos passos a serem executados pelo agente.

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