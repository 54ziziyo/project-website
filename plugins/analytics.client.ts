export default defineNuxtPlugin(() => {
  const load = () => {
    ;(window as any).dataLayer = (window as any).dataLayer || []
    function gtag(...args: any[]) {
      ;(window as any).dataLayer.push(args)
    }
    ;(window as any).gtag = gtag
    gtag('js', new Date())
    gtag('config', 'G-JW3D2C1Q5E')

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-JW3D2C1Q5E'
    document.head.appendChild(script)
  }

  if ('requestIdleCallback' in window) {
    ;(window as any).requestIdleCallback(load, { timeout: 3000 })
  } else {
    setTimeout(load, 500)
  }
})
