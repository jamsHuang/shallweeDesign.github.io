import * as $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import KVSection from "./sections/KVSection";
import VideoIntroSection from "./sections/VideoIntroSection";
import ModelSection from "./sections/ModelSection";
import KaleSection from "./sections/KaleSection";
import AfterModelSection from "./sections/AfterModelSection";
import FeatureSection from "./sections/FeatureSection";
import SloganSection from "./sections/SloganSection";
import RippleSection from "./sections/RippleSection";
import FormSection from "./sections/FormSection";

$(function () {

    if((window.innerWidth/window.innerHeight) > (1920/1320)){
      $('.container_w1920').css({"width":"100%","height":"100%"});

    }else{
      $('.container_w1920').css({"width":"145vh","height":"100%"});
    }
    createScrollController();
    createSection();

    $(window).on('resize', windowResizeHandler);
});

function windowResizeHandler(e) {

  if((window.innerWidth/window.innerHeight) > (1920/1320)){

      $('.container_w1920').css({"width":"100%","height":"100%"});

  }else{
    $('.container_w1920').css({"width":"145vh","height":"100%"});
  }
    if (renderArr && renderArr.length) {
        renderArr.map(item => {
            item.target.resizeHandler();
        });
    }
}


/*
* ScrollMagic Controller
* */
let controller;

function createScrollController() {
    controller = new ScrollMagic.Controller();
}


/*
* Create Sections
* */
const renderArr = [
    {tagName: '#kv', class: KVSection, target: null},
    {tagName: '#kaleidoscope', class: KaleSection, target: null},
    {tagName: '#videoIntro', class: VideoIntroSection, target: null},
    {tagName: '#model', class: ModelSection, target: null},
    {tagName: '#afterModel', class: AfterModelSection, target: null},
    {tagName: '#feature', class: FeatureSection, target: null},
    {tagName: '#slogan', class: SloganSection, target: null},
    {tagName: '#ripple', class: RippleSection, target: null},
    {tagName: '#form', class: FormSection, target: null},
];

function createSection() {
    renderArr.map((item) => {
        const CurrentClass = item.class;
        const section = new CurrentClass(document.querySelector(item.tagName), controller);
        console.log(section);
        section.createScrollEffect();
        item.target = section;
    });
}
