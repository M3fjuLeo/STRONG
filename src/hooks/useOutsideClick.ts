import { RefObject, useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement>(
  close: () => void,
  listenCapturing: boolean = true
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(
    function () {
      function handleClick(e: MouseEvent) {
        if (ref.current && !ref.current.contains(e.target as Node)) close();
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [close, listenCapturing]
  );

  return ref;
}
