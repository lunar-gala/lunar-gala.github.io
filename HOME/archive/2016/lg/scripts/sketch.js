//song data in sounds.js

var setAnchors = function() {
	var anchors = {
		x1:160, y1:20,
		x2:300, y2:160,
		x3:160, y3:300,
		x4:20, y4:160
	};
	var handles = getHandles(anchors);
	console.log(handles.xa1);
}

var getHandles = function(anchors) {
	var curve = 75;
	var handles = {	
		xa1:anchors.x1 - curve,	ya1:anchors.y1,
		xa2:anchors.x1 + curve,	ya2:anchors.y1,
		xb1:anchors.x2,			yb1:anchors.y2 - curve,
		xb2:anchors.x2,			yb2:anchors.y2 + curve,
		xc1:anchors.x3 + curve,	yc1:anchors.y3,
		xc2:anchors.x3 - curve,	yc2:anchors.y3,
		xd1:anchors.x4,			yd1:anchors.y4 + curve,
		xd2:anchors.x4,			yd2:anchors.y4 - curve
	};

	return handles;
}

var abraxas = function(p) {

	var i = 0;
	var song = abraxasSong;

	var a = {
		x1:160, y1:20,
		x2:280, y2:140,
		x3:160, y3: 260,
		x4:20, y4:150
	};

	var frameRate = 30;

	p.setup = function() {
		cnv = p.createCanvas(320,320);
		cnv.parent('abraxas');
		p.frameRate(frameRate);
	}

	p.draw = function() {

		var level;

		a.y3 = 260;
		a.x1 = 160;

		p.clear();

		if (i < song.length) {
			level = song[i];
			i += 1;
		}

		else {
			level = song[0];
			i = 0;
		};

		
		var size = p.map(level, -1, 1, 0, 30);
		a.y3 += size;
		a.x1 += size;
		var h = getHandles(a);

		p.stroke(179,252,3);
		p.strokeWeight(2);
		p.noFill();
		p.beginShape();
		p.vertex(a.x1,a.y1);
		p.bezierVertex(h.xa2,h.ya2,h.xb1,h.yb1,a.x2,a.y2);
		p.bezierVertex(h.xb2,h.yb2,h.xc1,h.yc1,a.x3,a.y3);
		p.bezierVertex(h.xc2,h.yc2,h.xd1,h.yd1,a.x4,a.y4);
		p.bezierVertex(h.xd2,h.yd2,h.xa1,h.ya1,a.x1,a.y1);
		p.endShape();
	}

}

var barracks = function(p) {

	var i = 0;
	var song = imperatriceSong;

	var a = {
		x1:160, y1:20,
		x2:300, y2:160,
		x3:160, y3:300,
		x4:20, y4:160
	};

	var frameRate = 30;

	p.setup = function() {
		cnv = p.createCanvas(320,320);
		cnv.parent('barracks');
		p.frameRate(frameRate);
	}

	p.draw = function() {

		var level;

		a.y3 = 300;
		a.x1 = 160;

		p.clear();

		if (i < song.length) {
			level = song[i];
			i += 1;
		}

		else {
			level = song[0];
			i = 0;
		};

		
		var size = p.map(level, -1, 1, 0, 30);
		a.y3 += size;
		a.x1 += size;
		var h = getHandles(a);

		p.stroke(179,252,3);
		p.strokeWeight(2);
		p.noFill();
		p.beginShape();
		p.vertex(a.x1,a.y1);
		p.bezierVertex(h.xa2,h.ya2,h.xb1,h.yb1,a.x2,a.y2);
		p.bezierVertex(h.xb2,h.yb2,h.xc1,h.yc1,a.x3,a.y3);
		p.bezierVertex(h.xc2,h.yc2,h.xd1,h.yd1,a.x4,a.y4);
		p.bezierVertex(h.xd2,h.yd2,h.xa1,h.ya1,a.x1,a.y1);
		p.endShape();
	}

}

