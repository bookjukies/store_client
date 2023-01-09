import Header from "./Header";
import Audio from "./components/Audio"
import SidePanel from "./components/SidePanel";
import Player from "./Player";
import Orders from "./admin/Orders";
import AdminNav from "./admin/Nav"

function App() {

  const storeFront =<>
  <SidePanel />
  <Audio />
  <Player /></>



  return (
    <div  className="h-full">
        <Header />
        <div className="flex px-10  h-full">
          <AdminNav />
          <Orders />
        </div>
    </div>
  );
}

export default App;
