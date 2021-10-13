const pecaXadrez = "Cavalo";

switch (pecaXadrez.toLowerCase()) {
  case "bispo":
    console.log("Bispo -> Diagonal.");
    break;
  case "peão":
    console.log("Peão -> Uma casa para frente ou duas no primeiro movimento.");
    break;
  case "cavalo":
    console.log('Cavalo -> Movimento em "L", pode pular as peças.');
    break;
  case "torre":
    console.log("Torre -> Horizontal e vertical.");
    break;
  case "rainha":
    console.log("Rainha -> Diagonal, horizontal e vertical.");
    break;
  case "rei":
    console.log("Rei -> Uma casa para qualquer direção.");
    break;
  default:
    console.log("Erro -> Peça inválida");
    break;
}
