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
  card_doc.onclick = open_modal(card_doc.getAttribute('data-id'))
}
