var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2220 = root || request.c( 'UnityEngine.JointSpring' )
  var i2221 = data
  i2220.spring = i2221[0]
  i2220.damper = i2221[1]
  i2220.targetPosition = i2221[2]
  return i2220
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2222 = root || request.c( 'UnityEngine.JointMotor' )
  var i2223 = data
  i2222.m_TargetVelocity = i2223[0]
  i2222.m_Force = i2223[1]
  i2222.m_FreeSpin = i2223[2]
  return i2222
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2224 = root || request.c( 'UnityEngine.JointLimits' )
  var i2225 = data
  i2224.m_Min = i2225[0]
  i2224.m_Max = i2225[1]
  i2224.m_Bounciness = i2225[2]
  i2224.m_BounceMinVelocity = i2225[3]
  i2224.m_ContactDistance = i2225[4]
  i2224.minBounce = i2225[5]
  i2224.maxBounce = i2225[6]
  return i2224
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2226 = root || request.c( 'UnityEngine.JointDrive' )
  var i2227 = data
  i2226.m_PositionSpring = i2227[0]
  i2226.m_PositionDamper = i2227[1]
  i2226.m_MaximumForce = i2227[2]
  return i2226
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2228 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2229 = data
  i2228.m_Spring = i2229[0]
  i2228.m_Damper = i2229[1]
  return i2228
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2230 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2231 = data
  i2230.m_Limit = i2231[0]
  i2230.m_Bounciness = i2231[1]
  i2230.m_ContactDistance = i2231[2]
  return i2230
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2232 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2233 = data
  i2232.m_ExtremumSlip = i2233[0]
  i2232.m_ExtremumValue = i2233[1]
  i2232.m_AsymptoteSlip = i2233[2]
  i2232.m_AsymptoteValue = i2233[3]
  i2232.m_Stiffness = i2233[4]
  return i2232
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2234 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2235 = data
  i2234.m_LowerAngle = i2235[0]
  i2234.m_UpperAngle = i2235[1]
  return i2234
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2236 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2237 = data
  i2236.m_MotorSpeed = i2237[0]
  i2236.m_MaximumMotorTorque = i2237[1]
  return i2236
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2238 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2239 = data
  i2238.m_DampingRatio = i2239[0]
  i2238.m_Frequency = i2239[1]
  i2238.m_Angle = i2239[2]
  return i2238
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2240 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2241 = data
  i2240.m_LowerTranslation = i2241[0]
  i2240.m_UpperTranslation = i2241[1]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2242 = root || new pc.UnityMaterial()
  var i2243 = data
  i2242.name = i2243[0]
  request.r(i2243[1], i2243[2], 0, i2242, 'shader')
  i2242.renderQueue = i2243[3]
  i2242.enableInstancing = !!i2243[4]
  var i2245 = i2243[5]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2245[i + 0]) );
  }
  i2242.floatParameters = i2244
  var i2247 = i2243[6]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2247[i + 0]) );
  }
  i2242.colorParameters = i2246
  var i2249 = i2243[7]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2249[i + 0]) );
  }
  i2242.vectorParameters = i2248
  var i2251 = i2243[8]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2251[i + 0]) );
  }
  i2242.textureParameters = i2250
  var i2253 = i2243[9]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2253[i + 0]) );
  }
  i2242.materialFlags = i2252
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2257 = data
  i2256.name = i2257[0]
  i2256.value = i2257[1]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2261 = data
  i2260.name = i2261[0]
  i2260.value = new pc.Color(i2261[1], i2261[2], i2261[3], i2261[4])
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2265 = data
  i2264.name = i2265[0]
  i2264.value = new pc.Vec4( i2265[1], i2265[2], i2265[3], i2265[4] )
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2269 = data
  i2268.name = i2269[0]
  request.r(i2269[1], i2269[2], 0, i2268, 'value')
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2273 = data
  i2272.name = i2273[0]
  i2272.enabled = !!i2273[1]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2275 = data
  i2274.name = i2275[0]
  i2274.halfPrecision = !!i2275[1]
  i2274.vertexCount = i2275[2]
  i2274.aabb = i2275[3]
  var i2277 = i2275[4]
  var i2276 = []
  for(var i = 0; i < i2277.length; i += 1) {
    i2276.push( !!i2277[i + 0] );
  }
  i2274.streams = i2276
  i2274.vertices = i2275[5]
  var i2279 = i2275[6]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2279[i + 0]) );
  }
  i2274.subMeshes = i2278
  var i2281 = i2275[7]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 16) {
    i2280.push( new pc.Mat4().setData(i2281[i + 0], i2281[i + 1], i2281[i + 2], i2281[i + 3],  i2281[i + 4], i2281[i + 5], i2281[i + 6], i2281[i + 7],  i2281[i + 8], i2281[i + 9], i2281[i + 10], i2281[i + 11],  i2281[i + 12], i2281[i + 13], i2281[i + 14], i2281[i + 15]) );
  }
  i2274.bindposes = i2280
  var i2283 = i2275[8]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2283[i + 0]) );
  }
  i2274.blendShapes = i2282
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2289 = data
  i2288.triangles = i2289[0]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2295 = data
  i2294.name = i2295[0]
  var i2297 = i2295[1]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2297[i + 0]) );
  }
  i2294.frames = i2296
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2299 = data
  i2298.name = i2299[0]
  i2298.width = i2299[1]
  i2298.height = i2299[2]
  i2298.mipmapCount = i2299[3]
  i2298.anisoLevel = i2299[4]
  i2298.filterMode = i2299[5]
  i2298.hdr = !!i2299[6]
  i2298.format = i2299[7]
  i2298.wrapMode = i2299[8]
  i2298.alphaIsTransparency = !!i2299[9]
  i2298.alphaSource = i2299[10]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2301 = data
  i2300.position = new pc.Vec3( i2301[0], i2301[1], i2301[2] )
  i2300.scale = new pc.Vec3( i2301[3], i2301[4], i2301[5] )
  i2300.rotation = new pc.Quat(i2301[6], i2301[7], i2301[8], i2301[9])
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2303 = data
  request.r(i2303[0], i2303[1], 0, i2302, 'sharedMesh')
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2305 = data
  request.r(i2305[0], i2305[1], 0, i2304, 'additionalVertexStreams')
  i2304.enabled = !!i2305[2]
  request.r(i2305[3], i2305[4], 0, i2304, 'sharedMaterial')
  var i2307 = i2305[5]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 2) {
  request.r(i2307[i + 0], i2307[i + 1], 2, i2306, '')
  }
  i2304.sharedMaterials = i2306
  i2304.receiveShadows = !!i2305[6]
  i2304.shadowCastingMode = i2305[7]
  i2304.sortingLayerID = i2305[8]
  i2304.sortingOrder = i2305[9]
  i2304.lightmapIndex = i2305[10]
  i2304.lightmapSceneIndex = i2305[11]
  i2304.lightmapScaleOffset = new pc.Vec4( i2305[12], i2305[13], i2305[14], i2305[15] )
  i2304.lightProbeUsage = i2305[16]
  i2304.reflectionProbeUsage = i2305[17]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2311 = data
  i2310.name = i2311[0]
  i2310.tag = i2311[1]
  i2310.enabled = !!i2311[2]
  i2310.isStatic = !!i2311[3]
  i2310.layer = i2311[4]
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2313 = data
  i2312.enabled = !!i2313[0]
  i2312.isTrigger = !!i2313[1]
  request.r(i2313[2], i2313[3], 0, i2312, 'material')
  request.r(i2313[4], i2313[5], 0, i2312, 'sharedMesh')
  i2312.convex = !!i2313[6]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2315 = data
  i2314.center = new pc.Vec3( i2315[0], i2315[1], i2315[2] )
  i2314.radius = i2315[3]
  i2314.height = i2315[4]
  i2314.direction = i2315[5]
  i2314.enabled = !!i2315[6]
  i2314.isTrigger = !!i2315[7]
  request.r(i2315[8], i2315[9], 0, i2314, 'material')
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2317 = data
  i2316.mass = i2317[0]
  i2316.drag = i2317[1]
  i2316.angularDrag = i2317[2]
  i2316.useGravity = !!i2317[3]
  i2316.isKinematic = !!i2317[4]
  i2316.constraints = i2317[5]
  i2316.maxAngularVelocity = i2317[6]
  i2316.collisionDetectionMode = i2317[7]
  i2316.interpolation = i2317[8]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2319 = data
  i2318.center = new pc.Vec3( i2319[0], i2319[1], i2319[2] )
  i2318.size = new pc.Vec3( i2319[3], i2319[4], i2319[5] )
  i2318.enabled = !!i2319[6]
  i2318.isTrigger = !!i2319[7]
  request.r(i2319[8], i2319[9], 0, i2318, 'material')
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2321 = data
  request.r(i2321[0], i2321[1], 0, i2320, 'clip')
  i2320.playOnAwake = !!i2321[2]
  i2320.loop = !!i2321[3]
  i2320.time = i2321[4]
  i2320.volume = i2321[5]
  i2320.pitch = i2321[6]
  i2320.enabled = !!i2321[7]
  return i2320
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i2322 = root || request.c( 'PlayerController' )
  var i2323 = data
  request.r(i2323[0], i2323[1], 0, i2322, 'groundCheck')
  request.r(i2323[2], i2323[3], 0, i2322, 'rb')
  request.r(i2323[4], i2323[5], 0, i2322, 'tran_Rotate')
  request.r(i2323[6], i2323[7], 0, i2322, 'playerAnimator')
  request.r(i2323[8], i2323[9], 0, i2322, 'winAudio')
  i2322.moveSpeed = i2323[10]
  request.r(i2323[11], i2323[12], 0, i2322, 'hipJoint')
  request.r(i2323[13], i2323[14], 0, i2322, 'hipTransform')
  i2322.canMove = !!i2323[15]
  i2322.isRunning = !!i2323[16]
  i2322.isWin = !!i2323[17]
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2325 = data
  request.r(i2325[0], i2325[1], 0, i2324, 'animatorController')
  i2324.updateMode = i2325[2]
  var i2327 = i2325[3]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 2) {
  request.r(i2327[i + 0], i2327[i + 1], 2, i2326, '')
  }
  i2324.humanBones = i2326
  i2324.enabled = !!i2325[4]
  return i2324
}

