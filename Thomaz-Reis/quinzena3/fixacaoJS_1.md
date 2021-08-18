```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    let salarioFixo = 2000
    
    var comissao = ((valorTotalVendas)*5/100) + (qtdeCarrosVendidos*100)
    var salarioTotal = salarioFixo + comissao
    
    return salarioTotal
}
```