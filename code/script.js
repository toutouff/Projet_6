
main()

function main(){
  let sliders_placeholders = document.getElementsByClassName('slider')
  for (let slider_placeholder of sliders_placeholders){
    append_slider(slider_placeholder,slider_placeholder.getAttribute('categorie'))
  }
}
