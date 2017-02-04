

var x: float; 
var y: float; 
var z: float; 
var rotate: float;
var lean: float;
var objlist: Component[];
var rotate_speed: float;

var StarTable : TextAsset;
var xmax: int;
var ymax: int;
var starData: float[];


function Start() {
    rotate_speed = 1;
}



function Update() {
	
        lean = 35;
        rotate = (rotate + Time.deltaTime * rotate_speed) % 360;
        transform.rotation = Quaternion.Euler(0,rotate,lean);


}

