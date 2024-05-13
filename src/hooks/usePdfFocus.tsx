import { useContext } from 'react';
import { PdfFocusContext, type PdfFocusContextProps } from '../contexts/PdfFocusContext.js';

// Custom Hook to use PDF Context
export const usePdfFocus = (): PdfFocusContextProps => {
  const context = useContext(PdfFocusContext);
  if (context === undefined) {
    throw new Error('usePDF must be used within a PDFProvider');
  }
  return context;
};
