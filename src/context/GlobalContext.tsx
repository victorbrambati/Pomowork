import React, {
  createContext,
  useState,
  SetStateAction,
  Dispatch,
} from 'react';

type MainProps = {
  milliseconds: number;
  millisecondsInit: number;
  name: string;
  tags: {
    id: number;
    name: string;
    color?: 'pink' | 'purple' | 'orange' | 'gray' | 'green';
  }[];
  icon: {
    name: string;
    color?: 'pink' | 'purple' | 'orange' | 'gray' | 'green';
  };
  msData?: {
    init: number;
    finish: number;
  };
  countTagCard?: number;
}[];

export function createGlobalCtx(defaultValue: MainProps) {
  type UpdateType = Dispatch<SetStateAction<typeof defaultValue>>;
  const defaultUpdate: UpdateType = () => defaultValue;
  const ctx = createContext({ state: defaultValue, update: defaultUpdate });
  function Provider(props: React.PropsWithChildren<{}>) {
    const [state, update] = useState(defaultValue);
    return <ctx.Provider value={{ state, update }} {...props} />;
  }
  return [ctx, Provider] as const;
}
