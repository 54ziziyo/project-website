export default defineNuxtPlugin(() => {
  const load = () => {
    ;(window as any).dataLayer = (window as any).dataLayer || []
    function gtag(...args: any[]) {
      ;(window as any).dataLayer.push(args)
    }
    ;(window as any).gtag = gtag
    gtag('js', new Date())
    gtag('config', 'G-5QEVXM0T57')

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-5QEVXM0T57'
    document.head.appendChild(script)
  }

  if ('requestIdleCallback' in window) {
    ;(window as any).requestIdleCallback(load, { timeout: 3000 })
  } else {
    setTimeout(load, 500)
  }
})
