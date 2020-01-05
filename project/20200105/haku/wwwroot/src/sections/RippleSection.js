import * as $ from "jquery";
import AbstractElement from "./AbstractElement";
import ScrollMagic from "scrollmagic";
import {ripples} from "../components/jquery.ripples-min.js";

var dir="";

class RippleSection extends AbstractElement {

  constructor(htmlElement, smController) {
    super(htmlElement);

    this.smController = smController;
    this.content = this.htmlElement.querySelector('.app_section_content');

    this.triggerScenes = [];
    this.triggerNodes = this.htmlElement.querySelectorAll('.trigger');

  }

  resizeHandler() {
    if (this.contentScene) {
      this.contentScene.duration(
        this.htmlElement.clientHeight
      );
    }
    if (this.triggerScenes && this.triggerScenes.length) {
      const triggerList = Array.apply(null, this.triggerNodes);
      triggerList.map((item, index) => {
        const scene = this.triggerScenes[index];
        scene.duration(item.clientHeight);
      });
    }
    super.resizeHandler();
  }
  createScrollEffect() {
    // content
    this.contentScene = new ScrollMagic.Scene({
        triggerElement: this.content,
        triggerHook: 0,
        duration: this.htmlElement.clientHeight
      })
      .on('enter', (event) => this.startTimer())
      .on('leave', (event) => this.stopTimer())
      .setPin(this.content)
      .addTo(this.smController);

    // triggers
    const triggerList = Array.apply(null, this.triggerNodes);
    triggerList.map((item, index) => {
      const triggerScene = new ScrollMagic.Scene({
          triggerElement: item,
          triggerHook: 0,
          duration: item.clientHeight
        })
        .on("update", function(e) {
          if (e.target.controller().info("scrollDirection") == "FORWARD") {
            // console.log("forward")
            dir = "FORWARD";
            // console.log(this.dir);
          } else {
            dir = "REVERSE";
          };
        })
        .on('enter', (event) => this.animateContent(index))
        .on('leave', (event) => this.resetContent(index))
        .addTo(this.smController);

      //為了ResizeTrigger的長度，push進一個Array備用
      this.triggerScenes.push(triggerScene);
    });
    this.init();

  }

  animateContent(triggerId) {
    //
    // console.log(dir);
    // if (dir == "FORWARD") {
    //
    // } else {
    //   triggerId = this.triggerScenes.length - triggerId - 1;
    //   console.log(this.triggerScenes.length);
    // }

    console.log("triggerId", triggerId);
    const ripple__title__1 = $('.ripple__title__1')[0];
    const ripple__text__1 = $('.ripple__text__1')[0];
    const ripple__title__2 = $('.ripple__title__2')[0];
    const ripple__title__3 = $('.ripple__title__3')[0];
    const ripple__text__2 = $('.ripple__text__2')[0];
    const ripple__text__3 = $('.ripple__text__3')[0];
    const ripple__production = $('.ripple__production')[0];
    ripple__title__1.classList.add('animation_' + (triggerId + 1));
    ripple__text__1.classList.add('animation_' + (triggerId + 1));
    ripple__title__2.classList.add('animation_' + (triggerId + 1));
    ripple__title__3.classList.add('animation_' + (triggerId + 1));
    ripple__text__2.classList.add('animation_' + (triggerId + 1));
    ripple__text__3.classList.add('animation_' + (triggerId + 1));
    ripple__production.classList.add('animation_' + (triggerId + 1));
  }
  init() {
    $('#ripple__bg').ripples({
      resolution: 256,
      dropRadius: 25,
      perturbance: 0.04,
      interactive: false,
      crossOrigin: "Anonymous",
      imageUrl: $('.ripple__img').src
    });
  }
  startTimer() {
    var $el = $('#ripple__bg');
    var x = Math.random() * $el.outerWidth();
    var y = Math.random() * $el.outerHeight();
    var dropRadius = 20;
    var strength = 0.04 + Math.random() * 0.04;

    $el.ripples('drop', x, y, dropRadius, strength);
    this.timer = setInterval(function() {
      $el = $('#ripple__bg');
      x = Math.random() * $el.outerWidth();
      y = Math.random() * $el.outerHeight();
      dropRadius = 20;
      strength = 0.04 + Math.random() * 0.04;

      $el.ripples('drop', x, y, dropRadius, strength);
      // console.log('a');
    }, 3500);
  }
  stopTimer() {
    // console.log('this stop')
    clearInterval(this.timer);
  }

  resetContent(triggerId) {

    // if (dir == "FORWARD") {
    //
    // } else {
    //   triggerId = this.triggerScenes.length - triggerId - 1;
    //   console.log(this.triggerScenes.length);
    // }
    const ripple__title__1 = $('.ripple__title__1')[0];
    const ripple__text__1 = $('.ripple__text__1')[0];
    const ripple__title__2 = $('.ripple__title__2')[0];
    const ripple__title__3 = $('.ripple__title__3')[0];
    const ripple__text__2 = $('.ripple__text__2')[0];
    const ripple__text__3 = $('.ripple__text__3')[0];
    const ripple__production = $('.ripple__production')[0];
    ripple__title__1.classList.remove('animation_' + (triggerId + 1));
    ripple__text__1.classList.remove('animation_' + (triggerId + 1));
    ripple__title__2.classList.remove('animation_' + (triggerId + 1));
    ripple__title__3.classList.remove('animation_' + (triggerId + 1));
    ripple__text__2.classList.remove('animation_' + (triggerId + 1));
    ripple__text__3.classList.remove('animation_' + (triggerId + 1));
    ripple__production.classList.remove('animation_' + (triggerId + 1));

  }
}

export default RippleSection;
