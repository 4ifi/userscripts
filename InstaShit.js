// ==UserScript==
// @name         some no bullshit script for instashit
// @description  makes images/videos clickable and savable, removes animations, preloads posts and speeds things up
// @namespace    @anon
// @version      0.9.0
// @author       the friendly anon
// @match        https://www.instagram.com/*
// @grant GM_xmlhttpRequest
// @grant unsafeWindow
// @run-at document-start
// ==/UserScript==
const i = `indexOf`,
	c = `href`,
	z = `pathname`,
	A = `apply`,
	d = `addEventListener`,
	f = `length`,
	o = `tagName`,
	j = `parentNode`,
	Y = `VIDEO`,
	Z = `IMG`,
	p = ``,
	la = `oncanplaythrough`,
	B = `style`,
	t = `documentElement`,
	$ = `status`,
	u = `createElement`,
	C = `span`,
	q = `innerHTML`,
	v = `appendChild`,
	_ = `textContent`,
	e = `querySelector`,
	k = `body`,
	ma = `mousedown`,
	l = `target`,
	I = `button`,
	r = `_onlyOnCtrl`,
	J = `closest`,
	na = `article`,
	D = `height`,
	w = `width`,
	oa = `video_versions`,
	pa = `video_dash_manifest`,
	aa = `carousel_media`,
	m = `classList`,
	K = `contains`,
	qa = `svg[aria-label="Close"]`,
	n = `click`,
	L = `_phs`,
	M = `__nbssettings`,
	g = `_preload`,
	x = `_nologging`,
	N = `checked`,
	ba = `firstChild`,
	ca = `stringify`,
	da = `navigator`,
	ea = `sendBeacon`,
	O = `getBoundingClientRect`,
	fa = `children`,
	ga = `clientHeight`,
	P = `bottom`,
	ra = `onreadystatechange`,
	ha = `responseText`,
	b = null;
let a = document,
	h = location,
	s = setTimeout,
	y = JSON,
	Q = history,
	R = window,
	S = BigInt,
	T = localStorage,
	U = Number,
	V = unsafeWindow,
	ia = parseInt;
var ja, E, F, sa, G, W, H, ta;
const ua = 0,
	va = 1,
	wa = 1,
	xa = 1,
	ya = 1,
	za = 1,
	Aa = 3e5,
	Ba = 0;

function X() {
	var a = this;
	a.t = [], a.add = b => {
		a.t.push(b)
	}, a.rem = c => {
		var b = a.t[i](c);
		b >= 0 && a.t.splice(b, 1)
	}, a.o = async (...c) => {
		for(const d of a.t) {
			var b = d(...c);
			b instanceof Promise && await b
		}
	}
}

