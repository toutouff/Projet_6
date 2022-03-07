async function open_modal(id){
  //get_parent_node(document.getElementById('modal_content'))
  //fetch_modal_data
  //gen_modal_doc(modal_data)
  //append_modal(parentNode)
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
function modal_setter(card_doc){
  card_doc.onclick = function(){open_modal(card_doc.getAttribute('data-id'))}
}

async function inline_card_maker(){
  let data = await fetch_category('',1)
  let inline_card = render_inline_card(await data.results[0])
  inline_card.onclick = function(){open_modal(inline_card.getAttribute('data-id'))}
  return await inline_card
}
async function append_inline_card(parent){
  let inline_card = await inline_card_maker()
  parent.appendChild(await inline_card)
}
