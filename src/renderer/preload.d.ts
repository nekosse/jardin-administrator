import { PDFDescriptionItem } from './models/PdfDescriptionItem';

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        myPing(): void;
        sendMail(pdfList: PDFDescriptionItem[]): void;
        getMailList(): void;
        getData(path: string): void;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setPdfList(pdfList: any): void;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        on(channel: string, func: (...args: any[]) => void): void;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        once(channel: string, func: (...args: any[]) => void): void;
      };
    };
  }
}

export {};
