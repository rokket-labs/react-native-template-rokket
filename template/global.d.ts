export {}

type EmptyFunc = (...args: any[]) => void

export type Tron = {
  log: EmptyFunc
  error: EmptyFunc
  warn: EmptyFunc
  display: EmptyFunc
  createSagaMonitor: any
  createEnhancer: any
}

declare global {
  interface Console {
    tron: Tron
  }
}
