using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Attendee : MonoBehaviour
{
    #region Singleton
    public static Attendee ins;
    private void Awake()
    {
        ins = this;
    }
    #endregion

    public AudioSource loseAudio;

    public Transform target;
    public Collider col;
    public Rigidbody rb;
    //[SerializeField]
    //private Transform hipTransform;
    [HideInInspector]
    public bool died;

    private GameManager gameManager;
    private PlayerController playerController;

    private void Start()
    {
        gameManager = GameManager.ins;
        playerController = PlayerController.ins;
    }

    void Update()
    {
        if (died == true) return;
        target.Rotate(0, 0, 50 * Time.deltaTime);

        if (playerController.transform.position.y < 5f) //hipTransform.localPosition.y < 0.7f
        {
            col.isTrigger = false;
            died = true;
            rb.isKinematic = false;
            target.gameObject.SetActive(false);

            PlayerController.ins.playerAnimator.SetInteger("Action", 4);
            StartCoroutine(OffAnim());

            gameManager.EndGame(false);
            loseAudio.Play();
        }
    }

    private IEnumerator OffAnim()
    {
        yield return new WaitForSeconds(0.6f);
        PlayerController.ins.playerAnimator.enabled = false;

        var cm = GetComponentsInChildren<CopyMotion>();
        foreach (var item in cm)
        {
            item.enabled = false;
        }

        var cj = GetComponentsInChildren<ConfigurableJoint>();
        foreach (var item in cj)
        {
            JointDrive jointDrive = item.angularXDrive;
            jointDrive.positionSpring = 50f;
            item.angularXDrive = jointDrive;
            JointDrive jointDrive2 = item.angularYZDrive;
            jointDrive.positionSpring = 50f;
            item.angularYZDrive = jointDrive;
        }

        yield return new WaitForSeconds(0.2f);
        
        //GameManager.ins.soundManager.sound_chamDat.PlaySound();
    }
}
