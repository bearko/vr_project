
var objlist: Component[];
var star: GameObject;
var Stars: GameObject;

var StarTable : TextAsset;
var xmax: int;
var ymax: int;
var starDataX: float[];
var starDataY: float[];
var starDataZ: float[];
var starDataName: String[];
var starDataV: float[];
var starDataColor: float[];
var starDataConstellationName: String[];

var sita: float;
     sita = 90;


//Load StarTable
function CSVLoader (){
    StarTable = Resources.Load("StarTable4");
    var lineArray = StarTable.text.Split("\n"[0]);
    var dataArray: String[];
    var x: int;
    var y: int;
    ymax = lineArray.length;
    if ((lineArray[lineArray.length-1].Trim()) == ""){
        ymax--;
    }
    dataArray = lineArray[y].Split(","[0]);
    xmax = dataArray.length;
    if((dataArray[dataArray.length-1].Trim()) == ""){
        xmax--;
    }
    starDataX = new float[ymax];
    starDataY = new float[ymax];
    starDataName = new String[ymax];
    starDataV = new float[ymax];
    starDataColor = new float[ymax];
    starDataConstellationName = new String[ymax];


    for (y=1; y<ymax-1; y++) {
        dataArray = lineArray[y].Split(","[0]);
        for (x=0; x<xmax; x++) {
            if(x%xmax == 0)
                starDataName[y] = dataArray[x];
            else if(x%xmax == 1)
                starDataX[y] = float.Parse(dataArray[x]);
            else if(x%xmax == 2)
                starDataY[y] = float.Parse(dataArray[x]);
            else if(x%xmax == 3)
                starDataV[y] = float.Parse(dataArray[x]);
            else if(x%xmax == 4)
                starDataColor[y] = float.Parse(dataArray[x]);
            else if(x%xmax == 5)
                starDataConstellationName[y] = dataArray[x];
                }
    }
}


function Start() {
    var i: int = 0;
    CSVLoader();

//Generate Stars
var x: float; 
var y: float; 
var z: float; 
var r: float; 
var x_d: float; 
var y_d: float; 
var z_d: float; 

var Name: String; 
var Vmag: float; 
var ColorNum: int; 

 for (i=0; i<5000 && i < starDataX.length; i++)
    {	

      var child: GameObject = Instantiate (star,Vector3.zero, Quaternion.identity);
      child.transform.parent = Stars.transform;
      
 
	    x = starDataX[i];
	    y = starDataY[i];
              x = x;
	    r = 200;


              //Set brightness
	    child.GetComponent.<Light>().range = 1.3-starDataV[i]*0.2;          
	    
             //Set Position
              x_d = Mathf.Cos(x*Mathf.PI/180)*Mathf.Cos((y)*Mathf.PI/180)*r;
              y_d = Mathf.Sin((y)*Mathf.PI/180)*r;
              z_d = Mathf.Sin(x*Mathf.PI/180)*Mathf.Cos((y)*Mathf.PI/180)*r;
 	    
              //rotation
              x = x_d * Mathf.Sin(sita*Mathf.PI/180) - y_d * Mathf.Cos(sita*Mathf.PI/180);
              y = x_d * Mathf.Cos(sita*Mathf.PI/180) + y_d * Mathf.Sin(sita*Mathf.PI/180);
              z = z_d;

			child.transform.position = Vector3(x,y,z);

             //Set name
	    child.name = starDataName[i];

	    //Set Tag
	    if(starDataConstellationName[i] != ""){
	    child.tag = starDataConstellationName[i];
	    }

	   //Set color
             child.GetComponent.<Light>().color = Color.Lerp(Color.cyan, Color.red, (starDataColor[i]+0.3)/3);


//        Debug.Log(i);
//        Debug.Log(child.transform.position);
    }

}