var corpus = function(p) {

	var i = 0;
	var song = corpusSong;

	var a = {
		x1:160, y1:40,
		x2:280, y2:160,
		x3:160, y3:300,
		x4:30, y4:160
	};

	var frameRate = 30;

	p.setup = function() {
		cnv = p.createCanvas(320,320);
		cnv.parent('corpus');
		p.frameRate(frameRate);
	}

	p.draw = function() {

		var level;

		a.y2 = 160;
		a.x4 = 30;

		p.clear();

		if (i < song.length) {
			level = song[i];
			i += 1;
		}

		else {
			level = song[0];
			i = 0;
		};

		
		var size = p.map(level, -1, 1, 0, 30);
		a.y2 += size;
		a.x4 += size;
		var h = getHandles(a);

		p.stroke(179,252,3);
		p.strokeWeight(2);
		p.noFill();
		p.beginShape();
		p.vertex(a.x1,a.y1);
		p.bezierVertex(h.xa2,h.ya2,h.xb1,h.yb1,a.x2,a.y2);
		p.bezierVertex(h.xb2,h.yb2,h.xc1,h.yc1,a.x3,a.y3);
		p.bezierVertex(h.xc2,h.yc2,h.xd1,h.yd1,a.x4,a.y4);
		p.bezierVertex(h.xd2,h.yd2,h.xa1,h.ya1,a.x1,a.y1);
		p.endShape();
	}

}

var crest = function(p) {

	var i = 0;
	var song = crestSong;

	var a = {
		x1:160, y1:20,
		x2:300, y2:160,
		x3:160, y3:260,
		x4:20, y4:160
	};

	var frameRate = 25;

	var y1Original = a.y1;

	p.setup = function() {
		cnv = p.createCanvas(320,320);
		cnv.parent('crest');
		p.frameRate(frameRate);
	}

	p.draw = function() {

		var level;

		a.y3 = 260;
		a.x1 = 160;

		p.clear();

		if (i < song.length) {
			level = song[i];
			i += 1;
		}

		else {
			level = song[0];
			i = 0;
		};

		
		var size = p.map(level, -1, 1, 0, 30);
		a.y3 += size;
		a.x1 += size;
		var h = getHandles(a);

		p.stroke(179,252,3);
		p.strokeWeight(2);
		p.noFill();
		p.beginShape();
		p.vertex(a.x1,a.y1);
		p.bezierVertex(h.xa2,h.ya2,h.xb1,h.yb1,a.x2,a.y2);
		p.bezierVertex(h.xb2,h.yb2,h.xc1,h.yc1,a.x3,a.y3);
		p.bezierVertex(h.xc2,h.yc2,h.xd1,h.yd1,a.x4,a.y4);
		p.bezierVertex(h.xd2,h.yd2,h.xa1,h.ya1,a.x1,a.y1);
		p.endShape();
	}

}

var cymatic = function(p) {

	var i = 0;
	var song = cymaticSong;

	var a = {
		x1:160, y1:20,
		x2:300, y2:160,
		x3:160, y3:300,
		x4:20, y4:160
	};

	var frameRate = 60;

	p.setup = function() {
		cnv = p.createCanvas(320,320);
		cnv.parent('cymatic');
		p.frameRate(frameRate);
	}

	p.draw = function() {

		var level;

		a.y1 = 20;
		a.x4 = 20;

		p.clear();

		if (i < song.length) {
			level = song[i];
			i += 1;
		}

		else {
			level = song[0];
			i = 0;
		};

		
		var size = p.map(level, -1, 1, 0, 30);
		a.y1 += size;
		a.x4 += size;
		var h = getHandles(a);

		p.stroke(179,252,3);
		p.strokeWeight(2);
		p.noFill();
		p.beginShape();
		p.vertex(a.x1,a.y1);
		p.bezierVertex(h.xa2,h.ya2,h.xb1,h.yb1,a.x2,a.y2);
		p.bezierVertex(h.xb2,h.yb2,h.xc1,h.yc1,a.x3,a.y3);
		p.bezierVertex(h.xc2,h.yc2,h.xd1,h.yd1,a.x4,a.y4);
		p.bezierVertex(h.xd2,h.yd2,h.xa1,h.ya1,a.x1,a.y1);
		p.endShape();
	}

}

