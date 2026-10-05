import { useContext } from "react";
import { ThemeContext } from "./store/themeStore/themeContext";
import { UserContext } from "./store/userStore/userContext";

export default function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  const { user, setUser } = useContext(UserContext);
  console.log(user);

  function printUserInfo() {
    console.log("name", user.name);
    console.log("username", user.username);
    console.log("age", user.age);
  }

  function toggle() {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  }

  return (
    <>
      <main
        className={`${theme == "light" ? "text-amber-300" : "text-gray-700"}`}
      >
        <h2>Hello World!</h2>
        <button className="border px-3 rounded" onClick={toggle}>
          change color
        </button>
        <button
          className="border px-3 px-1 rounded ml-1"
          onClick={printUserInfo}
        >
          show user info
        </button>
      </main>
    </>
  );
}
