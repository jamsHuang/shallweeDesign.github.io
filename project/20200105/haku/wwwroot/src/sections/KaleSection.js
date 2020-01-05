import * as $ from "jquery";
import AbstractElement from "./AbstractElement";
import ScrollMagic from "scrollmagic";
import {init,testDraw} from "../components/kaleidoscope.js";

class KaleSection extends AbstractElement {

      constructor(htmlElement, smController) {
          super(htmlElement);

          this.smController = smController;
          this.content = this.htmlElement.querySelector('.app_section_content');

          this.triggerScenes = [];
          this.triggerNodes = this.htmlElement.querySelectorAll('.trigger');

          this.timer= null;
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
                      // scene.duration(item.clientHeight);
                      scene.duration(item.clientHeight+window.innerHeight);
                  });
              }
              super.resizeHandler();
          }

          createScrollEffect() {

              // triggers
              const triggerList = Array.apply(null, this.triggerNodes);
              triggerList.map((item, index) => {
                  const triggerScene = new ScrollMagic.Scene({
                      triggerElement: item,
                      triggerHook: 1,
                      duration: item.clientHeight + window.innerHeight
                  })
                      .on('enter', (event) => this.animateContent(index))
                      .on('leave', (event) => this.resetContent(index))
                      .addTo(this.smController);

                  //為了ResizeTrigger的長度，push進一個Array備用
                  this.triggerScenes.push(triggerScene);
              });
              init();
          }

          animateContent(triggerId) {
            // const kale__title = this.htmlElement.querySelector('.kale__production__title');
            const kale__title1 = $('.kale__production__title--1')[0];
            const kale__title2 = $('.kale__production__title--2')[0];
            const kale__text = this.htmlElement.querySelector('.kale__production__text');
            const kale__img = $('.kale__production__img')[0];
            kale__title1.classList.add('animation_' + (triggerId + 1));
            kale__title2.classList.add('animation_' + (triggerId + 1));
            kale__text.classList.add('animation_' + (triggerId + 1));
            kale__img.classList.add('animation_' + (triggerId + 1));
              this.startTimer()

          }
          startTimer(){
            // testDraw();
            this.timer = setInterval(testDraw,50);

          }
          stopTimer(){
            // console.log('this stop')
            clearInterval(this.timer);
          }

          resetContent(triggerId) {
            this.stopTimer();
            const kale__title1 = $('.kale__production__title--1')[0];
            const kale__title2 = $('.kale__production__title--2')[0];
            const kale__img = $('.kale__production__title--2')[0];

            const kale__text = this.htmlElement.querySelector('.kale__production__text');
            kale__title1.classList.remove('animation_' + (triggerId + 1));
            kale__title2.classList.remove('animation_' + (triggerId + 1));
            kale__text.classList.remove('animation_' + (triggerId + 1));
            kale__img.classList.remove('animation_' + (triggerId + 1));
          }
}

export default KaleSection;
