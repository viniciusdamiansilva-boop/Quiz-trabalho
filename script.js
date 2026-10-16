const perguntas = [
{categoria:"Biologia",pergunta:"Qual organela celular é responsável pela produção de grande parte do ATP?",alternativas:["Lisossomo","Mitocôndria","Complexo golgiense","Ribossomo"],correta:1},
{categoria:"Química",pergunta:"Qual é o símbolo químico do sódio?",alternativas:["So","S","Na","Sd"],correta:2},
{categoria:"Física",pergunta:"Qual unidade é usada para medir força no Sistema Internacional?",alternativas:["Joule","Watt","Pascal","Newton"],correta:3},
{categoria:"Matemática",pergunta:"Quanto é a raiz quadrada de 144?",alternativas:["10","12","14","16"],correta:1},
{categoria:"História",pergunta:"Em que ano ocorreu a Proclamação da República no Brasil?",alternativas:["1822","1888","1889","1891"],correta:2},
{categoria:"Geografia",pergunta:"Qual é o maior bioma brasileiro em extensão territorial?",alternativas:["Cerrado","Caatinga","Mata Atlântica","Amazônia"],correta:3},
{categoria:"Língua Portuguesa",pergunta:"Qual figura de linguagem aparece em “seus olhos são estrelas”?",alternativas:["Metáfora","Hipérbole","Ironia","Eufemismo"],correta:0},
{categoria:"Literatura",pergunta:"Qual autor escreveu “Dom Casmurro”?",alternativas:["José de Alencar","Machado de Assis","Aluísio Azevedo","Graciliano Ramos"],correta:1},
{categoria:"Inglês",pergunta:"Qual é o passado simples do verbo inglês “go”?",alternativas:["Goed","Gone","Went","Going"],correta:2},
{categoria:"Sociologia",pergunta:"Qual pensador é associado ao conceito de luta de classes?",alternativas:["Émile Durkheim","Auguste Comte","Max Weber","Karl Marx"],correta:3},
{categoria:"Filosofia",pergunta:"Quem escreveu a alegoria da caverna?",alternativas:["Platão","Aristóteles","Sócrates","Descartes"],correta:0},
{categoria:"Matemática",pergunta:"Se 3x + 5 = 20, qual é o valor de x?",alternativas:["3","5","7","15"],correta:1},
{categoria:"Química",pergunta:"Qual é a fórmula química da água?",alternativas:["CO₂","O₂","H₂O","NaCl"],correta:2},
{categoria:"Física",pergunta:"Qual é a velocidade aproximada da luz no vácuo?",alternativas:["30 mil km/s","150 mil km/s","1 milhão km/s","300 mil km/s"],correta:3},
{categoria:"Biologia",pergunta:"Qual molécula carrega a informação genética dos seres vivos?",alternativas:["DNA","Glicose","Hemoglobina","Amido"],correta:0},
{categoria:"História",pergunta:"A Revolução Francesa começou em qual ano?",alternativas:["1776","1789","1815","1848"],correta:1},
{categoria:"Geografia",pergunta:"Qual linha imaginária divide a Terra em hemisférios Norte e Sul?",alternativas:["Meridiano de Greenwich","Trópico de Câncer","Linha do Equador","Círculo Polar Ártico"],correta:2},
{categoria:"Artes",pergunta:"Qual movimento artístico é associado a Salvador Dalí?",alternativas:["Cubismo","Impressionismo","Barroco","Surrealismo"],correta:3},
{categoria:"Língua Portuguesa",pergunta:"Qual palavra é um exemplo de oxítona?",alternativas:["Café","Mesa","Lâmpada","Árvore"],correta:0},
{categoria:"Matemática",pergunta:"Qual é a área de um triângulo com base 10 cm e altura 6 cm?",alternativas:["60 cm²","30 cm²","16 cm²","36 cm²"],correta:1},
{categoria:"Biologia",pergunta:"Como se chama o processo pelo qual plantas produzem glicose usando luz?",alternativas:["Respiração","Fermentação","Fotossíntese","Transpiração"],correta:2},
{categoria:"Química",pergunta:"Uma solução com pH menor que 7 é classificada como:",alternativas:["Neutra","Básica","Saturada","Ácida"],correta:3},
{categoria:"Física",pergunta:"Qual forma de energia está associada ao movimento?",alternativas:["Cinética","Potencial gravitacional","Química","Nuclear"],correta:0},
{categoria:"História do Brasil",pergunta:"Qual lei aboliu oficialmente a escravidão no Brasil em 1888?",alternativas:["Lei do Ventre Livre","Lei Áurea","Lei Eusébio de Queirós","Lei de Terras"],correta:1},
{categoria:"Geografia",pergunta:"Qual é a capital do estado do Paraná?",alternativas:["Londrina","Maringá","Curitiba","Foz do Iguaçu"],correta:2},
{categoria:"Filosofia",pergunta:"A frase “Penso, logo existo” é associada a quem?",alternativas:["Kant","Nietzsche","Hegel","René Descartes"],correta:3},
{categoria:"Sociologia",pergunta:"Qual instituição costuma ser considerada um agente primário de socialização?",alternativas:["Família","Bolsa de valores","Tribunal internacional","Banco central"],correta:0},
{categoria:"Literatura",pergunta:"O Arcadismo valorizava principalmente:",alternativas:["O excesso ornamental barroco","A simplicidade e a vida pastoril","O pessimismo ultrarromântico","A fragmentação modernista"],correta:1},
{categoria:"Inglês",pergunta:"O que significa a palavra inglesa “environment”?",alternativas:["Desenvolvimento","Entretenimento","Meio ambiente","Emprego"],correta:2},
{categoria:"Matemática",pergunta:"Qual é o valor de 15% de 200?",alternativas:["15","20","25","30"],correta:3},
{categoria:"Biologia",pergunta:"Qual tipo sanguíneo é conhecido como doador universal de hemácias, considerando o sistema ABO e o fator Rh?",alternativas:["O negativo","AB positivo","A positivo","B negativo"],correta:0},
{categoria:"Química",pergunta:"Qual partícula subatômica possui carga elétrica negativa?",alternativas:["Próton","Elétron","Nêutron","Núcleo"],correta:1},
{categoria:"Física",pergunta:"Qual é a unidade de potência elétrica?",alternativas:["Volt","Ampere","Watt","Ohm"],correta:2},
{categoria:"Geografia",pergunta:"Qual é o oceano que banha a costa leste do Brasil?",alternativas:["Pacífico","Índico","Ártico","Atlântico"],correta:3},
{categoria:"História",pergunta:"Qual civilização antiga construiu as pirâmides de Gizé?",alternativas:["Egípcia","Romana","Fenícia","Persa"],correta:0},
{categoria:"Língua Portuguesa",pergunta:"Em “Os alunos estudaram”, qual é o sujeito?",alternativas:["Estudaram","Os alunos","O verbo","Sujeito inexistente"],correta:1},
{categoria:"Biologia",pergunta:"Qual sistema do corpo humano transporta sangue?",alternativas:["Digestório","Nervoso","Circulatório","Endócrino"],correta:2},
{categoria:"Química",pergunta:"Qual gás é mais abundante na atmosfera terrestre?",alternativas:["Oxigênio","Dióxido de carbono","Hidrogênio","Nitrogênio"],correta:3},
{categoria:"Física",pergunta:"Qual lei de Newton é conhecida como princípio da inércia?",alternativas:["Primeira lei","Segunda lei","Terceira lei","Lei da gravitação"],correta:0},
{categoria:"História",pergunta:"A Guerra Fria foi marcada principalmente pela rivalidade entre:",alternativas:["Brasil e Argentina","Estados Unidos e União Soviética","França e Espanha","China e Japão"],correta:1},
{categoria:"Geografia",pergunta:"Como se chama o movimento da Terra ao redor do Sol?",alternativas:["Rotação","Precessão","Translação","Convecção"],correta:2},
{categoria:"Artes",pergunta:"Quem pintou a obra “Mona Lisa”?",alternativas:["Vincent van Gogh","Pablo Picasso","Claude Monet","Leonardo da Vinci"],correta:3},
{categoria:"Filosofia",pergunta:"Qual área da filosofia estuda questões sobre o conhecimento?",alternativas:["Epistemologia","Estética","Ética aplicada","Lógica matemática apenas"],correta:0},
{categoria:"Sociologia",pergunta:"O conceito de “fato social” é associado a:",alternativas:["Karl Marx","Émile Durkheim","John Locke","Thomas Hobbes"],correta:1},
{categoria:"Matemática",pergunta:"Qual é a probabilidade de sair cara em um lançamento justo de moeda?",alternativas:["0%","25%","50%","100%"],correta:2},
{categoria:"Literatura",pergunta:"Qual escola literária brasileira teve como marco inicial “Suspiros Poéticos e Saudades”, de Gonçalves de Magalhães?",alternativas:["Realismo","Parnasianismo","Modernismo","Romantismo"],correta:3},
{categoria:"Biologia",pergunta:"Qual é a principal função dos glóbulos vermelhos?",alternativas:["Transportar oxigênio","Produzir bile","Filtrar a urina","Secretar insulina"],correta:0},
{categoria:"Química",pergunta:"Qual é o nome do processo em que um líquido passa lentamente para o estado gasoso pela superfície?",alternativas:["Condensação","Evaporação","Solidificação","Fusão"],correta:1},
{categoria:"Geografia",pergunta:"Qual destes países está localizado na América do Sul?",alternativas:["Portugal","Tailândia","Chile","Marrocos"],correta:2},
{categoria:"Conhecimentos Gerais",pergunta:"Quantos lados tem um hexágono?",alternativas:["Quatro","Cinco","Sete","Seis"],correta:3}
];

