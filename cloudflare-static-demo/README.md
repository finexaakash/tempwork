# BrightSite — Cloudflare Pages demo

A small static website for testing a GitHub-to-Cloudflare Pages deployment and custom domain.

## Files
- `index.html` — page content
- `styles.css` — responsive styling
- `script.js` — footer year and demo-only contact form behavior
- `_headers` — basic response headers

## Deploy from GitHub to Cloudflare Pages
1. Create a GitHub repository, for example `cloudflare-static-demo`.
2. Upload these files to the repository root (not inside an extra nested folder).
3. In Cloudflare, open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
4. Select the repository. For a plain static HTML site, use no build command and set the build output directory to `/` if the dashboard accepts it; otherwise use the repository root as the output directory as instructed by the current setup UI.
5. Deploy and open the generated `*.pages.dev` address.

## Add a custom domain
1. Open your Pages project → **Custom domains** → **Set up a domain**.
2. Enter the domain you own, such as `www.example.com`, and follow the exact DNS instructions shown in Cloudflare.
3. If using a root/apex domain (for example `example.com`), Cloudflare generally requires that domain to be added as a zone to your Cloudflare account and its nameservers configured at your registrar. A subdomain such as `www.example.com` has different DNS setup options.
4. Wait for DNS verification and certificate provisioning, then test the domain with HTTPS.

## Important
- The contact form is only a front-end demo. It does **not** send email. Connect it to FormSubmit, Web3Forms, or a backend after deployment.
- You need to own/register a custom domain to use your own `.com` / `.in` name. Cloudflare Pages gives you a free `*.pages.dev` address.
