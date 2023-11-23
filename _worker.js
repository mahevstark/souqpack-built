var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// .svelte-kit/output/server/chunks/ssr.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    for (const callback of callbacks) {
      callback(void 0);
    }
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_current_component(component7) {
  current_component = component7;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function ensure_array_like(array_like_or_iterator) {
  return array_like_or_iterator?.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  items = ensure_array_like(items);
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component7, name) {
  if (!component7 || !component7.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(
      `<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
    );
  }
  return component7;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_ssr = __esm({
  ".svelte-kit/output/server/chunks/ssr.js"() {
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/chunks/index.js
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set, update) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var subscriber_queue;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    init_ssr();
    subscriber_queue = [];
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode;
      var index7 = 0;
      while (index7 < str.length) {
        var eqIdx = str.indexOf("=", index7);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index7);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index7 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index7, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index7 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e3) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e3) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e3
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key2) {
            return key2.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options2.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/chunks/stores.js
var getStores, page, navigating;
var init_stores = __esm({
  ".svelte-kit/output/server/chunks/stores.js"() {
    init_ssr();
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        /** @type {typeof page} */
        page: {
          subscribe: stores.page.subscribe
        },
        /** @type {typeof navigating} */
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        /** @type {typeof updated} */
        updated: stores.updated
      };
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    navigating = {
      subscribe(fn) {
        const store = getStores().navigating;
        return store.subscribe(fn);
      }
    };
  }
});

// .svelte-kit/output/server/chunks/page.js
var Page;
var init_page = __esm({
  ".svelte-kit/output/server/chunks/page.js"() {
    init_ssr();
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="" style="height: 100vh; width:100vw; background:f7f8fb; flex-direction: column; justify-content: center; align-items: center; font-size:22px; font-family: 'Roboto'; color:#222; display: flex; " data-svelte-h="svelte-1dgitln">Souqpack</div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_ssr();
    init_stores();
    init_page();
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $navigating, $$unsubscribe_navigating;
      $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
      $$unsubscribe_navigating();
      return `${$navigating ? `${validate_component(Page, "Loading").$$render($$result, {}, {}, {})}` : `<div class="w-full relative " dir="rtl">${slots.default ? slots.default({}) : ``} ${``}</div>`}`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component_cache, component, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => component_cache ??= (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    imports = ["_app/immutable/nodes/0.c054c368.js", "_app/immutable/chunks/scheduler.ce710c66.js", "_app/immutable/chunks/index.d2955eda.js", "_app/immutable/chunks/stores.375802a7.js", "_app/immutable/chunks/singletons.16a76adf.js", "_app/immutable/chunks/stores.fd4d60b9.js", "_app/immutable/chunks/page.123f46c5.js"];
    stylesheets = ["_app/immutable/assets/0.a8d70c71.css"];
    fonts = ["_app/immutable/assets/Roboto-Regular.4e147ab6.ttf", "_app/immutable/assets/Roboto-Bold.ec685a46.ttf", "_app/immutable/assets/Roboto-Medium.9d0d55a3.ttf"];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2
});
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_ssr();
    init_stores();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component_cache2, component2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => component_cache2 ??= (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    imports2 = ["_app/immutable/nodes/1.b61f058a.js", "_app/immutable/chunks/scheduler.ce710c66.js", "_app/immutable/chunks/index.d2955eda.js", "_app/immutable/chunks/stores.375802a7.js", "_app/immutable/chunks/singletons.16a76adf.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/customize/_slug_/_page.server.js
var page_server_exports = {};
__export(page_server_exports, {
  load: () => load
});
async function load({ params }) {
  try {
    const slug = params.slug;
    const response = await fetch("https://admin.souqpack.com/api/get_product_svelte", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        lang_id: 1,
        region_id: 1
      })
    });
    const bigData = await response.json();
    const data = bigData.data.get_important_data;
    const footer_data = {
      email: data.data.email,
      phone: data.data.phone,
      address: data.data.address,
      footer_about: data.data.footer_about,
      facebook: data.data.facebook,
      instagram: data.data.instagram,
      twitter: data.data.twitter,
      youtube: data.data.youtube,
      snapchat: data.data.snapchat,
      copy_right: data.data.copy_right,
      footers: data.data.footers
    };
    const dataCats = bigData.data.get_categories;
    const pdetails = await fetch(
      `https://admin.souqpack.com/api/fast_get_cust_cats/${slug}/1`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          slug: "eight-side-seal-gusset-bag-with-valve-17",
          lang_id: 1,
          region_id: 1,
          is_guest: 0,
          guest_id: null,
          token: "6928fdb2ee9a04088b0036a27d611aef"
        })
      }
    );
    const productDetails = await pdetails.json();
    if (data.action == "success" && dataCats.action == "success" && productDetails.action == "success") {
      return {
        props: {
          browser: false,
          langs: data.data.langs,
          regions: data.data.regions,
          cats: dataCats.data.categories,
          home: {},
          footer: footer_data,
          custdata: productDetails.data,
          category: {},
          slug
        }
      };
    } else {
      return {
        status: 500,
        // Server error status code
        error: "Failed to fetch data from the API."
      };
    }
  } catch (error2) {
    console.error("Error fetching data:", error2);
    return {
      status: 500,
      // Server error status code
      error: "Failed to fetch data from the API."
    };
  }
}
var init_page_server = __esm({
  ".svelte-kit/output/server/entries/pages/customize/_slug_/_page.server.js"() {
  }
});

