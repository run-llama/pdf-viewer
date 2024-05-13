import React, { createContext, useState } from 'react';
import type { DocumentColorEnum } from '../constants/colors.js';

interface Citation {
  documentId: string;
  snippet: string;
  pageNumber: number;
  ticker: string;
  displayDate: string;
  color: DocumentColorEnum;
}

interface PdfFocusState {
  documentId: string;
  pageNumber: number;
  citation?: Citation;
}

export interface PdfFocusContextProps {
  pdfFocusState: PdfFocusState;
  setPdfFocusState: React.Dispatch<React.SetStateAction<PdfFocusState>>;
}

// Initialize Context
export const PdfFocusContext = createContext<PdfFocusContextProps | undefined>(undefined);

export interface PdfFocusProviderProps {
  children: React.ReactNode;
}
// PDF Provider
const PdfFocusProvider: React.FC<PdfFocusProviderProps> = ({ children }) => {
  const [pdfFocusState, setPdfFocusState] = useState<PdfFocusState>({
    documentId: '',
    pageNumber: 0,
  });

  return (
    <PdfFocusContext.Provider
      value={{
        pdfFocusState: pdfFocusState,
        setPdfFocusState: setPdfFocusState,
      }}
    >
      {children}
    </PdfFocusContext.Provider>
  );
};

export default PdfFocusProvider;
