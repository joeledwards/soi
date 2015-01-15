var Stopwatch = function() {
    this.total = 0;
    this.started = 0;
    this.running = false;

    this.start = function () {
        if (!this.running) {
            this.started = Date.now();
            this.running = true;
        }

        return this;
    };

    this.stop = function () {
        if (this.running) {
            this.running = false;
            this.total += Date.now() - this.started;
        }

        return this;
    };

    this.reset = function() {
        this.running = false;
        this.started = 0;
        this.total = 0;

        return this;
    };

    this.elapsed = function () {
        return this.total + (this.running ? (Date.now() - this.started) : 0);
    };

    this.milliseconds = function() {
        return this.elapsed();
    };

    this.seconds = function() {
        return this.elapsed() / 1000;
    };

    this.format = function() {
        return this.seconds().toFixed(3) + " s";
    };
};

// Returns a Stopwatch() which provides chainable control methods 
// for performing cumulative timings in milliseconds.
module.exports = function() {
    return new Stopwatch();
};
