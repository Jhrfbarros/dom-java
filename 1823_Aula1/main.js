//Importando os outros componentes js para a main
import BotaoConclui from './componentes/concluirtarefas.js'
import BotaoDeleta from './componentes/deletarTarefas.js'
import BotaoDuplicar from './componentes/duplicartarefas.js'

//criando evendo prevenindo o reset da pagina, mais aplicacao do evento apresentando o valor no final da interacao com o botao
const criarTarefa = evento => {
  evento.preventDefault()

  const lista = document.querySelector('[data-list]')
  const input = document.querySelector('[data-form-input]')
  const valor = input.value

  const tarefa = document.createElement('li')
  tarefa.classList.add('task')
  const conteudo = `<p class="content">${valor}</p>`

  tarefa.innerHTML = conteudo

  //codigo aplicado para fazer interacao ao adicionar tarefas entre pai e filho para que nao sobreponha o anterior
  tarefa.appendChild(BotaoConclui())
  tarefa.appendChild(BotaoDuplicar())
  tarefa.appendChild(BotaoDeleta())
  lista.appendChild(tarefa)
  input.value = ''
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)