// .svelte-kit/output/server/chunks/page2.js
var cart, sudiaflag, uaeflag, Page$6, logo, search, user, heart, cartImage, Page$5, Page$4, Page$3, Page$2, Page$1, fb, yt, sc, tw, ins, amarican_express, mada, visa, master_card, location, mail, smartphone, apple, playstore, innovation, quality, shiped, css, Page2;
var init_page2 = __esm({
  ".svelte-kit/output/server/chunks/page2.js"() {
    init_ssr();
    init_chunks();
    cart = writable({
      items: [],
      total: 0,
      totalItems: 0
    });
    sudiaflag = "data:image/webp;base64,UklGRn4BAABXRUJQVlA4WAoAAAAgAAAAFwAADwAAVlA4TF8BAAAvF8ADAAfjIJIkRapafDb3/pUstA3HbRtJcpTyzOy9+1yHbdtIkpRkdu+/K+X6723H8x9//5JwgwAJKSChwAmQAhKgFIKUpEgoSgpJSJCSFCRBkm4bJEBOFEUhZVFr7Ry//4+3MY4B9Y0b6tFuoUAraXcZLUlpays3FUFDl1U0gghNO4WgyEpdKdMO8xjUtJXKCZXuUIjCLS4ydENwms87r+L0/D0BYiTbpq3Xz9a3bd5v27aVfxZmAhH9V+C2jdIxHf4CAAAAAAAAAAAAqK1prGlt6ezp665v/1Kiw1P74zNrl+uLqxtjdV8htXzydH12ef+wO3G80P8VkgdHz7eHdy+PO9Pze4NfBqcPc+c32xezW0srkxVfFiqqG6rbSh3lrqbK2OvYl4VUKpV636CYDn+HXCaRSCTKVYX414gPBcFoEASbVyPRbx40Vixks/l880Bv5CevHQq9v8k//RQA";
    uaeflag = "data:image/webp;base64,UklGRowAAABXRUJQVlA4WAoAAAAgAAAAFwAACwAAVlA4TG4AAAAvF8ACAD+gIJIN6nX4IJMUOiinnRoE2Tbl2c1PqaZtJObG43Ffxgf5tNv8B+AqtzFSvxFV8h4YA2AbKApRiEIUohCFKNT/tTuDiP7HNpIkSf6ybdv2trZt2267u7u7u2eSJEm2SZIkaRsAAAA+Aw==";
    Page$6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<main data-svelte-h="svelte-x0ki21"><div dir="rtl" class="flex flex-row justify-center items-center bg-black w-full"><div class="flex flex-row justify-between items-center max-w-[1440px] w-full px-3 py-2"><div class="flex flex-row items-center"><a href="https://souqpack.com/en" class="flex flex-row items-center cursor-pointer"><img class="w-6 h-4 mx-2"${add_attribute("src", sudiaflag, 0)} alt="arrow-down"> <span class="text-white ">English</span></a> <div class="w-4"></div> <div class="text-white">/</div> <div class="w-4"></div> <div class="flex flex-row items-center cursor-pointer"><img class="w-6 h-3 mx-2"${add_attribute("src", uaeflag, 0)} alt="arrow-down"> <span class="text-white ">UAE</span></div></div></div></div> </main>`;
    });
    logo = "/_app/immutable/assets/logo.edf978e6.webp";
    search = "data:image/webp;base64,UklGRqgFAABXRUJQVlA4WAoAAAAwAAAAYwAAYwAAQUxQSD8FAAABoAVJtmnbWhvXtm3btm3btn3vsa9t27Zt277H2PtgxcHuOeaY673viIDgSHLcppdG1gfJyYo7/IMmGebMFYavPffse7A9KvzfuzsHnNvmS6YZKyx1/G7/jtZFEfZ2/8gMxvmkyfKvumOIvzozJqsRyND/fJguFTFvvMpbFJOs922dIYJWFFRJ4nqPdaawLcyobtZuu84Xr5uqwdTwk54g2D70SKkA62Sbzh1XsrOTaj/1H4gKDQwIJv/X/6oyk+Ms6bd3nfrULp4vZ47chSq2GLPtJ0WZfxtWCt0Uy/68uE0moSWUG3tGXMjIPmY+st+MEWA/PyiPiaQvec1VQucJGGpim3FGJPher6QSGksujRDt2Iproz0CtT+nyJak2NlowYS6PEwQvK7lZajF4FAs9GkuDurbcMkXJGapRv6XeJxgWCD9RygzupuV6bFmOYtvgAny9rsTqvzSnPFe2A074G9xWeraYd7MxNjJGY/BmhyWrcMjOKNLvCMx9vIlOBrI0RsKnG1ltr3i3xA3UkjdVHcQlxKx23d7O3q6LWQYgF7fc/HfQuYVSPVNi0QXX0CM1RRE6j9Idi06zcLQk9TIIXmKkJutohvAKiAtorMakj4A/MhHfv8dcDJ2jproid4OotIQ2VAfjYq8O70BbKeyFPAmu6YqPJD0jDQs9wDumjKqB4KT1JJGVnTkm3BAPko3gPY5NCoDy7an0dSFF2AXjTFA1gVNIU0Bj2hsBMxUSRJgliG0CwldCrGNrzJeAfU5SLwAVFbKKUAdEr8csRVSymZAVxKhjgTmUspiwHASwKz/ZlWKG2CSHH+yKMUFMIWEzRH/OJc0RPOPJeHvSGg+pawGDCDx3pHoUko5AGhB4g5Q1VApyIzLkjgIGKaUv+AppCDhBFijkgLg0vhKk9UO8NGkkGFA/EUa+UKBruIK2QtYSiP5O2Q/6sjxATCIKGw/4HgyZQwGJvW7NJERgIiqyjgGpF+xEEkfjh6iKkrYAfPJ0s4APhdTg2kTEG6rSWZMDNDmq4Yi/mjV1GSyvQWEF1by94QOGCKhzgeJO21VQKPY8oMrI4MEFYN1YHMD+cnyAVXGSUaedRWSF5Kffw7SHFRASmBhOxL4Kisv5gk6YpGkRBeo8FxyVnrGuSzwljSSZHoLx/5MjPTwR3Ije0mLbAU/ijmVkwtLT39YksOJ5XX66TCulmRabUIo1PqD45CmvqFjoZ3NHLvGb4Tcqx9LNXLF1Rs+1DVppT9tlKAfUUOv5Cl5zUCB2H8Dk0llRU7Euoow1iZiGR2jRBV53DcJmZKbA3RCRK3lSfuJFb/zrkUpSo7Bx2MPPzFWJGPpgeEOoqEt3fZtgRUXGrHvo8M6pNSDpwta/6NJfntm61IPN5+1B2/9if1OMtySsSR1n+osIdgVnx67K8/IfTKGmZ/9l+p4uDE5+Ph/sgja90h+TVsh6AOPRDxJscN8/OkV31XWlaLFuEy23s1oEoSz7uR4iSyNEpkA00jR4qY8Yc4FgcykziQTYOnRWqt/SB3iS0MzCGQ62QgmwHTo8g3a+YbmJL+vzq+VOqFIlC6y4XRJ7GCMjK3n7nkSBr3z2+VlQ0pbkUL4JdUE+AqZu36P0VOmTxjUulxKKXkugsXiUuNF/KaixVYaE4oJGDRdITIBo6ZLjJfS9vERpgYdTsJNjZpG4StmiVHHEmFq0F85/9+aAKOdrbIYNHXBRHbWjDoBXzF3Y/kPmECYZtgBFwvVjDt8wWLXNQOPpY4mE/sTI8cye4KXp8nQWDrcDgm51smkAQBWUDggQgAAANAFAJ0BKmQAZAA+nU6kTiWkI6IgqACwE4lpCh5wALdrLuSLxF/8sbEXlgGupvcReWAa6m9xFtAA/vtlAAAAAAAAAA==";
    user = "data:image/webp;base64,UklGRoYCAABXRUJQVlA4WAoAAAAwAAAAJwAAJwAAQUxQSDICAAANkHDb1hnJ2k/b9ti2bdu2bdu2bdu2bbttdxcayaAq+TIRMQGote/frJgvUW8ubDWgpUPf8fzrW6JJy2Xb9OI894Lx3ulAcrarmH1a3q4Jojz3w5HllkDgCd3YDrVH9Y4TtAB53jtMSm8XFJ1es9EUMfVzsVCPwpn2k/v/uipkKh/PonhJ2/yT54sIyMcMlCduHVf9W7iAiiS+VsHJOh7lngjIQ4SlmuhM/7zfBTiThFopxdU5RYDO0TlVVmHhhA6BP3P7p8eq8LLhp4jHFTwLP1DRHPmJiJDIsjOWGBTZD+E5QudOL1tjpaLRMEfMGUOHmeFbZTMW/QM4guBhw0uscp4QbiJgscSbLaKiu82s1nnS64fBZK9WDB7MRXhgn+ZDAhpVzg6QtuEcGhomn2zbpbQl0rPDJ9A4/OCBr57E8l+mxKC9a7miAU4WgKQLf/88UVjFwY0wa+kYULTIue2PhBTeZgVkBsbKgIVXTiuHrn2lfh9VWQ/rjvTh2NU3mJRjI0vW71iw2tp9azOU2W2RiBj9BaWGF1dPFVqZe67TKKOi5TIXp6LaeHrhgqa9i4xVMgoO7EdkRN+uXYfYrDJXsA9nTyFW7tej5uIdn01ZLiV4LqINfRflXTheMlHHgfmID909pan+honuBN3RgL01c3Tf+49jJdajZequoXUe6YBCEhc14WLjLA7fgWrof2nzMZdTgU9AQZK7WmuSEeWSMxBwxncFWnvEA1eqOaK17jkAVlA4IC4AAACQAwCdASooACgAPp1OokylpCMiI4gAsBOJaQAAFOPl3QyCqPgAAP77ZQAAAAAA";
    heart = "data:image/webp;base64,UklGRqICAABXRUJQVlA4WAoAAAAwAAAAJwAAJwAAQUxQSE4CAAANkHDbtrGtuvdn27ZtZNt9tm3btm37y7Zt27Z7EV9WREwA/tNsek5mMuyvLg4eIlDgmOJoKEJ8cqr3KomaeXGiACCmb89XOvYDAMuaWDIAdhkz+5clOyiwp0wB3p64S5S2VDBOfJDyFdwVYsCjY8/YlS0kpyYeyiP+wdYO3I49DODpSbU6vUhrRwwCl0NuAcS752cUqGaqeJMAlqwfGCrHX8n744K8ViwDfnQ04K/f1pVFOzjJlf2A7RSsGwHlz9G27t5AzSVQfhlptzJr62HE4UY+qCVEukzB4Q2gluiXrBdRoqqLElD/KSUNOaD+TWvc0st+eL2XBpxYCprHZ0p4W2EPaCbR9uqeqZUWdtFGz1NmWmJ4wgy3VcXYQWSG75zs74REXzOBLN7dVTY7xQRGuHvccvnOzwzjNcTxYXtFhUMMm0LG8B4x49BqhoXj/CuUxi4V7mWQK1AKjKmYlpc/ZIh8NA49BT4HVms0u39ggEA33kYBwKXeAvOgoO9046oHkvDXxi9RdjYJBDpx1APloBhr4RBi4kunVmDwFCWyx0Jnj2Wen+jA1wn0bQOVhKCZLnb+rs9pkujDj4bToPprqH6kbXrAPRo0q4HKe6DxeyJngWltyFmqjKvxI+k7aC8606XaXzNKxdowfPMAXYd729QaDzUR/8IeMAVPAkDn7VktRhUskQQAnJXAZV/Q/UZo7Dy/2WEvId76AztKwcCHAX6rVnv5sbQAky1gKMFeP9u68Qd+ZFwAo/MfF6jjQxQrGE5uHA9HDZjyeB7+aVZQOCAuAAAAkAMAnQEqKAAoAD6dTqJMpaQjIiOIALATiWkAABTj5d0Mgqj4AAD++2UAAAAAAA==";
    cartImage = "data:image/webp;base64,UklGRvwBAABXRUJQVlA4WAoAAAAwAAAAJwAAJwAAQUxQSKgBAAANkENr2yFJb7Xd9Z+xwpm1ldm27cyKbCu0N7KizRjZtlH710yb46++UR4RE4Am0OFDWbTulGEzWykof3zieh2JM6ju7zYjOjNYFwUXgOiph+g41TFm4Qidz3wAuLIUwINbO4Z3nLyinG2AFVdOo/rnFVOHT73/km0BkstRc2zVLveYs1yWFriH2j9qnYdfSzM5FLwl4G1xRjjCYJk61BWJodcKwjdkHLaHr51OGtici+qFbQiAvbvFNfjFbpp/JL4/UXo4vz0ltCmM3Uy2LVp4rJTkM+HgJfOh3Bt7CUv6yTnRkfNFqozkAjSUKzCuZdjNYZIK/IYCxt85UHWSAH7w/MiHkEZ+wlzO8DPPiAr8ghmMv3Kh6iSBEBDT8l9RXjV/a0Ek7RbSgASSQ4MKZedlPwApOKC9ArX8LjhU6GDWVVVvEAL/uaQQ0oBeb2T9sLigc+mqL5wkZAGSSwpTxl9Cfp0g7ychF9C5dJWWD0guKZD/g5CBRIwraLdmaAQFygQnUyQJpZxwdpR3Yw4TELkA4ufVa3IUpvKfm0E+tz4KbhsMRkvLueo/VlA4IC4AAACQAwCdASooACgAPp1OokylpCMiI4gAsBOJaQAAFOPl3QyCqPgAAP77ZQAAAAAA";
    Page$5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let cartItems = [];
      let total = 0;
      return `<div${add_attribute("class", "cursor-default z-20 absolute top-5 left-0 lg:w-[30vw] w-[90vw] bg-white border border-gray-300 px-4 py-4  hidden group-hover:flex", 0)}><div class="flex flex-col w-full justify-start items-start">${each(cartItems, (cartItem, index7) => {
        return `<div class="flex flex-col w-full border-b border-b-gray-300 py-4"><div class="flex flex-row relative pr-5"><div class=""><img${add_attribute("src", `https://admin.souqpack.com/resources/uploads/products/webp/w245/${cartItem.img.replace(".png", ".webp").replace(".jpg", ".webp").replace(".jpeg", ".webp")}`, 0)} alt="cart item" class="w-20 h-20"></div> <div class="flex flex-col justify-start items-start"><span style="font-family: RobotoMedium;"><span style="font-family:RobotoBold;">${escape(cartItem.qty)}</span> X ${escape(cartItem.title)}</span> <span>\u0627\u0644\u0645\u062C\u0645\u0648\u0639: ${escape(cartItem.price * cartItem.qty)} \u0631.\u0633</span></div> <button name="Remove Item" title="Remove Item" class="absolute top-2 right-2" data-svelte-h="svelte-1qrf00k">X</button></div> </div>`;
      })} <hr class="w-full"> <div class="flex flex-row justify-between items-center py-4 w-full"><span class="text-xl" style="font-family:RobotoBold;" data-svelte-h="svelte-x93z9a">\u0627\u0644\u0645\u062C\u0645\u0648\u0639:</span> <span class="text-xl" style="font-family:RobotoBold;">${escape(total)} \u0631.\u0633</span></div> <hr class="w-full"> <div class="flex flex-row justify-between items-center py-4 w-full"><div class="w-1/2 flex flex-row items-center justify-center" data-svelte-h="svelte-ll3l15"><a title="Cart" aria-label="Cart" href="/cart" class="rounded-md border-2 border-black text-black px-4 py-1" style="font-family: RobotoMedium;">\u0639\u0631\u0636 \u0627\u0644\u0639\u0631\u0628\u0629</a></div> <div class="w-1/2 flex flex-row items-center justify-center"><button class="rounded-md border-2 border-[#f9ca03] bg-[#f9ca03] px-4 py-1 text-white" style="font-family: RobotoMedium;" data-svelte-h="svelte-bha8ds">\u062F\u0641\u0639</button></div></div></div></div>`;
    });
    Page$4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let totalCart = 0;
      let searchText = "";
      cart.subscribe((val) => {
        totalCart = val.total;
      });
      return `<div dir="rtl" class="flex flex-row w-full justify-center border-b border-b-grey-400"><div class="flex cursor-default flex-row items-center justify-between max-w-[1440px] w-full px-5 py-7"><div class="flex flex-row items-center lg:w-1/4 w-1/2" data-svelte-h="svelte-ra5cuj"><a href="/"><img${add_attribute("src", logo, 0)} alt="Souqpack" class="w-[164px] h-11"></a></div> <div dir="rtl" class="hidden lg:flex flex-row items-center lg:w-2/4 w-1/2"><div class="border border-gray-400 rounded-full bg-[#f5f5f5] flex flex-row justify-between items-center w-full relative overflow-hidden"><form class="w-full"><input class="text-xl px-4 ml-2 py-3 bg-[#f5f5f5] rounded-full w-full" placeholder="  \u0627\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0628\u062D\u062B"${add_attribute("value", searchText, 0)}></form> <button class="bg-[#f9ca03] px-6 flex flex-row justify-center items-center absolute left-0 top-0 bottom-0" data-svelte-h="svelte-k6wucw"><img${add_attribute("src", search, 0)} class="w-4 h-4" alt="Search"></button></div></div> <div class="flex flex-row items-center justify-end lg:w-1/4 w-1/2"><div class="flex flex-row items-center gap-4"><a href="/login" data-svelte-h="svelte-smcahh"><img${add_attribute("src", user, 0)} alt="user" class="w-5 h-5"></a> <a href="/" class="" data-svelte-h="svelte-154o1d6"><img${add_attribute("src", heart, 0)} alt="Wishlist" class="w-5 h-5"></a> <button class="flex flex-row items-center relative group"><img${add_attribute("src", cartImage, 0)} alt="Cart" class="w-5 h-5"> <span class="italic">${escape(totalCart)} \u0631.\u0633</span> ${validate_component(Page$5, "CartComponent").$$render($$result, {}, {}, {})}</button></div></div></div></div>`;
    });
    Page$3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { data } = $$props;
      let searchText = "";
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      return `<button id="mobile-menu-btn" data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" type="button" class="inline-flex items-center p-4 pl-0 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" data-svelte-h="svelte-1gppr64"><span class="sr-only">\u0641\u062A\u062D \u0627\u0644\u0634\u0631\u064A\u0637 \u0627\u0644\u062C\u0627\u0646\u0628\u064A</span> <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path></svg></button> <div class="lg:hidden flex flex-row items-center w-full mr-2"><div class="border border-gray-400 rounded-full bg-[#f5f5f5] flex flex-row justify-between items-center w-full relative overflow-hidden"><form class="w-full"><input class="text-xl px-4 ml-2 py-3 bg-[#f5f5f5] rounded-full w-full" placeholder="  \u0627\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0628\u062D\u062B"${add_attribute("value", searchText, 0)}></form> <button class="bg-[#f9ca03] px-6 flex flex-row justify-center items-center absolute left-0 top-0 bottom-0" data-svelte-h="svelte-1dznndj"><img${add_attribute("src", search, 0)} class="w-4 h-4" alt="Search"></button></div></div> <aside id="mobile-menu" class="fixed top-0 left-0 right-0 z-40 w-full h-screen transition-transform -translate-x-full flex flex-row" aria-label="Sidebar"><div class="h-full lg:w-[30%] w-[70%] px-3 py-4 overflow-y-auto bg-gray-50"><div class="flex flex-col w-full h-full">${data && data.props && data.props.cats ? `${each(data.props?.cats, (cat) => {
        return `<div class="group relative cursor-pointer "><div class="flex flex-row items-center bg-white menu-opener"><img loading="lazy"${add_attribute("src", `https://admin.souqpack.com/resources/uploads/categories/webp/output20/${cat.image.replace(".png", ".webp").replace(".jpg", ".webp").replace(".jpeg", ".webp")}`, 0)} alt="icon" class="w-5 h-5 mr-1"> <a href="/" class="menu-hover ml-2 my-2 py-2 font-medium text-black text-sm">${escape(cat.title)} </a></div> <div class="hidden menu-to-be-opened ml-2 w-full h-auto flex-col bg-white py-1 text-gray-800 shadow transition-all duration-300 ease-in-out">${each(cat.subs, (sub) => {
          return `<div class="flex flex-row items-center border-b border-b-[#ccc] ml-1 mr-1 hover:text-[#f9ca03] hover:border-b-[#f9ca03] text-black px-5 min-w-[140px]"><span><img loading="lazy"${add_attribute("src", `https://admin.souqpack.com/resources/uploads/categories/webp/output64/${sub.image.replace(".png", ".webp").replace(".jpg", ".webp").replace(".jpeg", ".webp")}`, 0)} alt="icon" class="w-16 h-16 mr-1"></span> <a href="/" class="menu-hover my-1 py-2 text-sm">${escape(sub.title)}</a> </div>`;
        })}</div> </div>`;
      })}` : `<h1 data-svelte-h="svelte-10esdnt">\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0641\u0626\u0627\u062A</h1>`}</div></div> <div class="h-full w-[30%] lg:w-[70%] bg-black bg-opacity-40" id="mobile-menu-area"></div></aside>`;
    });
    Page$2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { data } = $$props;
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      return `<div dir="rtl" class="flex flex-row w-full justify-center"><div class="flex flex-row items-center max-w-[1440px] w-full px-5">${validate_component(Page$3, "Mobilemenu").$$render($$result, { data }, {}, {})} <div class="hidden lg:flex flex-row items-center">${data && data.props && data.props.cats ? `${each(data.props?.cats, (cat) => {
        return `<div class="group relative cursor-pointer py-2 pill"><a href="${"/category/" + escape(cat.slug, true)}" class="flex items-center justify-between bg-white mr-4"><img loading="lazy"${add_attribute("src", `https://admin.souqpack.com/resources/uploads/categories/webp/output20/${cat.image.replace(".png", ".webp").replace(".jpg", ".webp").replace(".jpeg", ".webp")}`, 0)} alt="icon" class="w-5 h-5 mr-1"> <span class="menu-hover my-2 py-2 font-medium text-black text-sm">${escape(cat.title)} </span></a> <div class="invisible absolute z-50 flex popup group-hover:w-[35vw] group-hover:h-auto w-0 h-0 flex-row flex-wrap bg-white py-1 text-gray-800 shadow group-hover:visible transition-all duration-300 ease-in-out">${each(cat.subs, (sub) => {
          return `<a href="${"/category/" + escape(sub.slug, true)}" class="flex flex-col justify-center items-center border-b border-b-[#ccc] ml-1 mr-1 hover:text-[#f9ca03] hover:border-b-[#f9ca03] text-black px-5 min-w-[140px]"><span><img loading="lazy"${add_attribute("src", `https://admin.souqpack.com/resources/uploads/categories/webp/output64/${sub.image.replace(".png", ".webp").replace(".jpg", ".webp").replace(".jpeg", ".webp")}`, 0)} alt="icon" class="w-16 h-16 mr-1"></span> <a href="/" class="menu-hover my-2 py-2 text-sm">${escape(sub.title)}</a> </a>`;
        })}</div> </div>`;
      })}` : `<h1 data-svelte-h="svelte-10esdnt">\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0641\u0626\u0627\u062A</h1>`}</div></div></div>`;
    });
    Page$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { data } = $$props;
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      return `<main class="bg-white">${validate_component(Page$6, "Blackbar").$$render($$result, {}, {}, {})} ${validate_component(Page$4, "Logosearchbar").$$render($$result, {}, {}, {})} ${validate_component(Page$2, "Navigationbar").$$render($$result, { data }, {}, {})} </main>`;
    });
    fb = "data:image/webp;base64,UklGRloDAABXRUJQVlA4WAoAAAAwAAAAYgAAXAAAVlA4TDsDAAAvYgAXEIeAoG3beNuBnD/J0EDQtm287UDOn2QIsm2akdxf8gKBFG5wgf4fgPcooCBQB7sUABiSJNu2UilVnqKFcOY/Wy5+zj1IrxoR/YcgSW7baC/JjDhkQD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMNzu07RExDJN99vwe3Pn2xQREREREREREdPt/EtP1/eR5/QYx/ExPd8Hrj8ychrn2KTyuF4+UnO5PpaNnHk8/cKK+WXkL0XS3zqwPVx3l/20Pa0c6uDssh1z3nd0+fDU8bCRtufg44U1NQx+7HbbFLHcSgi8LRHTaZ+fZ8R86SHxs1rPEc/TLj8buYVE7vM9bcQWM2KqP21jRzGz22HVt0bMp2qBzhHXWktfYrmk/+l/y5tjHL8etsRyLl50S+ts8/Dv+H5pW1M59onIBIc+IsGQNlQozjyr12D1GRmxFirO2MjOqsbHUNhoSxJchTmWU1Zw35Bh+xJz1XzjQZqt35AirE0XndL+9uAlxL4ZRerP90Oygt7cQy/ufc4oZ5MZs/rrxAddysX4ZshFn3WiU12LPjY3WoBOt12RazZlTKrGMAyPDVv4HoZhGM5pMxhKZi7dV7xvT7q2kol743AZkvJtel6x8lmEvHE/14UFWEkrQpN1L91d2r7urEN242pr/Wc12ZbhlKevBFkjGsdxeq81xnEcVxe9L6pMvgMlw3UoGc5rYh3y20rssQ55eyzxKnXIe5Ua31iGvG+s8fBlyHv4I8SpQ0TbQ+QMVZlPPzozn7L8rR9d+VtdFlqEbBZamEvXIJlLV1YENUhWBKV1TQmSdU1pdVaCXHVWXGNWIFVjllfKBUhVykeo94/QtThC7+UQHaQj9MGO0M07QE/yCJ3VI/SHD9DlPkKv/vffOBzgvcnPv/35//LtOQA=";
    yt = "data:image/webp;base64,UklGRmQDAABXRUJQVlA4WAoAAAAwAAAAYgAAXAAAVlA4TEUDAAAvYgAXENeguG3bSEn6jRfo+e7++3kNxW3bRkrSb7xAz3f338+K27aNiPzjCdLj2/0HrEAghRtcgN67AGAMbAAbKID9AZnYAABYSmtN3UlK/7/Wmuac1pqk1N1Bsm3bUupM66sinNSJ//+jgI8rB28vjYj+M5AkpRGXTKdURvwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgOPl2nVDRAxdd70cP69vf+kiIiIiIiIiIqK77D+pdP7a8uhupZRb9/jacP6Qll3pY+bK7XxYxOZwvg0zOn3ZfcKI/qXl9BZKp7FhLpw35303l0YKraDsME+z37Z1WCitKMyobdl4eyFNDoFvm63WRQyXFAQvQ0S32+Z5RPSHNSgui3Uf8dht8szoJiK5zd3NyCYTosufbSZHMrGnybJXjeh32QztI865mj7EsDhb1mRDDPvkQdVVcxadxmS2vcrMBpI5NSWyc5HUyWxNFJwSUap26PMQ7mPYbWXqhuiz+icaVFE+Hk+llFJKKaWUUkoppZTT8birfqbuJGmZvstKcI+IiIiIiErg8OKE74fKZ5TPHGGZzMOyms1+e1VhUtyaMdonqdWy954ChrX3yPZlHz8pclK9huvqu0aJpOpUXxacBJiEslbNiDVrwnhPgXtNDY4pPcty0yXAZOSWpTKl4zpReMXIX3++vzewxt9rxshHBdMaPJ+/v9XvGi0e48AEGFFbCc9/v96ACt5vw7K0j355LTyff39WoRIJjLq2fq7JMK6El0J1jap53B6+FH6sgiZeTTQ38VsT+viJVmWkRdWqNGEbm7DwLfipJrxtEzFDE5HPNvHbkBy/NRGFthBLN7EjaGJf08LurIU9ZhM75Rb2+y1kLVrIvTSRQWohD9ZCNq+BnGQLmdUW8sMNZLlbyNV//olDA+cmH3/68//l6TkA";
    sc = "data:image/webp;base64,UklGRs4DAABXRUJQVlA4WAoAAAAwAAAAYgAAXAAAVlA4TK8DAAAvYgAXEIeAoG3beNuBnD/J0EDQtm287UDOn2QIsm2akdxf8gKBFG5wgf4fgPcooCBQB7sUABiQbNuWIe2oK8Gb/2x9gudJvWxE9N+hbCtxQzeLhlKUx5I/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHB9vLpuiIih616P69+bOz+6iIiIiIiIiIjoHue/NLr/cr7d+/l8vrvvL+P+RzinZx/Trrzvl0VtLvf3MKnTP09/YUU/49xSKt1GxjS477733TQaLbTBssMk5rwvd1gYbRhMqu3JfM9MU2Pg926/1kUMjxIFH0NEd9rn9Y3oL1tUXD7WfcT3tMtrUrdQyX2e3aRssSG6emmTOYqN3YRV/2pEf6re0D7iXuvpQwyL0qqEDTGcixc9sja63h7X6zn7o21NJa8pmdRnQvYZ6D5OOYM0VuF2NlPnvG4hSE2emtvWwoPzjHim8HxYjoTNUFmFq6iP4ZQ6RevR9pIx+xB91XzSBj8ylidTH226SEr7zP3f9lxlpT5GITW+mISHLkWfJBit+WTerVLROyL1TJ3F5shF35VRSr+irw1G6ygL2xW5ZjuMdZR1g2vJzKWOciBcMvFqFq6ivIKvipXfUkpBw7iwgEbVMqDYzdwxkbCPOXU7MJv1zp32xJULc9mp9QtHX9suqwHjpuAxB8iVYJKBxxLKYEWS+ZOq70TZlDcHjmPgy1EJO+elKfrxvBJ20Un8bJGQuazEH1NolmQ3jEr6YwmqpFLM7JKWheRQpQYb16uPvEdOyXAKG2sQPjPe9MwgfE2cWi0CN6HKVPytx6miaLu44j2DlA2DeZl+Wom2VTnDsgNHLA+yfrmSM1RlPkun5scRtyDwrNJdyXzK8rdF1v2Tn/hpZpzW8re6LHQNtfI0VeGJLLQwl17xsUVKJNTruXRlRbDmo5fp0vea3Nm1l0RFUFrX5LKa75Knj36drmtKq7OsXccTN+9MZcvGVsgW15hpXLte23ZtqDEPUSkfod4/QtfiCL2XQ3SQjtAHO0I37wA9ySN0Vo/QHz5Al/sIvfq/f8fhAPdN/vzdn/+Xd88BAA==";
    tw = "data:image/webp;base64,UklGRsQDAABXRUJQVlA4WAoAAAAwAAAAYgAAXAAAVlA4TKYDAAAvYgAXEIeAoG3beNuBnD/J0EDQtm287UDOn2QIsm2akdxf8gKBFG5wgf4fgPcooCBQB7sUABiSZNuWUmlZgibCnf9sKT73cZVeNiL671C2lbhxYha0hiLLg/wBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgHv3GoYpIqZheHX33xu7dkNERERERERERAzd9Zfunn8pn+Hd9/17+PwlPH+EcunHWHfl/bztcnN7vqeVnbG//MKMcUN5NLH0mAnrzfPrez+sd7OEDkh2Wpe5fpc67dwduFlZ+ybxvRFNjYDfX3vbEDF1JQx2U8Rw+U7/RIy3Iyzuq/UY8bl8pa/sFjL5nWNYmS0WxFC/2iqOYmEvi1W/NWK8VG/oGPGstfQppt3VqhabYroWT0rfWvPSZU4lbaszX9DMhVS4nbuiLt7WQsXpI/rUD/0ew2NMl+PBt++7W4vYpxirxlMZXBv+wftPrL2tHv69f1mGi7RluSZ8vFPqJvrGJoD9i7gnl1k/a5RlcQ8JH/nGfhJw8pqlmzmja5FZPRJMtYah/f3b6RvM8Bq7/Ri/GHLRcwbbNpDn2nptiIJFjwuzWdv+g52wnvcGt12BNRdlzPR2R6euDW2xvxYzuJeMpIa2mMZfhNjfL0lb/kfuhEsGXrOEc3+0wYIREREp2m0S1aLbFTM/qci7GaQdbZkpzRML2oa1TP8PnVr4bmyptudO5FCfXWELEpht7fhaLcqZpBv5qm1evqTlynmgLc72u23fVbX3Jdi0tRJyixsYDzyXkNs0scVG+8Zj9eZtP6uyx9SvHLo22WOJV2kK1EfGm7xKjW9sgX+NxyYpbPKNNR6+KQTngzvpUpOHr4lTrWCnuTfEqaJo25putvc82lZhhoadfWVLZVAwxQxVyGef2WGuUbR43WSfU+RTht+OrNZSREjxWx0KTVf7e9tYwEhRaCGWzsVy7/q+7/vHfkLViKVPkRGcIq85Q3Z2hhzzFJnyGfL9M1QtzlB7OUUF6Qx1sDNU805QkzxDZfUM9eETVLnPUKv//S8OJ/hu8vNff/6//HoO";
    ins = "data:image/webp;base64,UklGRuADAABXRUJQVlA4WAoAAAAwAAAAYgAAXAAAVlA4TMIDAAAvYgAXEIeAoG3beNuBnD/J0EDQtm287UDOn2QIsm2akdxf8gKBFG5wgf4fgPcooCBQB7sUABiwbduq2swk5NLU6vn/vxUUCZG3PkT034EkqXGDb6QoeDkl/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAev5M0xIRyzT9PNP52q7PKSIiIiIiIiIipuf1THePPedver9er/f0t2c8TsK5vOYoWnk/blVpbo/3UsSZX5cz9Jg3nHuTSPeVUW4eX9f9VO5WhD5AdinDXL/LXSp3H9wU0b7JfG+g6QPw+2v/NkUszy4CPpeI6fKd4y9ivn0iYt2s54i/y1eOIm5HIb+zT0XYzkBM/UcrcHQGOw/W+18j5ktvhc4Rj76evsRSHa3XYEss186dng2ip5RSSimllFJK6dbwp7lPT14W8ihFvXMIPsgim9D7vh0Bklkd1ZmhrseNSo5qyVXXA7V2NJxXxKuu3Jwt2vdsKocC96I5lksdk00SfN0P2fdXSYgZ5yrsS8y92o8w2KSRnKbaEtUmhdQvubnTKPla5ZXj0ugd1xWust/ql3WQPr6Yw8NhIrk3xp0C8j0apGzyyQa3OnqVErwbS621U3mNkgbqKsuO3Om5LkZki6gq5fU7/b5uFSpaj7qYnR4L4tWW8lxBbN47e2ITb/NjVsnRY49aMxvjoR72BedP1Q9/SGkv15EbpC4tt2PaHbsqcd7u1Vevo/1ZQw0ix1Szq99rsfXfqEpzCFd+6Q49V8NtpRW0rLqKGrIBt1E2jbVjB1pFa6CNvZX7iji/xdUrdCB3Kx1Y+5qX22j1imKytbhQfKhCB5Fg9bXPx8pBuoE2eNVdP4+asazQYXr4Dm2jcAX5vRjt9N1TPZ59dBqCPcTPhvDHIaLKV2PjNrivc9jPY+OJInym5gh/ljy1E7/kqYz2UZ46S7atuF9btj1HzVA13Laa4TSVz+65sfLpVr9VO5b6rXm+31i/DVGFjlBLDzEjGGJe03l2Vmc2z85Sw+zsZHPMa9scc4iZ8gjz/RFWLUZYexliBWmEdbARVvMGWJMcYWV1hPXhAVa5R1irP/8XhwG+m5z+68//y6/nAA==";
    amarican_express = "data:image/webp;base64,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";
    mada = "data:image/webp;base64,UklGRoIEAABXRUJQVlA4WAoAAAAgAAAAMAAAHwAAVlA4TGMEAAAvMMAHAA11IaL/AWnbtp2NPKErqTudYm3btm3btm3btm3vfhrbnrVtuxhlmnaPlWPbtmpFc6EhmUtXyGgyzSEitXKvTUW2bdlWNNY59wWWQOFpD5Jm0h1kpVKmrN45ewUDR5ISDXAuzbLyhxQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFgpbmJ9ef1g/fHIk/z8/AIAu1hVHHXgK98FIPvma7GSTZQKADaeLp7JbhAJVvjTl1fPH1OKrCo//AGIWuZvv5FKBz3gbNnabf8VUHOvtWA7XiqxtZNL4Tv9vVp5Wu1Z1W1uJFjCyn/Cv8qKAr/YbL8sebXIOqY5YOfUPAGPMUhRrWLirYvL6Abi5ebk1R8ctA97q3DdPI+tOOnRjHM13F1+sLBbX2FnRygruzba74m2AF6KSTd2k5e7c7F3flzX4/UvbY0FVJd2e+K36htdiqmwiqipqNECkIJQcmql2n2vV+LGAvxEhWFKVKQQJXSf7aEjtqc0nQyAgd8igVEgxDp1q+sSyzz7vAug0TVuqNi5ah3bOtbRAgIpoEgKzIXO+xnlMcWNjSfW2dsFgLIVYNv2aeveElyQW+XmsmubEis/2Glvt3OSX91QCTWxeatHIyCgAVK4IQZesH4bQWG9Z/02KnJ6S6EjjAk3lIeOeqIs3AZQAikIDDFlE7xISNTqSUQr99qtkUKlHKDKXkFQUOo4Z5GZ3JUwZKeJWrRXF8nEM6TJ9IMaj7/+/nrkj/Vn/wGY08N1wi0ZKOIMy3z+D+J0SKAYF5w+hZ+iRcRpUMh2hrhgS+9lfc8pbxNO5vH951+2f/9+/v5Tjurz95+///ytPf4kr9flwYR3nJnmzsv3T59+yJ8Uuf6atpFHcQ4hbDDyWAQc+tS6h17y6y1ySEXj4JHcExPVjIYPkriEFkA/zp3yQSpt8sWN9b+zNd5+aimSW5+PUfd1v85M+4NoWex0rnPskT3igH0m2sO8rGtt81u06rputWZvVaoP51fqa7B1YalXj9pF8JUy5on4blWspU2SKNL7/6vN5lsJnIeUUTd2msxzGhgzm7rdvIqZ2rrM+W7tX96XhEEXuu3ryi1k58GxcstK4TPuJBhBDBgOwgT31m9y6xx3nOeTfCOFj2XVVhFVKaRwceu6/BY7DmSzlgv/zL1esR62h+ydaIFCHGIF4Bt7W/W0lB7Y+heJ7nGr4O6ousOKlSLqIGDetOArttnRKahiXP2eNCNd6ECGn+XbPJFpVsJSMBWNiZWeg7aIGRV7bd2Eyf6O1GOQTC7o1M3VMUdEP+b1esdTDNq+9t8OWbKKcj3YmeRusX6t7Uxe7aZ3FhNmlWKVuP9m+/cvkfVh7fFHaLPr5a1gunO5Awe9VzYKfDt21HwH6df8ATTA4s4v1PIXqaMZTj8DI+NgGd8WUQIKIONMBYARAA0AIKAH9Jp54pT/ukAAAA==";
    visa = "data:image/webp;base64,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";
    master_card = "data:image/webp;base64,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";
    location = "data:image/webp;base64,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";
    mail = "data:image/webp;base64,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";
    smartphone = "data:image/webp;base64,UklGRq4BAABXRUJQVlA4WAoAAAAwAAAAXAAAXAAAVlA4TI8BAAAvXAAXEGcSEQzbtnEcPMb5+95ioGDFKrZYZ0jdKyu96sQjXr2lf1Erlu7ITFdJAOi2bR1b9mdk23aftbNr3f8Npaen53dF9J+B20aKcsyM6QskSZIkSZIkSRre7z4BAAAAAAAAAAAA8NTdGZYkSZIkSZIkhVZjjTeAiC2vzfGI1egFPF/atm3btm3btm3btm3btm378hkuRuNxCPfrlYj7oLJxD4fRVjJ7y8OMFPXwLT1wm421iiPQyUUm34GRWKs4CbWAlZk4q9VqtVqtVqudTQSsVQ2mYjEVxumXJ+VJeux+ye6vE7I20wsLCwsLCwsLC9NKgMgj/mnCf/qEusLV7dXRVMls3QF329k02Xz5IKdeNpNk6AbOt8/hZihFFt5oF1Vs87qQIutwJOkY1lJk7pVeUcU+r7MpUh7AVf0a+uVQonnY0MlWnj46+uXgyaIa5KDra771yGN7PhOySoV3g/zr7ru0uLJY+oH7jmrtN6oRb2jVd2t/kHjeIOWkRCM0KRGc8djrPkZsewzPeAgA";
    apple = "data:image/webp;base64,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";
    playstore = "data:image/webp;base64,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";
    innovation = "data:image/webp;base64,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";
    quality = "/_app/immutable/assets/quality.3892981c.webp";
    shiped = "data:image/webp;base64,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";
    css = {
      code: ".common-css.svelte-l4nkvq{color:#687188;font-size:14px}",
      map: null
    };
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { data } = $$props;
      const socialMediaIcons = [
        {
          name: "\u0641\u064A\u0633 \u0628\u0648\u0643",
          icon: fb,
          link: data.props?.footer.facebook
        },
        {
          name: "\u0627\u0644\u062A\u063A\u0631\u064A\u062F",
          icon: tw,
          link: data.props?.footer.twitter
        },
        {
          name: "\u0627\u0646\u0633\u062A\u063A\u0631\u0627\u0645",
          icon: ins,
          link: data.props?.footer.instagram
        },
        {
          name: "\u064A\u0648\u062A\u064A\u0648\u0628",
          icon: yt,
          link: data.props?.footer.youtube
        },
        {
          name: "\u0633\u0646\u0627\u0628 \u0634\u0627\u062A",
          icon: sc,
          link: data.props?.footer.snapchat
        }
      ];
      const souqpackappbutton = [
        {
          name: "Appstore",
          icon: apple,
          link: "https://apps.apple.com/us/app/souqpack/id1579159114"
        },
        {
          name: "Playstore",
          icon: playstore,
          link: "https://play.google.com/store/apps/details?id=com.souqpack.aapp"
        }
      ];
      const paymenticons = [
        {
          name: "\u0623\u0645\u0627\u0631\u064A\u0643\u0627\u0646 \u0625\u0643\u0633\u0628\u0631\u064A\u0633",
          icon: amarican_express,
          link: "https://www.facebook.com"
        },
        {
          name: "\u0645\u062F\u064A",
          icon: mada,
          link: "https://www.twitter.com"
        },
        {
          name: "\u0645\u0627\u0633\u062A\u0631 \u0643\u0627\u0631\u062F",
          icon: master_card,
          link: "https://www.instagram.com"
        },
        {
          name: "\u0641\u064A\u0632\u0627",
          icon: visa,
          link: "https://www.insyoutubeagram.com"
        }
      ];
      const contentt = [
        {
          content: "care@souqpack.com",
          name: "mail",
          icon: mail,
          link: "https://www.twitter.com"
        },
        {
          content: "+966552222048",
          name: "location",
          icon: smartphone,
          link: "https://www.twitter.com"
        },
        {
          content: "Saudi Arabia",
          name: "phone",
          icon: location,
          link: "https://www.instagram.com"
        }
      ];
      const links = [
        { link: "\u0645\u0646 \u0646\u062D\u0646", href: "/page/about-us" },
        // { link: 'Blogs', href:"/blog" },
        { link: "\u062D\u0633\u0627\u0628\u064A", href: "/dashboard" },
        { link: "\u062A\u0635\u0627\u0644", href: "/page/contact-us" },
        { link: "\u0623\u0633\u0626\u0644\u0629 \u0645\u062A\u0643\u0631\u0631\u0629", href: "/page/faq" }
      ];
      const Conditions = [
        {
          c: "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u0627\u0633\u062A\u0631\u062C\u0627\u0639",
          href: "/page/return-policy"
        },
        {
          c: "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629",
          href: "/page/privacy-policy"
        },
        {
          c: "\u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645",
          href: "/page/terms-and-conditions"
        }
      ];
      const copy_right = data.props?.footer.copy_right;
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      $$result.css.add(css);
      return `<div dir="rtl" style="background-color: #f7f8fb; font-family:Roboto;" class="w-full flex flex-row items-center justify-center pt-10"><div class="max-w-[1440px] w-full flex flex-row justify-center self-center px-4"><div class="flex flex-col items-center w-full divide-y "><div class="flex lg:flex-row flex-col lg:gap-0 gap-4 lg:items-start items-center w-full pb-10" data-svelte-h="svelte-mdi408"><div class="lg:w-1/3 sm:w-1/2 w-full flex flex-col"><div class="flex flex-row items-center"><div class="gol-wala p-4 flex items-center justify-center"><img alt="shiped" class="h-[40px] w-[40px] flex items-center justify-between"${add_attribute("src", shiped, 0)}></div> <div class="flex flex-col pl-0 pr-5"><div class="flex flex-row "><h4 class="text-lg pb-2" style="font-family: Roboto;">\u0634\u062D\u0646 \u0633\u0631\u064A\u0639</h4></div> <div class="w-full flex flex-col common-css svelte-l4nkvq"><span class="text-sm " style="font-family: Roboto;">\u0634\u062D\u0646 \u0633\u0631\u064A\u0639 \u0644\u062C\u0645\u064A\u0639 \u0623\u0646\u062D\u0627\u0621 \u0627\u0644\u0645\u0645\u0644\u0643\u0629</span></div></div></div></div> <div class="lg:w-1/3 sm:w-1/2 w-full flex flex-col"><div class="flex flex-row items-center"><div class="gol-wala p-4 flex items-center justify-center"><img alt="quality" class="h-[40px] w-[40px] flex items-center justify-between"${add_attribute("src", quality, 0)}></div> <div class="flex flex-col pl-0 pr-5"><div class="flex flex-row "><h4 class="text-lg pb-2" style="font-family: Roboto;">\u062C\u0648\u062F\u0629 \u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A\u0629</h4></div> <div class="w-full flex flex-col common-css svelte-l4nkvq"><span class="text-sm " style="font-family: Roboto;">\u0645\u0646\u062A\u062C\u0627\u062A \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u062C\u0648\u062F\u0629 \u0645\u0637\u0627\u0628\u0642\u0629 \u0644\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0648\u0627\u0644\u0645\u0642\u0627\u064A\u064A\u0633 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629</span></div></div></div></div> <div class="lg:w-1/3 sm:w-1/2 flex w-full flex-col"><div class="flex flex-row items-center"><div class="gol-wala p-4 flex items-center justify-center"><img alt="innovation" class="h-[40px] w-[40px] flex items-center justify-between"${add_attribute("src", innovation, 0)}></div> <div class="flex flex-col pl-0 pr-5"><div class="flex flex-row "><h4 class="text-lg pb-2" style="font-family: Roboto;">\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0628\u062A\u0643\u0631\u0629</h4></div> <div class="w-full flex flex-col common-css svelte-l4nkvq"><span class="text-sm " style="font-family: Roboto;">\u062A\u0642\u062F\u0645 \u0633\u0648\u0642 \u0628\u0627\u0643 \u062D\u0644\u0648\u0644 \u0645\u0628\u062A\u0643\u0631\u0629 \u0635\u062F\u064A\u0642\u0629 \u0644\u0644\u0628\u064A\u0626\u0629 \u062A\u0646\u0627\u0633\u0628 \u0639\u0644\u0627\u0645\u062A\u0643 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629.</span></div></div></div></div> <div class="border-top-1"></div></div> <div class="flex lg:flex-row flex-col lg:items-start items-center w-full pt-10 pb-5"><div class="w-1/2 flex flex-col"><div class="flex flex-row w-full" data-svelte-h="svelte-1509p6b"><div class="w-full"><span class="text-base text-[#687188]" style="font-family: Roboto;">\u0645\u0648\u0642\u0639 \u0633\u0648\u0642 \u0628\u0627\u0643 \u0644\u0644\u062A\u063A\u0644\u064A\u0641 \u0648\u0627\u0644\u062A\u0639\u0628\u0626\u0629</span></div></div> <div class="w-full flex flex-col pt-5 common-css svelte-l4nkvq">${each(contentt, (column) => {
        return `<div class="w-full mb-2"><span class="flex flex-row items-center"><span class=""><img${add_attribute("src", column.icon, 0)} alt="Email" style="width: 20px; height: 20px;"></span><span class="ml-3 text-base" style="font-family: Roboto;">${escape(column.content)}</span></span> </div>`;
      })}</div> </div> <div class="w-1/2 flex flex-col"><div class="flex flex-row " data-svelte-h="svelte-1nsni2e"><div class="text-lg font-bold" style="font-family: RobotoMedium;"><h2>\u0631\u0648\u0627\u0628\u0637 \u0645\u0641\u064A\u062F\u0629</h2></div></div> <div class="w-full flex flex-col pt-5 common-css svelte-l4nkvq">${each(links, (column) => {
        return `<div class="w-full p-1"><a${add_attribute("aria-label", column.link, 0)}${add_attribute("title", column.link, 0)}${add_attribute("href", column.href, 0)} class="text-base" style="font-family: Roboto;">${escape(column.link)}</a> </div>`;
      })}</div></div> <div class="w-1/2 flex flex-col"><div class="flex flex-row w-full" data-svelte-h="svelte-1kveion"><div class="w-full"><h2 class="text-lg" style="font-family: RobotoMedium;">\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645</h2></div></div> <div class="w-full flex flex-col pt-5 common-css svelte-l4nkvq">${each(Conditions, (column) => {
        return `<div class="w-full p-1"><a${add_attribute("title", column.c, 0)}${add_attribute("aria-label", column.c, 0)}${add_attribute("href", column.href, 0)} class="text-base" style="font-family: Roboto;">${escape(column.c)}</a> </div>`;
      })}</div></div></div> <div class="w-full flex flex-col items-center sm:items-start"><h2 class="pt-10 " style="font-family: RobotoMedium;" data-svelte-h="svelte-17vpc5l">\u062A\u0646\u0632\u064A\u0644 \u062A\u0637\u0628\u064A\u0642</h2> <div class="pt-2 flex flex-row gap-2 pb-2">${each(souqpackappbutton, (icon) => {
        return `<a${add_attribute("href", icon.link, 0)}><img alt="Download app" class="w-[120px] h-[40px] "${add_attribute("src", icon.icon, 0)}> </a>`;
      })}</div></div> <div class="border-top-1"></div> <div class="flex lg:flex-row flex-col w-full pt-10 pb-10 items-center lg:gap-0 gap-4"><div class="lg:w-1/3 l w-full flex flex-row lg:justify-start justify-center">${each(socialMediaIcons, (icon, index7) => {
        return `${index7 === 0 ? `<span class="common-css p-2 text-lg hidden sm:block svelte-l4nkvq" data-svelte-h="svelte-j6x3zf">\u0627\u062A\u0628\u0639</span>` : ``} <a${add_attribute("href", icon.link, 0)} aria-label="Social Icon"><img alt="social icon" class="w-12 h-12 flex-wrap"${add_attribute("src", icon.icon, 0)}${add_attribute("title", icon.name, 0)}> </a>`;
      })}</div> <div class="lg:w-1/3 w-full flex flex-col items-center justify-center"><div class="w-full flex flex-col common-css text-center svelte-l4nkvq"><span>${escape(copy_right)}(v1.1)</span></div></div> <div class="lg:w-1/3 w-full flex flex-row lg:justify-end justify-center flex-wrap">${each(paymenticons, (icon) => {
        return `<a${add_attribute("href", icon.link, 0)}><img alt="Payment" class="w-[60px] h-[40px] mr-1"${add_attribute("src", icon.icon, 0)}${add_attribute("title", icon.name, 0)}> </a>`;
      })}</div> <div class="border-top-1"></div></div></div></div> </div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/customize/_slug_/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page3
});
var Page$12, Page3;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/customize/_slug_/_page.svelte.js"() {
    init_ssr();
    init_page2();
    init_page();
    init_stores();
    Page$12 = create_ssr_component(($$result, $$props, $$bindings, slots$1) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      let { data } = $$props;
      const currentUrl = $page.url;
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      $$unsubscribe_page();
      return `${$$result.head += `<!-- HEAD_svelte-1cyssrb_START --><link rel="canonical"${add_attribute("href", currentUrl, 0)}><!-- HEAD_svelte-1cyssrb_END -->`, ""} ${`${validate_component(Page, "Loading").$$render($$result, {}, {}, {})}`}`;
    });
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { data } = $$props;
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      return `<main class="bg-[#fff]">${validate_component(Page$1, "Header").$$render($$result, { data }, {}, {})} ${validate_component(Page$12, "Customizer").$$render($$result, { data }, {}, {})} ${validate_component(Page2, "Footer").$$render($$result, { data }, {}, {})} </main>`;
    });
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  server: () => page_server_exports,
  server_id: () => server_id,
  stylesheets: () => stylesheets3
});
var index3, component_cache3, component3, server_id, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    init_page_server();
    index3 = 6;
    component3 = async () => component_cache3 ??= (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    server_id = "src/routes/customize/[slug]/+page.server.js";
    imports3 = ["_app/immutable/nodes/6.4a4dc9f5.js", "_app/immutable/chunks/scheduler.ce710c66.js", "_app/immutable/chunks/index.d2955eda.js", "_app/immutable/chunks/page.563aa2af.js", "_app/immutable/chunks/stores.fd4d60b9.js", "_app/immutable/chunks/singletons.16a76adf.js", "_app/immutable/chunks/page.123f46c5.js", "_app/immutable/chunks/auth.6035c411.js", "_app/immutable/chunks/stores.375802a7.js"];
    stylesheets3 = ["_app/immutable/assets/page.90ca9ceb.css"];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/dashboard/_page.js
var page_exports = {};
__export(page_exports, {
  load: () => load2,
  ssr: () => ssr
});
async function load2({}) {
  try {
    const response = await fetch("https://admin.souqpack.com/api/get_important_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        lang_id: 2,
        region_id: 1
      })
    });
    const data = await response.json();
    const footer_data = {
      email: data.data.email,
      phone: data.data.phone,
      address: data.data.address,
      footer_about: data.data.footer_about,
      facebook: data.data.facebook,
      instagram: data.data.instagram,
      twitter: data.data.twitter,
      youtube: data.data.youtube,
      snapchat: data.data.snapchat,
      copy_right: data.data.copy_right,
      footers: data.data.footers
    };
    const catsR = await fetch("https://admin.souqpack.com/api/get_categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        lang_id: 2,
        region_id: 1
      })
    });
    const dataCats = await catsR.json();
    var dataMine = { data: {} };
    const dataLocal = localStorage.getItem("login_data");
    console.log("dataLocal", dataLocal);
    if (dataLocal) {
      const token = JSON.parse(dataLocal).token;
      const myDataR = await fetch("https://admin.souqpack.com/api/get_mydashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          lang_id: 2,
          region_id: 1,
          token
        })
      });
      dataMine = await myDataR.json();
      dataMine = {
        data: dataMine.data
      };
    } else {
      dataMine = { data: {} };
    }
    console.log("data mine", dataMine);
    if (data.action == "success" && dataCats.action == "success") {
      return {
        props: {
          browser: false,
          langs: data.data.langs,
          regions: data.data.regions,
          cats: dataCats.data.categories,
          home: {},
          footer: footer_data,
          product: {},
          category: {},
          myData: dataMine
        }
      };
    } else {
      return {
        status: 500,
        // Server error status code
        error: "Failed to fetch data from the API."
      };
    }
  } catch (error2) {
    console.error("Error fetching data:", error2);
    return {
      status: 500,
      // Server error status code
      error: "Failed to fetch data from the API."
    };
  }
}
var ssr;
var init_page3 = __esm({
  ".svelte-kit/output/server/entries/pages/dashboard/_page.js"() {
    ssr = false;
  }
});

