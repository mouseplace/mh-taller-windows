// ==UserScript==
// @name         🐭️ MouseHunt - Taller Windows
// @version      1.1.2
// @description  Makes all the windows taller, so you can see more of the content without scrolling.
// @license      MIT
// @author       bradp
// @namespace    bradp
// @match        https://www.mousehuntgame.com/*
// @icon         https://i.mouse.rip/mouse.png
// @grant        none
// @run-at      document-end
// ==/UserScript==

((function () {
  'use strict';

  const style = document.createElement('style');
  style.innerHTML = `.adventureBookPopup-titleContent,
  .convertibleOpenView-itemContainer,
  .marketplaceView-browse-content,
  .MHCheckoutAllRewardsPageView,
  .treasureMapListingsView-tableView,
  .treasureMapView-block-content,
  .treasureMapView-block-content.halfHeight,
  .treasureMapView-block-content.tall,
  .treasureMapView-blockWrapper.tall .treasureMapView-block-content,
  #messengerUINotification .notificationHeader,
  #messengerUINotification .notificationMessageList,
  #supplytransfer .drawer .listContainer,
  #supplytransfer .drawer .tabContent,
  #supplytransfer .drawer {
    height: auto;
    max-height: 75vh;
  }

  .giftSelectorView-inbox-giftContainer {
    height: auto;
    min-height: 300px;
    max-height: 75vh;
  }

  .giftSelectorView-scroller {
    height: auto;
    min-height: 320px;
    max-height: 55vh;
  }
  
  .springHuntHUD-popup-regionContainer {
    display: content;
  }
  `;
  document.head.appendChild(style);
})());
