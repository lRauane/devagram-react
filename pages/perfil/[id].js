import Feed from '../../components/Feed';
import comAutorizacao from '../../hoc/comAutorizacao'

function Perfil() {
 return (
  <Feed />
 )
}

export default comAutorizacao(Perfil);