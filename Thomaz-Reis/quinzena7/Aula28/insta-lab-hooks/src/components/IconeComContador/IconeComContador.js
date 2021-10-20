import React from 'react'
import { useState } from 'react'
import styled from "styled-components"

const IconeContainer = styled.div`
	display: flex;

	img {
		margin-right: 5px;
	}
`

function IconeComContador(props) {
	const [valorContador, setValorContador] = useState(0);
	const onClickIcone = () => {
		setValorContador(valorContador+1);
	  };

	return <IconeContainer>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconeContainer>
}

export default IconeComContador