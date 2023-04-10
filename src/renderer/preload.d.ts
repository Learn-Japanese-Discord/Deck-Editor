import { ElectronHandler } from 'main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    windowControls: {
      close: () => void;
      maximize: () => void;
      minimize: () => void;
    }
  }
}

export {};