var dauntless = function(p) {

	var i = 0;
	var song = dauntlessSong;

	var a = {
		x1:160, y1:40,
		x2:300, y2:160,
		x3:160, y3:300,
		x4:20, y4:160
	};

	var frameRate = 30;

	p.setup = function() {
		cnv = p.createCanvas(320,320);
		cnv.parent('dauntless');
		p.frameRate(frameRate);
	}

	p.draw = function() {

		var level;

		a.y3 = 300;
		a.x1 = 160;

		p.clear();

		if (i < song.length) {
			level = song[i];
			i += 1;
		}

		else {
			level = song[0];
			i = 0;
		};

		
		var size = p.map(level, -1, 1, 0, 30);
		a.y3 -= size;
		a.x1 -= size;
		var h = getHandles(a);

		p.stroke(179,252,3);
		p.strokeWeight(2);
		p.noFill();
		p.beginShape();
		p.vertex(a.x1,a.y1);
		p.bezierVertex(h.xa2,h.ya2,h.xb1,h.yb1,a.x2,a.y2);
		p.bezierVertex(h.xb2,h.yb2,h.xc1,h.yc1,a.x3,a.y3);
		p.bezierVertex(h.xc2,h.yc2,h.xd1,h.yd1,a.x4,a.y4);
		p.bezierVertex(h.xd2,h.yd2,h.xa1,h.ya1,a.x1,a.y1);
		p.endShape();
	}

}

var decay = function(p) {

	var i = 0;
	var song = decaySong;

	var a = {
		x1:160, y1:20,
		x2:300, y2:160,
		x3:160, y3:300,
		x4:20, y4:160
	};

	var frameRate = 30;

	p.setup = function() {
		cnv = p.createCanvas(320,320);
		cnv.parent('decay');
		p.frameRate(frameRate);
	}

	p.draw = function() {

		var level;

		a.y3 = 300;
		a.x1 = 160;

		p.clear();

		if (i < song.length) {
			level = song[i];
			i += 1;
		}

		else {
			level = song[0];
			i = 0;
		};

		
		var size = p.map(level, -1, 1, 0, 30);
		a.y3 += size;
		a.x1 += size;
		var h = getHandles(a);

		p.stroke(179,252,3);
		p.strokeWeight(2);
		p.noFill();
		p.beginShape();
		p.vertex(a.x1,a.y1);
		p.bezierVertex(h.xa2,h.ya2,h.xb1,h.yb1,a.x2,a.y2);
		p.bezierVertex(h.xb2,h.yb2,h.xc1,h.yc1,a.x3,a.y3);
		p.bezierVertex(h.xc2,h.yc2,h.xd1,h.yd1,a.x4,a.y4);
		p.bezierVertex(h.xd2,h.yd2,h.xa1,h.ya1,a.x1,a.y1);
		p.endShape();
	}

}

var erode = function(p) {

	var i = 0;
	var song = erodeSong;

	var a = {
		x1:160, y1:40,
		x2:300, y2:160,
		x3:160, y3:300,
		x4:20, y4:180
	};

	var frameRate = 30;

	p.setup = function() {
		cnv = p.createCanvas(320,320);
		cnv.parent('erode');
		p.frameRate(frameRate);
	}

	p.draw = function() {

		var level;

		a.y1 = 40;
		a.x1 = 160;

		p.clear();

		if (i < song.length) {
			level = song[i];
			i += 1;
		}

		else {
			level = song[0];
			i = 0;
		};

		
		var size = p.map(level, -1, 1, 0, 30);
		a.y1 += size;
		a.x1 += size;
		var h = getHandles(a);

		p.stroke(179,252,3);
		p.strokeWeight(2);
		p.noFill();
		p.beginShape();
		p.vertex(a.x1,a.y1);
		p.bezierVertex(h.xa2,h.ya2,h.xb1,h.yb1,a.x2,a.y2);
		p.bezierVertex(h.xb2,h.yb2,h.xc1,h.yc1,a.x3,a.y3);
		p.bezierVertex(h.xc2,h.yc2,h.xd1,h.yd1,a.x4,a.y4);
		p.bezierVertex(h.xd2,h.yd2,h.xa1,h.ya1,a.x1,a.y1);
		p.endShape();
	}

}

