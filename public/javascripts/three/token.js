
/*!
 * token.js
 * Object which indicates target's realtime location and direction 
 * 
 * @dependency Three.js
 */

;(function(exports) {

  function Token(id, color) {
    THREE.Object3D.call(this);
    color = color || 0xffff00;

    var body = new THREE.Object3D(),
        status = new THREE.Object3D(),
        name = new THREE.Object3D(),
        loader = new THREE.JSONLoader();

    loader.onError = function() {
      console.log('error');
    };

    loader.load('assets/models/person/json/001_body1.js', function(geometry){
      var material = new THREE.MeshBasicMaterial({ color: color, side: 2 }),
          mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(150, 150, 150);
      body.add(mesh);
    });

    loader.load('assets/models/person/json/001_body2.js', function(geometry){
      var material = new THREE.LineBasicMaterial({ color: color, lineWidth: 1.25 }),
          line = new THREE.Line(geometry, material);
      line.scale.set(150, 150, 150);
      body.add(line);
    });
    
    loader.load('assets/models/person/json/001_body3.js', function(geometry){
      var material = new THREE.LineBasicMaterial({ color: color, lineWidth: 1.25 }),
          line = new THREE.Line(geometry, material);
      line.scale.set(150, 150, 150);
      body.add(line);
    });
    
    loader.load('assets/models/person/json/name_' + id + '.js', function(geometry){
      var material = new THREE.MeshBasicMaterial({ color: color, side: 2 }),
          mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(150, 150, 150);
      name.add(mesh);
    });
        
    loader.load('assets/models/person/json/001_status1.js', function(geometry){
      var material = new THREE.LineBasicMaterial({ color: color, lineWidth: 1.25 }),
          line = new THREE.Line(geometry, material);
      line.scale.set(150, 150, 150);
      status.add(line);
    });   
    
    status.position.y = 100;

    this.add(status);
    this.add(body);
    this.add(name);

    this.status = status;
    this.name = name;
    this.body = body;
  }

  Token.prototype = new THREE.Object3D();

  Token.prototype.updatePosition = function(x, y, z) {    
  };

  Token.prototype.updateLocation = function(x, y, z) {
    var position = this.position;
    position.x = x;
    position.y = y;
    position.z = z;
  };

  Token.prototype.updateDirection = function(rad) {
    this.status.rotation.y = rad;
  };

  Token.prototype.updateNameAngle = function(angle) {    
  };

  exports.Token = Token;

})(this);