function ka() {
	var b, e;
	
	function a(e) {
		var b = new URL(e, h[c]),
			d = 0 === b[z][i]("/p/");
		d && E != b[c] && F && G.o(), E = b[c], F = d
	}
	a(h[c]), b = Q.replaceState, Q.replaceState = function(d, e, c) {
		b[A](this, arguments), c && a(c)
	}, e = Q.pushState, Q.pushState = function(c, d, b) {
		e[A](this, arguments), b && a(b)
	}, R[d]("popstate", (b => a(h[c])), !0)
}
R[d]("load", (() => s((function() {
	"use strict";
	var Ca, xa, ya, La, Da, za, Ma, ka, E, Ea, ja, Na, Aa, Oa, Fa, Ga, sa, Q, wa, va, Ha, Ba, Ia, F, ta, Pa, Qa;
	
	function Ra(a) {
		var b;
		return a.slice(a.lastIndexOf("/") + 1, (b = a[i]("?")) > 0 || (b = a[i]("#")) > 0 ? b : a[f])
	}
	
	function Sa(a) {
		for(; a;) {
			if("A" == a[o] && a[c].match(/:\/\/[^/]+\/+(?:[^/]+\/+)?(?:p|tv|reel)\//)) return a;
			a = a[j]
		}
	}
	
	function Ta(a, c, d) {
		var e, g, h = d ? Y : Z;
		a[o] === h && (d && (e = a.currentTime, g = !a.paused), c = function(a, b) {
			var c, d = a => b.replace(new RegExp(`(?<=[&?])${a}=[^\\s&#]&?`), p);
			if(a instanceof Array)
				for(c = 0; c < a[f]; c++) b = d(a[c]);
			else b = d(a);
			return b
		}(["se"], c), a.src = c, d && (a.currentTime = e, a[la] = c => {
			a[la] = b, g && a.play()
		}))
	}
	
	function Za(a) {
		a[B].animation = "flash-el 0.5s ease-out", s((() => {
			a[B].animation = b
		}), 600)
	}
	
	function $a(a, b) {
		for(;;) {
			if(!(a = a[j])) return;
			if(b(a)) return a
		}
	}
	
	function Ua() {
		return Da && Date.now() - Da < 3e5 && !0
	}
	
	function Ja(b) {
		for(var c = a[t];;) {
			if(!(b = b[j])) return;
			if(b === c) return !0
		}
	}
	
	function ua(a) {
		var c = a && a.match(/^[a-z]+:\/\/[^/]+\/+(?:[^/]+\/+)?(?:p|tv|reel)\/+([^/]+)/);
		return c ? c[1] : b
	}
	
	function Va(a) {
		return "dialog" == a.getAttribute("role")
	}
	
	function Ka(b, e, n) {
		var g, h, d, c, k, l, m;
		Ua() || ((g = xa[b]) ? e(g) : ((h = !ka[b] && !n) && (ka[b] = []), e && ka[b] && ka[b].push(e), h && (d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", c = S(64), k = function(a) {
			return a < c ? d[ia(a)] : l(a / c) + d[a % c]
		}, l = function(a) {
			return k(S(a))
		}, m = function(a) {
			var b, e, g;
			for(a = a.substring(0, 11), b = S(0), e = 0; e < a[f]; e++) g = S(d[i](a[e])), b *= c, b += g;
			return b.toString()
		}(b), GM_xmlhttpRequest({
			method: "GET",
			url: "https://i.instagram.com/api/v1/media/" + m + "/info/",
			headers: {
				"User-Agent": "Instagram 179.0.0.26.132 Android (23/6.0.1; 640dpi; 1440x2560; samsung; SM-G930F; herolte; samsungexynos8890; en_US)",
				"X-IG-Capabilities": "36oD",
				Accept: "*/*",
				"Accept-Language": "en-US,en;q=0.8"
			},
			withCredentials: !0,
			responseType: "json",
			onload(h) {
				var c, f, d, e, g;
				if(c = h.response) {
					if(za && za[j].removeChild(za), (f = "fail" == c[$]) && c.message && c.message[i]("wait") >= 0) return d = new Date, Da = d.getTime(), e = a[u](C), g = d.getHours() + ":" + d.getMinutes(), e[q] = `<span style="color:red; margin-right:20px;" title="This means you can't search for high res pics because the server refuses to deliver. Instagram hates you.">Forced Wait from ${g}!</span>`, ja[v](e), void(za = e);
					if(!f) {
						xa[b] = c;
						for(const a of ka[b]) a(c, 1);
						delete ka[b]
					}
				}
			},
			onerror() {
				delete ka[b]
			}
		}))))
	}(Qa = a[u](B))[_] = 'div._ovg3g, div._si7dy, div._j12ff, div.qbCDp > div, a._7thjo, div.oujXn, .QvAa1 {display:none!important;}div._9AhH0, div.qn-0x {pointer-events:none;}div._o95x1  {display:none!important;}.C4VMK {user-select:text!important; -webkit-user-select:text!important;}article div[aria-label="Control"][role="button"], article div.PyenC, article img._8jZFn {pointer-events: none;}div[role="presentation"]>._9nCnY{transition:none!important;}body._phs{overflow-y:scroll!important;}@keyframes flash-el {\n\t\t\tfrom {outline: 5px solid #f1e366;}\n\t\t\tto {outline: 5px solid transparent;}\n\t\t}.__pnl{user-select:none;}.__pnl select[prel]:hover {\n\t\t\twidth:auto!important;\n\t\t\topacity:1!important;\n\t\t}.__pnl[pn] { pointer-events:none; }.__pnl [nologging]:hover { opacity:1!important; }', a.head[v](Qa), Ca = {}, xa = {}, Ma = !!a[e]("nav.f11OC"), a[k][d](ma, (d => {
		var g, e, s, n, i, t, q, a = d[l],
			k = Y == a[o],
			u = Z == a[o];
		if(u && a.srcset && 2 === d[I] && (a.srcset = p), g = Sa(a)?.[c], e = g && ua(g), 0 === d[I]) g ? (ya = e, La = d.ctrlKey) : ya = b;
		else if(2 === d[I] && (u && "FFVAD" == a.className || k)) {
			if(!(s = k ? a.getAttribute("poster") : a.src)) return;
			n = Ra(s), (i = Ca[n]) ? a.src != i && (k = !!i.match(/\/\w+\.mp4/), Ta(a, i, k)) : (t = E[r] ? d.ctrlKey : 1, (e = e || ua(h[c])) || (q = (q = a[J](na)?.querySelectorAll('a[href^="/p/"]')) && [...q].some((a => e = ua(a[c])))), function(a, d, c, e) {
				c && Ka(c, ((h, i) => {
					var c, e, g, k = function(a) {
						var c, d = [],
							e = function(b, c) {
								var a = c[D];
								return a || (a = b.original_height / b.original_width * c[w]), a
							},
							g = function(h) {
								var a, l, g, i, j = h.image_versions2.candidates,
									k = 0,
									c = b;
								for(a = 0; a < j[f]; a++) j[a].i = e(h, j[a]), (l = j[a][w] * j[a].i) > k && (k = l, c = j[a]);
								if(g = b, b !== c && (g = {
										src: c.url,
										[w]: c[w],
										[D]: c[D]
									}), g && h[oa]) {
									for(k = 0, c = b, i = h[oa], a = 0; a < i[f]; a++) i[a].i = e(h, i[a]), (l = i[a][w] * i[a].i) >= k && (k = l, c = i[a]);
									b !== c && (g.video = c.url, g.l = c[w], g.u = c.i), h[pa] && (g.video_dash = h[pa])
								}
								b !== g && d.push(g)
							};
						if(aa in a)
							for(c = 0; c < a[aa][f]; c++) g(a[aa][c]);
						else g(a);
						return d
					}(h.items[0]);
					for(const b of k)
						if(b.name = Ra(b.src), c = b.video || b.src, e = !!b.video, Ca[b.name] = c, a && d == b.name) return Ta(a, c, e), void(i && (g = $a(a, (a => a[m]?.[K]("_97aPb"))) || a[j][j][j][j]) && Za(g))
				}), e)
			}(a, n, e, !t))
		}
	})), a[k][d](ma, (b => {
		var a = b[l];
		a[m][K]("CkGkG") && a[e](qa)[j][n]()
	})), a[k][d](n, (b => {
		var a;
		0 === b[I] && Y == (a = b[l])[o] && (a[J]("li") || a[J](na))?.[e]('div[aria-label="Control"][role="button"]')?.[n]()
	})), a[d]("contextmenu", (a => {
		a.stopImmediatePropagation()
	}), !0), a[k][m].add(L), new MutationObserver((function(f) {
		for(var d of f) {
			for(let g of d.addedNodes) Va(g) && (g[B].display = "none", s((function() {
				var d = ua(h[c]);
				if(d && ta.add(d), d && d != ya) return g[e](qa)[j][n](), void a[k][m].remove(L);
				g[B].display = b, a[k][m].remove(L), d && !xa[d] && (!E[r] || La) && Ka(d)
			}), 1));
			for(let c of d.removedNodes) Va(c) && (a[k][m].add(L), ya = b)
		}
	})).observe(a[k], {
		childList: !0
	}), a[d]("dblclick", (function(a) {
		a[l][J]("article > div._97aPb") && (a.stopPropagation(), a.preventDefault())
	}), !0), ka = {}, r in (E = y.parse(T[M] || b) || {}) || (E[r] = 1), g in E || (E[g] = 2), x in E || (E[x] = 0), Ea = new X, (ja = a[u](C))[q] = '<div style="position:fixed; bottom:5px; left:5px; z-index:100; display:flex; flex-direction:row; align-items:flex-end;" class="__pnl"><label style="display: inline-block; margin-right:11px; background:#ffffff87;" title="Only search for high-res pic on [Ctrl + Right click]. This may be neccessary because instagram only allows a small number of requests. If unchecked: request high-res for every viewed post."><input type="checkbox" t="ctrl" ' + (E[r] ? N : p) + ' />Ctrl </label><select prel style="display: inline-block; margin-right:11px; width:45px; opacity:.35;" title="Preloaded posts will open a lot faster. Be careful when selecting \'preload all visible posts\', if you scroll a lot and preload too many you may become blocked for a while because Instagram limits the number of request you can make per time."><option value="1">preload all visible posts</option><option value="2">preload on mouse over</option><option value="0">do not preload posts</option></select></div>', ja = ja[ba], a[k][v](ja), (Na = ja[e]("*[t='ctrl']")).onclick = a => {
		E[r] = U(Na[N]), T[M] = y[ca](E)
	}, Aa = ja[e]("*[prel]"), Oa = 1 === E[g] ? 0 : 2 === E[g] ? 1 : 2, Aa.selectedIndex = Oa, Aa.onchange = a => {
		E[g] = U(Aa.selectedOptions[0].value), T[M] = y[ca](E), Ea.o(g)
	}; {
		function Wa() {
			V[da][ea] = E[x] ? H : W
		}(Fa = a[u](C))[q] = '<label style="display: inline-block; margin-right:20px; background:#ffffff87; opacity:.3;" title="Facebook being a US-intelligence front company is logging and recording everything you do down to the smallest detail. Where your mouse cursor goes, what buttons you click, where you scroll, what images or text you see when and for how long, etc... it is collected and sent periodically. You can choose to infringe on the TOS you have agreed to and disable it at your own risk by checking this button." nologging><input type="checkbox" ' + (E[x] ? N : p) + " />no logging </label>", Ga = Fa[e]("input"), ja[v](Fa[ba]), Ga.onclick = a => {
			E[x] = U(Ga[N]), T[M] = y[ca](E), Wa()
		}, Wa()
	} {
		function Xa() {
			if(b == Q && (wa = a[e]("#react-root > section > main > div > header > section > ul.k9GMp > li:nth-child(1) > span > span") || a[e]("#react-root > section > main > div > ul._3dEHb  > li:nth-child(1) > span > span"), Q = wa && U(wa[_].replace(/,/g, p))), b != Q && !isNaN(Q)) return !0
		}(sa = a[u](C))[q] = '<div style="position:fixed; bottom:5px; right:20px; z-index:100; background:#ffffff87; padding:0px 3px;" class="__pnl" pn></div>', sa = sa[ba], a[k][v](sa), va = b, Ha = 0, Ba = 0, (Ia = l => {
			var d, e, f, g, h, c, i, j, k;
			if(wa && !Ja(wa) && (Q = b), Q || Xa() || (d = !0), F && Ja(F) || (F = b, sa[_] = p, va = b, Ya(), F || (d = !0)), !d && (sa || Xa()) && Q) {
				if(b === va) {
					if(i = a[t], j = F, k = i[O](), va = j[O]().y - k.y, !(e = F[fa][0])) return;
					if(f = R.getComputedStyle(e), Ba = ia(f.marginBottom) || 0, g = (ia(f.marginTop) || 0) + Ba, !(Ha = e.offsetHeight + g)) return
				}
				h = a[t].scrollTop + a[t][ga], (c = 3 * Math.floor((h - va + Ba) / Ha)) > Q ? c = Q : c < 0 && (c = 0), sa[q] = c + " / " + Q + " &nbsp;&nbsp; " + Math.round(c / Q * 100) + "%"
			}
		})(), a[d]("scroll", Ia), R[d]("resize", (a => {
			va = b, Ia()
		}))
	}
	
	function Ya() {
		F = a[e]("#react-root > section > main > div > div._2z6nI > article.ySN3v > div:nth-child(1) > div")
	}
	ta = new Set,
		function() {
			var r, M, I, N, Q, R, w, k, S, T, U, B, H, Y, _, J, j = new Map,
				L = new Set,
				aa = Ma;
			
			function W(e, i) {
				var k, l, m, d, f, g;
				if(!I) {
					if(i) {
						if(L.has(e)) return;
						if(j.has(e)) return;
						j.set(e, i)
					}
					if(!M) {
						if(ua(h[c])) return j.clear(), void(r = b);
						for(k = !N, l = j[Symbol.iterator](), m = a[t][ga];;) {
							if(!j.size) return;
							if(r) d = r, r = b;
							else {
								if((d = l.next()).done) return;
								d = d.value
							}
							if(j.delete(d[0]), !ta.has(d[0]) && (!k || (g = (f = d[1][O]())[D] / 2, f[P] > g && f[P] < m + g))) break
						}
						d && (d[1][n](), M = !0, s((() => {
							M = !1, W()
						}), 253))
					}
				}
			}
			
			function X() {
				var n, h, o, e, p, i, j, k, g, l, m, d, q;
				if(!I && !aa && Q && (F && Ja(F) || (F = b, Ya(), F)))
					for(h = F[fa], o = a[t][ga], e = 0; e < h[f]; e++)
						if(j = (i = (p = h[e])[O]())[D] / 2, i[P] > j && i[P] < o + j)
							for(n = !0, k = p[fa], g = 0; g < k[f]; g++)(l = k[g].firstElementChild) && (q = (d = l[c])[f] + ("/" === d[d[f] - 1] ? -2 : -1), (m = d.slice(d.lastIndexOf("/", q) + 1, d[f] - 1)) && (Ua() || ta.has(m) || W(m, l)));
						else if(n) return
			}
			
			function ba() {
				N = 2 === E[g], (Q = 1 === E[g]) && X()
			}
			
			function ca(c) {
				var b;
				R || (R = 1, c && ~c[i]('"rate limited"') ? (s((function() {
					I = !1, R = 0, w[q] = p
				}), 12e4), b = "Instagram is blocking your requests (('Too many')). Try again in a couple minutes.") : b = "Instagram will block your requests for the entire session (('Too many')). You must let the session expire, so close the tab and come back in a couple hours. Do not leave this page open.", E[g] && (b += " You should disable preloaing when you do not intend to open the posts."), b += " While blocked, you can still view posts if you open them in a new tab.", w || (w = a[u](C), ja[v](w)), w[q] = `<span style="color:red; margin-right:20px;" title="${b}">Blocked!</span>`)
			}
			a[d]("scroll", X), X(), a[d]("mouseenter", (e => {
				var b;
				if(E[g] && !aa && (b = function(a) {
						var b, d;
						if(Z == a[o] && "FFVAD" == a.className && (d = (b = Sa(a)) && ua(b[c]))) return [d, b]
					}(e[l]))) {
					var [a, d] = b;
					Q ? a && j.has(a) && (r = [a, d]) : N && a && !ta.has(a) && W(a, d)
				}
			}), !0), Ea.add((a => {
				g == a && ba()
			})), ba(), H = V.XMLHttpRequest.prototype, Y = H.send, _ = H.open, J = new WeakMap, H.open = function(b, a) {
				J.set(this, a), _[A](this, arguments)
			}, H.send = function(l) {
				var d, g, a, f, b, e, j, k = J.get(this);
				if(k) {
					if(J.delete(this), d = new URL(k, h[c]), E[x] && 0 === d[z][i]("/logging")) return;
					if("/graphql/query/" === d[z] && (g = !0, a = d.searchParams.get("variables"), f = d.searchParams.get("query_hash"), b = (a = a && y.parse(a)) && a.shortcode, e = b, b && (B ? f === B : "fetch_comment_count" in a))) {
						if(ta.has(b) || L.has(b)) return;
						L.add(b)
					}
				}
				j = this[ra], this[ra] = function() {
					var a = this;
					var b;
					4 == a.readyState && (e && (ta.add(e), L.delete(e), e = !1), 200 == a[$] && g && f && !B && (b = 0 === a[ha][i]('{"') && y.parse(a[ha])) && (B || b.data?.p && (B = f)), 429 == a[$] && g && (I = !0, ca(a[ha]))), j && j[A](a, arguments)
				};
				try {
					Y[A](this, arguments)
				} catch (a) {}
			}, T = 'body > div[role="dialog"] a.coreSpriteRightPaginationArrow', U = 'body > div[role="dialog"] a.coreSpriteLeftPaginationArrow', G.add((c => {
				if(!S) {
					var b = a[e](k ? T : U);
					b && (S = 1, b[n](), s((function() {
						a[e](k ? U : T)?.[n](), s((function() {
							S = 0
						}), 1)
					}), 1))
				}
			})), a[d]("keyup", (a => {
				a.altKey || ("ArrowRight" == a.code ? k = 1 : "ArrowLeft" == a.code && (k = 0))
			})), a[d](n, (a => {
				"A" != !a[l][o] && (a[l][m][K]("coreSpriteRightPaginationArrow") ? k = 1 : a[l][m][K]("coreSpriteLeftPaginationArrow") && (k = 0))
			}), !0)
		}(), (Pa = ua(h[c])) && (E[r] || Ka(Pa))
}), 10))), ja = h[z], E = h[c], F = 0 === h[z][i]("/p/"), G = new X, ka(), W = V[da][ea], H = () => !0, V[da][ea] = H;
