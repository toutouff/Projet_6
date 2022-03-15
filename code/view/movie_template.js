/**
 * gen the modal html document
 * @method render_modal
 * @param  {[Json]}     data               [the json from fetch_modal]
 * @return {[Document]}          [the modal html document]
 */
function render_modal(data){
  let modal_title = create_element('h3','modal_title',data.title)
  let modal_img = create_element('img','modal_img',data.image_url,true)
  let modal_info = create_element('div','modal_info','')
  let modal_genres = create_element('p','modal_genres','genres : '+data.genres)
  let modal_outDate = create_element('p','modal_out_date','date de sortie : '+data.date_published)
  let modal_rated = create_element('p','modal_rated','rated : '+data.rated)
  let modal_imdb = create_element('p','modal_imdb','score imdb : '+data.imdb_score)
  let modal_directors = create_element('p','modal_directors','réalisateur : '+data.directors)
  let modal_actors = create_element('p','modal_actors','disribution : '+data.actors)
  let modal_duration = create_element('p','duration','durée : ' +data.duration)
  let modal_country = create_element('p','modal_country','pays : '+data.countries)
  let modal_boxOffice = create_element('p','boxOffice','resultat au boxOffice : '+data.worldwide_gross_income)
  let modal_longDescription = create_element('p','longDescription',data.long_description)
  let modal_closeButton = create_element('span','modal_closeButton','&times;')
  modal_info.append(modal_closeButton,modal_title,modal_img,modal_genres,modal_outDate,modal_rated,modal_imdb,modal_directors,modal_actors,modal_duration,modal_country,modal_boxOffice,modal_longDescription)
  return modal_info
}
/**
 * gen the inline html movie block/document
 * @method render_inline_card
 * @param  {[json]}           data               [the json from fetch_category]
 * @return {[Document]}       inline_card        [the html document]
 */
function render_inline_card(data){
  let inline_card = create_element('div','inline_card','')
  inline_card.setAttribute('data-id',data.id)
  let inline_img = create_element('img','inline_img',data.image_url,true)
  let inline_infos = create_element('div','inline_infos','')
  let infos_title = create_element('h3','infos_title',data.title)
  let infos_directors = create_element('p','infos_directors',data.directors)
  let infos_year = create_element('p','infos_year',data.year)
  let infos_rating = create_element('p','infos_rating',data.imdb_score)
  let infos_vote = create_element('p','vote',data.votes)
  inline_infos.append(infos_title,infos_directors,infos_year,infos_rating,infos_vote)
  inline_card.append(inline_img,inline_infos)
  return inline_card
}
/**
 * gen card block
 * @method render_card
 * @param  {String}    title                   [from movie class]
 * @param  {String}    image_url               [from movie class]
 * @param  {Integer}    id                      [for the fetching of the modal]
 * @return {[Document]}              [card to add to the slider document]
 */
function render_card(title,image_url,id) {
  let card = create_element('div','card_item','');
  let card_title = create_element('h2','card_title',title)
  let card_img = create_element('img','card_img',image_url,true)
  card.setAttribute('data-id',id)
  card.append(card_title,card_img)
  return card
};
/**
 * simply create a html element
 * @method create_element
 * @param  {[type]}       type                            [the type of balise (div,h,p,...)]
 * @param  {[type]}       attribute_content               [name of the class]
 * @param  {[type]}       content                         [innterHTML if img = true then content=> source of the img]
 * @param  {Boolean}      [img=false]                     [if its an img or not]
 * @return {[type]}                         [description]
 */
function create_element(type,attribute_content,content,img = false) {
  let elmt = document.createElement(type);
  elmt.setAttribute('class',attribute_content)
  if (img) elmt.src = content
  else elmt.innerHTML = content
  return elmt;
}
