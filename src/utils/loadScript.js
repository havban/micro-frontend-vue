// Minimal replacement for vue-script2: inject a <script src> once and
// resolve when it has loaded. Repeated calls for the same src share
// one promise, so a module is never executed twice.
const pending = new Map()

export function loadScript (src, attrs = {}) {
  if (pending.has(src)) return pending.get(src)

  const promise = new Promise((resolve, reject) => {
    const el = document.createElement('script')
    el.src = src
    el.async = true
    for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value)
    el.onload = () => resolve(el)
    el.onerror = () => {
      pending.delete(src)
      el.remove()
      reject(new Error(`Failed to load script: ${src}`))
    }
    document.head.appendChild(el)
  })

  pending.set(src, promise)
  return promise
}
