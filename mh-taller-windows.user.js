// ==UserScript==
// @name         🐭️ MouseHunt - Taller Windows
// @version      1.2.3
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

  .treasureMapDialogView.limitHeight .treasureMapView-block-content,
  .treasureMapDialogView.limitHeight .treasureMapDialogView-content {
    max-height: 75vh;
  }

  .treasureMapDialogView.wide.limitHeight {
    top: 300px;
  }

  .giftSelectorView-inbox-giftContainer,
  #overlayPopup .giftSelectorView-scroller {
    height: auto;
    min-height: 300px;
    max-height: 75vh;
  }

  #overlayPopup.giftSelectorViewPopup {
    top: 50px !important;
  }

  .springHuntHUD-popup-regionContainer {
    display: contents;
  }

  #overlayPopup .imgArray {
    max-height: 500px;
    min-height: 105px; /* specifcally to fit scrambles at the least */
  }
  `;
  document.head.appendChild(style);
})());
