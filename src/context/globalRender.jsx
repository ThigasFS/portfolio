import { createContext, useContext, useState } from 'react';

const ForceRenderContext = createContext();

// eslint-disable-next-line react/prop-types
export function ForceRenderProvider({ children }) {
  const [forceRender, setForceRender] = useState(0);
  return (
    <ForceRenderContext.Provider value={{ forceRender, setForceRender }}>
      {children}
    </ForceRenderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useForceRender() {
  return useContext(ForceRenderContext);
}
