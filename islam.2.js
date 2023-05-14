const openshahadahButtons = document.querySelectorAll('[data-shahadah-target]')
const closeshahadahButtons = document.querySelectorAll('[data-close-button]')
const opensalahButtons = document.querySelectorAll('[data-salah-target]')
const closesalahButtons = document.querySelectorAll('[data-close-button]')
const opensawmButtons = document.querySelectorAll('[data-sawm-target]')
const closesawmButtons = document.querySelectorAll('[data-close-button]')
const openzakatButtons = document.querySelectorAll('[data-zakat-target]')
const closezakatButtons = document.querySelectorAll('[data-close-button]')
const openhajjButtons = document.querySelectorAll('[data-hajj-target]')
const closehajjButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openshahadahButtons.forEach(button => {
  button.addEventListener('click', () => {
    const shahadah = document.querySelector(button.dataset.shahadahTarget)
    openShahadahModal(shahadah)
  })
})

closeshahadahButtons.forEach(button => {
  button.addEventListener('click', () => {
    const shahadah = button.closest('.shahadah')
    closeShahadahModal(shahadah)
  })
})

overlay.addEventListener('click', () => {
  const shahadah = document.querySelector('.shahadah.active')
  if (shahadah) {
    closeShahadahModal(shahadah)
  }
})

opensalahButtons.forEach(button => {
  button.addEventListener('click', () => {
    const salah = document.querySelector(button.dataset.salahTarget)
    openSalahModal(salah)
  })
})

closesalahButtons.forEach(button => {
  button.addEventListener('click', () => {
    const salah = button.closest('.salah')
    closeSalahModal(salah)
  })
})

overlay.addEventListener('click', () => {
  const salah = document.querySelector('.salah.active')
  if (salah) {
    closeSalahModal(salah)
  }
})

opensawmButtons.forEach(button => {
  button.addEventListener('click', () => {
    const sawm = document.querySelector(button.dataset.sawmTarget)
    openSawmModal(sawm)
  })
})

closesawmButtons.forEach(button => {
  button.addEventListener('click', () => {
    const sawm = button.closest('.sawm')
    closeSawmModal(sawm)
  })
})

overlay.addEventListener('click', () => {
  const sawm = document.querySelector('.sawm.active')
  if (sawm) {
    closeSawmModal(sawm)
  }
})

openzakatButtons.forEach(button => {
  button.addEventListener('click', () => {
    const zakat = document.querySelector(button.dataset.zakatTarget)
    openZakatModal(zakat)
  })
})

closezakatButtons.forEach(button => {
  button.addEventListener('click', () => {
    const zakat = button.closest('.zakat')
    closeZakatModal(zakat)
  })
})


overlay.addEventListener('click', () => {
  const zakat = document.querySelector('.zakat.active')
  if (zakat) {
    closeZakatModal(zakat)
  }
})

openhajjButtons.forEach(button => {
  button.addEventListener('click', () => {
    const hajj = document.querySelector(button.dataset.hajjTarget)
    openHajjModal(hajj)
  })
})

closehajjButtons.forEach(button => {
  button.addEventListener('click', () => {
    const hajj = button.closest('.hajj')
    closeHajjModal(hajj)
  })
})


overlay.addEventListener('click', () => {
  const hajj = document.querySelector('.hajj.active')
  if (zakat) {
    closeZakatModal(hajj)
  }
})

function openShahadahModal(shahadah) {
  if (shahadah == null) return
  shahadah.classList.add('active')
  overlay.classList.add('active')
}

function closeShahadahModal(shahadah) {
  if (shahadah == null) return
  shahadah.classList.remove('active')
  overlay.classList.remove('active')
}

function openSalahModal(salah) {
  if (salah == null) return
  salah.classList.add('active')
  overlay.classList.add('active')
}

function closeSalahModal(salah) {
  if (salah == null) return
  salah.classList.remove('active')
  overlay.classList.remove('active')
}

function openSawmModal(sawm) {
  if (sawm == null) return
  sawm.classList.add('active')
  overlay.classList.add('active')
}

function closeSawmModal(sawm) {
  if (sawm == null) return
  sawm.classList.remove('active')
  overlay.classList.remove('active')
}

function openZakatModal(zakat) {
  if (zakat == null) return
  zakat.classList.add('active')
  overlay.classList.add('active')
}

function closeZakatModal(zakat) {
  if (zakat == null) return
  zakat.classList.remove('active')
  overlay.classList.remove('active')
}
function openHajjModal(hajj) {
  if (hajj == null) return
  hajj.classList.add('active')
  overlay.classList.add('active')
}

function closeHajjModal(hajj) {
  if (hajj == null) return
  hajj.classList.remove('active')
  overlay.classList.remove('active')
}

