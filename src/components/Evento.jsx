import Button from "./Evento/Button"

function Evento() {
    function meuEvento() {
        console.log('Ativando o primeiro evento!')
    }
  return (
    <div>
        <p>clique para disparar um evento</p>
        <Button event={meuEvento} text='Primeiro Evento' />
    </div>
  )
}

export default Evento