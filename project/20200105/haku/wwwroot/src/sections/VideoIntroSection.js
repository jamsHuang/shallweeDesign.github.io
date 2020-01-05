import * as $ from "jquery";
import AbstractElement from "./AbstractElement";
import ScrollMagic from "scrollmagic";

class VideoIntroSection extends AbstractElement {
    

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
            this.triggerScenes.push(triggerScene);
        });
    }

    animateContent(triggerId) {
        // const msg = this.htmlElement.querySelector('.message');
        // msg.classList.add('animation_' + (triggerId + 1));
        const vid__title = $('.videointro__title')[0];
        const vid__text =  $('.videointro__text')[0];
        vid__text.classList.add('animation_' + (triggerId + 1));
        vid__title.classList.add('animation_' + (triggerId + 1));
    }

    resetContent(triggerId) {

      const vid__title = $('.videointro__title')[0];
      const vid__text =  $('.videointro__text')[0];
      vid__text.classList.remove('animation_' + (triggerId + 1));
      vid__title.classList.remove('animation_' + (triggerId + 1));
    }
}

export default VideoIntroSection;
