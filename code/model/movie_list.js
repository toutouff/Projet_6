async function fetch_category(category,page) {
  let url = 'http://127.0.0.1:8000/api/v1/titles/?sort_by=+-imdb_score&genre=' + category
  if(page>1){
    url +=`&page=${page}`
  }
  let response = await fetch(url);
  if(response.ok){
    let data = await response.json();
    return await data
  }
}
async function fetch_slider_data(category){
  let data = await fetch_category(category,1)
  console.log(await data);
  let data2 = await fetch_category(category,2)
  console.log(await data2);
  data.results = await data.results.concat(await data2.results)
  console.log(await data.results)
  return await data
}
async function gen_slider(category,page){
  let slider = new Slider(category,await fetch_slider_data(category));
  return slider
}

class Slider {
  constructor(category,data) {
    this.category = category
    this.data = data
    this.card_list = []
  }
  gen_card_list(){
    for (let data of this.data.results){
      this.card_list.push(new Card(data))
    }
  }
}
//function data_cleaner(data_list) {
//  let url_list = []
//  for (let data of data_list){
//    for(let movie of data.results){
//      url_list.push(movie.url)
//    }
//  }
//  let clean_data = {
//    previous : data_list[0].previous,
//    next : data_list[data_list.length-1].next,
//    url_list:url_list
//  }
//  return clean_data
//}
//async function get_movies_url(category){
//  let category_data = await fetches_category(category)
//  let category_data_page2 = await fetches_category(category,2)
//  let clean_data = data_cleaner(await category_data,await category_data_page2)
//  return clean_data
//
