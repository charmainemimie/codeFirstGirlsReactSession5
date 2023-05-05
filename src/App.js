import './App.css';
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {

  // mocked data
  const data = [
    {
      id:1,
      title:"Lindfield, Uk",
      source:"https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
      description:"Stay with Michelle & Micheal",
      date:"Jun 17 - 22",
      cost:140,
      profile:"https://a0.muscache.com/im/pictures/user/a910392f-02d4-4ed0-96a9-52d6ee997cc1.jpg?im_w=720"
    },
    {
      id:2,
      title:"Varese, Italy",
      source:"https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/e7da1f36-922f-4631-a287-91ceda05970f.jpeg?im_w=720",
      description:"Stay with valentina",
      date:"May 14 - 19",
      cost:190,
      profile:"https://a0.muscache.com/im/pictures/user/a910392f-02d4-4ed0-96a9-52d6ee997cc1.jpg?im_w=720"
    },
     {
      id:3,
      title:"Varese, Italy",
      source:"https://a0.muscache.com/im/pictures/airflow/Hosting-588792902420108198/original/2ad04755-5c82-4a77-bf29-9de0b331fc3e.jpg?im_w=720",
      description:"Stay with valentina",
      date:"May 14 - 19",
      cost:190,
      profile:"https://a0.muscache.com/im/pictures/user/a910392f-02d4-4ed0-96a9-52d6ee997cc1.jpg?im_w=720"
    }
  ];

  return (
    <div className="App">
     <h1>Welcome to our site</h1>

     <div>
      <Router>
        <NavBar/>
     <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </Router>
     </div>


      {data.map(it => <Home 
        key={it.id}
        source={it.source}
        title={it.title}
        description={it.description}
        date={it.date}
        cost={it.cost}
        profile={it.profile}
      />)}
    </div>
  );
}

export default App;
