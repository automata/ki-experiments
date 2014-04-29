_ki = {
    init: function (self$1311, ns_name$1312) {
        if (_ki.namespaces[ns_name$1312] === undefined) {
            _ki.namespaces[ns_name$1312] = { vars: {} };
        }
        self$1311._ki_ns_name = ns_name$1312;
        self$1311._ki_ns_ctx = self$1311;
        _ki.intern.bind(self$1311)(_ki.modules.core);
        _ki.intern.bind(self$1311)(_ki.modules.mori);
        _ki.intern.bind(self$1311)(_ki.modules);
        _ki.intern.bind(self$1311)(_ki.namespaces[_ki_ns_name].vars);
    },
    intern: function (obj$1313) {
        for (var e$1314 in obj$1313) {
            this[e$1314] = obj$1313[e$1314];
        }
    },
    namespaces: {},
    modules: {
        core: {
            truthy: function (v$1315) {
                return v$1315 === false || v$1315 == null ? false : true;
            }
        },
        mori: function () {
            try {
                return require('ki/node_modules/mori');
            } catch (e$1316) {
                try {
                    return require('mori');
                } catch (e$1317) {
                    return mori;
                }
            }
        }()
    }
};
(function () {
    _ki.init(this, '_ki');
    return function () {
        _ki_ns_ctx['GetContext'] = function (canvas$1325) {
            return canvas$1325.getContext('2d');
        };
        _ki.namespaces[_ki_ns_name].vars.GetContext = _ki_ns_ctx['GetContext'];
    }();
}());
(function () {
    _ki.init(this, '_ki');
    return function () {
        _ki_ns_ctx['GetCanvas'] = function (id$1343) {
            return document.getElementById(id$1343);
        };
        _ki.namespaces[_ki_ns_name].vars.GetCanvas = _ki_ns_ctx['GetCanvas'];
    }();
}());
(function () {
    _ki.init(this, '_ki');
    return function () {
        _ki_ns_ctx['BeginPath'] = function (ctx$1361) {
            return function () {
                ctx$1361.beginPath();
                return ctx$1361;
            }.bind(this)();
        };
        _ki.namespaces[_ki_ns_name].vars.BeginPath = _ki_ns_ctx['BeginPath'];
    }();
}());
(function () {
    _ki.init(this, '_ki');
    return function () {
        _ki_ns_ctx['Fill'] = function (ctx$1375) {
            return function () {
                ctx$1375.fill();
                return ctx$1375;
            }.bind(this)();
        };
        _ki.namespaces[_ki_ns_name].vars.Fill = _ki_ns_ctx['Fill'];
    }();
}());
(function () {
    _ki.init(this, '_ki');
    return function () {
        _ki_ns_ctx['FillStyle'] = function (ctx$1389, color$1390) {
            ctx$1389.fillStyle = color$1390;
            return ctx$1389;
        };
        _ki.namespaces[_ki_ns_name].vars.FillStyle = _ki_ns_ctx['FillStyle'];
    }();
}());
(function () {
    _ki.init(this, '_ki');
    return function () {
        _ki_ns_ctx['MoveTo'] = function (ctx$1403, x$1404, y$1405) {
            return function () {
                ctx$1403.moveTo(x$1404, y$1405);
                return ctx$1403;
            }.bind(this)();
        };
        _ki.namespaces[_ki_ns_name].vars.MoveTo = _ki_ns_ctx['MoveTo'];
    }();
}());
(function () {
    _ki.init(this, '_ki');
    return function () {
        _ki_ns_ctx['LineTo'] = function (ctx$1422, x$1423, y$1424) {
            return function () {
                ctx$1422.lineTo(x$1423, y$1424);
                return ctx$1422;
            }.bind(this)();
        };
        _ki.namespaces[_ki_ns_name].vars.LineTo = _ki_ns_ctx['LineTo'];
    }();
}());
(function () {
    _ki.init(this, '_ki');
    return function () {
        _ki_ns_ctx['FillRect'] = function (ctx$1441, x$1442, y$1443, w$1444, h$1445) {
            return function () {
                ctx$1441.fillRect(x$1442, y$1443, w$1444, h$1445);
                return ctx$1441;
            }.bind(this)();
        };
        _ki.namespaces[_ki_ns_name].vars.FillRect = _ki_ns_ctx['FillRect'];
    }();
}());
// Side-effects in da sky
(function () {
    _ki.init(this, '_ki');
    return function () {
        return function (ctx$1484) {
            return function () {
                FillStyle(ctx$1484, '#0000ff');
                FillRect(ctx$1484, 0, 0, 200, 200);
                FillStyle(ctx$1484, '#fff');
                return function () {
                    var res$1529 = {};
                    do {
                        res$1529 = function () {
                            return function (i$1535) {
                                FillRect(ctx$1484, i$1535 * 20, Math.random() * 100, 10, 10);
                                return function () {
                                    if (function (v$1615) {
                                            return v$1615 === false || v$1615 == null ? false : true;
                                        }.bind(this)(i$1535 >= 0)) {
                                        return {
                                            _ki_recur: true,
                                            _ki_vals: [dec(i$1535)]
                                        };
                                    }
                                    return;
                                }.bind(this)();
                            }(res$1529._ki_vals === undefined ? 10 : res$1529._ki_vals[0]);
                            ;
                        }();
                    } while ((res$1529 || 0)._ki_recur);
                    return res$1529;
                }.bind(this)();
            }.bind(this)();
        }.bind(this)(GetContext(GetCanvas('the-canvas')));
    }.bind(this)();
}());
// No side-effects in da house
(function () {
    _ki.init(this, '_ki');
    return Fill(LineTo(LineTo(MoveTo(BeginPath(GetContext(GetCanvas('the-canvas'))), 40, 100), 160, 100), 100, 50));
}());
(function () {
    _ki.init(this, '_ki');
    return FillRect(GetContext(GetCanvas('the-canvas')), 50, 100, 100, 50);
}());