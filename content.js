document.getElementById('login_box').style.display = 'none'

document.getElementById('container').querySelectorAll('section')[1].style.display = 'none'

document.getElementById('top').querySelector('header').style.display = 'none'
document.getElementById('top').querySelector('footer').style.display = 'none'

const toplist = document.getElementById('top').querySelectorAll('div');

toplist.forEach(e => {
  const banlist = ['visit_bookmark', 'gnb_bar']


  if (banlist.includes(e.className)) e.style.display = 'none'
})