// .svelte-kit/output/server/entries/pages/dashboard/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page4
});
var Page4;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/dashboard/_page.svelte.js"() {
    init_ssr();
    init_page();
    Page4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { data } = $$props;
      console.log("data");
      console.log(data);
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      return `${`${validate_component(Page, "Loading").$$render($$result, {}, {}, {})}`}`;
    });
  }
});

// .svelte-kit/output/server/nodes/7.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4,
  universal: () => page_exports,
  universal_id: () => universal_id
});
var index4, component_cache4, component4, universal_id, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/7.js"() {
    init_page3();
    index4 = 7;
    component4 = async () => component_cache4 ??= (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    universal_id = "src/routes/dashboard/+page.js";
    imports4 = ["_app/immutable/nodes/7.7c1fc14e.js", "_app/immutable/chunks/scheduler.ce710c66.js", "_app/immutable/chunks/index.d2955eda.js", "_app/immutable/chunks/page.563aa2af.js", "_app/immutable/chunks/stores.fd4d60b9.js", "_app/immutable/chunks/singletons.16a76adf.js", "_app/immutable/chunks/auth.6035c411.js", "_app/immutable/chunks/page.123f46c5.js"];
    stylesheets4 = ["_app/immutable/assets/page.90ca9ceb.css"];
    fonts4 = [];
  }
});

