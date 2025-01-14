let valores = [8, 9, 5, 2, 3]

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


//mais simplificado:
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

