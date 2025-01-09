class Rectangle {
    constructor(x, y, width, height) {
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
    }

    isScore(player)
    {
        const pw = this.x + this.width - this.height;
        const ph = this.y + this.height - this.width;
        const px = player.x - player.radius;
        const py = player.y - player.radius;

        return (this.width > this.height ? (px >= pw && (px <= pw + player.speed)) : (py >= ph && (py <= ph + player.speed)));
    }
   
    contains(player) {
        const left = this.x + player.radius;
        const right = this.x + this.width - player.radius;
        const top = this.y + player.radius;
        const bottom = this.y + this.height - player.radius;
        return (
            player.x >= left &&
            player.x <= right &&
            player.y >= top &&
            player.y <= bottom
        );
    }
    
    draw(ctx) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
 }