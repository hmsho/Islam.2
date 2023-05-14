const openModa1Buttons = document.querySelectorAll('[data-modal-target]')
const closeModa1Buttons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementsById('overlay')

openModa1Buttons.forEach(button => {
  button.addEventListener('click', () =>{
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click',() => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closemodal(modal)
  })
})

closeModa1Buttons.forEach(button => {
  button.addEventListener('click', () =>{
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openmodal(modal) {
  if (modal == null) return
    modal.classlist.add('active')
    overlay.classlist.add('active')
}

function closemodal(modal) {
  if (modal == null) return
    modal.classlist.remove('active')
    overlay.classlist.remove('active')


}