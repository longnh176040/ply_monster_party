if ( TRACE ) { TRACE( JSON.parse( '["UnityEngine.Rendering.Universal.UniversalRenderPipelineAsset#init","UnityEngine.Rendering.Universal.UniversalRenderPipelineAsset#init"]' ) ); }
/**
 * @compiler Bridge.NET 17.9.12-luna
 */
Bridge.assembly("UnityEngine.UniversalRenderPipeline", function ($asm, globals) {
    "use strict";

    /*UnityEngine.Rendering.Universal.ColorGradingMode start.*/
    /** @namespace UnityEngine.Rendering.Universal */

    /**
     * The available color grading modes to use for the Project.
     *
     * @public
     * @class UnityEngine.Rendering.Universal.ColorGradingMode
     */
    Bridge.define("UnityEngine.Rendering.Universal.ColorGradingMode", {
        $kind: "enum",
        statics: {
            fields: {
                /**
                 * This mode follows a more classic workflow. Unity applies a limited range of color
                     grading after tonemapping.
                 *
                 * @static
                 * @public
                 * @memberof UnityEngine.Rendering.Universal.ColorGradingMode
                 * @constant
                 * @default 0
                 * @type UnityEngine.Rendering.Universal.ColorGradingMode
                 */
                LowDynamicRange: 0,
                /**
                 * This mode works best for high precision grading similar to movie production workflow.
                     Unity applies color grading before tonemapping.
                 *
                 * @static
                 * @public
                 * @memberof UnityEngine.Rendering.Universal.ColorGradingMode
                 * @constant
                 * @default 1
                 * @type UnityEngine.Rendering.Universal.ColorGradingMode
                 */
                HighDynamicRange: 1
            }
        }
    });
    /*UnityEngine.Rendering.Universal.ColorGradingMode end.*/

    /*UnityEngine.Rendering.Universal.DefaultMaterialType start.*/
    Bridge.define("UnityEngine.Rendering.Universal.DefaultMaterialType", {
        $kind: "enum",
        statics: {
            fields: {
                Standard: 0,
                Particle: 1,
                Terrain: 2,
                Sprite: 3,
                UnityBuiltinDefault: 4
            }
        }
    });
    /*UnityEngine.Rendering.Universal.DefaultMaterialType end.*/

    /*UnityEngine.Rendering.Universal.Downsampling start.*/
    Bridge.define("UnityEngine.Rendering.Universal.Downsampling", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                _2xBilinear: 1,
                _4xBox: 2,
                _4xBilinear: 3
            }
        }
    });
    /*UnityEngine.Rendering.Universal.Downsampling end.*/

    /*UnityEngine.Rendering.Universal.LightRenderingMode start.*/
    Bridge.define("UnityEngine.Rendering.Universal.LightRenderingMode", {
        $kind: "enum",
        statics: {
            fields: {
                Disabled: 0,
                PerVertex: 2,
                PerPixel: 1
            }
        }
    });
    /*UnityEngine.Rendering.Universal.LightRenderingMode end.*/

    /*UnityEngine.Rendering.Universal.MsaaQuality start.*/
    Bridge.define("UnityEngine.Rendering.Universal.MsaaQuality", {
        $kind: "enum",
        statics: {
            fields: {
                Disabled: 1,
                _2x: 2,
                _4x: 4,
                _8x: 8
            }
        }
    });
    /*UnityEngine.Rendering.Universal.MsaaQuality end.*/

    /*UnityEngine.Rendering.Universal.RendererType start.*/
    Bridge.define("UnityEngine.Rendering.Universal.RendererType", {
        $kind: "enum",
        statics: {
            fields: {
                Custom: 0,
                ForwardRenderer: 1,
                _2DRenderer: 2
            }
        }
    });
    /*UnityEngine.Rendering.Universal.RendererType end.*/

    /*UnityEngine.Rendering.Universal.ShaderVariantLogLevel start.*/
    Bridge.define("UnityEngine.Rendering.Universal.ShaderVariantLogLevel", {
        $kind: "enum",
        statics: {
            fields: {
                Disabled: 0,
                OnlyUniversalRPShaders: 1,
                AllShaders: 2
            }
        }
    });
    /*UnityEngine.Rendering.Universal.ShaderVariantLogLevel end.*/

    /*UnityEngine.Rendering.Universal.ShadowCascadesOption start.*/
    Bridge.define("UnityEngine.Rendering.Universal.ShadowCascadesOption", {
        $kind: "enum",
        statics: {
            fields: {
                NoCascades: 0,
                TwoCascades: 1,
                FourCascades: 2
            }
        }
    });
    /*UnityEngine.Rendering.Universal.ShadowCascadesOption end.*/

    /*UnityEngine.Rendering.Universal.ShadowQuality start.*/
    Bridge.define("UnityEngine.Rendering.Universal.ShadowQuality", {
        $kind: "enum",
        statics: {
            fields: {
                Disabled: 0,
                HardShadows: 1,
                SoftShadows: 2
            }
        }
    });
    /*UnityEngine.Rendering.Universal.ShadowQuality end.*/

    /*UnityEngine.Rendering.Universal.ShadowResolution start.*/
    Bridge.define("UnityEngine.Rendering.Universal.ShadowResolution", {
        $kind: "enum",
        statics: {
            fields: {
                _256: 256,
                _512: 512,
                _1024: 1024,
                _2048: 2048,
                _4096: 4096
            }
        }
    });
    /*UnityEngine.Rendering.Universal.ShadowResolution end.*/

    /*UnityEngine.Rendering.Universal.UniversalRenderPipelineAsset start.*/
    Bridge.define("UnityEngine.Rendering.Universal.UniversalRenderPipelineAsset", {
        inherits: [UnityEngine.Rendering.RenderPipelineAsset],
        statics: {
            fields: {
                k_MinLutSize: 0,
                k_MaxLutSize: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "UnityEngine.Rendering.Universal.UniversalRenderPipelineAsset#init", this ); }

                    this.k_MinLutSize = 16;
                    this.k_MaxLutSize = 65;
                }
            }
        },
        fields: {
            supportsAdditionalLightShadows: false,
            maxAdditionalLightsCount: 0,
            additionalLightsRenderingMode: 0,
            additionalLightsShadowmapResolution: 0,
            cascade2Split: 0,
            cascade4Split: null,
            colorGradingLutSize: 0,
            colorGradingMode: 0,
            mainLightRenderingMode: 0,
            mainLightShadowmapResolution: 0,
            supportsMainLightShadows: false,
            mixedLightingSupported: false,
            msaaSampleCount: 0,
            opaqueDownsampling: 0,
            renderScale: 0,
            supportsCameraDepthTexture: false,
            supportsCameraOpaqueTexture: false,
            shadowCascadeOption: 0,
            shadowDepthBias: 0,
            shadowDistance: 0,
            shadowNormalBias: 0,
            supportsSoftShadows: false,
            supportsHDR: false,
            supportsTerrainHoles: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UnityEngine.Rendering.Universal.UniversalRenderPipelineAsset#init", this ); }

                this.cascade4Split = new UnityEngine.Vector3();
                this.maxAdditionalLightsCount = 4;
                this.additionalLightsRenderingMode = UnityEngine.Rendering.Universal.LightRenderingMode.PerPixel;
                this.additionalLightsShadowmapResolution = UnityEngine.Rendering.Universal.ShadowResolution._512;
                this.cascade2Split = 0.25;
                this.cascade4Split = new pc.Vec3( 0.067, 0.2, 0.467 );
                this.colorGradingLutSize = 32;
                this.colorGradingMode = UnityEngine.Rendering.Universal.ColorGradingMode.LowDynamicRange;
                this.mainLightRenderingMode = UnityEngine.Rendering.Universal.LightRenderingMode.PerPixel;
                this.mainLightShadowmapResolution = UnityEngine.Rendering.Universal.ShadowResolution._2048;
                this.supportsMainLightShadows = true;
                this.mixedLightingSupported = true;
                this.msaaSampleCount = UnityEngine.Rendering.Universal.MsaaQuality.Disabled;
                this.opaqueDownsampling = UnityEngine.Rendering.Universal.Downsampling._2xBilinear;
                this.renderScale = 1.0;
                this.shadowCascadeOption = UnityEngine.Rendering.Universal.ShadowCascadesOption.NoCascades;
                this.shadowDepthBias = 1.0;
                this.shadowDistance = 50.0;
                this.shadowNormalBias = 1.0;
                this.supportsTerrainHoles = true;
            }
        }
    });
    /*UnityEngine.Rendering.Universal.UniversalRenderPipelineAsset end.*/

    var $m = Bridge.setMetadata,
        $n = [];

    /*UnityEngine.Rendering.Universal.UniversalRenderPipelineAsset start.*/
    $m("UnityEngine.Rendering.Universal.UniversalRenderPipelineAsset", function () { return {"at":[new System.SerializableAttribute()]}; }, $n);
    /*UnityEngine.Rendering.Universal.UniversalRenderPipelineAsset end.*/

});
