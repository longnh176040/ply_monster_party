using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class TouchRotateSingle : MonoBehaviour
{
    private bool dragging = false;
    private Vector3 center;
    public static Vector3 eulerRotation;

    private Vector3 direction;//Case trong Update lại
                              //public static Vector3 eulerRotation;

    public void FixedUpdate() {
        if(Input.GetMouseButtonDown(0)) {
            dragging = true;
            center = Input.mousePosition;
            //Debug.LogError("??? Down" + center);
        }
        if(Input.GetMouseButton(0)) {
            if(dragging) {
                direction = Input.mousePosition - center;
                eulerRotation = new Vector3(direction.x, 0, direction.y);
                //Debug.LogError("??? Drag" + eulerRotation);
            } else {//Nếu chằng mau ko bắt đc ButtonDown
                dragging = true;
                center = Input.mousePosition;
                //Debug.LogError("??? Down2" + center);
            }
        }
        if(Input.GetMouseButtonUp(0)) {
            dragging = false;
            //Debug.LogError("??? Up");
        }
    }
}
