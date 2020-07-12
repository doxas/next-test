
export default class WebGLFrame {
    constructor(canvas){
        window.addEventListener('keydown', (evt) => {
            switch(evt.key){
                case 'Escape':
                    console.log('🍆');
                    break;
            }
        }, false);
        this.c = canvas;
        this.ctx = this.c.getContext('2d');
    }
    render(color){
        const bound = this.c.parentElement.getBoundingClientRect();
        this.c.width = bound.width;
        this.c.height = bound.height;
        this.ctx.fillStyle = color;
        this.ctx.fillRect(100, 100, this.c.width - 200, this.c.height - 200);
    }
}