Deserializers["Attendee"] = function (request, data, root) {
  var i2330 = root || request.c( 'Attendee' )
  var i2331 = data
  request.r(i2331[0], i2331[1], 0, i2330, 'loseAudio')
  request.r(i2331[2], i2331[3], 0, i2330, 'target')
  request.r(i2331[4], i2331[5], 0, i2330, 'col')
  request.r(i2331[6], i2331[7], 0, i2330, 'rb')
  i2330.died = !!i2331[8]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint' )
  var i2333 = data
  i2332.angularXDrive = request.d('UnityEngine.JointDrive', i2333[0], i2332.angularXDrive)
  i2332.angularXLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i2333[1], i2332.angularXLimitSpring)
  i2332.angularXMotion = i2333[2]
  i2332.angularYLimit = request.d('UnityEngine.SoftJointLimit', i2333[3], i2332.angularYLimit)
  i2332.angularYMotion = i2333[4]
  i2332.angularYZDrive = request.d('UnityEngine.JointDrive', i2333[5], i2332.angularYZDrive)
  i2332.angularYZLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i2333[6], i2332.angularYZLimitSpring)
  i2332.angularZLimit = request.d('UnityEngine.SoftJointLimit', i2333[7], i2332.angularZLimit)
  i2332.angularZMotion = i2333[8]
  i2332.configuredInWorldSpace = !!i2333[9]
  i2332.highAngularXLimit = request.d('UnityEngine.SoftJointLimit', i2333[10], i2332.highAngularXLimit)
  i2332.linearLimit = request.d('UnityEngine.SoftJointLimit', i2333[11], i2332.linearLimit)
  i2332.linearLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i2333[12], i2332.linearLimitSpring)
  i2332.lowAngularXLimit = request.d('UnityEngine.SoftJointLimit', i2333[13], i2332.lowAngularXLimit)
  i2332.rotationDriveMode = i2333[14]
  i2332.secondaryAxis = new pc.Vec3( i2333[15], i2333[16], i2333[17] )
  i2332.slerpDrive = request.d('UnityEngine.JointDrive', i2333[18], i2332.slerpDrive)
  i2332.swapBodies = !!i2333[19]
  i2332.targetAngularVelocity = new pc.Vec3( i2333[20], i2333[21], i2333[22] )
  i2332.targetPosition = new pc.Vec3( i2333[23], i2333[24], i2333[25] )
  i2332.targetRotation = new pc.Quat(i2333[26], i2333[27], i2333[28], i2333[29])
  i2332.targetVelocity = new pc.Vec3( i2333[30], i2333[31], i2333[32] )
  i2332.xDrive = request.d('UnityEngine.JointDrive', i2333[33], i2332.xDrive)
  i2332.xMotion = i2333[34]
  i2332.yDrive = request.d('UnityEngine.JointDrive', i2333[35], i2332.yDrive)
  i2332.yMotion = i2333[36]
  i2332.zDrive = request.d('UnityEngine.JointDrive', i2333[37], i2332.zDrive)
  i2332.zMotion = i2333[38]
  request.r(i2333[39], i2333[40], 0, i2332, 'connectedBody')
  i2332.axis = new pc.Vec3( i2333[41], i2333[42], i2333[43] )
  i2332.anchor = new pc.Vec3( i2333[44], i2333[45], i2333[46] )
  i2332.connectedAnchor = new pc.Vec3( i2333[47], i2333[48], i2333[49] )
  i2332.autoConfigureConnectedAnchor = !!i2333[50]
  i2332.massScale = i2333[51]
  i2332.connectedMassScale = i2333[52]
  i2332.enableCollision = !!i2333[53]
  i2332.breakForce = i2333[54]
  i2332.breakTorque = i2333[55]
  return i2332
}

