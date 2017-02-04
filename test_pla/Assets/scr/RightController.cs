using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RightController : MonoBehaviour {
	RaycastHit hit; //レーザーの返り値取得用

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		Ray ray = new Ray (transform.position, transform.forward);
		if (Physics.Raycast (ray, out hit)) {
			print (hit.collider.name);
			//星の名前を挿入
			TextController obj = GameObject.Find ("Camera (eye)").GetComponent<TextController> ();
			obj.InsertStarName (hit.collider.name, hit.collider.tag);

		}
	}
}
