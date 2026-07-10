type GtagArgs = [command: string, ...rest: unknown[]]

declare global {
  interface Window {
    dataLayer?: GtagArgs[]
    gtag?: (...args: GtagArgs) => void
  }
}

export default defineNuxtPlugin(() => {
  const load = () => {
    window.dataLayer = window.dataLayer || []
    function gtag(...args: GtagArgs) {
      window.dataLayer?.push(args)
    }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', 'G-JW3D2C1Q5E')

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-JW3D2C1Q5E'
    document.head.appendChild(script)
  }

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(load, { timeout: 3000 })
  } else {
    setTimeout(load, 500)
  }
})