var exuviae = function(p) {

	var i = 0;
	var song = exuviaeSong;

	var a = {
		x1:160, y1:60,
		x2:280, y2:160,
		x3:160, y3:280,
		x4:20, y4:180
	};

	var frameRate = 30;

	p.setup = function() {
		cnv = p.createCanvas(320,320);
		cnv.parent('exuviae');
		p.frameRate(frameRate);
	}

	p.draw = function() {

		var level;

		a.y4 = 180;
		a.x2 = 300;

		p.clear();

		if (i < song.length) {
			level = song[i];
			i += 1;
		}

		else {
			level = song[0];
			i = 0;
		};

		
		var size = p.map(level, -1, 1, 0, 30);
		a.y4 -= size;
		a.x2 -= size;
		var h = getHandles(a);

		p.stroke(179,252,3);
		p.strokeWeight(2);
		p.noFill();
		p.beginShape();
		p.vertex(a.x1,a.y1);
		p.bezierVertex(h.xa2,h.ya2,h.xb1,h.yb1,a.x2,a.y2);
		p.bezierVertex(h.xb2,h.yb2,h.xc1,h.yc1,a.x3,a.y3);
		p.bezierVertex(h.xc2,h.yc2,h.xd1,h.yd1,a.x4,a.y4);
		p.bezierVertex(h.xd2,h.yd2,h.xa1,h.ya1,a.x1,a.y1);
		p.endShape();
	}

}

var filigree = function(p) {

	var i = 0;
	var song = filigreeSong;

	var a = {
		x1:160, y1:40,
		x2:280, y2:160,
		x3:140, y3:300,
		x4:20, y4:180
	};

	var frameRate = 30;

	p.setup = function() {
		cnv = p.createCanvas(320,320);
		cnv.parent('filigree');
		p.frameRate(frameRate);
	}

	p.draw = function() {

		var level;

		a.y3 = 300;
		a.x3 = 140;

		p.clear();

		if (i < song.length) {
			level = song[i];
			i += 1;
		}

		else {
			level = song[0];
			i = 0;
		};

		
		var size = p.map(level, -1, 1, 0, 30);
		a.y3 -= size;
		a.x3 -= size;
		var h = getHandles(a);

		p.stroke(179,252,3);
		p.strokeWeight(2);
		p.noFill();
		p.beginShape();
		p.vertex(a.x1,a.y1);
		p.bezierVertex(h.xa2,h.ya2,h.xb1,h.yb1,a.x2,a.y2);
		p.bezierVertex(h.xb2,h.yb2,h.xc1,h.yc1,a.x3,a.y3);
		p.bezierVertex(h.xc2,h.yc2,h.xd1,h.yd1,a.x4,a.y4);
		p.bezierVertex(h.xd2,h.yd2,h.xa1,h.ya1,a.x1,a.y1);
		p.endShape();
	}

}

var fukkatsu = function(p) {

	var i = 0;
	var song = fukkatsuSong;

	var a = {
		x1:160, y1:20,
		x2:300, y2:160,
		x3:160, y3:300,
		x4:20, y4:160
	};

	var frameRate = 60;

	p.setup = function() {
		cnv = p.createCanvas(320,320);
		cnv.parent('fukkatsu');
		p.frameRate(frameRate);
	}

	p.draw = function() {

		var level;

		a.y1 = 20;
		a.x4 = 20;

		p.clear();

		if (i < song.length) {
			level = song[i];
			i += 1;
		}

		else {
			level = song[0];
			i = 0;
		};

		
		var size = p.map(level, -1, 1, 0, 30);
		a.y1 += size;
		a.x4 += size;
		var h = getHandles(a);

		p.stroke(179,252,3);
		p.strokeWeight(2);
		p.noFill();
		p.beginShape();
		p.vertex(a.x1,a.y1);
		p.bezierVertex(h.xa2,h.ya2,h.xb1,h.yb1,a.x2,a.y2);
		p.bezierVertex(h.xb2,h.yb2,h.xc1,h.yc1,a.x3,a.y3);
		p.bezierVertex(h.xc2,h.yc2,h.xd1,h.yd1,a.x4,a.y4);
		p.bezierVertex(h.xd2,h.yd2,h.xa1,h.ya1,a.x1,a.y1);
		p.endShape();
	}

}

