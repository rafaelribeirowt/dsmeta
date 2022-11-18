import NotificationButton from "./components/notificationButton";
import Hearder from "./components/header";
import SalesCard from "./components/salesCard";
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (<>
  <ToastContainer/>
    <Hearder />
    <main>
      <section id="sales">
        <div className="dsmeta-container">
          <SalesCard/>
        </div>
      </section>
    </main>

  </>
  )
}

export default App;
