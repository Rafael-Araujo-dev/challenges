/*
  Durante uma expedição tecnológica, sua equipe encontrou o que parece ser a senha que lhes dá acesso a um grande tesouro digital. Por sorte, sua equipe é formada pelas pessoas mais feras em programação e vocês rapidamente descobriram como decifrá-la.
  Com a possibilidade de que vocês encontrem mais códigos contendo outras senhas, você foi designado à tarefa de desenvolver um algoritmo que decifra os códigos para não precisarem fazer isso de forma manual.
  A senha é representada por um número binário de 10 dígitos formado pelo dígito predominante de cada coluna. Caso a coluna tenha a mesma quantidade de dígitos 0 e 1, deve se considerar o número 1.
  
  Exemplo: A primeira coluna da lista tem como dígito predominante o número 1, sendo assim, o primeiro dígito - dos 10 - da senha é 1.
  0110100000
  1001011111
  1110001010
  0111010101
  0011100110
  1010011001
  1101100100
  1011010100
  1001100111
  1000011000

  Desenvolva um algoritmo que receba um array de valores binários (como o exemplo acima) e retorne a representação decimal da senha.

  Exemplo de solução:
      const senha = ["0110100000","1001011111","1110001010","0111010101","0011100110","1010011001","1101100100","1011010100","1001100111","1000011000"];

      const calculaNumeroDaSenha(senha: Array<string>) = () => {
        // código da solução aqui

        return // 724
      };
      
      calculaNumeroDaSenha(senha);
*/
    

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
