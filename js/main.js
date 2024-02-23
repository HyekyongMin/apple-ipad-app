// basket
const basketStarterEl = document.querySelector('header .basket-starter');
const basketEl = basketStarterEl.querySelector('.basket');

basketStarterEl.addEventListener('click', function(event){
  event.stopPropagation()
  if(basketEl.classList.contains('show')) {
    basketEl.classList.remove('show')
  } else {
    basketEl.classList.add('show')
  }
});
basketEl.addEventListener('click', function(event){
  event.stopPropagation();
});

window.addEventListener('click', function(){
  basketEl.classList.remove('show');
}); 

// search
const headerEl = document.querySelector('header')
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]
const searchWrapEl = headerEl.querySelector('.search-wrap')
const searchStarterEl = headerEl.querySelector('.search-starter')
const searchcloserEl = headerEl.querySelector('.search-closer')
const searchShadowEl = headerEl.querySelector('.shadow')
const searchInputEl = searchWrapEl. querySelector('input')
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')]

searchStarterEl.addEventListener('click', showSearch) 
searchcloserEl.addEventListener('click', hideSearch)
searchShadowEl.addEventListener('click', hideSearch)

function showSearch() {
  headerEl.classList.add('searching')
  document.documentElement.classList.add('fixed')
  headerMenuEls.reverse().forEach(function(el, index) {
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
  })
  searchDelayEls.forEach(function(el, index){
    el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
  })
  setTimeout(function(){
    searchInputEl.focus()
  }, 600)
}
function hideSearch() {
  headerEl.classList.remove('searching')
  document.documentElement.classList.remove('fixed')
  headerMenuEls.reverse().forEach(function(el, index) {
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
  })
  searchDelayEls.reverse().forEach(function(el, index){
    el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
  })
  searchDelayEls.reverse()
  searchInputEl.value = ''
}

