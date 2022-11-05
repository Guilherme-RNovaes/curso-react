import PropTypes from "prop-types"

function Item({ marca, ano_lancamento }) {
  return (
    <>
        <p>Marca</p>
        <li>{marca} - {ano_lancamento} </li>
    </>
  )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'faltou a marca',
    ano_lancamento: 0,
}

export default Item