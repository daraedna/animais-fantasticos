export default class AnimaNumeros {
    constructor(numeros, observerTarget, observerClass) {
        this.numeros = document.querySelectorAll(numeros);
        this.observerTarget = document.querySelector(observerTarget);
        this.observerClass = observerClass;

        this.handleMutation = this.handleMutation.bind(this);
    }

    static incrementarNumero(numero) {
        const total = +numero.innerText;
        const incremento = Math.floor(total / 100);

        let start = 0;
        const timer = setInterval(() => {
            start += incremento
            numero.innerText = start;

            if (start > total) {
                numero.innerText = total;
                clearInterval(timer);
            }
        }, 25 * Math.random());
    }

    animaNumeros() {
        this.numeros.forEach(numero => {
            this.constructor.incrementarNumero(numero)
        })
    }

    handleMutation(mutation) { //mutation é parecido com o event
        if (mutation[0].target.classList.contains(this.observerClass)) {
            this.observer.disconnect();
            this.animaNumeros();
        }
    }

    addMutationOberser() {
        this.observer = new MutationObserver(this.handleMutation);
        this.observer.observe(this.observerTarget, { attributes: true })
    }

    init() {
        this.addMutationOberser();
        return this;
    }
}
