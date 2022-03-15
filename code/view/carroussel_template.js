/**
 * gen the html document
 * @method render_slider
 * @param  {[String]}      category               [to show the name of the fetched category]
 * @return {[Document]}               [the html  document]
 */
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
