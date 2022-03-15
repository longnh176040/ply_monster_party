using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;

public class MatchManager : MonoBehaviour
{
    #region Singleton
    public static MatchManager ins;

    private void Awake()
    {
        ins = this;
    }
    #endregion

    public AudioSource thunderSound;
    public Material defaultMaterial;

    public MeshRenderer[] planes;
    public bool[] planesAlive;
    public MeshRenderer TV;

    public Material[] im1;
    public Material[] im2;
    public Material[] im3;
    private Material[] imageToMatches;

    public BotPlayer[] bots;
    public int botAlive;

    public bool showCard, isFalling;
    private bool tim;

    // phần liên quan đến logic game
    [HideInInspector] public int numCardsInWave;
    public int wave; // để đếm số wave
    private int[] selectedCard;
    private int[] showCount;
    private int winCard;
    public bool endGame;
    public bool playerAlive = true;

    public Text h_textDemNguocBaGiay;
    public Text v_textDemNguocBaGiay;

    // phần liên quan đến thời gian
    //[HideInInspector] 
    public bool countDownShowCard;
    private float timeShowCard = 5.0f;
    [HideInInspector] public bool countDown3s;
    private float time3s = 4.0f;
    [HideInInspector] public bool countDownStartGame;
    private float timeStartGame = 40.0f;

    private PlayerController playerController;

    void Start()
    {
        playerController = PlayerController.ins;

        //gameCanvas.SetActive(false);

        Physics.gravity = new Vector3(0, -10f, 0);
        //Physics.clothGravity = new Vector3(0, -10f, 0);
        botAlive = bots.Length;
        SetupWave();

        StartCoroutine(ThunderLight());
    }

    void Update()
    {
        if (endGame)
        {
            h_textDemNguocBaGiay.gameObject.SetActive(false);
            v_textDemNguocBaGiay.gameObject.SetActive(false);
            return;
        }
        if (botAlive == 0)
        {
            endGame = true;
            h_textDemNguocBaGiay.gameObject.SetActive(false);
            v_textDemNguocBaGiay.gameObject.SetActive(false);
            StartCoroutine(WinIfNoBotAlive());
        }

        if (!countDownStartGame)
        {
            DemNguoc36s();
        }

        if (countDownShowCard)
        {
            //Debug.Log("456");
            DemNguocHienThiTheBai();
        }

        if (countDown3s)
        {
            //Debug.Log("789");
            DemNguocBaGiay();
        }
    }

    void SetupWave()
    {
        //Debug.Log("Setup Wave");
        showCard = false;
        isFalling = false;

        foreach (var item in bots)
            if (item != null && !item.died && item.isFalling == false)
                item.hipcj.yMotion = ConfigurableJointMotion.Locked;

        int rim = Random.Range(0, 3);

        switch (rim)
        {
            case 0:
                imageToMatches = im1;
                break;
            case 1:
                imageToMatches = im2;
                break;
            case 2:
                imageToMatches = im3;
                break;
        }

        // set up  thời gian
        timeShowCard = 5.0f;
        time3s = 4.0f;

        h_textDemNguocBaGiay.gameObject.SetActive(false);
        v_textDemNguocBaGiay.gameObject.SetActive(false);

        TV.gameObject.SetActive(false);

        // hiện tất cả planes lên
        for (int i = 0; i < planesAlive.Length; i++)
        {
            planes[i].transform.gameObject.SetActive(false);
            planes[i].transform.parent.transform.DOLocalMove(new Vector3(planes[i].transform.parent.transform.localPosition.x, 0f, planes[i].transform.parent.transform.localPosition.z), 0.1f);
            // soundWave.PlaySound(1);
        }

        // khởi tạo ban đầu tất cả các khối đều là sai
        planesAlive = new bool[planes.Length];
        for (int i = 0; i < planesAlive.Length; i++)
        {
            planesAlive[i] = false;
        }

        numCardsInWave = Random.Range(3, 6); // wave 0 có 2 thẻ, wave 1 có 3 thẻ,..

        // chọn ngẫu nhiên ra các thẻ bài materials
        selectedCard = new int[numCardsInWave];
        for (int i = 0; i < numCardsInWave; i++)
        {
            selectedCard[i] = -1;
        }

        // thẻ nào đc chọn thì là true
        showCount = new int[numCardsInWave];
        for (int i = 0; i < numCardsInWave; i++)
        {
            showCount[i] = 0;
        }

        // chọn ngẫu nhiên ra các thẻ từ các materials
        for (int i = 0; i < numCardsInWave; i++)
        {
            int random;
            do
            {
                random = Random.Range(0, imageToMatches.Length);
            }
            while (CheckCardDuplication(random));
            selectedCard[i] = random;
        }

        // logic set vị trí card khác
        for (int i = 0; i < planes.Length; i++)
        {
            planes[i].material = defaultMaterial;
        }

        // mỗi thẻ sẽ đc hiện ít nhất 1 lần
        for (int i = 0; i < numCardsInWave; i++)
        {
            int ran2 = Random.Range(0, planes.Length);
            if (planesAlive[ran2] == true) continue;

            if (i == 0)
            {
                planesAlive[ran2] = true;
            }
            else
            {
                planesAlive[ran2] = false;
            }
            planes[ran2].material = imageToMatches[selectedCard[i]];
        }

        for (int i = 0; i < planes.Length; i++)
        {
            if (planesAlive[i] == false)
            {
                if (Random.Range(0, 3) == 0)
                {
                    int ran3 = Random.Range(0, numCardsInWave);
                    planes[i].material = imageToMatches[selectedCard[ran3]];
                    if (ran3 == 0)
                    {
                        planesAlive[i] = true;
                    }
                    else
                    {
                        planesAlive[i] = false;
                    }
                }
            }
        }

        TV.material = imageToMatches[selectedCard[0]];
    }