Deserializers["CopyMotion"] = function (request, data, root) {
  var i2334 = root || request.c( 'CopyMotion' )
  var i2335 = data
  i2334.copyLocalPosition = !!i2335[0]
  i2334.copyLocalRotation = !!i2335[1]
  i2334.doNotSync = !!i2335[2]
  request.r(i2335[3], i2335[4], 0, i2334, 'mirrorJoint')
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2337 = data
  i2336.enabled = !!i2337[0]
  i2336.isTrigger = !!i2337[1]
  request.r(i2337[2], i2337[3], 0, i2336, 'material')
  i2336.center = new pc.Vec3( i2337[4], i2337[5], i2337[6] )
  i2336.radius = i2337[7]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2339 = data
  i2338.enabled = !!i2339[0]
  request.r(i2339[1], i2339[2], 0, i2338, 'sharedMaterial')
  var i2341 = i2339[3]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 2) {
  request.r(i2341[i + 0], i2341[i + 1], 2, i2340, '')
  }
  i2338.sharedMaterials = i2340
  i2338.receiveShadows = !!i2339[4]
  i2338.shadowCastingMode = i2339[5]
  i2338.sortingLayerID = i2339[6]
  i2338.sortingOrder = i2339[7]
  i2338.lightmapIndex = i2339[8]
  i2338.lightmapSceneIndex = i2339[9]
  i2338.lightmapScaleOffset = new pc.Vec4( i2339[10], i2339[11], i2339[12], i2339[13] )
  i2338.lightProbeUsage = i2339[14]
  i2338.reflectionProbeUsage = i2339[15]
  request.r(i2339[16], i2339[17], 0, i2338, 'sharedMesh')
  var i2343 = i2339[18]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 2) {
  request.r(i2343[i + 0], i2343[i + 1], 2, i2342, '')
  }
  i2338.bones = i2342
  i2338.updateWhenOffscreen = !!i2339[19]
  i2338.localBounds = i2339[20]
  request.r(i2339[21], i2339[22], 0, i2338, 'rootBone')
  var i2345 = i2339[23]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2345[i + 0]) );
  }
  i2338.blendShapesWeights = i2344
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2349 = data
  i2348.weight = i2349[0]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2351 = data
  i2350.enabled = !!i2351[0]
  i2350.aspect = i2351[1]
  i2350.orthographic = !!i2351[2]
  i2350.orthographicSize = i2351[3]
  i2350.backgroundColor = new pc.Color(i2351[4], i2351[5], i2351[6], i2351[7])
  i2350.nearClipPlane = i2351[8]
  i2350.farClipPlane = i2351[9]
  i2350.fieldOfView = i2351[10]
  i2350.depth = i2351[11]
  i2350.clearFlags = i2351[12]
  i2350.cullingMask = i2351[13]
  i2350.rect = i2351[14]
  request.r(i2351[15], i2351[16], 0, i2350, 'targetTexture')
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2353 = data
  i2352.enabled = !!i2353[0]
  request.r(i2353[1], i2353[2], 0, i2352, 'sharedMaterial')
  var i2355 = i2353[3]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 2) {
  request.r(i2355[i + 0], i2355[i + 1], 2, i2354, '')
  }
  i2352.sharedMaterials = i2354
  i2352.receiveShadows = !!i2353[4]
  i2352.shadowCastingMode = i2353[5]
  i2352.sortingLayerID = i2353[6]
  i2352.sortingOrder = i2353[7]
  i2352.lightmapIndex = i2353[8]
  i2352.lightmapSceneIndex = i2353[9]
  i2352.lightmapScaleOffset = new pc.Vec4( i2353[10], i2353[11], i2353[12], i2353[13] )
  i2352.lightProbeUsage = i2353[14]
  i2352.reflectionProbeUsage = i2353[15]
  i2352.color = new pc.Color(i2353[16], i2353[17], i2353[18], i2353[19])
  request.r(i2353[20], i2353[21], 0, i2352, 'sprite')
  i2352.flipX = !!i2353[22]
  i2352.flipY = !!i2353[23]
  i2352.drawMode = i2353[24]
  i2352.size = new pc.Vec2( i2353[25], i2353[26] )
  i2352.tileMode = i2353[27]
  i2352.adaptiveModeThreshold = i2353[28]
  i2352.maskInteraction = i2353[29]
  i2352.spriteSortPoint = i2353[30]
  return i2352
}

Deserializers["GroundCheck"] = function (request, data, root) {
  var i2356 = root || request.c( 'GroundCheck' )
  var i2357 = data
  i2356.isGrounded = !!i2357[0]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i2359 = data
  i2358.name = i2359[0]
  i2358.width = i2359[1]
  i2358.height = i2359[2]
  i2358.anisoLevel = i2359[3]
  i2358.filterMode = i2359[4]
  i2358.hdr = !!i2359[5]
  i2358.format = i2359[6]
  i2358.wrapMode = i2359[7]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2361 = data
  i2360.name = i2361[0]
  i2360.atlasId = i2361[1]
  i2360.mipmapCount = i2361[2]
  i2360.hdr = !!i2361[3]
  i2360.size = i2361[4]
  i2360.anisoLevel = i2361[5]
  i2360.filterMode = i2361[6]
  i2360.wrapMode = i2361[7]
  var i2363 = i2361[8]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 4) {
    i2362.push( UnityEngine.Rect.MinMaxRect(i2363[i + 0], i2363[i + 1], i2363[i + 2], i2363[i + 3]) );
  }
  i2360.rects = i2362
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2367 = data
  i2366.name = i2367[0]
  i2366.index = i2367[1]
  i2366.startup = !!i2367[2]
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2369 = data
  i2368.enabled = !!i2369[0]
  i2368.type = i2369[1]
  i2368.color = new pc.Color(i2369[2], i2369[3], i2369[4], i2369[5])
  i2368.cullingMask = i2369[6]
  i2368.intensity = i2369[7]
  i2368.range = i2369[8]
  i2368.spotAngle = i2369[9]
  i2368.shadows = i2369[10]
  i2368.shadowNormalBias = i2369[11]
  i2368.shadowBias = i2369[12]
  i2368.shadowStrength = i2369[13]
  i2368.lightmapBakeType = i2369[14]
  i2368.renderMode = i2369[15]
  request.r(i2369[16], i2369[17], 0, i2368, 'cookie')
  i2368.cookieSize = i2369[18]
  return i2368
}

Deserializers["MatchManager"] = function (request, data, root) {
  var i2370 = root || request.c( 'MatchManager' )
  var i2371 = data
  request.r(i2371[0], i2371[1], 0, i2370, 'thunderSound')
  request.r(i2371[2], i2371[3], 0, i2370, 'defaultMaterial')
  var i2373 = i2371[4]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 2) {
  request.r(i2373[i + 0], i2373[i + 1], 2, i2372, '')
  }
  i2370.planes = i2372
  var i2375 = i2371[5]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( !!i2375[i + 0] );
  }
  i2370.planesAlive = i2374
  request.r(i2371[6], i2371[7], 0, i2370, 'TV')
  var i2377 = i2371[8]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 2) {
  request.r(i2377[i + 0], i2377[i + 1], 2, i2376, '')
  }
  i2370.im1 = i2376
  var i2379 = i2371[9]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 2) {
  request.r(i2379[i + 0], i2379[i + 1], 2, i2378, '')
  }
  i2370.im2 = i2378
  var i2381 = i2371[10]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 2) {
  request.r(i2381[i + 0], i2381[i + 1], 2, i2380, '')
  }
  i2370.im3 = i2380
  var i2383 = i2371[11]
  var i2382 = []
  for(var i = 0; i < i2383.length; i += 2) {
  request.r(i2383[i + 0], i2383[i + 1], 2, i2382, '')
  }
  i2370.bots = i2382
  i2370.botAlive = i2371[12]
  i2370.showCard = !!i2371[13]
  i2370.isFalling = !!i2371[14]
  i2370.numCardsInWave = i2371[15]
  i2370.wave = i2371[16]
  i2370.endGame = !!i2371[17]
  i2370.playerAlive = !!i2371[18]
  request.r(i2371[19], i2371[20], 0, i2370, 'h_textDemNguocBaGiay')
  request.r(i2371[21], i2371[22], 0, i2370, 'v_textDemNguocBaGiay')
  i2370.countDownShowCard = !!i2371[23]
  i2370.countDown3s = !!i2371[24]
  i2370.countDownStartGame = !!i2371[25]
  return i2370
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2388 = root || request.c( 'GameManager' )
  var i2389 = data
  request.r(i2389[0], i2389[1], 0, i2388, 'hor')
  request.r(i2389[2], i2389[3], 0, i2388, 'ver')
  request.r(i2389[4], i2389[5], 0, i2388, 'winCanvas')
  request.r(i2389[6], i2389[7], 0, i2388, 'dancingCharacter')
  request.r(i2389[8], i2389[9], 0, i2388, 'h_pnWin')
  request.r(i2389[10], i2389[11], 0, i2388, 'h_pnLose')
  request.r(i2389[12], i2389[13], 0, i2388, 'h_pnTut')
  request.r(i2389[14], i2389[15], 0, i2388, 'h_pnGP')
  request.r(i2389[16], i2389[17], 0, i2388, 'v_pnWin')
  request.r(i2389[18], i2389[19], 0, i2388, 'v_pnLose')
  request.r(i2389[20], i2389[21], 0, i2388, 'v_pnTut')
  request.r(i2389[22], i2389[23], 0, i2388, 'v_pnGP')
  i2388.isGamePlaying = !!i2389[24]
  i2388.isEndGame = !!i2389[25]
  return i2388
}

