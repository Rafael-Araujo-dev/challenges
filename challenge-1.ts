

const calculaNumeroDaSenha = (senha: Array<string>) => {
  // Cria uma variável para armazenar o dígito predominante 
  let predominante: Array<string> = [];

  // Gera o número binário dos dígitos predominantes
  const binario = () => {
    // Percorre cada coluna
    for (let col = 0; col < 10; col++) {

      // Separa todos os dígitos de cada coluna de todas as linhas em um array
      for (let lin = 0; lin < 10; lin++) {
        predominante[col] += senha[lin][col]
        predominante[col] = predominante[col].replace('undefined', '') // Remove valor indesejável
      }
    
      let nums_0 = predominante[col].split('1').join('').length // Retorna quantos '0' existem
      let nums_1 = predominante[col].split('0').join('').length // Retorna quantos '1' existem

      // Verifica qual o dígito predominante
      if  (nums_0 === nums_1 || nums_1 > nums_0) predominante[col] = '1'
        else predominante[col] = '0'
  }
    // Retorna o dígito predominante da coluna
    return predominante.toString().split(',').join('')
  } 
  
  // Conversão binário para decimal
  const decimal = (binario: any) => {
    let result: number = 0;
    for (let c: number = binario.length - 1, i: number = 0; c >= 0; c--, i++) {
      result += binario[c] * Math.pow(2, i)
    }
    // Retorna número decimal
    return result
  }
  
  // Retorna cálculo da senha
  return decimal(binario())
}

const senha: any = ["0110100000","1001011111","1110001010","0111010101","0011100110","1010011001","1101100100","1011010100","1001100111","1000011000"]

console.log({
  calculaNumeroDaSenha: calculaNumeroDaSenha(senha),
  "Resultado esperado:" : 724
})
