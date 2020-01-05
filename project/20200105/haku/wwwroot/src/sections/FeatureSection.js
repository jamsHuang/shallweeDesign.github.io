import * as $ from "jquery";
import * as gsap from "gsap";
import AbstractElement from "./AbstractElement";
import ScrollMagic from "scrollmagic";

class FeatureSection extends AbstractElement {

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
      const feature__model = $('.feature__model')[0];
      const feature__title__1 = $('.feature__title__1')[0];
      const feature__text__1 = $('.feature__text__1')[0];
      const feature__skin = $('.feature__bg--skin')[0];
      const feature__title__2 = $('.feature__title__2')[0];
      const feature__text__2 = $('.feature__text__2')[0];
      const feature__title__3 = $('.feature__title__3')[0];
      const feature__text__3 = $('.feature__text__3')[0];
      const feature__title__4 = $('.feature__title__4')[0];
      const feature__text__4 = $('.feature__text__4')[0];
      const wordcloud = $('.wordcloud')[0];
      const triangle = $('.feature__triangle')[0];
      feature__model.classList.add('animation_' + (triggerId + 1));
      feature__title__1.classList.add('animation_' + (triggerId + 1));
      feature__text__1.classList.add('animation_' + (triggerId + 1));
      feature__skin.classList.add('animation_' + (triggerId + 1));
      feature__title__2.classList.add('animation_' + (triggerId + 1));
      feature__text__2.classList.add('animation_' + (triggerId + 1));
      feature__title__3.classList.add('animation_' + (triggerId + 1));
      feature__text__3.classList.add('animation_' + (triggerId + 1));
      feature__title__4.classList.add('animation_' + (triggerId + 1));
      feature__text__4.classList.add('animation_' + (triggerId + 1));
      wordcloud.classList.add('animation_' + (triggerId + 1));
      triangle.classList.add('animation_' + (triggerId + 1));
      for(var i=0;i<$('.wordcloud_text').length;i++){
        $('.wordcloud_text_'+i)[0].classList.add('animation_' + (triggerId + 1));
      }

      // if((triggerId+1 == 4)){
      //   var tween1 = gsap.TweenMax.To($('.wordcloud_text'),{opacity:0.7});
      // }else if((triggerId+1 == 5)){
      //   var tween2 = gsap.TweenMax.To($('.wordcloud_text'),{scale:0.5})
      // }else if((triggerId+1 == 6)){
      //   var tween3 = gsap.TweenMax.To($('.wordcloud_text'),{opacity:0,scale:0})
      // }
    }

    resetContent(triggerId) {
      const feature__model = $('.feature__model')[0];
      const feature__title__1 = $('.feature__title__1')[0];
      const feature__text__1 = $('.feature__text__1')[0];
      const feature__skin = $('.feature__bg--skin')[0];
      const feature__title__2 = $('.feature__title__2')[0];
      const feature__text__2 = $('.feature__text__2')[0];
      const feature__title__3 = $('.feature__title__3')[0];
      const feature__text__3 = $('.feature__text__3')[0];
      const feature__title__4 = $('.feature__title__4')[0];
      const feature__text__4 = $('.feature__text__4')[0];
      const wordcloud = $('.wordcloud')[0];
      const triangle = $('.feature__triangle')[0];
      feature__model.classList.remove('animation_' + (triggerId + 1));
      feature__title__1.classList.remove('animation_' + (triggerId + 1));
      feature__text__1.classList.remove('animation_' + (triggerId + 1));
      feature__skin.classList.remove('animation_' + (triggerId + 1));
      feature__title__2.classList.remove('animation_' + (triggerId + 1));
      feature__text__2.classList.remove('animation_' + (triggerId + 1));
      feature__title__3.classList.remove('animation_' + (triggerId + 1));
      feature__text__3.classList.remove('animation_' + (triggerId + 1));
      feature__title__4.classList.remove('animation_' + (triggerId + 1));
      feature__text__4.classList.remove('animation_' + (triggerId + 1));
      wordcloud.classList.remove('animation_' + (triggerId + 1));
      triangle.classList.remove('animation_' + (triggerId + 1));
      for(var i=0;i<$('.wordcloud_text').length;i++){
        $('.wordcloud_text_'+i)[0].classList.remove('animation_' + (triggerId + 1));
      }
    }
}

export default FeatureSection;