var imperatrice = function(p) {

	var i = 0;
	var song = barracksSong;

	var a = {
		x1:160, y1:20,
		x2:300, y2:160,
		x3:160, y3:300,
		x4:20, y4:160
	};

	var frameRate = 60;

	p.setup = function() {
		cnv = p.createCanvas(320,320);
		cnv.parent('imperatrice');
		p.frameRate(frameRate);
	}

	p.draw = function() {

		var level;

		a.y1 = 20;
		a.x4 = 20;

		p.clear();

		if (i < song.length) {
			level = song[i];
			i += 1;
		}

		else {
			level = song[0];
			i = 0;
		};

		
		var size = p.map(level, -1, 1, 0, 30);
		a.y1 += size;
		a.x4 += size;
		var h = getHandles(a);

		p.stroke(179,252,3);
		p.strokeWeight(2);
		p.noFill();
		p.beginShape();
		p.vertex(a.x1,a.y1);
		p.bezierVertex(h.xa2,h.ya2,h.xb1,h.yb1,a.x2,a.y2);
		p.bezierVertex(h.xb2,h.yb2,h.xc1,h.yc1,a.x3,a.y3);
		p.bezierVertex(h.xc2,h.yc2,h.xd1,h.yd1,a.x4,a.y4);
		p.bezierVertex(h.xd2,h.yd2,h.xa1,h.ya1,a.x1,a.y1);
		p.endShape();
	}

}

var polymorphism = function(p) {

	var i = 0;
	var song = polymorphismSong;

	var a = {
		x1:160, y1:40,
		x2:300, y2:160,
		x3:160, y3:300,
		x4:20, y4:160
	};

	var frameRate = 30;

	p.setup = function() {
		cnv = p.createCanvas(320,320);
		cnv.parent('polymorphism');
		p.frameRate(frameRate);
	}

	p.draw = function() {

		var level;

		a.y3 = 300;
		a.x1 = 160;

		p.clear();

		if (i < song.length) {
			level = song[i];
			i += 1;
		}

		else {
			level = song[0];
			i = 0;
		};

		
		var size = p.map(level, -1, 1, 0, 30);
		a.y3 -= size;
		a.x1 -= size;
		var h = getHandles(a);

		p.stroke(179,252,3);
		p.strokeWeight(2);
		p.noFill();
		p.beginShape();
		p.vertex(a.x1,a.y1);
		p.bezierVertex(h.xa2,h.ya2,h.xb1,h.yb1,a.x2,a.y2);
		p.bezierVertex(h.xb2,h.yb2,h.xc1,h.yc1,a.x3,a.y3);
		p.bezierVertex(h.xc2,h.yc2,h.xd1,h.yd1,a.x4,a.y4);
		p.bezierVertex(h.xd2,h.yd2,h.xa1,h.ya1,a.x1,a.y1);
		p.endShape();
	}

}

