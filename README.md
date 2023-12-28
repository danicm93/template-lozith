# Guía

## Instalación

- Instalamos proyecto
  - > npm create vite@latest
- Nombre: yt-rock-paper-scissors
- Fw: React + TS
- Vamos al directorio
  - > cd yt-rock-paper-scissors
- Instalamos Pico.css
  - > npm install @picocss/pico
- Instalamos react-router-dom
  - > npm install react-router-dom
- Instalamos eslint
  - > npx eslint --init
- Ejecutamos
  - > npm install

## Configuración

- Añadimos un *.eslintignore*
```
.eslintrc.cjs
```

- Configuramos el *.eslintrc.cjs*
```
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "react"
  ],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error","never"],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-function-return-type": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/promise-function-async": "off"
  }
}
```
- Configuramos alias - *vite.config.js*
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
```

- Configuramos alias - *tsconfig.json*
```
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules"],
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## Limpiamos todo

- Nos quedamos con el mínimo
  - core/app.tsx (cambiamos el nombre a App.tsx)
  - Adaptamos el main.tsx
- Aplicamos **react-router-dom**
- Creamos los modelos
