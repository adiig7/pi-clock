import Header from "./components/Header";
import PI from "./components/PI";

function App() {
  return (
    <div className="flex w-screen h-screen bg-gradient-to-r from-slate-600 to-slate-800 overflow-y-auto">
      <div className="w-full h-fit p-4">
        <Header />
        <PI />
      </div>
    </div>
  );
}

export default App;