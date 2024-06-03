import { useCallback, useState, useEffect } from "react";

export interface IUseWindowSizeProps {
  width: number;
  height: number;
}

export const useWindowSize = (): IUseWindowSizeProps => {
  const [{ width, height }, setWIndowSize] = useState<IUseWindowSizeProps>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleWindowSize = useCallback(() => {
    setWIndowSize((prev: IUseWindowSizeProps) => {
      return {
        ...prev,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [handleWindowSize]);

  return { width, height };
};