Deserializers["BotPlayer"] = function (request, data, root) {
  var i2390 = root || request.c( 'BotPlayer' )
  var i2391 = data
  request.r(i2391[0], i2391[1], 0, i2390, 'hipcj')
  var i2393 = i2391[2]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 2) {
  request.r(i2393[i + 0], i2393[i + 1], 2, i2392, '')
  }
  i2390.legs = i2392
  request.r(i2391[3], i2391[4], 0, i2390, 'botAnimator')
  request.r(i2391[5], i2391[6], 0, i2390, 'collideAudio')
  request.r(i2391[7], i2391[8], 0, i2390, 'col')
  request.r(i2391[9], i2391[10], 0, i2390, 'rb')
  request.r(i2391[11], i2391[12], 0, i2390, 'hipRigid')
  request.r(i2391[13], i2391[14], 0, i2390, 'headRigid')
  request.r(i2391[15], i2391[16], 0, i2390, 'hipTransform')
  var i2395 = i2391[17]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 2) {
  request.r(i2395[i + 0], i2395[i + 1], 2, i2394, '')
  }
  i2390.c = i2394
  var i2397 = i2391[18]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 2) {
  request.r(i2397[i + 0], i2397[i + 1], 2, i2396, '')
  }
  i2390.options = i2396
  i2390.mustChooseCard = !!i2391[19]
  i2390.isFalling = !!i2391[20]
  i2390.died = !!i2391[21]
  i2390.targetPosition = new pc.Vec3( i2391[22], i2391[23], i2391[24] )
  request.r(i2391[25], i2391[26], 0, i2390, 'ragdollControl')
  return i2390
}

Deserializers["LunaRagdollControl"] = function (request, data, root) {
  var i2404 = root || request.c( 'LunaRagdollControl' )
  var i2405 = data
  i2404.toggleOnByDefault = !!i2405[0]
  var i2407 = i2405[1]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 2) {
  request.r(i2407[i + 0], i2407[i + 1], 2, i2406, '')
  }
  i2404.ragdollRB = i2406
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2409 = data
  i2408.pivot = new pc.Vec2( i2409[0], i2409[1] )
  i2408.anchorMin = new pc.Vec2( i2409[2], i2409[3] )
  i2408.anchorMax = new pc.Vec2( i2409[4], i2409[5] )
  i2408.sizeDelta = new pc.Vec2( i2409[6], i2409[7] )
  i2408.anchoredPosition3D = new pc.Vec3( i2409[8], i2409[9], i2409[10] )
  i2408.rotation = new pc.Quat(i2409[11], i2409[12], i2409[13], i2409[14])
  i2408.scale = new pc.Vec3( i2409[15], i2409[16], i2409[17] )
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2411 = data
  i2410.enabled = !!i2411[0]
  i2410.planeDistance = i2411[1]
  i2410.referencePixelsPerUnit = i2411[2]
  i2410.isFallbackOverlay = !!i2411[3]
  i2410.renderMode = i2411[4]
  i2410.renderOrder = i2411[5]
  i2410.sortingLayerName = i2411[6]
  i2410.sortingOrder = i2411[7]
  i2410.scaleFactor = i2411[8]
  request.r(i2411[9], i2411[10], 0, i2410, 'worldCamera')
  i2410.overrideSorting = !!i2411[11]
  i2410.pixelPerfect = !!i2411[12]
  i2410.targetDisplay = i2411[13]
  i2410.overridePixelPerfect = !!i2411[14]
  return i2410
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2412 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2413 = data
  i2412.m_UiScaleMode = i2413[0]
  i2412.m_ReferencePixelsPerUnit = i2413[1]
  i2412.m_ScaleFactor = i2413[2]
  i2412.m_ReferenceResolution = new pc.Vec2( i2413[3], i2413[4] )
  i2412.m_ScreenMatchMode = i2413[5]
  i2412.m_MatchWidthOrHeight = i2413[6]
  i2412.m_PhysicalUnit = i2413[7]
  i2412.m_FallbackScreenDPI = i2413[8]
  i2412.m_DefaultSpriteDPI = i2413[9]
  i2412.m_DynamicPixelsPerUnit = i2413[10]
  i2412.m_PresetInfoIsWorld = !!i2413[11]
  return i2412
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2414 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2415 = data
  i2414.m_IgnoreReversedGraphics = !!i2415[0]
  i2414.m_BlockingObjects = i2415[1]
  i2414.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2415[2] )
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2417 = data
  i2416.cullTransparentMesh = !!i2417[0]
  return i2416
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2418 = root || request.c( 'UnityEngine.UI.Image' )
  var i2419 = data
  request.r(i2419[0], i2419[1], 0, i2418, 'm_Sprite')
  i2418.m_Type = i2419[2]
  i2418.m_PreserveAspect = !!i2419[3]
  i2418.m_FillCenter = !!i2419[4]
  i2418.m_FillMethod = i2419[5]
  i2418.m_FillAmount = i2419[6]
  i2418.m_FillClockwise = !!i2419[7]
  i2418.m_FillOrigin = i2419[8]
  i2418.m_UseSpriteMesh = !!i2419[9]
  i2418.m_PixelsPerUnitMultiplier = i2419[10]
  request.r(i2419[11], i2419[12], 0, i2418, 'm_Material')
  i2418.m_Maskable = !!i2419[13]
  i2418.m_Color = new pc.Color(i2419[14], i2419[15], i2419[16], i2419[17])
  i2418.m_RaycastTarget = !!i2419[18]
  i2418.m_RaycastPadding = new pc.Vec4( i2419[19], i2419[20], i2419[21], i2419[22] )
  return i2418
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2420 = root || request.c( 'UnityEngine.UI.Text' )
  var i2421 = data
  i2420.m_FontData = request.d('UnityEngine.UI.FontData', i2421[0], i2420.m_FontData)
  i2420.m_Text = i2421[1]
  request.r(i2421[2], i2421[3], 0, i2420, 'm_Material')
  i2420.m_Maskable = !!i2421[4]
  i2420.m_Color = new pc.Color(i2421[5], i2421[6], i2421[7], i2421[8])
  i2420.m_RaycastTarget = !!i2421[9]
  i2420.m_RaycastPadding = new pc.Vec4( i2421[10], i2421[11], i2421[12], i2421[13] )
  return i2420
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2422 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2423 = data
  request.r(i2423[0], i2423[1], 0, i2422, 'm_Font')
  i2422.m_FontSize = i2423[2]
  i2422.m_FontStyle = i2423[3]
  i2422.m_BestFit = !!i2423[4]
  i2422.m_MinSize = i2423[5]
  i2422.m_MaxSize = i2423[6]
  i2422.m_Alignment = i2423[7]
  i2422.m_AlignByGeometry = !!i2423[8]
  i2422.m_RichText = !!i2423[9]
  i2422.m_HorizontalOverflow = i2423[10]
  i2422.m_VerticalOverflow = i2423[11]
  i2422.m_LineSpacing = i2423[12]
  return i2422
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i2424 = root || request.c( 'UnityEngine.UI.Outline' )
  var i2425 = data
  i2424.m_EffectColor = new pc.Color(i2425[0], i2425[1], i2425[2], i2425[3])
  i2424.m_EffectDistance = new pc.Vec2( i2425[4], i2425[5] )
  i2424.m_UseGraphicAlpha = !!i2425[6]
  return i2424
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2426 = root || request.c( 'UnityEngine.UI.Button' )
  var i2427 = data
  i2426.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2427[0], i2426.m_OnClick)
  i2426.m_Navigation = request.d('UnityEngine.UI.Navigation', i2427[1], i2426.m_Navigation)
  i2426.m_Transition = i2427[2]
  i2426.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2427[3], i2426.m_Colors)
  i2426.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2427[4], i2426.m_SpriteState)
  i2426.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2427[5], i2426.m_AnimationTriggers)
  i2426.m_Interactable = !!i2427[6]
  request.r(i2427[7], i2427[8], 0, i2426, 'm_TargetGraphic')
  return i2426
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2428 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2429 = data
  i2428.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2429[0], i2428.m_PersistentCalls)
  return i2428
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2430 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2431 = data
  var i2433 = i2431[0]
  var i2432 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.add(request.d('UnityEngine.Events.PersistentCall', i2433[i + 0]));
  }
  i2430.m_Calls = i2432
  return i2430
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2436 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2437 = data
  request.r(i2437[0], i2437[1], 0, i2436, 'm_Target')
  i2436.m_TargetAssemblyTypeName = i2437[2]
  i2436.m_MethodName = i2437[3]
  i2436.m_Mode = i2437[4]
  i2436.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2437[5], i2436.m_Arguments)
  i2436.m_CallState = i2437[6]
  return i2436
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2438 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2439 = data
  request.r(i2439[0], i2439[1], 0, i2438, 'm_ObjectArgument')
  i2438.m_ObjectArgumentAssemblyTypeName = i2439[2]
  i2438.m_IntArgument = i2439[3]
  i2438.m_FloatArgument = i2439[4]
  i2438.m_StringArgument = i2439[5]
  i2438.m_BoolArgument = !!i2439[6]
  return i2438
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2440 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2441 = data
  i2440.m_Mode = i2441[0]
  i2440.m_WrapAround = !!i2441[1]
  request.r(i2441[2], i2441[3], 0, i2440, 'm_SelectOnUp')
  request.r(i2441[4], i2441[5], 0, i2440, 'm_SelectOnDown')
  request.r(i2441[6], i2441[7], 0, i2440, 'm_SelectOnLeft')
  request.r(i2441[8], i2441[9], 0, i2440, 'm_SelectOnRight')
  return i2440
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2442 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2443 = data
  i2442.m_NormalColor = new pc.Color(i2443[0], i2443[1], i2443[2], i2443[3])
  i2442.m_HighlightedColor = new pc.Color(i2443[4], i2443[5], i2443[6], i2443[7])
  i2442.m_PressedColor = new pc.Color(i2443[8], i2443[9], i2443[10], i2443[11])
  i2442.m_SelectedColor = new pc.Color(i2443[12], i2443[13], i2443[14], i2443[15])
  i2442.m_DisabledColor = new pc.Color(i2443[16], i2443[17], i2443[18], i2443[19])
  i2442.m_ColorMultiplier = i2443[20]
  i2442.m_FadeDuration = i2443[21]
  return i2442
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2444 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2445 = data
  request.r(i2445[0], i2445[1], 0, i2444, 'm_HighlightedSprite')
  request.r(i2445[2], i2445[3], 0, i2444, 'm_PressedSprite')
  request.r(i2445[4], i2445[5], 0, i2444, 'm_SelectedSprite')
  request.r(i2445[6], i2445[7], 0, i2444, 'm_DisabledSprite')
  return i2444
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2446 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2447 = data
  i2446.m_NormalTrigger = i2447[0]
  i2446.m_HighlightedTrigger = i2447[1]
  i2446.m_PressedTrigger = i2447[2]
  i2446.m_SelectedTrigger = i2447[3]
  i2446.m_DisabledTrigger = i2447[4]
  return i2446
}

