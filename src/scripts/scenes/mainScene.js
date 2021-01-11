// import PhaserLogo from '../objects/phaserLogo'

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    const map = this.make.tilemap({ key: 'map' });
    const layer = map.createLayer('0', 'tileset', 0, 0);
    const layer2 = map.createLayer('1', 'tileset', 0, 0);

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  }

  update() {
  }
}
