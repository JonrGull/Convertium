# About

Convertium is a small app that helps you change your foreign name to Japanese Hiragana, full-width Katakana, and half-width katakana. Very useful when signing up for Japanese services where the website is very peculiar about the formatting.

### Set up environment variables

Create a `.env` file in the root of the project.

Set each variable on `.env`:

- `MONGODB_URI` - Your MongoDB connection string. If you are using [MongoDB Atlas](https://mongodb.com/atlas) you can find this by clicking the "Connect" button for your cluster.
- `MONGO_DB` - The name of the Database you want to connect to.

### Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).
