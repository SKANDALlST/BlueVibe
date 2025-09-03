// ==UserScript==
// @name         Blue Vibe
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Theme for Discord
// @author       SKANDALIST
// @match        *://discord.com/*
// @updateURL    https://raw.github.com/SKANDALlST/BlueVibe/raw/refs/heads/main/Blue%20Vibe.user.js
// @downloadURL  https://github.com/SKANDALlST/BlueVibe/raw/refs/heads/main/Blue%20Vibe.user.js
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const themeCSS = `

:root {
    container-name: root;
    --custom-guild-list-padding: 12px;
    --panel-backdrop-filter: none;
}

body {
    container-name: body;

    /* font, change to '' for default discord font */
    --font: 'Segoe UI Light';

    /* sizes */
    --gap: 4px; /* spacing between panels */
    --divider-thickness: 4px; /* thickness of unread messages divider and highlighted message borders */
}

.visual-refresh {
	
	
	/* panel separation */
    .guilds_c48ade /* server list */, 
    .sidebarList_c48ade /* channel list (includes dm list) */,
    .panels_c48ade /* user panel */,
    .chat_f75fb0 > .subtitleContainer_f75fb0 /* chat titlebar */,
    .chatContent_f75fb0 /* chat */,
    .container_c8ffbb /* member list */,
    .content_f75fb0 > .membersWrap_c8ffbb /* forum post member list */,
    .container__133bf > .container__9293f /* friends titlebar */,
    .container_f391e3 > .container__9293f /* message requests titlebar */,
    .homeWrapper__0920e > .container__9293f /* nitro page titlebar */,
    .container__01ae2 > .container__9293f /* vc chat titlebar */,
    .container_fb64c9 > .container__9293f /* new thread panel */,
    .peopleColumn__133bf /* online friends */,
    .nowPlayingColumn__133bf /* active now */,
    .scroller_c880e8 /* nitro page */,
    .container_f391e3 > .content_f75fb0 /* message requests */,
    .shop__6db1d /* shop */,
    .outer_c0bea0.panel_c0bea0 /* dm user panel */,
    .searchResultsWrap_a9e706 /* search results */,
    .container_f369db /* forum */,
    .chat_fb64c9 /* new thread panel */,
    .container_a592e1 /* server discovery */,
    .callContainer_cb9592 /* vc container */,
	
    .callContainer__722ff /* stage */ {
        background-color: var(--background-base-lower);
        border-radius: var(--radius-lg);
        border: 1px solid var(--border-subtle);
        backdrop-filter: var(--panel-backdrop-filter);
    }

    .base_c48ade /* base grid */ {
        display: grid;
        grid-template-columns: [start] min-content [guildsEnd] min-content [channelsEnd] 1fr [end];
        grid-template-rows: [top] var(--custom-app-top-bar-height) [titleBarEnd] min-content [noticeEnd] 1fr [contentEnd] min-content [end];
        grid-template-areas:
            'titleBar titleBar titleBar'
            'guildsList notice notice'
            'guildsList channelsList page'
            'userPanel userPanel page';
        gap: 0 var(--gap);
    }

    .panels_c48ade /* user panel */ {
        width: 100%;
        position: static;
        grid-area: userPanel;
        margin: var(--gap) 0 0 0;
        overflow: hidden;
        max-width: calc(var(--custom-guild-sidebar-width) + var(--gap) + 4px);
    }

    .sidebar_c48ade /* server list + channel list + user panel group */ {
        margin: 0 var(--gap) var(--gap);
    }

    .guilds_c48ade /* server list */ {
        margin-bottom: 0;
    }
    .scroller_ef3116 /* server list inner scroller */ {
        padding-top: var(--custom-guild-list-padding);
    }

    .container__2637a /* channel list inner */ {
        padding-bottom: 0;
    }
    .clickable_f37cb1,
    .container__2637a /* channel list inner */,
    .header_f37cb1 /* server name */ {
        background: none;
    }

    /* fix discord's idiotic server banners */
    .bannerImage_f37cb1,
    .bannerImg_f37cb1 {
        width: 100%;
    }
    .bannerVisible_f37cb1 .headerEllipseBackdrop_f37cb1 {
        display: none;
    }
    .headerGlass_f37cb1 {
        top: 0;
        left: 0;
        right: 0;
        width: auto;
        border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    }

    .sidebar_c48ade:after /* server list + channel list bottom shadow */ {
        display: none;
    }

    .chat_f75fb0 /* chat group outer */ {
        border: none !important;
        background: none;
    }
    .container__133bf /* friends page group outer */,
    .page_c48ade {
        padding-bottom: var(--gap);
        padding-right: var(--gap);
        border: none !important;
        background: none;
    }
    .page_c48ade > .chat_f75fb0,
    .page_c48ade > .container__133bf {
        padding: 0;
    }

    .container__9293f /* friends, message requests, + other stuff titlebar */ {
        margin-bottom: var(--gap);
    }

    .subtitleContainer_f75fb0 /* chat titlebar  */ {
        margin-bottom: var(--gap);
    }
    .title_f75fb0 /* chat titlebar inner */ {
        border: none;
        background: none;
        margin-bottom: 0;
    }

    .chatContent_f75fb0 /* chat */ {
        overflow: hidden;
    }

    .container_c8ffbb /* member list */ {
        margin-left: var(--gap);
        overflow: hidden;
        height: auto;
        min-width: var(--custom-member-list-width);
    }
    .content_f75fb0 > .membersWrap_c8ffbb /* forum post member list */ {
        margin-left: var(--gap);
        overflow: hidden;
        height: auto;
    }
    .members_c8ffbb /* member list inner */,
    .member_c8ffbb /* member list item */ {
        background: none;
    }

    .resizeHandle__01ae2 /* resize handle */ {
        background: transparent;
    }

    .privateChannels__35e86 /* dm list */,
    .scroller__99e7c /* dm list inner */ {
        background: none;
    }
    .scroller__99e7c /* dm list inner */ {
        margin-bottom: 0;
    }

    .tabBody__133bf /* online friends + active now group outer */ {
        background: none;
    }

    .nowPlayingColumn__133bf /* active now */ {
        margin-left: var(--gap);
    }
    .container__7d20c /* active now inner */ {
        background: none;
    }
    .scroller__7d20c /* active now inner */ {
        border: none;
    }

    .homeWrapper__0920e /* nitro page group inner */ {
        border: none;
        background: none;
    }
    .applicationStore_f07d62 /* nitro page group outer */ {
        background: none;
    }

    .shop__6db1d /* shop */ {
        overflow: hidden;
        height: auto;
    }
    .shop__08415 /* shop inner scroller */ {
        margin-top: calc(var(--custom-channel-header-height) * -1 - 16px);
    }

    .outer_c0bea0.panel_c0bea0 /* dm user panel */ {
        margin-left: var(--gap);
        overflow: hidden;
        height: auto;
        min-width: 340px;
    }

    .searchResultsWrap_a9e706 /* search results */ {
        margin-left: var(--gap);
    }

    .notice__6e2b9 /* notice banner */ {
        margin: 0 var(--gap) var(--gap) 0;
        border-radius: var(--radius-md);
    }

    .container__01ae2 /* vc chat + titlebar group */ {
        border: none;
        background: none;
    }
    .chat_ee72fa::before /* vc chat shadow */ {
        display: none;
    }
    .channelChatWrapper_cb9592 /* vc chat + titlebar group outer */ {
        background: none;
    }

    .page_c48ade > div > .chatLayerWrapper__01ae2 /* forum/thread chat outer */ {
        margin: 0 var(--gap) var(--gap) 0;
        height: calc(100% - var(--gap));
    }
    .container__01ae2 /* forum/thread chat */ {
        padding-left: calc((var(--gap) - var(--chat-resize-handle-width)));
    }

    .container_fb64c9 /* new thread panel */ {
        background: none;
    }
    .chat_fb64c9::before /* new thread panel chat shadow */ {
        display: none;
    }

    .container_a592e1 /* server discovery */ {
        overflow: hidden;
    }
    .backdrop__8a7fc /* server discovery top bar */ {
        background-color: var(--background-base-lower);
    }

    .wrapper_cb9592 /* dm vc wrapper */ {
        background: none;
        margin-bottom: var(--gap);
    }

    /* remove excess background from settings  */
    .standardSidebarView__23e6b,
    .contentRegion__23e6b,
    .sidebarRegionScroller__23e6b,
    .contentRegionScroller__23e6b {
        background: none;
    }
    .standardSidebarView__23e6b {
        backdrop-filter: var(--panel-backdrop-filter);
    }

    /* remove excess backgrounds */
    .wrapper_d852db /* message loading placeholders */,
    .wrapper_d852db > .wrapper_fc8177 {
        background: none;
    }

    .newMessagesBar__0f481 /* unread messages bar */ {
        top: 12px;
        left: 12px;
        right: 12px;
        border-radius: var(--radius-sm);
        padding: 0 8px;
    }

    .bottom__7aaec /* channel list new unreads pill */ {
        bottom: 12px;
    }

    .unreadMentionsIndicatorBottom_ef3116 /* server list new pill */,
    .unreadMentionsIndicatorTop_ef3116 {
        width: calc(var(--guildbar-avatar-size) + var(--custom-guild-list-padding) * 2);
        padding: calc(var(--custom-guild-list-padding) / 2);
    }

    /* jank ass solution to only apply padding to treatment 3 */
    .form_f75fb0 /* chat bar outer form */ {
        --space-8: 16px;
    }
    .channelBottomBarArea_f75fb0 /* chat bar inner */ {
        --space-8: 8px;
    }

    /* get rid of extra space in treatment 2 */
    .accessoryBar__74017 {
        padding-top: 0;
    }

    /* general chat bar improvements */
    .channelTextArea_f75fb0 /* chat bar */ {
        border-radius: var(--radius-md);
    }
    .themedBackground__74017 /* chat bar inner */ {
        background: none;
    }
    .slateTextArea_ec4baf /* actual typing area */ {
        margin-left: 2px;
    }

    /* improve unread divider */
    .divider__908e2 {
        border-width: var(--divider-thickness);
        border-radius: var(--divider-thickness);
    }
    .endCap__908e2 {
        margin-top: calc(var(--divider-thickness) / -2);
    }
    .divider__908e2 .content__908e2 {
        margin-top: calc(var(--divider-thickness) - var(--divider-thickness) * 2);
    }

    /* improve highlight message left edge */
    .message__5126c.mentioned__5126c::before,
    .replying__5126c::before,
    .ephemeral__5126c::before {
        width: var(--divider-thickness);
        border-radius: var(--divider-thickness);
        height: calc(100% - 2 * var(--radius-sm));
        top: var(--radius-sm);
        left: calc(var(--divider-thickness) / -2 + 1px);
        left: calc(var(--radius-sm) / 2);
    }

    .message__5126c {
        border-radius: var(--radius-md);
        margin-left: 4px;
    }

    /* improve server selected marker */
    .pill_e5445c.wrapper__58105 {
        width: calc((var(--custom-guild-list-padding) - 4px) / 2 + 4px);
    }
    .item__58105 {
        width: 4px;
        border-radius: 4px;
        margin-left: calc((var(--custom-guild-list-padding) - 4px) / 2);
    }

    /* improve embeds */
    .embedFull__623de {
        border: 4px solid var(--border-normal);
        border-top-color: var(--border-subtle) !important;
        border-top-width: 1px;
        border-bottom-color: var(--border-subtle) !important;
        border-bottom-width: 1px;
        border-right-color: var(--border-subtle) !important;
        border-right-width: 1px;
    }

    /* improve borders */
    .reaction__23977 /* message reactions */,
    .reactionBtn__23977.forceShow__23977 /* add reaction button */ {
        border-width: 2px;
    }

    /* roundness */
    .embedFull__623de /* embeds */,
    .hljs /* code block */,
    .imageWrapper_af017a /* image */,
    .container__9271d /* thread link */ {
        border-radius: var(--radius-md);
    }

    .outer_c0bea0 /* profile outer */, 
    .contentWrapper__08434  /* gif panel */ {
        border-radius: var(--radius-lg);
    }
    .inner_c0bea0 /* profile inner */ {
        border-radius: calc(var(--radius-lg) - 4px);
    }

    .outer_c0bea0 /* profile outer */ {
        border: 1px solid var(--border-subtle);
    }
    .root__24502 {
        background: none;
    }

    /* remove unnecessary backgrounds */
    .app__160d8,
    #app-mount,
    body {
        background: transparent !important;
    }
}

body {
    --font-primary: var(--font), 'gg sans';
    --font-display: var(--font), 'gg sans';
}

[class*='scroll'] {
    will-change: scroll-position;
}
.burstGlow__23977 {
    display: none;
}

/* animations.css */
/*@property --animations {
    syntax: 'on | off';
    inherits: false;
    initial-value: on;
}/*

body {
    --list-item-transition: 0.2s ease; /* transition for list items */
    --dms-icon-svg-transition: 0.4s ease; /* transition for the dms icon */
}

@container body style(--animations: on) {
    .visual-refresh {
        /* list hover animations */
        .wrapper__2ea32 .link__2ea32 /* channels */,
        .container__91a9d /* members */,
        .channel__972a0 /* dms */,
        .side_b3f026 .item_b3f026 /* settings */ {
            transition: margin-left var(--list-item-transition);
            will-change: margin-left;
        }
        .wrapper__2ea32:hover .link__2ea32,
        .side_b3f026 .item_b3f026:hover {
            margin-left: 10px;
        }
        .container__91a9d:hover,
        .channel__972a0:hover {
            margin-left: 18px;
        }
        /* list hover channel dot */
        .unread__2ea32 {
            border-radius: 50%;
            width: 8px;
            height: 8px;
            margin-left: -4px;
            transition: var(--list-item-transition);
            will-change: margin-left;
        }
        .wrapper__2ea32:hover .unread__2ea32 {
            margin-left: 4px;
        }
        .typeThread__2ea32 .unread__2ea32 {
            left: -31px;
        }
    }
}

/* background-image.css */
@property --background-image {
    syntax: 'on | off';
    inherits: false;
    initial-value: off;
}

body {
    --background-image-url: url('');
}

@container body style(--background-image: on) {
    .visual-refresh .bg__960e4 {
        background: var(--background-image-url);
        background-size: cover;
        background-position: center;
    }
}

/* colors.css */
@property --colors {
    syntax: 'on | off';
    inherits: false;
    initial-value: on;
}

:root {
    /* text colors */
    --text-0: hsl(203, 14%, 90%);  /* текст (светлее основного) */
    --text-1: hsl(203, 14%, 90%);   /* основной белый ≈ #c9d0d3 */
    --text-2: hsl(203, 14%, 90%);   /* заголовки  */
    --text-3: hsl(203, 14%, 85%);   /* не прочитано / основной */
    --text-4: hsl(203, 10%, 70%);   /* прочитано  */
    --text-5: hsl(203, 10%, 60%);   /* muted/тени */

    /* background and dark colors */
	--custom-code-bg: hsl(214, 23%, 15.5%); /* #202832 */
    --bg-1: hsl(213, 22%, 22%);  /* ≈ #252e38 (активные элементы) */
    --bg-2: hsl(213, 22%, 19%);  /* ≈ #1e2630 (кнопки/вторичный) */
    --bg-3: hsl(213, 22%, 16%);  /* ≈ #171f28 (основной #202831) */
    --bg-4: hsl(213, 22%, 13%);  /* ≈ #121820 (самый тёмный фон) */
    --hover: hsla(210, 20%, 70%, 0.1); /* было: hsla(221, 19%, 40%, 0.1) */
    --active: hsla(210, 20%, 70%, 0.2); /* было: hsla(220, 19%, 40%, 0.2) */
    --active-2: hsla(210, 20%, 70%, 0.3); /* было: hsla(220, 19%, 40%, 0.3) */
    --message-hover: hsla(213, 15%, 30%, 0.20);  /* светлый вариант #1a2028 */

    /* accent colors */
    --accent-1: var(--blue-1); /* links and other accent text */
    --accent-2: var(--blue-3);  /*  #4a6676 */
    --accent-3: var(--blue-3); /* accent buttons */
    --accent-4: var(--blue-4); /* accent buttons when hovered */
    --accent-5: var(--blue-5); /* accent buttons when clicked */
    --accent-new: var(--blue-2); /* stuff that's normally red like mute/deafen buttons */
    --mention: linear-gradient(to right, color-mix(in hsl, var(--blue-2), transparent 90%) 40%, transparent); /* background of messages that mention you */
    --mention-hover: linear-gradient(to right, color-mix(in hsl, var(--blue-2), transparent 95%) 40%, transparent); /* background of messages that mention you when hovered */
    --reply: linear-gradient(to right, color-mix(in hsl, var(--text-3), transparent 90%) 40%, transparent); /* background of messages that reply to you */
    --reply-hover: linear-gradient(to right, color-mix(in hsl, var(--text-3), transparent 95%) 40%, transparent); /* background of messages that reply to you when hovered */

    /* status indicator colors */
    --online: var(--green-2); /* change to #43a25a for default */
    --dnd: var(--red-2); /* change to #d83a42 for default */
    --idle: var(--yellow-2); /* change to #ca9654 for default */
    --streaming: var(--purple-2); /* change to #593695 for default */
    --offline: var(--text-4); /* change to #83838b for default offline color */

    /* base colors */
	
	--red-1: oklch(76% 0.12 0);
    --red-2: oklch(70% 0.12 0);
    --red-3: oklch(64% 0.12 0);
    --red-4: oklch(58% 0.12 0);
    --red-5: oklch(52% 0.12 0);

    --green-1: oklch(76% 0.11 170);
    --green-2: oklch(70% 0.11 170);
    --green-3: oklch(64% 0.11 170);
    --green-4: oklch(58% 0.11 170);
    --green-5: oklch(52% 0.11 160);

    --blue-1: oklch(0.8 0.098 249.84);  /* ссылки */
    --blue-2: oklch(0.85 0.098 249.84);
    --blue-3: oklch(0.5 0.098 249.84);   /* кнопки */
    --blue-4: oklch(0.6 0.098 249.84);    /* 0.6 0.0418 233.77 */
    --blue-5: oklch(52% 0.1 215);
	--blue-6: oklch(0.49 0.0418 233.77);   /* выделение */

    --yellow-1: oklch(80% 0.11 90);
    --yellow-2: oklch(74% 0.11 90);
    --yellow-3: oklch(68% 0.11 90);
    --yellow-4: oklch(62% 0.11 90);
    --yellow-5: oklch(56% 0.11 90);

    --purple-1: oklch(76% 0.11 310);
    --purple-2: oklch(70% 0.11 310);
    --purple-3: oklch(64% 0.11 310);
    --purple-4: oklch(58% 0.11 310);
    --purple-5: oklch(52% 0.11 310);
}

@container root style(--colors: on) {
    .visual-refresh body,
    .visual-refresh .theme-dark,
    .visual-refresh .theme-light:not(.custom-profile-theme) {
        --activity-card-background: red;
        --alert-bg: red;
        --autocomplete-bg: var(--bg-3);

        --background-accent: var(--bg-2);
        --background-floating: var(--bg-3);
        --background-nested-floating: var(--bg-4);
        --background-mentioned: var(--mention);
        --background-mentioned-hover: var(--mention-hover);
        --background-message-automod: red;
        --background-message-automod-hover: red;
        --background-message-highlight: var(--reply);
        --background-message-highlight-hover: var(--reply-hover);
        --background-message-hover: var(--message-hover);

        --background-primary: var(--bg-4);
        --background-secondary: var(--bg-3);
        --background-secondary-alt: var(--bg-3);
        --background-tertiary: var(--bg-4);

        --bg-base-primary: var(--bg-4); /* screenshare window? */
        --bg-base-secondary: var(--bg-4);
        --bg-base-tertiary: var(--bg-3);
        --background-mod-subtle: var(--bg-3);
        --background-mod-normal: var(--bg-3);
        --background-mod-strong: var(--bg-3);
        --background-base-low: var(--bg-4);
        --background-base-lower: var(--bg-4);
        --background-base-lowest: var(--bg-4);
        --background-surface-high: var(--bg-3);
        --background-surface-higher: var(--bg-3);
        --background-surface-highest: var(--bg-3);
        --bg-surface-overlay: var(--bg-4);
        --bg-surface-raised: var(--bg-3);
        --chat-background-default: var(--bg-3);
        --input-background: var(--bg-3);
        --modal-background: var(--bg-4);
        --modal-footer-background: var(--bg-4);

        --background-modifier-accent: var(--hover);
        --background-modifier-active: var(--active);
        --background-modifier-hover: var(--hover);
        --background-modifier-selected: var(--active);

        --bg-mod-faint: var(--hover);
        --bg-mod-subtle: var(--bg-2);
        --bg-mod-strong: var(--bg-2);
        --bg-brand: var(--accent-2);

        /* --border-faint: var(--border-light);  */   /* contours */
         /* --border-subtle: var(--border);  /* contours  massage*/
        --border-normal: var(--border);
        --border-strong: var(--border);
        /*  --input-border: var(--border); /* contours  massage*/

        --button-danger-background: var(--red-3);
        --button-danger-background-active: var(--red-5);
        --button-danger-background-hover: var(--red-4);
        --button-danger-background-disabled: var(--red-5);
        --button-danger-border: var(--button-border);

        --button-filled-brand-text: var(--text-0);
        --button-filled-brand-background: var(--accent-3);
        --button-filled-brand-background-active: var(--accent-5);
        --button-filled-brand-background-hover: var(--accent-4);       /* last massage */
        --button-filled-brand-border: var(--button-border);

        --button-filled-brand-inverted-background: var(--text-1);
        --button-filled-brand-inverted-background-active: var(--text-3);
        --button-filled-brand-inverted-background-hover: var(--text-2);
        --button-filled-brand-inverted-text: var(--bg-4);
        --button-filled-white-background: var(--text-1);
        --button-filled-white-background-active: var(--text-3);
        --button-filled-white-background-hover: var(--text-2);
        --button-filled-white-text: var(--bg-4);

        --button-outline-danger-background: var(--bg-2);
        --button-outline-danger-background-active: var(--text-5);
        --button-outline-danger-background-hover: var(--bg-1);
        --button-outline-danger-border: var(--border-light);
        --button-outline-danger-border-active: var(--border-light);
        --button-outline-danger-border-hover: var(--border-light);
        --button-outline-danger-text: var(--red-1);
        --button-outline-danger-text-active: var(--red-1);
        --button-outline-danger-text-hover: var(--red-1);

        --button-outline-primary-background: red;
        --button-outline-primary-background-active: var(--active);
        --button-outline-primary-background-hover: var(--hover);
        --button-outline-primary-border: var(--text-5);
        --button-outline-primary-border-active: var(--text-5);
        --button-outline-primary-border-hover: var(--text-5);
        --button-outline-primary-text: var(--text-3);
        --button-outline-primary-text-active: var(--text-3);
        --button-outline-primary-text-hover: var(--text-3);

        --button-outline-positive-background: red;
        --button-outline-positive-background-active: var(--green-4);
        --button-outline-positive-background-hover: var(--green-3);
        --button-outline-positive-border: var(--green-2);
        --button-outline-positive-border-active: var(--green-4);
        --button-outline-positive-border-hover: var(--green-3);
        --button-outline-positive-text: var(--text-3);
        --button-outline-positive-text-active: var(--text-0);
        --button-outline-positive-text-hover: var(--text-0);

        --button-positive-background: var(--green-2);
        --button-positive-background-active: var(--green-4);
        --button-positive-background-hover: var(--green-3);
        --button-positive-background-disabled: var(--green-4);
        --button-positive-border: var(--button-border);

        --button-secondary-background: var(--bg-2);
        --button-secondary-background-active: var(--text-5);
        --button-secondary-background-hover: var(--bg-1);
        --button-secondary-background-disabled: var(--bg-3);
        --button-secondary-text: var(--text-3);

        --button-transparent-background: var(--hover);
        --button-transparent-background-active: var(--active-2);
        --button-transparent-background-hover: var(--active);
        --button-transparent-text: var(--text-3);

        --redesign-button-secondary-text: var(--text-3);

        --polls-voted-fill: color-mix(in hsl, var(--accent-2), transparent 90%);
        --polls-victor-fill: color-mix(in hsl, var(--green-2), transparent 90%);

        --card-primary-bg: var(--bg-3);
        --card-secondary-bg: var(--bg-2);
        --channel-icon: var(--text-4);
        --channels-default: var(--text-4);

        --embed-title: var(--text-2);

        --header-primary: var(--text-2);
        --header-secondary: var(--text-4);
        --header-muted: var(--text-4);

        --icon-muted: var(--text-5);
        --icon-primary: var(--text-3);
        --icon-secondary: var(--text-4);
        --icon-tertiary: var(--text-4);

        --info-danger-background: red;
        --info-danger-text: red;
        --info-help-background: color-mix(in hsl, var(--blue-2), transparent 80%);
        --info-help-foreground: var(--blue-1);
        --info-help-text: var(--blue-1);
        --info-positive-background: color-mix(in hsl, var(--yellow-1), transparent 80%);
        --info-positive-text: var(--green-1);
        --info-warning-background: color-mix(in hsl, var(--yellow-2), transparent 80%);
        --info-warning-text: var(--yellow-1);

        --text-brand: var(--accent-1);
        --text-danger: var(--red-1);
        --text-link: var(--accent-1);
        --text-link-low-saturation: red;
        --text-low-contrast: var(--text-4);
        --text-message-preview-low-sat: red;
        --text-muted: var(--text-5);
        --text-muted-on-default: var(--text-4);
        --text-normal: var(--text-3);
        --text-positive: var(--green-1);
        --text-primary: var(--text-3);
        --text-secondary: var(--text-4);
        --text-warning: var(--yellow-1);
        --text-default: var(--text-3);
        --text-feedback-critical: var(--red-1);
        --text-feedback-positive: var(--green-1);
        --text-feedback-info: red;
        --text-feedback-warning: red;
        --text-tertiary: var(--text-4);
		
        --user-profile-overlay-background: var(--bg-4);   /* user sidebar  */
        --user-profile-overlay-background-hover: var(--bg-4);

        --status-danger: var(--red-2);
        --status-danger-background: var(--red-3);
        --status-danger-text: var(--white);
        --status-dnd: var(--dnd); /* server profiles */
        --status-idle: var(--idle);
        --status-offline: var(--offline);
        --status-online: var(--online);
        --status-positive: var(--green-2);
        --status-positive-background: var(--green-2);
        --status-positive-text: var(--white);
        --status-speaking: var(--green-2);
        --status-warning: var(--yellow-2);
        --status-warning-background: red;
        --status-warning-text: var(--black);

        --background-feedback-critical: color-mix(in hsl, var(--red-2), transparent 80%);
        --background-feedback-info: color-mix(in hsl, var(--blue-2), transparent 80%);
        --background-feedback-positive: color-mix(in hsl, var(--green-2), transparent 80%);
        --background-feedback-warning: color-mix(in hsl, var(--yellow-2), transparent 80%);

        --interactive-normal: var(--text-4);
        --interactive-hover: var(--text-3);
        --interactive-active: var(--text-3);
        --interactive-muted: var(--text-5);

        --mention-foreground: var(--accent-1);
        --mention-background: color-mix(in hsl, var(--accent-2), transparent 90%);

        --channel-text-area-placeholder: var(--text-5);

        --message-reacted-text: var(--text-2);
        --message-reacted-background: color-mix(in hsl, var(--accent-2), transparent 80%);

        --custom-channel-members-bg: var(--bg-4);

        --redesign-input-control-selected: var(--accent-2);

        --scrollbar-auto-thumb: var(--bg-3);
        --scrollbar-auto-track: transparent;
        --scrollbar-thin-thumb: var(--bg-3);
        --scrollbar-thin-track: transparent;

        --white: var(--text-0);
        --white-500: var(--text-0);
        --redesign-button-overlay-alpha-text: var(--text-2);

        --brand-360: var(--accent-2);
        --brand-500: var(--accent-2);
        --blurple-50: var(--accent-2);

        --red-400: var(--red-2);
        --red-500: var(--red-3);

        --green-360: var(--green-2); /* seems to be mostly used by vencord plugins */
        --primary-400: var(--text-4);
		
		/* code background */
		.markup pre, 
        .codeBlockText,
		
		
		
		
		
        .hljs {
                  background: var(--custom-code-bg) !important;
                  border-color: hsl(214, 23%, 18%) !important; 
		}
				  
       }

        .text_b88801 > strong /* xxx is typing.. */ {
            color: var(--text-3);
        }
		
        .mentioned__5126c:before /* mention message left edge */ {
            background-color: var(--accent-2) !important;
        }
				
        .replying__5126c:before /* reply message left edge */ {
            background-color: var(--text-2) !important;
        }

        #app-mount .message__5126c.replying__5126c:hover /* override fix for message reply hover */ {
            background: var(--reply-hover);
        }
		
		.container__87bf1 /* settings checkbutton background */ {
					background-color: var(--bg-1) !important;
            transition: background-color 0.2s ease;
        }
        .container__87bf1.checked__87bf1 /* settings checkbutton background */ {
            background-color: var(--accent-2) !important;
        }
        .container__87bf1 .slider__87bf1 > svg > path /* settings checkbutton check */ {
            fill: var(--bg-1) !important;
            transition: fill 0.2s ease;
        }
        .container__87bf1.checked__87bf1 .slider__87bf1 > svg > path /* settings checkbutton check */ {
            fill: var(--accent-2) !important;
        }
        .container__87bf1 rect[fill='white'] /* settings checkbutton slider */ {
            fill: var(--text-3) !important;
            transition: fill 0.2s ease;
        }
        .container__87bf1.checked__87bf1 rect[fill='white'] /* settings checkbutton slider */ {
            fill: var(--text-0) !important;
        }
		
        .dropdownButtonBannerVisible__2637a /* server name over banner dropdown button */ {
            color: var(--text-1);
        }
        .headerText_e4cb9a.base_eb1a4c /* stream preview header text */,
        .participantName__2cdb8 /* stream preview participant name */ {
            color: var(--text-1) !important;
        }
        .playPausePopIcon_cf09d8 > path /* video play/pause popup */ {
            fill: var(--text-1);
        }
        .headerTitle_e4cb9a:hover /* stream preview header title hover underline */ {
            border-color: var(--text-1) !important;
        }

		.toolbar__9293f /* /* mute button /* */ {
            --status-danger: var(--red-1);
        }

        ::selection,
        .highlight {
            background: var(--blue-6);
            color: var(--text-0);
        }
    }
}

    `;

    function loadTheme() {
        if (!document.head) return;

        const oldStyle = document.getElementById('custom-discord-theme');
        if (oldStyle) oldStyle.remove();

        const style = document.createElement('style');
        style.id = 'custom-discord-theme';
        style.textContent = themeCSS;
        document.head.appendChild(style);
    }

    loadTheme();
    document.addEventListener('spa:page-changed', loadTheme);
    window.addEventListener('load', loadTheme);
})();
