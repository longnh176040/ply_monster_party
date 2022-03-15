using Luna.Unity;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    #region Singleton
    public static GameManager ins;

    private void Awake()
    {
        ins = this;
    }
    #endregion

    public GameObject hor, ver;

    public GameObject winCanvas, dancingCharacter; //joystickCanvas, 

    public GameObject h_pnWin, h_pnLose, h_pnTut, h_pnGP;
    public GameObject v_pnWin, v_pnLose, v_pnTut, v_pnGP;

    private bool isHor;

    [HideInInspector]
    public bool isGamePlaying;
    [HideInInspector]
    public bool isEndGame;

    //private int amountRelease = 0;

    private MatchManager matchManager;
    private Attendee attendee;
    private PlayerController playerController;

    void Start()
    {
        isGamePlaying = false;
        isEndGame = false;

        winCanvas.SetActive(false);

        h_pnWin.SetActive(false);
        h_pnLose.SetActive(false);
        h_pnTut.SetActive(true);
        h_pnGP.SetActive(true);

        v_pnWin.SetActive(false);
        v_pnLose.SetActive(false);
        v_pnTut.SetActive(true);
        v_pnGP.SetActive(true);

        matchManager = MatchManager.ins;
        attendee = Attendee.ins;
        playerController = PlayerController.ins;
    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            h_pnTut.SetActive(false);
            v_pnTut.SetActive(false);

            if (!isGamePlaying)
            {
                isGamePlaying = true;
                StartGame();
            }
        }
    }

    private void FixedUpdate()
    {
        if (Screen.width < Screen.height)
        {
            isHor = false;
        }
        else isHor = true;

        hor.SetActive(!isHor);
        ver.SetActive(isHor);

        h_pnWin.SetActive(!isHor);
        v_pnWin.SetActive(isHor);
    }

    public void StartGame()
    {
        playerController.canMove = true;
        matchManager.countDownStartGame = true;
        matchManager.countDownShowCard = true;
    }

    public void EndGame(bool isWin)
    {
        isEndGame = true;
        h_pnGP.SetActive(false);
        v_pnGP.SetActive(false);

        //joystickCanvas.SetActive(false);

        if (isWin)
        {
            StartCoroutine(ActivateWinPanel());
        }
        else
        {
            StartCoroutine(ActivatePanel(h_pnLose, v_pnLose));
        }
    }

    public void GoToStore()
    {
        LifeCycle.GameEnded();
        Playable.InstallFullGame();
    }

    private IEnumerator ActivatePanel (GameObject h_panel, GameObject v_panel)
    {
        yield return new WaitForSeconds(2f);
        
        //dancingCharacter.SetActive(true);
        h_panel.SetActive(true);
        v_panel.SetActive(true);
    }

    private IEnumerator ActivateWinPanel()
    {
        yield return new WaitForSeconds(2f);
        
        dancingCharacter.SetActive(true);
        winCanvas.SetActive(true);

        if (!isHor)
        {
            h_pnWin.SetActive(true);
            v_pnWin.SetActive(false);
        }
        else
        {
            h_pnWin.SetActive(false);
            v_pnWin.SetActive(true);
        }

        //Camera.main.enabled = false;
    }
}
