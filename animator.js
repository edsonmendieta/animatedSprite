// animates one animation
class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, { spritesheet, xStart, yStart, width, height, frameCount, frameDuration }); // copies all the parameters into our object

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y) { // tick = how long its been, the context to draw to, x & y are where we want to draw it on the canvas, 

        this.elapsedTime += tick;
        if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
        const frame = this.currentFrame();

        ctx.drawImage(this.spritesheet, 
            this.xStart + this.width*frame, this.yStart, // this is the location on the spritesheet from which we want to draw from 
            this.width, this.height, // how big of a frame we're using from there
            x, y, // location on the Canvas where we want to draw it. These are also just the x & y that are passed in as arguments 
            this.width, this.height); // how big we want to draw it
    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
};