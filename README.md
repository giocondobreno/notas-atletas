# 🏅 Cálculo de Média de Notas de Atletas  
![Banner do Projeto](https://raw.githubusercontent.com/matheusgithubpng/imagens-projetos/main/gym-banner.png)

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/JavaScript-ES2023-yellow?style=for-the-badge&logo=javascript"/>
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Contribuições-Bem--vindas-orange?style=for-the-badge"/>
</p>

---

## 📘 Sobre o Projeto

Este projeto implementa o cálculo oficial de médias utilizado em competições de ginástica artística.

Cada atleta recebe **cinco notas**, dadas por cinco jurados. Para calcular a média válida:

- Remove-se a **maior** nota  
- Remove-se a **menor** nota  
- Calcula-se a média das **três notas centrais**

A aplicação roda em **JavaScript puro**, sem dependências externas.

---

## 🧠 Lógica do Cálculo

A média é obtida com:

1. Ordenação das notas (`toSorted`)
2. Remoção da menor e da maior (`slice`)
3. Soma das notas válidas (`reduce`)
4. Cálculo da média final

![Ilustração das Notas](https://raw.githubusercontent.com/matheusgithubpng/imagens-projetos/main/gym-scores.png)

---

## 📁 Estrutura do Projeto

