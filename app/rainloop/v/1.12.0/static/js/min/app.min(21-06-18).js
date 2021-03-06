! function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, t.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "rainloop/v/0.0.0/static/js/min/", t(t.s = 201)
}([function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "FileType", function() {
        return o
    }), n.d(t, "StorageResultType", function() {
        return i
    }), n.d(t, "Focused", function() {
        return a
    }), n.d(t, "State", function() {
        return r
    }), n.d(t, "StateType", function() {
        return s
    }), n.d(t, "Capa", function() {
        return c
    }), n.d(t, "KeyState", function() {
        return l
    }), n.d(t, "FolderType", function() {
        return u
    }), n.d(t, "ServerFolderType", function() {
        return d
    }), n.d(t, "LoginSignMeTypeAsString", function() {
        return p
    }), n.d(t, "LoginSignMeType", function() {
        return h
    }), n.d(t, "ComposeType", function() {
        return f
    }), n.d(t, "UploadErrorCode", function() {
        return m
    }), n.d(t, "SetSystemFoldersNotification", function() {
        return b
    }), n.d(t, "ClientSideKeyName", function() {
        return g
    }), n.d(t, "EventKeyCode", function() {
        return y
    }), n.d(t, "MessageSetAction", function() {
        return v
    }), n.d(t, "MessageSelectAction", function() {
        return S
    }), n.d(t, "DesktopNotification", function() {
        return O
    }), n.d(t, "MessagePriority", function() {
        return w
    }), n.d(t, "EditorDefaultType", function() {
        return T
    }), n.d(t, "ServerSecure", function() {
        return C
    }), n.d(t, "SearchDateType", function() {
        return A
    }), n.d(t, "SaveSettingsStep", function() {
        return E
    }), n.d(t, "Layout", function() {
        return F
    }), n.d(t, "FilterConditionField", function() {
        return j
    }), n.d(t, "FilterConditionType", function() {
        return N
    }), n.d(t, "FiltersAction", function() {
        return R
    }), n.d(t, "FilterRulesType", function() {
        return I
    }), n.d(t, "SignedVerifyStatus", function() {
        return L
    }), n.d(t, "ContactPropertyType", function() {
        return _
    }), n.d(t, "Magics", function() {
        return P
    }), n.d(t, "Ports", function() {
        return D
    }), n.d(t, "Notification", function() {
        return M
    });
    var o = {
            Unknown: "unknown",
            Text: "text",
            Html: "html",
            Code: "code",
            Eml: "eml",
            WordText: "word-text",
            Pdf: "pdf",
            Image: "image",
            Audio: "audio",
            Video: "video",
            Sheet: "sheet",
            Presentation: "presentation",
            Certificate: "certificate",
            CertificateBin: "certificate-bin",
            Archive: "archive"
        },
        i = {
            Success: "success",
            Abort: "abort",
            Error: "error",
            Unload: "unload"
        },
        a = {
            None: "none",
            MessageList: "message-list",
            MessageView: "message-view",
            FolderList: "folder-list"
        },
        r = {
            Empty: 10,
            Login: 20,
            Auth: 30
        },
        s = {
            Webmail: 0,
            Admin: 1
        },
        c = {
            TwoFactor: "TWO_FACTOR",
            TwoFactorForce: "TWO_FACTOR_FORCE",
            OpenPGP: "OPEN_PGP",
            Prefetch: "PREFETCH",
            Gravatar: "GRAVATAR",
            Folders: "FOLDERS",
            Composer: "COMPOSER",
            Contacts: "CONTACTS",
            Reload: "RELOAD",
            Search: "SEARCH",
            SearchAdv: "SEARCH_ADV",
            MessageActions: "MESSAGE_ACTIONS",
            MessageListActions: "MESSAGELIST_ACTIONS",
            AttachmentsActions: "ATTACHMENTS_ACTIONS",
            DangerousActions: "DANGEROUS_ACTIONS",
            Settings: "SETTINGS",
            Help: "HELP",
            Themes: "THEMES",
            UserBackground: "USER_BACKGROUND",
            Sieve: "SIEVE",
            Filters: "FILTERS",
            AttachmentThumbnails: "ATTACHMENT_THUMBNAILS",
            Templates: "TEMPLATES",
            AutoLogout: "AUTOLOGOUT",
            AdditionalAccounts: "ADDITIONAL_ACCOUNTS",
            Identities: "IDENTITIES"
        },
        l = {
            All: "all",
            None: "none",
            ContactList: "contact-list",
            MessageList: "message-list",
            FolderList: "folder-list",
            MessageView: "message-view",
            Compose: "compose",
            Settings: "settings",
            Menu: "menu",
            PopupComposeOpenPGP: "compose-open-pgp",
            PopupMessageOpenPGP: "message-open-pgp",
            PopupViewOpenPGP: "view-open-pgp",
            PopupKeyboardShortcutsHelp: "popup-keyboard-shortcuts-help",
            PopupAsk: "popup-ask"
        },
        u = {
            Inbox: 10,
            SentItems: 11,
            Draft: 12,
            Trash: 13,
            Spam: 14,
            Archive: 15,
            NotSpam: 80,
            User: 99
        },
        d = {
            USER: 0,
            INBOX: 1,
            SENT: 2,
            DRAFTS: 3,
            JUNK: 4,
            TRASH: 5,
            IMPORTANT: 10,
            FLAGGED: 11,
            ALL: 12
        },
        p = {
            DefaultOff: "defaultoff",
            DefaultOn: "defaulton",
            Unused: "unused"
        },
        h = {
            DefaultOff: 0,
            DefaultOn: 1,
            Unused: 2
        },
        f = {
            Empty: "empty",
            Reply: "reply",
            ReplyAll: "replyall",
            Forward: "forward",
            ForwardAsAttachment: "forward-as-attachment",
            Draft: "draft",
            EditAsNew: "editasnew"
        },
        m = {
            Normal: 0,
            FileIsTooBig: 1,
            FilePartiallyUploaded: 2,
            FileNoUploaded: 3,
            MissingTempFolder: 4,
            FileOnSaveingError: 5,
            FileType: 98,
            Unknown: 99
        },
        b = {
            None: 0,
            Sent: 1,
            Draft: 2,
            Spam: 3,
            Trash: 4,
            Archive: 5
        },
        g = {
            FoldersLashHash: 0,
            MessagesInboxLastHash: 1,
            MailBoxListSize: 2,
            ExpandedFolders: 3,
            FolderListSize: 4,
            MessageListSize: 5,
            LastReplyAction: 6,
            LastSignMe: 7,
            ComposeLastIdentityID: 8,
            MessageHeaderFullInfo: 9,
            MessageAttachmnetControls: 10
        },
        y = {
            Backspace: 8,
            Tab: 9,
            Enter: 13,
            Esc: 27,
            PageUp: 33,
            PageDown: 34,
            Left: 37,
            Right: 39,
            Up: 38,
            Down: 40,
            End: 35,
            Home: 36,
            Space: 32,
            Insert: 45,
            Delete: 46,
            A: 65,
            S: 83
        },
        v = {
            SetSeen: 0,
            UnsetSeen: 1,
            SetFlag: 2,
            UnsetFlag: 3
        },
        S = {
            All: 0,
            None: 1,
            Invert: 2,
            Unseen: 3,
            Seen: 4,
            Flagged: 5,
            Unflagged: 6
        },
        O = {
            Allowed: 0,
            NotAllowed: 1,
            Denied: 2,
            NotSupported: 9
        },
        w = {
            Low: 5,
            Normal: 3,
            High: 1
        },
        T = {
            Html: "Html",
            Plain: "Plain",
            HtmlForced: "HtmlForced",
            PlainForced: "PlainForced"
        },
        C = {
            None: 0,
            SSL: 1,
            TLS: 2
        },
        A = {
            All: -1,
            Days3: 3,
            Days7: 7,
            Month: 30
        },
        E = {
            Animate: -2,
            Idle: -1,
            TrueResult: 1,
            FalseResult: 0
        },
        F = {
            NoPreview: 0,
            SidePreview: 1,
            BottomPreview: 2
        },
        j = {
            From: "From",
            Recipient: "Recipient",
            Subject: "Subject",
            Header: "Header",
            Size: "Size"
        },
        N = {
            Contains: "Contains",
            NotContains: "NotContains",
            EqualTo: "EqualTo",
            NotEqualTo: "NotEqualTo",
            Regex: "Regex",
            Over: "Over",
            Under: "Under"
        },
        R = {
            None: "None",
            MoveTo: "MoveTo",
            Discard: "Discard",
            Vacation: "Vacation",
            Reject: "Reject",
            Forward: "Forward"
        },
        I = {
            All: "All",
            Any: "Any"
        },
        L = {
            UnknownPublicKeys: -4,
            UnknownPrivateKey: -3,
            Unverified: -2,
            Error: -1,
            None: 0,
            Success: 1
        },
        _ = {
            Unknown: 0,
            FullName: 10,
            FirstName: 15,
            LastName: 16,
            MiddleName: 16,
            Nick: 18,
            NamePrefix: 20,
            NameSuffix: 21,
            Email: 30,
            Phone: 31,
            Web: 32,
            Birthday: 40,
            Facebook: 90,
            Skype: 91,
            GitHub: 92,
            Note: 110,
            Custom: 250
        },
        P = {
            EventWhichMouseMiddle: 3,
            ifvisibleIdle10s: 10,
            BitLength2048: 2048,
            BitLength1024: 1024,
            Size350px: 350,
            Size50px: 50,
            Size20px: 20,
            Size1px: 1,
            Time30mInMin: 30,
            Time60m: 36e5,
            Time30m: 18e5,
            Time20m: 12e5,
            Time15m: 9e5,
            Time10m: 6e5,
            Time5m: 3e5,
            Time3m: 18e4,
            Time2m: 12e4,
            Time1m: 6e4,
            Time30s: 3e4,
            Time10s: 1e4,
            Time7s: 7e3,
            Time5s: 5e3,
            Time3s: 3e3,
            Time1s: 1e3,
            Time500ms: 500,
            Time350ms: 350,
            Time250ms: 250,
            Time200ms: 200,
            Time100ms: 100,
            Time50ms: 50,
            Time20ms: 20,
            Time10ms: 10,
            Time1ms: 1
        },
        D = {
            Imap: 143,
            ImapSsl: 993,
            Smtp: 25,
            SmtpSsl: 465,
            SmtpStartTls: 587
        },
        M = {
            InvalidToken: 101,
            AuthError: 102,
            AccessError: 103,
            ConnectionError: 104,
            CaptchaError: 105,
            SocialFacebookLoginAccessDisable: 106,
            SocialTwitterLoginAccessDisable: 107,
            SocialGoogleLoginAccessDisable: 108,
            DomainNotAllowed: 109,
            AccountNotAllowed: 110,
            AccountTwoFactorAuthRequired: 120,
            AccountTwoFactorAuthError: 121,
            CouldNotSaveNewPassword: 130,
            CurrentPasswordIncorrect: 131,
            NewPasswordShort: 132,
            NewPasswordWeak: 133,
            NewPasswordForbidden: 134,
            ContactsSyncError: 140,
            CantGetMessageList: 201,
            CantGetMessage: 202,
            CantDeleteMessage: 203,
            CantMoveMessage: 204,
            CantCopyMessage: 205,
            CantSaveMessage: 301,
            CantSendMessage: 302,
            InvalidRecipients: 303,
            CantSaveFilters: 351,
            CantGetFilters: 352,
            FiltersAreNotCorrect: 355,
            CantCreateFolder: 400,
            CantRenameFolder: 401,
            CantDeleteFolder: 402,
            CantSubscribeFolder: 403,
            CantUnsubscribeFolder: 404,
            CantDeleteNonEmptyFolder: 405,
            CantSaveSettings: 501,
            CantSavePluginSettings: 502,
            DomainAlreadyExists: 601,
            CantInstallPackage: 701,
            CantDeletePackage: 702,
            InvalidPluginPackage: 703,
            UnsupportedPluginPackage: 704,
            LicensingServerIsUnavailable: 710,
            LicensingExpired: 711,
            LicensingBanned: 712,
            DemoSendMessageError: 750,
            DemoAccountError: 751,
            AccountAlreadyExists: 801,
            AccountDoesNotExist: 802,
            MailServerError: 901,
            ClientViewError: 902,
            InvalidInputArgument: 903,
            AjaxFalse: 950,
            AjaxAbort: 951,
            AjaxParse: 952,
            AjaxTimeout: 953,
            UnknownNotification: 999,
            UnknownError: 999
        }
}, function(e, t, n) {
    "use strict";
    var o = n(3),
        i = n.n(o),
        a = n(4),
        r = n.n(a),
        s = n(7),
        c = n.n(s),
        l = i.a.Opentip || {};
    l.styles = l.styles || {}, l.styles.rainloop = {
        extends: "standard",
        fixed: !0,
        target: !0,
        delay: .2,
        hideDelay: 0,
        hideEffect: "fade",
        hideEffectDuration: .2,
        showEffect: "fade",
        showEffectDuration: .2,
        showOn: "mouseover click",
        removeElementsOnHide: !0,
        background: "#fff",
        shadow: !1,
        borderColor: "#999",
        borderRadius: 2,
        borderWidth: 1
    }, l.styles.rainloopTip = {
        extends: "rainloop",
        delay: .4,
        group: "rainloopTips"
    }, l.styles.rainloopErrorTip = {
        extends: "rainloop",
        className: "rainloopErrorTip"
    };
    var u = n(97),
        d = n.n(u),
        p = n(0),
        h = i.a.ko,
        f = c()(i.a);
    h.bindingHandlers.updateWidth = {
        init: function(e, t) {
            var n = c()(e),
                o = t(),
                a = function() {
                    o(n.width()), i.a.setTimeout(function() {
                        o(n.width())
                    }, p.Magics.Time500ms)
                };
            f.on("resize", a), a(), h.utils.domNodeDisposal.addDisposeCallback(e, function() {
                f.off("resize", a)
            })
        }
    }, h.bindingHandlers.editor = {
        init: function(e, t) {
            var o = null,
                i = t(),
                a = n(95).default,
                r = function() {
                    i && i.__editor && i.__editor.setHtmlOrPlain(i())
                },
                s = function() {
                    i && i.__editor && i(i.__editor.getDataWithHtmlMark())
                };
            h.isObservable(i) && a && (o = new a(e, s, function() {
                i.__editor = o, r()
            }, s), i.__fetchEditorValue = s, i.subscribe(r))
        }
    }, h.bindingHandlers.json = {
        init: function(e, t) {
            c()(e).text(i.a.JSON.stringify(h.unwrap(t())))
        },
        update: function(e, t) {
            c()(e).text(i.a.JSON.stringify(h.unwrap(t())))
        }
    }, h.bindingHandlers.scrollerShadows = {
        init: function(e) {
            var t = c()(e),
                n = t.find("[data-scroller-shadows-content]")[0] || null,
                o = r.a.throttle(function() {
                    t.toggleClass("scroller-shadow-top", 8 < n.scrollTop).toggleClass("scroller-shadow-bottom", n.scrollTop + 8 < n.scrollHeight - n.clientHeight)
                }, 100);
            n && (c()(n).on("scroll resize", o), f.on("resize", o), h.utils.domNodeDisposal.addDisposeCallback(n, function() {
                c()(n).off(), f.off("resize", o)
            }))
        }
    }, h.bindingHandlers.pikaday = {
        init: function(e, t, n, o, i) {
            h.bindingHandlers.textInput.init(e, t, n, o, i), d.a && (e.__pikaday = new d.a({
                field: e
            }))
        }
    }, h.bindingHandlers.visibleAnimated = {
        init: function(e, t) {
            var n = c()(e);
            n.addClass("rl-animated-inited"), h.unwrap(t()) ? n.show() : n.hide()
        },
        update: function(e, t) {
            var n = c()(e);
            h.unwrap(t()) ? (n.addClass("rl-animated-hidden").show(), r.a.delay(function() {
                n.removeClass("rl-animated-hidden")
            }, 10)) : n.hide().removeClass("rl-animated-hidden")
        }
    }, h.bindingHandlers.tooltip = {
        init: function(e, t) {
            var o = c()(e),
                i = t(),
                a = "on" === (o.data("tooltip-mobile") || "off"),
                s = n(6);
            if (!s.bMobileDevice || a) {
                var u = !h.isObservable(i) && r.a.isFunction(i) ? i() : h.unwrap(i);
                if (e.__opentip = new l(e, {
                        style: "rainloopTip",
                        element: e,
                        tipJoint: o.data("tooltip-join") || "bottom"
                    }), s.dropdownVisibility.subscribe(function(t) {
                        t && e.__opentip.hide()
                    }), "" === u ? (e.__opentip.hide(), e.__opentip.deactivate(), e.__opentip.setContent("")) : e.__opentip.activate(), "on" === (o.data("tooltip-i18n") || "on")) {
                    var d = n(10);
                    e.__opentip.setContent(d.i18n(u)), d.trigger.subscribe(function() {
                        e.__opentip.setContent(d.i18n(u))
                    }), s.dropdownVisibility.subscribe(function() {
                        e && e.__opentip && e.__opentip.setContent(d.i18n(u))
                    })
                } else e.__opentip.setContent(u);
                f.on("rl.tooltips.diactivate", function() {
                    e.__opentip.hide(), e.__opentip.deactivate()
                }), f.on("rl.tooltips.activate", function() {
                    e.__opentip.activate()
                })
            }
        },
        update: function(e, t) {
            var o = c()(e),
                i = t(),
                a = "on" === (o.data("tooltip-mobile") || "off");
            if ((!n(6).bMobileDevice || a) && e.__opentip) {
                var s = !h.isObservable(i) && r.a.isFunction(i) ? i() : h.unwrap(i);
                s ? (e.__opentip.setContent("on" === (o.data("tooltip-i18n") || "on") ? n(10).i18n(s) : s), e.__opentip.activate()) : (e.__opentip.hide(), e.__opentip.deactivate(), e.__opentip.setContent(""))
            }
        }
    }, h.bindingHandlers.tooltipErrorTip = {
        init: function(e) {
            var t = c()(e);
            e.__opentip = new l(e, {
                    style: "rainloopErrorTip",
                    hideOn: "mouseout click",
                    element: e,
                    tipJoint: t.data("tooltip-join") || "top"
                }), e.__opentip.deactivate(), c()(i.a.document).on("click", function() {
                    e && e.__opentip && e.__opentip.hide()
                }),
                function(e) {
                    h.utils.domNodeDisposal.addDisposeCallback(e, function() {
                        e && e.__opentip && e.__opentip.deactivate()
                    })
                }(e)
        },
        update: function(e, t) {
            var n = c()(e),
                o = t(),
                i = !h.isObservable(o) && r.a.isFunction(o) ? o() : h.unwrap(o),
                a = e.__opentip;
            a && ("" === i ? (a.hide(), a.deactivate(), a.setContent("")) : r.a.delay(function() {
                n.is(":visible") ? (a.setContent(i), a.activate(), a.show()) : (a.hide(), a.deactivate(), a.setContent(""))
            }, p.Magics.Time100ms))
        }
    }, h.bindingHandlers.registrateBootstrapDropdown = {
        init: function(e) {
            var t = n(6);
            t && t.data.aBootstrapDropdowns && (t.data.aBootstrapDropdowns.push(c()(e)), c()(e).click(function() {
                n(2).detectDropdownVisibility()
            }))
        }
    }, h.bindingHandlers.openDropdownTrigger = {
        update: function(e, t) {
            if (h.unwrap(t())) {
                var o = c()(e);
                o.hasClass("open") || o.find(".dropdown-toggle").dropdown("toggle"), o.find(".dropdown-toggle").focus(), n(2).detectDropdownVisibility(), t()(!1)
            }
        }
    }, h.bindingHandlers.dropdownCloser = {
        init: function(e) {
            c()(e).closest(".dropdown").on("click", ".e-item", function() {
                c()(e).dropdown("toggle")
            })
        }
    }, h.bindingHandlers.popover = {
        init: function(e, t) {
            c()(e).popover(h.unwrap(t())), h.utils.domNodeDisposal.addDisposeCallback(e, function() {
                c()(e).popover("destroy")
            })
        }
    }, h.bindingHandlers.csstext = {}, h.bindingHandlers.csstext.init = h.bindingHandlers.csstext.update = function(e, t) {
        e && e.styleSheet && void 0 !== e.styleSheet.cssText ? e.styleSheet.cssText = h.unwrap(t()) : c()(e).text(h.unwrap(t()))
    }, h.bindingHandlers.resizecrop = {
        init: function(e) {
            c()(e).addClass("resizecrop").resizecrop({
                width: "100",
                height: "100",
                wrapperCSS: {
                    "border-radius": "10px"
                }
            })
        },
        update: function(e, t) {
            t()(), c()(e).resizecrop({
                width: "100",
                height: "100"
            })
        }
    }, h.bindingHandlers.onKeyDown = {
        init: function(e, t, n, o) {
            c()(e).on("keydown.koOnKeyDown", function(e) {
                return !e || t().call(o, e)
            }), h.utils.domNodeDisposal.addDisposeCallback(e, function() {
                c()(e).off("keydown.koOnKeyDown")
            })
        }
    }, h.bindingHandlers.onEnter = {
        init: function(e, t, n, o) {
            c()(e).on("keypress.koOnEnter", function(n) {
                n && 13 === i.a.parseInt(n.keyCode, 10) && (c()(e).trigger("change"), t().call(o))
            }), h.utils.domNodeDisposal.addDisposeCallback(e, function() {
                c()(e).off("keypress.koOnEnter")
            })
        }
    }, h.bindingHandlers.onSpace = {
        init: function(e, t, n, o) {
            c()(e).on("keyup.koOnSpace", function(e) {
                e && 32 === i.a.parseInt(e.keyCode, 10) && t().call(o, e)
            }), h.utils.domNodeDisposal.addDisposeCallback(e, function() {
                c()(e).off("keyup.koOnSpace")
            })
        }
    }, h.bindingHandlers.onTab = {
        init: function(e, t, n, o) {
            c()(e).on("keydown.koOnTab", function(e) {
                return !e || 9 !== i.a.parseInt(e.keyCode, 10) || t().call(o, !!e.shiftKey)
            }), h.utils.domNodeDisposal.addDisposeCallback(e, function() {
                c()(e).off("keydown.koOnTab")
            })
        }
    }, h.bindingHandlers.onEsc = {
        init: function(e, t, n, o) {
            c()(e).on("keyup.koOnEsc", function(n) {
                n && 27 === i.a.parseInt(n.keyCode, 10) && (c()(e).trigger("change"), t().call(o))
            }), h.utils.domNodeDisposal.addDisposeCallback(e, function() {
                c()(e).off("keyup.koOnEsc")
            })
        }
    }, h.bindingHandlers.clickOnTrue = {
        update: function(e, t) {
            h.unwrap(t()) && c()(e).click()
        }
    }, h.bindingHandlers.modal = {
        init: function(e, t) {
            var o = n(6),
                i = n(2);
            c()(e).toggleClass("fade", !o.bMobileDevice).modal({
                keyboard: !1,
                show: h.unwrap(t())
            }).on("shown.koModal", i.windowResizeCallback).find(".close").on("click.koModal", function() {
                t()(!1)
            }), h.utils.domNodeDisposal.addDisposeCallback(e, function() {
                c()(e).off("shown.koModal").find(".close").off("click.koModal")
            })
        },
        update: function(e, t) {
            var o = n(6);
            c()(e).modal(h.unwrap(t()) ? "show" : "hide"), o.$html.hasClass("rl-anim") && (o.$html.addClass("rl-modal-animation"), r.a.delay(function() {
                o.$html.removeClass("rl-modal-animation")
            }, p.Magics.Time500ms))
        }
    }, h.bindingHandlers.moment = {
        init: function(e, t) {
            n(34).momentToNode(c()(e).addClass("moment").data("moment-time", h.unwrap(t())))
        },
        update: function(e, t) {
            n(34).momentToNode(c()(e).data("moment-time", h.unwrap(t())))
        }
    }, h.bindingHandlers.i18nInit = {
        init: function(e) {
            n(10).i18nToNodes(e)
        }
    }, h.bindingHandlers.translatorInit = {
        init: function(e) {
            n(10).i18nToNodes(e)
        }
    }, h.bindingHandlers.i18nUpdate = {
        update: function(e, t) {
            h.unwrap(t()), n(10).i18nToNodes(e)
        }
    }, h.bindingHandlers.link = {
        update: function(e, t) {
            c()(e).attr("href", h.unwrap(t()))
        }
    }, h.bindingHandlers.title = {
        update: function(e, t) {
            c()(e).attr("title", h.unwrap(t()))
        }
    }, h.bindingHandlers.textF = {
        init: function(e, t) {
            c()(e).text(h.unwrap(t()))
        }
    }, h.bindingHandlers.initDom = {
        init: function(e, t) {
            t()(e)
        }
    }, h.bindingHandlers.initFixedTrigger = {
        init: function(e, t) {
            var n = h.unwrap(t()),
                o = c()(e),
                i = n[1] || 0,
                a = c()(n[0] || null);
            (a = a[0] ? a : null) && f.resize(function() {
                var e = a ? a.offset() : null;
                e && e.top && o.css("top", e.top + i)
            })
        }
    }, h.bindingHandlers.initResizeTrigger = {
        init: function(e, t) {
            var n = h.unwrap(t());
            c()(e).css({
                height: n[1],
                "min-height": n[1]
            })
        },
        update: function(e, t) {
            var o = n(2),
                i = n(6),
                a = h.unwrap(t()),
                r = o.pInt(a[1]),
                s = 0,
                l = c()(e).offset().top;
            0 < l && (l += o.pInt(a[2]), r < (s = i.$win.height() - l) && (r = s), c()(e).css({
                height: r,
                "min-height": r
            }))
        }
    }, h.bindingHandlers.appendDom = {
        update: function(e, t) {
            c()(e).hide().empty().append(h.unwrap(t())).show()
        }
    }, h.bindingHandlers.draggable = {
        init: function(e, t, o) {
            var a = n(6),
                r = n(2);
            if (!a.bMobileDevice) {
                var s = o(),
                    l = s && s.droppableSelector ? s.droppableSelector : "",
                    u = {
                        distance: 20,
                        handle: ".dragHandle",
                        cursorAt: {
                            top: 22,
                            left: 3
                        },
                        refreshPositions: !0,
                        scroll: !0,
                        drag: null,
                        stop: null,
                        helper: null
                    };
                l && (u.drag = function(e) {
                    c()(l).each(function() {
                        var t = c()(this),
                            n = t.offset(),
                            o = n.top + t.height();
                        if (i.a.clearInterval(t.data("timerScroll")), t.data("timerScroll", !1), e.pageX >= n.left && e.pageX <= n.left + t.width()) {
                            if (e.pageY >= o - 100 && e.pageY <= o) {
                                var a = function() {
                                    t.scrollTop(t.scrollTop() + 3), r.windowResize()
                                };
                                t.data("timerScroll", i.a.setInterval(a, 10)), a()
                            }
                            if (e.pageY >= n.top && e.pageY <= n.top + 100) {
                                var s = function() {
                                    t.scrollTop(t.scrollTop() - 3), r.windowResize()
                                };
                                t.data("timerScroll", i.a.setInterval(s, 10)), s()
                            }
                        }
                    })
                }, u.stop = function() {
                    c()(l).each(function() {
                        var e = c()(this);
                        i.a.clearInterval(e.data("timerScroll")), e.data("timerScroll", !1)
                    })
                }), u.helper = function(e) {
                    return t()(e && e.target ? h.dataFor(e.target) : null)
                }, c()(e).draggable(u).on("mousedown.koDraggable", function() {
                    r.removeInFocus()
                }), h.utils.domNodeDisposal.addDisposeCallback(e, function() {
                    c()(e).off("mousedown.koDraggable").draggable("destroy")
                })
            }
        }
    }, h.bindingHandlers.droppable = {
        init: function(e, t, o) {
            if (!n(6).bMobileDevice) {
                var i = t(),
                    a = o(),
                    r = a && a.droppableOver ? a.droppableOver : null,
                    s = a && a.droppableOut ? a.droppableOut : null,
                    l = {
                        tolerance: "pointer",
                        hoverClass: "droppableHover",
                        drop: null,
                        over: null,
                        out: null
                    };
                i && (l.drop = function(e, t) {
                    i(e, t)
                }, r && (l.over = function(e, t) {
                    r(e, t)
                }), s && (l.out = function(e, t) {
                    s(e, t)
                }), c()(e).droppable(l), h.utils.domNodeDisposal.addDisposeCallback(e, function() {
                    c()(e).droppable("destroy")
                }))
            }
        }
    }, h.bindingHandlers.nano = {
        init: function(e) {
            var t = n(6),
                o = n(5);
            t.bDisableNanoScroll || o.appSettingsGet("useNativeScrollbars") || c()(e).addClass("nano").nanoScroller({
                iOSNativeScrolling: !1,
                preventPageScrolling: !0
            })
        }
    }, h.bindingHandlers.saveTrigger = {
        init: function(e) {
            var t = c()(e);
            t.data("save-trigger-type", t.is("input[type=text],input[type=email],input[type=password],select,textarea") ? "input" : "custom"), "custom" === t.data("save-trigger-type") ? t.append('&nbsp;&nbsp;<i class="icon-spinner animated"></i><i class="icon-remove error"></i><i class="icon-ok success"></i>').addClass("settings-saved-trigger") : t.addClass("settings-saved-trigger-input")
        },
        update: function(e, t) {
            var n = h.unwrap(t()),
                o = c()(e);
            if ("custom" === o.data("save-trigger-type")) switch (n.toString()) {
                case "1":
                    o.find(".animated,.error").hide().removeClass("visible").end().find(".success").show().addClass("visible");
                    break;
                case "0":
                    o.find(".animated,.success").hide().removeClass("visible").end().find(".error").show().addClass("visible");
                    break;
                case "-2":
                    o.find(".error,.success").hide().removeClass("visible").end().find(".animated").show().addClass("visible");
                    break;
                default:
                    o.find(".animated").hide().end().find(".error,.success").removeClass("visible")
            } else switch (n.toString()) {
                case "1":
                    o.addClass("success").removeClass("error");
                    break;
                case "0":
                    o.addClass("error").removeClass("success");
                    break;
                case "-2":
                    break;
                default:
                    o.removeClass("error success")
            }
        }
    }, h.bindingHandlers.emailsTags = {
        init: function(e, t, o) {
            var i = n(2),
                a = n(44).default,
                s = c()(e),
                l = t(),
                u = o().autoCompleteSource || null,
                d = [",", ";", "\n"];
            s.inputosaurus({
                parseOnBlur: !0,
                allowDragAndDrop: !0,
                focusCallback: function(e) {
                    l && l.focused && l.focused(!!e)
                },
                inputDelimiters: d,
                autoCompleteSource: u,
                splitHook: function(e) {
                    var t = i.trim(e);
                    return t && -1 < d.indexOf(t.substr(-1)) ? a.splitEmailLine(e) : null
                },
                parseHook: function(e) {
                    return r.a.map(r.a.flatten(r.a.map(e, function(e) {
                        var t = a.parseEmailLine(e);
                        return t.length ? t : e
                    })), function(e) {
                        return r.a.isObject(e) ? [e.toLine(!1), e] : [e, null]
                    })
                },
                change: function(e) {
                    s.data("EmailsTagsValue", e.target.value), l(e.target.value)
                }
            }), l && l.focused && l.focused.subscribe && l.focused.subscribe(function(e) {
                s.inputosaurus(e ? "focus" : "blur")
            })
        },
        update: function(e, t) {
            var n = c()(e),
                o = t(),
                i = h.unwrap(o);
            n.data("EmailsTagsValue") !== i && (n.val(i), n.data("EmailsTagsValue", i), n.inputosaurus("refresh"))
        }
    }, h.bindingHandlers.command = {
        init: function(e, t, n, o, i) {
            var a = c()(e),
                s = t();
            if (!s || !s.isCommand) throw new Error("Value should be a command");
            if (s.enabled || (s.enabled = h.observable(!0)), !s.canExecute) {
                var l = s.__realCanExecute;
                r.a.isFunction(l) ? s.canExecute = h.computed(function() {
                    return s.enabled() && l.call(o, o)
                }) : s.canExecute = h.computed(function() {
                    return s.enabled() && !!l
                })
            }
            a.addClass("command"), h.bindingHandlers[a.is("form") ? "submit" : "click"].init(e, t, n, o, i)
        },
        update: function(e, t) {
            var n = c()(e),
                o = t(),
                i = o.enabled();
            n.toggleClass("command-not-enabled", !i), i && (i = o.canExecute(), n.toggleClass("command-can-not-be-execute", !i)), n.toggleClass("command-disabled disable disabled", !i).toggleClass("no-disabled", !!i), (n.is("input") || n.is("button")) && n.prop("disabled", !i)
        }
    }, h.extenders.trimmer = function(e) {
        var t = n(2),
            o = h.computed({
                read: e,
                write: function(n) {
                    e(t.trim(n.toString()))
                }
            });
        return o(e()), o
    }, h.extenders.posInterer = function(e, t) {
        var o = n(2),
            i = h.computed({
                read: e,
                write: function(n) {
                    var i = o.pInt(n.toString(), t);
                    0 >= i && (i = t), i === e() && "" + i != "" + n && e(i + 1), e(i)
                }
            });
        return i(e()), i
    }, h.extenders.limitedList = function(e, t) {
        var o = n(2),
            i = h.computed({
                read: e,
                write: function(n) {
                    var i = h.unwrap(e),
                        a = h.unwrap(t);
                    o.isNonEmptyArray(a) ? -1 < o.inArray(n, a) ? e(n) : -1 < o.inArray(i, a) ? (e(i + " "), e(i)) : (e(a[0] + " "), e(a[0])) : e("")
                }
            }).extend({
                notify: "always"
            });
        return i(e()), i.valueHasMutated || (i.valueHasMutated = function() {
            e.valueHasMutated()
        }), i
    }, h.extenders.reversible = function(e) {
        var t = e();
        return e.commit = function() {
            t = e()
        }, e.reverse = function() {
            e(t)
        }, e.commitedValue = function() {
            return t
        }, e
    }, h.extenders.toggleSubscribe = function(e, t) {
        return e.subscribe(t[1], t[0], "beforeChange"), e.subscribe(t[2], t[0]), e
    }, h.extenders.toggleSubscribeProperty = function(e, t) {
        var n = t[1];
        return n && (e.subscribe(function(e) {
            e && e[n] && e[n](!1)
        }, t[0], "beforeChange"), e.subscribe(function(e) {
            e && e[n] && e[n](!0)
        }, t[0])), e
    }, h.extenders.falseTimeout = function(e, t) {
        return e.iFalseTimeoutTimeout = 0, e.subscribe(function(o) {
            o && (i.a.clearTimeout(e.iFalseTimeoutTimeout), e.iFalseTimeoutTimeout = i.a.setTimeout(function() {
                e(!1), e.iFalseTimeoutTimeout = 0
            }, n(2).pInt(t)))
        }), e
    }, h.extenders.specialThrottle = function(e, t) {
        return e.iSpecialThrottleTimeoutValue = n(2).pInt(t), 0 < e.iSpecialThrottleTimeoutValue ? (e.iSpecialThrottleTimeout = 0, e.valueForRead = h.observable(!!e()).extend({
            throttle: 10
        }), h.computed({
            read: e.valueForRead,
            write: function(t) {
                t ? e.valueForRead(t) : e.valueForRead() ? (i.a.clearTimeout(e.iSpecialThrottleTimeout), e.iSpecialThrottleTimeout = i.a.setTimeout(function() {
                    e.valueForRead(!1), e.iSpecialThrottleTimeout = 0
                }, e.iSpecialThrottleTimeoutValue)) : e.valueForRead(t)
            }
        })) : e
    }, h.extenders.idleTrigger = function(e) {
        return e.trigger = h.observable(p.SaveSettingsStep.Idle), e
    }, h.observable.fn.idleTrigger = function() {
        return this.extend({
            idleTrigger: !0
        })
    }, h.observable.fn.validateNone = function() {
        return this.hasError = h.observable(!1), this
    }, h.observable.fn.validateEmail = function() {
        var e = this;
        return this.hasError = h.observable(!1), this.subscribe(function(t) {
            e.hasError("" !== t && !/^[^@\s]+@[^@\s]+$/.test(t))
        }), this.valueHasMutated(), this
    }, h.observable.fn.validateSimpleEmail = function() {
        var e = this;
        return this.hasError = h.observable(!1), this.subscribe(function(t) {
            e.hasError("" !== t && !/^.+@.+$/.test(t))
        }), this.valueHasMutated(), this
    }, h.observable.fn.deleteAccessHelper = function() {
        return this.extend({
            falseTimeout: 3e3
        }).extend({
            toggleSubscribeProperty: [this, "deleteAccess"]
        }), this
    }, h.observable.fn.validateFunc = function(e) {
        var t = this;
        return this.hasFuncError = h.observable(!1), r.a.isFunction(e) && (this.subscribe(function(n) {
            t.hasFuncError(!e(n))
        }), this.valueHasMutated()), this
    }, t.a = h
}, function(e, t, n) {
    "use strict";

    function o(e) {
        try {
            e()
        } catch (e) {}
    }

    function i(e) {
        return !Ee(e) && !Fe(e)
    }

    function a(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return !!i(e) && (t ? /^[0-9]*$/.test(e.toString()) : /^[1-9]+[0-9]*$/.test(e.toString()))
    }

    function r(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = i(e) && "" !== e ? ce.a.parseInt(e, 10) : t;
        return ce.a.isNaN(n) ? t : n
    }

    function s(e) {
        return i(e) ? "" + e : ""
    }

    function c(e) {
        return !!e
    }

    function l(e) {
        return e ? "1" : "0"
    }

    function u(e) {
        return Te(e) && 0 < e.length
    }

    function d(e) {
        return ce.a.encodeURIComponent(e)
    }

    function p(e) {
        return ce.a.decodeURIComponent(e)
    }

    function h(e) {
        return ce.a.decodeURI(e)
    }

    function f(e) {
        return ce.a.encodeURI(e)
    }

    function m(e) {
        var t, n = 0,
            o = null,
            i = e.split("&"),
            a = {};
        for (t = i.length; n < t; n++) a[p((o = i[n].split("="))[0])] = p(o[1]);
        return a
    }

    function b() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
            t = "0123456789abcdefghijklmnopqrstuvwxyz",
            n = t.length;
        e = r(e);
        for (var o = ""; o.length < e;) o += t.substr(ce.a.Math.round(ce.a.Math.random() * n), 1);
        return o
    }

    function g(e) {
        return i(e) ? pe.a.escape(e.toString()) : ""
    }

    function y(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, n = "", o = "", i = e, a = 0, r = 0; i.length > t;) a = (o = i.substring(0, t)).lastIndexOf(" "), -1 !== (r = o.lastIndexOf("\n")) && (a = r), -1 === a && (a = t), n += o.substring(0, a) + "\n", i = i.substring(a + 1);
        return n + i
    }

    function v() {
        try {
            if (ce.a.document.activeElement) return Ee(ce.a.document.activeElement.__inFocusCache) && (ce.a.document.activeElement.__inFocusCache = ue()(ce.a.document.activeElement).is("input,textarea,iframe,.cke_editable")), !!ce.a.document.activeElement.__inFocusCache
        } catch (e) {}
        return !1
    }

    function S(e) {
        if (ce.a.document && ce.a.document.activeElement && ce.a.document.activeElement.blur) try {
            var t = ue()(ce.a.document.activeElement);
            t && t.is("input,textarea") ? ce.a.document.activeElement.blur() : e && ce.a.document.activeElement.blur()
        } catch (e) {}
    }

    function O() {
        try {
            if (ce.a && ce.a.getSelection) {
                var e = ce.a.getSelection();
                e && e.removeAllRanges && e.removeAllRanges()
            } else ce.a.document && ce.a.document.selection && ce.a.document.selection.empty && ce.a.document.selection.empty()
        } catch (e) {}
    }

    function w(e, t) {
        e = Oe(e.toUpperCase()), t = Oe(t.replace(/[\s]+/g, " "));
        var n = !1,
            o = "RE" === e,
            i = "FWD" === e,
            a = [],
            r = !i;
        return "" !== t && pe.a.each(t.split(":"), function(e) {
            var t = Oe(e);
            n || !/^(RE|FWD)$/i.test(t) && !/^(RE|FWD)[\[\(][\d]+[\]\)]$/i.test(t) ? (a.push(e), n = !0) : (o || (o = !!/^RE/i.test(t)), i || (i = !!/^FWD/i.test(t)))
        }), r ? o = !1 : i = !1, Oe((r ? "Re: " : "Fwd: ") + (o ? "Re: " : "") + (i ? "Fwd: " : "") + Oe(a.join(":")))
    }

    function T(e, t) {
        return ce.a.Math.round(e * ce.a.Math.pow(10, t)) / ce.a.Math.pow(10, t)
    }

    function C(e) {
        switch (e = r(e), !0) {
            case 1073741824 <= e:
                return T(e / 1073741824, 1) + "GB";
            case 1048576 <= e:
                return T(e / 1048576, 1) + "MB";
            case 1024 <= e:
                return T(e / 1024, 0) + "KB"
        }
        return e + "B"
    }

    function A(e) {
        ce.a.console && ce.a.console.log && ce.a.console.log(e)
    }

    function E(e, t, n) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        e && e[t] && (o = r(o), n = Te(n) ? n : [], 0 >= o ? e[t].apply(e, n) : pe.a.delay(function() {
            e[t].apply(e, n)
        }, o))
    }

    function F(e) {
        if ((e = e || ce.a.event) && e.ctrlKey && !e.shiftKey && !e.altKey) {
            var t = e.keyCode || e.which;
            if (t === ge.EventKeyCode.S) return void e.preventDefault();
            if (t === ge.EventKeyCode.A) {
                var n = e.target || e.srcElement;
                if (n && ("true" == "" + n.contentEditable || n.tagName && n.tagName.match(/INPUT|TEXTAREA/i))) return;
                ce.a.getSelection ? ce.a.getSelection().removeAllRanges() : ce.a.document.selection && ce.a.document.selection.clear && ce.a.document.selection.clear(), e.preventDefault()
            }
        }
    }

    function j(e, t) {
        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            o = null;
        return (o = t ? function() {
            for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
            return o && o.canExecute && o.canExecute() && t.apply(e, i), !1
        } : Re).enabled = he.a.observable(!0), o.isCommand = !0, Ae(n) ? o.canExecute = he.a.computed(function() {
            return o && o.enabled() && n.call(e)
        }) : o.canExecute = he.a.computed(function() {
            return o && o.enabled() && !!n
        }), o
    }

    function N(e) {
        return e.replace(/["]/g, '\\"')
    }

    function R() {
        return (new ce.a.Date).getTime()
    }

    function I() {
        return ce.a.Math.round(R() / 1e3)
    }

    function L(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return n(10).i18n("LANGS_NAMES" + (!0 === t ? "_EN" : "") + "/LANG_" + e.toUpperCase().replace(/[^a-zA-Z0-9]+/g, "_"), null, e)
    }

    function _() {
        return ue()('<div class="draggablePlace"><span class="text"></span>&nbsp;<i class="icon-copy icon-white visible-on-ctrl"></i><i class="icon-mail icon-white hidden-on-ctrl"></i></div>').appendTo("#rl-hidden")
    }

    function P(e, t) {
        t && !Ee(t.disabled) && e && ue()(e).toggleClass("disabled", t.disabled).prop("disabled", t.disabled)
    }

    function D(e) {
        e.find("blockquote.rl-bq-switcher").removeClass("rl-bq-switcher hidden-bq"), e.find(".rlBlockquoteSwitcher").off(".rlBlockquoteSwitcher").remove(), e.find("[data-html-editor-font-wrapper]").removeAttr("data-html-editor-font-wrapper")
    }

    function M(e, t, o, i) {
        var a = e.title,
            r = e.subject,
            s = e.date,
            c = e.fromCreds,
            l = e.toCreds,
            u = e.toLabel,
            d = e.ccClass,
            p = e.ccCreds,
            h = e.ccLabel,
            f = ce.a.open(""),
            m = f.document,
            b = t.clone(),
            y = o ? "html" : "plain";
        D(b);
        var v = b ? b.html() : "";
        m.write(n(170).replace("{{title}}", g(a)).replace("{{subject}}", g(r)).replace("{{date}}", g(s)).replace("{{fromCreds}}", g(c)).replace("{{toCreds}}", g(l)).replace("{{toLabel}}", g(u)).replace("{{ccClass}}", g(d)).replace("{{ccCreds}}", g(p)).replace("{{ccLabel}}", g(h)).replace("{{bodyClass}}", y).replace("{{html}}", v)), m.close(), i && ce.a.setTimeout(function() {
            return f.print()
        }, 100)
    }

    function k(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e3;
        return o = r(o),
            function(i, a, r, s, c) {
                t.call(n, a && a.Result ? ge.SaveSettingsStep.TrueResult : ge.SaveSettingsStep.FalseResult), e && e.call(n, i, a, r, s, c), pe.a.delay(function() {
                    t.call(n, ge.SaveSettingsStep.Idle)
                }, o)
            }
    }

    function x(e, t) {
        return k(null, e, t, 1e3)
    }

    function U(e, t, n, o) {
        return function(i) {
            if (e) {
                switch (n) {
                    case "bool":
                    case "boolean":
                        i = i ? "1" : "0";
                        break;
                    case "int":
                    case "integer":
                    case "number":
                        i = r(i);
                        break;
                    case "trim":
                        i = Oe(i);
                        break;
                    default:
                        i = s(i)
                }
                var a = {};
                a[t] = i, e.saveAdminConfig ? e.saveAdminConfig(o || null, a) : e.saveSettings && e.saveSettings(o || null, a)
            }
        }
    }

    function H(e) {
        return me.a ? me.a.link(e, {
            newWindow: !0,
            stripPrefix: !1,
            urls: !0,
            email: !0,
            mention: !1,
            phone: !1,
            hashtag: !1,
            replaceFn: function(e) {
                return !(e && "url" === e.getType() && e.matchedText && 0 !== e.matchedText.indexOf("http"))
            }
        }) : e
    }

    function B(e) {
        var t, n = 0,
            o = 0,
            i = 0,
            a = 0,
            r = 0,
            s = "";
        for (s = e.replace(/<p[^>]*><\/p>/gi, "").replace(/<pre[^>]*>([\s\S\r\n\t]*)<\/pre>/gim, function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t && 1 < t.length ? t[1].toString().replace(/[\n]/gm, "<br />").replace(/[\r]/gm, "") : ""
            }).replace(/[\s]+/gm, " ").replace(/((?:href|data)\s?=\s?)("[^"]+?"|'[^']+?')/gim, function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t && 1 < t.length ? "" + t[1] + pe.a.escape(t[2]) : ""
            }).replace(/<br[^>]*>/gim, "\n").replace(/<\/h[\d]>/gi, "\n").replace(/<\/p>/gi, "\n\n").replace(/<ul[^>]*>/gim, "\n").replace(/<\/ul>/gi, "\n").replace(/<li[^>]*>/gim, " * ").replace(/<\/li>/gi, "\n").replace(/<\/td>/gi, "\n").replace(/<\/tr>/gi, "\n").replace(/<hr[^>]*>/gim, "\n_______________________________\n\n").replace(/<div[^>]*>([\s\S\r\n]*)<\/div>/gim, function e() {
                for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                if (n && 1 < n.length) {
                    var i = Oe(n[1]);
                    return 0 < i.length && (i = i.replace(/<div[^>]*>([\s\S\r\n]*)<\/div>/gim, e), i = "\n" + Oe(i) + "\n"), i
                }
                return ""
            }).replace(/<blockquote[^>]*>/gim, "\n__bq__start__\n").replace(/<\/blockquote>/gim, "\n__bq__end__\n").replace(/<a [^>]*>([\s\S\r\n]*?)<\/a>/gim, function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t && 1 < t.length ? Oe(t[1]) : ""
            }).replace(/<\/div>/gi, "\n").replace(/&nbsp;/gi, " ").replace(/&quot;/gi, '"').replace(/<[^>]*>/gm, ""), s = y(s = (s = be.$div.html(s).text()).replace(/\n[ \t]+/gm, "\n").replace(/[\n]{3,}/gm, "\n\n").replace(/&gt;/gi, ">").replace(/&lt;/gi, "<").replace(/&amp;/gi, "&")), n = 0, o = 800; 0 < o && (o -= 1, -1 < (i = s.indexOf("__bq__start__", n)));) a = s.indexOf("__bq__start__", i + 5), r = s.indexOf("__bq__end__", i + 5), (-1 === a || r < a) && i < r ? (s = s.substring(0, i) + (t = s.substring(i + 13, r), (t = "> " + Oe(t).replace(/\n/gm, "\n> ")).replace(/(^|\n)([> ]+)/gm, function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return t && 2 < t.length ? t[1] + Oe(t[2].replace(/[\s]/g, "")) + " " : ""
        })) + s.substring(r + 11), n = 0) : n = -1 < a && a < r ? a - 1 : 0;
        return s = s.replace(/__bq__start__/gm, "").replace(/__bq__end__/gm, "")
    }

    function G(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !1,
            o = !0,
            i = !0,
            a = [],
            r = "",
            s = 0,
            c = (e = (e = e.toString().replace(/\r/g, "")).replace(/^>[> ]>+/gm, function(e) {
                var t = e[0];
                return t ? t.replace(/[ ]+/g, "") : t
            })).split("\n");
        do {
            for (o = !1, a = [], s = 0; s < c.length; s++)(i = ">" === (r = c[s]).substr(0, 1)) && !n ? (o = !0, n = !0, a.push("~~~blockquote~~~"), a.push(r.substr(1))) : !i && n ? "" !== r ? (n = !1, a.push("~~~/blockquote~~~"), a.push(r)) : a.push(r) : i && n ? a.push(r.substr(1)) : a.push(r);
            n && (n = !1, a.push("~~~/blockquote~~~")), c = a
        } while (o);
        return e = (e = c.join("\n")).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/~~~blockquote~~~[\s]*/g, "<blockquote>").replace(/[\s]*~~~\/blockquote~~~/g, "</blockquote>").replace(/\n/g, "<br />"), t ? H(e) : e
    }

    function K(e, t, n, o, a, r, s, c, l, u) {
        var d = null,
            p = !1,
            h = 0,
            f = 0,
            m = [];
        for (u = !Ee(u) && !!u, l = i(l) ? l : 0 < e.length, a = i(a) ? a : 0, r = i(r) ? r : null, s = i(s) ? s : null, c = i(c) ? c : null, Te(n) || (n = []), Te(o) || (o = []), h = 0, f = o.length; h < f; h++) m.push({
            id: o[h][0],
            name: o[h][1],
            system: !1,
            seporator: !1,
            disabled: !1
        });
        for (p = !0, h = 0, f = e.length; h < f; h++) d = e[h], s && !s(d) || (p && 0 < m.length && m.push({
            id: "---",
            name: "---",
            system: !1,
            seporator: !0,
            disabled: !0
        }), p = !1, m.push({
            id: d.fullNameRaw,
            name: c ? c(d) : d.name(),
            system: !0,
            seporator: !1,
            disabled: !d.selectable || -1 < we(d.fullNameRaw, n) || !!r && r(d)
        }));
        for (p = !0, h = 0, f = t.length; h < f; h++) !(d = t[h]).subScribed() && d.existen && !u || !d.selectable && !d.hasSubScribedSubfolders() || s && !s(d) || ge.FolderType.User !== d.type() && l && !d.hasSubScribedSubfolders() || (p && 0 < m.length && m.push({
            id: "---",
            name: "---",
            system: !1,
            seporator: !0,
            disabled: !0
        }), p = !1, m.push({
            id: d.fullNameRaw,
            name: new ce.a.Array(d.deep + 1 - a).join("   ") + (c ? c(d) : d.name()),
            system: !1,
            seporator: !1,
            disabled: !d.selectable || -1 < we(d.fullNameRaw, n) || !!r && r(d)
        })), d.subScribed() && 0 < d.subFolders().length && (m = m.concat(K([], d.subFolders(), n, [], a, r, s, c, l, u)));
        return m
    }

    function V(e) {
        var t = null,
            n = null;
        ce.a.getSelection ? ((t = ce.a.getSelection()).removeAllRanges(), (n = ce.a.document.createRange()).selectNodeContents(e), t.addRange(n)) : ce.a.document.selection && ((n = ce.a.document.body.createTextRange()).moveToElementText(e), n.select())
    }

    function z() {
        var e = function() {
            ue()(".checkAutocomplete").trigger("change")
        };
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? pe.a.delay(e, 100) : e()
    }

    function q(e) {
        ke[e] || (ke[e] = ue()('script[type="application/json"][data-configuration="' + e + '"]'));
        try {
            return JSON.parse(ke[e].text())
        } catch (e) {}
        return {}
    }

    function W(e, t) {
        var n = t || e;
        n && "function" == typeof n.dispose && n.dispose()
    }

    function Y(e) {
        e && (Te(e.disposables) && pe.a.each(e.disposables, W), he.a.utils.objectForEach(e, W))
    }

    function $(e) {
        e && (Te(e) ? pe.a.each(e, function(e) {
            $(e)
        }) : e && e.onDestroy && e.onDestroy())
    }

    function J(e, t) {
        return !(!e || !e[0] || (e[0].styleSheet && !Ee(e[0].styleSheet.cssText) ? e[0].styleSheet.cssText = t : e.text(t), 0))
    }

    function X(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Re,
            n = ue()("#app-theme-link"),
            o = function() {
                xe = ce.a.setTimeout(function() {
                    return t(ge.SaveSettingsStep.Idle)
                }, 1e3), Ue = null
            },
            i = ue()("#app-theme-style"),
            a = n.attr("href");
        a || (a = i.attr("data-href")), a && ("Json/" !== (a = (a = (a = a.toString().replace(/\/-\/[^\/]+\/\-\//, "/-/" + e + "/-/")).replace(/\/Css\/[^\/]+\/User\//, "/Css/0/User/")).replace(/\/Hash\/[^\/]+\//, "/Hash/-/")).substring(a.length - 5, a.length) && (a += "Json/"), ce.a.clearTimeout(xe), t(ge.SaveSettingsStep.Animate), Ue && Ue.abort && Ue.abort(), Ue = ue.a.ajax({
            url: a,
            dataType: "json"
        }).then(function(e) {
            e && Te(e) && 2 === e.length && (!n || !n[0] || i && i[0] || (i = ue()('<style id="app-theme-style"></style>'), n.after(i), n.remove()), i && i[0] && J(i, e[1]) && i.attr("data-href", a).attr("data-theme", e[0]), t(ge.SaveSettingsStep.TrueResult))
        }).then(o, o))
    }

    function Z(e, t) {
        return function() {
            var n = e(),
                o = t(),
                i = [],
                a = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        a = {
                            current: e === n,
                            name: "" === o ? e.toString() : o.toString(),
                            custom: "" !== o,
                            title: "" === o ? "" : e.toString(),
                            value: e.toString()
                        };
                    t ? i.push(a) : i.unshift(a)
                },
                r = 0,
                s = 0,
                c = 2;
            if (1 < o || 0 < o && o < n) {
                for (o < n ? (a(o), r = o, s = o) : ((3 >= n || o - 2 <= n) && (c += 2), a(n), r = n, s = n); 0 < c;)
                    if (s += 1, 0 < (r -= 1) && (a(r, !1), c -= 1), o >= s) a(s, !0), c -= 1;
                    else if (0 >= r) break;
                3 === r ? a(2, !1) : 3 < r && a(Math.round((r - 1) / 2), !1, "..."), o - 2 === s ? a(o - 1, !0) : o - 2 > s && a(Math.round((o + s) / 2), !0, "..."), 1 < r && a(1, !1), o > s && a(o, !0)
            }
            return i
        }
    }

    function Q(e) {
        var t = (e = Oe(e).toLowerCase()).split(".").pop();
        return t === e ? "" : t
    }

    function ee(e) {
        var t, n = "application/octet-stream";
        return "winmail.dat" === (e = Oe(e).toLowerCase()) ? "application/ms-tnef" : ((t = Q(e)) && 0 < t.length && !Ee(ye[t]) && (n = ye[t]), n)
    }

    function te(e) {
        return "rgba(0, 0, 0, 0)" === e || "transparent" === e
    }

    function ne(e) {
        e.clone().show().appendTo(be.$hcont);
        var t = be.$hcont.height();
        return be.$hcont.empty(), t
    }

    function oe(e, t, n) {
        var o = new ce.a.Image;
        o.onload = function() {
            var e = [0, 0],
                o = ce.a.document.createElement("canvas"),
                i = o.getContext("2d");
            o.width = t, o.height = t, e = this.width > this.height ? [this.width - this.height, 0] : [0, this.height - this.width], i.fillStyle = "#fff", i.fillRect(0, 0, t, t), i.drawImage(this, e[0] / 2, e[1] / 2, this.width - e[0], this.height - e[1], 0, 0, t, t), n(o.toDataURL("image/jpeg"))
        }, o.src = e
    }

    function ie(e, t) {
        if (e && "mailto:" === e.toString().substr(0, 7).toLowerCase()) {
            if (!t) return !0;
            var o, i = [],
                a = null,
                r = null,
                c = (e = e.toString().substr(7)).replace(/\?.+$/, ""),
                l = e.replace(/^[^\?]*\?/, ""),
                u = n(44).default;
            return o = m(l), Ee(o.to) ? i = u.parseEmailLine(c) : (i = u.parseEmailLine(p(c + "," + o.to)), i = pe.a.values(i.reduce(function(e, t) {
                return t && (e[t.email] && e[t.email].name || (e[t.email] = t)), e
            }, {}))), Ee(o.cc) || (a = u.parseEmailLine(p(o.cc))), Ee(o.bcc) || (r = u.parseEmailLine(p(o.bcc))), n(9).showScreenPopup(t, [ge.ComposeType.Empty, null, i, a, r, Ee(o.subject) ? null : s(p(o.subject)), Ee(o.body) ? null : G(s(p(o.body)))]), !0
        }
        return !1
    }

    function ae(e) {
        ue()(function() {
            return e()
        })
    }

    function re() {
        He()
    }
    n.r(t);
    var se = n(3),
        ce = n.n(se),
        le = n(7),
        ue = n.n(le),
        de = n(4),
        pe = n.n(de),
        he = n(1),
        fe = n(96),
        me = n.n(fe),
        be = n(6),
        ge = n(0),
        ye = {
            eml: "message/rfc822",
            mime: "message/rfc822",
            txt: "text/plain",
            text: "text/plain",
            def: "text/plain",
            list: "text/plain",
            in: "text/plain",
            ini: "text/plain",
            log: "text/plain",
            sql: "text/plain",
            cfg: "text/plain",
            conf: "text/plain",
            asc: "text/plain",
            rtx: "text/richtext",
            vcard: "text/vcard",
            vcf: "text/vcard",
            htm: "text/html",
            html: "text/html",
            csv: "text/csv",
            ics: "text/calendar",
            ifb: "text/calendar",
            xml: "text/xml",
            json: "application/json",
            swf: "application/x-shockwave-flash",
            hlp: "application/winhlp",
            wgt: "application/widget",
            chm: "application/vnd.ms-htmlhelp",
            p10: "application/pkcs10",
            p7c: "application/pkcs7-mime",
            p7m: "application/pkcs7-mime",
            p7s: "application/pkcs7-signature",
            torrent: "application/x-bittorrent",
            js: "application/javascript",
            pl: "text/perl",
            css: "text/css",
            asp: "text/asp",
            php: "application/x-httpd-php",
            php3: "application/x-httpd-php",
            php4: "application/x-httpd-php",
            php5: "application/x-httpd-php",
            phtml: "application/x-httpd-php",
            png: "image/png",
            jpg: "image/jpeg",
            jpeg: "image/jpeg",
            jpe: "image/jpeg",
            jfif: "image/jpeg",
            gif: "image/gif",
            bmp: "image/bmp",
            cgm: "image/cgm",
            ief: "image/ief",
            ico: "image/x-icon",
            tif: "image/tiff",
            tiff: "image/tiff",
            svg: "image/svg+xml",
            svgz: "image/svg+xml",
            djv: "image/vnd.djvu",
            djvu: "image/vnd.djvu",
            webp: "image/webp",
            zip: "application/zip",
            "7z": "application/x-7z-compressed",
            rar: "application/x-rar-compressed",
            exe: "application/x-msdownload",
            dll: "application/x-msdownload",
            scr: "application/x-msdownload",
            com: "application/x-msdownload",
            bat: "application/x-msdownload",
            msi: "application/x-msdownload",
            cab: "application/vnd.ms-cab-compressed",
            gz: "application/x-gzip",
            tgz: "application/x-gzip",
            bz: "application/x-bzip",
            bz2: "application/x-bzip2",
            deb: "application/x-debian-package",
            psf: "application/x-font-linux-psf",
            otf: "application/x-font-otf",
            pcf: "application/x-font-pcf",
            snf: "application/x-font-snf",
            ttf: "application/x-font-ttf",
            ttc: "application/x-font-ttf",
            mp3: "audio/mpeg",
            amr: "audio/amr",
            aac: "audio/x-aac",
            aif: "audio/x-aiff",
            aifc: "audio/x-aiff",
            aiff: "audio/x-aiff",
            wav: "audio/x-wav",
            wma: "audio/x-ms-wma",
            wax: "audio/x-ms-wax",
            midi: "audio/midi",
            mp4a: "audio/mp4",
            ogg: "audio/ogg",
            weba: "audio/webm",
            ra: "audio/x-pn-realaudio",
            ram: "audio/x-pn-realaudio",
            rmp: "audio/x-pn-realaudio-plugin",
            m3u: "audio/x-mpegurl",
            flv: "video/x-flv",
            qt: "video/quicktime",
            mov: "video/quicktime",
            wmv: "video/windows-media",
            avi: "video/x-msvideo",
            mpg: "video/mpeg",
            mpeg: "video/mpeg",
            mpe: "video/mpeg",
            m1v: "video/mpeg",
            m2v: "video/mpeg",
            "3gp": "video/3gpp",
            "3g2": "video/3gpp2",
            h261: "video/h261",
            h263: "video/h263",
            h264: "video/h264",
            jpgv: "video/jpgv",
            mp4: "video/mp4",
            mp4v: "video/mp4",
            mpg4: "video/mp4",
            ogv: "video/ogg",
            webm: "video/webm",
            m4v: "video/x-m4v",
            asf: "video/x-ms-asf",
            asx: "video/x-ms-asf",
            wm: "video/x-ms-wm",
            wmx: "video/x-ms-wmx",
            wvx: "video/x-ms-wvx",
            movie: "video/x-sgi-movie",
            pdf: "application/pdf",
            psd: "image/vnd.adobe.photoshop",
            ai: "application/postscript",
            eps: "application/postscript",
            ps: "application/postscript",
            doc: "application/msword",
            dot: "application/msword",
            rtf: "application/rtf",
            xls: "application/vnd.ms-excel",
            ppt: "application/vnd.ms-powerpoint",
            docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
            pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            odt: "application/vnd.oasis.opendocument.text",
            ods: "application/vnd.oasis.opendocument.spreadsheet"
        },
        ve = n(59);
    n.d(t, "trim", function() {
        return Oe
    }), n.d(t, "inArray", function() {
        return we
    }), n.d(t, "isArray", function() {
        return Te
    }), n.d(t, "isObject", function() {
        return Ce
    }), n.d(t, "isFunc", function() {
        return Ae
    }), n.d(t, "isUnd", function() {
        return Ee
    }), n.d(t, "isNull", function() {
        return Fe
    }), n.d(t, "has", function() {
        return je
    }), n.d(t, "bind", function() {
        return Ne
    }), n.d(t, "noop", function() {
        return Re
    }), n.d(t, "noopTrue", function() {
        return Ie
    }), n.d(t, "noopFalse", function() {
        return Le
    }), n.d(t, "silentTryCatch", function() {
        return o
    }), n.d(t, "isNormal", function() {
        return i
    }), n.d(t, "isPosNumeric", function() {
        return a
    }), n.d(t, "pInt", function() {
        return r
    }), n.d(t, "pString", function() {
        return s
    }), n.d(t, "pBool", function() {
        return c
    }), n.d(t, "boolToAjax", function() {
        return l
    }), n.d(t, "isNonEmptyArray", function() {
        return u
    }), n.d(t, "encodeURIComponent", function() {
        return d
    }), n.d(t, "decodeURIComponent", function() {
        return p
    }), n.d(t, "decodeURI", function() {
        return h
    }), n.d(t, "encodeURI", function() {
        return f
    }), n.d(t, "simpleQueryParser", function() {
        return m
    }), n.d(t, "fakeMd5", function() {
        return b
    }), n.d(t, "encodeHtml", function() {
        return g
    }), n.d(t, "splitPlainText", function() {
        return y
    }), n.d(t, "timeOutAction", function() {
        return _e
    }), n.d(t, "timeOutActionSecond", function() {
        return Pe
    }), n.d(t, "inFocus", function() {
        return v
    }), n.d(t, "removeInFocus", function() {
        return S
    }), n.d(t, "removeSelection", function() {
        return O
    }), n.d(t, "replySubjectAdd", function() {
        return w
    }), n.d(t, "roundNumber", function() {
        return T
    }), n.d(t, "friendlySize", function() {
        return C
    }), n.d(t, "log", function() {
        return A
    }), n.d(t, "delegateRun", function() {
        return E
    }), n.d(t, "killCtrlACtrlS", function() {
        return F
    }), n.d(t, "createCommandLegacy", function() {
        return j
    }), n.d(t, "convertThemeName", function() {
        return De
    }), n.d(t, "quoteName", function() {
        return N
    }), n.d(t, "microtime", function() {
        return R
    }), n.d(t, "timestamp", function() {
        return I
    }), n.d(t, "convertLangName", function() {
        return L
    }), n.d(t, "draggablePlace", function() {
        return _
    }), n.d(t, "defautOptionsAfterRender", function() {
        return P
    }), n.d(t, "clearBqSwitcher", function() {
        return D
    }), n.d(t, "previewMessage", function() {
        return M
    }), n.d(t, "settingsSaveHelperFunction", function() {
        return k
    }), n.d(t, "settingsSaveHelperSimpleFunction", function() {
        return x
    }), n.d(t, "settingsSaveHelperSubscribeFunction", function() {
        return U
    }), n.d(t, "findEmailAndLinks", function() {
        return H
    }), n.d(t, "htmlToPlain", function() {
        return B
    }), n.d(t, "plainToHtml", function() {
        return G
    }), n.d(t, "folderListOptionsBuilder", function() {
        return K
    }), n.d(t, "selectElement", function() {
        return V
    }), n.d(t, "detectDropdownVisibility", function() {
        return Me
    }), n.d(t, "triggerAutocompleteInputChange", function() {
        return z
    }), n.d(t, "getConfigurationFromScriptTag", function() {
        return q
    }), n.d(t, "disposeOne", function() {
        return W
    }), n.d(t, "disposeObject", function() {
        return Y
    }), n.d(t, "delegateRunOnDestroy", function() {
        return $
    }), n.d(t, "appendStyles", function() {
        return J
    }), n.d(t, "changeTheme", function() {
        return X
    }), n.d(t, "computedPagenatorHelper", function() {
        return Z
    }), n.d(t, "getFileExtension", function() {
        return Q
    }), n.d(t, "mimeContentType", function() {
        return ee
    }), n.d(t, "isTransparent", function() {
        return te
    }), n.d(t, "getRealHeight", function() {
        return ne
    }), n.d(t, "resizeAndCrop", function() {
        return oe
    }), n.d(t, "mailToHelper", function() {
        return ie
    }), n.d(t, "domReady", function() {
        return ae
    }), n.d(t, "windowResize", function() {
        return He
    }), n.d(t, "windowResizeCallback", function() {
        return re
    }), n.d(t, "jassl", function() {
        return ve.a
    });
    var Se, Oe = ue.a.trim,
        we = ue.a.inArray,
        Te = pe.a.isArray,
        Ce = pe.a.isObject,
        Ae = pe.a.isFunction,
        Ee = pe.a.isUndefined,
        Fe = pe.a.isNull,
        je = pe.a.has,
        Ne = pe.a.bind,
        Re = function() {},
        Ie = function() {
            return !0
        },
        Le = function() {
            return !1
        },
        _e = (Se = {}, function(e, t, n) {
            Se[e] = Ee(Se[e]) ? 0 : Se[e], ce.a.clearTimeout(Se[e]), Se[e] = ce.a.setTimeout(t, n)
        }),
        Pe = function() {
            var e = {};
            return function(t, n, o) {
                e[t] || (e[t] = ce.a.setTimeout(function() {
                    n(), e[t] = 0
                }, o))
            }
        }(),
        De = pe.a.memoize(function(e) {
            return "@custom" === e.substr(-7) && (e = Oe(e.substring(0, e.length - 7))), Oe(e.replace(/[^a-zA-Z0-9]+/g, " ").replace(/([A-Z])/g, " $1").replace(/[\s]+/g, " "))
        });
    ce.a.rainloop_Utils_htmlToPlain = B, ce.a.rainloop_Utils_plainToHtml = G;
    var Me = pe.a.debounce(function() {
            Object(be.dropdownVisibility)(!!pe.a.find(be.data.aBootstrapDropdowns, function(e) {
                return e.hasClass("open")
            }))
        }, 50),
        ke = {},
        xe = 0,
        Ue = null,
        He = pe.a.debounce(function(e) {
            Ee(e) || Fe(e) ? be.$win.resize() : ce.a.setTimeout(function() {
                be.$win.resize()
            }, e)
        }, 50),
        Be = ce.a.String.substr;
    "b" !== "ab".substr(-1) && (Be = function(e, t, n) {
        return t = 0 > t ? e.length + t : t, e.substr(t, n)
    }, ce.a.String.substr = Be)
}, function(e, t) {
    e.exports = window
}, function(e, t) {
    e.exports = window._
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return Object(l.isUnd)(u[e]) ? null : u[e]
    }

    function i(e, t) {
        u[e] = t
    }

    function a(e) {
        return Object(l.isUnd)(d[e]) ? null : d[e]
    }

    function r(e) {
        var t = o("Capa");
        return Object(l.isArray)(t) && Object(l.isNormal)(e) && -1 < Object(l.inArray)(e, t)
    }
    n.r(t), n.d(t, "settingsGet", function() {
        return o
    }), n.d(t, "settingsSet", function() {
        return i
    }), n.d(t, "appSettingsGet", function() {
        return a
    }), n.d(t, "capa", function() {
        return r
    });
    var s = n(3),
        c = n.n(s),
        l = n(2),
        u = c.a.__rlah_data() || null,
        d = (u = Object(l.isNormal)(u) ? u : {}).System || null;
    d = Object(l.isNormal)(d) ? d : {}
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "$win", function() {
        return h
    }), n.d(t, "$doc", function() {
        return f
    }), n.d(t, "$html", function() {
        return m
    }), n.d(t, "$body", function() {
        return b
    }), n.d(t, "$div", function() {
        return g
    }), n.d(t, "$hcont", function() {
        return y
    }), n.d(t, "startMicrotime", function() {
        return v
    }), n.d(t, "community", function() {
        return S
    }), n.d(t, "dropdownVisibility", function() {
        return O
    }), n.d(t, "useKeyboardShortcuts", function() {
        return w
    }), n.d(t, "sUserAgent", function() {
        return T
    }), n.d(t, "bIE", function() {
        return C
    }), n.d(t, "bChrome", function() {
        return A
    }), n.d(t, "bSafari", function() {
        return E
    }), n.d(t, "bMobileDevice", function() {
        return F
    }), n.d(t, "bDisableNanoScroll", function() {
        return j
    }), n.d(t, "bAnimationSupported", function() {
        return N
    }), n.d(t, "bXMLHttpRequestSupported", function() {
        return R
    }), n.d(t, "bIsHttps", function() {
        return I
    }), n.d(t, "htmlEditorDefaultConfig", function() {
        return L
    }), n.d(t, "htmlEditorLangsMap", function() {
        return _
    }), n.d(t, "bAllowPdfPreview", function() {
        return P
    }), n.d(t, "VIEW_MODELS", function() {
        return D
    }), n.d(t, "moveAction", function() {
        return M
    }), n.d(t, "leftPanelDisabled", function() {
        return k
    }), n.d(t, "leftPanelType", function() {
        return x
    }), n.d(t, "leftPanelWidth", function() {
        return U
    }), n.d(t, "popupVisibilityNames", function() {
        return H
    }), n.d(t, "popupVisibility", function() {
        return B
    }), n.d(t, "keyScopeReal", function() {
        return G
    }), n.d(t, "keyScopeFake", function() {
        return K
    }), n.d(t, "keyScope", function() {
        return V
    }), n.d(t, "data", function() {
        return z
    });
    var o = n(3),
        i = n.n(o),
        a = n(4),
        r = n.n(a),
        s = n(7),
        c = n.n(s),
        l = n(19),
        u = n.n(l),
        d = n(1),
        p = n(0),
        h = c()(i.a);
    h.__sizes = [0, 0];
    var f = c()(i.a.document),
        m = c()("html"),
        b = c()("body"),
        g = c()("<div></div>"),
        y = c()("<div></div>");
    y.attr("area", "hidden").css({
        position: "absolute",
        left: -5e3
    }).appendTo(b);
    var v = (new i.a.Date).getTime(),
        S = !0,
        O = d.a.observable(!1).extend({
            rateLimit: 0
        }),
        w = d.a.observable(!0),
        T = "navigator" in i.a && "userAgent" in i.a.navigator && i.a.navigator.userAgent.toLowerCase() || "",
        C = -1 < T.indexOf("msie"),
        A = -1 < T.indexOf("chrome"),
        E = !A && -1 < T.indexOf("safari"),
        F = /android/i.test(T) || /iphone/i.test(T) || /ipod/i.test(T) || /ipad/i.test(T) || /blackberry/i.test(T),
        j = F,
        N = !F && m.hasClass("csstransitions") && m.hasClass("cssanimations"),
        R = !!i.a.XMLHttpRequest,
        I = !(!i.a.document || !i.a.document.location) && "https:" === i.a.document.location.protocol,
        L = {
            title: !1,
            stylesSet: !1,
            customConfig: "",
            contentsCss: "",
            toolbarGroups: [{
                name: "spec"
            }, {
                name: "styles"
            }, {
                name: "basicstyles",
                groups: ["basicstyles", "cleanup", "bidi"]
            }, {
                name: "colors"
            }, F ? {} : {
                name: "paragraph",
                groups: ["list", "indent", "blocks", "align"]
            }, {
                name: "links"
            }, {
                name: "insert"
            }, {
                name: "document",
                groups: ["mode", "document", "doctools"]
            }, {
                name: "others"
            }],
            removePlugins: "liststyle",
            removeButtons: "Format,Undo,Redo,Cut,Copy,Paste,Anchor,Strike,Subscript,Superscript,Image,SelectAll,Source",
            removeDialogTabs: "link:advanced;link:target;image:advanced;images:advanced",
            extraPlugins: "plain,signature",
            allowedContent: !0,
            extraAllowedContent: !0,
            fillEmptyBlocks: !1,
            ignoreEmptyParagraph: !0,
            disableNativeSpellChecker: !1,
            colorButton_enableAutomatic: !1,
            colorButton_enableMore: !0,
            font_defaultLabel: "Arial",
            fontSize_defaultLabel: "13",
            fontSize_sizes: "10/10px;12/12px;13/13px;14/14px;16/16px;18/18px;20/20px;24/24px;28/28px;36/36px;48/48px"
        },
        _ = {
            ar_sa: "ar-sa",
            bg_bg: "bg",
            cs_CZ: "cs",
            de_de: "de",
            el_gr: "el",
            es_es: "es",
            et_ee: "et",
            fr_fr: "fr",
            hu_hu: "hu",
            is_is: "is",
            it_it: "it",
            ja_jp: "ja",
            ko_kr: "ko",
            lt_lt: "lt",
            lv_lv: "lv",
            fa_ir: "fa",
            nb_no: "nb",
            nl_nl: "nl",
            pl_pl: "pl",
            pt_br: "pt-br",
            pt_pt: "pt",
            ro_ro: "ro",
            ru_ru: "ru",
            sk_sk: "sk",
            sl_si: "sl",
            sv_se: "sv",
            tr_tr: "tr",
            uk_ua: "uk",
            zh_cn: "zh-cn",
            zh_tw: "zh"
        },
        P = !F;
    P && i.a.navigator && i.a.navigator.mimeTypes && ((P = !!r.a.find(i.a.navigator.mimeTypes, function(e) {
        return e && "application/pdf" === e.type
    })) || (P = void 0 !== i.a.navigator.mimeTypes["application/pdf"]));
    var D = {
            settings: [],
            "settings-removed": [],
            "settings-disabled": []
        },
        M = d.a.observable(!1),
        k = d.a.observable(!1),
        x = d.a.observable(""),
        U = d.a.observable(0);
    k.subscribe(function(e) {
        e && M() && M(!1)
    }), M.subscribe(function(e) {
        e && k() && k(!1)
    });
    var H = d.a.observableArray([]),
        B = d.a.computed(function() {
            return 0 < H().length
        });
    B.subscribe(function(e) {
        m.toggleClass("rl-modal", e)
    });
    var G = d.a.observable(p.KeyState.All),
        K = d.a.observable(p.KeyState.All),
        V = d.a.computed({
            read: function() {
                return K()
            },
            write: function(e) {
                p.KeyState.Menu !== e && (p.KeyState.Compose === e ? u.a.filter = function() {
                    return w()
                } : u.a.filter = function(e) {
                    if (w()) {
                        var t = e.target || e.srcElement,
                            n = t ? t.tagName.toUpperCase() : "";
                        return !("INPUT" === n || "SELECT" === n || "TEXTAREA" === n || t && "DIV" === n && ("editorHtmlArea" === t.className || "true" == "" + t.contentEditable))
                    }
                    return !1
                }, K(e), O() && (e = p.KeyState.Menu)), G(e)
            }
        });
    G.subscribe(function(e) {
        u.a.setScope(e)
    }), O.subscribe(function(e) {
        e ? V(p.KeyState.Menu) : p.KeyState.Menu === u.a.getScope() && V(K())
    });
    var z = {
        __APP__: null,
        iAjaxErrorCount: 0,
        iTokenErrorCount: 0,
        aBootstrapDropdowns: [],
        iMessageBodyCacheCount: 0,
        bUnload: !1
    }
}, function(e, t) {
    e.exports = window.jQuery
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t, n) {
    "use strict";

    function o() {
        j()("#rl-content").addClass("rl-content-show"), j()("#rl-loading").hide().remove()
    }

    function i(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return Object(k.createCommandLegacy)(null, e, t)
    }

    function a(e, t, n, o) {
        var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        e.__rlSettingsData = {
            Label: n,
            Template: t,
            Route: o,
            IsDefault: !!i
        }, M.VIEW_MODELS.settings.push(e)
    }

    function r(e) {
        M.VIEW_MODELS["settings-removed"].push(e)
    }

    function s(e) {
        M.VIEW_MODELS["settings-disabled"].push(e)
    }

    function c() {
        I.a.changed.active = !1
    }

    function l() {
        I.a.changed.active = !0
    }

    function u(e) {
        return "" === e || Object(k.isUnd)(H[e]) ? null : H[e]
    }

    function d(e) {
        var t = null;
        return e && (t = e, e.default && (t = e.default)), t
    }

    function p(e) {
        var t = d(e);
        t && t.__vm && t.__dom && t.__vm.modalVisibility(!1)
    }

    function h(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        E.a.each(t.__names, function(o) {
            Object(D.f)(e, [o, t.__vm, n])
        })
    }

    function f(e, t) {
        if (e && !e.__builded) {
            var n = null,
                o = new e(t),
                a = e.__type || "",
                r = a ? j()("#rl-content #rl-" + a.toLowerCase()) : null;
            e.__builded = !0, e.__vm = o, o.onShowTrigger = N.a.observable(!1), o.onHideTrigger = N.a.observable(!1), o.viewModelName = e.__name, o.viewModelNames = e.__names, o.viewModelTemplateID = e.__templateID, o.viewModelPosition = e.__type, r && 1 === r.length ? ((n = j()("<div></div>").addClass("rl-view-model").addClass("RL-" + o.viewModelTemplateID).hide()).appendTo(r), o.viewModelDom = n, e.__dom = n, B.Popup === a && (o.cancelCommand = o.closeCommand = i(function() {
                p(e)
            }), o.modalVisibility.subscribe(function(t) {
                t ? (o.viewModelDom.show(), o.storeAndSetKeyScope(), M.popupVisibilityNames.push(o.viewModelName), o.viewModelDom.css("z-index", 3e3 + Object(M.popupVisibilityNames)().length + 10), o.onShowTrigger && o.onShowTrigger(!o.onShowTrigger()), Object(k.delegateRun)(o, "onShowWithDelay", [], 500)) : (Object(k.delegateRun)(o, "onHide"), Object(k.delegateRun)(o, "onHideWithDelay", [], 500), o.onHideTrigger && o.onHideTrigger(!o.onHideTrigger()), o.restoreKeyScope(), h("view-model-on-hide", e), M.popupVisibilityNames.remove(o.viewModelName), o.viewModelDom.css("z-index", 2e3), E.a.delay(function() {
                    return o.viewModelDom.hide()
                }, 300))
            })), h("view-model-pre-build", e, n), N.a.applyBindingAccessorsToNode(n[0], {
                translatorInit: !0,
                template: function() {
                    return {
                        name: o.viewModelTemplateID
                    }
                }
            }, o), Object(k.delegateRun)(o, "onBuild", [n]), o && B.Popup === a && o.registerPopupKeyDown(), h("view-model-post-build", e, n)) : Object(k.log)("Cannot find view model position: " + a)
        }
        return e ? e.__vm : null
    }

    function m(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = d(e);
        n && (f(n), n.__vm && n.__dom && (Object(k.delegateRun)(n.__vm, "onBeforeShow", t || []), n.__vm.modalVisibility(!0), Object(k.delegateRun)(n.__vm, "onShow", t || []), h("view-model-on-show", n, t || [])))
    }

    function b(e) {
        var t = d(e);
        t && (f(t), t.__vm && t.__dom && Object(k.delegateRun)(t.__vm, "onWarmUp"))
    }

    function g(e) {
        var t = d(e);
        return !(!t || !t.__vm) && t.__vm.modalVisibility()
    }

    function y(e, t) {
        var n = null,
            o = !1,
            i = null;
        "" === Object(k.pString)(e) && (e = U), "" !== e && ((n = u(e)) || (n = u(U)) && (t = e + "/" + t, e = U), n && n.__started && (o = x && n === x, n.__builded || (n.__builded = !0, Object(k.isNonEmptyArray)(n.viewModels()) && E.a.each(n.viewModels(), function(e) {
            f(e, n)
        }), Object(k.delegateRun)(n, "onBuild")), E.a.defer(function() {
            x && !o && (Object(k.delegateRun)(x, "onHide"), Object(k.delegateRun)(x, "onHideWithDelay", [], 500), x.onHideTrigger && x.onHideTrigger(!x.onHideTrigger()), Object(k.isNonEmptyArray)(x.viewModels()) && E.a.each(x.viewModels(), function(e) {
                e.__vm && e.__dom && B.Popup !== e.__vm.viewModelPosition && (e.__dom.hide(), e.__vm.viewModelVisibility(!1), Object(k.delegateRun)(e.__vm, "onHide"), Object(k.delegateRun)(e.__vm, "onHideWithDelay", [], 500), e.__vm.onHideTrigger && e.__vm.onHideTrigger(!e.__vm.onHideTrigger()))
            })), (x = n) && !o && (Object(k.delegateRun)(x, "onShow"), x.onShowTrigger && x.onShowTrigger(!x.onShowTrigger()), Object(D.f)("screen-on-show", [x.screenName(), x]), Object(k.isNonEmptyArray)(x.viewModels()) && E.a.each(x.viewModels(), function(e) {
                e.__vm && e.__dom && B.Popup !== e.__vm.viewModelPosition && (Object(k.delegateRun)(e.__vm, "onBeforeShow"), e.__dom.show(), e.__vm.viewModelVisibility(!0), Object(k.delegateRun)(e.__vm, "onShow"), e.__vm.onShowTrigger && e.__vm.onShowTrigger(!e.__vm.onShowTrigger()), Object(k.delegateRun)(e.__vm, "onShowWithDelay", [], 200), h("view-model-on-show", e))
            })), (i = n && n.__cross ? n.__cross() : null) && i.parse(t)
        })))
    }

    function v(e) {
        E.a.each(e, function(e) {
            if (e) {
                var t = new e,
                    n = t ? t.screenName() : "";
                t && "" !== n && ("" === U && (U = n), H[n] = t)
            }
        }), E.a.each(H, function(e) {
            e && !e.__started && e.__start && (e.__started = !0, e.__start(), Object(D.f)("screen-pre-start", [e.screenName(), e]), Object(k.delegateRun)(e, "onStart"), Object(D.f)("screen-post-start", [e.screenName(), e]))
        });
        var t = _.a.create();
        t.addRoute(/^([a-zA-Z0-9\-]*)\/?(.*)$/, y), I.a.initialized.add(t.parse, t), I.a.changed.add(t.parse, t), I.a.init(), E.a.delay(function() {
            return M.$html.removeClass("rl-started-trigger").addClass("rl-started")
        }, 100), E.a.delay(function() {
            return M.$html.addClass("rl-started-delay")
        }, 200)
    }

    function S(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        e = "/" === (e = "#" === e.substr(0, 1) ? e.substr(1) : e).substr(0, 1) ? e.substr(1) : e;
        var o = n ? "replaceHash" : "setHash";
        t ? (I.a.changed.active = !1, I.a[o](e), I.a.changed.active = !0) : (I.a.changed.active = !0, I.a[o](e), I.a.setHash(e))
    }

    function O(e) {
        var t = e.name,
            n = e.type,
            o = e.templateID;
        return function(e) {
            e && (t && (Object(k.isArray)(t) ? e.__names = t : e.__names = [t], e.__name = e.__names[0]), n && (e.__type = n), o && (e.__templateID = o))
        }
    }

    function w(e) {
        var t = e.name,
            n = e.templateID;
        return O({
            name: t,
            type: B.Popup,
            templateID: n
        })
    }

    function T() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return function(t, n, o) {
            if (!n || !n.match(/Command$/)) throw new Error('name "' + n + '" should end with Command suffix');
            var i = o.value || o.initializer(),
                a = Object(k.isFunc)(e) ? e : function() {
                    return !!e
                };
            return o.value = function() {
                if (a.call(this, this)) {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    i.apply(this, t)
                }
                return !1
            }, o.value.__realCanExecute = a, o.value.isCommand = !0, o
        }
    }

    function C(e) {
        return E.a.throttle(function(t, n) {
            var o = n && "up" === n.shortcut;
            if (t && e.length) {
                var i = e.index(e.filter(".selected"));
                o && 0 < i ? i -= 1 : !o && i < e.length - 1 && (i += 1);
                var a = e.eq(i).attr("href");
                a && S(a, !1, !0)
            }
        }, P.Magics.Time200ms)
    }
    n.r(t), n.d(t, "ViewType", function() {
        return B
    }), n.d(t, "hideLoading", function() {
        return o
    }), n.d(t, "createCommand", function() {
        return i
    }), n.d(t, "addSettingsViewModel", function() {
        return a
    }), n.d(t, "removeSettingsViewModel", function() {
        return r
    }), n.d(t, "disableSettingsViewModel", function() {
        return s
    }), n.d(t, "routeOff", function() {
        return c
    }), n.d(t, "routeOn", function() {
        return l
    }), n.d(t, "screen", function() {
        return u
    }), n.d(t, "getScreenPopup", function() {
        return d
    }), n.d(t, "hideScreenPopup", function() {
        return p
    }), n.d(t, "vmRunHook", function() {
        return h
    }), n.d(t, "buildViewModel", function() {
        return f
    }), n.d(t, "showScreenPopup", function() {
        return m
    }), n.d(t, "warmUpScreenPopup", function() {
        return b
    }), n.d(t, "isPopupVisible", function() {
        return g
    }), n.d(t, "screenOnRoute", function() {
        return y
    }), n.d(t, "startScreens", function() {
        return v
    }), n.d(t, "setHash", function() {
        return S
    }), n.d(t, "commandDecorator", function() {
        return T
    }), n.d(t, "command", function() {
        return T
    }), n.d(t, "viewDecorator", function() {
        return O
    }), n.d(t, "view", function() {
        return O
    }), n.d(t, "viewModel", function() {
        return O
    }), n.d(t, "popupDecorator", function() {
        return w
    }), n.d(t, "popup", function() {
        return w
    }), n.d(t, "settingsMenuKeysHendler", function() {
        return C
    });
    var A = n(4),
        E = n.n(A),
        F = n(7),
        j = n.n(F),
        N = n(1),
        R = n(35),
        I = n.n(R),
        L = n(75),
        _ = n.n(L),
        P = n(0),
        D = n(29),
        M = n(6),
        k = n(2),
        x = null,
        U = "",
        H = {},
        B = {
            Popup: "Popups",
            Left: "Left",
            Right: "Right",
            Center: "Center"
        }
}, function(e, t, n) {
    "use strict";

    function o(e, t, n) {
        var o = "",
            i = T[e];
        if (Object(v.isUnd)(i) && (i = Object(v.isUnd)(n) ? e : n), !Object(v.isUnd)(t) && !Object(v.isNull)(t))
            for (o in t) Object(v.has)(t, o) && (i = i.replace("%" + o + "%", t[o]));
        return i
    }

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        f.a.defer(function() {
            b()("[data-i18n]", e).each(function(e, t) {
                F(t)
            }), t && S.bAnimationSupported && b()(".i18n-animation[data-i18n]", e).letterfx({
                fx: "fall fade",
                backwards: !1,
                timing: 50,
                fx_duration: "50ms",
                letter_end: "restore",
                element_end: "restore"
            })
        })
    }

    function a() {
        A.forEach(function(e) {
            C[e[0]] = o(e[1])
        })
    }

    function r(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        e && e(), t ? E.subscribe(function() {
            e && e(), t && t()
        }) : e && E.subscribe(e)
    }

    function s(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return e = p.a.parseInt(e, 10) || 0, y.Notification.ClientViewError === e && t ? t : (n = n && p.a.parseInt(n, 10) || 0, Object(v.isUnd)(C[e]) ? n && Object(v.isUnd)(C[n]) ? C[n] : "" : C[e])
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.Notification.UnknownNotification;
        return e && e.ErrorCode ? s(Object(v.pInt)(e.ErrorCode), e.ErrorMessage || "") : s(t)
    }

    function l(e) {
        var t = "";
        switch (p.a.parseInt(e, 10) || 0) {
            case y.UploadErrorCode.FileIsTooBig:
                t = o("UPLOAD/ERROR_FILE_IS_TOO_BIG");
                break;
            case y.UploadErrorCode.FilePartiallyUploaded:
                t = o("UPLOAD/ERROR_FILE_PARTIALLY_UPLOADED");
                break;
            case y.UploadErrorCode.FileNoUploaded:
                t = o("UPLOAD/ERROR_NO_FILE_UPLOADED");
                break;
            case y.UploadErrorCode.MissingTempFolder:
                t = o("UPLOAD/ERROR_MISSING_TEMP_FOLDER");
                break;
            case y.UploadErrorCode.FileOnSaveingError:
                t = o("UPLOAD/ERROR_ON_SAVING_FILE");
                break;
            case y.UploadErrorCode.FileType:
                t = o("UPLOAD/ERROR_FILE_TYPE");
                break;
            default:
                t = o("UPLOAD/ERROR_UNKNOWN")
        }
        return t
    }

    function u(e, t) {
        var n = Object(v.microtime)();
        return S.$html.addClass("rl-changing-language"), new p.a.Promise(function(o, i) {
            b.a.ajax({
                url: Object(w.n)(t, e),
                dataType: "script",
                cache: !0
            }).then(function() {
                f.a.delay(function() {
                    j();
                    var e = -1 < Object(v.inArray)((t || "").toLowerCase(), ["ar", "ar_sa", "he", "he_he", "ur", "ur_ir"]);
                    S.$html.removeClass("rl-changing-language").removeClass("rl-rtl rl-ltr").addClass(e ? "rl-rtl" : "rl-ltr"), o()
                }, 500 < Object(v.microtime)() - n ? 1 : 500)
            }, function() {
                S.$html.removeClass("rl-changing-language"), p.a.rainloopI18N = null, i()
            })
        })
    }
    n.r(t), n.d(t, "trigger", function() {
        return E
    }), n.d(t, "i18n", function() {
        return o
    }), n.d(t, "i18nToNodes", function() {
        return i
    }), n.d(t, "initNotificationLanguage", function() {
        return a
    }), n.d(t, "initOnStartOrLangChange", function() {
        return r
    }), n.d(t, "getNotification", function() {
        return s
    }), n.d(t, "getNotificationFromResponse", function() {
        return c
    }), n.d(t, "getUploadErrorDescByCode", function() {
        return l
    }), n.d(t, "reload", function() {
        return u
    });
    var d = n(3),
        p = n.n(d),
        h = n(4),
        f = n.n(h),
        m = n(7),
        b = n.n(m),
        g = n(1),
        y = n(0),
        v = n(2),
        S = n(6),
        O = n(34),
        w = n(16),
        T = p.a.rainloopI18N || {},
        C = {},
        A = [
            [y.Notification.InvalidToken, "NOTIFICATIONS/INVALID_TOKEN"],
            [y.Notification.InvalidToken, "NOTIFICATIONS/INVALID_TOKEN"],
            [y.Notification.AuthError, "NOTIFICATIONS/AUTH_ERROR"],
            [y.Notification.AccessError, "NOTIFICATIONS/ACCESS_ERROR"],
            [y.Notification.ConnectionError, "NOTIFICATIONS/CONNECTION_ERROR"],
            [y.Notification.CaptchaError, "NOTIFICATIONS/CAPTCHA_ERROR"],
            [y.Notification.SocialFacebookLoginAccessDisable, "NOTIFICATIONS/SOCIAL_FACEBOOK_LOGIN_ACCESS_DISABLE"],
            [y.Notification.SocialTwitterLoginAccessDisable, "NOTIFICATIONS/SOCIAL_TWITTER_LOGIN_ACCESS_DISABLE"],
            [y.Notification.SocialGoogleLoginAccessDisable, "NOTIFICATIONS/SOCIAL_GOOGLE_LOGIN_ACCESS_DISABLE"],
            [y.Notification.DomainNotAllowed, "NOTIFICATIONS/DOMAIN_NOT_ALLOWED"],
            [y.Notification.AccountNotAllowed, "NOTIFICATIONS/ACCOUNT_NOT_ALLOWED"],
            [y.Notification.AccountTwoFactorAuthRequired, "NOTIFICATIONS/ACCOUNT_TWO_FACTOR_AUTH_REQUIRED"],
            [y.Notification.AccountTwoFactorAuthError, "NOTIFICATIONS/ACCOUNT_TWO_FACTOR_AUTH_ERROR"],
            [y.Notification.CouldNotSaveNewPassword, "NOTIFICATIONS/COULD_NOT_SAVE_NEW_PASSWORD"],
            [y.Notification.CurrentPasswordIncorrect, "NOTIFICATIONS/CURRENT_PASSWORD_INCORRECT"],
            [y.Notification.NewPasswordShort, "NOTIFICATIONS/NEW_PASSWORD_SHORT"],
            [y.Notification.NewPasswordWeak, "NOTIFICATIONS/NEW_PASSWORD_WEAK"],
            [y.Notification.NewPasswordForbidden, "NOTIFICATIONS/NEW_PASSWORD_FORBIDDENT"],
            [y.Notification.ContactsSyncError, "NOTIFICATIONS/CONTACTS_SYNC_ERROR"],
            [y.Notification.CantGetMessageList, "NOTIFICATIONS/CANT_GET_MESSAGE_LIST"],
            [y.Notification.CantGetMessage, "NOTIFICATIONS/CANT_GET_MESSAGE"],
            [y.Notification.CantDeleteMessage, "NOTIFICATIONS/CANT_DELETE_MESSAGE"],
            [y.Notification.CantMoveMessage, "NOTIFICATIONS/CANT_MOVE_MESSAGE"],
            [y.Notification.CantCopyMessage, "NOTIFICATIONS/CANT_MOVE_MESSAGE"],
            [y.Notification.CantSaveMessage, "NOTIFICATIONS/CANT_SAVE_MESSAGE"],
            [y.Notification.CantSendMessage, "NOTIFICATIONS/CANT_SEND_MESSAGE"],
            [y.Notification.InvalidRecipients, "NOTIFICATIONS/INVALID_RECIPIENTS"],
            [y.Notification.CantSaveFilters, "NOTIFICATIONS/CANT_SAVE_FILTERS"],
            [y.Notification.CantGetFilters, "NOTIFICATIONS/CANT_GET_FILTERS"],
            [y.Notification.FiltersAreNotCorrect, "NOTIFICATIONS/FILTERS_ARE_NOT_CORRECT"],
            [y.Notification.CantCreateFolder, "NOTIFICATIONS/CANT_CREATE_FOLDER"],
            [y.Notification.CantRenameFolder, "NOTIFICATIONS/CANT_RENAME_FOLDER"],
            [y.Notification.CantDeleteFolder, "NOTIFICATIONS/CANT_DELETE_FOLDER"],
            [y.Notification.CantDeleteNonEmptyFolder, "NOTIFICATIONS/CANT_DELETE_NON_EMPTY_FOLDER"],
            [y.Notification.CantSubscribeFolder, "NOTIFICATIONS/CANT_SUBSCRIBE_FOLDER"],
            [y.Notification.CantUnsubscribeFolder, "NOTIFICATIONS/CANT_UNSUBSCRIBE_FOLDER"],
            [y.Notification.CantSaveSettings, "NOTIFICATIONS/CANT_SAVE_SETTINGS"],
            [y.Notification.CantSavePluginSettings, "NOTIFICATIONS/CANT_SAVE_PLUGIN_SETTINGS"],
            [y.Notification.DomainAlreadyExists, "NOTIFICATIONS/DOMAIN_ALREADY_EXISTS"],
            [y.Notification.CantInstallPackage, "NOTIFICATIONS/CANT_INSTALL_PACKAGE"],
            [y.Notification.CantDeletePackage, "NOTIFICATIONS/CANT_DELETE_PACKAGE"],
            [y.Notification.InvalidPluginPackage, "NOTIFICATIONS/INVALID_PLUGIN_PACKAGE"],
            [y.Notification.UnsupportedPluginPackage, "NOTIFICATIONS/UNSUPPORTED_PLUGIN_PACKAGE"],
            [y.Notification.LicensingServerIsUnavailable, "NOTIFICATIONS/LICENSING_SERVER_IS_UNAVAILABLE"],
            [y.Notification.LicensingExpired, "NOTIFICATIONS/LICENSING_EXPIRED"],
            [y.Notification.LicensingBanned, "NOTIFICATIONS/LICENSING_BANNED"],
            [y.Notification.DemoSendMessageError, "NOTIFICATIONS/DEMO_SEND_MESSAGE_ERROR"],
            [y.Notification.DemoAccountError, "NOTIFICATIONS/DEMO_ACCOUNT_ERROR"],
            [y.Notification.AccountAlreadyExists, "NOTIFICATIONS/ACCOUNT_ALREADY_EXISTS"],
            [y.Notification.AccountDoesNotExist, "NOTIFICATIONS/ACCOUNT_DOES_NOT_EXIST"],
            [y.Notification.MailServerError, "NOTIFICATIONS/MAIL_SERVER_ERROR"],
            [y.Notification.InvalidInputArgument, "NOTIFICATIONS/INVALID_INPUT_ARGUMENT"],
            [y.Notification.UnknownNotification, "NOTIFICATIONS/UNKNOWN_ERROR"],
            [y.Notification.UnknownError, "NOTIFICATIONS/UNKNOWN_ERROR"]
        ],
        E = g.a.observable(!1),
        F = function(e) {
            var t = b()(e),
                n = t.data("i18n");
            if (n)
                if ("[" === n.substr(0, 1)) switch (n.substr(0, 6)) {
                    case "[html]":
                        t.html(o(n.substr(6)));
                        break;
                    case "[place":
                        t.attr("placeholder", o(n.substr(13)));
                        break;
                    case "[title":
                        t.attr("title", o(n.substr(7)))
                } else t.text(o(n))
        },
        j = function() {
            p.a.rainloopI18N && (T = p.a.rainloopI18N || {}, i(p.a.document, !0), Object(O.reload)(), E(!E())), p.a.rainloopI18N = null
        };
    S.$html.addClass("rl-" + (S.$html.attr("dir") || "ltr"))
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = o(n(143)),
        a = o(n(139)),
        r = o(n(107));
    t.default = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, r.default)(t)));
        e.prototype = (0, a.default)(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (i.default ? (0, i.default)(e, t) : e.__proto__ = t)
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var o, i = (o = n(107)) && o.__esModule ? o : {
        default: o
    };
    t.default = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : (0, i.default)(t)) && "function" != typeof t ? e : t
    }
}, function(e, t, n) {
    "use strict";
    var o = n(8),
        i = n.n(o),
        a = n(1),
        r = n(4),
        s = n.n(r),
        c = n(5),
        l = n(0),
        u = n(23),
        d = n(2),
        p = n(15),
        h = n(34),
        f = function() {
            function e() {
                i()(this, e), this.displaySpecSetting = a.a.observable(!0), this.sentFolder = a.a.observable(""), this.draftFolder = a.a.observable(""), this.spamFolder = a.a.observable(""), this.trashFolder = a.a.observable(""), this.archiveFolder = a.a.observable(""), this.namespace = "", this.folderList = a.a.observableArray([]), this.folderList.optimized = a.a.observable(!1), this.folderList.error = a.a.observable(""), this.foldersLoading = a.a.observable(!1), this.foldersCreating = a.a.observable(!1), this.foldersDeleting = a.a.observable(!1), this.foldersRenaming = a.a.observable(!1), this.foldersInboxUnreadCount = a.a.observable(0), this.currentFolder = a.a.observable(null).extend({
                    toggleSubscribeProperty: [this, "selected"]
                }), this.sieveAllowFileintoInbox = !!Object(c.settingsGet)("SieveAllowFileintoInbox"), this.computers(), this.subscribers()
            }
            return e.prototype.computers = function() {
                var e = this;
                this.draftFolderNotEnabled = a.a.computed(function() {
                    return "" === e.draftFolder() || u.r === e.draftFolder()
                }), this.foldersListWithSingleInboxRootFolder = a.a.computed(function() {
                    return !s.a.find(e.folderList(), function(e) {
                        return e && !e.isSystemFolder() && e.visible()
                    })
                }), this.currentFolderFullNameRaw = a.a.computed(function() {
                    return e.currentFolder() ? e.currentFolder().fullNameRaw : ""
                }), this.currentFolderFullName = a.a.computed(function() {
                    return e.currentFolder() ? e.currentFolder().fullName : ""
                }), this.currentFolderFullNameHash = a.a.computed(function() {
                    return e.currentFolder() ? e.currentFolder().fullNameHash : ""
                }), this.foldersChanging = a.a.computed(function() {
                    var t = e.foldersLoading(),
                        n = e.foldersCreating(),
                        o = e.foldersDeleting(),
                        i = e.foldersRenaming();
                    return t || n || o || i
                }), this.folderListSystemNames = a.a.computed(function() {
                    var t = [Object(p.h)()],
                        n = e.folderList(),
                        o = e.sentFolder(),
                        i = e.draftFolder(),
                        a = e.spamFolder(),
                        r = e.trashFolder(),
                        s = e.archiveFolder();
                    return Object(d.isArray)(n) && 0 < n.length && ("" !== o && u.r !== o && t.push(o), "" !== i && u.r !== i && t.push(i), "" !== a && u.r !== a && t.push(a), "" !== r && u.r !== r && t.push(r), "" !== s && u.r !== s && t.push(s)), t
                }), this.folderListSystem = a.a.computed(function() {
                    return s.a.compact(s.a.map(e.folderListSystemNames(), function(e) {
                        return Object(p.e)(e)
                    }))
                }), this.folderMenuForMove = a.a.computed(function() {
                    return Object(d.folderListOptionsBuilder)(e.folderListSystem(), e.folderList(), [e.currentFolderFullNameRaw()], null, null, null, null, function(e) {
                        return e ? e.localName() : ""
                    })
                }), this.folderMenuForFilters = a.a.computed(function() {
                    return Object(d.folderListOptionsBuilder)(e.folderListSystem(), e.folderList(), [e.sieveAllowFileintoInbox ? "" : "INBOX"], [
                        ["", ""]
                    ], null, null, null, function(e) {
                        return e ? e.localName() : ""
                    })
                })
            }, e.prototype.subscribers = function() {
                var e = function(e) {
                        return function() {
                            var t = Object(p.e)(e());
                            t && t.type(l.FolderType.User)
                        }
                    },
                    t = function(e) {
                        return function(t) {
                            var n = Object(p.e)(t);
                            n && n.type(e)
                        }
                    };
                this.sentFolder.subscribe(e(this.sentFolder), this, "beforeChange"), this.draftFolder.subscribe(e(this.draftFolder), this, "beforeChange"), this.spamFolder.subscribe(e(this.spamFolder), this, "beforeChange"), this.trashFolder.subscribe(e(this.trashFolder), this, "beforeChange"), this.archiveFolder.subscribe(e(this.archiveFolder), this, "beforeChange"), this.sentFolder.subscribe(t(l.FolderType.SentItems), this), this.draftFolder.subscribe(t(l.FolderType.Draft), this), this.spamFolder.subscribe(t(l.FolderType.Spam), this), this.trashFolder.subscribe(t(l.FolderType.Trash), this), this.archiveFolder.subscribe(t(l.FolderType.Archive), this)
            }, e.prototype.getNextFolderNames = function() {
                var e = [],
                    t = Object(h.momentNowUnix)(),
                    n = t - 300,
                    o = [],
                    i = Object(p.h)();
                return function e(t) {
                    s.a.each(t, function(t) {
                        t && i !== t.fullNameRaw && t.selectable && t.existen && n > t.interval && (t.isSystemFolder() || t.subScribed() && t.checkable()) && o.push([t.interval, t.fullNameRaw]), t && 0 < t.subFolders().length && e(t.subFolders())
                    })
                }(this.folderList()), o.sort(function(e, t) {
                    return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0
                }), s.a.find(o, function(n) {
                    var o = Object(p.e)(n[1]);
                    return o && (o.interval = t, e.push(n[1])), 5 <= e.length
                }), s.a.uniq(e)
            }, e
        }();
    t.a = new f
}, function(e, t, n) {
    "use strict";

    function o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = 0,
            i = 0,
            a = [];
        if (Object(g.isNonEmptyArray)(e))
            for (i = e.length; o < i; o++) a.push(e[o].toLine(t, n));
        return a.join(", ")
    }

    function i(e) {
        var t = 0,
            n = 0,
            o = [];
        if (Object(g.isNonEmptyArray)(e))
            for (n = e.length; t < n; t++) e[t] && e[t].email && "" !== e[t].name && o.push(e[t].email);
        return o.join(", ")
    }

    function a(e) {
        var t = 0,
            n = 0,
            o = null,
            i = [];
        if (Object(g.isNonEmptyArray)(e))
            for (t = 0, n = e.length; t < n; t++)(o = C.EmailModel.newInstanceFromJson(e[t])) && i.push(o);
        return i
    }

    function r(e, t, n) {
        if (e && 0 < e.length)
            for (var o = 0, i = e.length; o < i; o++) Object(g.isUnd)(t[e[o].email]) && (t[e[o].email] = !0, n.push(e[o]))
    }
    var s = n(8),
        c = n.n(s),
        l = n(3),
        u = n.n(l),
        d = n(4),
        p = n.n(d),
        h = n(1),
        f = n(7),
        m = n.n(f),
        b = n(0),
        g = n(2),
        y = n(15),
        v = n(23),
        S = n(6),
        O = n(16),
        w = n(10),
        T = n(34),
        C = n(44),
        A = n(12),
        E = n.n(A),
        F = n(11),
        j = n.n(F),
        N = n(54),
        R = n.n(N),
        I = n(183),
        L = n.n(I),
        _ = n(182),
        P = n.n(_),
        D = n(13),
        M = n(30),
        k = n(79),
        x = function(e) {
            function t() {
                c()(this, t);
                var n = E()(this, e.call(this, "MessageModel"));
                return n.folderFullNameRaw = "", n.uid = "", n.hash = "", n.requestHash = "", n.subject = h.a.observable(""), n.subjectPrefix = h.a.observable(""), n.subjectSuffix = h.a.observable(""), n.size = h.a.observable(0), n.dateTimeStampInUTC = h.a.observable(0), n.priority = h.a.observable(b.MessagePriority.Normal), n.proxy = !1, n.fromEmailString = h.a.observable(""), n.fromClearEmailString = h.a.observable(""), n.toEmailsString = h.a.observable(""), n.toClearEmailsString = h.a.observable(""), n.senderEmailsString = h.a.observable(""), n.senderClearEmailsString = h.a.observable(""), n.emails = [], n.from = [], n.to = [], n.cc = [], n.bcc = [], n.replyTo = [], n.deliveredTo = [], n.unsubsribeLinks = [], n.newForAnimation = h.a.observable(!1), n.deleted = h.a.observable(!1), n.deletedMark = h.a.observable(!1), n.unseen = h.a.observable(!1), n.flagged = h.a.observable(!1), n.answered = h.a.observable(!1), n.forwarded = h.a.observable(!1), n.isReadReceipt = h.a.observable(!1), n.focused = h.a.observable(!1), n.selected = h.a.observable(!1), n.checked = h.a.observable(!1), n.hasAttachments = h.a.observable(!1), n.attachmentsSpecData = h.a.observableArray([]), n.attachmentIconClass = h.a.computed(function() {
                    return Object(k.b)(n.hasAttachments() ? n.attachmentsSpecData() : [])
                }), n.body = null, n.isHtml = h.a.observable(!1), n.hasImages = h.a.observable(!1), n.attachments = h.a.observableArray([]), n.isPgpSigned = h.a.observable(!1), n.isPgpEncrypted = h.a.observable(!1), n.pgpSignedVerifyStatus = h.a.observable(b.SignedVerifyStatus.None), n.pgpSignedVerifyUser = h.a.observable(""), n.priority = h.a.observable(b.MessagePriority.Normal), n.readReceipt = h.a.observable(""), n.aDraftInfo = [], n.sMessageId = "", n.sInReplyTo = "", n.sReferences = "", n.hasUnseenSubMessage = h.a.observable(!1), n.hasFlaggedSubMessage = h.a.observable(!1), n.threads = h.a.observableArray([]), n.threadsLen = h.a.computed(function() {
                    return n.threads().length
                }), n.isImportant = h.a.computed(function() {
                    return b.MessagePriority.High === n.priority()
                }), n.regDisposables([n.attachmentIconClass, n.threadsLen, n.isImportant]), n
            }
            return j()(t, e), t.newInstanceFromJson = function(e) {
                var n = new t;
                return n.initByJson(e) ? n : null
            }, t.prototype.clear = function() {
                this.folderFullNameRaw = "", this.uid = "", this.hash = "", this.requestHash = "", this.subject(""), this.subjectPrefix(""), this.subjectSuffix(""), this.size(0), this.dateTimeStampInUTC(0), this.priority(b.MessagePriority.Normal), this.proxy = !1, this.fromEmailString(""), this.fromClearEmailString(""), this.toEmailsString(""), this.toClearEmailsString(""), this.senderEmailsString(""), this.senderClearEmailsString(""), this.emails = [], this.from = [], this.to = [], this.cc = [], this.bcc = [], this.replyTo = [], this.deliveredTo = [], this.unsubsribeLinks = [], this.newForAnimation(!1), this.deleted(!1), this.deletedMark(!1), this.unseen(!1), this.flagged(!1), this.answered(!1), this.forwarded(!1), this.isReadReceipt(!1), this.selected(!1), this.checked(!1), this.hasAttachments(!1), this.attachmentsSpecData([]), this.body = null, this.isHtml(!1), this.hasImages(!1), this.attachments([]), this.isPgpSigned(!1), this.isPgpEncrypted(!1), this.pgpSignedVerifyStatus(b.SignedVerifyStatus.None), this.pgpSignedVerifyUser(""), this.priority(b.MessagePriority.Normal), this.readReceipt(""), this.aDraftInfo = [], this.sMessageId = "", this.sInReplyTo = "", this.sReferences = "", this.threads([]), this.hasUnseenSubMessage(!1), this.hasFlaggedSubMessage(!1)
            }, t.prototype.getEmails = function(e) {
                var t = this;
                return p.a.compact(p.a.uniq(p.a.map(p.a.reduce(e, function(e, n) {
                    return e.concat(t[n])
                }, []), function(e) {
                    return e ? e.email : ""
                })))
            }, t.prototype.getRecipientsEmails = function() {
                return this.getEmails(["to", "cc"])
            }, t.prototype.friendlySize = function() {
                return Object(g.friendlySize)(this.size())
            }, t.prototype.computeSenderEmail = function() {
                var e = D.a.sentFolder(),
                    t = D.a.draftFolder();
                this.senderEmailsString(this.folderFullNameRaw === e || this.folderFullNameRaw === t ? this.toEmailsString() : this.fromEmailString()), this.senderClearEmailsString(this.folderFullNameRaw === e || this.folderFullNameRaw === t ? this.toClearEmailsString() : this.fromClearEmailString())
            }, t.prototype.initByJson = function(e) {
                var t = !1,
                    n = b.MessagePriority.Normal;
                return e && "Object/Message" === e["@Object"] && (n = Object(g.pInt)(e.Priority), this.priority(-1 < Object(g.inArray)(n, [b.MessagePriority.High, b.MessagePriority.Low]) ? n : b.MessagePriority.Normal), this.folderFullNameRaw = e.Folder, this.uid = e.Uid, this.hash = e.Hash, this.requestHash = e.RequestHash, this.proxy = !!e.ExternalProxy, this.size(Object(g.pInt)(e.Size)), this.from = a(e.From), this.to = a(e.To), this.cc = a(e.Cc), this.bcc = a(e.Bcc), this.replyTo = a(e.ReplyTo), this.deliveredTo = a(e.DeliveredTo), this.unsubsribeLinks = Object(g.isNonEmptyArray)(e.UnsubsribeLinks) ? e.UnsubsribeLinks : [], this.subject(e.Subject), Object(g.isArray)(e.SubjectParts) ? (this.subjectPrefix(e.SubjectParts[0]), this.subjectSuffix(e.SubjectParts[1])) : (this.subjectPrefix(""), this.subjectSuffix(this.subject())), this.dateTimeStampInUTC(Object(g.pInt)(e.DateTimeStampInUTC)), this.hasAttachments(!!e.HasAttachments), this.attachmentsSpecData(Object(g.isArray)(e.AttachmentsSpecData) ? e.AttachmentsSpecData : []), this.fromEmailString(o(this.from, !0)), this.fromClearEmailString(i(this.from)), this.toEmailsString(o(this.to, !0)), this.toClearEmailsString(i(this.to)), this.threads(Object(g.isArray)(e.Threads) ? e.Threads : []), this.initFlagsByJson(e), this.computeSenderEmail(), t = !0), t
            }, t.prototype.initUpdateByMessageJson = function(e) {
                var t = !1,
                    n = b.MessagePriority.Normal;
                return e && "Object/Message" === e["@Object"] && (n = Object(g.pInt)(e.Priority), this.priority(-1 < Object(g.inArray)(n, [b.MessagePriority.High, b.MessagePriority.Low]) ? n : b.MessagePriority.Normal), this.aDraftInfo = e.DraftInfo, this.sMessageId = e.MessageId, this.sInReplyTo = e.InReplyTo, this.sReferences = e.References, this.proxy = !!e.ExternalProxy, M.a.capaOpenPGP() && (this.isPgpSigned(!!e.PgpSigned), this.isPgpEncrypted(!!e.PgpEncrypted)), this.hasAttachments(!!e.HasAttachments), this.attachmentsSpecData(Object(g.isArray)(e.AttachmentsSpecData) ? e.AttachmentsSpecData : []), this.foundedCIDs = Object(g.isArray)(e.FoundedCIDs) ? e.FoundedCIDs : [], this.attachments(this.initAttachmentsFromJson(e.Attachments)), this.readReceipt(e.ReadReceipt || ""), this.computeSenderEmail(), t = !0), t
            }, t.prototype.initAttachmentsFromJson = function(e) {
                var t = 0,
                    n = 0,
                    o = null,
                    i = [];
                if (e && "Collection/AttachmentCollection" === e["@Object"] && Object(g.isNonEmptyArray)(e["@Collection"]))
                    for (t = 0, n = e["@Collection"].length; t < n; t++)(o = k.a.newInstanceFromJson(e["@Collection"][t])) && ("" !== o.cidWithOutTags && 0 < this.foundedCIDs.length && 0 <= Object(g.inArray)(o.cidWithOutTags, this.foundedCIDs) && (o.isLinked = !0), i.push(o));
                return i
            }, t.prototype.hasUnsubsribeLinks = function() {
                return this.unsubsribeLinks && 0 < this.unsubsribeLinks.length
            }, t.prototype.getFirstUnsubsribeLink = function() {
                return this.unsubsribeLinks && 0 < this.unsubsribeLinks.length && this.unsubsribeLinks[0] || ""
            }, t.prototype.initFlagsByJson = function(e) {
                var t = !1;
                return e && "Object/Message" === e["@Object"] && (this.unseen(!e.IsSeen), this.flagged(!!e.IsFlagged), this.answered(!!e.IsAnswered), this.forwarded(!!e.IsForwarded), this.isReadReceipt(!!e.IsReadReceipt), this.deletedMark(!!e.IsDeleted), t = !0), t
            }, t.prototype.fromToLine = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return o(this.from, e, t)
            }, t.prototype.fromDkimData = function() {
                var e = ["none", ""];
                return Object(g.isNonEmptyArray)(this.from) && 1 === this.from.length && this.from[0] && this.from[0].dkimStatus && (e = [this.from[0].dkimStatus, this.from[0].dkimValue || ""]), e
            }, t.prototype.toToLine = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return o(this.to, e, t)
            }, t.prototype.ccToLine = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return o(this.cc, e, t)
            }, t.prototype.bccToLine = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return o(this.bcc, e, t)
            }, t.prototype.replyToToLine = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return o(this.replyTo, e, t)
            }, t.prototype.lineAsCss = function() {
                return L()({
                    deleted: this.deleted(),
                    "deleted-mark": this.deletedMark(),
                    selected: this.selected(),
                    checked: this.checked(),
                    flagged: this.flagged(),
                    unseen: this.unseen(),
                    answered: this.answered(),
                    forwarded: this.forwarded(),
                    focused: this.focused(),
                    important: this.isImportant(),
                    withAttachments: this.hasAttachments(),
                    new: this.newForAnimation(),
                    emptySubject: "" === this.subject(),
                    hasUnseenSubMessage: this.hasUnseenSubMessage(),
                    hasFlaggedSubMessage: this.hasFlaggedSubMessage()
                })
            }, t.prototype.hasVisibleAttachments = function() {
                return !!p.a.find(this.attachments(), function(e) {
                    return !e.isLinked
                })
            }, t.prototype.findAttachmentByCid = function(e) {
                var t = null,
                    n = this.attachments();
                return Object(g.isNonEmptyArray)(n) && (e = e.replace(/^<+/, "").replace(/>+$/, ""), t = p.a.find(n, function(t) {
                    return e === t.cidWithOutTags
                })), t || null
            }, t.prototype.findAttachmentByContentLocation = function(e) {
                var t = null,
                    n = this.attachments();
                return Object(g.isNonEmptyArray)(n) && (t = p.a.find(n, function(t) {
                    return e === t.contentLocation
                })), t || null
            }, t.prototype.messageId = function() {
                return this.sMessageId
            }, t.prototype.inReplyTo = function() {
                return this.sInReplyTo
            }, t.prototype.references = function() {
                return this.sReferences
            }, t.prototype.fromAsSingleEmail = function() {
                return Object(g.isArray)(this.from) && this.from[0] ? this.from[0].email : ""
            }, t.prototype.viewLink = function() {
                return Object(O.q)(this.requestHash)
            }, t.prototype.downloadLink = function() {
                return Object(O.p)(this.requestHash)
            }, t.prototype.replyEmails = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = [],
                    o = Object(g.isUnd)(e) ? {} : e;
                return r(this.replyTo, o, n), 0 === n.length && r(this.from, o, n), 0 !== n.length || t ? n : this.replyEmails({}, !0)
            }, t.prototype.replyAllEmails = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = [],
                    o = [],
                    i = Object(g.isUnd)(e) ? {} : e;
                return r(this.replyTo, i, n), 0 === n.length && r(this.from, i, n), r(this.to, i, n), r(this.cc, i, o), 0 !== n.length || t ? [n, o] : [this.replyAllEmails({}, !0)[0], o]
            }, t.prototype.textBodyToString = function() {
                return this.body ? this.body.html() : ""
            }, t.prototype.attachmentsToStringLine = function() {
                var e = p.a.map(this.attachments(), function(e) {
                    return e.fileName + " (" + e.friendlySize + ")"
                });
                return e && 0 < e.length ? e.join(", ") : ""
            }, t.prototype.viewPopupMessage = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.showLazyExternalImagesInBody();
                var t = this.dateTimeStampInUTC() || 0,
                    n = this.ccToLine(!1),
                    o = 0 < t ? R.a.unix(t) : null;
                Object(g.previewMessage)({
                    title: this.subject(),
                    subject: this.subject(),
                    date: o ? o.format("LLL") : "",
                    fromCreds: this.fromToLine(!1),
                    toLabel: Object(w.i18n)("MESSAGE/LABEL_TO"),
                    toCreds: this.toToLine(!1),
                    ccClass: n ? "" : "rl-preview-hide",
                    ccLabel: Object(w.i18n)("MESSAGE/LABEL_CC"),
                    ccCreds: n
                }, this.body, this.isHtml(), e)
            }, t.prototype.printMessage = function() {
                this.viewPopupMessage(!0)
            }, t.prototype.generateUid = function() {
                return this.folderFullNameRaw + "/" + this.uid
            }, t.prototype.populateByMessageListItem = function(e) {
                return e && (this.folderFullNameRaw = e.folderFullNameRaw, this.uid = e.uid, this.hash = e.hash, this.requestHash = e.requestHash, this.subject(e.subject())), this.subjectPrefix(this.subjectPrefix()), this.subjectSuffix(this.subjectSuffix()), e && (this.size(e.size()), this.dateTimeStampInUTC(e.dateTimeStampInUTC()), this.priority(e.priority()), this.proxy = e.proxy, this.fromEmailString(e.fromEmailString()), this.fromClearEmailString(e.fromClearEmailString()), this.toEmailsString(e.toEmailsString()), this.toClearEmailsString(e.toClearEmailsString()), this.emails = e.emails, this.from = e.from, this.to = e.to, this.cc = e.cc, this.bcc = e.bcc, this.replyTo = e.replyTo, this.deliveredTo = e.deliveredTo, this.unsubsribeLinks = e.unsubsribeLinks, this.unseen(e.unseen()), this.flagged(e.flagged()), this.answered(e.answered()), this.forwarded(e.forwarded()), this.isReadReceipt(e.isReadReceipt()), this.deletedMark(e.deletedMark()), this.priority(e.priority()), this.selected(e.selected()), this.checked(e.checked()), this.hasAttachments(e.hasAttachments()), this.attachmentsSpecData(e.attachmentsSpecData())), this.body = null, this.aDraftInfo = [], this.sMessageId = "", this.sInReplyTo = "", this.sReferences = "", e && this.threads(e.threads()), this.computeSenderEmail(), this
            }, t.prototype.showLazyExternalImagesInBody = function() {
                this.body && m()(".lazy.lazy-inited[data-original]", this.body).each(function() {
                    m()(this).attr("src", m()(this).attr("data-original")).removeAttr("data-original").removeAttr("data-loaded")
                })
            }, t.prototype.lozad = function() {
                P()("img.lazy:not(.lazy-inited)", {
                    threshold: .4,
                    load: function(e) {
                        e.src = v.e, m()(e).addClass("lazy-inited").attr("src", e.dataset.original).removeAttr("data-loaded").removeAttr("data-original").css({
                            opacity: .3
                        }).animate({
                            opacity: 1
                        }, 500)
                    }
                }).observe()
            }, t.prototype.showExternalImages = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this.body && this.body.data("rl-has-images")) {
                    this.hasImages(!1), this.body.data("rl-has-images", !1);
                    var t = this.proxy ? "data-x-additional-src" : "data-x-src";
                    m()("[" + t + "]", this.body).each(function() {
                        var n = m()(this);
                        e && n.is("img") ? n.addClass("lazy").attr("data-original", n.attr(t)).removeAttr("data-loaded") : n.attr("src", n.attr(t)).removeAttr("data-loaded")
                    }), t = this.proxy ? "data-x-additional-style-url" : "data-x-style-url", m()("[" + t + "]", this.body).each(function() {
                        var e = m()(this),
                            n = Object(g.trim)(e.attr("style"));
                        n = "" === n ? "" : ";" === n.substr(-1) ? n + " " : n + "; ", e.attr("style", n + e.attr(t))
                    }), e && (this.lozad(), S.$win.resize()), Object(g.windowResize)(500)
                }
            }, t.prototype.showInternalImages = function() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this.body && !this.body.data("rl-init-internal-images")) {
                    this.body.data("rl-init-internal-images", !0);
                    var n = this;
                    m()("[data-x-src-cid]", this.body).each(function() {
                        var e = m()(this),
                            o = n.findAttachmentByCid(e.attr("data-x-src-cid"));
                        o && o.download && (t && e.is("img") ? e.addClass("lazy").attr("data-original", o.linkPreview()) : e.attr("src", o.linkPreview()))
                    }), m()("[data-x-src-location]", this.body).each(function() {
                        var e = m()(this),
                            o = n.findAttachmentByContentLocation(e.attr("data-x-src-location"));
                        o || (o = n.findAttachmentByCid(e.attr("data-x-src-location"))), o && o.download && (t && e.is("img") ? e.addClass("lazy").attr("data-original", o.linkPreview()) : e.attr("src", o.linkPreview()))
                    }), m()("[data-x-style-cid]", this.body).each(function() {
                        var e = "",
                            t = "",
                            o = m()(this),
                            i = n.findAttachmentByCid(o.attr("data-x-style-cid"));
                        i && i.linkPreview && "" !== (t = o.attr("data-x-style-cid-name")) && (e = "" === (e = Object(g.trim)(o.attr("style"))) ? "" : ";" === e.substr(-1) ? e + " " : e + "; ", o.attr("style", e + t + ": url('" + i.linkPreview() + "')"))
                    }), t && p.a.delay(function() {
                        return e.lozad()
                    }, 300), Object(g.windowResize)(500)
                }
            }, t.prototype.storeDataInDom = function() {
                this.body && (this.body.data("rl-is-html", !!this.isHtml()), this.body.data("rl-has-images", !!this.hasImages()))
            }, t.prototype.fetchDataFromDom = function() {
                this.body && (this.isHtml(!!this.body.data("rl-is-html")), this.hasImages(!!this.body.data("rl-has-images")))
            }, t.prototype.replacePlaneTextBody = function(e) {
                this.body && this.body.html(e).addClass("b-text-part plain")
            }, t.prototype.flagHash = function() {
                return [this.deleted(), this.deletedMark(), this.unseen(), this.flagged(), this.answered(), this.forwarded(), this.isReadReceipt()].join(",")
            }, t
        }(n(36).a),
        U = n(9),
        H = n(26),
        B = n(31),
        G = n(28),
        K = n(62),
        V = n(20),
        z = n(17),
        q = function() {
            function e() {
                c()(this, e), this.staticMessage = new x, this.messageList = h.a.observableArray([]).extend({
                    rateLimit: 0
                }), this.messageListCount = h.a.observable(0), this.messageListSearch = h.a.observable(""), this.messageListThreadUid = h.a.observable(""), this.messageListPage = h.a.observable(1), this.messageListPageBeforeThread = h.a.observable(1), this.messageListError = h.a.observable(""), this.messageListEndFolder = h.a.observable(""), this.messageListEndSearch = h.a.observable(""), this.messageListEndThreadUid = h.a.observable(""), this.messageListEndPage = h.a.observable(1), this.messageListLoading = h.a.observable(!1), this.messageListIsNotCompleted = h.a.observable(!1), this.messageListCompleteLoadingThrottle = h.a.observable(!1).extend({
                    throttle: 200
                }), this.messageListCompleteLoadingThrottleForAnimation = h.a.observable(!1).extend({
                    specialThrottle: 700
                }), this.messageListDisableAutoSelect = h.a.observable(!1).extend({
                    falseTimeout: 500
                }), this.selectorMessageSelected = h.a.observable(null), this.selectorMessageFocused = h.a.observable(null), this.message = h.a.observable(null), this.message.viewTrigger = h.a.observable(!1), this.messageError = h.a.observable(""), this.messageCurrentLoading = h.a.observable(!1), this.messageLoadingThrottle = h.a.observable(!1).extend({
                    throttle: b.Magics.Time50ms
                }), this.messageFullScreenMode = h.a.observable(!1), this.messagesBodiesDom = h.a.observable(null), this.messageActiveDom = h.a.observable(null), this.computers(), this.subscribers(), this.onMessageResponse = p.a.bind(this.onMessageResponse, this), this.purgeMessageBodyCacheThrottle = p.a.throttle(this.purgeMessageBodyCache, b.Magics.Time30s)
            }
            return e.prototype.computers = function() {
                var e = this;
                this.messageLoading = h.a.computed(function() {
                    return e.messageCurrentLoading()
                }), this.messageListEndHash = h.a.computed(function() {
                    return e.messageListEndFolder() + "|" + e.messageListEndSearch() + "|" + e.messageListEndThreadUid() + "|" + e.messageListEndPage()
                }), this.messageListPageCount = h.a.computed(function() {
                    var t = u.a.Math.ceil(e.messageListCount() / G.a.messagesPerPage());
                    return 0 >= t ? 1 : t
                }), this.mainMessageListSearch = h.a.computed({
                    read: this.messageListSearch,
                    write: function(t) {
                        Object(U.setHash)(Object(O.o)(D.a.currentFolderFullNameHash(), 1, Object(g.trim)(t.toString()), e.messageListThreadUid()))
                    }
                }), this.messageListCompleteLoading = h.a.computed(function() {
                    var t = e.messageListLoading(),
                        n = e.messageListIsNotCompleted();
                    return t || n
                }), this.isMessageSelected = h.a.computed(function() {
                    return null !== e.message()
                }), this.messageListChecked = h.a.computed(function() {
                    return p.a.filter(e.messageList(), function(e) {
                        return e.checked()
                    })
                }).extend({
                    rateLimit: 0
                }), this.hasCheckedMessages = h.a.computed(function() {
                    return 0 < e.messageListChecked().length
                }).extend({
                    rateLimit: 0
                }), this.messageListCheckedOrSelected = h.a.computed(function() {
                    var t = e.messageListChecked(),
                        n = e.selectorMessageSelected(),
                        o = e.selectorMessageFocused();
                    return t.length ? p.a.union(t, n ? [n] : []) : n ? [n] : o ? [o] : []
                }), this.messageListCheckedOrSelectedUidsWithSubMails = h.a.computed(function() {
                    var t = [];
                    return p.a.each(e.messageListCheckedOrSelected(), function(e) {
                        e && (t.push(e.uid), 1 < e.threadsLen() && (t = p.a.union(t, e.threads())))
                    }), t
                })
            }, e.prototype.subscribers = function() {
                var e = this;
                this.messageListCompleteLoading.subscribe(function(t) {
                    t = !!t, e.messageListCompleteLoadingThrottle(t), e.messageListCompleteLoadingThrottleForAnimation(t)
                }), this.messageList.subscribe(p.a.debounce(function(e) {
                    p.a.each(e, function(e) {
                        e && e.newForAnimation() && e.newForAnimation(!1)
                    })
                }, b.Magics.Time500ms)), this.message.subscribe(function(t) {
                    t ? b.Layout.NoPreview === G.a.layout() && H.a.focusedState(b.Focused.MessageView) : (H.a.focusedState(b.Focused.MessageList), e.messageFullScreenMode(!1), e.hideMessageBodies())
                }), this.messageLoading.subscribe(function(t) {
                    e.messageLoadingThrottle(t)
                }), this.messagesBodiesDom.subscribe(function(t) {
                    !t || t instanceof m.a || e.messagesBodiesDom(m()(t))
                }), this.messageListEndFolder.subscribe(function(t) {
                    var n = e.message();
                    n && t && t !== n.folderFullNameRaw && e.message(null)
                })
            }, e.prototype.purgeMessageBodyCache = function() {
                var e = 0,
                    t = S.data.iMessageBodyCacheCount - v.k;
                if (0 < t) {
                    var n = this.messagesBodiesDom();
                    n && (n.find(".rl-cache-class").each(function() {
                        var n = m()(this);
                        t > n.data("rl-cache-count") && (n.addClass("rl-cache-purge"), e += 1)
                    }), 0 < e && p.a.delay(function() {
                        return n.find(".rl-cache-purge").remove()
                    }, b.Magics.Time350ms))
                }
            }, e.prototype.initUidNextAndNewMessages = function(e, t, n) {
                if (Object(y.h)() === e && Object(g.isNormal)(t) && "" !== t) {
                    if (Object(g.isArray)(n) && 0 < n.length) {
                        p.a.each(n, function(t) {
                            Object(y.a)(e, t.Uid)
                        }), K.a.playSoundNotification();
                        var i = n.length;
                        3 < i ? K.a.displayDesktopNotification(Object(O.r)(), B.a.email(), Object(w.i18n)("MESSAGE_LIST/NEW_MESSAGE_NOTIFICATION", {
                            COUNT: i
                        }), {
                            Folder: "",
                            Uid: ""
                        }) : p.a.each(n, function(e) {
                            K.a.displayDesktopNotification(Object(O.r)(), o(a(e.From), !1), e.Subject, {
                                Folder: e.Folder,
                                Uid: e.Uid
                            })
                        })
                    }
                    Object(y.s)(e, t)
                }
            }, e.prototype.hideMessageBodies = function() {
                var e = this.messagesBodiesDom();
                e && e.find(".b-text-part").hide()
            }, e.prototype.removeMessagesFromList = function(e, t) {
                var n = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                t = p.a.map(t, function(e) {
                    return Object(g.pInt)(e)
                });
                var a = 0,
                    r = this.messageList(),
                    s = this.message(),
                    c = D.a.trashFolder(),
                    l = D.a.spamFolder(),
                    u = Object(y.e)(e),
                    d = "" === o ? null : Object(y.e)(o || ""),
                    h = D.a.currentFolderFullNameRaw() === e ? p.a.filter(r, function(e) {
                        return e && -1 < Object(g.inArray)(Object(g.pInt)(e.uid), t)
                    }) : [];
                if (p.a.each(h, function(e) {
                        e && e.unseen() && (a += 1)
                    }), u && !i && (u.messageCountAll(0 <= u.messageCountAll() - t.length ? u.messageCountAll() - t.length : 0), 0 < a && u.messageCountUnread(0 <= u.messageCountUnread() - a ? u.messageCountUnread() - a : 0)), d && (c !== d.fullNameRaw && l !== d.fullNameRaw || (a = 0), d.messageCountAll(d.messageCountAll() + t.length), 0 < a && d.messageCountUnread(d.messageCountUnread() + a), d.actionBlink(!0)), 0 < h.length && (i ? p.a.each(h, function(e) {
                        e.checked(!1)
                    }) : (this.messageListIsNotCompleted(!0), p.a.each(h, function(e) {
                        s && s.hash === e.hash && (s = null, n.message(null)), e.deleted(!0)
                    }), p.a.delay(function() {
                        p.a.each(h, function(e) {
                            n.messageList.remove(e)
                        })
                    }, b.Magics.Time350ms))), "" !== e && Object(y.q)(e, ""), "" !== o && Object(y.q)(o, ""), "" !== this.messageListThreadUid() && (r = this.messageList()) && 0 < r.length && p.a.find(r, function(e) {
                        return !(!e || !e.deleted() || e.uid !== n.messageListThreadUid())
                    })) {
                    var f = p.a.find(r, function(e) {
                        return e && !e.deleted()
                    });
                    f && this.messageListThreadUid() !== Object(g.pString)(f.uid) ? (this.messageListThreadUid(Object(g.pString)(f.uid)), Object(U.setHash)(Object(O.o)(D.a.currentFolderFullNameHash(), this.messageListPage(), this.messageListSearch(), this.messageListThreadUid()), !0, !0)) : f || (1 < this.messageListPage() ? (this.messageListPage(this.messageListPage() - 1), Object(U.setHash)(Object(O.o)(D.a.currentFolderFullNameHash(), this.messageListPage(), this.messageListSearch(), this.messageListThreadUid()), !0, !0)) : (this.messageListThreadUid(""), Object(U.setHash)(Object(O.o)(D.a.currentFolderFullNameHash(), this.messageListPageBeforeThread(), this.messageListSearch()), !0, !0)))
                }
            }, e.prototype.initBlockquoteSwitcher = function(e) {
                if (e) {
                    var t = m()("blockquote:not(.rl-bq-switcher)", e).filter(function() {
                        return 0 === m()(this).parent().closest("blockquote", e).length
                    });
                    t && 0 < t.length && t.each(function() {
                        var e = m()(this),
                            t = e.height();
                        0 === t && (t = Object(g.getRealHeight)(e)), "" !== Object(g.trim)(e.text()) && (0 === t || 100 < t) && (e.addClass("rl-bq-switcher hidden-bq"), m()('<span class="rlBlockquoteSwitcher"><i class="icon-ellipsis" /></span>').insertBefore(e).on("click.rlBlockquoteSwitcher", function() {
                            e.toggleClass("hidden-bq"), Object(g.windowResize)()
                        }).after("<br />").before("<br />"))
                    })
                }
            }, e.prototype.initOpenPgpControls = function(e, t) {
                e && e.find && e.find(".b-plain-openpgp:not(.inited)").each(function() {
                    M.a.initMessageBodyControls(m()(this), t)
                })
            }, e.prototype.setMessage = function(e, t) {
                var n = !1,
                    o = null,
                    i = "",
                    a = "",
                    r = "",
                    s = !1,
                    c = this.messagesBodiesDom(),
                    l = this.selectorMessageSelected(),
                    u = this.message();
                if (e && u && e.Result && "Object/Message" === e.Result["@Object"] && u.folderFullNameRaw === e.Result.Folder) {
                    var d = u.threads();
                    if (u.uid !== e.Result.Uid && 1 < d.length && -1 < Object(g.inArray)(e.Result.Uid, d) && (u = x.newInstanceFromJson(e.Result)) && (u.threads(d), Object(y.n)(u), this.message(this.staticMessage.populateByMessageListItem(u)), u = this.message(), n = !0), u && u.uid === e.Result.Uid) {
                        if (this.messageError(""), u.initUpdateByMessageJson(e.Result), Object(y.b)(u.folderFullNameRaw, u.uid), t || u.initFlagsByJson(e.Result), c = c && c[0] ? c : null) {
                            i = "rl-mgs-" + u.hash.replace(/[^a-zA-Z0-9]/g, "");
                            var h = c.find("#" + i);
                            if (h && h[0]) u.body = h, u.body && (S.data.iMessageBodyCacheCount += 1, u.body.data("rl-cache-count", S.data.iMessageBodyCacheCount), u.fetchDataFromDom());
                            else {
                                var f = !1;
                                if (Object(g.isNormal)(e.Result.Html) && "" !== e.Result.Html) f = !0, r = e.Result.Html.toString();
                                else if (Object(g.isNormal)(e.Result.Plain) && "" !== e.Result.Plain)
                                    if (f = !1, r = Object(g.plainToHtml)(e.Result.Plain.toString(), !1), (u.isPgpSigned() || u.isPgpEncrypted()) && M.a.capaOpenPGP()) {
                                        a = Object(g.pString)(e.Result.Plain);
                                        var v = /---BEGIN PGP MESSAGE---/.test(a);
                                        v || (s = /-----BEGIN PGP SIGNED MESSAGE-----/.test(a) && /-----BEGIN PGP SIGNATURE-----/.test(a)), S.$div.empty(), r = s && u.isPgpSigned() ? S.$div.append(m()('<pre class="b-plain-openpgp signed"></pre>').text(a)).html() : v && u.isPgpEncrypted() ? S.$div.append(m()('<pre class="b-plain-openpgp encrypted"></pre>').text(a)).html() : "<pre>" + r + "</pre>", S.$div.empty(), u.isPgpSigned(s), u.isPgpEncrypted(v)
                                    } else r = "<pre>" + r + "</pre>";
                                else f = !1, r = "<pre>" + r + "</pre>";
                                S.data.iMessageBodyCacheCount += 1, (o = m()('<div id="' + i + '" ></div>').hide().addClass("rl-cache-class")).data("rl-cache-count", S.data.iMessageBodyCacheCount), o.html(Object(g.findEmailAndLinks)(r)).addClass("b-text-part " + (f ? "html" : "plain")), u.isHtml(!!f), u.hasImages(!!e.Result.HasExternals), u.body = o, u.body && c.append(u.body), u.storeDataInDom(), e.Result.HasInternals && u.showInternalImages(!0), u.hasImages() && G.a.showImages() && u.showExternalImages(!0), this.purgeMessageBodyCacheThrottle()
                            }
                            this.messageActiveDom(u.body), this.hideMessageBodies(), o && (this.initOpenPgpControls(o, u), this.initBlockquoteSwitcher(o)), u.body.show()
                        }
                        Object(y.n)(u), (u.unseen() || u.hasUnseenSubMessage()) && Object(V.a)().messageListAction(u.folderFullNameRaw, b.MessageSetAction.SetSeen, [u]), n && (u = this.message(), l && u && (u.folderFullNameRaw !== l.folderFullNameRaw || u.uid !== l.uid) ? (this.selectorMessageSelected(null), 1 === this.messageList().length && this.selectorMessageFocused(null)) : !l && u && (l = p.a.find(this.messageList(), function(e) {
                            return e && e.folderFullNameRaw === u.folderFullNameRaw && e.uid === u.uid
                        })) && (this.selectorMessageSelected(l), this.selectorMessageFocused(l))), Object(g.windowResize)()
                    }
                }
            }, e.prototype.selectMessage = function(e) {
                e ? (this.message(this.staticMessage.populateByMessageListItem(e)), this.populateMessageBody(this.message())) : this.message(null)
            }, e.prototype.selectMessageByFolderAndUid = function(e, t) {
                e && t ? (this.message(this.staticMessage.populateByMessageListItem(null)), this.message().folderFullNameRaw = e, this.message().uid = t, this.populateMessageBody(this.message())) : this.message(null)
            }, e.prototype.populateMessageBody = function(e) {
                e && z.a.message(this.onMessageResponse, e.folderFullNameRaw, e.uid) && this.messageCurrentLoading(!0)
            }, e.prototype.onMessageResponse = function(e, t, n) {
                this.hideMessageBodies(), this.messageCurrentLoading(!1), b.StorageResultType.Success === e && t && t.Result ? this.setMessage(t, n) : b.StorageResultType.Unload === e ? (this.message(null), this.messageError("")) : b.StorageResultType.Abort !== e && (this.message(null), this.messageError(t && t.ErrorCode ? Object(w.getNotification)(t.ErrorCode) : Object(w.getNotification)(b.Notification.UnknownError)))
            }, e.prototype.calculateMessageListHash = function(e) {
                return p.a.map(e, function(e) {
                    return e.hash + "_" + e.threadsLen() + "_" + e.flagHash()
                }).join("|")
            }, e.prototype.setMessageList = function(e, t) {
                if (e && e.Result && "Collection/MessageCollection" === e.Result["@Object"] && e.Result["@Collection"] && Object(g.isArray)(e.Result["@Collection"])) {
                    var n = 0,
                        o = !1,
                        i = [],
                        a = Object(T.momentNowUnix)(),
                        r = Object(g.pInt)(e.Result.MessageResultCount),
                        s = Object(g.pInt)(e.Result.Offset),
                        c = Object(y.e)(Object(g.isNormal)(e.Result.Folder) ? e.Result.Folder : "");
                    c && !t && (c.interval = a, Object(y.q)(e.Result.Folder, e.Result.FolderHash), Object(g.isNormal)(e.Result.MessageCount) && c.messageCountAll(e.Result.MessageCount), Object(g.isNormal)(e.Result.MessageUnseenCount) && (Object(g.pInt)(c.messageCountUnread()) !== Object(g.pInt)(e.Result.MessageUnseenCount) && (o = !0), c.messageCountUnread(e.Result.MessageUnseenCount)), this.initUidNextAndNewMessages(c.fullNameRaw, e.Result.UidNext, e.Result.NewMessages)), o && c && Object(y.c)(c.fullNameRaw), p.a.each(e.Result["@Collection"], function(e) {
                        if (e && "Object/Message" === e["@Object"]) {
                            var o = x.newInstanceFromJson(e);
                            o && (Object(y.l)(o.folderFullNameRaw, o.uid) && 5 >= n && (n += 1, o.newForAnimation(!0)), o.deleted(!1), t ? Object(y.n)(o) : Object(y.u)(o), i.push(o))
                        }
                    }), this.messageListCount(r), this.messageListSearch(Object(g.isNormal)(e.Result.Search) ? e.Result.Search : ""), this.messageListPage(u.a.Math.ceil(s / G.a.messagesPerPage() + 1)), this.messageListThreadUid(Object(g.isNormal)(e.Result.ThreadUid) ? Object(g.pString)(e.Result.ThreadUid) : ""), this.messageListEndFolder(Object(g.isNormal)(e.Result.Folder) ? e.Result.Folder : ""), this.messageListEndSearch(this.messageListSearch()), this.messageListEndThreadUid(this.messageListThreadUid()), this.messageListEndPage(this.messageListPage()), this.messageListDisableAutoSelect(!0), this.messageList(i), this.messageListIsNotCompleted(!1), Object(y.d)(), c && (t || o || G.a.useThreads()) && Object(V.a)().folderInformation(c.fullNameRaw, i)
                } else this.messageListCount(0), this.messageList([]), this.messageListError(Object(w.getNotification)(e && e.ErrorCode ? e.ErrorCode : b.Notification.CantGetMessageList))
            }, e
        }();
    t.a = new q
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        e = Object(R.trim)(e), t(H && "" !== e ? I.h(e) : "", e)
    }

    function i(e, t) {
        return e + "#" + t
    }

    function a(e, t) {
        U[i(e, t)] = !0
    }

    function r(e, t) {
        return !0 === U[i(e, t)]
    }

    function s(e, t) {
        k[i(e, t)] = !0
    }

    function c(e, t) {
        return !!k[i(e, t)] && (k[i(e, t)] = null, !0)
    }

    function l() {
        k = {}
    }

    function u() {
        return "" === x ? "INBOX" : x
    }

    function d(e) {
        return "" !== e && _[e] ? _[e] : ""
    }

    function p(e, t) {
        _[e] = t, "INBOX" !== t && "" !== x || (x = t)
    }

    function h(e) {
        return "" !== e && P[e] ? P[e] : ""
    }

    function f(e, t) {
        "" !== e && (P[e] = t)
    }

    function m(e) {
        return "" !== e && D[e] ? D[e] : ""
    }

    function b(e, t) {
        D[e] = t
    }

    function g(e) {
        return "" !== e && L[e] ? L[e] : null
    }

    function y(e, t) {
        L[e] = t
    }

    function v(e) {
        y(e, null)
    }

    function S(e, t) {
        return M[e] && M[e][t] ? M[e][t] : null
    }

    function O(e, t, n) {
        M[e] || (M[e] = {}), M[e][t] = n
    }

    function w(e) {
        M[e] = {}
    }

    function T(e) {
        if (e) {
            var t = e.uid,
                n = S(e.folderFullNameRaw, t);
            if (n && 0 < n.length && (e.flagged(!!n[1]), e.isSimpleMessage || (e.unseen(!!n[0]), e.answered(!!n[2]), e.forwarded(!!n[3]), e.isReadReceipt(!!n[4]), e.deletedMark(!!n[5]))), 0 < e.threads().length) {
                var o = j.a.find(e.threads(), function(n) {
                        if (t !== n) {
                            var o = S(e.folderFullNameRaw, n);
                            return o && 0 < o.length && !!o[0]
                        }
                        return !1
                    }),
                    i = j.a.find(e.threads(), function(n) {
                        if (t !== n) {
                            var o = S(e.folderFullNameRaw, n);
                            return o && 0 < o.length && !!o[1]
                        }
                        return !1
                    });
                e.hasUnseenSubMessage(o && 0 < Object(R.pInt)(o)), e.hasFlaggedSubMessage(i && 0 < Object(R.pInt)(i))
            }
        }
    }

    function C(e) {
        e && O(e.folderFullNameRaw, e.uid, [e.unseen(), e.flagged(), e.answered(), e.forwarded(), e.isReadReceipt(), e.deletedMark()])
    }

    function A(e, t, n) {
        Object(R.isArray)(n) && 0 < n.length && O(e, t, n)
    }

    function E(e, t, n) {
        var o = 0,
            i = S(e, t);
        if (Object(R.isArray)(i) && 0 < i.length) {
            switch (i[0] && (o = 1), n) {
                case N.MessageSetAction.SetSeen:
                    i[0] = !1;
                    break;
                case N.MessageSetAction.UnsetSeen:
                    i[0] = !0;
                    break;
                case N.MessageSetAction.SetFlag:
                    i[1] = !0;
                    break;
                case N.MessageSetAction.UnsetFlag:
                    i[1] = !1
            }
            O(e, t, i)
        }
        return o
    }
    n.d(t, "k", function() {
        return o
    }), n.d(t, "b", function() {
        return a
    }), n.d(t, "m", function() {
        return r
    }), n.d(t, "a", function() {
        return s
    }), n.d(t, "l", function() {
        return c
    }), n.d(t, "d", function() {
        return l
    }), n.d(t, "h", function() {
        return u
    }), n.d(t, "f", function() {
        return d
    }), n.d(t, "p", function() {
        return p
    }), n.d(t, "g", function() {
        return h
    }), n.d(t, "q", function() {
        return f
    }), n.d(t, "i", function() {
        return m
    }), n.d(t, "s", function() {
        return b
    }), n.d(t, "e", function() {
        return g
    }), n.d(t, "r", function() {
        return y
    }), n.d(t, "o", function() {
        return v
    }), n.d(t, "j", function() {
        return S
    }), n.d(t, "t", function() {
        return O
    }), n.d(t, "c", function() {
        return w
    }), n.d(t, "n", function() {
        return T
    }), n.d(t, "u", function() {
        return C
    }), n.d(t, "v", function() {
        return A
    }), n.d(t, "w", function() {
        return E
    });
    var F = n(4),
        j = n.n(F),
        N = n(0),
        R = n(2),
        I = n(16),
        L = {},
        _ = {},
        P = {},
        D = {},
        M = {},
        k = {},
        x = "",
        U = {},
        H = n(5).capa(N.Capa.Gravatar)
}, function(e, t, n) {
    "use strict";

    function o() {
        ne = z.settingsGet("AuthAccountHash") || "0"
    }

    function i() {
        return $
    }

    function a() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return W + Object(V.pString)(e)
    }

    function r() {
        return ee ? q : Y + te
    }

    function s() {
        return q
    }

    function c(e, t, n) {
        return n = Object(V.isUnd)(n) ? ne : n, Y + "/Raw/" + $ + "/" + n + "/" + e + "/" + $ + "/" + t
    }

    function l(e, t) {
        return c("Download", e, t)
    }

    function u(e, t) {
        return c("View", e, t)
    }

    function d(e, t) {
        return c("ViewThumbnail", e, t)
    }

    function p(e, t) {
        return c("ViewAsPlain", e, t)
    }

    function h(e, t) {
        return c("FramedView", e, t)
    }

    function f(e) {
        return Y + "/" + e + "/" + $ + "/" + ne + "/"
    }

    function m() {
        return f("Upload")
    }

    function b() {
        return f("UploadContacts")
    }

    function g() {
        return f("UploadBackground")
    }

    function y() {
        return f("Append")
    }

    function v(e) {
        return f("Change") + Object(V.encodeURIComponent)(e) + "/"
    }

    function S(e) {
        return f("Ajax") + e
    }

    function O(e) {
        return Y + "/Raw/" + $ + "/" + ne + "/ViewAsPlain/" + $ + "/" + e
    }

    function w(e) {
        return Y + "/Raw/" + $ + "/" + ne + "/Download/" + $ + "/" + e
    }

    function T(e) {
        return Y + "/Raw/0/Avatar/" + Object(V.encodeURIComponent)(e) + "/"
    }

    function C(e) {
        return Y + "/Raw/" + $ + "/" + ne + "/UserBackground/" + $ + "/" + e
    }

    function A() {
        return Y + "/Info"
    }

    function E(e, t) {
        return Y + "/Lang/0/" + (t ? "Admin" : "App") + "/" + K.a.encodeURI(e) + "/" + J + "/"
    }

    function F() {
        return Y + "/Raw/" + $ + "/" + ne + "/ContactsVcf/"
    }

    function j() {
        return Y + "/Raw/" + $ + "/" + ne + "/ContactsCsv/"
    }

    function N() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return Y + "SocialGoogle" + ("" !== ne ? "/" + $ + "/" + ne + "/" : "") + (e ? "&xauth=1" : "")
    }

    function R() {
        return Y + "SocialTwitter" + ("" !== ne ? "/" + $ + "/" + ne + "/" : "")
    }

    function I() {
        return Y + "SocialFacebook" + ("" !== ne ? "/" + $ + "/" + ne + "/" : "")
    }

    function L(e) {
        return Q + e
    }

    function _() {
        return L("css/images/empty-contact.png")
    }

    function P(e) {
        return L("sounds/" + e)
    }

    function D() {
        return L("css/images/icom-message-notification.png")
    }

    function M() {
        return L("js/min/openpgp.min.js")
    }

    function k() {
        return L("js/min/openpgp.worker.min.js")
    }

    function x(e) {
        var t = Z;
        return "@custom" === e.substr(-7) && (e = Object(V.trim)(e.substring(0, e.length - 7)), t = X), t + "themes/" + K.a.encodeURI(e) + "/images/preview.png"
    }

    function U() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "INBOX";
        return W + "mailbox/" + e
    }

    function H() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return W + "settings" + (e ? "/" + e : "")
    }

    function B(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        t = Object(V.isNormal)(t) ? Object(V.pInt)(t) : 1, n = Object(V.pString)(n);
        var i = W + "mailbox/";
        if ("" !== e) {
            var a = Object(V.pInt)(o);
            i += K.a.encodeURI(e) + (0 < a ? "~" + a : "")
        }
        return 1 < t && (i = i.replace(/[\/]+$/, ""), i += "/p" + t), "" !== n && (i = i.replace(/[\/]+$/, ""), i += "/" + K.a.encodeURI(n)), i
    }
    n.d(t, "v", function() {
        return o
    }), n.d(t, "E", function() {
        return i
    }), n.d(t, "w", function() {
        return a
    }), n.d(t, "x", function() {
        return r
    }), n.d(t, "y", function() {
        return s
    }), n.d(t, "c", function() {
        return l
    }), n.d(t, "e", function() {
        return u
    }), n.d(t, "g", function() {
        return d
    }), n.d(t, "f", function() {
        return p
    }), n.d(t, "d", function() {
        return h
    }), n.d(t, "G", function() {
        return m
    }), n.d(t, "I", function() {
        return b
    }), n.d(t, "H", function() {
        return g
    }), n.d(t, "b", function() {
        return y
    }), n.d(t, "i", function() {
        return v
    }), n.d(t, "a", function() {
        return S
    }), n.d(t, "q", function() {
        return O
    }), n.d(t, "p", function() {
        return w
    }), n.d(t, "h", function() {
        return T
    }), n.d(t, "J", function() {
        return C
    }), n.d(t, "u", function() {
        return A
    }), n.d(t, "n", function() {
        return E
    }), n.d(t, "l", function() {
        return F
    }), n.d(t, "k", function() {
        return j
    }), n.d(t, "B", function() {
        return N
    }), n.d(t, "C", function() {
        return R
    }), n.d(t, "A", function() {
        return I
    }), n.d(t, "j", function() {
        return _
    }), n.d(t, "D", function() {
        return P
    }), n.d(t, "r", function() {
        return D
    }), n.d(t, "s", function() {
        return M
    }), n.d(t, "t", function() {
        return k
    }), n.d(t, "F", function() {
        return x
    }), n.d(t, "m", function() {
        return U
    }), n.d(t, "z", function() {
        return H
    }), n.d(t, "o", function() {
        return B
    });
    var G = n(3),
        K = n.n(G),
        V = n(2),
        z = n(5),
        q = "./",
        W = "#/",
        Y = "./?",
        $ = "&q[]=",
        J = z.appSettingsGet("version"),
        X = z.appSettingsGet("webPath") || "",
        Z = z.appSettingsGet("webVersionPath") || "rainloop/v/" + J + "/",
        Q = Z + "static/",
        ee = !!z.appSettingsGet("adminHostUse"),
        te = z.appSettingsGet("adminPath") || "admin",
        ne = z.settingsGet("AuthAccountHash") || "0"
}, function(e, t, n) {
    "use strict";
    var o = n(8),
        i = n.n(o),
        a = n(12),
        r = n.n(a),
        s = n(11),
        c = n.n(s),
        l = n(4),
        u = n.n(l),
        d = n(2),
        p = n(23),
        h = n(15),
        f = n(16),
        m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        b = {
            urlsafe_encode: function(e) {
                return b.encode(e).replace(/[+]/g, "-").replace(/[\/]/g, "_").replace(/[=]/g, "")
            },
            encode: function(e) {
                var t = "",
                    n = void 0,
                    o = void 0,
                    i = void 0,
                    a = void 0,
                    r = void 0,
                    s = void 0,
                    c = void 0,
                    l = 0;
                for (e = b._utf8_encode(e); l < e.length;) a = (n = e.charCodeAt(l++)) >> 2, r = (3 & n) << 4 | (o = e.charCodeAt(l++)) >> 4, s = (15 & o) << 2 | (i = e.charCodeAt(l++)) >> 6, c = 63 & i, isNaN(o) ? s = c = 64 : isNaN(i) && (c = 64), t = t + m.charAt(a) + m.charAt(r) + m.charAt(s) + m.charAt(c);
                return t
            },
            decode: function(e) {
                var t = "",
                    n = void 0,
                    o = void 0,
                    i = void 0,
                    a = void 0,
                    r = void 0,
                    s = void 0,
                    c = 0;
                for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < e.length;) n = m.indexOf(e.charAt(c++)) << 2 | (a = m.indexOf(e.charAt(c++))) >> 4, o = (15 & a) << 4 | (r = m.indexOf(e.charAt(c++))) >> 2, i = (3 & r) << 6 | (s = m.indexOf(e.charAt(c++))), t += String.fromCharCode(n), 64 !== r && (t += String.fromCharCode(o)), 64 !== s && (t += String.fromCharCode(i));
                return b._utf8_decode(t)
            },
            _utf8_encode: function(e) {
                for (var t = "", n = 0, o = (e = e.replace(/\r\n/g, "\n")).length, i = 0; n < o; n++)(i = e.charCodeAt(n)) < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192), t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128), t += String.fromCharCode(63 & i | 128));
                return t
            },
            _utf8_decode: function(e) {
                for (var t = "", n = 0, o = 0, i = 0, a = 0; n < e.length;)(o = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(o), n++) : o > 191 && o < 224 ? (i = e.charCodeAt(n + 1), t += String.fromCharCode((31 & o) << 6 | 63 & i), n += 2) : (i = e.charCodeAt(n + 1), a = e.charCodeAt(n + 2), t += String.fromCharCode((15 & o) << 12 | (63 & i) << 6 | 63 & a), n += 3);
                return t
            }
        },
        g = (b.decode, b.encode, b.urlsafe_encode),
        y = n(5),
        v = n(26),
        S = n(28),
        O = n(20),
        w = function(e) {
            function t() {
                i()(this, t);
                var n = r()(this, e.call(this));
                return n.oRequests = {}, n
            }
            return c()(t, e), t.prototype.folders = function(e) {
                this.defaultRequest(e, "Folders", {
                    SentFolder: y.settingsGet("SentFolder"),
                    DraftFolder: y.settingsGet("DraftFolder"),
                    SpamFolder: y.settingsGet("SpamFolder"),
                    TrashFolder: y.settingsGet("TrashFolder"),
                    ArchiveFolder: y.settingsGet("ArchiveFolder")
                }, null, "", ["Folders"])
            }, t.prototype.login = function(e, t, n, o, i, a, r, s) {
                this.defaultRequest(e, "Login", {
                    Email: t,
                    Login: n,
                    Password: o,
                    Language: a || "",
                    AdditionalCode: r || "",
                    AdditionalCodeSignMe: s ? "1" : "0",
                    SignMe: i ? "1" : "0"
                })
            }, t.prototype.getTwoFactor = function(e) {
                this.defaultRequest(e, "GetTwoFactorInfo")
            }, t.prototype.createTwoFactor = function(e) {
                this.defaultRequest(e, "CreateTwoFactorSecret")
            }, t.prototype.clearTwoFactor = function(e) {
                this.defaultRequest(e, "ClearTwoFactorInfo")
            }, t.prototype.showTwoFactorSecret = function(e) {
                this.defaultRequest(e, "ShowTwoFactorSecret")
            }, t.prototype.testTwoFactor = function(e, t) {
                this.defaultRequest(e, "TestTwoFactorInfo", {
                    Code: t
                })
            }, t.prototype.enableTwoFactor = function(e, t) {
                this.defaultRequest(e, "EnableTwoFactor", {
                    Enable: t ? "1" : "0"
                })
            }, t.prototype.clearTwoFactorInfo = function(e) {
                this.defaultRequest(e, "ClearTwoFactorInfo")
            }, t.prototype.contactsSync = function(e) {
                this.defaultRequest(e, "ContactsSync", null, p.d)
            }, t.prototype.saveContactsSyncData = function(e, t, n, o, i) {
                this.defaultRequest(e, "SaveContactsSyncData", {
                    Enable: t ? "1" : "0",
                    Url: n,
                    User: o,
                    Password: i
                })
            }, t.prototype.accountSetup = function(e, t, n) {
                var o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                this.defaultRequest(e, "AccountSetup", {
                    Email: t,
                    Password: n,
                    New: o ? "1" : "0"
                })
            }, t.prototype.accountDelete = function(e, t) {
                this.defaultRequest(e, "AccountDelete", {
                    EmailToDelete: t
                })
            }, t.prototype.accountsAndIdentitiesSortOrder = function(e, t, n) {
                this.defaultRequest(e, "AccountsAndIdentitiesSortOrder", {
                    Accounts: t,
                    Identities: n
                })
            }, t.prototype.identityUpdate = function(e, t, n, o, i, a, r, s) {
                this.defaultRequest(e, "IdentityUpdate", {
                    Id: t,
                    Email: n,
                    Name: o,
                    ReplyTo: i,
                    Bcc: a,
                    Signature: r,
                    SignatureInsertBefore: s ? "1" : "0"
                })
            }, t.prototype.identityDelete = function(e, t) {
                this.defaultRequest(e, "IdentityDelete", {
                    IdToDelete: t
                })
            }, t.prototype.accountsAndIdentities = function(e) {
                this.defaultRequest(e, "AccountsAndIdentities")
            }, t.prototype.accountsCounts = function(e) {
                this.defaultRequest(e, "AccountsCounts")
            }, t.prototype.filtersSave = function(e, t, n, o) {
                this.defaultRequest(e, "FiltersSave", {
                    Raw: n,
                    RawIsActive: Object(d.boolToAjax)(o),
                    Filters: u.a.map(t, function(e) {
                        return e.toJson()
                    })
                })
            }, t.prototype.filtersGet = function(e) {
                this.defaultRequest(e, "Filters", {})
            }, t.prototype.templates = function(e) {
                this.defaultRequest(e, "Templates", {})
            }, t.prototype.templateGetById = function(e, t) {
                this.defaultRequest(e, "TemplateGetByID", {
                    ID: t
                })
            }, t.prototype.templateDelete = function(e, t) {
                this.defaultRequest(e, "TemplateDelete", {
                    IdToDelete: t
                })
            }, t.prototype.templateSetup = function(e, t, n, o) {
                this.defaultRequest(e, "TemplateSetup", {
                    ID: t,
                    Name: n,
                    Body: o
                })
            }, t.prototype.messageList = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
                    r = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                t = Object(d.pString)(t);
                var s = Object(h.g)(t),
                    c = v.a.threadsAllowed() && S.a.useThreads(),
                    l = Object(h.h)() === t ? Object(h.i)(t) : "";
                return "" === s || "" !== i && -1 !== i.indexOf("is:") ? this.defaultRequest(e, "MessageList", {
                    Folder: t,
                    Offset: n,
                    Limit: o,
                    Search: i,
                    UidNext: l,
                    UseThreads: c ? "1" : "0",
                    ThreadUid: c ? a : ""
                }, "" === i ? p.g : p.m, "", r ? [] : ["MessageList"]) : this.defaultRequest(e, "MessageList", {}, "" === i ? p.g : p.m, "MessageList/" + Object(f.E)() + "/" + g([t, n, o, i, v.a.projectHash(), s, l, c ? "1" : "0", c ? a : ""].join(String.fromCharCode(0))), r ? [] : ["MessageList"])
            }, t.prototype.messageUploadAttachments = function(e, t) {
                this.defaultRequest(e, "MessageUploadAttachments", {
                    Attachments: t
                }, 999e3)
            }, t.prototype.message = function(e, t, n) {
                return t = Object(d.pString)(t), n = Object(d.pInt)(n), !!(Object(h.e)(t) && 0 < n) && (this.defaultRequest(e, "Message", {}, null, "Message/" + Object(f.E)() + "/" + g([t, n, v.a.projectHash(), v.a.threadsAllowed() && S.a.useThreads() ? "1" : "0"].join(String.fromCharCode(0))), ["Message"]), !0)
            }, t.prototype.composeUploadExternals = function(e, t) {
                this.defaultRequest(e, "ComposeUploadExternals", {
                    Externals: t
                }, 999e3)
            }, t.prototype.composeUploadDrive = function(e, t, n) {
                this.defaultRequest(e, "ComposeUploadDrive", {
                    AccessToken: n,
                    Url: t
                }, 999e3)
            }, t.prototype.folderInformation = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    o = !0,
                    i = [];
                Object(d.isArray)(n) && 0 < n.length && (o = !1, u.a.each(n, function(e) {
                    Object(h.j)(e.folderFullNameRaw, e.uid) || i.push(e.uid), 0 < e.threads().length && u.a.each(e.threads(), function(t) {
                        Object(h.j)(e.folderFullNameRaw, t) || i.push(t)
                    })
                }), 0 < i.length && (o = !0)), o ? this.defaultRequest(e, "FolderInformation", {
                    Folder: t,
                    FlagsUids: Object(d.isArray)(i) ? i.join(",") : "",
                    UidNext: Object(h.h)() === t ? Object(h.i)(t) : ""
                }) : S.a.useThreads() && Object(O.a)().reloadFlagsCurrentMessageListAndMessageFromCache()
            }, t.prototype.folderInformationMultiply = function(e, t) {
                this.defaultRequest(e, "FolderInformationMultiply", {
                    Folders: t
                })
            }, t.prototype.logout = function(e) {
                this.defaultRequest(e, "Logout")
            }, t.prototype.messageSetFlagged = function(e, t, n, o) {
                this.defaultRequest(e, "MessageSetFlagged", {
                    Folder: t,
                    Uids: n.join(","),
                    SetAction: o ? "1" : "0"
                })
            }, t.prototype.messageSetSeen = function(e, t, n, o) {
                this.defaultRequest(e, "MessageSetSeen", {
                    Folder: t,
                    Uids: n.join(","),
                    SetAction: o ? "1" : "0"
                })
            }, t.prototype.messageSetSeenToAll = function(e, t, n) {
                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                this.defaultRequest(e, "MessageSetSeenToAll", {
                    Folder: t,
                    SetAction: n ? "1" : "0",
                    ThreadUids: o ? o.join(",") : ""
                })
            }, t.prototype.saveMessage = function(e, t, n, o, i, a, r, s, c, l, u, d, h, f, m, b, g) {
                this.defaultRequest(e, "SaveMessage", {
                    IdentityID: t,
                    MessageFolder: n,
                    MessageUid: o,
                    DraftFolder: i,
                    To: a,
                    Cc: r,
                    Bcc: s,
                    ReplyTo: c,
                    Subject: l,
                    TextIsHtml: u ? "1" : "0",
                    Text: d,
                    DraftInfo: f,
                    InReplyTo: m,
                    References: b,
                    MarkAsImportant: g ? "1" : "0",
                    Attachments: h
                }, p.l)
            }, t.prototype.sendReadReceiptMessage = function(e, t, n, o, i, a) {
                this.defaultRequest(e, "SendReadReceiptMessage", {
                    MessageFolder: t,
                    MessageUid: n,
                    ReadReceipt: o,
                    Subject: i,
                    Text: a
                })
            }, t.prototype.sendMessage = function(e, t, n, o, i, a, r, s, c, l, u, d, h, f, m, b, g, y, v) {
                this.defaultRequest(e, "SendMessage", {
                    IdentityID: t,
                    MessageFolder: n,
                    MessageUid: o,
                    SentFolder: i,
                    To: a,
                    Cc: r,
                    Bcc: s,
                    ReplyTo: c,
                    Subject: l,
                    TextIsHtml: u ? "1" : "0",
                    Text: d,
                    DraftInfo: f,
                    InReplyTo: m,
                    References: b,
                    Dsn: g ? "1" : "0",
                    ReadReceiptRequest: y ? "1" : "0",
                    MarkAsImportant: v ? "1" : "0",
                    Attachments: h
                }, p.n)
            }, t.prototype.saveSystemFolders = function(e, t) {
                this.defaultRequest(e, "SystemFoldersUpdate", t)
            }, t.prototype.saveSettings = function(e, t) {
                this.defaultRequest(e, "SettingsUpdate", t)
            }, t.prototype.saveSettingsHelper = function(e, t, n) {
                var o = this;
                return function(i) {
                    var a;
                    o.saveSettings(n || null, ((a = {})[e] = t ? t(i) : i, a))
                }
            }, t.prototype.changePassword = function(e, t, n) {
                this.defaultRequest(e, "ChangePassword", {
                    PrevPassword: t,
                    NewPassword: n
                })
            }, t.prototype.folderClear = function(e, t) {
                this.defaultRequest(e, "FolderClear", {
                    Folder: t
                })
            }, t.prototype.folderSetSubscribe = function(e, t, n) {
                this.defaultRequest(e, "FolderSubscribe", {
                    Folder: t,
                    Subscribe: n ? "1" : "0"
                })
            }, t.prototype.folderSetCheckable = function(e, t, n) {
                this.defaultRequest(e, "FolderCheckable", {
                    Folder: t,
                    Checkable: n ? "1" : "0"
                })
            }, t.prototype.messagesMove = function(e, t, n, o, i, a) {
                this.defaultRequest(e, "MessageMove", {
                    FromFolder: t,
                    ToFolder: n,
                    Uids: o.join(","),
                    MarkAsRead: a ? "1" : "0",
                    Learning: i || ""
                }, null, "", ["MessageList"])
            }, t.prototype.messagesCopy = function(e, t, n, o) {
                this.defaultRequest(e, "MessageCopy", {
                    FromFolder: t,
                    ToFolder: n,
                    Uids: o.join(",")
                })
            }, t.prototype.messagesDelete = function(e, t, n) {
                this.defaultRequest(e, "MessageDelete", {
                    Folder: t,
                    Uids: n.join(",")
                }, null, "", ["MessageList"])
            }, t.prototype.appDelayStart = function(e) {
                this.defaultRequest(e, "AppDelayStart")
            }, t.prototype.quota = function(e) {
                this.defaultRequest(e, "Quota")
            }, t.prototype.contacts = function(e, t, n, o) {
                this.defaultRequest(e, "Contacts", {
                    Offset: t,
                    Limit: n,
                    Search: o
                }, null, "", ["Contacts"])
            }, t.prototype.contactSave = function(e, t, n, o) {
                this.defaultRequest(e, "ContactSave", {
                    RequestUid: t,
                    Uid: Object(d.trim)(n),
                    Properties: o
                })
            }, t.prototype.contactsDelete = function(e, t) {
                this.defaultRequest(e, "ContactsDelete", {
                    Uids: t.join(",")
                })
            }, t.prototype.suggestions = function(e, t, n) {
                this.defaultRequest(e, "Suggestions", {
                    Query: t,
                    Page: n
                }, null, "", ["Suggestions"])
            }, t.prototype.clearUserBackground = function(e) {
                this.defaultRequest(e, "ClearUserBackground")
            }, t.prototype.facebookUser = function(e) {
                this.defaultRequest(e, "SocialFacebookUserInformation")
            }, t.prototype.facebookDisconnect = function(e) {
                this.defaultRequest(e, "SocialFacebookDisconnect")
            }, t.prototype.twitterUser = function(e) {
                this.defaultRequest(e, "SocialTwitterUserInformation")
            }, t.prototype.twitterDisconnect = function(e) {
                this.defaultRequest(e, "SocialTwitterDisconnect")
            }, t.prototype.googleUser = function(e) {
                this.defaultRequest(e, "SocialGoogleUserInformation")
            }, t.prototype.googleDisconnect = function(e) {
                this.defaultRequest(e, "SocialGoogleDisconnect")
            }, t.prototype.socialUsers = function(e) {
                this.defaultRequest(e, "SocialUsers")
            }, t
        }(n(115).a);
    t.a = new w
}, function(e, t, n) {
    e.exports = {
        default: n(111),
        __esModule: !0
    }
}, function(e, t) {
    e.exports = window.key
}, function(e, t, n) {
    "use strict";

    function o() {
        return n(173).default
    }
    n.d(t, "a", function() {
        return o
    })
}, , function(e, t, n) {
    "use strict";

    function o(e, t, n) {
        Object(s.isObject)(e) ? (n = t || null, t = null, r.a.each(e, function(e, t) {
            o(t, e, n)
        })) : (Object(s.isUnd)(l[e]) && (l[e] = []), l[e].push([t, n]))
    }

    function i(e, t) {
        c.f("rl-pub", [e, t]), Object(s.isUnd)(l[e]) || r.a.each(l[e], function(e) {
            e[0] && e[0].apply(e[1] || null, t || [])
        })
    }
    n.d(t, "b", function() {
        return o
    }), n.d(t, "a", function() {
        return i
    });
    var a = n(4),
        r = n.n(a),
        s = n(2),
        c = n(29),
        l = {}
}, function(e, t, n) {
    "use strict";
    n.d(t, "i", function() {
        return o
    }), n.d(t, "j", function() {
        return i
    }), n.d(t, "c", function() {
        return a
    }), n.d(t, "g", function() {
        return r
    }), n.d(t, "m", function() {
        return s
    }), n.d(t, "n", function() {
        return c
    }), n.d(t, "l", function() {
        return l
    }), n.d(t, "d", function() {
        return u
    }), n.d(t, "r", function() {
        return d
    }), n.d(t, "b", function() {
        return p
    }), n.d(t, "h", function() {
        return h
    }), n.d(t, "p", function() {
        return f
    }), n.d(t, "o", function() {
        return m
    }), n.d(t, "k", function() {
        return b
    }), n.d(t, "a", function() {
        return g
    }), n.d(t, "q", function() {
        return y
    }), n.d(t, "f", function() {
        return v
    }), n.d(t, "e", function() {
        return S
    });
    var o = 20,
        i = [10, 20, 30, 50, 100],
        a = 50,
        r = 3e4,
        s = 3e5,
        c = 3e5,
        l = 2e5,
        u = 2e5,
        d = "__UNUSE__",
        p = "rlcsc",
        h = 143,
        f = 25,
        m = 4190,
        b = 15,
        g = 7,
        y = 10,
        v = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAHHklEQVRoQ7VZW08bVxCeXRuwIbTGXIwNtBBaqjwgVUiR8lDlbza9qe1DpVZ9aNQ/0KpPeaJK07SpcuEeCEmUAObm21bfrL9lONjexSYrWfbunj37zXdmvpkz9oIgCKTD0Wg0xPd94TDP83Q0zvWa50vzklSrdanVanqf4/D84GBGr+F+Op3S8fqoJxLOdnZgTvsO/nYhenHA+UC7CWF1uXwkb9++ldPTUwVerVbVqFQqpR8YPjQ0JCMjI5LNDijoRgP3PQVu5+5Eor2XGLg7IV4GkIdHJ/LmzRs5ODiIwNbrdR0O0GCcq4Xz4eFhmZyclP7+tDQaIik/BG5XKQn4SwG3zJTLZXn9+rUclI8UHD5YVoDDN8bSzXhONwL48fFxGR4eilzFZT1uFRIB5yT8BqCdnR3Z3d0VP9Un6XRawYJpggVrZBv38ME4XKtUKnLt2jUplUoy1PR/l3U7T6sVSAQcgMAkj8PDQ9ne3pajoyMRL7zeKsYZWHgWYDGmv78/mmdwcFA+mJlSgziHDWrERrsjEXDXegTi1tZW+DLxI2bxIrqFNYTXyDyCFweMAHCwb8e4RnTNuOsqe3t7sra21pTD0Kct666E8XlcZyzw9/RUUXK5nK5oUinUQI6TQ3cynO/v78vq6qrKXCNwlTiJJpyNGc3nZHp6uqV2dwrQWOCtZBDAV1ZWwsQk7f0wiQn5kffbAu/0/KWBYzIC1+XukfGx0RGZmppKlC2tIV0Bh4aDcZW7HhkfH8urLLZL7T2pihvlkMNnz56FiadHxicL41IsFpN41bkxsYxbRdFo9jwB8KdPn14J8KnSpBQKhQs63nPmbCVRcBUAR2Lq1VVmpksyMTFxAXjcEsQybiegESionjx5osCZOeNe1O4+EhCAX7bQSgQcxRHTMgAgcz5+/Dis/hL4uHU3/B4YGNASGHIKxuEql0k+l05AeIAF1vPnz5VxFFmdDlaJrMtZITJeSsXCOTlMunKxjLtMYOKNjQ158eJFuAuKkUOb5sEwgff19SkJUBVkThZUbnXZrtCKBQ6gbnWIkjZpyne3ejAWoGnA7Icz6irvBLgbOMicCM6TkxPx/LAkbXfgWcsazuE2kFRsKD5Z+CiqDumKncpZvieWcS6dDVD8xiYCNflpJdwcdwJOf9airLmVQ7DPzMxIYWLsXGXoVqLt5k0M3K3JUVPDZdbWNzsCp48TPFdvdnZWUz32nDha7bJ63kgAJPzSdRks9/Kf9xMJAQ1gq2NpaUmy2Yz4zar4nQC3xb99AQwCcGzLAAwuhG8YiWvcOKts+r4GOe5nMhm5efOm9lUA3E3vSZJRrKvE0fnPv//Jy5cvo5cTHIPQbSjhOoqq69evS19f6lxDKK4+sVhigZPtKJqbrQeqxd5+WR4+fKgqgT0k2XX3nhiPgETWXFhYkFzuPZ2yVq1GTSOXpE47/VjgNnD4m4GG7/LhsTx69EiwD4Vr2MwIIxgbAH18fKx1yfz8vEogNvGtWnCuhLZa9UTAreVWFsHy/b/+Vrbdl7E5REMQD2jDoUbByty+/ZnU64GkU2HzyJLhktU1cLv8nARgkYS2d3ajAgwG8qU2oLmDZ92CMaOjo7K4uCiZgbDWaRWgnZhPxLhrMUCvr69riwKZk1LHF7XqrWAO9hJxH6ozNzcnCx/PqztZg9mf6SQMscCtm2C5ke4BGMlHWTUp36036AJajDVrFMzBrhhWslQsSrFYiOqVpMriNYIgqFRq2j3FAb/zffT6zuxFXxsNzs3NTXn16lW4gYiW96w1FyedF+83xG/2FNGCRpU4NjamMsn+OZ9xE5RXqdaDdPpib6RWCzuwKF9RxqI2AVNQBwQYJoK0wdBejnqtEikP3pfP51XjUTESl12FqJEKxsEorARYDD44ONTeID7YpsEnrRvQfWAI2e8WfDaTUSIwJ0iBCmFOtOUAHvVMPp/TPwvYFVYFIuP8l+DBgwdaa2Miqwa0GgYwfeMltovbDfh6c1vIgMYcliSsKv4IWFr6VDHxvldvBAH+1sA+cnl5WYOPmmr9ir+1l9I0Cgz0yjhXjfJJ0JROnmezWbl165ayr/5fqwcBNr7IfhjMqKcvESSM4eRcCasQ3bDNObmKPLdGUGpZsN24cUNLBm9zazu4d++e6qpNBFaTuUS26U5dpuR1CxyA7J9ddrMRqlz4pwLLYawymPd++/2PADt2ugcGwq9gCCdhQ96C6xWwa6j1ceuq+I0EhW0i8MAIVJfeL3d/DVD8EKi12P6/2S2jV/EccVB54O/ejz/9HGCpoBBMta5rXMXLu53D1XAwjhXwvvv+h4BAXVe4bOu3O3ChxF08LiZFG3fel199G9CH3fLyqv24NcB44MRhpdK788U3CpyKwsCw590xmfSpzsBt0Fqc3ud3vtZigxWcVZCklVpSiN0w3q5E/h9TGMIUuA3+EQAAAABJRU5ErkJggg==",
        S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return l
    });
    var o = n(8),
        i = n.n(o),
        a = n(1),
        r = n(2),
        s = n(0),
        c = n(6),
        l = function() {
            function e() {
                i()(this, e), this.bDisabeCloseOnEsc = !1, this.sDefaultKeyScope = s.KeyState.None, this.sCurrentKeyScope = s.KeyState.None, this.viewModelVisibility = a.a.observable(!1), this.modalVisibility = a.a.observable(!1).extend({
                    rateLimit: 0
                }), this.viewModelName = "", this.viewModelNames = [], this.viewModelDom = null
            }
            return e.prototype.storeAndSetKeyScope = function() {
                this.sCurrentKeyScope = Object(c.keyScope)(), Object(c.keyScope)(this.sDefaultKeyScope)
            }, e.prototype.restoreKeyScope = function() {
                Object(c.keyScope)(this.sCurrentKeyScope)
            }, e.prototype.registerPopupKeyDown = function() {
                var e = this;
                c.$win.on("keydown", function(t) {
                    if (t && e.modalVisibility && e.modalVisibility()) {
                        if (!e.bDisabeCloseOnEsc && s.EventKeyCode.Esc === t.keyCode) return Object(r.delegateRun)(e, "cancelCommand"), !1;
                        if (s.EventKeyCode.Backspace === t.keyCode && !Object(r.inFocus)()) return !1
                    }
                    return !0
                })
            }, e.prototype.cancelCommand = function() {}, e.prototype.closeCommand = function() {}, e
        }()
}, function(e, t, n) {
    "use strict";
    var o = n(8),
        i = n.n(o),
        a = n(3),
        r = n.n(a),
        s = n(1),
        c = n(7),
        l = n.n(c),
        u = n(5),
        d = function() {
            function e() {
                var t = this;
                i()(this, e), this.google = {}, this.twitter = {}, this.facebook = {}, this.dropbox = {}, this.google.enabled = s.a.observable(!1), this.google.clientID = s.a.observable(""), this.google.clientSecret = s.a.observable(""), this.google.apiKey = s.a.observable(""), this.google.loading = s.a.observable(!1), this.google.userName = s.a.observable(""), this.google.loggined = s.a.computed(function() {
                    return "" !== t.google.userName()
                }), this.google.capa = {}, this.google.capa.auth = s.a.observable(!1), this.google.capa.authFast = s.a.observable(!1), this.google.capa.drive = s.a.observable(!1), this.google.capa.preview = s.a.observable(!1), this.google.require = {}, this.google.require.clientSettings = s.a.computed(function() {
                    return t.google.enabled() && (t.google.capa.auth() || t.google.capa.drive())
                }), this.google.require.apiKeySettings = s.a.computed(function() {
                    return t.google.enabled() && t.google.capa.drive()
                }), this.facebook.enabled = s.a.observable(!1), this.facebook.appID = s.a.observable(""), this.facebook.appSecret = s.a.observable(""), this.facebook.loading = s.a.observable(!1), this.facebook.userName = s.a.observable(""), this.facebook.supported = s.a.observable(!1), this.facebook.loggined = s.a.computed(function() {
                    return "" !== t.facebook.userName()
                }), this.twitter.enabled = s.a.observable(!1), this.twitter.consumerKey = s.a.observable(""), this.twitter.consumerSecret = s.a.observable(""), this.twitter.loading = s.a.observable(!1), this.twitter.userName = s.a.observable(""), this.twitter.loggined = s.a.computed(function() {
                    return "" !== t.twitter.userName()
                }), this.dropbox.enabled = s.a.observable(!1), this.dropbox.apiKey = s.a.observable("")
            }
            return e.prototype.populate = function() {
                this.google.enabled(!!u.settingsGet("AllowGoogleSocial")), this.google.clientID(u.settingsGet("GoogleClientID")), this.google.clientSecret(u.settingsGet("GoogleClientSecret")), this.google.apiKey(u.settingsGet("GoogleApiKey")), this.google.capa.auth(!!u.settingsGet("AllowGoogleSocialAuth")), this.google.capa.authFast(!!u.settingsGet("AllowGoogleSocialAuthFast")), this.google.capa.drive(!!u.settingsGet("AllowGoogleSocialDrive")), this.google.capa.preview(!!u.settingsGet("AllowGoogleSocialPreview")), this.facebook.enabled(!!u.settingsGet("AllowFacebookSocial")), this.facebook.appID(u.settingsGet("FacebookAppID")), this.facebook.appSecret(u.settingsGet("FacebookAppSecret")), this.facebook.supported(!!u.settingsGet("SupportedFacebookSocial")), this.twitter.enabled = s.a.observable(!!u.settingsGet("AllowTwitterSocial")), this.twitter.consumerKey = s.a.observable(u.settingsGet("TwitterConsumerKey")), this.twitter.consumerSecret = s.a.observable(u.settingsGet("TwitterConsumerSecret")), this.dropbox.enabled(!!u.settingsGet("AllowDropboxSocial")), this.dropbox.apiKey(u.settingsGet("DropboxApiKey"))
            }, e.prototype.appendDropbox = function() {
                if (!r.a.Dropbox && this.dropbox.enabled() && this.dropbox.apiKey() && !r.a.document.getElementById("dropboxjs")) {
                    var e = r.a.document.createElement("script");
                    e.type = "text/javascript", e.src = "https://www.dropbox.com/static/api/2/dropins.js", l()(e).attr("id", "dropboxjs").attr("data-app-key", this.dropbox.apiKey()), r.a.document.body.appendChild(e)
                }
            }, e
        }();
    t.a = new d
}, function(e, t, n) {
    "use strict";
    var o = n(8),
        i = n.n(o),
        a = n(12),
        r = n.n(a),
        s = n(11),
        c = n.n(s),
        l = n(1),
        u = n(0),
        d = n(6),
        p = n(2),
        h = n(5),
        f = function(e) {
            function t() {
                i()(this, t);
                var n = r()(this, e.call(this));
                n.currentAudio = l.a.observable(""), n.focusedState = l.a.observable(u.Focused.None);
                var o = h.appSettingsGet("mobile");
                return n.focusedState.subscribe(function(e) {
                    switch (e) {
                        case u.Focused.MessageList:
                            Object(d.keyScope)(u.KeyState.MessageList), o && Object(d.leftPanelDisabled)(!0);
                            break;
                        case u.Focused.MessageView:
                            Object(d.keyScope)(u.KeyState.MessageView), o && Object(d.leftPanelDisabled)(!0);
                            break;
                        case u.Focused.FolderList:
                            Object(d.keyScope)(u.KeyState.FolderList), o && Object(d.leftPanelDisabled)(!1)
                    }
                }), n.projectHash = l.a.observable(""), n.threadsAllowed = l.a.observable(!1), n.composeInEdit = l.a.observable(!1), n.contactsAutosave = l.a.observable(!1), n.useLocalProxyForExternalImages = l.a.observable(!1), n.contactsIsAllowed = l.a.observable(!1), n.attachmentsActions = l.a.observableArray([]), n.devEmail = "", n.devPassword = "", n
            }
            return c()(t, e), t.prototype.populate = function() {
                e.prototype.populate.call(this), this.projectHash(h.settingsGet("ProjectHash")), this.contactsAutosave(!!h.settingsGet("ContactsAutosave")), this.useLocalProxyForExternalImages(!!h.settingsGet("UseLocalProxyForExternalImages")), this.contactsIsAllowed(!!h.settingsGet("ContactsIsAllowed"));
                var t = h.appSettingsGet("attachmentsActions");
                this.attachmentsActions(Object(p.isNonEmptyArray)(t) ? t : []), this.devEmail = h.settingsGet("DevEmail"), this.devPassword = h.settingsGet("DevPassword")
            }, t
        }(n(116).a);
    t.a = new f
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return u
    }), n.d(t, "b", function() {
        return d
    });
    var o = n(8),
        i = n.n(o),
        a = n(7),
        r = n.n(a),
        s = n(1),
        c = n(2),
        l = n(10),
        u = function() {
            function e() {
                i()(this, e), this.disposable = []
            }
            return e.prototype.dispose = function() {
                this.disposable.forEach(function(e) {
                    e && e.dispose && e.dispose()
                })
            }, e
        }(),
        d = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return {
                template: t ? {
                    element: t
                } : "<b></b>",
                viewModel: {
                    createViewModel: function(t, n) {
                        return (t = t || {}).element = null, n && n.element && (t.component = n, t.element = r()(n.element), Object(l.i18nToNodes)(t.element), !Object(c.isUnd)(t.inline) && s.a.unwrap(t.inline) && t.element.css("display", "inline-block")), new e(t)
                    }
                }
            }
        }
}, function(e, t, n) {
    "use strict";
    var o = n(8),
        i = n.n(o),
        a = n(3),
        r = n.n(a),
        s = n(1),
        c = n(23),
        l = n(0),
        u = n(6),
        d = n(2),
        p = n(22),
        h = n(5),
        f = function() {
            function e() {
                i()(this, e), this.iAutoLogoutTimer = 0, this.layout = s.a.observable(l.Layout.SidePreview).extend({
                    limitedList: [l.Layout.SidePreview, l.Layout.BottomPreview, l.Layout.NoPreview]
                }), this.editorDefaultType = s.a.observable(l.EditorDefaultType.Html).extend({
                    limitedList: [l.EditorDefaultType.Html, l.EditorDefaultType.Plain, l.EditorDefaultType.HtmlForced, l.EditorDefaultType.PlainForced]
                }), this.messagesPerPage = s.a.observable(c.i).extend({
                    limitedList: c.j
                }), this.showImages = s.a.observable(!1), this.useCheckboxesInList = s.a.observable(!0), this.allowDraftAutosave = s.a.observable(!0), this.useThreads = s.a.observable(!1), this.replySameFolder = s.a.observable(!1), this.autoLogout = s.a.observable(l.Magics.Time30mInMin), this.computers(), this.subscribers()
            }
            return e.prototype.computers = function() {
                var e = this;
                this.usePreviewPane = s.a.computed(function() {
                    return l.Layout.NoPreview !== e.layout()
                })
            }, e.prototype.subscribers = function() {
                this.layout.subscribe(function(e) {
                    u.$html.toggleClass("rl-no-preview-pane", l.Layout.NoPreview === e), u.$html.toggleClass("rl-side-preview-pane", l.Layout.SidePreview === e), u.$html.toggleClass("rl-bottom-preview-pane", l.Layout.BottomPreview === e), p.a("layout", [e])
                })
            }, e.prototype.populate = function() {
                var e = this;
                this.layout(Object(d.pInt)(h.settingsGet("Layout"))), this.editorDefaultType(h.settingsGet("EditorDefaultType")), this.autoLogout(Object(d.pInt)(h.settingsGet("AutoLogout"))), this.messagesPerPage(h.settingsGet("MPP")), this.showImages(!!h.settingsGet("ShowImages")), this.useCheckboxesInList(!!h.settingsGet("UseCheckboxesInList")), this.allowDraftAutosave(!!h.settingsGet("AllowDraftAutosave")), this.useThreads(!!h.settingsGet("UseThreads")), this.replySameFolder(!!h.settingsGet("ReplySameFolder")), p.b("rl.auto-logout-refresh", function() {
                    r.a.clearTimeout(e.iAutoLogoutTimer), 0 < e.autoLogout() && !h.settingsGet("AccountSignMe") && (e.iAutoLogoutTimer = r.a.setTimeout(function() {
                        p.a("rl.auto-logout")
                    }, e.autoLogout() * l.Magics.Time1m))
                }), p.a("rl.auto-logout-refresh")
            }, e
        }();
    t.a = new f
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        Object(h.isFunc)(t) && (Object(h.isArray)(b[e]) || (b[e] = []), b[e].push(t))
    }

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        Object(h.isArray)(b[e]) && p.a.each(b[e], function(e) {
            e.apply(void 0, t)
        })
    }

    function a(e) {
        return m.settingsGet(e)
    }

    function r(e, t, n, o) {
        f.data.__APP__ && f.data.__APP__.remote().defaultRequest(e, "Plugin" + t, n, o)
    }

    function s(e, t, n, o) {
        g.push([e, t, n, o])
    }

    function c(e, t, n, o) {
        y.push([e, t, n, o])
    }

    function l(e) {
        var t = n(9);
        p.a.each(e ? y : g, function(e) {
            t.addSettingsViewModel(e[0], e[1], e[2], e[3])
        })
    }

    function u(e, t) {
        var n = m.settingsGet("Plugins");
        return (n = n && !Object(h.isUnd)(n[e]) ? n[e] : null) ? Object(h.isUnd)(n[t]) ? null : n[t] : null
    }
    n.d(t, "a", function() {
        return o
    }), n.d(t, "f", function() {
        return i
    }), n.d(t, "d", function() {
        return a
    }), n.d(t, "e", function() {
        return r
    }), n.d(t, "b", function() {
        return s
    }), n.d(t, "c", function() {
        return c
    }), n.d(t, "g", function() {
        return l
    }), n.d(t, "h", function() {
        return u
    });
    var d = n(4),
        p = n.n(d),
        h = n(2),
        f = n(6),
        m = n(5),
        b = {},
        g = [],
        y = []
}, function(e, t, n) {
    "use strict";
    var o = n(8),
        i = n.n(o),
        a = n(1),
        r = n(4),
        s = n.n(r),
        c = n(7),
        l = n.n(c),
        u = n(10),
        d = n(2),
        p = n(31),
        h = n(9),
        f = function() {
            function e() {
                i()(this, e), this.capaOpenPGP = a.a.observable(!1), this.openpgp = null, this.openpgpkeys = a.a.observableArray([]), this.openpgpKeyring = null, this.openpgpkeysPublic = this.openpgpkeys.filter(function(e) {
                    return !(!e || e.isPrivate)
                }), this.openpgpkeysPrivate = this.openpgpkeys.filter(function(e) {
                    return !(!e || !e.isPrivate)
                })
            }
            return e.prototype.isSupported = function() {
                return !!this.openpgp
            }, e.prototype.findKeyByHex = function(e, t) {
                return s.a.find(e, function(e) {
                    return t && e && (t === e.id || -1 < e.ids.indexOf(t))
                })
            }, e.prototype.findPublicKeyByHex = function(e) {
                return this.findKeyByHex(this.openpgpkeysPublic(), e)
            }, e.prototype.findPrivateKeyByHex = function(e) {
                return this.findKeyByHex(this.openpgpkeysPrivate(), e)
            }, e.prototype.findPublicKeysByEmail = function(e) {
                return s.a.compact(s.a.flatten(s.a.map(this.openpgpkeysPublic(), function(t) {
                    var n = t && -1 < t.emails.indexOf(e) ? t : null;
                    return n ? n.getNativeKeys() : [null]
                }), !0))
            }, e.prototype.findPublicKeysBySigningKeyIds = function(e) {
                var t = this;
                return s.a.compact(s.a.flatten(s.a.map(e, function(e) {
                    var n = e && e.toHex ? t.findPublicKeyByHex(e.toHex()) : null;
                    return n ? n.getNativeKeys() : [null]
                }), !0))
            }, e.prototype.findPrivateKeysByEncryptionKeyIds = function(e, t, n) {
                var o = this,
                    i = Object(d.isArray)(e) ? s.a.compact(s.a.flatten(s.a.map(e, function(e) {
                        var t = e && e.toHex ? o.findPrivateKeyByHex(e.toHex()) : null;
                        return t ? n ? [t] : t.getNativeKeys() : [null]
                    }), !0)) : [];
                return 0 === i.length && Object(d.isNonEmptyArray)(t) && (i = s.a.uniq(s.a.compact(s.a.flatten(s.a.map(t, function(e) {
                    var t = e ? o.findAllPrivateKeysByEmailNotNative(e) : null;
                    return t ? n ? t : s.a.flatten(s.a.map(t, function(e) {
                        return e.getNativeKeys()
                    }), !0) : [null]
                }), !0)), function(e) {
                    return e.id
                })), i
            }, e.prototype.findPublicKeyByEmailNotNative = function(e) {
                return s.a.find(this.openpgpkeysPublic(), function(t) {
                    return t && -1 < t.emails.indexOf(e)
                }) || null
            }, e.prototype.findPrivateKeyByEmailNotNative = function(e) {
                return s.a.find(this.openpgpkeysPrivate(), function(t) {
                    return t && -1 < t.emails.indexOf(e)
                }) || null
            }, e.prototype.findAllPublicKeysByEmailNotNative = function(e) {
                return s.a.filter(this.openpgpkeysPublic(), function(t) {
                    return t && -1 < t.emails.indexOf(e)
                }) || null
            }, e.prototype.findAllPrivateKeysByEmailNotNative = function(e) {
                return s.a.filter(this.openpgpkeysPrivate(), function(t) {
                    return t && -1 < t.emails.indexOf(e)
                }) || null
            }, e.prototype.findPrivateKeyByEmail = function(e, t) {
                var n = null,
                    o = s.a.find(this.openpgpkeysPrivate(), function(t) {
                        return t && -1 < t.emails.indexOf(e)
                    });
                if (o) try {
                    (n = o.getNativeKeys()[0] || null) && n.decrypt(Object(d.pString)(t))
                } catch (e) {
                    n = null
                }
                return n
            }, e.prototype.findSelfPrivateKey = function(e) {
                return this.findPrivateKeyByEmail(p.a.email(), e)
            }, e.prototype.decryptMessage = function(e, t, o) {
                var i = this;
                if (e && e.getEncryptionKeyIds) {
                    var a = this.findPrivateKeysByEncryptionKeyIds(e.getEncryptionKeyIds(), t, !0);
                    if (a && 0 < a.length) return Object(h.showScreenPopup)(n(200), [function(t) {
                        t ? e.decrypt(t).then(function(e) {
                            var n = null;
                            e && (n = i.findPrivateKeyByHex(t.primaryKey.keyid.toHex())) ? i.verifyMessage(e, function(t, i) {
                                o(n, e, t || null, i || null)
                            }) : o(n, e)
                        }, function() {
                            o(null, null)
                        }) : o(null, null)
                    }, a]), !1
                }
                return o(null, null), !1
            }, e.prototype.verifyMessage = function(e, t) {
                if (e && e.getSigningKeyIds) {
                    var n = e.getSigningKeyIds();
                    if (n && 0 < n.length) {
                        var o = this.findPublicKeysBySigningKeyIds(n);
                        if (o && 0 < o.length) try {
                            var i = e.verify(o),
                                a = s.a.find(s.a.isArray(i) ? i : [], function(e) {
                                    return e && e.valid && e.keyid
                                });
                            if (a && a.keyid && a.keyid && a.keyid.toHex) return t(this.findPublicKeyByHex(a.keyid.toHex())), !0
                        } catch (e) {
                            Object(d.log)(e)
                        }
                        return t(null, n), !1
                    }
                }
                return t(null), !1
            }, e.prototype.controlsHelper = function(e, t, n, o, i) {
                n ? (e.removeClass("error").addClass("success").attr("title", o), t.removeClass("error").addClass("success").attr("title", o)) : (e.removeClass("success").addClass("error").attr("title", o), t.removeClass("success").addClass("error").attr("title", o)), Object(d.isUnd)(i) || e.text(Object(d.trim)(i))
            }, e.domControlEncryptedClickHelper = function(e, t, n, o) {
                return function() {
                    var i = null,
                        a = l()(this);
                    if (a.hasClass("success")) return !1;
                    try {
                        i = e.openpgp.message.readArmored(n)
                    } catch (e) {
                        Object(d.log)(e)
                    }
                    return i && i.getText && i.verify && i.decrypt ? (e.decryptMessage(i, o, function(n, o, i, r) {
                        if (o)
                            if (i) e.controlsHelper(t, a, !0, Object(u.i18n)("PGP_NOTIFICATIONS/GOOD_SIGNATURE", {
                                USER: i.user + " (" + i.id + ")"
                            }), o.getText());
                            else if (n) {
                            var c = Object(d.isNonEmptyArray)(r) ? r : null,
                                l = c ? s.a.compact(s.a.map(c, function(e) {
                                    return e && e.toHex ? e.toHex() : null
                                })).join(", ") : "";
                            e.controlsHelper(t, a, !1, Object(u.i18n)("PGP_NOTIFICATIONS/UNVERIFIRED_SIGNATURE") + (l ? " (" + l + ")" : ""), o.getText())
                        } else e.controlsHelper(t, a, !1, Object(u.i18n)("PGP_NOTIFICATIONS/DECRYPTION_ERROR"));
                        else e.controlsHelper(t, a, !1, Object(u.i18n)("PGP_NOTIFICATIONS/DECRYPTION_ERROR"))
                    }), !1) : (e.controlsHelper(t, a, !1, Object(u.i18n)("PGP_NOTIFICATIONS/DECRYPTION_ERROR")), !1)
                }
            }, e.domControlSignedClickHelper = function(e, t, n) {
                return function() {
                    var o = null,
                        i = l()(this);
                    if (i.hasClass("success") || i.hasClass("error")) return !1;
                    try {
                        o = e.openpgp.cleartext.readArmored(n)
                    } catch (e) {
                        Object(d.log)(e)
                    }
                    return o && o.getText && o.verify ? (e.verifyMessage(o, function(n, a) {
                        if (n) e.controlsHelper(t, i, !0, Object(u.i18n)("PGP_NOTIFICATIONS/GOOD_SIGNATURE", {
                            USER: n.user + " (" + n.id + ")"
                        }), o.getText());
                        else {
                            var r = Object(d.isNonEmptyArray)(a) ? a : null,
                                c = r ? s.a.compact(s.a.map(r, function(e) {
                                    return e && e.toHex ? e.toHex() : null
                                })).join(", ") : "";
                            e.controlsHelper(t, i, !1, Object(u.i18n)("PGP_NOTIFICATIONS/UNVERIFIRED_SIGNATURE") + (c ? " (" + c + ")" : ""))
                        }
                    }), !1) : (e.controlsHelper(t, i, !1, Object(u.i18n)("PGP_NOTIFICATIONS/DECRYPTION_ERROR")), !1)
                }
            }, e.prototype.initMessageBodyControls = function(t, n) {
                if (t && !t.hasClass("inited")) {
                    t.addClass("inited");
                    var o = t.hasClass("encrypted"),
                        i = t.hasClass("signed"),
                        a = n ? n.getEmails(["from", "to", "cc"]) : [],
                        r = null;
                    if (o || i) {
                        var s = t.text();
                        t.data("openpgp-original", s), o ? r = l()('<div class="b-openpgp-control"><i class="icon-lock"></i></div>').attr("title", Object(u.i18n)("MESSAGE/PGP_ENCRYPTED_MESSAGE_DESC")).on("click", e.domControlEncryptedClickHelper(this, t, s, a)) : i && (r = l()('<div class="b-openpgp-control"><i class="icon-lock"></i></div>').attr("title", Object(u.i18n)("MESSAGE/PGP_SIGNED_MESSAGE_DESC")).on("click", e.domControlSignedClickHelper(this, t, s))), r && t.before(r).before("<div></div>")
                    }
                }
            }, e
        }();
    t.a = new f
}, function(e, t, n) {
    "use strict";
    var o = n(8),
        i = n.n(o),
        a = n(1),
        r = n(4),
        s = n.n(r),
        c = n(0),
        l = n(5),
        u = function() {
            function e() {
                i()(this, e), this.email = a.a.observable(""), this.parentEmail = a.a.observable(""), this.signature = a.a.observable(""), this.accounts = a.a.observableArray([]), this.accounts.loading = a.a.observable(!1).extend({
                    throttle: c.Magics.Time100ms
                }), this.computers()
            }
            return e.prototype.computers = function() {
                var e = this;
                this.accountsEmails = a.a.computed(function() {
                    return s.a.compact(s.a.map(e.accounts(), function(e) {
                        return e ? e.email : null
                    }))
                }), this.accountsUnreadCount = a.a.computed(function() {
                    return 0
                })
            }, e.prototype.populate = function() {
                this.email(l.settingsGet("Email")), this.parentEmail(l.settingsGet("ParentEmail"))
            }, e.prototype.isRootAccount = function() {
                return "" === this.parentEmail()
            }, e
        }();
    t.a = new u
}, function(e, t, n) {
    "use strict";
    var o = n(8),
        i = n.n(o),
        a = n(1),
        r = n(2),
        s = n(5),
        c = function() {
            function e() {
                i()(this, e), this.languages = a.a.observableArray([]), this.languagesAdmin = a.a.observableArray([]), this.language = a.a.observable("").extend({
                    limitedList: this.languages
                }).extend({
                    reversible: !0
                }), this.languageAdmin = a.a.observable("").extend({
                    limitedList: this.languagesAdmin
                }).extend({
                    reversible: !0
                }), this.userLanguage = a.a.observable(""), this.userLanguageAdmin = a.a.observable("")
            }
            return e.prototype.populate = function() {
                var e = s.appSettingsGet("languages"),
                    t = s.appSettingsGet("languagesAdmin");
                this.languages(Object(r.isArray)(e) ? e : []), this.languagesAdmin(Object(r.isArray)(t) ? t : []), this.language(s.settingsGet("Language")), this.languageAdmin(s.settingsGet("LanguageAdmin")), this.userLanguage(s.settingsGet("UserLanguage")), this.userLanguageAdmin(s.settingsGet("UserLanguageAdmin"))
            }, e
        }();
    t.a = new c
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        return !!v && v.set("p" + e, t)
    }

    function i(e) {
        return v ? v.get("p" + e) : null
    }
    var a = n(4),
        r = n.n(a),
        s = n(8),
        c = n.n(s),
        l = n(3),
        u = n.n(l),
        d = n(120),
        p = n.n(d),
        h = n(2),
        f = n(23),
        m = function() {
            function e() {
                c()(this, e)
            }
            return e.prototype.set = function(e, t) {
                var n = !1,
                    o = null;
                try {
                    o = p.a.getJSON(f.b)
                } catch (e) {}(o || (o = {}))[e] = t;
                try {
                    p.a.set(f.b, o, {
                        expires: 30
                    }), n = !0
                } catch (e) {}
                return n
            }, e.prototype.get = function(e) {
                var t = null;
                try {
                    var n = p.a.getJSON(f.b);
                    t = n && !Object(h.isUnd)(n[e]) ? n[e] : null
                } catch (e) {}
                return t
            }, e.supported = function() {
                return !(!u.a.navigator || !u.a.navigator.cookieEnabled)
            }, e
        }(),
        b = n(69),
        g = function() {
            function e() {
                c()(this, e), this.s = null, this.s = u.a.localStorage || null
            }
            return e.prototype.set = function(e, t) {
                if (!this.s) return !1;
                var n = null;
                try {
                    var o = this.s.getItem(f.b) || null;
                    n = null === o ? null : u.a.JSON.parse(o)
                } catch (e) {}(n || (n = {}))[e] = t;
                try {
                    return this.s.setItem(f.b, u.a.JSON.stringify(n)), !0
                } catch (e) {}
                return !1
            }, e.prototype.get = function(e) {
                if (!this.s) return null;
                try {
                    var t = this.s.getItem(f.b) || null,
                        n = null === t ? null : u.a.JSON.parse(t);
                    return n && !Object(h.isUnd)(n[e]) ? n[e] : null
                } catch (e) {}
                return null
            }, e.supported = function() {
                return Object(b.d)("localStorage")
            }, e
        }();
    n.d(t, "b", function() {
        return o
    }), n.d(t, "a", function() {
        return i
    });
    var y = r.a.find([g, m], function(e) {
            return e && e.supported()
        }),
        v = y ? new y : null
}, function(e, t, n) {
    "use strict";

    function o() {
        return S(), y || b()()
    }

    function i() {
        return O(), v || 0
    }

    function a(e) {
        return o().clone().subtract(e, "days").format("YYYY.MM.DD")
    }

    function r(e, t) {
        var n = null,
            a = "",
            r = i();
        if ((n = 0 < (e = r < (e = 0 < e ? e : 0 === e ? r : 0) ? r : e) ? b.a.unix(e) : null) && 1970 === n.year() && (n = null), n) switch (t) {
            case "FROMNOW":
                a = n.fromNow();
                break;
            case "SHORT":
                a = function(e) {
                    var t = o();
                    if (e && t) switch (!0) {
                        case 4 >= t.diff(e, "hours"):
                            return e.fromNow();
                        case t.format("L") === e.format("L"):
                            return Object(g.i18n)("MESSAGE_LIST/TODAY_AT", {
                                TIME: e.format("LT")
                            });
                        case t.clone().subtract(1, "days").format("L") === e.format("L"):
                            return Object(g.i18n)("MESSAGE_LIST/YESTERDAY_AT", {
                                TIME: e.format("LT")
                            });
                        case t.year() === e.year():
                            return e.format("D MMM.")
                    }
                    return e ? e.format("LL") : ""
                }(n);
                break;
            case "FULL":
                a = n.format("LLL");
                break;
            default:
                a = n.format(t)
        }
        return a
    }

    function s(e) {
        var t, n = "",
            o = f()(e);
        (t = o.data("moment-time")) && ((n = o.data("moment-format")) && o.text(r(t, n)), (n = o.data("moment-format-title")) && o.attr("title", r(t, n)))
    }

    function c() {
        p.a.defer(function() {
            f()(".moment", u.a.document).each(function(e, t) {
                s(t)
            })
        })
    }
    n.r(t), n.d(t, "momentNow", function() {
        return o
    }), n.d(t, "momentNowUnix", function() {
        return i
    }), n.d(t, "searchSubtractFormatDateHelper", function() {
        return a
    }), n.d(t, "format", function() {
        return r
    }), n.d(t, "momentToNode", function() {
        return s
    }), n.d(t, "reload", function() {
        return c
    });
    var l = n(3),
        u = n.n(l),
        d = n(4),
        p = n.n(d),
        h = n(7),
        f = n.n(h),
        m = n(54),
        b = n.n(m),
        g = n(10),
        y = null,
        v = 0,
        S = p.a.debounce(function() {
            y = b()()
        }, 500, !0),
        O = p.a.debounce(function() {
            v = b()().unix()
        }, 500, !0)
}, function(e, t) {
    e.exports = window.hasher
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var o = n(8),
        i = n.n(o),
        a = n(2),
        r = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                i()(this, e), this.sModelName = "", this.disposables = [], this.sModelName = t || ""
            }
            return e.prototype.regDisposables = function(e) {
                var t = this;
                Object(a.isArray)(e) ? e.forEach(function(e) {
                    t.disposables.push(e)
                }) : e && this.disposables.push(e)
            }, e.prototype.onDestroy = function() {
                Object(a.disposeObject)(this)
            }, e
        }()
}, , , function(e, t, n) {
    "use strict";
    var o = n(8),
        i = n.n(o),
        a = n(1),
        r = n(2),
        s = n(5),
        c = function() {
            function e() {
                i()(this, e), this.themes = a.a.observableArray([]), this.themeBackgroundName = a.a.observable(""), this.themeBackgroundHash = a.a.observable(""), this.theme = a.a.observable("").extend({
                    limitedList: this.themes
                })
            }
            return e.prototype.populate = function() {
                var e = s.appSettingsGet("themes");
                this.themes(Object(r.isArray)(e) ? e : []), this.theme(s.settingsGet("Theme")), this.themeBackgroundName(s.settingsGet("UserBackgroundName")), this.themeBackgroundHash(s.settingsGet("UserBackgroundHash"))
            }, e
        }();
    t.a = new c
}, function(e, t) {
    var n = e.exports = {
        version: "2.5.1"
    };
    "number" == typeof __e && (__e = n)
}, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(e, t, n) {
    e.exports = !n(51)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    var o = n(109),
        i = n(73);
    e.exports = function(e) {
        return o(i(e))
    }
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "EmailModel", function() {
        return u
    }), n.d(t, "default", function() {
        return u
    });
    var o = n(8),
        i = n.n(o),
        a = n(4),
        r = n.n(a),
        s = n(76),
        c = n.n(s),
        l = n(2),
        u = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                i()(this, e), this.email = "", this.name = "", this.dkimStatus = "", this.dkimValue = "", this.email = t, this.name = n, this.dkimStatus = o, this.dkimValue = a, this.clearDuplicateName()
            }
            return e.newInstanceFromJson = function(t) {
                var n = new e;
                return n.initByJson(t) ? n : null
            }, e.prototype.clear = function() {
                this.email = "", this.name = "", this.dkimStatus = "none", this.dkimValue = ""
            }, e.prototype.validate = function() {
                return "" !== this.name || "" !== this.email
            }, e.prototype.hash = function() {
                return "#" + (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? "" : this.name) + "#" + this.email + "#"
            }, e.prototype.clearDuplicateName = function() {
                this.name === this.email && (this.name = "")
            }, e.prototype.search = function(e) {
                return -1 < (this.name + " " + this.email).toLowerCase().indexOf(e.toLowerCase())
            }, e.prototype.initByJson = function(e) {
                var t = !1;
                return e && "Object/Email" === e["@Object"] && (this.name = Object(l.trim)(e.Name), this.email = Object(l.trim)(e.Email), this.dkimStatus = Object(l.trim)(e.DkimStatus || ""), this.dkimValue = Object(l.trim)(e.DkimValue || ""), t = "" !== this.email, this.clearDuplicateName()), t
            }, e.prototype.toLine = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = "";
                return "" !== this.email && (e && "" !== this.name ? o = t ? '<a href="mailto:' + Object(l.encodeHtml)(this.email) + "?to=" + Object(l.encodeHtml)('"' + this.name + '" <' + this.email + ">") + '" target="_blank" tabindex="-1">' + Object(l.encodeHtml)(this.name) + "</a>" : n ? Object(l.encodeHtml)(this.name) : this.name : (o = this.email, "" !== this.name ? t ? o = Object(l.encodeHtml)('"' + this.name + '" <') + '<a href="mailto:' + Object(l.encodeHtml)(this.email) + "?to=" + Object(l.encodeHtml)('"' + this.name + '" <' + this.email + ">") + '" target="_blank" tabindex="-1">' + Object(l.encodeHtml)(o) + "</a>" + Object(l.encodeHtml)(">") : (o = '"' + this.name + '" <' + o + ">", n && (o = Object(l.encodeHtml)(o))) : t && (o = '<a href="mailto:' + Object(l.encodeHtml)(this.email) + '" target="_blank" tabindex="-1">' + Object(l.encodeHtml)(this.email) + "</a>"))), o
            }, e.splitEmailLine = function(t) {
                var n = c()(t);
                if (Object(l.isNonEmptyArray)(n)) {
                    var o = [],
                        i = !1;
                    return n.forEach(function(t) {
                        var n = t.address ? new e(t.address.replace(/^[<]+(.*)[>]+$/g, "$1"), t.name || "") : null;
                        n && n.email && (i = !0), o.push(n ? n.toLine(!1) : t.name)
                    }), i ? o : null
                }
                return null
            }, e.parseEmailLine = function(t) {
                var n = c()(t);
                return Object(l.isNonEmptyArray)(n) ? r.a.compact(n.map(function(t) {
                    return t.address ? new e(t.address.replace(/^[<]+(.*)[>]+$/g, "$1"), t.name || "") : null
                })) : []
            }, e.prototype.parse = function(e) {
                if ("" === (e = Object(l.trim)(e))) return !1;
                var t = c()(e);
                return !(!Object(l.isNonEmptyArray)(t) || !t[0] || (this.name = t[0].name || "", this.email = t[0].address || "", this.clearDuplicateName(), 0))
            }, e
        }()
}, function(e, t, n) {
    "use strict";
    var o = n(8),
        i = n.n(o),
        a = n(3),
        r = n.n(a),
        s = n(6),
        c = n(16),
        l = n(22),
        u = n(2),
        d = function() {
            function e() {
                var t = this;
                if (i()(this, e), this.notificator = null, this.player = null, this.supported = !1, this.supportedMp3 = !1, this.supportedOgg = !1, this.supportedWav = !1, this.supportedNotification = !1, this.player = this.createNewObject(), this.supported = !(s.bMobileDevice || s.bSafari || !this.player || !this.player.play), this.supported && this.player && this.player.canPlayType && (this.supportedMp3 = "" !== this.player.canPlayType("audio/mpeg;").replace(/no/, ""), this.supportedWav = "" !== this.player.canPlayType('audio/wav; codecs="1"').replace(/no/, ""), this.supportedOgg = "" !== this.player.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""), this.supportedNotification = this.supported && this.supportedMp3), this.player && (this.supportedMp3 || this.supportedOgg || this.supportedWav) || (this.supported = !1, this.supportedMp3 = !1, this.supportedOgg = !1, this.supportedWav = !1, this.supportedNotification = !1), this.supported && this.player) {
                    var n = function() {
                        return t.stop()
                    };
                    this.player.addEventListener("ended", n), this.player.addEventListener("error", n), l.b("audio.api.stop", n)
                }
            }
            return e.prototype.createNewObject = function() {
                var e = r.a.Audio ? new r.a.Audio : null;
                return e && e.canPlayType && e.pause && e.play && (e.preload = "none", e.loop = !1, e.autoplay = !1, e.muted = !1), e
            }, e.prototype.paused = function() {
                return !this.supported || !!this.player.paused
            }, e.prototype.stop = function() {
                this.supported && this.player.pause && this.player.pause(), l.a("audio.stop")
            }, e.prototype.pause = function() {
                this.stop()
            }, e.prototype.clearName = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return e = Object(u.trim)(e), t && "." + t === e.toLowerCase().substr(-1 * (t.length + 1)) && (e = Object(u.trim)(e.substr(0, e.length - 4))), "" === e ? "audio" : e
            }, e.prototype.playMp3 = function(e, t) {
                this.supported && this.supportedMp3 && (this.player.src = e, this.player.play(), l.a("audio.start", [this.clearName(t, "mp3"), "mp3"]))
            }, e.prototype.playOgg = function(e, t) {
                this.supported && this.supportedOgg && (this.player.src = e, this.player.play(), t = this.clearName(t, "oga"), t = this.clearName(t, "ogg"), l.a("audio.start", [t, "ogg"]))
            }, e.prototype.playWav = function(e, t) {
                this.supported && this.supportedWav && (this.player.src = e, this.player.play(), l.a("audio.start", [this.clearName(t, "wav"), "wav"]))
            }, e.prototype.playNotification = function() {
                this.supported && this.supportedMp3 && (this.notificator || (this.notificator = this.createNewObject(), this.notificator.src = c.D("new-mail.mp3")), this.notificator && this.notificator.play && this.notificator.play())
            }, e
        }();
    t.a = new d
}, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return p
    });
    var o = n(8),
        i = n.n(o),
        a = n(12),
        r = n.n(a),
        s = n(11),
        c = n.n(s),
        l = n(1),
        u = n(2),
        d = n(0),
        p = function(e) {
            function t(n) {
                i()(this, t);
                var o = r()(this, e.call(this));
                return o.value = n.value || "", o.size = n.size || 0, o.label = n.label || "", o.preLabel = n.preLabel || "", o.enable = !!Object(u.isUnd)(n.enable) || n.enable, o.trigger = n.trigger && n.trigger.subscribe ? n.trigger : null, o.placeholder = n.placeholder || "", o.labeled = !Object(u.isUnd)(n.label), o.preLabeled = !Object(u.isUnd)(n.preLabel), o.triggered = !Object(u.isUnd)(n.trigger) && !!o.trigger, o.classForTrigger = l.a.observable(""), o.className = l.a.computed(function() {
                    var e = l.a.unwrap(o.size),
                        t = o.trigger ? " " + Object(u.trim)("settings-saved-trigger-input " + o.classForTrigger()) : "";
                    return (0 < e ? "span" + e : "") + t
                }), !Object(u.isUnd)(n.width) && n.element && n.element.find("input,select,textarea").css("width", n.width), o.disposable.push(o.className), o.trigger && (o.setTriggerState(o.trigger()), o.disposable.push(o.trigger.subscribe(o.setTriggerState, o))), o
            }
            return c()(t, e), t.prototype.setTriggerState = function(e) {
                switch (Object(u.pInt)(e)) {
                    case d.SaveSettingsStep.TrueResult:
                        this.classForTrigger("success");
                        break;
                    case d.SaveSettingsStep.FalseResult:
                        this.classForTrigger("error");
                        break;
                    default:
                        this.classForTrigger("")
                }
            }, t
        }(n(27).a)
}, , function(e, t, n) {
    var o = n(61),
        i = n(77),
        a = n(67),
        r = Object.defineProperty;
    t.f = n(42) ? Object.defineProperty : function(e, t, n) {
        if (o(e), t = a(t, !0), o(n), i) try {
            return r(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function(e, t, n) {
    "use strict";
    var o = n(8),
        i = n.n(o),
        a = n(12),
        r = n.n(a),
        s = n(11),
        c = n.n(s),
        l = n(3),
        u = n.n(l),
        d = n(4),
        p = n.n(d),
        h = n(23),
        f = n(2),
        m = n(0),
        b = n(15),
        g = n(5),
        y = n(33),
        v = n(26),
        S = n(13),
        O = n(17),
        w = n(1),
        T = n(10),
        C = n(22),
        A = function(e) {
            function t() {
                i()(this, t);
                var n = r()(this, e.call(this, "FolderModel"));
                return n.name = w.a.observable(""), n.fullName = "", n.fullNameRaw = "", n.fullNameHash = "", n.delimiter = "", n.namespace = "", n.deep = 0, n.interval = 0, n.selectable = !1, n.existen = !0, n.type = w.a.observable(m.FolderType.User), n.focused = w.a.observable(!1), n.selected = w.a.observable(!1), n.edited = w.a.observable(!1), n.subScribed = w.a.observable(!0), n.checkable = w.a.observable(!1), n.subFolders = w.a.observableArray([]), n.deleteAccess = w.a.observable(!1), n.actionBlink = w.a.observable(!1).extend({
                    falseTimeout: 1e3
                }), n.nameForEdit = w.a.observable(""), n.privateMessageCountAll = w.a.observable(0), n.privateMessageCountUnread = w.a.observable(0), n.collapsedPrivate = w.a.observable(!0), n
            }
            return c()(t, e), t.newInstanceFromJson = function(e) {
                var n = new t;
                return n.initByJson(e) ? n.initComputed() : null
            }, t.prototype.initComputed = function() {
                var e = this,
                    t = Object(b.h)();
                return this.isInbox = w.a.computed(function() {
                    return m.FolderType.Inbox === e.type()
                }), this.hasSubScribedSubfolders = w.a.computed(function() {
                    return !!p.a.find(e.subFolders(), function(e) {
                        return (e.subScribed() || e.hasSubScribedSubfolders()) && !e.isSystemFolder()
                    })
                }), this.canBeEdited = w.a.computed(function() {
                    return m.FolderType.User === e.type() && e.existen && e.selectable
                }), this.visible = w.a.computed(function() {
                    var t = e.subScribed(),
                        n = e.hasSubScribedSubfolders();
                    return t || n && (!e.existen || !e.selectable)
                }), this.isSystemFolder = w.a.computed(function() {
                    return m.FolderType.User !== e.type()
                }), this.hidden = w.a.computed(function() {
                    var t = e.isSystemFolder(),
                        n = e.hasSubScribedSubfolders();
                    return t && !n || !e.selectable && !n
                }), this.selectableForFolderList = w.a.computed(function() {
                    return !e.isSystemFolder() && e.selectable
                }), this.messageCountAll = w.a.computed({
                    read: this.privateMessageCountAll,
                    write: function(t) {
                        Object(f.isPosNumeric)(t, !0) ? e.privateMessageCountAll(t) : e.privateMessageCountAll.valueHasMutated()
                    }
                }).extend({
                    notify: "always"
                }), this.messageCountUnread = w.a.computed({
                    read: this.privateMessageCountUnread,
                    write: function(t) {
                        Object(f.isPosNumeric)(t, !0) ? e.privateMessageCountUnread(t) : e.privateMessageCountUnread.valueHasMutated()
                    }
                }).extend({
                    notify: "always"
                }), this.printableUnreadCount = w.a.computed(function() {
                    var t = e.messageCountAll(),
                        n = e.messageCountUnread(),
                        o = e.type();
                    if (0 < t) {
                        if (m.FolderType.Draft === o) return "" + t;
                        if (0 < n && m.FolderType.Trash !== o && m.FolderType.Archive !== o && m.FolderType.SentItems !== o) return "" + n
                    }
                    return ""
                }), this.canBeDeleted = w.a.computed(function() {
                    return !e.isSystemFolder() && 0 === e.subFolders().length && t !== e.fullNameRaw
                }), this.canBeSubScribed = w.a.computed(function() {
                    return !e.isSystemFolder() && e.selectable && t !== e.fullNameRaw
                }), this.canBeChecked = this.canBeSubScribed, this.localName = w.a.computed(function() {
                    Object(T.trigger)();
                    var t = e.name(),
                        n = e.type();
                    if (e.isSystemFolder()) switch (n) {
                        case m.FolderType.Inbox:
                            t = Object(T.i18n)("FOLDER_LIST/INBOX_NAME");
                            break;
                        case m.FolderType.SentItems:
                            t = Object(T.i18n)("FOLDER_LIST/SENT_NAME");
                            break;
                        case m.FolderType.Draft:
                            t = Object(T.i18n)("FOLDER_LIST/DRAFTS_NAME");
                            break;
                        case m.FolderType.Spam:
                            t = Object(T.i18n)("FOLDER_LIST/SPAM_NAME");
                            break;
                        case m.FolderType.Trash:
                            t = Object(T.i18n)("FOLDER_LIST/TRASH_NAME");
                            break;
                        case m.FolderType.Archive:
                            t = Object(T.i18n)("FOLDER_LIST/ARCHIVE_NAME")
                    }
                    return t
                }), this.manageFolderSystemName = w.a.computed(function() {
                    Object(T.trigger)();
                    var t = "",
                        n = e.type(),
                        o = e.name();
                    if (e.isSystemFolder()) switch (n) {
                        case m.FolderType.Inbox:
                            t = "(" + Object(T.i18n)("FOLDER_LIST/INBOX_NAME") + ")";
                            break;
                        case m.FolderType.SentItems:
                            t = "(" + Object(T.i18n)("FOLDER_LIST/SENT_NAME") + ")";
                            break;
                        case m.FolderType.Draft:
                            t = "(" + Object(T.i18n)("FOLDER_LIST/DRAFTS_NAME") + ")";
                            break;
                        case m.FolderType.Spam:
                            t = "(" + Object(T.i18n)("FOLDER_LIST/SPAM_NAME") + ")";
                            break;
                        case m.FolderType.Trash:
                            t = "(" + Object(T.i18n)("FOLDER_LIST/TRASH_NAME") + ")";
                            break;
                        case m.FolderType.Archive:
                            t = "(" + Object(T.i18n)("FOLDER_LIST/ARCHIVE_NAME") + ")"
                    }
                    return ("" !== t && "(" + o + ")" === t || "(inbox)" === t.toLowerCase()) && (t = ""), t
                }), this.collapsed = w.a.computed({
                    read: function() {
                        return !e.hidden() && e.collapsedPrivate()
                    },
                    write: function(t) {
                        e.collapsedPrivate(t)
                    }
                }), this.hasUnreadMessages = w.a.computed(function() {
                    return 0 < e.messageCountUnread() && "" !== e.printableUnreadCount()
                }), this.hasSubScribedUnreadMessagesSubfolders = w.a.computed(function() {
                    return !!p.a.find(e.subFolders(), function(e) {
                        return e.hasUnreadMessages() || e.hasSubScribedUnreadMessagesSubfolders()
                    })
                }), this.name.subscribe(function(t) {
                    e.nameForEdit(t)
                }), this.edited.subscribe(function(t) {
                    t && e.nameForEdit(e.name())
                }), this.messageCountUnread.subscribe(function(t) {
                    m.FolderType.Inbox === e.type() && C.a("mailbox.inbox-unread-count", [t])
                }), this
            }, t.prototype.collapsedCss = function() {
                return this.hasSubScribedSubfolders() ? this.collapsed() ? "icon-right-mini e-collapsed-sign" : "icon-down-mini e-collapsed-sign" : "icon-none e-collapsed-sign"
            }, t.prototype.initByJson = function(e) {
                var t = !1,
                    n = Object(b.h)();
                return e && "Object/Folder" === e["@Object"] && (this.name(e.Name), this.delimiter = e.Delimiter, this.fullName = e.FullName, this.fullNameRaw = e.FullNameRaw, this.fullNameHash = e.FullNameHash, this.deep = e.FullNameRaw.split(this.delimiter).length - 1, this.selectable = !!e.IsSelectable, this.existen = !!e.IsExists, this.subScribed(!!e.IsSubscribed), this.checkable(!!e.Checkable), this.type(n === this.fullNameRaw ? m.FolderType.Inbox : m.FolderType.User), t = !0), t
            }, t.prototype.printableFullName = function() {
                return this.fullName.split(this.delimiter).join(" / ")
            }, t
        }(n(36).a),
        E = function() {
            function e() {
                i()(this, e), this.oPromisesStack = {}
            }
            return e.prototype.func = function(e) {
                return e(), this
            }, e.prototype.fastResolve = function(e) {
                return u.a.Promise.resolve(e)
            }, e.prototype.fastReject = function(e) {
                return u.a.Promise.reject(e)
            }, e.prototype.setTrigger = function(e, t) {
                e && (t = !!t, (Object(f.isArray)(e) ? e : [e]).forEach(function(e) {
                    e && e(t)
                }))
            }, e
        }(),
        F = new(function(e) {
            function t() {
                return i()(this, t), r()(this, e.apply(this, arguments))
            }
            return c()(t, e), t.prototype.isFolderExpanded = function(e, t) {
                return t && Object(f.isArray)(t) && -1 !== p.a.indexOf(t, e)
            }, t.prototype.normalizeFolder = function(e) {
                return "" === e || h.r === e || null !== b.e(e) ? e : ""
            }, t.prototype.folderResponseParseRec = function(e, t, n) {
                var o = this,
                    i = S.a.displaySpecSetting(),
                    a = [];
                return p.a.each(t, function(t) {
                    if (t) {
                        var r = b.e(t.FullNameRaw);
                        r || (r = A.newInstanceFromJson(t)) && (b.r(t.FullNameRaw, r), b.p(r.fullNameHash, t.FullNameRaw, r)), r && (i ? r.checkable(!!t.Checkable) : r.checkable(!0), r.collapsed(!o.isFolderExpanded(r.fullNameHash, n)), t.Extended && (t.Extended.Hash && b.q(r.fullNameRaw, t.Extended.Hash), Object(f.isNormal)(t.Extended.MessageCount) && r.messageCountAll(t.Extended.MessageCount), Object(f.isNormal)(t.Extended.MessageUnseenCount) && r.messageCountUnread(t.Extended.MessageUnseenCount)), t.SubFolders && "Collection/FolderCollection" === t.SubFolders["@Object"] && t.SubFolders["@Collection"] && Object(f.isArray)(t.SubFolders["@Collection"]) && r.subFolders(o.folderResponseParseRec(e, t.SubFolders["@Collection"], n)), a.push(r))
                    }
                }), a
            }, t.prototype.foldersList = function(e) {
                if (e && "Collection/FolderCollection" === e["@Object"] && e["@Collection"] && Object(f.isArray)(e["@Collection"])) {
                    var t = y.a(m.ClientSideKeyName.ExpandedFolders),
                        n = Object(f.pInt)(e.CountRec),
                        o = Object(f.pInt)(g.appSettingsGet("folderSpecLimit"));
                    o = 100 < o ? 100 : 10 > o ? 10 : o, S.a.displaySpecSetting(0 >= n || o < n), S.a.folderList(this.folderResponseParseRec(Object(f.isUnd)(e.Namespace) ? "" : e.Namespace, e["@Collection"], t))
                }
            }, t.prototype.foldersAdditionalParameters = function(e) {
                if (e && e && "Collection/FolderCollection" === e["@Object"] && e["@Collection"] && Object(f.isArray)(e["@Collection"])) {
                    Object(f.isUnd)(e.Namespace) || (S.a.namespace = e.Namespace), v.a.threadsAllowed(!!g.appSettingsGet("useImapThread") && e.IsThreadsSupported && !0), S.a.folderList.optimized(!!e.Optimized);
                    var t = !1;
                    e.SystemFolders && "" == "" + g.settingsGet("SentFolder") + g.settingsGet("DraftFolder") + g.settingsGet("SpamFolder") + g.settingsGet("TrashFolder") + g.settingsGet("ArchiveFolder") + g.settingsGet("NullFolder") && (g.settingsSet("SentFolder", e.SystemFolders[m.ServerFolderType.SENT] || null), g.settingsSet("DraftFolder", e.SystemFolders[m.ServerFolderType.DRAFTS] || null), g.settingsSet("SpamFolder", e.SystemFolders[m.ServerFolderType.JUNK] || null), g.settingsSet("TrashFolder", e.SystemFolders[m.ServerFolderType.TRASH] || null), g.settingsSet("ArchiveFolder", e.SystemFolders[m.ServerFolderType.ALL] || null), t = !0), S.a.sentFolder(this.normalizeFolder(g.settingsGet("SentFolder"))), S.a.draftFolder(this.normalizeFolder(g.settingsGet("DraftFolder"))), S.a.spamFolder(this.normalizeFolder(g.settingsGet("SpamFolder"))), S.a.trashFolder(this.normalizeFolder(g.settingsGet("TrashFolder"))), S.a.archiveFolder(this.normalizeFolder(g.settingsGet("ArchiveFolder"))), t && O.a.saveSystemFolders(f.noop, {
                        SentFolder: S.a.sentFolder(),
                        DraftFolder: S.a.draftFolder(),
                        SpamFolder: S.a.spamFolder(),
                        TrashFolder: S.a.trashFolder(),
                        ArchiveFolder: S.a.archiveFolder(),
                        NullFolder: "NullFolder"
                    }), y.b(m.ClientSideKeyName.FoldersLashHash, e.FoldersHash)
                }
            }, t
        }(E)),
        j = n(7),
        N = n.n(j),
        R = n(16),
        I = n(6),
        L = n(29),
        _ = function(e) {
            function t() {
                i()(this, t);
                var n = r()(this, e.call(this));
                return n.foldersTimeout = 0, n
            }
            return c()(t, e), t.prototype.foldersReload = function(e) {
                return this.abort("Folders").postRequest("Folders", e).then(function(e) {
                    return F.foldersList(e.Result), F.foldersAdditionalParameters(e.Result), !0
                })
            }, t.prototype.foldersReloadWithTimeout = function(e) {
                var t = this;
                this.setTrigger(e, !0), u.a.clearTimeout(this.foldersTimeout), this.foldersTimeout = u.a.setTimeout(function() {
                    t.foldersReload(e)
                }, 500)
            }, t.prototype.folderDelete = function(e, t) {
                return this.postRequest("FolderDelete", t, {
                    Folder: e
                })
            }, t.prototype.folderCreate = function(e, t, n) {
                return this.postRequest("FolderCreate", n, {
                    Folder: e,
                    Parent: t
                })
            }, t.prototype.folderRename = function(e, t, n) {
                return this.postRequest("FolderRename", n, {
                    Folder: e,
                    NewFolderName: t
                })
            }, t.prototype.attachmentsActions = function(e, t, n) {
                return this.postRequest("AttachmentsActions", n, {
                    Do: e,
                    Hashes: t
                })
            }, t.prototype.welcomeClose = function() {
                return this.postRequest("WelcomeClose")
            }, t
        }(function(e) {
            function t() {
                i()(this, t);
                var n = r()(this, e.call(this));
                return n.oRequests = {}, n.clear(), n
            }
            return c()(t, e), t.prototype.clear = function() {
                this.oRequests = {}
            }, t.prototype.abort = function(e, t) {
                return this.oRequests[e] && (!t && this.oRequests[e].abort && (this.oRequests[e].__aborted__ = !0, this.oRequests[e].abort()), this.oRequests[e] = null, delete this.oRequests[e]), this
            }, t.prototype.ajaxRequest = function(e, t, n, o, i, a) {
                var r = this;
                return new u.a.Promise(function(s, c) {
                    var l = Object(f.microtime)();
                    n = Object(f.isNormal)(n) ? n : h.g, i = Object(f.isUnd)(i) ? "" : Object(f.pString)(i), t && (o.XToken = g.appSettingsGet("token")), L.f("ajax-default-request", [e, o, i]), r.setTrigger(a, !0);
                    var u = N.a.ajax({
                        type: t ? "POST" : "GET",
                        url: Object(R.a)(i),
                        async: !0,
                        dataType: "json",
                        data: t && o || {},
                        timeout: n,
                        global: !0
                    }).always(function(t, n) {
                        var i = !1,
                            u = null;
                        t && t.Time && (i = Object(f.pInt)(t.Time) > Object(f.microtime)() - l);
                        var d = "";
                        switch (!0) {
                            case "success" === n && t && t.Result && e === t.Action:
                                d = m.StorageResultType.Success;
                                break;
                            case !("abort" !== n || t && t.__aborted__):
                                d = m.StorageResultType.Abort;
                                break;
                            default:
                                d = m.StorageResultType.Error
                        }
                        L.f("ajax-default-response", [e, m.StorageResultType.Success === d ? t : null, d, i, o]), "success" === n ? t && t.Result && e === t.Action ? (t.__cached__ = i, s(t)) : t && t.Action ? (u = t, c(t.ErrorCode ? t.ErrorCode : m.Notification.AjaxFalse)) : (u = t, c(m.Notification.AjaxParse)) : "timeout" === n ? (u = t, c(m.Notification.AjaxTimeout)) : "abort" === n ? t && t.__aborted__ || c(m.Notification.AjaxAbort) : (u = t, c(m.Notification.AjaxParse)), r.oRequests[e] && (r.oRequests[e] = null, delete r.oRequests[e]), r.setTrigger(a, !1), u && (-1 < Object(f.inArray)(u.ErrorCode, [m.Notification.AuthError, m.Notification.AccessError, m.Notification.ConnectionError, m.Notification.DomainNotAllowed, m.Notification.AccountNotAllowed, m.Notification.MailServerError, m.Notification.UnknownNotification, m.Notification.UnknownError]) && (I.data.iAjaxErrorCount += 1), m.Notification.InvalidToken === u.ErrorCode && (I.data.iTokenErrorCount += 1), h.q < I.data.iTokenErrorCount && I.data.__APP__ && I.data.__APP__.loginAndLogoutReload && I.data.__APP__.loginAndLogoutReload(!1, !0), (u.ClearAuth || u.Logout || h.a < I.data.iAjaxErrorCount) && (I.data.__APP__ && I.data.__APP__.clearClientSideToken && I.data.__APP__.clearClientSideToken(), I.data.__APP__ && !u.ClearAuth && I.data.__APP__.loginAndLogoutReload && I.data.__APP__.loginAndLogoutReload(!1, !0)))
                    });
                    u && (r.oRequests[e] && (r.oRequests[e] = null, delete r.oRequests[e]), r.oRequests[e] = u)
                })
            }, t.prototype.getRequest = function(e, t, n, o) {
                return n = e + "/" + (n = Object(f.isUnd)(n) ? "" : Object(f.pString)(n)), this.ajaxRequest(e, !1, o, null, n, t)
            }, t.prototype.postRequest = function(e, t, n, o) {
                return (n = n || {}).Action = e, this.ajaxRequest(e, !0, o, n, "", t)
            }, t
        }(E));
    t.a = new _
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t, n) {
    var o = n(49),
        i = n(64);
    e.exports = n(42) ? function(e, t, n) {
        return o.f(e, t, i(1, n))
    } : function(e, t, n) {
        return e[t] = n, e
    }
}, function(e, t) {
    e.exports = window.moment
}, function(e, t) {
    e.exports = window.progressJs
}, function(e, t, n) {
    "use strict";
    var o = n(8),
        i = n.n(o),
        a = n(4),
        r = n.n(a),
        s = n(1);
    t.a = new function e() {
        var t = this;
        i()(this, e), this.identities = s.a.observableArray([]), this.identities.loading = s.a.observable(!1).extend({
            throttle: 100
        }), this.identitiesIDS = s.a.computed(function() {
            return r.a.compact(r.a.map(t.identities(), function(e) {
                return e ? e.id : null
            }))
        })
    }
}, function(e, t, n) {
    "use strict";
    var o = n(8),
        i = n.n(o),
        a = n(1),
        r = n(0),
        s = n(5),
        c = function() {
            function e() {
                i()(this, e), this.contacts = a.a.observableArray([]), this.contacts.loading = a.a.observable(!1).extend({
                    throttle: r.Magics.Time200ms
                }), this.contacts.importing = a.a.observable(!1).extend({
                    throttle: r.Magics.Time200ms
                }), this.contacts.syncing = a.a.observable(!1).extend({
                    throttle: r.Magics.Time200ms
                }), this.contacts.exportingVcf = a.a.observable(!1).extend({
                    throttle: r.Magics.Time200ms
                }), this.contacts.exportingCsv = a.a.observable(!1).extend({
                    throttle: r.Magics.Time200ms
                }), this.allowContactsSync = a.a.observable(!1), this.enableContactsSync = a.a.observable(!1), this.contactsSyncUrl = a.a.observable(""), this.contactsSyncUser = a.a.observable(""), this.contactsSyncPass = a.a.observable("")
            }
            return e.prototype.populate = function() {
                this.allowContactsSync(!!s.settingsGet("ContactsSyncIsAllowed")), this.enableContactsSync(!!s.settingsGet("EnableContactsSync")), this.contactsSyncUrl(s.settingsGet("ContactsSyncUrl")), this.contactsSyncUser(s.settingsGet("ContactsSyncUser")), this.contactsSyncPass(s.settingsGet("ContactsSyncPassword"))
            }, e
        }();
    t.a = new c
}, function(e, t, n) {
    var o = n(41),
        i = n(40),
        a = n(94),
        r = n(53),
        s = function(e, t, n) {
            var c, l, u, d = e & s.F,
                p = e & s.G,
                h = e & s.S,
                f = e & s.P,
                m = e & s.B,
                b = e & s.W,
                g = p ? i : i[t] || (i[t] = {}),
                y = g.prototype,
                v = p ? o : h ? o[t] : (o[t] || {}).prototype;
            for (c in p && (n = t), n)(l = !d && v && void 0 !== v[c]) && c in g || (u = l ? v[c] : n[c], g[c] = p && "function" != typeof v[c] ? n[c] : m && l ? a(u, o) : b && v[c] == u ? function(e) {
                var t = function(t, n, o) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, o)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype, t
            }(u) : f && "function" == typeof u ? a(Function.call, u) : u, f && ((g.virtual || (g.virtual = {}))[c] = u, e & s.R && y && !y[c] && r(y, c, u)))
        };
    s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s
}, function(e, t, n) {
    "use strict";

    function o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!a.a.Promise || !a.a.Promise.all) throw new Error("Promises are not available your environment.");
        if (!e) throw new Error("src should not be empty.");
        return new a.a.Promise(function(n, o) {
            var i = a.a.document.createElement("script");
            i.onload = function() {
                n(e)
            }, i.onerror = function() {
                o(new Error(e))
            }, i.async = !0 === t, i.src = e, a.a.document.body.appendChild(i)
        })
    }
    n.d(t, "a", function() {
        return o
    });
    var i = n(3),
        a = n.n(i)
}, function(e, t, n) {
    var o = n(85)("wks"),
        i = n(70),
        a = n(41).Symbol,
        r = "function" == typeof a;
    (e.exports = function(e) {
        return o[e] || (o[e] = r && a[e] || (r ? a : i)("Symbol." + e))
    }).store = o
}, function(e, t, n) {
    var o = n(52);
    e.exports = function(e) {
        if (!o(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t, n) {
    "use strict";
    var o = n(8),
        i = n.n(o),
        a = n(3),
        r = n.n(a),
        s = n(1),
        c = n(0),
        l = n(22),
        u = n(45),
        d = n(5),
        p = function() {
            function e() {
                var t = this;
                i()(this, e), this.enableSoundNotification = s.a.observable(!1), this.soundNotificationIsSupported = s.a.observable(!1), this.allowDesktopNotification = s.a.observable(!1), this.desktopNotificationPermissions = s.a.computed(function() {
                    t.allowDesktopNotification();
                    var e = c.DesktopNotification.NotSupported,
                        n = t.notificationClass();
                    if (n && n.permission) switch (n.permission.toLowerCase()) {
                        case "granted":
                            e = c.DesktopNotification.Allowed;
                            break;
                        case "denied":
                            e = c.DesktopNotification.Denied;
                            break;
                        case "default":
                            e = c.DesktopNotification.NotAllowed
                    } else r.a.webkitNotifications && r.a.webkitNotifications.checkPermission && (e = r.a.webkitNotifications.checkPermission());
                    return e
                }).extend({
                    notify: "always"
                }), this.enableDesktopNotification = s.a.computed({
                    read: function() {
                        return t.allowDesktopNotification() && c.DesktopNotification.Allowed === t.desktopNotificationPermissions()
                    },
                    write: function(e) {
                        if (e) {
                            var n = t.notificationClass(),
                                o = t.desktopNotificationPermissions();
                            n && c.DesktopNotification.Allowed === o ? t.allowDesktopNotification(!0) : n && c.DesktopNotification.NotAllowed === o ? n.requestPermission(function() {
                                t.allowDesktopNotification.valueHasMutated(), c.DesktopNotification.Allowed === t.desktopNotificationPermissions() ? t.allowDesktopNotification() ? t.allowDesktopNotification.valueHasMutated() : t.allowDesktopNotification(!0) : t.allowDesktopNotification() ? t.allowDesktopNotification(!1) : t.allowDesktopNotification.valueHasMutated()
                            }) : t.allowDesktopNotification(!1)
                        } else t.allowDesktopNotification(!1)
                    }
                }).extend({
                    notify: "always"
                }), this.enableDesktopNotification.valueHasMutated || (this.enableDesktopNotification.valueHasMutated = function() {
                    t.allowDesktopNotification.valueHasMutated()
                }), this.computers(), this.initNotificationPlayer()
            }
            return e.prototype.computers = function() {
                var e = this;
                this.isDesktopNotificationSupported = s.a.computed(function() {
                    return c.DesktopNotification.NotSupported !== e.desktopNotificationPermissions()
                }), this.isDesktopNotificationDenied = s.a.computed(function() {
                    return c.DesktopNotification.NotSupported === e.desktopNotificationPermissions() || c.DesktopNotification.Denied === e.desktopNotificationPermissions()
                })
            }, e.prototype.initNotificationPlayer = function() {
                u.a && u.a.supportedNotification ? this.soundNotificationIsSupported(!0) : (this.enableSoundNotification(!1), this.soundNotificationIsSupported(!1))
            }, e.prototype.playSoundNotification = function(e) {
                u.a && u.a.supportedNotification && (e || this.enableSoundNotification()) && u.a.playNotification()
            }, e.prototype.displayDesktopNotification = function(e, t, n, o) {
                if (this.enableDesktopNotification()) {
                    var i = this.notificationClass(),
                        a = i ? new i(t, {
                            body: n,
                            icon: e
                        }) : null;
                    a && (a.show && a.show(), o && (a.onclick = function() {
                        r.a.focus(), o.Folder && o.Uid && l.a("mailbox.message.show", [o.Folder, o.Uid])
                    }), r.a.setTimeout((s = a, function() {
                        s.cancel ? s.cancel() : s.close && s.close()
                    }), c.Magics.Time7s))
                }
                var s
            }, e.prototype.populate = function() {
                this.enableSoundNotification(!!d.settingsGet("SoundNotification")), this.enableDesktopNotification(!!d.settingsGet("DesktopNotifications"))
            }, e.prototype.notificationClass = function() {
                return r.a.Notification && r.a.Notification.requestPermission ? r.a.Notification : null
            }, e
        }();
    t.a = new p
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o, i) {
        var a = {};
        return Object.keys(o).forEach(function(e) {
            a[e] = o[e]
        }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function(n, o) {
            return o(e, t, n) || n
        }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
    }
    n.r(t);
    var i, a, r, s, c, l, u, d, p, h, f = n(18),
        m = n.n(f),
        b = n(8),
        g = n.n(b),
        y = n(12),
        v = n.n(y),
        S = n(11),
        O = n.n(S),
        w = n(3),
        T = n.n(w),
        C = n(4),
        A = n.n(C),
        E = n(7),
        F = n.n(E),
        j = n(1),
        N = n(19),
        R = n.n(N),
        I = n(78),
        L = n.n(I),
        _ = n(0),
        P = n(2),
        D = n(23),
        M = n(6),
        k = n(16),
        x = n(10),
        U = n(34),
        H = n(15),
        B = n(95),
        G = n(26),
        K = n(28),
        V = n(56),
        z = n(31),
        q = n(13),
        W = n(30),
        Y = n(14),
        $ = n(25),
        J = n(17),
        X = n(5),
        Z = n(22),
        Q = n(79),
        ee = function(e) {
            function t(n, o) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
                    c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "";
                g()(this, t);
                var l = v()(this, e.call(this, "ComposeAttachmentModel"));
                return l.id = n, l.isInline = !!a, l.isLinked = !!r, l.CID = s, l.contentLocation = c, l.fromMessage = !1, l.fileName = j.a.observable(o), l.size = j.a.observable(i), l.tempName = j.a.observable(""), l.progress = j.a.observable(0), l.error = j.a.observable(""), l.waiting = j.a.observable(!0), l.uploading = j.a.observable(!1), l.enabled = j.a.observable(!0), l.complete = j.a.observable(!1), l.progressText = j.a.computed(function() {
                    var e = l.progress();
                    return 0 === e ? "" : (98 < e ? 100 : e) + "%"
                }), l.progressStyle = j.a.computed(function() {
                    var e = l.progress();
                    return 0 === e ? "" : "width:" + (98 < e ? 100 : e) + "%"
                }), l.title = j.a.computed(function() {
                    var e = l.error();
                    return "" !== e ? e : l.fileName()
                }), l.friendlySize = j.a.computed(function() {
                    var e = l.size();
                    return null === e ? "" : Object(P.friendlySize)(e)
                }), l.mimeType = j.a.computed(function() {
                    return Object(P.mimeContentType)(l.fileName())
                }), l.fileExt = j.a.computed(function() {
                    return Object(P.getFileExtension)(l.fileName())
                }), l.regDisposables([l.progressText, l.progressStyle, l.title, l.friendlySize, l.mimeType, l.fileExt]), l
            }
            return O()(t, e), t.prototype.initByUploadJson = function(e) {
                var t = !1;
                return e && (this.fileName(e.Name), this.size(Object(P.isUnd)(e.Size) ? 0 : Object(P.pInt)(e.Size)), this.tempName(Object(P.isUnd)(e.TempName) ? "" : e.TempName), this.isInline = !1, t = !0), t
            }, t.prototype.iconClass = function() {
                return Object(Q.d)(Object(Q.c)(this.fileExt(), this.mimeType()))[0]
            }, t.prototype.iconText = function() {
                return Object(Q.d)(Object(Q.c)(this.fileExt(), this.mimeType()))[1]
            }, t
        }(n(36).a),
        te = n(20),
        ne = n(9),
        oe = n(24);
    n.d(t, "ComposePopupView", function() {
        return ie
    }), n.d(t, "default", function() {
        return ie
    });
    var ie = (i = Object(ne.popup)({
        name: "View/Popup/Compose",
        templateID: "PopupsCompose"
    }), a = Object(ne.command)(function(e) {
        return e.canBeSentOrSaved()
    }), r = Object(ne.command)(function(e) {
        return e.canBeSentOrSaved()
    }), s = Object(ne.command)(function(e) {
        return e.isDraftFolderMessage()
    }), c = Object(ne.command)(function(e) {
        return e.canBeSentOrSaved()
    }), l = Object(ne.command)(function(e) {
        return e.allowContacts
    }), u = Object(ne.command)(function(e) {
        return e.dropboxEnabled()
    }), d = Object(ne.command)(function(e) {
        return e.driveEnabled()
    }), i((o((h = function(e) {
        function t() {
            g()(this, t);
            var n = v()(this, e.call(this)),
                o = function(e, t, n, o) {
                    if (t && e && t[n]() && (o || e[n]())) {
                        var i = t[n](),
                            a = Object(P.trim)(e[n]()).split(/[,]/);
                        a = A.a.filter(a, function(e) {
                            return (e = Object(P.trim)(e)) && Object(P.trim)(i) !== e
                        }), o && a.push(i), e[n](a.join(","))
                    }
                };
            return n.oLastMessage = null, n.oEditor = null, n.aDraftInfo = null, n.sInReplyTo = "", n.bFromDraft = !1, n.sReferences = "", n.sLastFocusedField = "to", n.resizerTrigger = A.a.bind(n.resizerTrigger, n), n.allowContacts = !!G.a.contactsIsAllowed(), n.allowFolders = !!X.capa(_.Capa.Folders), n.bSkipNextHide = !1, n.composeInEdit = G.a.composeInEdit, n.editorDefaultType = K.a.editorDefaultType, n.capaOpenPGP = W.a.capaOpenPGP, n.identitiesDropdownTrigger = j.a.observable(!1), n.to = j.a.observable(""), n.to.focused = j.a.observable(!1), n.cc = j.a.observable(""), n.cc.focused = j.a.observable(!1), n.bcc = j.a.observable(""), n.bcc.focused = j.a.observable(!1), n.replyTo = j.a.observable(""), n.replyTo.focused = j.a.observable(!1), j.a.computed(function() {
                switch (!0) {
                    case n.to.focused():
                        n.sLastFocusedField = "to";
                        break;
                    case n.cc.focused():
                        n.sLastFocusedField = "cc";
                        break;
                    case n.bcc.focused():
                        n.sLastFocusedField = "bcc"
                }
            }).extend({
                notify: "always"
            }), n.subject = j.a.observable(""), n.subject.focused = j.a.observable(!1), n.isHtml = j.a.observable(!1), n.requestDsn = j.a.observable(!1), n.requestReadReceipt = j.a.observable(!1), n.markAsImportant = j.a.observable(!1), n.sendError = j.a.observable(!1), n.sendSuccessButSaveError = j.a.observable(!1), n.savedError = j.a.observable(!1), n.sendButtonSuccess = j.a.computed(function() {
                return !n.sendError() && !n.sendSuccessButSaveError()
            }), n.sendErrorDesc = j.a.observable(""), n.savedErrorDesc = j.a.observable(""), n.sendError.subscribe(function(e) {
                e || n.sendErrorDesc("")
            }), n.savedError.subscribe(function(e) {
                e || n.savedErrorDesc("")
            }), n.sendSuccessButSaveError.subscribe(function(e) {
                e || n.savedErrorDesc("")
            }), n.savedTime = j.a.observable(0), n.savedTimeText = j.a.computed(function() {
                return 0 < n.savedTime() ? Object(x.i18n)("COMPOSE/SAVED_TIME", {
                    TIME: Object(U.format)(n.savedTime() - 1, "LT")
                }) : ""
            }), n.emptyToError = j.a.observable(!1), n.emptyToErrorTooltip = j.a.computed(function() {
                return n.emptyToError() ? Object(x.i18n)("COMPOSE/EMPTY_TO_ERROR_DESC") : ""
            }), n.attachmentsInProcessError = j.a.observable(!1), n.attachmentsInErrorError = j.a.observable(!1), n.attachmentsErrorTooltip = j.a.computed(function() {
                var e = "";
                switch (!0) {
                    case n.attachmentsInProcessError():
                        e = Object(x.i18n)("COMPOSE/ATTACHMENTS_UPLOAD_ERROR_DESC");
                        break;
                    case n.attachmentsInErrorError():
                        e = Object(x.i18n)("COMPOSE/ATTACHMENTS_ERROR_DESC")
                }
                return e
            }), n.showCc = j.a.observable(!1), n.showBcc = j.a.observable(!1), n.showReplyTo = j.a.observable(!1), n.cc.subscribe(function(e) {
                !1 === n.showCc() && 0 < e.length && n.showCc(!0)
            }), n.bcc.subscribe(function(e) {
                !1 === n.showBcc() && 0 < e.length && n.showBcc(!0)
            }), n.replyTo.subscribe(function(e) {
                !1 === n.showReplyTo() && 0 < e.length && n.showReplyTo(!0)
            }), n.draftFolder = j.a.observable(""), n.draftUid = j.a.observable(""), n.sending = j.a.observable(!1), n.saving = j.a.observable(!1), n.attachments = j.a.observableArray([]), n.attachmentsInProcess = n.attachments.filter(function(e) {
                return e && !e.complete()
            }), n.attachmentsInReady = n.attachments.filter(function(e) {
                return e && e.complete()
            }), n.attachmentsInError = n.attachments.filter(function(e) {
                return e && "" !== e.error()
            }), n.attachmentsCount = j.a.computed(function() {
                return n.attachments().length
            }), n.attachmentsInErrorCount = j.a.computed(function() {
                return n.attachmentsInError().length
            }), n.attachmentsInProcessCount = j.a.computed(function() {
                return n.attachmentsInProcess().length
            }), n.isDraftFolderMessage = j.a.computed(function() {
                return "" !== n.draftFolder() && "" !== n.draftUid()
            }), n.attachmentsPlace = j.a.observable(!1), n.attachments.subscribe(n.resizerTrigger), n.attachmentsPlace.subscribe(n.resizerTrigger), n.attachmentsInErrorCount.subscribe(function(e) {
                0 === e && n.attachmentsInErrorError(!1)
            }), n.composeUploaderButton = j.a.observable(null), n.composeUploaderDropPlace = j.a.observable(null), n.dragAndDropEnabled = j.a.observable(!1), n.dragAndDropOver = j.a.observable(!1).extend({
                throttle: 1
            }), n.dragAndDropVisible = j.a.observable(!1).extend({
                throttle: 1
            }), n.attacheMultipleAllowed = j.a.observable(!1), n.addAttachmentEnabled = j.a.observable(!1), n.composeEditorArea = j.a.observable(null), n.identities = V.a.identities, n.identitiesOptions = j.a.computed(function() {
                return A.a.map(V.a.identities(), function(e) {
                    return {
                        item: e,
                        optValue: e.id(),
                        optText: e.formattedName()
                    }
                })
            }), n.currentIdentity = j.a.observable(n.identities()[0] ? n.identities()[0] : null), n.currentIdentity.extend({
                toggleSubscribe: [n, function(e) {
                    o(n, e, "bcc"), o(n, e, "replyTo")
                }, function(e) {
                    o(n, e, "bcc", !0), o(n, e, "replyTo", !0)
                }]
            }), n.currentIdentityView = j.a.computed(function() {
                var e = n.currentIdentity();
                return e ? e.formattedName() : "unknown"
            }), n.to.subscribe(function(e) {
                n.emptyToError() && 0 < e.length && n.emptyToError(!1)
            }), n.attachmentsInProcess.subscribe(function(e) {
                n.attachmentsInProcessError() && Object(P.isArray)(e) && 0 === e.length && n.attachmentsInProcessError(!1)
            }), n.resizer = j.a.observable(!1).extend({
                throttle: 50
            }), n.resizer.subscribe(function() {
                n.oEditor && n.oEditor.resize()
            }), n.canBeSentOrSaved = j.a.computed(function() {
                return !n.sending() && !n.saving()
            }), n.sendMessageResponse = A.a.bind(n.sendMessageResponse, n), n.saveMessageResponse = A.a.bind(n.saveMessageResponse, n), Z.b("interval.2m", function() {
                !n.modalVisibility() || q.a.draftFolderNotEnabled() || !K.a.allowDraftAutosave() || n.isEmptyForm(!1) || n.saving() || n.sending() || n.savedError() || n.saveCommand()
            }), n.showCc.subscribe(n.resizerTrigger), n.showBcc.subscribe(n.resizerTrigger), n.showReplyTo.subscribe(n.resizerTrigger), n.dropboxEnabled = $.a.dropbox.enabled, n.dropboxApiKey = $.a.dropbox.apiKey, n.driveEnabled = j.a.observable(M.bXMLHttpRequestSupported && !!X.settingsGet("AllowGoogleSocial") && !!X.settingsGet("AllowGoogleSocialDrive") && !!X.settingsGet("GoogleClientID") && !!X.settingsGet("GoogleApiKey")), n.driveVisible = j.a.observable(!1), n.driveCallback = A.a.bind(n.driveCallback, n), n.onMessageUploadAttachments = A.a.bind(n.onMessageUploadAttachments, n), n.bDisabeCloseOnEsc = !0, n.sDefaultKeyScope = _.KeyState.Compose, n.tryToClosePopup = A.a.debounce(A.a.bind(n.tryToClosePopup, n), _.Magics.Time200ms), n.emailsSource = A.a.bind(n.emailsSource, n), n.autosaveFunction = A.a.bind(n.autosaveFunction, n), n.iTimer = 0, n
        }
        return O()(t, e), t.prototype.sendCommand = function() {
            var e = Object(P.trim)(this.to()),
                t = Object(P.trim)(this.cc()),
                o = Object(P.trim)(this.bcc()),
                i = q.a.sentFolder();
            if (this.attachmentsInProcessError(!1), this.attachmentsInErrorError(!1), this.emptyToError(!1), 0 < this.attachmentsInProcess().length ? (this.attachmentsInProcessError(!0), this.attachmentsPlace(!0)) : 0 < this.attachmentsInError().length && (this.attachmentsInErrorError(!0), this.attachmentsPlace(!0)), "" === e && "" === t && "" === o && this.emptyToError(!0), !this.emptyToError() && !this.attachmentsInErrorError() && !this.attachmentsInProcessError())
                if (K.a.replySameFolder() && Object(P.isArray)(this.aDraftInfo) && 3 === this.aDraftInfo.length && Object(P.isNormal)(this.aDraftInfo[2]) && 0 < this.aDraftInfo[2].length && (i = this.aDraftInfo[2]), this.allowFolders || (i = D.r), "" === i) Object(ne.showScreenPopup)(n(118), [_.SetSystemFoldersNotification.Sent]);
                else {
                    if (this.sendError(!1), this.sending(!0), Object(P.isArray)(this.aDraftInfo) && 3 === this.aDraftInfo.length) {
                        var a = Object(H.j)(this.aDraftInfo[2], this.aDraftInfo[1]);
                        a && ("forward" === this.aDraftInfo[0] ? a[3] = !0 : a[2] = !0, Object(H.t)(this.aDraftInfo[2], this.aDraftInfo[1], a), Object(te.a)().reloadFlagsCurrentMessageListAndMessageFromCache(), Object(H.q)(this.aDraftInfo[2], ""))
                    }
                    i = D.r === i ? "" : i, Object(H.q)(this.draftFolder(), ""), Object(H.q)(i, ""), J.a.sendMessage(this.sendMessageResponse, this.currentIdentity() ? this.currentIdentity().id() : "", this.draftFolder(), this.draftUid(), i, e, this.cc(), this.bcc(), this.replyTo(), this.subject(), !!this.oEditor && this.oEditor.isHtml(), this.oEditor ? this.oEditor.getData(!0) : "", this.prepearAttachmentsForSendOrSave(), this.aDraftInfo, this.sInReplyTo, this.sReferences, this.requestDsn(), this.requestReadReceipt(), this.markAsImportant())
                }
        }, t.prototype.saveCommand = function() {
            return !!this.allowFolders && (q.a.draftFolderNotEnabled() ? Object(ne.showScreenPopup)(n(118), [_.SetSystemFoldersNotification.Draft]) : (this.savedError(!1), this.saving(!0), this.autosaveStart(), Object(H.q)(q.a.draftFolder(), ""), J.a.saveMessage(this.saveMessageResponse, this.currentIdentity() ? this.currentIdentity().id() : "", this.draftFolder(), this.draftUid(), q.a.draftFolder(), this.to(), this.cc(), this.bcc(), this.replyTo(), this.subject(), !!this.oEditor && this.oEditor.isHtml(), this.oEditor ? this.oEditor.getData(!0) : "", this.prepearAttachmentsForSendOrSave(), this.aDraftInfo, this.sInReplyTo, this.sReferences, this.markAsImportant())), !0)
        }, t.prototype.deleteCommand = function() {
            var e = this,
                o = n(99);
            !Object(ne.isPopupVisible)(o) && this.modalVisibility() && Object(ne.showScreenPopup)(o, [Object(x.i18n)("POPUPS_ASK/DESC_WANT_DELETE_MESSAGES"), function() {
                e.modalVisibility() && (Object(te.a)().deleteMessagesFromFolderWithoutCheck(e.draftFolder(), [e.draftUid()]), Object(ne.hideScreenPopup)(t))
            }])
        }, t.prototype.skipCommand = function() {
            this.bSkipNextHide = !0, !this.modalVisibility() || this.saving() || this.sending() || q.a.draftFolderNotEnabled() || !K.a.allowDraftAutosave() || this.saveCommand(), this.tryToClosePopup()
        }, t.prototype.contactsCommand = function() {
            var e = this;
            this.allowContacts && (this.skipCommand(), A.a.delay(function() {
                Object(ne.showScreenPopup)(n(175), [!0, e.sLastFocusedField])
            }, _.Magics.Time200ms))
        }, t.prototype.dropboxCommand = function() {
            var e = this;
			/*
            return T.a.Dropbox && T.a.Dropbox.choose({
                success: function(t) {
                    t && t[0] && t[0].link && e.addDropboxAttachment(t[0])
                },
                linkType: "direct",
                multiselect: !1
            }), !0
			*/
			parent.OC.dialogs.RL_filepicker(
				parent.t('mail', 'Choose a File(s)/Folder for attachment'),
				function(path) {
					if (typeof callback === 'function') {
						callback();
					}
					
					A.a.each(path, function(p) {
						console.log(p)
						if(p.bytes > 26214400){
							//console.log('attach');
							var r = confirm("Attachments larger than 25MB, attached as a link !");
							if (r == true) {
								var a = jQuery('#cke_1_contents .cke_wysiwyg_div').find('table').length;
								var attachLink ='';
								var style = 'padding:5px 5px;border:1px solid #bbb8b8;background:#e4e4e4';
								if(a == 0){
									attachLink = '<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><table data-id="attachLink" style="width:100%;"><tr><td style="'+style+'"><a data-cke-saved-href="'+p.link+'" href="'+p.link+'"> '+p.name+'</a></td></tr></table>';
									jQuery('#cke_1_contents .cke_wysiwyg_div').prepend(attachLink);
								}
								else{
									attachLink = '<tr><td style="'+style+'"><a data-cke-saved-href="'+p.link+'" href="'+p.link+'"> '+p.name+'</a></td></tr>';
									jQuery('#cke_1_contents .cke_wysiwyg_div table').append(attachLink);
								}
							}
							
							//e.addDropboxAttachment(p);
						}
						else{
							e.addDropboxAttachment(p);
						}
					})
				},
				true,
				false,
				true
			);
        }, t.prototype.driveCommand = function() {
			 var e = this;
            //return this.driveOpenPopup(), !0
			parent.OC.dialogs.RL_filepicker(
				parent.t('mail', 'Choose a Folder for attachment'),
				function(path) {
					if (typeof callback === 'function') {
						callback();
					}
					var r = confirm("Directory attached as a link !");
					if (r == true) {
						//console.log(path);
						var a = jQuery('#cke_1_contents .cke_wysiwyg_div').find('table').length;
						var attachLink ='';
						var style = 'padding:5px 5px;border:1px solid #bbb8b8;background:#e4e4e4';
						if(a == 0){
							attachLink = '<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><table data-id="attachLink" style="width:100%;"><tr><td style="'+style+'"><a data-cke-saved-href="'+path.link+'" href="'+path.link+'"> '+path.name+'</a></td></tr></table>';
							jQuery('#cke_1_contents .cke_wysiwyg_div').prepend(attachLink);
						}
						else{
							attachLink = '<tr><td style="'+style+'"><a data-cke-saved-href="'+path.link+'" href="'+path.link+'"> '+path.name+'</a></td></tr>';
							jQuery('#cke_1_contents .cke_wysiwyg_div table').append(attachLink);
						}
					}
					//var s = e.addDropboxAttachment(path);
				},
				false,
				'httpd/unix-directory',
				false
			);
        }, t.prototype.autosaveFunction = function() {
            !this.modalVisibility() || q.a.draftFolderNotEnabled() || !K.a.allowDraftAutosave() || this.isEmptyForm(!1) || this.saving() || this.sending() || this.savedError() || this.saveCommand(), this.autosaveStart()
        }, t.prototype.autosaveStart = function() {
            T.a.clearTimeout(this.iTimer), this.iTimer = T.a.setTimeout(this.autosaveFunction, _.Magics.Time1m)
        }, t.prototype.autosaveStop = function() {
            T.a.clearTimeout(this.iTimer)
        }, t.prototype.emailsSource = function(e, t) {
            Object(te.a)().getAutocomplete(e.term, function(e) {
                t(A.a.map(e, function(e) {
                    return e.toLine(!1)
                }))
            })
        }, t.prototype.openOpenPgpPopup = function() {
            var e = this;
            W.a.capaOpenPGP() && this.oEditor && !this.oEditor.isHtml() && Object(ne.showScreenPopup)(n(199), [function(t) {
                e.editor(function(e) {
                    e.setPlain(t)
                })
            }, this.oEditor.getData(!1), this.currentIdentity(), this.to(), this.cc(), this.bcc()])
        }, t.prototype.reloadDraftFolder = function() {
            var e = q.a.draftFolder();
            "" !== e && D.r !== e && (Object(H.q)(e, ""), q.a.currentFolderFullNameRaw() === e ? Object(te.a)().reloadMessageList(!0) : Object(te.a)().folderInformation(e))
        }, t.prototype.findIdentityByMessage = function(e, t) {
            var n = 1e3,
                o = null,
                i = V.a.identities(),
                a = {},
                r = function(e) {
                    e && e.email && a[e.email] && (!o || n > a[e.email][1]) && (o = a[e.email][0], n = a[e.email][1])
                };
            if (A.a.each(i, function(e, t) {
                    a[e.email()] = [e, t]
                }), t) switch (e) {
                case _.ComposeType.Empty:
                    break;
                case _.ComposeType.Reply:
                case _.ComposeType.ReplyAll:
                case _.ComposeType.Forward:
                case _.ComposeType.ForwardAsAttachment:
                    A.a.each(A.a.union(t.to, t.cc, t.bcc), r), o || A.a.each(t.deliveredTo, r);
                    break;
                case _.ComposeType.Draft:
                    A.a.each(A.a.union(t.from, t.replyTo), r)
            }
            return o || i[0] || null
        }, t.prototype.selectIdentity = function(e) {
            e && e.item && (this.currentIdentity(e.item), this.setSignatureFromIdentity(e.item))
        }, t.prototype.sendMessageResponse = function(e, t) {
            var n = !1,
                o = "";
            this.sending(!1), _.StorageResultType.Success === e && t && t.Result && (n = !0, this.modalVisibility() && Object(P.delegateRun)(this, "closeCommand")), this.modalVisibility() && !n && (t && _.Notification.CantSaveMessage === t.ErrorCode ? (this.sendSuccessButSaveError(!0), this.savedErrorDesc(Object(P.trim)(Object(x.i18n)("COMPOSE/SAVED_ERROR_ON_SEND")))) : (o = Object(x.getNotification)(t && t.ErrorCode ? t.ErrorCode : _.Notification.CantSendMessage, t && t.ErrorMessage ? t.ErrorMessage : ""), this.sendError(!0), this.sendErrorDesc(o || Object(x.getNotification)(_.Notification.CantSendMessage)))), this.reloadDraftFolder()
        }, t.prototype.saveMessageResponse = function(e, t) {
            var n = !1;
            if (this.saving(!1), _.StorageResultType.Success === e && t && t.Result && t.Result.NewFolder && t.Result.NewUid) {
                if (n = !0, this.bFromDraft) {
                    var o = Y.a.message();
                    o && this.draftFolder() === o.folderFullNameRaw && this.draftUid() === o.uid && Y.a.message(null)
                }
                this.draftFolder(t.Result.NewFolder), this.draftUid(t.Result.NewUid), this.savedTime(T.a.Math.round((new T.a.Date).getTime() / 1e3)), this.bFromDraft && Object(H.q)(this.draftFolder(), "")
            }
            n || (this.savedError(!0), this.savedErrorDesc(Object(x.getNotification)(_.Notification.CantSaveMessage))), this.reloadDraftFolder()
        }, t.prototype.onHide = function() {
            this.autosaveStop(), this.bSkipNextHide || (G.a.composeInEdit(!1), this.reset()), this.bSkipNextHide = !1, this.to.focused(!1), Object(ne.routeOn)()
        }, t.prototype.editor = function(e) {
            var t = this;
            e && (!this.oEditor && this.composeEditorArea() ? this.oEditor = new B.HtmlEditor(this.composeEditorArea(), null, function() {
                e(t.oEditor), t.resizerTrigger()
            }, function(e) {
                t.isHtml(!!e)
            }) : this.oEditor && (e(this.oEditor), this.resizerTrigger()))
        }, t.prototype.converSignature = function(e) {
            var t = 10,
                n = "",
                o = [],
                i = /{{MOMENT:([^}]+)}}/g;
            if (e = e.replace(/[\r]/g, ""), "" !== (n = this.oLastMessage ? this.emailArrayToStringLineHelper(this.oLastMessage.from, !0) : "") && (e = e.replace(/{{FROM-FULL}}/g, n), -1 === n.indexOf(" ") && 0 < n.indexOf("@") && (n = n.replace(/@[\S]+/, "")), e = e.replace(/{{FROM}}/g, n)), -1 < (e = (e = (e = (e = e.replace(/[\s]{1,2}{{FROM}}/g, "{{FROM}}")).replace(/[\s]{1,2}{{FROM-FULL}}/g, "{{FROM-FULL}}")).replace(/{{FROM}}/g, "")).replace(/{{FROM-FULL}}/g, "")).indexOf("{{DATE}}") && (e = e.replace(/{{DATE}}/g, Object(U.format)(0, "llll"))), -1 < e.indexOf("{{TIME}}") && (e = e.replace(/{{TIME}}/g, Object(U.format)(0, "LT"))), -1 < e.indexOf("{{MOMENT:")) try {
                for (var a = null; null !== (a = i.exec(e)) && (a && a[0] && a[1] && o.push([a[0], a[1]]), 0 != (t -= 1)););
                o && 0 < o.length && A.a.each(o, function(t) {
                    e = e.replace(t[0], Object(U.format)(0, t[1]))
                }), e = e.replace(/{{MOMENT:[^}]+}}/g, "")
            } catch (e) {}
            return e
        }, t.prototype.setSignatureFromIdentity = function(e) {
            var t = this;
            e && this.editor(function(n) {
                var o = !1,
                    i = e.signature();
                "" !== i && ":HTML:" === i.substr(0, 6) && (o = !0, i = i.substr(6)), n.setSignature(t.converSignature(i), o, !!e.signatureInsertBefore())
            })
        }, t.prototype.onShow = function(e, t, o, i, a, r, s) {
            var c = this;
            Object(ne.routeOff)(), this.autosaveStart(), G.a.composeInEdit() ? (e = e || _.ComposeType.Empty, _.ComposeType.Empty !== e ? Object(ne.showScreenPopup)(n(99), [Object(x.i18n)("COMPOSE/DISCARD_UNSAVED_DATA"), function() {
                c.initOnShow(e, t, o, i, a, r, s)
            }, null, null, null, !1]) : (this.addEmailsTo(this.to, o), this.addEmailsTo(this.cc, i), this.addEmailsTo(this.bcc, a), Object(P.isNormal)(r) && "" !== r && "" === this.subject() && this.subject(r))) : this.initOnShow(e, t, o, i, a, r, s)
        }, t.prototype.onWarmUp = function() {
            this.modalVisibility && !this.modalVisibility() && this.editor(function(e) {
                return e.modeToggle(!1)
            })
        }, t.prototype.addEmailsTo = function(e, t) {
            if (Object(P.isNonEmptyArray)(t)) {
                var n = Object(P.trim)(e()),
                    o = A.a.uniq(A.a.compact(A.a.map(t, function(e) {
                        return e ? e.toLine(!1) : null
                    })));
                e(n + ("" === n ? "" : ", ") + Object(P.trim)(o.join(", ")))
            }
        }, t.prototype.emailArrayToStringLineHelper = function(e, t) {
            return t = !!t, A.a.map(e, function(e) {
                return e.toLine(t)
            }).join(", ")
        }, t.prototype.initOnShow = function(e, t, n, o, i, a, r) {
            var s = this;
            G.a.composeInEdit(!0);
            var c = "",
                l = "",
                u = "",
                d = "",
                p = "",
                h = "",
                f = "",
                m = null,
                b = null,
                g = null,
                y = {},
                v = z.a.email(),
                S = e || _.ComposeType.Empty;
            if ((t = t || null) && Object(P.isNormal)(t) && (g = Object(P.isArray)(t) && 1 === t.length ? t[0] : Object(P.isArray)(t) ? null : t), this.oLastMessage = g, null !== v && (y[v] = !0), this.reset(), (m = this.findIdentityByMessage(S, g)) && (y[m.email()] = !0), Object(P.isNonEmptyArray)(n) && this.to(this.emailArrayToStringLineHelper(n)), Object(P.isNonEmptyArray)(o) && this.cc(this.emailArrayToStringLineHelper(o)), Object(P.isNonEmptyArray)(i) && this.bcc(this.emailArrayToStringLineHelper(i)), "" !== S && g) {
                d = Object(U.format)(g.dateTimeStampInUTC(), "FULL"), p = g.subject(), b = g.aDraftInfo;
                var O = F()(g.body).clone();
                O && (Object(P.clearBqSwitcher)(O), h = O.html());
                var w = null;
                switch (S) {
                    case _.ComposeType.Empty:
                        break;
                    case _.ComposeType.Reply:
                        this.to(this.emailArrayToStringLineHelper(g.replyEmails(y))), this.subject(Object(P.replySubjectAdd)("Re", p)), this.prepearMessageAttachments(g, S), this.aDraftInfo = ["reply", g.uid, g.folderFullNameRaw], this.sInReplyTo = g.sMessageId, this.sReferences = Object(P.trim)(this.sInReplyTo + " " + g.sReferences);
                        break;
                    case _.ComposeType.ReplyAll:
                        w = g.replyAllEmails(y), this.to(this.emailArrayToStringLineHelper(w[0])), this.cc(this.emailArrayToStringLineHelper(w[1])), this.subject(Object(P.replySubjectAdd)("Re", p)), this.prepearMessageAttachments(g, S), this.aDraftInfo = ["reply", g.uid, g.folderFullNameRaw], this.sInReplyTo = g.sMessageId, this.sReferences = Object(P.trim)(this.sInReplyTo + " " + g.references());
                        break;
                    case _.ComposeType.Forward:
                    case _.ComposeType.ForwardAsAttachment:
                        this.subject(Object(P.replySubjectAdd)("Fwd", p)), this.prepearMessageAttachments(g, S), this.aDraftInfo = ["forward", g.uid, g.folderFullNameRaw], this.sInReplyTo = g.sMessageId, this.sReferences = Object(P.trim)(this.sInReplyTo + " " + g.sReferences);
                        break;
                    case _.ComposeType.Draft:
                        this.to(this.emailArrayToStringLineHelper(g.to)), this.cc(this.emailArrayToStringLineHelper(g.cc)), this.bcc(this.emailArrayToStringLineHelper(g.bcc)), this.replyTo(this.emailArrayToStringLineHelper(g.replyTo)), this.bFromDraft = !0, this.draftFolder(g.folderFullNameRaw), this.draftUid(g.uid), this.subject(p), this.prepearMessageAttachments(g, S), this.aDraftInfo = Object(P.isNonEmptyArray)(b) && 3 === b.length ? b : null, this.sInReplyTo = g.sInReplyTo, this.sReferences = g.sReferences;
                        break;
                    case _.ComposeType.EditAsNew:
                        this.to(this.emailArrayToStringLineHelper(g.to)), this.cc(this.emailArrayToStringLineHelper(g.cc)), this.bcc(this.emailArrayToStringLineHelper(g.bcc)), this.replyTo(this.emailArrayToStringLineHelper(g.replyTo)), this.subject(p), this.prepearMessageAttachments(g, S), this.aDraftInfo = Object(P.isNonEmptyArray)(b) && 3 === b.length ? b : null, this.sInReplyTo = g.sInReplyTo, this.sReferences = g.sReferences
                }
                switch (S) {
                    case _.ComposeType.Reply:
                    case _.ComposeType.ReplyAll:
                        c = g.fromToLine(!1, !0), f = Object(x.i18n)("COMPOSE/REPLY_MESSAGE_TITLE", {
                            DATETIME: d,
                            EMAIL: c
                        }), h = "<br /><br />" + f + ":<br /><br /><blockquote>" + Object(P.trim)(h) + "</blockquote>";
                        break;
                    case _.ComposeType.Forward:
                        c = g.fromToLine(!1, !0), l = g.toToLine(!1, !0), u = g.ccToLine(!1, !0), h = "<br /><br />" + Object(x.i18n)("COMPOSE/FORWARD_MESSAGE_TOP_TITLE") + "<br />" + Object(x.i18n)("COMPOSE/FORWARD_MESSAGE_TOP_FROM") + ": " + c + "<br />" + Object(x.i18n)("COMPOSE/FORWARD_MESSAGE_TOP_TO") + ": " + l + (0 < u.length ? "<br />" + Object(x.i18n)("COMPOSE/FORWARD_MESSAGE_TOP_CC") + ": " + u : "") + "<br />" + Object(x.i18n)("COMPOSE/FORWARD_MESSAGE_TOP_SENT") + ": " + Object(P.encodeHtml)(d) + "<br />" + Object(x.i18n)("COMPOSE/FORWARD_MESSAGE_TOP_SUBJECT") + ": " + Object(P.encodeHtml)(p) + "<br /><br />" + Object(P.trim)(h) + "<br /><br />";
                        break;
                    case _.ComposeType.ForwardAsAttachment:
                        h = ""
                }
                this.editor(function(e) {
                    e.setHtml(h, !1), (_.EditorDefaultType.PlainForced === s.editorDefaultType() || !g.isHtml() && _.EditorDefaultType.HtmlForced !== s.editorDefaultType()) && e.modeToggle(!1), m && _.ComposeType.Draft !== S && _.ComposeType.EditAsNew !== S && s.setSignatureFromIdentity(m), s.setFocusInPopup()
                })
            } else _.ComposeType.Empty === S ? (this.subject(Object(P.isNormal)(a) ? "" + a : ""), h = Object(P.isNormal)(r) ? "" + r : "", this.editor(function(e) {
                e.setHtml(h, !1), _.EditorDefaultType.Html !== s.editorDefaultType() && _.EditorDefaultType.HtmlForced !== s.editorDefaultType() && e.modeToggle(!1), m && s.setSignatureFromIdentity(m), s.setFocusInPopup()
            })) : Object(P.isNonEmptyArray)(t) ? (A.a.each(t, function(e) {
                s.addMessageAsAttachment(e)
            }), this.editor(function(e) {
                e.setHtml("", !1), _.EditorDefaultType.Html !== s.editorDefaultType() && _.EditorDefaultType.HtmlForced !== s.editorDefaultType() && e.modeToggle(!1), m && _.ComposeType.Draft !== S && _.ComposeType.EditAsNew !== S && s.setSignatureFromIdentity(m), s.setFocusInPopup()
            })) : this.setFocusInPopup();
            var T = this.getAttachmentsDownloadsForUpload();
            Object(P.isNonEmptyArray)(T) && J.a.messageUploadAttachments(this.onMessageUploadAttachments, T), m && this.currentIdentity(m), this.resizerTrigger()
        }, t.prototype.onMessageUploadAttachments = function(e, t) {
            var n = this;
            _.StorageResultType.Success === e && t && t.Result ? this.viewModelVisibility() || A.a.each(t.Result, function(e, t) {
                var o = n.getAttachmentById(e);
                o && (o.tempName(t), o.waiting(!1).uploading(!1).complete(!0))
            }) : this.setMessageAttachmentFailedDownloadText()
        }, t.prototype.setFocusInPopup = function() {
            var e = this;
            M.bMobileDevice || A.a.delay(function() {
                "" === e.to() ? e.to.focused(!0) : e.oEditor && (e.to.focused() || e.oEditor.focus())
            }, _.Magics.Time100ms)
        }, t.prototype.onShowWithDelay = function() {
            this.resizerTrigger()
        }, t.prototype.tryToClosePopup = function() {
            var e = this,
                t = n(99);
            !Object(ne.isPopupVisible)(t) && this.modalVisibility() && (this.bSkipNextHide || this.isEmptyForm() && !this.draftUid() ? Object(P.delegateRun)(this, "closeCommand") : Object(ne.showScreenPopup)(t, [Object(x.i18n)("POPUPS_ASK/DESC_WANT_CLOSE_THIS_WINDOW"), function() {
                e.modalVisibility() && Object(P.delegateRun)(e, "closeCommand")
            }]))
        }, t.prototype.onBuild = function() {
            var e = this;
            this.initUploader(), R()("ctrl+q, command+q, ctrl+w, command+w", _.KeyState.Compose, P.noopFalse), R()("`", _.KeyState.Compose, function() {
                return !(e.oEditor && !e.oEditor.hasFocus() && !Object(P.inFocus)() && (e.identitiesDropdownTrigger(!0), 1))
            }), R()("ctrl+`", _.KeyState.Compose, function() {
                return e.identitiesDropdownTrigger(!0), !1
            }), R()("esc, ctrl+down, command+down", _.KeyState.Compose, function() {
                return e.skipCommand(), !1
            }), this.allowFolders && R()("ctrl+s, command+s", _.KeyState.Compose, function() {
                return e.saveCommand(), !1
            }), X.appSettingsGet("allowCtrlEnterOnCompose") && R()("ctrl+enter, command+enter", _.KeyState.Compose, function() {
                return e.sendCommand(), !1
            }), R()("shift+esc", _.KeyState.Compose, function() {
                return e.modalVisibility() && e.tryToClosePopup(), !1
            }), Z.b("window.resize.real", this.resizerTrigger), Z.b("window.resize.real", A.a.debounce(this.resizerTrigger, _.Magics.Time50ms)), $.a.appendDropbox(), this.driveEnabled() && F.a.getScript("https://apis.google.com/js/api.js", function() {
                T.a.gapi && e.driveVisible(!0)
            }), T.a.setInterval(function() {
                e.modalVisibility() && e.oEditor && e.oEditor.resize()
            }, _.Magics.Time5s)
        }, t.prototype.driveCallback = function(e, t) {
            var n = this;
            if (t && T.a.XMLHttpRequest && T.a.google && t[T.a.google.picker.Response.ACTION] === T.a.google.picker.Action.PICKED && t[T.a.google.picker.Response.DOCUMENTS] && t[T.a.google.picker.Response.DOCUMENTS][0] && t[T.a.google.picker.Response.DOCUMENTS][0].id) {
                var o = new T.a.XMLHttpRequest;
                o.open("GET", "https://www.googleapis.com/drive/v2/files/" + t[T.a.google.picker.Response.DOCUMENTS][0].id), o.setRequestHeader("Authorization", "Bearer " + e), o.addEventListener("load", function() {
                    if (o && o.responseText) {
                        var t = T.a.JSON.parse(o.responseText),
                            i = function(e, n, o) {
                                e && e.exportLinks && (e.exportLinks[n] ? (t.downloadUrl = e.exportLinks[n], t.title = e.title + "." + o, t.mimeType = n) : e.exportLinks["application/pdf"] && (t.downloadUrl = e.exportLinks["application/pdf"], t.title = e.title + ".pdf", t.mimeType = "application/pdf"))
                            };
                        if (t && !t.downloadUrl && t.mimeType && t.exportLinks) switch (t.mimeType.toString().toLowerCase()) {
                            case "application/vnd.google-apps.document":
                                i(t, "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "docx");
                                break;
                            case "application/vnd.google-apps.spreadsheet":
                                i(t, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "xlsx");
                                break;
                            case "application/vnd.google-apps.drawing":
                                i(t, "image/png", "png");
                                break;
                            case "application/vnd.google-apps.presentation":
                                i(t, "application/vnd.openxmlformats-officedocument.presentationml.presentation", "pptx");
                                break;
                            default:
                                i(t, "application/pdf", "pdf")
                        }
                        t && t.downloadUrl && n.addDriveAttachment(t, e)
                    }
                }), o.send()
            }
        }, t.prototype.driveCreatePiker = function(e) {
            var t = this;
            T.a.gapi && e && e.access_token && T.a.gapi.load("picker", {
                callback: function() {
                    T.a.google && T.a.google.picker && (new T.a.google.picker.PickerBuilder).addView(T.a.google.picker.ViewId.DOCS).setAppId(X.settingsGet("GoogleClientID")).setOAuthToken(e.access_token).setCallback(A.a.bind(t.driveCallback, t, e.access_token)).enableFeature(T.a.google.picker.Feature.NAV_HIDDEN).build().setVisible(!0)
                }
            })
        }, t.prototype.driveOpenPopup = function() {
            var e = this;
            T.a.gapi && T.a.gapi.load("auth", {
                callback: function() {
                    var t = T.a.gapi.auth.getToken(),
                        n = function(t) {
                            if (t && !t.error) {
                                var n = T.a.gapi.auth.getToken();
                                return n && e.driveCreatePiker(n), !0
                            }
                            return !1
                        };
                    t ? e.driveCreatePiker(t) : T.a.gapi.auth.authorize({
                        client_id: X.settingsGet("GoogleClientID"),
                        scope: "https://www.googleapis.com/auth/drive.readonly",
                        immediate: !0
                    }, function(e) {
                        n(e) || T.a.gapi.auth.authorize({
                            client_id: X.settingsGet("GoogleClientID"),
                            scope: "https://www.googleapis.com/auth/drive.readonly",
                            immediate: !1
                        }, n)
                    })
                }
            })
        }, t.prototype.getAttachmentById = function(e) {
            return A.a.find(this.attachments(), function(t) {
                return t && e === t.id
            })
        }, t.prototype.cancelAttachmentHelper = function(e, t) {
            var n = this;
            return function() {
                var o = A.a.find(n.attachments(), function(t) {
                    return t && t.id === e
                });
                o && (n.attachments.remove(o), Object(P.delegateRunOnDestroy)(o), t && t.cancel(e))
            }
        }, t.prototype.initUploader = function() {
            var e = this;
            if (this.composeUploaderButton()) {
                var t = {},
                    n = Object(P.pInt)(X.settingsGet("AttachmentLimit")),
                    o = new L.a({
                        action: Object(k.G)(),
                        name: "uploader",
                        queueSize: 2,
                        multipleSizeLimit: 50,
                        clickElement: this.composeUploaderButton(),
                        dragAndDropElement: this.composeUploaderDropPlace()
                    });
                o ? (o.on("onDragEnter", function() {
                    e.dragAndDropOver(!0)
                }).on("onDragLeave", function() {
                    e.dragAndDropOver(!1)
                }).on("onBodyDragEnter", function() {
                    e.attachmentsPlace(!0), e.dragAndDropVisible(!0)
                }).on("onBodyDragLeave", function() {
                    e.dragAndDropVisible(!1)
                }).on("onProgress", function(n, o, i) {
                    var a = t[n];
                    a || (a = e.getAttachmentById(n)) && (t[n] = a), a && a.progress(T.a.Math.floor(o / i * 100))
                }).on("onSelect", function(t, i) {
                    e.dragAndDropOver(!1);
                    var a = Object(P.isUnd)(i.FileName) ? "" : i.FileName.toString(),
                        r = Object(P.isNormal)(i.Size) ? Object(P.pInt)(i.Size) : null,
                        s = new ee(t, a, r);
                    return s.cancel = e.cancelAttachmentHelper(t, o), e.attachments.push(s), e.attachmentsPlace(!0), !(0 < r && 0 < n && n < r && (s.waiting(!1).uploading(!0).complete(!0).error(Object(x.i18n)("UPLOAD/ERROR_FILE_IS_TOO_BIG")), 1))
                }).on("onStart", function(n) {
                    var o = t[n];
                    o || (o = e.getAttachmentById(n)) && (t[n] = o), o && o.waiting(!1).uploading(!0).complete(!1)
                }).on("onComplete", function(n, o, i) {
                    var a = e.getAttachmentById(n),
                        r = i && i.Result && i.Result.ErrorCode ? i.Result.ErrorCode : null,
                        s = o && i && i.Result && i.Result.Attachment ? i.Result.Attachment : null,
                        c = "";
                    null !== r ? c = Object(x.getUploadErrorDescByCode)(r) : s || (c = Object(x.i18n)("UPLOAD/ERROR_UNKNOWN")), a && ("" !== c && 0 < c.length ? a.waiting(!1).uploading(!1).complete(!0).error(c) : s && (a.waiting(!1).uploading(!1).complete(!0), a.initByUploadJson(s)), Object(P.isUnd)(t[n]) && delete t[n])
                }), this.addAttachmentEnabled(!0).dragAndDropEnabled(o.isDragAndDropSupported())) : this.addAttachmentEnabled(!1).dragAndDropEnabled(!1)
            }
        }, t.prototype.prepearAttachmentsForSendOrSave = function() {
            var e = {};
            return A.a.each(this.attachmentsInReady(), function(t) {
                t && "" !== t.tempName() && t.enabled() && (e[t.tempName()] = [t.fileName(), t.isInline ? "1" : "0", t.CID, t.contentLocation])
            }), e
        }, t.prototype.addMessageAsAttachment = function(e) {
            if (e) {
                var t = e.subject();
                t = ".eml" === t.substr(-4).toLowerCase() ? t : t + ".eml";
                var n = new ee(e.requestHash, t, e.size());
                n.fromMessage = !0, n.cancel = this.cancelAttachmentHelper(e.requestHash), n.waiting(!1).uploading(!0).complete(!0), this.attachments.push(n)
            }
        }, t.prototype.addAttachmentHelper = function(e, t, n) {
			console.log('Test');
            var o = new ee(e, t, n);
            return o.fromMessage = !1, o.cancel = this.cancelAttachmentHelper(e), o.waiting(!1).uploading(!0).complete(!1), this.attachments.push(o), this.attachmentsPlace(!0), o
        }, t.prototype.addDropboxAttachment = function(e) {
            var t = Object(P.pInt)(X.settingsGet("AttachmentLimit")),
                n = e.bytes,
                o = this.addAttachmentHelper(e.link, e.name, n);
            return 0 < n && 0 < t && t < n ? (o.uploading(!1).complete(!0), o.error(Object(x.i18n)("UPLOAD/ERROR_FILE_IS_TOO_BIG")), !1) : (J.a.composeUploadExternals(function(e, t) {
                var n = !1;
                o.uploading(!1).complete(!0), _.StorageResultType.Success === e && t && t.Result && t.Result[o.id] && (n = !0, o.tempName(t.Result[o.id])), n || o.error(Object(x.getUploadErrorDescByCode)(_.UploadErrorCode.FileNoUploaded))
            }, [e.link]), !0)
        }, t.prototype.addDriveAttachment = function(e, t) {
            var n = Object(P.pInt)(X.settingsGet("AttachmentLimit")),
                o = e.fileSize ? Object(P.pInt)(e.fileSize) : 0,
                i = this.addAttachmentHelper(e.downloadUrl, e.title, o);
            return 0 < o && 0 < n && n < o ? (i.uploading(!1).complete(!0), i.error(Object(x.i18n)("UPLOAD/ERROR_FILE_IS_TOO_BIG")), !1) : (J.a.composeUploadDrive(function(e, t) {
                var n = !1;
                i.uploading(!1).complete(!0), _.StorageResultType.Success === e && t && t.Result && t.Result[i.id] && (n = !0, i.tempName(t.Result[i.id][0]), i.size(Object(P.pInt)(t.Result[i.id][1]))), n || i.error(Object(x.getUploadErrorDescByCode)(_.UploadErrorCode.FileNoUploaded))
            }, e.downloadUrl, t), !0)
        }, t.prototype.prepearMessageAttachments = function(e, t) {
            var n = this;
            if (e)
                if (_.ComposeType.ForwardAsAttachment === t) this.addMessageAsAttachment(e);
                else {
                    var o = e.attachments();
                    A.a.each(Object(P.isNonEmptyArray)(o) ? o : [], function(e) {
                        var o = !1;
                        switch (t) {
                            case _.ComposeType.Reply:
                            case _.ComposeType.ReplyAll:
                                o = e.isLinked;
                                break;
                            case _.ComposeType.Forward:
                            case _.ComposeType.Draft:
                            case _.ComposeType.EditAsNew:
                                o = !0
                        }
                        if (o) {
                            var i = new ee(e.download, e.fileName, e.estimatedSize, e.isInline, e.isLinked, e.cid, e.contentLocation);
                            i.fromMessage = !0, i.cancel = n.cancelAttachmentHelper(e.download), i.waiting(!1).uploading(!0).complete(!1), n.attachments.push(i)
                        }
                    })
                }
        }, t.prototype.removeLinkedAttachments = function() {
            var e = A.a.find(this.attachments(), function(e) {
                return e && e.isLinked
            });
            e && (this.attachments.remove(e), Object(P.delegateRunOnDestroy)(e))
        }, t.prototype.setMessageAttachmentFailedDownloadText = function() {
            A.a.each(this.attachments(), function(e) {
                e && e.fromMessage && e.waiting(!1).uploading(!1).complete(!0).error(Object(x.getUploadErrorDescByCode)(_.UploadErrorCode.FileNoUploaded))
            })
        }, t.prototype.isEmptyForm = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && !arguments[0] ? 0 === this.attachmentsInReady().length : 0 === this.attachments().length;
            return 0 === this.to().length && 0 === this.cc().length && 0 === this.bcc().length && 0 === this.replyTo().length && 0 === this.subject().length && e && (!this.oEditor || "" === this.oEditor.getData())
        }, t.prototype.reset = function() {
            this.to(""), this.cc(""), this.bcc(""), this.replyTo(""), this.subject(""), this.requestDsn(!1), this.requestReadReceipt(!1), this.markAsImportant(!1), this.attachmentsPlace(!1), this.aDraftInfo = null, this.sInReplyTo = "", this.bFromDraft = !1, this.sReferences = "", this.sendError(!1), this.sendSuccessButSaveError(!1), this.savedError(!1), this.savedTime(0), this.emptyToError(!1), this.attachmentsInProcessError(!1), this.showCc(!1), this.showBcc(!1), this.showReplyTo(!1), Object(P.delegateRunOnDestroy)(this.attachments()), this.attachments([]), this.dragAndDropOver(!1), this.dragAndDropVisible(!1), this.draftFolder(""), this.draftUid(""), this.sending(!1), this.saving(!1), this.oEditor && this.oEditor.clear(!1)
        }, t.prototype.getAttachmentsDownloadsForUpload = function() {
            return A.a.map(A.a.filter(this.attachments(), function(e) {
                return e && "" === e.tempName()
            }), function(e) {
                return e.id
            })
        }, t.prototype.resizerTrigger = function() {
            this.resizer(!this.resizer())
        }, t
    }(oe.a)).prototype, "sendCommand", [a], m()(h.prototype, "sendCommand"), h.prototype), o(h.prototype, "saveCommand", [r], m()(h.prototype, "saveCommand"), h.prototype), o(h.prototype, "deleteCommand", [s], m()(h.prototype, "deleteCommand"), h.prototype), o(h.prototype, "skipCommand", [c], m()(h.prototype, "skipCommand"), h.prototype), o(h.prototype, "contactsCommand", [l], m()(h.prototype, "contactsCommand"), h.prototype), o(h.prototype, "dropboxCommand", [u], m()(h.prototype, "dropboxCommand"), h.prototype), o(h.prototype, "driveCommand", [d], m()(h.prototype, "driveCommand"), h.prototype), p = h)) || p)
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return u
    });
    var o = n(8),
        i = n.n(o),
        a = n(4),
        r = n.n(a),
        s = n(75),
        c = n.n(s),
        l = n(2),
        u = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                i()(this, e), this.oCross = null, this.sScreenName = t, this.aViewModels = Object(l.isArray)(n) ? n : []
            }
            return e.prototype.viewModels = function() {
                return this.aViewModels
            }, e.prototype.screenName = function() {
                return this.sScreenName
            }, e.prototype.routes = function() {
                return null
            }, e.prototype.__cross = function() {
                return this.oCross
            }, e.prototype.__start = function() {
                var e = null,
                    t = null,
                    n = this.routes();
                Object(l.isNonEmptyArray)(n) && (t = r.a.bind(this.onRoute || l.noop, this), e = c.a.create(), n.forEach(function(n) {
                    n && e && (e.addRoute(n[0], t).rules = n[1])
                }), this.oCross = e)
            }, e
        }()
}, function(e, t) {
    e.exports = window.ssm
}, function(e, t, n) {
    var o = n(52);
    e.exports = function(e, t) {
        if (!o(e)) return e;
        var n, i;
        if (t && "function" == typeof(n = e.toString) && !o(i = n.call(e))) return i;
        if ("function" == typeof(n = e.valueOf) && !o(i = n.call(e))) return i;
        if (!t && "function" == typeof(n = e.toString) && !o(i = n.call(e))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, , function(e, t, n) {
    "use strict";

    function o(e) {
        if (e in l.a && l.a[e] && l.a[e].setItem) {
            var t = l.a[e],
                n = "testLocalStorage_" + l.a.Math.random();
            try {
                if (t.setItem(n, n), n === t.getItem(n)) return t.removeItem(n), !0
            } catch (e) {}
        }
        return !1
    }

    function i() {
        return h(u)
    }

    function a() {
        var e = "AuthAccountHash",
            t = l.a.__rlah_data();
        f(u, t && t[e] ? t[e] : ""), b()
    }

    function r() {
        f(u, ""), b()
    }

    function s() {
        return m() > g() + 36e5 && (r(), !0)
    }
    n.d(t, "d", function() {
        return o
    }), n.d(t, "c", function() {
        return i
    }), n.d(t, "e", function() {
        return a
    }), n.d(t, "b", function() {
        return r
    }), n.d(t, "a", function() {
        return s
    });
    var c = n(3),
        l = n.n(c),
        u = "__rlA",
        d = o("sessionStorage") && l.a.sessionStorage || null,
        p = l.a.top || l.a || null,
        h = function(e) {
            var t = null;
            if (d) t = d.getItem(e) || null;
            else if (p && l.a.JSON) {
                var n = p.name && "{" === p.name.toString().substr(0, 1) ? l.a.JSON.parse(p.name.toString()) : null;
                t = n && n[e] || null
            }
            return t
        },
        f = function(e, t) {
            if (d) d.setItem(e, t);
            else if (p && l.a.JSON) {
                var n = p.name && "{" === p.name.toString().substr(0, 1) ? l.a.JSON.parse(p.name.toString()) : null;
                (n = n || {})[e] = t, p.name = l.a.JSON.stringify(n)
            }
        },
        m = function() {
            return l.a.Math.round((new l.a.Date).getTime() / 1e3)
        },
        b = function() {
            return f("__rlT", m())
        },
        g = function() {
            var e = h("__rlT", 0);
            return e && l.a.parseInt(e, 10) || 0
        };
    l.a.setInterval(b, 6e4)
}, function(e, t) {
    var n = 0,
        o = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36))
    }
}, function(e, t) {
    t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
    var o = n(71),
        i = n(64),
        a = n(43),
        r = n(67),
        s = n(46),
        c = n(77),
        l = Object.getOwnPropertyDescriptor;
    t.f = n(42) ? l : function(e, t) {
        if (e = a(e), t = r(t, !0), c) try {
            return l(e, t)
        } catch (e) {}
        if (s(e, t)) return i(!o.f.call(e, t), e[t])
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return d
    });
    var o = n(8),
        i = n.n(o),
        a = n(12),
        r = n.n(a),
        s = n(11),
        c = n.n(s),
        l = n(1),
        u = n(2),
        d = function(e) {
            function t() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i()(this, t);
                var o = r()(this, e.call(this));
                return o.value = n.value, !Object(u.isUnd)(o.value) && o.value.subscribe || (o.value = l.a.observable(!Object(u.isUnd)(o.value) && !!o.value)), o.enable = n.enable, !Object(u.isUnd)(o.enable) && o.enable.subscribe || (o.enable = l.a.observable(!!Object(u.isUnd)(o.enable) || !!o.enable)), o.disable = n.disable, !Object(u.isUnd)(o.disable) && o.disable.subscribe || (o.disable = l.a.observable(!Object(u.isUnd)(o.disable) && !!o.disable)), o.label = n.label || "", o.inline = !Object(u.isUnd)(n.inline) && n.inline, o.readOnly = !Object(u.isUnd)(n.readOnly) && !!n.readOnly, o.inverted = !Object(u.isUnd)(n.inverted) && !!n.inverted, o.labeled = !Object(u.isUnd)(n.label), o.labelAnimated = !!n.labelAnimated, o
            }
            return c()(t, e), t.prototype.click = function() {
                this.readOnly || !this.enable() || this.disable() || this.value(!this.value())
            }, t
        }(n(27).a)
}, function(e, t) {
    e.exports = window.crossroads
}, function(e, t, n) {
    "use strict";

    function o(e) {
        var t = [],
            n = [],
            i = [];
        return new r(e).tokenize().forEach(function(e) {
            "operator" !== e.type || "," !== e.value && ";" !== e.value ? n.push(e) : (n.length && t.push(n), n = [])
        }), n.length && t.push(n), t.forEach(function(e) {
            (e = function(e) {
                for (var t = !1, n = "text", i = void 0, a = [], r = {
                        address: [],
                        comment: [],
                        group: [],
                        text: []
                    }, s = 0, c = e.length; s < c; s++) {
                    var l = e[s];
                    if ("operator" === l.type) switch (l.value) {
                        case "<":
                            n = "address";
                            break;
                        case "(":
                            n = "comment";
                            break;
                        case ":":
                            n = "group", t = !0;
                            break;
                        default:
                            n = "text"
                    } else l.value && r[n].push(l.value)
                }
                if (!r.text.length && r.comment.length && (r.text = r.comment, r.comment = []), t) r.text = r.text.join(" "), a.push({
                    name: r.text || i && i.name,
                    group: r.group.length ? o(r.group.join(",")) : []
                });
                else {
                    if (!r.address.length && r.text.length) {
                        for (var u = r.text.length - 1; u >= 0; u--)
                            if (r.text[u].match(/^[^@\s]+@[^@\s]+$/)) {
                                r.address = r.text.splice(u, 1);
                                break
                            }
                        if (!r.address.length)
                            for (var d = r.text.length - 1; d >= 0 && (r.text[d] = r.text[d].replace(/\s*\b[^@\s]+@[^@\s]+\b\s*/, function(e) {
                                    return r.address.length ? e : (r.address = [e.trim()], " ")
                                }).trim(), !r.address.length); d--);
                    }
                    if (!r.text.length && r.comment.length && (r.text = r.comment, r.comment = []), r.address.length > 1 && (r.text = r.text.concat(r.address.splice(1))), r.text = r.text.join(" "), r.address = r.address.join(" "), !r.address && t) return [];
                    (i = {
                        address: r.address || r.text || "",
                        name: r.text || r.address || ""
                    }).address === i.name && ((i.address || "").match(/@/) ? i.name = "" : i.address = ""), a.push(i)
                }
                return a
            }(e)).length && (i = i.concat(e))
        }), i
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
        }
    }();
    t.default = o;
    var a = {
            '"': '"',
            "(": ")",
            "<": ">",
            ",": "",
            ":": ";",
            ";": ""
        },
        r = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.str = (t || "").toString(), this.operatorCurrent = "", this.operatorExpecting = "", this.node = null, this.escaped = !1, this.list = []
            }
            return i(e, [{
                key: "tokenize",
                value: function() {
                    for (var e = void 0, t = [], n = 0, o = this.str.length; n < o; n++) e = this.str.charAt(n), this.checkChar(e);
                    return this.list.forEach(function(e) {
                        e.value = (e.value || "").toString().trim(), e.value && t.push(e)
                    }), t
                }
            }, {
                key: "checkChar",
                value: function(e) {
                    if ((e in a || "\\" === e) && this.escaped) this.escaped = !1;
                    else {
                        if (this.operatorExpecting && e === this.operatorExpecting) return this.node = {
                            type: "operator",
                            value: e
                        }, this.list.push(this.node), this.node = null, this.operatorExpecting = "", void(this.escaped = !1);
                        if (!this.operatorExpecting && e in a) return this.node = {
                            type: "operator",
                            value: e
                        }, this.list.push(this.node), this.node = null, this.operatorExpecting = a[e], void(this.escaped = !1)
                    }
                    this.escaped || "\\" !== e ? (this.node || (this.node = {
                        type: "text",
                        value: ""
                    }, this.list.push(this.node)), this.escaped && "\\" !== e && (this.node.value += "\\"), this.node.value += e, this.escaped = !1) : this.escaped = !0
                }
            }]), e
        }()
}, function(e, t, n) {
    e.exports = !n(42) && !n(51)(function() {
        return 7 != Object.defineProperty(n(93)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t) {
    e.exports = window.Jua
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
        return S
    }), n.d(t, "d", function() {
        return O
    }), n.d(t, "b", function() {
        return w
    }), n.d(t, "a", function() {
        return T
    });
    var o = n(8),
        i = n.n(o),
        a = n(12),
        r = n.n(a),
        s = n(11),
        c = n.n(s),
        l = n(3),
        u = n.n(l),
        d = n(4),
        p = n.n(d),
        h = n(1),
        f = n(0),
        m = n(6),
        b = n(2),
        g = n(16),
        y = n(36),
        v = n(45),
        S = p.a.memoize(function(e, t) {
            e = Object(b.trim)(e).toLowerCase(), t = Object(b.trim)(t).toLowerCase();
            var n = f.FileType.Unknown,
                o = t.split("/");
            switch (!0) {
                case "image" === o[0] || -1 < Object(b.inArray)(e, ["png", "jpg", "jpeg", "gif", "bmp"]):
                    n = f.FileType.Image;
                    break;
                case "audio" === o[0] || -1 < Object(b.inArray)(e, ["mp3", "ogg", "oga", "wav"]):
                    n = f.FileType.Audio;
                    break;
                case "video" === o[0] || -1 < Object(b.inArray)(e, ["mkv", "avi"]):
                    n = f.FileType.Video;
                    break;
                case -1 < Object(b.inArray)(e, ["php", "js", "css"]):
                    n = f.FileType.Code;
                    break;
                case "eml" === e || -1 < Object(b.inArray)(t, ["message/delivery-status", "message/rfc822"]):
                    n = f.FileType.Eml;
                    break;
                case "text" === o[0] && "html" !== o[1] || -1 < Object(b.inArray)(e, ["txt", "log"]):
                    n = f.FileType.Text;
                    break;
                case "text/html" === t || -1 < Object(b.inArray)(e, ["html"]):
                    n = f.FileType.Html;
                    break;
                case -1 < Object(b.inArray)(o[1], ["zip", "7z", "tar", "rar", "gzip", "bzip", "bzip2", "x-zip", "x-7z", "x-rar", "x-tar", "x-gzip", "x-bzip", "x-bzip2", "x-zip-compressed", "x-7z-compressed", "x-rar-compressed"]) || -1 < Object(b.inArray)(e, ["zip", "7z", "tar", "rar", "gzip", "bzip", "bzip2"]):
                    n = f.FileType.Archive;
                    break;
                case -1 < Object(b.inArray)(o[1], ["pdf", "x-pdf"]) || -1 < Object(b.inArray)(e, ["pdf"]):
                    n = f.FileType.Pdf;
                    break;
                case -1 < Object(b.inArray)(t, ["application/pgp-signature", "application/pgp-keys"]) || -1 < Object(b.inArray)(e, ["asc", "pem", "ppk"]):
                    n = f.FileType.Certificate;
                    break;
                case -1 < Object(b.inArray)(t, ["application/pkcs7-signature"]) || -1 < Object(b.inArray)(e, ["p7s"]):
                    n = f.FileType.CertificateBin;
                    break;
                case -1 < Object(b.inArray)(o[1], ["rtf", "msword", "vnd.msword", "vnd.openxmlformats-officedocument.wordprocessingml.document", "vnd.openxmlformats-officedocument.wordprocessingml.template", "vnd.ms-word.document.macroEnabled.12", "vnd.ms-word.template.macroEnabled.12"]):
                    n = f.FileType.WordText;
                    break;
                case -1 < Object(b.inArray)(o[1], ["excel", "ms-excel", "vnd.ms-excel", "vnd.openxmlformats-officedocument.spreadsheetml.sheet", "vnd.openxmlformats-officedocument.spreadsheetml.template", "vnd.ms-excel.sheet.macroEnabled.12", "vnd.ms-excel.template.macroEnabled.12", "vnd.ms-excel.addin.macroEnabled.12", "vnd.ms-excel.sheet.binary.macroEnabled.12"]):
                    n = f.FileType.Sheet;
                    break;
                case -1 < Object(b.inArray)(o[1], ["powerpoint", "ms-powerpoint", "vnd.ms-powerpoint", "vnd.openxmlformats-officedocument.presentationml.presentation", "vnd.openxmlformats-officedocument.presentationml.template", "vnd.openxmlformats-officedocument.presentationml.slideshow", "vnd.ms-powerpoint.addin.macroEnabled.12", "vnd.ms-powerpoint.presentation.macroEnabled.12", "vnd.ms-powerpoint.template.macroEnabled.12", "vnd.ms-powerpoint.slideshow.macroEnabled.12"]):
                    n = f.FileType.Presentation
            }
            return n
        }),
        O = p.a.memoize(function(e) {
            var t = "",
                n = "icon-file";
            switch (e) {
                case f.FileType.Text:
                case f.FileType.Eml:
                case f.FileType.WordText:
                    n = "icon-file-text";
                    break;
                case f.FileType.Html:
                case f.FileType.Code:
                    n = "icon-file-code";
                    break;
                case f.FileType.Image:
                    n = "icon-file-image";
                    break;
                case f.FileType.Audio:
                    n = "icon-file-music";
                    break;
                case f.FileType.Video:
                    n = "icon-file-movie";
                    break;
                case f.FileType.Archive:
                    n = "icon-file-zip";
                    break;
                case f.FileType.Certificate:
                case f.FileType.CertificateBin:
                    n = "icon-file-certificate";
                    break;
                case f.FileType.Sheet:
                    n = "icon-file-excel";
                    break;
                case f.FileType.Presentation:
                    n = "icon-file-chart-graph";
                    break;
                case f.FileType.Pdf:
                    t = "pdf", n = "icon-none"
            }
            return [n, t]
        }),
        w = function(e) {
            var t = "",
                n = [];
            if (Object(b.isNonEmptyArray)(e) && (t = "icon-attachment", (n = p.a.uniq(p.a.compact(p.a.map(e, function(e) {
                    return e ? S(Object(b.getFileExtension)(e[0]), e[1]) : ""
                })))) && 1 === n.length && n[0])) switch (n[0]) {
                case f.FileType.Text:
                case f.FileType.WordText:
                    t = "icon-file-text";
                    break;
                case f.FileType.Html:
                case f.FileType.Code:
                    t = "icon-file-code";
                    break;
                case f.FileType.Image:
                    t = "icon-file-image";
                    break;
                case f.FileType.Audio:
                    t = "icon-file-music";
                    break;
                case f.FileType.Video:
                    t = "icon-file-movie";
                    break;
                case f.FileType.Archive:
                    t = "icon-file-zip";
                    break;
                case f.FileType.Certificate:
                case f.FileType.CertificateBin:
                    t = "icon-file-certificate";
                    break;
                case f.FileType.Sheet:
                    t = "icon-file-excel";
                    break;
                case f.FileType.Presentation:
                    t = "icon-file-chart-graph"
            }
            return t
        },
        T = function(e) {
            function t() {
                i()(this, t);
                var n = r()(this, e.call(this, "AttachmentModel"));
                return n.checked = h.a.observable(!1), n.mimeType = "", n.fileName = "", n.fileNameExt = "", n.fileType = f.FileType.Unknown, n.estimatedSize = 0, n.friendlySize = "", n.isInline = !1, n.isLinked = !1, n.isThumbnail = !1, n.cid = "", n.cidWithOutTags = "", n.contentLocation = "", n.download = "", n.folder = "", n.uid = "", n.mimeIndex = "", n.framed = !1, n
            }
            return c()(t, e), t.newInstanceFromJson = function(e) {
                var n = new t;
                return n.initByJson(e) ? n : null
            }, t.prototype.initByJson = function(e) {
                var t = !1;
                return e && "Object/Attachment" === e["@Object"] && (this.mimeType = Object(b.trim)((e.MimeType || "").toLowerCase()), this.fileName = Object(b.trim)(e.FileName), this.estimatedSize = Object(b.pInt)(e.EstimatedSize), this.isInline = !!e.IsInline, this.isLinked = !!e.IsLinked, this.isThumbnail = !!e.IsThumbnail, this.cid = e.CID, this.contentLocation = e.ContentLocation, this.download = e.Download, this.folder = e.Folder, this.uid = e.Uid, this.mimeIndex = e.MimeIndex, this.framed = !!e.Framed, this.friendlySize = Object(b.friendlySize)(this.estimatedSize), this.cidWithOutTags = this.cid.replace(/^<+/, "").replace(/>+$/, ""), this.fileNameExt = Object(b.getFileExtension)(this.fileName), this.fileType = S(this.fileNameExt, this.mimeType), t = !0), t
            }, t.prototype.isImage = function() {
                return f.FileType.Image === this.fileType
            }, t.prototype.isMp3 = function() {
                return f.FileType.Audio === this.fileType && "mp3" === this.fileNameExt
            }, t.prototype.isOgg = function() {
                return f.FileType.Audio === this.fileType && ("oga" === this.fileNameExt || "ogg" === this.fileNameExt)
            }, t.prototype.isWav = function() {
                return f.FileType.Audio === this.fileType && "wav" === this.fileNameExt
            }, t.prototype.hasThumbnail = function() {
                return this.isThumbnail
            }, t.prototype.isText = function() {
                return f.FileType.Text === this.fileType || f.FileType.Eml === this.fileType || f.FileType.Certificate === this.fileType || f.FileType.Html === this.fileType || f.FileType.Code === this.fileType
            }, t.prototype.isPdf = function() {
                return f.FileType.Pdf === this.fileType
            }, t.prototype.isFramed = function() {
                return this.framed && m.data.__APP__ && m.data.__APP__.googlePreviewSupported() && !(this.isPdf() && m.bAllowPdfPreview) && !this.isText() && !this.isImage()
            }, t.prototype.hasPreview = function() {
                return this.isImage() || this.isPdf() && m.bAllowPdfPreview || this.isText() || this.isFramed()
            }, t.prototype.hasPreplay = function() {
                return v.a.supportedMp3 && this.isMp3() || v.a.supportedOgg && this.isOgg() || v.a.supportedWav && this.isWav()
            }, t.prototype.linkDownload = function() {
                return Object(g.c)(this.download)
            }, t.prototype.linkPreview = function() {
                return Object(g.e)(this.download)
            }, t.prototype.linkThumbnail = function() {
                return this.hasThumbnail() ? Object(g.g)(this.download) : ""
            }, t.prototype.linkThumbnailPreviewStyle = function() {
                var e = this.linkThumbnail();
                return "" === e ? "" : "background:url(" + e + ")"
            }, t.prototype.linkFramed = function() {
                return Object(g.d)(this.download)
            }, t.prototype.linkPreviewAsPlain = function() {
                return Object(g.f)(this.download)
            }, t.prototype.linkPreviewMain = function() {
                var e = "";
                switch (!0) {
                    case this.isImage():
                    case this.isPdf() && m.bAllowPdfPreview:
                        e = this.linkPreview();
                        break;
                    case this.isText():
                        e = this.linkPreviewAsPlain();
                        break;
                    case this.isFramed():
                        e = this.linkFramed()
                }
                return e
            }, t.prototype.generateTransferDownloadUrl = function() {
                var e = this.linkDownload();
                return "http" !== e.substr(0, 4) && (e = u.a.location.protocol + "//" + u.a.location.host + u.a.location.pathname + e), this.mimeType + ":" + this.fileName + ":" + e
            }, t.prototype.eventDragStart = function(e, t) {
                var n = t.originalEvent || t;
                return e && n && n.dataTransfer && n.dataTransfer.setData && n.dataTransfer.setData("DownloadURL", this.generateTransferDownloadUrl()), !0
            }, t.prototype.iconClass = function() {
                return O(this.fileType)[0]
            }, t.prototype.iconText = function() {
                return O(this.fileType)[1]
            }, t
        }(y.a)
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(8),
        i = n.n(o),
        a = n(12),
        r = n.n(a),
        s = n(11),
        c = n.n(s),
        l = n(27),
        u = function(e) {
            function t() {
                return i()(this, t), r()(this, e.apply(this, arguments))
            }
            return c()(t, e), t
        }(n(74).a);
    t.default = Object(l.b)(u, "CheckboxComponent")
}, function(e, t, n) {
    var o = n(41),
        i = n(40),
        a = n(90),
        r = n(82),
        s = n(49).f;
    e.exports = function(e) {
        var t = i.Symbol || (i.Symbol = a ? {} : o.Symbol || {});
        "_" == e.charAt(0) || e in t || s(t, e, {
            value: r.f(e)
        })
    }
}, function(e, t, n) {
    t.f = n(60)
}, function(e, t, n) {
    var o = n(49).f,
        i = n(46),
        a = n(60)("toStringTag");
    e.exports = function(e, t, n) {
        e && !i(e = n ? e : e.prototype, a) && o(e, a, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
    var o = n(41),
        i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    e.exports = function(e) {
        return i[e] || (i[e] = {})
    }
}, function(e, t, n) {
    var o = n(85)("keys"),
        i = n(70);
    e.exports = function(e) {
        return o[e] || (o[e] = i(e))
    }
}, function(e, t, n) {
    var o = n(104),
        i = n(84);
    e.exports = Object.keys || function(e) {
        return o(e, i)
    }
}, function(e, t, n) {
    var o = n(61),
        i = n(164),
        a = n(84),
        r = n(86)("IE_PROTO"),
        s = function() {},
        c = function() {
            var e, t = n(93)("iframe"),
                o = a.length;
            for (t.style.display = "none", n(160).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; o--;) delete c.prototype[a[o]];
            return c()
        };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (s.prototype = o(e), n = new s, s.prototype = null, n[r] = e) : n = c(), void 0 === t ? n : i(n, t)
    }
}, function(e, t) {
    e.exports = {}
}, function(e, t) {
    e.exports = !0
}, function(e, t) {
    var n = Math.ceil,
        o = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}, function(e, t, n) {
    var o = n(52),
        i = n(41).document,
        a = o(i) && o(i.createElement);
    e.exports = function(e) {
        return a ? i.createElement(e) : {}
    }
}, function(e, t, n) {
    var o = n(112);
    e.exports = function(e, t, n) {
        if (o(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                };
            case 2:
                return function(n, o) {
                    return e.call(t, n, o)
                };
            case 3:
                return function(n, o, i) {
                    return e.call(t, n, o, i)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "HtmlEditor", function() {
        return f
    }), n.d(t, "default", function() {
        return f
    });
    var o = n(8),
        i = n.n(o),
        a = n(3),
        r = n.n(a),
        s = n(4),
        c = n.n(s),
        l = n(7),
        u = n.n(l),
        d = n(6),
        p = n(0),
        h = n(5),
        f = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                i()(this, e), this.blurTimer = 0, this.__resizable = !1, this.__inited = !1, this.onBlur = null, this.onReady = null, this.onModeChange = null, this.onBlur = n, this.onReady = o, this.onModeChange = a, this.element = t, this.$element = u()(t), this.resize = c.a.throttle(c.a.bind(this.resizeEditor, this), 100), this.init()
            }
            return e.prototype.runOnBlur = function() {
                this.onBlur && this.onBlur()
            }, e.prototype.blurTrigger = function() {
                var e = this;
                this.onBlur && (r.a.clearTimeout(this.blurTimer), this.blurTimer = r.a.setTimeout(function() {
                    e.runOnBlur()
                }, p.Magics.Time200ms))
            }, e.prototype.focusTrigger = function() {
                this.onBlur && r.a.clearTimeout(this.blurTimer)
            }, e.prototype.isHtml = function() {
                return !!this.editor && "wysiwyg" === this.editor.mode
            }, e.prototype.clearCachedSignature = function() {
                this.editor && this.editor.execCommand("insertSignature", {
                    clearCache: !0
                })
            }, e.prototype.setSignature = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this.editor && this.editor.execCommand("insertSignature", {
                    isHtml: t,
                    insertBefore: n,
                    signature: e
                })
            }, e.prototype.checkDirty = function() {
                return !!this.editor && this.editor.checkDirty()
            }, e.prototype.resetDirty = function() {
                this.editor && this.editor.resetDirty()
            }, e.prototype.getData = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = "";
                if (this.editor) try {
                    t = "plain" === this.editor.mode && this.editor.plugins.plain && this.editor.__plain ? this.editor.__plain.getRawData() : e ? '<div data-html-editor-font-wrapper="true" style="font-family: arial, sans-serif; font-size: 13px;">' + this.editor.getData() + "</div>" : this.editor.getData()
                } catch (e) {}
                return t
            }, e.prototype.getDataWithHtmlMark = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return (this.isHtml() ? ":HTML:" : "") + this.getData(e)
            }, e.prototype.modeToggle = function(e, t) {
                if (this.editor) {
                    try {
                        e ? "plain" === this.editor.mode && this.editor.setMode("wysiwyg") : "wysiwyg" === this.editor.mode && this.editor.setMode("plain")
                    } catch (e) {}
                    t && this.resize()
                }
            }, e.prototype.setHtmlOrPlain = function(e, t) {
                ":HTML:" === e.substr(0, 6) ? this.setHtml(e.substr(6), t) : this.setPlain(e, t)
            }, e.prototype.setHtml = function(e, t) {
                if (this.editor && this.__inited) {
                    this.clearCachedSignature(), this.modeToggle(!0), e = e.replace(/<p[^>]*><\/p>/gi, "");
                    try {
                        this.editor.setData(e)
                    } catch (e) {}
                    t && this.focus()
                }
            }, e.prototype.replaceHtml = function(e, t) {
                if (this.editor && this.__inited && "wysiwyg" === this.editor.mode) try {
                    this.editor.setData(this.editor.getData().replace(e, t))
                } catch (e) {}
            }, e.prototype.setPlain = function(e, t) {
                if (this.editor && this.__inited) {
                    if (this.clearCachedSignature(), this.modeToggle(!1), "plain" === this.editor.mode && this.editor.plugins.plain && this.editor.__plain) this.editor.__plain.setRawData(e);
                    else try {
                        this.editor.setData(e)
                    } catch (e) {}
                    t && this.focus()
                }
            }, e.prototype.init = function() {
                var e = this;
                if (this.element && !this.editor) {
                    var t = function() {
                        var t = d.htmlEditorDefaultConfig,
                            n = h.settingsGet("Language"),
                            o = !!h.appSettingsGet("allowHtmlEditorSourceButton"),
                            i = !!h.appSettingsGet("allowHtmlEditorBitiButtons");
                        !o && i || t.toolbarGroups.__cfgInited || (t.toolbarGroups.__cfgInited = !0, o && (t.removeButtons = t.removeButtons.replace(",Source", "")), i || (t.removePlugins += (t.removePlugins ? "," : "") + "bidi")), t.enterMode = r.a.CKEDITOR.ENTER_BR, t.shiftEnterMode = r.a.CKEDITOR.ENTER_P, t.language = d.htmlEditorLangsMap[(n || "en").toLowerCase()] || "en", r.a.CKEDITOR.env && (r.a.CKEDITOR.env.isCompatible = !0), e.editor = r.a.CKEDITOR.appendTo(e.element, t), e.editor.on("key", function(e) {
                            return !e || !e.data || p.EventKeyCode.Tab !== e.data.keyCode
                        }), e.editor.on("blur", function() {
                            e.blurTrigger()
                        }), e.editor.on("mode", function() {
                            e.blurTrigger(), e.onModeChange && e.onModeChange("plain" !== e.editor.mode)
                        }), e.editor.on("focus", function() {
                            e.focusTrigger()
                        }), r.a.FileReader && e.editor.on("drop", function(t) {
                            if (0 < t.data.dataTransfer.getFilesCount()) {
                                var n = t.data.dataTransfer.getFile(0);
                                if (n && r.a.FileReader && t.data.dataTransfer.id && n.type && n.type.match(/^image/i)) {
                                    var o = "[img=" + t.data.dataTransfer.id + "]",
                                        i = new r.a.FileReader;
                                    i.onloadend = function() {
                                        i.result && e.replaceHtml(o, '<img src="' + i.result + '" />')
                                    }, i.readAsDataURL(n), t.data.dataTransfer.setData("text/html", o)
                                }
                            }
                        }), e.editor.on("instanceReady", function() {
                            e.editor.removeMenuItem && (e.editor.removeMenuItem("cut"), e.editor.removeMenuItem("copy"), e.editor.removeMenuItem("paste")), e.__resizable = !0, e.__inited = !0, e.resize(), e.onReady && e.onReady()
                        })
                    };
                    r.a.CKEDITOR ? t() : r.a.__initEditor = t
                }
            }, e.prototype.focus = function() {
                if (this.editor) try {
                    this.editor.focus()
                } catch (e) {}
            }, e.prototype.hasFocus = function() {
                if (this.editor) try {
                    return !!this.editor.focusManager.hasFocus
                } catch (e) {}
                return !1
            }, e.prototype.blur = function() {
                if (this.editor) try {
                    this.editor.focusManager.blur(!0)
                } catch (e) {}
            }, e.prototype.resizeEditor = function() {
                if (this.editor && this.__resizable) try {
                    this.editor.resize(this.$element.width(), this.$element.innerHeight())
                } catch (e) {}
            }, e.prototype.setReadOnly = function(e) {
                if (this.editor) try {
                    this.editor.setReadOnly(!!e)
                } catch (e) {}
            }, e.prototype.clear = function(e) {
                this.setHtml("", e)
            }, e
        }()
}, function(e, t) {
    e.exports = window.Autolinker
}, function(e, t, n) {
    ! function(t, o) {
        "use strict";
        var i;
        try {
            i = n(54)
        } catch (e) {}
        e.exports = function(e) {
            var t = "function" == typeof e,
                n = !!window.addEventListener,
                o = window.document,
                i = window.setTimeout,
                a = function(e, t, o, i) {
                    n ? e.addEventListener(t, o, !!i) : e.attachEvent("on" + t, o)
                },
                r = function(e, t, o, i) {
                    n ? e.removeEventListener(t, o, !!i) : e.detachEvent("on" + t, o)
                },
                s = function(e, t) {
                    return -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
                },
                c = function(e) {
                    return /Array/.test(Object.prototype.toString.call(e))
                },
                l = function(e) {
                    return /Date/.test(Object.prototype.toString.call(e)) && !isNaN(e.getTime())
                },
                u = function(e) {
                    var t = e.getDay();
                    return 0 === t || 6 === t
                },
                d = function(e, t) {
                    return [31, function(e) {
                        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                    }(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
                },
                p = function(e) {
                    l(e) && e.setHours(0, 0, 0, 0)
                },
                h = function(e, t) {
                    return e.getTime() === t.getTime()
                },
                f = function(e, t, n) {
                    var o, i;
                    for (o in t)(i = void 0 !== e[o]) && "object" == typeof t[o] && null !== t[o] && void 0 === t[o].nodeName ? l(t[o]) ? n && (e[o] = new Date(t[o].getTime())) : c(t[o]) ? n && (e[o] = t[o].slice(0)) : e[o] = f({}, t[o], n) : !n && i || (e[o] = t[o]);
                    return e
                },
                m = function(e, t, n) {
                    var i;
                    o.createEvent ? ((i = o.createEvent("HTMLEvents")).initEvent(t, !0, !1), i = f(i, n), e.dispatchEvent(i)) : o.createEventObject && (i = o.createEventObject(), i = f(i, n), e.fireEvent("on" + t, i))
                },
                b = function(e) {
                    return e.month < 0 && (e.year -= Math.ceil(Math.abs(e.month) / 12), e.month += 12), e.month > 11 && (e.year += Math.floor(Math.abs(e.month) / 12), e.month -= 12), e
                },
                g = {
                    field: null,
                    bound: void 0,
                    position: "bottom left",
                    reposition: !0,
                    format: "YYYY-MM-DD",
                    toString: null,
                    parse: null,
                    defaultDate: null,
                    setDefaultDate: !1,
                    firstDay: 0,
                    formatStrict: !1,
                    minDate: null,
                    maxDate: null,
                    yearRange: 10,
                    showWeekNumber: !1,
                    pickWholeWeek: !1,
                    minYear: 0,
                    maxYear: 9999,
                    minMonth: void 0,
                    maxMonth: void 0,
                    startRange: null,
                    endRange: null,
                    isRTL: !1,
                    yearSuffix: "",
                    showMonthAfterYear: !1,
                    showDaysInNextAndPreviousMonths: !1,
                    enableSelectionDaysInNextAndPreviousMonths: !1,
                    numberOfMonths: 1,
                    mainCalendar: "left",
                    container: void 0,
                    blurFieldOnSelect: !0,
                    i18n: {
                        previousMonth: "Previous Month",
                        nextMonth: "Next Month",
                        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                    },
                    theme: null,
                    events: [],
                    onSelect: null,
                    onOpen: null,
                    onClose: null,
                    onDraw: null,
                    keyboardInput: !0
                },
                y = function(e, t, n) {
                    for (t += e.firstDay; t >= 7;) t -= 7;
                    return n ? e.i18n.weekdaysShort[t] : e.i18n.weekdays[t]
                },
                v = function(e) {
                    var t = [],
                        n = "false";
                    if (e.isEmpty) {
                        if (!e.showDaysInNextAndPreviousMonths) return '<td class="is-empty"></td>';
                        t.push("is-outside-current-month"), e.enableSelectionDaysInNextAndPreviousMonths || t.push("is-selection-disabled")
                    }
                    return e.isDisabled && t.push("is-disabled"), e.isToday && t.push("is-today"), e.isSelected && (t.push("is-selected"), n = "true"), e.hasEvent && t.push("has-event"), e.isInRange && t.push("is-inrange"), e.isStartRange && t.push("is-startrange"), e.isEndRange && t.push("is-endrange"), '<td data-day="' + e.day + '" class="' + t.join(" ") + '" aria-selected="' + n + '"><button class="pika-button pika-day" type="button" data-pika-year="' + e.year + '" data-pika-month="' + e.month + '" data-pika-day="' + e.day + '">' + e.day + "</button></td>"
                },
                S = function(e, t, n, o) {
                    return '<tr class="pika-row' + (n ? " pick-whole-week" : "") + (o ? " is-selected" : "") + '">' + (t ? e.reverse() : e).join("") + "</tr>"
                },
                O = function(e, t, n, o, i, a) {
                    var r, s, l, u, d, p = e._o,
                        h = n === p.minYear,
                        f = n === p.maxYear,
                        m = '<div id="' + a + '" class="pika-title" role="heading" aria-live="assertive">',
                        b = !0,
                        g = !0;
                    for (l = [], r = 0; r < 12; r++) l.push('<option value="' + (n === i ? r - t : 12 + r - t) + '"' + (r === o ? ' selected="selected"' : "") + (h && r < p.minMonth || f && r > p.maxMonth ? 'disabled="disabled"' : "") + ">" + p.i18n.months[r] + "</option>");
                    for (u = '<div class="pika-label">' + p.i18n.months[o] + '<select class="pika-select pika-select-month" tabindex="-1">' + l.join("") + "</select></div>", c(p.yearRange) ? (r = p.yearRange[0], s = p.yearRange[1] + 1) : (r = n - p.yearRange, s = 1 + n + p.yearRange), l = []; r < s && r <= p.maxYear; r++) r >= p.minYear && l.push('<option value="' + r + '"' + (r === n ? ' selected="selected"' : "") + ">" + r + "</option>");
                    return d = '<div class="pika-label">' + n + p.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + l.join("") + "</select></div>", p.showMonthAfterYear ? m += d + u : m += u + d, h && (0 === o || p.minMonth >= o) && (b = !1), f && (11 === o || p.maxMonth <= o) && (g = !1), 0 === t && (m += '<button class="pika-prev' + (b ? "" : " is-disabled") + '" type="button">' + p.i18n.previousMonth + "</button>"), t === e._o.numberOfMonths - 1 && (m += '<button class="pika-next' + (g ? "" : " is-disabled") + '" type="button">' + p.i18n.nextMonth + "</button>"), m += "</div>"
                },
                w = function(r) {
                    var c = this,
                        u = c.config(r);
                    c._onMouseDown = function(e) {
                        if (c._v) {
                            var t = (e = e || window.event).target || e.srcElement;
                            if (t)
                                if (s(t, "is-disabled") || (!s(t, "pika-button") || s(t, "is-empty") || s(t.parentNode, "is-disabled") ? s(t, "pika-prev") ? c.prevMonth() : s(t, "pika-next") && c.nextMonth() : (c.setDate(new Date(t.getAttribute("data-pika-year"), t.getAttribute("data-pika-month"), t.getAttribute("data-pika-day"))), u.bound && i(function() {
                                        c.hide(), u.blurFieldOnSelect && u.field && u.field.blur()
                                    }, 100))), s(t, "pika-select")) c._c = !0;
                                else {
                                    if (!e.preventDefault) return e.returnValue = !1, !1;
                                    e.preventDefault()
                                }
                        }
                    }, c._onChange = function(e) {
                        var t = (e = e || window.event).target || e.srcElement;
                        t && (s(t, "pika-select-month") ? c.gotoMonth(t.value) : s(t, "pika-select-year") && c.gotoYear(t.value))
                    }, c._onKeyChange = function(e) {
                        if (e = e || window.event, c.isVisible()) switch (e.keyCode) {
                            case 13:
                            case 27:
                                u.field && u.field.blur();
                                break;
                            case 37:
                                e.preventDefault(), c.adjustDate("subtract", 1);
                                break;
                            case 38:
                                c.adjustDate("subtract", 7);
                                break;
                            case 39:
                                c.adjustDate("add", 1);
                                break;
                            case 40:
                                c.adjustDate("add", 7)
                        }
                    }, c._onInputChange = function(n) {
                        var o;
                        n.firedBy !== c && (o = u.parse ? u.parse(u.field.value, u.format) : t ? (o = e(u.field.value, u.format, u.formatStrict)) && o.isValid() ? o.toDate() : null : new Date(Date.parse(u.field.value)), l(o) && c.setDate(o), c._v || c.show())
                    }, c._onInputFocus = function() {
                        c.show()
                    }, c._onInputClick = function() {
                        c.show()
                    }, c._onInputBlur = function() {
                        var e = o.activeElement;
                        do {
                            if (s(e, "pika-single")) return
                        } while (e = e.parentNode);
                        c._c || (c._b = i(function() {
                            c.hide()
                        }, 50)), c._c = !1
                    }, c._onClick = function(e) {
                        var t = (e = e || window.event).target || e.srcElement,
                            o = t;
                        if (t) {
                            !n && s(t, "pika-select") && (t.onchange || (t.setAttribute("onchange", "return;"), a(t, "change", c._onChange)));
                            do {
                                if (s(o, "pika-single") || o === u.trigger) return
                            } while (o = o.parentNode);
                            c._v && t !== u.trigger && o !== u.trigger && c.hide()
                        }
                    }, c.el = o.createElement("div"), c.el.className = "pika-single" + (u.isRTL ? " is-rtl" : "") + (u.theme ? " " + u.theme : ""), a(c.el, "mousedown", c._onMouseDown, !0), a(c.el, "touchend", c._onMouseDown, !0), a(c.el, "change", c._onChange), u.keyboardInput && a(o, "keydown", c._onKeyChange), u.field && (u.container ? u.container.appendChild(c.el) : u.bound ? o.body.appendChild(c.el) : u.field.parentNode.insertBefore(c.el, u.field.nextSibling), a(u.field, "change", c._onInputChange), u.defaultDate || (t && u.field.value ? u.defaultDate = e(u.field.value, u.format).toDate() : u.defaultDate = new Date(Date.parse(u.field.value)), u.setDefaultDate = !0));
                    var d = u.defaultDate;
                    l(d) ? u.setDefaultDate ? c.setDate(d, !0) : c.gotoDate(d) : c.gotoDate(new Date), u.bound ? (this.hide(), c.el.className += " is-bound", a(u.trigger, "click", c._onInputClick), a(u.trigger, "focus", c._onInputFocus), a(u.trigger, "blur", c._onInputBlur)) : this.show()
                };
            return w.prototype = {
                config: function(e) {
                    this._o || (this._o = f({}, g, !0));
                    var t = f(this._o, e, !0);
                    t.isRTL = !!t.isRTL, t.field = t.field && t.field.nodeName ? t.field : null, t.theme = "string" == typeof t.theme && t.theme ? t.theme : null, t.bound = !!(void 0 !== t.bound ? t.field && t.bound : t.field), t.trigger = t.trigger && t.trigger.nodeName ? t.trigger : t.field, t.disableWeekends = !!t.disableWeekends, t.disableDayFn = "function" == typeof t.disableDayFn ? t.disableDayFn : null;
                    var n = parseInt(t.numberOfMonths, 10) || 1;
                    if (t.numberOfMonths = n > 4 ? 4 : n, l(t.minDate) || (t.minDate = !1), l(t.maxDate) || (t.maxDate = !1), t.minDate && t.maxDate && t.maxDate < t.minDate && (t.maxDate = t.minDate = !1), t.minDate && this.setMinDate(t.minDate), t.maxDate && this.setMaxDate(t.maxDate), c(t.yearRange)) {
                        var o = (new Date).getFullYear() - 10;
                        t.yearRange[0] = parseInt(t.yearRange[0], 10) || o, t.yearRange[1] = parseInt(t.yearRange[1], 10) || o
                    } else t.yearRange = Math.abs(parseInt(t.yearRange, 10)) || g.yearRange, t.yearRange > 100 && (t.yearRange = 100);
                    return t
                },
                toString: function(n) {
                    return n = n || this._o.format, l(this._d) ? this._o.toString ? this._o.toString(this._d, n) : t ? e(this._d).format(n) : this._d.toDateString() : ""
                },
                getMoment: function() {
                    return t ? e(this._d) : null
                },
                setMoment: function(n, o) {
                    t && e.isMoment(n) && this.setDate(n.toDate(), o)
                },
                getDate: function() {
                    return l(this._d) ? new Date(this._d.getTime()) : null
                },
                setDate: function(e, t) {
                    if (!e) return this._d = null, this._o.field && (this._o.field.value = "", m(this._o.field, "change", {
                        firedBy: this
                    })), this.draw();
                    if ("string" == typeof e && (e = new Date(Date.parse(e))), l(e)) {
                        var n = this._o.minDate,
                            o = this._o.maxDate;
                        l(n) && e < n ? e = n : l(o) && e > o && (e = o), this._d = new Date(e.getTime()), p(this._d), this.gotoDate(this._d), this._o.field && (this._o.field.value = this.toString(), m(this._o.field, "change", {
                            firedBy: this
                        })), t || "function" != typeof this._o.onSelect || this._o.onSelect.call(this, this.getDate())
                    }
                },
                gotoDate: function(e) {
                    var t = !0;
                    if (l(e)) {
                        if (this.calendars) {
                            var n = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                                o = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
                                i = e.getTime();
                            o.setMonth(o.getMonth() + 1), o.setDate(o.getDate() - 1), t = i < n.getTime() || o.getTime() < i
                        }
                        t && (this.calendars = [{
                            month: e.getMonth(),
                            year: e.getFullYear()
                        }], "right" === this._o.mainCalendar && (this.calendars[0].month += 1 - this._o.numberOfMonths)), this.adjustCalendars()
                    }
                },
                adjustDate: function(e, t) {
                    var n, o = this.getDate() || new Date,
                        i = 24 * parseInt(t) * 60 * 60 * 1e3;
                    "add" === e ? n = new Date(o.valueOf() + i) : "subtract" === e && (n = new Date(o.valueOf() - i)), this.setDate(n)
                },
                adjustCalendars: function() {
                    this.calendars[0] = b(this.calendars[0]);
                    for (var e = 1; e < this._o.numberOfMonths; e++) this.calendars[e] = b({
                        month: this.calendars[0].month + e,
                        year: this.calendars[0].year
                    });
                    this.draw()
                },
                gotoToday: function() {
                    this.gotoDate(new Date)
                },
                gotoMonth: function(e) {
                    isNaN(e) || (this.calendars[0].month = parseInt(e, 10), this.adjustCalendars())
                },
                nextMonth: function() {
                    this.calendars[0].month++, this.adjustCalendars()
                },
                prevMonth: function() {
                    this.calendars[0].month--, this.adjustCalendars()
                },
                gotoYear: function(e) {
                    isNaN(e) || (this.calendars[0].year = parseInt(e, 10), this.adjustCalendars())
                },
                setMinDate: function(e) {
                    e instanceof Date ? (p(e), this._o.minDate = e, this._o.minYear = e.getFullYear(), this._o.minMonth = e.getMonth()) : (this._o.minDate = g.minDate, this._o.minYear = g.minYear, this._o.minMonth = g.minMonth, this._o.startRange = g.startRange), this.draw()
                },
                setMaxDate: function(e) {
                    e instanceof Date ? (p(e), this._o.maxDate = e, this._o.maxYear = e.getFullYear(), this._o.maxMonth = e.getMonth()) : (this._o.maxDate = g.maxDate, this._o.maxYear = g.maxYear, this._o.maxMonth = g.maxMonth, this._o.endRange = g.endRange), this.draw()
                },
                setStartRange: function(e) {
                    this._o.startRange = e
                },
                setEndRange: function(e) {
                    this._o.endRange = e
                },
                draw: function(e) {
                    if (this._v || e) {
                        var t, n = this._o,
                            o = n.minYear,
                            a = n.maxYear,
                            r = n.minMonth,
                            s = n.maxMonth,
                            c = "";
                        this._y <= o && (this._y = o, !isNaN(r) && this._m < r && (this._m = r)), this._y >= a && (this._y = a, !isNaN(s) && this._m > s && (this._m = s)), t = "pika-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);
                        for (var l = 0; l < n.numberOfMonths; l++) c += '<div class="pika-lendar">' + O(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year, t) + this.render(this.calendars[l].year, this.calendars[l].month, t) + "</div>";
                        this.el.innerHTML = c, n.bound && "hidden" !== n.field.type && i(function() {
                            n.trigger.focus()
                        }, 1), "function" == typeof this._o.onDraw && this._o.onDraw(this), n.bound && n.field.setAttribute("aria-label", "Use the arrow keys to pick a date")
                    }
                },
                adjustPosition: function() {
                    var e, t, n, i, a, r, s, c, l, u;
                    if (!this._o.container) {
                        if (this.el.style.position = "absolute", t = e = this._o.trigger, n = this.el.offsetWidth, i = this.el.offsetHeight, a = window.innerWidth || o.documentElement.clientWidth, r = window.innerHeight || o.documentElement.clientHeight, s = window.pageYOffset || o.body.scrollTop || o.documentElement.scrollTop, "function" == typeof e.getBoundingClientRect) c = (u = e.getBoundingClientRect()).left + window.pageXOffset, l = u.bottom + window.pageYOffset;
                        else
                            for (c = t.offsetLeft, l = t.offsetTop + t.offsetHeight; t = t.offsetParent;) c += t.offsetLeft, l += t.offsetTop;
                        (this._o.reposition && c + n > a || this._o.position.indexOf("right") > -1 && c - n + e.offsetWidth > 0) && (c = c - n + e.offsetWidth), (this._o.reposition && l + i > r + s || this._o.position.indexOf("top") > -1 && l - i - e.offsetHeight > 0) && (l = l - i - e.offsetHeight), this.el.style.left = c + "px", this.el.style.top = l + "px"
                    }
                },
                render: function(e, t, n) {
                    var o = this._o,
                        i = new Date,
                        a = d(e, t),
                        r = new Date(e, t, 1).getDay(),
                        s = [],
                        c = [];
                    p(i), o.firstDay > 0 && (r -= o.firstDay) < 0 && (r += 7);
                    for (var f = 0 === t ? 11 : t - 1, m = 11 === t ? 0 : t + 1, b = 0 === t ? e - 1 : e, g = 11 === t ? e + 1 : e, O = d(b, f), w = a + r, T = w; T > 7;) T -= 7;
                    w += 7 - T;
                    for (var C, A, E, F, j = !1, N = 0, R = 0; N < w; N++) {
                        var I = new Date(e, t, N - r + 1),
                            L = !!l(this._d) && h(I, this._d),
                            _ = h(I, i),
                            P = -1 !== o.events.indexOf(I.toDateString()),
                            D = N < r || N >= a + r,
                            M = N - r + 1,
                            k = t,
                            x = e,
                            U = o.startRange && h(o.startRange, I),
                            H = o.endRange && h(o.endRange, I),
                            B = o.startRange && o.endRange && o.startRange < I && I < o.endRange,
                            G = o.minDate && I < o.minDate || o.maxDate && I > o.maxDate || o.disableWeekends && u(I) || o.disableDayFn && o.disableDayFn(I);
                        D && (N < r ? (M = O + M, k = f, x = b) : (M -= a, k = m, x = g));
                        var K = {
                            day: M,
                            month: k,
                            year: x,
                            hasEvent: P,
                            isSelected: L,
                            isToday: _,
                            isDisabled: G,
                            isEmpty: D,
                            isStartRange: U,
                            isEndRange: H,
                            isInRange: B,
                            showDaysInNextAndPreviousMonths: o.showDaysInNextAndPreviousMonths,
                            enableSelectionDaysInNextAndPreviousMonths: o.enableSelectionDaysInNextAndPreviousMonths
                        };
                        o.pickWholeWeek && L && (j = !0), c.push(v(K)), 7 == ++R && (o.showWeekNumber && c.unshift((C = N - r, A = t, E = e, F = void 0, F = new Date(E, 0, 1), '<td class="pika-week">' + Math.ceil(((new Date(E, A, C) - F) / 864e5 + F.getDay() + 1) / 7) + "</td>")), s.push(S(c, o.isRTL, o.pickWholeWeek, j)), c = [], R = 0, j = !1)
                    }
                    return function(e, t, n) {
                        return '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' + n + '">' + function(e) {
                            var t, n = [];
                            for (e.showWeekNumber && n.push("<th></th>"), t = 0; t < 7; t++) n.push('<th scope="col"><abbr title="' + y(e, t) + '">' + y(e, t, !0) + "</abbr></th>");
                            return "<thead><tr>" + (e.isRTL ? n.reverse() : n).join("") + "</tr></thead>"
                        }(o) + "<tbody>" + t.join("") + "</tbody></table>"
                    }(0, s, n)
                },
                isVisible: function() {
                    return this._v
                },
                show: function() {
                    var e, t, n;
                    this.isVisible() || (this._v = !0, this.draw(), e = this.el, t = "is-hidden", e.className = (n = (" " + e.className + " ").replace(" " + t + " ", " ")).trim ? n.trim() : n.replace(/^\s+|\s+$/g, ""), this._o.bound && (a(o, "click", this._onClick), this.adjustPosition()), "function" == typeof this._o.onOpen && this._o.onOpen.call(this))
                },
                hide: function() {
                    var e, t, n = this._v;
                    !1 !== n && (this._o.bound && r(o, "click", this._onClick), this.el.style.position = "static", this.el.style.left = "auto", this.el.style.top = "auto", e = this.el, s(e, t = "is-hidden") || (e.className = "" === e.className ? t : e.className + " " + t), this._v = !1, void 0 !== n && "function" == typeof this._o.onClose && this._o.onClose.call(this))
                },
                destroy: function() {
                    var e = this._o;
                    this.hide(), r(this.el, "mousedown", this._onMouseDown, !0), r(this.el, "touchend", this._onMouseDown, !0), r(this.el, "change", this._onChange), e.keyboardInput && r(o, "keydown", this._onKeyChange), e.field && (r(e.field, "change", this._onInputChange), e.bound && (r(e.trigger, "click", this._onInputClick), r(e.trigger, "focus", this._onInputFocus), r(e.trigger, "blur", this._onInputBlur))), this.el.parentNode && this.el.parentNode.removeChild(this.el)
                }
            }, w
        }(i)
    }()
}, function(e, t, n) {
    "use strict";
    var o = n(8),
        i = n.n(o),
        a = n(1),
        r = n(0);
    t.a = new function e() {
        i()(this, e), this.capa = a.a.observable(""), this.modules = a.a.observable({}), this.filters = a.a.observableArray([]), this.filters.loading = a.a.observable(!1).extend({
            throttle: r.Magics.Time200ms
        }), this.filters.saving = a.a.observable(!1).extend({
            throttle: r.Magics.Time200ms
        }), this.raw = a.a.observable("")
    }
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AskPopupView", function() {
        return y
    }), n.d(t, "default", function() {
        return y
    });
    var o, i = n(8),
        a = n.n(i),
        r = n(12),
        s = n.n(r),
        c = n(11),
        l = n.n(c),
        u = n(1),
        d = n(19),
        p = n.n(d),
        h = n(0),
        f = n(2),
        m = n(10),
        b = n(9),
        g = n(24),
        y = Object(b.popup)({
            name: "View/Popup/Ask",
            templateID: "PopupsAsk"
        })(o = function(e) {
            function t() {
                a()(this, t);
                var n = s()(this, e.call(this));
                return n.askDesc = u.a.observable(""), n.yesButton = u.a.observable(""), n.noButton = u.a.observable(""), n.yesFocus = u.a.observable(!1), n.noFocus = u.a.observable(!1), n.fYesAction = null, n.fNoAction = null, n.bFocusYesOnShow = !0, n.bDisabeCloseOnEsc = !0, n.sDefaultKeyScope = h.KeyState.PopupAsk, n
            }
            return l()(t, e), t.prototype.clearPopup = function() {
                this.askDesc(""), this.yesButton(Object(m.i18n)("POPUPS_ASK/BUTTON_YES")), this.noButton(Object(m.i18n)("POPUPS_ASK/BUTTON_NO")), this.yesFocus(!1), this.noFocus(!1), this.fYesAction = null, this.fNoAction = null
            }, t.prototype.yesClick = function() {
                this.cancelCommand(), Object(f.isFunc)(this.fYesAction) && this.fYesAction.call(null)
            }, t.prototype.noClick = function() {
                this.cancelCommand(), Object(f.isFunc)(this.fNoAction) && this.fNoAction.call(null)
            }, t.prototype.onShow = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                    a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                this.clearPopup(), this.fYesAction = t || null, this.fNoAction = n || null, this.askDesc(e || ""), o && this.yesButton(o), i && this.noButton(i), this.bFocusYesOnShow = !!a
            }, t.prototype.onShowWithDelay = function() {
                this.bFocusYesOnShow && this.yesFocus(!0)
            }, t.prototype.onBuild = function() {
                var e = this;
                p()("tab, shift+tab, right, left", h.KeyState.PopupAsk, function() {
                    return e.yesFocus() ? e.noFocus(!0) : e.yesFocus(!0), !1
                }), p()("esc", h.KeyState.PopupAsk, function() {
                    return e.noClick(), !1
                })
            }, t
        }(g.a)) || o
}, function(e, t) {
    e.exports = window.ifvisible
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "LanguagesPopupView", function() {
        return b
    }), n.d(t, "default", function() {
        return b
    });
    var o, i = n(8),
        a = n.n(i),
        r = n(12),
        s = n.n(r),
        c = n(11),
        l = n.n(c),
        u = n(4),
        d = n.n(u),
        p = n(1),
        h = n(2),
        f = n(9),
        m = n(24),
        b = Object(f.popup)({
            name: "View/Popup/Languages",
            templateID: "PopupsLanguages"
        })(o = function(e) {
            function t() {
                a()(this, t);
                var n = s()(this, e.call(this));
                return n.fLang = null, n.userLanguage = p.a.observable(""), n.langs = p.a.observableArray([]), n.languages = p.a.computed(function() {
                    var e = n.userLanguage();
                    return d.a.map(n.langs(), function(t) {
                        return {
                            key: t,
                            user: t === e,
                            selected: p.a.observable(!1),
                            fullName: Object(h.convertLangName)(t)
                        }
                    })
                }), n.langs.subscribe(function() {
                    n.setLanguageSelection()
                }), n
            }
            return l()(t, e), t.prototype.languageTooltipName = function(e) {
                var t = Object(h.convertLangName)(e, !0);
                return Object(h.convertLangName)(e, !1) === t ? "" : t
            }, t.prototype.setLanguageSelection = function() {
                var e = this.fLang ? p.a.unwrap(this.fLang) : "";
                d.a.each(this.languages(), function(t) {
                    t.selected(t.key === e)
                })
            }, t.prototype.onBeforeShow = function() {
                this.fLang = null, this.userLanguage(""), this.langs([])
            }, t.prototype.onShow = function(e, t, n) {
                this.fLang = e, this.userLanguage(n || ""), this.langs(t)
            }, t.prototype.changeLanguage = function(e) {
                this.fLang && this.fLang(e), this.cancelCommand()
            }, t
        }(m.a)) || o
}, function(e, t, n) {
    var o = n(104),
        i = n(84).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return o(e, i)
    }
}, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}, function(e, t, n) {
    var o = n(46),
        i = n(43),
        a = n(163)(!1),
        r = n(86)("IE_PROTO");
    e.exports = function(e, t) {
        var n, s = i(e),
            c = 0,
            l = [];
        for (n in s) n != r && o(s, n) && l.push(n);
        for (; t.length > c;) o(s, n = t[c++]) && (~a(l, n) || l.push(n));
        return l
    }
}, function(e, t, n) {
    e.exports = n(53)
}, function(e, t, n) {
    "use strict";
    var o = n(90),
        i = n(58),
        a = n(105),
        r = n(53),
        s = n(46),
        c = n(89),
        l = n(165),
        u = n(83),
        d = n(159),
        p = n(60)("iterator"),
        h = !([].keys && "next" in [].keys()),
        f = function() {
            return this
        };
    e.exports = function(e, t, n, m, b, g, y) {
        l(n, t, m);
        var v, S, O, w = function(e) {
                if (!h && e in E) return E[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, e)
                        }
                }
                return function() {
                    return new n(this, e)
                }
            },
            T = t + " Iterator",
            C = "values" == b,
            A = !1,
            E = e.prototype,
            F = E[p] || E["@@iterator"] || b && E[b],
            j = F || w(b),
            N = b ? C ? w("entries") : j : void 0,
            R = "Array" == t && E.entries || F;
        if (R && (O = d(R.call(new e))) !== Object.prototype && O.next && (u(O, T, !0), o || s(O, p) || r(O, p, f)), C && F && "values" !== F.name && (A = !0, j = function() {
                return F.call(this)
            }), o && !y || !h && !A && E[p] || r(E, p, j), c[t] = j, c[T] = f, b)
            if (v = {
                    values: C ? j : w("values"),
                    keys: g ? j : w("keys"),
                    entries: N
                }, y)
                for (S in v) S in E || a(E, S, v[S]);
            else i(i.P + i.F * (h || A), t, v);
        return v
    }
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var i = o(n(169)),
        a = o(n(153)),
        r = "function" == typeof a.default && "symbol" == typeof i.default ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof a.default && e.constructor === a.default && e !== a.default.prototype ? "symbol" : typeof e
        };
    t.default = "function" == typeof a.default && "symbol" === r(i.default) ? function(e) {
        return void 0 === e ? "undefined" : r(e)
    } : function(e) {
        return e && "function" == typeof a.default && e.constructor === a.default && e !== a.default.prototype ? "symbol" : void 0 === e ? "undefined" : r(e)
    }
}, function(e, t, n) {
    var o = n(58),
        i = n(40),
        a = n(51);
    e.exports = function(e, t) {
        var n = (i.Object || {})[e] || Object[e],
            r = {};
        r[e] = t(n), o(o.S + o.F * a(function() {
            n(1)
        }), "Object", r)
    }
}, function(e, t, n) {
    var o = n(92);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == o(e) ? e.split("") : Object(e)
    }
}, function(e, t, n) {
    var o = n(43),
        i = n(72).f;
    n(108)("getOwnPropertyDescriptor", function() {
        return function(e, t) {
            return i(o(e), t)
        }
    })
}, function(e, t, n) {
    n(110);
    var o = n(40).Object;
    e.exports = function(e, t) {
        return o.getOwnPropertyDescriptor(e, t)
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t, n) {
    "use strict";

    function o() {
        var e;
        null === N && ((N = h()("<div></div>")).appendTo(O.$body), e = N, R || (R = new I(e), b.a.applyBindingAccessorsToNode(e[0], {
            translatorInit: !0,
            template: function() {
                return {
                    name: "Cmd"
                }
            }
        }, R)))
    }
    var i = n(8),
        a = n.n(i),
        r = n(12),
        s = n.n(r),
        c = n(11),
        l = n.n(c),
        u = n(3),
        d = n.n(u),
        p = n(7),
        h = n.n(p),
        f = n(4),
        m = n.n(f),
        b = n(1),
        g = n(19),
        y = n.n(g),
        v = n(66),
        S = n.n(v),
        O = n(6),
        w = n(2),
        T = n(0),
        C = n(16),
        A = n(10),
        E = n(5),
        F = n(39),
        j = n(32),
        N = null,
        R = null,
        I = function() {
            function e(t) {
                a()(this, e), this.dom = null, this.opened = b.a.observable(!1), this.cmd = b.a.observable(""), this.focused = b.a.observable(!1), this.themes = F.a.themes, this.cmdHistory = [], this.cmdHistoryShift = 0, this.cmdHelper = b.a.observable(""), this.cmds = ["help", "version", "clear", "theme", "lang"], this.cmdsWithParameters = ["theme", "lang"], this.isAdmin = !1, this.dom = t, this.isAdmin = !!E.appSettingsGet("admin")
            }
            return e.prototype.runCmd = function(e, t, o) {
                var i, a, r, s = "",
                    c = null;
                if (this.cmdHelper(""), o) {
                    switch (e) {
                        case "lang":
                            c = (this.isAdmin ? j.a.languagesAdmin() : j.a.languages()).filter(function(e) {
                                return 0 === e.lastIndexOf(t, 0)
                            });
                            break;
                        case "theme":
                            c = F.a.themes().filter(function(e) {
                                return 0 === e.lastIndexOf(t, 0)
                            })
                    }
                    if (e && c)
                        if (1 === c.length && c[0]) this.cmd(e + " " + c[0]);
                        else if (1 < c.length && c[0] && c[1]) {
                        for (var l = "", u = 0, d = c[0].split(""), p = d.length; u < p && c[1][u] === d[u]; u++) l += d[u];
                        l && (this.cmdHelper("[" + c.join(", ") + "]"), this.cmd(e + " " + l))
                    }
                    return ""
                }
                switch (e) {
                    case "hi":
                        s = "hello";
                        break;
                    case "?":
                    case "ls":
                    case "help":
                        r = this.cmds, s = n(133).replace("{{ commands }}", r.join(" "));
                        break;
                    case "v":
                    case "version":
                        s = n(130).replace("{{ version }}", E.appSettingsGet("version") + " (" + E.appSettingsGet("appVersionType") + ")");
                        break;
                    case "clear":
                        this.dom.find(".rl-cmd-history-data").empty(), s = "";
                        break;
                    case "theme":
                        i = t, a = F.a.themes(), s = i && -1 < Object(w.inArray)(i, a) ? (Object(w.changeTheme)(i), "") : n(132).replace("{{ themes }}", a.join(", "));
                        break;
                    case "lang":
                        s = function(e, t, o) {
                            return e && -1 < Object(w.inArray)(e, o) ? (Object(A.reload)(t, e), "") : n(131).replace("{{ langs }}", o.join(", "))
                        }(t, this.isAdmin, this.isAdmin ? j.a.languagesAdmin() : j.a.languages());
                        break;
                    default:
                        s = function(e) {
                            return n(134).replace("{{ cmd }}", e)
                        }(e)
                }
                return s
            }, e.prototype.onCmd = function(e) {
                var t = this,
                    o = this.cmd().replace(/[\s]+/, " "),
                    i = Object(w.trim)(o).replace().split(/[\s]+/),
                    a = i.shift();
                if ("" === Object(w.trim)(o)) return !1;
                if (e)
                    if (-1 < Object(w.inArray)(a, this.cmds)) {
                        var r = this.runCmd(a, i.join(" "), !0);
                        r && this.cmd(r)
                    } else {
                        var s = this.cmds.filter(function(e) {
                            return e !== a && 0 === e.lastIndexOf(a, 0)
                        });
                        1 === s.length && s[0] && this.cmd(s[0] + (-1 < Object(w.inArray)(s[0], this.cmdsWithParameters) ? " " : ""))
                    }
                else {
                    this.cmdHistory.unshift(o), this.cmdHistory = m.a.uniq(this.cmdHistory), this.cmdHistoryShift = 0;
                    var c = this.runCmd(a, i.join(" "), !1),
                        l = this.dom.find(".rl-cmd-history-data");
                    l && l[0] && (l.append(h()("<div></div>").html(n(129).replace("{{ cmd }}", o))), c && l.append(h()("<div></div>").html(c)), m.a.delay(function() {
                        t.dom.find(".rl-cmd-history").scrollTop(l.height())
                    }, 50))
                }
                return !0
            }, e.prototype.onEsc = function() {
                return this.opened(!1), !1
            }, e.prototype.onTab = function() {
                return this.onCmd(!0), !1
            }, e.prototype.onEnter = function() {
                return this.onCmd(!1), this.cmd(""), !1
            }, e.prototype.onKeyDown = function(e) {
                if (e && e.keyCode && !e.metaKey && !e.ctrlKey && !e.shiftKey && 0 < this.cmdHistory.length) {
                    var t = d.a.parseInt(e.keyCode, 10);
                    if (T.EventKeyCode.Up === t || T.EventKeyCode.Down === t) return this.cmdHistory[this.cmdHistoryShift] ? (this.cmd(this.cmdHistory[this.cmdHistoryShift]), T.EventKeyCode.Up === t ? this.cmdHistoryShift += 1 : T.EventKeyCode.Down === t && (this.cmdHistoryShift -= 1)) : this.cmdHistoryShift = 0, !1
                }
                return !0
            }, e
        }(),
        L = n(22),
        _ = n(25),
        P = n(9),
        D = function() {
            function e() {
                a()(this, e)
            }
            return e.prototype.bootstart = function() {}, e
        }();
    n.d(t, "a", function() {
        return M
    });
    var M = function(e) {
        function t(n) {
            a()(this, t);
            var i = s()(this, e.call(this));
            return i.googlePreviewSupportedCache = null, i.isLocalAutocomplete = !0, i.iframe = null, i.lastErrorTime = 0, i.iframe = h()('<iframe class="internal-hiddden" />').appendTo("body"), O.$win.on("error", function(e) {
                if (e && e.originalEvent && e.originalEvent.message && -1 === Object(w.inArray)(e.originalEvent.message, ["Script error.", "Uncaught Error: Error calling method on NPObject."])) {
                    var t = Object(w.timestamp)();
                    if (i.lastErrorTime >= t) return;
                    i.lastErrorTime = t, n.jsError(w.noop, e.originalEvent.message, e.originalEvent.filename, e.originalEvent.lineno, d.a.location && d.a.location.toString ? d.a.location.toString() : "", O.$html.attr("class"), Object(w.microtime)() - O.startMicrotime)
                }
            }), O.$win.on("resize", function() {
                L.a("window.resize")
            }), L.b("window.resize", m.a.throttle(function() {
                var e = O.$win.height(),
                    t = O.$win.height();
                O.$win.__sizes[0] === e && O.$win.__sizes[1] === t || (O.$win.__sizes[0] = e, O.$win.__sizes[1] = t, L.a("window.resize.real"))
            }, T.Magics.Time50ms)), O.$doc.on("keydown", function(e) {
                e && e.ctrlKey && O.$html.addClass("rl-ctrl-key-pressed")
            }).on("keyup", function(e) {
                e && !e.ctrlKey && O.$html.removeClass("rl-ctrl-key-pressed")
            }), O.$doc.on("mousemove keypress click", m.a.debounce(function() {
                L.a("rl.auto-logout-refresh")
            }, T.Magics.Time5s)), y()("esc, enter", T.KeyState.All, function() {
                Object(w.detectDropdownVisibility)()
            }), E.appSettingsGet("allowCmdInterface") && y()("ctrl+shift+`", T.KeyState.All, function() {
                E.appSettingsGet("allowCmdInterface") && (o(), m.a.delay(function() {
                    R && (R.opened(!R.opened()), R.opened() && m.a.delay(function() {
                        R && R.focused && R.focused(!0)
                    }, T.Magics.Time50ms))
                }, T.Magics.Time50ms))
            }), i
        }
        return l()(t, e), t.prototype.remote = function() {
            return null
        }, t.prototype.data = function() {
            return null
        }, t.prototype.getApplicationConfiguration = function(e, t) {
            return this.applicationConfiguration[e] || t
        }, t.prototype.download = function(e) {
            if (O.sUserAgent && (-1 < O.sUserAgent.indexOf("chrome") || -1 < O.sUserAgent.indexOf("chrome"))) {
                var t = d.a.document.createElement("a");
                if (t.href = e, d.a.document && d.a.document.createEvent) {
                    var n = d.a.document.createEvent.MouseEvents;
                    if (n && n.initEvent && t.dispatchEvent) return n.initEvent("click", !0, !0), t.dispatchEvent(n), !0
                }
            }
            return O.bMobileDevice ? (d.a.open(e, "_self"), d.a.focus()) : this.iframe.attr("src", e), !0
        }, t.prototype.googlePreviewSupported = function() {
            return null === this.googlePreviewSupportedCache && (this.googlePreviewSupportedCache = !!E.settingsGet("AllowGoogleSocial") && !!E.settingsGet("AllowGoogleSocialPreview")), this.googlePreviewSupportedCache
        }, t.prototype.setWindowTitle = function(e) {
            e = Object(w.isNormal)(e) && 0 < e.length ? "" + e : "", E.settingsGet("Title") && (e += (e ? " - " : "") + E.settingsGet("Title")), d.a.document.title = e + " ...", d.a.document.title = e
        }, t.prototype.redirectToAdminPanel = function() {
            m.a.delay(function() {
                d.a.location.href = Object(C.x)()
            }, T.Magics.Time100ms)
        }, t.prototype.clearClientSideToken = function() {
            d.a.__rlah_clear && d.a.__rlah_clear()
        }, t.prototype.setClientSideToken = function(e) {
            d.a.__rlah_set && (d.a.__rlah_set(e), E.settingsSet("AuthAccountHash", e), Object(C.v)())
        }, t.prototype.loginAndLogoutReload = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                o = !!E.appSettingsGet("inIframe"),
                i = Object(w.pString)(E.appSettingsGet("customLogoutLink"));
            t && this.clearClientSideToken(), t && n && d.a.close && d.a.close(), i = i || (e ? Object(C.x)() : Object(C.y)()), t && d.a.location.href !== i ? m.a.delay(function() {
                o && d.a.parent ? d.a.parent.location.href = i : d.a.location.href = i, O.$win.trigger("rl.tooltips.diactivate")
            }, T.Magics.Time100ms) : (Object(P.routeOff)(), Object(P.setHash)(Object(C.w)(), !0), Object(P.routeOff)(), m.a.delay(function() {
                o && d.a.parent ? d.a.parent.location.reload() : d.a.location.reload(), O.$win.trigger("rl.tooltips.diactivate")
            }, T.Magics.Time100ms))
        }, t.prototype.historyBack = function() {
            d.a.history.back()
        }, t.prototype.bootstart = function() {
            L.a("rl.bootstart");
            var e = E.appSettingsGet("mobile");
            b.a.components.register("SaveTrigger", n(128).default), b.a.components.register("Input", n(127).default), b.a.components.register("Select", n(126).default), b.a.components.register("Radio", n(121).default), b.a.components.register("TextArea", n(125).default), b.a.components.register("Date", n(124).default), b.a.components.register("x-script", n(123).default), E.appSettingsGet("materialDesign") && O.bAnimationSupported ? (b.a.components.register("Checkbox", n(122).default), b.a.components.register("CheckboxSimple", n(80).default)) : (b.a.components.register("Checkbox", n(80).default), b.a.components.register("CheckboxSimple", n(80).default)), Object(A.initOnStartOrLangChange)(A.initNotificationLanguage), m.a.delay(w.windowResizeCallback, T.Magics.Time1s), L.b("ssm.mobile-enter", function() {
                Object(O.leftPanelDisabled)(!0)
            }), L.b("ssm.mobile-leave", function() {
                Object(O.leftPanelDisabled)(!1)
            }), e ? (O.$html.addClass("ssm-state-mobile").addClass("rl-mobile"), L.a("ssm.mobile-enter")) : (O.$html.addClass("rl-desktop"), S.a.addState({
                id: "mobile",
                query: "(max-width: 767px)",
                onEnter: function() {
                    O.$html.addClass("ssm-state-mobile"), L.a("ssm.mobile-enter")
                },
                onLeave: function() {
                    O.$html.removeClass("ssm-state-mobile"), L.a("ssm.mobile-leave")
                }
            }), S.a.addState({
                id: "tablet",
                query: "(min-width: 768px) and (max-width: 999px)",
                onEnter: function() {
                    O.$html.addClass("ssm-state-tablet")
                },
                onLeave: function() {
                    O.$html.removeClass("ssm-state-tablet")
                }
            }), S.a.addState({
                id: "desktop",
                query: "(min-width: 1000px) and (max-width: 1400px)",
                onEnter: function() {
                    O.$html.addClass("ssm-state-desktop")
                },
                onLeave: function() {
                    O.$html.removeClass("ssm-state-desktop")
                }
            }), S.a.addState({
                id: "desktop-large",
                query: "(min-width: 1401px)",
                onEnter: function() {
                    O.$html.addClass("ssm-state-desktop-large")
                },
                onLeave: function() {
                    O.$html.removeClass("ssm-state-desktop-large")
                }
            })), O.leftPanelDisabled.subscribe(function(e) {
                O.$html.toggleClass("rl-left-panel-disabled", e), O.$html.toggleClass("rl-left-panel-enabled", !e)
            }), O.leftPanelType.subscribe(function(e) {
                O.$html.toggleClass("rl-left-panel-none", "none" === e), O.$html.toggleClass("rl-left-panel-short", "short" === e)
            }), O.leftPanelDisabled.valueHasMutated(), j.a.populate(), F.a.populate(), _.a.populate()
        }, t
    }(D)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return y
    });
    var o = n(8),
        i = n.n(o),
        a = n(12),
        r = n.n(a),
        s = n(11),
        c = n.n(s),
        l = n(4),
        u = n.n(l),
        d = n(7),
        p = n.n(d),
        h = n(1),
        f = n(6),
        m = n(2),
        b = n(16),
        g = n(9),
        y = function(e) {
            function t(n) {
                i()(this, t);
                var o = r()(this, e.call(this, "settings", n));
                return o.menu = h.a.observableArray([]), o.oCurrentSubScreen = null, o.oViewModelPlace = null, o.setupSettings(), o
            }
            return c()(t, e), t.prototype.setupSettings = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                e && e()
            }, t.prototype.onRoute = function(e) {
                var t = this,
                    n = null,
                    o = null,
                    i = null,
                    a = null;
                if ((o = u.a.find(f.VIEW_MODELS.settings, function(t) {
                        return t && t.__rlSettingsData && e === t.__rlSettingsData.Route
                    })) && (u.a.find(f.VIEW_MODELS["settings-removed"], function(e) {
                        return e && e === o
                    }) && (o = null), o && u.a.find(f.VIEW_MODELS["settings-disabled"], function(e) {
                        return e && e === o
                    }) && (o = null)), o) {
                    if (o.__builded && o.__vm) n = o.__vm;
                    else if ((i = this.oViewModelPlace) && 1 === i.length) {
                        n = new o, (a = p()("<div></div>").addClass("rl-settings-view-model").hide()).appendTo(i), n.viewModelDom = a, n.__rlSettingsData = o.__rlSettingsData, o.__dom = a, o.__builded = !0, o.__vm = n;
                        var r = {
                            name: o.__rlSettingsData.Template
                        };
                        h.a.applyBindingAccessorsToNode(a[0], {
                            translatorInit: !0,
                            template: function() {
                                return r
                            }
                        }, n), Object(m.delegateRun)(n, "onBuild", [a])
                    } else Object(m.log)("Cannot find sub settings view model position: SettingsSubScreen");
                    n && u.a.defer(function() {
                        t.oCurrentSubScreen && (Object(m.delegateRun)(t.oCurrentSubScreen, "onHide"), t.oCurrentSubScreen.viewModelDom.hide()), t.oCurrentSubScreen = n, t.oCurrentSubScreen && (Object(m.delegateRun)(t.oCurrentSubScreen, "onBeforeShow"), t.oCurrentSubScreen.viewModelDom.show(), Object(m.delegateRun)(t.oCurrentSubScreen, "onShow"), Object(m.delegateRun)(t.oCurrentSubScreen, "onShowWithDelay", [], 200), u.a.each(t.menu(), function(e) {
                            e.selected(n && n.__rlSettingsData && e.route === n.__rlSettingsData.Route)
                        }), p()("#rl-content .b-settings .b-content .content").scrollTop(0)), Object(m.windowResize)()
                    })
                } else Object(g.setHash)(Object(b.z)(), !1, !0)
            }, t.prototype.onHide = function() {
                this.oCurrentSubScreen && this.oCurrentSubScreen.viewModelDom && (Object(m.delegateRun)(this.oCurrentSubScreen, "onHide"), this.oCurrentSubScreen.viewModelDom.hide())
            }, t.prototype.onBuild = function() {
                var e = this;
                u.a.each(f.VIEW_MODELS.settings, function(t) {
                    t && t.__rlSettingsData && !u.a.find(f.VIEW_MODELS["settings-removed"], function(e) {
                        return e && e === t
                    }) && e.menu.push({
                        route: t.__rlSettingsData.Route,
                        label: t.__rlSettingsData.Label,
                        selected: h.a.observable(!1),
                        disabled: !!u.a.find(f.VIEW_MODELS["settings-disabled"], function(e) {
                            return e && e === t
                        })
                    })
                }), this.oViewModelPlace = p()("#rl-content #rl-settings-subscreen")
            }, t.prototype.routes = function() {
                var e = u.a.find(f.VIEW_MODELS.settings, function(e) {
                        return e && e.__rlSettingsData && e.__rlSettingsData.IsDefault
                    }),
                    t = e && e.__rlSettingsData ? e.__rlSettingsData.Route : "general",
                    n = {
                        subname: /^(.*)$/,
                        normalize_: function(e, n) {
                            return n.subname = Object(m.isUnd)(n.subname) ? t : Object(m.pString)(n.subname), [n.subname]
                        }
                    };
                return [
                    ["{subname}/", n],
                    ["{subname}", n],
                    ["", n]
                ]
            }, t
        }(n(65).a)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return y
    });
    var o = n(8),
        i = n.n(o),
        a = n(3),
        r = n.n(a),
        s = n(4),
        c = n.n(s),
        l = n(7),
        u = n.n(l),
        d = n(23),
        p = n(0),
        h = n(2),
        f = n(6),
        m = n(16),
        b = n(29),
        g = n(5),
        y = function() {
            function e() {
                i()(this, e), this.oRequests = {}
            }
            return e.prototype.defaultResponse = function(e, t, n, o, i, a) {
                var r = function() {
                    p.StorageResultType.Success !== n && f.data.bUnload && (n = p.StorageResultType.Unload), p.StorageResultType.Success === n && o && !o.Result ? (o && -1 < Object(h.inArray)(o.ErrorCode, [p.Notification.AuthError, p.Notification.AccessError, p.Notification.ConnectionError, p.Notification.DomainNotAllowed, p.Notification.AccountNotAllowed, p.Notification.MailServerError, p.Notification.UnknownNotification, p.Notification.UnknownError]) && (f.data.iAjaxErrorCount += 1), o && p.Notification.InvalidToken === o.ErrorCode && (f.data.iTokenErrorCount += 1), d.q < f.data.iTokenErrorCount && f.data.__APP__ && f.data.__APP__.loginAndLogoutReload && f.data.__APP__.loginAndLogoutReload(!1, !0), (o.ClearAuth || o.Logout || d.a < f.data.iAjaxErrorCount) && f.data.__APP__ && f.data.__APP__.clearClientSideToken && (f.data.__APP__.clearClientSideToken(), !o.ClearAuth && f.data.__APP__.loginAndLogoutReload && f.data.__APP__.loginAndLogoutReload(!1, !0))) : p.StorageResultType.Success === n && o && o.Result && (f.data.iAjaxErrorCount = 0, f.data.iTokenErrorCount = 0), Object(b.f)("ajax-default-response", [t, p.StorageResultType.Success === n ? o : null, n, i, a]), e && e(n, p.StorageResultType.Success === n ? o : null, i, t, a)
                };
                switch (n) {
                    case "success":
                        n = p.StorageResultType.Success;
                        break;
                    case "abort":
                        n = p.StorageResultType.Abort;
                        break;
                    default:
                        n = p.StorageResultType.Error
                }
                p.StorageResultType.Error === n ? c.a.delay(r, 300) : r()
            }, e.prototype.ajaxRequest = function(e, t) {
                var n, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2e4,
                    i = this,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                    l = "" === a,
                    d = (new r.a.Date).getTime();
                (n = (t = t || {}).Action || "") && 0 < s.length && c.a.each(s, function(e) {
                    i.oRequests[e] && (i.oRequests[e].__aborted = !0, i.oRequests[e].abort && i.oRequests[e].abort(), i.oRequests[e] = null)
                }), l && (t.XToken = g.appSettingsGet("token"));
                var p = u.a.ajax({
                    type: l ? "POST" : "GET",
                    url: Object(m.a)(a),
                    async: !0,
                    dataType: "json",
                    data: l ? t : {},
                    headers: {},
                    timeout: o,
                    global: !0
                });
                return p.always(function(o, a) {
                    var s = !1;
                    o && o.Time && (s = Object(h.pInt)(o.Time) > (new r.a.Date).getTime() - d), n && i.oRequests[n] && (i.oRequests[n].__aborted && (a = "abort"), i.oRequests[n] = null), i.defaultResponse(e, n, a, o, s, t)
                }), n && 0 < s.length && -1 < Object(h.inArray)(n, s) && (this.oRequests[n] && (this.oRequests[n].__aborted = !0, this.oRequests[n].abort && this.oRequests[n].abort(), this.oRequests[n] = null), this.oRequests[n] = p), p
            }, e.prototype.defaultRequest = function(e, t, n, o, i, a) {
                return (n = n || {}).Action = t, i = Object(h.pString)(i), Object(b.f)("ajax-default-request", [t, n, i]), this.ajaxRequest(e, n, Object(h.isUnd)(o) ? d.g : Object(h.pInt)(o), i, a)
            }, e.prototype.noop = function(e) {
                this.defaultRequest(e, "Noop")
            }, e.prototype.jsError = function(e, t, n, o, i, a, r) {
                this.defaultRequest(e, "JsError", {
                    Message: t,
                    FileName: n,
                    LineNo: o,
                    Location: i,
                    HtmlCapa: a,
                    TimeOnPage: r
                })
            }, e.prototype.jsInfo = function(e, t, n) {
                var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                this.defaultRequest(e, "JsInfo", {
                    Type: t,
                    Data: n,
                    IsError: o ? "1" : "0"
                })
            }, e.prototype.getPublicKey = function(e) {
                this.defaultRequest(e, "GetPublicKey")
            }, e.prototype.jsVersion = function(e, t) {
                this.defaultRequest(e, "Version", {
                    Version: t
                })
            }, e
        }()
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return c
    });
    var o = n(8),
        i = n.n(o),
        a = n(1),
        r = n(6),
        s = n(5),
        c = function() {
            function e() {
                i()(this, e), this.allowLanguagesOnSettings = a.a.observable(!0), this.allowLanguagesOnLogin = a.a.observable(!0), this.newMoveToFolder = a.a.observable(!0), this.interfaceAnimation = a.a.observable(!0), this.interfaceAnimation.subscribe(function(e) {
                    var t = r.bMobileDevice || !e;
                    r.$html.toggleClass("rl-anim", !t).toggleClass("no-rl-anim", t)
                }), this.interfaceAnimation.valueHasMutated(), this.prem = a.a.observable(!1), this.community = a.a.observable(!0)
            }
            return e.prototype.populate = function() {
                this.allowLanguagesOnLogin(!!s.settingsGet("AllowLanguagesOnLogin")), this.allowLanguagesOnSettings(!!s.settingsGet("AllowLanguagesOnSettings")), this.newMoveToFolder(!!s.settingsGet("NewMoveToFolder")), this.interfaceAnimation(!!s.settingsGet("InterfaceAnimation")), this.prem(!!s.settingsGet("PremType")), this.community(!!s.settingsGet("Community"))
            }, e
        }()
}, function(e, t, n) {
    "use strict";
    var o = n(3),
        i = n.n(o),
        a = n(2),
        r = n(6),
        s = n(0),
        c = n(29),
        l = n(10),
        u = n(44);
    t.a = function(e) {
        r.data.__APP__ = e, r.$win.on("keydown", a.killCtrlACtrlS).on("unload", function() {
            r.data.bUnload = !0
        }), r.$html.addClass(r.bMobileDevice ? "mobile" : "no-mobile").on("click.dropdown.data-api", a.detectDropdownVisibility);
        var t = i.a.rl || {};
        t.i18n = l.i18n, t.createCommand = a.createCommandLegacy, t.addSettingsViewModel = c.b, t.addSettingsViewModelForAdmin = c.c, t.addHook = c.a, t.settingsGet = c.d, t.pluginSettingsGet = c.h, t.pluginRemoteRequest = c.e, t.EmailModel = u.EmailModel, t.Enums = s, i.a.rl = t, i.a.__APP_BOOT = function(t) {
            Object(a.domReady)(function() {
                i.a.setTimeout(function() {
                    i.a.rainloopTEMPLATES && i.a.rainloopTEMPLATES[0] ? (i.a.document.getElementById("rl-templates").innerHTML = i.a.rainloopTEMPLATES[0], i.a.setTimeout(function() {
                        r.$html.removeClass("no-js rl-booted-trigger").addClass("rl-booted"), e.bootstart()
                    }, s.Magics.Time10ms)) : t(), i.a.__APP_BOOT = null
                }, s.Magics.Time10ms)
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "FolderSystemPopupView", function() {
        return w
    }), n.d(t, "default", function() {
        return w
    });
    var o, i = n(8),
        a = n.n(i),
        r = n(12),
        s = n.n(r),
        c = n(11),
        l = n.n(c),
        u = n(4),
        d = n.n(u),
        p = n(1),
        h = n(0),
        f = n(23),
        m = n(2),
        b = n(10),
        g = n(13),
        y = n(5),
        v = n(17),
        S = n(9),
        O = n(24),
        w = Object(S.popup)({
            name: "View/Popup/FolderSystem",
            templateID: "PopupsFolderSystem"
        })(o = function(e) {
            function t() {
                a()(this, t);
                var n = s()(this, e.call(this));
                n.sChooseOnText = "", n.sUnuseText = "", Object(b.initOnStartOrLangChange)(function() {
                    n.sChooseOnText = Object(b.i18n)("POPUPS_SYSTEM_FOLDERS/SELECT_CHOOSE_ONE"), n.sUnuseText = Object(b.i18n)("POPUPS_SYSTEM_FOLDERS/SELECT_UNUSE_NAME")
                }), n.notification = p.a.observable(""), n.folderSelectList = p.a.computed(function() {
                    return Object(m.folderListOptionsBuilder)([], g.a.folderList(), g.a.folderListSystemNames(), [
                        ["", n.sChooseOnText],
                        [f.r, n.sUnuseText]
                    ], null, null, null, null, null, !0)
                }), n.sentFolder = g.a.sentFolder, n.draftFolder = g.a.draftFolder, n.spamFolder = g.a.spamFolder, n.trashFolder = g.a.trashFolder, n.archiveFolder = g.a.archiveFolder;
                var o = function() {
                        y.settingsSet("SentFolder", g.a.sentFolder()), y.settingsSet("DraftFolder", g.a.draftFolder()), y.settingsSet("SpamFolder", g.a.spamFolder()), y.settingsSet("TrashFolder", g.a.trashFolder()), y.settingsSet("ArchiveFolder", g.a.archiveFolder())
                    },
                    i = d.a.debounce(function() {
                        o(), v.a.saveSystemFolders(m.noop, {
                            SentFolder: g.a.sentFolder(),
                            DraftFolder: g.a.draftFolder(),
                            SpamFolder: g.a.spamFolder(),
                            TrashFolder: g.a.trashFolder(),
                            ArchiveFolder: g.a.archiveFolder(),
                            NullFolder: "NullFolder"
                        })
                    }, h.Magics.Time1s),
                    r = function() {
                        o(), i()
                    };
                return g.a.sentFolder.subscribe(r), g.a.draftFolder.subscribe(r), g.a.spamFolder.subscribe(r), g.a.trashFolder.subscribe(r), g.a.archiveFolder.subscribe(r), n.defautOptionsAfterRender = m.defautOptionsAfterRender, n
            }
            return l()(t, e), t.prototype.onShow = function() {
                var e = "";
                switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.SetSystemFoldersNotification.None) {
                    case h.SetSystemFoldersNotification.Sent:
                        e = Object(b.i18n)("POPUPS_SYSTEM_FOLDERS/NOTIFICATION_SENT");
                        break;
                    case h.SetSystemFoldersNotification.Draft:
                        e = Object(b.i18n)("POPUPS_SYSTEM_FOLDERS/NOTIFICATION_DRAFTS");
                        break;
                    case h.SetSystemFoldersNotification.Spam:
                        e = Object(b.i18n)("POPUPS_SYSTEM_FOLDERS/NOTIFICATION_SPAM");
                        break;
                    case h.SetSystemFoldersNotification.Trash:
                        e = Object(b.i18n)("POPUPS_SYSTEM_FOLDERS/NOTIFICATION_TRASH");
                        break;
                    case h.SetSystemFoldersNotification.Archive:
                        e = Object(b.i18n)("POPUPS_SYSTEM_FOLDERS/NOTIFICATION_ARCHIVE")
                }
                this.notification(e)
            }, t
        }(O.a)) || o
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return f
    });
    var o = n(8),
        i = n.n(o),
        a = n(7),
        r = n.n(a),
        s = n(4),
        c = n.n(s),
        l = n(19),
        u = n.n(l),
        d = n(1),
        p = n(0),
        h = n(2),
        f = function() {
            function e(t, n, o, a, r, s, l) {
                var u = this;
                i()(this, e), this.selectedItemUseCallback = !0, this.iSelectNextHelper = 0, this.iFocusedNextHelper = 0, this.sLastUid = "", this.oCallbacks = {}, this.list = t, this.listChecked = d.a.computed(function() {
                    return c.a.filter(u.list(), function(e) {
                        return e.checked()
                    })
                }).extend({
                    rateLimit: 0
                }), this.isListChecked = d.a.computed(function() {
                    return 0 < u.listChecked().length
                }), this.focusedItem = o || d.a.observable(null), this.selectedItem = n || d.a.observable(null), this.itemSelectedThrottle = c.a.debounce(c.a.bind(this.itemSelected, this), 300), this.listChecked.subscribe(function(e) {
                    0 < e.length ? null === u.selectedItem() ? u.selectedItem.valueHasMutated && u.selectedItem.valueHasMutated() : u.selectedItem(null) : u.autoSelect() && u.focusedItem() && u.selectedItem(u.focusedItem())
                }, this), this.selectedItem.subscribe(function(e) {
                    e ? (u.isListChecked() && c.a.each(u.listChecked(), function(e) {
                        e.checked(!1)
                    }), u.selectedItemUseCallback && u.itemSelectedThrottle(e)) : u.selectedItemUseCallback && u.itemSelected(null)
                }, this), this.selectedItem = this.selectedItem.extend({
                    toggleSubscribeProperty: [this, "selected"]
                }), this.focusedItem = this.focusedItem.extend({
                    toggleSubscribeProperty: [null, "focused"]
                }), this.sItemSelector = a, this.sItemSelectedSelector = r, this.sItemCheckedSelector = s, this.sItemFocusedSelector = l, this.focusedItem.subscribe(function(e) {
                    e && (u.sLastUid = u.getItemUid(e))
                }, this);
                var p = [],
                    f = [],
                    m = null,
                    b = null;
                this.list.subscribe(function(e) {
                    Object(h.isArray)(e) && c.a.each(e, function(e) {
                        if (e) {
                            var t = u.getItemUid(e);
                            p.push(t), e.checked() && f.push(t), null === m && e.focused() && (m = t), null === b && e.selected() && (b = t)
                        }
                    })
                }, this, "beforeChange"), this.list.subscribe(function(e) {
                    var t = null,
                        n = !1,
                        o = m,
                        i = !1,
                        a = !1,
                        r = 0,
                        s = [];
                    u.selectedItemUseCallback = !1, u.focusedItem(null), u.selectedItem(null), Object(h.isArray)(e) && (r = f.length, c.a.each(e, function(e) {
                        var t = u.getItemUid(e);
                        s.push(t), null !== m && m === t && (u.focusedItem(e), m = null), 0 < r && -1 < Object(h.inArray)(t, f) && (i = !0, e.checked(!0), r -= 1), i || null === b || b !== t || (a = !0, u.selectedItem(e), b = null)
                    }), u.selectedItemUseCallback = !0, i || a || !u.autoSelect() || (u.focusedItem() ? u.selectedItem(u.focusedItem()) : 0 < e.length && (null !== o && (n = !1, (o = c.a.find(p, function(e) {
                        return n && -1 < Object(h.inArray)(e, s) ? e : (o === e && (n = !0), !1)
                    })) && (t = c.a.find(e, function(e) {
                        return o === u.getItemUid(e)
                    }))), u.selectedItem(t || null), u.focusedItem(u.selectedItem()))), (0 !== u.iSelectNextHelper || 0 !== u.iFocusedNextHelper) && 0 < e.length && !u.focusedItem() && (t = null, 0 !== u.iFocusedNextHelper && (t = e[-1 === u.iFocusedNextHelper ? e.length - 1 : 0] || null), t || 0 === u.iSelectNextHelper || (t = e[-1 === u.iSelectNextHelper ? e.length - 1 : 0] || null), t && (0 !== u.iSelectNextHelper && u.selectedItem(t || null), u.focusedItem(t || null), u.scrollToFocused(), c.a.delay(function() {
                        return u.scrollToFocused()
                    }, 100)), u.iSelectNextHelper = 0, u.iFocusedNextHelper = 0)), p = [], f = [], m = null, b = null
                })
            }
            return e.prototype.itemSelected = function(e) {
                this.isListChecked() ? e || (this.oCallbacks.onItemSelect || h.noop)(e || null) : e && (this.oCallbacks.onItemSelect || h.noop)(e)
            }, e.prototype.goDown = function(e) {
                this.newSelectPosition(p.EventKeyCode.Down, !1, e)
            }, e.prototype.goUp = function(e) {
                this.newSelectPosition(p.EventKeyCode.Up, !1, e)
            }, e.prototype.unselect = function() {
                this.selectedItem(null), this.focusedItem(null)
            }, e.prototype.init = function(e, t) {
                var n = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "all";
                this.oContentVisible = e, this.oContentScrollable = t, this.oContentVisible && this.oContentScrollable && (r()(this.oContentVisible).on("selectstart", function(e) {
                    e && e.preventDefault && e.preventDefault()
                }).on("click", this.sItemSelector, function(e) {
                    n.actionClick(d.a.dataFor(e.currentTarget), e)
                }).on("click", this.sItemCheckedSelector, function(e) {
                    var t = d.a.dataFor(e.currentTarget);
                    t && (e && e.shiftKey ? n.actionClick(t, e) : (n.focusedItem(t), t.checked(!t.checked())))
                }), u()("enter", o, function() {
                    return !(n.focusedItem() && !n.focusedItem().selected() && (n.actionClick(n.focusedItem()), 1))
                }), u()("ctrl+up, command+up, ctrl+down, command+down", o, function() {
                    return !1
                }), u()("up, shift+up, down, shift+down, home, end, pageup, pagedown, insert, space", o, function(e, t) {
                    if (e && t && t.shortcut) {
                        var o = 0;
                        switch (t.shortcut) {
                            case "up":
                            case "shift+up":
                                o = p.EventKeyCode.Up;
                                break;
                            case "down":
                            case "shift+down":
                                o = p.EventKeyCode.Down;
                                break;
                            case "insert":
                                o = p.EventKeyCode.Insert;
                                break;
                            case "space":
                                o = p.EventKeyCode.Space;
                                break;
                            case "home":
                                o = p.EventKeyCode.Home;
                                break;
                            case "end":
                                o = p.EventKeyCode.End;
                                break;
                            case "pageup":
                                o = p.EventKeyCode.PageUp;
                                break;
                            case "pagedown":
                                o = p.EventKeyCode.PageDown
                        }
                        if (0 < o) return n.newSelectPosition(o, u.a.shift), !1
                    }
                    return !0
                }))
            }, e.prototype.autoSelect = function() {
                return !!(this.oCallbacks.onAutoSelect || h.noopTrue)()
            }, e.prototype.doUpUpOrDownDown = function(e) {
                (this.oCallbacks.onUpUpOrDownDown || h.noopTrue)(!!e)
            }, e.prototype.getItemUid = function(e) {
                var t = "",
                    n = this.oCallbacks.onItemGetUid || null;
                return n && e && (t = n(e)), t.toString()
            }, e.prototype.newSelectPosition = function(e, t, n) {
                var o = 0,
                    i = !1,
                    a = !1,
                    r = null,
                    s = this.list(),
                    l = s ? s.length : 0,
                    u = this.focusedItem();
                if (0 < l)
                    if (u) {
                        if (u)
                            if (p.EventKeyCode.Down === e || p.EventKeyCode.Up === e || p.EventKeyCode.Insert === e || p.EventKeyCode.Space === e) c.a.each(s, function(t) {
                                if (!a) switch (e) {
                                    case p.EventKeyCode.Up:
                                        u === t ? a = !0 : r = t;
                                        break;
                                    case p.EventKeyCode.Down:
                                    case p.EventKeyCode.Insert:
                                        i ? (r = t, a = !0) : u === t && (i = !0)
                                }
                            }), r || p.EventKeyCode.Down !== e && p.EventKeyCode.Up !== e || this.doUpUpOrDownDown(p.EventKeyCode.Up === e);
                            else if (p.EventKeyCode.Home === e || p.EventKeyCode.End === e) p.EventKeyCode.Home === e ? r = s[0] : p.EventKeyCode.End === e && (r = s[s.length - 1]);
                        else if (p.EventKeyCode.PageDown === e) {
                            for (; o < l; o++)
                                if (u === s[o]) {
                                    r = s[o = l - 1 < (o += 10) ? l - 1 : o];
                                    break
                                }
                        } else if (p.EventKeyCode.PageUp === e)
                            for (o = l; 0 <= o; o--)
                                if (u === s[o]) {
                                    r = s[o = 0 > (o -= 10) ? 0 : o];
                                    break
                                }
                    } else p.EventKeyCode.Down === e || p.EventKeyCode.Insert === e || p.EventKeyCode.Space === e || p.EventKeyCode.Home === e || p.EventKeyCode.PageUp === e ? r = s[0] : p.EventKeyCode.Up !== e && p.EventKeyCode.End !== e && p.EventKeyCode.PageDown !== e || (r = s[s.length - 1]);
                r ? (this.focusedItem(r), u && (t ? p.EventKeyCode.Up !== e && p.EventKeyCode.Down !== e || u.checked(!u.checked()) : p.EventKeyCode.Insert !== e && p.EventKeyCode.Space !== e || u.checked(!u.checked())), !this.autoSelect() && !n || this.isListChecked() || p.EventKeyCode.Space === e || this.selectedItem(r), this.scrollToFocused()) : u && ((!t || p.EventKeyCode.Up !== e && p.EventKeyCode.Down !== e) && p.EventKeyCode.Insert !== e && p.EventKeyCode.Space !== e || u.checked(!u.checked()), this.focusedItem(u))
            }, e.prototype.scrollToFocused = function() {
                if (!this.oContentVisible || !this.oContentScrollable) return !1;
                var e = this.list(),
                    t = r()(this.sItemFocusedSelector, this.oContentScrollable),
                    n = t.position(),
                    o = this.oContentVisible.height(),
                    i = t.outerHeight();
                return e && e[0] && e[0].focused() ? (this.oContentScrollable.scrollTop(0), !0) : !(!n || !(0 > n.top || n.top + i > o) || (this.oContentScrollable.scrollTop(0 > n.top ? this.oContentScrollable.scrollTop() + n.top - 20 : this.oContentScrollable.scrollTop() + n.top - o + i + 20), 0))
            }, e.prototype.scrollToTop = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return !(!this.oContentVisible || !this.oContentScrollable || (e || 50 > this.oContentScrollable.scrollTop() ? this.oContentScrollable.scrollTop(0) : this.oContentScrollable.stop().animate({
                    scrollTop: 0
                }, 200), 0))
            }, e.prototype.eventClickFunction = function(e, t) {
                var n = 0,
                    o = 0,
                    i = !1,
                    a = !1,
                    r = [],
                    s = !1,
                    c = null,
                    l = "",
                    u = this.getItemUid(e);
                if (t && t.shiftKey && "" !== u && "" !== this.sLastUid && u !== this.sLastUid)
                    for (r = this.list(), s = e.checked(), n = 0, o = r.length; n < o; n++) c = r[n], i = !1, (l = this.getItemUid(c)) !== this.sLastUid && l !== u || (i = !0), i && (a = !a), (a || i) && c.checked(s);
                this.sLastUid = "" === u ? "" : u
            }, e.prototype.actionClick = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (e) {
                    var n = !0;
                    t && (!t.shiftKey || t.ctrlKey || t.metaKey || t.altKey ? !t.ctrlKey && !t.metaKey || t.shiftKey || t.altKey || (n = !1, this.focusedItem(e), this.selectedItem() && e !== this.selectedItem() && this.selectedItem().checked(!0), e.checked(!e.checked())) : (n = !1, "" === this.sLastUid && (this.sLastUid = this.getItemUid(e)), e.checked(!e.checked()), this.eventClickFunction(e, t), this.focusedItem(e))), n && this.selectMessageItem(e)
                }
            }, e.prototype.on = function(e, t) {
                this.oCallbacks[e] = t
            }, e.prototype.selectMessageItem = function(e) {
                this.focusedItem(e), this.selectedItem(e), this.scrollToFocused()
            }, e
        }()
}, function(e, t, n) {
    var o, i;
    ! function(a) {
        if (void 0 === (i = "function" == typeof(o = a) ? o.call(t, n, t, e) : o) || (e.exports = i), e.exports = a(), !1) {
            var r = window.Cookies,
                s = window.Cookies = a();
            s.noConflict = function() {
                return window.Cookies = r, s
            }
        }
    }(function() {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) t[o] = n[o]
            }
            return t
        }
        return function t(n) {
            function o(t, i, a) {
                var r;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if ("number" == typeof(a = e({
                                path: "/"
                            }, o.defaults, a)).expires) {
                            var s = new Date;
                            s.setMilliseconds(s.getMilliseconds() + 864e5 * a.expires), a.expires = s
                        }
                        a.expires = a.expires ? a.expires.toUTCString() : "";
                        try {
                            r = JSON.stringify(i), /^[\{\[]/.test(r) && (i = r)
                        } catch (e) {}
                        i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                        var c = "";
                        for (var l in a) a[l] && (c += "; " + l, !0 !== a[l] && (c += "=" + a[l]));
                        return document.cookie = t + "=" + i + c
                    }
                    t || (r = {});
                    for (var u = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, p = 0; p < u.length; p++) {
                        var h = u[p].split("="),
                            f = h.slice(1).join("=");
                        this.json || '"' !== f.charAt(0) || (f = f.slice(1, -1));
                        try {
                            var m = h[0].replace(d, decodeURIComponent);
                            if (f = n.read ? n.read(f, m) : n(f, m) || f.replace(d, decodeURIComponent), this.json) try {
                                f = JSON.parse(f)
                            } catch (e) {}
                            if (t === m) {
                                r = f;
                                break
                            }
                            t || (r[m] = f)
                        } catch (e) {}
                    }
                    return r
                }
            }
            return o.set = o, o.get = function(e) {
                return o.call(o, e)
            }, o.getJSON = function() {
                return o.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, o.defaults = {}, o.remove = function(t, n) {
                o(t, "", e(n, {
                    expires: -1
                }))
            }, o.withConverter = t, o
        }(function() {})
    })
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(8),
        i = n.n(o),
        a = n(12),
        r = n.n(a),
        s = n(11),
        c = n.n(s),
        l = n(27),
        u = n(4),
        d = n.n(u),
        p = n(1),
        h = n(2),
        f = function(e) {
            function t() {
                return i()(this, t), r()(this, e.apply(this, arguments))
            }
            return c()(t, e), t
        }(function(e) {
            function t(n) {
                i()(this, t);
                var o = r()(this, e.call(this));
                return o.values = p.a.observableArray([]), o.value = n.value, !Object(h.isUnd)(o.value) && o.value.subscribe || (o.value = p.a.observable("")), o.inline = !Object(h.isUnd)(n.inline) && n.inline, o.readOnly = !Object(h.isUnd)(n.readOnly) && !!n.readOnly, n.values && o.values(d.a.map(n.values, function(e, t) {
                    return {
                        label: e,
                        value: t
                    }
                })), o.click = d.a.bind(o.click, o), o
            }
            return c()(t, e), t.prototype.click = function(e) {
                !this.readOnly && e && this.value(e.value)
            }, t
        }(l.a));
    t.default = Object(l.b)(f, "RadioComponent")
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(8),
        i = n.n(o),
        a = n(12),
        r = n.n(a),
        s = n(11),
        c = n.n(s),
        l = n(4),
        u = n.n(l),
        d = n(1),
        p = n(27),
        h = function(e) {
            function t(n) {
                i()(this, t);
                var o = r()(this, e.call(this, n));
                return o.animationBox = d.a.observable(!1).extend({
                    falseTimeout: 200
                }), o.animationCheckmark = d.a.observable(!1).extend({
                    falseTimeout: 200
                }), o.animationBoxSetTrue = u.a.bind(o.animationBoxSetTrue, o), o.animationCheckmarkSetTrue = u.a.bind(o.animationCheckmarkSetTrue, o), o.disposable.push(o.value.subscribe(function(e) {
                    o.triggerAnimation(e)
                }, o)), o
            }
            return c()(t, e), t.prototype.animationBoxSetTrue = function() {
                this.animationBox(!0)
            }, t.prototype.animationCheckmarkSetTrue = function() {
                this.animationCheckmark(!0)
            }, t.prototype.triggerAnimation = function(e) {
                e ? (this.animationBoxSetTrue(), u.a.delay(this.animationCheckmarkSetTrue, 200)) : (this.animationCheckmarkSetTrue(), u.a.delay(this.animationBoxSetTrue, 200))
            }, t
        }(n(74).a);
    t.default = Object(p.b)(h, "CheckboxMaterialDesignComponent")
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(8),
        i = n.n(o),
        a = n(12),
        r = n.n(a),
        s = n(11),
        c = n.n(s),
        l = n(7),
        u = n.n(l),
        d = n(27),
        p = function(e) {
            function t(n) {
                i()(this, t);
                var o = r()(this, e.call(this));
                if (n.component && n.component.templateNodes && n.element && n.element[0] && n.element[0].outerHTML) {
                    var a = n.element[0].outerHTML;
                    (a = a ? a.replace(/<x-script/i, "<script").replace(/<b><\/b><\/x-script>/i, "<\/script>") : "") ? (n.element.text(""), n.element.replaceWith(u()(a).text(n.component.templateNodes[0] && n.component.templateNodes[0].nodeValue ? n.component.templateNodes[0].nodeValue : ""))) : n.element.remove()
                }
                return o
            }
            return c()(t, e), t
        }(d.a);
    t.default = Object(d.b)(p, "ScriptComponent")
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(8),
        i = n.n(o),
        a = n(12),
        r = n.n(a),
        s = n(11),
        c = n.n(s),
        l = n(27),
        u = function(e) {
            function t() {
                return i()(this, t), r()(this, e.apply(this, arguments))
            }
            return c()(t, e), t
        }(n(47).a);
    t.default = Object(l.b)(u, "DateComponent")
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(8),
        i = n.n(o),
        a = n(12),
        r = n.n(a),
        s = n(11),
        c = n.n(s),
        l = n(2),
        u = n(27),
        d = 5,
        p = function(e) {
            function t(n) {
                i()(this, t);
                var o = r()(this, e.call(this, n));
                return o.rows = n.rows || d, o.spellcheck = !Object(l.isUnd)(n.spellcheck) && !!n.spellcheck, o
            }
            return c()(t, e), t
        }(n(47).a);
    t.default = Object(u.b)(p, "TextAreaComponent")
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(8),
        i = n.n(o),
        a = n(12),
        r = n.n(a),
        s = n(11),
        c = n.n(s),
        l = n(10),
        u = n(2),
        d = n(27),
        p = function(e) {
            function t(n) {
                i()(this, t);
                var o = r()(this, e.call(this, n));
                return o.options = n.options || "", o.optionsText = n.optionsText || null, o.optionsValue = n.optionsValue || null, o.optionsCaption = n.optionsCaption || null, o.optionsCaption && (o.optionsCaption = Object(l.i18n)(o.optionsCaption)), o.defautOptionsAfterRender = u.defautOptionsAfterRender, o
            }
            return c()(t, e), t
        }(n(47).a);
    t.default = Object(d.b)(p, "SelectComponent")
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(8),
        i = n.n(o),
        a = n(12),
        r = n.n(a),
        s = n(11),
        c = n.n(s),
        l = n(27),
        u = function(e) {
            function t() {
                return i()(this, t), r()(this, e.apply(this, arguments))
            }
            return c()(t, e), t
        }(n(47).a);
    t.default = Object(l.b)(u, "InputComponent")
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(8),
        i = n.n(o),
        a = n(12),
        r = n.n(a),
        s = n(11),
        c = n.n(s),
        l = n(2),
        u = n(0),
        d = n(27),
        p = function(e) {
            function t(n) {
                i()(this, t);
                var o = r()(this, e.call(this));
                return o.element = n.element || null, o.value = n.value && n.value.subscribe ? n.value : null, o.element && (o.value ? (o.element.css("display", "inline-block"), n.verticalAlign && o.element.css("vertical-align", n.verticalAlign), o.setState(o.value()), o.disposable.push(o.value.subscribe(o.setState, o))) : o.element.hide()), o
            }
            return c()(t, e), t.prototype.setState = function(e) {
                switch (Object(l.pInt)(e)) {
                    case u.SaveSettingsStep.TrueResult:
                        this.element.find(".animated,.error").hide().removeClass("visible").end().find(".success").show().addClass("visible");
                        break;
                    case u.SaveSettingsStep.FalseResult:
                        this.element.find(".animated,.success").hide().removeClass("visible").end().find(".error").show().addClass("visible");
                        break;
                    case u.SaveSettingsStep.Animate:
                        this.element.find(".error,.success").hide().removeClass("visible").end().find(".animated").show().addClass("visible");
                        break;
                    case u.SaveSettingsStep.Idle:
                    default:
                        this.element.find(".animated").hide().end().find(".error,.success").removeClass("visible")
                }
            }, t
        }(d.a);
    t.default = Object(d.b)(p, "SaveTriggerComponent")
}, function(e, t) {
    e.exports = '<span class="rl-cmd-clr-success">&gt;</span> {{ cmd }}'
}, function(e, t) {
    e.exports = ' <span class="rl-cmd-clr-info">version:</span> {{ version }}'
}, function(e, t) {
    e.exports = 'lang <span class="rl-cmd-clr-info">[{{ langs }}]</span>'
}, function(e, t) {
    e.exports = 'theme <span class="rl-cmd-clr-info">[{{ themes }}]</span>'
}, function(e, t) {
    e.exports = ' <span class="rl-cmd-clr-info">commands:</span> {{ commands }}'
}, function(e, t) {
    e.exports = '<span class="rl-cmd-clr-error">Command not found:</span> {{ cmd }}'
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "IdentityPopupView", function() {
        return R
    }), n.d(t, "default", function() {
        return R
    });
    var o, i, a, r, s, c, l, u, d, p, h = n(18),
        f = n.n(h),
        m = n(8),
        b = n.n(m),
        g = n(12),
        y = n.n(g),
        v = n(11),
        S = n.n(v),
        O = n(1),
        w = n(0),
        T = n(6),
        C = n(2),
        A = n(10),
        E = n(17),
        F = n(20),
        j = n(9),
        N = n(24),
        R = (o = Object(j.popup)({
            name: "View/Popup/Identity",
            templateID: "PopupsIdentity"
        }), i = Object(j.command)(function(e) {
            return !e.submitRequest()
        }), o((r = function(e) {
            function t() {
                b()(this, t);
                var n = y()(this, e.call(this));
                return n.id = "", n.edit = O.a.observable(!1), n.owner = O.a.observable(!1), n.email = O.a.observable("").validateEmail(), n.email.focused = O.a.observable(!1), n.name = O.a.observable(""), n.name.focused = O.a.observable(!1), n.replyTo = O.a.observable("").validateSimpleEmail(), n.replyTo.focused = O.a.observable(!1), n.bcc = O.a.observable("").validateSimpleEmail(), n.bcc.focused = O.a.observable(!1), n.signature = O.a.observable(""), n.signatureInsertBefore = O.a.observable(!1), n.showBcc = O.a.observable(!1), n.showReplyTo = O.a.observable(!1), n.submitRequest = O.a.observable(!1), n.submitError = O.a.observable(""), n.bcc.subscribe(function(e) {
                    !1 === n.showBcc() && 0 < e.length && n.showBcc(!0)
                }), n.replyTo.subscribe(function(e) {
                    !1 === n.showReplyTo() && 0 < e.length && n.showReplyTo(!0)
                }), n
            }
            return S()(t, e), t.prototype.addOrEditIdentityCommand = function() {
                var e = this;
                return this.signature && this.signature.__fetchEditorValue && this.signature.__fetchEditorValue(), this.email.hasError() || this.email.hasError("" === Object(C.trim)(this.email())), this.email.hasError() ? (this.owner() || this.email.focused(!0), !1) : this.replyTo.hasError() ? (this.replyTo.focused(!0), !1) : this.bcc.hasError() ? (this.bcc.focused(!0), !1) : (this.submitRequest(!0), E.a.identityUpdate(function(t, n) {
                    e.submitRequest(!1), w.StorageResultType.Success === t && n ? n.Result ? (Object(F.a)().accountsAndIdentities(), e.cancelCommand()) : n.ErrorCode && e.submitError(Object(A.getNotification)(n.ErrorCode)) : e.submitError(Object(A.getNotification)(w.Notification.UnknownError))
                }, this.id, this.email(), this.name(), this.replyTo(), this.bcc(), this.signature(), this.signatureInsertBefore()), !0)
            }, t.prototype.clearPopup = function() {
                this.id = "", this.edit(!1), this.owner(!1), this.name(""), this.email(""), this.replyTo(""), this.bcc(""), this.signature(""), this.signatureInsertBefore(!1), this.email.hasError(!1), this.replyTo.hasError(!1), this.bcc.hasError(!1), this.showBcc(!1), this.showReplyTo(!1), this.submitRequest(!1), this.submitError("")
            }, t.prototype.onShow = function(e) {
                this.clearPopup(), e ? (this.edit(!0), this.id = e.id() || "", this.name(e.name()), this.email(e.email()), this.replyTo(e.replyTo()), this.bcc(e.bcc()), this.signature(e.signature()), this.signatureInsertBefore(e.signatureInsertBefore()), this.owner("" === this.id)) : this.id = Object(C.fakeMd5)()
            }, t.prototype.onShowWithDelay = function() {
                this.owner() || T.bMobileDevice || this.email.focused(!0)
            }, t.prototype.onHideWithDelay = function() {
                this.clearPopup()
            }, t
        }(N.a), s = r.prototype, c = "addOrEditIdentityCommand", l = [i], u = f()(r.prototype, "addOrEditIdentityCommand"), d = r.prototype, p = {}, Object.keys(u).forEach(function(e) {
            p[e] = u[e]
        }), p.enumerable = !!p.enumerable, p.configurable = !!p.configurable, ("value" in p || p.initializer) && (p.writable = !0), p = l.slice().reverse().reduce(function(e, t) {
            return t(s, c, e) || e
        }, p), d && void 0 !== p.initializer && (p.value = p.initializer ? p.initializer.call(d) : void 0, p.initializer = void 0), void 0 === p.initializer && (Object.defineProperty(s, c, p), p = null), a = r)) || a)
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AccountPopupView", function() {
        return N
    }), n.d(t, "default", function() {
        return N
    });
    var o, i, a, r, s, c, l, u, d, p, h = n(18),
        f = n.n(h),
        m = n(8),
        b = n.n(m),
        g = n(12),
        y = n.n(g),
        v = n(11),
        S = n.n(v),
        O = n(1),
        w = n(0),
        T = n(2),
        C = n(10),
        A = n(17),
        E = n(20),
        F = n(9),
        j = n(24),
        N = (o = Object(F.popup)({
            name: "View/Popup/Account",
            templateID: "PopupsAccount"
        }), i = Object(F.command)(function(e) {
            return !e.submitRequest()
        }), o((r = function(e) {
            function t() {
                b()(this, t);
                var n = y()(this, e.call(this));
                return n.isNew = O.a.observable(!0), n.email = O.a.observable(""), n.password = O.a.observable(""), n.emailError = O.a.observable(!1), n.passwordError = O.a.observable(!1), n.email.subscribe(function() {
                    n.emailError(!1)
                }), n.password.subscribe(function() {
                    n.passwordError(!1)
                }), n.submitRequest = O.a.observable(!1), n.submitError = O.a.observable(""), n.submitErrorAdditional = O.a.observable(""), n.emailFocus = O.a.observable(!1), n
            }
            return S()(t, e), t.prototype.addAccountCommand = function() {
                var e = this;
                return this.emailError("" === Object(T.trim)(this.email())), this.passwordError("" === Object(T.trim)(this.password())), !this.emailError() && !this.passwordError() && (this.submitRequest(!0), A.a.accountSetup(function(t, n) {
                    e.submitRequest(!1), w.StorageResultType.Success === t && n ? n.Result ? (Object(E.a)().accountsAndIdentities(), e.cancelCommand()) : (e.submitError(n.ErrorCode ? Object(C.getNotification)(n.ErrorCode) : Object(C.getNotification)(w.Notification.UnknownError)), n.ErrorMessageAdditional && e.submitErrorAdditional(n.ErrorMessageAdditional)) : (e.submitError(Object(C.getNotification)(w.Notification.UnknownError)), e.submitErrorAdditional(""))
                }, this.email(), this.password(), this.isNew()), !0)
            }, t.prototype.clearPopup = function() {
                this.isNew(!0), this.email(""), this.password(""), this.emailError(!1), this.passwordError(!1), this.submitRequest(!1), this.submitError(""), this.submitErrorAdditional("")
            }, t.prototype.onShow = function(e) {
                this.clearPopup(), e && e.canBeEdit() && (this.isNew(!1), this.email(e.email))
            }, t.prototype.onShowWithDelay = function() {
                this.emailFocus(!0)
            }, t
        }(j.a), s = r.prototype, c = "addAccountCommand", l = [i], u = f()(r.prototype, "addAccountCommand"), d = r.prototype, p = {}, Object.keys(u).forEach(function(e) {
            p[e] = u[e]
        }), p.enumerable = !!p.enumerable, p.configurable = !!p.configurable, ("value" in p || p.initializer) && (p.writable = !0), p = l.slice().reverse().reduce(function(e, t) {
            return t(s, c, e) || e
        }, p), d && void 0 !== p.initializer && (p.value = p.initializer ? p.initializer.call(d) : void 0, p.initializer = void 0), void 0 === p.initializer && (Object.defineProperty(s, c, p), p = null), a = r)) || a)
}, function(e, t, n) {
    var o = n(58);
    o(o.S, "Object", {
        create: n(88)
    })
}, function(e, t, n) {
    n(137);
    var o = n(40).Object;
    e.exports = function(e, t) {
        return o.create(e, t)
    }
}, function(e, t, n) {
    e.exports = {
        default: n(138),
        __esModule: !0
    }
}, function(e, t, n) {
    var o = n(52),
        i = n(61),
        a = function(e, t) {
            if (i(e), !o(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, o) {
            try {
                (o = n(94)(Function.call, n(72).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
            } catch (e) {
                t = !0
            }
            return function(e, n) {
                return a(e, n), t ? e.__proto__ = n : o(e, n), e
            }
        }({}, !1) : void 0),
        check: a
    }
}, function(e, t, n) {
    var o = n(58);
    o(o.S, "Object", {
        setPrototypeOf: n(140).set
    })
}, function(e, t, n) {
    n(141), e.exports = n(40).Object.setPrototypeOf
}, function(e, t, n) {
    e.exports = {
        default: n(142),
        __esModule: !0
    }
}, function(e, t, n) {
    n(81)("observable")
}, function(e, t, n) {
    n(81)("asyncIterator")
}, function(e, t) {}, function(e, t, n) {
    var o = n(43),
        i = n(102).f,
        a = {}.toString,
        r = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function(e) {
        return r && "[object Window]" == a.call(e) ? function(e) {
            try {
                return i(e)
            } catch (e) {
                return r.slice()
            }
        }(e) : i(o(e))
    }
}, function(e, t, n) {
    var o = n(92);
    e.exports = Array.isArray || function(e) {
        return "Array" == o(e)
    }
}, function(e, t, n) {
    var o = n(87),
        i = n(103),
        a = n(71);
    e.exports = function(e) {
        var t = o(e),
            n = i.f;
        if (n)
            for (var r, s = n(e), c = a.f, l = 0; s.length > l;) c.call(e, r = s[l++]) && t.push(r);
        return t
    }
}, function(e, t, n) {
    var o = n(70)("meta"),
        i = n(52),
        a = n(46),
        r = n(49).f,
        s = 0,
        c = Object.isExtensible || function() {
            return !0
        },
        l = !n(51)(function() {
            return c(Object.preventExtensions({}))
        }),
        u = function(e) {
            r(e, o, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        d = e.exports = {
            KEY: o,
            NEED: !1,
            fastKey: function(e, t) {
                if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!a(e, o)) {
                    if (!c(e)) return "F";
                    if (!t) return "E";
                    u(e)
                }
                return e[o].i
            },
            getWeak: function(e, t) {
                if (!a(e, o)) {
                    if (!c(e)) return !0;
                    if (!t) return !1;
                    u(e)
                }
                return e[o].w
            },
            onFreeze: function(e) {
                return l && d.NEED && c(e) && !a(e, o) && u(e), e
            }
        }
}, function(e, t, n) {
    "use strict";
    var o = n(41),
        i = n(46),
        a = n(42),
        r = n(58),
        s = n(105),
        c = n(150).KEY,
        l = n(51),
        u = n(85),
        d = n(83),
        p = n(70),
        h = n(60),
        f = n(82),
        m = n(81),
        b = n(149),
        g = n(148),
        y = n(61),
        v = n(43),
        S = n(67),
        O = n(64),
        w = n(88),
        T = n(147),
        C = n(72),
        A = n(49),
        E = n(87),
        F = C.f,
        j = A.f,
        N = T.f,
        R = o.Symbol,
        I = o.JSON,
        L = I && I.stringify,
        _ = h("_hidden"),
        P = h("toPrimitive"),
        D = {}.propertyIsEnumerable,
        M = u("symbol-registry"),
        k = u("symbols"),
        x = u("op-symbols"),
        U = Object.prototype,
        H = "function" == typeof R,
        B = o.QObject,
        G = !B || !B.prototype || !B.prototype.findChild,
        K = a && l(function() {
            return 7 != w(j({}, "a", {
                get: function() {
                    return j(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(e, t, n) {
            var o = F(U, t);
            o && delete U[t], j(e, t, n), o && e !== U && j(U, t, o)
        } : j,
        V = function(e) {
            var t = k[e] = w(R.prototype);
            return t._k = e, t
        },
        z = H && "symbol" == typeof R.iterator ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return e instanceof R
        },
        q = function(e, t, n) {
            return e === U && q(x, t, n), y(e), t = S(t, !0), y(n), i(k, t) ? (n.enumerable ? (i(e, _) && e[_][t] && (e[_][t] = !1), n = w(n, {
                enumerable: O(0, !1)
            })) : (i(e, _) || j(e, _, O(1, {})), e[_][t] = !0), K(e, t, n)) : j(e, t, n)
        },
        W = function(e, t) {
            y(e);
            for (var n, o = b(t = v(t)), i = 0, a = o.length; a > i;) q(e, n = o[i++], t[n]);
            return e
        },
        Y = function(e) {
            var t = D.call(this, e = S(e, !0));
            return !(this === U && i(k, e) && !i(x, e)) && (!(t || !i(this, e) || !i(k, e) || i(this, _) && this[_][e]) || t)
        },
        $ = function(e, t) {
            if (e = v(e), t = S(t, !0), e !== U || !i(k, t) || i(x, t)) {
                var n = F(e, t);
                return !n || !i(k, t) || i(e, _) && e[_][t] || (n.enumerable = !0), n
            }
        },
        J = function(e) {
            for (var t, n = N(v(e)), o = [], a = 0; n.length > a;) i(k, t = n[a++]) || t == _ || t == c || o.push(t);
            return o
        },
        X = function(e) {
            for (var t, n = e === U, o = N(n ? x : v(e)), a = [], r = 0; o.length > r;) !i(k, t = o[r++]) || n && !i(U, t) || a.push(k[t]);
            return a
        };
    H || (s((R = function() {
        if (this instanceof R) throw TypeError("Symbol is not a constructor!");
        var e = p(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) {
                this === U && t.call(x, n), i(this, _) && i(this[_], e) && (this[_][e] = !1), K(this, e, O(1, n))
            };
        return a && G && K(U, e, {
            configurable: !0,
            set: t
        }), V(e)
    }).prototype, "toString", function() {
        return this._k
    }), C.f = $, A.f = q, n(102).f = T.f = J, n(71).f = Y, n(103).f = X, a && !n(90) && s(U, "propertyIsEnumerable", Y, !0), f.f = function(e) {
        return V(h(e))
    }), r(r.G + r.W + r.F * !H, {
        Symbol: R
    });
    for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), Q = 0; Z.length > Q;) h(Z[Q++]);
    for (var ee = E(h.store), te = 0; ee.length > te;) m(ee[te++]);
    r(r.S + r.F * !H, "Symbol", {
        for: function(e) {
            return i(M, e += "") ? M[e] : M[e] = R(e)
        },
        keyFor: function(e) {
            if (!z(e)) throw TypeError(e + " is not a symbol!");
            for (var t in M)
                if (M[t] === e) return t
        },
        useSetter: function() {
            G = !0
        },
        useSimple: function() {
            G = !1
        }
    }), r(r.S + r.F * !H, "Object", {
        create: function(e, t) {
            return void 0 === t ? w(e) : W(w(e), t)
        },
        defineProperty: q,
        defineProperties: W,
        getOwnPropertyDescriptor: $,
        getOwnPropertyNames: J,
        getOwnPropertySymbols: X
    }), I && r(r.S + r.F * (!H || l(function() {
        var e = R();
        return "[null]" != L([e]) || "{}" != L({
            a: e
        }) || "{}" != L(Object(e))
    })), "JSON", {
        stringify: function(e) {
            if (void 0 !== e && !z(e)) {
                for (var t, n, o = [e], i = 1; arguments.length > i;) o.push(arguments[i++]);
                return "function" == typeof(t = o[1]) && (n = t), !n && g(t) || (t = function(e, t) {
                    if (n && (t = n.call(this, e, t)), !z(t)) return t
                }), o[1] = t, L.apply(I, o)
            }
        }
    }), R.prototype[P] || n(53)(R.prototype, P, R.prototype.valueOf), d(R, "Symbol"), d(Math, "Math", !0), d(o.JSON, "JSON", !0)
}, function(e, t, n) {
    n(151), n(146), n(145), n(144), e.exports = n(40).Symbol
}, function(e, t, n) {
    e.exports = {
        default: n(152),
        __esModule: !0
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function(e, t) {
    e.exports = function() {}
}, function(e, t, n) {
    "use strict";
    var o = n(155),
        i = n(154),
        a = n(89),
        r = n(43);
    e.exports = n(106)(Array, "Array", function(e, t) {
        this._t = r(e), this._i = 0, this._k = t
    }, function() {
        var e = this._t,
            t = this._k,
            n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values"), a.Arguments = a.Array, o("keys"), o("values"), o("entries")
}, function(e, t, n) {
    n(156);
    for (var o = n(41), i = n(53), a = n(89), r = n(60)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
        var l = s[c],
            u = o[l],
            d = u && u.prototype;
        d && !d[r] && i(d, r, l), a[l] = a.Array
    }
}, function(e, t, n) {
    var o = n(73);
    e.exports = function(e) {
        return Object(o(e))
    }
}, function(e, t, n) {
    var o = n(46),
        i = n(158),
        a = n(86)("IE_PROTO"),
        r = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = i(e), o(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? r : null
    }
}, function(e, t, n) {
    var o = n(41).document;
    e.exports = o && o.documentElement
}, function(e, t, n) {
    var o = n(91),
        i = Math.max,
        a = Math.min;
    e.exports = function(e, t) {
        return (e = o(e)) < 0 ? i(e + t, 0) : a(e, t)
    }
}, function(e, t, n) {
    var o = n(91),
        i = Math.min;
    e.exports = function(e) {
        return e > 0 ? i(o(e), 9007199254740991) : 0
    }
}, function(e, t, n) {
    var o = n(43),
        i = n(162),
        a = n(161);
    e.exports = function(e) {
        return function(t, n, r) {
            var s, c = o(t),
                l = i(c.length),
                u = a(r, l);
            if (e && n != n) {
                for (; l > u;)
                    if ((s = c[u++]) != s) return !0
            } else
                for (; l > u; u++)
                    if ((e || u in c) && c[u] === n) return e || u || 0;
            return !e && -1
        }
    }
}, function(e, t, n) {
    var o = n(49),
        i = n(61),
        a = n(87);
    e.exports = n(42) ? Object.defineProperties : function(e, t) {
        i(e);
        for (var n, r = a(t), s = r.length, c = 0; s > c;) o.f(e, n = r[c++], t[n]);
        return e
    }
}, function(e, t, n) {
    "use strict";
    var o = n(88),
        i = n(64),
        a = n(83),
        r = {};
    n(53)(r, n(60)("iterator"), function() {
        return this
    }), e.exports = function(e, t, n) {
        e.prototype = o(r, {
            next: i(1, n)
        }), a(e, t + " Iterator")
    }
}, function(e, t, n) {
    var o = n(91),
        i = n(73);
    e.exports = function(e) {
        return function(t, n) {
            var a, r, s = String(i(t)),
                c = o(n),
                l = s.length;
            return c < 0 || c >= l ? e ? "" : void 0 : (a = s.charCodeAt(c)) < 55296 || a > 56319 || c + 1 === l || (r = s.charCodeAt(c + 1)) < 56320 || r > 57343 ? e ? s.charAt(c) : a : e ? s.slice(c, c + 2) : r - 56320 + (a - 55296 << 10) + 65536
        }
    }
}, function(e, t, n) {
    "use strict";
    var o = n(166)(!0);
    n(106)(String, "String", function(e) {
        this._t = String(e), this._i = 0
    }, function() {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = o(t, n), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function(e, t, n) {
    n(167), n(157), e.exports = n(82).f("iterator")
}, function(e, t, n) {
    e.exports = {
        default: n(168),
        __esModule: !0
    }
}, function(e, t) {
    e.exports = '<html>\n<head>\n\t<meta charset="utf-8" />\n\t<meta name="viewport" content="user-scalable=no" />\n\t<meta name="apple-mobile-web-app-capable" content="yes" />\n\t<meta name="robots" content="noindex, nofollow, noodp" />\n\t<title>{{title}}</title>\n\t<style>\nhtml, body {\n\tbackground-color: #fff;\n\tfont-size: 13px;\n\tfont-family: arial, sans-serif;\n\tmargin: 0;\n\tpadding: 0;\n}\n\na {color: blue; text-decoration: underline}\na:visited {color: #609}\na:active {color: red}\nblockquote {border-left: 2px solid black; margin: 0; padding: 0px 10px}\n\npre {\n\tmargin: 0px;\n\tpadding: 0px;\n\tfont-family: Monaco, Menlo, Consolas, \'Courier New\', monospace;\n\tbackground: #fff;\n\tborder: none;\n\twhite-space: pre-wrap;\n\tword-wrap: break-word;\n\tword-break: break-all;\n}\n\n.body-wrp {\n\tpadding: 10px;\n}\n\n.body-wrp.html pre {\n\tfont-family: Monaco, Menlo, Consolas, \'Courier New\', monospace;\n\twhite-space: pre-wrap;\n\tword-wrap: break-word;\n\tword-break: normal;\n}\n\n.body-wrp.plain {\n\tpadding: 15px;\n\twhite-space: pre-wrap;\n\tfont-family: Monaco, Menlo, Consolas, \'Courier New\', monospace;\n}\n\n.body-wrp.plain pre {\n\tmargin: 0px;\n\tpadding: 0px;\n\tbackground: #fff;\n\tborder: none;\n\tfont-family: Monaco, Menlo, Consolas, \'Courier New\', monospace;\n\twhite-space: pre-wrap;\n\tword-wrap: break-word;\n\tword-break: normal;\n}\n\n.body-wrp.plain blockquote {\n\tborder-left: 2px solid blue;\n\tcolor: blue;\n}\n\n.body-wrp.plain blockquote blockquote {\n\tborder-left: 2px solid green;\n\tcolor: green;\n}\n\n.body-wrp.plain blockquote blockquote blockquote {\n\tborder-left: 2px solid red;\n\tcolor: red;\n}\n.rl-preview-subject {\n\tfont-size: 16px;\n\tfont-weight: bold;\n\tpadding: 15px;\n}\n.rl-preview-creds-from, .rl-preview-creds-to, .rl-preview-creds-cc {\n\tfont-size: 12px;\n\tpadding: 5px 15px;\n}\n.rl-preview-date {\n\tfloat: right;\n\tfont-size: 12px;\n\tpadding: 10px 15px;\n}\n.rl-preview-section {\n\tpadding: 0;\n\tmargin: 0;\n\tborder-bottom: 1px solid #ccc;\n}\n.rl-preview-hide {\n\tdisplay: none;\n}\n\t</style>\n</head>\n<body>\n\t<div class="rl-preview-section">\n\t\t<div class="rl-preview-subject">{{subject}}</div>\n\t</div>\n\t<div class="rl-preview-section">\n\t\t<div class="rl-preview-date">{{date}}</div>\n\t\t<div class="rl-preview-creds-from">{{fromCreds}}</div>\n\t\t<div class="rl-preview-creds-to">{{toLabel}}: {{toCreds}}</div>\n\t\t<div class="rl-preview-creds-cc {{ccClass}}">{{ccLabel}}: {{ccCreds}}</div>\n\t</div>\n\t<div class="body-wrp {{bodyClass}}">{{html}}</div>\n</body>\n</html>'
}, , , function(e, t, n) {
    "use strict";

    function o(e, t, n, o, i) {
        var a = {};
        return Object.keys(o).forEach(function(e) {
            a[e] = o[e]
        }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function(n, o) {
            return o(e, t, n) || n
        }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
    }

    function i(e, t, n, o, i) {
        var a = {};
        return Object.keys(o).forEach(function(e) {
            a[e] = o[e]
        }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function(n, o) {
            return o(e, t, n) || n
        }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
    }

    function a(e, t, n, o, i) {
        var a = {};
        return Object.keys(o).forEach(function(e) {
            a[e] = o[e]
        }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function(n, o) {
            return o(e, t, n) || n
        }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
    }

    function r(e, t, n, o, i) {
        var a = {};
        return Object.keys(o).forEach(function(e) {
            a[e] = o[e]
        }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function(n, o) {
            return o(e, t, n) || n
        }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
    }
    n.r(t);
    var s, c, l, u, d, p, h, f, m, b, g, y, v, S, O, w, T, C, A, E, F, j, N, R, I, L, _, P, D, M, k, x, U, H, B, G, K, V, z, q, W, Y, $, J, X, Z, Q, ee, te, ne, oe, ie = n(8),
        ae = n.n(ie),
        re = n(12),
        se = n.n(re),
        ce = n(11),
        le = n.n(ce),
        ue = n(3),
        de = n.n(ue),
        pe = n(4),
        he = n.n(pe),
        fe = n(7),
        me = n.n(fe),
        be = n(55),
        ge = n.n(be),
        ye = n(2),
        ve = n(0),
        Se = n(6),
        Oe = n(23),
        we = n(29),
        Te = n(34),
        Ce = n(15),
        Ae = n(16),
        Ee = n(22),
        Fe = n(10),
        je = n(25),
        Ne = n(26),
        Re = n(28),
        Ie = n(62),
        Le = n(31),
        _e = n(57),
        Pe = n(56),
        De = n(1),
        Me = new(function() {
            function e() {
                ae()(this, e), this.templates = De.a.observableArray([]), this.templates.loading = De.a.observable(!1).extend({
                    throttle: 100
                }), this.templatesNames = De.a.observableArray([]).extend({
                    throttle: 1e3
                }), this.templatesNames.skipFirst = !0, this.subscribers()
            }
            return e.prototype.subscribers = function() {
                var e = this;
                this.templates.subscribe(function(t) {
                    e.templatesNames(he.a.compact(he.a.map(t, function(e) {
                        return e ? e.name : null
                    })))
                })
            }, e
        }()),
        ke = n(13),
        xe = n(30),
        Ue = n(14),
        He = new(function() {
            function e() {
                var t = this;
                ae()(this, e), this.quota = De.a.observable(0), this.usage = De.a.observable(0), this.percentage = De.a.computed(function() {
                    var e = t.quota(),
                        n = t.usage();
                    return 0 < e ? de.a.Math.ceil(n / e * 100) : 0
                })
            }
            return e.prototype.populateData = function(e, t) {
                this.quota(e * ve.Magics.BitLength1024), this.usage(t * ve.Magics.BitLength1024)
            }, e
        }()),
        Be = n(33),
        Ge = n(5),
        Ke = n(69),
        Ve = n(17),
        ze = n(50),
        qe = n(44),
        We = n(36),
        Ye = function(e) {
            function t(n) {
                var o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                ae()(this, t);
                var a = se()(this, e.call(this, "AccountModel"));
                return a.email = n, a.count = De.a.observable(i), a.deleteAccess = De.a.observable(!1), a.canBeDeleted = De.a.observable(!!o), a.canBeEdit = a.canBeDeleted, a
            }
            return le()(t, e), t.prototype.changeAccountLink = function() {
                return Object(Ae.i)(this.email)
            }, t
        }(We.a),
        $e = function(e) {
            function t(n, o) {
                ae()(this, t);
                var i = se()(this, e.call(this, "IdentityModel"));
                return i.id = De.a.observable(n || ""), i.email = De.a.observable(o), i.name = De.a.observable(""), i.replyTo = De.a.observable(""), i.bcc = De.a.observable(""), i.signature = De.a.observable(""), i.signatureInsertBefore = De.a.observable(!1), i.deleteAccess = De.a.observable(!1), i.canBeDeleted = De.a.computed(function() {
                    return "" !== i.id()
                }), i
            }
            return le()(t, e), t.prototype.formattedName = function() {
                var e = this.name(),
                    t = this.email();
                return "" !== e ? e + " (" + t + ")" : t
            }, t
        }(We.a),
        Je = function(e) {
            function t(n, o, i) {
                ae()(this, t);
                var a = se()(this, e.call(this, "TemplateModel"));
                return a.id = n, a.name = o, a.body = i, a.populated = !0, a.deleteAccess = De.a.observable(!1), a
            }
            return le()(t, e), t.prototype.parse = function(e) {
                var t = !1;
                return e && "Object/Template" === e["@Object"] && (this.id = Object(ye.pString)(e.ID), this.name = Object(ye.pString)(e.Name), this.body = Object(ye.pString)(e.Body), this.populated = !!e.Populated, t = !0), t
            }, t
        }(We.a),
        Xe = function(e) {
            function t(n, o, i, a, r, s, c, l, u) {
                ae()(this, t);
                var d = se()(this, e.call(this, "OpenPgpKeyModel"));
                return d.index = n, d.id = i, d.ids = Object(ye.isNonEmptyArray)(a) ? a : [i], d.guid = o, d.user = "", d.users = r, d.email = "", d.emails = s, d.armor = l, d.isPrivate = !!c, d.selectUser(u), d.deleteAccess = De.a.observable(!1), d
            }
            return le()(t, e), t.prototype.getNativeKey = function() {
                var e = null;
                try {
                    if ((e = xe.a.openpgp.key.readArmored(this.armor)) && !e.err && e.keys && e.keys[0]) return e
                } catch (e) {
                    Object(ye.log)(e)
                }
                return null
            }, t.prototype.getNativeKeys = function() {
                var e = this.getNativeKey();
                return e && e.keys ? e.keys : null
            }, t.prototype.select = function(e, t) {
                if (this[t]) {
                    var n = this[t].indexOf(e); - 1 !== n && (this.user = this.users[n], this.email = this.emails[n])
                }
            }, t.prototype.selectUser = function(e) {
                this.select(e, "users")
            }, t.prototype.selectEmail = function(e) {
                this.select(e, "emails")
            }, t
        }(We.a),
        Ze = n(65),
        Qe = n(18),
        et = n.n(Qe),
        tt = n(32),
        nt = n(20),
        ot = n(9),
        it = n(24),
        at = (s = Object(ot.view)({
            name: ["View/App/Login", "View/User/Login"],
            type: ot.ViewType.Center,
            templateID: "Login"
        }), c = Object(ot.command)(function(e) {
            return !e.submitRequest() && e.facebookLoginEnabled()
        }), l = Object(ot.command)(function(e) {
            return !e.submitRequest() && e.googleLoginEnabled()
        }), u = Object(ot.command)(function(e) {
            return !e.submitRequest() && e.googleFastLoginEnabled()
        }), d = Object(ot.command)(function(e) {
            return !e.submitRequest() && e.twitterLoginEnabled()
        }), p = Object(ot.command)(function(e) {
            return !e.submitRequest()
        }), s((o((f = function(e) {
            function t() {
                ae()(this, t);
                var n = se()(this, e.call(this));
                return n.hideSubmitButton = !!Ge.appSettingsGet("hideSubmitButton"), n.welcome = De.a.observable(!!Ge.settingsGet("UseLoginWelcomePage")), n.email = De.a.observable(""), n.password = De.a.observable(""), n.signMe = De.a.observable(!1), n.additionalCode = De.a.observable(""), n.additionalCode.error = De.a.observable(!1), n.additionalCode.errorAnimation = De.a.observable(!1).extend({
                    falseTimeout: 500
                }), n.additionalCode.focused = De.a.observable(!1), n.additionalCode.visibility = De.a.observable(!1), n.additionalCodeSignMe = De.a.observable(!1), n.logoImg = Object(ye.trim)(Ge.settingsGet("LoginLogo")), n.loginPowered = !!Ge.settingsGet("LoginPowered"), n.loginDescription = Object(ye.trim)(Ge.settingsGet("LoginDescription")), n.mobile = !!Ge.appSettingsGet("mobile"), n.mobileDevice = !!Ge.appSettingsGet("mobileDevice"), n.forgotPasswordLinkUrl = Ge.appSettingsGet("forgotPasswordLinkUrl"), n.registrationLinkUrl = Ge.appSettingsGet("registrationLinkUrl"), n.emailError = De.a.observable(!1), n.passwordError = De.a.observable(!1), n.emailErrorAnimation = De.a.observable(!1).extend({
                    falseTimeout: 500
                }), n.passwordErrorAnimation = De.a.observable(!1).extend({
                    falseTimeout: 500
                }), n.formHidden = De.a.observable(!1), n.formError = De.a.computed(function() {
                    return n.emailErrorAnimation() || n.passwordErrorAnimation() || n.additionalCode.visibility() && n.additionalCode.errorAnimation()
                }), n.emailFocus = De.a.observable(!1), n.passwordFocus = De.a.observable(!1), n.email.subscribe(function() {
                    n.emailError(!1), n.additionalCode(""), n.additionalCode.visibility(!1)
                }), n.password.subscribe(function() {
                    n.passwordError(!1)
                }), n.additionalCode.subscribe(function() {
                    n.additionalCode.error(!1)
                }), n.additionalCode.visibility.subscribe(function() {
                    n.additionalCode.error(!1)
                }), n.emailError.subscribe(function(e) {
                    n.emailErrorAnimation(!!e)
                }), n.passwordError.subscribe(function(e) {
                    n.passwordErrorAnimation(!!e)
                }), n.additionalCode.error.subscribe(function(e) {
                    n.additionalCode.errorAnimation(!!e)
                }), n.submitRequest = De.a.observable(!1), n.submitError = De.a.observable(""), n.submitErrorAddidional = De.a.observable(""), n.submitError.subscribe(function(e) {
                    "" === e && n.submitErrorAddidional("")
                }), n.allowLanguagesOnLogin = Ne.a.allowLanguagesOnLogin, n.langRequest = De.a.observable(!1), n.language = tt.a.language, n.languages = tt.a.languages, n.bSendLanguage = !1, n.languageFullName = De.a.computed(function() {
                    return Object(ye.convertLangName)(n.language())
                }), n.signMeType = De.a.observable(ve.LoginSignMeType.Unused), n.signMeType.subscribe(function(e) {
                    n.signMe(ve.LoginSignMeType.DefaultOn === e)
                }), n.signMeVisibility = De.a.computed(function() {
                    return ve.LoginSignMeType.Unused !== n.signMeType()
                }), n.facebookLoginEnabled = De.a.observable(!1), n.googleLoginEnabled = De.a.observable(!1), n.googleFastLoginEnabled = De.a.observable(!1), n.twitterLoginEnabled = De.a.observable(!1), n.socialLoginEnabled = De.a.computed(function() {
                    var e = n.facebookLoginEnabled(),
                        t = n.googleLoginEnabled(),
                        o = n.twitterLoginEnabled();
                    return e || t || o
                }), Ge.settingsGet("AdditionalLoginError") && !n.submitError() && n.submitError(Ge.settingsGet("AdditionalLoginError")), n
            }
            return le()(t, e), t.prototype.windowOpenFeatures = function(e) {
                return "left=200,top=100,width=" + e + ",height=" + e + ",menubar=no,status=no,resizable=yes,scrollbars=yes"
            }, t.prototype.facebookCommand = function() {
                return de.a.open(Object(Ae.A)(), "Facebook", this.windowOpenFeatures(500)), !0
            }, t.prototype.googleCommand = function() {
                return de.a.open(Object(Ae.B)(), "Google", this.windowOpenFeatures(550)), !0
            }, t.prototype.googleFastCommand = function() {
                return de.a.open(Object(Ae.B)(!0), "Google", this.windowOpenFeatures(550)), !0
            }, t.prototype.twitterCommand = function() {
                return de.a.open(Object(Ae.C)(), "Twitter", this.windowOpenFeatures(500)), !0
            }, t.prototype.submitCommand = function() {
                var e = this;
                if (Object(ye.triggerAutocompleteInputChange)(), this.emailError(!1), this.passwordError(!1), this.emailError("" === Object(ye.trim)(this.email())), this.passwordError("" === Object(ye.trim)(this.password())), this.additionalCode.visibility() && (this.additionalCode.error(!1), this.additionalCode.error("" === Object(ye.trim)(this.additionalCode()))), this.emailError() || this.passwordError() || this.additionalCode.visibility() && this.additionalCode.error()) {
                    switch (!0) {
                        case this.emailError():
                            this.emailFocus(!0);
                            break;
                        case this.passwordError():
                            this.passwordFocus(!0);
                            break;
                        case this.additionalCode.visibility() && this.additionalCode.error():
                            this.additionalCode.focused(!0)
                    }
                    return !1
                }
                var t = 0,
                    n = "";
                if (we.f("user-login-submit", [function(e, o) {
                        t = e || 0, n = o || ""
                    }]), 0 < t) return this.submitError(Object(Fe.getNotification)(t)), !1;
                if ("" !== n) return this.submitError(n), !1;
                this.submitRequest(!0), Se.$win.trigger("rl.tooltips.diactivate");
                var o;
                return o = this.password(), Ve.a.login(function(t, n) {
                    Se.$win.trigger("rl.tooltips.diactivate"), Se.$win.trigger("rl.tooltips.activate"), ve.StorageResultType.Success === t && n && "Login" === n.Action ? n.Result ? n.TwoFactorAuth ? (e.additionalCode(""), e.additionalCode.visibility(!0), e.submitRequest(!1), he.a.delay(function() {
                        return e.additionalCode.focused(!0)
                    }, ve.Magics.Time100ms)) : n.Admin ? Object(nt.a)().redirectToAdminPanel() : Object(nt.a)().loginAndLogoutReload(!1) : n.ErrorCode ? (e.submitRequest(!1), -1 < Object(ye.inArray)(n.ErrorCode, [ve.Notification.InvalidInputArgument]) && (n.ErrorCode = ve.Notification.AuthError), e.submitError(Object(Fe.getNotificationFromResponse)(n)), "" === e.submitError() ? e.submitError(Object(Fe.getNotification)(ve.Notification.UnknownError)) : n.ErrorMessageAdditional && e.submitErrorAddidional(n.ErrorMessageAdditional)) : e.submitRequest(!1) : (e.submitRequest(!1), e.submitError(Object(Fe.getNotification)(ve.Notification.UnknownError)))
                }, e.email(), "", o, !!e.signMe(), e.bSendLanguage ? e.language() : "", e.additionalCode.visibility() ? e.additionalCode() : "", !!e.additionalCode.visibility() && !!e.additionalCodeSignMe()), Be.b(ve.ClientSideKeyName.LastSignMe, e.signMe() ? "-1-" : "-0-"), !0
            }, t.prototype.displayMainForm = function() {
                this.welcome(!1)
            }, t.prototype.onShow = function() {
                Object(ot.routeOff)()
            }, t.prototype.onShowWithDelay = function() {
                "" !== this.email() && "" !== this.password() ? this.passwordFocus(!0) : "" === this.email() ? this.emailFocus(!0) : "" === this.password() ? this.passwordFocus(!0) : this.emailFocus(!0)
            }, t.prototype.onHide = function() {
                this.emailFocus(!1), this.passwordFocus(!1)
            }, t.prototype.onBuild = function() {
                var e = this,
                    t = Be.a(ve.ClientSideKeyName.LastSignMe),
                    n = (Ge.settingsGet("SignMe") || "unused").toLowerCase(),
                    o = Ge.appSettingsGet("jsHash"),
                    i = function(t) {
                        0 === (t = Object(ye.pInt)(t)) ? (e.submitRequest(!0), Object(nt.a)().loginAndLogoutReload(!1)) : e.submitError(Object(Fe.getNotification)(t))
                    };
                switch (this.facebookLoginEnabled(!!Ge.settingsGet("AllowFacebookSocial")), this.twitterLoginEnabled(!!Ge.settingsGet("AllowTwitterSocial")), this.googleLoginEnabled(!!Ge.settingsGet("AllowGoogleSocial") && !!Ge.settingsGet("AllowGoogleSocialAuth")), this.googleFastLoginEnabled(!!Ge.settingsGet("AllowGoogleSocial") && !!Ge.settingsGet("AllowGoogleSocialAuthFast")), n) {
                    case ve.LoginSignMeTypeAsString.DefaultOff:
                    case ve.LoginSignMeTypeAsString.DefaultOn:
                        switch (this.signMeType(ve.LoginSignMeTypeAsString.DefaultOn === n ? ve.LoginSignMeType.DefaultOn : ve.LoginSignMeType.DefaultOff), t) {
                            case "-1-":
                                this.signMeType(ve.LoginSignMeType.DefaultOn);
                                break;
                            case "-0-":
                                this.signMeType(ve.LoginSignMeType.DefaultOff)
                        }
                        break;
                    case ve.LoginSignMeTypeAsString.Unused:
                    default:
                        this.signMeType(ve.LoginSignMeType.Unused)
                }
                this.email(Ne.a.devEmail), this.password(Ne.a.devPassword), (this.googleLoginEnabled() || this.googleFastLoginEnabled()) && (de.a["rl_" + o + "_google_login_service"] = i), this.facebookLoginEnabled() && (de.a["rl_" + o + "_facebook_login_service"] = i), this.twitterLoginEnabled() && (de.a["rl_" + o + "_twitter_login_service"] = i), he.a.delay(function() {
                    tt.a.language.subscribe(function(t) {
                        e.langRequest(!0), Object(Fe.reload)(!1, t).then(function() {
                            e.langRequest(!1), e.bSendLanguage = !0
                        }, function() {
                            e.langRequest(!1)
                        })
                    })
                }, ve.Magics.Time50ms), Object(ye.triggerAutocompleteInputChange)(!0)
            }, t.prototype.submitForm = function() {
                this.submitCommand()
            }, t.prototype.selectLanguage = function() {
                Object(ot.showScreenPopup)(n(101), [this.language, this.languages(), tt.a.userLanguage()])
            }, t.prototype.selectLanguageOnTab = function(e) {
                var t = this;
                return !!e || (he.a.delay(function() {
                    t.emailFocus(!0)
                }, ve.Magics.Time50ms), !1)
            }, t
        }(it.a)).prototype, "facebookCommand", [c], et()(f.prototype, "facebookCommand"), f.prototype), o(f.prototype, "googleCommand", [l], et()(f.prototype, "googleCommand"), f.prototype), o(f.prototype, "googleFastCommand", [u], et()(f.prototype, "googleFastCommand"), f.prototype), o(f.prototype, "twitterCommand", [d], et()(f.prototype, "twitterCommand"), f.prototype), o(f.prototype, "submitCommand", [p], et()(f.prototype, "submitCommand"), f.prototype), h = f)) || h),
        rt = function(e) {
            function t() {
                return ae()(this, t), se()(this, e.call(this, "login", [at]))
            }
            return le()(t, e), t.prototype.onShow = function() {
                Object(nt.a)().setWindowTitle("")
            }, t
        }(Ze.a),
        st = n(19),
        ct = n.n(st),
        lt = function(e) {
            function t() {
                ae()(this, t);
                var n = se()(this, e.call(this));
                return n.logoImg = Object(ye.trim)(Ge.settingsGet("UserLogo")), n.logoTitle = Object(ye.trim)(Ge.settingsGet("UserLogoTitle")), n.mobile = !!Ge.appSettingsGet("mobile"), n.mobileDevice = !!Ge.appSettingsGet("mobileDevice"), n.allowSettings = !!Ge.capa(ve.Capa.Settings), n.allowHelp = !!Ge.capa(ve.Capa.Help), n.currentAudio = Ne.a.currentAudio, n.accountEmail = Le.a.email, n.accounts = Le.a.accounts, n.accountsUnreadCount = Le.a.accountsUnreadCount, n.accountMenuDropdownTrigger = De.a.observable(!1), n.capaAdditionalAccounts = De.a.observable(Ge.capa(ve.Capa.AdditionalAccounts)), n.addAccountClick = he.a.bind(n.addAccountClick, n), Ee.b("audio.stop", function() {
                    return Ne.a.currentAudio("")
                }), Ee.b("audio.start", function(e) {
                    return Ne.a.currentAudio(e)
                }), n
            }
            return le()(t, e), t.prototype.stopPlay = function() {
                Ee.a("audio.api.stop")
            }, t.prototype.accountClick = function(e, t) {
                return e && t && !Object(ye.isUnd)(t.which) && 1 === t.which && (Le.a.accounts.loading(!0), he.a.delay(function() {
                    return Le.a.accounts.loading(!1)
                }, ve.Magics.Time1s)), !0
            }, t.prototype.emailTitle = function() {
                return Le.a.email()
            }, t.prototype.settingsClick = function() {
                Ge.capa(ve.Capa.Settings) && Object(ot.setHash)(Object(Ae.z)())
            }, t.prototype.settingsHelp = function() {
                Ge.capa(ve.Capa.Help) && Object(ot.showScreenPopup)(n(181))
            }, t.prototype.addAccountClick = function() {
                this.capaAdditionalAccounts() && Object(ot.showScreenPopup)(n(136))
            }, t.prototype.logoutClick = function() {
                Object(nt.a)().logout()
            }, t.prototype.onBuild = function() {
                var e = this;
                ct()("`", [ve.KeyState.MessageList, ve.KeyState.MessageView, ve.KeyState.Settings], function() {
                    e.viewModelVisibility() && (Ue.a.messageFullScreenMode(!1), e.accountMenuDropdownTrigger(!0))
                }), ct()("shift+/", [ve.KeyState.MessageList, ve.KeyState.MessageView, ve.KeyState.Settings], function() {
                    return !e.viewModelVisibility() || (Object(ot.showScreenPopup)(n(181)), !1)
                })
            }, t
        }(it.a),
        ut = Object(ot.view)({
            name: "View/User/MailBox/SystemDropDown",
            type: ot.ViewType.Right,
            templateID: "SystemDropDown"
        })(m = function(e) {
            function t() {
                return ae()(this, t), se()(this, e.apply(this, arguments))
            }
            return le()(t, e), t
        }(lt)) || m,
        dt = Object(ot.view)({
            name: "View/User/MailBox/FolderList",
            type: ot.ViewType.Left,
            templateID: "MailFolderList"
        })(b = function(e) {
            function t() {
                ae()(this, t);
                var n = se()(this, e.call(this));
                return n.oContentVisible = null, n.oContentScrollable = null, n.composeInEdit = Ne.a.composeInEdit, n.messageList = Ue.a.messageList, n.folderList = ke.a.folderList, n.folderListSystem = ke.a.folderListSystem, n.foldersChanging = ke.a.foldersChanging, n.moveAction = Se.moveAction, n.foldersListWithSingleInboxRootFolder = ke.a.foldersListWithSingleInboxRootFolder, n.leftPanelDisabled = Se.leftPanelDisabled, n.iDropOverTimer = 0, n.allowComposer = !!Ge.capa(ve.Capa.Composer), n.allowContacts = !!Ne.a.contactsIsAllowed(), n.allowFolders = !!Ge.capa(ve.Capa.Folders), n.folderListFocused = De.a.computed(function() {
                    return ve.Focused.FolderList === Ne.a.focusedState()
                }), n.isInboxStarred = De.a.computed(function() {
                    return ke.a.currentFolder() && ke.a.currentFolder().isInbox() && -1 < Object(ye.trim)(Ue.a.messageListSearch()).indexOf("is:flagged")
                }), n
            }
            return le()(t, e), t.prototype.onBuild = function(e) {
                this.oContentVisible = me()(".b-content", e), this.oContentScrollable = me()(".content", this.oContentVisible);
                var t = this,
                    n = Ge.appSettingsGet("mobile"),
                    o = function(e, t, o) {
                        var i = Object(Se.moveAction)();
                        n && Object(Se.leftPanelDisabled)(!0), t.preventDefault(), o && t.stopPropagation();
                        var a = De.a.dataFor(e);
                        a && (i ? (Object(Se.moveAction)(!1), Object(nt.a)().moveMessagesToFolder(ke.a.currentFolderFullNameRaw(), Ue.a.messageListCheckedOrSelectedUidsWithSubMails(), a.fullNameRaw, !1)) : (ve.Layout.NoPreview === Re.a.layout() && Ue.a.message(null), a.fullNameRaw === ke.a.currentFolderFullNameRaw() && Object(Ce.q)(a.fullNameRaw, ""), o ? Object(ot.setHash)(Object(Ae.o)(a.fullNameHash, 1, "is:flagged")) : Object(ot.setHash)(Object(Ae.o)(a.fullNameHash))), Ne.a.focusedState(ve.Focused.MessageList))
                    };
                e.on("click", ".b-folders .e-item .e-link .e-collapsed-sign", function(e) {
                    var t = De.a.dataFor(this);
                    if (t && e) {
                        var n = t.collapsed();
                        Object(nt.a)().setExpandedFolder(t.fullNameHash, n), t.collapsed(!n), e.preventDefault(), e.stopPropagation()
                    }
                }).on("click", ".b-folders .e-item .e-link.selectable .inbox-star-icon", function(e) {
                    o(this, e, !t.isInboxStarred())
                }).on("click", ".b-folders .e-item .e-link.selectable", function(e) {
                    o(this, e, !1)
                }), ct()("up, down", ve.KeyState.FolderList, function(n, o) {
                    var i = o && "up" === o.shortcut ? ve.EventKeyCode.Up : ve.EventKeyCode.Down,
                        a = me()(".b-folders .e-item .e-link:not(.hidden):visible", e);
                    if (n && a.length) {
                        var r = a.index(a.filter(".focused")); - 1 < r && a.eq(r).removeClass("focused"), ve.EventKeyCode.Up === i && 0 < r ? r -= 1 : ve.EventKeyCode.Down === i && r < a.length - 1 && (r += 1), a.eq(r).addClass("focused"), t.scrollToFocused()
                    }
                    return !1
                }), ct()("enter", ve.KeyState.FolderList, function() {
                    var t = me()(".b-folders .e-item .e-link:not(.hidden).focused", e);
                    return t.length && t[0] && (Ne.a.focusedState(ve.Focused.MessageList), t.click()), !1
                }), ct()("space", ve.KeyState.FolderList, function() {
                    var t = me()(".b-folders .e-item .e-link:not(.hidden).focused", e);
                    if (t.length && t[0]) {
                        var n = De.a.dataFor(t[0]);
                        if (n) {
                            var o = n.collapsed();
                            Object(nt.a)().setExpandedFolder(n.fullNameHash, o), n.collapsed(!o)
                        }
                    }
                    return !1
                }), ct()("esc, tab, shift+tab, right", ve.KeyState.FolderList, function() {
                    return Ne.a.focusedState(ve.Focused.MessageList), Object(Se.moveAction)(!1), !1
                }), Ne.a.focusedState.subscribe(function(t) {
                    me()(".b-folders .e-item .e-link.focused", e).removeClass("focused"), ve.Focused.FolderList === t && me()(".b-folders .e-item .e-link.selected", e).addClass("focused")
                })
            }, t.prototype.messagesDropOver = function(e) {
                de.a.clearTimeout(this.iDropOverTimer), e && e.collapsed() && (this.iDropOverTimer = de.a.setTimeout(function() {
                    e.collapsed(!1), Object(nt.a)().setExpandedFolder(e.fullNameHash, !0), Object(ye.windowResize)()
                }, ve.Magics.Time500ms))
            }, t.prototype.messagesDropOut = function() {
                de.a.clearTimeout(this.iDropOverTimer)
            }, t.prototype.scrollToFocused = function() {
                if (!this.oContentVisible || !this.oContentScrollable) return !1;
                var e = me()(".e-item .e-link.focused", this.oContentScrollable),
                    t = e.position(),
                    n = this.oContentVisible.height(),
                    o = e.outerHeight();
                return !(!t || !(0 > t.top || t.top + o > n) || (0 > t.top ? this.oContentScrollable.scrollTop(this.oContentScrollable.scrollTop() + t.top - 20) : this.oContentScrollable.scrollTop(this.oContentScrollable.scrollTop() + t.top - n + o + 20), 0))
            }, t.prototype.messagesDrop = function(e, t) {
                if (e && t && t.helper) {
                    var n = t.helper.data("rl-folder"),
                        o = Se.$html.hasClass("rl-ctrl-key-pressed"),
                        i = t.helper.data("rl-uids");
                    Object(ye.isNormal)(n) && "" !== n && Object(ye.isArray)(i) && Object(nt.a)().moveMessagesToFolder(n, i, e.fullNameRaw, o)
                }
            }, t.prototype.composeClick = function() {
                Ge.capa(ve.Capa.Composer) && Object(ot.showScreenPopup)(n(63))
            }, t.prototype.createFolder = function() {
                Object(ot.showScreenPopup)(n(180))
            }, t.prototype.configureFolders = function() {
                Object(ot.setHash)(Object(Ae.z)("folders"))
            }, t.prototype.contactsClick = function() {
                this.allowContacts && Object(ot.showScreenPopup)(n(175))
            }, t
        }(it.a)) || b,
        pt = n(78),
        ht = n.n(pt),
        ft = n(100),
        mt = n.n(ft),
        bt = n(119),
        gt = function(e) {
            return e.canBeMoved()
        },
        yt = (g = Object(ot.view)({
            name: "View/User/MailBox/MessageList",
            type: ot.ViewType.Right,
            templateID: "MailMessageList"
        }), y = Object(ot.command)(), v = Object(ot.command)(), S = Object(ot.command)(gt), O = Object(ot.command)(gt), w = Object(ot.command)(gt), T = Object(ot.command)(gt), C = Object(ot.command)(gt), A = Object(ot.command)(gt), E = Object(ot.command)(gt), F = Object(ot.command)(gt), g((i((N = function(e) {
            function t() {
                ae()(this, t);
                var n = se()(this, e.call(this));
                return n.sLastUid = null, n.bPrefetch = !1, n.emptySubjectValue = "", n.iGoToUpUpOrDownDownTimeout = 0, n.mobile = !!Ge.appSettingsGet("mobile"), n.newMoveToFolder = Ne.a.newMoveToFolder, n.allowReload = !!Ge.capa(ve.Capa.Reload), n.allowSearch = !!Ge.capa(ve.Capa.Search), n.allowSearchAdv = !!Ge.capa(ve.Capa.SearchAdv), n.allowComposer = !!Ge.capa(ve.Capa.Composer), n.allowMessageListActions = !!Ge.capa(ve.Capa.MessageListActions), n.allowDangerousActions = !!Ge.capa(ve.Capa.DangerousActions), n.allowFolders = !!Ge.capa(ve.Capa.Folders), n.popupVisibility = Se.popupVisibility, n.message = Ue.a.message, n.messageList = Ue.a.messageList, n.messageListDisableAutoSelect = Ue.a.messageListDisableAutoSelect, n.folderList = ke.a.folderList, n.composeInEdit = Ne.a.composeInEdit, n.leftPanelDisabled = Se.leftPanelDisabled, n.selectorMessageSelected = Ue.a.selectorMessageSelected, n.selectorMessageFocused = Ue.a.selectorMessageFocused, n.isMessageSelected = Ue.a.isMessageSelected, n.messageListSearch = Ue.a.messageListSearch, n.messageListThreadUid = Ue.a.messageListThreadUid, n.messageListError = Ue.a.messageListError, n.folderMenuForMove = ke.a.folderMenuForMove, n.useCheckboxesInList = Re.a.useCheckboxesInList, n.mainMessageListSearch = Ue.a.mainMessageListSearch, n.messageListEndFolder = Ue.a.messageListEndFolder, n.messageListEndThreadUid = Ue.a.messageListEndThreadUid, n.messageListChecked = Ue.a.messageListChecked, n.messageListCheckedOrSelected = Ue.a.messageListCheckedOrSelected, n.messageListCheckedOrSelectedUidsWithSubMails = Ue.a.messageListCheckedOrSelectedUidsWithSubMails, n.messageListCompleteLoadingThrottle = Ue.a.messageListCompleteLoadingThrottle, n.messageListCompleteLoadingThrottleForAnimation = Ue.a.messageListCompleteLoadingThrottleForAnimation, Object(Fe.initOnStartOrLangChange)(function() {
                    n.emptySubjectValue = Object(Fe.i18n)("MESSAGE_LIST/EMPTY_SUBJECT_TEXT")
                }), n.userQuota = He.quota, n.userUsageSize = He.usage, n.userUsageProc = He.percentage, n.moveDropdownTrigger = De.a.observable(!1), n.moreDropdownTrigger = De.a.observable(!1), n.dragOver = De.a.observable(!1).extend({
                    throttle: 1
                }), n.dragOverEnter = De.a.observable(!1).extend({
                    throttle: 1
                }), n.dragOverArea = De.a.observable(null), n.dragOverBodyArea = De.a.observable(null), n.messageListItemTemplate = De.a.computed(function() {
                    return n.mobile || ve.Layout.SidePreview === Re.a.layout() ? "MailMessageListItem" : "MailMessageListItemNoPreviewPane"
                }), n.messageListSearchDesc = De.a.computed(function() {
                    var e = Ue.a.messageListEndSearch();
                    return "" === e ? "" : Object(Fe.i18n)("MESSAGE_LIST/SEARCH_RESULT_FOR", {
                        SEARCH: e
                    })
                }), n.messageListPagenator = De.a.computed(Object(ye.computedPagenatorHelper)(Ue.a.messageListPage, Ue.a.messageListPageCount)), n.checkAll = De.a.computed({
                    read: function() {
                        return 0 < Ue.a.messageListChecked().length
                    },
                    write: function(e) {
                        e = !!e, he.a.each(Ue.a.messageList(), function(t) {
                            t.checked(e)
                        })
                    }
                }), n.inputMessageListSearchFocus = De.a.observable(!1), n.sLastSearchValue = "", n.inputProxyMessageListSearch = De.a.computed({
                    read: n.mainMessageListSearch,
                    write: function(e) {
                        n.sLastSearchValue = e
                    }
                }), n.isIncompleteChecked = De.a.computed(function() {
                    var e = Ue.a.messageList().length,
                        t = Ue.a.messageListChecked().length;
                    return 0 < e && 0 < t && e > t
                }), n.hasMessages = De.a.computed(function() {
                    return 0 < n.messageList().length
                }), n.hasCheckedOrSelectedLines = De.a.computed(function() {
                    return 0 < n.messageListCheckedOrSelected().length
                }), n.isSpamFolder = De.a.computed(function() {
                    return ke.a.spamFolder() === n.messageListEndFolder() && "" !== ke.a.spamFolder()
                }), n.isSpamDisabled = De.a.computed(function() {
                    return Oe.r === ke.a.spamFolder()
                }), n.isTrashFolder = De.a.computed(function() {
                    return ke.a.trashFolder() === n.messageListEndFolder() && "" !== ke.a.trashFolder()
                }), n.isDraftFolder = De.a.computed(function() {
                    return ke.a.draftFolder() === n.messageListEndFolder() && "" !== ke.a.draftFolder()
                }), n.isSentFolder = De.a.computed(function() {
                    return ke.a.sentFolder() === n.messageListEndFolder() && "" !== ke.a.sentFolder()
                }), n.isArchiveFolder = De.a.computed(function() {
                    return ke.a.archiveFolder() === n.messageListEndFolder() && "" !== ke.a.archiveFolder()
                }), n.isArchiveDisabled = De.a.computed(function() {
                    return Oe.r === ke.a.archiveFolder()
                }), n.isArchiveVisible = De.a.computed(function() {
                    return !n.isArchiveFolder() && !n.isArchiveDisabled() && !n.isDraftFolder()
                }), n.isSpamVisible = De.a.computed(function() {
                    return !(n.isSpamFolder() || n.isSpamDisabled() || n.isDraftFolder() || n.isSentFolder())
                }), n.isUnSpamVisible = De.a.computed(function() {
                    return n.isSpamFolder() && !n.isSpamDisabled() && !n.isDraftFolder() && !n.isSentFolder()
                }), n.mobileCheckedStateShow = De.a.computed(function() {
                    var e = 0 < n.messageListChecked().length;
                    return !n.mobile || e
                }), n.mobileCheckedStateHide = De.a.computed(function() {
                    var e = 0 < n.messageListChecked().length;
                    return !n.mobile || !e
                }), n.messageListFocused = De.a.computed(function() {
                    return ve.Focused.MessageList === Ne.a.focusedState()
                }), n.canBeMoved = n.hasCheckedOrSelectedLines, n.quotaTooltip = he.a.bind(n.quotaTooltip, n), n.selector = new bt.a(n.messageList, n.selectorMessageSelected, n.selectorMessageFocused, ".messageListItem .actionHandle", ".messageListItem.selected", ".messageListItem .checkboxMessage", ".messageListItem.focused"), n.selector.on("onItemSelect", function(e) {
                    Ue.a.selectMessage(e)
                }), n.selector.on("onItemGetUid", function(e) {
                    return e ? e.generateUid() : ""
                }), n.selector.on("onAutoSelect", function() {
                    return n.useAutoSelect()
                }), n.selector.on("onUpUpOrDownDown", function(e) {
                    n.goToUpUpOrDownDown(e)
                }), Ee.b("mailbox.message-list.selector.go-down", function(e) {
                    n.selector.goDown(e)
                }), Ee.b("mailbox.message-list.selector.go-up", function(e) {
                    n.selector.goUp(e)
                }), Ee.b("mailbox.message.show", function(e, t) {
                    var o = he.a.find(n.messageList(), function(n) {
                        return n && e === n.folderFullNameRaw && t === n.uid
                    });
                    "INBOX" === e && Object(ot.setHash)(Object(Ae.o)(e, 1)), o ? n.selector.selectMessageItem(o) : ("INBOX" !== e && Object(ot.setHash)(Object(Ae.o)(e, 1)), Ue.a.selectMessageByFolderAndUid(e, t))
                }), Ue.a.messageListEndHash.subscribe(function() {
                    n.selector.scrollToTop()
                }), n
            }
            return le()(t, e), t.prototype.clearCommand = function() {
                Ge.capa(ve.Capa.DangerousActions) && Object(ot.showScreenPopup)(n(198), [ke.a.currentFolder()])
            }, t.prototype.reloadCommand = function() {
                !Ue.a.messageListCompleteLoadingThrottleForAnimation() && this.allowReload && Object(nt.a)().reloadMessageList(!1, !0)
            }, t.prototype.multyForwardCommand = function() {
                Ge.capa(ve.Capa.Composer) && Object(ot.showScreenPopup)(n(63), [ve.ComposeType.ForwardAsAttachment, Ue.a.messageListCheckedOrSelected()])
            }, t.prototype.deleteWithoutMoveCommand = function() {
                Ge.capa(ve.Capa.DangerousActions) && Object(nt.a)().deleteMessagesFromFolder(ve.FolderType.Trash, ke.a.currentFolderFullNameRaw(), Ue.a.messageListCheckedOrSelectedUidsWithSubMails(), !1)
            }, t.prototype.deleteCommand = function() {
                Object(nt.a)().deleteMessagesFromFolder(ve.FolderType.Trash, ke.a.currentFolderFullNameRaw(), Ue.a.messageListCheckedOrSelectedUidsWithSubMails(), !0)
            }, t.prototype.archiveCommand = function() {
                Object(nt.a)().deleteMessagesFromFolder(ve.FolderType.Archive, ke.a.currentFolderFullNameRaw(), Ue.a.messageListCheckedOrSelectedUidsWithSubMails(), !0)
            }, t.prototype.spamCommand = function() {
                Object(nt.a)().deleteMessagesFromFolder(ve.FolderType.Spam, ke.a.currentFolderFullNameRaw(), Ue.a.messageListCheckedOrSelectedUidsWithSubMails(), !0)
            }, t.prototype.notSpamCommand = function() {
                Object(nt.a)().deleteMessagesFromFolder(ve.FolderType.NotSpam, ke.a.currentFolderFullNameRaw(), Ue.a.messageListCheckedOrSelectedUidsWithSubMails(), !0)
            }, t.prototype.moveCommand = function() {}, t.prototype.moveNewCommand = function(e, t) {
                this.newMoveToFolder() && this.mobileCheckedStateShow() && (e && t && t.preventDefault && (t.preventDefault(), t.stopPropagation && t.stopPropagation()), Object(Se.moveAction)() ? (Ne.a.focusedState(ve.Focused.MessageList), Object(Se.moveAction)(!1)) : (Ne.a.focusedState(ve.Focused.FolderList), Object(Se.moveAction)(!0)))
            }, t.prototype.hideLeft = function(e, t) {
                t.preventDefault(), t.stopPropagation(), Object(Se.leftPanelDisabled)(!0)
            }, t.prototype.showLeft = function(e, t) {
                t.preventDefault(), t.stopPropagation(), Object(Se.leftPanelDisabled)(!1)
            }, t.prototype.composeClick = function() {
                Ge.capa(ve.Capa.Composer) && Object(ot.showScreenPopup)(n(63))
            }, t.prototype.goToUpUpOrDownDown = function(e) {
                var t = this;
                return !(0 < this.messageListChecked().length || (de.a.clearTimeout(this.iGoToUpUpOrDownDownTimeout), this.iGoToUpUpOrDownDownTimeout = de.a.setTimeout(function() {
                    var n = null,
                        o = null,
                        i = null,
                        a = null;
                    he.a.find(t.messageListPagenator(), function(e) {
                        if (e) {
                            if (a && (o = e), e.current && (a = e, n = i), o) return !0;
                            i = e
                        }
                        return !1
                    }), ve.Layout.NoPreview !== Re.a.layout() || t.message() ? t.selector.iSelectNextHelper = e ? -1 : 1 : t.selector.iFocusedNextHelper = e ? -1 : 1, (e ? n : o) && (t.selector.unselect(), t.gotoPage(e ? n : o))
                }, ve.Magics.Time350ms), 0))
            }, t.prototype.useAutoSelect = function() {
                return !this.messageListDisableAutoSelect() && !/is:unseen/.test(this.mainMessageListSearch()) && ve.Layout.NoPreview !== Re.a.layout()
            }, t.prototype.searchEnterAction = function() {
                this.mainMessageListSearch(this.sLastSearchValue), this.inputMessageListSearchFocus(!1)
            }, t.prototype.printableMessageCountForDeletion = function() {
                var e = this.messageListCheckedOrSelectedUidsWithSubMails().length;
                return 1 < e ? " (" + (100 > e ? e : "99+") + ")" : ""
            }, t.prototype.cancelSearch = function() {
                this.mainMessageListSearch(""), this.inputMessageListSearchFocus(!1)
            }, t.prototype.cancelThreadUid = function() {
                Object(ot.setHash)(Object(Ae.o)(ke.a.currentFolderFullNameHash(), Ue.a.messageListPageBeforeThread(), Ue.a.messageListSearch()))
            }, t.prototype.moveSelectedMessagesToFolder = function(e, t) {
                return this.canBeMoved() && Object(nt.a)().moveMessagesToFolder(ke.a.currentFolderFullNameRaw(), Ue.a.messageListCheckedOrSelectedUidsWithSubMails(), e, t), !1
            }, t.prototype.dragAndDronHelper = function(e) {
                e && e.checked(!0);
                var t = Object(ye.draggablePlace)(),
                    n = function() {
                        var e = Ue.a.messageListCheckedOrSelectedUidsWithSubMails();
                        t.data("rl-uids", e), t.find(".text").text("" + e.length)
                    };
                return t.data("rl-folder", ke.a.currentFolderFullNameRaw()), n(), he.a.defer(n), t
            }, t.prototype.setAction = function(e, t, n) {
                Object(nt.a)().messageListAction(e, t, n)
            }, t.prototype.setActionForAll = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                if ("" !== e) {
                    var o = 0,
                        i = [],
                        a = Object(Ce.e)(e);
                    if (a) {
                        switch (t) {
                            case ve.MessageSetAction.SetSeen:
                                (a = Object(Ce.e)(e)) && (he.a.each(Ue.a.messageList(), function(e) {
                                    e.unseen() && (o += 1), e.unseen(!1), i.push(e.uid)
                                }), n ? (a.messageCountUnread(a.messageCountUnread() - o), 0 > a.messageCountUnread() && a.messageCountUnread(0)) : a.messageCountUnread(0), Object(Ce.c)(e)), Ve.a.messageSetSeenToAll(ye.noop, e, !0, n ? i : null);
                                break;
                            case ve.MessageSetAction.UnsetSeen:
                                (a = Object(Ce.e)(e)) && (he.a.each(Ue.a.messageList(), function(e) {
                                    e.unseen() || (o += 1), e.unseen(!0), i.push(e.uid)
                                }), n ? (a.messageCountUnread(a.messageCountUnread() + o), a.messageCountAll() < a.messageCountUnread() && a.messageCountUnread(a.messageCountAll())) : a.messageCountUnread(a.messageCountAll()), Object(Ce.c)(e)), Ve.a.messageSetSeenToAll(ye.noop, e, !1, n ? i : null)
                        }
                        Object(nt.a)().reloadFlagsCurrentMessageListAndMessageFromCache()
                    }
                }
            }, t.prototype.listSetSeen = function() {
                this.setAction(ke.a.currentFolderFullNameRaw(), ve.MessageSetAction.SetSeen, Ue.a.messageListCheckedOrSelected())
            }, t.prototype.listSetAllSeen = function() {
                this.setActionForAll(ke.a.currentFolderFullNameRaw(), ve.MessageSetAction.SetSeen, this.messageListEndThreadUid())
            }, t.prototype.listUnsetSeen = function() {
                this.setAction(ke.a.currentFolderFullNameRaw(), ve.MessageSetAction.UnsetSeen, Ue.a.messageListCheckedOrSelected())
            }, t.prototype.listSetFlags = function() {
                this.setAction(ke.a.currentFolderFullNameRaw(), ve.MessageSetAction.SetFlag, Ue.a.messageListCheckedOrSelected())
            }, t.prototype.listUnsetFlags = function() {
                this.setAction(ke.a.currentFolderFullNameRaw(), ve.MessageSetAction.UnsetFlag, Ue.a.messageListCheckedOrSelected())
            }, t.prototype.flagMessages = function(e) {
                var t = this.messageListCheckedOrSelected();
                if (e) {
                    var n = he.a.map(t, function(e) {
                        return e.uid
                    });
                    0 < n.length && -1 < Object(ye.inArray)(e.uid, n) ? this.setAction(e.folderFullNameRaw, e.flagged() ? ve.MessageSetAction.UnsetFlag : ve.MessageSetAction.SetFlag, t) : this.setAction(e.folderFullNameRaw, e.flagged() ? ve.MessageSetAction.UnsetFlag : ve.MessageSetAction.SetFlag, [e])
                }
            }, t.prototype.flagMessagesFast = function(e) {
                var t = this.messageListCheckedOrSelected();
                if (0 < t.length)
                    if (Object(ye.isUnd)(e)) {
                        var n = he.a.filter(t, function(e) {
                            return e.flagged()
                        });
                        this.setAction(t[0].folderFullNameRaw, t.length === n.length ? ve.MessageSetAction.UnsetFlag : ve.MessageSetAction.SetFlag, t)
                    } else this.setAction(t[0].folderFullNameRaw, e ? ve.MessageSetAction.SetFlag : ve.MessageSetAction.UnsetFlag, t)
            }, t.prototype.seenMessagesFast = function(e) {
                var t = this.messageListCheckedOrSelected();
                if (0 < t.length)
                    if (Object(ye.isUnd)(e)) {
                        var n = he.a.filter(t, function(e) {
                            return e.unseen()
                        });
                        this.setAction(t[0].folderFullNameRaw, 0 < n.length ? ve.MessageSetAction.SetSeen : ve.MessageSetAction.UnsetSeen, t)
                    } else this.setAction(t[0].folderFullNameRaw, e ? ve.MessageSetAction.SetSeen : ve.MessageSetAction.UnsetSeen, t)
            }, t.prototype.gotoPage = function(e) {
                e && Object(ot.setHash)(Object(Ae.o)(ke.a.currentFolderFullNameHash(), e.value, Ue.a.messageListSearch(), Ue.a.messageListThreadUid()))
            }, t.prototype.gotoThread = function(e) {
                e && 0 < e.threadsLen() && (Ue.a.messageListPageBeforeThread(Ue.a.messageListPage()), Object(ot.setHash)(Object(Ae.o)(ke.a.currentFolderFullNameHash(), 1, Ue.a.messageListSearch(), e.uid)))
            }, t.prototype.clearListIsVisible = function() {
                return "" === this.messageListSearchDesc() && "" === this.messageListError() && "" === this.messageListEndThreadUid() && 0 < this.messageList().length && (this.isSpamFolder() || this.isTrashFolder())
            }, t.prototype.onBuild = function(e) {
                var t = this,
                    n = this;
                this.oContentVisible = me()(".b-content", e), this.oContentScrollable = me()(".content", this.oContentVisible), this.selector.init(this.oContentVisible, this.oContentScrollable, ve.KeyState.MessageList), this.mobile && e.on("click", function() {
                    Object(Se.leftPanelDisabled)(!0)
                }), e.on("click", ".messageList .b-message-list-wrapper", function() {
                    ve.Focused.MessageView === Ne.a.focusedState() && Ne.a.focusedState(ve.Focused.MessageList)
                }).on("click", ".e-pagenator .e-page", function() {
                    n.gotoPage(De.a.dataFor(this))
                }).on("click", ".messageList .checkboxCkeckAll", function() {
                    t.checkAll(!t.checkAll())
                }).on("click", ".messageList .messageListItem .flagParent", function() {
                    n.flagMessages(De.a.dataFor(this))
                }).on("click", ".messageList .messageListItem .threads-len", function() {
                    n.gotoThread(De.a.dataFor(this))
                }).on("dblclick", ".messageList .messageListItem .actionHandle", function() {
                    n.gotoThread(De.a.dataFor(this))
                }), this.initUploaderForAppend(), this.initShortcuts(), !Se.bMobileDevice && mt.a && Ge.capa(ve.Capa.Prefetch) && (mt.a.setIdleDuration(ve.Magics.ifvisibleIdle10s), mt.a.idle(function() {
                    t.prefetchNextTick()
                }))
            }, t.prototype.initShortcuts = function() {
                var e = this;
                ct()("enter", ve.KeyState.MessageList, function() {
                    return !e.message() || !e.useAutoSelect() || (Ee.a("mailbox.message-view.toggle-full-screen"), !1)
                }), Ge.capa(ve.Capa.MessageListActions) && (ct()("z", [ve.KeyState.MessageList, ve.KeyState.MessageView], function() {
                    return e.archiveCommand(), !1
                }), ct()("delete, shift+delete, shift+3", ve.KeyState.MessageList, function(t, n) {
                    return !t || (0 < Ue.a.messageListCheckedOrSelected().length && (n && "shift+delete" === n.shortcut ? e.deleteWithoutMoveCommand() : e.deleteCommand()), !1)
                })), Ge.capa(ve.Capa.Reload) && ct()("ctrl+r, command+r", [ve.KeyState.FolderList, ve.KeyState.MessageList, ve.KeyState.MessageView], function() {
                    return e.reloadCommand(), !1
                }), ct()("ctrl+a, command+a", ve.KeyState.MessageList, function() {
                    return e.checkAll(!(e.checkAll() && !e.isIncompleteChecked())), !1
                }), Ge.capa(ve.Capa.Composer) && ct()("w,c", [ve.KeyState.MessageList, ve.KeyState.MessageView], function() {
                    return Object(ot.showScreenPopup)(n(63)), !1
                }), Ge.capa(ve.Capa.MessageListActions) && ct()("i", [ve.KeyState.MessageList, ve.KeyState.MessageView], function() {
                    return e.flagMessagesFast(), !1
                }), ct()("t", [ve.KeyState.MessageList], function() {
                    var t = e.selectorMessageSelected();
                    return t || (t = e.selectorMessageFocused()), t && 0 < t.threadsLen() && e.gotoThread(t), !1
                }), Ge.capa(ve.Capa.MessageListActions) && ct()("m", ve.KeyState.MessageList, function() {
                    return e.newMoveToFolder() ? e.moveNewCommand() : e.moveDropdownTrigger(!0), !1
                }), Ge.capa(ve.Capa.MessageListActions) && (ct()("q", [ve.KeyState.MessageList, ve.KeyState.MessageView], function() {
                    return e.seenMessagesFast(!0), !1
                }), ct()("u", [ve.KeyState.MessageList, ve.KeyState.MessageView], function() {
                    return e.seenMessagesFast(!1), !1
                })), Ge.capa(ve.Capa.Composer) && ct()("shift+f", [ve.KeyState.MessageList, ve.KeyState.MessageView], function() {
                    return e.multyForwardCommand(), !1
                }), Ge.capa(ve.Capa.Search) && ct()("/", [ve.KeyState.MessageList, ve.KeyState.MessageView], function() {
                    return e.inputMessageListSearchFocus(!0), !1
                }), ct()("esc", ve.KeyState.MessageList, function() {
                    return "" !== e.messageListSearchDesc() ? (e.cancelSearch(), !1) : "" === e.messageListEndThreadUid() || (e.cancelThreadUid(), !1)
                }), ct()("tab, shift+tab, left, right", ve.KeyState.MessageList, function(t, n) {
                    return t && n && ("shift+tab" === n.shortcut || "left" === n.shortcut) ? Ne.a.focusedState(ve.Focused.FolderList) : e.message() && Ne.a.focusedState(ve.Focused.MessageView), !1
                }), ct()("ctrl+left, command+left", ve.KeyState.MessageView, ye.noopFalse), ct()("ctrl+right, command+right", ve.KeyState.MessageView, ye.noopFalse)
            }, t.prototype.prefetchNextTick = function() {
                var e = this;
                if (mt.a && !this.bPrefetch && !mt.a.now() && this.viewModelVisibility()) {
                    var t = he.a.find(this.messageList(), function(e) {
                        return e && !Object(Ce.m)(e.folderFullNameRaw, e.uid)
                    });
                    t && (this.bPrefetch = !0, Object(Ce.b)(t.folderFullNameRaw, t.uid), Ve.a.message(function(t, n) {
                        var o = !(ve.StorageResultType.Success !== t || !n || !n.Result);
                        he.a.delay(function() {
                            e.bPrefetch = !1, o && e.prefetchNextTick()
                        }, ve.Magics.Time1s)
                    }, t.folderFullNameRaw, t.uid))
                }
            }, t.prototype.advancedSearchClick = function() {
                Ge.capa(ve.Capa.SearchAdv) && Object(ot.showScreenPopup)(n(197), [this.mainMessageListSearch()])
            }, t.prototype.quotaTooltip = function() {
                return Object(Fe.i18n)("MESSAGE_LIST/QUOTA_SIZE", {
                    SIZE: Object(ye.friendlySize)(this.userUsageSize()),
                    PROC: this.userUsageProc(),
                    LIMIT: Object(ye.friendlySize)(this.userQuota())
                })
            }, t.prototype.initUploaderForAppend = function() {
                var e = this;
                if (!Ge.appSettingsGet("allowAppendMessage") || !this.dragOverArea()) return !1;
                var t = new ht.a({
                    action: Object(Ae.b)(),
                    name: "AppendFile",
                    queueSize: 1,
                    multipleSizeLimit: 1,
                    hidden: {
                        Folder: function() {
                            return ke.a.currentFolderFullNameRaw()
                        }
                    },
                    dragAndDropElement: this.dragOverArea(),
                    dragAndDropBodyElement: this.dragOverBodyArea()
                });
                return this.dragOver.subscribe(function(t) {
                    t && e.selector.scrollToTop()
                }), t.on("onDragEnter", function() {
                    e.dragOverEnter(!0)
                }).on("onDragLeave", function() {
                    e.dragOverEnter(!1)
                }).on("onBodyDragEnter", function() {
                    e.dragOver(!0)
                }).on("onBodyDragLeave", function() {
                    e.dragOver(!1)
                }).on("onSelect", function(e, t) {
                    return !(!e || !t || "message/rfc822" !== t.Type || (Ue.a.messageListLoading(!0), 0))
                }).on("onComplete", function() {
                    Object(nt.a)().reloadMessageList(!0, !0)
                }), !!t
            }, t
        }(it.a)).prototype, "clearCommand", [y], et()(N.prototype, "clearCommand"), N.prototype), i(N.prototype, "reloadCommand", [v], et()(N.prototype, "reloadCommand"), N.prototype), i(N.prototype, "multyForwardCommand", [S], et()(N.prototype, "multyForwardCommand"), N.prototype), i(N.prototype, "deleteWithoutMoveCommand", [O], et()(N.prototype, "deleteWithoutMoveCommand"), N.prototype), i(N.prototype, "deleteCommand", [w], et()(N.prototype, "deleteCommand"), N.prototype), i(N.prototype, "archiveCommand", [T], et()(N.prototype, "archiveCommand"), N.prototype), i(N.prototype, "spamCommand", [C], et()(N.prototype, "spamCommand"), N.prototype), i(N.prototype, "notSpamCommand", [A], et()(N.prototype, "notSpamCommand"), N.prototype), i(N.prototype, "moveCommand", [E], et()(N.prototype, "moveCommand"), N.prototype), i(N.prototype, "moveNewCommand", [F], et()(N.prototype, "moveNewCommand"), N.prototype), j = N)) || j),
        vt = n(45),
        St = (R = Object(ot.view)({
            name: "View/User/MailBox/MessageView",
            type: ot.ViewType.Right,
            templateID: "MailMessageView"
        }), I = Object(ot.command)(), L = Object(ot.command)(function(e) {
            return e.messageVisibility()
        }), _ = Object(ot.command)(function(e) {
            return e.messageVisibility()
        }), P = Object(ot.command)(function(e) {
            return !e.messageListAndMessageViewLoading()
        }), D = Object(ot.command)(function(e) {
            return !e.messageListAndMessageViewLoading()
        }), R((a((k = function(e) {
            function t() {
                ae()(this, t);
                var n = se()(this, e.call(this)),
                    o = "",
                    i = function(e) {
                        return Object(ot.createCommand)(function() {
                            n.lastReplyAction(e), n.replyOrforward(e)
                        }, n.canBeRepliedOrForwarded)
                    },
                    a = function(e, t) {
                        return Object(ot.createCommand)(function() {
                            var o = n.message();
                            o && n.allowMessageListActions && (n.message(null), Object(nt.a)().deleteMessagesFromFolder(e, o.folderFullNameRaw, [o.uid], t))
                        }, n.messageVisibility)
                    };
                return n.oDom = null, n.oHeaderDom = null, n.oMessageScrollerDom = null, n.bodyBackgroundColor = De.a.observable(""), n.pswp = null, n.moveAction = Se.moveAction, n.allowComposer = !!Ge.capa(ve.Capa.Composer), n.allowMessageActions = !!Ge.capa(ve.Capa.MessageActions), n.allowMessageListActions = !!Ge.capa(ve.Capa.MessageListActions), n.logoImg = Object(ye.trim)(Ge.settingsGet("UserLogoMessage")), n.logoIframe = Object(ye.trim)(Ge.settingsGet("UserIframeMessage")), n.mobile = !!Ge.appSettingsGet("mobile"), n.attachmentsActions = Ne.a.attachmentsActions, n.message = Ue.a.message, n.messageListChecked = Ue.a.messageListChecked, n.hasCheckedMessages = Ue.a.hasCheckedMessages, n.messageListCheckedOrSelectedUidsWithSubMails = Ue.a.messageListCheckedOrSelectedUidsWithSubMails, n.messageLoadingThrottle = Ue.a.messageLoadingThrottle, n.messagesBodiesDom = Ue.a.messagesBodiesDom, n.useThreads = Re.a.useThreads, n.replySameFolder = Re.a.replySameFolder, n.layout = Re.a.layout, n.usePreviewPane = Re.a.usePreviewPane, n.isMessageSelected = Ue.a.isMessageSelected, n.messageActiveDom = Ue.a.messageActiveDom, n.messageError = Ue.a.messageError, n.fullScreenMode = Ue.a.messageFullScreenMode, n.messageListOfThreadsLoading = De.a.observable(!1).extend({
                    rateLimit: 1
                }), n.highlightUnselectedAttachments = De.a.observable(!1).extend({
                    falseTimeout: 2e3
                }), n.showAttachmnetControls = De.a.observable(!1), n.showAttachmnetControlsState = function(e) {
                    Be.b(ve.ClientSideKeyName.MessageAttachmnetControls, !!e)
                }, n.allowAttachmnetControls = De.a.computed(function() {
                    return 0 < n.attachmentsActions().length && Ge.capa(ve.Capa.AttachmentsActions)
                }), n.downloadAsZipAllowed = De.a.computed(function() {
                    return -1 < Object(ye.inArray)("zip", n.attachmentsActions()) && n.allowAttachmnetControls()
                }), n.downloadAsZipLoading = De.a.observable(!1), n.downloadAsZipError = De.a.observable(!1).extend({
                    falseTimeout: 7e3
                }), n.saveToOwnCloudAllowed = De.a.computed(function() {
                    return -1 < Object(ye.inArray)("owncloud", n.attachmentsActions()) && n.allowAttachmnetControls()
                }), n.saveToOwnCloudLoading = De.a.observable(!1), n.saveToOwnCloudSuccess = De.a.observable(!1).extend({
                    falseTimeout: 2e3
                }), n.saveToOwnCloudError = De.a.observable(!1).extend({
                    falseTimeout: 7e3
                }), n.saveToOwnCloudSuccess.subscribe(function(e) {
                    e && n.saveToOwnCloudError(!1)
                }), n.saveToOwnCloudError.subscribe(function(e) {
                    e && n.saveToOwnCloudSuccess(!1)
                }), n.saveToDropboxAllowed = De.a.computed(function() {
                    return false; //< Object(ye.inArray)("dropbox", n.attachmentsActions()) && n.allowAttachmnetControls()
                }), n.saveToDropboxLoading = De.a.observable(!1), n.saveToDropboxSuccess = De.a.observable(!1).extend({
                    falseTimeout: 2e3
                }), n.saveToDropboxError = De.a.observable(!1).extend({
                    falseTimeout: 7e3
                }), n.saveToDropboxSuccess.subscribe(function(e) {
                    e && n.saveToDropboxError(!1)
                }), n.saveToDropboxError.subscribe(function(e) {
                    e && n.saveToDropboxSuccess(!1)
                }), n.showAttachmnetControls.subscribe(function(e) {
                    n.message() && he.a.each(n.message().attachments(), function(t) {
                        t && t.checked(!!e)
                    })
                }), n.lastReplyAction_ = De.a.observable(""), n.lastReplyAction = De.a.computed({
                    read: n.lastReplyAction_,
                    write: function(e) {
                        n.lastReplyAction_(-1 === Object(ye.inArray)(e, [ve.ComposeType.Reply, ve.ComposeType.ReplyAll, ve.ComposeType.Forward]) ? ve.ComposeType.Reply : e)
                    }
                }), n.lastReplyAction(Be.a(ve.ClientSideKeyName.LastReplyAction) || ve.ComposeType.Reply), n.lastReplyAction_.subscribe(function(e) {
                    Be.b(ve.ClientSideKeyName.LastReplyAction, e)
                }), n.showFullInfo = De.a.observable("1" === Be.a(ve.ClientSideKeyName.MessageHeaderFullInfo)), n.moreDropdownTrigger = De.a.observable(!1), n.messageDomFocused = De.a.observable(!1).extend({
                    rateLimit: 0
                }), n.messageVisibility = De.a.computed(function() {
                    return !n.messageLoadingThrottle() && !!n.message()
                }), n.message.subscribe(function(e) {
                    e || Ue.a.selectorMessageSelected(null)
                }), n.canBeRepliedOrForwarded = De.a.computed(function() {
                    var e = n.messageVisibility();
                    return !n.isDraftFolder() && e
                }), n.replyCommand = i(ve.ComposeType.Reply), n.replyAllCommand = i(ve.ComposeType.ReplyAll), n.forwardCommand = i(ve.ComposeType.Forward), n.forwardAsAttachmentCommand = i(ve.ComposeType.ForwardAsAttachment), n.editAsNewCommand = i(ve.ComposeType.EditAsNew), n.deleteCommand = a(ve.FolderType.Trash, !0), n.deleteWithoutMoveCommand = a(ve.FolderType.Trash, !1), n.archiveCommand = a(ve.FolderType.Archive, !0), n.spamCommand = a(ve.FolderType.Spam, !0), n.notSpamCommand = a(ve.FolderType.NotSpam, !0), n.dropboxEnabled = je.a.dropbox.enabled, n.dropboxApiKey = je.a.dropbox.apiKey, n.viewBodyTopValue = De.a.observable(0), n.viewFolder = "", n.viewUid = "", n.viewHash = "", n.viewSubject = De.a.observable(""), n.viewFromShort = De.a.observable(""), n.viewFromDkimData = De.a.observable(["none", ""]), n.viewToShort = De.a.observable(""), n.viewFrom = De.a.observable(""), n.viewTo = De.a.observable(""), n.viewCc = De.a.observable(""), n.viewBcc = De.a.observable(""), n.viewReplyTo = De.a.observable(""), n.viewTimeStamp = De.a.observable(0), n.viewSize = De.a.observable(""), n.viewLineAsCss = De.a.observable(""), n.viewViewLink = De.a.observable(""), n.viewUnsubscribeLink = De.a.observable(""), n.viewDownloadLink = De.a.observable(""), n.viewUserPic = De.a.observable(Oe.f), n.viewUserPicVisible = De.a.observable(!1), n.viewIsImportant = De.a.observable(!1), n.viewIsFlagged = De.a.observable(!1), n.viewFromDkimVisibility = De.a.computed(function() {
                    return "none" !== n.viewFromDkimData()[0]
                }), n.viewFromDkimStatusIconClass = De.a.computed(function() {
                    switch (n.viewFromDkimData()[0]) {
                        case "none":
                            return "icon-none iconcolor-display-none";
                        case "pass":
                            return "icon-ok iconcolor-green";
                        default:
                            return "icon-warning-alt iconcolor-red"
                    }
                }), n.viewFromDkimStatusTitle = De.a.computed(function() {
                    var e = n.viewFromDkimData();
                    if (Object(ye.isNonEmptyArray)(e)) {
                        if (e[0] && e[1]) return e[1];
                        if (e[0]) return "DKIM: " + e[0]
                    }
                    return ""
                }), n.messageActiveDom.subscribe(function(e) {
                    n.bodyBackgroundColor(e ? n.detectDomBackgroundColor(e) : "")
                }, n), n.message.subscribe(function(e) {
                    n.messageActiveDom(null), e ? (n.showAttachmnetControls(!1), Be.a(ve.ClientSideKeyName.MessageAttachmnetControls) && he.a.delay(function() {
                        n.showAttachmnetControls(!0)
                    }, ve.Magics.Time50ms), n.viewHash !== e.hash && n.scrollMessageToTop(), n.viewFolder = e.folderFullNameRaw, n.viewUid = e.uid, n.viewHash = e.hash, n.viewSubject(e.subject()), n.viewFromShort(e.fromToLine(!0, !0)), n.viewFromDkimData(e.fromDkimData()), n.viewToShort(e.toToLine(!0, !0)), n.viewFrom(e.fromToLine(!1)), n.viewTo(e.toToLine(!1)), n.viewCc(e.ccToLine(!1)), n.viewBcc(e.bccToLine(!1)), n.viewReplyTo(e.replyToToLine(!1)), n.viewTimeStamp(e.dateTimeStampInUTC()), n.viewSize(e.friendlySize()), n.viewLineAsCss(e.lineAsCss()), n.viewViewLink(e.viewLink()), n.viewUnsubscribeLink(e.getFirstUnsubsribeLink()), n.viewDownloadLink(e.downloadLink()), n.viewIsImportant(e.isImportant()), n.viewIsFlagged(e.flagged()), o = e.fromAsSingleEmail(), Object(Ce.k)(o, function(e, t) {
                        e !== n.viewUserPic() && o === t && (n.viewUserPicVisible(!1), n.viewUserPic(Oe.f), "" !== e && (n.viewUserPicVisible(!0), n.viewUserPic(e)))
                    })) : (n.viewFolder = "", n.viewUid = "", n.viewHash = "", n.scrollMessageToTop())
                }), n.message.viewTrigger.subscribe(function() {
                    var e = n.message();
                    e ? n.viewIsFlagged(e.flagged()) : n.viewIsFlagged(!1)
                }), n.fullScreenMode.subscribe(function(e) {
                    Se.$html.toggleClass("rl-message-fullscreen", e), Object(ye.windowResize)()
                }), n.messageLoadingThrottle.subscribe(ye.windowResizeCallback), n.messageFocused = De.a.computed(function() {
                    return ve.Focused.MessageView === Ne.a.focusedState()
                }), n.messageListAndMessageViewLoading = De.a.computed(function() {
                    return Ue.a.messageListCompleteLoadingThrottle() || Ue.a.messageLoadingThrottle()
                }), Ee.b("mailbox.message-view.toggle-full-screen", function() {
                    n.toggleFullScreen()
                }), n.attachmentPreview = he.a.bind(n.attachmentPreview, n), n
            }
            return le()(t, e), t.prototype.closeMessageCommand = function() {
                Ue.a.message(null)
            }, t.prototype.messageVisibilityCommand = function() {}, t.prototype.messageEditCommand = function() {
                this.editMessage()
            }, t.prototype.goUpCommand = function() {
                Ee.a("mailbox.message-list.selector.go-up", [ve.Layout.NoPreview !== this.layout() || !!this.message()])
            }, t.prototype.goDownCommand = function() {
                Ee.a("mailbox.message-list.selector.go-down", [ve.Layout.NoPreview !== this.layout() || !!this.message()])
            }, t.prototype.detectDomBackgroundColor = function(e) {
                var t, n, o = 5,
                    i = "";
                if (e && 1 === e.length) {
                    for (var a = e;
                        "" === i && !(0 >= (o -= 1)) && (n = void 0, a = (n = (t = a) ? t.children() : null) && 1 === n.length && n.is("table,div,center") ? n : null);) i = function(e) {
                        var t = "";
                        return e && (t = e.css("background-color") || "", e.is("table") || (t = Object(ye.isTransparent)(t) ? "" : t)), t
                    }(a);
                    i = Object(ye.isTransparent)(i) ? "" : i
                }
                return i
            }, t.prototype.fullScreen = function() {
                this.fullScreenMode(!0), Object(ye.windowResize)()
            }, t.prototype.unFullScreen = function() {
                this.fullScreenMode(!1), Object(ye.windowResize)()
            }, t.prototype.toggleFullScreen = function() {
                Object(ye.removeSelection)(), this.fullScreenMode(!this.fullScreenMode()), Object(ye.windowResize)()
            }, t.prototype.replyOrforward = function(e) {
                Ge.capa(ve.Capa.Composer) && Object(ot.showScreenPopup)(n(63), [e, Ue.a.message()])
            }, t.prototype.checkHeaderHeight = function() {
                this.oHeaderDom && this.viewBodyTopValue(this.message() ? this.oHeaderDom.height() + ve.Magics.Size20px + ve.Magics.Size1px : 0)
            }, t.prototype.attachmentPreview = function(e) {
                if (e && e.isImage() && !e.isLinked && this.message() && this.message().attachments()) {
                    var t = 0,
                        n = 0,
                        o = me()("<div>"),
                        i = he.a.compact(he.a.map(this.message().attachments(), function(o) {
                            return o && !o.isLinked && o.isImage() ? (o === e && (t = n), n += 1, {
                                src: o.linkPreview(),
                                thumb: o.linkThumbnail(),
                                subHtml: o.fileName,
                                downloadUrl: o.linkPreview()
                            }) : null
                        }));
                    return 0 < i.length && (o.on("onBeforeOpen.lg", function() {
                        Object(Se.useKeyboardShortcuts)(!1), Object(ye.removeInFocus)(!0)
                    }), o.on("onCloseAfter.lg", function() {
                        Object(Se.useKeyboardShortcuts)(!0)
                    }), o.lightGallery({
                        dynamic: !0,
                        loadYoutubeThumbnail: !1,
                        loadVimeoThumbnail: !1,
                        thumbWidth: 80,
                        thumbContHeight: 95,
                        showThumbByDefault: !1,
                        mode: "lg-lollipop",
                        index: t,
                        dynamicEl: i
                    })), !1
                }
                return !0
            }, t.prototype.onBuild = function(e) {
                var t = this,
                    o = this,
                    i = he.a.bind(this.checkHeaderHeight, this);
                this.oDom = e, this.fullScreenMode.subscribe(function(e) {
                    e && t.message() && Ne.a.focusedState(ve.Focused.MessageView)
                }), this.showAttachmnetControls.subscribe(i), this.fullScreenMode.subscribe(i), this.showFullInfo.subscribe(i), this.message.subscribe(i), Ee.b("window.resize", he.a.throttle(function() {
                    he.a.delay(i, 1), he.a.delay(i, ve.Magics.Time200ms), he.a.delay(i, ve.Magics.Time500ms)
                }, ve.Magics.Time50ms)), this.showFullInfo.subscribe(function(e) {
                    Object(ye.windowResize)(), Object(ye.windowResize)(ve.Magics.Time200ms), Be.b(ve.ClientSideKeyName.MessageHeaderFullInfo, e ? "1" : "0")
                }), je.a.appendDropbox(), this.oHeaderDom = me()(".messageItemHeader", e), this.oHeaderDom = this.oHeaderDom[0] ? this.oHeaderDom : null, this.mobile && e.on("click", function() {
                    Object(Se.leftPanelDisabled)(!0)
                }), e.on("click", "a", function(e) {
                    return !(e && ve.Magics.EventWhichMouseMiddle !== e.which && Object(ye.mailToHelper)(me()(this).attr("href"), Ge.capa(ve.Capa.Composer) ? n(63) : null))
                }).on("click", ".attachmentsPlace .attachmentIconParent", function(e) {
                    e && e.stopPropagation && e.stopPropagation()
                }).on("click", ".attachmentsPlace .showPreplay", function(e) {
                    e && e.stopPropagation && e.stopPropagation();
                    var t = De.a.dataFor(this);
                    if (t && vt.a.supported) switch (!0) {
                        case vt.a.supportedMp3 && t.isMp3():
                            vt.a.playMp3(t.linkDownload(), t.fileName);
                            break;
                        case vt.a.supportedOgg && t.isOgg():
                            vt.a.playOgg(t.linkDownload(), t.fileName);
                            break;
                        case vt.a.supportedWav && t.isWav():
                            vt.a.playWav(t.linkDownload(), t.fileName)
                    }
                }).on("click", ".attachmentsPlace .attachmentItem .attachmentNameParent", function() {
                    var e = De.a.dataFor(this);
                    e && e.download && Object(nt.a)().download(e.linkDownload())
                }).on("click", ".messageItemHeader .subjectParent .flagParent", function() {
                    var e = o.message();
                    e && Object(nt.a)().messageListAction(e.folderFullNameRaw, e.flagged() ? ve.MessageSetAction.UnsetFlag : ve.MessageSetAction.SetFlag, [e])
                }).on("click", ".thread-list .flagParent", function() {
                    var e = De.a.dataFor(this);
                    return e && e.folder && e.uid && Object(nt.a)().messageListAction(e.folder, e.flagged() ? ve.MessageSetAction.UnsetFlag : ve.MessageSetAction.SetFlag, [e]), o.threadsDropdownTrigger(!0), !1
                }), Ne.a.focusedState.subscribe(function(e) {
                    ve.Focused.MessageView !== e && (t.scrollMessageToTop(), t.scrollMessageToLeft())
                }), Se.keyScopeReal.subscribe(function(e) {
                    t.messageDomFocused(ve.KeyState.MessageView === e && !Object(ye.inFocus)())
                }), this.oMessageScrollerDom = e.find(".messageItem .content"), this.oMessageScrollerDom = this.oMessageScrollerDom && this.oMessageScrollerDom[0] ? this.oMessageScrollerDom : null, this.initShortcuts()
            }, t.prototype.escShortcuts = function() {
                return !this.viewModelVisibility() || !this.message() || (this.fullScreenMode() ? (this.fullScreenMode(!1), ve.Layout.NoPreview !== this.layout() && Ne.a.focusedState(ve.Focused.MessageList)) : ve.Layout.NoPreview === this.layout() ? this.message(null) : Ne.a.focusedState(ve.Focused.MessageList), !1)
            }, t.prototype.initShortcuts = function() {
                var e = this;
                ct()("esc, backspace", ve.KeyState.MessageView, he.a.bind(this.escShortcuts, this)), ct()("enter", ve.KeyState.MessageView, function() {
                    return e.toggleFullScreen(), !1
                }), ct()("r", [ve.KeyState.MessageList, ve.KeyState.MessageView], function() {
                    return !Ue.a.message() || (e.replyCommand(), !1)
                }), ct()("a", [ve.KeyState.MessageList, ve.KeyState.MessageView], function() {
                    return !Ue.a.message() || (e.replyAllCommand(), !1)
                }), ct()("f", [ve.KeyState.MessageList, ve.KeyState.MessageView], function() {
                    return !Ue.a.message() || (e.forwardCommand(), !1)
                }), ct()("ctrl+i, command+i", [ve.KeyState.MessageList, ve.KeyState.MessageView], function() {
                    return Ue.a.message() && e.showFullInfo(!e.showFullInfo()), !1
                }), ct()("b", [ve.KeyState.MessageList, ve.KeyState.MessageView], function() {
                    return !Ue.a.message() || !Ue.a.message().body || (Ue.a.message().body.find(".rlBlockquoteSwitcher").click(), !1)
                }), ct()("ctrl+up, command+up, ctrl+left, command+left", [ve.KeyState.MessageList, ve.KeyState.MessageView], function() {
                    return e.goUpCommand(), !1
                }), ct()("ctrl+down, command+down, ctrl+right, command+right", [ve.KeyState.MessageList, ve.KeyState.MessageView], function() {
                    return e.goDownCommand(), !1
                }), ct()("ctrl+p, command+p", [ve.KeyState.MessageView, ve.KeyState.MessageList], function() {
                    return e.message() && e.message().printMessage(), !1
                }), ct()("delete, shift+delete", ve.KeyState.MessageView, function(t, n) {
                    return !t || (n && "shift+delete" === n.shortcut ? e.deleteWithoutMoveCommand() : e.deleteCommand(), !1)
                }), ct()("tab, shift+tab, left", ve.KeyState.MessageView, function(t, n) {
                    if (!e.fullScreenMode() && e.message() && ve.Layout.NoPreview !== e.layout())
                        if (t && n && "left" === n.shortcut) {
                            if (e.oMessageScrollerDom && 0 < e.oMessageScrollerDom.scrollLeft()) return !0;
                            Ne.a.focusedState(ve.Focused.MessageList)
                        } else Ne.a.focusedState(ve.Focused.MessageList);
                    else if (e.message() && ve.Layout.NoPreview === e.layout() && t && n && "left" === n.shortcut) return !0;
                    return !1
                })
            }, t.prototype.isDraftFolder = function() {
                return Ue.a.message() && ke.a.draftFolder() === Ue.a.message().folderFullNameRaw
            }, t.prototype.isSentFolder = function() {
                return Ue.a.message() && ke.a.sentFolder() === Ue.a.message().folderFullNameRaw
            }, t.prototype.isSpamFolder = function() {
                return Ue.a.message() && ke.a.spamFolder() === Ue.a.message().folderFullNameRaw
            }, t.prototype.isSpamDisabled = function() {
                return Ue.a.message() && ke.a.spamFolder() === Oe.r
            }, t.prototype.isArchiveFolder = function() {
                return Ue.a.message() && ke.a.archiveFolder() === Ue.a.message().folderFullNameRaw
            }, t.prototype.isArchiveDisabled = function() {
                return Ue.a.message() && ke.a.archiveFolder() === Oe.r
            }, t.prototype.isDraftOrSentFolder = function() {
                return this.isDraftFolder() || this.isSentFolder()
            }, t.prototype.composeClick = function() {
                Ge.capa(ve.Capa.Composer) && Object(ot.showScreenPopup)(n(63))
            }, t.prototype.editMessage = function() {
                Ge.capa(ve.Capa.Composer) && Ue.a.message() && Object(ot.showScreenPopup)(n(63), [ve.ComposeType.Draft, Ue.a.message()])
            }, t.prototype.scrollMessageToTop = function() {
                this.oMessageScrollerDom && (ve.Magics.Size50px < this.oMessageScrollerDom.scrollTop() ? this.oMessageScrollerDom.scrollTop(ve.Magics.Size50px).animate({
                    scrollTop: 0
                }, ve.Magics.Time200ms) : this.oMessageScrollerDom.scrollTop(0), Object(ye.windowResize)())
            }, t.prototype.scrollMessageToLeft = function() {
                this.oMessageScrollerDom && (this.oMessageScrollerDom.scrollLeft(0), Object(ye.windowResize)())
            }, t.prototype.getAttachmentsHashes = function() {
                var e = this.message() ? this.message().attachments() : [];
                return he.a.compact(he.a.map(e, function(e) {
                    return e && !e.isLinked && e.checked() ? e.download : ""
                }))
            }, t.prototype.downloadAsZip = function() {
                var e = this,
                    t = this.getAttachmentsHashes();
                0 < t.length ? ze.a.attachmentsActions("Zip", t, this.downloadAsZipLoading).then(function(t) {
                    t && t.Result && t.Result.Files && t.Result.Files[0] && t.Result.Files[0].Hash ? Object(nt.a)().download(Object(Ae.c)(t.Result.Files[0].Hash)) : e.downloadAsZipError(!0)
                }).catch(function() {
                    e.downloadAsZipError(!0)
                }) : this.highlightUnselectedAttachments(!0)
            }, t.prototype.saveToOwnCloud = function() {
                var e = this,
                    t = this.getAttachmentsHashes();
                0 < t.length ? ze.a.attachmentsActions("OwnCloud", t, this.saveToOwnCloudLoading).then(function(t) {
                    t && t.Result ? e.saveToOwnCloudSuccess(!0) : e.saveToOwnCloudError(!0)
                }).catch(function() {
                    e.saveToOwnCloudError(!0)
                }) : this.highlightUnselectedAttachments(!0)
            }, t.prototype.saveToDropbox = function() {
                var e = this,
                    t = [],
                    n = this.getAttachmentsHashes();
                0 < n.length ? de.a.Dropbox && ze.a.attachmentsActions("Dropbox", n, this.saveToDropboxLoading).then(function(n) {
                    n && n.Result && n.Result.Url && n.Result.ShortLife && n.Result.Files && (de.a.Dropbox && Object(ye.isArray)(n.Result.Files) ? (he.a.each(n.Result.Files, function(e) {
                        t.push({
                            url: n.Result.Url + Object(Ae.c)(e.Hash, n.Result.ShortLife),
                            filename: e.FileName
                        })
                    }), de.a.Dropbox.save({
                        files: t,
                        progress: function() {
                            e.saveToDropboxLoading(!0), e.saveToDropboxError(!1), e.saveToDropboxSuccess(!1)
                        },
                        cancel: function() {
                            e.saveToDropboxSuccess(!1), e.saveToDropboxError(!1), e.saveToDropboxLoading(!1)
                        },
                        success: function() {
                            e.saveToDropboxSuccess(!0), e.saveToDropboxLoading(!1)
                        },
                        error: function() {
                            e.saveToDropboxError(!0), e.saveToDropboxLoading(!1)
                        }
                    })) : e.saveToDropboxError(!0))
                }).catch(function() {
                    e.saveToDropboxError(!0)
                }) : this.highlightUnselectedAttachments(!0)
            }, t.prototype.showImages = function(e) {
                e && e.showExternalImages && e.showExternalImages(!0), this.checkHeaderHeight()
            }, t.prototype.printableCheckedMessageCount = function() {
                var e = this.messageListCheckedOrSelectedUidsWithSubMails().length;
                return 0 < e ? 100 > e ? e : "99+" : ""
            }, t.prototype.readReceipt = function(e) {
                e && "" !== e.readReceipt() && (Ve.a.sendReadReceiptMessage(ye.noop, e.folderFullNameRaw, e.uid, e.readReceipt(), Object(Fe.i18n)("READ_RECEIPT/SUBJECT", {
                    SUBJECT: e.subject()
                }), Object(Fe.i18n)("READ_RECEIPT/BODY", {
                    "READ-RECEIPT": Le.a.email()
                })), e.isReadReceipt(!0), Object(Ce.u)(e), Object(nt.a)().reloadFlagsCurrentMessageListAndMessageFromCache()), this.checkHeaderHeight()
            }, t
        }(it.a)).prototype, "closeMessageCommand", [I], et()(k.prototype, "closeMessageCommand"), k.prototype), a(k.prototype, "messageVisibilityCommand", [L], et()(k.prototype, "messageVisibilityCommand"), k.prototype), a(k.prototype, "messageEditCommand", [_], et()(k.prototype, "messageEditCommand"), k.prototype), a(k.prototype, "goUpCommand", [P], et()(k.prototype, "goUpCommand"), k.prototype), a(k.prototype, "goDownCommand", [D], et()(k.prototype, "goDownCommand"), k.prototype), M = k)) || M),
        Ot = function(e) {
            function t() {
                return ae()(this, t), se()(this, e.call(this, "mailbox", [ut, dt, yt, St]))
            }
            return le()(t, e), t.prototype.updateWindowTitle = function() {
                var e = ke.a.foldersInboxUnreadCount(),
                    t = Le.a.email();
                Ge.appSettingsGet("listPermanentFiltered") && (e = 0), Object(nt.a)().setWindowTitle(("" === t ? "" : (0 < e ? "(" + e + ") " : " ") + t + " - ") + Object(Fe.i18n)("TITLES/MAILBOX"))
            }, t.prototype.onShow = function() {
                this.updateWindowTitle(), Ne.a.focusedState(ve.Focused.None), Ne.a.focusedState(ve.Focused.MessageList), Ge.appSettingsGet("mobile") && Object(Se.leftPanelDisabled)(!0), Ge.capa(ve.Capa.Folders) ? Object(Se.leftPanelType)("") : Object(Se.leftPanelType)(Ge.capa(ve.Capa.Composer) || Ge.capa(ve.Capa.Contacts) ? "short" : "none")
            }, t.prototype.onRoute = function(e, t, n) {
                var o = e.replace(/^(.+)~([\d]+)$/, "$2"),
                    i = Object(Ce.e)(Object(Ce.f)(e.replace(/~([\d]+)$/, "")));
                i && (e === o && (o = ""), ke.a.currentFolder(i), Ue.a.messageListPage(t), Ue.a.messageListSearch(n), Ue.a.messageListThreadUid(o), Object(nt.a)().reloadMessageList())
            }, t.prototype.onStart = function() {
                var e = this;
                ke.a.folderList.subscribe(ye.windowResizeCallback), Ue.a.messageList.subscribe(ye.windowResizeCallback), Ue.a.message.subscribe(ye.windowResizeCallback), he.a.delay(function() {
                    return Re.a.layout.valueHasMutated()
                }, ve.Magics.Time50ms), he.a.delay(function() {
                    return Object(ot.warmUpScreenPopup)(n(63))
                }, ve.Magics.Time500ms), Ee.b("mailbox.inbox-unread-count", function(t) {
                    ke.a.foldersInboxUnreadCount(t);
                    var n = Le.a.email();
                    he.a.each(Le.a.accounts(), function(e) {
                        e && n === e.email && e.count(t)
                    }), e.updateWindowTitle()
                })
            }, t.prototype.onBuild = function() {
                Se.bMobileDevice || Ge.appSettingsGet("mobile") || he.a.defer(function() {
                    Object(nt.a)().initHorizontalLayoutResizer(ve.ClientSideKeyName.MessageListSize)
                }), Se.$html.on("click", "#rl-right", function() {
                    Object(Se.moveAction)(!1)
                })
            }, t.prototype.routes = function() {
                var e = Object(Ce.h)(),
                    t = function(t, n) {
                        return n[0] = Object(ye.pString)(n[0]), n[1] = Object(ye.pInt)(n[1]), n[1] = 0 >= n[1] ? 1 : n[1], n[2] = Object(ye.pString)(n[2]), "" === t && (n[0] = e, n[1] = 1), [Object(ye.decodeURI)(n[0]), n[1], Object(ye.decodeURI)(n[2])]
                    };
                return [
                    [/^([a-zA-Z0-9~]+)\/p([1-9][0-9]*)\/(.+)\/?$/, {
                        normalize_: t
                    }],
                    [/^([a-zA-Z0-9~]+)\/p([1-9][0-9]*)$/, {
                        normalize_: t
                    }],
                    [/^([a-zA-Z0-9~]+)\/(.+)\/?$/, {
                        normalize_: function(t, n) {
                            return n[0] = Object(ye.pString)(n[0]), n[1] = Object(ye.pString)(n[1]), "" === t && (n[0] = e), [Object(ye.decodeURI)(n[0]), 1, Object(ye.decodeURI)(n[1])]
                        }
                    }],
                    [/^([^\/]*)$/, {
                        normalize_: t
                    }]
                ]
            }, t
        }(Ze.a),
        wt = n(114),
        Tt = function() {
            function e() {
                var t = this;
                ae()(this, e), this.language = tt.a.language, this.languages = tt.a.languages, this.messagesPerPage = Re.a.messagesPerPage, this.messagesPerPageArray = Oe.j, this.editorDefaultType = Re.a.editorDefaultType, this.layout = Re.a.layout, this.usePreviewPane = Re.a.usePreviewPane, this.soundNotificationIsSupported = Ie.a.soundNotificationIsSupported, this.enableSoundNotification = Ie.a.enableSoundNotification, this.enableDesktopNotification = Ie.a.enableDesktopNotification, this.isDesktopNotificationSupported = Ie.a.isDesktopNotificationSupported, this.isDesktopNotificationDenied = Ie.a.isDesktopNotificationDenied, this.showImages = Re.a.showImages, this.useCheckboxesInList = Re.a.useCheckboxesInList, this.threadsAllowed = Ne.a.threadsAllowed, this.useThreads = Re.a.useThreads, this.replySameFolder = Re.a.replySameFolder, this.allowLanguagesOnSettings = Ne.a.allowLanguagesOnSettings, this.languageFullName = De.a.computed(function() {
                    return Object(ye.convertLangName)(t.language())
                }), this.languageTrigger = De.a.observable(ve.SaveSettingsStep.Idle).extend({
                    throttle: ve.Magics.Time100ms
                }), this.mppTrigger = De.a.observable(ve.SaveSettingsStep.Idle), this.editorDefaultTypeTrigger = De.a.observable(ve.SaveSettingsStep.Idle), this.layoutTrigger = De.a.observable(ve.SaveSettingsStep.Idle), this.isAnimationSupported = Se.bAnimationSupported, this.identities = Pe.a.identities, this.identityMain = De.a.computed(function() {
                    var e = t.identities();
                    return Object(ye.isArray)(e) ? he.a.find(e, function(e) {
                        return e && "" === e.id()
                    }) : null
                }), this.identityMainDesc = De.a.computed(function() {
                    var e = t.identityMain();
                    return e ? e.formattedName() : "---"
                }), this.editorDefaultTypes = De.a.computed(function() {
                    return Object(Fe.trigger)(), [{
                        id: ve.EditorDefaultType.Html,
                        name: Object(Fe.i18n)("SETTINGS_GENERAL/LABEL_EDITOR_HTML")
                    }, {
                        id: ve.EditorDefaultType.Plain,
                        name: Object(Fe.i18n)("SETTINGS_GENERAL/LABEL_EDITOR_PLAIN")
                    }, {
                        id: ve.EditorDefaultType.HtmlForced,
                        name: Object(Fe.i18n)("SETTINGS_GENERAL/LABEL_EDITOR_HTML_FORCED")
                    }, {
                        id: ve.EditorDefaultType.PlainForced,
                        name: Object(Fe.i18n)("SETTINGS_GENERAL/LABEL_EDITOR_PLAIN_FORCED")
                    }]
                }), this.layoutTypes = De.a.computed(function() {
                    return Object(Fe.trigger)(), [{
                        id: ve.Layout.NoPreview,
                        name: Object(Fe.i18n)("SETTINGS_GENERAL/LABEL_LAYOUT_NO_SPLIT")
                    }, {
                        id: ve.Layout.SidePreview,
                        name: Object(Fe.i18n)("SETTINGS_GENERAL/LABEL_LAYOUT_VERTICAL_SPLIT")
                    }, {
                        id: ve.Layout.BottomPreview,
                        name: Object(Fe.i18n)("SETTINGS_GENERAL/LABEL_LAYOUT_HORIZONTAL_SPLIT")
                    }]
                })
            }
            return e.prototype.editMainIdentity = function() {
                var e = this.identityMain();
                e && Object(ot.showScreenPopup)(n(135), [e])
            }, e.prototype.testSoundNotification = function() {
                Ie.a.playSoundNotification(!0)
            }, e.prototype.onBuild = function() {
                var e = this;
                he.a.delay(function() {
                    var t = Object(ye.settingsSaveHelperSimpleFunction)(e.editorDefaultTypeTrigger, e),
                        n = Object(ye.settingsSaveHelperSimpleFunction)(e.mppTrigger, e),
                        o = Object(ye.settingsSaveHelperSimpleFunction)(e.layoutTrigger, e),
                        i = function(t) {
                            return function() {
                                e.languageTrigger(t), he.a.delay(function() {
                                    return e.languageTrigger(ve.SaveSettingsStep.Idle)
                                }, ve.Magics.Time1s)
                            }
                        };
                    e.language.subscribe(function(t) {
                        e.languageTrigger(ve.SaveSettingsStep.Animate), Object(Fe.reload)(!1, t).then(i(ve.SaveSettingsStep.TrueResult), i(ve.SaveSettingsStep.FalseResult)).then(function() {
                            Ve.a.saveSettings(null, {
                                Language: t
                            })
                        })
                    }), e.editorDefaultType.subscribe(Ve.a.saveSettingsHelper("EditorDefaultType", null, t)), e.messagesPerPage.subscribe(Ve.a.saveSettingsHelper("MPP", null, n)), e.showImages.subscribe(Ve.a.saveSettingsHelper("ShowImages", ye.boolToAjax)), e.useCheckboxesInList.subscribe(Ve.a.saveSettingsHelper("UseCheckboxesInList", ye.boolToAjax)), e.enableDesktopNotification.subscribe(function(e) {
                        Object(ye.timeOutAction)("SaveDesktopNotifications", function() {
                            Ve.a.saveSettings(null, {
                                DesktopNotifications: Object(ye.boolToAjax)(e)
                            })
                        }, ve.Magics.Time3s)
                    }), e.enableSoundNotification.subscribe(function(e) {
                        Object(ye.timeOutAction)("SaveSoundNotification", function() {
                            Ve.a.saveSettings(null, {
                                SoundNotification: Object(ye.boolToAjax)(e)
                            })
                        }, ve.Magics.Time3s)
                    }), e.replySameFolder.subscribe(function(e) {
                        Object(ye.timeOutAction)("SaveReplySameFolder", function() {
                            Ve.a.saveSettings(null, {
                                ReplySameFolder: Object(ye.boolToAjax)(e)
                            })
                        }, ve.Magics.Time3s)
                    }), e.useThreads.subscribe(function(e) {
                        Ue.a.messageList([]), Ve.a.saveSettings(null, {
                            UseThreads: Object(ye.boolToAjax)(e)
                        })
                    }), e.layout.subscribe(function(e) {
                        Ue.a.messageList([]), Ve.a.saveSettings(o, {
                            Layout: e
                        })
                    })
                }, ve.Magics.Time50ms)
            }, e.prototype.onShow = function() {
                this.enableDesktopNotification.valueHasMutated()
            }, e.prototype.selectLanguage = function() {
                Object(ot.showScreenPopup)(n(101), [this.language, this.languages(), tt.a.userLanguage()])
            }, e
        }(),
        Ct = function() {
            function e() {
                var t = this;
                ae()(this, e), this.contactsAutosave = Ne.a.contactsAutosave, this.allowContactsSync = _e.a.allowContactsSync, this.enableContactsSync = _e.a.enableContactsSync, this.contactsSyncUrl = _e.a.contactsSyncUrl, this.contactsSyncUser = _e.a.contactsSyncUser, this.contactsSyncPass = _e.a.contactsSyncPass, this.saveTrigger = De.a.computed(function() {
                    return [t.enableContactsSync() ? "1" : "0", t.contactsSyncUrl(), t.contactsSyncUser(), t.contactsSyncPass()].join("|")
                }).extend({
                    throttle: ve.Magics.Time500ms
                })
            }
            return e.prototype.onBuild = function() {
                var e = this;
                this.contactsAutosave.subscribe(function(e) {
                    Ve.a.saveSettings(null, {
                        ContactsAutosave: Object(ye.boolToAjax)(e)
                    })
                }), this.saveTrigger.subscribe(function() {
                    Ve.a.saveContactsSyncData(null, e.enableContactsSync(), e.contactsSyncUrl(), e.contactsSyncUser(), e.contactsSyncPass())
                })
            }, e
        }(),
        At = function() {
            function e() {
                ae()(this, e), this.allowAdditionalAccount = Object(Ge.capa)(ve.Capa.AdditionalAccounts), this.allowIdentities = Object(Ge.capa)(ve.Capa.Identities), this.accounts = Le.a.accounts, this.identities = Pe.a.identities, this.accountForDeletion = De.a.observable(null).deleteAccessHelper(), this.identityForDeletion = De.a.observable(null).deleteAccessHelper()
            }
            return e.prototype.scrollableOptions = function(e) {
                return {
                    handle: ".drag-handle",
                    containment: e || "parent",
                    axis: "y"
                }
            }, e.prototype.addNewAccount = function() {
                Object(ot.showScreenPopup)(n(136))
            }, e.prototype.editAccount = function(e) {
                e && e.canBeEdit() && Object(ot.showScreenPopup)(n(136), [e])
            }, e.prototype.addNewIdentity = function() {
                Object(ot.showScreenPopup)(n(135))
            }, e.prototype.editIdentity = function(e) {
                Object(ot.showScreenPopup)(n(135), [e])
            }, e.prototype.deleteAccount = function(e) {
                e && e.deleteAccess() && (this.accountForDeletion(null), e && (this.accounts.remove(function(t) {
                    return e === t
                }), Ve.a.accountDelete(function(e, t) {
                    ve.StorageResultType.Success === e && t && t.Result && t.Reload ? (Object(ot.routeOff)(), Object(ot.setHash)(Object(Ae.w)(), !0), Object(ot.routeOff)(), he.a.defer(function() {
                        return de.a.location.reload()
                    })) : Object(nt.a)().accountsAndIdentities()
                }, e.email)))
            }, e.prototype.deleteIdentity = function(e) {
                e && e.deleteAccess() && (this.identityForDeletion(null), e && (Pe.a.identities.remove(function(t) {
                    return e === t
                }), Ve.a.identityDelete(function() {
                    Object(nt.a)().accountsAndIdentities()
                }, e.id)))
            }, e.prototype.accountsAndIdentitiesAfterMove = function() {
                Ve.a.accountsAndIdentitiesSortOrder(null, Le.a.accountsEmails.peek(), Pe.a.identitiesIDS.peek())
            }, e.prototype.onBuild = function(e) {
                var t = this;
                e.on("click", ".accounts-list .account-item .e-action", function() {
                    var e = De.a.dataFor(this);
                    e && t.editAccount(e)
                }).on("click", ".identities-list .identity-item .e-action", function() {
                    var e = De.a.dataFor(this);
                    e && t.editIdentity(e)
                })
            }, e
        }(),
        Et = n(98),
        Ft = function(e) {
            function t() {
                ae()(this, t);
                var n = se()(this, e.call(this, "FilterConditionModel"));
                return n.field = De.a.observable(ve.FilterConditionField.From), n.type = De.a.observable(ve.FilterConditionType.Contains), n.value = De.a.observable(""), n.value.error = De.a.observable(!1), n.valueSecond = De.a.observable(""), n.valueSecond.error = De.a.observable(!1), n.template = De.a.computed(function() {
                    var e = "";
                    switch (n.field()) {
                        case ve.FilterConditionField.Size:
                            e = "SettingsFiltersConditionSize";
                            break;
                        case ve.FilterConditionField.Header:
                            e = "SettingsFiltersConditionMore";
                            break;
                        default:
                            e = "SettingsFiltersConditionDefault"
                    }
                    return e
                }, n), n.field.subscribe(function() {
                    n.value(""), n.valueSecond("")
                }), n.regDisposables([n.template]), n
            }
            return le()(t, e), t.prototype.verify = function() {
                return "" === this.value() ? (this.value.error(!0), !1) : ve.FilterConditionField.Header !== this.field() || "" !== this.valueSecond() || (this.valueSecond.error(!0), !1)
            }, t.prototype.parse = function(e) {
                return !!(e && e.Field && e.Type) && (this.field(Object(ye.pString)(e.Field)), this.type(Object(ye.pString)(e.Type)), this.value(Object(ye.pString)(e.Value)), this.valueSecond(Object(ye.pString)(e.ValueSecond)), !0)
            }, t.prototype.toJson = function() {
                return {
                    Field: this.field(),
                    Type: this.type(),
                    Value: this.value(),
                    ValueSecond: this.valueSecond()
                }
            }, t.prototype.cloneSelf = function() {
                var e = new t;
                return e.field(this.field()), e.type(this.type()), e.value(this.value()), e.valueSecond(this.valueSecond()), e
            }, t
        }(We.a),
        jt = function(e) {
            function t() {
                ae()(this, t);
                var n = se()(this, e.call(this, "FilterModel"));
                return n.enabled = De.a.observable(!0), n.id = "", n.name = De.a.observable(""), n.name.error = De.a.observable(!1), n.name.focused = De.a.observable(!1), n.conditions = De.a.observableArray([]), n.conditionsType = De.a.observable(ve.FilterRulesType.Any), n.actionValue = De.a.observable(""), n.actionValue.error = De.a.observable(!1), n.actionValueSecond = De.a.observable(""), n.actionValueThird = De.a.observable(""), n.actionValueFourth = De.a.observable(""), n.actionValueFourth.error = De.a.observable(!1), n.actionMarkAsRead = De.a.observable(!1), n.actionKeep = De.a.observable(!0), n.actionNoStop = De.a.observable(!1), n.actionType = De.a.observable(ve.FiltersAction.MoveTo), n.actionType.subscribe(function() {
                    n.actionValue(""), n.actionValue.error(!1), n.actionValueSecond(""), n.actionValueThird(""), n.actionValueFourth(""), n.actionValueFourth.error(!1)
                }), n.nameSub = De.a.computed(function() {
                    var e, t, o = "",
                        i = n.actionValue();
                    switch (n.actionType()) {
                        case ve.FiltersAction.MoveTo:
                            o = Object(Fe.i18n)("SETTINGS_FILTERS/SUBNAME_MOVE_TO", {
                                FOLDER: (e = i, (t = Object(Ce.e)(e)) ? t.fullName.replace("." === t.delimiter ? /\./ : /[\\\/]+/, " / ") : e)
                            });
                            break;
                        case ve.FiltersAction.Forward:
                            o = Object(Fe.i18n)("SETTINGS_FILTERS/SUBNAME_FORWARD_TO", {
                                EMAIL: i
                            });
                            break;
                        case ve.FiltersAction.Vacation:
                            o = Object(Fe.i18n)("SETTINGS_FILTERS/SUBNAME_VACATION_MESSAGE");
                            break;
                        case ve.FiltersAction.Reject:
                            o = Object(Fe.i18n)("SETTINGS_FILTERS/SUBNAME_REJECT");
                            break;
                        case ve.FiltersAction.Discard:
                            o = Object(Fe.i18n)("SETTINGS_FILTERS/SUBNAME_DISCARD")
                    }
                    return o ? "(" + o + ")" : ""
                }), n.actionTemplate = De.a.computed(function() {
                    var e = "";
                    switch (n.actionType()) {
                        case ve.FiltersAction.Forward:
                            e = "SettingsFiltersActionForward";
                            break;
                        case ve.FiltersAction.Vacation:
                            e = "SettingsFiltersActionVacation";
                            break;
                        case ve.FiltersAction.Reject:
                            e = "SettingsFiltersActionReject";
                            break;
                        case ve.FiltersAction.None:
                            e = "SettingsFiltersActionNone";
                            break;
                        case ve.FiltersAction.Discard:
                            e = "SettingsFiltersActionDiscard";
                            break;
                        case ve.FiltersAction.MoveTo:
                        default:
                            e = "SettingsFiltersActionMoveToFolder"
                    }
                    return e
                }), n.regDisposables(n.conditions.subscribe(ye.windowResizeCallback)), n.regDisposables(n.name.subscribe(function(e) {
                    n.name.error("" === e)
                })), n.regDisposables(n.actionValue.subscribe(function(e) {
                    n.actionValue.error("" === e)
                })), n.regDisposables([n.actionNoStop, n.actionTemplate]), n.deleteAccess = De.a.observable(!1), n.canBeDeleted = De.a.observable(!0), n
            }
            return le()(t, e), t.prototype.generateID = function() {
                this.id = Object(ye.fakeMd5)()
            }, t.prototype.verify = function() {
                return "" === this.name() ? (this.name.error(!0), !1) : !(0 < this.conditions().length && he.a.find(this.conditions(), function(e) {
                    return e && !e.verify()
                }) || ("" === this.actionValue() && -1 < Object(ye.inArray)(this.actionType(), [ve.FiltersAction.MoveTo, ve.FiltersAction.Forward, ve.FiltersAction.Reject, ve.FiltersAction.Vacation]) ? (this.actionValue.error(!0), 1) : ve.FiltersAction.Forward === this.actionType() && -1 === this.actionValue().indexOf("@") ? (this.actionValue.error(!0), 1) : ve.FiltersAction.Vacation === this.actionType() && "" !== this.actionValueFourth() && -1 === this.actionValueFourth().indexOf("@") ? (this.actionValueFourth.error(!0), 1) : (this.name.error(!1), this.actionValue.error(!1), 0)))
            }, t.prototype.toJson = function() {
                return {
                    ID: this.id,
                    Enabled: this.enabled() ? "1" : "0",
                    Name: this.name(),
                    ConditionsType: this.conditionsType(),
                    Conditions: he.a.map(this.conditions(), function(e) {
                        return e.toJson()
                    }),
                    ActionValue: this.actionValue(),
                    ActionValueSecond: this.actionValueSecond(),
                    ActionValueThird: this.actionValueThird(),
                    ActionValueFourth: this.actionValueFourth(),
                    ActionType: this.actionType(),
                    Stop: this.actionNoStop() ? "0" : "1",
                    Keep: this.actionKeep() ? "1" : "0",
                    MarkAsRead: this.actionMarkAsRead() ? "1" : "0"
                }
            }, t.prototype.addCondition = function() {
                this.conditions.push(new Ft)
            }, t.prototype.removeCondition = function(e) {
                this.conditions.remove(e), Object(ye.delegateRunOnDestroy)(e)
            }, t.prototype.setRecipients = function() {
                this.actionValueFourth(Le.a.accountsEmails().join(", "))
            }, t.prototype.parse = function(e) {
                var t = !1;
                return e && "Object/Filter" === e["@Object"] && (this.id = Object(ye.pString)(e.ID), this.name(Object(ye.pString)(e.Name)), this.enabled(!!e.Enabled), this.conditionsType(Object(ye.pString)(e.ConditionsType)), this.conditions([]), Object(ye.isNonEmptyArray)(e.Conditions) && this.conditions(he.a.compact(he.a.map(e.Conditions, function(e) {
                    var t = new Ft;
                    return t && t.parse(e) ? t : null
                }))), this.actionType(Object(ye.pString)(e.ActionType)), this.actionValue(Object(ye.pString)(e.ActionValue)), this.actionValueSecond(Object(ye.pString)(e.ActionValueSecond)), this.actionValueThird(Object(ye.pString)(e.ActionValueThird)), this.actionValueFourth(Object(ye.pString)(e.ActionValueFourth)), this.actionNoStop(!e.Stop), this.actionKeep(!!e.Keep), this.actionMarkAsRead(!!e.MarkAsRead), t = !0), t
            }, t.prototype.cloneSelf = function() {
                var e = new t;
                return e.id = this.id, e.enabled(this.enabled()), e.name(this.name()), e.name.error(this.name.error()), e.conditionsType(this.conditionsType()), e.actionMarkAsRead(this.actionMarkAsRead()), e.actionType(this.actionType()), e.actionValue(this.actionValue()), e.actionValue.error(this.actionValue.error()), e.actionValueSecond(this.actionValueSecond()), e.actionValueThird(this.actionValueThird()), e.actionValueFourth(this.actionValueFourth()), e.actionKeep(this.actionKeep()), e.actionNoStop(this.actionNoStop()), e.conditions(he.a.map(this.conditions(), function(e) {
                    return e.cloneSelf()
                })), e
            }, t
        }(We.a),
        Nt = (x = Object(ot.command)(function(e) {
            return e.haveChanges()
        }), U = function() {
            function e() {
                var t = this;
                ae()(this, e), this.modules = Et.a.modules, this.filters = Et.a.filters, this.inited = De.a.observable(!1), this.serverError = De.a.observable(!1), this.serverErrorDesc = De.a.observable(""), this.haveChanges = De.a.observable(!1), this.saveErrorText = De.a.observable(""), this.filters.subscribe(ye.windowResizeCallback), this.serverError.subscribe(function(e) {
                    e || t.serverErrorDesc("")
                }, this), this.filterRaw = Et.a.raw, this.filterRaw.capa = Et.a.capa, this.filterRaw.active = De.a.observable(!1), this.filterRaw.allow = De.a.observable(!1), this.filterRaw.error = De.a.observable(!1), this.filterForDeletion = De.a.observable(null).deleteAccessHelper(), this.filters.subscribe(function() {
                    t.haveChanges(!0)
                }), this.filterRaw.subscribe(function() {
                    t.haveChanges(!0), t.filterRaw.error(!1)
                }), this.haveChanges.subscribe(function() {
                    t.saveErrorText("")
                }), this.filterRaw.active.subscribe(function() {
                    t.haveChanges(!0), t.filterRaw.error(!1)
                })
            }
            return e.prototype.saveChangesCommand = function() {
                var e = this;
                if (!this.filters.saving()) {
                    if (this.filterRaw.active() && "" === Object(ye.trim)(this.filterRaw())) return this.filterRaw.error(!0), !1;
                    this.filters.saving(!0), this.saveErrorText(""), Ve.a.filtersSave(function(t, n) {
                        e.filters.saving(!1), ve.StorageResultType.Success === t && n && n.Result ? (e.haveChanges(!1), e.updateList()) : n && n.ErrorCode ? e.saveErrorText(n.ErrorMessageAdditional || Object(Fe.getNotification)(n.ErrorCode)) : e.saveErrorText(Object(Fe.getNotification)(ve.Notification.CantSaveFilters))
                    }, this.filters(), this.filterRaw(), this.filterRaw.active())
                }
                return !0
            }, e.prototype.scrollableOptions = function(e) {
                return {
                    handle: ".drag-handle",
                    containment: e || "parent",
                    axis: "y"
                }
            }, e.prototype.updateList = function() {
                var e = this;
                this.filters.loading() || (this.filters.loading(!0), Ve.a.filtersGet(function(t, n) {
                    e.filters.loading(!1), e.serverError(!1), ve.StorageResultType.Success === t && n && n.Result && Object(ye.isArray)(n.Result.Filters) ? (e.inited(!0), e.serverError(!1), e.filters(he.a.compact(he.a.map(n.Result.Filters, function(e) {
                        var t = new jt;
                        return t && t.parse(e) ? t : null
                    }))), e.modules(n.Result.Modules ? n.Result.Modules : {}), e.filterRaw(n.Result.Raw || ""), e.filterRaw.capa(Object(ye.isArray)(n.Result.Capa) ? n.Result.Capa.join(" ") : ""), e.filterRaw.active(!!n.Result.RawIsActive), e.filterRaw.allow(!!n.Result.RawIsAllow)) : (e.filters([]), e.modules({}), e.filterRaw(""), e.filterRaw.capa({}), e.serverError(!0), e.serverErrorDesc(n && n.ErrorCode ? Object(Fe.getNotification)(n.ErrorCode) : Object(Fe.getNotification)(ve.Notification.CantGetFilters))), e.haveChanges(!1)
                }))
            }, e.prototype.deleteFilter = function(e) {
                this.filters.remove(e), Object(ye.delegateRunOnDestroy)(e)
            }, e.prototype.addFilter = function() {
                var e = this,
                    t = new jt;
                t.generateID(), Object(ot.showScreenPopup)(n(179), [t, function() {
                    e.filters.push(t), e.filterRaw.active(!1)
                }, !1])
            }, e.prototype.editFilter = function(e) {
                var t = this,
                    o = e.cloneSelf();
                Object(ot.showScreenPopup)(n(179), [o, function() {
                    var n = t.filters(),
                        i = n.indexOf(e); - 1 < i && n[i] && (Object(ye.delegateRunOnDestroy)(n[i]), n[i] = o, t.filters(n), t.haveChanges(!0))
                }, !0])
            }, e.prototype.onBuild = function(e) {
                var t = this;
                e.on("click", ".filter-item .e-action", function() {
                    var e = De.a.dataFor(this);
                    e && t.editFilter(e)
                })
            }, e.prototype.onShow = function() {
                this.updateList()
            }, e
        }(), H = U.prototype, B = "saveChangesCommand", G = [x], K = et()(U.prototype, "saveChangesCommand"), V = U.prototype, z = {}, Object.keys(K).forEach(function(e) {
            z[e] = K[e]
        }), z.enumerable = !!z.enumerable, z.configurable = !!z.configurable, ("value" in z || z.initializer) && (z.writable = !0), z = G.slice().reverse().reduce(function(e, t) {
            return t(H, B, e) || e
        }, z), V && void 0 !== z.initializer && (z.value = z.initializer ? z.initializer.call(V) : void 0, z.initializer = void 0), void 0 === z.initializer && (Object.defineProperty(H, B, z), z = null), U),
        Rt = function() {
            function e() {
                ae()(this, e), this.capaAutoLogout = Object(Ge.capa)(ve.Capa.AutoLogout), this.capaTwoFactor = Object(Ge.capa)(ve.Capa.TwoFactor), this.autoLogout = Re.a.autoLogout, this.autoLogout.trigger = De.a.observable(ve.SaveSettingsStep.Idle), this.autoLogoutOptions = De.a.computed(function() {
                    return Object(Fe.trigger)(), [{
                        id: 0,
                        name: Object(Fe.i18n)("SETTINGS_SECURITY/AUTOLOGIN_NEVER_OPTION_NAME")
                    }, {
                        id: 5,
                        name: Object(Fe.i18n)("SETTINGS_SECURITY/AUTOLOGIN_MINUTES_OPTION_NAME", {
                            MINUTES: 5
                        })
                    }, {
                        id: 10,
                        name: Object(Fe.i18n)("SETTINGS_SECURITY/AUTOLOGIN_MINUTES_OPTION_NAME", {
                            MINUTES: 10
                        })
                    }, {
                        id: 30,
                        name: Object(Fe.i18n)("SETTINGS_SECURITY/AUTOLOGIN_MINUTES_OPTION_NAME", {
                            MINUTES: 30
                        })
                    }, {
                        id: 60,
                        name: Object(Fe.i18n)("SETTINGS_SECURITY/AUTOLOGIN_MINUTES_OPTION_NAME", {
                            MINUTES: 60
                        })
                    }, {
                        id: 120,
                        name: Object(Fe.i18n)("SETTINGS_SECURITY/AUTOLOGIN_HOURS_OPTION_NAME", {
                            HOURS: 2
                        })
                    }, {
                        id: 300,
                        name: Object(Fe.i18n)("SETTINGS_SECURITY/AUTOLOGIN_HOURS_OPTION_NAME", {
                            HOURS: 5
                        })
                    }, {
                        id: 600,
                        name: Object(Fe.i18n)("SETTINGS_SECURITY/AUTOLOGIN_HOURS_OPTION_NAME", {
                            HOURS: 10
                        })
                    }]
                })
            }
            return e.prototype.configureTwoFactor = function() {
                Object(ot.showScreenPopup)(n(178))
            }, e.prototype.onBuild = function() {
                var e = this;
                this.capaAutoLogout && he.a.delay(function() {
                    var t = Object(ye.settingsSaveHelperSimpleFunction)(e.autoLogout.trigger, e);
                    e.autoLogout.subscribe(Ve.a.saveSettingsHelper("AutoLogout", ye.pInt, t))
                })
            }, e
        }(),
        It = (q = Object(ot.command)(function(e) {
            return !e.googleLoggined() && !e.googleActions()
        }), W = Object(ot.command)(), Y = Object(ot.command)(function(e) {
            return !e.facebookLoggined() && !e.facebookActions()
        }), $ = Object(ot.command)(), J = Object(ot.command)(function(e) {
            return !e.twitterLoggined() && !e.twitterActions()
        }), X = Object(ot.command)(), r((Z = function() {
            function e() {
                ae()(this, e), this.googleEnable = je.a.google.enabled, this.googleEnableAuth = je.a.google.capa.auth, this.googleEnableAuthFast = je.a.google.capa.authFast, this.googleEnableDrive = je.a.google.capa.drive, this.googleEnablePreview = je.a.google.capa.preview, this.googleActions = je.a.google.loading, this.googleLoggined = je.a.google.loggined, this.googleUserName = je.a.google.userName, this.facebookEnable = je.a.facebook.enabled, this.facebookActions = je.a.facebook.loading, this.facebookLoggined = je.a.facebook.loggined, this.facebookUserName = je.a.facebook.userName, this.twitterEnable = je.a.twitter.enabled, this.twitterActions = je.a.twitter.loading, this.twitterLoggined = je.a.twitter.loggined, this.twitterUserName = je.a.twitter.userName
            }
            return e.prototype.connectGoogleCommand = function() {
                this.googleLoggined() || Object(nt.a)().googleConnect()
            }, e.prototype.disconnectGoogleCommand = function() {
                Object(nt.a)().googleDisconnect()
            }, e.prototype.connectFacebookCommand = function() {
                this.facebookLoggined() || Object(nt.a)().facebookConnect()
            }, e.prototype.disconnectFacebookCommand = function() {
                Object(nt.a)().facebookDisconnect()
            }, e.prototype.connectTwitterCommand = function() {
                this.twitterLoggined() || Object(nt.a)().twitterConnect()
            }, e.prototype.disconnectTwitterCommand = function() {
                Object(nt.a)().twitterDisconnect()
            }, e
        }()).prototype, "connectGoogleCommand", [q], et()(Z.prototype, "connectGoogleCommand"), Z.prototype), r(Z.prototype, "disconnectGoogleCommand", [W], et()(Z.prototype, "disconnectGoogleCommand"), Z.prototype), r(Z.prototype, "connectFacebookCommand", [Y], et()(Z.prototype, "connectFacebookCommand"), Z.prototype), r(Z.prototype, "disconnectFacebookCommand", [$], et()(Z.prototype, "disconnectFacebookCommand"), Z.prototype), r(Z.prototype, "connectTwitterCommand", [J], et()(Z.prototype, "connectTwitterCommand"), Z.prototype), r(Z.prototype, "disconnectTwitterCommand", [X], et()(Z.prototype, "disconnectTwitterCommand"), Z.prototype), Z),
        Lt = (Q = Object(ot.command)(function(e) {
            return !e.changeProcess() && "" !== e.currentPassword() && "" !== e.newPassword() && "" !== e.newPassword2()
        }), function(e, t, n, o, i) {
            var a = {};
            Object.keys(o).forEach(function(e) {
                a[e] = o[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function(n, o) {
                return o(e, t, n) || n
            }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null)
        }((ee = function() {
            function e() {
                var t = this;
                ae()(this, e), this.changeProcess = De.a.observable(!1), this.errorDescription = De.a.observable(""), this.passwordMismatch = De.a.observable(!1), this.passwordUpdateError = De.a.observable(!1), this.passwordUpdateSuccess = De.a.observable(!1), this.currentPassword = De.a.observable(""), this.currentPassword.error = De.a.observable(!1), this.newPassword = De.a.observable(""), this.newPassword2 = De.a.observable(""), this.currentPassword.subscribe(function() {
                    t.passwordUpdateError(!1), t.passwordUpdateSuccess(!1), t.currentPassword.error(!1)
                }), this.newPassword.subscribe(function() {
                    t.passwordUpdateError(!1), t.passwordUpdateSuccess(!1), t.passwordMismatch(!1)
                }), this.newPassword2.subscribe(function() {
                    t.passwordUpdateError(!1), t.passwordUpdateSuccess(!1), t.passwordMismatch(!1)
                }), this.onChangePasswordResponse = he.a.bind(this.onChangePasswordResponse, this)
            }
            return e.prototype.saveNewPasswordCommand = function() {
                this.newPassword() !== this.newPassword2() ? (this.passwordMismatch(!0), this.errorDescription(Object(Fe.i18n)("SETTINGS_CHANGE_PASSWORD/ERROR_PASSWORD_MISMATCH"))) : (this.changeProcess(!0), this.passwordUpdateError(!1), this.passwordUpdateSuccess(!1), this.currentPassword.error(!1), this.passwordMismatch(!1), this.errorDescription(""), Ve.a.changePassword(this.onChangePasswordResponse, this.currentPassword(), this.newPassword()))
            }, e.prototype.onHide = function() {
                this.changeProcess(!1), this.currentPassword(""), this.newPassword(""), this.newPassword2(""), this.errorDescription(""), this.passwordMismatch(!1), this.currentPassword.error(!1)
            }, e.prototype.onChangePasswordResponse = function(e, t) {
                this.changeProcess(!1), this.passwordMismatch(!1), this.errorDescription(""), this.currentPassword.error(!1), ve.StorageResultType.Success === e && t && t.Result ? (this.currentPassword(""), this.newPassword(""), this.newPassword2(""), this.passwordUpdateSuccess(!0), this.currentPassword.error(!1), Object(nt.a)().setClientSideToken(t.Result)) : (t && ve.Notification.CurrentPasswordIncorrect === t.ErrorCode && this.currentPassword.error(!0), this.passwordUpdateError(!0), this.errorDescription(Object(Fe.getNotificationFromResponse)(t, ve.Notification.CouldNotSaveNewPassword)))
            }, e
        }()).prototype, "saveNewPasswordCommand", [Q], et()(ee.prototype, "saveNewPasswordCommand"), ee.prototype), ee),
        _t = function() {
            function e() {
                var t = this;
                ae()(this, e), this.templates = Me.templates, this.processText = De.a.computed(function() {
                    return Me.templates.loading() ? Object(Fe.i18n)("SETTINGS_TEMPLETS/LOADING_PROCESS") : ""
                }), this.visibility = De.a.computed(function() {
                    return "" === t.processText() ? "hidden" : "visible"
                }), this.templateForDeletion = De.a.observable(null).deleteAccessHelper()
            }
            return e.prototype.scrollableOptions = function(e) {
                return {
                    handle: ".drag-handle",
                    containment: e || "parent",
                    axis: "y"
                }
            }, e.prototype.addNewTemplate = function() {
                Object(ot.showScreenPopup)(n(177))
            }, e.prototype.editTemplate = function(e) {
                e && Object(ot.showScreenPopup)(n(177), [e])
            }, e.prototype.deleteTemplate = function(e) {
                var t = this;
                e && e.deleteAccess() && (this.templateForDeletion(null), e && (this.templates.remove(function(t) {
                    return e === t
                }), Ve.a.templateDelete(function() {
                    t.reloadTemplates()
                }, e.id)))
            }, e.prototype.reloadTemplates = function() {
                Object(nt.a)().templates()
            }, e.prototype.onBuild = function(e) {
                var t = this;
                e.on("click", ".templates-list .template-item .e-action", function() {
                    var e = De.a.dataFor(this);
                    e && t.editTemplate(e)
                }), this.reloadTemplates()
            }, e
        }(),
        Pt = function() {
            function e() {
                ae()(this, e), this.displaySpecSetting = ke.a.displaySpecSetting, this.folderList = ke.a.folderList, this.folderListHelp = De.a.observable("").extend({
                    throttle: ve.Magics.Time100ms
                }), this.loading = De.a.computed(function() {
                    var e = ke.a.foldersLoading(),
                        t = ke.a.foldersCreating(),
                        n = ke.a.foldersDeleting(),
                        o = ke.a.foldersRenaming();
                    return e || t || n || o
                }), this.folderForDeletion = De.a.observable(null).deleteAccessHelper(), this.folderForEdit = De.a.observable(null).extend({
                    toggleSubscribeProperty: [this, "edited"]
                }), this.useImapSubscribe = !!Object(Ge.appSettingsGet)("useImapSubscribe")
            }
            return e.prototype.folderEditOnEnter = function(e) {
                var t = e ? Object(ye.trim)(e.nameForEdit()) : "";
                "" !== t && e.name() !== t && (Be.b(ve.ClientSideKeyName.FoldersLashHash, ""), Object(nt.a)().foldersPromisesActionHelper(ze.a.folderRename(e.fullNameRaw, t, ke.a.foldersRenaming), ve.Notification.CantRenameFolder), Object(Ce.o)(e.fullNameRaw), e.name(t)), e.edited(!1)
            }, e.prototype.folderEditOnEsc = function(e) {
                e && e.edited(!1)
            }, e.prototype.onShow = function() {
                ke.a.folderList.error("")
            }, e.prototype.onBuild = function(e) {
                var t = this;
                e.on("mouseover", ".delete-folder-parent", function() {
                    t.folderListHelp(Object(Fe.i18n)("SETTINGS_FOLDERS/HELP_DELETE_FOLDER"))
                }).on("mouseover", ".subscribe-folder-parent", function() {
                    t.folderListHelp(Object(Fe.i18n)("SETTINGS_FOLDERS/HELP_SHOW_HIDE_FOLDER"))
                }).on("mouseover", ".check-folder-parent", function() {
                    t.folderListHelp(Object(Fe.i18n)("SETTINGS_FOLDERS/HELP_CHECK_FOR_NEW_MESSAGES"))
                }).on("mouseout", ".subscribe-folder-parent, .check-folder-parent, .delete-folder-parent", function() {
                    t.folderListHelp("")
                })
            }, e.prototype.createFolder = function() {
                Object(ot.showScreenPopup)(n(180))
            }, e.prototype.systemFolder = function() {
                Object(ot.showScreenPopup)(n(118))
            }, e.prototype.deleteFolder = function(e) {
                e && e.canBeDeleted() && e.deleteAccess() && 0 === e.privateMessageCountAll() ? (this.folderForDeletion(null), e && (Be.b(ve.ClientSideKeyName.FoldersLashHash, ""), ke.a.folderList.remove(function t(n) {
                    return e === n || (n.subFolders.remove(t), !1)
                }), Object(nt.a)().foldersPromisesActionHelper(ze.a.folderDelete(e.fullNameRaw, ke.a.foldersDeleting), ve.Notification.CantDeleteFolder), Object(Ce.o)(e.fullNameRaw))) : 0 < e.privateMessageCountAll() && ke.a.folderList.error(Object(Fe.getNotification)(ve.Notification.CantDeleteNonEmptyFolder))
            }, e.prototype.subscribeFolder = function(e) {
                Be.b(ve.ClientSideKeyName.FoldersLashHash, ""), Ve.a.folderSetSubscribe(ye.noop, e.fullNameRaw, !0), e.subScribed(!0)
            }, e.prototype.unSubscribeFolder = function(e) {
                Be.b(ve.ClientSideKeyName.FoldersLashHash, ""), Ve.a.folderSetSubscribe(ye.noop, e.fullNameRaw, !1), e.subScribed(!1)
            }, e.prototype.checkableTrueFolder = function(e) {
                Ve.a.folderSetCheckable(ye.noop, e.fullNameRaw, !0), e.checkable(!0)
            }, e.prototype.checkableFalseFolder = function(e) {
                Ve.a.folderSetCheckable(ye.noop, e.fullNameRaw, !1), e.checkable(!1)
            }, e
        }(),
        Dt = n(39),
        Mt = function() {
            function e() {
                var t = this;
                ae()(this, e), this.theme = Dt.a.theme, this.themes = Dt.a.themes, this.themesObjects = De.a.observableArray([]), this.background = {}, this.background.name = Dt.a.themeBackgroundName, this.background.hash = Dt.a.themeBackgroundHash, this.background.uploaderButton = De.a.observable(null), this.background.loading = De.a.observable(!1), this.background.error = De.a.observable(""), this.capaUserBackground = De.a.observable(Object(Ge.capa)(ve.Capa.UserBackground)), this.themeTrigger = De.a.observable(ve.SaveSettingsStep.Idle).extend({
                    throttle: ve.Magics.Time100ms
                }), this.iTimer = 0, this.oThemeAjaxRequest = null, this.theme.subscribe(function(e) {
                    he.a.each(t.themesObjects(), function(t) {
                        t.selected(e === t.name)
                    }), Object(ye.changeTheme)(e, t.themeTrigger), Ve.a.saveSettings(null, {
                        Theme: e
                    })
                }), this.background.hash.subscribe(function(e) {
                    var t = me()("#rl-bg");
                    e ? t.attr("style", "background-image: none !important;").backstretch(Object(Ae.J)(e), {
                        fade: ve.Magics.Time1s,
                        centeredX: !0,
                        centeredY: !0
                    }).removeAttr("style") : t.data("backstretch") && t.backstretch("destroy").attr("style", "")
                })
            }
            return e.prototype.onBuild = function() {
                var e = this.theme();
                this.themesObjects(he.a.map(this.themes(), function(t) {
                    return {
                        name: t,
                        nameDisplay: Object(ye.convertThemeName)(t),
                        selected: De.a.observable(t === e),
                        themePreviewSrc: Object(Ae.F)(t)
                    }
                })), this.initUploader()
            }, e.prototype.onShow = function() {
                this.background.error("")
            }, e.prototype.clearBackground = function() {
                var e = this;
                this.capaUserBackground() && Ve.a.clearUserBackground(function() {
                    e.background.name(""), e.background.hash("")
                })
            }, e.prototype.initUploader = function() {
                var e = this;
                this.background.uploaderButton() && this.capaUserBackground() && new ht.a({
                    action: Object(Ae.H)(),
                    name: "uploader",
                    queueSize: 1,
                    multipleSizeLimit: 1,
                    disableDragAndDrop: !0,
                    disableMultiple: !0,
                    clickElement: this.background.uploaderButton()
                }).on("onStart", function() {
                    return e.background.loading(!0), e.background.error(""), !0
                }).on("onComplete", function(t, n, o) {
                    if (e.background.loading(!1), n && t && o && o.Result && o.Result.Name && o.Result.Hash) e.background.name(o.Result.Name), e.background.hash(o.Result.Hash);
                    else {
                        e.background.name(""), e.background.hash("");
                        var i = "";
                        if (o.ErrorCode) switch (o.ErrorCode) {
                            case ve.UploadErrorCode.FileIsTooBig:
                                i = Object(Fe.i18n)("SETTINGS_THEMES/ERROR_FILE_IS_TOO_BIG");
                                break;
                            case ve.UploadErrorCode.FileType:
                                i = Object(Fe.i18n)("SETTINGS_THEMES/ERROR_FILE_TYPE_ERROR")
                        }!i && o.ErrorMessage && (i = o.ErrorMessage), e.background.error(i || Object(Fe.i18n)("SETTINGS_THEMES/ERROR_UNKNOWN"))
                    }
                    return !0
                })
            }, e
        }(),
        kt = function() {
            function e() {
                ae()(this, e), this.openpgpkeys = xe.a.openpgpkeys, this.openpgpkeysPublic = xe.a.openpgpkeysPublic, this.openpgpkeysPrivate = xe.a.openpgpkeysPrivate, this.openPgpKeyForDeletion = De.a.observable(null).deleteAccessHelper(), this.allowDraftAutosave = Re.a.allowDraftAutosave, this.isHttps = Se.bIsHttps
            }
            return e.prototype.addOpenPgpKey = function() {
                Object(ot.showScreenPopup)(n(195))
            }, e.prototype.generateOpenPgpKey = function() {
                Object(ot.showScreenPopup)(n(194))
            }, e.prototype.viewOpenPgpKey = function(e) {
                e && Object(ot.showScreenPopup)(n(193), [e])
            }, e.prototype.deleteOpenPgpKey = function(e) {
                if (e && e.deleteAccess() && (this.openPgpKeyForDeletion(null), e && xe.a.openpgpKeyring)) {
                    var t = he.a.find(xe.a.openpgpkeys(), function(t) {
                        return e === t
                    });
                    t && (xe.a.openpgpkeys.remove(t), Object(ye.delegateRunOnDestroy)(t), xe.a.openpgpKeyring[t.isPrivate ? "privateKeys" : "publicKeys"].removeForId(t.guid), xe.a.openpgpKeyring.store()), Object(nt.a)().reloadOpenPgpKeys()
                }
            }, e.prototype.onBuild = function() {
                var e = this;
                he.a.delay(function() {
                    e.allowDraftAutosave.subscribe(Ve.a.saveSettingsHelper("AllowDraftAutosave", ye.boolToAjax))
                }, ve.Magics.Time50ms)
            }, e
        }(),
        xt = Object(ot.view)({
            name: "View/User/Settings/SystemDropDown",
            type: ot.ViewType.Right,
            templateID: "SystemDropDown"
        })(te = function(e) {
            function t() {
                return ae()(this, t), se()(this, e.apply(this, arguments))
            }
            return le()(t, e), t
        }(lt)) || te,
        Ut = Object(ot.view)({
            name: "View/User/Settings/Menu",
            type: ot.ViewType.Left,
            templateID: "SettingsMenu"
        })(ne = function(e) {
            function t(n) {
                ae()(this, t);
                var o = se()(this, e.call(this));
                return o.leftPanelDisabled = Se.leftPanelDisabled, o.mobile = Ge.appSettingsGet("mobile"), o.menu = n.menu, o
            }
            return le()(t, e), t.prototype.onBuild = function(e) {
                this.mobile && e.on("click", ".b-settings-menu .e-item.selectable", function() {
                    Object(Se.leftPanelDisabled)(!0)
                }), ct()("up, down", ve.KeyState.Settings, Object(ot.settingsMenuKeysHendler)(me()(".b-settings-menu .e-item", e)))
            }, t.prototype.link = function(e) {
                return Object(Ae.z)(e)
            }, t.prototype.backToMailBoxClick = function() {
                Object(ot.setHash)(Object(Ae.m)(Object(Ce.h)()))
            }, t
        }(it.a)) || ne,
        Ht = Object(ot.view)({
            name: "View/User/Settings/Pane",
            type: ot.ViewType.Right,
            templateID: "SettingsPane"
        })(oe = function(e) {
            function t() {
                ae()(this, t);
                var n = se()(this, e.call(this));
                return n.mobile = Ge.appSettingsGet("mobile"), n.leftPanelDisabled = Se.leftPanelDisabled, n
            }
            return le()(t, e), t.prototype.onShow = function() {
                Ue.a.message(null)
            }, t.prototype.hideLeft = function(e, t) {
                t.preventDefault(), t.stopPropagation(), Object(Se.leftPanelDisabled)(!0)
            }, t.prototype.showLeft = function(e, t) {
                t.preventDefault(), t.stopPropagation(), Object(Se.leftPanelDisabled)(!1)
            }, t.prototype.onBuild = function(e) {
                this.mobile && e.on("click", function() {
                    Object(Se.leftPanelDisabled)(!0)
                })
            }, t.prototype.backToMailBoxClick = function() {
                Object(ot.setHash)(Object(Ae.m)(Object(Ce.h)()))
            }, t
        }(it.a)) || oe,
        Bt = function(e) {
            function t() {
                ae()(this, t);
                var n = se()(this, e.call(this, [xt, Ut, Ht]));
                return Object(Fe.initOnStartOrLangChange)(function() {
                    n.sSettingsTitle = Object(Fe.i18n)("TITLES/SETTINGS")
                }, function() {
                    n.setSettingsTitle()
                }), n
            }
            return le()(t, e), t.prototype.setupSettings = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return Ge.capa(ve.Capa.Settings) ? (Object(ot.addSettingsViewModel)(Tt, "SettingsGeneral", "SETTINGS_LABELS/LABEL_GENERAL_NAME", "general", !0), Ne.a.contactsIsAllowed() && Object(ot.addSettingsViewModel)(Ct, "SettingsContacts", "SETTINGS_LABELS/LABEL_CONTACTS_NAME", "contacts"), (Ge.capa(ve.Capa.AdditionalAccounts) || Ge.capa(ve.Capa.Identities)) && Object(ot.addSettingsViewModel)(At, "SettingsAccounts", Ge.capa(ve.Capa.AdditionalAccounts) ? "SETTINGS_LABELS/LABEL_ACCOUNTS_NAME" : "SETTINGS_LABELS/LABEL_IDENTITIES_NAME", "accounts"), Ge.capa(ve.Capa.Sieve) && Object(ot.addSettingsViewModel)(Nt, "SettingsFilters", "SETTINGS_LABELS/LABEL_FILTERS_NAME", "filters"), (Ge.capa(ve.Capa.AutoLogout) || Ge.capa(ve.Capa.TwoFactor)) && Object(ot.addSettingsViewModel)(Rt, "SettingsSecurity", "SETTINGS_LABELS/LABEL_SECURITY_NAME", "security"), Le.a.isRootAccount() && (Ge.settingsGet("AllowGoogleSocial") && Ge.settingsGet("AllowGoogleSocialAuth") || Ge.settingsGet("AllowFacebookSocial") || Ge.settingsGet("AllowTwitterSocial")) && Object(ot.addSettingsViewModel)(It, "SettingsSocial", "SETTINGS_LABELS/LABEL_SOCIAL_NAME", "social"), Ge.settingsGet("ChangePasswordIsAllowed") && Object(ot.addSettingsViewModel)(Lt, "SettingsChangePassword", "SETTINGS_LABELS/LABEL_CHANGE_PASSWORD_NAME", "change-password"), Ge.capa(ve.Capa.Templates) && Object(ot.addSettingsViewModel)(_t, "SettingsTemplates", "SETTINGS_LABELS/LABEL_TEMPLATES_NAME", "templates"), Ge.capa(ve.Capa.Folders) && Object(ot.addSettingsViewModel)(Pt, "SettingsFolders", "SETTINGS_LABELS/LABEL_FOLDERS_NAME", "folders"), Ge.capa(ve.Capa.Themes) && Object(ot.addSettingsViewModel)(Mt, "SettingsThemes", "SETTINGS_LABELS/LABEL_THEMES_NAME", "themes"), Ge.capa(ve.Capa.OpenPGP) && Object(ot.addSettingsViewModel)(kt, "SettingsOpenPGP", "SETTINGS_LABELS/LABEL_OPEN_PGP_NAME", "openpgp"), Object(we.g)(!1), e && e(), !0) : (e && e(), !1)
            }, t.prototype.onShow = function() {
                this.setSettingsTitle(), Object(Se.keyScope)(ve.KeyState.Settings), Object(Se.leftPanelType)(""), Ge.appSettingsGet("mobile") && Object(Se.leftPanelDisabled)(!0)
            }, t.prototype.setSettingsTitle = function() {
                var e = Le.a.email();
                Object(nt.a)().setWindowTitle(("" === e ? "" : e + " - ") + this.sSettingsTitle)
            }, t
        }(wt.a),
        Gt = function(e) {
            function t() {
                ae()(this, t);
                var n = se()(this, e.call(this, Ve.a));
                return n.moveCache = {}, n.quotaDebounce = he.a.debounce(n.quota, ve.Magics.Time30s), n.moveOrDeleteResponseHelper = he.a.bind(n.moveOrDeleteResponseHelper, n), n.messagesMoveTrigger = he.a.debounce(n.messagesMoveTrigger, 500), de.a.setInterval(function() {
                    return Ee.a("interval.30s")
                }, ve.Magics.Time30s), de.a.setInterval(function() {
                    return Ee.a("interval.1m")
                }, ve.Magics.Time1m), de.a.setInterval(function() {
                    return Ee.a("interval.2m")
                }, ve.Magics.Time2m), de.a.setInterval(function() {
                    return Ee.a("interval.3m")
                }, ve.Magics.Time3m), de.a.setInterval(function() {
                    return Ee.a("interval.5m")
                }, ve.Magics.Time5m), de.a.setInterval(function() {
                    return Ee.a("interval.10m")
                }, ve.Magics.Time10m), de.a.setInterval(function() {
                    return Ee.a("interval.15m")
                }, ve.Magics.Time15m), de.a.setInterval(function() {
                    return Ee.a("interval.20m")
                }, ve.Magics.Time20m), de.a.setTimeout(function() {
                    return de.a.setInterval(function() {
                        return Ee.a("interval.2m-after5m")
                    }, ve.Magics.Time2m)
                }, ve.Magics.Time5m), de.a.setTimeout(function() {
                    return de.a.setInterval(function() {
                        return Ee.a("interval.5m-after5m")
                    }, ve.Magics.Time5m)
                }, ve.Magics.Time5m), de.a.setTimeout(function() {
                    return de.a.setInterval(function() {
                        return Ee.a("interval.10m-after5m")
                    }, ve.Magics.Time10m)
                }, ve.Magics.Time5m), me.a.wakeUp(function() {
                    Object(Ke.a)() && n.reload(), Ve.a.jsVersion(function(e, t) {
                        ve.StorageResultType.Success === e && t && !t.Result && n.reload()
                    }, Ge.appSettingsGet("version"))
                }, {}, ve.Magics.Time60m), Object(Ke.a)() && n.reload(), Ge.settingsGet("UserBackgroundHash") && he.a.delay(function() {
                    me()("#rl-bg").attr("style", "background-image: none !important;").backstretch(Object(Ae.J)(Ge.settingsGet("UserBackgroundHash")), {
                        fade: Se.bAnimationSupported ? ve.Magics.Time1s : 0,
                        centeredX: !0,
                        centeredY: !0
                    }).removeAttr("style")
                }, ve.Magics.Time1s), n.socialUsers = he.a.bind(n.socialUsers, n), n
            }
            return le()(t, e), t.prototype.remote = function() {
                return Ve.a
            }, t.prototype.reload = function() {
                de.a.parent && Ge.appSettingsGet("inIframe") ? de.a.parent.location.reload() : de.a.location.reload()
            }, t.prototype.reloadFlagsCurrentMessageListAndMessageFromCache = function() {
                he.a.each(Ue.a.messageList(), function(e) {
                    Object(Ce.n)(e)
                }), Object(Ce.n)(Ue.a.message())
            }, t.prototype.reloadMessageList = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = (Ue.a.messageListPage() - 1) * Re.a.messagesPerPage();
                t && Object(Ce.q)(ke.a.currentFolderFullNameRaw(), ""), e && (Ue.a.messageListPage(1), Ue.a.messageListPageBeforeThread(1), n = 0, Object(ot.setHash)(Object(Ae.o)(ke.a.currentFolderFullNameHash(), Ue.a.messageListPage(), Ue.a.messageListSearch(), Ue.a.messageListThreadUid()), !0, !0)), Ue.a.messageListLoading(!0), Ve.a.messageList(function(e, t, n) {
                    ve.StorageResultType.Success === e && t && t.Result ? (Ue.a.messageListError(""), Ue.a.messageListLoading(!1), Ue.a.setMessageList(t, n)) : ve.StorageResultType.Unload === e ? (Ue.a.messageListError(""), Ue.a.messageListLoading(!1)) : ve.StorageResultType.Abort !== e && (Ue.a.messageList([]), Ue.a.messageListLoading(!1), Ue.a.messageListError(t && t.ErrorCode ? Object(Fe.getNotification)(t.ErrorCode) : Object(Fe.i18n)("NOTIFICATIONS/CANT_GET_MESSAGE_LIST")))
                }, ke.a.currentFolderFullNameRaw(), n, Re.a.messagesPerPage(), Ue.a.messageListSearch(), Ue.a.messageListThreadUid())
            }, t.prototype.recacheInboxMessageList = function() {
                Ve.a.messageList(ye.noop, Object(Ce.h)(), 0, Re.a.messagesPerPage(), "", "", !0)
            }, t.prototype.contactsSync = function(e) {
                var t = _e.a.contacts;
                return !(t.importing() || t.syncing() || !_e.a.enableContactsSync() || !_e.a.allowContactsSync() || (t.syncing(!0), Ve.a.contactsSync(function(n, o) {
                    t.syncing(!1), e && e(n, o)
                }), 0))
            }, t.prototype.messagesMoveTrigger = function() {
                var e = this,
                    t = ke.a.trashFolder(),
                    n = ke.a.spamFolder();
                he.a.each(this.moveCache, function(o) {
                    var i = n === o.To,
                        a = t === o.To,
                        r = !i && n === o.From && Object(Ce.h)() === o.To;
                    Ve.a.messagesMove(e.moveOrDeleteResponseHelper, o.From, o.To, o.Uid, i ? "SPAM" : r ? "HAM" : "", i || a)
                }), this.moveCache = {}
            }, t.prototype.messagesMoveHelper = function(e, t, n) {
                var o = "$$" + e + "$$" + t + "$$";
                this.moveCache[o] || (this.moveCache[o] = {
                    From: e,
                    To: t,
                    Uid: []
                }), this.moveCache[o].Uid = he.a.union(this.moveCache[o].Uid, n), this.messagesMoveTrigger()
            }, t.prototype.messagesCopyHelper = function(e, t, n) {
                Ve.a.messagesCopy(this.moveOrDeleteResponseHelper, e, t, n)
            }, t.prototype.messagesDeleteHelper = function(e, t) {
                Ve.a.messagesDelete(this.moveOrDeleteResponseHelper, e, t)
            }, t.prototype.moveOrDeleteResponseHelper = function(e, t) {
                ve.StorageResultType.Success === e && ke.a.currentFolder() && (t && Object(ye.isArray)(t.Result) && 2 === t.Result.length ? Object(Ce.q)(t.Result[0], t.Result[1]) : (Object(Ce.q)(ke.a.currentFolderFullNameRaw(), ""), t && -1 < Object(ye.inArray)(t.ErrorCode, [ve.Notification.CantMoveMessage, ve.Notification.CantCopyMessage]) && de.a.alert(Object(Fe.getNotification)(t.ErrorCode))), this.reloadMessageList(0 === Ue.a.messageList().length), this.quotaDebounce())
            }, t.prototype.deleteMessagesFromFolderWithoutCheck = function(e, t) {
                this.messagesDeleteHelper(e, t), Ue.a.removeMessagesFromList(e, t)
            }, t.prototype.deleteMessagesFromFolder = function(e, t, o, i) {
                var a = this,
                    r = null,
                    s = null;
                switch (e) {
                    case ve.FolderType.Spam:
                        r = Object(Ce.e)(ke.a.spamFolder()), s = ve.SetSystemFoldersNotification.Spam;
                        break;
                    case ve.FolderType.NotSpam:
                        r = Object(Ce.e)(Object(Ce.h)());
                        break;
                    case ve.FolderType.Trash:
                        r = Object(Ce.e)(ke.a.trashFolder()), s = ve.SetSystemFoldersNotification.Trash;
                        break;
                    case ve.FolderType.Archive:
                        r = Object(Ce.e)(ke.a.archiveFolder()), s = ve.SetSystemFoldersNotification.Archive
                }(i = !!Object(ye.isUnd)(i) || !!i) && (ve.FolderType.Spam === e && Oe.r === ke.a.spamFolder() || ve.FolderType.Trash === e && Oe.r === ke.a.trashFolder() || ve.FolderType.Archive === e && Oe.r === ke.a.archiveFolder()) && (i = !1), !r && i ? Object(ot.showScreenPopup)(n(118), [s]) : i && (ve.FolderType.Trash !== e || t !== ke.a.spamFolder() && t !== ke.a.trashFolder()) ? r && (this.messagesMoveHelper(t, r.fullNameRaw, o), Ue.a.removeMessagesFromList(t, o, r.fullNameRaw)) : Object(ot.showScreenPopup)(n(99), [Object(Fe.i18n)("POPUPS_ASK/DESC_WANT_DELETE_MESSAGES"), function() {
                    a.messagesDeleteHelper(t, o), Ue.a.removeMessagesFromList(t, o)
                }])
            }, t.prototype.moveMessagesToFolder = function(e, t, n, o) {
                if (e !== n && Object(ye.isArray)(t) && 0 < t.length) {
                    var i = Object(Ce.e)(e),
                        a = Object(Ce.e)(n);
                    if (i && a) return !Object(ye.isUnd)(o) && o ? this.messagesCopyHelper(i.fullNameRaw, a.fullNameRaw, t) : this.messagesMoveHelper(i.fullNameRaw, a.fullNameRaw, t), Ue.a.removeMessagesFromList(i.fullNameRaw, t, a.fullNameRaw, o), !0
                }
                return !1
            }, t.prototype.foldersReload = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = ze.a.foldersReload(ke.a.foldersLoading);
                e && t.then(function(e) {
                    return !!e
                }).then(e).catch(function() {
                    he.a.delay(function() {
                        e && e(!1)
                    }, 1)
                })
            }, t.prototype.foldersPromisesActionHelper = function(e, t) {
                ze.a.abort("Folders").fastResolve(!0).then(function() {
                    return e
                }).then(function() {
                    ze.a.foldersReloadWithTimeout(ke.a.foldersLoading)
                }, function(e) {
                    ke.a.folderList.error(Object(Fe.getNotification)(e, "", t)), ze.a.foldersReloadWithTimeout(ke.a.foldersLoading)
                })
            }, t.prototype.reloadOpenPgpKeys = function() {
                if (xe.a.capaOpenPGP()) {
                    var e = [],
                        t = new qe.EmailModel,
                        n = xe.a.openpgpKeyring,
                        o = n ? n.getAllKeys() : [];
                    he.a.each(o, function(n, o) {
                        if (n && n.primaryKey) {
                            var i = [],
                                a = [],
                                r = n.getPrimaryUser(),
                                s = r && r.user ? r.user.userId.userid : n.users && n.users[0] ? n.users[0].userId.userid : "";
                            n.users && he.a.each(n.users, function(e) {
                                e.userId && (t.clear(), t.parse(e.userId.userid), t.validate() && (i.push(t.email), a.push(e.userId.userid)))
                            }), i.length && e.push(new Xe(o, n.primaryKey.getFingerprint(), n.primaryKey.getKeyId().toHex().toLowerCase(), he.a.uniq(he.a.compact(he.a.map(n.getKeyIds(), function(e) {
                                return e && e.toHex ? e.toHex() : null
                            }))), a, i, n.isPrivate(), n.armor(), s))
                        }
                    }), Object(ye.delegateRunOnDestroy)(xe.a.openpgpkeys()), xe.a.openpgpkeys(e)
                }
            }, t.prototype.accountsCounts = function() {
                return !1
            }, t.prototype.accountsAndIdentities = function(e) {
                var t = this;
                Le.a.accounts.loading(!0), Pe.a.identities.loading(!0), Ve.a.accountsAndIdentities(function(n, o) {
                    if (Le.a.accounts.loading(!1), Pe.a.identities.loading(!1), ve.StorageResultType.Success === n && o.Result) {
                        var i = {},
                            a = Le.a.email(),
                            r = Ge.settingsGet("ParentEmail");
                        r = "" === r ? a : r, Object(ye.isArray)(o.Result.Accounts) && (he.a.each(Le.a.accounts(), function(e) {
                            i[e.email] = e.count()
                        }), Object(ye.delegateRunOnDestroy)(Le.a.accounts()), Le.a.accounts(he.a.map(o.Result.Accounts, function(e) {
                            return new Ye(e, e !== r, i[e] || 0)
                        }))), !Object(ye.isUnd)(e) && e && (he.a.delay(function() {
                            return t.accountsCounts()
                        }, 5e3), Ee.b("interval.10m-after5m", function() {
                            return t.accountsCounts()
                        })), Object(ye.isArray)(o.Result.Identities) && (Object(ye.delegateRunOnDestroy)(Pe.a.identities()), Pe.a.identities(he.a.map(o.Result.Identities, function(e) {
                            var t = Object(ye.pString)(e.Id),
                                n = Object(ye.pString)(e.Email),
                                o = new $e(t, n);
                            return o.name(Object(ye.pString)(e.Name)), o.replyTo(Object(ye.pString)(e.ReplyTo)), o.bcc(Object(ye.pString)(e.Bcc)), o.signature(Object(ye.pString)(e.Signature)), o.signatureInsertBefore(!!e.SignatureInsertBefore), o
                        })))
                    }
                })
            }, t.prototype.templates = function() {
                Me.templates.loading(!0), Ve.a.templates(function(e, t) {
                    Me.templates.loading(!1), ve.StorageResultType.Success === e && t.Result && Object(ye.isArray)(t.Result.Templates) && (Object(ye.delegateRunOnDestroy)(Me.templates()), Me.templates(he.a.compact(he.a.map(t.Result.Templates, function(e) {
                        var t = new Je;
                        return t.parse(e) ? t : null
                    }))))
                })
            }, t.prototype.quota = function() {
                Ve.a.quota(function(e, t) {
                    ve.StorageResultType.Success === e && t && t.Result && Object(ye.isArray)(t.Result) && 1 < t.Result.length && Object(ye.isPosNumeric)(t.Result[0], !0) && Object(ye.isPosNumeric)(t.Result[1], !0) && He.populateData(Object(ye.pInt)(t.Result[1]), Object(ye.pInt)(t.Result[0]))
                })
            }, t.prototype.folderInformation = function(e, t) {
                var n = this;
                "" !== Object(ye.trim)(e) && Ve.a.folderInformation(function(e, t) {
                    if (ve.StorageResultType.Success === e && t && t.Result && t.Result.Hash && t.Result.Folder) {
                        var o = "",
                            i = !1,
                            a = !1,
                            r = Object(Ce.e)(t.Result.Folder);
                        if (r) {
                            if (r.interval = Object(Te.momentNowUnix)(), t.Result.Hash && Object(Ce.q)(t.Result.Folder, t.Result.Hash), Object(ye.isNormal)(t.Result.MessageCount) && r.messageCountAll(t.Result.MessageCount), Object(ye.isNormal)(t.Result.MessageUnseenCount) && (Object(ye.pInt)(r.messageCountUnread()) !== Object(ye.pInt)(t.Result.MessageUnseenCount) && (a = !0), r.messageCountUnread(t.Result.MessageUnseenCount)), a && Object(Ce.c)(r.fullNameRaw), t.Result.Flags) {
                                for (o in t.Result.Flags)
                                    if (Object(ye.has)(t.Result.Flags, o)) {
                                        i = !0;
                                        var s = t.Result.Flags[o];
                                        Object(Ce.v)(r.fullNameRaw, o.toString(), [!s.IsSeen, !!s.IsFlagged, !!s.IsAnswered, !!s.IsForwarded, !!s.IsReadReceipt])
                                    }
                                i && n.reloadFlagsCurrentMessageListAndMessageFromCache()
                            }
                            Ue.a.initUidNextAndNewMessages(r.fullNameRaw, t.Result.UidNext, t.Result.NewMessages);
                            var c = Object(Ce.g)(t.Result.Folder);
                            (t.Result.Hash !== c || "" === c || a) && (r.fullNameRaw === ke.a.currentFolderFullNameRaw() ? n.reloadMessageList() : Object(Ce.h)() === r.fullNameRaw && n.recacheInboxMessageList())
                        }
                    }
                }, e, t)
            }, t.prototype.folderInformationMultiply = function() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = ke.a.getNextFolderNames();
                Object(ye.isNonEmptyArray)(n) && Ve.a.folderInformationMultiply(function(n, o) {
                    if (ve.StorageResultType.Success === n && o && o.Result && o.Result.List && Object(ye.isNonEmptyArray)(o.Result.List)) {
                        var i = Object(Te.momentNowUnix)();
                        he.a.each(o.Result.List, function(t) {
                            var n = Object(Ce.g)(t.Folder),
                                o = Object(Ce.e)(t.Folder),
                                a = !1;
                            if (o)
                                if (o.interval = i, t.Hash && Object(Ce.q)(t.Folder, t.Hash), Object(ye.isNormal)(t.MessageCount) && o.messageCountAll(t.MessageCount), Object(ye.isNormal)(t.MessageUnseenCount) && (Object(ye.pInt)(o.messageCountUnread()) !== Object(ye.pInt)(t.MessageUnseenCount) && (a = !0), o.messageCountUnread(t.MessageUnseenCount)), a && Object(Ce.c)(o.fullNameRaw), t.Hash !== n || "" === n) o.fullNameRaw === ke.a.currentFolderFullNameRaw() && e.reloadMessageList();
                                else if (a && o.fullNameRaw === ke.a.currentFolderFullNameRaw()) {
                                var r = Ue.a.messageList();
                                Object(ye.isNonEmptyArray)(r) && e.folderInformation(o.fullNameRaw, r)
                            }
                        }), t && he.a.delay(function() {
                            return e.folderInformationMultiply(!0)
                        }, 2e3)
                    }
                }, n)
            }, t.prototype.messageListAction = function(e, t, n) {
                var o, i = null,
                    a = 0;
                if (!Object(ye.isUnd)(n) && n || (n = Ue.a.messageListChecked()), o = he.a.uniq(he.a.compact(he.a.map(n, function(e) {
                        return e && e.uid ? e.uid : null
                    }))), "" !== e && 0 < o.length) {
                    switch (t) {
                        case ve.MessageSetAction.SetSeen:
                            he.a.each(o, function(n) {
                                a += Object(Ce.w)(e, n, t)
                            }), (i = Object(Ce.e)(e)) && i.messageCountUnread(i.messageCountUnread() - a), Ve.a.messageSetSeen(ye.noop, e, o, !0);
                            break;
                        case ve.MessageSetAction.UnsetSeen:
                            he.a.each(o, function(n) {
                                a += Object(Ce.w)(e, n, t)
                            }), (i = Object(Ce.e)(e)) && i.messageCountUnread(i.messageCountUnread() - a + o.length), Ve.a.messageSetSeen(ye.noop, e, o, !1);
                            break;
                        case ve.MessageSetAction.SetFlag:
                            he.a.each(o, function(n) {
                                Object(Ce.w)(e, n, t)
                            }), Ve.a.messageSetFlagged(ye.noop, e, o, !0);
                            break;
                        case ve.MessageSetAction.UnsetFlag:
                            he.a.each(o, function(n) {
                                Object(Ce.w)(e, n, t)
                            }), Ve.a.messageSetFlagged(ye.noop, e, o, !1)
                    }
                    this.reloadFlagsCurrentMessageListAndMessageFromCache(), Ue.a.message.viewTrigger(!Ue.a.message.viewTrigger())
                }
            }, t.prototype.googleConnect = function() {
                de.a.open(Object(Ae.B)(), "Google", "left=200,top=100,width=650,height=600,menubar=no,status=no,resizable=yes,scrollbars=yes")
            }, t.prototype.twitterConnect = function() {
                de.a.open(Object(Ae.C)(), "Twitter", "left=200,top=100,width=650,height=350,menubar=no,status=no,resizable=yes,scrollbars=yes")
            }, t.prototype.facebookConnect = function() {
                de.a.open(Object(Ae.A)(), "Facebook", "left=200,top=100,width=650,height=335,menubar=no,status=no,resizable=yes,scrollbars=yes")
            }, t.prototype.socialUsers = function() {
                !0 === (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && (je.a.google.loading(!0), je.a.facebook.loading(!0), je.a.twitter.loading(!0)), Ve.a.socialUsers(function(e, t) {
                    ve.StorageResultType.Success === e && t && t.Result ? (je.a.google.userName(t.Result.Google || ""), je.a.facebook.userName(t.Result.Facebook || ""), je.a.twitter.userName(t.Result.Twitter || "")) : (je.a.google.userName(""), je.a.facebook.userName(""), je.a.twitter.userName("")), je.a.google.loading(!1), je.a.facebook.loading(!1), je.a.twitter.loading(!1)
                })
            }, t.prototype.googleDisconnect = function() {
                je.a.google.loading(!0), Ve.a.googleDisconnect(this.socialUsers)
            }, t.prototype.facebookDisconnect = function() {
                je.a.facebook.loading(!0), Ve.a.facebookDisconnect(this.socialUsers)
            }, t.prototype.twitterDisconnect = function() {
                je.a.twitter.loading(!0), Ve.a.twitterDisconnect(this.socialUsers)
            }, t.prototype.getAutocomplete = function(e, t) {
                Ve.a.suggestions(function(e, n) {
                    ve.StorageResultType.Success === e && n && Object(ye.isArray)(n.Result) ? t(he.a.compact(he.a.map(n.Result, function(e) {
                        return e && e[0] ? new qe.EmailModel(e[0], e[1]) : null
                    }))) : ve.StorageResultType.Abort !== e && t([])
                }, e)
            }, t.prototype.setExpandedFolder = function(e, t) {
                var n = Be.a(ve.ClientSideKeyName.ExpandedFolders);
                Object(ye.isArray)(n) || (n = []), t ? (n.push(e), n = he.a.uniq(n)) : n = he.a.without(n, e), Be.b(ve.ClientSideKeyName.ExpandedFolders, n)
            }, t.prototype.initHorizontalLayoutResizer = function(e) {
                var t = null,
                    n = null,
                    o = function(e) {
                        e && (t && t.attr("style", "height:" + e + "px"), n && n.attr("style", "top:" + (55 + e) + "px"))
                    },
                    i = {
                        helper: "ui-resizable-helper-h",
                        minHeight: 200,
                        maxHeight: 500,
                        handles: "s",
                        create: function(e) {
                            e && e.target && me()(e.target).find(".ui-resizable-handle").on("mousedown", function() {
                                Se.$html.addClass("rl-resizer")
                            }).on("mouseup", function() {
                                Se.$html.removeClass("rl-resizer")
                            })
                        },
                        resize: he.a.debounce(function() {
                            Se.$html.addClass("rl-resizer")
                        }, 500, !0),
                        start: function() {
                            Se.$html.addClass("rl-resizer")
                        },
                        stop: function(t, n) {
                            Se.$html.removeClass("rl-resizer"), n && n.size && n.size.height && (Be.b(e, n.size.height), o(n.size.height), Object(ye.windowResize)())
                        }
                    },
                    a = function(a) {
                        if (a) t && t.hasClass("ui-resizable") && t.resizable("destroy").removeAttr("style"), n && n.removeAttr("style");
                        else if (Se.$html.hasClass("rl-bottom-preview-pane")) {
                            t = me()(".b-message-list-wrapper"), n = me()(".b-message-view-wrapper"), t.hasClass("ui-resizable") || t.resizable(i);
                            var r = Object(ye.pInt)(Be.a(e)) || 300;
                            o(r > 200 ? r : 200)
                        }
                    };
                a(!1), Ee.b("layout", function(e) {
                    a(ve.Layout.BottomPreview !== e)
                })
            }, t.prototype.initVerticalLayoutResizer = function(e) {
                var t = me()("#rl-left"),
                    n = me()("#rl-right"),
                    o = Be.a(e) || null,
                    i = function(e) {
                        e && (Object(Se.leftPanelWidth)(e), Se.$html.removeClass("rl-resizer"), t.css({
                            width: e + "px"
                        }), n.css({
                            left: e + "px"
                        }))
                    },
                    a = function(n) {
                        if (n) t.resizable("disable"), i(60);
                        else {
                            t.resizable("enable");
                            var o = Object(ye.pInt)(Be.a(e)) || 155;
                            i(o > 155 ? o : 155)
                        }
                    },
                    r = he.a.debounce(function() {
                        Se.$html.addClass("rl-resizer")
                    }, 500, !0);
                null !== o && i(o > 155 ? o : 155), t.resizable({
                    helper: "ui-resizable-helper-w",
                    minWidth: 155,
                    maxWidth: ve.Magics.Size350px,
                    handles: "e",
                    create: function(e) {
                        e && e.target && me()(e.target).find(".ui-resizable-handle").on("mousedown", function() {
                            Se.$html.addClass("rl-resizer")
                        }).on("mouseup", function() {
                            Se.$html.removeClass("rl-resizer")
                        })
                    },
                    resize: r,
                    start: function() {
                        Se.$html.addClass("rl-resizer")
                    },
                    stop: function(o, i) {
                        Se.$html.removeClass("rl-resizer"), i && i.size && i.size.width && (Be.b(e, i.size.width), Object(Se.leftPanelWidth)(i.size.width), n.css({
                            left: i.size.width + "px"
                        }), t.css({
                            position: "",
                            top: "",
                            left: "",
                            height: ""
                        }))
                    }
                }), Ee.b("left-panel.off", function() {
                    a(!0)
                }), Ee.b("left-panel.on", function() {
                    a(!1)
                })
            }, t.prototype.logout = function() {
                var e = this;
                Ve.a.logout(function() {
                    e.loginAndLogoutReload(!1, !0, Ge.settingsGet("ParentEmail") && 0 < Ge.settingsGet("ParentEmail").length)
                })
            }, t.prototype.bootstartTwoFactorScreen = function() {
                Object(ot.showScreenPopup)(n(178), [!0])
            }, t.prototype.bootstartWelcomePopup = function(e) {
                Object(ot.showScreenPopup)(n(192), [e])
            }, t.prototype.bootstartLoginScreen = function() {
                Se.$html.removeClass("rl-user-auth").addClass("rl-user-no-auth");
                var e = Object(ye.pString)(Ge.appSettingsGet("customLoginLink"));
                e ? (Object(ot.routeOff)(), Object(ot.setHash)(Object(Ae.w)(), !0), Object(ot.routeOff)(), he.a.defer(function() {
                    de.a.location.href = e
                })) : (Object(ot.startScreens)([rt]), Object(we.f)("rl-start-login-screens"), Ee.a("rl.bootstart-login-screens"))
            }, t.prototype.bootend = function() {
                ge.a && ge.a.set(100).end(), Object(ot.hideLoading)()
            }, t.prototype.bootstart = function() {
                var t = this;
                e.prototype.bootstart.call(this), Ne.a.populate(), Re.a.populate(), Ie.a.populate(), Le.a.populate(), _e.a.populate();
                var o = Object(ye.pInt)(Ge.settingsGet("ContactsSyncInterval")),
                    i = Ge.appSettingsGet("jsHash"),
                    a = Object(ye.pString)(Ge.settingsGet("StartupUrl")),
                    r = Ge.settingsGet("AllowGoogleSocial"),
                    s = Ge.settingsGet("AllowFacebookSocial"),
                    c = Ge.settingsGet("AllowTwitterSocial");
                ge.a && ge.a.set(90), Se.leftPanelDisabled.subscribe(function(e) {
                    Ee.a("left-panel." + (e ? "off" : "on"))
                }), this.setWindowTitle(""), Ge.settingsGet("Auth") ? (Se.$html.addClass("rl-user-auth"), Ge.capa(ve.Capa.TwoFactor) && Ge.capa(ve.Capa.TwoFactorForce) && Ge.settingsGet("RequireTwoFactor") ? (this.bootend(), this.bootstartTwoFactorScreen()) : (this.setWindowTitle(Object(Fe.i18n)("TITLES/LOADING")), this.foldersReload(function(e) {
                    if (t.bootend(), e) {
                        if ("" !== a && (Object(ot.routeOff)(), Object(ot.setHash)(Object(Ae.w)(a), !0), Object(ot.routeOn)()), ye.jassl && de.a.crypto && de.a.crypto.getRandomValues && Ge.capa(ve.Capa.OpenPGP)) {
                            var i = function(e) {
                                if (xe.a.openpgp = e, de.a.Worker) try {
                                    xe.a.openpgp.initWorker({
                                        path: Object(Ae.t)()
                                    })
                                } catch (e) {
                                    Object(ye.log)(e)
                                }
                                xe.a.openpgpKeyring = new e.Keyring, xe.a.capaOpenPGP(!0), Ee.a("openpgp.init"), t.reloadOpenPgpKeys()
                            };
                            de.a.openpgp ? i(de.a.openpgp) : Object(ye.jassl)(Object(Ae.s)()).then(function() {
                                de.a.openpgp && i(de.a.openpgp)
                            })
                        } else xe.a.capaOpenPGP(!1);
                        Object(ot.startScreens)([Ot, Ge.capa(ve.Capa.Settings) ? Bt : null]), (r || s || c) && t.socialUsers(!0), Ee.b("interval.2m", function() {
                            return t.folderInformation(Object(Ce.h)())
                        }), Ee.b("interval.3m", function() {
                            var e = ke.a.currentFolderFullNameRaw();
                            Object(Ce.h)() !== e && t.folderInformation(e)
                        }), Ee.b("interval.2m-after5m", function() {
                            return t.folderInformationMultiply()
                        }), Ee.b("interval.15m", function() {
                            return t.quota()
                        }), Ee.b("interval.20m", function() {
                            return t.foldersReload()
                        }), o = 320 >= (o = 5 <= o ? o : 20) ? o : 320, he.a.delay(function() {
                            return t.contactsSync()
                        }, ve.Magics.Time10s), he.a.delay(function() {
                            return t.folderInformationMultiply(!0)
                        }, ve.Magics.Time2s), de.a.setInterval(function() {
                            return t.contactsSync()
                        }, 6e4 * o + 5e3), t.accountsAndIdentities(!0), he.a.delay(function() {
                            var e = ke.a.currentFolderFullNameRaw();
                            Object(Ce.h)() !== e && t.folderInformation(e)
                        }, 1e3), he.a.delay(function() {
                            return t.quota()
                        }, 5e3), he.a.delay(function() {
                            return Ve.a.appDelayStart(ye.noop)
                        }, 35e3), Ee.b("rl.auto-logout", function() {
                            return t.logout()
                        }), Object(we.f)("rl-start-user-screens"), Ee.a("rl.bootstart-user-screens"), Ge.settingsGet("WelcomePageUrl") && he.a.delay(function() {
                            return t.bootstartWelcomePopup(Ge.settingsGet("WelcomePageUrl"))
                        }, 1e3), Ge.settingsGet("AccountSignMe") && de.a.navigator.registerProtocolHandler && Ge.capa(ve.Capa.Composer) && he.a.delay(function() {
                            try {
                                de.a.navigator.registerProtocolHandler("mailto", de.a.location.protocol + "//" + de.a.location.host + de.a.location.pathname + "?mailto&to=%s", "" + (Ge.settingsGet("Title") || "RainLoop"))
                            } catch (e) {}
                            Ge.settingsGet("MailToEmail") && Object(ye.mailToHelper)(Ge.settingsGet("MailToEmail"), n(63))
                        }, 500), Se.bMobileDevice || he.a.defer(function() {
                            return t.initVerticalLayoutResizer(ve.ClientSideKeyName.FolderListSize)
                        })
                    } else t.logout()
                }))) : (this.bootend(), this.bootstartLoginScreen()), r && (de.a["rl_" + i + "_google_service"] = function() {
                    je.a.google.loading(!0), t.socialUsers()
                }), s && (de.a["rl_" + i + "_facebook_service"] = function() {
                    je.a.facebook.loading(!0), t.socialUsers()
                }), c && (de.a["rl_" + i + "_twitter_service"] = function() {
                    je.a.twitter.loading(!0), t.socialUsers()
                }), Ee.b("interval.1m", function() {
                    return Object(Te.reload)()
                }), Object(we.f)("rl-start-screens"), Ee.a("rl.bootstart-end")
            }, t
        }(n(113).a);
    t.default = new Gt
}, function(e, t) {
    e.exports = window.qr
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o, i) {
        var a = {};
        return Object.keys(o).forEach(function(e) {
            a[e] = o[e]
        }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function(n, o) {
            return o(e, t, n) || n
        }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
    }
    n.r(t);
    var i, a, r, s, c, l, u, d, p, h = n(18),
        f = n.n(h),
        m = n(8),
        b = n.n(m),
        g = n(12),
        y = n.n(g),
        v = n(11),
        S = n.n(v),
        O = n(3),
        w = n.n(O),
        T = n(4),
        C = n.n(T),
        A = n(7),
        E = n.n(A),
        F = n(1),
        j = n(19),
        N = n.n(j),
        R = n(78),
        I = n.n(R),
        L = n(0),
        _ = n(2),
        P = n(23),
        D = n(6),
        M = n(119),
        k = n(16),
        x = n(10),
        U = n(28),
        H = n(57),
        B = n(17),
        G = n(5),
        K = n(44),
        V = n(36),
        z = function(e) {
            function t() {
                b()(this, t);
                var n = y()(this, e.call(this, "ContactModel"));
                return n.idContact = 0, n.display = "", n.properties = [], n.readOnly = !1, n.focused = F.a.observable(!1), n.selected = F.a.observable(!1), n.checked = F.a.observable(!1), n.deleted = F.a.observable(!1), n
            }
            return S()(t, e), t.prototype.getNameAndEmailHelper = function() {
                var e = "",
                    t = "";
                return Object(_.isNonEmptyArray)(this.properties) && C.a.each(this.properties, function(n) {
                    n && (L.ContactPropertyType.FirstName === n[0] ? e = Object(_.trim)(n[1] + " " + e) : L.ContactPropertyType.LastName === n[0] ? e = Object(_.trim)(e + " " + n[1]) : "" === t && L.ContactPropertyType.Email === n[0] && (t = n[1]))
                }), "" === t ? null : [t, e]
            }, t.prototype.parse = function(e) {
                var t = this,
                    n = !1;
                return e && "Object/Contact" === e["@Object"] && (this.idContact = Object(_.pInt)(e.IdContact), this.display = Object(_.pString)(e.Display), this.readOnly = !!e.ReadOnly, Object(_.isNonEmptyArray)(e.Properties) && C.a.each(e.Properties, function(e) {
                    e && e.Type && Object(_.isNormal)(e.Value) && Object(_.isNormal)(e.TypeStr) && t.properties.push([Object(_.pInt)(e.Type), Object(_.pString)(e.Value), Object(_.pString)(e.TypeStr)])
                }), n = !0), n
            }, t.prototype.srcAttr = function() {
                return Object(k.j)()
            }, t.prototype.generateUid = function() {
                return Object(_.pString)(this.idContact)
            }, t.prototype.lineAsCss = function() {
                var e = [];
                return this.deleted() && e.push("deleted"), this.selected() && e.push("selected"), this.checked() && e.push("checked"), this.focused() && e.push("focused"), e.join(" ")
            }, t
        }(V.a),
        q = function(e) {
            function t() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L.ContactPropertyType.Unknown,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
                b()(this, t);
                var s = y()(this, e.call(this, "ContactPropertyModel"));
                return s.type = F.a.observable(Object(_.pInt)(n)), s.typeStr = F.a.observable(Object(_.pString)(o)), s.focused = F.a.observable(!!a), s.value = F.a.observable(Object(_.pString)(i)), s.placeholder = F.a.observable(r), s.placeholderValue = F.a.computed(function() {
                    var e = s.placeholder();
                    return e ? Object(x.i18n)(e) : ""
                }), s.largeValue = F.a.computed(function() {
                    return L.ContactPropertyType.Note === s.type()
                }), s.regDisposables([s.placeholderValue, s.largeValue]), s
            }
            return S()(t, e), t
        }(V.a),
        W = n(20),
        Y = n(9),
        $ = n(24);
    n.d(t, "ContactsPopupView", function() {
        return J
    }), n.d(t, "default", function() {
        return J
    });
    var J = (i = Object(Y.popup)({
        name: "View/Popup/Contacts",
        templateID: "PopupsContacts"
    }), a = Object(Y.command)(), r = Object(Y.command)(function(e) {
        return 0 < e.contactsCheckedOrSelected().length
    }), s = Object(Y.command)(function(e) {
        return 0 < e.contactsCheckedOrSelected().length
    }), c = Object(Y.command)(), l = Object(Y.command)(function(e) {
        var t = e.viewHasNonEmptyRequaredProperties(),
            n = e.viewReadOnly();
        return !e.viewSaving() && t && !n
    }), u = Object(Y.command)(function(e) {
        return !e.contacts.syncing() && !e.contacts.importing()
    }), i((o((p = function(e) {
        function t() {
            b()(this, t);
            var n = y()(this, e.call(this)),
                o = function(e) {
                    e && 0 < e.length && (n.viewProperties.removeAll(e), Object(_.delegateRunOnDestroy)(e))
                };
            return n.bBackToCompose = !1, n.sLastComposeFocusedField = "", n.allowContactsSync = H.a.allowContactsSync, n.enableContactsSync = H.a.enableContactsSync, n.allowExport = !D.bMobileDevice, n.search = F.a.observable(""), n.contactsCount = F.a.observable(0), n.contacts = H.a.contacts, n.currentContact = F.a.observable(null), n.importUploaderButton = F.a.observable(null), n.contactsPage = F.a.observable(1), n.contactsPageCount = F.a.computed(function() {
                var e = w.a.Math.ceil(n.contactsCount() / P.c);
                return 0 >= e ? 1 : e
            }), n.contactsPagenator = F.a.computed(Object(_.computedPagenatorHelper)(n.contactsPage, n.contactsPageCount)), n.emptySelection = F.a.observable(!0), n.viewClearSearch = F.a.observable(!1), n.viewID = F.a.observable(""), n.viewReadOnly = F.a.observable(!1), n.viewProperties = F.a.observableArray([]), n.viewSaveTrigger = F.a.observable(L.SaveSettingsStep.Idle), n.viewPropertiesNames = n.viewProperties.filter(function(e) {
                return -1 < Object(_.inArray)(e.type(), [L.ContactPropertyType.FirstName, L.ContactPropertyType.LastName])
            }), n.viewPropertiesOther = n.viewProperties.filter(function(e) {
                return -1 < Object(_.inArray)(e.type(), [L.ContactPropertyType.Note])
            }), n.viewPropertiesOther = F.a.computed(function() {
                var e = C.a.filter(n.viewProperties(), function(e) {
                    return -1 < Object(_.inArray)(e.type(), [L.ContactPropertyType.Nick])
                });
                return C.a.sortBy(e, function(e) {
                    return e.type()
                })
            }), n.viewPropertiesEmails = n.viewProperties.filter(function(e) {
                return L.ContactPropertyType.Email === e.type()
            }), n.viewPropertiesWeb = n.viewProperties.filter(function(e) {
                return L.ContactPropertyType.Web === e.type()
            }), n.viewHasNonEmptyRequaredProperties = F.a.computed(function() {
                var e = n.viewPropertiesNames(),
                    t = n.viewPropertiesEmails(),
                    o = function(e) {
                        return "" !== Object(_.trim)(e.value())
                    };
                return !(!C.a.find(e, o) && !C.a.find(t, o))
            }), n.viewPropertiesPhones = n.viewProperties.filter(function(e) {
                return L.ContactPropertyType.Phone === e.type()
            }), n.viewPropertiesEmailsNonEmpty = n.viewPropertiesNames.filter(function(e) {
                return "" !== Object(_.trim)(e.value())
            }), n.viewPropertiesEmailsEmptyAndOnFocused = n.viewPropertiesEmails.filter(function(e) {
                var t = e.focused();
                return "" === Object(_.trim)(e.value()) && !t
            }), n.viewPropertiesPhonesEmptyAndOnFocused = n.viewPropertiesPhones.filter(function(e) {
                var t = e.focused();
                return "" === Object(_.trim)(e.value()) && !t
            }), n.viewPropertiesWebEmptyAndOnFocused = n.viewPropertiesWeb.filter(function(e) {
                var t = e.focused();
                return "" === Object(_.trim)(e.value()) && !t
            }), n.viewPropertiesOtherEmptyAndOnFocused = F.a.computed(function() {
                return C.a.filter(n.viewPropertiesOther(), function(e) {
                    var t = e.focused();
                    return "" === Object(_.trim)(e.value()) && !t
                })
            }), n.viewPropertiesEmailsEmptyAndOnFocused.subscribe(function(e) {
                o(e)
            }), n.viewPropertiesPhonesEmptyAndOnFocused.subscribe(function(e) {
                o(e)
            }), n.viewPropertiesWebEmptyAndOnFocused.subscribe(function(e) {
                o(e)
            }), n.viewPropertiesOtherEmptyAndOnFocused.subscribe(function(e) {
                o(e)
            }), n.viewSaving = F.a.observable(!1), n.useCheckboxesInList = U.a.useCheckboxesInList, n.search.subscribe(function() {
                n.reloadContactList()
            }), n.contacts.subscribe(_.windowResizeCallback), n.viewProperties.subscribe(_.windowResizeCallback), n.contactsChecked = F.a.computed(function() {
                return C.a.filter(n.contacts(), function(e) {
                    return e.checked()
                })
            }), n.contactsCheckedOrSelected = F.a.computed(function() {
                var e = n.contactsChecked(),
                    t = n.currentContact();
                return C.a.union(e, t ? [t] : [])
            }), n.contactsCheckedOrSelectedUids = F.a.computed(function() {
                return C.a.map(n.contactsCheckedOrSelected(), function(e) {
                    return e.idContact
                })
            }), n.selector = new M.a(n.contacts, n.currentContact, null, ".e-contact-item .actionHandle", ".e-contact-item.selected", ".e-contact-item .checkboxItem", ".e-contact-item.focused"), n.selector.on("onItemSelect", function(e) {
                n.populateViewContact(e || null), e || n.emptySelection(!0)
            }), n.selector.on("onItemGetUid", function(e) {
                return e ? e.generateUid() : ""
            }), n.bDropPageAfterDelete = !1, n.watchDirty = F.a.observable(!1), n.watchHash = F.a.observable(!1), n.viewHash = F.a.computed(function() {
                return "" + C.a.map(n.viewProperties(), function(e) {
                    return e.value()
                }).join("")
            }), n.viewHash.subscribe(function() {
                !n.watchHash() || n.viewReadOnly() || n.watchDirty() || n.watchDirty(!0)
            }), n.sDefaultKeyScope = L.KeyState.ContactList, n
        }
        return S()(t, e), t.prototype.newCommand = function() {
            this.populateViewContact(null), this.currentContact(null)
        }, t.prototype.deleteCommand = function() {
            this.deleteSelectedContacts(), this.emptySelection(!0)
        }, t.prototype.newMessageCommand = function() {
            if (!G.capa(L.Capa.Composer)) return !1;
            var e = [],
                o = null,
                i = null,
                a = null,
                r = this.contactsCheckedOrSelected();
            if (Object(_.isNonEmptyArray)(r) && (e = C.a.map(r, function(e) {
                    if (e) {
                        var t = e.getNameAndEmailHelper(),
                            n = t ? new K.EmailModel(t[0], t[1]) : null;
                        if (n && n.validate()) return n
                    }
                    return null
                }), e = C.a.compact(e)), Object(_.isNonEmptyArray)(e)) {
                switch (this.bBackToCompose = !1, Object(Y.hideScreenPopup)(t), this.sLastComposeFocusedField) {
                    case "cc":
                        i = e;
                        break;
                    case "bcc":
                        a = e;
                        break;
                    case "to":
                    default:
                        o = e
                }
                this.sLastComposeFocusedField = "", C.a.delay(function() {
                    Object(Y.showScreenPopup)(n(63), [L.ComposeType.Empty, null, o, i, a])
                }, L.Magics.Time200ms)
            }
            return !0
        }, t.prototype.clearCommand = function() {
            this.search("")
        }, t.prototype.saveCommand = function() {
            var e = this;
            this.viewSaving(!0), this.viewSaveTrigger(L.SaveSettingsStep.Animate);
            var t = Object(_.fakeMd5)(),
                n = [];
            C.a.each(this.viewProperties(), function(e) {
                e.type() && "" !== Object(_.trim)(e.value()) && n.push([e.type(), e.value(), e.typeStr()])
            }), B.a.contactSave(function(n, o) {
                var i = !1;
                e.viewSaving(!1), L.StorageResultType.Success === n && o && o.Result && o.Result.RequestUid === t && 0 < Object(_.pInt)(o.Result.ResultID) && ("" === e.viewID() && e.viewID(Object(_.pInt)(o.Result.ResultID)), e.reloadContactList(), i = !0), C.a.delay(function() {
                    e.viewSaveTrigger(i ? L.SaveSettingsStep.TrueResult : L.SaveSettingsStep.FalseResult)
                }, L.Magics.Time350ms), i && (e.watchDirty(!1), C.a.delay(function() {
                    e.viewSaveTrigger(L.SaveSettingsStep.Idle)
                }, L.Magics.Time1s))
            }, t, this.viewID(), n)
        }, t.prototype.syncCommand = function() {
            var e = this;
            Object(W.a)().contactsSync(function(t, n) {
                L.StorageResultType.Success === t && n && n.Result || w.a.alert(Object(x.getNotification)(n && n.ErrorCode ? n.ErrorCode : L.Notification.ContactsSyncError)), e.reloadContactList(!0)
            })
        }, t.prototype.getPropertyPlaceholder = function(e) {
            var t = "";
            switch (e) {
                case L.ContactPropertyType.LastName:
                    t = "CONTACTS/PLACEHOLDER_ENTER_LAST_NAME";
                    break;
                case L.ContactPropertyType.FirstName:
                    t = "CONTACTS/PLACEHOLDER_ENTER_FIRST_NAME";
                    break;
                case L.ContactPropertyType.Nick:
                    t = "CONTACTS/PLACEHOLDER_ENTER_NICK_NAME"
            }
            return t
        }, t.prototype.addNewProperty = function(e, t) {
            this.viewProperties.push(new q(e, t || "", "", !0, this.getPropertyPlaceholder(e)))
        }, t.prototype.addNewOrFocusProperty = function(e, t) {
            var n = C.a.find(this.viewProperties(), function(t) {
                return e === t.type()
            });
            n ? n.focused(!0) : this.addNewProperty(e, t)
        }, t.prototype.addNewEmail = function() {
            this.addNewProperty(L.ContactPropertyType.Email, "Home")
        }, t.prototype.addNewPhone = function() {
            this.addNewProperty(L.ContactPropertyType.Phone, "Mobile")
        }, t.prototype.addNewWeb = function() {
            this.addNewProperty(L.ContactPropertyType.Web)
        }, t.prototype.addNewNickname = function() {
            this.addNewOrFocusProperty(L.ContactPropertyType.Nick)
        }, t.prototype.addNewNotes = function() {
            this.addNewOrFocusProperty(L.ContactPropertyType.Note)
        }, t.prototype.addNewBirthday = function() {
            this.addNewOrFocusProperty(L.ContactPropertyType.Birthday)
        }, t.prototype.exportVcf = function() {
            Object(W.a)().download(Object(k.l)())
        }, t.prototype.exportCsv = function() {
            Object(W.a)().download(Object(k.k)())
        }, t.prototype.initUploader = function() {
            var e = this;
            if (this.importUploaderButton()) {
                var t = new I.a({
                    action: Object(k.I)(),
                    name: "uploader",
                    queueSize: 1,
                    multipleSizeLimit: 1,
                    disableDragAndDrop: !0,
                    disableMultiple: !0,
                    disableDocumentDropPrevent: !0,
                    clickElement: this.importUploaderButton()
                });
                t && t.on("onStart", function() {
                    e.contacts.importing(!0)
                }).on("onComplete", function(t, n, o) {
                    e.contacts.importing(!1), e.reloadContactList(), t && n && o && o.Result || w.a.alert(Object(x.i18n)("CONTACTS/ERROR_IMPORT_FILE"))
                })
            }
        }, t.prototype.removeCheckedOrSelectedContactsFromList = function() {
            var e = this,
                t = this.contacts,
                n = this.contactsCheckedOrSelected(),
                o = this.currentContact(),
                i = this.contacts().length;
            0 < n.length && (C.a.each(n, function(t) {
                o && o.idContact === t.idContact && (o = null, e.currentContact(null)), t.deleted(!0), i -= 1
            }), 0 >= i && (this.bDropPageAfterDelete = !0), C.a.delay(function() {
                C.a.each(n, function(e) {
                    t.remove(e), Object(_.delegateRunOnDestroy)(e)
                })
            }, L.Magics.Time500ms))
        }, t.prototype.deleteSelectedContacts = function() {
            0 < this.contactsCheckedOrSelected().length && (B.a.contactsDelete(C.a.bind(this.deleteResponse, this), this.contactsCheckedOrSelectedUids()), this.removeCheckedOrSelectedContactsFromList())
        }, t.prototype.deleteResponse = function(e, t) {
            var n = this;
            L.Magics.Time500ms < (L.StorageResultType.Success === e && t && t.Time ? Object(_.pInt)(t.Time) : 0) ? this.reloadContactList(this.bDropPageAfterDelete) : C.a.delay(function() {
                n.reloadContactList(n.bDropPageAfterDelete)
            }, L.Magics.Time500ms)
        }, t.prototype.removeProperty = function(e) {
            this.viewProperties.remove(e), Object(_.delegateRunOnDestroy)(e)
        }, t.prototype.populateViewContact = function(e) {
            var t = "",
                n = "",
                o = "",
                i = [];
            this.watchHash(!1), this.emptySelection(!1), this.viewReadOnly(!1), e && (t = e.idContact, Object(_.isNonEmptyArray)(e.properties) && C.a.each(e.properties, function(e) {
                e && e[0] && (L.ContactPropertyType.LastName === e[0] ? n = e[1] : L.ContactPropertyType.FirstName === e[0] ? o = e[1] : i.push(new q(e[0], e[2] || "", e[1])))
            }), this.viewReadOnly(!!e.readOnly)), i.unshift(new q(L.ContactPropertyType.LastName, "", n, !1, this.getPropertyPlaceholder(L.ContactPropertyType.LastName))), i.unshift(new q(L.ContactPropertyType.FirstName, "", o, !e, this.getPropertyPlaceholder(L.ContactPropertyType.FirstName))), this.viewID(t), Object(_.delegateRunOnDestroy)(this.viewProperties()), this.viewProperties([]), this.viewProperties(i), this.watchDirty(!1), this.watchHash(!0)
        }, t.prototype.reloadContactList = function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = (this.contactsPage() - 1) * P.c;
            this.bDropPageAfterDelete = !1, t && (this.contactsPage(1), n = 0), this.contacts.loading(!0), B.a.contacts(function(t, n) {
                var o = 0,
                    i = [];
                L.StorageResultType.Success === t && n && n.Result && n.Result.List && Object(_.isNonEmptyArray)(n.Result.List) && (i = C.a.map(n.Result.List, function(e) {
                    var t = new z;
                    return t.parse(e) ? t : null
                }), i = C.a.compact(i), o = 0 < (o = Object(_.pInt)(n.Result.Count)) ? o : 0), e.contactsCount(o), Object(_.delegateRunOnDestroy)(e.contacts()), e.contacts(i), e.contacts.loading(!1), e.viewClearSearch("" !== e.search())
            }, n, P.c, this.search())
        }, t.prototype.onBuild = function(e) {
            var t = this;
            this.oContentVisible = E()(".b-list-content", e), this.oContentScrollable = E()(".content", this.oContentVisible), this.selector.init(this.oContentVisible, this.oContentScrollable, L.KeyState.ContactList), N()("delete", L.KeyState.ContactList, function() {
                return t.deleteCommand(), !1
            }), N()("c, w", L.KeyState.ContactList, function() {
                return t.newMessageCommand(), !1
            });
            var n = this;
            e.on("click", ".e-pagenator .e-page", function() {
                var e = F.a.dataFor(this);
                e && (n.contactsPage(Object(_.pInt)(e.value)), n.reloadContactList())
            }), this.initUploader()
        }, t.prototype.onShow = function(e, t) {
            this.bBackToCompose = !Object(_.isUnd)(e) && !!e, this.sLastComposeFocusedField = Object(_.isUnd)(t) ? "" : t, Object(Y.routeOff)(), this.reloadContactList(!0)
        }, t.prototype.onHide = function() {
            Object(Y.routeOn)(), this.currentContact(null), this.emptySelection(!0), this.search(""), this.contactsCount(0), Object(_.delegateRunOnDestroy)(this.contacts()), this.contacts([]), this.sLastComposeFocusedField = "", this.bBackToCompose && (this.bBackToCompose = !1, G.capa(L.Capa.Composer) && Object(Y.showScreenPopup)(n(63)))
        }, t
    }($.a)).prototype, "newCommand", [a], f()(p.prototype, "newCommand"), p.prototype), o(p.prototype, "deleteCommand", [r], f()(p.prototype, "deleteCommand"), p.prototype), o(p.prototype, "newMessageCommand", [s], f()(p.prototype, "newMessageCommand"), p.prototype), o(p.prototype, "clearCommand", [c], f()(p.prototype, "clearCommand"), p.prototype), o(p.prototype, "saveCommand", [l], f()(p.prototype, "saveCommand"), p.prototype), o(p.prototype, "syncCommand", [u], f()(p.prototype, "syncCommand"), p.prototype), d = p)) || d)
}, , function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "TemplatePopupView", function() {
        return R
    }), n.d(t, "default", function() {
        return R
    });
    var o, i, a, r, s, c, l, u, d, p, h = n(18),
        f = n.n(h),
        m = n(8),
        b = n.n(m),
        g = n(12),
        y = n.n(g),
        v = n(11),
        S = n.n(v),
        O = n(1),
        w = n(0),
        T = n(2),
        C = n(10),
        A = n(95),
        E = n(17),
        F = n(20),
        j = n(9),
        N = n(24),
        R = (o = Object(j.popup)({
            name: "View/Popup/Template",
            templateID: "PopupsTemplate"
        }), i = Object(j.command)(function(e) {
            return !e.submitRequest()
        }), o((r = function(e) {
            function t() {
                b()(this, t);
                var n = y()(this, e.call(this));
                return n.editor = null, n.signatureDom = O.a.observable(null), n.id = O.a.observable(""), n.name = O.a.observable(""), n.name.error = O.a.observable(!1), n.name.focus = O.a.observable(!1), n.body = O.a.observable(""), n.body.loading = O.a.observable(!1), n.body.error = O.a.observable(!1), n.name.subscribe(function() {
                    n.name.error(!1)
                }), n.body.subscribe(function() {
                    n.body.error(!1)
                }), n.submitRequest = O.a.observable(!1), n.submitError = O.a.observable(""), n
            }
            return S()(t, e), t.prototype.addTemplateCommand = function() {
                var e = this;
                return this.populateBodyFromEditor(), this.name.error("" === Object(T.trim)(this.name())), this.body.error("" === Object(T.trim)(this.body()) || ":HTML:" === Object(T.trim)(this.body())), !this.name.error() && !this.body.error() && (this.submitRequest(!0), E.a.templateSetup(function(t, n) {
                    e.submitRequest(!1), w.StorageResultType.Success === t && n ? n.Result ? (Object(F.a)().templates(), e.cancelCommand()) : n.ErrorCode && e.submitError(Object(C.getNotification)(n.ErrorCode)) : e.submitError(Object(C.getNotification)(w.Notification.UnknownError))
                }, this.id(), this.name(), this.body()), !0)
            }, t.prototype.clearPopup = function() {
                this.id(""), this.name(""), this.name.error(!1), this.body(""), this.body.loading(!1), this.body.error(!1), this.submitRequest(!1), this.submitError(""), this.editor && this.editor.setPlain("", !1)
            }, t.prototype.populateBodyFromEditor = function() {
                this.editor && this.body(this.editor.getDataWithHtmlMark())
            }, t.prototype.editorSetBody = function(e) {
                var t = this;
                !this.editor && this.signatureDom() ? this.editor = new A.HtmlEditor(this.signatureDom(), function() {
                    t.populateBodyFromEditor()
                }, function() {
                    t.editor.setHtmlOrPlain(e)
                }) : this.editor.setHtmlOrPlain(e)
            }, t.prototype.onShow = function(e) {
                var t = this;
                this.clearPopup(), e && e.id ? (this.id(e.id), this.name(e.name), this.body(e.body), e.populated ? this.editorSetBody(this.body()) : (this.body.loading(!0), this.body.error(!1), E.a.templateGetById(function(n, o) {
                    t.body.loading(!1), w.StorageResultType.Success === n && o && o.Result && "Object/Template" === o.Result["@Object"] && Object(T.isNormal)(o.Result.Body) ? (e.body = o.Result.Body, e.populated = !0, t.body(e.body), t.body.error(!1)) : (t.body(""), t.body.error(!0)), t.editorSetBody(t.body())
                }, this.id()))) : this.editorSetBody("")
            }, t.prototype.onShowWithDelay = function() {
                this.name.focus(!0)
            }, t
        }(N.a), s = r.prototype, c = "addTemplateCommand", l = [i], u = f()(r.prototype, "addTemplateCommand"), d = r.prototype, p = {}, Object.keys(u).forEach(function(e) {
            p[e] = u[e]
        }), p.enumerable = !!p.enumerable, p.configurable = !!p.configurable, ("value" in p || p.initializer) && (p.writable = !0), p = l.slice().reverse().reduce(function(e, t) {
            return t(s, c, e) || e
        }, p), d && void 0 !== p.initializer && (p.value = p.initializer ? p.initializer.call(d) : void 0, p.initializer = void 0), void 0 === p.initializer && (Object.defineProperty(s, c, p), p = null), a = r)) || a)
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "TwoFactorConfigurationPopupView", function() {
        return A
    }), n.d(t, "default", function() {
        return A
    });
    var o, i = n(8),
        a = n.n(i),
        r = n(12),
        s = n.n(r),
        c = n(11),
        l = n.n(c),
        u = n(3),
        d = n.n(u),
        p = n(4),
        h = n.n(p),
        f = n(1),
        m = n(174),
        b = n.n(m),
        g = n(0),
        y = n(2),
        v = n(10),
        S = n(5),
        O = n(17),
        w = n(20),
        T = n(9),
        C = n(24),
        A = Object(T.popup)({
            name: "View/Popup/TwoFactorConfiguration",
            templateID: "PopupsTwoFactorConfiguration"
        })(o = function(e) {
            function t() {
                a()(this, t);
                var n = s()(this, e.call(this));
                return n.lock = f.a.observable(!1), n.capaTwoFactor = S.capa(g.Capa.TwoFactor), n.processing = f.a.observable(!1), n.clearing = f.a.observable(!1), n.secreting = f.a.observable(!1), n.viewUser = f.a.observable(""), n.twoFactorStatus = f.a.observable(!1), n.twoFactorTested = f.a.observable(!1), n.viewSecret = f.a.observable(""), n.viewBackupCodes = f.a.observable(""), n.viewUrlTitle = f.a.observable(""), n.viewUrl = f.a.observable(""), n.viewEnable_ = f.a.observable(!1), n.viewEnable = f.a.computed({
                    read: n.viewEnable_,
                    write: function(e) {
                        (e = !!e) && n.twoFactorTested() ? (n.viewEnable_(e), O.a.enableTwoFactor(function(e, t) {
                            g.StorageResultType.Success === e && t && t.Result || n.viewEnable_(!1)
                        }, !0)) : (e || n.viewEnable_(e), O.a.enableTwoFactor(function(e, t) {
                            g.StorageResultType.Success === e && t && t.Result || n.viewEnable_(!1)
                        }, !1))
                    }
                }), n.viewTwoFactorEnableTooltip = f.a.computed(function() {
                    return Object(v.trigger)(), n.twoFactorTested() || n.viewEnable_() ? "" : Object(v.i18n)("POPUPS_TWO_FACTOR_CFG/TWO_FACTOR_SECRET_TEST_BEFORE_DESC")
                }), n.viewTwoFactorStatus = f.a.computed(function() {
                    return Object(v.trigger)(), Object(v.i18n)(n.twoFactorStatus() ? "POPUPS_TWO_FACTOR_CFG/TWO_FACTOR_SECRET_CONFIGURED_DESC" : "POPUPS_TWO_FACTOR_CFG/TWO_FACTOR_SECRET_NOT_CONFIGURED_DESC")
                }), n.twoFactorAllowedEnable = f.a.computed(function() {
                    return n.viewEnable() || n.twoFactorTested()
                }), n.onResult = h.a.bind(n.onResult, n), n.onShowSecretResult = h.a.bind(n.onShowSecretResult, n), n
            }
            return l()(t, e), t.prototype.showSecret = function() {
                this.secreting(!0), O.a.showTwoFactorSecret(this.onShowSecretResult)
            }, t.prototype.hideSecret = function() {
                this.viewSecret(""), this.viewBackupCodes(""), this.viewUrlTitle(""), this.viewUrl("")
            }, t.prototype.createTwoFactor = function() {
                this.processing(!0), O.a.createTwoFactor(this.onResult)
            }, t.prototype.logout = function() {
                Object(w.a)().logout()
            }, t.prototype.testTwoFactor = function() {
                Object(T.showScreenPopup)(n(196), [this.twoFactorTested])
            }, t.prototype.clearTwoFactor = function() {
                this.viewSecret(""), this.viewBackupCodes(""), this.viewUrlTitle(""), this.viewUrl(""), this.twoFactorTested(!1), this.clearing(!0), O.a.clearTwoFactor(this.onResult)
            }, t.prototype.onShow = function(e) {
                this.lock(!!e), this.viewSecret(""), this.viewBackupCodes(""), this.viewUrlTitle(""), this.viewUrl("")
            }, t.prototype.onHide = function() {
                this.lock() && d.a.location.reload()
            }, t.prototype.getQr = function() {
                return "otpauth://totp/" + d.a.encodeURIComponent(this.viewUser()) + "?secret=" + d.a.encodeURIComponent(this.viewSecret()) + "&issuer=" + d.a.encodeURIComponent("")
            }, t.prototype.onResult = function(e, t) {
                this.processing(!1), this.clearing(!1), g.StorageResultType.Success === e && t && t.Result ? (this.viewUser(Object(y.pString)(t.Result.User)), this.viewEnable_(!!t.Result.Enable), this.twoFactorStatus(!!t.Result.IsSet), this.twoFactorTested(!!t.Result.Tested), this.viewSecret(Object(y.pString)(t.Result.Secret)), this.viewBackupCodes(Object(y.pString)(t.Result.BackupCodes).replace(/[\s]+/g, "  ")), this.viewUrlTitle(Object(y.pString)(t.Result.UrlTitle)), this.viewUrl(b.a.toDataURL({
                    level: "M",
                    size: 8,
                    value: this.getQr()
                }))) : (this.viewUser(""), this.viewEnable_(!1), this.twoFactorStatus(!1), this.twoFactorTested(!1), this.viewSecret(""), this.viewBackupCodes(""), this.viewUrlTitle(""), this.viewUrl(""))
            }, t.prototype.onShowSecretResult = function(e, t) {
                this.secreting(!1), g.StorageResultType.Success === e && t && t.Result ? (this.viewSecret(Object(y.pString)(t.Result.Secret)), this.viewUrlTitle(Object(y.pString)(t.Result.UrlTitle)), this.viewUrl(b.a.toDataURL({
                    level: "M",
                    size: 6,
                    value: this.getQr()
                }))) : (this.viewSecret(""), this.viewUrlTitle(""), this.viewUrl(""))
            }, t.prototype.onBuild = function() {
                this.capaTwoFactor && (this.processing(!0), O.a.getTwoFactor(this.onResult))
            }, t
        }(C.a)) || o
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "FilterPopupView", function() {
        return L
    }), n.d(t, "default", function() {
        return L
    });
    var o, i, a, r, s, c, l, u, d, p, h = n(18),
        f = n.n(h),
        m = n(8),
        b = n.n(m),
        g = n(12),
        y = n.n(g),
        v = n(11),
        S = n.n(v),
        O = n(4),
        w = n.n(O),
        T = n(1),
        C = n(0),
        A = n(6),
        E = n(2),
        F = n(10),
        j = n(98),
        N = n(13),
        R = n(9),
        I = n(24),
        L = (o = Object(R.popup)({
            name: "View/Popup/Filter",
            templateID: "PopupsFilter"
        }), i = Object(R.command)(), o((r = function(e) {
            function t() {
                b()(this, t);
                var n = y()(this, e.call(this));
                return n.isNew = T.a.observable(!0), n.modules = j.a.modules, n.fTrueCallback = null, n.filter = T.a.observable(null), n.allowMarkAsRead = T.a.observable(!1), n.defautOptionsAfterRender = E.defautOptionsAfterRender, n.folderSelectList = N.a.folderMenuForFilters, n.selectedFolderValue = T.a.observable(""), n.selectedFolderValue.subscribe(function() {
                    n.filter() && n.filter().actionValue.error(!1)
                }), n.actionTypeOptions = T.a.observableArray([]), n.fieldOptions = T.a.observableArray([]), n.typeOptions = T.a.observableArray([]), n.typeOptionsSize = T.a.observableArray([]), Object(F.initOnStartOrLangChange)(w.a.bind(n.populateOptions, n)), n.modules.subscribe(n.populateOptions, n), n
            }
            return S()(t, e), t.prototype.saveFilterCommand = function() {
                if (this.filter()) {
                    if (C.FiltersAction.MoveTo === this.filter().actionType() && this.filter().actionValue(this.selectedFolderValue()), !this.filter().verify()) return !1;
                    this.fTrueCallback && this.fTrueCallback(this.filter()), this.modalVisibility() && Object(E.delegateRun)(this, "closeCommand")
                }
                return !0
            }, t.prototype.populateOptions = function() {
                this.actionTypeOptions([]);
                var e = this.modules();
                e && (e.markasread && this.allowMarkAsRead(!0), e.moveto && this.actionTypeOptions.push({
                    id: C.FiltersAction.MoveTo,
                    name: Object(F.i18n)("POPUPS_FILTER/SELECT_ACTION_MOVE_TO")
                }), e.redirect && this.actionTypeOptions.push({
                    id: C.FiltersAction.Forward,
                    name: Object(F.i18n)("POPUPS_FILTER/SELECT_ACTION_FORWARD_TO")
                }), e.reject && this.actionTypeOptions.push({
                    id: C.FiltersAction.Reject,
                    name: Object(F.i18n)("POPUPS_FILTER/SELECT_ACTION_REJECT")
                }), e.vacation && this.actionTypeOptions.push({
                    id: C.FiltersAction.Vacation,
                    name: Object(F.i18n)("POPUPS_FILTER/SELECT_ACTION_VACATION_MESSAGE")
                })), this.actionTypeOptions.push({
                    id: C.FiltersAction.Discard,
                    name: Object(F.i18n)("POPUPS_FILTER/SELECT_ACTION_DISCARD")
                }), this.fieldOptions([{
                    id: C.FilterConditionField.From,
                    name: Object(F.i18n)("POPUPS_FILTER/SELECT_FIELD_FROM")
                }, {
                    id: C.FilterConditionField.Recipient,
                    name: Object(F.i18n)("POPUPS_FILTER/SELECT_FIELD_RECIPIENTS")
                }, {
                    id: C.FilterConditionField.Subject,
                    name: Object(F.i18n)("POPUPS_FILTER/SELECT_FIELD_SUBJECT")
                }, {
                    id: C.FilterConditionField.Size,
                    name: Object(F.i18n)("POPUPS_FILTER/SELECT_FIELD_SIZE")
                }, {
                    id: C.FilterConditionField.Header,
                    name: Object(F.i18n)("POPUPS_FILTER/SELECT_FIELD_HEADER")
                }]), this.typeOptions([{
                    id: C.FilterConditionType.Contains,
                    name: Object(F.i18n)("POPUPS_FILTER/SELECT_TYPE_CONTAINS")
                }, {
                    id: C.FilterConditionType.NotContains,
                    name: Object(F.i18n)("POPUPS_FILTER/SELECT_TYPE_NOT_CONTAINS")
                }, {
                    id: C.FilterConditionType.EqualTo,
                    name: Object(F.i18n)("POPUPS_FILTER/SELECT_TYPE_EQUAL_TO")
                }, {
                    id: C.FilterConditionType.NotEqualTo,
                    name: Object(F.i18n)("POPUPS_FILTER/SELECT_TYPE_NOT_EQUAL_TO")
                }]), e && e.regex && this.typeOptions.push({
                    id: C.FilterConditionType.Regex,
                    name: "Regex"
                }), this.typeOptionsSize([{
                    id: C.FilterConditionType.Over,
                    name: Object(F.i18n)("POPUPS_FILTER/SELECT_TYPE_OVER")
                }, {
                    id: C.FilterConditionType.Under,
                    name: Object(F.i18n)("POPUPS_FILTER/SELECT_TYPE_UNDER")
                }])
            }, t.prototype.removeCondition = function(e) {
                this.filter() && this.filter().removeCondition(e)
            }, t.prototype.clearPopup = function() {
                this.isNew(!0), this.fTrueCallback = null, this.filter(null)
            }, t.prototype.onShow = function(e, t, n) {
                this.clearPopup(), this.fTrueCallback = t, this.filter(e), e && this.selectedFolderValue(e.actionValue()), this.isNew(!n), !n && e && e.name.focused(!0)
            }, t.prototype.onShowWithDelay = function() {
                this.isNew() && this.filter() && !A.bMobileDevice && this.filter().name.focused(!0)
            }, t
        }(I.a), s = r.prototype, c = "saveFilterCommand", l = [i], u = f()(r.prototype, "saveFilterCommand"), d = r.prototype, p = {}, Object.keys(u).forEach(function(e) {
            p[e] = u[e]
        }), p.enumerable = !!p.enumerable, p.configurable = !!p.configurable, ("value" in p || p.initializer) && (p.writable = !0), p = l.slice().reverse().reduce(function(e, t) {
            return t(s, c, e) || e
        }, p), d && void 0 !== p.initializer && (p.value = p.initializer ? p.initializer.call(d) : void 0, p.initializer = void 0), void 0 === p.initializer && (Object.defineProperty(s, c, p), p = null), a = r)) || a)
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "FolderCreateView", function() {
        return I
    }), n.d(t, "default", function() {
        return I
    });
    var o, i, a, r, s, c, l, u, d, p, h = n(18),
        f = n.n(h),
        m = n(8),
        b = n.n(m),
        g = n(12),
        y = n.n(g),
        v = n(11),
        S = n.n(v),
        O = n(1),
        w = n(0),
        T = n(23),
        C = n(6),
        A = n(2),
        E = n(13),
        F = n(50),
        j = n(20),
        N = n(9),
        R = n(24),
        I = (o = Object(N.popup)({
            name: "View/Popup/FolderCreate",
            templateID: "PopupsFolderCreate"
        }), i = Object(N.command)(function(e) {
            return e.simpleFolderNameValidation(e.folderName())
        }), o((r = function(e) {
            function t() {
                b()(this, t);
                var n = y()(this, e.call(this));
                return n.folderName = O.a.observable(""), n.folderName.focused = O.a.observable(!1), n.selectedParentValue = O.a.observable(T.r), n.parentFolderSelectList = O.a.computed(function() {
                    var e = [],
                        t = E.a.folderList();
                    e.push(["", ""]);
                    var n = null;
                    return "" !== E.a.namespace && (n = function(e) {
                        return E.a.namespace !== e.fullNameRaw.substr(0, E.a.namespace.length)
                    }), Object(A.folderListOptionsBuilder)([], t, [], e, null, n, null, function(e) {
                        return e ? e.isSystemFolder() ? e.name() + " " + e.manageFolderSystemName() : e.name() : ""
                    })
                }), n.defautOptionsAfterRender = A.defautOptionsAfterRender, n
            }
            return S()(t, e), t.prototype.createFolderCommand = function() {
                var e = this.selectedParentValue();
                "" === e && 1 < E.a.namespace.length && (e = E.a.namespace.substr(0, E.a.namespace.length - 1)), Object(j.a)().foldersPromisesActionHelper(F.a.folderCreate(this.folderName(), e, E.a.foldersCreating), w.Notification.CantCreateFolder), this.cancelCommand()
            }, t.prototype.simpleFolderNameValidation = function(e) {
                return /^[^\\\/]+$/g.test(Object(A.trim)(e))
            }, t.prototype.clearPopup = function() {
                this.folderName(""), this.selectedParentValue(""), this.folderName.focused(!1)
            }, t.prototype.onShow = function() {
                this.clearPopup()
            }, t.prototype.onShowWithDelay = function() {
                C.bMobileDevice || this.folderName.focused(!0)
            }, t
        }(R.a), s = r.prototype, c = "createFolderCommand", l = [i], u = f()(r.prototype, "createFolderCommand"), d = r.prototype, p = {}, Object.keys(u).forEach(function(e) {
            p[e] = u[e]
        }), p.enumerable = !!p.enumerable, p.configurable = !!p.configurable, ("value" in p || p.initializer) && (p.writable = !0), p = l.slice().reverse().reduce(function(e, t) {
            return t(s, c, e) || e
        }, p), d && void 0 !== p.initializer && (p.value = p.initializer ? p.initializer.call(d) : void 0, p.initializer = void 0), void 0 === p.initializer && (Object.defineProperty(s, c, p), p = null), a = r)) || a)
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "KeyboardShortcutsHelpPopupView", function() {
        return g
    }), n.d(t, "default", function() {
        return g
    });
    var o, i = n(8),
        a = n.n(i),
        r = n(12),
        s = n.n(r),
        c = n(11),
        l = n.n(c),
        u = n(4),
        d = n.n(u),
        p = n(19),
        h = n.n(p),
        f = n(0),
        m = n(9),
        b = n(24),
        g = Object(m.popup)({
            name: "View/Popup/KeyboardShortcutsHelp",
            templateID: "PopupsKeyboardShortcutsHelp"
        })(o = function(e) {
            function t() {
                a()(this, t);
                var n = s()(this, e.call(this));
                return n.sDefaultKeyScope = f.KeyState.PopupKeyboardShortcutsHelp, n
            }
            return l()(t, e), t.prototype.onBuild = function(e) {
                h()("tab, shift+tab, left, right", f.KeyState.PopupKeyboardShortcutsHelp, d.a.throttle(function(t, n) {
                    if (t && n) {
                        var o = e.find(".nav.nav-tabs > li"),
                            i = n && ("tab" === n.shortcut || "right" === n.shortcut),
                            a = o.index(o.filter(".active"));
                        return !i && 0 < a ? a -= 1 : i && a < o.length - 1 ? a += 1 : a = i ? 0 : o.length - 1, o.eq(a).find('a[data-toggle="tab"]').tab("show"), !1
                    }
                    return !0
                }, f.Magics.Time100ms))
            }, t
        }(b.a)) || o
}, function(e, t, n) {
    e.exports = function() {
        "use strict";

        function e(e) {
            e.setAttribute("data-loaded", !0)
        }
        var t = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            },
            n = document.documentMode,
            o = {
                rootMargin: "0px",
                threshold: 0,
                load: function(e) {
                    if ("picture" === e.nodeName.toLowerCase()) {
                        var t = document.createElement("img");
                        n && e.getAttribute("data-iesrc") && (t.src = e.getAttribute("data-iesrc")), e.appendChild(t)
                    }
                    e.getAttribute("data-src") && (e.src = e.getAttribute("data-src")), e.getAttribute("data-srcset") && (e.srcset = e.getAttribute("data-srcset")), e.getAttribute("data-background-image") && (e.style.backgroundImage = "url('" + e.getAttribute("data-background-image") + "')")
                },
                loaded: function() {}
            },
            i = function(e) {
                return "true" === e.getAttribute("data-loaded")
            };
        return function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".lozad",
                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = t({}, o, a),
                s = r.rootMargin,
                c = r.threshold,
                l = r.load,
                u = r.loaded,
                d = void 0;
            return window.IntersectionObserver && (d = new IntersectionObserver(function(t, n) {
                return function(o, a) {
                    o.forEach(function(o) {
                        o.intersectionRatio > 0 && (a.unobserve(o.target), i(o.target) || (t(o.target), e(o.target), n(o.target)))
                    })
                }
            }(l, u), {
                rootMargin: s,
                threshold: c
            })), {
                observe: function() {
                    for (var t = function(e) {
                            return e instanceof Element ? [e] : e instanceof NodeList ? e : document.querySelectorAll(e)
                        }(n), o = 0; o < t.length; o++) i(t[o]) || (d ? d.observe(t[o]) : (l(t[o]), e(t[o]), u(t[o])))
                },
                triggerLoad: function(t) {
                    i(t) || (l(t), e(t), u(t))
                }
            }
        }
    }()
}, function(e, t, n) {
    var o;
    ! function() {
        "use strict";

        function n() {
            for (var e = [], t = 0; t < arguments.length; t++) {
                var o = arguments[t];
                if (o) {
                    var a = typeof o;
                    if ("string" === a || "number" === a) e.push(o);
                    else if (Array.isArray(o)) e.push(n.apply(null, o));
                    else if ("object" === a)
                        for (var r in o) i.call(o, r) && o[r] && e.push(r)
                }
            }
            return e.join(" ")
        }
        var i = {}.hasOwnProperty;
        void 0 !== e && e.exports ? e.exports = n : void 0 === (o = function() {
            return n
        }.apply(t, [])) || (e.exports = o)
    }()
}, , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "WelcomePagePopupView", function() {
        return f
    }), n.d(t, "default", function() {
        return f
    });
    var o, i = n(8),
        a = n.n(i),
        r = n(12),
        s = n.n(r),
        c = n(11),
        l = n.n(c),
        u = n(1),
        d = n(50),
        p = n(9),
        h = n(24),
        f = Object(p.popup)({
            name: "View/Popup/WelcomePage",
            templateID: "PopupsWelcomePage"
        })(o = function(e) {
            function t() {
                a()(this, t);
                var n = s()(this, e.call(this));
                return n.welcomePageURL = u.a.observable(""), n.closeFocused = u.a.observable(!1), n
            }
            return l()(t, e), t.prototype.clearPopup = function() {
                this.welcomePageURL(""), this.closeFocused(!1)
            }, t.prototype.onShow = function(e) {
                this.clearPopup(), this.welcomePageURL(e)
            }, t.prototype.onShowWithDelay = function() {
                this.closeFocused(!0)
            }, t.prototype.onHide = function() {
                d.a.welcomeClose()
            }, t
        }(h.a)) || o
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "ViewOpenPgpKeyPopupView", function() {
        return g
    }), n.d(t, "default", function() {
        return g
    });
    var o, i = n(8),
        a = n.n(i),
        r = n(12),
        s = n.n(r),
        c = n(11),
        l = n.n(c),
        u = n(1),
        d = n(19),
        p = n.n(d),
        h = n(0),
        f = n(2),
        m = n(9),
        b = n(24),
        g = Object(m.popup)({
            name: "View/Popup/ViewOpenPgpKey",
            templateID: "PopupsViewOpenPgpKey"
        })(o = function(e) {
            function t() {
                a()(this, t);
                var n = s()(this, e.call(this));
                return n.key = u.a.observable(""), n.keyDom = u.a.observable(null), n.sDefaultKeyScope = h.KeyState.PopupViewOpenPGP, n
            }
            return l()(t, e), t.prototype.clearPopup = function() {
                this.key("")
            }, t.prototype.selectKey = function() {
                var e = this.keyDom();
                e && Object(f.selectElement)(e)
            }, t.prototype.onShow = function(e) {
                this.clearPopup(), e && this.key(e.armor)
            }, t.prototype.onBuild = function() {
                var e = this;
                p()("ctrl+a, command+a", h.KeyState.PopupViewOpenPGP, function() {
                    return e.selectKey(), !1
                })
            }, t
        }(b.a)) || o
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "NewOpenPgpKeyPopupView", function() {
        return R
    }), n.d(t, "default", function() {
        return R
    });
    var o, i, a, r, s, c, l, u, d, p, h = n(18),
        f = n.n(h),
        m = n(8),
        b = n.n(m),
        g = n(12),
        y = n.n(g),
        v = n(11),
        S = n.n(v),
        O = n(4),
        w = n.n(O),
        T = n(1),
        C = n(0),
        A = n(2),
        E = n(30),
        F = n(20),
        j = n(9),
        N = n(24),
        R = (o = Object(j.popup)({
            name: "View/Popup/NewOpenPgpKey",
            templateID: "PopupsNewOpenPgpKey"
        }), i = Object(j.command)(), o((r = function(e) {
            function t() {
                b()(this, t);
                var n = y()(this, e.call(this));
                return n.email = T.a.observable(""), n.email.focus = T.a.observable(""), n.email.error = T.a.observable(!1), n.name = T.a.observable(""), n.password = T.a.observable(""), n.keyBitLength = T.a.observable(C.Magics.BitLength2048), n.submitRequest = T.a.observable(!1), n.submitError = T.a.observable(""), n.email.subscribe(function() {
                    n.email.error(!1)
                }), n
            }
            return S()(t, e), t.prototype.generateOpenPgpKeyCommand = function() {
                var e = this,
                    t = {},
                    n = E.a.openpgpKeyring;
                return this.email.error("" === Object(A.trim)(this.email())), !(!n || this.email.error() || (t.email = this.email(), "" !== this.name() && (t.name = this.name()), this.submitRequest(!0), this.submitError(""), w.a.delay(function() {
                    try {
                        E.a.openpgp.generateKey({
                            userIds: [t],
                            numBits: Object(A.pInt)(e.keyBitLength()),
                            passphrase: Object(A.trim)(e.password())
                        }).then(function(t) {
                            e.submitRequest(!1), t && t.privateKeyArmored && (n.privateKeys.importKey(t.privateKeyArmored), n.publicKeys.importKey(t.publicKeyArmored), n.store(), Object(F.a)().reloadOpenPgpKeys(), Object(A.delegateRun)(e, "cancelCommand"))
                        }).catch(function(t) {
                            e.submitRequest(!1), e.showError(t)
                        })
                    } catch (t) {
                        e.submitRequest(!1), e.showError(t)
                    }
                }, C.Magics.Time100ms), 0))
            }, t.prototype.showError = function(e) {
                Object(A.log)(e), e && e.message && this.submitError(e.message)
            }, t.prototype.clearPopup = function() {
                this.name(""), this.password(""), this.email(""), this.email.error(!1), this.keyBitLength(C.Magics.BitLength2048), this.submitError("")
            }, t.prototype.onShow = function() {
                this.clearPopup()
            }, t.prototype.onShowWithDelay = function() {
                this.email.focus(!0)
            }, t
        }(N.a), s = r.prototype, c = "generateOpenPgpKeyCommand", l = [i], u = f()(r.prototype, "generateOpenPgpKeyCommand"), d = r.prototype, p = {}, Object.keys(u).forEach(function(e) {
            p[e] = u[e]
        }), p.enumerable = !!p.enumerable, p.configurable = !!p.configurable, ("value" in p || p.initializer) && (p.writable = !0), p = l.slice().reverse().reduce(function(e, t) {
            return t(s, c, e) || e
        }, p), d && void 0 !== p.initializer && (p.value = p.initializer ? p.initializer.call(d) : void 0, p.initializer = void 0), void 0 === p.initializer && (Object.defineProperty(s, c, p), p = null), a = r)) || a)
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AddOpenPgpKeyPopupView", function() {
        return F
    }), n.d(t, "default", function() {
        return F
    });
    var o, i, a, r, s, c, l, u, d, p, h = n(18),
        f = n.n(h),
        m = n(8),
        b = n.n(m),
        g = n(12),
        y = n.n(g),
        v = n(11),
        S = n.n(v),
        O = n(1),
        w = n(2),
        T = n(30),
        C = n(20),
        A = n(9),
        E = n(24),
        F = (o = Object(A.popup)({
            name: "View/Popup/AddOpenPgpKey",
            templateID: "PopupsAddOpenPgpKey"
        }), i = Object(A.command)(), o((r = function(e) {
            function t() {
                b()(this, t);
                var n = y()(this, e.call(this));
                return n.key = O.a.observable(""), n.key.focus = O.a.observable(!1), n.key.error = O.a.observable(!1), n.key.errorMessage = O.a.observable(""), n.key.subscribe(function() {
                    n.key.error(!1), n.key.errorMessage("")
                }), n
            }
            return S()(t, e), t.prototype.addOpenPgpKeyCommand = function() {
                var e = /[\-]{3,6}BEGIN[\s]PGP[\s](PRIVATE|PUBLIC)[\s]KEY[\s]BLOCK[\-]{3,6}[\s\S]+?[\-]{3,6}END[\s]PGP[\s](PRIVATE|PUBLIC)[\s]KEY[\s]BLOCK[\-]{3,6}/gi,
                    t = T.a.openpgpKeyring,
                    n = Object(w.trim)(this.key());
                if (/[\n]/.test(n) && (n = n.replace(/[\r]+/g, "").replace(/[\n]{2,}/g, "\n\n")), this.key.error("" === n), this.key.errorMessage(""), !t || this.key.error()) return !1;
                var o = null,
                    i = 30,
                    a = !1;
                do {
                    if ((o = e.exec(n)) && 0 < i) {
                        if (o[0] && o[1] && o[2] && o[1] === o[2]) {
                            var r = null;
                            "PRIVATE" === o[1] ? r = t.privateKeys.importKey(o[0]) : "PUBLIC" === o[1] && (r = t.publicKeys.importKey(o[0])), r && (this.key.error(!0), this.key.errorMessage(r && r[0] ? "" + r[0] : ""), Object(w.log)(r))
                        }
                        i -= 1, a = !1
                    } else a = !0
                } while (!a);
                return t.store(), Object(C.a)().reloadOpenPgpKeys(), !this.key.error() && (Object(w.delegateRun)(this, "cancelCommand"), !0)
            }, t.prototype.clearPopup = function() {
                this.key(""), this.key.error(!1), this.key.errorMessage("")
            }, t.prototype.onShow = function() {
                this.clearPopup()
            }, t.prototype.onShowWithDelay = function() {
                this.key.focus(!0)
            }, t
        }(E.a), s = r.prototype, c = "addOpenPgpKeyCommand", l = [i], u = f()(r.prototype, "addOpenPgpKeyCommand"), d = r.prototype, p = {}, Object.keys(u).forEach(function(e) {
            p[e] = u[e]
        }), p.enumerable = !!p.enumerable, p.configurable = !!p.configurable, ("value" in p || p.initializer) && (p.writable = !0), p = l.slice().reverse().reduce(function(e, t) {
            return t(s, c, e) || e
        }, p), d && void 0 !== p.initializer && (p.value = p.initializer ? p.initializer.call(d) : void 0, p.initializer = void 0), void 0 === p.initializer && (Object.defineProperty(s, c, p), p = null), a = r)) || a)
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "TwoFactorTestPopupView", function() {
        return F
    }), n.d(t, "default", function() {
        return F
    });
    var o, i, a, r, s, c, l, u, d, p, h = n(18),
        f = n.n(h),
        m = n(8),
        b = n.n(m),
        g = n(12),
        y = n.n(g),
        v = n(11),
        S = n.n(v),
        O = n(1),
        w = n(0),
        T = n(6),
        C = n(17),
        A = n(9),
        E = n(24),
        F = (o = Object(A.popup)({
            name: "View/Popup/TwoFactorTest",
            templateID: "PopupsTwoFactorTest"
        }), i = Object(A.command)(function(e) {
            return "" !== e.code() && !e.testing()
        }), o((r = function(e) {
            function t() {
                b()(this, t);
                var n = y()(this, e.call(this));
                return n.code = O.a.observable(""), n.code.focused = O.a.observable(!1), n.code.status = O.a.observable(null), n.koTestedTrigger = null, n.testing = O.a.observable(!1), n
            }
            return S()(t, e), t.prototype.testCodeCommand = function() {
                var e = this;
                this.testing(!0), C.a.testTwoFactor(function(t, n) {
                    e.testing(!1), e.code.status(w.StorageResultType.Success === t && n && !!n.Result), e.koTestedTrigger && e.code.status() && e.koTestedTrigger(!0)
                }, this.code())
            }, t.prototype.clearPopup = function() {
                this.code(""), this.code.focused(!1), this.code.status(null), this.testing(!1), this.koTestedTrigger = null
            }, t.prototype.onShow = function(e) {
                this.clearPopup(), this.koTestedTrigger = e
            }, t.prototype.onShowWithDelay = function() {
                T.bMobileDevice || this.code.focused(!0)
            }, t
        }(E.a), s = r.prototype, c = "testCodeCommand", l = [i], u = f()(r.prototype, "testCodeCommand"), d = r.prototype, p = {}, Object.keys(u).forEach(function(e) {
            p[e] = u[e]
        }), p.enumerable = !!p.enumerable, p.configurable = !!p.configurable, ("value" in p || p.initializer) && (p.writable = !0), p = l.slice().reverse().reduce(function(e, t) {
            return t(s, c, e) || e
        }, p), d && void 0 !== p.initializer && (p.value = p.initializer ? p.initializer.call(d) : void 0, p.initializer = void 0), void 0 === p.initializer && (Object.defineProperty(s, c, p), p = null), a = r)) || a)
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "AdvancedSearchPopupView", function() {
        return R
    }), n.d(t, "default", function() {
        return R
    });
    var o, i, a, r, s, c, l, u, d, p, h = n(18),
        f = n.n(h),
        m = n(8),
        b = n.n(m),
        g = n(12),
        y = n.n(g),
        v = n(11),
        S = n.n(v),
        O = n(4),
        w = n.n(O),
        T = n(1),
        C = n(2),
        A = n(10),
        E = n(34),
        F = n(14),
        j = n(9),
        N = n(24),
        R = (o = Object(j.popup)({
            name: "View/Popup/AdvancedSearch",
            templateID: "PopupsAdvancedSearch"
        }), i = Object(j.command)(), o((r = function(e) {
            function t() {
                b()(this, t);
                var n = y()(this, e.call(this));
                return n.fromFocus = T.a.observable(!1), n.from = T.a.observable(""), n.to = T.a.observable(""), n.subject = T.a.observable(""), n.text = T.a.observable(""), n.selectedDateValue = T.a.observable(-1), n.hasAttachment = T.a.observable(!1), n.starred = T.a.observable(!1), n.unseen = T.a.observable(!1), n.selectedDates = T.a.computed(function() {
                    return Object(A.trigger)(), [{
                        id: -1,
                        name: Object(A.i18n)("SEARCH/LABEL_ADV_DATE_ALL")
                    }, {
                        id: 3,
                        name: Object(A.i18n)("SEARCH/LABEL_ADV_DATE_3_DAYS")
                    }, {
                        id: 7,
                        name: Object(A.i18n)("SEARCH/LABEL_ADV_DATE_7_DAYS")
                    }, {
                        id: 30,
                        name: Object(A.i18n)("SEARCH/LABEL_ADV_DATE_MONTH")
                    }, {
                        id: 90,
                        name: Object(A.i18n)("SEARCH/LABEL_ADV_DATE_3_MONTHS")
                    }, {
                        id: 180,
                        name: Object(A.i18n)("SEARCH/LABEL_ADV_DATE_6_MONTHS")
                    }, {
                        id: 365,
                        name: Object(A.i18n)("SEARCH/LABEL_ADV_DATE_YEAR")
                    }]
                }), n
            }
            return S()(t, e), t.prototype.searchCommand = function() {
                var e = this.buildSearchString();
                "" !== e && F.a.mainMessageListSearch(e), this.cancelCommand()
            }, t.prototype.parseSearchStringValue = function(e) {
                var t = this,
                    n = (e || "").split(/[\s]+/g);
                w.a.each(n, function(e) {
                    switch (e) {
                        case "has:attachment":
                            t.hasAttachment(!0);
                            break;
                        case "is:unseen,flagged":
                            t.starred(!0);
                        case "is:unseen":
                            t.unseen(!0)
                    }
                })
            }, t.prototype.buildSearchStringValue = function(e) {
                return -1 < e.indexOf(" ") && (e = '"' + e + '"'), e
            }, t.prototype.buildSearchString = function() {
                var e = [],
                    t = Object(C.trim)(this.from()),
                    n = Object(C.trim)(this.to()),
                    o = Object(C.trim)(this.subject()),
                    i = Object(C.trim)(this.text()),
                    a = [],
                    r = [];
                return t && "" !== t && e.push("from:" + this.buildSearchStringValue(t)), n && "" !== n && e.push("to:" + this.buildSearchStringValue(n)), o && "" !== o && e.push("subject:" + this.buildSearchStringValue(o)), this.hasAttachment() && r.push("attachment"), this.unseen() && a.push("unseen"), this.starred() && a.push("flagged"), 0 < r.length && e.push("has:" + r.join(",")), 0 < a.length && e.push("is:" + a.join(",")), -1 < this.selectedDateValue() && e.push("date:" + Object(E.searchSubtractFormatDateHelper)(this.selectedDateValue()) + "/"), i && "" !== i && e.push("text:" + this.buildSearchStringValue(i)), Object(C.trim)(e.join(" "))
            }, t.prototype.clearPopup = function() {
                this.from(""), this.to(""), this.subject(""), this.text(""), this.selectedDateValue(-1), this.hasAttachment(!1), this.starred(!1), this.unseen(!1), this.fromFocus(!0)
            }, t.prototype.onShow = function(e) {
                this.clearPopup(), this.parseSearchStringValue(e)
            }, t.prototype.onShowWithDelay = function() {
                this.fromFocus(!0)
            }, t
        }(N.a), s = r.prototype, c = "searchCommand", l = [i], u = f()(r.prototype, "searchCommand"), d = r.prototype, p = {}, Object.keys(u).forEach(function(e) {
            p[e] = u[e]
        }), p.enumerable = !!p.enumerable, p.configurable = !!p.configurable, ("value" in p || p.initializer) && (p.writable = !0), p = l.slice().reverse().reduce(function(e, t) {
            return t(s, c, e) || e
        }, p), d && void 0 !== p.initializer && (p.value = p.initializer ? p.initializer.call(d) : void 0, p.initializer = void 0), void 0 === p.initializer && (Object.defineProperty(s, c, p), p = null), a = r)) || a)
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "FolderClearPopupView", function() {
        return R
    }), n.d(t, "default", function() {
        return R
    });
    var o, i, a, r, s, c, l, u, d, p, h = n(18),
        f = n.n(h),
        m = n(8),
        b = n.n(m),
        g = n(12),
        y = n.n(g),
        v = n(11),
        S = n.n(v),
        O = n(1),
        w = n(0),
        T = n(10),
        C = n(15),
        A = n(14),
        E = n(17),
        F = n(20),
        j = n(9),
        N = n(24),
        R = (o = Object(j.popup)({
            name: "View/Popup/FolderClear",
            templateID: "PopupsFolderClear"
        }), i = Object(j.command)(function(e) {
            var t = e.selectedFolder();
            return !e.clearingProcess() && null !== t
        }), o((r = function(e) {
            function t() {
                b()(this, t);
                var n = y()(this, e.call(this));
                return n.selectedFolder = O.a.observable(null), n.clearingProcess = O.a.observable(!1), n.clearingError = O.a.observable(""), n.folderFullNameForClear = O.a.computed(function() {
                    var e = n.selectedFolder();
                    return e ? e.printableFullName() : ""
                }), n.folderNameForClear = O.a.computed(function() {
                    var e = n.selectedFolder();
                    return e ? e.localName() : ""
                }), n.dangerDescHtml = O.a.computed(function() {
                    return Object(T.i18n)("POPUPS_CLEAR_FOLDER/DANGER_DESC_HTML_1", {
                        FOLDER: n.folderNameForClear()
                    })
                }), n
            }
            return S()(t, e), t.prototype.clearCommand = function() {
                var e = this,
                    t = this.selectedFolder();
                t && (A.a.message(null), A.a.messageList([]), this.clearingProcess(!0), t.messageCountAll(0), t.messageCountUnread(0), Object(C.q)(t.fullNameRaw, ""), E.a.folderClear(function(t, n) {
                    e.clearingProcess(!1), w.StorageResultType.Success === t && n && n.Result ? (Object(F.a)().reloadMessageList(!0), e.cancelCommand()) : n && n.ErrorCode ? e.clearingError(Object(T.getNotification)(n.ErrorCode)) : e.clearingError(Object(T.getNotification)(w.Notification.MailServerError))
                }, t.fullNameRaw))
            }, t.prototype.clearPopup = function() {
                this.clearingProcess(!1), this.selectedFolder(null)
            }, t.prototype.onShow = function(e) {
                this.clearPopup(), e && this.selectedFolder(e)
            }, t
        }(N.a), s = r.prototype, c = "clearCommand", l = [i], u = f()(r.prototype, "clearCommand"), d = r.prototype, p = {}, Object.keys(u).forEach(function(e) {
            p[e] = u[e]
        }), p.enumerable = !!p.enumerable, p.configurable = !!p.configurable, ("value" in p || p.initializer) && (p.writable = !0), p = l.slice().reverse().reduce(function(e, t) {
            return t(s, c, e) || e
        }, p), d && void 0 !== p.initializer && (p.value = p.initializer ? p.initializer.call(d) : void 0, p.initializer = void 0), void 0 === p.initializer && (Object.defineProperty(s, c, p), p = null), a = r)) || a)
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o, i) {
        var a = {};
        return Object.keys(o).forEach(function(e) {
            a[e] = o[e]
        }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function(n, o) {
            return o(e, t, n) || n
        }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(e, t, a), a = null), a
    }
    n.r(t), n.d(t, "ComposeOpenPgpPopupView", function() {
        return P
    }), n.d(t, "default", function() {
        return P
    });
    var i, a, r, s, c, l, u, d = n(18),
        p = n.n(d),
        h = n(8),
        f = n.n(h),
        m = n(12),
        b = n.n(m),
        g = n(11),
        y = n.n(g),
        v = n(4),
        S = n.n(v),
        O = n(7),
        w = n.n(O),
        T = n(1),
        C = n(19),
        A = n.n(C),
        E = n(2),
        F = n(0),
        j = n(10),
        N = n(30),
        R = n(44),
        I = n(9),
        L = n(24),
        _ = -8,
        P = (i = Object(I.popup)({
            name: "View/Popup/ComposeOpenPgp",
            templateID: "PopupsComposeOpenPgp"
        }), a = Object(I.command)(function(e) {
            return !e.submitRequest() && (e.sign() || e.encrypt())
        }), r = Object(I.command)(), s = Object(I.command)(), c = Object(I.command)(), i((o((u = function(e) {
            function t() {
                f()(this, t);
                var n = b()(this, e.call(this));
                return n.publicKeysOptionsCaption = Object(j.i18n)("PGP_NOTIFICATIONS/ADD_A_PUBLICK_KEY"), n.privateKeysOptionsCaption = Object(j.i18n)("PGP_NOTIFICATIONS/SELECT_A_PRIVATE_KEY"), n.notification = T.a.observable(""), n.sign = T.a.observable(!1), n.encrypt = T.a.observable(!1), n.password = T.a.observable(""), n.password.focus = T.a.observable(!1), n.buttonFocus = T.a.observable(!1), n.text = T.a.observable(""), n.selectedPrivateKey = T.a.observable(null), n.selectedPublicKey = T.a.observable(null), n.signKey = T.a.observable(null), n.encryptKeys = T.a.observableArray([]), n.encryptKeysView = T.a.computed(function() {
                    return S.a.compact(S.a.map(n.encryptKeys(), function(e) {
                        return e ? e.key : null
                    }))
                }), n.privateKeysOptions = T.a.computed(function() {
                    var e = S.a.map(N.a.openpgpkeysPrivate(), function(e, t) {
                        return n.signKey() && n.signKey().key.id === e.id ? null : S.a.map(e.users, function(n) {
                            return {
                                id: e.guid,
                                name: "(" + e.id.substr(_).toUpperCase() + ") " + n,
                                key: e,
                                class: t % 2 ? "odd" : "even"
                            }
                        })
                    });
                    return S.a.compact(S.a.flatten(e, !0))
                }), n.publicKeysOptions = T.a.computed(function() {
                    var e = S.a.map(N.a.openpgpkeysPublic(), function(e, t) {
                        return -1 < Object(E.inArray)(e, n.encryptKeysView()) ? null : S.a.map(e.users, function(n) {
                            return {
                                id: e.guid,
                                name: "(" + e.id.substr(_).toUpperCase() + ") " + n,
                                key: e,
                                class: t % 2 ? "odd" : "even"
                            }
                        })
                    });
                    return S.a.compact(S.a.flatten(e, !0))
                }), n.submitRequest = T.a.observable(!1), n.resultCallback = null, n.selectedPrivateKey.subscribe(function(e) {
                    e && (n.selectCommand(), n.updateCommand())
                }), n.selectedPublicKey.subscribe(function(e) {
                    e && n.addCommand()
                }), n.sDefaultKeyScope = F.KeyState.PopupComposeOpenPGP, n.defautOptionsAfterRender = E.defautOptionsAfterRender, n.addOptionClass = function(e, t) {
                    n.defautOptionsAfterRender(e, t), t && !Object(E.isUnd)(t.class) && e && w()(e).addClass(t.class)
                }, n.deletePublickKey = S.a.bind(n.deletePublickKey, n), n
            }
            return y()(t, e), t.prototype.doCommand = function() {
                var e = this,
                    t = !0,
                    n = null,
                    o = [];
                if (this.submitRequest(!0), t && this.sign() && (this.signKey() ? this.signKey().key || (this.notification(Object(j.i18n)("PGP_NOTIFICATIONS/NO_PRIVATE_KEY_FOUND_FOR", {
                        EMAIL: this.signKey().email
                    })), t = !1) : (this.notification(Object(j.i18n)("PGP_NOTIFICATIONS/NO_PRIVATE_KEY_FOUND")), t = !1), t)) {
                    var i = this.signKey().key.getNativeKeys();
                    n = i[0] || null;
                    try {
                        n && n.decrypt(Object(E.pString)(this.password()))
                    } catch (e) {
                        n = null
                    }
                    n || (this.notification(Object(j.i18n)("PGP_NOTIFICATIONS/NO_PRIVATE_KEY_FOUND")), t = !1)
                }
                return t && this.encrypt() && (0 === this.encryptKeys().length ? (this.notification(Object(j.i18n)("PGP_NOTIFICATIONS/NO_PUBLIC_KEYS_FOUND")), t = !1) : this.encryptKeys() && (o = [], S.a.each(this.encryptKeys(), function(n) {
                    n && n.key ? o = o.concat(S.a.compact(S.a.flatten(n.key.getNativeKeys()))) : n && n.email && (e.notification(Object(j.i18n)("PGP_NOTIFICATIONS/NO_PUBLIC_KEYS_FOUND_FOR", {
                        EMAIL: n.email
                    })), t = !1)
                }), !t || 0 !== o.length && this.encryptKeys().length === o.length || (t = !1))), t && this.resultCallback ? S.a.delay(function() {
                    var t = null;
                    try {
                        n && 0 === o.length ? t = N.a.openpgp.sign({
                            data: e.text(),
                            privateKeys: [n]
                        }) : n && 0 < o.length ? t = N.a.openpgp.encrypt({
                            data: e.text(),
                            publicKeys: o,
                            privateKeys: [n]
                        }) : !n && 0 < o.length && (t = N.a.openpgp.encrypt({
                            data: e.text(),
                            publicKeys: o
                        }))
                    } catch (t) {
                        Object(E.log)(t), e.notification(Object(j.i18n)("PGP_NOTIFICATIONS/PGP_ERROR", {
                            ERROR: "" + t
                        }))
                    }
                    if (t) try {
                        t.then(function(t) {
                            e.resultCallback(t.data), e.cancelCommand()
                        }).catch(function(t) {
                            e.notification(Object(j.i18n)("PGP_NOTIFICATIONS/PGP_ERROR", {
                                ERROR: "" + t
                            }))
                        })
                    } catch (t) {
                        e.notification(Object(j.i18n)("PGP_NOTIFICATIONS/PGP_ERROR", {
                            ERROR: "" + t
                        }))
                    }
                    e.submitRequest(!1)
                }, F.Magics.Time20ms) : this.submitRequest(!1), t
            }, t.prototype.selectCommand = function() {
                var e = this.selectedPrivateKey(),
                    t = e ? S.a.find(this.privateKeysOptions(), function(t) {
                        return t && e === t.id
                    }) : null;
                t && this.signKey({
                    empty: !t.key,
                    selected: T.a.observable(!!t.key),
                    users: t.key.users,
                    hash: t.key.id.substr(_).toUpperCase(),
                    key: t.key
                })
            }, t.prototype.addCommand = function() {
                var e = this.selectedPublicKey(),
                    t = this.encryptKeys(),
                    n = e ? S.a.find(this.publicKeysOptions(), function(t) {
                        return t && e === t.id
                    }) : null;
                n && (t.push({
                    empty: !n.key,
                    selected: T.a.observable(!!n.key),
                    removable: T.a.observable(!this.sign() || !this.signKey() || this.signKey().key.id !== n.key.id),
                    users: n.key.users,
                    hash: n.key.id.substr(_).toUpperCase(),
                    key: n.key
                }), this.encryptKeys(t))
            }, t.prototype.updateCommand = function() {
                var e = this;
                S.a.each(this.encryptKeys(), function(t) {
                    t.removable(!e.sign() || !e.signKey() || e.signKey().key.id !== t.key.id)
                })
            }, t.prototype.deletePublickKey = function(e) {
                this.encryptKeys.remove(e)
            }, t.prototype.clearPopup = function() {
                this.notification(""), this.sign(!1), this.encrypt(!1), this.password(""), this.password.focus(!1), this.buttonFocus(!1), this.signKey(null), this.encryptKeys([]), this.text(""), this.resultCallback = null
            }, t.prototype.onBuild = function() {
                var e = this;
                A()("tab,shift+tab", F.KeyState.PopupComposeOpenPGP, function() {
                    switch (!0) {
                        case e.password.focus():
                            e.buttonFocus(!0);
                            break;
                        case e.buttonFocus():
                            e.password.focus(!0)
                    }
                    return !1
                })
            }, t.prototype.onHideWithDelay = function() {
                this.clearPopup()
            }, t.prototype.onShowWithDelay = function() {
                this.sign() ? this.password.focus(!0) : this.buttonFocus(!0)
            }, t.prototype.onShow = function(e, t, n, o, i, a) {
                var r = this;
                this.clearPopup();
                var s = [],
                    c = "",
                    l = new R.EmailModel;
                if (this.resultCallback = e, "" !== o && s.push(o), "" !== i && s.push(i), "" !== a && s.push(a), s = s.join(", ").split(","), s = S.a.compact(S.a.map(s, function(e) {
                        return l.clear(), l.parse(Object(E.trim)(e)), "" !== l.email && l.email
                    })), n && n.email()) {
                    c = n.email(), s.unshift(c);
                    var u = N.a.findAllPrivateKeysByEmailNotNative(c);
                    u && u[0] && this.signKey({
                        users: u[0].users || [c],
                        hash: u[0].id.substr(_).toUpperCase(),
                        key: u[0]
                    })
                }
                this.signKey() && this.sign(!0), s && 0 < s.length && (this.encryptKeys(S.a.uniq(S.a.compact(S.a.flatten(S.a.map(s, function(e) {
                    var t = N.a.findAllPublicKeysByEmailNotNative(e);
                    return t ? S.a.map(t, function(t) {
                        return {
                            empty: !t,
                            selected: T.a.observable(!!t),
                            removable: T.a.observable(!r.sign() || !r.signKey() || r.signKey().key.id !== t.id),
                            users: t && t.users || [e],
                            hash: t ? t.id.substr(_).toUpperCase() : "",
                            key: t
                        }
                    }) : []
                }), !0)), function(e) {
                    return e.hash
                })), 0 < this.encryptKeys().length && this.encrypt(!0)), this.text(t)
            }, t
        }(L.a)).prototype, "doCommand", [a], p()(u.prototype, "doCommand"), u.prototype), o(u.prototype, "selectCommand", [r], p()(u.prototype, "selectCommand"), u.prototype), o(u.prototype, "addCommand", [s], p()(u.prototype, "addCommand"), u.prototype), o(u.prototype, "updateCommand", [c], p()(u.prototype, "updateCommand"), u.prototype), l = u)) || l)
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "MessageOpenPgpPopupView", function() {
        return L
    }), n.d(t, "default", function() {
        return L
    });
    var o, i, a, r, s, c, l, u, d, p, h = n(18),
        f = n.n(h),
        m = n(8),
        b = n.n(m),
        g = n(12),
        y = n.n(g),
        v = n(11),
        S = n.n(v),
        O = n(4),
        w = n.n(O),
        T = n(1),
        C = n(19),
        A = n.n(C),
        E = n(7),
        F = n.n(E),
        j = n(2),
        N = n(0),
        R = n(9),
        I = n(24),
        L = (o = Object(R.popup)({
            name: "View/Popup/MessageOpenPgp",
            templateID: "PopupsMessageOpenPgp"
        }), i = Object(R.command)(function(e) {
            return !e.submitRequest()
        }), o((r = function(e) {
            function t() {
                b()(this, t);
                var n = y()(this, e.call(this));
                return n.notification = T.a.observable(""), n.selectedKey = T.a.observable(null), n.privateKeys = T.a.observableArray([]), n.password = T.a.observable(""), n.password.focus = T.a.observable(!1), n.buttonFocus = T.a.observable(!1), n.resultCallback = null, n.submitRequest = T.a.observable(!1), n.sDefaultKeyScope = N.KeyState.PopupMessageOpenPGP, n
            }
            return S()(t, e), t.prototype.doCommand = function() {
                var e = this;
                this.submitRequest(!0), w.a.delay(function() {
                    var t = null;
                    try {
                        if (e.resultCallback && e.selectedKey()) {
                            var n = e.selectedKey().getNativeKeys();
                            if (t = n && n[0] ? n[0] : null) try {
                                t.decrypt(Object(j.pString)(e.password())) || (Object(j.log)("Error: Private key cannot be decrypted"), t = null)
                            } catch (e) {
                                Object(j.log)(e), t = null
                            } else Object(j.log)("Error: Private key cannot be found")
                        }
                    } catch (e) {
                        Object(j.log)(e), t = null
                    }
                    e.submitRequest(!1), e.cancelCommand(), e.resultCallback(t)
                }, N.Magics.Time100ms)
            }, t.prototype.clearPopup = function() {
                this.notification(""), this.password(""), this.password.focus(!1), this.buttonFocus(!1), this.selectedKey(!1), this.submitRequest(!1), this.resultCallback = null, this.privateKeys([])
            }, t.prototype.onBuild = function(e) {
                var t = this;
                A()("tab,shift+tab", N.KeyState.PopupMessageOpenPGP, function() {
                    switch (!0) {
                        case t.password.focus():
                            t.buttonFocus(!0);
                            break;
                        case t.buttonFocus():
                            t.password.focus(!0)
                    }
                    return !1
                });
                var n = this;
                e.on("click", ".key-list__item", function() {
                    e.find(".key-list__item .key-list__item__radio").addClass("icon-radio-unchecked").removeClass("icon-radio-checked"), F()(this).find(".key-list__item__radio").removeClass("icon-radio-unchecked").addClass("icon-radio-checked"), n.selectedKey(T.a.dataFor(this)), n.password.focus(!0)
                })
            }, t.prototype.onHideWithDelay = function() {
                this.clearPopup()
            }, t.prototype.onShowWithDelay = function() {
                this.password.focus(!0)
            }, t.prototype.onShow = function(e, t) {
                this.clearPopup(), this.resultCallback = e, this.privateKeys(t), this.viewModelDom && this.viewModelDom.find(".key-list__item").first().click()
            }, t
        }(I.a), s = r.prototype, c = "doCommand", l = [i], u = f()(r.prototype, "doCommand"), d = r.prototype, p = {}, Object.keys(u).forEach(function(e) {
            p[e] = u[e]
        }), p.enumerable = !!p.enumerable, p.configurable = !!p.configurable, ("value" in p || p.initializer) && (p.writable = !0), p = l.slice().reverse().reduce(function(e, t) {
            return t(s, c, e) || e
        }, p), d && void 0 !== p.initializer && (p.value = p.initializer ? p.initializer.call(d) : void 0, p.initializer = void 0), void 0 === p.initializer && (Object.defineProperty(s, c, p), p = null), a = r)) || a)
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(117),
        i = n(173);
    Object(o.a)(i.default)
}]);