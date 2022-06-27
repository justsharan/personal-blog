# personal-blog

This is just the source code for my [personal website](https://justsharan.xyz), which is written in Next.js.

My blog pages are written in markdown and stored in the [`posts/`](posts/) folder. Each blog post's content and front matter are pulled in with `getStaticProps()`, and all the existing pages are determined with `getStaticPaths()` so that Next.js's SSG can pre-render them at build time.

## Usage

I've made this code public for learning purposes only, so it's not the most self-hostable site. If you'd like to run it yourself, you'll need to do the following:

1. Clone the repository to your computer.
2. Add any blog posts to the [`posts/`](posts/) directory.
3. Modify the homepage at [`pages/index.tsx`](pages/index.tsx) to your liking (same with the contact details at [`components/Layout.tsx`](components/Layout.tsx)).
4. Run `npm run build` and host it on your server or with the static hosting service of your choice (the custom [`deploy.sh`](/deploy.sh) script is intended for my server).