// .svelte-kit/output/server/entries/pages/pay/_id_/_page.js
var page_exports2 = {};
__export(page_exports2, {
  csr: () => csr,
  load: () => load3,
  prerender: () => prerender,
  ssr: () => ssr2
});
async function load3({ params }) {
  {
    console.log("I'm trying to render on server");
    return;
  }
}
var prerender, ssr2, csr;
var init_page4 = __esm({
  ".svelte-kit/output/server/entries/pages/pay/_id_/_page.js"() {
    prerender = false;
    ssr2 = false;
    csr = true;
  }
});

// .svelte-kit/output/server/entries/pages/pay/_id_/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => Page5
});
var currency, myEmail, Page$13, Page5;
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/pay/_id_/_page.svelte.js"() {
    init_ssr();
    init_page2();
    currency = "\u0631.\u0633";
    myEmail = "customer@souqpack.com";
    Page$13 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { order } = $$props;
      let { payfort } = $$props;
      console.log("payfort", payfort);
      let total = order.total;
      let orderId = order.id;
      console.log("orderId", orderId);
      console.log("myEmail", myEmail);
      if ($$props.order === void 0 && $$bindings.order && order !== void 0)
        $$bindings.order(order);
      if ($$props.payfort === void 0 && $$bindings.payfort && payfort !== void 0)
        $$bindings.payfort(payfort);
      return `<main><div class="flex flex-row items-center justify-center w-full"><div class="flex flex-col max-w-[1280px] w-full self-center justify-start items-start px-5 py-5 bg-white shadow-xl"><div class="flex flex-col w-full"> ${`<div class="col-span-6"><h4>\u0627\u062F\u0641\u0639 $${escape(total)} $${escape(currency)} \u0644\u0625\u0643\u0645\u0627\u0644 \u0637\u0644\u0628\u0643</h4> <div class="flex justify-center"><form method="POST" action="https://checkout.payfort.com/FortAPI/paymentPage"><input type="hidden" name="access_code"${add_attribute("value", payfort.vals.access_code, 0)}> <input type="hidden" name="amount"${add_attribute("value", payfort.vals.amount, 0)}> <input type="hidden" name="command"${add_attribute("value", payfort.vals.command, 0)}> <input type="hidden" name="currency"${add_attribute("value", payfort.vals.currency, 0)}> <input type="hidden" name="customer_email"${add_attribute("value", payfort.vals.customer_email, 0)}> <input type="hidden" name="language"${add_attribute("value", payfort.vals.language, 0)}> <input type="hidden" name="merchant_identifier"${add_attribute("value", payfort.vals.merchant_identifier, 0)}> <input type="hidden" name="merchant_reference"${add_attribute("value", orderId, 0)}> <input type="hidden" name="return_url"${add_attribute("value", payfort.vals.return_url, 0)}> <input type="hidden" name="signature"${add_attribute("value", payfort.signature, 0)}> <button type="submit" class="block w-full px-4 py-2 text-center bg-[#f9ca03] text-white rounded " data-svelte-h="svelte-1l0in5z">\u062F\u0641\u0639 \u0645\u0639 \u0628\u0637\u0627\u0642\u0629 \u0627\u0644\u0627\u0626\u062A\u0645\u0627\u0646</button></form></div></div>`}</div></div></div></main>`;
    });
    Page5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { data } = $$props;
      const order = data.props?.order;
      const payfort = data.props?.payfort;
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      return `<main class="bg-[#f5f5f5]">${validate_component(Page$1, "Header").$$render($$result, { data }, {}, {})} <div class="h-5 w-full"></div> ${validate_component(Page$13, "Pay").$$render($$result, { order, payfort }, {}, {})} <div class="h-5 w-full"></div> <div class="h-5 w-full"></div> ${validate_component(Page2, "Footer").$$render($$result, { data }, {}, {})} </main>`;
    });
  }
});

// .svelte-kit/output/server/nodes/11.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  fonts: () => fonts5,
  imports: () => imports5,
  index: () => index5,
  stylesheets: () => stylesheets5,
  universal: () => page_exports2,
  universal_id: () => universal_id2
});
var index5, component_cache5, component5, universal_id2, imports5, stylesheets5, fonts5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/11.js"() {
    init_page4();
    index5 = 11;
    component5 = async () => component_cache5 ??= (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default;
    universal_id2 = "src/routes/pay/[id]/+page.js";
    imports5 = ["_app/immutable/nodes/11.d3eb19a5.js", "_app/immutable/chunks/scheduler.ce710c66.js", "_app/immutable/chunks/index.d2955eda.js", "_app/immutable/chunks/page.563aa2af.js", "_app/immutable/chunks/stores.fd4d60b9.js", "_app/immutable/chunks/singletons.16a76adf.js"];
    stylesheets5 = ["_app/immutable/assets/page.90ca9ceb.css"];
    fonts5 = [];
  }
});

// .svelte-kit/output/server/entries/pages/search/_slug_/_page.server.js
var page_server_exports2 = {};
__export(page_server_exports2, {
  load: () => load4,
  prerender: () => prerender2
});
async function load4({ params }) {
  try {
    const slug = params.slug;
    const response = await fetch("https://admin.souqpack.com/api/get_category_svelte", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        lang_id: 1,
        region_id: 1
      })
    });
    const bigData = await response.json();
    const data = bigData.data.get_important_data;
    const footer_data = {
      email: data.data.email,
      phone: data.data.phone,
      address: data.data.address,
      footer_about: data.data.footer_about,
      facebook: data.data.facebook,
      instagram: data.data.instagram,
      twitter: data.data.twitter,
      youtube: data.data.youtube,
      snapchat: data.data.snapchat,
      copy_right: data.data.copy_right,
      footers: data.data.footers
    };
    const dataCats = bigData.data.get_categories;
    const searchText = decodeURI(slug);
    const sdetails = await fetch(
      `https://admin.souqpack.com/api/search_web_new`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          slug,
          lang_id: 1,
          region_id: 1,
          order_by: "",
          order: "",
          is_guest: 0,
          guest_id: null,
          search: searchText,
          token: "6928fdb2ee9a04088b0036a27d611aef"
        })
      }
    );
    const searchDetails = await sdetails.json();
    if (data.action == "success" && dataCats.action == "success" && searchDetails.action == "success") {
      return {
        props: {
          browser: false,
          langs: data.data.langs,
          regions: data.data.regions,
          cats: dataCats.data.categories,
          home: {},
          footer: footer_data,
          product: {},
          category: {},
          search: searchDetails.data,
          searchText
        }
      };
    } else {
      return {
        status: 500,
        // Server error status code
        error: "Failed to fetch data from the API."
      };
    }
  } catch (error2) {
    console.error("Error fetching data:", error2);
    return {
      status: 500,
      // Server error status code
      error: "Failed to fetch data from the API."
    };
  }
}
var prerender2;
var init_page_server2 = __esm({
  ".svelte-kit/output/server/entries/pages/search/_slug_/_page.server.js"() {
    prerender2 = false;
  }
});

