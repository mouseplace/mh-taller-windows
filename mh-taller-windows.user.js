// ==UserScript==
// @name         🐭️ MouseHunt - Taller Windows
// @version      1.3.0
// @description  Makes all the windows taller, so you can see more of the content without scrolling.
// @license      MIT
// @author       bradp
// @namespace    bradp
// @match        https://www.mousehuntgame.com/*
// @icon         https://i.mouse.rip/mouse.png
// @grant        none
// @run-at       document-end
// @require      https://cdn.jsdelivr.net/npm/script-migration@1.1.1
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

  #supplytransfer .drawer {
    padding-bottom: 75px;
  }

  .adventureBookPopup-titleContent {
    max-height: unset;
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
    min-height: 105px;

    /* specifically to fit scrambles at the least */
    max-height: 500px;
  }

  /* FI airship */
  .floatingIslandsWorkshop-parts-content {
    height: auto;
    background: linear-gradient(255deg, #fbf3b0 75%, #fdfcc7 100%);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    outline: 10px solid #fbf3ae;
    box-shadow: 0 2px 1px 11px #b9570e, 0 3px 2px 12px #985316, 0 4px 1px 13px #84420f, 0 5px 1px 14px #c47728, 0 6px 1px 15px #cd7f2c, 0 7px 1px 16px #e19439;
  }

  .floatingIslandsWorkshop-stabilizer {
    top: 325px;
    right: 78px;
    left: unset;
    border: none;
    transform: rotate(90deg);
  }

  .floatingIslandsWorkshop-stabilizer label {
    color: #848383;
  }

  .floatingIslandsWorkshop-part-name {
    position: absolute;
    top: 0;
    right: 10px;
    left: 0;
  }

  .floatingIslandsWorkshop-part-border {
    margin-top: 18px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .floatingIslandsWorkshop-part-state a.mousehuntActionButton.tiny.lightBlue {
    font-size: 9px;
    background: #fefad7;
    box-shadow: none;
  }

  .floatingIslandsWorkshop-part-state a.mousehuntActionButton.tiny.lightBlue::before {
    background: #fff9c3;
    box-shadow: 0 0 10px #f3ecb2 inset;
  }

  .floatingIslandsWorkshop-parts-total {
    margin-right: 15px;
  }

  .floatingIslandsWorkshop-partsContainer {
    background-color: #fbf3ae;
    border-radius: 5px;
  }

  .floatingIslandsWorkshop-part.active .floatingIslandsWorkshop-part-border {
    background-color: #90cefa;
  }

  .floatingIslandsWorkshop-part-state .mousehuntActionButton.tiny.selected {
    box-shadow: none;
  }

  .floatingIslandsWorkshop-part-actions {
    background-color: #c48648;
  }

  .floatingIslandsWorkshop-part.active .floatingIslandsWorkshop-part-border::after {
    border: none;
  }

  /* select 2 */
  .select2-results {
      max-height: 50vh;
  }`;
  document.head.appendChild(style);

  migrateUserscript('🐭️ MouseHunt - Taller Windows', 'https://greasyfork.org/en/scripts/452235-mousehunt-taller-windows');
})());
