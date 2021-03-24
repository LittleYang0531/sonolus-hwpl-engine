import { defineOptions } from 'sonolus.js'

export const options = defineOptions({
    isAutoplay: {
        name: '#AUTO',
        scope: 'Bandori',
        standard: true,
        type: 'toggle',
        def: 0,
    },
    isRandom: {
        name: '#RANDOM',
        scope: 'Bandori',
        standard: true,
        type: 'toggle',
        def: 0,
    },
    isNoteSpeedRandom: {
        name: '#NOTE_SPEED_RANDOM',
        scope: 'Bandori',
        standard: true,
        type: 'toggle',
        def: 0,
    },
    isStrictJudgment: {
        name: '#JUDGMENT_STRICT',
        scope: 'Bandori',
        standard: true,
        type: 'toggle',
        def: 0,
    },
    levelAudioOffset: {
        name: '#OFFSET_AUDIO',
        type: 'slider',
        def: 0,
        min: -500,
        max: 500,
        step: 1,
        display: 'number',
    },
    levelInputOffset: {
        name: '#OFFSET_INPUT',
        scope: 'Bandori',
        type: 'slider',
        def: 0,
        min: -500,
        max: 500,
        step: 1,
        display: 'number',
    },
    speed: {
        name: '#SPEED',
        standard: true,
        type: 'slider',
        def: 1,
        min: 0.5,
        max: 2,
        step: 0.05,
        display: 'percentage',
    },
    noteSpeed: {
        name: '#NOTE_SPEED',
        scope: 'Bandori',
        type: 'slider',
        def: 5,
        min: 1,
        max: 11.9,
        step: 0.1,
        display: 'number',
    },
    noteSize: {
        name: '#NOTE_SIZE',
        scope: 'Bandori',
        type: 'slider',
        def: 1,
        min: 0.1,
        max: 2,
        step: 0.05,
        display: 'percentage',
    },
    noteEffectSize: {
        name: '#NOTE_EFFECT_SIZE',
        scope: 'Bandori',
        type: 'slider',
        def: 1,
        min: 0.1,
        max: 2,
        step: 0.05,
        display: 'percentage',
    },
    connectorAlpha: {
        name: '#CONNECTOR_ALPHA',
        scope: 'Bandori',
        type: 'slider',
        def: 0.8,
        min: 0.1,
        max: 1,
        step: 0.05,
        display: 'percentage',
    },
    stageCover: {
        name: '#STAGE_COVER_VERTICAL',
        scope: 'Bandori',
        type: 'slider',
        def: 0,
        min: 0,
        max: 1,
        step: 0.05,
        display: 'percentage',
    },
    isMirrorEnabled: {
        name: '#MIRROR',
        type: 'toggle',
        def: 0,
    },
    isSimLineEnabled: {
        name: '#SIMLINE',
        scope: 'Bandori',
        type: 'toggle',
        def: 1,
    },
    isSFXEnabled: {
        name: '#EFFECT',
        scope: 'Bandori',
        type: 'toggle',
        def: 1,
    },
    isNoteEffectEnabled: {
        name: '#NOTE_EFFECT',
        scope: 'Bandori',
        type: 'toggle',
        def: 1,
    },
    isLaneEffectEnabled: {
        name: '#LANE_EFFECT',
        scope: 'Bandori',
        type: 'toggle',
        def: 1,
    },
    isSlotEffectEnabled: {
        name: '#SLOT_EFFECT',
        scope: 'Bandori',
        type: 'toggle',
        def: 1,
    },
    isStageTiltEnabled: {
        name: '#STAGE_TILT',
        scope: 'Bandori',
        type: 'toggle',
        def: 1,
    },
    isStageAspectRatioLocked: {
        name: '#STAGE_ASPECTRATIO_LOCK',
        scope: 'Bandori',
        type: 'toggle',
        def: 1,
    },
    uiJudgmentSize: {
        name: '#UI_JUDGMENT_SIZE',
        scope: 'Bandori',
        type: 'slider',
        def: 1,
        min: 0.1,
        max: 2,
        step: 0.05,
        display: 'percentage',
    },
    uiJudgmentAlpha: {
        name: '#UI_JUDGMENT_ALPHA',
        scope: 'Bandori',
        type: 'slider',
        def: 1,
        min: 0,
        max: 1,
        step: 0.05,
        display: 'percentage',
    },
    uiComboSize: {
        name: '#UI_COMBO_SIZE',
        scope: 'Bandori',
        type: 'slider',
        def: 1,
        min: 0.1,
        max: 2,
        step: 0.05,
        display: 'percentage',
    },
    uiComboAlpha: {
        name: '#UI_COMBO_ALPHA',
        scope: 'Bandori',
        type: 'slider',
        def: 1,
        min: 0,
        max: 1,
        step: 0.05,
        display: 'percentage',
    },
})
