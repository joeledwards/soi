var stopwatch = require('../mods/stopwatch');

describe("stopwatch() : for taking cumulative timings in milliseconds", function() {
    it("should return an accurate timing", function(done) {
        var timeout = 5;
        var watch = stopwatch().start();
        var start = Date.now();

        setTimeout(function() {
            var end = Date.now();
            watch.stop();

            expect(watch.elapsed() >= (end - start));
            expect(watch.elapsed() >= timeout);

            watch.reset();

            expect(watch.elapsed() === 0);

            done();
        }, timeout);
    });

    it("should report zero if it was never started", function(done) {
        var timeout = 5;
        var watch = stopwatch();

        setTimeout(function() {
            expect(watch.elapsed() === 0);

            done();
        }, timeout);
    });
});
