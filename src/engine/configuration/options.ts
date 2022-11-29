import { NameText, UnitText } from 'sonolus-core'
import { defineOptions } from 'sonolus.js'

export const options = defineOptions({
    isAutoplay: {
        name: NameText.AutoPlay,
        scope: 'Bandori',
        standard: true,
        type: 'toggle',
        def: 0,
    },
    isStrictJudgment: {
        name: NameText.StrictJudgment,
        scope: 'Bandori',
        standard: true,
        type: 'toggle',
        def: 0,
    },
    hidden: {
        name: NameText.Hidden,
        standard: true,
        type: 'slider',
        def: 0,
        min: 0,
        max: 1,
        step: 0.05,
        unit: UnitText.Percentage,
    },
    speed: {
        name: NameText.LevelSpeed,
        standard: true,
        type: 'slider',
        def: 1,
        min: 0.5,
        max: 2,
        step: 0.05,
        unit: UnitText.Percentage,
    },
    noteSpeed: {
        name: NameText.NoteSpeed,
        scope: 'Bandori',
        type: 'slider',
        def: 5,
        min: 1,
        max: 15.9,
        step: 0.1,
    },
    noteSize: {
        name: NameText.NoteSize,
        scope: 'Bandori',
        type: 'slider',
        def: 1,
        min: 0.1,
        max: 2,
        step: 0.05,
        unit: UnitText.Percentage,
    },
    noteEffectSize: {
        name: NameText.NoteEffectSize,
        scope: 'Bandori',
        type: 'slider',
        def: 1,
        min: 0.1,
        max: 2,
        step: 0.05,
        unit: UnitText.Percentage,
    },
    connectorAlpha: {
        name: NameText.ConnectorTransparency,
        scope: 'Bandori',
        type: 'slider',
        def: 0.8,
        min: 0.1,
        max: 1,
        step: 0.05,
        unit: UnitText.Percentage,
    },
    stageCover: {
        name: NameText.VerticalStageCover,
        scope: 'Bandori',
        type: 'slider',
        def: 0,
        min: 0,
        max: 1,
        step: 0.05,
        unit: UnitText.Percentage,
    },
    isMirrorEnabled: {
        name: NameText.MirrorLevel,
        type: 'toggle',
        def: 0,
    },
    isSimLineEnabled: {
        name: NameText.SimultaneousLineVisibility,
        scope: 'Bandori',
        type: 'toggle',
        def: 1,
    },
    isSFXEnabled: {
        name: NameText.SFX,
        scope: 'Bandori',
        type: 'toggle',
        def: 1,
    },
    isAutoSFX: {
        name: NameText.AutoSFX,
        scope: 'Bandori',
        type: 'toggle',
        def: 0,
    },
    isNoteEffectEnabled: {
        name: NameText.NoteEffect,
        scope: 'Bandori',
        type: 'toggle',
        def: 1,
    },
    isLaneEffectEnabled: {
        name: NameText.LaneEffect,
        scope: 'Bandori',
        type: 'toggle',
        def: 1,
    },
    isSlotEffectEnabled: {
        name: NameText.SlotEffect,
        scope: 'Bandori',
        type: 'toggle',
        def: 1,
    },
    isStageAspectRatioLocked: {
        name: NameText.LockStageAspectRatio,
        scope: 'Bandori',
        type: 'toggle',
        def: 1,
    },
})