Deserializers["RotateAround"] = function (request, data, root) {
  var i2448 = root || request.c( 'RotateAround' )
  var i2449 = data
  return i2448
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2450 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2451 = data
  request.r(i2451[0], i2451[1], 0, i2450, 'm_Texture')
  i2450.m_UVRect = UnityEngine.Rect.MinMaxRect(i2451[2], i2451[3], i2451[4], i2451[5])
  request.r(i2451[6], i2451[7], 0, i2450, 'm_Material')
  i2450.m_Maskable = !!i2451[8]
  i2450.m_Color = new pc.Color(i2451[9], i2451[10], i2451[11], i2451[12])
  i2450.m_RaycastTarget = !!i2451[13]
  i2450.m_RaycastPadding = new pc.Vec4( i2451[14], i2451[15], i2451[16], i2451[17] )
  return i2450
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2452 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2453 = data
  request.r(i2453[0], i2453[1], 0, i2452, 'm_FirstSelected')
  i2452.m_sendNavigationEvents = !!i2453[2]
  i2452.m_DragThreshold = i2453[3]
  return i2452
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2454 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2455 = data
  i2454.m_HorizontalAxis = i2455[0]
  i2454.m_VerticalAxis = i2455[1]
  i2454.m_SubmitButton = i2455[2]
  i2454.m_CancelButton = i2455[3]
  i2454.m_InputActionsPerSecond = i2455[4]
  i2454.m_RepeatDelay = i2455[5]
  i2454.m_ForceModuleActive = !!i2455[6]
  return i2454
}

