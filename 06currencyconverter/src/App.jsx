import bg from './assets/bg.png'; // ✅ Import the image first

function App() {
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="bg-red-200">Hello world</h1>
    </div>
    
  );
}

export default App;
