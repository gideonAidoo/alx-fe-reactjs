# Tailwind CSS Installation

Follow these steps to install Tailwind CSS in your React project:

## 1. Install Tailwind via npm

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 2. Configure `tailwind.config.js`

Update the `content` array to include your source files:

```js
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

## 3. Add Tailwind to your CSS

In your `src/index.css` (or `App.css`), add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 4. Start your development server

```bash
npm start
```

Tailwind CSS should now be working in your React project!