// .svelte-kit/output/server/chunks/menu.js
var list, menu;
var init_menu = __esm({
  ".svelte-kit/output/server/chunks/menu.js"() {
    list = "data:image/webp;base64,UklGRiQDAABXRUJQVlA4WAoAAAAwAAAAXAAAXAAAVlA4TAYDAAAvXAAXECdjIG2b+Je97dcQ4bBtI0cOHu25fB/Vtm3DrHYK77CAKoigAoJYRW0otdjIpcmt1GQQ9UFxGAAPphyXXfBXgxEKd0B9rxcAdW3bjm3Rnj1snF13xpVtXdmua/3XIT/Pc7/jPxH9Z+C2kaIc7TFPB34AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwcO3eQxEREREREREREYf2rlk4A625u66/q6qqqqqqqqqqqqp6d33b3O5selFVNbTxYlPv4ZcHVWP6+9915nTVuP54Z+6M5XZnXn+89Ie7W2uttdZaa6211lrb/fDjFb3qzCfPJYddUX5ySX8L/HDmemZmZmZmZmZmZmZmZmZmZmZmZmZmZmbmlf2LpmPe1aqqqqqqqqqqqhr7Eb6O6dhQ1aF/Mh2bu/BiOhbf6TC8PTXhJj9efDN5+9gEm/yV/7z/gMzOuVdjv8qnRxZ9nQn/r7tTfPSn+rFxkj/qWT/WT2PD+jF/ErNzouMm358erSOXDw7Y5JNP79GeIdq959EsaPetsU/4VmeOjeVwH770Cm+MG24s7e1Hrno+SgpW9Xevfzv/drCCnV85E4HBN+t2DNltx7plAAAAAAAAAAD8fxS6f7t+mGVYv3wmWr9fGG7TLvz0fuhujV+MtMa9deTmWB2ZcQX8K9HuSb2Ov5HI/deDERERERERERERERERERFDUlz7lk/J0ZfTR5H31k3Hyi7x783p2NKFl+P5QvjbhasTLj48m4u/FIxtb6211lprrbXWWmuttdZaa621IT/o5sUzHv/+22HJyeujE3UH5nyd2UrcxdeZMHHXJ7ieMHE3TcKrY0Lj8RSc7bjJH5fejG6fXfEny37fnu28/anZrjj8fH9sraR7lef5uCpP//rUzmvD61PXts6dAd99weDK2uqF/w9G7QA=";
    menu = "data:image/webp;base64,UklGRgACAABXRUJQVlA4WAoAAAAwAAAAXAAAXAAAVlA4TOEBAAAvXAAXEPcQEQwaSVIcvYFjelTwVj7CayzwE5Sx4YHjR2uRnQAAWbZtu0o0CR7lmHPe/W9nURflGr8cEf1n5LZtJAM5zaYBmrV9gc3NU5IkSZIkSZIkSZIkSfJyewaAs9uXGahPNxub+ySZwfh4ssNOHmeh3m9uklmId4vBFnfzUMerUy6uB62HqzMu/rN5iDWokiRJkiRJkiRJkiRJkiRJkh9AV93d3d3d3d3d3d3d3d3n79b5PqhXb6kBAFtvGn9i1Nsc+6D230Yaa8Kqqqqqqqqqqqqqqqqqw3frcB/UsfL8tZTuE3uf14NBB6/zUJ9v5xE+LAetHuah3p4+TiO82LHALzKtqz11fPcy5erDxU73uXx4nfLE3fG2n11XVVVV7eMwB6v/nXO8eDADdT32ywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwLszyta/Dj7Cv+agLrbzplmR4fIjIsOJs3kx7XKXzYtpZzOj8eojovEnzyO/j/HXJ6+XPnkB/EeRPvlu5m9n/PXJd+0/93mD66N5JyWOdyzw43knJY5sried8Tj9gDMe10cAAA==";
  }
});

// .svelte-kit/output/server/entries/pages/search/_slug_/_page.svelte.js
var page_svelte_exports4 = {};
__export(page_svelte_exports4, {
  default: () => Page6
});
var Page$14, Page6;
var init_page_svelte4 = __esm({
  ".svelte-kit/output/server/entries/pages/search/_slug_/_page.svelte.js"() {
    init_ssr();
    init_page2();
    init_menu();
    Page$14 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { data } = $$props;
      const products = data.props?.search;
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      return `<div dir="rtl" class="flex flex-row justify-center w-full"><div class="flex flex-row max-w-[1290px] w-full items-center"><div class="items-center w-full mt-14"><div class="flex flex-row text-2xl mt-4 mb-4">\u0628\u062D\u062B: ${escape(data.props?.searchText)}</div> <div class="flex flex-row items-center justify-between xl:mx-0 mx-4"><div class="relative inline-block text-left"><div><button type="button" class="inline-flex h-[40px] w-full justify-center gap-x-1.5 bg-white px-3 py-2 items-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" data-svelte-h="svelte-bd0puo">\u0627\u0644\u0641\u0631\u0632 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A
							<svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></button></div> ${``}</div> <div class="flex flex-row-reverse"><div${add_attribute("class", `w-10 h-10 m-1 rounded-lg ${"bg-white"} border-y-orange-400 hover:border-yellow-500 `, 0)}><button class="" data-svelte-h="svelte-cnqrci"><img class="p-3"${add_attribute("src", list, 0)} alt="list"></button></div> <div${add_attribute("class", `w-10 h-10 m-1 rounded-lg ${"bg-white"} border-y-orange-400 hover:border-yellow-500 0`, 0)}><button class="" data-svelte-h="svelte-1v0dbjo"><img class="p-3"${add_attribute("src", menu, 0)} alt="manue"></button></div></div></div> <div class="flex flex-row items-center flex-wrap lg:gap-3 w-full self-center mt-4 mb-4 xl:mx-0 mx-4">${each(products, (product, index7) => {
        return `<a${add_attribute("href", `/product/${product.slug}`, 0)}${add_attribute("class", "md:w-[247px] w-1/2 lg:pb-0 pb-2 h-auto " + (index7 % 2 == 0 ? " pr-1 lg:pr-0 " : "pl-1  lg:pr-0"), 0)}><div class="cursor-pointer flex flex-col border border-[#f5f5f5] hover:border-[#f9ca03] "><div class="flex flex-row justify-center items-center md:w-[245px] w-full md:h-[200px] h-full"><img${add_attribute("src", `https://admin.souqpack.com/resources/uploads/products/webp/w245/${product.image.replace(".png", ".webp").replace(".jpg", ".webp").replace(".jpeg", ".webp")}`, 0)} class="md:w-[245px] w-full h-full md:h-[200px]" alt="Product"></div>  <div class="p-[15px] min-h-[80px]"><span style="font-family: 'Roboto'; font-weight:500; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; text-transform: capitalize; display: -webkit-box; " class="text-[#222] lg:text-[18px] text-sm ">${escape(product.title)}</span> <span class="text-[#222] lg:text-[18px] text-sm " style="font-family: 'RobotoMedium'; font-weight:500;">${escape(product.real_price_text)}</span> </div></div> </a>`;
      })}</div></div></div></div> `;
    });
    Page6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { data } = $$props;
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      return `<main class="bg-[#fff]">${validate_component(Page$1, "Header").$$render($$result, { data }, {}, {})} ${validate_component(Page$14, "SearchComponent").$$render($$result, { data }, {}, {})} ${validate_component(Page2, "Footer").$$render($$result, { data }, {}, {})} </main>`;
    });
  }
});

// .svelte-kit/output/server/nodes/13.js
var __exports6 = {};
__export(__exports6, {
  component: () => component6,
  fonts: () => fonts6,
  imports: () => imports6,
  index: () => index6,
  server: () => page_server_exports2,
  server_id: () => server_id2,
  stylesheets: () => stylesheets6
});
var index6, component_cache6, component6, server_id2, imports6, stylesheets6, fonts6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/13.js"() {
    init_page_server2();
    index6 = 13;
    component6 = async () => component_cache6 ??= (await Promise.resolve().then(() => (init_page_svelte4(), page_svelte_exports4))).default;
    server_id2 = "src/routes/search/[slug]/+page.server.js";
    imports6 = ["_app/immutable/nodes/13.4f7878bf.js", "_app/immutable/chunks/scheduler.ce710c66.js", "_app/immutable/chunks/index.d2955eda.js", "_app/immutable/chunks/page.563aa2af.js", "_app/immutable/chunks/stores.fd4d60b9.js", "_app/immutable/chunks/singletons.16a76adf.js", "_app/immutable/chunks/menu.733ffb41.js"];
    stylesheets6 = ["_app/immutable/assets/page.90ca9ceb.css"];
    fonts6 = [];
  }
});

// .svelte-kit/output/server/chunks/internal.js
init_ssr();
var base = "";
var assets = base;
var initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
var public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page2);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
var options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  track_server_fetches: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\r\n<html lang="ar">\r\n	<head>\r\n\r\n		<meta charset="utf-8" />\r\n		<link rel="icon" href="' + assets2 + '/s_icon.webp" />\r\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\r\n		\r\n		' + head + '\r\n	</head>\r\n	<body data-sveltekit-preload-data="hover">\r\n		<div style="display: contents">' + body + "</div>\r\n	</body>\r\n</html>\r\n",
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1hwqtto"
};
function get_hooks() {
  return {};
}

// node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    const char = str[i];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i) + replacement;
      last_pos = i + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v, i) => i in thing ? stringify2(v) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c2) {
  return escaped[c2] || c2;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  for (const key2 in reducers) {
    custom.push({ key: key2, fn: reducers[key2] });
  }
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing))
      return indexes.get(thing);
    if (thing === void 0)
      return UNDEFINED;
    if (Number.isNaN(thing))
      return NAN;
    if (thing === Infinity)
      return POSITIVE_INFINITY;
    if (thing === -Infinity)
      return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0)
      return NEGATIVE_ZERO;
    const index8 = p++;
    indexes.set(thing, index8);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index8] = `["${key2}",${flatten(value2)}]`;
        return index8;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          str = `["Date","${thing.toISOString()}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0)
              str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index8] = str;
    return index8;
  }
  const index7 = flatten(value);
  if (index7 < 0)
    return `${index7}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing instanceof String)
    return stringify_string(thing.toString());
  if (thing === void 0)
    return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0)
    return NEGATIVE_ZERO.toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}

