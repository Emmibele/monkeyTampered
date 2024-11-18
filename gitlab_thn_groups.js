// ==UserScript==
// @name         Gitlab Groups Link
// @version      2024-11-18
// @description  adds a link to the gitlab main menu directing to the groups
// @author       Emmibele
// @match        https://git.informatik.fh-nuernberg.de/*
// @icon         https://about.gitlab.com/nuxt-images/ico/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const anchorHome = document.querySelector('#super-sidebar a.brand-logo');
  const anchorHomeClass = anchorHome.classList[0];

  const anchorGroups = document.createElement('a');
  anchorGroups.href='/groups';
  anchorGroups.innerText = '👽'

  anchorHome.parentNode.insertBefore(anchorGroups, anchorHome.nextSibling);
})();
