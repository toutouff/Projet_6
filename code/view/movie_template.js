function render_modal(data){
  let modal_title = create_element('h3','modal_title',data.title)
  let modal_img = create_element('img','modal_img',data.image_url,true)
  let modal_info = create_element('div','modal_info','')
  let modal_genres = create_element('p','modal_genres',data.genres)
  let modal_outDate = create_element('p','modal_out_date',data.date_published)
  let modal_rated = create_element('p','modal_rated',data.rated)
  let modal_imdb = create_element('p','modal_imdb',data.imdb_score)
  let modal_directors = create_element('p','modal_directors',data.directors)
  let modal_actors = create_element('p','modal_actors',data.actors)
  let modal_duration = create_element('p','duration',data.duration)
  let modal_country = create_element('p','modal_country',data.countries)
  let modal_boxOffice = create_element('p','boxOffice',data.worldwide_gross_income)
  let modal_longDescription = create_element('p','longDescription',data.long_description)
  let modal_closeButton = create_element('span','modal_closeButton','&times;')
  modal_info.append(modal_closeButton,modal_title,modal_img,modal_genres,modal_outDate,modal_rated,modal_imdb,modal_directors,modal_actors,modal_duration,modal_country,modal_boxOffice,modal_longDescription)
  return modal_info
}

function render_card(title,image_url,id) {
  let card = create_element('div','card_item','');
  let card_title = create_element('h2','card_title',title)
  let card_img = create_element('img','card_img',image_url,true)
  card.setAttribute('data-id',id)
  card.append(card_title,card_img)
  return card
};

function create_element(type,attribute_content,content,img = false) {
  let elmt = document.createElement(type);
  elmt.setAttribute('class',attribute_content)
  if (img) elmt.src = content
  else elmt.innerHTML = content
  return elmt;
}

/*function event_setter(card){
  let modal = card.getElementsByClassName('modal')[0]
  let close_button = card.getElementsByClassName('modal_closeButton')[0]
  card.onclick = function(){
    modal.style.display = 'block'
  }
  close_button.onclick = function(){
    event.stopPropagation()
    modal.style.display = 'none'
  }
}*/

/*L’image de la pochette du film
Le Titre du film
Le genre complet du film
Sa date de sortie
Son Rated
Son score Imdb
Son réalisateur
La liste des acteurs
Sa durée
Le pays d’origine
Le résultat au Box Office
Le résumé du film*/
