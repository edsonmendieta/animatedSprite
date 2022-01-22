class RunningKid {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./running_kid_sprite.png"), 0, 0, 210, 220, 4, .2); // 0.2 seconds duration of animation
	
		this.x = 0;
		this.y = 0;
		this.speed = 300;
	};

	update() {
		this.x += this.speed*this.game.clockTick;
		if (this.x > 1024) this.x = 0;
	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
	};
}
