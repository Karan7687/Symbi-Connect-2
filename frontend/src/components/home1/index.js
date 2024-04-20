import React, { useRef, useState } from "react";

import "./style.css";
import Header from "../../components/header";
import useClickOutside from "../../helpers/clickOutside";
export default function Home1() {
  const [visible, setVisible] = useState(true);
  const el = useRef(null);
  useClickOutside(el, () => {
    setVisible(false);
  });
  return (
    <div>
      <Header />
      <head>
        <div className="card" ref={el}></div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        <section className="et-hero-tabs">
          <h1>SYMBI CONNECT</h1>
          <h3>Where Knowledge meets Community</h3>
          <div className="et-hero-tabs-container">
            <a className="et-hero-tab" href="#tab-es6">
              NOTES
            </a>
            <a className="et-hero-tab" href="#tab-flexbox">
              Q&A
            </a>
            <a className="et-hero-tab" href="">
              Q.PAPERS
            </a>
            {/* <a className="et-hero-tab" href="#tab-angular">Angular</a>*/}
            <a className="et-hero-tab" href="#tab-other">
              Other
            </a>
            <span className="et-hero-tab-slider"></span>
          </div>
        </section>
        <main className="et-main">
          <section className="et-slide" id="tab-flexbox">
            <h1>Q&A</h1>
            <h3>Q&A UNDER MAINTENANCE</h3>
          </section>

          <section className="et-slide" id="tab-es6">
            <h1>NOTES</h1>
            <h3>NOTES UNDER MAINTENANCE</h3>
          </section>

          <section className="et-slide" id="tab-react">
            <h1>Legacy Papers</h1>
            <h3>Legacy Papers UNDER MAINTENANCE</h3>
          </section>
        </main>
        <script>
          {`
            class StickyNavigation {
              constructor() {
                this.currentId = null;
                this.currentTab = null;
                this.tabContainerHeight = 70;
                let self = this;
                $(".et-hero-tab").click(function () {
                  self.onTabClick(event, $(this));
                });
                $(window).scroll(() => {
                  this.onScroll();
                });
                $(window).resize(() => {
                  this.onResize();
                });
              }
          
              onTabClick(event, element) {
                event.preventDefault();
                let scrollTop =
                  $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
                $("html, body").animate({ scrollTop: scrollTop }, 600);
              }
          
              onScroll() {
                this.checkTabContainerPosition();
                this.findCurrentTabSelector();
              }
          
              onResize() {
                if (this.currentId) {
                  this.setSliderCss();
                }
              }
          
              checkTabContainerPosition() {
                let offset =
                  $(".et-hero-tabs").offset().top +
                  $(".et-hero-tabs").height() -
                  this.tabContainerHeight;
                if ($(window).scrollTop() > offset) {
                  $(".et-hero-tabs-container").addClass(
                    "et-hero-tabs-container--top"
                  );
                } else {
                  $(".et-hero-tabs-container").removeClass(
                    "et-hero-tabs-container--top"
                  );
                }
              }
          
              findCurrentTabSelector(element) {
                let newCurrentId;
                let newCurrentTab;
                let self = this;
                $(".et-hero-tab").each(function () {
                  let id = $(this).attr("href");
                  let offsetTop = $(id).offset().top - self.tabContainerHeight;
                  let offsetBottom =
                    $(id).offset().top + $(id).height() - self.tabContainerHeight;
                  if (
                    $(window).scrollTop() > offsetTop &&
                    $(window).scrollTop() < offsetBottom
                  ) {
                    newCurrentId = id;
                    newCurrentTab = $(this);
                  }
                });
                if (this.currentId != newCurrentId || this.currentId === null) {
                  this.currentId = newCurrentId;
                  this.currentTab = newCurrentTab;
                  this.setSliderCss();
                }
              }
          
              setSliderCss() {
                let width = 0;
                let left = 0;
                if (this.currentTab) {
                  width = this.currentTab.css("width");
                  left = this.currentTab.offset().left;
                }
                $(".et-hero-tab-slider").css("width", width);
                $(".et-hero-tab-slider").css("left", left);
              }
            }
          
            new StickyNavigation();
          `}
        </script>{" "}
      </body>
    </div>
  );
}
