/**
 * [fetch an api page]
 * @method fetch_category
 * @param  {String}       category               [the category of the slider]
 * @param  {Integer}       page                   [the page for the api]
 * @return {JSON}          data                   [the json containing the api response]
 */
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

/**
 * [fetch 2 api page and merge data]
 * @method fetch_slider_data
 * @param  {String}          category               [the category of the slider]
 * @return {JSON}          data               [the json containing api response]
 */
async function fetch_slider_data(category){
  let data = await fetch_category(category,1)
  console.log(await data);
  let data2 = await fetch_category(category,2)
  console.log(await data2);
  data.results = await data.results.concat(await data2.results)
  console.log(await data.results)
  return await data
}

/**
 * intanciate a slider object
 * @method gen_slider
 * @param  {[type]}   category               [for the fetch of data]
 * @return {[Slider]}   slider                 [to easly access most used data]
 */
async function gen_slider(category){
  let slider = new Slider(category,await fetch_slider_data(category));
  return slider
}
/**
 * class to easly access most used data
 *
 */
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
