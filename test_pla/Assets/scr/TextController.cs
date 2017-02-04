using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TextController : MonoBehaviour {
	public Text txtStarName;
	public Text txtConstellationName;
	string stStarName = "星の名前：";
	string stConstellationName = "星座の名前：";

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		txtStarName.text = stStarName;
		txtConstellationName.text = stConstellationName;
	}

	public void InsertStarName (string stSelectedStarName, string stConstName){
		stStarName = "星の名前： " + stSelectedStarName; 
		stConstellationName = "星座の名前： " + stConstName;
	}


}
