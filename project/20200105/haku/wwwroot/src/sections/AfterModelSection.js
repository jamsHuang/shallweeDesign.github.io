import * as $ from "jquery";
import AbstractElement from "./AbstractElement";
import ScrollMagic from "scrollmagic";

class AfterModelSection extends AbstractElement {

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
                this.htmlElement.clientHeight - window.innerHeight
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
            duration: this.htmlElement.clientHeight - window.innerHeight
        })
            .setPin(this.content)
            .addTo(this.smController);

        // triggers
        const triggerList = Array.apply(null, this.triggerNodes);
        triggerList.map((item, index) => {
            const triggerScene = new ScrollMagic.Scene({
                triggerElement: item,
                triggerHook: 0.5,
                duration: item.clientHeight
            })
                .on('enter', (event) => this.animateContent(index))
                .on('leave', (event) => this.resetContent(index))
                .addTo(this.smController);
            this.triggerScenes.push(triggerScene);
        });
    }

    animateContent(triggerId) {
      const afterModel__midbg = $('.afterModel__midbg')[0];
      const afterModel__production = $('.afterModel__production')[0];
      const afterModel__title__1 = $('.afterModel__title__1')[0];
      const afterModel__text__1 = $('.afterModel__text__1')[0];
      const afterModel__title__2 = $('.afterModel__title__2')[0];
      const afterModel__arr = $('.afterModel__arr')[0];
      const afterModel__text__2 = $('.afterModel__text__2')[0];
      afterModel__midbg.classList.add('animation_' + (triggerId + 1));
      afterModel__production.classList.add('animation_' + (triggerId + 1));
      afterModel__title__1.classList.add('animation_' + (triggerId + 1));
      afterModel__text__1.classList.add('animation_' + (triggerId + 1));
      afterModel__title__2.classList.add('animation_' + (triggerId + 1));
      afterModel__text__2.classList.add('animation_' + (triggerId + 1));
      afterModel__arr.classList.add('animation_' + (triggerId + 1));
      if((triggerId+1)>=2){
        $('.afterModel__arr').show();
      }else{

        $('.afterModel__arr').hide();

      }

    }

    resetContent(triggerId) {
      const afterModel__midbg = $('.afterModel__midbg')[0];
      const afterModel__production = $('.afterModel__production')[0];
      const afterModel__title__1 = $('.afterModel__title__1')[0];
      const afterModel__text__1 = $('.afterModel__text__1')[0];
      const afterModel__title__2 = $('.afterModel__title__2')[0];
      const afterModel__arr = $('.afterModel__arr')[0];
      const afterModel__text__2 = $('.afterModel__text__2')[0];
      afterModel__midbg.classList.remove('animation_' + (triggerId + 1));
      afterModel__production.classList.remove('animation_' + (triggerId + 1));
      afterModel__title__1.classList.remove('animation_' + (triggerId + 1));
      afterModel__text__1.classList.remove('animation_' + (triggerId + 1));
      afterModel__title__2.classList.remove('animation_' + (triggerId + 1));
      afterModel__text__2.classList.remove('animation_' + (triggerId + 1));
      afterModel__arr.classList.remove('animation_' + (triggerId + 1));
    }
}

export default AfterModelSection;
