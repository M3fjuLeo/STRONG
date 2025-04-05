import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

interface ModalContextType {
  openName: string;
  open: (name: string) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function Modal({ children }: { children: React.ReactNode }) {
  const [openName, setOpenName] = useState<string>("");

  const close = () => setOpenName("");
  const open = (name: string) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

interface OpenProps {
  children: React.ReactElement;
  opens: string;
}

function Open({ children, opens }: OpenProps) {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Open must be used within a ModalProvider");
  }

  const { open } = context;
  return cloneElement(children, { onClick: () => open(opens) });
}

interface WindowProps {
  children: React.ReactElement;
  name: string;
}

function Window({ children, name }: WindowProps) {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Open must be used within a ModalProvider");
  }

  const { openName, close } = context;
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-lvh backdrop-blur-sm z-[1000] transition-all">
      <div
        // @ts-ignore
        ref={ref}
        className="fixed top-[50%] bg-white left-[50%] rounded-lg -translate-x-1/2 -translate-y-1/2 shadow-lg py-[2rem] md:py-[3.2rem] md:px-[4rem] px-[2rem] transition-all"
      >
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
