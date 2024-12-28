"use client";

import React, {
  useMemo,
  useReducer,
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  type JSX,
} from "react";

interface AppState {
  openSidenav: boolean;
  mobileSidenav: boolean;
}

interface AppAction {
  type: string;
  value: boolean;
}

export const AppContext = createContext<[AppState, Dispatch<AppAction>] | null>(
  null
);

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "OPEN_SIDENAV": {
      return { ...state, openSidenav: action.value };
    }
    case "MOBILE_SIDENAV": {
      return { ...state, mobileSidenav: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

interface AppContextProviderProps {
  children: ReactNode;
}

export function AppContextProvider({
  children,
}: AppContextProviderProps): JSX.Element {
  const initialState: AppState = {
    openSidenav: true,
    mobileSidenav: false,
  };

  const [windowWidth, setWindowWidth] = useState<number>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }

    return 0;
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(
    () => [state, dispatch] as [AppState, Dispatch<AppAction>],
    [state, dispatch]
  );

  useEffect(() => {
    if (windowWidth < 1024) {
      dispatch({ type: "OPEN_SIDENAV", value: false });
    } else {
      dispatch({ type: "OPEN_SIDENAV", value: true });
    }
  }, [windowWidth, dispatch]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Predefine functions
export const setOpenSidenav = (dispatch: Dispatch<AppAction>, value: boolean) =>
  dispatch({ type: "OPEN_SIDENAV", value });
export const setMobileSidenav = (
  dispatch: Dispatch<AppAction>,
  value: boolean
) => dispatch({ type: "MOBILE_SIDENAV", value });
