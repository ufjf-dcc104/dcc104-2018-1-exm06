function Sprite(map) {
  this.x = 0;
  this.vx = 0;
  this.gx = 0;
  this.y = 0;
  this.vy = 0;
  this.gy = 0;
  this.s = 8;

  this.map = map;
}

Sprite.prototype.mover = function (dt) {
  this.gx = Math.floor(this.x/this.map.s);
  this.gy = Math.floor(this.y/this.map.s);

  if(this.vx<0 && this.map.cell[this.gy][this.gx-1]!==0){
    var limite = (this.gx)*this.map.s;
    var maxDx = limite-(this.x-this.s/2);
    var Dx = this.vx *dt;
    this.x += Math.max(Dx, maxDx);
  } else if( this.vx >0 && this.map.cell[this.gy][this.gx+1]!==0){
    var limite = (this.gx+1)*this.map.s;
    var maxDx = limite-(this.x+this.s/2);
    var Dx = this.vx *dt;
    this.x += Math.min(Dx, maxDx);
  }else {
    this.x += this.vx*dt;
  }

  if((this.vy)<0 && this.map.cell[this.gy-1][this.gx]!==0){
    var limite = (this.gy)*this.map.s;
    var maxDy = limite-(this.y-this.s/2);
    var Dy = (this.vy) *dt;
    this.y += Math.max(Dy, maxDy);
  } else if((this.vy) >0 && this.map.cell[this.gy+1][this.gx]!==0){
    var limite = (this.gy+1)*this.map.s;
    var maxDy = limite-(this.y+this.s/2);
    var Dy = (this.vy) *dt;
    this.y += Math.min(Dy, maxDy);
  }else {
    this.y += (this.vy)*dt;
  }


};

Sprite.prototype.desenhar = function (ctx) {
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.fillStyle = "white";
  ctx.strokeStyle = "red";
  ctx.fillRect(-this.s/2, -this.s/2, this.s, this.s);
  ctx.strokeRect(-this.s/2, -this.s/2, this.s, this.s);
  ctx.restore();
  this.desenharCell(ctx);
};

Sprite.prototype.desenharCell = function(ctx){
  ctx.strokeStyle = "white";
  ctx.strokeRect(this.gx*this.map.s, this.gy*this.map.s,this.map.s, this.map.s)
}
