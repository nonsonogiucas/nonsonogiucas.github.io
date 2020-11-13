jQuery(function ($) {
    var $app = $("#app");
    var app = {
        timers: [],
        _renderInterval: 0,
        run: function () {
            app._renderInterval = setInterval(function () {
                for (var i in app.timers) {
                    app.timers[i].update();
                }
            }, 50);
        },
        stop: function () {
            for (var i in app.timers) {
                app.timers[i].pause();
            }
            clearInterval(app._renderInterval);
        }
    };
    window.TimeMe = app;
    var myTimer = makeTimer(0);
    myTimer.render();

    app.run();


    function makeTimer(duration) {
        var timer = {
            duration: duration,
            completion: 0,
            state: 0,
            updatedAt: 0,
            alertLastMs: 5*60*1000,
            $container: $("#templates #tpl-timer").clone(),
            setDuration: function (d) {
                this.duration = d;
                this.completion = Math.min(this.completion, d);
            },
            start: function (reverse) {
                this.state = reverse ? -1 : 1;
                this.updatedAt = Date.now();
            },
            pause: function () {
                this.state = 0;
            },
            stop: function () {
                this.pause();
                this.completion = 0;
            },
            update: function (skipRendering) {
                var now = Date.now();
                this.completion += this.state * (now - this.updatedAt);
                this.updatedAt = now;
                if (this.completion < 0) {
                    this.completion = 0;
                    this.pause();
                }
                if (this.completion >= this.duration) {
                    this.completion = this.duration;
                    this.pause();
                }
                if (skipRendering !== true) {
                    this.render();
                }

                if(this.state == 0) {
                    this.$playButton.show();
                    this.$reverseButton.show();
                    this.$pauseButton.hide();
                } else {
                    this.$playButton.hide();
                    this.$reverseButton.hide();
                    this.$pauseButton.show();
                }
                if(this.completion == 0) {
                    this.$stopButton.hide();
                } else {
                    this.$stopButton.show();
                }
            },
            init: function (duration) {
                this.$duration = this.$container.find(".duration");
                this.$completion = this.$container.find(".completion");
                this.$gauge = this.$container.find(".time-gauge-bar");
                this.$playButton = this.$container.find(".controls button.start");
                this.$reverseButton = this.$container.find(".controls button.reverse-start");
                this.$pauseButton = this.$container.find(".controls button.pause");
                this.$stopButton = this.$container.find(".controls button.stop");
                var t = this;
                this.$playButton.on('click', function () {
                    t.start();
                });
                this.$reverseButton.on('click', function () {
                    t.start(true);
                });
                this.$pauseButton.on('click', function () {
                    t.pause();
                });
                this.$stopButton.on('click', function () {
                    t.stop();
                });
                var $addDurationContainer = this.$container.find(".duration-add-controls");
                var $subDurationContainer = this.$container.find(".duration-sub-controls");
                var subValues = ["-10", "-5", "-1"];
                var addValues = ["+1", "+5", "+10"];
                for (var i in subValues) {
                    var $subButton = $('<button class="duration-button">'
                        + subValues[i]
                        + '</button>');
                    $subDurationContainer.append($subButton);
                }
                for (var i in addValues) {
                    var $addButton = $('<button class="duration-button">'
                        + addValues[i]
                        + '</button>');
                    $addDurationContainer.append($addButton);
                }
                this.$container.find(".duration-button").on('click', function (e) {
                    var addMinutes = parseInt($(e.target).text());
                    var newDuration = Math.max(0, t.duration + addMinutes * 60 * 1000);
                    if (newDuration == 0) {
                        t.stop();
                        t.update();
                    }
                    t.setDuration(newDuration);

                });
            },
            render: function () {
                this.$duration.text(this.renderTimeString(this.duration));
                this.$completion.text(this.renderTimeString(this.completion));
                var c = Math.round(10000 * this.completion / this.duration) / 100;
                this.$gauge.css("width", c + "%");
                var alert = 0;
                if(this.duration <= this.alertLastMs) {
                    alert = c/100;
                } else if(this.duration - this.completion <= this.alertLastMs) {
                    alert = (this.completion - (this.duration - this.alertLastMs)) / this.alertLastMs;
                }

                this.$gauge.css("background-color", "rgb(" + interpolateRGB(
                    [0, 255, 0],
                    [255, 0, 0],
                    alert
                ).join(",") + ")");
            },
            renderTimeString: function (time) {
                var d = new Date(time);
                return [
                    strPadLeft(d.getHours() - 1 + "", "0", 2),
                    strPadLeft(d.getMinutes() + "", "0", 2),
                    strPadLeft(d.getSeconds() + "", "0", 2)
                ].join(":");
            }
        };

        timer.init();
        app.timers.push(timer);
        timer.$container.appendTo($app);
        return timer;
    }


    function strPadLeft(s, p, l) {
        return Array(l - s.length + 1).join(p) + s;
    }

    function interpolateRGB(color1, color2, factor) {
        if (arguments.length < 3) { factor = 0.5; }
        var result = color1.slice();
        for (var i = 0; i < 3; i++) {
            result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
        }
        return result;
    };
});