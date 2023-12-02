import "./App.css";
import Header from "./componentes/header"; //Normalmente Usamos a primeira letra do Componente Maiuscula para não dar interferencia com o HTML na hora de chamar na linha 09 //
import Footer from "./componentes/footer"; //Normalmente Usamos a primeira letra do Componente Maiuscula para não dar interferencia com o HTML na hora de chamar na linha 11 //
import Card from "./componentes/card"; //Normalmente Usamos a primeira letra do Componente Maiuscula para não dar interferencia com o HTML na hora de chamar na linha 10 //


function App() { 
  return (
   <main className="Container">
      <Header />  {/* Componente Header sendo chamado */}
      <div className="Container-Card-Two">  
        <Card /> {/* Componente Card sendo chamado */}
        <Card /> {/* Componente Card sendo chamado */}
        <Card /> {/* Componente Card sendo chamado */}
      </div>
      <Footer /> {/* Componente Footer sendo chamado */}
   </main>
  );
}

export default App;

