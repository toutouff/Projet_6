async function make_slider(category){
  let slider = await gen_slider(category,1)
  slider.gen_card_list()
  let slider_doc = render_slider(category)
  let card_list = slider_doc.getElementsByClassName('card_list')[0]
  for (let card_data of await slider.card_list){
    let card_doc = render_card(card_data.title,card_data.image_url,card_data.id)
    card_doc.onclick = function(){open_modal(card_doc.getAttribute('data-id'))}
    card_list.appendChild(card_doc)
  }
  return await slider_doc
}
async function append_slider(parent, category){
  parent.appendChild(await make_slider(category))
}
