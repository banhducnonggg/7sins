declare module "howler" {
  // Minimal typings for howler used in this project.
  // Extend these as needed if you use more of the API.

  export interface HowlOptions {
    src: string[] | string;
    loop?: boolean;
    autoplay?: boolean;
    volume?: number;
    onplayerror?: () => void;
    [key: string]: unknown;
  }

  export class Howl {
    constructor(options: HowlOptions);
    play(id?: string | number): void;
    stop(id?: string | number): void;
    unload(): void;
    once(event: string, callback: (...args: unknown[]) => void, id?: string | number): void;
  }

  export const Howler: {
    autoUnlock: boolean;
    [key: string]: unknown;
  };
}


