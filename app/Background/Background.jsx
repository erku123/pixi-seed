'use strict';

import PIXI from 'pixi.js';
import './texture@2x.jpg';
import './map@2x.jpg';

export default class Background extends PIXI.DisplayObjectContainer {

  constructor() {
    super();
    this.init();
  }

  init() {
    var map = PIXI.Texture.fromImage('./Background/texture@2x.jpg');
    var bg = PIXI.Sprite.fromImage('./Background/texture@2x.jpg');
    //var filter = new PIXI.NormalMapFilter(map);
    //
    window.pixi = PIXI;

    //bg.filters = [filter];

    this.addChild(bg);
  }

}