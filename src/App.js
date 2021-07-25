import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';

function App() {
  const onDelete = () => {
    console.log(" I am onDelete of todo ");
    
    };
  
  let todos =[
    {
      sno: 1,
      title: "Go the market",
      desc: "You need to go the market to get this job done"
    },
    {
      sno: 2,
      title: "Go the mall",
      desc: "You need to go the market to get this job done2"
    },
    {
      sno: 3,
      title: "Go the gat",
      desc: "You need to go the market to get this job done3"
    },
  ];
  return (
    <>
      <Header title="My Todos List" searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
     );
  }

export default App;
