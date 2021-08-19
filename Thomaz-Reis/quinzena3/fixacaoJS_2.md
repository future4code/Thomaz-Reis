```
function calculaPrecoTotal(quantidade) {
  if (quantidade < 12) {
      precoUnitario = 1.3
    }
  else if (quantidade >= 12) {
      precoUnitario = 1
    }
  
  let precoTotal = quantidade * precoUnitario
  
  return precoTotal
}
```