// .svelte-kit/output/server/index.js
init_chunks();
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
var DEV = false;
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var ENDPOINT_METHODS = /* @__PURE__ */ new Set([
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
  "OPTIONS",
  "HEAD"
]);
var PAGE_METHODS = /* @__PURE__ */ new Set(["GET", "POST", "HEAD"]);
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type.toLowerCase());
}
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
var HttpError = class {
  /**
   * @param {number} status
   * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
   */
  constructor(status, body) {
    this.status = status;
    if (typeof body === "string") {
      this.body = { message: body };
    } else if (body) {
      this.body = body;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
};
var Redirect = class {
  /**
   * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
   * @param {string} location
   */
  constructor(status, location2) {
    this.status = status;
    this.location = location2;
  }
};
var ActionFailure = class {
  /**
   * @param {number} status
   * @param {T} [data]
   */
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
};
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i - buffered, i + 1).filter((s22) => s22).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest)
        result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i + 1];
      const next_value = values[i + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered)
    return;
  return result;
}
function error(status, body) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  return new HttpError(status, body);
}
function json(data, init2) {
  const body = JSON.stringify(data);
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder$3.encode(body).byteLength.toString());
  }
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
var encoder$3 = new TextEncoder();
function text(body, init2) {
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    const encoded = encoder$3.encode(body);
    headers.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init2,
      headers
    });
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return (
    /** @type {import('../runtime/control.js').Redirect | import('../runtime/control.js').HttpError | Error} */
    error2
  );
}
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = Array.from(ENDPOINT_METHODS).filter((method) => method in mod);
  if ("GET" in mod || "HEAD" in mod)
    allowed.push("HEAD");
  return allowed;
}
function static_error_page(options2, status, message) {
  let page2 = options2.templates.error({ status, message });
  return text(page2, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options2, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = await handle_error_and_jsonify(event, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body, {
      status
    });
  }
  return static_error_page(options2, status, body.message);
}
async function handle_error_and_jsonify(event, options2, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return await options2.hooks.handleError({ error: error2, event }) ?? {
      message: event.route.id != null ? "Internal Error" : "Not Found"
    };
  }
}
function redirect_response(status, location2) {
  const response = new Response(void 0, {
    status,
    headers: { location: location2 }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (data${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function stringify_uses(node) {
  const uses = [];
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses?.parent)
    uses.push('"parent":1');
  if (node.uses?.route)
    uses.push('"route":1');
  if (node.uses?.url)
    uses.push('"url":1');
  return `"uses":{${uses.join(",")}}`;
}
async function render_endpoint(event, mod, state) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method] || mod.fallback;
  if (method === "HEAD" && mod.GET && !mod.HEAD) {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender3 = mod.prerender ?? state.prerender_default;
  if (prerender3 && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender3) {
    if (state.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    let response = await handler(
      /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      response.headers.set("x-sveltekit-prerender", String(prerender3));
    }
    return response;
  } catch (e3) {
    if (e3 instanceof Redirect) {
      return new Response(void 0, {
        status: e3.status,
        headers: { location: e3.location }
      });
    }
    throw e3;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (ENDPOINT_METHODS.has(method) && !PAGE_METHODS.has(method)) {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
var tracked_url_properties = (
  /** @type {const} */
  [
    "href",
    "pathname",
    "search",
    "searchParams",
    "toString",
    "toJSON"
  ]
);
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  allow_nodejs_console_log(url);
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  allow_nodejs_console_log(url);
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
function allow_nodejs_console_log(url) {
  {
    url[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(new URL(url), opts);
    };
  }
}
var DATA_SUFFIX = "/__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  return pathname.slice(0, -DATA_SUFFIX.length);
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server2) {
  const actions = server2?.actions;
  if (!actions) {
    const no_actions_error = error(405, "POST method not allowed. No actions exist for this page");
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id
        )
      });
    }
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: err instanceof HttpError ? err.status : 500
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error2;
}
function action_json_redirect(redirect) {
  return action_json({
    type: "redirect",
    status: redirect.status,
    location: redirect.location
  });
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server2) {
  const actions = server2?.actions;
  if (!actions) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions"
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new Error(
      `Actions expect form-encoded data (received ${event.request.headers.get("content-type")})`
    );
  }
  return action(event);
}
function uneval_action_response(data, route_id) {
  return try_deserialize(data, uneval, route_id);
}
function stringify_action_response(data, route_id) {
  return try_deserialize(data, stringify, route_id);
}
function try_deserialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e3) {
    const error2 = (
      /** @type {any} */
      e3
    );
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "")
        message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
async function unwrap_promises(object) {
  for (const key2 in object) {
    if (typeof object[key2]?.then === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
async function load_server_data({
  event,
  state,
  node,
  parent,
  // TODO 2.0: Remove this
  track_server_fetches
}) {
  if (!node?.server)
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    fetch: (info, init2) => {
      const url2 = new URL(info instanceof Request ? info.url : info, event.url);
      if (track_server_fetches) {
        uses.dependencies.add(url2.href);
      }
      return event.fetch(info, init2);
    },
    /** @param {string[]} deps */
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[
          /** @type {string} */
          key2
        ];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    route: new Proxy(event.route, {
      get: (target, key2) => {
        uses.route = true;
        return target[
          /** @type {'id'} */
          key2
        ];
      }
    }),
    url
  });
  const data = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr: csr2
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state, fetched, csr2, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  });
  const data = result ? await unwrap_promises(result) : null;
  return data;
}
function create_universal_fetch(event, state, fetched, csr2, resolve_opts) {
  return async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init2?.headers;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text2() {
          const body = await response2.text();
          if (!body || typeof body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
              method: event.request.method,
              request_body: (
                /** @type {string | ArrayBufferView | undefined} */
                input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
              ),
              request_headers: cloned_headers,
              response_body: body,
              response: response2
            });
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            return buffer;
          };
        }
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr2) {
      const get = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i)
        hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer.length;
      while (i)
        hash2 = hash2 * 33 ^ buffer[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  // special characters
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    else if (key2 === "age")
      age = value;
    else if (key2 === "vary" && value.trim() === "*")
      varyAny = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control && !varyAny) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder$2 = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c2 = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c2;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var BaseProvider = class {
  /** @type {boolean} */
  #use_hashes;
  /** @type {boolean} */
  #script_needs_csp;
  /** @type {boolean} */
  #style_needs_csp;
  /** @type {import('types').CspDirectives} */
  #directives;
  /** @type {import('types').Csp.Source[]} */
  #script_src;
  /** @type {import('types').Csp.Source[]} */
  #style_src;
  /** @type {string} */
  #nonce;
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    this.#use_hashes = use_hashes;
    this.#directives = directives;
    const d = this.#directives;
    this.#script_src = [];
    this.#style_src = [];
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    this.#script_needs_csp = !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0;
    this.#style_needs_csp = !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0;
    this.script_needs_nonce = this.#script_needs_csp && !this.#use_hashes;
    this.style_needs_nonce = this.#style_needs_csp && !this.#use_hashes;
    this.#nonce = nonce;
  }
  /** @param {string} content */
  add_script(content) {
    if (this.#script_needs_csp) {
      if (this.#use_hashes) {
        this.#script_src.push(`sha256-${sha256(content)}`);
      } else if (this.#script_src.length === 0) {
        this.#script_src.push(`nonce-${this.#nonce}`);
      }
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (this.#style_needs_csp) {
      if (this.#use_hashes) {
        this.#style_src.push(`sha256-${sha256(content)}`);
      } else if (this.#style_src.length === 0) {
        this.#style_src.push(`nonce-${this.#nonce}`);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...this.#directives };
    if (this.#style_src.length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...this.#style_src
      ];
    }
    if (this.#script_src.length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...this.#script_src
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = this.get_header(true);
    if (!content) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content=${escape_html_attr(content)}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /** @readonly */
  nonce = generate_nonce();
  /** @type {CspProvider} */
  csp_provider;
  /** @type {CspReportOnlyProvider} */
  report_only_provider;
  /**
   * @param {import('./types').CspConfig} config
   * @param {import('./types').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender: prerender3 }) {
    const use_hashes = mode === "hash" || mode === "auto" && prerender3;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f, r3) => {
    fulfil = f;
    reject = r3;
  });
  return { promise, fulfil, reject };
}
function create_async_iterator() {
  const deferred = [defer()];
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: async () => {
            const next = await deferred[0].promise;
            if (!next.done)
              deferred.shift();
            return next;
          }
        };
      }
    },
    push: (value) => {
      deferred[deferred.length - 1].fulfil({
        value,
        done: false
      });
      deferred.push(defer());
    },
    done: () => {
      deferred[deferred.length - 1].fulfil({ done: true });
    }
  };
}
var updated = {
  ...readable(false),
  check: () => false
};
var encoder$1 = new TextEncoder();
async function render_response({
  branch,
  fetched,
  options: options2,
  manifest: manifest2,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = new Set(client.imports);
  const stylesheets7 = new Set(client.stylesheets);
  const fonts7 = new Set(client.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s(base);
  if (!state.prerendering?.fallback) {
    const segments = event.url.pathname.slice(base.length).split("/").slice(2);
    base$1 = segments.map(() => "..").join("/") || ".";
    base_expression = `new URL(${s(base$1)}, location).pathname.slice(0, -1)`;
    if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
      assets$1 = base$1;
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data2 = {};
    for (let i = 0; i < branch.length; i += 1) {
      data2 = { ...data2, ...branch[i].data };
      props[`data_${i}`] = data2;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value
    };
    {
      try {
        rendered = options2.root.render(props);
      } finally {
        reset();
      }
    }
    for (const { node } of branch) {
      for (const url of node.imports)
        modulepreloads.add(url);
      for (const url of node.stylesheets)
        stylesheets7.add(url);
      for (const url of node.fonts)
        fonts7.add(url);
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state.prerendering
  });
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  };
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets7) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts7) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global = `__sveltekit_${options2.version_hash}`;
  const { data, chunks } = get_data(
    event,
    options2,
    branch.map((b) => b.server_data),
    global
  );
  if (page_config.ssr && page_config.csr) {
    body += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
      (path) => resolve_opts.preload({ type: "js", path })
    );
    for (const path of included_modulepreloads) {
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (options2.preload_strategy !== "modulepreload") {
        head += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
      } else if (state.prerendering) {
        head += `
		<link rel="modulepreload" href="${path}">`;
      }
    }
    const blocks = [];
    const properties = [
      assets && `assets: ${s(assets)}`,
      `base: ${base_expression}`,
      `env: ${s(public_env)}`
    ].filter(Boolean);
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties.push(`resolve: ({ id, data, error }) => {
							const { fulfil, reject } = deferred.get(id);
							deferred.delete(id);

							if (error) reject(error);
							else fulfil(data);
						}`);
    }
    blocks.push(`${global} = {
						${properties.join(",\n						")}
					};`);
    const args = ["app", "element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      blocks.push(`const data = ${data};`);
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id
        );
      }
      if (error2) {
        serialized.error = uneval(error2);
      }
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        "data",
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (options2.embedded) {
        hydrate.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      args.push(`{
							${hydrate.join(",\n							")}
						}`);
    }
    blocks.push(`Promise.all([
						import(${s(prefixed(client.start))}),
						import(${s(prefixed(client.app))})
					]).then(([kit, app]) => {
						kit.start(${args.join(", ")});
					});`);
    if (options2.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head += rendered.head;
  const html = options2.templates.app({
    head,
    body,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  if (!chunks) {
    headers.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers
  }) : new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller.enqueue(encoder$1.encode(chunk));
        }
        controller.close();
      },
      type: "bytes"
    }),
    {
      headers: {
        "content-type": "text/html"
      }
    }
  );
}
function get_data(event, options2, nodes, global) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof thing?.then === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data) => ({ data })
      ).catch(
        /** @param {any} error */
        async (error2) => ({
          error: await handle_error_and_jsonify(event, options2, error2)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data, error: error2 }) => {
          count -= 1;
          let str;
          try {
            str = uneval({ id, data, error: error2 }, replacer);
          } catch (e3) {
            error2 = await handle_error_and_jsonify(
              event,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data = void 0;
            str = uneval({ id, data, error: error2 }, replacer);
          }
          push(`<script>${global}.resolve(${str})<\/script>
`);
          if (count === 0)
            done();
        }
      );
      return `${global}.defer(${id})`;
    }
  }
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      return `{"type":"data","data":${uneval(node.data, replacer)},${stringify_uses(node)}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e3) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e3
    ));
  }
}
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      return (
        /** @type {Value} TypeScript's too dumb to understand this */
        node?.universal?.[option] ?? node?.server?.[option] ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state,
  status,
  error: error2,
  resolve_opts
}) {
  if (event.request.headers.get("x-sveltekit-error")) {
    return static_error_page(
      options2,
      status,
      /** @type {Error} */
      error2.message
    );
  }
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await manifest2._.nodes[0]();
    const ssr3 = get_option([default_layout], "ssr") ?? true;
    const csr2 = get_option([default_layout], "csr") ?? true;
    if (ssr3) {
      state.error = true;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({}),
        track_server_fetches: options2.track_server_fetches
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr: csr2
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state,
      page_config: {
        ssr: ssr3,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (e3) {
    if (e3 instanceof Redirect) {
      return redirect_response(e3.status, e3.location);
    }
    return static_error_page(
      options2,
      e3 instanceof HttpError ? e3.status : 500,
      (await handle_error_and_jsonify(event, options2, e3)).message
    );
  }
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
var encoder = new TextEncoder();
async function render_data(event, route, options2, manifest2, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n2, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n2 == void 0 ? n2 : await manifest2._.nodes[n2]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            },
            track_server_fetches: options2.track_server_fetches
          });
        } catch (e3) {
          aborted = true;
          throw e3;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error2),
              status: error2 instanceof HttpError ? error2.status : void 0
            }
          );
        })
      )
    );
    const { data, chunks } = get_data_json(event, options2, nodes);
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder.encode(data));
          for await (const chunk of chunks) {
            controller.enqueue(encoder.encode(chunk));
          }
          controller.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e3) {
    const error2 = normalize_error(e3);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(await handle_error_and_jsonify(event, options2, error2), 500);
    }
  }
}
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect) {
  return json_response({
    type: "redirect",
    location: redirect.location
  });
}
function get_data_json(event, options2, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  const reducers = {
    /** @param {any} thing */
    Promise: (thing) => {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        count += 1;
        let key2 = "data";
        thing.catch(
          /** @param {any} e */
          async (e3) => {
            key2 = "error";
            return handle_error_and_jsonify(
              event,
              options2,
              /** @type {any} */
              e3
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = stringify(value, reducers);
            } catch (e3) {
              const error2 = await handle_error_and_jsonify(
                event,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key2 = "error";
              str = stringify(error2, reducers);
            }
            count -= 1;
            push(`{"type":"chunk","id":${id},"${key2}":${str}}
`);
            if (count === 0)
              done();
          }
        );
        return id;
      }
    }
  };
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      if (node.type === "error" || node.type === "skip") {
        return JSON.stringify(node);
      }
      return `{"type":"data","data":${stringify(node.data, reducers)},${stringify_uses(
        node
      )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e3) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e3
    ));
  }
}
var MAX_DEPTH = 10;
async function render_page(event, page2, options2, manifest2, state, resolve_opts) {
  if (state.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page2.leaf]();
    return handle_action_json_request(event, options2, node?.server);
  }
  try {
    const nodes = await Promise.all([
      // we use == here rather than === because [undefined] serializes as "[null]"
      ...page2.layouts.map((n2) => n2 == void 0 ? n2 : manifest2._.nodes[n2]()),
      manifest2._.nodes[page2.leaf]()
    ]);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node?.server);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state,
        resolve_opts
      });
    }
    const branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            },
            track_server_fetches: options2.track_server_fetches
          });
        } catch (e3) {
          load_error = /** @type {Error} */
          e3;
          throw load_error;
        }
      });
    });
    const csr2 = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr: csr2
          });
        } catch (e3) {
          load_error = /** @type {Error} */
          e3;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e3) {
          const err = normalize_error(e3);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: text(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = await handle_error_and_jsonify(event, options2, err);
          while (i--) {
            if (page2.errors[i]) {
              const index7 = (
                /** @type {number} */
                page2.errors[i]
              );
              const node2 = await manifest2._.nodes[index7]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      let { data, chunks } = get_data_json(
        event,
        options2,
        branch.map((node) => node?.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched
    });
  } catch (e3) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state,
      status: 500,
      error: e3,
      resolve_opts
    });
  }
}
function get_cookies(request, url, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const default_path = normalized_url.split("/").slice(0, -1).join("/") || "/";
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} opts
     */
    get(name, opts) {
      const c2 = new_cookies[name];
      if (c2 && domain_matches(url.hostname, c2.options.domain) && path_matches(url.pathname, c2.options.path)) {
        return c2.value;
      }
      const decoder = opts?.decode || decodeURIComponent;
      const req_cookies = (0, import_cookie.parse)(header, { decode: decoder });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} opts
     */
    getAll(opts) {
      const decoder = opts?.decode || decodeURIComponent;
      const cookies2 = (0, import_cookie.parse)(header, { decode: decoder });
      for (const c2 of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c2.options.domain) && path_matches(url.pathname, c2.options.path)) {
          cookies2[c2.name] = c2.value;
        }
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    set(name, value, opts = {}) {
      set_internal(name, value, { ...defaults, ...opts });
    },
    /**
     * @param {string} name
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    delete(name, opts = {}) {
      cookies.set(name, "", {
        ...opts,
        maxAge: 0
      });
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    serialize(name, value, opts) {
      return (0, import_cookie.serialize)(name, value, {
        ...defaults,
        ...opts
      });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain))
        continue;
      if (!path_matches(destination.pathname, cookie.options.path))
        continue;
      const encoder2 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder2(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  function set_internal(name, value, opts) {
    const path = opts.path ?? default_path;
    new_cookies[name] = {
      name,
      value,
      options: {
        ...opts,
        path
      }
    };
  }
  return { cookies, new_cookies, get_cookie_header, set_internal };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers.append("set-cookie", (0, import_cookie.serialize)(name, value, options2));
  }
}
function create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header, set_internal }) {
  return async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return await options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie)
              request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename);
        const is_asset_html = manifest2.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await respond(request, options2, manifest2, {
          ...state,
          depth: state.depth + 1
        });
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str);
            set_internal(
              name,
              value,
              /** @type {import('cookie').CookieSerializeOptions} */
              options3
            );
          }
        }
        return response;
      }
    });
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
function validator(expected) {
  function validate(module, file) {
    if (!module)
      return;
    for (const key2 in module) {
      if (key2[0] === "_" || expected.has(key2))
        continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key2, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  return validate;
}
function hint_for_supported_files(key2, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key2)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key2)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
var valid_layout_exports = /* @__PURE__ */ new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config"
]);
var valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
var valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
var valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
var valid_server_exports = /* @__PURE__ */ new Set([
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
  "OPTIONS",
  "HEAD",
  "fallback",
  "prerender",
  "trailingSlash",
  "config",
  "entries"
]);
var validate_layout_exports = validator(valid_layout_exports);
var validate_page_exports = validator(valid_page_exports);
var validate_layout_server_exports = validator(valid_layout_server_exports);
var validate_page_server_exports = validator(valid_page_server_exports);
var validate_server_exports = validator(valid_server_exports);
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
var page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
async function respond(request, options2, manifest2, state) {
  const url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request.headers.get("origin") !== url.origin;
    if (forbidden) {
      const csrf_error = error(403, `Cross-site ${request.method} form submissions are forbidden`);
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let decoded;
  try {
    decoded = decode_pathname(url.pathname);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (base && !state.prerendering?.fallback) {
    if (!decoded.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    decoded = decoded.slice(base.length) || "/";
  }
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) + (url.searchParams.get(TRAILING_SLASH_PARAM) === "1" ? "/" : "") || "/";
    url.searchParams.delete(TRAILING_SLASH_PARAM);
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!state.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers = {};
  let cookies_to_add = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-cloudflare"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request,
    isSubRequest: state.depth > 0
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (route.page) {
        const nodes = await Promise.all([
          // we use == here rather than === because [undefined] serializes as "[null]"
          ...route.page.layouts.map((n2) => n2 == void 0 ? n2 : manifest2._.nodes[n2]()),
          manifest2._.nodes[route.page.leaf]()
        ]);
        if (DEV)
          ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (DEV)
          ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
        if (normalized !== url.pathname && !state.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
    }
    const { cookies, new_cookies, get_cookie_header, set_internal } = get_cookies(
      request,
      url,
      trailing_slash ?? "never"
    );
    cookies_to_add = new_cookies;
    event.cookies = cookies;
    event.fetch = create_fetch({
      event,
      options: options2,
      manifest: manifest2,
      state,
      get_cookie_header,
      set_internal
    });
    if (state.prerendering && !state.prerendering.fallback)
      disable_search(url);
    const response = await options2.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        for (const key2 in headers) {
          const value = headers[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(cookies_to_add));
        if (state.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location2 = response.headers.get("location");
      if (location2) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location2
        ));
      }
    }
    return response;
  } catch (e3) {
    if (e3 instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e3) : route?.page && is_action_json_request(event) ? action_json_redirect(e3) : redirect_response(e3.status, e3.location);
      add_cookies_to_headers(response.headers, Object.values(cookies_to_add));
      return response;
    }
    return await handle_fatal_error(event, options2, e3);
  }
  async function resolve(event2, opts) {
    try {
      if (opts) {
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (state.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          if (page_methods.has(method)) {
            response = await render_page(event2, route.page, options2, manifest2, state, resolve_opts);
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node = await manifest2._.nodes[route.page.leaf]();
            if (node?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response.headers.get("vary")?.split(",")?.map((v) => v.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: new Headers(response.headers)
            });
            response.headers.append("Vary", "Accept");
          }
        }
        return response;
      }
      if (state.error && event2.isSubRequest) {
        return await fetch(request, {
          headers: {
            "x-sveltekit-error": "true"
          }
        });
      }
      if (state.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state.depth === 0) {
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e3) {
      return await handle_fatal_error(event2, options2, e3);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
function filter_private_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(private_prefix) && (public_prefix === "" || !k.startsWith(public_prefix))
    )
  );
}
function filter_public_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(public_prefix) && (private_prefix === "" || !k.startsWith(private_prefix))
    )
  );
}
var Server = class {
  /** @type {import('types').SSROptions} */
  #options;
  /** @type {import('@sveltejs/kit').SSRManifest} */
  #manifest;
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest2) {
    this.#options = options;
    this.#manifest = manifest2;
  }
  /**
   * @param {{
   *   env: Record<string, string>
   * }} opts
   */
  async init({ env }) {
    set_private_env(
      filter_private_env(env, {
        public_prefix: this.#options.env_public_prefix,
        private_prefix: this.#options.env_private_prefix
      })
    );
    set_public_env(
      filter_public_env(env, {
        public_prefix: this.#options.env_public_prefix,
        private_prefix: this.#options.env_private_prefix
      })
    );
    if (!this.#options.hooks) {
      try {
        const module = await get_hooks();
        this.#options.hooks = {
          handle: module.handle || (({ event, resolve }) => resolve(event)),
          handleError: module.handleError || (({ error: error2 }) => console.error(error2)),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
        };
      } catch (error2) {
        {
          throw error2;
        }
      }
    }
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    if (!(request instanceof Request)) {
      throw new Error(
        "The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details"
      );
    }
    return respond(request, this.#options, this.#manifest, {
      ...options2,
      error: false,
      depth: 0
    });
  }
};

