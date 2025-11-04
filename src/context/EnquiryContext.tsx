// src/context/EnquiryContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface EnquiryContextType {
  openEnquiry: () => void;
  closeEnquiry: () => void;
  isOpen: boolean;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export const EnquiryProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openEnquiry = () => setIsOpen(true);
  const closeEnquiry = () => setIsOpen(false);

  return (
    <EnquiryContext.Provider value={{ openEnquiry, closeEnquiry, isOpen }}>
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used within EnquiryProvider");
  }
  return context;
};
