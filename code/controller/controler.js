/**
  * represent a function wich:
  * fetch the movie data from the card data-id
  * gen the modal html document
  * set the close modal button
    * set the modal display style to none
  * append the modal doc to the page
  * set the modal display style on block
  */
async function open_modal(id){
  let modal_placeHolder = document.getElementById('modal')
  let data = await fetch_modal(id)
  let modal_doc = render_modal(await data)
  modal_doc.getElementsByClassName('modal_closeButton')[0].onclick = function() {
    document.getElementById('modal').style.display = "none"
    document.getElementsByClassName('modal_info')[0].remove()
  }
  modal_placeHolder.appendChild(modal_doc)
  modal_placeHolder.style.display = 'block'
}
/**
  * set the card onclick to open the modal
  */
function modal_setter(card_doc){
  card_doc.onclick = function(){open_modal(card_doc.getAttribute('data-id'))}
}
/**
  * represent a function which
  * fetch the movie  data
  * gen the inline card html doc
  * set the inline card onclick to open the modal
  */
async function inline_card_maker(){
  let data = await fetch_category('',1)
  let inline_card = render_inline_card(await data.results[0])
  inline_card.onclick = function(){open_modal(inline_card.getAttribute('data-id'))}
  return await inline_card
}
/**
  * represent a function which 
  * get the inline_card
  * add the inline movie card into the document
  */
async function append_inline_card(parent){
  let inline_card = await inline_card_maker()
  parent.appendChild(await inline_card)
}
