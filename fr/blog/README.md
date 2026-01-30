# Section Blog

Ce répertoire contient la page de liste des articles de blog en français.

## Structure

- `index.html` - Page principale listant tous les articles de blog en français par ordre chronologique

## Ajouter de Nouveaux Articles

1. Créer un nouveau fichier dans `_posts/fr/` avec le format: `YYYY-MM-DD-titre-slug.md`
2. Ajouter le front matter avec les champs requis:
   ```yaml
   ---
   layout: post
   title: "Titre de Votre Article"
   date: YYYY-MM-DD HH:MM:SS -0800
   categories: [categorie1, categorie2]
   lang: fr
   ---
   ```
3. Écrire le contenu en Markdown
4. L'article apparaîtra automatiquement sur cette page

## Catégories

Les catégories disponibles sont définies dans `_data/categories.yml`:
- ai-systems
- identity
- knowledge-work
- career
- publishing
- repo-meta
- technology
- product

Les articles peuvent avoir plusieurs catégories.
