import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

interface AppContextProps {
  isMounted: boolean;
  setIsMounted: Dispatch<SetStateAction<boolean>>;
}

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextProps>({
  isMounted: false,
  setIsMounted: () => {
    return;
  },
});

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  return (
    <AppContext.Provider value={{ isMounted, setIsMounted }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
