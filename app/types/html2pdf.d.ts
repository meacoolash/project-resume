declare module 'html2pdf.js' {
    interface Options {
      margin?: number | string | Array<any>;
      filename?: string;
      image?: { type: string; quality: number };
      html2canvas?: object;
      jsPDF?: object;
      pagebreak?: object;
    }
  
    function from(element: any, options?: Options): {
      save: (filename?: string) => Promise<any>;
    }
  
    export default from;
  }
  