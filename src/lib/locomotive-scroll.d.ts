// types/locomotive-scroll.d.ts
declare module "locomotive-scroll" {
  export default class LocomotiveScroll {
    constructor(options: LocomotiveScroll.Options);
    on(event: string, callback: (args: any) => void): void;
    scrollTo(value: number, offset: number, duration: number): void;
    update(): void;
    destroy(): void;
    instance: {
      scroll: {
        y: number;
      };
    };
  }

  namespace LocomotiveScroll {
    interface Options {
      el: HTMLElement;
      smooth?: boolean;
      smoothMobile?: boolean;
      resetNativeScroll?: boolean;
      getDirection?: boolean;
    }
  }
}
