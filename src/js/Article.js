export class Article {
    constructor({id, title, urlToImage, tags, ...rest }) {
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.tags = tags;
    }

    // Article generator

    generateArticle() {
        let tamplate = '';
        let article = document.createElement('article');
        article.className = 'strategy block-shadowed';
        article.setAttribute('data-id', this.id);

        this.urlToImage &&
        (tamplate += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`);

        if (this.title || this.tags) {
            tamplate += `<div class="strategy__content">`

            this.title &&
            (tamplate += `<h3 class="strategy__name">${this.title}</h3>`);

            if(this.tags) {
                tamplate += `<div class="strategy__tags tags">`

                this.tags.map(tag => {
                    tamplate += `<span class="tag tag_colored">${tag}</span>`
                })

                tamplate += `</div>`
            }
            
            tamplate += `</div>`
        }

        article.innerHTML = tamplate;
        return article;
    }
}