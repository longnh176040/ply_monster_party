using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class BotPlayer : MonoBehaviour
{
    public ConfigurableJoint hipcj;
    public Rigidbody[] legs;
    public Animator botAnimator;
    public AudioSource collideAudio;

    public Collider col;
    public Rigidbody rb;
    public Rigidbody hipRigid;
    public Rigidbody headRigid;
    public Transform hipTransform;

    public CopyMotion[] c;
    public GameObject[] options;
    public bool mustChooseCard = true;
    

    public bool isFalling = false;
    public bool died;

    private bool canChangePose = true;
    private int actionPose;

    [SerializeField]
    private Vector3 targetPosition;
    private float speed;
    private bool canMove = true;

    private MatchManager matchManager;
    private Attendee attendee;

    [SerializeField] private LunaRagdollControl ragdollControl;

    void Start()
    {
        matchManager = MatchManager.ins;
        attendee = Attendee.ins;

        speed = Random.Range(3f, 5f);

        options = new GameObject[matchManager.planes.Length];
        ChooseRandomTarget();

        //agent.speed = PerfectMatch_LevelManager.ins.speed;
    }

    void Update()
    {
        if (died) return;

        col.gameObject.transform.localPosition = Vector3.zero;

        if (transform.position.y < 4f)
        {
            var hipcj = hipTransform.GetComponent<ConfigurableJoint>();
            hipcj.xMotion = ConfigurableJointMotion.Free;
            hipcj.yMotion = ConfigurableJointMotion.Free;
            hipcj.zMotion = ConfigurableJointMotion.Free;
            hipcj.connectedBody = null;

            rb.constraints = RigidbodyConstraints.None;
            col.isTrigger = true;

            botAnimator.SetInteger("Action", 4);
            ragdollControl.Toggle(true);

            var cl = GetComponentsInChildren<Collider>();
            foreach (var item in cl)
            {
                item.isTrigger = true;
            }

            StartCoroutine(OffAnim());

            //agent.enabled = false;
            canMove = false;
            Destroy(gameObject, 2.5f);
            died = true;

            matchManager.botAlive--;

            return;
        }

        if (mustChooseCard == true && matchManager.countDown3s)
        {
            mustChooseCard = false;
            ChooseCard();
        }

        if (canMove) {
            if (Vector3.Distance(transform.position, targetPosition) < 1.4f) 
            {
                canMove = false;
                randomActionPose();
                botAnimator.SetInteger("Action", actionPose);
            }
            else
            {
                //headRigid.AddForce(-agent.desiredVelocity.normalized * 40, ForceMode.Force);

                //headRigid.AddForce(rb.velocity.normalized * 40, ForceMode.Force);
                canChangePose = true;
                botAnimator.SetInteger("Action", 1);
                transform.position = Vector3.MoveTowards(transform.position, targetPosition, speed * Time.deltaTime);
                transform.LookAt(targetPosition);
            }
            ragdollControl.Toggle(false);
        }
    }

    private void randomActionPose()
    {
        if (canChangePose)
        {
            actionPose = Random.Range(5, 8);
            canChangePose = false;
        }
    }

    private IEnumerator OffAnim()
    {
        yield return new WaitForSeconds(0.1f);

        var cl = GetComponentsInChildren<Collider>();
        foreach (var item in cl)
        {
            item.isTrigger = false;
        }

        botAnimator.enabled = false;
        GetComponent<Rigidbody>().isKinematic = true;

        var cm = GetComponentsInChildren<CopyMotion>();
        foreach (var item in cm)
        {
            item.enabled = false;
            StartCoroutine(item.wait());
        }

        var cj = GetComponentsInChildren<ConfigurableJoint>();
        foreach (var item in cj)
        {
            JointDrive jointDrive = item.angularXDrive;
            jointDrive.positionSpring = 50f;
            item.angularXDrive = jointDrive;
            JointDrive jointDrive2 = item.angularYZDrive;
            jointDrive2.positionSpring = 50f;
            item.angularYZDrive = jointDrive2;
        }
        transform.GetChild(0).GetComponent<Collider>().enabled = false;
        transform.GetChild(0).parent = transform.parent;
    }

    public void ChooseCard()
    {
        for (int j = 0; j < matchManager.planes.Length; j++)
        {
            options[j] = null;
        }

        for (int i = 0; i < matchManager.planesAlive.Length; i++)
        {
            if (matchManager.planesAlive[i] == true)
            {
                // nếu là hình đúng thì chắc chắn chọn
                options[i] = matchManager.planes[i].gameObject;
            }
        }

        int ran;
        do
        {
            ran = Random.Range(0, options.Length);
        }
        while (options[ran] == null);

        targetPosition = options[ran].transform.position;
        targetPosition.y = transform.position.y;
        canMove = true;

        //Chay den hinh da chon
        //agent.SetDestination(targetPosition);
    }

    public void ChooseRandomTarget()
    {
        int ran = Random.Range(0, matchManager.planes.Length);
        targetPosition = new Vector3(matchManager.planes[ran].transform.position.x, transform.position.y, matchManager.planes[ran].transform.position.z);
        canMove = true;
        //Debug.Log("=================================");

        //agent.SetDestination(targetPosition);
    }

    public void BotDanceWin()
    {
        botAnimator.SetInteger("Action", 4);
        ragdollControl.Toggle(true);

        var copyMotions = GetComponentsInChildren<CopyMotion>();
        foreach (var item in copyMotions)
        {
            item.copyLocalPosition = true;
            item.copyLocalRotation = true;
        }

        var ris = GetComponentsInChildren<Rigidbody>();
        foreach (var item in ris)
        {
            item.constraints = RigidbodyConstraints.FreezeAll;
        }
    }

    //public IEnumerator NgaBayRaXa(Vector3 huongLuc)
    //{
    //    canMove = false;
    //    collideAudio.Play();
    //    headRigid.AddForce(huongLuc, ForceMode.Force);
    //    rb.constraints = RigidbodyConstraints.None;

    //    // khi ngã thì tắt agent, tắt bắt chước anim
    //    //agent.enabled = false;

    //    var copyMotions = GetComponentsInChildren<CopyMotion>();
    //    foreach (var item in copyMotions)
    //    {
    //        item.enabled = false;
    //    }

    //    var cj = GetComponentsInChildren<ConfigurableJoint>();
    //    foreach (var item in cj)
    //    {
    //        JointDrive jointDrive = item.angularXDrive;
    //        jointDrive.positionSpring = 100f;
    //        item.angularXDrive = jointDrive;
    //        JointDrive jointDrive2 = item.angularYZDrive;
    //        jointDrive.positionSpring = 100f;
    //        item.angularYZDrive = jointDrive;
    //    }
    //    hipRigid.constraints = RigidbodyConstraints.None;

    //    // đợi 4s sau đó bật lại
    //    yield return new WaitForSeconds(4);
    //    //agent.enabled = true;
    //    //canMove = true;

    //    foreach (var item in copyMotions)
    //    {
    //        item.enabled = true;
    //    }

    //    foreach (var item in cj)
    //    {
    //        JointDrive jointDrive = item.angularXDrive;
    //        jointDrive.positionSpring = 100000f;
    //        item.angularXDrive = jointDrive;
    //        JointDrive jointDrive2 = item.angularYZDrive;
    //        jointDrive.positionSpring = 100000f;
    //        item.angularYZDrive = jointDrive;
    //    }

    //    hipRigid.constraints = RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionZ
    //                         | RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationZ;
    //    rb.constraints = RigidbodyConstraints.FreezeAll;

    //    transform.position = new Vector3(transform.position.x, 0, transform.position.z);
    //    transform.eulerAngles = new Vector3(0, transform.eulerAngles.y, 0);
    //}

    public void BiNga()
    {
        ragdollControl.Toggle(true);
        
        collideAudio.Play();
        isFalling = true;
        //agent.enabled = false;
        canMove = false;

        var cm = GetComponentsInChildren<CopyMotion>();
        foreach (var item in cm)
        {
            item.enabled = false;
        }

        var cj = GetComponentsInChildren<ConfigurableJoint>();
        foreach (var item in cj)
        {
            JointDrive jointDrive = item.angularXDrive;
            jointDrive.positionSpring = 20f;
            item.angularXDrive = jointDrive;
            JointDrive jointDrive2 = item.angularYZDrive;
            jointDrive2.positionSpring = 20f;
            item.angularYZDrive = jointDrive2;
        }

        // add force vào phần đàu
        //headRigid.AddForce((transform.GetChild(0).position - (attendee.transform.position - transform.GetChild(0).position).normalized + 2 * Vector3.down) * 400, ForceMode.Force);

        // add force cho chân
        //legs[0].AddForce(-(transform.GetChild(0).position - (attendee.transform.position - transform.GetChild(0).position).normalized + 2 * Vector3.up) * 200, ForceMode.Force);
        //legs[1].AddForce(-(transform.GetChild(0).position - (attendee.transform.position - transform.GetChild(0).position).normalized + 2 * Vector3.up) * 200, ForceMode.Force);

        //transform.GetChild(0).transform.DOJump(transform.GetChild(0).transform.position - (attendee.transform.position - transform.GetChild(0).transform.position).normalized * 6f, 4, 1, 1.5f);
        transform.DOJump(transform.position - (attendee.transform.position - transform.position).normalized * 6f, 4, 1, 1.5f);


        hipcj.yMotion = ConfigurableJointMotion.Free;
        JointDrive jointDrive11 = hipcj.angularXDrive;
        jointDrive11.positionSpring = 500f;
        hipcj.angularXDrive = jointDrive11;
        JointDrive jointDrive22 = hipcj.angularYZDrive;
        jointDrive22.positionSpring = 500f;
        hipcj.angularYZDrive = jointDrive22;

        StartCoroutine(DungDay());
    }

    IEnumerator DungDay()
    {        
        yield return new WaitForSeconds(2.2f);
        if (!died)
        {
            isFalling = false;
            if (matchManager.isFalling == false)
            {
                hipcj.yMotion = ConfigurableJointMotion.Locked;
            }
            var cj = GetComponentsInChildren<ConfigurableJoint>();
            foreach (var item in cj)
            {
                JointDrive jointDrive = item.angularXDrive;
                jointDrive.positionSpring = 100000f;
                item.angularXDrive = jointDrive;
                JointDrive jointDrive2 = item.angularYZDrive;
                jointDrive.positionSpring = 100000f;
                item.angularYZDrive = jointDrive;
            }

            //agent.enabled = true;
            canMove = true;
            ChooseCard();
            
            var cm = GetComponentsInChildren<CopyMotion>();
            foreach (var item in cm)
            {
                item.enabled = true;
                StartCoroutine(item.wait());
            }
        }
    }
}
