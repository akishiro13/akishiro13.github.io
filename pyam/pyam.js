const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/js/MainScreen-OQ3agANS.js",
      "assets/js/vue-vendor-CB06HU27.js",
      "assets/js/i18n-vendor-DI5kbOAx.js",
      "assets/js/element-plus-BwuMznbm.js",
      "assets/css/MainScreen-B5-PFxrn.css",
    ]),
) => i.map((i) => d[i]);
import {
  ax as e,
  r as t,
  c as a,
  d as n,
  o as i,
  E as s,
  j as r,
  am as E,
  G as T,
  b as o,
  H as l,
  R as _,
  W as I,
  X as A,
  F as c,
  a8 as u,
  u as S,
  _ as O,
  K as L,
  ay as d,
  az as C,
  Q as N,
  V as P,
  aA as R,
  w as m,
  P as M,
  S as g,
  a4 as h,
  J as D,
  aB as p,
  aC as U,
  au as v,
  aD as y,
} from "./vue-vendor-CB06HU27.js";
import { c as f, u as H } from "./i18n-vendor-DI5kbOAx.js";
import { i as G } from "./element-plus-BwuMznbm.js";
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const a of e)
        if ("childList" === a.type)
          for (const e of a.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        "use-credentials" === e.crossOrigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossOrigin
            ? (t.credentials = "omit")
            : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
const Y = {},
  b = function (e, t, a) {
    let n = Promise.resolve();
    if (t && t.length > 0) {
      let e = function (e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: "fulfilled", value: e }),
              (e) => ({ status: "rejected", reason: e }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        i = a?.nonce || a?.getAttribute("nonce");
      n = e(
        t.map((e) => {
          if (
            (e = (function (e) {
              return "/" + e;
            })(e)) in Y
          )
            return;
          Y[e] = !0;
          const t = e.endsWith(".css"),
            a = t ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${e}"]${a}`)) return;
          const n = document.createElement("link");
          return (
            (n.rel = t ? "stylesheet" : "modulepreload"),
            t || (n.as = "script"),
            (n.crossOrigin = ""),
            (n.href = e),
            i && n.setAttribute("nonce", i),
            document.head.appendChild(n),
            t
              ? new Promise((t, a) => {
                  (n.addEventListener("load", t),
                    n.addEventListener("error", () =>
                      a(new Error(`Unable to preload CSS for ${e}`)),
                    ));
                })
              : void 0
          );
        }),
      );
    }
    function i(e) {
      const t = new Event("vite:preloadError", { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return n.then((t) => {
      for (const e of t || []) "rejected" === e.status && i(e.reason);
      return e().catch(i);
    });
  };
let F;
try {
  F = (await b(() => import("./remote-pyam-config-CDxMWBJI.js"), []))
    .REMOTE_PYAM_CONFIG;
} catch {}
const k = F?.OPEN_DURATION ?? 3900381,
  B = F?.CLOSE_DURATION ?? 7200704,
  w = {
    TIMING: {
      OPEN_DURATION: k,
      CLOSE_DURATION: B,
      UPDATE_INTERVAL: 100,
      CYCLE_DURATION: F?.CYCLE_DURATION ?? k + B,
      INITIAL_OPEN_TIME: new Date(
        F?.INITIAL_OPEN_TIME ?? "2025-09-21T00:04:27.222-04:00",
      ),
    },
    VERSION: {
      BUILD: "4.3.1-LIVE",
      SYSTEM: "10321721",
      REMOTE: F?.version,
      LAST_UPDATED: F?.lastUpdated,
    },
    DEFAULT_LANGUAGE: "zh",
    CURRENT_LANGUAGE: "zh",
  },
  z = [
    {
      min: 0,
      max: 72e4,
      colors: ["green", "green", "green", "green", "green"],
    },
    {
      min: 72e4,
      max: 144e4,
      colors: ["green", "green", "green", "green", "empty"],
    },
    {
      min: 144e4,
      max: 216e4,
      colors: ["green", "green", "green", "empty", "empty"],
    },
    {
      min: 216e4,
      max: 288e4,
      colors: ["green", "green", "empty", "empty", "empty"],
    },
    {
      min: 288e4,
      max: 36e5,
      colors: ["green", "empty", "empty", "empty", "empty"],
    },
    {
      min: 36e5,
      max: 39e5,
      colors: ["empty", "empty", "empty", "empty", "empty"],
    },
    { min: 39e5, max: 534e4, colors: ["red", "red", "red", "red", "red"] },
    { min: 534e4, max: 678e4, colors: ["green", "red", "red", "red", "red"] },
    { min: 678e4, max: 822e4, colors: ["green", "green", "red", "red", "red"] },
    {
      min: 822e4,
      max: 966e4,
      colors: ["green", "green", "green", "red", "red"],
    },
    {
      min: 966e4,
      max: 111e5,
      colors: ["green", "green", "green", "green", "red"],
    },
  ],
  x = {
    zh: { name: "中文", flag: "🇨🇳" },
    en: { name: "English", flag: "🇺🇸" },
    jp: { name: "日本語", flag: "🇯🇵" },
    kr: { name: "한국어", flag: "🇰🇷" },
    de: { name: "Deutsch", flag: "🇩🇪" },
    ru: { name: "Русский", flag: "🇷🇺" },
  },
  K = {
    zh: {
      TITLE: "PYAM 行政机库状态 - 星际公民 Pyro 星系实时监控",
      DESCRIPTION:
        "PYAM 行政机库准入终端 - 星际公民（Star Citizen）Pyro 星系行政机库实时监控与准入控制系统。追踪机库门状态、时间表和准入窗口，获取钥匙卡位置和机库开放时间。适用于 CHECKMATE、ORBITUARY、RUIN STATION 等空间站。",
      KEYWORDS:
        "PYAM, 行政机库, 准入控制, 星际公民, Star Citizen, SC, Pyro星系, Pyro系统, 机库状态, 实时监控, 终端系统, 钥匙卡, 机库门, 机库计时器, CHECKMATE, ORBITUARY, RUIN STATION",
      STATUS_ONLINE: "打开",
      STATUS_OFFLINE: "关闭",
      MAIN_TITLE: "行政机库准入计时器",
      STATUS_SUBTITLE: "机库状态",
      COUNTDOWN_LABEL: "距离下次准入窗口",
      COUNTDOWN_LABEL_CLOSING: "距离关闭时间",
      SYSTEM_STATUS: "系统状态",
      LEGACY_MODE: "自动模式",
      FACILITY_LOG: "设施日志",
      SCHEDULE: "时间表",
      ACCESS_GRANTED: "准入许可",
      ACCESS_DENIED: "拒绝访问",
      SYSTEM_DIAGNOSTICS: "支持",
      HANGAR_DOOR_SEQUENCE: "机库门序列",
      AWAITING_SYNC: "等待系统同步...",
      DOOR_OPENING: "机库门序列启动中",
      DOOR_OPEN: "行政机库准入许可",
      DOOR_CLOSING: "机库门序列终止中",
      DOOR_CLOSED: "行政机库拒绝访问",
      LEGACY_NOTICE: "⚠ PYAM公司遗留系统 ⚠",
      TERMINAL_ID: "终端编号: EXEC-7749-ALPHA",
      LOCATION: "位置: 行政机库区",
      COMPANY_NAME: "PYAM公司",
      BUILD_LABEL: "构建版本",
      SYSTEM_LABEL: "系统",
      SYSTEM_BUILD: "构建版本: 4.3.1-LIVE &#124; 系统: 10321721",
      UPTIME_LABEL: "运行时间:",
      FACILITY_ABANDONED: "⚠ 设施已废弃 - 仅自动系统运行 ⚠",
      COPYRIGHT: "© 2954 PYAM.LTD [已倒闭]",
      DEFUNCT_SUFFIX: "[已倒闭]",
      TELEGRAM_CHANNEL: "Telegram频道",
      STATUS_LIGHTS: {
        PWR: "电源",
        SYS: "系统",
        NET: "网络",
        SEC: "安全",
        ACC: "准入",
      },
      DEVELOPER_SUPPORT: {
        TITLE:
          "维护行政机库状态项目需要时间和资源。从服务器运维到功能开发，一切都依赖志愿者贡献。",
        SUPPORT_TEXT:
          "如果此工具对您有用，请考虑在 Ko-fi 上支持我们。您的贡献帮助我们维持服务器运行。",
        KOFI_LINK: "https://ko-fi.com/pyamltd",
      },
      TABLE_HEADERS: { CYCLE: "循环", STATUS: "状态", TIME: "本地时间" },
      BACK_TO_TERMINAL: "返回终端",
      ARTICLE_TYPE: "文档类型",
      LAST_UPDATED: "最后更新",
      CLASSIFICATION: "机密等级",
      CLASSIFICATION_PUBLIC: "公开",
      CLASSIFICATION_CONFIDENTIAL: "机密",
      CLASSIFICATION_RESTRICTED: "限制级",
      MAP_MODULE_TITLE: "地图",
      TUTORIAL_MODULE_TITLE: "教程",
      SHIPS_MODULE_TITLE: "船舶图表",
      OPERATION_MODULE_TITLE: "工作原理",
      MAP_MODULE_DESCRIPTION: "PYAM公司钥匙卡存放空间站分布图",
      TUTORIAL_MODULE_SUBTITLE: "PYAM公司终端系统操作手册",
      TUTORIAL_MODULE_DESCRIPTION:
        "PYAM公司终端系统的完整操作手册，包含系统使用指南、安全须知和故障排除程序。",
      TUTORIAL_MODULE_TIP:
        '游戏教程: <a href="https://starcitizen.tools/Guide:Executive_Hangars" target="_blank">https://starcitizen.tools/Guide:Executive_Hangars</a>',
      SHIPS_MODULE_DESCRIPTION:
        "PYAM公司设计制造的各类舰船技术图表，展示不同型号舰船的规格参数和应用场景。",
      OPERATION_MODULE_DESCRIPTION:
        "PYAM终端系统的技术原理和工作机制详解，包含系统架构、控制流程和安全机制。",
      MODULE_NAVIGATION_TITLE: "信息档案库",
      MODULE_NAVIGATION_SUBTITLE: "PYAM公司数据库访问门户",
      ACCESS_MODULES: "访问信息档案库",
      MAP_IMAGE_1_TITLE: "PYAM行政机库",
      MAP_IMAGE_1_DESC:
        "这个由三个小行星基地组成的集群可以在太阳附近找到。该区域一次只有一个基地处于活跃状态。每个基地都有相同的布局。基地的入口与PYAM-SUPVISR空间站和RABs相同。行政机库的机库门隐藏在小行星深处相对的一侧，与入口在同一平面上（保持与入口相关的俯仰和升降水平）。",
      MAP_IMAGE_2_TITLE: "PYAM服务站",
      MAP_IMAGE_2_DESC:
        "是位于Pyro系统Bloom的L5拉格朗日点的小行星基地，曾由Pyrotechnic Amalgamated拥有和运营。该设施在公司破产后被废弃，此后不法分子在此定居。",
      MAP_IMAGE_3_TITLE: "死局空间站",
      MAP_IMAGE_3_DESC:
        "是Rough & Ready的总部，这是一个不法分子组织。它位于Monox的L4拉格朗日点。赛道Fool's Run蜿蜒穿过空间站的外部。",
      MAP_IMAGE_4_TITLE: "讣闻空间站",
      MAP_IMAGE_4_DESC:
        "位于Bloom高轨道上的讣闻空间站最初由Pyrotechnic Amalgamated建立，为其工人提供燃料和其他资源。今天，Rough & Ready使用该空间站为穿越该系统的不法分子提供燃料、补给和娱乐场所。",
      MAP_IMAGE_5_TITLE: "废墟空间站",
      MAP_IMAGE_5_DESC:
        "原名MacEwan空间站，是位于Pyro系统Terminus轨道上的不法分子空间站。由Pyrotechnic Amalgamated于2506年建立，作为其在该系统的总部，选择该地点是因为它相对安全，远离Pyro（恒星）的耀斑，这使得在Monox和Bloom上建造变得危险。",
      MAP_IMAGE_6_TITLE: "导航危险区域",
      MAP_IMAGE_6_DESC: "",
      OPERATION_HANGAR_TIMER_TITLE: "行政机库计时器工作原理",
      OPERATION_HANGAR_TIMER_DESC:
        "行政机库计时器遵循严格的重复循环，分为三个不同的阶段，每个阶段都有特定的时间和操作要求。",
      OPERATION_SELF_TIMERS_TITLE: "自定义计时器工作原理",
      OPERATION_SELF_TIMERS_DESC:
        "每个争夺区都包含专用的自定义计时器，用于手动跟踪终端或钥匙卡等单个目标，独立于行政机库循环运行。",
      OPERATION_RED_PHASE_TITLE: "红色阶段（2小时）",
      OPERATION_RED_PHASE_DESC:
        "所有指示灯从红色开始，每24分钟逐一变绿。重要提示：此阶段请勿插入Compboard，机库不会开启。",
      OPERATION_GREEN_PHASE_TITLE: "绿色阶段（1小时）",
      OPERATION_GREEN_PHASE_DESC:
        "所有指示灯变绿后，每12分钟逐一熄灭。重要提示：此阶段可以插入Compboard并开启机库。",
      OPERATION_BLACK_PHASE_TITLE: "黑色阶段（5分钟）",
      OPERATION_BLACK_PHASE_DESC:
        "所有指示灯熄灭后，有5分钟的黑屏期，然后整个循环重置为红色阶段。",
      OPERATION_IMPORTANT_DETAILS_TITLE: "重要细节",
      OPERATION_IMPORTANT_DETAILS_DESC:
        "新补丁或服务器维护后，计时器可能在一两天内不准确。如果网站显示应为绿色阶段但机库处于黑屏状态，通常意味着其他玩家已经开启了门。",
      OPERATION_SELF_TIMER_FEATURES_TITLE: "自定义计时器功能",
      OPERATION_SELF_TIMER_FEATURES_DESC:
        "使用+/-按钮调整倒计时时长，点击开始按钮开始倒计时，使用重置按钮恢复默认时长。计时器颜色反映进度：白色（未开始）、红色（倒计时中）、黄色（剩余3分钟以下）、绿色（完成）。",
      OPERATION_TIMER_UNIVERSAL_NOTE_1:
        "从4.0.1预览版的广泛测试来看，时间循环在所有服务器、分片和地区都是通用的。",
      OPERATION_TIMER_UNIVERSAL_NOTE_2:
        "这意味着无论您在哪里游戏，都可以信任计时器——无需再亲自访问机库检查状态。",
      OPERATION_TIMER_UNIVERSAL_NOTE_3:
        "如果机库在绿色阶段显示黑屏，通常意味着其他玩家已经开启了门，这不会影响计时器循环本身。",
      OPERATION_TIMER_UNIVERSAL_NOTE_4:
        "存在一个已知的图形错误，即使没有插入Compboard，所有指示灯也可能显示为黑色。在这种情况下，一旦下一个计时器事件触发（指示灯变化），指示灯将再次正确显示其预期颜色。",
      OPERATION_SELF_TIMER_PERSISTENCE_NOTE_1:
        "计时器在浏览器中本地持久化，即使离开或刷新页面也会保持。",
      OPERATION_SELF_TIMER_PERSISTENCE_NOTE_2:
        "注意：这些计时器是设备和浏览器特定的，不会在会话或用户之间同步。",
      MODULE_TYPE_TACTICAL: "战术文档",
      MODULE_TYPE_TRAINING: "培训资料",
      MODULE_TYPE_TECHNICAL_CHARTS: "技术图表",
      MODULE_TYPE_TECHNICAL_DOC: "技术文档",
      SHIPS_MODULE_SUBTITLE: "PYAM公司舰船技术图表",
      SHIP_F7A_HORNET_TITLE: "Anvil F7A Hornet Mk II Executive",
      SHIP_F7A_HORNET_DESC:
        "Anvil F7A Hornet Mk II是从旧款F7A Hornet模型改进而来的尖端舰载战斗机，F7A Hornet的UEE军用版本。最初仅供军队使用，目前由地球联合帝国海军特种部队和精英中队使用，现在通过民防部队超速计划向平民开放。",
      SHIP_F8C_LIGHTNING_TITLE: "Anvil F8C Lightning Executive",
      SHIP_F8C_LIGHTNING_DESC:
        "Anvil F8C Lightning是地球联合帝国海军使用的F8A Lightning太空优势战斗机的民用版本。它紧密模仿原始F8A的军用规格，并已用于对抗Vanduul入侵者的防线。Anvil为庆祝F8A在UEE海军的首次亮相，向民用市场提供了极其有限的数量。",
      SHIP_CUTLASS_BLACK_TITLE: "Drake Cutlass Black Executive",
      SHIP_CUTLASS_BLACK_DESC:
        "Drake AS-1 Cutlass Black (也称：DCB1) 是为本地系统内民兵部队提供的低成本、易维护解决方案。公司文献坚持认为，超大的货舱、雷达拦截官(RIO)后座和专用牵引装置是为了便于搜索和救援行动。",
      SHIP_SYULEN_TITLE: "Gatac Syulen Executive",
      SHIP_SYULEN_DESC:
        "Syulen是由Gatac制造公司生产的轻型货船。它由受人尊敬的Ng.at'ak家族设计，以满足人类和Xi'an飞行员的需求。拥有流线型和灵活的结构，Syulen非常适合在广阔的宇宙中运输重要货物。此外，它也是有抱负的运输专业人员开始职业生涯的绝佳选择。",
      SHIP_CORSAIR_TITLE: "Drake Corsair Executive",
      SHIP_CORSAIR_DESC:
        "Drake Corsair是一艘多人员探索船，它放弃了防御能力，专注于多功能性和火力。它有不对称可转换机翼和大型货舱。Corsair的功能性舱室最多可容纳四名船员，完整的扫描套件配合一对量子燃料箱为探索遥远危险星球提供了手段和方法。",
    },
    en: {
      TITLE:
        "PYAM Executive Hangar Status - Star Citizen Pyro System Real-time Monitor",
      DESCRIPTION:
        "PYAM Executive Hangar Access Terminal - Real-time monitoring and access control system for Star Citizen Pyro System executive hangar facilities. Track hangar door status, schedules, and access windows. Get keycard locations and hangar opening times for CHECKMATE, ORBITUARY, RUIN STATION and more.",
      KEYWORDS:
        "PYAM, Executive Hangar, Star Citizen, SC, Pyro System, Hangar Status, Access Control, Real-time Monitoring, Terminal System, Keycard, Hangar Door, Hangar Timer, CHECKMATE, ORBITUARY, RUIN STATION",
      STATUS_ONLINE: "Open",
      STATUS_OFFLINE: "Closed",
      MAIN_TITLE: "Executive Hangar Access Timer",
      STATUS_SUBTITLE: "Hangar Status",
      COUNTDOWN_LABEL: "Next Access Window",
      COUNTDOWN_LABEL_CLOSING: "Time Until Closure",
      SYSTEM_STATUS: "System Status",
      LEGACY_MODE: "Autonomous Mode",
      FACILITY_LOG: "Facility Log",
      SCHEDULE: "Schedule",
      ACCESS_GRANTED: "ACCESS GRANTED",
      ACCESS_DENIED: "ACCESS DENIED",
      SYSTEM_DIAGNOSTICS: "Support",
      HANGAR_DOOR_SEQUENCE: "Hangar Door Sequence",
      AWAITING_SYNC: "Awaiting System Synchronization...",
      DOOR_OPENING: "Hangar Door Sequence Initiated",
      DOOR_OPEN: "Executive Hangar Access Granted",
      DOOR_CLOSING: "Hangar Door Sequence Terminating",
      DOOR_CLOSED: "Executive Hangar Access Denied",
      LEGACY_NOTICE: "⚠ PYAM CORP LEGACY SYSTEMS ⚠",
      TERMINAL_ID: "Terminal ID: EXEC-7749-ALPHA",
      LOCATION: "Location: Admin Hangar Bay",
      COMPANY_NAME: "PYAM CORPORATION",
      BUILD_LABEL: "Build",
      SYSTEM_LABEL: "Sys",
      SYSTEM_BUILD: "Build: 4.3.1-LIVE &#124; Sys: 10321721",
      UPTIME_LABEL: "Uptime:",
      FACILITY_ABANDONED: "⚠ Facility Abandoned - Automated Systems Only ⚠",
      COPYRIGHT: "© 2954 PYAM.LTD [DEFUNCT]",
      DEFUNCT_SUFFIX: "[DEFUNCT]",
      TELEGRAM_CHANNEL: "Telegram Channel",
      STATUS_LIGHTS: {
        PWR: "Power",
        SYS: "System",
        NET: "Network",
        SEC: "Security",
        ACC: "Access",
      },
      DEVELOPER_SUPPORT: {
        TITLE:
          "Maintaining the Hangar Status project requires time and resources. From server operations to feature development, everything relies on volunteer contributions.",
        SUPPORT_TEXT:
          "If you find this tool useful, please consider supporting us on Ko-fi. Your contributions help keep our servers running.",
        KOFI_LINK: "https://ko-fi.com/pyamltd",
      },
      TABLE_HEADERS: { CYCLE: "Cycle", STATUS: "Status", TIME: "Local Time" },
      BACK_TO_TERMINAL: "Back to Terminal",
      ARTICLE_TYPE: "Document Type",
      LAST_UPDATED: "Last Updated",
      CLASSIFICATION: "Classification",
      CLASSIFICATION_PUBLIC: "Public",
      CLASSIFICATION_CONFIDENTIAL: "Confidential",
      CLASSIFICATION_RESTRICTED: "Restricted",
      MAP_MODULE_TITLE: "Maps",
      TUTORIAL_MODULE_TITLE: "Tutorials",
      SHIPS_MODULE_TITLE: "Ship Charts",
      OPERATION_MODULE_TITLE: "Operations",
      MAP_MODULE_DESCRIPTION:
        "PYAM company key card storage space station distribution map.",
      TUTORIAL_MODULE_SUBTITLE:
        "PYAM Corporation Terminal System Operation Manual",
      TUTORIAL_MODULE_DESCRIPTION:
        "Complete operation manual for PYAM terminal systems, including usage guides, safety instructions and troubleshooting procedures.",
      TUTORIAL_MODULE_TIP:
        'Game tutorial: <a href="https://starcitizen.tools/Guide:Executive_Hangars" target="_blank">https://starcitizen.tools/Guide:Executive_Hangars</a>',
      SHIPS_MODULE_DESCRIPTION:
        "Technical charts of various spacecraft designed and manufactured by PYAM Corporation, showing specifications and application scenarios.",
      OPERATION_MODULE_DESCRIPTION:
        "Detailed technical principles and working mechanisms of PYAM terminal systems, including system architecture, control processes and security mechanisms.",
      MODULE_NAVIGATION_TITLE: "Information Archives",
      MODULE_NAVIGATION_SUBTITLE: "PYAM Corporation Database Access Portal",
      ACCESS_MODULES: "Access Information Archives",
      MAP_IMAGE_1_TITLE: "PYAM-EXHANG-0-1",
      MAP_IMAGE_1_DESC:
        "This cluster of three asteroid bases can be found near the sun. Only one base in the area is active at a time. Every base has the same layout. The entrance to the bases are identical to the PYAM-SUPVISR stations and RABs. The Hangar door to the Executive Hangar is hidden deep on the opposite side of the asteroid, on the same plane as the entrance (keep pitch and elevator level in relation to the entrance).",
      MAP_IMAGE_2_TITLE: "PYAM-SUPVISR-3-4/5",
      MAP_IMAGE_2_DESC:
        "is an asteroid base in the Pyro system formerly owned and operated by Pyrotechnic Amalgamated, located at Bloom's L5 Lagrange point. The facility was abandoned after the company's bankruptcy, and outlaws have since taken residence.",
      MAP_IMAGE_3_TITLE: "RUIN-STATION",
      MAP_IMAGE_3_DESC:
        "originally MacEwan Station, is an outlaw station orbiting Terminus in the Pyro system. Founded by Pyrotechnic Amalgamated in 2506 as their headquarters in the system, the site was chosen due to its relative safety from flares from Pyro (star), which made construction on Monox and Bloom risky.",
      MAP_IMAGE_4_TITLE: "ORBITUARY",
      MAP_IMAGE_4_DESC:
        "Located in high orbit above Bloom, Orbituary was originally established by Pyrotechnic Amalgamated to supply their workers with fuel and other resources. Today, Rough & Ready uses the station to offer outlaws traveling the system a place to stop for fuel, supplies, and a bit of entertainment.",
      MAP_IMAGE_5_TITLE: "CHECKMATE",
      MAP_IMAGE_5_DESC:
        "Checkmate Station is a space station and headquarters of Rough & Ready, a group of Outlaws. It is located at the L4 Lagrange point of Monox. The racetrack Fool's Run weaves through the station's exterior.",
      MAP_IMAGE_6_TITLE: "MAP 6",
      MAP_IMAGE_6_DESC: "",
      OPERATION_HANGAR_TIMER_TITLE: "Executive Hangar Timer Operation",
      OPERATION_HANGAR_TIMER_DESC:
        "The Executive Hangar timer follows a strict, repeating cycle divided into three distinct phases, each with specific timing and operational requirements.",
      OPERATION_SELF_TIMERS_TITLE: "Self Timers Operation",
      OPERATION_SELF_TIMERS_DESC:
        "Each Contested Zone includes dedicated Self Timers to manually track individual objectives like terminals or keycards, operating independently of the Executive Hangar cycle.",
      OPERATION_RED_PHASE_TITLE: "Red Phase (2 Hours)",
      OPERATION_RED_PHASE_DESC:
        "All lights start red and turn green one by one, every 24 minutes. Important: Do not insert Compboards during this phase — the hangar will not open.",
      OPERATION_GREEN_PHASE_TITLE: "Green Phase (1 Hour)",
      OPERATION_GREEN_PHASE_DESC:
        "Once all lights have turned green, they begin turning off one by one, every 12 minutes. Important: You can insert Compboards and open the hangar during this phase.",
      OPERATION_BLACK_PHASE_TITLE: "Black Phase (5 Minutes)",
      OPERATION_BLACK_PHASE_DESC:
        "After all lights are off, there is a 5-minute blackout period before the entire cycle resets to Red.",
      OPERATION_IMPORTANT_DETAILS_TITLE: "Important Details",
      OPERATION_IMPORTANT_DETAILS_DESC:
        "Upon a new patch or server maintenance the timer may be inaccurate for a day or two. If the hangar is blacked out while showing Green Phase, it usually means another player has already opened the door.",
      OPERATION_SELF_TIMER_FEATURES_TITLE: "Self Timer Features",
      OPERATION_SELF_TIMER_FEATURES_DESC:
        "Use +/- buttons to adjust countdown duration, click Start to begin countdown, use Reset to restore default duration. Timer colors reflect progress: White (not started), Red (counting down), Yellow (under 3 minutes), Green (complete).",
      OPERATION_TIMER_UNIVERSAL_NOTE_1:
        "From extensive testing of the 4.0.1 preview, the timer loop is universal across all servers, shards, and regions.",
      OPERATION_TIMER_UNIVERSAL_NOTE_2:
        "This means you can trust the timer regardless of where you are playing - no need to visit the hangar in person to check status anymore.",
      OPERATION_TIMER_UNIVERSAL_NOTE_3:
        "If the hangar shows a black screen during Green Phase, it usually means another player has already opened the door, which does not affect the timer cycle itself.",
      OPERATION_TIMER_UNIVERSAL_NOTE_4:
        "There is a known graphics bug where all lights may appear black even when no Compboard is inserted. In this case, once the next timer event triggers (light change), the lights will correctly display their expected colors again.",
      OPERATION_SELF_TIMER_PERSISTENCE_NOTE_1:
        "Timers are persisted locally in the browser and will remain even if you leave or refresh the page.",
      OPERATION_SELF_TIMER_PERSISTENCE_NOTE_2:
        "Note: These timers are device and browser specific, and will not sync across sessions or users.",
      MODULE_TYPE_TACTICAL: "Tactical Documentation",
      MODULE_TYPE_TRAINING: "Training Materials",
      MODULE_TYPE_TECHNICAL_CHARTS: "Technical Charts",
      MODULE_TYPE_TECHNICAL_DOC: "Technical Documentation",
      SHIPS_MODULE_SUBTITLE: "PYAM Corporation Ship Technical Charts",
      SHIP_F7A_HORNET_TITLE: "Anvil F7A Hornet Mk II Executive",
      SHIP_F7A_HORNET_DESC:
        "The Anvil F7A Hornet Mk II is the cutting-edge carrier-based fighter revamped from the older F7A Hornet model, the UEE military version of the Hornet. Originally only available to the military, currently used by United Empire of Earth Navy special forces and elite squadrons, it is now available to civilians through the Civilian Defense Forces Overdrive Initiative.",
      SHIP_F8C_LIGHTNING_TITLE: "Anvil F8C Lightning Executive",
      SHIP_F8C_LIGHTNING_DESC:
        "The Anvil F8C Lightning is the civilian variant of the F8A Lightning space superiority fighter that is used by the United Empire of Earth Navy. It closely mimics the military specs of the original F8A, and has been used in lines of defense against Vanduul invaders. It was made available in extremely limited numbers to the civilian market by Anvil to celebrate the debut of the F8A in the UEE Navy.",
      SHIP_CUTLASS_BLACK_TITLE: "Drake Cutlass Black Executive",
      SHIP_CUTLASS_BLACK_DESC:
        "The Drake AS-1 Cutlass Black (also: DCB1) is a low-cost, easy-to-maintain solution for local in-system militia units. The larger-than-average cargo hold, Radar intercept officer (RIO) back-seat and dedicated tractor mount are, the company literature insists, for facilitating search and rescue operations.",
      SHIP_SYULEN_TITLE: "Gatac Syulen Executive",
      SHIP_SYULEN_DESC:
        "The Syulen is a light cargo ship produced by Gatac Manufacture. It has been designed by the esteemed House Ng.at'ak to cater to the needs of both Human and Xi'an pilots. Boasting a sleek and nimble structure, the Syulen is perfectly suited for transporting crucial shipments throughout the vast expanse of the 'Verse. Additionally, it serves as an excellent choice for aspiring transport professionals embarking on their career journey.",
      SHIP_CORSAIR_TITLE: "Drake Corsair Executive",
      SHIP_CORSAIR_DESC:
        "The Drake Corsair is a multi-crew explorer ship that gives up defenses for a focus on versatility and firepower. It has asymmetric convertible wings, and a large cargo hold. Up to four crew can be accommodated in the Corsair's functional quarters, and a full complement of scanning suites along with a pair of quantum fuel tanks provide the means and method of exploring distant, dangerous stars.",
    },
    jp: {
      TITLE:
        "PYAM エグゼクティブ格納庫ステータス - Star Citizen Pyroシステムリアルタイムモニター",
      DESCRIPTION:
        "PYAM エグゼクティブ格納庫アクセス端末 - Star Citizen Pyroシステムエグゼクティブ格納庫のリアルタイム監視およびアクセス制御システム。格納庫ドアの状態、スケジュール、アクセスウィンドウを追跡。CHECKMATE、ORBITUARY、RUIN STATIONなどのキーカード位置と格納庫開放時間を取得。",
      KEYWORDS:
        "PYAM, エグゼクティブ格納庫, Star Citizen, SC, Pyroシステム, 格納庫ステータス, アクセス制御, リアルタイム監視, 端末システム, キーカード, 格納庫ドア, 格納庫タイマー, CHECKMATE, ORBITUARY, RUIN STATION",
      STATUS_ONLINE: "開放",
      STATUS_OFFLINE: "閉鎖",
      MAIN_TITLE: "エグゼクティブ格納庫アクセスタイマー",
      STATUS_SUBTITLE: "格納庫ステータス",
      COUNTDOWN_LABEL: "次のアクセスウィンドウまで",
      COUNTDOWN_LABEL_CLOSING: "閉鎖までの時間",
      SYSTEM_STATUS: "システムステータス",
      LEGACY_MODE: "自律モード",
      FACILITY_LOG: "施設ログ",
      SCHEDULE: "スケジュール",
      ACCESS_GRANTED: "アクセス許可",
      ACCESS_DENIED: "アクセス拒否",
      SYSTEM_DIAGNOSTICS: "サポート",
      HANGAR_DOOR_SEQUENCE: "格納庫ドアシーケンス",
      AWAITING_SYNC: "システム同期待機中...",
      DOOR_OPENING: "格納庫ドアシーケンス開始",
      DOOR_OPEN: "エグゼクティブ格納庫アクセス許可",
      DOOR_CLOSING: "格納庫ドアシーケンス終了中",
      DOOR_CLOSED: "エグゼクティブ格納庫アクセス拒否",
      LEGACY_NOTICE: "⚠ PYAM CORP レガシーシステム ⚠",
      TERMINAL_ID: "端末ID: EXEC-7749-ALPHA",
      LOCATION: "場所: 管理格納庫ベイ",
      COMPANY_NAME: "PYAM CORPORATION",
      BUILD_LABEL: "ビルド",
      SYSTEM_LABEL: "システム",
      SYSTEM_BUILD: "ビルド: 4.3.1-LIVE &#124; システム: 10321721",
      UPTIME_LABEL: "稼働時間:",
      FACILITY_ABANDONED: "⚠ 施設放棄 - 自動システムのみ ⚠",
      COPYRIGHT: "© 2954 PYAM.LTD [廃業]",
      DEFUNCT_SUFFIX: "[廃業]",
      TELEGRAM_CHANNEL: "Telegramチャンネル",
      STATUS_LIGHTS: {
        PWR: "電源",
        SYS: "システム",
        NET: "ネットワーク",
        SEC: "セキュリティ",
        ACC: "アクセス",
      },
      DEVELOPER_SUPPORT: {
        TITLE:
          "格納庫ステータスプロジェクトの維持には時間とリソースが必要です。サーバー運用から機能開発まで、すべてボランティアの貢献に依存しています。",
        SUPPORT_TEXT:
          "このツールが役立つと思われる場合は、Ko-fiでのサポートをご検討ください。皆様の貢献がサーバーの運営を支えます。",
        KOFI_LINK: "https://ko-fi.com/pyamltd",
      },
      TABLE_HEADERS: {
        CYCLE: "サイクル",
        STATUS: "ステータス",
        TIME: "現地時間",
      },
      BACK_TO_TERMINAL: "端末に戻る",
      ARTICLE_TYPE: "ドキュメントタイプ",
      LAST_UPDATED: "最終更新",
      CLASSIFICATION: "機密分類",
      CLASSIFICATION_PUBLIC: "公開",
      CLASSIFICATION_CONFIDENTIAL: "機密",
      CLASSIFICATION_RESTRICTED: "制限",
      MAP_MODULE_TITLE: "マップ",
      TUTORIAL_MODULE_TITLE: "チュートリアル",
      SHIPS_MODULE_TITLE: "艦船チャート",
      OPERATION_MODULE_TITLE: "運用",
      MAP_MODULE_DESCRIPTION: "PYAM社キーカード保管宇宙ステーション分布図。",
      TUTORIAL_MODULE_SUBTITLE: "PYAM Corporation端末システム操作マニュアル",
      TUTORIAL_MODULE_DESCRIPTION:
        "PYAM端末システムの完全な操作マニュアル。使用ガイド、安全指示、トラブルシューティング手順を含みます。",
      TUTORIAL_MODULE_TIP:
        'ゲームチュートリアル: <a href="https://starcitizen.tools/Guide:Executive_Hangars" target="_blank">https://starcitizen.tools/Guide:Executive_Hangars</a>',
      SHIPS_MODULE_DESCRIPTION:
        "PYAM Corporationが設計・製造した各種宇宙船の技術チャート。仕様と応用シナリオを表示。",
      OPERATION_MODULE_DESCRIPTION:
        "PYAM端末システムの詳細な技術原理と動作メカニズム。システムアーキテクチャ、制御プロセス、セキュリティメカニズムを含みます。",
      MODULE_NAVIGATION_TITLE: "情報アーカイブ",
      MODULE_NAVIGATION_SUBTITLE:
        "PYAM Corporationデータベースアクセスポータル",
      ACCESS_MODULES: "情報アーカイブにアクセス",
      MAP_IMAGE_1_TITLE: "PYAM-EXHANG-0-1",
      MAP_IMAGE_1_DESC:
        "この3つの小惑星基地のクラスターは太陽の近くで見つけることができます。エリア内で一度にアクティブな基地は1つだけです。各基地は同じレイアウトです。基地への入口はPYAM-SUPVISRステーションやRABsと同じです。エグゼクティブ格納庫への格納庫ドアは、小惑星の反対側の奥深くに隠されており、入口と同じ平面上にあります（入口に対してピッチとエレベーターを水平に保つ）。",
      MAP_IMAGE_2_TITLE: "PYAM-SUPVISR-3-4/5",
      MAP_IMAGE_2_DESC:
        "BloomのL5ラグランジュポイントに位置する、Pyroシステムの小惑星基地で、かつてPyrotechnic Amalgamatedが所有・運営していました。施設は会社の破産後に放棄され、その後無法者が住み着きました。",
      MAP_IMAGE_3_TITLE: "RUIN-STATION",
      MAP_IMAGE_3_DESC:
        "元MacEwan Stationで、Pyroシステムのterminusを周回する無法者ステーションです。2506年にPyrotechnic Amalgamatedによって同システムの本部として設立されました。Pyro（恒星）からのフレアによる相対的な安全性のため、この場所が選ばれました。これによりMonoxやBloomでの建設がリスクのあるものとなっていました。",
      MAP_IMAGE_4_TITLE: "ORBITUARY",
      MAP_IMAGE_4_DESC:
        "Bloomの高軌道上に位置するOrituaryは、元々Pyrotechnic Amalgamatedが労働者に燃料やその他のリソースを供給するために設立しました。今日、Rough & Readyはこのステーションを使用して、システムを旅する無法者に燃料、補給品、娯楽を提供する場所を提供しています。",
      MAP_IMAGE_5_TITLE: "CHECKMATE",
      MAP_IMAGE_5_DESC:
        "Checkmate Stationは、無法者グループRough & Readyの本部である宇宙ステーションです。MonoxのL4ラグランジュポイントに位置しています。レーストラックFool's Runはステーションの外部を曲がりくねって通っています。",
      MAP_IMAGE_6_TITLE: "MAP 6",
      MAP_IMAGE_6_DESC: "",
      OPERATION_HANGAR_TIMER_TITLE: "エグゼクティブ格納庫タイマー運用",
      OPERATION_HANGAR_TIMER_DESC:
        "エグゼクティブ格納庫タイマーは、3つの異なるフェーズに分かれた厳密で繰り返されるサイクルに従い、各フェーズには特定のタイミングと運用要件があります。",
      OPERATION_SELF_TIMERS_TITLE: "セルフタイマー運用",
      OPERATION_SELF_TIMERS_DESC:
        "各競合ゾーンには、端末やキーカードなどの個別の目標を手動で追跡するための専用セルフタイマーが含まれ、エグゼクティブ格納庫サイクルとは独立して動作します。",
      OPERATION_RED_PHASE_TITLE: "レッドフェーズ（2時間）",
      OPERATION_RED_PHASE_DESC:
        "すべてのライトは赤から始まり、24分ごとに1つずつ緑に変わります。重要：このフェーズ中にCompboardを挿入しないでください - 格納庫は開きません。",
      OPERATION_GREEN_PHASE_TITLE: "グリーンフェーズ（1時間）",
      OPERATION_GREEN_PHASE_DESC:
        "すべてのライトが緑になると、12分ごとに1つずつ消灯し始めます。重要：このフェーズ中にCompboardを挿入して格納庫を開くことができます。",
      OPERATION_BLACK_PHASE_TITLE: "ブラックフェーズ（5分）",
      OPERATION_BLACK_PHASE_DESC:
        "すべてのライトが消えた後、サイクル全体がレッドにリセットされる前に5分間のブラックアウト期間があります。",
      OPERATION_IMPORTANT_DETAILS_TITLE: "重要な詳細",
      OPERATION_IMPORTANT_DETAILS_DESC:
        "新しいパッチまたはサーバーメンテナンス後、タイマーは1〜2日間不正確になる場合があります。グリーンフェーズを示しているのに格納庫がブラックアウトしている場合、通常は別のプレイヤーがすでにドアを開けたことを意味します。",
      OPERATION_SELF_TIMER_FEATURES_TITLE: "セルフタイマー機能",
      OPERATION_SELF_TIMER_FEATURES_DESC:
        "+/-ボタンでカウントダウン時間を調整し、開始をクリックしてカウントダウンを開始し、リセットを使用してデフォルトの時間に戻します。タイマーの色は進行状況を反映します：白（未開始）、赤（カウントダウン中）、黄（3分未満）、緑（完了）。",
      OPERATION_TIMER_UNIVERSAL_NOTE_1:
        "4.0.1プレビューの広範なテストから、タイマーループはすべてのサーバー、シャード、地域で普遍的です。",
      OPERATION_TIMER_UNIVERSAL_NOTE_2:
        "つまり、どこでプレイしていてもタイマーを信頼できます - ステータスを確認するために格納庫を実際に訪れる必要はもうありません。",
      OPERATION_TIMER_UNIVERSAL_NOTE_3:
        "グリーンフェーズ中に格納庫がブラックスクリーンを表示する場合、通常は別のプレイヤーがすでにドアを開けたことを意味し、タイマーサイクル自体には影響しません。",
      OPERATION_TIMER_UNIVERSAL_NOTE_4:
        "Compboardが挿入されていない場合でも、すべてのライトが黒く表示される既知のグラフィックバグがあります。この場合、次のタイマーイベントがトリガーされると（ライト変更）、ライトは再び期待される色を正しく表示します。",
      OPERATION_SELF_TIMER_PERSISTENCE_NOTE_1:
        "タイマーはブラウザにローカルに永続化され、ページを離れたり更新したりしても残ります。",
      OPERATION_SELF_TIMER_PERSISTENCE_NOTE_2:
        "注：これらのタイマーはデバイスとブラウザ固有であり、セッションやユーザー間で同期されません。",
      MODULE_TYPE_TACTICAL: "戦術文書",
      MODULE_TYPE_TRAINING: "トレーニング資料",
      MODULE_TYPE_TECHNICAL_CHARTS: "技術チャート",
      MODULE_TYPE_TECHNICAL_DOC: "技術文書",
      SHIPS_MODULE_SUBTITLE: "PYAM Corporation艦船技術チャート",
      SHIP_F7A_HORNET_TITLE: "Anvil F7A Hornet Mk II Executive",
      SHIP_F7A_HORNET_DESC:
        "Anvil F7A Hornet Mk IIは、古いF7A Hornetモデルから改良された最先端の空母ベース戦闘機で、HornetのUEE軍用バージョンです。元々軍隊のみが利用可能で、現在は地球連合帝国海軍特殊部隊とエリート飛行隊が使用しており、民間防衛軍オーバードライブイニシアチブを通じて民間人が利用できるようになりました。",
      SHIP_F8C_LIGHTNING_TITLE: "Anvil F8C Lightning Executive",
      SHIP_F8C_LIGHTNING_DESC:
        "Anvil F8C Lightningは、地球連合帝国海軍が使用するF8A Lightning宇宙制空戦闘機の民間バージョンです。元のF8Aの軍事仕様を忠実に模倣しており、Vanduul侵略者に対する防衛ラインで使用されています。AnvilがUEE海軍でのF8Aのデビューを記念して、極めて限られた数量が民間市場に提供されました。",
      SHIP_CUTLASS_BLACK_TITLE: "Drake Cutlass Black Executive",
      SHIP_CUTLASS_BLACK_DESC:
        "Drake AS-1 Cutlass Black（別名：DCB1）は、地域内システム民兵部隊向けの低コストで保守が容易なソリューションです。平均より大きい貨物室、レーダー迎撃官（RIO）後部座席、専用トラクタービームマウントは、会社の文献によると、捜索救助活動を促進するためのものだとされています。",
      SHIP_SYULEN_TITLE: "Gatac Syulen Executive",
      SHIP_SYULEN_DESC:
        "SyulenはGatac Manufactureが製造する軽量貨物船です。尊敬されるHouse Ng.at'akによって設計され、人間とXi'anパイロットの両方のニーズに対応しています。洗練された機敏な構造を誇るSyulenは、広大な宇宙全体で重要な貨物を輸送するのに最適です。さらに、キャリアの旅を始める輸送専門家志望者にとって優れた選択肢となります。",
      SHIP_CORSAIR_TITLE: "Drake Corsair Executive",
      SHIP_CORSAIR_DESC:
        "Drake Corsairは、防御を犠牲にして汎用性と火力に重点を置いたマルチクルー探査船です。非対称の変換可能な翼と大きな貨物室を備えています。Corsairの機能的な居住区には最大4人の乗組員を収容でき、完全なスキャニングスイートと一対の量子燃料タンクが遠く危険な星を探索する手段と方法を提供します。",
    },
    kr: {
      TITLE:
        "PYAM 이그제큐티브 격납고 상태 - Star Citizen Pyro 시스템 실시간 모니터",
      DESCRIPTION:
        "PYAM 이그제큐티브 격납고 액세스 터미널 - Star Citizen Pyro 시스템 이그제큐티브 격납고 시설의 실시간 모니터링 및 액세스 제어 시스템. 격납고 문 상태, 일정 및 액세스 창을 추적합니다. CHECKMATE, ORBITUARY, RUIN STATION 등의 키카드 위치와 격납고 개방 시간을 확인하세요.",
      KEYWORDS:
        "PYAM, 이그제큐티브 격납고, Star Citizen, SC, Pyro 시스템, 격납고 상태, 액세스 제어, 실시간 모니터링, 터미널 시스템, 키카드, 격납고 문, 격납고 타이머, CHECKMATE, ORBITUARY, RUIN STATION",
      STATUS_ONLINE: "개방",
      STATUS_OFFLINE: "폐쇄",
      MAIN_TITLE: "이그제큐티브 격납고 액세스 타이머",
      STATUS_SUBTITLE: "격납고 상태",
      COUNTDOWN_LABEL: "다음 액세스 창까지",
      COUNTDOWN_LABEL_CLOSING: "폐쇄까지 남은 시간",
      SYSTEM_STATUS: "시스템 상태",
      LEGACY_MODE: "자율 모드",
      FACILITY_LOG: "시설 로그",
      SCHEDULE: "일정",
      ACCESS_GRANTED: "액세스 허가",
      ACCESS_DENIED: "액세스 거부",
      SYSTEM_DIAGNOSTICS: "지원",
      HANGAR_DOOR_SEQUENCE: "격납고 문 시퀀스",
      AWAITING_SYNC: "시스템 동기화 대기 중...",
      DOOR_OPENING: "격납고 문 시퀀스 시작됨",
      DOOR_OPEN: "이그제큐티브 격납고 액세스 허가",
      DOOR_CLOSING: "격납고 문 시퀀스 종료 중",
      DOOR_CLOSED: "이그제큐티브 격납고 액세스 거부",
      LEGACY_NOTICE: "⚠ PYAM CORP 레거시 시스템 ⚠",
      TERMINAL_ID: "터미널 ID: EXEC-7749-ALPHA",
      LOCATION: "위치: 관리 격납고 베이",
      COMPANY_NAME: "PYAM CORPORATION",
      BUILD_LABEL: "빌드",
      SYSTEM_LABEL: "시스템",
      SYSTEM_BUILD: "빌드: 4.3.1-LIVE &#124; 시스템: 10321721",
      UPTIME_LABEL: "가동 시간:",
      FACILITY_ABANDONED: "⚠ 시설 폐기 - 자동 시스템만 작동 ⚠",
      COPYRIGHT: "© 2954 PYAM.LTD [폐업]",
      DEFUNCT_SUFFIX: "[폐업]",
      TELEGRAM_CHANNEL: "텔레그램 채널",
      STATUS_LIGHTS: {
        PWR: "전원",
        SYS: "시스템",
        NET: "네트워크",
        SEC: "보안",
        ACC: "액세스",
      },
      DEVELOPER_SUPPORT: {
        TITLE:
          "격납고 상태 프로젝트를 유지하려면 시간과 리소스가 필요합니다. 서버 운영부터 기능 개발까지 모든 것이 자원봉사자 기여에 의존합니다.",
        SUPPORT_TEXT:
          "이 도구가 유용하다고 생각되시면 Ko-fi에서 지원을 고려해 주세요. 여러분의 기여가 서버 운영을 유지하는 데 도움이 됩니다.",
        KOFI_LINK: "https://ko-fi.com/pyamltd",
      },
      TABLE_HEADERS: { CYCLE: "주기", STATUS: "상태", TIME: "현지 시간" },
      BACK_TO_TERMINAL: "터미널로 돌아가기",
      ARTICLE_TYPE: "문서 유형",
      LAST_UPDATED: "최종 업데이트",
      CLASSIFICATION: "기밀 등급",
      CLASSIFICATION_PUBLIC: "공개",
      CLASSIFICATION_CONFIDENTIAL: "기밀",
      CLASSIFICATION_RESTRICTED: "제한",
      MAP_MODULE_TITLE: "지도",
      TUTORIAL_MODULE_TITLE: "튜토리얼",
      SHIPS_MODULE_TITLE: "함선 차트",
      OPERATION_MODULE_TITLE: "운영",
      MAP_MODULE_DESCRIPTION: "PYAM 회사 키 카드 보관 우주 정거장 분포도.",
      TUTORIAL_MODULE_SUBTITLE: "PYAM Corporation 터미널 시스템 운영 매뉴얼",
      TUTORIAL_MODULE_DESCRIPTION:
        "PYAM 터미널 시스템을 위한 완전한 운영 매뉴얼로, 사용 가이드, 안전 지침 및 문제 해결 절차를 포함합니다.",
      TUTORIAL_MODULE_TIP:
        '게임 튜토리얼: <a href="https://starcitizen.tools/Guide:Executive_Hangars" target="_blank">https://starcitizen.tools/Guide:Executive_Hangars</a>',
      SHIPS_MODULE_DESCRIPTION:
        "PYAM Corporation이 설계하고 제조한 다양한 우주선의 기술 차트로, 사양 및 응용 시나리오를 보여줍니다.",
      OPERATION_MODULE_DESCRIPTION:
        "PYAM 터미널 시스템의 상세한 기술 원리 및 작동 메커니즘으로, 시스템 아키텍처, 제어 프로세스 및 보안 메커니즘을 포함합니다.",
      MODULE_NAVIGATION_TITLE: "정보 아카이브",
      MODULE_NAVIGATION_SUBTITLE: "PYAM Corporation 데이터베이스 액세스 포털",
      ACCESS_MODULES: "정보 아카이브 액세스",
      MAP_IMAGE_1_TITLE: "PYAM-EXHANG-0-1",
      MAP_IMAGE_1_DESC:
        "이 세 개의 소행성 기지 클러스터는 태양 근처에서 찾을 수 있습니다. 한 번에 해당 지역의 한 기지만 활성화됩니다. 모든 기지는 동일한 레이아웃을 가지고 있습니다. 기지 입구는 PYAM-SUPVISR 스테이션 및 RAB와 동일합니다. 이그제큐티브 격납고로 가는 격납고 문은 소행성 반대편 깊숙한 곳에 숨겨져 있으며 입구와 같은 평면에 있습니다(입구를 기준으로 피치와 엘리베이터를 수평으로 유지).",
      MAP_IMAGE_2_TITLE: "PYAM-SUPVISR-3-4/5",
      MAP_IMAGE_2_DESC:
        "Bloom의 L5 라그랑주 포인트에 위치한 Pyro 시스템의 소행성 기지로, 이전에 Pyrotechnic Amalgamated가 소유하고 운영했습니다. 회사 파산 후 시설이 버려졌으며 이후 무법자들이 거주하고 있습니다.",
      MAP_IMAGE_3_TITLE: "RUIN-STATION",
      MAP_IMAGE_3_DESC:
        "원래 MacEwan Station으로, Pyro 시스템의 Terminus를 공전하는 무법자 스테이션입니다. 2506년 Pyrotechnic Amalgamated에 의해 시스템의 본부로 설립되었으며, Pyro(항성)의 플레어로부터 상대적으로 안전하다는 이유로 이 장소가 선택되었습니다. 이로 인해 Monox와 Bloom에서의 건설이 위험했습니다.",
      MAP_IMAGE_4_TITLE: "ORBITUARY",
      MAP_IMAGE_4_DESC:
        "Bloom의 높은 궤도에 위치한 Orbituary는 원래 Pyrotechnic Amalgamated가 근로자에게 연료 및 기타 자원을 공급하기 위해 설립했습니다. 오늘날 Rough & Ready는 이 스테이션을 사용하여 시스템을 여행하는 무법자들에게 연료, 보급품 및 약간의 오락을 제공하는 장소를 제공합니다.",
      MAP_IMAGE_5_TITLE: "CHECKMATE",
      MAP_IMAGE_5_DESC:
        "Checkmate Station은 무법자 그룹인 Rough & Ready의 본부인 우주 정거장입니다. Monox의 L4 라그랑주 포인트에 위치하고 있습니다. 레이스 트랙 Fool's Run이 스테이션 외부를 구불구불 지나갑니다.",
      MAP_IMAGE_6_TITLE: "MAP 6",
      MAP_IMAGE_6_DESC: "",
      OPERATION_HANGAR_TIMER_TITLE: "이그제큐티브 격납고 타이머 운영",
      OPERATION_HANGAR_TIMER_DESC:
        "이그제큐티브 격납고 타이머는 세 가지 뚜렷한 단계로 나뉘는 엄격하고 반복되는 주기를 따르며, 각 단계에는 특정 타이밍과 운영 요구 사항이 있습니다.",
      OPERATION_SELF_TIMERS_TITLE: "셀프 타이머 운영",
      OPERATION_SELF_TIMERS_DESC:
        "각 분쟁 지역에는 터미널이나 키카드와 같은 개별 목표를 수동으로 추적하기 위한 전용 셀프 타이머가 포함되어 있으며, 이그제큐티브 격납고 주기와는 독립적으로 작동합니다.",
      OPERATION_RED_PHASE_TITLE: "레드 페이즈 (2시간)",
      OPERATION_RED_PHASE_DESC:
        "모든 표시등은 빨간색으로 시작하여 24분마다 하나씩 녹색으로 바뀝니다. 중요: 이 단계에서 Compboard를 삽입하지 마세요 - 격납고가 열리지 않습니다.",
      OPERATION_GREEN_PHASE_TITLE: "그린 페이즈 (1시간)",
      OPERATION_GREEN_PHASE_DESC:
        "모든 표시등이 녹색이 되면 12분마다 하나씩 꺼지기 시작합니다. 중요: 이 단계에서 Compboard를 삽입하고 격납고를 열 수 있습니다.",
      OPERATION_BLACK_PHASE_TITLE: "블랙 페이즈 (5분)",
      OPERATION_BLACK_PHASE_DESC:
        "모든 표시등이 꺼진 후 전체 주기가 레드로 재설정되기 전에 5분의 블랙아웃 기간이 있습니다.",
      OPERATION_IMPORTANT_DETAILS_TITLE: "중요한 세부 사항",
      OPERATION_IMPORTANT_DETAILS_DESC:
        "새 패치나 서버 유지 보수 후 타이머가 하루나 이틀 동안 부정확할 수 있습니다. 그린 페이즈를 표시하는데 격납고가 블랙아웃되어 있는 경우, 일반적으로 다른 플레이어가 이미 문을 열었음을 의미합니다.",
      OPERATION_SELF_TIMER_FEATURES_TITLE: "셀프 타이머 기능",
      OPERATION_SELF_TIMER_FEATURES_DESC:
        "+/- 버튼을 사용하여 카운트다운 시간을 조정하고, 시작을 클릭하여 카운트다운을 시작하며, 리셋을 사용하여 기본 시간으로 복원합니다. 타이머 색상은 진행 상황을 반영합니다: 흰색(시작 안 됨), 빨간색(카운트다운 중), 노란색(3분 미만), 녹색(완료).",
      OPERATION_TIMER_UNIVERSAL_NOTE_1:
        "4.0.1 프리뷰의 광범위한 테스트 결과, 타이머 루프는 모든 서버, 샤드 및 지역에서 보편적입니다.",
      OPERATION_TIMER_UNIVERSAL_NOTE_2:
        "즉, 어디서 플레이하든 타이머를 신뢰할 수 있습니다 - 더 이상 직접 격납고를 방문하여 상태를 확인할 필요가 없습니다.",
      OPERATION_TIMER_UNIVERSAL_NOTE_3:
        "그린 페이즈 동안 격납고가 검은 화면을 표시하는 경우, 일반적으로 다른 플레이어가 이미 문을 열었음을 의미하며, 이는 타이머 주기 자체에는 영향을 미치지 않습니다.",
      OPERATION_TIMER_UNIVERSAL_NOTE_4:
        "Compboard가 삽입되지 않은 경우에도 모든 표시등이 검게 표시될 수 있는 알려진 그래픽 버그가 있습니다. 이 경우 다음 타이머 이벤트가 트리거되면(표시등 변경) 표시등이 예상 색상을 다시 올바르게 표시합니다.",
      OPERATION_SELF_TIMER_PERSISTENCE_NOTE_1:
        "타이머는 브라우저에 로컬로 유지되며 페이지를 떠나거나 새로 고침해도 유지됩니다.",
      OPERATION_SELF_TIMER_PERSISTENCE_NOTE_2:
        "참고: 이러한 타이머는 장치 및 브라우저별이며 세션이나 사용자 간에 동기화되지 않습니다.",
      MODULE_TYPE_TACTICAL: "전술 문서",
      MODULE_TYPE_TRAINING: "교육 자료",
      MODULE_TYPE_TECHNICAL_CHARTS: "기술 차트",
      MODULE_TYPE_TECHNICAL_DOC: "기술 문서",
      SHIPS_MODULE_SUBTITLE: "PYAM Corporation 함선 기술 차트",
      SHIP_F7A_HORNET_TITLE: "Anvil F7A Hornet Mk II Executive",
      SHIP_F7A_HORNET_DESC:
        "Anvil F7A Hornet Mk II는 구형 F7A Hornet 모델에서 개선된 최첨단 함재 전투기로, Hornet의 UEE 군용 버전입니다. 원래 군대에서만 사용할 수 있었으며 현재 지구 연합 제국 해군 특수 부대와 엘리트 비행대에서 사용되고 있으며, 민간 방위군 오버드라이브 이니셔티브를 통해 민간인이 이용할 수 있게 되었습니다.",
      SHIP_F8C_LIGHTNING_TITLE: "Anvil F8C Lightning Executive",
      SHIP_F8C_LIGHTNING_DESC:
        "Anvil F8C Lightning은 지구 연합 제국 해군이 사용하는 F8A Lightning 우주 제공권 전투기의 민간 버전입니다. 원래 F8A의 군사 사양을 밀접하게 모방하며 Vanduul 침략자에 대한 방어선에서 사용되었습니다. Anvil은 UEE 해군에서 F8A의 데뷔를 기념하여 극히 제한된 수량을 민간 시장에 출시했습니다.",
      SHIP_CUTLASS_BLACK_TITLE: "Drake Cutlass Black Executive",
      SHIP_CUTLASS_BLACK_DESC:
        "Drake AS-1 Cutlass Black(별칭: DCB1)은 지역 내 시스템 민병대를 위한 저비용, 유지 보수가 쉬운 솔루션입니다. 평균보다 큰 화물칸, 레이더 요격관(RIO) 후방 좌석 및 전용 트랙터 마운트는 회사 문헌에 따르면 수색 및 구조 작업을 용이하게 하기 위한 것입니다.",
      SHIP_SYULEN_TITLE: "Gatac Syulen Executive",
      SHIP_SYULEN_DESC:
        "Syulen은 Gatac Manufacture에서 생산하는 경화물선입니다. 존경받는 House Ng.at'ak이 설계하여 인간과 Xi'an 조종사 모두의 요구를 충족하도록 했습니다. 세련되고 민첩한 구조를 자랑하는 Syulen은 광활한 우주를 가로질러 중요한 화물을 운송하는 데 완벽하게 적합합니다. 또한 운송 전문가로서 경력을 시작하는 사람들에게 훌륭한 선택입니다.",
      SHIP_CORSAIR_TITLE: "Drake Corsair Executive",
      SHIP_CORSAIR_DESC:
        "Drake Corsair는 방어를 포기하고 다용도성과 화력에 중점을 둔 다중 승무원 탐사선입니다. 비대칭 변환 가능한 날개와 대형 화물칸이 있습니다. Corsair의 기능적인 숙소에는 최대 4명의 승무원을 수용할 수 있으며, 완전한 스캐닝 스위트와 한 쌍의 양자 연료 탱크가 먼 위험한 별을 탐사할 수 있는 수단과 방법을 제공합니다.",
    },
    de: {
      TITLE:
        "PYAM Executive Hangar Status - Star Citizen Pyro System Echtzeit-Monitor",
      DESCRIPTION:
        "PYAM Executive Hangar Zugangs-Terminal - Echtzeit-Überwachungs- und Zugangskontrollsystem für Star Citizen Pyro System Executive Hangar Einrichtungen. Verfolgen Sie Hangar-Türstatus, Zeitpläne und Zugangszeiten. Erhalten Sie Keycard-Standorte und Hangar-Öffnungszeiten für CHECKMATE, ORBITUARY, RUIN STATION und mehr.",
      KEYWORDS:
        "PYAM, Executive Hangar, Star Citizen, SC, Pyro System, Hangar Status, Zugangskontrolle, Echtzeit-Überwachung, Terminalsystem, Keycard, Hangar-Tür, Hangar-Timer, CHECKMATE, ORBITUARY, RUIN STATION",
      STATUS_ONLINE: "Offen",
      STATUS_OFFLINE: "Geschlossen",
      MAIN_TITLE: "Executive Hangar Zugangs-Timer",
      STATUS_SUBTITLE: "Hangar-Status",
      COUNTDOWN_LABEL: "Nächstes Zugangsfenster",
      COUNTDOWN_LABEL_CLOSING: "Zeit bis zur Schließung",
      SYSTEM_STATUS: "Systemstatus",
      LEGACY_MODE: "Autonomer Modus",
      FACILITY_LOG: "Anlagenprotokoll",
      SCHEDULE: "Zeitplan",
      ACCESS_GRANTED: "ZUGANG GEWÄHRT",
      ACCESS_DENIED: "ZUGANG VERWEIGERT",
      SYSTEM_DIAGNOSTICS: "Unterstützung",
      HANGAR_DOOR_SEQUENCE: "Hangar-Türsequenz",
      AWAITING_SYNC: "Warte auf Systemsynchronisierung...",
      DOOR_OPENING: "Hangar-Türsequenz initiiert",
      DOOR_OPEN: "Executive Hangar Zugang gewährt",
      DOOR_CLOSING: "Hangar-Türsequenz wird beendet",
      DOOR_CLOSED: "Executive Hangar Zugang verweigert",
      LEGACY_NOTICE: "⚠ PYAM CORP LEGACY-SYSTEME ⚠",
      TERMINAL_ID: "Terminal-ID: EXEC-7749-ALPHA",
      LOCATION: "Standort: Admin Hangar Bucht",
      COMPANY_NAME: "PYAM CORPORATION",
      BUILD_LABEL: "Build",
      SYSTEM_LABEL: "Sys",
      SYSTEM_BUILD: "Build: 4.3.1-LIVE &#124; Sys: 10321721",
      UPTIME_LABEL: "Betriebszeit:",
      FACILITY_ABANDONED: "⚠ Anlage aufgegeben - Nur automatisierte Systeme ⚠",
      COPYRIGHT: "© 2954 PYAM.LTD [AUFGELÖST]",
      DEFUNCT_SUFFIX: "[AUFGELÖST]",
      TELEGRAM_CHANNEL: "Telegram-Kanal",
      STATUS_LIGHTS: {
        PWR: "Strom",
        SYS: "System",
        NET: "Netzwerk",
        SEC: "Sicherheit",
        ACC: "Zugang",
      },
      DEVELOPER_SUPPORT: {
        TITLE:
          "Die Wartung des Hangar-Status-Projekts erfordert Zeit und Ressourcen. Vom Serverbetrieb bis zur Feature-Entwicklung hängt alles von freiwilligen Beiträgen ab.",
        SUPPORT_TEXT:
          "Wenn Sie dieses Tool nützlich finden, erwägen Sie bitte, uns auf Ko-fi zu unterstützen. Ihre Beiträge helfen dabei, unsere Server am Laufen zu halten.",
        KOFI_LINK: "https://ko-fi.com/pyamltd",
      },
      TABLE_HEADERS: { CYCLE: "Zyklus", STATUS: "Status", TIME: "Ortszeit" },
      BACK_TO_TERMINAL: "Zurück zum Terminal",
      ARTICLE_TYPE: "Dokumenttyp",
      LAST_UPDATED: "Zuletzt aktualisiert",
      CLASSIFICATION: "Klassifizierung",
      CLASSIFICATION_PUBLIC: "Öffentlich",
      CLASSIFICATION_CONFIDENTIAL: "Vertraulich",
      CLASSIFICATION_RESTRICTED: "Eingeschränkt",
      MAP_MODULE_TITLE: "Karten",
      TUTORIAL_MODULE_TITLE: "Anleitungen",
      SHIPS_MODULE_TITLE: "Schiffsdiagramme",
      OPERATION_MODULE_TITLE: "Operationen",
      MAP_MODULE_DESCRIPTION:
        "PYAM Firmen-Keycard-Lagerraumstations-Verteilungskarte.",
      TUTORIAL_MODULE_SUBTITLE:
        "PYAM Corporation Terminalsystem-Bedienungsanleitung",
      TUTORIAL_MODULE_DESCRIPTION:
        "Vollständige Bedienungsanleitung für PYAM-Terminalsysteme, einschließlich Nutzungshandbücher, Sicherheitsanweisungen und Fehlerbehebungsverfahren.",
      TUTORIAL_MODULE_TIP:
        'Spiel-Tutorial: <a href="https://starcitizen.tools/Guide:Executive_Hangars" target="_blank">https://starcitizen.tools/Guide:Executive_Hangars</a>',
      SHIPS_MODULE_DESCRIPTION:
        "Technische Diagramme verschiedener von PYAM Corporation entworfener und hergestellter Raumschiffe, die Spezifikationen und Anwendungsszenarien zeigen.",
      OPERATION_MODULE_DESCRIPTION:
        "Detaillierte technische Prinzipien und Arbeitsmechanismen der PYAM-Terminalsysteme, einschließlich Systemarchitektur, Steuerungsprozesse und Sicherheitsmechanismen.",
      MODULE_NAVIGATION_TITLE: "Informationsarchiv",
      MODULE_NAVIGATION_SUBTITLE: "PYAM Corporation Datenbank-Zugangsportal",
      ACCESS_MODULES: "Informationsarchiv zugreifen",
      MAP_IMAGE_1_TITLE: "PYAM-EXHANG-0-1",
      MAP_IMAGE_1_DESC:
        "Dieses Cluster aus drei Asteroidenbasen kann in der Nähe der Sonne gefunden werden. Jeweils ist nur eine Basis im Gebiet aktiv. Jede Basis hat das gleiche Layout. Die Eingänge zu den Basen sind identisch mit den PYAM-SUPVISR-Stationen und RABs. Die Hangartür zum Executive Hangar ist tief auf der gegenüberliegenden Seite des Asteroiden versteckt, auf derselben Ebene wie der Eingang (halten Sie Pitch und Elevator in Bezug auf den Eingang auf gleicher Höhe).",
      MAP_IMAGE_2_TITLE: "PYAM-SUPVISR-3-4/5",
      MAP_IMAGE_2_DESC:
        "ist eine Asteroidenbasis im Pyro-System, die früher von Pyrotechnic Amalgamated besessen und betrieben wurde und sich am L5-Lagrange-Punkt von Bloom befindet. Die Anlage wurde nach dem Bankrott des Unternehmens aufgegeben, und seitdem haben sich Gesetzlose dort niedergelassen.",
      MAP_IMAGE_3_TITLE: "RUIN-STATION",
      MAP_IMAGE_3_DESC:
        "ursprünglich MacEwan Station, ist eine Gesetzlosenstation, die Terminus im Pyro-System umkreist. Sie wurde 2506 von Pyrotechnic Amalgamated als deren Hauptquartier im System gegründet. Der Standort wurde aufgrund seiner relativen Sicherheit vor Flares von Pyro (Stern) gewählt, was den Bau auf Monox und Bloom riskant machte.",
      MAP_IMAGE_4_TITLE: "ORBITUARY",
      MAP_IMAGE_4_DESC:
        "Im hohen Orbit über Bloom gelegen, wurde Orbituary ursprünglich von Pyrotechnic Amalgamated gegründet, um ihre Arbeiter mit Treibstoff und anderen Ressourcen zu versorgen. Heute nutzt Rough & Ready die Station, um Gesetzlosen, die durch das System reisen, einen Ort zum Tanken, für Vorräte und ein bisschen Unterhaltung anzubieten.",
      MAP_IMAGE_5_TITLE: "CHECKMATE",
      MAP_IMAGE_5_DESC:
        "Checkmate Station ist eine Raumstation und das Hauptquartier von Rough & Ready, einer Gruppe von Gesetzlosen. Sie befindet sich am L4-Lagrange-Punkt von Monox. Die Rennstrecke Fool's Run windet sich durch das Äußere der Station.",
      MAP_IMAGE_6_TITLE: "MAP 6",
      MAP_IMAGE_6_DESC: "",
      OPERATION_HANGAR_TIMER_TITLE: "Executive Hangar Timer-Betrieb",
      OPERATION_HANGAR_TIMER_DESC:
        "Der Executive Hangar Timer folgt einem strengen, sich wiederholenden Zyklus, der in drei verschiedene Phasen unterteilt ist, von denen jede spezifische Zeitvorgaben und betriebliche Anforderungen hat.",
      OPERATION_SELF_TIMERS_TITLE: "Selbst-Timer-Betrieb",
      OPERATION_SELF_TIMERS_DESC:
        "Jede umkämpfte Zone enthält dedizierte Selbst-Timer zur manuellen Verfolgung einzelner Ziele wie Terminals oder Keycards, die unabhängig vom Executive Hangar Zyklus arbeiten.",
      OPERATION_RED_PHASE_TITLE: "Rote Phase (2 Stunden)",
      OPERATION_RED_PHASE_DESC:
        "Alle Lichter beginnen rot und werden nacheinander grün, alle 24 Minuten. Wichtig: Stecken Sie während dieser Phase keine Compboards ein - der Hangar öffnet sich nicht.",
      OPERATION_GREEN_PHASE_TITLE: "Grüne Phase (1 Stunde)",
      OPERATION_GREEN_PHASE_DESC:
        "Sobald alle Lichter grün geworden sind, beginnen sie nacheinander auszugehen, alle 12 Minuten. Wichtig: Sie können während dieser Phase Compboards einstecken und den Hangar öffnen.",
      OPERATION_BLACK_PHASE_TITLE: "Schwarze Phase (5 Minuten)",
      OPERATION_BLACK_PHASE_DESC:
        "Nachdem alle Lichter aus sind, gibt es eine 5-minütige Blackout-Periode, bevor der gesamte Zyklus auf Rot zurücksetzt.",
      OPERATION_IMPORTANT_DETAILS_TITLE: "Wichtige Details",
      OPERATION_IMPORTANT_DETAILS_DESC:
        "Nach einem neuen Patch oder einer Serverwartung kann der Timer ein oder zwei Tage lang ungenau sein. Wenn der Hangar während der grünen Phase ausgegraut ist, bedeutet dies normalerweise, dass ein anderer Spieler die Tür bereits geöffnet hat.",
      OPERATION_SELF_TIMER_FEATURES_TITLE: "Selbst-Timer-Funktionen",
      OPERATION_SELF_TIMER_FEATURES_DESC:
        "Verwenden Sie +/- Tasten zur Anpassung der Countdown-Dauer, klicken Sie auf Start, um den Countdown zu beginnen, verwenden Sie Reset, um die Standarddauer wiederherzustellen. Timer-Farben spiegeln den Fortschritt wider: Weiß (nicht gestartet), Rot (Countdown läuft), Gelb (unter 3 Minuten), Grün (abgeschlossen).",
      OPERATION_TIMER_UNIVERSAL_NOTE_1:
        "Aus umfangreichen Tests der 4.0.1-Vorschau ist die Timer-Schleife universell über alle Server, Shards und Regionen hinweg.",
      OPERATION_TIMER_UNIVERSAL_NOTE_2:
        "Das bedeutet, dass Sie dem Timer vertrauen können, unabhängig davon, wo Sie spielen - Sie müssen den Hangar nicht mehr persönlich besuchen, um den Status zu überprüfen.",
      OPERATION_TIMER_UNIVERSAL_NOTE_3:
        "Wenn der Hangar während der grünen Phase einen schwarzen Bildschirm zeigt, bedeutet dies normalerweise, dass ein anderer Spieler die Tür bereits geöffnet hat, was den Timer-Zyklus selbst nicht beeinflusst.",
      OPERATION_TIMER_UNIVERSAL_NOTE_4:
        "Es gibt einen bekannten Grafikfehler, bei dem alle Lichter schwarz erscheinen können, auch wenn kein Compboard eingesteckt ist. In diesem Fall werden die Lichter, sobald das nächste Timer-Ereignis ausgelöst wird (Lichtwechsel), ihre erwarteten Farben wieder korrekt anzeigen.",
      OPERATION_SELF_TIMER_PERSISTENCE_NOTE_1:
        "Timer werden lokal im Browser gespeichert und bleiben auch dann erhalten, wenn Sie die Seite verlassen oder aktualisieren.",
      OPERATION_SELF_TIMER_PERSISTENCE_NOTE_2:
        "Hinweis: Diese Timer sind geräte- und browserspezifisch und werden nicht über Sitzungen oder Benutzer hinweg synchronisiert.",
      MODULE_TYPE_TACTICAL: "Taktische Dokumentation",
      MODULE_TYPE_TRAINING: "Schulungsmaterialien",
      MODULE_TYPE_TECHNICAL_CHARTS: "Technische Diagramme",
      MODULE_TYPE_TECHNICAL_DOC: "Technische Dokumentation",
      SHIPS_MODULE_SUBTITLE: "PYAM Corporation Schiffstechnische Diagramme",
      SHIP_F7A_HORNET_TITLE: "Anvil F7A Hornet Mk II Executive",
      SHIP_F7A_HORNET_DESC:
        "Die Anvil F7A Hornet Mk II ist das hochmoderne trägergestützte Kampfflugzeug, das vom älteren F7A Hornet-Modell überarbeitet wurde, der UEE-Militärversion der Hornet. Ursprünglich nur für das Militär verfügbar, wird sie derzeit von Spezialeinheiten und Elite-Staffeln der United Empire of Earth Navy eingesetzt und ist nun über die Civilian Defense Forces Overdrive Initiative für Zivilisten erhältlich.",
      SHIP_F8C_LIGHTNING_TITLE: "Anvil F8C Lightning Executive",
      SHIP_F8C_LIGHTNING_DESC:
        "Die Anvil F8C Lightning ist die zivile Variante des F8A Lightning Raumüberlegenheitsjägers, der von der United Empire of Earth Navy eingesetzt wird. Sie ahmt die militärischen Spezifikationen der ursprünglichen F8A genau nach und wurde in Verteidigungslinien gegen Vanduul-Invasoren eingesetzt. Sie wurde von Anvil in extrem begrenzter Anzahl auf dem Zivilmarkt zur Verfügung gestellt, um das Debüt der F8A in der UEE Navy zu feiern.",
      SHIP_CUTLASS_BLACK_TITLE: "Drake Cutlass Black Executive",
      SHIP_CUTLASS_BLACK_DESC:
        "Die Drake AS-1 Cutlass Black (auch: DCB1) ist eine kostengünstige, wartungsfreundliche Lösung für lokale Miliz-Einheiten im System. Der überdurchschnittlich große Frachtraum, der Radarabfangoffizier (RIO) auf dem Rücksitz und die dedizierte Traktorhalterung dienen laut Firmenliteratur der Erleichterung von Such- und Rettungsoperationen.",
      SHIP_SYULEN_TITLE: "Gatac Syulen Executive",
      SHIP_SYULEN_DESC:
        "Die Syulen ist ein leichtes Frachtschiff, das von Gatac Manufacture hergestellt wird. Sie wurde vom angesehenen House Ng.at'ak entworfen, um die Bedürfnisse sowohl menschlicher als auch Xi'an-Piloten zu erfüllen. Mit einer schlanken und wendigen Struktur ist die Syulen perfekt geeignet für den Transport wichtiger Sendungen durch die weiten Bereiche des 'Verse. Darüber hinaus ist sie eine ausgezeichnete Wahl für aufstrebende Transportprofis, die ihre Karriere beginnen.",
      SHIP_CORSAIR_TITLE: "Drake Corsair Executive",
      SHIP_CORSAIR_DESC:
        "Die Drake Corsair ist ein Mehrsitzer-Erkundungsschiff, das Verteidigung zugunsten eines Fokus auf Vielseitigkeit und Feuerkraft aufgibt. Sie verfügt über asymmetrische umwandelbare Flügel und einen großen Frachtraum. Bis zu vier Besatzungsmitglieder können in den funktionalen Quartieren der Corsair untergebracht werden, und eine vollständige Ausstattung an Scanning-Suiten zusammen mit einem Paar Quantentreibstofftanks bietet die Mittel und Methode zur Erkundung entfernter, gefährlicher Sterne.",
    },
    ru: {
      TITLE:
        "PYAM Статус исполнительного ангара - Star Citizen Pyro мониторинг системы в реальном времени",
      DESCRIPTION:
        "PYAM Терминал доступа к исполнительному ангару - Система мониторинга и контроля доступа в реальном времени для объектов исполнительного ангара системы Pyro в Star Citizen. Отслеживайте статус дверей ангара, расписания и окна доступа. Получите местоположения ключ-карт и время открытия ангара для CHECKMATE, ORBITUARY, RUIN STATION и других.",
      KEYWORDS:
        "PYAM, Исполнительный ангар, Star Citizen, SC, Система Pyro, Статус ангара, Контроль доступа, Мониторинг в реальном времени, Терминальная система, Ключ-карта, Дверь ангара, Таймер ангара, CHECKMATE, ORBITUARY, RUIN STATION",
      STATUS_ONLINE: "Открыто",
      STATUS_OFFLINE: "Закрыто",
      MAIN_TITLE: "Таймер доступа к исполнительному ангару",
      STATUS_SUBTITLE: "Статус ангара",
      COUNTDOWN_LABEL: "До следующего окна доступа",
      COUNTDOWN_LABEL_CLOSING: "Время до закрытия",
      SYSTEM_STATUS: "Статус системы",
      LEGACY_MODE: "Автономный режим",
      FACILITY_LOG: "Журнал объекта",
      SCHEDULE: "Расписание",
      ACCESS_GRANTED: "ДОСТУП РАЗРЕШЕН",
      ACCESS_DENIED: "ДОСТУП ЗАПРЕЩЕН",
      SYSTEM_DIAGNOSTICS: "Поддержка",
      HANGAR_DOOR_SEQUENCE: "Последовательность дверей ангара",
      AWAITING_SYNC: "Ожидание синхронизации системы...",
      DOOR_OPENING: "Последовательность дверей ангара инициирована",
      DOOR_OPEN: "Доступ к исполнительному ангару разрешен",
      DOOR_CLOSING: "Последовательность дверей ангара завершается",
      DOOR_CLOSED: "Доступ к исполнительному ангару запрещен",
      LEGACY_NOTICE: "⚠ УСТАРЕВШИЕ СИСТЕМЫ PYAM CORP ⚠",
      TERMINAL_ID: "ID терминала: EXEC-7749-ALPHA",
      LOCATION: "Местоположение: Административный ангарный отсек",
      COMPANY_NAME: "PYAM CORPORATION",
      BUILD_LABEL: "Сборка",
      SYSTEM_LABEL: "Система",
      SYSTEM_BUILD: "Сборка: 4.3.1-LIVE &#124; Система: 10321721",
      UPTIME_LABEL: "Время работы:",
      FACILITY_ABANDONED:
        "⚠ Объект заброшен - Только автоматизированные системы ⚠",
      COPYRIGHT: "© 2954 PYAM.LTD [ЛИКВИДИРОВАНА]",
      DEFUNCT_SUFFIX: "[ЛИКВИДИРОВАНА]",
      TELEGRAM_CHANNEL: "Telegram канал",
      STATUS_LIGHTS: {
        PWR: "Питание",
        SYS: "Система",
        NET: "Сеть",
        SEC: "Безопасность",
        ACC: "Доступ",
      },
      DEVELOPER_SUPPORT: {
        TITLE:
          "Поддержание проекта статуса ангара требует времени и ресурсов. От эксплуатации серверов до разработки функций - все зависит от добровольных вкладов.",
        SUPPORT_TEXT:
          "Если вы находите этот инструмент полезным, пожалуйста, рассмотрите возможность поддержки нас на Ko-fi. Ваши взносы помогают поддерживать наши серверы в рабочем состоянии.",
        KOFI_LINK: "https://ko-fi.com/pyamltd",
      },
      TABLE_HEADERS: { CYCLE: "Цикл", STATUS: "Статус", TIME: "Местное время" },
      BACK_TO_TERMINAL: "Вернуться к терминалу",
      ARTICLE_TYPE: "Тип документа",
      LAST_UPDATED: "Последнее обновление",
      CLASSIFICATION: "Классификация",
      CLASSIFICATION_PUBLIC: "Публичный",
      CLASSIFICATION_CONFIDENTIAL: "Конфиденциальный",
      CLASSIFICATION_RESTRICTED: "Ограниченный",
      MAP_MODULE_TITLE: "Карты",
      TUTORIAL_MODULE_TITLE: "Руководства",
      SHIPS_MODULE_TITLE: "Диаграммы кораблей",
      OPERATION_MODULE_TITLE: "Операции",
      MAP_MODULE_DESCRIPTION:
        "Карта распределения космических станций хранения ключ-карт компании PYAM.",
      TUTORIAL_MODULE_SUBTITLE:
        "Руководство по эксплуатации терминальной системы PYAM Corporation",
      TUTORIAL_MODULE_DESCRIPTION:
        "Полное руководство по эксплуатации терминальных систем PYAM, включающее руководства по использованию, инструкции по безопасности и процедуры устранения неисправностей.",
      TUTORIAL_MODULE_TIP:
        'Игровое руководство: <a href="https://starcitizen.tools/Guide:Executive_Hangars" target="_blank">https://starcitizen.tools/Guide:Executive_Hangars</a>',
      SHIPS_MODULE_DESCRIPTION:
        "Технические диаграммы различных космических кораблей, разработанных и изготовленных PYAM Corporation, показывающие спецификации и сценарии применения.",
      OPERATION_MODULE_DESCRIPTION:
        "Подробные технические принципы и рабочие механизмы терминальных систем PYAM, включая системную архитектуру, процессы управления и механизмы безопасности.",
      MODULE_NAVIGATION_TITLE: "Информационный архив",
      MODULE_NAVIGATION_SUBTITLE:
        "Портал доступа к базе данных PYAM Corporation",
      ACCESS_MODULES: "Доступ к информационному архиву",
      MAP_IMAGE_1_TITLE: "PYAM-EXHANG-0-1",
      MAP_IMAGE_1_DESC:
        "Этот кластер из трех астероидных баз можно найти недалеко от солнца. Одновременно активна только одна база в районе. Каждая база имеет одинаковую планировку. Вход на базы идентичен станциям PYAM-SUPVISR и RAB. Дверь ангара в исполнительный ангар скрыта глубоко на противоположной стороне астероида, в той же плоскости, что и вход (держите тангаж и элеватор на уровне относительно входа).",
      MAP_IMAGE_2_TITLE: "PYAM-SUPVISR-3-4/5",
      MAP_IMAGE_2_DESC:
        "это астероидная база в системе Pyro, ранее принадлежавшая и управляемая Pyrotechnic Amalgamated, расположенная в точке Лагранжа L5 Блума. Объект был заброшен после банкротства компании, и с тех пор там поселились преступники.",
      MAP_IMAGE_3_TITLE: "RUIN-STATION",
      MAP_IMAGE_3_DESC:
        "первоначально MacEwan Station, это станция преступников, вращающаяся вокруг Terminus в системе Pyro. Основана Pyrotechnic Amalgamated в 2506 году в качестве их штаб-квартиры в системе, место было выбрано из-за его относительной безопасности от вспышек Pyro (звезды), что делало строительство на Monox и Bloom рискованным.",
      MAP_IMAGE_4_TITLE: "ORBITUARY",
      MAP_IMAGE_4_DESC:
        "Расположенный на высокой орбите над Блумом, Orbituary изначально был создан Pyrotechnic Amalgamated для снабжения своих рабочих топливом и другими ресурсами. Сегодня Rough & Ready использует станцию, чтобы предложить преступникам, путешествующим по системе, место для заправки, припасов и немного развлечений.",
      MAP_IMAGE_5_TITLE: "CHECKMATE",
      MAP_IMAGE_5_DESC:
        "Checkmate Station - это космическая станция и штаб-квартира Rough & Ready, группы преступников. Она расположена в точке Лагранжа L4 Monox. Гоночная трасса Fool's Run вьется через внешнюю часть станции.",
      MAP_IMAGE_6_TITLE: "MAP 6",
      MAP_IMAGE_6_DESC: "",
      OPERATION_HANGAR_TIMER_TITLE: "Работа таймера исполнительного ангара",
      OPERATION_HANGAR_TIMER_DESC:
        "Таймер исполнительного ангара следует строгому повторяющемуся циклу, разделенному на три отдельные фазы, каждая со специфическими временными и операционными требованиями.",
      OPERATION_SELF_TIMERS_TITLE: "Работа пользовательских таймеров",
      OPERATION_SELF_TIMERS_DESC:
        "Каждая спорная зона включает выделенные пользовательские таймеры для ручного отслеживания отдельных целей, таких как терминалы или ключ-карты, работающие независимо от цикла исполнительного ангара.",
      OPERATION_RED_PHASE_TITLE: "Красная фаза (2 часа)",
      OPERATION_RED_PHASE_DESC:
        "Все огни начинаются красными и становятся зелеными один за другим, каждые 24 минуты. Важно: Не вставляйте Compboards во время этой фазы — ангар не откроется.",
      OPERATION_GREEN_PHASE_TITLE: "Зеленая фаза (1 час)",
      OPERATION_GREEN_PHASE_DESC:
        "Как только все огни стали зелеными, они начинают гаснуть один за другим, каждые 12 минут. Важно: Вы можете вставлять Compboards и открывать ангар во время этой фазы.",
      OPERATION_BLACK_PHASE_TITLE: "Черная фаза (5 минут)",
      OPERATION_BLACK_PHASE_DESC:
        "После того, как все огни погаснут, перед сбросом всего цикла на красный есть 5-минутный период затемнения.",
      OPERATION_IMPORTANT_DETAILS_TITLE: "Важные детали",
      OPERATION_IMPORTANT_DETAILS_DESC:
        "После нового патча или обслуживания сервера таймер может быть неточным в течение дня или двух. Если ангар затемнен, показывая зеленую фазу, это обычно означает, что другой игрок уже открыл дверь.",
      OPERATION_SELF_TIMER_FEATURES_TITLE: "Функции пользовательского таймера",
      OPERATION_SELF_TIMER_FEATURES_DESC:
        'Используйте кнопки +/- для настройки продолжительности обратного отсчета, нажмите "Старт", чтобы начать обратный отсчет, используйте "Сброс", чтобы восстановить продолжительность по умолчанию. Цвета таймера отражают прогресс: белый (не запущен), красный (обратный отсчет), желтый (менее 3 минут), зеленый (завершен).',
      OPERATION_TIMER_UNIVERSAL_NOTE_1:
        "Из обширного тестирования предварительной версии 4.0.1 цикл таймера универсален для всех серверов, шардов и регионов.",
      OPERATION_TIMER_UNIVERSAL_NOTE_2:
        "Это означает, что вы можете доверять таймеру независимо от того, где вы играете - больше не нужно лично посещать ангар для проверки статуса.",
      OPERATION_TIMER_UNIVERSAL_NOTE_3:
        "Если ангар показывает черный экран во время зеленой фазы, это обычно означает, что другой игрок уже открыл дверь, что не влияет на сам цикл таймера.",
      OPERATION_TIMER_UNIVERSAL_NOTE_4:
        "Существует известная графическая ошибка, при которой все огни могут отображаться черными, даже если Compboard не вставлен. В этом случае, как только сработает следующее событие таймера (изменение света), огни снова правильно отобразят ожидаемые цвета.",
      OPERATION_SELF_TIMER_PERSISTENCE_NOTE_1:
        "Таймеры сохраняются локально в браузере и останутся, даже если вы покинете или обновите страницу.",
      OPERATION_SELF_TIMER_PERSISTENCE_NOTE_2:
        "Примечание: Эти таймеры специфичны для устройства и браузера и не синхронизируются между сеансами или пользователями.",
      MODULE_TYPE_TACTICAL: "Тактическая документация",
      MODULE_TYPE_TRAINING: "Учебные материалы",
      MODULE_TYPE_TECHNICAL_CHARTS: "Технические диаграммы",
      MODULE_TYPE_TECHNICAL_DOC: "Техническая документация",
      SHIPS_MODULE_SUBTITLE: "Технические диаграммы кораблей PYAM Corporation",
      SHIP_F7A_HORNET_TITLE: "Anvil F7A Hornet Mk II Executive",
      SHIP_F7A_HORNET_DESC:
        "Anvil F7A Hornet Mk II - это передовой палубный истребитель, переработанный из более старой модели F7A Hornet, военной версии UEE Hornet. Первоначально доступный только военным, в настоящее время используется спецподразделениями и элитными эскадрильями Военно-морского флота Объединенной Земной Империи, теперь доступен гражданским лицам через инициативу Overdrive Сил гражданской обороны.",
      SHIP_F8C_LIGHTNING_TITLE: "Anvil F8C Lightning Executive",
      SHIP_F8C_LIGHTNING_DESC:
        "Anvil F8C Lightning - это гражданский вариант истребителя космического превосходства F8A Lightning, который используется Военно-морским флотом Объединенной Земной Империи. Он точно имитирует военные характеристики оригинального F8A и использовался в линиях обороны против захватчиков Вандуулов. Он был доступен в крайне ограниченных количествах на гражданском рынке компанией Anvil в честь дебюта F8A в ВМФ UEE.",
      SHIP_CUTLASS_BLACK_TITLE: "Drake Cutlass Black Executive",
      SHIP_CUTLASS_BLACK_DESC:
        "Drake AS-1 Cutlass Black (также: DCB1) - это недорогое, простое в обслуживании решение для местных внутрисистемных подразделений милиции. Грузовой отсек больше среднего, задний офицер радиоперехвата (RIO) и специальное крепление для трактора, как настаивает литература компании, предназначены для облегчения поисково-спасательных операций.",
      SHIP_SYULEN_TITLE: "Gatac Syulen Executive",
      SHIP_SYULEN_DESC:
        "Syulen - это легкий грузовой корабль, производимый Gatac Manufacture. Он был разработан уважаемым Домом Ng.at'ak для удовлетворения потребностей как человеческих, так и Xi'an пилотов. Обладая изящной и маневренной конструкцией, Syulen идеально подходит для транспортировки важных грузов по всему необъятному пространству 'Verse. Кроме того, это отличный выбор для начинающих транспортных профессионалов, начинающих свою карьеру.",
      SHIP_CORSAIR_TITLE: "Drake Corsair Executive",
      SHIP_CORSAIR_DESC:
        "Drake Corsair - это многоместный исследовательский корабль, который жертвует защитой ради фокуса на универсальности и огневой мощи. У него асимметричные преобразуемые крылья и большой грузовой отсек. До четырех членов экипажа могут разместиться в функциональных каютах Corsair, а полный набор сканирующих систем вместе с парой баков с квантовым топливом обеспечивают средства и метод исследования далеких, опасных звезд.",
    },
  };
const V = f({
    legacy: !1,
    locale: (function () {
      const e = localStorage.getItem("pyam-hangar-language");
      if (e && ["zh", "en", "jp", "kr", "de", "ru"].includes(e)) return e;
      const t = navigator.language.toLowerCase();
      return t.startsWith("en")
        ? "en"
        : t.startsWith("jp") || t.startsWith("ja")
          ? "jp"
          : t.startsWith("kr") || t.startsWith("ko")
            ? "kr"
            : t.startsWith("de")
              ? "de"
              : t.startsWith("ru")
                ? "ru"
                : "zh";
    })(),
    fallbackLocale: "en",
    messages: K,
    globalInjection: !0,
  }),
  W = e("pyam", () => {
    const e = t(w.DEFAULT_LANGUAGE),
      n = t(!1),
      i = t(new Date()),
      s = t(0),
      r = t(new Date()),
      E = t({ hours: 0, minutes: 0, seconds: 0 }),
      T = t("offline"),
      o = t(""),
      l = t(0),
      _ = t([]),
      I = t([]),
      A = t(["empty", "empty", "empty", "empty", "empty"]),
      c = a(() => {
        const e = r.value.getTime() - i.value.getTime(),
          t = Math.floor(e / 36e5),
          a = Math.floor((e % 36e5) / 6e4),
          n = Math.floor((e % 6e4) / 1e3);
        return `${t.toString().padStart(2, "0")}:${a.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}`;
      });
    function u() {
      const e = performance.now();
      return new Date(s.value + e);
    }
    function S(e) {
      const t =
          (e.getTime() - w.TIMING.INITIAL_OPEN_TIME.getTime()) %
          w.TIMING.CYCLE_DURATION,
        a = V.global.t("STATUS_ONLINE"),
        n = V.global.t("STATUS_OFFLINE");
      if (t < w.TIMING.OPEN_DURATION)
        return {
          status: a,
          nextChangeTime: new Date(e.getTime() + (w.TIMING.OPEN_DURATION - t)),
        };
      {
        const a = t - w.TIMING.OPEN_DURATION;
        return {
          status: n,
          nextChangeTime: new Date(e.getTime() + (w.TIMING.CLOSE_DURATION - a)),
        };
      }
    }
    function O(e, t = "info") {
      const a = {
        timestamp: `[${new Date().toISOString().slice(11, 23)}]`,
        message: e,
        type: t,
      };
      (_.value.push(a), _.value.length > 50 && _.value.shift());
    }
    function L() {
      try {
        const e = (function (e) {
          const { status: t, nextChangeTime: a } = S(e),
            n = [],
            i = V.global.t("STATUS_ONLINE"),
            s = V.global.t("STATUS_OFFLINE");
          let r = e,
            E = t,
            T = a;
          E === i
            ? (n.push({ type: s, time: T, statusClass: "status-offline" }),
              (r = new Date(T.getTime() + w.TIMING.CLOSE_DURATION)),
              (E = s))
            : (n.push({ type: i, time: T, statusClass: "status-online" }),
              (r = new Date(T.getTime() + w.TIMING.OPEN_DURATION)),
              (E = i));
          const o = new Date(r.getTime() + 2592e5);
          for (; r < o; )
            E === i
              ? (n.push({ type: s, time: r, statusClass: "status-offline" }),
                (r = new Date(r.getTime() + w.TIMING.CLOSE_DURATION)),
                (E = s))
              : (n.push({ type: i, time: r, statusClass: "status-online" }),
                (r = new Date(r.getTime() + w.TIMING.OPEN_DURATION)),
                (E = i));
          return n;
        })(u());
        I.value = e;
      } catch (e) {
        O("Schedule generation failed", "error");
      }
    }
    function d() {
      const t = (function () {
        const e = window.location.pathname.match(/^\/([a-z]{2})\/?$/);
        if (e) return e[1];
        const t = window.location.hash.match(/^#\/([a-z]{2})\/?$/);
        if (t) return t[1];
        return null;
      })();
      if (t && x[t])
        return (
          (e.value = t),
          (V.global.locale.value = t),
          void localStorage.setItem("pyam-hangar-language", t)
        );
      const a = localStorage.getItem("pyam-hangar-language");
      if (a && x[a]) ((e.value = a), (V.global.locale.value = a));
      else {
        const t = navigator.language.toLowerCase();
        t.startsWith("en")
          ? (e.value = "en")
          : t.startsWith("jp")
            ? (e.value = "jp")
            : (e.value = w.DEFAULT_LANGUAGE);
      }
    }
    return {
      currentLanguage: e,
      isInitialized: n,
      uptimeStartTime: i,
      currentTime: r,
      countdown: E,
      hangarStatus: T,
      statusMessage: o,
      progress: l,
      logEntries: _,
      scheduleEvents: I,
      statusLights: A,
      uptime: c,
      initialize: function () {
        (d(),
          (function () {
            const e = performance.now(),
              t = Date.now();
            ((s.value = t - e), O("Time synchronization initialized", "info"));
          })(),
          L(),
          O("PYAM-EXEC Terminal System Online", "info"),
          O("Executive Hangar Module Initialized", "info"),
          O("Multi-language support enabled", "info"),
          (n.value = !0));
      },
      changeLanguage: function (t) {
        x[t] &&
          ((e.value = t),
          (V.global.locale.value = t),
          localStorage.setItem("pyam-hangar-language", t),
          O(`Language changed to: ${x[t].name}`, "info"),
          L());
      },
      updateDisplay: function () {
        try {
          const e = u();
          r.value = e;
          const { status: t, nextChangeTime: a } = S(e),
            n =
              (e.getTime() - w.TIMING.INITIAL_OPEN_TIME.getTime()) %
              w.TIMING.CYCLE_DURATION;
          (!(function (e, t) {
            const a = e.getTime() - t.getTime();
            if (a <= 0)
              return void O("Hangar status transition detected", "warning");
            const n = Math.floor(a / 1e3);
            E.value = {
              hours: Math.floor(n / 3600),
              minutes: Math.floor((n % 3600) / 60),
              seconds: n % 60,
            };
          })(a, e),
            (function (e) {
              const t = V.global.t("STATUS_ONLINE"),
                a = e === t;
              T.value = a ? "online" : "offline";
            })(t),
            (function (e, t) {
              const a = V.global.t("STATUS_ONLINE");
              e === a
                ? t < 3e5
                  ? (o.value = V.global.t("DOOR_OPENING"))
                  : t > w.TIMING.OPEN_DURATION - 3e5
                    ? (o.value = V.global.t("DOOR_CLOSING"))
                    : (o.value = V.global.t("DOOR_OPEN"))
                : (o.value = V.global.t("DOOR_CLOSED"));
            })(t, n),
            (function (e) {
              if ("online" === T.value) {
                const t = Math.max(0, w.TIMING.OPEN_DURATION - e);
                l.value = Math.min(100, (t / w.TIMING.OPEN_DURATION) * 100);
              } else {
                const t = e - w.TIMING.OPEN_DURATION;
                l.value = Math.min(
                  100,
                  Math.max(0, (t / w.TIMING.CLOSE_DURATION) * 100),
                );
              }
            })(n),
            (function (e) {
              const t = z.find((t) => e >= t.min && e < t.max);
              t && (A.value = [...t.colors]);
            })(n));
        } catch (e) {
          O("Display update error occurred", "error");
        }
      },
      addLogEntry: O,
      generateScheduleTable: L,
      getSyncTime: u,
    };
  }),
  j = { id: "app" },
  X = n({
    __name: "App",
    setup(e) {
      const t = W();
      return (
        i(() => {
          (document.documentElement.setAttribute("data-theme", "dark"),
            t.initialize());
        }),
        (e, t) => {
          const a = E("router-view");
          return (T(), s("div", j, [r(a)]));
        }
      );
    },
  }),
  Z = { class: "language-selector-container" },
  $ = { class: "dropdown" },
  q = { class: "language-dropdown" },
  Q = ["onClick"],
  J = (e, t) => {
    const a = e.__vccOpts || e;
    for (const [n, i] of t) a[n] = i;
    return a;
  },
  ee = J(
    n({
      __name: "LanguageSelector",
      setup(e) {
        const n = d(),
          r = W(),
          E = t(!1),
          C = a(() => x[r.currentLanguage]);
        function N() {
          E.value = !E.value;
        }
        function P() {
          setTimeout(() => {
            E.value = !1;
          }, 150);
        }
        function R(e) {
          const t = e.target,
            a = document.querySelector(".language-selector-container");
          a && !a.contains(t) && (E.value = !1);
        }
        return (
          i(() => {
            document.addEventListener("click", R);
          }),
          o(() => {
            document.removeEventListener("click", R);
          }),
          (e, t) => (
            T(),
            s("div", Z, [
              l("div", $, [
                l(
                  "button",
                  {
                    class: "language-selector-btn",
                    type: "button",
                    onClick: N,
                    onBlur: P,
                  },
                  I(C.value.flag) + " " + I(C.value.name),
                  33,
                ),
                _(
                  l(
                    "div",
                    q,
                    [
                      (T(!0),
                      s(
                        c,
                        null,
                        u(
                          Object.entries(S(x)),
                          ([e, t]) => (
                            T(),
                            s(
                              "a",
                              {
                                key: e,
                                class: L([
                                  "dropdown-item language-option",
                                  { active: e === S(r).currentLanguage },
                                ]),
                                href: "#",
                                onClick: O(
                                  (t) => {
                                    return (
                                      (a = e) !== r.currentLanguage &&
                                        (r.changeLanguage(a), n.push(`/${a}`)),
                                      void (E.value = !1)
                                    );
                                    var a;
                                  },
                                  ["prevent"],
                                ),
                              },
                              I(t.flag) + " " + I(t.name),
                              11,
                              Q,
                            )
                          ),
                        ),
                        128,
                      )),
                    ],
                    512,
                  ),
                  [[A, E.value]],
                ),
              ]),
            ])
          )
        );
      },
    }),
    [["__scopeId", "data-v-2d76cd2e"]],
  ),
  te = { class: "panel-section" },
  ae = { class: "panel-title" },
  ne = { class: "status-text" },
  ie = J(
    n({
      __name: "HangarAccessPanel",
      setup(e) {
        const { t: t } = H(),
          n = W(),
          { hangarStatus: i } = C(n),
          r = a(() => "online" === i.value),
          E = a(() => (r.value ? "granted" : "denied")),
          o = a(() => (r.value ? "online" : "offline")),
          _ = a(() => (r.value ? t("ACCESS_GRANTED") : t("ACCESS_DENIED")));
        return (e, a) => (
          T(),
          s("div", te, [
            l("h3", ae, I(S(t)("STATUS_SUBTITLE")), 1),
            l(
              "div",
              { class: L(["hangar-status", E.value]) },
              [
                l("span", { class: L(["status-light", o.value]) }, null, 2),
                l("span", ne, I(_.value), 1),
              ],
              2,
            ),
          ])
        );
      },
    }),
    [["__scopeId", "data-v-e18dbfda"]],
  ),
  se = { class: "panel-section" },
  re = { class: "panel-title" },
  Ee = { class: "status-lights" },
  Te = { class: "status-light-label" },
  oe = J(
    n({
      __name: "SystemStatusPanel",
      setup(e) {
        const { t: t } = H(),
          a = W(),
          { statusLights: n } = C(a),
          i = ["PWR", "SYS", "NET", "SEC", "ACC"];
        function r(e) {
          switch (e) {
            case "green":
              return "active";
            case "red":
              return "inactive";
            default:
              return "";
          }
        }
        function E(e) {
          return t(`STATUS_LIGHTS.${i[e]}`);
        }
        return (e, a) => (
          T(),
          s("div", se, [
            l("h3", re, I(S(t)("SYSTEM_STATUS")), 1),
            l("div", Ee, [
              (T(!0),
              s(
                c,
                null,
                u(
                  S(n),
                  (e, t) => (
                    T(),
                    s("div", { key: t, class: "status-light-item" }, [
                      l(
                        "div",
                        { class: L(["status-light-indicator", r(e)]) },
                        null,
                        2,
                      ),
                      l("span", Te, I(E(t)), 1),
                    ])
                  ),
                ),
                128,
              )),
            ]),
          ])
        );
      },
    }),
    [["__scopeId", "data-v-52f1559f"]],
  ),
  le = { class: "panel-section" },
  _e = { class: "panel-title" },
  Ie = { class: "developer-support" },
  Ae = { class: "support-content" },
  ce = { class: "support-description" },
  ue = { class: "support-text" },
  Se = { class: "support-actions" },
  Oe = ["href"],
  Le = J(
    n({
      __name: "DeveloperSupportPanel",
      setup(e) {
        const { t: t } = H();
        return (e, a) => (
          T(),
          s("div", le, [
            l("h3", _e, I(S(t)("SYSTEM_DIAGNOSTICS")), 1),
            l("div", Ie, [
              l("div", Ae, [
                l("p", ce, I(S(t)("DEVELOPER_SUPPORT.TITLE")), 1),
                l("p", ue, I(S(t)("DEVELOPER_SUPPORT.SUPPORT_TEXT")), 1),
                l("div", Se, [
                  l(
                    "a",
                    {
                      href: S(t)("DEVELOPER_SUPPORT.KOFI_LINK"),
                      target: "_blank",
                      class: "kofi-button",
                    },
                    " ☕ Support on Ko-fi ",
                    8,
                    Oe,
                  ),
                ]),
              ]),
            ]),
          ])
        );
      },
    }),
    [["__scopeId", "data-v-a08b8171"]],
  ),
  de = { class: "panel-section panel-section-fill" },
  Ce = { class: "panel-title" },
  Ne = { class: "schedule-container" },
  Pe = { class: "schedule-table" },
  Re = { key: 0 },
  me = ["rowspan"],
  Me = { class: "time-cell" },
  ge = { key: 1 },
  he = { class: "time-cell" },
  De = J(
    n({
      __name: "SchedulePanel",
      setup(e) {
        const { t: t } = H(),
          n = W(),
          { scheduleEvents: i } = C(n);
        function r(e) {
          return e.toLocaleString();
        }
        function E(e) {
          const t = e.getTime() - w.TIMING.INITIAL_OPEN_TIME.getTime();
          return Math.floor(t / w.TIMING.CYCLE_DURATION) + 2;
        }
        const o = a(() => {
          const e = i.value,
            a = t("STATUS_ONLINE"),
            n = t("STATUS_OFFLINE"),
            s = [];
          let r = 0;
          for (; r < e.length; )
            if (0 === r && e[r].type === n) {
              const t = E(e[r].time);
              (s.push({ ...e[r], cycle: t, rowspan: 1, isGroupStart: !0 }),
                r++);
            } else if (
              r + 1 < e.length &&
              e[r].type === a &&
              e[r + 1].type === n
            ) {
              const t = E(e[r + 1].time);
              (s.push({ ...e[r], cycle: t, rowspan: 2, isGroupStart: !0 }),
                s.push({ ...e[r + 1], isGroupStart: !1 }),
                (r += 2));
            } else {
              const t = E(e[r].time);
              (s.push({ ...e[r], cycle: t, rowspan: 1, isGroupStart: !0 }),
                r++);
            }
          return s;
        });
        return (e, a) => (
          T(),
          s("div", de, [
            l("h3", Ce, I(S(t)("SCHEDULE")), 1),
            l("div", Ne, [
              l("table", Pe, [
                l("thead", null, [
                  l("tr", null, [
                    l("th", null, I(S(t)("TABLE_HEADERS.CYCLE")), 1),
                    l("th", null, I(S(t)("TABLE_HEADERS.STATUS")), 1),
                    l("th", null, I(S(t)("TABLE_HEADERS.TIME")), 1),
                  ]),
                ]),
                l("tbody", null, [
                  (T(!0),
                  s(
                    c,
                    null,
                    u(
                      o.value,
                      (e, t) => (
                        T(),
                        s(
                          c,
                          { key: t },
                          [
                            e.isGroupStart
                              ? (T(),
                                s("tr", Re, [
                                  l(
                                    "td",
                                    { class: "cycle-cell", rowspan: e.rowspan },
                                    I(e.cycle),
                                    9,
                                    me,
                                  ),
                                  l(
                                    "td",
                                    { class: L(e.statusClass) },
                                    I(e.type),
                                    3,
                                  ),
                                  l("td", Me, I(r(e.time)), 1),
                                ]))
                              : (T(),
                                s("tr", ge, [
                                  l(
                                    "td",
                                    { class: L(e.statusClass) },
                                    I(e.type),
                                    3,
                                  ),
                                  l("td", he, I(r(e.time)), 1),
                                ])),
                          ],
                          64,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
            ]),
          ])
        );
      },
    }),
    [["__scopeId", "data-v-e496204a"]],
  ),
  pe = { class: "terminal-container" },
  Ue = { class: "terminal-header" },
  ve = { class: "logo-section" },
  ye = { class: "system-status" },
  fe = { class: "status-value" },
  He = { class: "header-right" },
  Ge = { class: "terminal-id" },
  Ye = { class: "main-display" },
  be = { class: "left-panel" },
  Fe = { class: "center-panel" },
  ke = { class: "right-panel" },
  Be = { class: "status-panel-mobile" },
  we = { class: "support-panel-mobile" },
  ze = { class: "terminal-footer" },
  xe = { class: "footer-left" },
  Ke = { class: "build-info" },
  Ve = { class: "uptime" },
  We = { class: "footer-center" },
  je = { class: "warning-text" },
  Xe = { class: "footer-right" },
  Ze = { class: "social-links" },
  $e = {
    href: "https://t.me/PYAMltd",
    target: "_blank",
    class: "telegram-link",
  },
  qe = { class: "copyright" },
  Qe = J(
    n({
      __name: "PyamTerminal",
      setup(e) {
        const { t: t } = H(),
          a = W(),
          { uptime: n } = C(a);
        let _ = null;
        return (
          i(() => {
            (a.initialize(),
              a.updateDisplay(),
              (_ = setInterval(() => {
                a.updateDisplay();
              }, 100)));
          }),
          o(() => {
            _ && clearInterval(_);
          }),
          (e, a) => {
            const i = E("el-col"),
              o = E("router-view"),
              _ = E("el-row");
            return (
              T(),
              s("div", pe, [
                a[5] || (a[5] = l("div", { class: "scan-lines" }, null, -1)),
                l("header", Ue, [
                  l("div", ve, [
                    a[1] ||
                      (a[1] = l(
                        "div",
                        { class: "company-logo" },
                        [
                          l("span", { class: "logo-text" }, "PYAM"),
                          l("span", { class: "logo-subtitle" }, "PYAM.LTD"),
                        ],
                        -1,
                      )),
                    l("div", ye, [
                      a[0] ||
                        (a[0] = l(
                          "span",
                          { class: "status-label" },
                          "SYSTEM STATUS:",
                          -1,
                        )),
                      l("span", fe, I(S(t)("LEGACY_MODE")), 1),
                    ]),
                  ]),
                  l("div", He, [
                    l("div", Ge, [
                      l("span", null, I(S(t)("TERMINAL_ID")), 1),
                      l("span", null, I(S(t)("LOCATION")), 1),
                    ]),
                    r(ee),
                  ]),
                ]),
                l("main", Ye, [
                  r(
                    _,
                    { gutter: 20, class: "main-row" },
                    {
                      default: N(() => [
                        r(
                          i,
                          {
                            xs: 24,
                            sm: 24,
                            md: 5,
                            lg: 5,
                            xl: 4,
                            class: "panel-col panel-col-left",
                          },
                          {
                            default: N(() => [
                              l("aside", be, [
                                r(ie),
                                r(oe, { class: "mobile-hidden" }),
                                r(Le, { class: "mobile-hidden" }),
                              ]),
                            ]),
                            _: 1,
                          },
                        ),
                        r(
                          i,
                          {
                            xs: 24,
                            sm: 24,
                            md: 14,
                            lg: 14,
                            xl: 16,
                            class: "panel-col panel-col-center",
                          },
                          {
                            default: N(() => [l("section", Fe, [r(o)])]),
                            _: 1,
                          },
                        ),
                        r(
                          i,
                          {
                            xs: 24,
                            sm: 24,
                            md: 5,
                            lg: 5,
                            xl: 4,
                            class: "panel-col panel-col-right",
                          },
                          { default: N(() => [l("aside", ke, [r(De)])]), _: 1 },
                        ),
                        r(
                          i,
                          {
                            xs: 24,
                            sm: 24,
                            md: 0,
                            lg: 0,
                            xl: 0,
                            class: "panel-col panel-col-status",
                          },
                          { default: N(() => [l("aside", Be, [r(oe)])]), _: 1 },
                        ),
                        r(
                          i,
                          {
                            xs: 24,
                            sm: 24,
                            md: 0,
                            lg: 0,
                            xl: 0,
                            class: "panel-col panel-col-support",
                          },
                          { default: N(() => [l("aside", we, [r(Le)])]), _: 1 },
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                l("footer", ze, [
                  l("div", xe, [
                    l(
                      "span",
                      Ke,
                      I(S(t)("BUILD_LABEL")) +
                        ": " +
                        I(S(w).VERSION.BUILD) +
                        " | " +
                        I(S(t)("SYSTEM_LABEL")) +
                        ": " +
                        I(S(w).VERSION.SYSTEM),
                      1,
                    ),
                    l("span", Ve, I(S(t)("UPTIME_LABEL")) + " " + I(S(n)), 1),
                  ]),
                  l("div", We, [
                    l("span", je, I(S(t)("FACILITY_ABANDONED")), 1),
                  ]),
                  l("div", Xe, [
                    l("span", Ze, [
                      l("a", $e, [
                        a[2] ||
                          (a[2] = l(
                            "svg",
                            {
                              class: "telegram-icon",
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                            [
                              l("path", {
                                d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                              }),
                            ],
                            -1,
                          )),
                        P(" " + I(S(t)("TELEGRAM_CHANNEL")), 1),
                      ]),
                    ]),
                    l("span", qe, [
                      a[3] || (a[3] = P(" © 2954 ", -1)),
                      a[4] ||
                        (a[4] = l(
                          "a",
                          {
                            href: "https://pyam.ltd",
                            target: "_blank",
                            class: "company-link",
                          },
                          "PYAM.LTD",
                          -1,
                        )),
                      P(" " + I(S(t)("DEFUNCT_SUFFIX")), 1),
                    ]),
                  ]),
                ]),
              ])
            );
          }
        );
      },
    }),
    [["__scopeId", "data-v-f4b1e182"]],
  ),
  Je = window.PYAM_ICONS || {
    MAP: "",
    TUTORIAL: "",
    SHIP: "",
    OPERATION: "",
    FOLDER: "",
    WARNING: "",
    CHECKMARK: "",
    CROSS: "",
    WRENCH: "",
    ARROW_LEFT: "",
    ARROW_RIGHT: "",
    ARROW_UP: "",
    ARROW_DOWN: "",
    CIRCLE_FILLED: "",
    CIRCLE_EMPTY: "",
    SQUARE_FILLED: "",
    SQUARE_EMPTY: "",
  },
  et = { class: "main-screen" },
  tt = { class: "screen-header" },
  at = { class: "header-nav" },
  nt = { class: "nav-icon" },
  it = { class: "nav-text" },
  st = { class: "subtitle" },
  rt = { class: "nav-grid" },
  Et = { class: "module-icon" },
  Tt = { class: "icon-symbol" },
  ot = { class: "module-content" },
  lt = { class: "module-title" },
  _t = { class: "module-description" },
  It = { class: "module-meta" },
  At = { class: "meta-type" },
  ct = { class: "module-arrow" },
  ut = { class: "arrow-symbol" },
  St = J(
    n({
      __name: "ModuleNavigation",
      setup(e) {
        const { t: t } = H();
        R();
        const a = d(),
          n = W(),
          { currentLanguage: i } = C(n),
          o = [
            {
              route: "maps",
              titleKey: "MAP_MODULE_TITLE",
              descriptionKey: "MAP_MODULE_DESCRIPTION",
              icon: Je.MAP,
              typeKey: "MODULE_TYPE_TACTICAL",
              classification: "CONFIDENTIAL",
              className: "module-maps",
            },
            {
              route: "tutorials",
              titleKey: "TUTORIAL_MODULE_TITLE",
              descriptionKey: "TUTORIAL_MODULE_DESCRIPTION",
              icon: Je.TUTORIAL,
              typeKey: "MODULE_TYPE_TRAINING",
              classification: "PUBLIC",
              className: "module-tutorials",
            },
            {
              route: "ships",
              titleKey: "SHIPS_MODULE_TITLE",
              descriptionKey: "SHIPS_MODULE_DESCRIPTION",
              icon: Je.SHIP,
              typeKey: "MODULE_TYPE_TECHNICAL_CHARTS",
              classification: "RESTRICTED",
              className: "module-ships",
            },
            {
              route: "operations",
              titleKey: "OPERATION_MODULE_TITLE",
              descriptionKey: "OPERATION_MODULE_DESCRIPTION",
              icon: Je.OPERATION,
              typeKey: "MODULE_TYPE_TECHNICAL_DOC",
              classification: "CONFIDENTIAL",
              className: "module-operations",
            },
          ],
          _ = () => {
            a.push(`/${i.value}`);
          };
        return (e, a) => {
          const n = E("router-link");
          return (
            T(),
            s("div", et, [
              l("div", tt, [
                l("div", at, [
                  l("button", { onClick: _, class: "nav-button back-button" }, [
                    l("span", nt, I(S(Je).ARROW_LEFT), 1),
                    l("span", it, I(S(t)("BACK_TO_TERMINAL")), 1),
                  ]),
                ]),
                l("h2", null, I(S(t)("MODULE_NAVIGATION_TITLE")), 1),
                l("div", st, I(S(t)("MODULE_NAVIGATION_SUBTITLE")), 1),
              ]),
              l("div", rt, [
                (T(),
                s(
                  c,
                  null,
                  u(o, (e) => {
                    return r(
                      n,
                      {
                        key: e.route,
                        to: ((a = e.route), `/${i.value}/${a}`),
                        class: L(["nav-module", e.className]),
                      },
                      {
                        default: N(() => [
                          l("div", Et, [l("span", Tt, I(e.icon), 1)]),
                          l("div", ot, [
                            l("h4", lt, I(S(t)(e.titleKey)), 1),
                            l("p", _t, I(S(t)(e.descriptionKey)), 1),
                            l("div", It, [
                              l("span", At, I(S(t)(e.typeKey)), 1),
                              l(
                                "span",
                                {
                                  class: L([
                                    "meta-classification",
                                    e.classification.toLowerCase(),
                                  ]),
                                },
                                I(S(t)(`CLASSIFICATION_${e.classification}`)),
                                3,
                              ),
                            ]),
                          ]),
                          l("div", ct, [
                            l("span", ut, I(S(Je).ARROW_RIGHT), 1),
                          ]),
                        ]),
                        _: 2,
                      },
                      1032,
                      ["to", "class"],
                    );
                    var a;
                  }),
                  64,
                )),
              ]),
            ])
          );
        };
      },
    }),
    [["__scopeId", "data-v-f9597919"]],
  ),
  Ot = { class: "main-screen" },
  Lt = { class: "screen-header" },
  dt = { class: "header-nav" },
  Ct = { class: "nav-text" },
  Nt = { key: 0, class: "subtitle" },
  Pt = { class: "article-content" },
  Rt = { class: "content-wrapper" },
  mt = { key: 0, class: "article-meta" },
  Mt = { class: "meta-item" },
  gt = { class: "meta-label" },
  ht = { class: "meta-value" },
  Dt = { key: 0, class: "meta-item" },
  pt = { class: "meta-label" },
  Ut = { class: "meta-value" },
  vt = { key: 1, class: "meta-item" },
  yt = { class: "meta-label" },
  ft = { class: "article-body" },
  Ht = { key: 0, class: "image-gallery" },
  Gt = { key: 0, class: "gallery-intro" },
  Yt = ["innerHTML"],
  bt = { class: "image-grid" },
  Ft = ["onClick"],
  kt = { class: "image-container" },
  Bt = ["src", "alt", "onLoad", "onError"],
  wt = { class: "image-overlay" },
  zt = { class: "image-info" },
  xt = { class: "image-title" },
  Kt = { key: 0, class: "image-description" },
  Vt = { key: 1, class: "text-content" },
  Wt = { key: 0, class: "article-intro" },
  jt = ["innerHTML"],
  Xt = { class: "article-sections" },
  Zt = { key: 0, class: "section-title" },
  $t = { class: "section-content" },
  qt = ["innerHTML"],
  Qt = { key: 2, class: "mixed-content" },
  Jt = { key: 0, class: "content-intro" },
  ea = ["innerHTML"],
  ta = { class: "mixed-sections" },
  aa = { key: 0, class: "text-block" },
  na = { key: 0, class: "block-title" },
  ia = { class: "block-content" },
  sa = ["innerHTML"],
  ra = { key: 1, class: "image-block" },
  Ea = { key: 0, class: "block-title" },
  Ta = ["onClick"],
  oa = ["src", "alt", "onLoad", "onError"],
  la = { key: 0, class: "image-caption" },
  _a = { class: "zoom-controls" },
  Ia = { class: "zoom-indicator" },
  Aa = ["src", "alt"],
  ca = { key: 0, class: "modal-info" },
  ua = { key: 0, class: "modal-title" },
  Sa = { key: 1, class: "modal-description" },
  Oa = { key: 2, class: "modal-caption" },
  La = J(
    n({
      __name: "ArticleTemplate",
      props: {
        title: {},
        subtitle: {},
        description: {},
        tip: {},
        contentType: {},
        articleType: { default: "TECHNICAL_DOCUMENTATION" },
        classification: {},
        lastUpdated: {},
        showMeta: { type: Boolean, default: !0 },
        images: { default: () => [] },
        sections: { default: () => [] },
        mixedContent: { default: () => [] },
      },
      setup(e) {
        const n = d(),
          r = W(),
          { t: E } = H(),
          o = t(null),
          _ = t(1),
          A = t(0),
          C = t(0),
          N = t(!1),
          P = t(0),
          R = t(0),
          p = t(!1),
          U = t(0),
          v = t(0),
          y = t(new Set()),
          f = t(new Set()),
          G = a(() => ({
            transform: `scale(${_.value}) translate(${A.value}px, ${C.value}px)`,
          })),
          Y = (e) => {
            const t = r.currentLanguage;
            if ("en" === t) return e;
            if (y.value.has(e)) return e;
            if (e.includes(`-${t}.`)) return e;
            const a = e.split(".");
            if (a.length >= 2) {
              const n = a.pop(),
                i = `${a.join(".")}-${t}.${n}`;
              return (f.value.add(e), i);
            }
            return e;
          },
          b = (e, t) => {
            (e.target.src, f.value.has(t) && f.value.delete(t));
          },
          F = (e, t) => {
            const a = e.target,
              n = r.currentLanguage;
            (a.src,
              "en" === n ||
                y.value.has(t) ||
                (y.value.add(t), f.value.delete(t), (a.src = t)));
          },
          k = () => {
            n.back();
          },
          B = (e, t) => {
            ((o.value = e),
              (_.value = 1),
              (A.value = 0),
              (C.value = 0),
              (p.value = !1));
          },
          w = () => {
            ((o.value = null),
              (_.value = 1),
              (A.value = 0),
              (C.value = 0),
              (N.value = !1),
              (p.value = !1));
          },
          z = (e) => {
            (e.preventDefault(), (p.value = !1));
            const t = e.deltaY > 0 ? -0.2 : 0.2,
              a = Math.max(0.5, Math.min(5, _.value + t)),
              n = e.currentTarget.getBoundingClientRect(),
              i = n.width / 2,
              s = n.height / 2,
              r = e.clientX - n.left,
              E = e.clientY - n.top,
              T = a / _.value;
            ((A.value = (A.value - (r - i)) * T + (r - i)),
              (C.value = (C.value - (E - s)) * T + (E - s)),
              (_.value = a));
          },
          x = (e) => {
            _.value > 0.9 &&
              ((N.value = !0),
              (p.value = !1),
              (P.value = e.clientX),
              (R.value = e.clientY),
              e.preventDefault());
          },
          K = (e) => {
            if (N.value && _.value > 0.9) {
              e.preventDefault();
              const t = e.clientX - P.value,
                a = e.clientY - R.value;
              ((A.value += t / _.value),
                (C.value += a / _.value),
                (P.value = e.clientX),
                (R.value = e.clientY));
            }
          },
          V = () => {
            N.value && (N.value = !1);
          },
          j = (e) => {
            if (_.value > 0.9 && 1 === e.touches.length) {
              ((N.value = !0), (p.value = !1));
              const t = e.touches[0];
              ((U.value = t.clientX),
                (v.value = t.clientY),
                e.preventDefault());
            }
          },
          X = (e) => {
            if (N.value && _.value > 0.9 && 1 === e.touches.length) {
              e.preventDefault();
              const t = e.touches[0],
                a = t.clientX - U.value,
                n = t.clientY - v.value;
              ((A.value += a / _.value),
                (C.value += n / _.value),
                (U.value = t.clientX),
                (v.value = t.clientY));
            }
          },
          Z = () => {
            N.value && (N.value = !1);
          },
          $ = () => {
            ((p.value = !0),
              (_.value = Math.min(5, _.value + 0.2)),
              setTimeout(() => {
                p.value = !1;
              }, 200));
          },
          q = () => {
            ((p.value = !0),
              (_.value = Math.max(0.5, _.value - 0.2)),
              setTimeout(() => {
                p.value = !1;
              }, 200));
          },
          Q = () => {
            ((p.value = !0),
              (_.value = 1),
              (A.value = 0),
              (C.value = 0),
              setTimeout(() => {
                p.value = !1;
              }, 200));
          };
        return (
          i(() => {
            r.isInitialized || r.initialize();
          }),
          m(
            () => r.currentLanguage,
            (e, t) => {
              (y.value.clear(), f.value.clear());
            },
          ),
          (t, a) => {
            return (
              T(),
              s(
                c,
                null,
                [
                  l("div", Ot, [
                    l("div", Lt, [
                      l("div", dt, [
                        l(
                          "button",
                          { onClick: k, class: "nav-button back-button" },
                          [
                            a[3] ||
                              (a[3] = l(
                                "span",
                                { class: "nav-icon" },
                                "◄",
                                -1,
                              )),
                            l("span", Ct, I(S(E)("BACK_TO_TERMINAL")), 1),
                          ],
                        ),
                      ]),
                      l("h2", null, I(e.title), 1),
                      e.subtitle
                        ? (T(), s("div", Nt, I(e.subtitle), 1))
                        : g("", !0),
                    ]),
                    l("div", Pt, [
                      l("div", Rt, [
                        e.showMeta
                          ? (T(),
                            s("div", mt, [
                              l("div", Mt, [
                                l("span", gt, I(S(E)("ARTICLE_TYPE")) + ":", 1),
                                l("span", ht, I(e.articleType), 1),
                              ]),
                              e.lastUpdated
                                ? (T(),
                                  s("div", Dt, [
                                    l(
                                      "span",
                                      pt,
                                      I(S(E)("LAST_UPDATED")) + ":",
                                      1,
                                    ),
                                    l(
                                      "span",
                                      Ut,
                                      I(
                                        ((n = e.lastUpdated),
                                        new Intl.DateTimeFormat("en-US", {
                                          year: "numeric",
                                          month: "2-digit",
                                          day: "2-digit",
                                          hour: "2-digit",
                                          minute: "2-digit",
                                        }).format(n)),
                                      ),
                                      1,
                                    ),
                                  ]))
                                : g("", !0),
                              e.classification
                                ? (T(),
                                  s("div", vt, [
                                    l(
                                      "span",
                                      yt,
                                      I(S(E)("CLASSIFICATION")) + ":",
                                      1,
                                    ),
                                    l(
                                      "span",
                                      {
                                        class: L([
                                          "meta-value classification",
                                          e.classification.toLowerCase(),
                                        ]),
                                      },
                                      I(
                                        S(E)(
                                          `CLASSIFICATION_${e.classification.toUpperCase()}`,
                                        ),
                                      ),
                                      3,
                                    ),
                                  ]))
                                : g("", !0),
                            ]))
                          : g("", !0),
                        l("div", ft, [
                          "images" === e.contentType
                            ? (T(),
                              s("div", Ht, [
                                e.description
                                  ? (T(),
                                    s("div", Gt, [
                                      l(
                                        "p",
                                        {
                                          class: "intro-text",
                                          innerHTML: e.description,
                                        },
                                        null,
                                        8,
                                        Yt,
                                      ),
                                    ]))
                                  : g("", !0),
                                l("div", bt, [
                                  (T(!0),
                                  s(
                                    c,
                                    null,
                                    u(
                                      e.images,
                                      (e, t) => (
                                        T(),
                                        s(
                                          "div",
                                          {
                                            key: t,
                                            class: "image-item",
                                            onClick: (t) => B(e),
                                          },
                                          [
                                            l("div", kt, [
                                              l(
                                                "img",
                                                {
                                                  src: Y(e.src),
                                                  alt: e.alt,
                                                  class: "gallery-image",
                                                  loading: "lazy",
                                                  onLoad: (t) => b(t, e.src),
                                                  onError: (t) => F(t, e.src),
                                                },
                                                null,
                                                40,
                                                Bt,
                                              ),
                                              l("div", wt, [
                                                l("div", zt, [
                                                  l("h3", xt, I(e.title), 1),
                                                  e.description
                                                    ? (T(),
                                                      s(
                                                        "p",
                                                        Kt,
                                                        I(e.description),
                                                        1,
                                                      ))
                                                    : g("", !0),
                                                ]),
                                              ]),
                                            ]),
                                          ],
                                          8,
                                          Ft,
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                ]),
                              ]))
                            : "article" === e.contentType
                              ? (T(),
                                s("div", Vt, [
                                  e.tip
                                    ? (T(),
                                      s("div", Wt, [
                                        l(
                                          "p",
                                          {
                                            class: "intro-text",
                                            innerHTML: e.tip,
                                          },
                                          null,
                                          8,
                                          jt,
                                        ),
                                      ]))
                                    : g("", !0),
                                  l("div", Xt, [
                                    (T(!0),
                                    s(
                                      c,
                                      null,
                                      u(
                                        e.sections,
                                        (e, t) => (
                                          T(),
                                          s(
                                            "section",
                                            {
                                              key: t,
                                              class: "content-section",
                                            },
                                            [
                                              e.title
                                                ? (T(),
                                                  s("h2", Zt, I(e.title), 1))
                                                : g("", !0),
                                              l("div", $t, [
                                                (T(!0),
                                                s(
                                                  c,
                                                  null,
                                                  u(
                                                    e.content,
                                                    (e, t) => (
                                                      T(),
                                                      s(
                                                        "p",
                                                        {
                                                          key: t,
                                                          class: "paragraph",
                                                          innerHTML: e,
                                                        },
                                                        null,
                                                        8,
                                                        qt,
                                                      )
                                                    ),
                                                  ),
                                                  128,
                                                )),
                                              ]),
                                            ],
                                          )
                                        ),
                                      ),
                                      128,
                                    )),
                                  ]),
                                ]))
                              : "mixed" === e.contentType
                                ? (T(),
                                  s("div", Qt, [
                                    e.description
                                      ? (T(),
                                        s("div", Jt, [
                                          l(
                                            "p",
                                            {
                                              class: "intro-text",
                                              innerHTML: e.description,
                                            },
                                            null,
                                            8,
                                            ea,
                                          ),
                                        ]))
                                      : g("", !0),
                                    l("div", ta, [
                                      (T(!0),
                                      s(
                                        c,
                                        null,
                                        u(
                                          e.mixedContent,
                                          (e, t) => (
                                            T(),
                                            s(
                                              "div",
                                              {
                                                key: t,
                                                class: L([
                                                  "content-block",
                                                  `block-${e.type}`,
                                                ]),
                                              },
                                              [
                                                "text" === e.type
                                                  ? (T(),
                                                    s("div", aa, [
                                                      e.title
                                                        ? (T(),
                                                          s(
                                                            "h3",
                                                            na,
                                                            I(e.title),
                                                            1,
                                                          ))
                                                        : g("", !0),
                                                      l("div", ia, [
                                                        (T(!0),
                                                        s(
                                                          c,
                                                          null,
                                                          u(
                                                            e.content,
                                                            (e, t) => (
                                                              T(),
                                                              s(
                                                                "p",
                                                                {
                                                                  key: t,
                                                                  class:
                                                                    "paragraph",
                                                                  innerHTML: e,
                                                                },
                                                                null,
                                                                8,
                                                                sa,
                                                              )
                                                            ),
                                                          ),
                                                          128,
                                                        )),
                                                      ]),
                                                    ]))
                                                  : "image" === e.type
                                                    ? (T(),
                                                      s("div", ra, [
                                                        e.title
                                                          ? (T(),
                                                            s(
                                                              "h3",
                                                              Ea,
                                                              I(e.title),
                                                              1,
                                                            ))
                                                          : g("", !0),
                                                        l(
                                                          "div",
                                                          {
                                                            class:
                                                              "block-image-container",
                                                            onClick: (t) =>
                                                              B(e),
                                                          },
                                                          [
                                                            l(
                                                              "img",
                                                              {
                                                                src: Y(e.src),
                                                                alt: e.alt,
                                                                class:
                                                                  "block-image",
                                                                loading: "lazy",
                                                                onLoad: (t) =>
                                                                  b(t, e.src),
                                                                onError: (t) =>
                                                                  F(t, e.src),
                                                              },
                                                              null,
                                                              40,
                                                              oa,
                                                            ),
                                                            e.caption
                                                              ? (T(),
                                                                s(
                                                                  "div",
                                                                  la,
                                                                  I(e.caption),
                                                                  1,
                                                                ))
                                                              : g("", !0),
                                                          ],
                                                          8,
                                                          Ta,
                                                        ),
                                                      ]))
                                                    : g("", !0),
                                              ],
                                              2,
                                            )
                                          ),
                                        ),
                                        128,
                                      )),
                                    ]),
                                  ]))
                                : g("", !0),
                        ]),
                      ]),
                    ]),
                  ]),
                  (T(),
                  M(h, { to: "body" }, [
                    o.value
                      ? (T(),
                        s("div", { key: 0, class: "image-modal", onClick: w }, [
                          l(
                            "div",
                            {
                              class: "modal-content",
                              onClick: a[2] || (a[2] = O(() => {}, ["stop"])),
                            },
                            [
                              l(
                                "button",
                                { class: "modal-close", onClick: w },
                                "✕",
                              ),
                              l("div", _a, [
                                l(
                                  "button",
                                  { onClick: q, class: "zoom-btn" },
                                  "−",
                                ),
                                l(
                                  "span",
                                  Ia,
                                  I(Math.round(100 * _.value)) + "%",
                                  1,
                                ),
                                l(
                                  "button",
                                  { onClick: $, class: "zoom-btn" },
                                  "+",
                                ),
                                l(
                                  "button",
                                  { onClick: Q, class: "zoom-btn reset" },
                                  "重置",
                                ),
                              ]),
                              l(
                                "div",
                                {
                                  class: L([
                                    "modal-image-container",
                                    { dragging: N.value },
                                  ]),
                                  onWheel: z,
                                  onMousedown: x,
                                  onMousemove: K,
                                  onMouseup: V,
                                  onMouseleave: V,
                                  onTouchstart: j,
                                  onTouchmove: X,
                                  onTouchend: Z,
                                },
                                [
                                  l(
                                    "img",
                                    {
                                      src: Y(o.value?.src || ""),
                                      alt: o.value.alt,
                                      class: L([
                                        "modal-image",
                                        { "smooth-transition": p.value },
                                      ]),
                                      style: D(G.value),
                                      draggable: "false",
                                      onLoad:
                                        a[0] ||
                                        (a[0] = (e) =>
                                          b(e, o.value?.src || "")),
                                      onError:
                                        a[1] ||
                                        (a[1] = (e) =>
                                          F(e, o.value?.src || "")),
                                    },
                                    null,
                                    46,
                                    Aa,
                                  ),
                                ],
                                34,
                              ),
                              o.value.title || o.value.description
                                ? (T(),
                                  s("div", ca, [
                                    o.value.title
                                      ? (T(), s("h3", ua, I(o.value.title), 1))
                                      : g("", !0),
                                    o.value.description
                                      ? (T(),
                                        s("p", Sa, I(o.value.description), 1))
                                      : g("", !0),
                                    o.value.caption
                                      ? (T(), s("p", Oa, I(o.value.caption), 1))
                                      : g("", !0),
                                  ]))
                                : g("", !0),
                            ],
                          ),
                        ]))
                      : g("", !0),
                  ])),
                ],
                64,
              )
            );
            var n;
          }
        );
      },
    }),
    [["__scopeId", "data-v-3a88821e"]],
  ),
  da = n({
    __name: "MapModule",
    setup(e) {
      const { t: n } = H(),
        i = t(new Date("2954-03-15T14:30:00Z")),
        s = a(() => [
          {
            src: "/images/maps/PYAM-EXHANG.jpg",
            alt: n("MAP_IMAGE_1_TITLE"),
            title: n("MAP_IMAGE_1_TITLE"),
            description: n("MAP_IMAGE_1_DESC"),
          },
          {
            src: "/images/maps/PYAM-SUPVISR.jpg",
            alt: n("MAP_IMAGE_2_TITLE"),
            title: n("MAP_IMAGE_2_TITLE"),
            description: n("MAP_IMAGE_2_DESC"),
          },
          {
            src: "/images/maps/RUIN-STATION.jpg",
            alt: n("MAP_IMAGE_3_TITLE"),
            title: n("MAP_IMAGE_3_TITLE"),
            description: n("MAP_IMAGE_3_DESC"),
          },
          {
            src: "/images/maps/ORBITUARY.jpg",
            alt: n("MAP_IMAGE_4_TITLE"),
            title: n("MAP_IMAGE_4_TITLE"),
            description: n("MAP_IMAGE_4_DESC"),
          },
          {
            src: "/images/maps/CHECKMATE.jpg",
            alt: n("MAP_IMAGE_5_TITLE"),
            title: n("MAP_IMAGE_5_TITLE"),
            description: n("MAP_IMAGE_5_DESC"),
          },
        ]);
      return (e, t) => (
        T(),
        M(
          La,
          {
            title: S(n)("MAP_MODULE_TITLE"),
            subtitle: S(n)("MAP_MODULE_DESCRIPTION"),
            "content-type": "images",
            "article-type": S(n)("MODULE_TYPE_TACTICAL"),
            classification: "CONFIDENTIAL",
            "last-updated": i.value,
            images: s.value,
          },
          null,
          8,
          ["title", "subtitle", "article-type", "last-updated", "images"],
        )
      );
    },
  }),
  Ca = n({
    __name: "TutorialModule",
    setup(e) {
      const { t: a } = H(),
        n = t(new Date("2954-02-28T10:15:00Z")),
        i = t([]);
      return (e, t) => (
        T(),
        M(
          La,
          {
            title: S(a)("TUTORIAL_MODULE_TITLE"),
            subtitle: S(a)("TUTORIAL_MODULE_SUBTITLE"),
            description: S(a)("TUTORIAL_MODULE_DESCRIPTION"),
            tip: S(a)("TUTORIAL_MODULE_TIP"),
            "content-type": "article",
            "article-type": S(a)("MODULE_TYPE_TRAINING"),
            classification: "PUBLIC",
            "last-updated": n.value,
            sections: i.value,
          },
          null,
          8,
          [
            "title",
            "subtitle",
            "description",
            "tip",
            "article-type",
            "last-updated",
            "sections",
          ],
        )
      );
    },
  }),
  Na = n({
    __name: "ShipsModule",
    setup(e) {
      const { t: n } = H(),
        i = t(new Date("2954-01-20T16:45:00Z")),
        s = a(() => [
          {
            src: "/images/ships/AnvilF7AHornetMkIIExecutive.jpg",
            alt: n("SHIP_F7A_HORNET_TITLE"),
            title: n("SHIP_F7A_HORNET_TITLE"),
            description: n("SHIP_F7A_HORNET_DESC"),
          },
          {
            src: "/images/ships/AnvilF8CLightningExecutive.jpg",
            alt: n("SHIP_F8C_LIGHTNING_TITLE"),
            title: n("SHIP_F8C_LIGHTNING_TITLE"),
            description: n("SHIP_F8C_LIGHTNING_DESC"),
          },
          {
            src: "/images/ships/DrakeCutlassBlackExecutive.jpg",
            alt: n("SHIP_CUTLASS_BLACK_TITLE"),
            title: n("SHIP_CUTLASS_BLACK_TITLE"),
            description: n("SHIP_CUTLASS_BLACK_DESC"),
          },
          {
            src: "/images/ships/GatacSyulenExecutive.jpg",
            alt: n("SHIP_SYULEN_TITLE"),
            title: n("SHIP_SYULEN_TITLE"),
            description: n("SHIP_SYULEN_DESC"),
          },
          {
            src: "/images/ships/DrakeCorsairExecutive.jpg",
            alt: n("SHIP_CORSAIR_TITLE"),
            title: n("SHIP_CORSAIR_TITLE"),
            description: n("SHIP_CORSAIR_DESC"),
          },
        ]);
      return (e, t) => (
        T(),
        M(
          La,
          {
            title: S(n)("SHIPS_MODULE_TITLE"),
            subtitle: S(n)("SHIPS_MODULE_SUBTITLE"),
            "content-type": "images",
            "article-type": S(n)("MODULE_TYPE_TECHNICAL_CHARTS"),
            classification: "RESTRICTED",
            "last-updated": i.value,
            images: s.value,
          },
          null,
          8,
          ["title", "subtitle", "article-type", "last-updated", "images"],
        )
      );
    },
  }),
  Pa = n({
    __name: "OperationModule",
    setup(e) {
      const { t: n } = H(),
        i = t(new Date("2954-04-10T08:20:00Z")),
        s = a(() => [
          {
            type: "text",
            title: n("OPERATION_HANGAR_TIMER_TITLE"),
            content: [
              n("OPERATION_HANGAR_TIMER_DESC"),
              "",
              "<strong>" + n("OPERATION_RED_PHASE_TITLE") + "</strong>",
              n("OPERATION_RED_PHASE_DESC"),
              "",
              "<strong>" + n("OPERATION_GREEN_PHASE_TITLE") + "</strong>",
              n("OPERATION_GREEN_PHASE_DESC"),
              "",
              "<strong>" + n("OPERATION_BLACK_PHASE_TITLE") + "</strong>",
              n("OPERATION_BLACK_PHASE_DESC"),
            ],
          },
          {
            type: "text",
            title: n("OPERATION_IMPORTANT_DETAILS_TITLE"),
            content: [
              n("OPERATION_IMPORTANT_DETAILS_DESC"),
              "",
              "• " + n("OPERATION_TIMER_UNIVERSAL_NOTE_1"),
              "• " + n("OPERATION_TIMER_UNIVERSAL_NOTE_2"),
              "• " + n("OPERATION_TIMER_UNIVERSAL_NOTE_3"),
              "• " + n("OPERATION_TIMER_UNIVERSAL_NOTE_4"),
            ],
          },
        ]);
      return (e, t) => (
        T(),
        M(
          La,
          {
            title: S(n)("OPERATION_MODULE_TITLE"),
            subtitle: S(n)("OPERATION_MODULE_DESCRIPTION"),
            "content-type": "mixed",
            "article-type": S(n)("MODULE_TYPE_TECHNICAL_DOC"),
            classification: "CONFIDENTIAL",
            "last-updated": i.value,
            "mixed-content": s.value,
          },
          null,
          8,
          [
            "title",
            "subtitle",
            "article-type",
            "last-updated",
            "mixed-content",
          ],
        )
      );
    },
  }),
  Ra = p({
    history: U("/"),
    routes: [
      {
        path: "/:lang(zh|en|jp|kr|de|ru)",
        component: Qe,
        beforeEnter: (e, t, a) => {
          const n = e.params.lang;
          if (["zh", "en", "jp", "kr", "de", "ru"].includes(n)) {
            ((V.global.locale.value = n),
              localStorage.setItem("pyam-hangar-language", n));
            const e = {
              zh: "zh-CN",
              en: "en",
              jp: "ja",
              kr: "ko",
              de: "de",
              ru: "ru",
            };
            document.documentElement.lang = e[n] || n;
            const t = V.global.t("TITLE");
            document.title = t;
            let i = document.querySelector('meta[name="title"]');
            (i ||
              ((i = document.createElement("meta")),
              i.setAttribute("name", "title"),
              document.head.appendChild(i)),
              i.setAttribute("content", t));
            const s = V.global.t("DESCRIPTION");
            let r = document.querySelector('meta[name="description"]');
            (r ||
              ((r = document.createElement("meta")),
              r.setAttribute("name", "description"),
              document.head.appendChild(r)),
              r.setAttribute("content", s));
            const E = V.global.t("KEYWORDS"),
              T =
                E && "KEYWORDS" !== E
                  ? E
                  : "PYAM, Executive Hangar, Access Control, Terminal System, Real-time Monitoring, Hangar Status, Star Citizen, Pyro System";
            let o = document.querySelector('meta[name="keywords"]');
            (o ||
              ((o = document.createElement("meta")),
              o.setAttribute("name", "keywords"),
              document.head.appendChild(o)),
              o.setAttribute("content", T));
            const l = (e, t) => {
              let a = document.querySelector(`meta[property="${e}"]`);
              (a ||
                ((a = document.createElement("meta")),
                a.setAttribute("property", e),
                document.head.appendChild(a)),
                a.setAttribute("content", t));
            };
            (l("og:title", t),
              l("og:description", s),
              l("og:url", `https://pyam.ltd/${n}`));
            const _ = (e, t) => {
              let a = document.querySelector(`meta[name="${e}"]`);
              (a ||
                ((a = document.createElement("meta")),
                a.setAttribute("name", e),
                document.head.appendChild(a)),
                a.setAttribute("content", t));
            };
            (_("twitter:title", t),
              _("twitter:description", s),
              _("twitter:url", `https://pyam.ltd/${n}`));
            let I = document.querySelector('link[rel="canonical"]');
            (I ||
              ((I = document.createElement("link")),
              I.setAttribute("rel", "canonical"),
              document.head.appendChild(I)),
              I.setAttribute("href", `https://pyam.ltd/${n}`),
              a());
          } else a("/zh");
        },
        children: [
          {
            path: "",
            name: "terminal",
            component: () =>
              b(
                () => import("./MainScreen-OQ3agANS.js"),
                __vite__mapDeps([0, 1, 2, 3, 4]),
              ),
          },
          { path: "modules", name: "modules", component: St },
          { path: "maps", name: "maps", component: da },
          { path: "tutorials", name: "tutorials", component: Ca },
          { path: "ships", name: "ships", component: Na },
          { path: "operations", name: "operations", component: Pa },
        ],
      },
      { path: "/", name: "root", redirect: () => "/zh" },
      { path: "/:pathMatch(.*)*", redirect: "/zh" },
    ],
  });
Ra.beforeEach((e, t, a) => {
  if ("/" === e.path) {
    const e = localStorage.getItem("pyam-hangar-language"),
      t = sessionStorage.getItem("pyam-language-auto-detected");
    if (e && ["zh", "en", "jp", "kr", "de", "ru"].includes(e))
      return void a(`/${e}`);
    if (!t) {
      const e = navigator.language.toLowerCase();
      let t = "zh";
      return (
        e.startsWith("en")
          ? (t = "en")
          : e.startsWith("ja") || e.startsWith("jp")
            ? (t = "jp")
            : e.startsWith("ko") || e.startsWith("kr")
              ? (t = "kr")
              : e.startsWith("de")
                ? (t = "de")
                : e.startsWith("ru")
                  ? (t = "ru")
                  : e.startsWith("zh") && (t = "zh"),
        sessionStorage.setItem("pyam-language-auto-detected", "true"),
        void a(`/${t}`)
      );
    }
    return void a("/en");
  }
  a();
});
const ma = v(X);
(ma.use(y()), ma.use(G), ma.use(V), ma.use(Ra), ma.mount("#app"));
export { Je as P, J as _, W as u };
