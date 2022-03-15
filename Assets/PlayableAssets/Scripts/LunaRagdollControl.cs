using UnityEngine;

public class LunaRagdollControl : MonoBehaviour
{
    [Header("Luna Ragdoll Workaround")]
    [SerializeField] private bool toggleOnByDefault;
    [SerializeField] private Rigidbody[] ragdollRB;
#if UNITY_LUNA
    private bool currentState = true;
#endif
    
    private void Awake()
    {
#if UNITY_LUNA
        // GetComponent method is heavy during runtime, please manually assign them when possible
        if (ragdollRB.Length == 0) ragdollRB = GetComponentsInChildren<Rigidbody>();
#endif
    }

    private void Start()
    {
#if UNITY_LUNA
        Toggle(toggleOnByDefault);
#endif
    }

    public void Toggle(bool flag)
    {
#if UNITY_LUNA
        if (currentState != flag)
        {
            foreach (var rb in ragdollRB)
            {
                // Ignore self
                if (rb.gameObject != this.gameObject)
                {
                    rb.isKinematic = !flag;
                }
            }
            currentState = flag;
        }
#endif
    }
}
