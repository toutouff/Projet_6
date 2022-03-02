function render_slider(category){
  let movie_list_div = create_element('div','movie_list','')
  let carousel = create_element('div','carousel','')
  let right_btn = create_element('span','carousel_btn','>')
  let left_btn = create_element('span','carousel_btn','<')
  let title = create_element('h2','carroussel_title',category)
  let ul = create_element('ul','card_list','')
  carousel.append(left_btn,ul,right_btn)
  movie_list_div.append(title,carousel)
  return movie_list_div
}

/*function slider_seter(carousel){
  let slide_pos_min = 0
  let slide_pos_max = 6
  const slides = carousel.getElementsByClassName('movie_card')
  tot_slides = slides.length
  console.log()
  function update_slide(slides){
    for(let i = 0; i < tot_slides; i++){
      let slide = slides.item(i)
      if (slide_pos_min <=i & i <= slide_pos_max ){
        slide.classList.toggle('--visible')
      }
      else{
        slide.classList.toggle('--hidden')
      }
    }
  }
  update_slide(slides)
  function right(){
    slide_pos_min ++
    slide_pos_max ++
    update_slide(slides)
  }
  right()
}*/
