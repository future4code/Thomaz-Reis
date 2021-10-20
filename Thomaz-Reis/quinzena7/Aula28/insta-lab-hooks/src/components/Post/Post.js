import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'




const Post = (props) => {

  const [curtido, setCurtido] = useState(false);
  const [numeroCurtidas, setNCurtidas] = useState(0);
  const [comentando, setcomentando] = useState(false);
  const [numeroComentarios, setNcomentarios] = useState(0);
  const [comentarios, setcomentarios] = useState([]);

  const onClickCurtida = () => {
    setCurtido(curtido + 1);
  };

  const onClickComentario = () => {
  };

  const enviarComentario = (comentario) => {
  }

/*   const iconeCurtida = (curtido) => {
    if (curtido === true) ({
      curtido: !setCurtido,
      numeroCurtidas: setNCurtidas - 1
    })
    else {
    (curtido === false) ({
      curtido: !setCurtido,
      numeroCurtidas: setNCurtidas + 1
    })
  }
}
  ; */


  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCoracaoBranco}
          onClickIcone={() => onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {/* {caixaDeComentario} */}
    </PostContainer>
  )
}

export default Post