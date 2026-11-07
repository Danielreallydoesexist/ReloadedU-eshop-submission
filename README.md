# Community submission form

This is a static, MIT-licensed form for GitHub Pages. All submission records,
validation, and rate limiting are in the **Reloaded U** Supabase project. The
form has no account system and does not publish games. It forwards unverified
suggestions to the private operator review queue.

The deployed copy lives in
<https://github.com/Danielreallydoesexist/ReloadedU-eshop-submission>:
`index.html`, `style.css`, and `submit.js` are copied to that repository's
`site/` directory; `pages-workflow.yml` is copied to
`.github/workflows/pages.yml`. GitHub Pages is static hosting only. No game
packages or Supabase secret keys are stored there.

To review a submission, an operator reads `community_submissions` in the
Supabase Dashboard, verifies source, rights and package safety, and follows
[`docs/package-publication.md`](../docs/package-publication.md). A display
name is unverified and cannot be treated as a PNID mapping.