Deserializers["TouchRotateSingle"] = function (request, data, root) {
  var i2456 = root || request.c( 'TouchRotateSingle' )
  var i2457 = data
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2459 = data
  i2458.ambientIntensity = i2459[0]
  i2458.reflectionIntensity = i2459[1]
  i2458.ambientMode = i2459[2]
  i2458.ambientLight = new pc.Color(i2459[3], i2459[4], i2459[5], i2459[6])
  i2458.ambientSkyColor = new pc.Color(i2459[7], i2459[8], i2459[9], i2459[10])
  i2458.ambientGroundColor = new pc.Color(i2459[11], i2459[12], i2459[13], i2459[14])
  i2458.ambientEquatorColor = new pc.Color(i2459[15], i2459[16], i2459[17], i2459[18])
  i2458.fogColor = new pc.Color(i2459[19], i2459[20], i2459[21], i2459[22])
  i2458.fogEndDistance = i2459[23]
  i2458.fogStartDistance = i2459[24]
  i2458.fogDensity = i2459[25]
  i2458.fog = !!i2459[26]
  request.r(i2459[27], i2459[28], 0, i2458, 'skybox')
  i2458.fogMode = i2459[29]
  var i2461 = i2459[30]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2461[i + 0]) );
  }
  i2458.lightmaps = i2460
  i2458.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2459[31], i2458.lightProbes)
  i2458.lightmapsMode = i2459[32]
  i2458.environmentLightingMode = i2459[33]
  i2458.ambientProbe = new pc.SphericalHarmonicsL2(i2459[34])
  request.r(i2459[35], i2459[36], 0, i2458, 'customReflection')
  request.r(i2459[37], i2459[38], 0, i2458, 'defaultReflection')
  i2458.defaultReflectionMode = i2459[39]
  i2458.defaultReflectionResolution = i2459[40]
  i2458.sunLightObjectId = i2459[41]
  i2458.pixelLightCount = i2459[42]
  i2458.defaultReflectionHDR = !!i2459[43]
  i2458.hasLightDataAsset = !!i2459[44]
  i2458.hasManualGenerate = !!i2459[45]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2465 = data
  request.r(i2465[0], i2465[1], 0, i2464, 'lightmapColor')
  request.r(i2465[2], i2465[3], 0, i2464, 'lightmapDirection')
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2466 = root || new UnityEngine.LightProbes()
  var i2467 = data
  return i2466
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2474 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2475 = data
  i2474.useSafeMode = !!i2475[0]
  i2474.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2475[1], i2474.safeModeOptions)
  i2474.timeScale = i2475[2]
  i2474.useSmoothDeltaTime = !!i2475[3]
  i2474.maxSmoothUnscaledTime = i2475[4]
  i2474.rewindCallbackMode = i2475[5]
  i2474.showUnityEditorReport = !!i2475[6]
  i2474.logBehaviour = i2475[7]
  i2474.drawGizmos = !!i2475[8]
  i2474.defaultRecyclable = !!i2475[9]
  i2474.defaultAutoPlay = i2475[10]
  i2474.defaultUpdateType = i2475[11]
  i2474.defaultTimeScaleIndependent = !!i2475[12]
  i2474.defaultEaseType = i2475[13]
  i2474.defaultEaseOvershootOrAmplitude = i2475[14]
  i2474.defaultEasePeriod = i2475[15]
  i2474.defaultAutoKill = !!i2475[16]
  i2474.defaultLoopType = i2475[17]
  i2474.showPreviewPanel = !!i2475[18]
  i2474.storeSettingsLocation = i2475[19]
  i2474.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2475[20], i2474.modules)
  i2474.showPlayingTweens = !!i2475[21]
  i2474.showPausedTweens = !!i2475[22]
  return i2474
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2476 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2477 = data
  i2476.nestedTweenFailureBehaviour = i2477[0]
  return i2476
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2478 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2479 = data
  i2478.showPanel = !!i2479[0]
  i2478.audioEnabled = !!i2479[1]
  i2478.physicsEnabled = !!i2479[2]
  i2478.physics2DEnabled = !!i2479[3]
  i2478.spriteEnabled = !!i2479[4]
  i2478.uiEnabled = !!i2479[5]
  i2478.textMeshProEnabled = !!i2479[6]
  i2478.tk2DEnabled = !!i2479[7]
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2481 = data
  var i2483 = i2481[0]
  var i2482 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.add(i2483[i + 0]);
  }
  i2480.invalidShaderVariants = i2482
  i2480.name = i2481[1]
  i2480.guid = i2481[2]
  var i2485 = i2481[3]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( i2485[i + 0] );
  }
  i2480.shaderDefinedKeywords = i2484
  var i2487 = i2481[4]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2487[i + 0]) );
  }
  i2480.passes = i2486
  var i2489 = i2481[5]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2489[i + 0]) );
  }
  i2480.defaultParameterValues = i2488
  request.r(i2481[6], i2481[7], 0, i2480, 'unityFallbackShader')
  i2480.readDepth = !!i2481[8]
  i2480.isCreatedByShaderGraph = !!i2481[9]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2496 = root || new pc.UnityShaderPass()
  var i2497 = data
  i2496.passType = i2497[0]
  i2496.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[1], i2496.zTest)
  i2496.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[2], i2496.zWrite)
  i2496.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[3], i2496.culling)
  i2496.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2497[4], i2496.blending)
  i2496.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2497[5], i2496.alphaBlending)
  i2496.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[6], i2496.colorWriteMask)
  i2496.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[7], i2496.offsetUnits)
  i2496.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[8], i2496.offsetFactor)
  i2496.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[9], i2496.stencilRef)
  i2496.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[10], i2496.stencilReadMask)
  i2496.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[11], i2496.stencilWriteMask)
  i2496.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2497[12], i2496.stencilOp)
  i2496.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2497[13], i2496.stencilOpFront)
  i2496.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2497[14], i2496.stencilOpBack)
  var i2499 = i2497[15]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2499[i + 0]) );
  }
  i2496.tags = i2498
  var i2501 = i2497[16]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( i2501[i + 0] );
  }
  i2496.passDefinedKeywords = i2500
  var i2503 = i2497[17]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2503[i + 0]) );
  }
  i2496.variants = i2502
  i2496.readDepth = !!i2497[18]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2505 = data
  i2504.val = i2505[0]
  i2504.name = i2505[1]
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2507 = data
  i2506.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2507[0], i2506.src)
  i2506.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2507[1], i2506.dst)
  i2506.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2507[2], i2506.op)
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2509 = data
  i2508.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2509[0], i2508.pass)
  i2508.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2509[1], i2508.fail)
  i2508.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2509[2], i2508.zFail)
  i2508.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2509[3], i2508.comp)
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2513 = data
  i2512.name = i2513[0]
  i2512.value = i2513[1]
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2517 = data
  var i2519 = i2517[0]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.push( i2519[i + 0] );
  }
  i2516.keywords = i2518
  i2516.vertexProgram = i2517[1]
  i2516.fragmentProgram = i2517[2]
  i2516.readDepth = !!i2517[3]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2523 = data
  i2522.name = i2523[0]
  i2522.type = i2523[1]
  i2522.value = new pc.Vec4( i2523[2], i2523[3], i2523[4], i2523[5] )
  i2522.textureValue = i2523[6]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2525 = data
  i2524.name = i2525[0]
  request.r(i2525[1], i2525[2], 0, i2524, 'texture')
  i2524.aabb = i2525[3]
  i2524.vertices = i2525[4]
  i2524.triangles = i2525[5]
  i2524.textureRect = UnityEngine.Rect.MinMaxRect(i2525[6], i2525[7], i2525[8], i2525[9])
  i2524.packedRect = UnityEngine.Rect.MinMaxRect(i2525[10], i2525[11], i2525[12], i2525[13])
  i2524.border = new pc.Vec4( i2525[14], i2525[15], i2525[16], i2525[17] )
  i2524.transparency = i2525[18]
  i2524.bounds = i2525[19]
  i2524.pixelsPerUnit = i2525[20]
  i2524.textureWidth = i2525[21]
  i2524.textureHeight = i2525[22]
  i2524.nativeSize = new pc.Vec2( i2525[23], i2525[24] )
  i2524.pivot = new pc.Vec2( i2525[25], i2525[26] )
  i2524.textureRectOffset = new pc.Vec2( i2525[27], i2525[28] )
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2527 = data
  i2526.name = i2527[0]
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2529 = data
  i2528.name = i2529[0]
  i2528.wrapMode = i2529[1]
  i2528.isLooping = !!i2529[2]
  i2528.length = i2529[3]
  var i2531 = i2529[4]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2531[i + 0]) );
  }
  i2528.curves = i2530
  var i2533 = i2529[5]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2533[i + 0]) );
  }
  i2528.events = i2532
  i2528.halfPrecision = !!i2529[6]
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2537 = data
  i2536.path = i2537[0]
  i2536.componentType = i2537[1]
  i2536.property = i2537[2]
  i2536.keys = i2537[3]
  var i2539 = i2537[4]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2539[i + 0]) );
  }
  i2536.objectReferenceKeys = i2538
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2543 = data
  i2542.time = i2543[0]
  request.r(i2543[1], i2543[2], 0, i2542, 'value')
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2547 = data
  i2546.functionName = i2547[0]
  i2546.floatParameter = i2547[1]
  i2546.intParameter = i2547[2]
  i2546.stringParameter = i2547[3]
  request.r(i2547[4], i2547[5], 0, i2546, 'objectReferenceParameter')
  i2546.time = i2547[6]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2549 = data
  i2548.name = i2549[0]
  i2548.ascent = i2549[1]
  i2548.originalLineHeight = i2549[2]
  i2548.fontSize = i2549[3]
  var i2551 = i2549[4]
  var i2550 = []
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2551[i + 0]) );
  }
  i2548.characterInfo = i2550
  request.r(i2549[5], i2549[6], 0, i2548, 'texture')
  i2548.originalFontSize = i2549[7]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2555 = data
  i2554.index = i2555[0]
  i2554.advance = i2555[1]
  i2554.bearing = i2555[2]
  i2554.glyphWidth = i2555[3]
  i2554.glyphHeight = i2555[4]
  i2554.minX = i2555[5]
  i2554.maxX = i2555[6]
  i2554.minY = i2555[7]
  i2554.maxY = i2555[8]
  i2554.uvBottomLeftX = i2555[9]
  i2554.uvBottomLeftY = i2555[10]
  i2554.uvBottomRightX = i2555[11]
  i2554.uvBottomRightY = i2555[12]
  i2554.uvTopLeftX = i2555[13]
  i2554.uvTopLeftY = i2555[14]
  i2554.uvTopRightX = i2555[15]
  i2554.uvTopRightY = i2555[16]
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2557 = data
  i2556.name = i2557[0]
  var i2559 = i2557[1]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2559[i + 0]) );
  }
  i2556.states = i2558
  var i2561 = i2557[2]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2561[i + 0]) );
  }
  i2556.layers = i2560
  var i2563 = i2557[3]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2563[i + 0]) );
  }
  i2556.parameters = i2562
  var i2565 = i2557[4]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( i2565[i + 0] );
  }
  i2556.animationClips = i2564
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2569 = data
  i2568.cycleOffset = i2569[0]
  i2568.cycleOffsetParameter = i2569[1]
  i2568.cycleOffsetParameterActive = !!i2569[2]
  i2568.mirror = !!i2569[3]
  i2568.mirrorParameter = i2569[4]
  i2568.mirrorParameterActive = !!i2569[5]
  i2568.motionId = i2569[6]
  i2568.nameHash = i2569[7]
  i2568.fullPathHash = i2569[8]
  i2568.speed = i2569[9]
  i2568.speedParameter = i2569[10]
  i2568.speedParameterActive = !!i2569[11]
  i2568.tag = i2569[12]
  i2568.name = i2569[13]
  i2568.writeDefaultValues = !!i2569[14]
  var i2571 = i2569[15]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2571[i + 0]) );
  }
  i2568.transitions = i2570
  var i2573 = i2569[16]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 2) {
  request.r(i2573[i + 0], i2573[i + 1], 2, i2572, '')
  }
  i2568.behaviours = i2572
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2577 = data
  i2576.fullPath = i2577[0]
  i2576.canTransitionToSelf = !!i2577[1]
  i2576.duration = i2577[2]
  i2576.exitTime = i2577[3]
  i2576.hasExitTime = !!i2577[4]
  i2576.hasFixedDuration = !!i2577[5]
  i2576.interruptionSource = i2577[6]
  i2576.offset = i2577[7]
  i2576.orderedInterruption = !!i2577[8]
  i2576.destinationStateNameHash = i2577[9]
  i2576.destinationStateMachineId = i2577[10]
  i2576.isExit = !!i2577[11]
  i2576.mute = !!i2577[12]
  i2576.solo = !!i2577[13]
  var i2579 = i2577[14]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2579[i + 0]) );
  }
  i2576.conditions = i2578
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2585 = data
  i2584.blendingMode = i2585[0]
  i2584.defaultWeight = i2585[1]
  i2584.name = i2585[2]
  i2584.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2585[3], i2584.stateMachine)
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2587 = data
  i2586.id = i2587[0]
  i2586.defaultStateNameHash = i2587[1]
  var i2589 = i2587[2]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2589[i + 0]) );
  }
  i2586.entryTransitions = i2588
  var i2591 = i2587[3]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2591[i + 0]) );
  }
  i2586.anyStateTransitions = i2590
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2595 = data
  i2594.destinationStateNameHash = i2595[0]
  i2594.destinationStateMachineId = i2595[1]
  i2594.isExit = !!i2595[2]
  i2594.mute = !!i2595[3]
  i2594.solo = !!i2595[4]
  var i2597 = i2595[5]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2597[i + 0]) );
  }
  i2594.conditions = i2596
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2601 = data
  i2600.mode = i2601[0]
  i2600.parameter = i2601[1]
  i2600.threshold = i2601[2]
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2605 = data
  i2604.defaultBool = !!i2605[0]
  i2604.defaultFloat = i2605[1]
  i2604.defaultInt = i2605[2]
  i2604.name = i2605[3]
  i2604.nameHash = i2605[4]
  i2604.type = i2605[5]
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2607 = data
  var i2609 = i2607[0]
  var i2608 = []
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2609[i + 0]) );
  }
  i2606.files = i2608
  i2606.componentToPrefabIds = i2607[1]
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2613 = data
  i2612.path = i2613[0]
  request.r(i2613[1], i2613[2], 0, i2612, 'unityObject')
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2615 = data
  var i2617 = i2615[0]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2617[i + 0]) );
  }
  i2614.scriptsExecutionOrder = i2616
  var i2619 = i2615[1]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2619[i + 0]) );
  }
  i2614.sortingLayers = i2618
  var i2621 = i2615[2]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2621[i + 0]) );
  }
  i2614.cullingLayers = i2620
  i2614.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2615[3], i2614.timeSettings)
  i2614.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2615[4], i2614.physicsSettings)
  i2614.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2615[5], i2614.physics2DSettings)
  i2614.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2615[6], i2614.qualitySettings)
  i2614.removeShadows = !!i2615[7]
  i2614.autoInstantiatePrefabs = !!i2615[8]
  i2614.enableAutoInstancing = !!i2615[9]
  i2614.lightmapEncodingQuality = i2615[10]
  i2614.desiredColorSpace = i2615[11]
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2625 = data
  i2624.name = i2625[0]
  i2624.value = i2625[1]
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2629 = data
  i2628.id = i2629[0]
  i2628.name = i2629[1]
  i2628.value = i2629[2]
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2633 = data
  i2632.id = i2633[0]
  i2632.name = i2633[1]
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2635 = data
  i2634.fixedDeltaTime = i2635[0]
  i2634.maximumDeltaTime = i2635[1]
  i2634.timeScale = i2635[2]
  i2634.maximumParticleTimestep = i2635[3]
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2637 = data
  i2636.gravity = new pc.Vec3( i2637[0], i2637[1], i2637[2] )
  i2636.defaultSolverIterations = i2637[3]
  i2636.bounceThreshold = i2637[4]
  i2636.autoSyncTransforms = !!i2637[5]
  i2636.autoSimulation = !!i2637[6]
  var i2639 = i2637[7]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2639[i + 0]) );
  }
  i2636.collisionMatrix = i2638
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2643 = data
  i2642.enabled = !!i2643[0]
  i2642.layerId = i2643[1]
  i2642.otherLayerId = i2643[2]
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2645 = data
  request.r(i2645[0], i2645[1], 0, i2644, 'material')
  i2644.gravity = new pc.Vec2( i2645[2], i2645[3] )
  i2644.positionIterations = i2645[4]
  i2644.velocityIterations = i2645[5]
  i2644.velocityThreshold = i2645[6]
  i2644.maxLinearCorrection = i2645[7]
  i2644.maxAngularCorrection = i2645[8]
  i2644.maxTranslationSpeed = i2645[9]
  i2644.maxRotationSpeed = i2645[10]
  i2644.timeToSleep = i2645[11]
  i2644.linearSleepTolerance = i2645[12]
  i2644.angularSleepTolerance = i2645[13]
  i2644.defaultContactOffset = i2645[14]
  i2644.autoSimulation = !!i2645[15]
  i2644.queriesHitTriggers = !!i2645[16]
  i2644.queriesStartInColliders = !!i2645[17]
  i2644.callbacksOnDisable = !!i2645[18]
  i2644.reuseCollisionCallbacks = !!i2645[19]
  i2644.autoSyncTransforms = !!i2645[20]
  var i2647 = i2645[21]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2647[i + 0]) );
  }
  i2644.collisionMatrix = i2646
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2651 = data
  i2650.enabled = !!i2651[0]
  i2650.layerId = i2651[1]
  i2650.otherLayerId = i2651[2]
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2653 = data
  var i2655 = i2653[0]
  var i2654 = []
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2655[i + 0]) );
  }
  i2652.qualityLevels = i2654
  var i2657 = i2653[1]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.push( i2657[i + 0] );
  }
  i2652.names = i2656
  i2652.shadows = i2653[2]
  i2652.anisotropicFiltering = i2653[3]
  i2652.antiAliasing = i2653[4]
  i2652.lodBias = i2653[5]
  i2652.shadowCascades = i2653[6]
  i2652.shadowDistance = i2653[7]
  i2652.shadowmaskMode = i2653[8]
  i2652.shadowProjection = i2653[9]
  i2652.shadowResolution = i2653[10]
  i2652.softParticles = !!i2653[11]
  i2652.softVegetation = !!i2653[12]
  i2652.activeColorSpace = i2653[13]
  i2652.desiredColorSpace = i2653[14]
  i2652.masterTextureLimit = i2653[15]
  i2652.maxQueuedFrames = i2653[16]
  i2652.particleRaycastBudget = i2653[17]
  i2652.pixelLightCount = i2653[18]
  i2652.realtimeReflectionProbes = !!i2653[19]
  i2652.shadowCascade2Split = i2653[20]
  i2652.shadowCascade4Split = new pc.Vec3( i2653[21], i2653[22], i2653[23] )
  i2652.streamingMipmapsActive = !!i2653[24]
  i2652.vSyncCount = i2653[25]
  i2652.asyncUploadBufferSize = i2653[26]
  i2652.asyncUploadTimeSlice = i2653[27]
  i2652.billboardsFaceCameraPosition = !!i2653[28]
  i2652.shadowNearPlaneOffset = i2653[29]
  i2652.streamingMipmapsMemoryBudget = i2653[30]
  i2652.maximumLODLevel = i2653[31]
  i2652.streamingMipmapsAddAllCameras = !!i2653[32]
  i2652.streamingMipmapsMaxLevelReduction = i2653[33]
  i2652.streamingMipmapsRenderersPerFrame = i2653[34]
  i2652.resolutionScalingFixedDPIFactor = i2653[35]
  i2652.streamingMipmapsMaxFileIORequests = i2653[36]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2663 = data
  i2662.weight = i2663[0]
  i2662.vertices = i2663[1]
  i2662.normals = i2663[2]
  i2662.tangents = i2663[3]
  return i2662
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"time":4,"volume":5,"pitch":6,"enabled":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint":{"angularXDrive":0,"angularXLimitSpring":1,"angularXMotion":2,"angularYLimit":3,"angularYMotion":4,"angularYZDrive":5,"angularYZLimitSpring":6,"angularZLimit":7,"angularZMotion":8,"configuredInWorldSpace":9,"highAngularXLimit":10,"linearLimit":11,"linearLimitSpring":12,"lowAngularXLimit":13,"rotationDriveMode":14,"secondaryAxis":15,"slerpDrive":18,"swapBodies":19,"targetAngularVelocity":20,"targetPosition":23,"targetRotation":26,"targetVelocity":30,"xDrive":33,"xMotion":34,"yDrive":35,"yMotion":36,"zDrive":37,"zMotion":38,"connectedBody":39,"axis":41,"anchor":44,"connectedAnchor":47,"autoConfigureConnectedAnchor":50,"massScale":51,"connectedMassScale":52,"enableCollision":53,"breakForce":54,"breakTorque":55},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"format":6,"wrapMode":7},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"defaultParameterValues":5,"unityFallbackShader":6,"readDepth":8,"isCreatedByShaderGraph":9},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"passDefinedKeywords":16,"variants":17,"readDepth":18},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2,"readDepth":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[22],"60":[24],"61":[9],"62":[9],"63":[9],"64":[9],"65":[9],"66":[9],"19":[9],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[68],"75":[68],"76":[68],"77":[68],"78":[68],"79":[68],"80":[68],"81":[24],"82":[5],"83":[84],"85":[84],"35":[34],"86":[34],"87":[39,34],"88":[5],"89":[39,34],"90":[34],"91":[5,34],"92":[34,39],"93":[34],"94":[34],"95":[34],"38":[35],"40":[39,34],"96":[34],"37":[35],"97":[34],"98":[34],"99":[34],"100":[34],"101":[34],"102":[34],"103":[34],"104":[34],"105":[34],"45":[39,34],"106":[34],"107":[34],"108":[34],"109":[34],"31":[39,34],"110":[34],"111":[47],"112":[47],"48":[47],"113":[47],"114":[24],"115":[24]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","UnityEngine.BoxCollider","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.MonoBehaviour","PlayerController","GroundCheck","UnityEngine.Animator","UnityEngine.GameObject","Attendee","UnityEngine.ConfigurableJoint","CopyMotion","UnityEngine.SphereCollider","UnityEngine.SkinnedMeshRenderer","UnityEditor.Animations.AnimatorController","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Light","MatchManager","BotPlayer","UnityEngine.UI.Text","GameManager","LunaRagdollControl","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Font","UnityEngine.UI.Outline","UnityEngine.UI.Button","RotateAround","UnityEngine.UI.RawImage","UnityEngine.RenderTexture","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TouchRotateSingle","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2020.3.10f1";

