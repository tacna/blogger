window.main_js = function() {
    function t(e) {
        var t = $('[data-l10n="' + e + '"]').html();
        if (void 0 === t || "" == t) return e;
        if (void 0 !== arguments && arguments.length > 1) {
            var a = t.split("$$");
            t = "";
            for (var i = 0; i < a.length; i++) a[i] && !isNaN(a[i]) && void 0 !== arguments[Number(a[i])] ? t += arguments[Number(a[i])] : (i > 0 && (!a[i] || isNaN(a[i - 1]) || void 0 === arguments[Number(a[i - 1])]) && (t += "$$"), t += a[i])
        }
        return t
    }
    const a = ' loading="lazy" decoding="async"';
    let i = 0;

    function n(e, t) {
        let a = "_sneeit_" + i++;
        window[a] = t, e.includes("://") || (e = location.protocol + location.hostname + e);
        const n = new URL(e);
        n.searchParams.set("alt", "json-in-script"), n.searchParams.set("callback", a), e = n.toString();
        var r = document.createElement("script");
        r.type = "text/javascript", r.src = e, r.async = !0, document.head.appendChild(r)
    }
    $.fn.andSelf = function() {
        return this.addBack.apply(this, arguments)
    }, $(document).find('i[class*="fa"]').each((function() {
        let e = $(this).attr("class");
        e = e.split(" ").map((e => (e = e.replace("fa", "gi")).replace("gice", "face"))), $(this).attr("class", e.join(" "))
    })), $(".is-firefox").length && $(".is-firefox").css("display");
    var r = '<div class="clear"></div>',
        s = "##",
        o = {
            '&lt;(")': "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABC1BMVEUAAAAlKjUkKjQRExkKCw8jJzMLDBAKDA8CAgNXQEENDhIcICoRFBoDBAYFBwhETGQ/R10GBwnoiTLlhzHWcSICAgQRExgkKjQhJTEOEBUAAAAAAAAAAAERExk+RVxAR15ASF8oLToQEhYCAwUxMjX1mDixYyDigi6ympPM0Nrcdybigi7phCw9RFs+RVv5+frw8fT09ffg4efp6u73+Pk2PFDQ0tnk5uwqLz4aHCPt7fDHydHb3eQSFBrV1+CQlKDY2uK3ucC/wcs6PkmenqXTdyarrrceIS1FSFExNkhRVGJgYWVfY3MzNkHqiTDcn3bTlmwxMjd5e4AoHhfg19aFiJByTze2aCqrck7A24KcAAAAL3RSTlMADQQe/vxXSuAw7L6Z88qkdLshzZTpd2XqFZkpPYWz/OWq8tPjcdo7yqKz79Xo6JD70PIAAAG5SURBVHjaZdLTohtBAIDhzCI2jy21HawtRTp+/yfpxPpvv91xah1IF454/qiQBqmDjou80qUpfPF435iiqojzFLXI7GGm5AeuLYq2G/ilzB6eqC6GWq9HIHbVk10D5b430GEyJPrA65fBDrLZd6+nSx8frt7z3rPsHvYNSxuH4USzjP4enramukwojomsT1unO3hWMiND/pxMPmUjMktn2wbOOTWwHExzrEDlzsHWjBe8mXiWsUAvUfkLdmWgIqqKbWCZ0GTDsRVVrIAlVi/jeGARDSKEINRkaRDHl9WF5a4Uk7cJRMI8pMk2bypXuZkxFdE0hy61f/OougpnihWGYu5PzJm+DqktQlAfclz8N0exqnC1vC9tUICSn69xCp2VuTbLmRmizZ/SsJUpm9dMChRuMmx2qmtbc3p8ls3cFECKaXcYUFMjGaLVj3Kk1gDT6SwfRJv7wgQK8/8gwV9ce/vGbhOJKqJRk5LbnTtL523HkImmzY8vn942qneR5RgYG44V3e1Z/f7hO9Almh58P9zXt+2xMRqFP79Pz89Pvz/haNR43P6x2Xh5fWvm6GE2315fGs3Fr/8BSVtcP+HbYZkAAAAASUVORK5CYII=",
            ":putnam:": "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAhFBMVEVHcEwuUpswVaApS5AqTJAsT5YrT5YlRogmR4ovVaA+Z7gpTJEmR4onSIopTJEuUZg/aLlGb8FCarwqTZMwVaA5YbEsT5dSe81BartPeco2Xq0zWaZHcMIzWqhOd8hLdMY9ZrhJcsVBar1Ufc9Od8k6Y7Q0XKs3X68yWKVGb8JEbcBReszJRRq9AAAAIHRSTlMANeqbH1P3BxL+cj9lecMqSNKNg9Hjtvim6sebvfLx6S8tq2wAAAEKSURBVHjajc4FwqYgEIDhMQe7u7vuf7+FL5F/67F9FYD/QTzf91BVEcWCfhgUWVbkYWDmqpDqdnorLhN4Jk2ckG9Sd2uDxsdwvngB4Rqp56eLblRrctEc5ruAW24wCA7/G8cfkRu3PwRnyMVTlOMnJqPgTCSgEKiqH0UlrVhpNFpJ/0NJwFoSVqNNbIuCUG2ygwBEWZe7koDnRh4wJJI3Lm37S4CogFIEjBav20dsS2w8O212eFBTvlrsjSLvLDKSvH40GgAiqHb6ih4XY0KfFY0AvqKzP+i6YRhsHZgarvaKlrwzsm3Zjk2A0gzdgSfFYM1Q4IO4DsKT5LLxdAu+VPzeOq6uKwh3vwBP1DVnDxxxogAAAABJRU55hZ...
