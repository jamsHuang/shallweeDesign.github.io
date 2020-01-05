import * as $ from "jquery";
import AbstractElement from "./AbstractElement";
import ScrollMagic from "scrollmagic";

class ModelSection extends AbstractElement {

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
        const model = $('.model__woman')[0];
        const title = $('.model__title')[0];
        const text = $('.model__text')[0];
        const skin = $('.model__skin')[0];
        const skin__black = $('.model__skin__black')[0];
        model.classList.add('animation_' + (triggerId + 1));
        title.classList.add('animation_' + (triggerId + 1));
        text.classList.add('animation_' + (triggerId + 1));
        skin.classList.add('animation_' + (triggerId + 1));
        skin__black.classList.add('animation_' + (triggerId + 1));
    }

    resetContent(triggerId) {
      const model = $('.model__woman')[0];
      const title = $('.model__title')[0];
      const text = $('.model__text')[0];
      const skin = $('.model__skin')[0];
      const skin__black = $('.model__skin__black')[0];
      model.classList.remove('animation_' + (triggerId + 1));
      title.classList.remove('animation_' + (triggerId + 1));
      text.classList.remove('animation_' + (triggerId + 1));
      skin.classList.remove('animation_' + (triggerId + 1));
      skin__black.classList.remove('animation_' + (triggerId + 1));
    }
}

export default ModelSection;
