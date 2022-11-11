import { type } from "os";
import {useState} from "react";

export function SearchBar(): JSX.Element {

  const [typedMessage, setTypedMessage] = useState<string>('')

  return (
      <input className="center"
        placeholder="type a name" 
        value = {typedMessage}
        onChange={(event) => setTypedMessage(event.target.value)}
      />
  )
}
