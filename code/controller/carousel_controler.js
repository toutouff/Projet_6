let pos = 0

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
  let slider = await make_slider(category)
  slider_setter(await slider)
  parent.appendChild(await slider)
}

function slider_setter(slider_doc){
  let pos = 0
  let card_list = slider_doc.getElementsByClassName('card_item')
  update_slide(card_list)
  let btn_list = slider_doc.getElementsByClassName('carousel_btn')
  for (let btn of btn_list){
    switch (btn.innerText) {
      case '<':
        btn.onclick = function(){left(card_list)}
        break;
      case '>':
        btn.onclick = function(){right(card_list)}
        break;
    }
  }
  function left(card_list) {
    if (pos > 0){
      pos--
    }
    else if (pos == 0){
      pos = card_list.length - 1
    }
    update_slide(card_list)
  }
  function right(card_list) {
    if (pos < card_list.length -1){
      pos ++
    }
    else if (pos == card_list.length-1)
    {
      pos = 0
    }
    update_slide(card_list)
  }

  function update_slide(card_list){
    for(let card of card_list){
      card.classList.remove('--visible')
      card.classList.add('--hidden')
    }
    let actual_card = card_list[pos]
    actual_card.classList.remove('--hidden')
    actual_card.classList.add('--visible')
  }

}
