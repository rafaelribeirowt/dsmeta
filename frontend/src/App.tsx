import NotificationButton from "./components/notificationButton"
import Hearder from "./components/header"
import SalesCard from "./components/salesCard"
import './index.css'

function App() {

  return (<>
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

export default App
