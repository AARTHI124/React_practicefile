import './App.css'
import Card from './Card'
import Props from './Props'
import Student from './Student'

function App() {

  return (
    <>
     <Student/>
     <Props Name="Aarthi Vassugi" Age={23}/>
     <Props Name="Rihaan" Age={99}/>
     <Props About="Hello I Am Learning React Today!"/>
     <Props text="Click Me Now"/>
     <Card Name="Aarthi Vassugi" Age="21" Register_Number="195113202" DOB="04/08/2002" Opted_Course="Python Full Stack"/>
    </>
  )
}

export default App
