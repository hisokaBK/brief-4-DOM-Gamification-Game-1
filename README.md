# 🧩 Memory Game

Un jeu de mémoire interactif où l’utilisateur doit retrouver les paires de cartes identiques.  
Ce projet met en pratique la manipulation du DOM, la gestion d’événements et la logique conditionnelle.

---

## 🎯 Objectif
Cliquer sur des cartes pour les retourner et retrouver toutes les paires correspondantes avec le moins de tentatives possible.

---

## ⚙️ Fonctionnalités
- Génération dynamique de la grille via JavaScript.
- Retourner une carte par clic, maximum deux cartes visibles à la fois.
- Les paires correctes restent affichées, les autres se retournent après un délai.
- Système de score : nombre de tentatives et meilleur score sauvegardé (Local Storage).
- Animation ou message de victoire à la fin du jeu.
- Bouton pour rejouer facilement.

---

## 👤 Histoires utilisateur
- En tant qu’utilisateur, je souhaite cliquer sur des cartes pour les retourner et retrouver les paires.
- En tant qu’utilisateur, je veux que les cartes restent visibles lorsque j’ai trouvé une paire correcte.
- En tant qu’utilisateur, je veux connaître mon score final à la fin de la partie.
- En tant qu’utilisateur, je veux rejouer facilement après avoir terminé une partie.

---

## 📂 Structure des fichiers
- `index.html` → structure de la page.
- `style.css` → design, animations (flip, victoire).
- `fill.js` → logique du jeu, gestion des événements, score.

---

## 🚀 Installation
1. Cloner le projet :
   ```bash
   git clone https://github.com/your-username/memory-game.git
   cd memory-game
