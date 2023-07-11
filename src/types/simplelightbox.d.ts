declare module 'simplelightbox' {
  interface SimpleLightboxOptions {
    sourceAttr?: string;
    captionsData?: string;
    captionDelay?: number;
    // Add more options as needed
  }

  class SimpleLightbox {
    constructor(selector: string, options?: SimpleLightboxOptions);
    open(): void;
    close(): void;
    next(): void;
    prev(): void;
    destroy(): void;
  }

  export default SimpleLightbox;
}
