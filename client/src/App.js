import "./App.css";
import { useState, useEffect } from "react";
import { auth } from "./config/firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import ListOfTodo from "./components/ListOfTodo";

const provider = new GoogleAuthProvider();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    false || window.localStorage.getItem("isAuthenticated") === "true"
  );
  const [token, setToken] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((credential) => {
      if (credential) {
        setIsAuthenticated(true);
        window.localStorage.setItem("isAuthenticated", "true");
        credential.getIdToken().then((token) => {
          setToken(token);
        });
      } else {
        setIsAuthenticated(false);
        setToken("");
      }
    });
  }, []);

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, provider).then((credential) => {
      if (credential) {
        setIsAuthenticated(true);
        window.localStorage.setItem("isAuthenticated", "true");
      }
    });
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <ListOfTodo token={token} />
        </>
      ) : (
        <button onClick={loginWithGoogle}>Login with Google</button>
      )}
    </div>
  );
}

export default App;