// .svelte-kit/cloudflare-tmp/manifest.js
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ??= value = fn();
  }
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set([".DS_Store", "a43b1d1a20cd94e11e186a4c84f460894a40c51a.jpeg", "assets/.DS_Store", "assets/icons/cart.webp", "assets/icons/heart.webp", "assets/icons/search.webp", "assets/icons/shopping-bag.png", "assets/icons/s_icon.webp", "assets/icons/user.webp", "assets/images/.DS_Store", "assets/images/logo.webp", "assets/images/sudiaflag.webp", "assets/images/sudiaflag2.webp", "assets/images/uaeflag.webp", "assets/images/uaeflag2.webp", "assets/sliders/.DS_Store", "assets/sliders/slide-2-1.webp", "assets/sliders/slide-2-2.webp", "assets/sliders/sliderbig/.DS_Store", "assets/sliders/sliderbig/1.webp", "assets/sliders/sliderbig/2.webp", "assets/sliders/sliderbig/3.webp", "assets/s_icon.webp", "favicon.png", "g/a43b1d1a20cd94e11e186a4c84f460894a40c51a.jpeg", "s_icon.webp"]),
    mimeTypes: { ".jpeg": "image/jpeg", ".webp": "image/webp", ".png": "image/png" },
    _: {
      client: { "start": "_app/immutable/entry/start.7cdc8210.js", "app": "_app/immutable/entry/app.b6e794d5.js", "imports": ["_app/immutable/entry/start.7cdc8210.js", "_app/immutable/chunks/scheduler.ce710c66.js", "_app/immutable/chunks/singletons.16a76adf.js", "_app/immutable/entry/app.b6e794d5.js", "_app/immutable/chunks/scheduler.ce710c66.js", "_app/immutable/chunks/index.d2955eda.js"], "stylesheets": [], "fonts": [] },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2))),
        __memo(() => Promise.resolve().then(() => (init__3(), __exports3))),
        __memo(() => Promise.resolve().then(() => (init__4(), __exports4))),
        __memo(() => Promise.resolve().then(() => (init__5(), __exports5))),
        __memo(() => Promise.resolve().then(() => (init__6(), __exports6)))
      ],
      routes: [
        {
          id: "/customize/[slug]",
          pattern: /^\/customize\/([^/]+?)\/?$/,
          params: [{ "name": "slug", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        },
        {
          id: "/dashboard",
          pattern: /^\/dashboard\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null
        },
        {
          id: "/pay/[id]",
          pattern: /^\/pay\/([^/]+?)\/?$/,
          params: [{ "name": "id", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 4 },
          endpoint: null
        },
        {
          id: "/search/[slug]",
          pattern: /^\/search\/([^/]+?)\/?$/,
          params: [{ "name": "slug", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 5 },
          endpoint: null
        }
      ],
      matchers: async () => {
        return {};
      }
    }
  };
})();
var prerendered = /* @__PURE__ */ new Set(["/page/contact-us", "/page/contact-us/__data.json", "/cart", "/cart/__data.json", "/login", "/login/__data.json", "/checkout", "/checkout/__data.json", "/", "/__data.json", "/signup", "/signup/__data.json", "/category/non-woven-bags-2-15", "/category/non-woven-bags-2-15/__data.json", "/category/plastic-bags-2-17", "/category/plastic-bags-2-17/__data.json", "/category/bags-2-1", "/category/bags-2-1/__data.json", "/category/laundry-bag-2-45", "/category/laundry-bag-2-45/__data.json", "/category/coffee-bag-2-37", "/category/coffee-bag-2-37/__data.json", "/category/paper-bags-3-95", "/category/paper-bags-3-95/__data.json", "/category/salad-container-2-57", "/category/salad-container-2-57/__data.json", "/category/plastic-products-3", "/category/plastic-products-3/__data.json", "/category/rectangle-container-3-59", "/category/rectangle-container-3-59/__data.json", "/category/cake-containers-2-69", "/category/cake-containers-2-69/__data.json", "/category/microwave-container-3-71", "/category/microwave-container-3-71/__data.json", "/category/general-purpose-tub-2-75", "/category/general-purpose-tub-2-75/__data.json", "/category/tray-2-77", "/category/tray-2-77/__data.json", "/category/sauce-containers-3-73", "/category/sauce-containers-3-73/__data.json", "/category/dish-2-79", "/category/dish-2-79/__data.json", "/category/cutlery-2-81", "/category/cutlery-2-81/__data.json", "/category/straw-2-85", "/category/straw-2-85/__data.json", "/category/plastic-bottles-125", "/category/plastic-bottles-125/__data.json", "/category/carton-products-2-23", "/category/carton-products-2-23/__data.json", "/category/carton-products-3-5", "/category/carton-products-3-5/__data.json", "/category/paper-box-2-49", "/category/paper-box-2-49/__data.json", "/category/pizza-box-2-53", "/category/pizza-box-2-53/__data.json", "/category/paper-bakery-moulds-2-83", "/category/paper-bakery-moulds-2-83/__data.json", "/category/cake-board-3-87", "/category/cake-board-3-87/__data.json", "/category/paper-bowl-3-97", "/category/paper-bowl-3-97/__data.json", "/category/paper-holder-101", "/category/paper-holder-101/__data.json", "/category/plastic-cups-2-29", "/category/plastic-cups-2-29/__data.json", "/category/cups--bowls-2-7", "/category/cups--bowls-2-7/__data.json", "/category/paper-cup-2-27", "/category/paper-cup-2-27/__data.json", "/category/lid-2-41", "/category/lid-2-41/__data.json", "/category/muffin-cup-131", "/category/muffin-cup-131/__data.json", "/category/napkins-2-9", "/category/napkins-2-9/__data.json", "/category/napkin-2-31", "/category/napkin-2-31/__data.json", "/category/refreshing-wet-wipes-2-33", "/category/refreshing-wet-wipes-2-33/__data.json", "/category/wraps-2-11", "/category/wraps-2-11/__data.json", "/category/paper-wraps-2-35", "/category/paper-wraps-2-35/__data.json", "/category/aluminum-paper-2-55", "/category/aluminum-paper-2-55/__data.json", "/category/cling-film-103", "/category/cling-film-103/__data.json", "/category/sterilization--hygiene-3-111", "/category/sterilization--hygiene-3-111/__data.json", "/category/sterilization--hygiene-109", "/category/sterilization--hygiene-109/__data.json", "/category/foil-dishes-107", "/category/foil-dishes-107/__data.json", "/category/-102-113", "/category/-102-113/__data.json", "/category/foil-container-129", "/category/foil-container-129/__data.json", "/category/foam-cup-2-119", "/category/foam-cup-2-119/__data.json", "/category/-103-115", "/category/-103-115/__data.json", "/page/faq", "/page/faq/__data.json", "/page/about-us", "/page/about-us/__data.json", "/page/return-policy", "/page/return-policy/__data.json", "/category/container-foam-121", "/category/container-foam-121/__data.json", "/category/foam-plates-123", "/category/foam-plates-123/__data.json", "/page/terms-and-conditions", "/page/terms-and-conditions/__data.json", "/page/privacy-policy", "/page/privacy-policy/__data.json", "/product/pure-aluminium-foil-zipper-bag-7", "/product/pure-aluminium-foil-zipper-bag-7/__data.json", "/product/a-bag-with-glue-on-the-back-15", "/product/a-bag-with-glue-on-the-back-15/__data.json", "/product/carton-bag-19", "/product/carton-bag-19/__data.json", "/product/kraft-paper-bag-with-handle-21", "/product/kraft-paper-bag-with-handle-21/__data.json", "/product/non-woven-bag-d-cut-31", "/product/non-woven-bag-d-cut-31/__data.json", "/product/non-woven-bag-with-handle-33", "/product/non-woven-bag-with-handle-33/__data.json", "/product/jewelery-bag-35", "/product/jewelery-bag-35/__data.json", "/product/laundry-bag-2-37", "/product/laundry-bag-2-37/__data.json", "/product/dress-bag-2-39", "/product/dress-bag-2-39/__data.json", "/product/single-wall-paper-cup-41", "/product/single-wall-paper-cup-41/__data.json", "/product/eight-side-seal-with-clear-window-kraft-paper-bag-3", "/product/eight-side-seal-with-clear-window-kraft-paper-bag-3/__data.json", "/product/window-kraft-paper-standup-pouch-1", "/product/window-kraft-paper-standup-pouch-1/__data.json", "/product/one-side-transparent-one-side-aluminium-foil-zipper-bag-5", "/product/one-side-transparent-one-side-aluminium-foil-zipper-bag-5/__data.json", "/product/standup-pouch-zipper-coffee-bag-9", "/product/standup-pouch-zipper-coffee-bag-9/__data.json", "/product/diamond-irregular-side-zipper-11", "/product/diamond-irregular-side-zipper-11/__data.json", "/product/matte-eight-side-seal-bag-13", "/product/matte-eight-side-seal-bag-13/__data.json", "/product/eight-side-seal-gusset-bag-with-valve-17", "/product/eight-side-seal-gusset-bag-with-valve-17/__data.json", "/product/double-wall-paper-cup-43", "/product/double-wall-paper-cup-43/__data.json", "/product/sandwich-paper-bag-23", "/product/sandwich-paper-bag-23/__data.json", "/product/kraft-ripple-cup-without-lid-45", "/product/kraft-ripple-cup-without-lid-45/__data.json", "/product/ice-cream-cup-47", "/product/ice-cream-cup-47/__data.json", "/product/clear-plastic-cup-without-lid-53", "/product/clear-plastic-cup-without-lid-53/__data.json", "/product/heavy-duty-paper-cup-49", "/product/heavy-duty-paper-cup-49/__data.json", "/product/coloured-cup-51", "/product/coloured-cup-51/__data.json", "/product/slip-lid-55", "/product/slip-lid-55/__data.json", "/product/clear-dom-lids-57", "/product/clear-dom-lids-57/__data.json", "/product/clear-flat-lid-59", "/product/clear-flat-lid-59/__data.json", "/product/wet-wipes-65", "/product/wet-wipes-65/__data.json", "/product/plain-white-napkin-61", "/product/plain-white-napkin-61/__data.json", "/product/plain-wrapping-paper-67", "/product/plain-wrapping-paper-67/__data.json", "/product/aluminium-wrap-paper-plain-69", "/product/aluminium-wrap-paper-plain-69/__data.json", "/product/aluminium-wrap-paper-chicken-71", "/product/aluminium-wrap-paper-chicken-71/__data.json", "/product/aluminium-wrap-paper-burger-73", "/product/aluminium-wrap-paper-burger-73/__data.json", "/product/wax-paper-75", "/product/wax-paper-75/__data.json", "/product/noodle-box-77", "/product/noodle-box-77/__data.json", "/page/terms-and-condtions", "/page/terms-and-condtions/__data.json", "/product/white-plastic-bag-481", "/product/white-plastic-bag-481/__data.json", "/product/nylon-bags-483", "/product/nylon-bags-483/__data.json", "/product/plastic-trash-bags-485", "/product/plastic-trash-bags-485/__data.json", "/product/blue-plastic-trash-bags-487", "/product/blue-plastic-trash-bags-487/__data.json", "/product/plastic-courier-bags-645", "/product/plastic-courier-bags-645/__data.json", "/product/printed-aluminum-pouch-391", "/product/printed-aluminum-pouch-391/__data.json", "/product/white-shining-coffee-bag-with-window-393", "/product/white-shining-coffee-bag-with-window-393/__data.json", "/product/spout-standup-pouch-395", "/product/spout-standup-pouch-395/__data.json", "/product/black-paper-coffee-bag-with-window-397", "/product/black-paper-coffee-bag-with-window-397/__data.json", "/product/white-kraft-paper-bag-with-handle-275", "/product/white-kraft-paper-bag-with-handle-275/__data.json", "/product/kraft-paper-bag-without-handle-277", "/product/kraft-paper-bag-without-handle-277/__data.json", "/product/white-kraft-paper-bag-without-handle-279", "/product/white-kraft-paper-bag-without-handle-279/__data.json", "/product/sandwich-paper-bag-285", "/product/sandwich-paper-bag-285/__data.json", "/product/kraft-burger-pouch-375", "/product/kraft-burger-pouch-375/__data.json", "/product/kraft-paper-bag-with-die--cut-handle-383", "/product/kraft-paper-bag-with-die--cut-handle-383/__data.json", "/product/white-paper-bag-with-die--cut-handle-385", "/product/white-paper-bag-with-die--cut-handle-385/__data.json", "/product/brwon-burger-bag-569", "/product/brwon-burger-bag-569/__data.json", "/product/pet-clear-container-with-hinged-lid-101", "/product/pet-clear-container-with-hinged-lid-101/__data.json", "/product/pet-salad-clear-container-with-hinged-lid-103", "/product/pet-salad-clear-container-with-hinged-lid-103/__data.json", "/product/clear-container-with-dom-lid-105", "/product/clear-container-with-dom-lid-105/__data.json", "/product/hoddog-clear-container-with-hinged-lid-117", "/product/hoddog-clear-container-with-hinged-lid-117/__data.json", "/product/hinged-salad-container---149", "/product/hinged-salad-container---149/__data.json", "/product/black-hexagonal-bowl-transparent-lid-345", "/product/black-hexagonal-bowl-transparent-lid-345/__data.json", "/product/clear-square-plastic-container-with-lid-349", "/product/clear-square-plastic-container-with-lid-349/__data.json", "/product/sushi-tray-with-lid-473", "/product/sushi-tray-with-lid-473/__data.json", "/product/dates-plastic-container-549", "/product/dates-plastic-container-549/__data.json", "/product/clear-plastic-container-621", "/product/clear-plastic-container-621/__data.json", "/product/plastic-deep-plate-627", "/product/plastic-deep-plate-627/__data.json", "/product/round-bowl-631", "/product/round-bowl-631/__data.json", "/product/rectangle-clear-container-with-hinged-lid-109", "/product/rectangle-clear-container-with-hinged-lid-109/__data.json", "/product/golden-rectangle-sushi-box-325", "/product/golden-rectangle-sushi-box-325/__data.json", "/product/black-rectangular-sushi--transparent-lid-343", "/product/black-rectangular-sushi--transparent-lid-343/__data.json", "/product/rectangular-container-transparent-lid-331", "/product/rectangular-container-transparent-lid-331/__data.json", "/product/rectangle-black-sushi-tray-475", "/product/rectangle-black-sushi-tray-475/__data.json", "/product/clear-container-with-lid-107", "/product/clear-container-with-lid-107/__data.json", "/product/croissant-clear-container-with-hinged-lid-111", "/product/croissant-clear-container-with-hinged-lid-111/__data.json", "/product/muffin-clear-container-with-hinged-lid-113", "/product/muffin-clear-container-with-hinged-lid-113/__data.json", "/product/square-clear-container-with-hinged-lid-115", "/product/square-clear-container-with-hinged-lid-115/__data.json", "/product/round-cake-clear-container-with-hinged-lid-121", "/product/round-cake-clear-container-with-hinged-lid-121/__data.json", "/product/cake-dome-133", "/product/cake-dome-133/__data.json", "/product/gold-square-plastic-plates-297", "/product/gold-square-plastic-plates-297/__data.json", "/product/rectangle-golden-plates-with-lid-299", "/product/rectangle-golden-plates-with-lid-299/__data.json", "/product/disposal-plastic-food-containers-lid-329", "/product/disposal-plastic-food-containers-lid-329/__data.json", "/product/rectangular-aluminum-bar-with-lid-337", "/product/rectangular-aluminum-bar-with-lid-337/__data.json", "/product/transpaernt-triangle-box--lid-339", "/product/transpaernt-triangle-box--lid-339/__data.json", "/product/baklava-transparent-boxes-341", "/product/baklava-transparent-boxes-341/__data.json", "/product/high-cake-base-cover-and-base-351", "/product/high-cake-base-cover-and-base-351/__data.json", "/product/candy-container-with-lid-347", "/product/candy-container-with-lid-347/__data.json", "/product/transparent-box-for-high-cake-353", "/product/transparent-box-for-high-cake-353/__data.json", "/product/transparent-box-for-high-cake-355", "/product/transparent-box-for-high-cake-355/__data.json", "/product/cake-box-base-and-lid-357", "/product/cake-box-base-and-lid-357/__data.json", "/product/mini-cake-plate-359", "/product/mini-cake-plate-359/__data.json", "/product/plastic-cake-box-cirular-shaped-cake-container-361", "/product/plastic-cake-box-cirular-shaped-cake-container-361/__data.json", "/product/golden-circle-box-363", "/product/golden-circle-box-363/__data.json", "/product/food-container-141", "/product/food-container-141/__data.json", "/product/microwave-safe-bowl-335", "/product/microwave-safe-bowl-335/__data.json", "/product/microwave-safe-bowl-367", "/product/microwave-safe-bowl-367/__data.json", "/product/microwave-container-with-lid-379", "/product/microwave-container-with-lid-379/__data.json", "/product/microwaveable-food-containers-467", "/product/microwaveable-food-containers-467/__data.json", "/product/rectangle-microwave-container-381", "/product/rectangle-microwave-container-381/__data.json", "/product/general-purpose-tub-false-bottom-129", "/product/general-purpose-tub-false-bottom-129/__data.json", "/product/general-purpose-tub-2-131", "/product/general-purpose-tub-2-131/__data.json", "/product/large-round-tub-smooth-surface-135", "/product/large-round-tub-smooth-surface-135/__data.json", "/product/utility-tray-clear-137", "/product/utility-tray-clear-137/__data.json", "/product/square-container-2-139", "/product/square-container-2-139/__data.json", "/product/golden-rectaangular-bowl-transparent-lid-313", "/product/golden-rectaangular-bowl-transparent-lid-313/__data.json", "/product/square-golden-woodeed-plastic-plate-311", "/product/square-golden-woodeed-plastic-plate-311/__data.json", "/product/sauce-cup-387", "/product/sauce-cup-387/__data.json", "/product/round-sauce-cans-with-lid-451", "/product/round-sauce-cans-with-lid-451/__data.json", "/product/white-sauce-cup-453", "/product/white-sauce-cup-453/__data.json", "/product/clear-sauce-cup-455", "/product/clear-sauce-cup-455/__data.json", "/product/black-sauce-cup-457", "/product/black-sauce-cup-457/__data.json", "/product/transparent-sauce-cups-479", "/product/transparent-sauce-cups-479/__data.json", "/product/plain-plastic-cup-593", "/product/plain-plastic-cup-593/__data.json", "/product/portion-cups-and-lids-629", "/product/portion-cups-and-lids-629/__data.json", "/product/-287", "/product/-287/__data.json", "/product/dish-2-145", "/product/dish-2-145/__data.json", "/product/plastic-dish-with-transparent-lid-291", "/product/plastic-dish-with-transparent-lid-291/__data.json", "/product/vip-plastic-plate-with-transparent-lid-293", "/product/vip-plastic-plate-with-transparent-lid-293/__data.json", "/product/plastic-desert-plates-premium-295", "/product/plastic-desert-plates-premium-295/__data.json", "/product/gold-round-plates-with-lid-301", "/product/gold-round-plates-with-lid-301/__data.json", "/product/rectangulre-golden-plates-305", "/product/rectangulre-golden-plates-305/__data.json", "/product/red-transparent-plastic-plates-307", "/product/red-transparent-plastic-plates-307/__data.json", "/product/round-golden-plastic-dish-309", "/product/round-golden-plastic-dish-309/__data.json", "/product/golden-round-plates-315", "/product/golden-round-plates-315/__data.json", "/product/golden-plastic-bowl-317", "/product/golden-plastic-bowl-317/__data.json", "/product/round-golden-plastic-box-327", "/product/round-golden-plastic-box-327/__data.json", "/product/oval-plastic-plate-477", "/product/oval-plastic-plate-477/__data.json", "/product/vip-plastic-spoon-191", "/product/vip-plastic-spoon-191/__data.json", "/product/vip-plastic-fork-193", "/product/vip-plastic-fork-193/__data.json", "/product/vip-plastic-knife-195", "/product/vip-plastic-knife-195/__data.json", "/product/vip-cutlery-set-199", "/product/vip-cutlery-set-199/__data.json", "/product/plastic-spoon-201", "/product/plastic-spoon-201/__data.json", "/product/plastic-knife-205", "/product/plastic-knife-205/__data.json", "/product/plastic-spork-2-207", "/product/plastic-spork-2-207/__data.json", "/product/plastic-cocktail-stirrer-213", "/product/plastic-cocktail-stirrer-213/__data.json", "/product/nescafe-plastic-stirrer-215", "/product/nescafe-plastic-stirrer-215/__data.json", "/product/plastic-tea-spoon-209", "/product/plastic-tea-spoon-209/__data.json", "/product/white-cocktail-spoon-227", "/product/white-cocktail-spoon-227/__data.json", "/product/mixer-stirring-445", "/product/mixer-stirring-445/__data.json", "/product/transparent-knife-and-fork-with-napkins-459", "/product/transparent-knife-and-fork-with-napkins-459/__data.json", "/product/41-dining-set-transparent-461", "/product/41-dining-set-transparent-461/__data.json", "/product/vip-plastic-dining-set-463", "/product/vip-plastic-dining-set-463/__data.json", "/product/unwrapped-straw-flex-235", "/product/unwrapped-straw-flex-235/__data.json", "/product/straw-with-spoon-239", "/product/straw-with-spoon-239/__data.json", "/product/wrapped-coloured-straw-6mm-245", "/product/wrapped-coloured-straw-6mm-245/__data.json", "/product/green-wrapped-straw-247", "/product/green-wrapped-straw-247/__data.json", "/product/unwrapped-straw-241", "/product/unwrapped-straw-241/__data.json", "/product/plastic-clear-round-bottle-403", "/product/plastic-clear-round-bottle-403/__data.json", "/product/cold-pro-beverage-bottle-405", "/product/cold-pro-beverage-bottle-405/__data.json", "/product/rectangular-bottle-407", "/product/rectangular-bottle-407/__data.json", "/product/clear-pet-plastic-bottle-409", "/product/clear-pet-plastic-bottle-409/__data.json", "/product/jar-with-aluminum-cover-551", "/product/jar-with-aluminum-cover-551/__data.json", "/product/white-jar-553", "/product/white-jar-553/__data.json", "/product/round-jar-with-red-lid-555", "/product/round-jar-with-red-lid-555/__data.json", "/product/black-square-jar-557", "/product/black-square-jar-557/__data.json", "/product/pet-plastic-jars-559", "/product/pet-plastic-jars-559/__data.json", "/product/carton-box-97", "/product/carton-box-97/__data.json", "/product/square-jar-with-white-cover-561", "/product/square-jar-with-white-cover-561/__data.json", "/product/corrugated-dental-box-615", "/product/corrugated-dental-box-615/__data.json", "/product/cake-box-4-cup-79", "/product/cake-box-4-cup-79/__data.json", "/product/cake-box-6-cup-81", "/product/cake-box-6-cup-81/__data.json", "/product/cake-box-plain-85", "/product/cake-box-plain-85/__data.json", "/product/cake-box-12-cup-83", "/product/cake-box-12-cup-83/__data.json", "/product/french-fries-pouch-87", "/product/french-fries-pouch-87/__data.json", "/product/popcorn-box-91", "/product/popcorn-box-91/__data.json", "/product/colored-popcorn-pouch-93", "/product/colored-popcorn-pouch-93/__data.json", "/product/popcorn-tub-95", "/product/popcorn-tub-95/__data.json", "/product/cake-box-printed-203", "/product/cake-box-printed-203/__data.json", "/product/kraft-paper-plate-brown-421", "/product/kraft-paper-plate-brown-421/__data.json", "/product/white-cake-boxes-423", "/product/white-cake-boxes-423/__data.json", "/product/kraft-paper-lunch-box-427", "/product/kraft-paper-lunch-box-427/__data.json", "/product/kraft-paper-sushi-box-425", "/product/kraft-paper-sushi-box-425/__data.json", "/product/burger-kraft-paper-boxes-431", "/product/burger-kraft-paper-boxes-431/__data.json", "/product/kraft-sandwich-boxes-433", "/product/kraft-sandwich-boxes-433/__data.json", "/product/pizza-box-2-99", "/product/pizza-box-2-99/__data.json", "/product/rectangle-paper-baking-moulds-153", "/product/rectangle-paper-baking-moulds-153/__data.json", "/product/rectangle-cake-board-163", "/product/rectangle-cake-board-163/__data.json", "/product/round-white-dollies-159", "/product/round-white-dollies-159/__data.json", "/product/round-cake-board-167", "/product/round-cake-board-167/__data.json", "/product/triangle-shape-cake-board-169", "/product/triangle-shape-cake-board-169/__data.json", "/product/square-cake-board-171", "/product/square-cake-board-171/__data.json", "/product/white-soup-cup-429", "/product/white-soup-cup-429/__data.json", "/product/white-paper-soup-cup-465", "/product/white-paper-soup-cup-465/__data.json", "/product/paper-corrugated-cups-holder-271", "/product/paper-corrugated-cups-holder-271/__data.json", "/product/4-cups-corrugated-holder-399", "/product/4-cups-corrugated-holder-399/__data.json", "/product/paper-holder-corrugated-2cup-437", "/product/paper-holder-corrugated-2cup-437/__data.json", "/product/paper-holder-corrugated-4-cup-435", "/product/paper-holder-corrugated-4-cup-435/__data.json", "/product/disposable-4-cups-holder-439", "/product/disposable-4-cups-holder-439/__data.json", "/product/disposable-2-cups-holder-441", "/product/disposable-2-cups-holder-441/__data.json", "/product/takeaway-drinks-cup-holder-647", "/product/takeaway-drinks-cup-holder-647/__data.json", "/product/double-wall-white-paper-cup-401", "/product/double-wall-white-paper-cup-401/__data.json", "/product/wooden-mixer-stirring-447", "/product/wooden-mixer-stirring-447/__data.json", "/product/white-cake-cup-173", "/product/white-cake-cup-173/__data.json", "/product/commercial-coffee-filters-443", "/product/commercial-coffee-filters-443/__data.json", "/product/cling-film-3-377", "/product/cling-film-3-377/__data.json", "/product/aluminum-foil-619", "/product/aluminum-foil-619/__data.json", "/product/disposable-stretchable-black-caps-489", "/product/disposable-stretchable-black-caps-489/__data.json", "/product/chef-hat-491", "/product/chef-hat-491/__data.json", "/product/shoe-covers-blue-493", "/product/shoe-covers-blue-493/__data.json", "/product/disposable-plastic-gloves-495", "/product/disposable-plastic-gloves-495/__data.json", "/product/transparent-gloves-497", "/product/transparent-gloves-497/__data.json", "/product/disposable-nitrile-gloves-499", "/product/disposable-nitrile-gloves-499/__data.json", "/product/cotton-gloves-501", "/product/cotton-gloves-501/__data.json", "/product/white-gloves-without-powder-503", "/product/white-gloves-without-powder-503/__data.json", "/product/bio-gloves-vinyl-505", "/product/bio-gloves-vinyl-505/__data.json", "/product/face-mask-three-layers-507", "/product/face-mask-three-layers-507/__data.json", "/product/nylon-apron-509", "/product/nylon-apron-509/__data.json", "/product/neck-nylon-apron-511", "/product/neck-nylon-apron-511/__data.json", "/product/roof-cleanser-513", "/product/roof-cleanser-513/__data.json", "/product/roof-glass-cleaner-515", "/product/roof-glass-cleaner-515/__data.json", "/product/antibacterial-disinfectant-517", "/product/antibacterial-disinfectant-517/__data.json", "/product/dishwasher-lemon-519", "/product/dishwasher-lemon-519/__data.json", "/product/surface-cleaner-521", "/product/surface-cleaner-521/__data.json", "/product/oven-cleaner-523", "/product/oven-cleaner-523/__data.json", "/product/multi-purpose-cleaner-525", "/product/multi-purpose-cleaner-525/__data.json", "/product/aluminum-foil-pot-with-lid-527", "/product/aluminum-foil-pot-with-lid-527/__data.json", "/product/plate-cover-foil-529", "/product/plate-cover-foil-529/__data.json", "/product/kunefe-plate-533", "/product/kunefe-plate-533/__data.json", "/product/aluminum-container-535", "/product/aluminum-container-535/__data.json", "/product/aluminum-foil-pans-with-lid-537", "/product/aluminum-foil-pans-with-lid-537/__data.json", "/product/paper-coasters-563", "/product/paper-coasters-563/__data.json", "/product/disposable-food-storage-635", "/product/disposable-food-storage-635/__data.json", "/product/foil-drip-pans-637", "/product/foil-drip-pans-637/__data.json", "/product/aluminium-oval-platter-639", "/product/aluminium-oval-platter-639/__data.json", "/product/aluminum-full-curl-641", "/product/aluminum-full-curl-641/__data.json", "/product/aluminum-sauce-plate-643", "/product/aluminum-sauce-plate-643/__data.json", "/product/aluminum-foil-cupcake-573", "/product/aluminum-foil-cupcake-573/__data.json", "/product/disposable-round-aluminum-pans-575", "/product/disposable-round-aluminum-pans-575/__data.json", "/product/aluminum-foil-baking-cups-577", "/product/aluminum-foil-baking-cups-577/__data.json", "/product/mini-aluminum-foil-cups-579", "/product/mini-aluminum-foil-cups-579/__data.json", "/product/gold-foil-container-with-lid-581", "/product/gold-foil-container-with-lid-581/__data.json", "/product/aluminum-container-583", "/product/aluminum-container-583/__data.json", "/product/nordic-ware-pie-pan-587", "/product/nordic-ware-pie-pan-587/__data.json", "/product/colorful-disposable-containers-599", "/product/colorful-disposable-containers-599/__data.json", "/product/meal-tray-601", "/product/meal-tray-601/__data.json", "/product/aluminum-plates-with-a-lid-603", "/product/aluminum-plates-with-a-lid-603/__data.json", "/product/aluminum-loaf-pans-605", "/product/aluminum-loaf-pans-605/__data.json", "/product/rectangular-aluminum-container-607", "/product/rectangular-aluminum-container-607/__data.json", "/product/aluminum-foil-lunch-box-609", "/product/aluminum-foil-lunch-box-609/__data.json", "/product/reusable-foil-tins-611", "/product/reusable-foil-tins-611/__data.json", "/product/biodegradable-container-613", "/product/biodegradable-container-613/__data.json", "/product/foam-cup-547", "/product/foam-cup-547/__data.json", "/product/foam-cover-plate-541", "/product/foam-cover-plate-541/__data.json", "/product/foam-hotdog-box-543", "/product/foam-hotdog-box-543/__data.json", "/product/container-foam-545", "/product/container-foam-545/__data.json", "/product/plastic-disposable-plates-319", "/product/plastic-disposable-plates-319/__data.json", "/product/foam-plates-539", "/product/foam-plates-539/__data.json", "/product/disposable-plastic-white-617", "/product/disposable-plastic-white-617/__data.json"]);

