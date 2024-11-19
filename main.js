class Example extends Phaser.Scene {
    preload() {
        this.load.spritesheet('frontCar','./frontCar.png', { frameWidth: 50,frameHeight: 33 });
        this.load.image('background', './background.png');
    }

    create() {
        this.add.image(400, 300, 'background');
        this.anims.create({
            key: 'frontCar',
            frames: this.anims.generateFrameNumbers("frontCar", { start:0, end:1 }) ,
            frameRate: 5,
            repeat: -1

        })

      this.player = this.add.sprite(200, 300, 'frontCar');
        this.player.scaleX = 2;
        this.player.scaleY = 2;
        this.player.anims.play('frontCar', true);

    }
    update(){
        movePlayerManager(this.player);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Example,
    backgroundColor: '#2d2d2d',

};

const game = new Phaser.Game(config);
function movePlayerManager(player){
    window.addEventListener('keydown', (e) => {
        switch(e.key){
            case 'ArrowUp':
                player.y -= 0.1;
                break;
            case 'ArrowDown':
                player.y += 0.1;
                break;
            case 'ArrowLeft':
                player.x -= 0.1;
                break;
            case 'ArrowRight':
                player.x += 0.1;
                break;
        }
    });
}