var pom = function(p) {

	var i = 0;
	var song = pomSong;

	var a = {
		x1:160, y1:40,
		x2:280, y2:140,
		x3:160, y3:300,
		x4:30, y4:160
	};

	var frameRate = 30;

	p.setup = function() {
		cnv = p.createCanvas(320,320);
		cnv.parent('pom');
		p.frameRate(frameRate);
	}

	p.draw = function() {

		var level;

		a.y2 = 140;
		a.x4 = 30;

		p.clear();

		if (i < song.length) {
			level = song[i];
			i += 1;
		}

		else {
			level = song[0];
			i = 0;
		};

		
		var size = p.map(level, -1, 1, 0, 30);
		a.y2 += size;
		a.x4 += size;
		var h = getHandles(a);

		p.stroke(179,252,3);
		p.strokeWeight(2);
		p.noFill();
		p.beginShape();
		p.vertex(a.x1,a.y1);
		p.bezierVertex(h.xa2,h.ya2,h.xb1,h.yb1,a.x2,a.y2);
		p.bezierVertex(h.xb2,h.yb2,h.xc1,h.yc1,a.x3,a.y3);
		p.bezierVertex(h.xc2,h.yc2,h.xd1,h.yd1,a.x4,a.y4);
		p.bezierVertex(h.xd2,h.yd2,h.xa1,h.ya1,a.x1,a.y1);
		p.endShape();
	}

}

var sanctum = function(p) {

	var i = 0;
	var song = sanctumSong;

	var a = {
		x1:160, y1:20,
		x2:280, y2:140,
		x3:160, y3: 260,
		x4:20, y4:150
	};

	var frameRate = 30;

	p.setup = function() {
		cnv = p.createCanvas(320,320);
		cnv.parent('sanctum');
		p.frameRate(frameRate);
	}

	p.draw = function() {

		var level;

		a.y3 = 260;
		a.x1 = 160;

		p.clear();

		if (i < song.length) {
			level = song[i];
			i += 1;
		}

		else {
			level = song[0];
			i = 0;
		};

		
		var size = p.map(level, -1, 1, 0, 30);
		a.y3 += size;
		a.x1 += size;
		var h = getHandles(a);

		p.stroke(179,252,3);
		p.strokeWeight(2);
		p.noFill();
		p.beginShape();
		p.vertex(a.x1,a.y1);
		p.bezierVertex(h.xa2,h.ya2,h.xb1,h.yb1,a.x2,a.y2);
		p.bezierVertex(h.xb2,h.yb2,h.xc1,h.yc1,a.x3,a.y3);
		p.bezierVertex(h.xc2,h.yc2,h.xd1,h.yd1,a.x4,a.y4);
		p.bezierVertex(h.xd2,h.yd2,h.xa1,h.ya1,a.x1,a.y1);
		p.endShape();
	}

}

var xoaix = function(p) {

	var i = 0;
	var song = xoaixSong;

	var a = {
		x1:160, y1:40,
		x2:300, y2:160,
		x3:160, y3:280,
		x4:20, y4:180
	};

	var frameRate = 30;

	p.setup = function() {
		cnv = p.createCanvas(320,320);
		cnv.parent('xoaix');
		p.frameRate(frameRate);
	}

	p.draw = function() {

		var level;

		a.y3 = 280;
		a.x3 = 160;

		p.clear();

		if (i < song.length) {
			level = song[i];
			i += 1;
		}

		else {
			level = song[0];
			i = 0;
		};

		
		var size = p.map(level, -1, 1, 0, 30);
		a.y3 -= size;
		a.x3 += size;
		var h = getHandles(a);

		p.stroke(179,252,3);
		p.strokeWeight(2);
		p.noFill();
		p.beginShape();
		p.vertex(a.x1,a.y1);
		p.bezierVertex(h.xa2,h.ya2,h.xb1,h.yb1,a.x2,a.y2);
		p.bezierVertex(h.xb2,h.yb2,h.xc1,h.yc1,a.x3,a.y3);
		p.bezierVertex(h.xc2,h.yc2,h.xd1,h.yd1,a.x4,a.y4);
		p.bezierVertex(h.xd2,h.yd2,h.xa1,h.ya1,a.x1,a.y1);
		p.endShape();
	}

}

new p5(abraxas);
new p5(barracks);
new p5(corpus);
new p5(crest);
new p5(cymatic);
new p5(dauntless);
new p5(decay);
new p5(erode);
new p5(exuviae);
new p5(filigree);
new p5(fukkatsu);
new p5(imperatrice);
new p5(polymorphism);
new p5(pom);
new p5(sanctum);
new p5(xoaix);