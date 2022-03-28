import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    sendMail(pdfList: any) {
      ipcRenderer.send('sendMail', pdfList);
    },
    getMailList() {
      ipcRenderer.send('mail:getList');
    },
    setPdfList(pdfList: any) {
      ipcRenderer.send('SetPDFList', pdfList);
    },
    getData(path: string) {
      ipcRenderer.send('getData', path);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    on(channel: string, func: (...args: any[]) => void) {
      const validChannels = [
        'ipc-example',
        'mail:success',
        'mail:error',
        'mail:list',
        'fileList',
      ];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (_event, ...args) => func(...args));
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    once(channel: string, func: (...args: any[]) => void) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (_event, ...args) => func(...args));
      }
    },
  },
});
