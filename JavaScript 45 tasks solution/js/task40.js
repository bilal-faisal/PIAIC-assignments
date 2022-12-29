// Task 40
// Album

function make_album(name, title, track_count = -1) {
  let person_obj = {
    artist_name: name,
    album_title: title,
  };

  if(track_count !== -1){
    person_obj.tracks = track_count;
  }

  return person_obj;
}

console.log(make_album("Tailor", "Blank Space"));
console.log(make_album("Atif", "Dooriyan"));
console.log(make_album("Arijit", "Aaashiqui", 5));
