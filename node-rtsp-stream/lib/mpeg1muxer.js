// Generated by CoffeeScript 1.8.0
(function () {
  var Mpeg1Muxer, child_process, events, util, timer;

  count = 0;

  child_process = require('child_process');

  util = require('util');

  events = require('events');

  Mpeg1Muxer = function (options) {
    var self;
    self = this;

    this.url = options.streamUrl;
    var args = ["-rtsp_transport", "tcp", "-i", this.url, '-f', 'mpeg1video', '-b:v', options.kbs, '-an', '-r', options.fps, '-'];
    // var args = ('-rtsp_transport tcp -i ' + this.url + ' -f mpeg1video -b:v 100k -an -r 24 -').split(' ');

//     var now = new Date();

//     if (now.getUTCHours() >= 17 || now.getUTCHours() < 3) {
//       console.log('Don\'t start ffmpeg');
//     } else {
//       this.stream = child_process.spawn("ffmpeg", args, {
//         detached: false
//       });
//       this.inputStreamStarted = true;
//       this.stream.stdout.on('data', function (data) {
//         self.emit('mpeg1data', data);
//       });
//       this.stream.stderr.on('data', function (data) {
//         // console.log('ERROR');
//         // console.log(data);
//         self.emit('ffmpegError', data);
//       });
//       return this;
//     }
    
    this.stream = child_process.spawn("ffmpeg", args, {
        detached: false
      });
    this.inputStreamStarted = true;
    this.stream.stdout.on('data', function (data) {
      self.emit('mpeg1data', data);
    });
    this.stream.stderr.on('data', function (data) {
      // console.log('ERROR');
      // console.log(data);
      self.emit('ffmpegError', data);
    });
    return this;
    
    
    
  };

  util.inherits(Mpeg1Muxer, events.EventEmitter);

  module.exports = Mpeg1Muxer;

}).call(this);
