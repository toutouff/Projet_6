/**
 * fetch movie_Data
 * @method get_movie
 * @param  {[String]}  url               for fetch request
 * @return {[JSON]} data
 */
async function fetch_movie(url) {
  let response = await fetch(url);
  if (response.ok) {
    let data = await response.json();
    return await data;
  }
}

async function fetch_modal(id){
  let url = 'http://127.0.0.1:8000/api/v1/titles/'+id
  let response = await fetch(url)
  if (response.ok) {
    let data = await response.json();
    return await data
  }
}

class Card{
  constructor(data){
    this.data = data;
    this.image_url = data.image_url;
    this.title = data.title;
    this.id = data.id;
  }
}
