
main()

function main(){
  let fav_movie = document.getElementById('best_movie')
  append_inline_card(fav_movie)
  let sliders_placeholders = document.getElementsByClassName('slider')
  for (let slider_placeholder of sliders_placeholders){
    append_slider(slider_placeholder,slider_placeholder.getAttribute('categorie'))
  }
}
