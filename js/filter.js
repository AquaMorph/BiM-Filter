var banned_items_five_ever = [ "star wars", "star trek", "superman", "batman", "far cry", "captain america","gandalf","darth maul","obi wan","groot","james bond","big hero 6","doctor who","dark knight","marvel","deadpool","guardians of the galaxy","seinfeld","darth vadar","anakin skywalker","avengers","dc","bionicle" ]

function filter() {
    var films = document.getElementsByClassName('main-item');
    var IPcount = 0;
    for(i=0; i <= films.length; i++) {
        if (films[i]) {
            var title = films[i].getElementsByTagName('div')[0].getElementsByTagName('h3')[0].getElementsByTagName('a')[0].textContent;
            for (x in banned_items_five_ever) {
                if (title.toLowerCase().indexOf(banned_items_five_ever[x]) > -1) {
                    films[i].style.backgroundColor = "#000000";
                    films[i].style.display = "none";
                    IPcount++;
                    break;
                }
            }
        }
    }
    var percent = IPcount / films.length * 100;
    document.getElementsByClassName('item-info')[0].innerHTML = document.getElementsByClassName('item-info')[0].innerHTML + " Number of IP films hidden " + IPcount + " or " + percent + "%";
    //window.alert(IPcount + " or " + percent + "%");
}

filter();