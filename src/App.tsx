import { AuthProvider } from "./context/authContext";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <AuthProvider>
      <Register></Register>
    </AuthProvider>
      
  );
}

export default App;
