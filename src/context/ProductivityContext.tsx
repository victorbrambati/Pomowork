import React, {
  createContext,
  useState,
  SetStateAction,
  Dispatch,
} from 'react';

type MainProps = {
  timeDuration: number;
  TaskCompleted: number;
  timeTaskTotal: {
    timeLog: number[];
  }[];
};

export function createProductivityCtx(defaultValue: MainProps) {
  type UpdateType = Dispatch<SetStateAction<typeof defaultValue>>;
  const defaultUpdate: UpdateType = () => defaultValue;
  const ctx = createContext({
    productivity: defaultValue,
    setProductivity: defaultUpdate,
  });
  function Provider(props: React.PropsWithChildren<{}>) {
    const [productivity, setProductivity] = useState(defaultValue);
    return (
      <ctx.Provider value={{ productivity, setProductivity }} {...props} />
    );
  }
  return [ctx, Provider] as const;
}
