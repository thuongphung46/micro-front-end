import * as React from "react";
import { FC } from "react";

export interface IAppProps {}

export const Counter: FC<IAppProps> = ({}) => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
