import Header from "./components/Header/Header";
import CoreConsepts from "./components/CoreConsepts";
import Examples from "./components/Examples";


function App() {
  console.log('redering app component');

  return (
    <div>
      <Header />
      <main>
        <CoreConsepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
