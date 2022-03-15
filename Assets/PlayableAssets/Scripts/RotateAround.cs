using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RotateAround : MonoBehaviour
{
    void Update()
    {
        transform.RotateAround(transform.position, Vector3.forward, 30 * Time.deltaTime);
    }
}
