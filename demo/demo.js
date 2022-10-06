window.addEventListener('load', function () {
    
    const $previews = document.querySelectorAll('[data-preview]');

    $previews.forEach(el => {
        
        const config = JSON.parse(el.getAttribute('data-preview'));

        if (typeof config['offset'] === 'undefined') {
            config['offset'] = '0';
        }

        if (typeof config['html'] === 'undefined') {
            config['html'] = 'outer';
        }

        el.removeAttribute('data-preview');
        const regex = new RegExp('(\G|^) {'+config['offset']+'}', 'gm');
        var html = el.outerHTML;
        
        if (config['html'] === 'inner') {
            html = el.innerHTML;
        }
        
        html = html.trim().split("\n").map(line => line.replace(regex, '')).join("\n");
        
        const figureEl = document.createElement('figure');
        const preEl = document.createElement('pre');
        const codeEl = document.createElement('code');
        const content = document.createTextNode(html);
        codeEl.appendChild(content);
        preEl.appendChild(codeEl);
        figureEl.appendChild(preEl);
        figureEl.className = 'preview';
        
        if (typeof config['details'] !== 'undefined') {
            const detailsEl = document.createElement('details');
            const summaryEl = document.createElement('summary');
            
            if (config['details'] === 'open') {
                detailsEl.setAttribute('open', '');
            }
            
            summaryEl.innerHTML = 'Show code';
            detailsEl.className = 'preview';
            detailsEl.appendChild(summaryEl);
            detailsEl.appendChild(figureEl);
            el.insertAdjacentHTML('afterend', detailsEl.outerHTML);
        } else {
            el.insertAdjacentHTML('afterend', figureEl.outerHTML);
        }        
    });
});