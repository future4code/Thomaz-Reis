<!-- <!DOCTYPE html>

<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="index.css">
    <title>Inserir nova venda</title>
</head>
<body>
    <div>
        <p class="nome-loja">Empório Capila</p>
    </div>
    <div class="links-pages">
        <a href="index.html">Página Inicial</a><a>...</a>
        <a href="ctrl-estoque.html">Controle de Estoque</a><a>...</a>
        <a href="add-produto.html">Adicionar Produto</a><a>...</a>
        <a href="funcionarios.html">Funcionários</a><a>...</a>
        <a href="sobre-nos.html">Sobre Nós</a>
    </div>

    <iframe align="center" width="100%" height="100%" src="<?php echo "Cliente:"$_POST[Cliente]; echo "Produto:"$_POST[Produto]; echo "Quantidade:"$_POST[Quantidade]; ?>"  
  frameborder="yes" scrolling="yes" name="myIframe" id="myIframe"> </iframe>

 -->
    <?php 
    echo "Cliente:"$_POST[Cliente];
    echo "Produto:"$_POST[Produto];
    echo "Quantidade:"$_POST[Quantidade];
    
    ?>

   <!--  <form id="form1" runat="server">
        <div>
        <tr>
        <td>Cliente: </td> <td> <% Response.Write(Page.Request.QueryString("Cliente"))%> </td>
        </tr>
        <tr>
        <td>Produto: </td> <td> <% Response.Write(Page.Request.QueryString("Produto"))%> </td>
        </tr>
        <tr>
        <td>Quantidade: </td> <td> <% Response.Write(Page.Request.QueryString("Quantidade"))%> </td>
        </tr>
        </table>
        </div>
        </form> -->
    </body>
    </html>