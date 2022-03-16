/**
 * get the slider document and the data from the model and template and set
 * all event listener
 * append to the slider all the movie card linked to itself
 * @method make_slider
 * @param  {[String]}    category               [to send it to the fetch ]
 * @return {[Document]}             [a full docment ready to be added to the dom]
 */
async function make_slider(category){
  let slider = await gen_slider(category)
  slider.gen_card_list()
  if(category==''){category = 'meilleurs notes'}
  let slider_doc = render_slider(category)
  let card_list = slider_doc.getElementsByClassName('card_list')[0]
  for (let card_data of await slider.card_list){
    let card_doc = render_card(card_data.title,card_data.image_url,card_data.id)
    card_doc.onclick = function(){open_modal(card_doc.getAttribute('data-id'))}
    card_list.appendChild(card_doc)
  }
  return await slider_doc
}
/**
 * call make_slider and then append it to the page
 * @method append_slider
 * @param  {[Document]}      parent                 [the node to append]
 * @param  {[String]}      category               [the category for getting the data]
 */
async function append_slider(parent, category){
  let slider = await make_slider(category)
  slider_setter(await slider)
  parent.appendChild(await slider)
}

/**
 * set the envent on the slider
 * @method slider_setter
 * @param  {[Document]}      slider_doc               [the slider to set]
 */
function slider_setter(slider_doc){
  let slider_width = 4
  let min_pos = slider_width - slider_width
  let max_pos = slider_width - 1
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
  /**
   * move pos to the left
   * @method left
   * @param  {[type]} card_list               [to update the status of evry card]
   */
  function left(card_list) {
    if (min_pos > 0){
      min_pos--
      max_pos--
    }
    else if (min_pos == 0){
      max_pos = card_list.length -1
      min_pos = card_list.length -slider_width
    }
    update_slide(card_list)
  }
  /**
   * move pos to the right
   * @method right
   * @param  {[type]} card_list               [to update the status of evry card]
   */
  function right(card_list) {
    if (max_pos < card_list.length -1){
      min_pos++
      max_pos++
    }
    else if (max_pos == card_list.length-1)
    {
      min_pos = 0
      max_pos = slider_width - 1
    }
    update_slide(card_list)
  }
  /**
   * update the status of a card in function of the slider --visible position
   * @method update_slide
   * @param  {[type]}     card_list               [to change the status of a card]
   */
  function update_slide(card_list){
    console.log('update_slide')
    for(let card of card_list){
      card.classList.remove('--visible')
      card.classList.add('--hidden')
    }
    for(let i = min_pos; i<=max_pos;i++){
      console.log(`index du film ${i} min ${min_pos} max ${max_pos}`)
      let temp_card = card_list[i]
      temp_card.classList.remove('--hidden')
      temp_card.classList.add('--visible')
    }
  }

}
