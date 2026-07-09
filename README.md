# Personal Portfolio

A personal portfolio site built with React + Vite, styled after the popular dark navy/green
developer-portfolio look (same layout style, color palette, and GitHub Pages deploy setup as
gazijarin.com). Includes a fixed nav, animated hero, about section, experience tabs, a projects
carousel, contact section, and social sidebar.

## 1. Install and run locally

```bash
npm install
npm run dev
```

Open the printed localhost URL to preview the site.

## 2. Make it yours

Almost everything you need to personalize is in **`src/data/content.js`**: your name, tagline,
bio, skills, work experience, projects, and social links. Edit that one file first — the whole
site pulls from it. Swap in your own project descriptions and links to fill out the carousel in
the "Things I've Built" section.

Colors and fonts live in `src/index.css` (CSS variables at the top) and `src/theme.js` (MUI theme)
if you want to adjust the look further.

## 3. Deploy to GitHub Pages

1. Create a new GitHub repo and push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
2. In `vite.config.js`, set `base: '/YOUR_REPO_NAME/'` (use `base: '/'` instead if your repo is
   named `YOUR_USERNAME.github.io`).
3. In `package.json`, update `homepage` to your real GitHub Pages URL.
4. On GitHub: go to the repo's **Settings → Pages**, and under "Build and deployment" set
   **Source** to **GitHub Actions**.
5. Push to `main` — the included `.github/workflows/deploy.yml` will automatically build the
   site and publish it to GitHub Pages on every push. You can also trigger it manually from the
   **Actions** tab.
6. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

## Project structure

```
src/
  data/content.js     <- edit this for your own info
  components/         <- Navbar, Hero, About, Experience, Projects, Carousel, Contact, Footer
  theme.js             <- MUI dark theme
  index.css            <- color variables + global styles
.github/workflows/deploy.yml   <- GitHub Pages CI/CD
```
