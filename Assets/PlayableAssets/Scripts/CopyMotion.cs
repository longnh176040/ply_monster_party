using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CopyMotion : MonoBehaviour
{
    [SerializeField] private bool doNotSync;
    [SerializeField] public bool copyLocalPosition;
    [SerializeField] public bool copyLocalRotation;
    [SerializeField] private GameObject mirrorJoint;

    Rigidbody myRigidBody;
    ConfigurableJoint myJoint;

    //starting point (anchor for the joints)
    Vector3 MirrorAnchorPosition;
    Quaternion MirrorAnchorRotation;

    private bool dangDungDay;

    // private void OnEnable()
    // {
    //     StartCoroutine(wait());
    // }

    public IEnumerator wait()
    {
        dangDungDay = true;
        yield return new WaitForSeconds(0.5f);
        dangDungDay = false;
    }


    private void Start()
    {
        myRigidBody = this.gameObject.GetComponent<Rigidbody>();
        myJoint = this.gameObject.GetComponent<ConfigurableJoint>();

        MirrorAnchorPosition = mirrorJoint.transform.localPosition;
        MirrorAnchorRotation = mirrorJoint.transform.localRotation;
    }

    private void FixedUpdate()
    {
        if (mirrorJoint == null) return;
        if (!doNotSync)
        {
            Vector3 MirrorTargetPosition = GetTargetPosition(mirrorJoint.transform.localPosition, MirrorAnchorPosition);
            myJoint.targetPosition = MirrorTargetPosition;

            Quaternion MirrorTargetRotation = GetTargetRotation(mirrorJoint.transform.localRotation, MirrorAnchorRotation);
            myJoint.targetRotation = MirrorTargetRotation;

        }
        if (copyLocalPosition)
        {
            if (dangDungDay == false)
            {
                transform.localPosition = mirrorJoint.transform.localPosition;
            }
            else
            {
                //transform.DOLocalMove(mirrorJoint.transform.localPosition, 0.6f);
                transform.localPosition = Vector3.MoveTowards(transform.localPosition, mirrorJoint.transform.localPosition, 0.6f * Time.deltaTime);
            }
        }
        if (copyLocalRotation)
        {
            if (dangDungDay == false)
            {
                transform.localRotation = mirrorJoint.transform.localRotation;
            }
            else
            {
                // transform.DOLocalRotate(mirrorJoint.transform.localEulerAngles, 0.6f);
                transform.localEulerAngles = Vector3.MoveTowards(transform.localEulerAngles, mirrorJoint.transform.localEulerAngles, 0.6f * Time.deltaTime);
            }
        }
    }

    Vector3 GetTargetPosition(Vector3 currentPosition, Vector3 anchorPosition)
    {
        return anchorPosition - currentPosition;
    }

    Quaternion GetTargetRotation(Quaternion currentRotation, Quaternion anchorRotation)
    {
        return Quaternion.Inverse(currentRotation) * anchorRotation;
    }
}
