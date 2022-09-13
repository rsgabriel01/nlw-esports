// Compentes / Propriedades

interface ButtonProps {
  title: string
}

function Button(props: ButtonProps) {
  return <button>{props.title}</button>
}

function App() {
  return (
    <div>
      <Button title="Cancelar" />
      <Button title="Salvar" />
      <Button title="Salva e Continuar" />
    </div>
  )
}

export default App
