import avatarPadrao from '../../public/Imagens/avatar.svg'

export default function Avatar({ src }) {
  const getAvatar = () => {
    if (src && src !== "undefined") {
      return src;
    }
    return avatarPadrao.src;
  };

  return( 
  <img src={getAvatar()} alt="Avatar" className="avatar" />
  )
}
