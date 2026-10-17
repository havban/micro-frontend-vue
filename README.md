# micro-frontend-vue

Host app for a Vue 3 + Vite micro-frontend demo. It renders its own page and
loads the [collab](https://github.com/havban/micro-frontend-vue-collab) bundle
from `/collab/app.js` at runtime, which mounts itself into `#app-collab`.

Requires [Bun](https://bun.sh).

## Project setup
```
bun install
```

### Compiles and hot-reloads for development
```
bun run serve
```
Start the collab app too (`bun run serve` in micro-frontend-vue-collab, port
8084); `/collab/*` is proxied to it.

### Compiles and minifies for production
```
bun run build
bun run preview
```

### Lints files
```
bun run lint
```

### Security audit
```
bun audit
```

### Customize configuration
See [Vite Configuration Reference](https://vite.dev/config/).
