import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Initial from './pages/Initial';
import Create from './pages/Create';
import Productivity from './pages/Productivity';
import Timer from './pages/Timer';
import { createGlobalCtx } from './context/GlobalContext';
import { createProductivityCtx } from './context/ProductivityContext';

const [ctx, GlobalProvider] = createGlobalCtx([
  {
    milliseconds: 3000,
    millisecondsInit: 3000,
    name: 'Create New Task',
    msData: { init: 0, finish: 0 },
    tags: [
      { id: 0, color: 'pink', name: 'Easy' },
      { id: 1, color: 'green', name: 'Create' },
      { id: 2, color: 'green', name: 'Task' },
    ],
    countTagCard: 0,
    icon: {
      name: 'Code',
      color: 'green',
    },
  },
]);
export const GlobalContext = ctx;

const [ProductivityCtx, ProductivityProvider] = createProductivityCtx({
  TaskCompleted: 0,
  timeDuration: 0,
  timeTaskTotal: [
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
    { timeLog: [] },
  ],
});
export const ProductivityContext = ProductivityCtx;

function Routes() {
  return (
    <GlobalProvider>
      <ProductivityProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={() => <Initial />} />
            <Route path="/productivity" component={() => <Productivity />} />
            <Route path="/create" component={() => <Create />} />
            <Route path="/timer/:id" component={() => <Timer />} />
          </Switch>
        </BrowserRouter>
      </ProductivityProvider>
    </GlobalProvider>
  );
}

export default Routes;
