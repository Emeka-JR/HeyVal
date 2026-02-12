declare module 't-writer.js' {
  class Typewriter {
    constructor(element: HTMLElement, options?: any);
    type(text: string): this;
    delete(chars: number | string): this;
    pauseFor(ms: number): this;
    start(): this;
    stop(): this;
    clear(): this;
    remove(chars: number): this;
    changeOps(options: any): this;
    rest(ms: number): this;
    // Add more methods if you use them (optional)
  }

  export = Typewriter;
}