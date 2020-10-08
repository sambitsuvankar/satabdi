console.log("This is tutorial 40 and project_3")



//Initialize the news API parameters
let source = 'in'
let apiKey = 'cfc3961fb94941d2bdf2dd650c8b0052'
//Greb news container
let newsAccordion = document.getElementById('newsAccordion');

//create an AJAX GET request
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`, true);

//What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles
        console.log(articles)
        // console.log(articles)
        let newsHtml = "";
        articles.forEach(function (element,index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                        <span class="badge badge-info"><b>Breaking News ${index+1} : </b></span> ${element.title}  /*or we can write here as ${element["title"]} */
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-parent="#newsAccordion">
                                <div class="card-body">
                                 ${element.description}. <a href="${element.url}" target="_blank">Read more information here.</a>   /*or we can write here as ${element["description"]} */
                                </div>
                            </div>
                        </div>`
            newsHtml += news;
        })

        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some Error occured")
    }
}
xhr.send()