// .svelte-kit/cloudflare-tmp/_worker.js
async function e(e3, t2) {
  let n2 = "string" != typeof t2 && "HEAD" === t2.method;
  n2 && (t2 = new Request(t2, { method: "GET" }));
  let r3 = await e3.match(t2);
  return n2 && r3 && (r3 = new Response(null, r3)), r3;
}
function t(e3, t2, n2, o2) {
  return ("string" == typeof t2 || "GET" === t2.method) && r(n2) && (n2.headers.has("Set-Cookie") && (n2 = new Response(n2.body, n2)).headers.append("Cache-Control", "private=Set-Cookie"), o2.waitUntil(e3.put(t2, n2.clone()))), n2;
}
var n = /* @__PURE__ */ new Set([200, 203, 204, 300, 301, 404, 405, 410, 414, 501]);
function r(e3) {
  if (!n.has(e3.status))
    return false;
  if (~(e3.headers.get("Vary") || "").indexOf("*"))
    return false;
  let t2 = e3.headers.get("Cache-Control") || "";
  return !/(private|no-cache|no-store)/i.test(t2);
}
function o(n2) {
  return async function(r3, o2) {
    let a = await e(n2, r3);
    if (a)
      return a;
    o2.defer((e3) => {
      t(n2, r3, e3, o2);
    });
  };
}
var s2 = caches.default;
var c = t.bind(0, s2);
var r2 = e.bind(0, s2);
var e2 = o.bind(0, s2);
var server = new Server(manifest);
var worker = {
  async fetch(req, env, context) {
    await server.init({ env });
    let pragma = req.headers.get("cache-control") || "";
    let res = !pragma.includes("no-cache") && await r2(req);
    if (res)
      return res;
    let { pathname } = new URL(req.url);
    try {
      pathname = decodeURIComponent(pathname);
    } catch {
    }
    const stripped_pathname = pathname.replace(/\/$/, "");
    let is_static_asset = false;
    const filename = stripped_pathname.substring(1);
    if (filename) {
      is_static_asset = manifest.assets.has(filename) || manifest.assets.has(filename + "/index.html");
    }
    const location2 = pathname.at(-1) === "/" ? stripped_pathname : pathname + "/";
    if (is_static_asset || prerendered.has(pathname)) {
      res = await env.ASSETS.fetch(req);
    } else if (location2 && prerendered.has(location2)) {
      res = new Response("", {
        status: 308,
        headers: {
          location: location2
        }
      });
    } else {
      res = await server.respond(req, {
        // @ts-ignore
        platform: { env, context, caches, cf: req.cf },
        getClientAddress() {
          return req.headers.get("cf-connecting-ip");
        }
      });
    }
    pragma = res.headers.get("cache-control") || "";
    return pragma && res.status < 400 ? c(req, res, context) : res;
  }
};
var worker_default = worker;
export {
  worker_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=_worker.js.map
