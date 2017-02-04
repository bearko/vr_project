var duration : float= 1.0;

var lt: Light;
var original_int: float;
var Name: String;

function Start() {
	lt = GetComponent.<Light>();
	original_int = lt.range;
	//lt.transform.position = Vector3(0,0,0);
}


function Update() {

	var amplitude: float = (Random.value+0.2) * original_int * 2;
	lt.intensity = amplitude;
}