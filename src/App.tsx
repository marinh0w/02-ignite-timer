import { Button } from "./components/Button";

import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="success"/>
      <Button variant="danger"/>
      <Button />
    </>
  );
}
