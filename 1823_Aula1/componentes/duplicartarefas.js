const BotaoDuplicar = () => {
  const botaoDuplicar = document.createElement('button')

  botaoDuplicar.classList.add('check-button')
  botaoDuplicar.innerText = 'duplicar'
  botaoDuplicar.addEventListener('click', duplicarTarefa)
  return botaoDuplicar
}

const duplicarTarefa = evento => {}

export default BotaoDuplicar
