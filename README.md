# About

### Convertium is a small app that helps you change your foreign name to Japanese Hiragana, full-width Katakana, and half-width katakana. Very useful when signing up for Japanese services where the website is very peculiar about the formatting.

![Gif of demonstrating the app](/public/Sample.gif)

## You can type your word and English letters will be converted to Japanese!

![Second gif of demonstrating the app](/public/Sample2.gif)

### Features

- Convert your foreign name to Japanese Hiragana, Katakana, and half-width Katakana.
- Convert any Hiragana, Katakana, or half-width Katakana word to other styles.
- Don't know any Japanese? No problem! You can paste in any English word and it will be converted to Japanese after hitting the button.

### Usage

- Type in your word in the input box and hit the copy button to copy it to the clipboard.

### Tech Stack

- Next.js
- TypeScript
- Chakra UI
- [Google CLoud Translate API](https://cloud.google.com/translate)
- [romaji-conv](https://www.npmjs.com/package/@koozaki/romaji-conv)
- [encoding-japanese](https://www.npmjs.com/package/encoding-japanese)

### Run Next.js in development mode

```pnpm
pnpm install && pnpm dev

npm install && npm run dev

yarn install && yarn dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).
