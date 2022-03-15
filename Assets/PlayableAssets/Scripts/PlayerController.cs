using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    #region Singleton
    public static PlayerController ins;

    private void Awake()
    {
        ins = this;
    }
    #endregion

    public GroundCheck groundCheck;
    public Rigidbody rb;
    public Transform tran_Rotate;
    private Vector3 moveDirection = Vector3.zero;

    //public Rigidbody head;
    public Animator playerAnimator;
    public AudioSource winAudio;
    public float moveSpeed;

    //public Joysticks joystick;

    private Vector3 faceDir;

    public GameObject hipJoint;
    public Transform hipTransform;

    [HideInInspector]
    public bool canMove = false;
    [HideInInspector] 
    public bool isRunning;
    private float timeMove;

    //public GameObject explodeEffect;
    //public GameObject firework_Effect;

    [HideInInspector]
    public bool isWin;

    private MatchManager matchManager;

    void Start()
    {
        matchManager = MatchManager.ins;

        moveSpeed = 2.5f;
    }

    void FixedUpdate()
    {
        if (matchManager.endGame) return;

        //Vector3 moveVector = (transform.right * joystick.Horizontal + transform.forward * joystick.Vertical).normalized;
        
        //if (moveVector != Vector3.zero)
        //{
        //    transform.Translate(moveVector * moveSpeed * Time.deltaTime);
        //    // chuyển anim chạy
        //    playerAnimator.SetInteger("Action", 1);
        //    faceDir = moveVector;
        //    isRunning = true;

        //    head.AddForce(-faceDir * 50, ForceMode.Force);
        //}
        //else
        //{
        //    // soundPlayer.Pause();
        //    playerAnimator.SetInteger("Action", 0);

        //    // tắt anim chạy
        //    isRunning = false;
        //}

        if (groundCheck.isGrounded)
        {
            if (Input.GetMouseButton(0) && canMove && !Attendee.ins.died)
            {
                playerAnimator.SetInteger("Action", 1);
                //faceDir = moveVector;
                isRunning = true;

                timeMove += Time.fixedDeltaTime;
                moveDirection = Vector3.forward;
                moveDirection = tran_Rotate.TransformDirection(moveDirection);
                moveDirection *= moveSpeed;

                faceDir = moveDirection;

                //rb.velocity = moveDirection * Time.fixedDeltaTime * (40 + Mathf.Min(timeMove * 10, 20));
                transform.position += moveDirection * Time.fixedDeltaTime * moveSpeed;

                if (TouchRotateSingle.eulerRotation != Vector3.zero)
                {
                    tran_Rotate.localRotation = Quaternion.LookRotation(TouchRotateSingle.eulerRotation);
                }

                //quay mặt
                if (hipJoint != null)
                {
                    hipJoint.GetComponent<ConfigurableJoint>().targetRotation = Quaternion.Inverse(Quaternion.LookRotation(faceDir));
                }
                if (faceDir != Vector3.zero)
                {
                    hipTransform.rotation = Quaternion.LookRotation(faceDir);
                }
            }
            else
            {
                playerAnimator.SetInteger("Action", 0);
                //rb.velocity = Vector3.zero;
                isRunning = false;
                timeMove = 0;
            }
        }
        else
        {
            //rb.velocity = Vector3.down * Time.deltaTime * 100f ;
            Attendee.ins.target.gameObject.SetActive(false);
            //Debug.Log("123");
        }

    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.layer == 6)
        {
            if (isRunning)
            {
                BotPlayer botco;
                if (other.transform.TryGetComponent<BotPlayer>(out botco))
                {
                    if (botco.isFalling == false)
                    {
                        botco.BiNga();
                        //soundPush.PlaySound(Random.Range(0, 2));
                    }
                }

                //var no = Instantiate(explodeEffect, other.transform.position + Vector3.up * 0.5f, Quaternion.identity);
                //Destroy(no, 0.5f);
            }
            else
            {
                //Vector3 offset = transform.position - other.transform.position;
                //transform.DOMove(transform.position + new Vector3(offset.x, 0, offset.z).normalized * 0.7f, 0.4f);
            }
        }
    }

    private void OnTriggerStay(Collider other)
    {
        if (other.gameObject.layer == 6 && isRunning == true)
        {
            BotPlayer botco;
            if (other.transform.TryGetComponent(out botco))
            {
                if (botco.isFalling == false)
                {
                    botco.BiNga();
                    //soundPush.PlaySound(Random.Range(0, 2));
                }
            }

            //var no = Instantiate(explodeEffect, other.transform.position + Vector3.up * 0.5f, Quaternion.identity);
            //Destroy(no, 0.5f);
        }
    }

    public void PlayerDanceWin()
    {
        winAudio.Play();
        isWin = true;
        playerAnimator.SetInteger("Action", 2);

        var copyMotions = GetComponentsInChildren<CopyMotion>();
        foreach (var item in copyMotions)
        {
            item.copyLocalPosition = true;
            item.copyLocalRotation = true;
            // StartCoroutine(item.wait());
        }

        var ris = GetComponentsInChildren<Rigidbody>();
        foreach (var item in ris)
        {
            item.constraints = RigidbodyConstraints.FreezeAll;
        }

        GameManager.ins.EndGame(isWin);
    }
}
