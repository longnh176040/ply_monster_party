using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GroundCheck : MonoBehaviour
{
    public bool isGrounded = true;

    private void OnTriggerStay(Collider other)
    {
        if (other.gameObject.layer != 0)
        {
            isGrounded = false;
            //Debug.Log(other.name + "not in ground");
        }
        else
        {
            isGrounded = true;
            //Debug.Log(other.name + " in ground");
        }
    }

    private void OnTriggerExit(Collider other)
    {
        if (other.gameObject.layer == 0)
        {
            isGrounded = false;
            //Debug.Log(other.name + "not in ground");
        }
    }
}
