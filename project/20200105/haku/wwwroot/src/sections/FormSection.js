import * as $ from "jquery";
import AbstractElement from "./AbstractElement";
import ScrollMagic from "scrollmagic";

class FormSection extends AbstractElement {

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
                  .on('enter', (event) => this.animateContent(index))
                  .on('leave', (event) => this.resetContent(index))
                  .addTo(this.smController);

              //為了ResizeTrigger的長度，push進一個Array備用
              this.triggerScenes.push(triggerScene);
          });
      }

    animateContent(triggerId) {
        // const slogan__model = $('.slogan__model')[0];
        // const slogan__title__1 = $('.slogan__title__1')[0];
        // const slogan__text__1 = $('.slogan__text__1')[0];
        // const slogan__text__2 = $('.slogan__text__2')[0];
        // const slogan__title__2 = $('.slogan__title__2')[0];
        // const slogan__text__3 = $('.slogan__text__3')[0];
        // const slogan__title__3 = $('.slogan__title__3')[0];
        // const slogan__text__4 = $('.slogan__text__4')[0];
        // slogan__model.classList.add('animation_' + (triggerId + 1));
        // slogan__title__1.classList.add('animation_' + (triggerId + 1));
        // slogan__text__1.classList.add('animation_' + (triggerId + 1));
        // slogan__text__2.classList.add('animation_' + (triggerId + 1));
        // slogan__title__2.classList.add('animation_' + (triggerId + 1));
        // slogan__text__3.classList.add('animation_' + (triggerId + 1));
        // slogan__title__3.classList.add('animation_' + (triggerId + 1));
        // slogan__text__4.classList.add('animation_' + (triggerId + 1));
    }

    resetContent(triggerId) {
      // const slogan__model = $('.slogan__model')[0];
      // const slogan__title__1 = $('.slogan__title__1')[0];
      // const slogan__text__1 = $('.slogan__text__1')[0];
      // const slogan__text__2 = $('.slogan__text__2')[0];
      // const slogan__title__2 = $('.slogan__title__2')[0];
      // const slogan__text__3 = $('.slogan__text__3')[0];
      // const slogan__title__3 = $('.slogan__title__3')[0];
      // const slogan__text__4 = $('.slogan__text__4')[0];
      // slogan__model.classList.remove('animation_' + (triggerId + 1));
      // slogan__title__1.classList.remove('animation_' + (triggerId + 1));
      // slogan__text__1.classList.remove('animation_' + (triggerId + 1));
      // slogan__text__2.classList.remove('animation_' + (triggerId + 1));
      // slogan__title__2.classList.remove('animation_' + (triggerId + 1));
      // slogan__text__3.classList.remove('animation_' + (triggerId + 1));
      // slogan__title__3.classList.remove('animation_' + (triggerId + 1));
      // slogan__text__4.classList.remove('animation_' + (triggerId + 1));
    }
}

export default FormSection;
