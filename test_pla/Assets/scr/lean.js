#pragma strict

var lean: float;

function Start () {

}

function Update () {

    lean = 35;
    transform.rotation = Quaternion.Euler(0,0,lean);

}