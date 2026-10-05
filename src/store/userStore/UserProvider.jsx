import { useState } from "react";
import { UserContext } from "./userContext";

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Maria",
    username: "Oganezovi",
    age: 21,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
