 1. Propósito
Este documento define a estrutura (schema) para todos os dados que o simulador de builds "Wicked Builder" irá utilizar. O design prioriza:
Flexibilidade: Para acomodar mudanças e adições do Acesso Antecipado.
Fonte Única de Verdade (Single Source of Truth): Cada pedaço de informação do jogo (ex: o dano base de uma espada) existe em apenas um lugar.
Performance: Estruturas que são fáceis e rápidas de consultar e manipular no front-end.