const VALOR_PERGUNTA = 20000;
const PREMIO_MAXIMO = 1000000;
let perguntasJogo = [];
let perguntaAtual = 0;
let premioAtual = 0;
let acertos = 0;
let respondeu = false;
let finalizado = false;
let nomeJogador = "Jogador";
let somLigado = true;
let dobrarUsado = false;
let pularUsado = false;
let eliminarUsado = false;
let perguntasVistas = 0;
let audioContext;

const $ = id => document.getElementById(id);
const loginTela = $("login-tela"), jogoTela = $("jogo-tela"), resultadoTela = $("resultado-tela");
const perguntaE = $("pergunta"), alternativasE = $("alternativas"), mensagemE = $("mensagem");
const proximaBtn = $("proxima");

function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}
function formatarDinheiro(valor) {
  return valor.toLocaleString("pt-BR", {style:"currency", currency:"BRL", maximumFractionDigits:0});
}
function tocar(tipo) {
  if (!somLigado) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === "suspended") audioContext.resume();
    const sequencias = {
      click: [[520,.045,"sine"]],
      correto: [[523,.11,"sine"],[659,.11,"sine"],[784,.2,"sine"]],
      errado: [[260,.16,"triangle"],[190,.24,"triangle"]],
      final: [[523,.12,"sine"],[659,.12,"sine"],[784,.12,"sine"],[1046,.32,"sine"]]
    };
    let atraso = 0;
    (sequencias[tipo] || sequencias.click).forEach(([freq,dur,onda]) => {
      const osc = audioContext.createOscillator(), gain = audioContext.createGain();
      osc.type = onda; osc.frequency.value = freq;
      gain.gain.setValueAtTime(.0001, audioContext.currentTime + atraso);
      gain.gain.exponentialRampToValueAtTime(.075, audioContext.currentTime + atraso + .015);
      gain.gain.exponentialRampToValueAtTime(.0001, audioContext.currentTime + atraso + dur);
      osc.connect(gain); gain.connect(audioContext.destination);
      osc.start(audioContext.currentTime + atraso); osc.stop(audioContext.currentTime + atraso + dur);
      atraso += dur * .8;
    });
  } catch (e) { /* Som opcional: o jogo continua mesmo se o navegador não suportar áudio. */ }
}
function atualizarPremio() {
  $("premio").textContent = formatarDinheiro(premioAtual);
  const pct = Math.min(100, Math.round(premioAtual / PREMIO_MAXIMO * 100));
  $("percentual").textContent = `${pct}%`;
  $("dinheiro-progresso").style.width = `${pct}%`;
}
function atualizarAjudas() {
  $("dobrar-btn").disabled = dobrarUsado;
  $("pular-btn").disabled = pularUsado || finalizado;
  $("eliminar-btn").disabled = eliminarUsado || respondeu || finalizado;
  if (dobrarUsado) $("dobrar-btn").querySelector("small").textContent = "Ajuda utilizada";
  if (pularUsado) $("pular-btn").querySelector("small").textContent = "Ajuda utilizada";
  if (eliminarUsado) $("eliminar-btn").querySelector("small").textContent = "Ajuda utilizada";
}
function carregarPergunta() {
  if (perguntaAtual >= perguntasJogo.length) return finalizarJogo("completo");
  respondeu = false;
  proximaBtn.disabled = true;
  proximaBtn.innerHTML = 'PRÓXIMA PERGUNTA <span>→</span>';
  mensagemE.textContent = "";
  mensagemE.className = "message";
  alternativasE.innerHTML = "";
  const item = perguntasJogo[perguntaAtual];
  $("categoria").textContent = item.categoria.toUpperCase();
  $("numero-pergunta").textContent = `PERGUNTA ${perguntaAtual + 1} / ${perguntasJogo.length}`;
  $("progresso").style.width = `${(perguntaAtual / perguntasJogo.length) * 100}%`;
  perguntaE.textContent = item.pergunta;
  item.alternativas.forEach((texto, indice) => {
    const botao = document.createElement("button");
    botao.className = "alternative";
    const letra = document.createElement("span");
    letra.className = "letter";
    letra.textContent = String.fromCharCode(65 + indice);
    const conteudo = document.createElement("span");
    conteudo.textContent = texto;
    botao.append(letra, conteudo);
    botao.addEventListener("click", () => verificarResposta(indice, botao));
    alternativasE.appendChild(botao);
  });
  atualizarPremio();
  atualizarAjudas();
}
function verificarResposta(indiceEscolhido, botaoEscolhido) {
  if (respondeu || finalizado) return;
  respondeu = true;
  perguntasVistas++;
  const item = perguntasJogo[perguntaAtual];
  const botoes = [...alternativasE.querySelectorAll(".alternative")];
  botoes.forEach(botao => botao.disabled = true);
  if (indiceEscolhido === item.correta) {
    botaoEscolhido.classList.add("correta");
    acertos++;
    premioAtual = Math.min(PREMIO_MAXIMO, premioAtual + VALOR_PERGUNTA);
    mensagemE.textContent = "Resposta correta! Você ganhou R$ 20.000.";
    tocar("correto");
    proximaBtn.innerHTML = perguntaAtual === perguntasJogo.length - 1 ? 'VER RESULTADO <span>✦</span>' : 'PRÓXIMA PERGUNTA <span>→</span>';
  } else {
    botaoEscolhido.classList.add("errado");
    botoes[item.correta].classList.add("correta");
    mensagemE.textContent = `Não foi dessa vez! A resposta correta era: ${item.alternativas[item.correta]}.`;
    mensagemE.classList.add("error");
    tocar("errado");
    finalizado = true;
    proximaBtn.innerHTML = 'VER RESULTADO <span>→</span>';
  }
  $("progresso").style.width = `${(perguntaAtual + 1) / perguntasJogo.length * 100}%`;
  atualizarPremio();
  atualizarAjudas();
  proximaBtn.disabled = false;
}
function avancar() {
  tocar("click");
  if (finalizado) return finalizarJogo("erro");
  perguntaAtual++;
  if (perguntaAtual >= perguntasJogo.length) finalizarJogo("completo");
  else carregarPergunta();
}
function usarPulo() {
  if (pularUsado || finalizado || respondeu) return;
  pularUsado = true;
  perguntasVistas++;
  tocar("click");
  mensagemE.textContent = "Pergunta pulada. Seu prêmio foi mantido.";
  perguntaAtual++;
  atualizarAjudas();
  if (perguntaAtual >= perguntasJogo.length) finalizarJogo("completo");
  else carregarPergunta();
}
function usarEliminar() {
  if (eliminarUsado || respondeu || finalizado) return;
  eliminarUsado = true;
  tocar("click");
  const item = perguntasJogo[perguntaAtual];
  const erradas = embaralhar([0,1,2,3].filter(i => i !== item.correta)).slice(0,2);
  const botoes = [...alternativasE.querySelectorAll(".alternative")];
  erradas.forEach(i => { botoes[i].classList.add("eliminada"); botoes[i].disabled = true; });
  mensagemE.textContent = "Duas alternativas incorretas foram eliminadas.";
  atualizarAjudas();
}
function usarDobro() {
  if (dobrarUsado || finalizado) return;
  dobrarUsado = true;
  premioAtual = Math.min(PREMIO_MAXIMO, premioAtual * 2);
  tocar("final");
  atualizarPremio();
  atualizarAjudas();
  mensagemE.textContent = premioAtual === PREMIO_MAXIMO ? "Prêmio máximo atingido: R$ 1.000.000!" : "Prêmio dobrado! Boa sorte na próxima.";
}
function finalizarJogo(motivo) {
  finalizado = true;
  jogoTela.classList.add("hidden");
  resultadoTela.classList.remove("hidden");
  $("premio-final").textContent = formatarDinheiro(premioAtual);
  $("acertos-final").textContent = acertos;
  $("perguntas-final").textContent = `${perguntasVistas}/50`;
  $("aproveitamento-final").textContent = `${perguntasVistas ? Math.round(acertos / perguntasVistas * 100) : 0}%`;
  let titulo = "Boa tentativa!";
  let mensagem = `${nomeJogador}, você concluiu o desafio e guardou ${formatarDinheiro(premioAtual)}. Continue estudando e volte para tentar superar seu resultado!`;
  if (motivo === "desistencia") {
    titulo = "Você jogou com estratégia!";
    mensagem = `${nomeJogador}, você decidiu parar e garantiu o prêmio acumulado. Saber a hora de parar também faz parte do jogo!`;
  } else if (motivo === "completo" && acertos === 50) {
    titulo = "VOCÊ É O MILHÃO!";
    mensagem = `Incrível, ${nomeJogador}! Você acertou todas as 50 perguntas. Uma conquista extraordinária!`;
    tocar("final");
  } else if (acertos >= 35) {
    titulo = "Parabéns, mestre do conhecimento!";
    mensagem = `${nomeJogador}, excelente desempenho! Você mostrou que tem uma ótima base de conhecimentos.`;
    tocar("final");
  } else if (acertos >= 20) {
    titulo = "Muito bem!";
    mensagem = `${nomeJogador}, bom trabalho! Você acertou ${acertos} perguntas. Continue praticando para chegar ainda mais longe.`;
  } else if (acertos >= 1) {
    titulo = "Boa tentativa!";
    mensagem = `${nomeJogador}, cada pergunta é uma oportunidade de aprender. Você acertou ${acertos}; tente novamente e melhore seu recorde.`;
  } else {
    titulo = "Todo desafio ensina!";
    mensagem = `${nomeJogador}, o importante é aprender durante o caminho. Revise os temas e tente novamente!`;
  }
  $("resultado-titulo").textContent = titulo;
  $("resultado-mensagem").textContent = mensagem;
}
function iniciarJogo() {
  perguntaAtual = 0; premioAtual = 0; acertos = 0; respondeu = false; finalizado = false;
  dobrarUsado = false; pularUsado = false; eliminarUsado = false; perguntasVistas = 0;
  perguntasJogo = embaralhar(perguntas);
  $("boas-vindas").textContent = `Boa sorte, ${nomeJogador}!`;
  $("dobrar-btn").querySelector("small").textContent = "Dobre seu prêmio atual";
  $("pular-btn").querySelector("small").textContent = "Avance sem responder";
  $("eliminar-btn").querySelector("small").textContent = "Remova duas alternativas";
  loginTela.classList.add("hidden"); resultadoTela.classList.add("hidden"); jogoTela.classList.remove("hidden");
  carregarPergunta();
}
$("login-form").addEventListener("submit", e => {
  e.preventDefault();
  nomeJogador = $("nome-jogador").value.trim() || "Jogador";
  tocar("click");
  iniciarJogo();
});
proximaBtn.addEventListener("click", avancar);
$("pular-btn").addEventListener("click", usarPulo);
$("eliminar-btn").addEventListener("click", usarEliminar);
$("dobrar-btn").addEventListener("click", usarDobro);
$("desistir-btn").addEventListener("click", () => {
  if (confirm(`Deseja desistir e guardar ${formatarDinheiro(premioAtual)}?`)) {
    tocar("click"); finalizarJogo("desistencia");
  }
});
$("som-btn").addEventListener("click", () => {
  somLigado = !somLigado;
  $("som-status").textContent = somLigado ? "Som ligado" : "Som desligado";
  $("som-btn").firstChild.textContent = somLigado ? "♫ " : "♪ ";
  if (somLigado) tocar("click");
});
$("sair-btn").addEventListener("click", () => {
  if (confirm("Deseja sair e encerrar esta partida? O prêmio atual será exibido no resultado.")) finalizarJogo("desistencia");
});
$("reiniciar-btn").addEventListener("click", () => { tocar("click"); iniciarJogo(); });
$("trocar-jogador-btn").addEventListener("click", () => {
  resultadoTela.classList.add("hidden"); jogoTela.classList.add("hidden"); loginTela.classList.remove("hidden");
  $("nome-jogador").value = "";
  $("nome-jogador").focus();
});
