import MCQContainer from "./Components/MCQContainer/MCQContainer"

function App() {

  return (
  <div className="fullcontainer font-[Poppins] font-sembold" >
      <div className="container mx-auto text-center flex justify-center items-center gap-5 flex-col">
    <h1 className="text-5xl text-white mt-8">Welcome</h1>
    <MCQContainer/>
    </div>
  </div>
  )
}

export default App
