```
function calculaNota(ex, p1, p2) {
  mediaPonderada = (((ex*1)+(p1*2)+(p2*3))/(1+2+3))
  
    if (mediaPonderada>=9){conceito = 'A'}
    else if (mediaPonderada<9 && mediaPonderada>=7.5){conceito = 'B'}
    else if (mediaPonderada<7.5&&mediaPonderada>=6){conceito = 'C'}
    else if (mediaPonderada<6){conceito = 'D'}
   
  return conceito
}
```