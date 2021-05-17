export default class ScrollSuave {
    constructor(links, options) {
        this.linksInternos = document.querySelectorAll(links);
        if (options === undefined) {
            this.options = { behavior: 'smooth', block: 'start' };
        } else {
            this.options = options;
        }

        this.scrollToSection = this.scrollToSection.bind(this);
    }

    scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView(this.options);

    }
    //scroll suave tbm
    //const topo = section.offsetTop;
    //window.scrollTo({
    //    top: topo,
    //   behavior:'smooth'

    //})

    addLinkEvent() {
        this.linksInternos.forEach((link) => {
            link.addEventListener('click', (event) => {
                this.scrollToSection(event);
            });
        });
    }

    init() {
        if (this.linksInternos.length) {
            this.addLinkEvent();
        }
        return this;
    }
}