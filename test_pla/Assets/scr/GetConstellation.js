
var objlist: Component[];
var ConstellationLine: GameObject;

var StarTable : TextAsset;
var xmax: int;
var ymax: int;
var starLine1X: float[];
var starLine1Y: float[];
var starLine2X: float[];
var starDataName: String[];
var starLine2Y: float[];

var sita: float;
     sita = 90;


//Load StarTable
function CSVLoader (){
    StarTable = Resources.Load("StarTable5");
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
    starLine1X = new float[ymax];
    starLine1Y = new float[ymax];
    starDataName = new String[ymax];
    starLine2X = new float[ymax];
    starLine2Y = new float[ymax];

    for (y=1; y<ymax-1; y++) {
        dataArray = lineArray[y].Split(","[0]);
        for (x=0; x<xmax; x++) {
        	if(x%xmax == 0)
                starDataName[y] = dataArray[x];
            else if(x%xmax == 1)
                starLine1X[y] = float.Parse(dataArray[x]);
            else if(x%xmax == 2)
                starLine1Y[y] = float.Parse(dataArray[x]);
            else if(x%xmax == 3)
                starLine2X[y] = float.Parse(dataArray[x]);
            else if(x%xmax == 4)
                starLine2Y[y] = float.Parse(dataArray[x]);
                }
    }
}


function Start() {
    var i: int = 0;
    CSVLoader();

//Generate Stars
var x1: float; 
var y1: float; 
var z1: float; 
var x2: float; 
var y2: float; 
var z2: float; 
var r: float; 
var x_d: float; 
var y_d: float; 
var z_d: float; 
var Name: String; 
var Vmag: float; 
var ColorNum: int; 

 for (i=1; i<10 ; i++)
    {
      var child: GameObject = Instantiate (ConstellationLine,Vector3.zero, Quaternion.identity);
      child.transform.parent = ConstellationLine.transform;
 
	    x1 = starLine1X[i];
	    y1 = starLine1Y[i];
        x1 = x1;
	    r = 200;

	          //Set Position
              x_d = Mathf.Cos(x1*Mathf.PI/180)*Mathf.Cos((y1)*Mathf.PI/180)*r;
              y_d = Mathf.Sin((y1)*Mathf.PI/180)*r;
              z_d = Mathf.Sin(x1*Mathf.PI/180)*Mathf.Cos((y1)*Mathf.PI/180)*r;
 	    
              //rotation
              x1 = x_d * Mathf.Sin(sita*Mathf.PI/180) - y_d * Mathf.Cos(sita*Mathf.PI/180);
              y1 = x_d * Mathf.Cos(sita*Mathf.PI/180) + y_d * Mathf.Sin(sita*Mathf.PI/180);
              z1 = z_d;

              x_d = 0;
              y_d = 0;
              z_d = 0;

              x1 = starLine2X[i];
              y1 = starLine2Y[i];

	          //Set Position
              x_d = Mathf.Cos(x2*Mathf.PI/180)*Mathf.Cos((y2)*Mathf.PI/180)*r;
              y_d = Mathf.Sin((y2)*Mathf.PI/180)*r;
              z_d = Mathf.Sin(x2*Mathf.PI/180)*Mathf.Cos((y2)*Mathf.PI/180)*r;

              //rotation
              x2 = x_d * Mathf.Sin(sita*Mathf.PI/180) - y_d * Mathf.Cos(sita*Mathf.PI/180);
              y2 = x_d * Mathf.Cos(sita*Mathf.PI/180) + y_d * Mathf.Sin(sita*Mathf.PI/180);
              z2 = z_d;



            // 頂点を設定
            child.GetComponent.<LineRenderer>().SetPosition(0, new Vector3(x1,y1,z1));
            child.GetComponent.<LineRenderer>().SetPosition(1, new Vector3(x2,y2,z2));

	    child.name = starDataName[i];

	    //Set Tag
	    child.tag = starDataName[i];
	    }

//        Debug.Log(i);
//        Debug.Log(child.transform.position);
   
}