    private void DemNguocHienThiTheBai()
    {
        timeShowCard -= Time.deltaTime;
        int time = (int)timeShowCard;
        if (time == 0)
        {
            countDownShowCard = false;
            countDown3s = true;
            //countdownTextMesh[0].transform.parent.gameObject.SetActive(false);
            TV.gameObject.SetActive(true);
        }

        if (time > 2)
        {
            for (int i = 0; i < planes.Length; i++)
            {
                planes[i].gameObject.SetActive(false);
            }
        }
        else
        {
            if (showCard == false)
            {
                showCard = true;
                for (int i = 0; i < planes.Length; i++)
                {
                    planes[i].gameObject.SetActive(true);
                }
            }
        }
        // cho bot chạy lung tung trong lúc thời gian đếm ngược
        if (time == 2 && tim == true)
        {
            tim = false;
            for (int i = 0; i < bots.Length; i++)
            {
                if (bots[i] != null)
                {
                    bots[i].ChooseRandomTarget();
                }
            }
        }
        else if(time != 2)
        {
            tim = true;
        }
    }

    IEnumerator WinIfNoBotAlive()
    {
        yield return new WaitForSeconds(1.5f);

        if (!Attendee.ins.died) playerController.PlayerDanceWin();

        var c = playerController.transform.GetComponentsInChildren<CopyMotion>();
        foreach (var item in c)
        {
            item.copyLocalPosition = true;
            item.copyLocalRotation = true;
        }

        playerController.hipJoint.GetComponent<Rigidbody>().isKinematic = true;
    }

    private void DemNguocBaGiay()
    {
        time3s -= Time.deltaTime;
        int time = (int)time3s;
        if (time == 0)
        {
            CheckEndWave();
            countDown3s = false;
        }
        else
        {
            h_textDemNguocBaGiay.gameObject.SetActive(true);
            v_textDemNguocBaGiay.gameObject.SetActive(true);

        }
        h_textDemNguocBaGiay.text = time.ToString();
        v_textDemNguocBaGiay.text = time.ToString();
    }

    private void CheckEndWave()
    {
        h_textDemNguocBaGiay.gameObject.SetActive(false);
        v_textDemNguocBaGiay.gameObject.SetActive(false);
        // soundWave.PlaySound(0);

        isFalling = true;
        foreach (var item in bots)
        {
            if (item != null && !item.died)
            {
                item.hipcj.yMotion = ConfigurableJointMotion.Free;
            }
        }

        // ẩn những cái card sai đi
        for (int i = 0; i < planesAlive.Length; i++)
        {
            if (planesAlive[i] == false)
            {
                // logic này là các ô sai sẽ bị tụt xuống
                planes[i].gameObject.SetActive(false);
                planes[i].transform.parent.transform.DOLocalMove(planes[i].transform.parent.transform.localPosition + Vector3.down * 10f, 0.5f);

            }
            else
            {
                planes[i].gameObject.SetActive(true);
            }
        }
        // nếu còn sống thì bắt đầu 1 wave mới
        if (playerAlive)
        {
            StartCoroutine(StartNewWave());
        }
    }

    public IEnumerator StartNewWave()
    {
        if (botAlive != 0)
        {
            yield return new WaitForSeconds(3);

            if (playerAlive)
            {
                if (endGame == false)
                {
                    for (int i = 0; i < bots.Length; i++)
                    {
                        if (bots[i] != null)
                        {
                            bots[i].mustChooseCard = true;
                            bots[i].ChooseRandomTarget();
                        }
                    }
                }

                SetupWave();
                wave++;
                countDownShowCard = true;
            }
        }
    }

    private bool CheckCardDuplication(int random)
    {
        for (int i = 0; i < numCardsInWave; i++)
        {
            if (selectedCard[i] == random)
            {
                return true;
            }
        }
        return false;
    }

    private void DemNguoc36s()
    {
        timeStartGame -= Time.deltaTime;
        int time = (int)timeStartGame;
        if (time == 0)
        {
            for (int i = 0; i < bots.Length; i++)
            {
                if (bots[i] != null)
                {
                    bots[i].BotDanceWin();
                    SetUpWinBot(bots[i]);
                }
            }

            endGame = true;

            if (!Attendee.ins.died) playerController.PlayerDanceWin();

            var c = playerController.transform.GetComponentsInChildren<CopyMotion>();
            foreach (var item in c)
            {
                item.copyLocalPosition = true;
                item.copyLocalRotation = true;
            }
            playerController.hipJoint.GetComponent<Rigidbody>().isKinematic = true;
        }

        //if (time == 5)
        //{
        //    //time48sAnim.enabled = true;
        //}

        //if (time == 8)
        //{
        //    // soundGame.PlaySound(1);
        //}
    }

    private void SetUpWinBot(BotPlayer go)
    {
        var c = go.transform.GetComponentsInChildren<CopyMotion>();
        foreach (var item in c)
        {
            item.copyLocalPosition = true;
            item.copyLocalRotation = true;
        }
        go.transform.GetChild(0).GetChild(0).GetChild(0).GetComponent<Rigidbody>().isKinematic = true;
    }

    IEnumerator ThunderLight()
    {
        float rand = Random.Range(0, 1f);
        
        if (rand > 0.7f)
        {
            thunderSound.Play();
        }

        yield return new WaitForSeconds(5f);
        StartCoroutine(ThunderLight());
    }
}