Deserializers.productName = "ply_monster_party";

Deserializers.lunaInitializationTime = "03/11/2022 14:34:43";

Deserializers.lunaVersion = "3.1.0";

Deserializers.lunaSHA = "b768aaee48c111c8435c275fdba35f49d51fd992";

Deserializers.packagesInfo = "com.unity.collab-proxy: 1.5.7,com.unity.ide.rider: 2.0.7,com.unity.ide.visualstudio: 2.0.8,com.unity.ide.vscode: 1.2.3,com.unity.test-framework: 1.1.24,com.unity.textmeshpro: 3.0.6,com.unity.timeline: 1.4.8,com.unity.ugui: 1.0.0,uk.lunalabs.luna: file:C:/Users/Admin/Downloads/3.1.0/scripts,com.unity.modules.ai: 1.0.0,com.unity.modules.androidjni: 1.0.0,com.unity.modules.animation: 1.0.0,com.unity.modules.assetbundle: 1.0.0,com.unity.modules.audio: 1.0.0,com.unity.modules.cloth: 1.0.0,com.unity.modules.director: 1.0.0,com.unity.modules.imageconversion: 1.0.0,com.unity.modules.imgui: 1.0.0,com.unity.modules.jsonserialize: 1.0.0,com.unity.modules.particlesystem: 1.0.0,com.unity.modules.physics: 1.0.0,com.unity.modules.physics2d: 1.0.0,com.unity.modules.screencapture: 1.0.0,com.unity.modules.terrain: 1.0.0,com.unity.modules.terrainphysics: 1.0.0,com.unity.modules.tilemap: 1.0.0,com.unity.modules.ui: 1.0.0,com.unity.modules.uielements: 1.0.0,com.unity.modules.umbra: 1.0.0,com.unity.modules.unityanalytics: 1.0.0,com.unity.modules.unitywebrequest: 1.0.0,com.unity.modules.unitywebrequestassetbundle: 1.0.0,com.unity.modules.unitywebrequestaudio: 1.0.0,com.unity.modules.unitywebrequesttexture: 1.0.0,com.unity.modules.unitywebrequestwww: 1.0.0,com.unity.modules.vehicles: 1.0.0,com.unity.modules.video: 1.0.0,com.unity.modules.vr: 1.0.0,com.unity.modules.wind: 1.0.0,com.unity.modules.xr: 1.0.0";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.ply_monster_party";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "fa6f6af1-b37d-4b2b-810b-30fa1e83b1ca";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

