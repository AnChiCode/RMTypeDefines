type MetaDataType = { [key: string]: string | boolean | undefined }
type ToneType = [number, number, number, number]
type ColorType = [number, number, number, number]
// main
declare const scriptUrls: string[]
declare const effekseerWasmUrl = "js/libs/effekseer.wasm"
declare var $plugins: any[]
declare var nw: any
declare var effekseer: any
declare class Main {
    xhrSucceeded: boolean
    loadCount: number
    error: any
    numScripts: number
    constructor()
    run(): void
    showLoadingSpinner(): void
    eraseLoadingSpinner(): void
    testXhr(): void
    hookNwjsClose(): void
    loadMainScripts(): void
    onScriptLoad(): void
    onScriptError(e: any): void
    printError(name: string, message: string): void
    makeErrorHtml(name: string, message: string): string
    onWindowLoad(): void
    onWindowError(event: any): void
    isPathRandomized(): boolean
    initEffekseerRuntime(): void
    onEffekseerLoad(): void
    onEffekseerError(): void
}
declare const main: Main
// ./data/*.json
declare namespace RMMZData {
    interface Action {
        conditionParam1: number
        conditionParam2: number
        conditionType: number
        rating: number
        skillId: number
    }

    interface Actor {
        id: number
        battlerName: string
        characterIndex: number
        characterName: string
        classId: number
        equips: number[]
        faceIndex: number
        faceName: string
        traits: Trait[]
        initialLevel: number
        maxLevel: number
        name: string
        nickname: string
        note: string
        profile: string
        meta: MetaDataType
    }

    type Animation = AnimationMZ | AnimationMV

    interface AnimationMZ {
        id: number
        displayType: number
        effectName: string
        flashTimings: AnimationFlashTiming[]
        name: string
        offsetX: number
        offsetY: number
        rotation: {
            x: number
            y: number
            z: number
        }
        scale: number
        soundTimings: AnimationSoundTiming[]
        speed: number
    }

    interface AnimationMV {
        id: number
        animation1Hue: number
        animation1Name: string
        animation2Hue: number
        animation2Name: string
        frames: number[][][]
        name: string
        position: number
        timings: AnimationTiming[]
        flashTimings: AnimationFlashTiming[]
        soundTimings: AnimationSoundTiming[]
    }

    interface AnimationTiming {
        flashColor: ColorType
        flashDuration: number
        flashScope: number
        frame: number
        se: {
            name: string
            pan: number
            pitch: number
            volume: number
        }
    }

    interface AnimationFlashTiming {
        frame: number
        duration: number
        color: ColorType
    }

    interface AnimationSoundTiming {
        frame: number
        se: {
            name: string
            pan: number
            pitch: number
            volume: number
        }
    }

    interface Armor {
        id: number
        atypeId: number
        description: string
        etypeId: number
        traits: Trait[]
        iconIndex: number
        name: string
        note: string
        params: number[]
        price: number
        meta: MetaDataType
    }

    interface Class {
        id: number
        expParams: number[]
        traits: Trait[]
        learnings: Learning[]
        name: string
        note: string
        params: number[][]
        meta: MetaDataType
    }

    interface CommonEvent {
        id: number
        list: EventCommand[]
        name: string
        switchId: number
        trigger: number
    }

    interface Damage {
        critical: boolean
        elementId: number
        formula: string
        type: number
        variance: number
    }

    interface DropItem {
        dataId: number
        denominator: number
        kind: number
    }

    interface Effect {
        code: number
        dataId: number
        value1: number
        value2: number
    }

    interface Encounter {
        weight: number
        troopId: number
        regionSet: number[]
    }

    interface Enemy {
        id: number
        actions: Action[]
        battlerHue: number
        battlerName: string
        dropItems: DropItem[]
        exp: number
        traits: Trait[]
        gold: number
        name: string
        note: string
        params: [number, number, number, number, number, number, number, number]
        meta: MetaDataType
    }

    interface EventPage {
        conditions: {
            actorId: number
            actorValid: boolean
            itemId: number
            itemValid: boolean
            selfSwitchCh: "A" | "B" | "C" | "D"
            selfSwitchValid: boolean
            switch1Id: number
            switch1Valid: boolean
            switch2Id: number
            switch2Valid: boolean
            variableId: number
            variableValid: boolean
            variableValue: number
        }
        directionFix: boolean
        image: {
            tileId: number
            characterName: string
            direction: number
            pattern: number
            characterIndex: number
        }
        list: EventCommand[]
        moveFrequency: 3
        moveRoute: MoveRoute
        moveSpeed: number
        moveType: number
        priorityType: number
        stepAnime: boolean
        through: boolean
        trigger: number
        walkAnime: boolean
    }

    interface Event {
        id: number
        name: string
        note: string
        pages: EventPage[]
        x: number
        y: number
        meta: MetaDataType
    }

    type EventCommandParameters = string | number | EventCommand

    interface EventCommand {
        code: number
        indent: number | null
        parameters: EventCommandParameters[]
    }

    interface Item {
        id: number
        animationId: number
        damage: Damage
        description: string
        effects: Effect[]
        hitType: number
        iconIndex: number
        message1: string
        message2: string
        mpCost: number
        name: string
        note: string
        occasion: number
        repeats: number
        requiredWtypeId1: number
        requiredWtypeId2: number
        scope: number
        speed: number
        stypeId: number
        successRate: number
        tpCost: number
        tpGain: number
        messageType: number
        price: number
        itypeId: number
        meta: MetaDataType
    }

    interface Learning {
        level: number
        note: string
        skillId: number
    }

    interface Map {
        autoplayBgm: boolean
        autoplayBgs: boolean
        battleback1Name: string
        battleback2Name: string
        bgm: {
            name: string
            pan: number
            pitch: number
            volume: number
        }
        bgs: {
            name: string
            pan: number
            pitch: number
            volume: number
        }
        disableDashing: boolean
        displayName: string
        encounterList: Encounter[]
        encounterStep: number
        height: number
        note: string
        parallaxLoopX: boolean
        parallaxLoopY: boolean
        parallaxName: string
        parallaxShow: boolean
        parallaxSx: number
        parallaxSy: number
        scrollType: number
        specifyBattleback: boolean
        tilesetId: number
        width: number
        data: number[]
        events: (Event | null)[]
        meta: MetaDataType
    }

    interface MapInfo {
        id: number
        expanded: number
        name: string
        order: number
        parentId: number
        scrollX: number
        scrollY: number
    }

    interface MoveRoute {
        list: MoveRouteCommand[]
        repeat: boolean
        skippable: boolean
        wait: boolean
    }

    interface MoveRouteCommand {
        code: number
        indent: number | null
        parameters: EventCommandParameters[]
    }

    interface State {
        id: number
        autoRemovalTiming: number
        chanceByDamage: number
        iconIndex: number
        maxTurns: number
        message1: string
        message2: string
        message3: string
        message4: string
        minTurns: number
        motion: number
        name: string
        note: string
        overlay: number
        priority: number
        releaseByDamage: boolean
        removeAtBattleEnd: boolean
        removeByDamage: boolean
        removeByRestriction: boolean
        removeByWalking: boolean
        restriction: number
        stepsToRemove: number
        traits: Trait[]
        messageType: number
        meta: MetaDataType
    }

    interface System {
        advanced: {
            gameId: number
            screenWidth: number
            screenHeight: number
            uiAreaWidth: number
            uiAreaHeight: number
            numberFontFilename: string
            fallbackFonts: string
            fontSize: number
            mainFontFilename: string
            windowOpacity: number
            screenScale: number
        }
        airship: Vehicle
        armorTypes: string[]
        attackMotions: {
            type: number
            weaponImageId: number
        }[]
        battleBgm: {
            name: string
            pan: number
            pitch: number
            volume: number
        }
        battleback1Name: string
        battleback2Name: string
        battlerHue: number
        battlerName: string
        battleSystem: number
        boat: Vehicle
        currencyUnit: string
        defeatMe: {
            name: string
            pan: number
            pitch: number
            volume: number
        },
        editMapId: number
        elements: string[]
        equipTypes: string[]
        gameTitle: string
        gameoverMe: {
            name: string
            pan: number
            pitch: number
            volume: number
        }
        itemCategories: boolean[]
        locale: string
        magicSkills: number[]
        menuCommands: boolean[]
        optAutosave: boolean
        optDisplayTp: boolean
        optDrawTitle: boolean
        optExtraExp: boolean
        optFloorDeath: boolean
        optFollowers: true
        optKeyItemsNumber: false
        optSideView: boolean
        optSlipDeath: boolean
        optTransparent: boolean
        partyMembers: number[]
        ship: Vehicle
        skillTypes: string[]
        sounds: {
            name: string
            pan: number
            pitch: number
            volume: number
        }[]
        startMapId: number
        startX: number
        startY: number
        switches: string[]
        terms: {
            basic: string[]
            commands: string[]
            params: string[]
            messages: {
                alwaysDash: string
                commandRemember: string
                touchUI: string
                bgmVolume: string
                bgsVolume: string
                meVolume: string
                seVolume: string
                possession: string
                expTotal: string
                expNext: string
                saveMessage: string
                loadMessage: string
                file: string
                autosave: string
                partyName: string
                emerge: string
                preemptive: string
                surprise: string
                escapeStart: string
                escapeFailure: string
                victory: string
                defeat: string
                obtainExp: string
                obtainGold: string
                obtainItem: string
                levelUp: string
                obtainSkill: string
                useItem: string
                criticalToEnemy: string
                criticalToActor: string
                actorDamage: string
                actorRecovery: string
                actorGain: string
                actorLoss: string
                actorDrain: string
                actorNoDamage: string
                actorNoHit: string
                enemyDamage: string
                enemyRecovery: string
                enemyGain: string
                enemyLoss: string
                enemyDrain: string
                enemyNoDamage: string
                enemyNoHit: string
                evasion: string
                magicEvasion: string
                magicReflection: string
                counterAttack: string
                substitute: string
                buffAdd: string
                debuffAdd: string
                buffRemove: string
                actionFailure: string
            }
        }
        testBattlers: {
            actorId: number
            level: number
            equips: number[]
        }[]
        testTroopId: number
        title1Name: string
        title2Name: string
        titleBgm: {
            name: string
            pan: number
            pitch: number
            volume: number
        }
        titleCommandWindow: {
            background: number
            offsetX: number
            offsetY: number
        }
        variables: string[]
        versionId: number,
        victoryMe: {
            name: string
            pan: number
            pitch: number
            volume: number
        }
        weaponTypes: string[]
        windowTone: ToneType
        tileSize: number
        hasEncryptedImages?: boolean
        hasEncryptedAudio?: boolean
        encryptionKey?: string
    }

    interface Vehicle {
        bgm: {
            name: string
            pan: number
            pitch: number
            volume: number
        }
        characterIndex: number
        characterName: string
        startMapId: number
        startX: number
        startY: number
    }

    interface Tileset {
        id: number
        flags: number[]
        mode: number
        name: string
        note: string
        tilesetNames: string[]
        meta: MetaDataType
    }

    interface Trait {
        code: number
        dataId: number
        value: number
    }

    interface Troop {
        id: number
        members: TroopMember[]
        name: string
        pages: TroopPage[]
    }

    interface TroopMember {
        enemyId: number
        x: number
        y: number
        hidden: boolean
    }

    interface TroopPage {
        conditions: TroopCondition[]
        list: EventCommand[]
        span: number
    }

    interface TroopCondition {
        actorHp: number
        actorId: number
        actorValid: boolean
        enemyHp: number
        enemyIndex: number
        enemyValid: boolean
        switchId: number
        switchValid: boolean
        turnA: number
        turnB: number
        turnEnding: boolean
        turnValid: boolean
    }

    interface Weapon {
        id: number
        animationId: number
        description: string
        etypeId: number
        traits: Trait[]
        iconIndex: number
        name: string
        note: string
        params: number[]
        price: number
        wtypeId: number
        meta: MetaDataType
    }
}
// rmmz_core
interface Array<T> {
    clone(): this
    contains(element: any): boolean
    equals(array: any[]): boolean
    remove(element: T): T[]
}
interface Math {
    randomInt(max: number): number
}
interface Number {
    clamp(min: number, max: number): number
    mod(n: number): number
    padZero(length: number): string
}
interface String {
    contains(string: string): boolean
    format(): string
    padZero(length: number): string
}
declare class Utils {
    _hasEncryptedImages: boolean
    _hasEncryptedAudio: boolean
    _encryptionKey: string
    RPGMAKER_NAME: "MZ" | "MV"
    RPGMAKER_VERSION: string
    static checkRMVersion(version: string): boolean
    static isOptionValid(name: string): boolean
    static isNwjs(): boolean
    static isMobileDevice(): boolean
    static isMobileSafari(): boolean
    static isAndroidChrome(): boolean
    static isLocal(): boolean
    static canUseWebGL(): boolean
    static canUseWebAudioAPI(): boolean
    static canUseCssFontLoading(): boolean
    static canUseIndexedDB(): boolean
    static canPlayOgg(): boolean
    static canPlayWebm(): boolean
    static encodeURI(str: string): string
    static extractFileName(filename: string): string
    static escapeHtml(str: string): string
    static containsArabic(str: string): string
    static setEncryptionInfo(hasImages: boolean, hasAudio: boolean, key: string): void
    static hasEncryptedImages(): boolean
    static hasEncryptedAudio(): boolean
    static decryptArrayBuffer(source: ArrayBuffer): ArrayBuffer
}
declare class Stage extends PIXI.Container {
    constructor()
    initialize(): void
    destroy(): void
}
declare class Graphics {
    _width: number
    _height: number
    _defaultScale: number
    _realScale: number
    _errorPrinter: null | any
    _tickHandler: null | any
    _canvas: null | any
    _fpsCounter: null | Graphics.FPSCounter
    _loadingSpinner: null | HTMLDivElement
    _stretchEnabled: null | boolean
    _app: null | PIXI.Application
    _effekseer: null | Graphics.EffekseerContext
    _wasLoading: boolean
    frameCount: number
    boxWidth: number
    boxHeight: number
    get app(): null | PIXI.Application
    get effekseer(): null | Graphics.EffekseerContext
    get width(): number
    set width(value: number)
    get height(): number
    set height(value: number)
    get defaultScale(): number
    set defaultScale(value: number)
    static initialize(): boolean
    static setTickHandler(handler: Function): void
    static startGameLoop(): void
    static stopGameLoop(): void
    static setStage(stage: Stage): void
    static startLoading(): void
    static endLoading(): void
    static printError(name: string, message: string, error: Error | null): void
    static showRetryButton(retry: Function): void
    static eraseError(): void
    static pageToCanvasX(x: number): number
    static pageToCanvasY(y: number): number
    static isInsideCanvas(x: number, y: number): boolean
    static showScreen(): void
    static hideScreen(): void
    static resize(width: number, height: number): void
    static _createAllElements(): void
    static _updateAllElements(): void
    static _onTick(deltaTime: number): void
    static _canRender(): boolean
    static _updateRealScale(): void
    static _stretchWidth(): number
    static _stretchHeight(): number
    static _makeErrorHtml(name: string, message: string): string
    static _defaultStretchMode(): boolean
    static _createErrorPrinter(): void
    static _updateErrorPrinter(): void
    static _createCanvas(): void
    static _updateCanvas(): void
    static _updateVideo(): void
    static _createLoadingSpinner(): void
    static _createFPSCounter(): void
    static _centerElement(element: HTMLElement): void
    static _disableContextMenu(): void
    static _applyCanvasFilter(): void
    static _clearCanvasFilter(): void
    static _setupEventHandlers(): void
    static _onWindowResize(): void
    static _onKeyDown(event: KeyboardEvent): void
    static _switchFPSCounter(): void
    static _switchStretchMode(): void
    static _switchFullScreen(): void
    static _isFullScreen(): void
    static _requestFullScreen(): void
    static _cancelFullScreen(): void
    static _createPixiApp(): void
    static _setupPixi(): void
    static _createEffekseerContext(): void
}
declare namespace Graphics {
    class FPSCounter {
        constructor()
        initialize(): void
        startTick(): void
        endTick(): void
        switchMode(): void
        _createElements(): void
        _update(): void
    }
    class EffekseerContext {

    }
}
declare class Point extends PIXI.Point {
    constructor(x: number, y: number)
    initialize(x: number, y: number): void
}
declare class Rectangle extends PIXI.Rectangle {
    constructor(x: number, y: number, width: number, height: number)
    initialize(x: number, y: number, width: number, height: number): void
}
declare class Bitmap {
    constructor(width: number, height: number)
    _canvas: null | any
    _context: null | any
    _baseTexture: null | any
    _image: null | any
    _url: string
    _paintOpacity: number
    _smooth: boolean
    _loadListeners: any[]
    _loadingState: "none" | "loading" | "loaded" | "error"
    fontFace: string
    fontSize: number
    fontBold: boolean
    fontItalic: boolean
    textColor: string
    outlineColor: string
    outlineWidth: number
    initialize(width: number, height: number): void
    load(url: string): Bitmap
    snap(stage: Stage): Bitmap
    isReady(): boolean
    isError(): boolean
    get url(): string
    get baseTexture(): PIXI.BaseTexture
    get image(): HTMLImageElement | null
    get canvas(): HTMLCanvasElement | null
    get context(): CanvasRenderingContext2D | null
    get width(): number
    get height(): number
    get rect(): Rectangle
    get smooth(): boolean
    set smooth(value: boolean)
    get paintOpacity(): number
    set paintOpacity(value: number)
    destroy(): void
    resize(width: number, height: number): void
    blt(source: Bitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw?: number, dh?: number): void
    getPixel(x: number, y: number): string
    getAlphaPixel(x: number, y: number): string
    clearRect(x: number, y: number, width: number, height: number): void
    clear(): void
    fillRect(x: number, y: number, width: number, height: number, color: string): void
    fillAll(color: string): void
    strokeRect(x: number, y: number, width: number, height: number, color: string): void
    gradientFillRect(x: number, y: number, width: number, height: number, color1: string, color2: string, vertical: boolean): void
    drawCircle(x: number, y: number, radius: number, color: string): void
    drawText(text: string, x: number, y: number, maxWidth: number, lineHeight: number, align: string): void
    measureTextWidth(text: string): number
    addLoadListener(listner: Function): void
    retry(): void
    _makeFontNameText(): string
    _drawTextOutline(text: string, tx: number, ty: number, maxWidth?: number): void
    _drawTextBody(text: string, tx: number, ty: number, maxWidth?: number): void
    _createCanvas(width: number, height: number): void
    _ensureCanvas(): void
    _destroyCanvas(): void
    _createBaseTexture(source: any): void
    _updateScaleMode(): void
    _startLoading(): void
    _startDecrypting(): void
    _onXhrLoad(xhr: XMLHttpRequest): void
    _onLoad(): void
    _callLoadListeners(): void
    _onError(): void
}
declare class Sprite extends PIXI.Sprite {
    constructor(bitmap: Bitmap)
    initialize(bitmap: Bitmap): void
    _emptyBaseTexture: null
    _counter: 0
    get bitmap(): Bitmap
    set bitmap(value: number)
    get width(): number
    set width(value: number)
    get opacity(): number
    set opacity(value: number)
    get blendMode(): number
    set blendMode(value: number)
    destroy(): void
    update(): void
    hide(): void
    show(): void
    updateVisibility(): void
    move(x: number, y: number): void
    setFrame(x: number, y: number, width: number, height: number): void
    setHue(hue: number): void
    getBlendColor(): [number, number, number, number,]
    setBlendColor(color: [number, number, number, number,]): void
    getColorTone(): [number, number, number, number,]
    setColorTone(color: [number, number, number, number,]): void
    _onBitmapChange(): void
    _onBitmapLoad(bitmapLoaded: Bitmap): void
    _refresh(): void
    _createColorFilter(): void
    _updateColorFilter(): void
}
declare class Tilemap extends PIXI.Container {
    constructor()
    TILE_ID_B: 0
    TILE_ID_C: 256
    TILE_ID_D: 512
    TILE_ID_E: 768
    TILE_ID_A5: 1536
    TILE_ID_A1: 2048
    TILE_ID_A2: 2816
    TILE_ID_A3: 4352
    TILE_ID_A4: 5888
    TILE_ID_MAX: 8192
    FLOOR_AUTOTILE_TABLE: [number, number][][]
    WALL_AUTOTILE_TABLE: [number, number][][]
    WATERFALL_AUTOTILE_TABLE: [number, number][][]
    _width: number
    _height: number
    _margin: number
    _mapWidth: number
    _mapHeight: number
    _mapData: null | number[]
    _bitmaps: Bitmap[]
    _lowerLayer: undefined | Tilemap.CombinedLayer
    _upperLayer: undefined | Tilemap.CombinedLayer
    _needsRepaint: boolean | undefined
    tileWidth: number
    tileHeight: number
    origin: Point
    flags: []
    animationCount: number
    horizontalWrap: boolean
    verticalWrap: boolean
    get width(): number
    set width(value: number)
    get height(): number
    set height(value: number)
    destroy(): void
    setData(width: number, height: number, data: any[]): void
    isReady(): boolean
    update(): void
    setBitmaps(bitmaps: Bitmap[]): void
    refresh(): void
    updateTransform(): void
    _createLayers(): void
    _updateBitmaps(): void
    _addAllSpots(startX: number, startY: number): void
    _addSpot(startX: number, startY: number, x: number, y: number): void
    _addSpotTile(tileId: number, dx: number, dy: number): void
    _addTile(layer: Tilemap.CombinedLayer, tileId: number, dx: number, dy: number): void
    _addNormalTile(layer: Tilemap.CombinedLayer, tileId: number, dx: number, dy: number): void
    _addAutotile(layer: Tilemap.CombinedLayer, tileId: number, dx: number, dy: number): void
    _addTableEdge(layer: Tilemap.CombinedLayer, tileId: number, dx: number, dy: number): void
    _addShadow(layer: Tilemap.CombinedLayer, shadowBits: number, dx: number, dy: number): void
    _readMapData(x: number, y: number, z: number): number
    _isHigherTile(tileId: number): number
    _isTableTile(tileId: number): number
    _isOverpassPosition(mx: number, my: number): boolean
    _sortChildren(): void
    _compareChildOrder(a: number, b: number): number
    isVisibleTile(tileId: number): boolean
    isAutotile(tileId: number): boolean
    getAutotileKind(tileId: number): number
    getAutotileShape(tileId: number): number
    makeAutotileId(kind: number, shape: number): number
    isSameKindTile(tileID1: number, tileID2: number): boolean
    isTileA1(tileId: number): boolean
    isTileA2(tileId: number): boolean
    isTileA3(tileId: number): boolean
    isTileA4(tileId: number): boolean
    isTileA5(tileId: number): boolean
    isWaterTile(tileId: number): boolean
    isWaterfallTile(tileId: number): boolean
    isGroundTile(tileId: number): boolean
    isShadowingTile(tileId: number): boolean
    isRoofTile(tileId: number): boolean
    isWallTopTile(tileId: number): boolean
    isWallSideTile(tileId: number): boolean
    isWallTile(tileId: number): boolean
    isFloorTypeAutotile(tileId: number): boolean
    isWallTypeAutotile(tileId: number): boolean
    isWaterfallTypeAutotile(tileId: number): boolean
}
declare namespace Tilemap {
    class Layer extends PIXI.Container {
        constructor()
        initialize(): void
        _elements: [number, number, number, number, number, number, number,][]
        _indexBuffer: null | any
        _indexArray: Float32Array
        _vertexBuffer: null | any
        _vertexArray: Float32Array
        _vao: null | any
        _needsTexturesUpdate: boolean
        _needsVertexUpdate: boolean
        _images: Bitmap[]
        _state: PIXI.State
        MAX_GL_TEXTURES: number
        VERTEX_STRIDE: number
        MAX_SIZE: number
        destroy(): void
        setBitmaps(bitmaps: Bitmap[]): void
        clear(): void
        size(): number
        addRect(setNumber: number, sx: number, sy: number, dx: number, dy: number, w: number, h: number): void
        render(renderer: any): void
        isReady(): boolean
        _createVao(): void
        _updateIndexBuffer(): void
        _updateVertexBuffer(): void
    }
    class CombinedLayer extends PIXI.Container {
        constructor()
        initialize(): void
        destroy(): void
        setBitmaps(bitmaps: Bitmap[]): void
        clear(): void
        size(): number
        addRect(setNumber: number, sx: number, sy: number, dx: number, dy: number, w: number, h: number): void
        isReady(): boolean
    }
    class Renderer extends PIXI.ObjectRenderer {
        constructor()
        _shader: null
        _images: any[]
        _internalTextures: any[]
        _clearBuffer: Uint8Array
        initialize(renderer: any): void
        destroy(): void
        getShader(): any
        contextChange(): void
        _createShader(): PIXI.Shader
        _createInternalTextures(): void
        _destroyInternalTextures(): void
        updateTextures(renderer: any, images: any): void
        bindTextures(renderer: any): void
    }
}
declare class TilingSprite extends PIXI.TilingSprite {
    constructor()
    _emptyBaseTexture: null | PIXI.BaseTexture
    _bitmap: Bitmap
    _width: 0
    _height: 0
    _frame: Rectangle
    origin: Point
    get bitmap(): Bitmap
    set bitmap(value: Bitmap)
    get opacity(): number
    set opacity(value: number)
    initialize(bitmap: Bitmap): void
    destroy(): void
    update(): void
    move(x: number, y: number, width: number, height: number): void
    setFrame(x: number, y: number, width: number, height: number): void
    updateTransform(): void
    _onBitmapChange(): void
    _onBitmapLoad(): void
    _refresh(): void
}
declare class ScreenSprite extends PIXI.Container {
    constructor()
    _graphics: PIXI.Graphics
    _red: number
    _green: number
    _blue: number
    get opacity(): number
    set opacity(value: number)
    initialize(): void
    destroy(): void
    setBlack(): void
    setWhite(): void
    setColor(r: number, g: number, b: number): void
}
// @ts-ignore
declare class Window extends PIXI.Container {
    constructor()
    _isWindow: boolean
    _windowskin: null | Bitmap
    _width: number
    _height: number
    _cursorRect: Rectangle
    _openness: number
    _animationCount: number
    _padding: number
    _margin: number
    _colorTone: [number, number, number, number]
    _innerChildren: []
    _container: null
    _backSprite: null | Bitmap
    _frameSprite: null | Bitmap
    _contentsBackSprite: null | Bitmap
    _cursorSprite: null | Bitmap
    _contentsSprite: null | Bitmap
    _downArrowSprite: null | Bitmap
    _upArrowSprite: null | Bitmap
    _pauseSignSprite: null | Bitmap
    origin: Point
    active: boolean
    frameVisible: boolean
    cursorVisible: boolean
    downArrowVisible: boolean
    upArrowVisible: boolean
    pause: boolean
    get windowskin(): Bitmap
    set windowskin(value: Bitmap)
    get contents(): Bitmap
    set contents(value: Bitmap)
    get contentsBack(): Bitmap
    set contentsBack(value: Bitmap)
    get width(): number
    set width(value: number)
    get height(): number
    set height(value: number)
    get padding(): number
    set padding(value: number)
    get margin(): number
    set margin(value: number)
    get opacity(): number
    set opacity(value: number)
    get backOpacity(): number
    set backOpacity(value: number)
    get contentsOpacity(): number
    set contentsOpacity(value: number)
    get openness(): number
    set openness(value: number)
    get innerWidth(): number
    set innerWidth(value: number)
    get innerHeight(): number
    set innerHeight(value: number)
    get innerRect(): Rectangle
    initialize(): void
    destroy(): void
    update(): void
    move(x: number, y: number, width: number, height: number): void
    isOpen(): boolean
    isClosed(): boolean
    setCursorRect(x: number, y: number, width: number, height: number): void
    moveCursorBy(x: number, y: number): void
    moveInnerChildrenBy(x: number, y: number): void
    setTone(r: number, g: number, b: number): void
    addChildToBack(child: object): object
    addInnerChild(child: object): object
    updateTransform(): void
    drawShape(graphics: any): void
    _createAllParts(): void
    _createContainer(): void
    _createBackSprite(): void
    _createFrameSprite(): void
    _createClientArea(): void
    _createContentsBackSprite(): void
    _createCursorSprite(): void
    _createContentsSprite(): void
    _createArrowSprites(): void
    _createPauseSignSprites(): void
    _onWindowskinLoad(): void
    _refreshAllParts(): void
    _refreshBack(): void
    _refreshFrame(): void
    _refreshCursor(): void
    _setRectPartsGeometry(sprite: Sprite, srect: { x: number, y: number, width: number, height: number, }, drect: Rectangle, m: number): void
    _refreshArrows(): void
    _refreshPauseSign(): void
    _updateClientArea(): void
    _updateFrame(): void
    _updateContentsBack(): void
    _updateCursor(): void
    _makeCursorAlpha(): void
    _updateContents(): void
    _updateArrows(): void
    _updatePauseSign(): void
    _updateFilterArea(): void
}
declare class WindowLayer extends PIXI.Container {
    constructor()
    initialize(): void
    destroy(): void
    update(): void
    render(renderer: PIXI.Renderer): void
}
declare class Weather extends PIXI.Container {
    constructor()
    _width: number
    _height: number
    _sprites: Sprite[]
    _dimmerSprite: ScreenSprite | undefined
    _rainBitmap: Bitmap | undefined
    _stormBitmap: Bitmap | undefined
    _snowBitmap: Bitmap | undefined
    type: "none" | "rain" | "storm" | "snow"
    power: number
    origin: Point
    initialize(): void
    destroy(): void
    update(): void
    _createBitmaps(): void
    _createDimmer(): void
    _updateDimmer: void
    _updateAllSprites: void
    _addSprite: void
    _removeSprite: void
    _updateSprite(sprite: Sprite): void
    _updateRainSprite(sprite: Sprite): void
    _updateStormSprite(sprite: Sprite): void
    _updateSnowSprite(sprite: Sprite): void
    _rebornSprite(sprite: Sprite): void
}
declare class ColorFilter extends PIXI.Filter {
    constructor()
    initialize(): void
    setHue(hue: number): void
    setColorTone(tone: [number, number, number, number,]): void
    setBlendColor(color: [number, number, number, number,]): void
    setBrightness(brightness: number): void
    _fragmentSrc(): string
}
declare class WebAudio {
    constructor()
    _url: string
    _context: null | AudioContext
    _masterGainNode: null
    _masterVolume: number
    _volume: number
    _pitch: number
    _pan: number
    _buffers: number[]
    _data: null | Uint8Array
    _fetchedSize: number
    _fetchedData: any[]
    _sourceNodes: AudioBufferSourceNode[]
    _gainNode: null | GainNode
    _pannerNode: null | PannerNode
    _totalTime: number
    _sampleRate: number
    _loop: number
    _loopStart: number
    _loopLength: number
    _loopStartTime: number
    _loopLengthTime: number
    _startTime: number
    _endTimer: null | number
    _lastUpdateTime: number
    _decoder: null
    _isLoaded: boolean
    _isError: boolean
    _isPlaying: boolean
    _loadListeners: Function[]
    _stopListeners: Function[]
    get url(): string
    get volume(): number
    set volume(value: number)
    get pitch(): number
    set pitch(value: number)
    get pan(): number
    set pan(value: number)
    initialize(url: string): void
    static initialize(): boolean
    static setMasterVolume(value: number): void
    static _createContext(): void
    static _currentTime(): number
    static _createMasterGainNode(): void
    static _setupEventHandlers(): void
    static _onUserGesture(): void
    static _onVisibilityChange(): void
    static _onHide(): void
    static _onShow(): void
    static _shouldMuteOnHide(): boolean
    static _resetVolume(): void
    static _fadeIn(duration: number): void
    static _fadeOut(duration: number): void
    static clear(): void
    static isReady(): boolean
    static isError(): boolean
    static isPlaying(): boolean
    play(loop: boolean, offset: number): void
    stop(): void
    destroy(): void
    _fadeIn(duration: number): void
    _fadeOut(duration: number): void
    seek(): number
    addLoadListener(listner: Function): void
    addStopListener(listner: Function): void
    retry(): void
    _startLoading(): void
    _shouldUseDecoder(): boolean
    _createDecoder(): void
    _destroyDecoder(): void
    _realUrl(): string
    _startXhrLoading(url: string): void
    _onXhrLoad(xhr: XMLHttpRequest): void
    _onFetch(response: Response): void
    _onError(): void
    _onFetchProcess(value: any[]): void
    _updateBufferOnFetch(): void
    _concatenateFetchedData(): void
    _updateBuffer(): void
    _readableBuffer(): ArrayBuffer
    _decodeAudioData(arrayBuffer: ArrayBuffer): void
    _onDecode(buffer: any): void
    _refreshSourceNode(): void
    _startPlaying(offset: number): void
    _startAllSourceNodes(): void
    _startSourceNode(index: number): void
    _stopSourceNode(): void
    _createPannerNode(): void
    _createAllSourceNodes(): void
    _createSourceNode(index: number): void
    _removeNodes(): void
    _createEndTimer(): void
    _removeEndTimer(): void
    _updatePanner(): void
    _onLoad(): void
    _readLoopComments(arrayBuffer: ArrayBuffer): void
    _readMetaData(view: DataView<ArrayBuffer>, index: number, size: number): void
    _readFourCharacters(view: DataView<ArrayBuffer>, index: number): string
}
declare class Video {
    _element: HTMLVideoElement | undefined
    _loading: boolean | undefined
    static initialize(width: number, height: number): void
    static resize(width: number, height: number): void
    static play(src: string): void
    static isPlaying(): boolean
    static setVolume(volume: number): void
    static _createElement(): void
    static _onLoad(): void
    static _onError(): never
    static _onEnd(): void
    static _updateVisibility(videoVisible: boolean): void
    static _isVisible(): boolean
    static _setupEventHandlers(): void
    static _onUserGesture(): void
}
declare class Input {
    keyRepeatWait: number
    keyRepeatInterval: number
    keyMapper: { [key: number]: string }
    gamepadMapper: { [key: number]: string }
    _currentState: { [key: string]: any }
    _previousState: { [key: string]: any }
    _gamepadStates: boolean[]
    _latestButton: null | string
    _pressedTime: number
    _dir4: number
    _dir8: number
    _preferredAxis: ""
    _date: number
    _virtualButton: null | string
    get dir4(): number
    get dir8(): number
    get date(): number
    static initialize(): void
    static clear(): void
    static update(): void
    static isPressed(keyName: string): boolean
    static isTriggered(keyName: string): boolean
    static isRepeated(keyName: string): boolean
    static isLongPressed(keyName: string): boolean
    static virtualClick(buttonName: string): void
    static _setupEventHandlers(): void
    static _onKeyDown(event: KeyboardEvent): void
    static _shouldPreventDefault(keyCode: number): boolean
    static _onKeyUp(event: KeyboardEvent): void
    static _onLostFocus(): void
    static _pollGamepads(): void
    static _updateGamepadState(gamepad: Gamepad): void
    static _updateDirection(): void
    static _signX(): number
    static _signY(): number
    static _makeNumpadDirection(x: number, y: number): number
    static _isEscapeCompatible(keyName: string): boolean
}
type TouchInputState = {
    triggered: boolean,
    cancelled: boolean,
    moved: boolean,
    hovered: boolean,
    released: boolean,
    wheelX: number,
    wheelY: number,
}
declare class TouchInput {

    keyRepeatWait: number
    keyRepeatInterval: number
    moveThreshold: number
    _mousePressed: boolean
    _screenPressed: boolean
    _pressedTime: number
    _clicked: boolean
    _newState: TouchInputState
    _currentState: TouchInputState
    _x: number
    _y: number
    _triggerX: number
    _triggerY: number
    _moved: boolean
    _date: number
    get wheelX(): number
    get wheelY(): number
    get x(): number
    get y(): number
    get date(): number
    static initialize(): void
    static clear(): void
    static update(): void
    static isClicked(): boolean
    static isPressed(): boolean
    static isTriggered(): boolean
    static isRepeated(): boolean
    static isLongPressed(): boolean
    static isCancelled(): boolean
    static isMoved(): boolean
    static isHovered(): boolean
    static isReleased(): boolean
    static _createNewState(): TouchInputState
    static _setupEventHandlers(): void
    static _onMouseDown(event: MouseEvent): void
    static _onLeftButtonDown(event: MouseEvent): void
    static _onMiddleButtonDown(event: MouseEvent): void
    static _onRightButtonDown(event: MouseEvent): void
    static _onMouseMove(event: MouseEvent): void
    static _onMouseUp(event: MouseEvent): void
    static _onWheel(event: WheelEvent): void
    static _onTouchStart(event: TouchEvent): void
    static _onTouchMove(event: TouchEvent): void
    static _onTouchEnd(event: TouchEvent): void
    static _onTouchCancel(event: TouchEvent): void
    static _onLostFocus(): void
    static _onTrigger(x: number, y: number): void
    static _onCancel(x: number, y: number): void
    static _onMove(x: number, y: number): void
    static _onHover(x: number, y: number): void
    static _onRelease(x: number, y: number): void
}
declare class JsonEx {
    maxDepth: number
    stringify(object: object): string
    parse(json: string): object
    makeDeepCopy(object: object): object
    _encode<T>(value: T, depth: number): T
    _decode<T, U>(value: T): U
}
// rmmz_objects
declare class Game_System {
    constructor()
    _saveEnabled: boolean
    _menuEnabled: boolean
    _encounterEnabled: boolean
    _formationEnabled: boolean
    _battleCount: number
    _winCount: number
    _escapeCount: number
    _saveCount: number
    _versionId: number
    _savefileId: number
    _framesOnSave: number
    _bgmOnSave: IAudioObject | null
    _bgsOnSave: IAudioObject | null
    _windowTone: ToneType | null
    _battleBgm: IAudioObject | null
    _victoryMe: IAudioObject | null
    _defeatMe: IAudioObject | null
    _savedBgm: IAudioObject | null
    _walkingBgm: IAudioObject | null
    initialize(): void
    isJapanese(): RegExpMatchArray | null
    isChinese(): RegExpMatchArray | null
    isKorean(): RegExpMatchArray | null
    isCJK(): RegExpMatchArray | null
    isRussian(): RegExpMatchArray | null
    isSideView(): boolean
    isAutosaveEnabled(): boolean
    isSaveEnabled(): boolean
    disableSave(): void
    enableSave(): void
    isMenuEnabled(): boolean
    disableMenu(): void
    enableMenu(): void
    isEncounterEnabled(): boolean
    disableEncounter(): void
    enableEncounter(): void
    isFormationEnabled(): boolean
    disableFormation(): void
    enableFormation(): void
    battleCount(): number
    winCount(): number
    escapeCount(): number
    saveCount(): number
    versionId(): number
    savefileId(): number
    setSavefileId(savefileId: number): void
    windowTone(): ToneType
    setWindowTone(value: ToneType): void
    battleBgm(): {
        name: string
        pan: number
        pitch: number
        volume: number
    } | IAudioObject
    setBattleBgm(value: IAudioObject): void
    victoryMe(): {
        name: string
        pan: number
        pitch: number
        volume: number
    } | IAudioObject
    setVictoryMe(value: IAudioObject): void
    defeatMe(): {
        name: string
        pan: number
        pitch: number
        volume: number
    } | IAudioObject
    setDefeatMe(value: IAudioObject): void
    onBattleStart(): void
    onBattleWin(): void
    onBattleEscape(): void
    onBeforeSave(): void
    onAfterLoad(): void
    playtime(): number
    playtimeText(): string
    saveBgm(): void
    replayBgm(): void
    saveWalkingBgm(): void
    replayWalkingBgm(): void
    saveWalkingBgm2(): void
    mainFontFace(): string
    numberFontFace(): string
    mainFontSize(): number
    windowPadding(): number
    windowOpacity(): number
}
declare class Game_Picture {
    constructor()
    _name: string
    _origin: Point
    _x: number
    _y: number
    _scaleX: number
    _scaleY: number
    _opacity: number
    _blendMode: number
    _tone: ToneType | null
    _angle: number
    _targetX: number
    _targetY: number
    _targetScaleX: number
    _targetScaleY: number
    _targetOpacity: number
    _duration: number
    _wholeDuration: number
    _easingType: number
    _easingExponent: number
    _toneTarget: ToneType | null
    _toneDuration: number
    _rotationSpeed: number
    initialize(): void
    name(): string
    origin(): Point
    x(): number
    y(): number
    scaleX(): number
    scaleY(): number
    opacity(): number
    blendMode(): number
    tone(): ToneType | null
    angle(): number
    initBasic(): void
    initTarget(): void
    initTone(): void
    initRotation(): void
    show(name: string, origin: Point, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number): void
    move(origin: Point, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number, duration: number, easingType: number): void
    rotate(speed: number): void
    tint(tone: ToneType, duration: number): void
    update(): void
    updateMove(): void
    updateTone(): void
    updateRotation(): void
    applyEasing(current: number, target: number): number
    calcEasing(t: number): number
    easeIn(t: number, exponent: number): number
    easeOut(t: number, exponent: number): number
    easeInOut(t: number, exponent: number): number
}
declare class Game_Action {
    constructor(subject: Game_Battler, forcing?: boolean)
    _subjectActorId: number
    _subjectEnemyIndex: number
    _forcing: boolean
    _item: Game_Item
    _targetIndex: number
    _reflectionTarget: Game_Battler
    static EFFECT_RECOVER_HP: number
    static EFFECT_RECOVER_MP: number
    static EFFECT_GAIN_TP: number
    static EFFECT_ADD_STATE: number
    static EFFECT_REMOVE_STATE: number
    static EFFECT_ADD_BUFF: number
    static EFFECT_ADD_DEBUFF: number
    static EFFECT_REMOVE_BUFF: number
    static EFFECT_REMOVE_DEBUFF: number
    static EFFECT_SPECIAL: number
    static EFFECT_GROW: number
    static EFFECT_LEARN_SKILL: number
    static EFFECT_COMMON_EVENT: number
    static SPECIAL_EFFECT_ESCAPE: number
    static HITTYPE_CERTAIN: number
    static HITTYPE_PHYSICAL: number
    static HITTYPE_MAGICAL: number
    initialize(subject: Game_Battler, forcing?: boolean): void
    clear(): void
    setSubject(subject: Game_Battler): void
    subject(): Game_Battler
    friendsUnit(): Game_Unit<Game_Battler>
    opponentsUnit(): Game_Unit<Game_Battler>
    setEnemyAction(action: RMMZData.Action): void
    setAttack(): void
    setGuard(): void
    setSkill(skillId: number): void
    setItem(itemId: number): void
    setItemObject(object: ItemObject): void
    setTarget(targetIndex: number): void
    item(): RMMZData.Item
    isSkill(): boolean
    isItem(): boolean
    numRepeats(): number
    checkItemScope(list: number[]): boolean
    isForOpponent(): boolean
    isForFriend(): boolean
    isForEveryone(): boolean
    isForAliveFriend(): boolean
    isForDeadFriend(): boolean
    isForUser(): boolean
    isForOne(): boolean
    isForRandom(): boolean
    isForAll(): boolean
    needsSelection(): boolean
    numTargets(): number
    checkDamageType(list: number[]): boolean
    isHpEffect(): boolean
    isMpEffect(): boolean
    isDamage(): boolean
    isRecover(): boolean
    isDrain(): boolean
    isHpRecover(): boolean
    isMpRecover(): boolean
    isCertainHit(): boolean
    isPhysical(): boolean
    isMagical(): boolean
    isAttack(): boolean
    isGuard(): boolean
    isMagicSkill(): boolean
    decideRandomTarget(): void
    setConfusion(): void
    prepare(): void
    isValid(): boolean | RMMZData.Item
    speed(): number
    makeTargets(): Game_Battler[]
    repeatTargets(targets: Game_Battler[]): Game_Battler[]
    confusionTarget(): Game_Battler
    targetsForEveryone(): Game_Battler[]
    targetsForOpponents(): Game_Battler[]
    targetsForFriends(): Game_Battler[]
    randomTargets(unit: Game_Unit<Game_Battler>): Game_Battler[]
    targetsForDead(unit: Game_Unit<Game_Battler>): Game_Battler[]
    targetsForAlive(unit: Game_Unit<Game_Battler>): Game_Battler[]
    targetsForDeadAndAlive(unit: Game_Unit<Game_Battler>): Game_Battler[]
    evaluate(): number
    itemTargetCandidates(): Game_Battler[]
    evaluateWithTarget(target: Game_Battler): number
    testApply(target: Game_Battler): boolean
    testLifeAndDeath(target: Game_Battler): boolean
    hasItemAnyValidEffects(target: Game_Battler): boolean
    testItemEffect(target: Game_Battler, effect: RMMZData.Effect): boolean
    itemCnt(target: Game_Battler): any
    itemMrf(target: Game_Battler): any
    itemHit(target: Game_Battler): number
    itemEva(target: Game_Battler): any
    itemCri(target: Game_Battler): number
    apply(target: Game_Battler): void
    makeDamageValue(target: Game_Battler, critical: boolean): number
    evalDamageFormula(target: Game_Battler): number
    calcElementRate(target: Game_Battler): number
    elementsMaxRate(target: Game_Battler, elements: number[]): number
    applyCritical(damage: number): number
    applyVariance(damage: number, variance: number): number
    applyGuard(damage: number, target: Game_Battler): number
    executeDamage(target: Game_Battler, value: number): void
    executeHpDamage(target: Game_Battler, value: number): void
    executeMpDamage(target: Game_Battler, value: number): void
    gainDrainedHp(value: number): void
    gainDrainedMp(value: number): void
    applyItemEffect(target: Game_Battler, effect: RMMZData.Effect): void
    itemEffectRecoverHp(target: Game_Battler, effect: RMMZData.Effect): void
    itemEffectRecoverMp(target: Game_Battler, effect: RMMZData.Effect): void
    itemEffectGainTp(target: Game_Battler, effect: RMMZData.Effect): void
    itemEffectAddState(target: Game_Battler, effect: RMMZData.Effect): void
    itemEffectAddAttackState(target: Game_Battler, effect: RMMZData.Effect): void
    itemEffectAddNormalState(target: Game_Battler, effect: RMMZData.Effect): void
    itemEffectRemoveState(target: Game_Battler, effect: RMMZData.Effect): void
    itemEffectAddBuff(target: Game_Battler, effect: RMMZData.Effect): void
    itemEffectAddDebuff(target: Game_Battler, effect: RMMZData.Effect): void
    itemEffectRemoveBuff(target: Game_Battler, effect: RMMZData.Effect): void
    itemEffectRemoveDebuff(target: Game_Battler, effect: RMMZData.Effect): void
    itemEffectSpecial(target: Game_Battler, effect: RMMZData.Effect): void
    itemEffectGrow(target: Game_Battler, effect: RMMZData.Effect): void
    itemEffectLearnSkill(target: Game_Battler, effect: RMMZData.Effect): void
    itemEffectCommonEvent(target: Game_Battler, effect: RMMZData.Effect): void
    makeSuccess(target: Game_Battler): void
    applyItemUserEffect(target: Game_Battler): void
    lukEffectRate(target: Game_Battler): number
    applyGlobal(): void
    updateLastUsed(): void
    updateLastSubject(): void
    updateLastTarget(target: Game_Battler): void
}
declare class Game_ActionResult {
    constructor()
    used: boolean
    missed: boolean
    evaded: boolean
    physical: boolean
    drain: boolean
    critical: boolean
    success: boolean
    hpAffected: boolean
    hpDamage: number
    mpDamage: number
    tpDamage: number
    addedStates: number[]
    removedStates: number[]
    addedBuffs: number[]
    addedDebuffs: number[]
    removedBuffs: number[]
    initialize(): void
    clear(): void
    addedStateObjects(): RMMZData.State[]
    removedStateObjects(): RMMZData.State[]
    isStatusAffected(): boolean
    isHit(): boolean
    isStateAdded(stateId: number): boolean
    pushAddedState(stateId: number): void
    isStateRemoved(stateId: number): boolean
    pushRemovedState(stateId: number): void
    isBuffAdded(paramId: number): boolean
    pushAddedBuff(paramId: number): void
    isDebuffAdded(paramId: number): boolean
    pushAddedDebuff(paramId: number): void
    isBuffRemoved(paramId: number): boolean
    pushRemovedBuff(paramId: number): void
}
declare abstract class Game_BattlerBase {
    constructor()
    _hp: number
    _tp: number
    _mp: number
    _hidden: boolean
    _paramPlus: number[]
    _states: any[]
    _stateTurns: any
    _buffs: number[]
    _buffTurns: number[]
    static TRAIT_ELEMENT_RATE: number
    static TRAIT_DEBUFF_RATE: number
    static TRAIT_STATE_RATE: number
    static TRAIT_STATE_RESIST: number
    static TRAIT_PARAM: number
    static TRAIT_XPARAM: number
    static TRAIT_SPARAM: number
    static TRAIT_ATTACK_ELEMENT: number
    static TRAIT_ATTACK_STATE: number
    static TRAIT_ATTACK_SPEED: number
    static TRAIT_ATTACK_TIMES: number
    static TRAIT_ATTACK_SKILL: number
    static TRAIT_STYPE_ADD: number
    static TRAIT_STYPE_SEAL: number
    static TRAIT_SKILL_ADD: number
    static TRAIT_SKILL_SEAL: number
    static TRAIT_EQUIP_WTYPE: number
    static TRAIT_EQUIP_ATYPE: number
    static TRAIT_EQUIP_LOCK: number
    static TRAIT_EQUIP_SEAL: number
    static TRAIT_SLOT_TYPE: number
    static TRAIT_ACTION_PLUS: number
    static TRAIT_SPECIAL_FLAG: number
    static TRAIT_COLLAPSE_TYPE: number
    static TRAIT_PARTY_ABILITY: number
    static FLAG_ID_AUTO_BATTLE: number
    static FLAG_ID_GUARD: number
    static FLAG_ID_SUBSTITUTE: number
    static FLAG_ID_PRESERVE_TP: number
    static ICON_BUFF_START: number
    static ICON_DEBUFF_START: number
    get hp(): number
    get mp(): number
    get tp(): number
    get mhp(): number
    get mmp(): number
    get atk(): number
    get def(): number
    get mat(): number
    get mdf(): number
    get agi(): number
    get luk(): number
    get hit(): any
    get eva(): any
    get cri(): any
    get cev(): any
    get mev(): any
    get mrf(): any
    get cnt(): any
    get hrg(): any
    get mrg(): any
    get trg(): any
    get tgr(): number
    get grd(): number
    get rec(): number
    get pha(): number
    get mcr(): number
    get tcr(): number
    get pdr(): number
    get mdr(): number
    get fdr(): number
    get exr(): number
    initialize(): void
    initMembers(): void
    clearParamPlus(): void
    clearStates(): void
    eraseState(stateId: number): void
    isStateAffected(stateId: number): boolean
    isDeathStateAffected(): boolean
    deathStateId(): number
    resetStateCounts(stateId: number): void
    isStateExpired(stateId: number): boolean
    updateStateTurns(): void
    clearBuffs(): void
    eraseBuff(paramId: number): void
    buffLength(): number
    buff(paramId: number): number
    isBuffAffected(paramId: number): boolean
    isDebuffAffected(paramId: number): boolean
    isBuffOrDebuffAffected(paramId: number): boolean
    isMaxBuffAffected(paramId: number): boolean
    isMaxDebuffAffected(paramId: number): boolean
    increaseBuff(paramId: number): void
    decreaseBuff(paramId: number): void
    overwriteBuffTurns(paramId: number, turns: number): void
    isBuffExpired(paramId: number): boolean
    updateBuffTurns(): void
    die(): void
    revive(): void
    states(): RMMZData.State[]
    stateIcons(): number[]
    buffIcons(): number[]
    buffIconIndex(buffLevel: number, paramId: number): number
    allIcons(): number[]
    traitObjects(): {
        traits: RMMZData.Trait[]
    }[]
    allTraits(): RMMZData.Trait[]
    traits(code: number): RMMZData.Trait[]
    traitsWithId(code: any, id: number): RMMZData.Trait[]
    traitsPi(code: number, id: number): number
    traitsSum(code: number, id: number): any
    traitsSumAll(code: number): any
    traitsSet(code: number): number[]
    paramBase(paramId: number): number
    paramPlus(paramId: number): number
    paramBasePlus(paramId: number): number
    paramMin(paramId: number): 0 | 1
    paramMax(paramId: number): number
    paramRate(paramId: number): number
    paramBuffRate(paramId: number): number
    param(paramId: number): number
    xparam(xparamId: number): any
    sparam(sparamId: number): number
    elementRate(elementId: number): number
    debuffRate(paramId: number): number
    stateRate(stateId: number): number
    stateResistSet(): number[]
    isStateResist(stateId: number): boolean
    attackElements(): number[]
    attackStates(): number[]
    attackStatesRate(stateId: number): any
    attackSpeed(): any
    attackTimesAdd(): number
    attackSkillId(): number
    addedSkillTypes(): number[]
    isSkillTypeSealed(stypeId: number): boolean
    addedSkills(): number[]
    isSkillSealed(skillId: number): boolean
    isEquipWtypeOk(wtypeId: number): boolean
    isEquipAtypeOk(atypeId: number): boolean
    isEquipTypeLocked(etypeId: number): boolean
    isEquipTypeSealed(etypeId: number): boolean
    slotType(): number
    isDualWield(): boolean
    actionPlusSet(): any[]
    specialFlag(flagId: number): boolean
    collapseType(): number
    partyAbility(abilityId: number): boolean
    isAutoBattle(): boolean
    isGuard(): boolean
    isSubstitute(): boolean
    isPreserveTp(): boolean
    addParam(paramId: number, value: number): void
    setHp(hp: number): void
    setMp(mp: number): void
    setTp(tp: number): void
    maxTp(): number
    refresh(): void
    recoverAll(): void
    hpRate(): number
    mpRate(): number
    tpRate(): number
    hide(): void
    appear(): void
    isHidden(): boolean
    isAppeared(): boolean
    isDead(): boolean
    isAlive(): boolean
    isDying(): boolean
    isRestricted(): boolean
    canInput(): boolean
    canMove(): boolean
    isConfused(): boolean
    confusionLevel(): number
    isActor(): boolean
    isEnemy(): boolean
    sortStates(): void
    restriction(): number
    addNewState(stateId: number): void
    onRestrict(): void
    mostImportantStateText(): string
    stateMotionIndex(): number
    stateOverlayIndex(): number
    isSkillWtypeOk(skill: RMMZData.Item): boolean
    skillMpCost(skill: RMMZData.Item): number
    skillTpCost(skill: RMMZData.Item): number
    canPaySkillCost(skill: RMMZData.Item): boolean
    paySkillCost(skill: RMMZData.Item): void
    isOccasionOk(item: RMMZData.Item): boolean
    meetsUsableItemConditions(item: RMMZData.Item): boolean
    meetsSkillConditions(skill: RMMZData.Item): boolean
    meetsItemConditions(item: RMMZData.Item): boolean
    canUse(item: RMMZData.Item): boolean
    canEquip(item: ItemObject): boolean
    canEquipWeapon(item: any): boolean
    canEquipArmor(item: any): boolean
    guardSkillId(): number
    canAttack(): boolean
    canGuard(): boolean
}
declare abstract class Game_Battler extends Game_BattlerBase {
    constructor()
    _actions: Game_Action[]
    _speed: number
    _result: Game_ActionResult
    _actionState: string
    _lastTargetIndex: number
    _damagePopup: boolean
    _effectType: string | null
    _motionType: string | null
    _weaponImageId: number
    _motionRefresh: boolean
    _selected: boolean
    _tpbState: string
    _tpbChargeTime: number
    _tpbCastTime: number
    _tpbIdleTime: number
    _tpbTurnCount: number
    _tpbTurnEnd: boolean
    abstract isSpriteVisible(): boolean
    abstract name(): string
    abstract friendsUnit(): Game_Unit<Game_Battler>
    abstract opponentsUnit(): Game_Unit<Game_Battler>
    abstract index(): number
    abstract isBattleMember(): boolean
    initialize(): void
    initMembers(): void
    clearDamagePopup(): void
    clearWeaponAnimation(): void
    clearEffect(): void
    clearMotion(): void
    requestEffect(effectType: string): void
    requestMotion(motionType: string): void
    requestMotionRefresh(): void
    cancelMotionRefresh(): void
    select(): void
    deselect(): void
    isDamagePopupRequested(): boolean
    isEffectRequested(): boolean
    isMotionRequested(): boolean
    isWeaponAnimationRequested(): boolean
    isMotionRefreshRequested(): boolean
    isSelected(): boolean
    effectType(): string | null
    motionType(): string | null
    weaponImageId(): number
    startDamagePopup(): void
    shouldPopupDamage(): boolean
    startWeaponAnimation(weaponImageId: number): void
    action(index: number): Game_Action
    setAction(index: number, action: Game_Action): void
    numActions(): number
    clearActions(): void
    result(): Game_ActionResult
    clearResult(): void
    clearTpbChargeTime(): void
    applyTpbPenalty(): void
    initTpbChargeTime(advantageous?: any): void
    tpbChargeTime(): number
    startTpbCasting(): void
    startTpbAction(): void
    isTpbCharged(): boolean
    isTpbReady(): boolean
    isTpbTimeout(): boolean
    updateTpb(): void
    updateTpbChargeTime(): void
    updateTpbCastTime(): void
    updateTpbAutoBattle(): void
    updateTpbIdleTime(): void
    tpbAcceleration(): number
    tpbRelativeSpeed(): number
    tpbSpeed(): number
    tpbBaseSpeed(): number
    tpbRequiredCastTime(): number
    onTpbCharged(): void
    shouldDelayTpbCharge(): boolean
    finishTpbCharge(): void
    isTpbTurnEnd(): boolean
    initTpbTurn(): void
    startTpbTurn(): void
    makeTpbActions(): void
    onTpbTimeout(): void
    turnCount(): number
    canInput(): boolean
    refresh(): void
    addState(stateId: number): void
    isStateAddable(stateId: number): boolean
    isStateRestrict(stateId: number): boolean
    onRestrict(): void
    removeState(stateId: number): void
    escape(): void
    addBuff(paramId: number, turns: number): void
    addDebuff(paramId: number, turns: number): void
    removeBuff(paramId: number): void
    removeBattleStates(): void
    removeAllBuffs(): void
    removeStatesAuto(timing: number): void
    removeBuffsAuto(): void
    removeStatesByDamage(): void
    makeActionTimes(): any
    makeActions(): void
    speed(): number
    makeSpeed(): void
    currentAction(): Game_Action
    removeCurrentAction(): void
    setLastTarget(target: Game_Battler): void
    forceAction(skillId: number, targetIndex: number): void
    useItem(item: RMMZData.Item): void
    consumeItem(item: any): void
    gainHp(value: number): void
    gainMp(value: number): void
    gainTp(value: number): void
    gainSilentTp(value: number): void
    initTp(): void
    clearTp(): void
    chargeTpByDamage(damageRate: number): void
    regenerateHp(): void
    maxSlipDamage(): number
    regenerateMp(): void
    regenerateTp(): void
    regenerateAll(): void
    onBattleStart(advantageous?: any): void
    onAllActionsEnd(): void
    onTurnEnd(): void
    onBattleEnd(): void
    onDamage(value: number): void
    setActionState(actionState: string): void
    isUndecided(): boolean
    isInputting(): boolean
    isWaiting(): boolean
    isActing(): boolean
    isChanting(): boolean
    isGuardWaiting(): boolean
    performActionStart(action: {
        isGuard: () => any
    }): void
    performAction(action: Game_Action): void
    performActionEnd(): void
    performDamage(): void
    performMiss(): void
    performRecovery(): void
    performEvasion(): void
    performMagicEvasion(): void
    performCounter(): void
    performReflection(): void
    performSubstitute(target: Game_Battler): void
    performCollapse(): void
}
declare class Game_Enemy extends Game_Battler {
    constructor(enemyId: number, x: number, y: number)
    _enemyId: number
    _letter: string
    _plural: boolean
    _screenX: number
    _screenY: number
    // @ts-ignore
    initialize(enemyId: number, x: number, y: number): void
    initMembers(): void
    setup(enemyId: number, x: number, y: number): void
    isEnemy(): boolean
    // @ts-ignore
    friendsUnit(): Game_Troop
    // @ts-ignore
    opponentsUnit(): Game_Party
    index(): number
    isBattleMember(): boolean
    enemyId(): number
    enemy(): RMMZData.Enemy
    traitObjects(): {
        traits: RMMZData.Trait[]
    }[]
    paramBase(paramId: number): number
    exp(): number
    gold(): number
    makeDropItems(): ItemObject[]
    dropItemRate(): 1 | 2
    itemObject(kind: number, dataId: number): RMMZData.Armor | RMMZData.Item | RMMZData.Weapon | null
    isSpriteVisible(): boolean
    screenX(): number
    screenY(): number
    battlerName(): string
    battlerHue(): number
    originalName(): string
    name(): string
    isLetterEmpty(): boolean
    setLetter(letter: string): void
    setPlural(plural: boolean): void
    performActionStart(action: {
        isGuard: () => any
    }): void
    performAction(action: Game_Action): void
    performActionEnd(): void
    performDamage(): void
    performCollapse(): void
    transform(enemyId: number): void
    meetsCondition(action: RMMZData.Action): boolean
    meetsTurnCondition(param1: number, param2: number): boolean
    meetsHpCondition(param1: number, param2: number): boolean
    meetsMpCondition(param1: number, param2: number): boolean
    meetsStateCondition(param: number): boolean
    meetsPartyLevelCondition(param: number): boolean
    meetsSwitchCondition(param: any): boolean
    isActionValid(action: RMMZData.Action): boolean
    selectAction(actionList: any[], ratingZero: number): any
    selectAllActions(actionList: any[]): void
    makeActions(): void
}
declare class Game_Actor extends Game_Battler {
    _level: number
    _actorId: number
    _name: string
    _nickname: string
    _classId: number
    _characterName: string
    _characterIndex: number
    _faceName: string
    _faceIndex: number
    _battlerName: string
    _exp: {
        [key: number]: number
    }
    _skills: number[]
    _equips: Game_Item[]
    _actionInputIndex: number
    _lastMenuSkill: Game_Item
    _lastBattleSkill: Game_Item
    _lastCommandSymbol: string | null
    _profile: string
    _stateSteps: {
        [key: number]: number
    }
    get level(): number
    constructor(actorId: number)
    // @ts-ignore
    initialize(actorId: number): void
    initMembers(): void
    setup(actorId: number): void
    actorId(): number
    actor(): RMMZData.Actor
    name(): string
    setName(name: string): void
    nickname(): string
    setNickname(nickname: string): void
    profile(): string
    setProfile(profile: string): void
    characterName(): string
    characterIndex(): number
    faceName(): string
    faceIndex(): number
    battlerName(): string
    clearStates(): void
    eraseState(stateId: number): void
    resetStateCounts(stateId: number): void
    initImages(): void
    expForLevel(level: number): number
    initExp(): void
    currentExp(): number
    currentLevelExp(): number
    nextLevelExp(): number
    nextRequiredExp(): number
    maxLevel(): number
    isMaxLevel(): boolean
    initSkills(): void
    initEquips(equips: number[]): void
    equipSlots(): number[]
    equips(): (RMMZData.Weapon | RMMZData.Armor)[]
    weapons(): RMMZData.Weapon[]
    armors(): RMMZData.Armor[]
    hasWeapon(weapon: RMMZData.Weapon): boolean
    hasArmor(armor: RMMZData.Armor): boolean
    isEquipChangeOk(slotId: number): boolean
    changeEquip(slotId: number, item: RMMZData.Weapon | RMMZData.Armor | null): void
    forceChangeEquip(slotId: number, item: RMMZData.Weapon | RMMZData.Armor): void
    tradeItemWithParty(newItem: RMMZData.Weapon | RMMZData.Armor | null, oldItem: RMMZData.Weapon | RMMZData.Armor | null): boolean
    changeEquipById(etypeId: number, itemId: number): void
    isEquipped(item: ItemObject | null): boolean
    discardEquip(item: ItemObject | null): void
    releaseUnequippableItems(forcing: boolean): void
    clearEquipments(): void
    optimizeEquipments(): void
    bestEquipItem(slotId: number): RMMZData.Weapon | null
    calcEquipItemPerformance(item: {
        params: number[]
    }): number
    isSkillWtypeOk(skill: RMMZData.Item): boolean
    isWtypeEquipped(wtypeId: number): boolean
    refresh(): void
    hide(): void
    isActor(): boolean
    // @ts-ignore
    friendsUnit(): Game_Party
    // @ts-ignore
    opponentsUnit(): Game_Troop
    index(): number
    isBattleMember(): boolean
    isFormationChangeOk(): boolean
    currentClass(): RMMZData.Class
    isClass(gameClass: {
        id: number
    }): boolean
    skillTypes(): number[]
    skills(): RMMZData.Item[]
    usableSkills(): RMMZData.Item[]
    traitObjects(): {
        traits: RMMZData.Trait[]
    }[]
    attackElements(): number[]
    hasNoWeapons(): boolean
    bareHandsElementId(): number
    paramBase(paramId: number): number
    paramPlus(paramId: number): number
    attackAnimationId1(): number
    attackAnimationId2(): number
    bareHandsAnimationId(): number
    changeExp(exp: number, show: boolean): void
    levelUp(): void
    levelDown(): void
    findNewSkills(lastSkills: RMMZData.Item[]): RMMZData.Item[]
    displayLevelUp(newSkills: RMMZData.Item[]): void
    gainExp(exp: number): void
    finalExpRate(): number
    benchMembersExpRate(): 0 | 1
    shouldDisplayLevelUp(): boolean
    changeLevel(level: number, show: boolean): void
    learnSkill(skillId: number): void
    forgetSkill(skillId: number): void
    isLearnedSkill(skillId: number): boolean
    hasSkill(skillId: number): boolean
    changeClass(classId: number, keepExp: number): void
    setCharacterImage(characterName: string, characterIndex: number): void
    setFaceImage(faceName: string, faceIndex: number): void
    setBattlerImage(battlerName: string): void
    isSpriteVisible(): boolean
    performActionStart(action: {
        isGuard: () => number
    }): void
    performAction(action: Game_Action): void
    performActionEnd(): void
    performAttack(): void
    performDamage(): void
    performEvasion(): void
    performMagicEvasion(): void
    performCounter(): void
    performCollapse(): void
    performVictory(): void
    performEscape(): void
    makeActionList(): Game_Action[]
    makeAutoBattleActions(): void
    makeConfusionActions(): void
    makeActions(): void
    onPlayerWalk(): void
    updateStateSteps(state: RMMZData.State): void
    showAddedStates(): void
    showRemovedStates(): void
    stepsForTurn(): number
    turnEndOnMap(): void
    checkFloorEffect(): void
    executeFloorDamage(): void
    basicFloorDamage(): number
    maxFloorDamage(): number
    performMapDamage(): void
    clearActions(): void
    inputtingAction(): Game_Action
    selectNextCommand(): boolean
    selectPreviousCommand(): boolean
    lastSkill(): RMMZData.Item
    lastMenuSkill(): RMMZData.Item
    setLastMenuSkill(skill: RMMZData.Item): void
    lastBattleSkill(): RMMZData.Item
    setLastBattleSkill(skill: RMMZData.Item): void
    lastCommandSymbol(): string | null
    setLastCommandSymbol(symbol: string | null): void
    testEscape(item: RMMZData.Item): boolean
    meetsUsableItemConditions(item: RMMZData.Item): boolean
    onEscapeFailure(): void
}
declare class Game_Actors {
    _data: Game_Actor[]
    constructor(...args: [])
    initialize(): void
    actor(actorId: number): Game_Actor | null
}
declare class Game_Unit<T extends Game_Battler> {
    _inBattle: boolean
    constructor(...args: [])
    initialize(): void
    inBattle(): boolean
    members(): T[]
    aliveMembers(): T[]
    deadMembers(): T[]
    movableMembers(): T[]
    clearActions(): void
    agility(): number
    tgrSum(): number
    randomTarget(): Game_Battler
    randomDeadTarget(): T | null
    smoothTarget(index: number): T
    smoothDeadTarget(index: number): T
    clearResults(): void
    onBattleStart(advantageous: boolean): void
    onBattleEnd(): void
    makeActions(): void
    select(activeMember: Game_Battler | null): void
    isAllDead(): boolean
    substituteBattler(): T | null
    tpbBaseSpeed(): number
    tpbReferenceTime(): 240 | 60
    updateTpb(): void
}
// @ts-ignore
declare class Game_Party extends Game_Unit<Game_Actor> {
    static ABILITY_ENCOUNTER_HALF: number
    static ABILITY_ENCOUNTER_NONE: number
    static ABILITY_CANCEL_SURPRISE: number
    static ABILITY_RAISE_PREEMPTIVE: number
    static ABILITY_GOLD_DOUBLE: number
    static ABILITY_DROP_ITEM_DOUBLE: number
    _gold: number
    _steps: number
    _lastItem: Game_Item
    _menuActorId: number
    _targetActorId: number
    _actors: number[]
    _items: {
        [key: number]: number
    }
    _weapons: {
        [key: number]: number
    }
    _armors: {
        [key: number]: number
    }
    initialize(): void
    initAllItems(): void
    exists(): boolean
    size(): number
    isEmpty(): boolean
    members(): Game_Actor[]
    allMembers(): Game_Actor[]
    battleMembers(): Game_Actor[]
    hiddenBattleMembers(): Game_Actor[]
    allBattleMembers(): Game_Actor[]
    maxBattleMembers(): number
    leader(): Game_Actor
    removeInvalidMembers(): void
    reviveBattleMembers(): void
    items(): RMMZData.Item[]
    weapons(): RMMZData.Weapon[]
    armors(): RMMZData.Armor[]
    equipItems(): RMMZData.Weapon[]
    allItems(): RMMZData.Item[]
    itemContainer(item: ItemObject | null): {
        [key: number]: number
    } | null
    setupStartingMembers(): void
    name(): string
    setupBattleTest(): void
    setupBattleTestMembers(): void
    setupBattleTestItems(): void
    highestLevel(): number
    addActor(actorId: number): void
    removeActor(actorId: number): void
    gold(): number
    gainGold(amount: number): void
    loseGold(amount: number): void
    maxGold(): number
    steps(): number
    increaseSteps(): void
    numItems(item: ItemObject | null): number
    maxItems(item: ItemObject | null): number
    hasMaxItems(item: ItemObject): boolean
    hasItem(item: ItemObject | null, includeEquip?: boolean): boolean
    isAnyMemberEquipped(item: ItemObject | null): boolean
    gainItem(item: ItemObject | null, amount: number, includeEquip?: boolean): void
    discardMembersEquip(item: ItemObject | null, amount: number): void
    loseItem(item: ItemObject | null, amount: number, includeEquip?: boolean): void
    consumeItem(item: ItemObject): void
    canUse(item: RMMZData.Item): boolean
    canInput(): boolean
    isAllDead(): boolean
    isEscaped(): boolean
    onPlayerWalk(): void
    menuActor(): Game_Actor | null
    setMenuActor(actor: Game_Actor): void
    makeMenuActorNext(): void
    makeMenuActorPrevious(): void
    targetActor(): Game_Actor | null
    setTargetActor(actor: Game_Actor): void
    lastItem(): ItemObject | null
    setLastItem(item: ItemObject): void
    swapOrder(index1: number, index2: number): void
    charactersForSavefile(): (string | number)[][]
    facesForSavefile(): (string | number)[][]
    partyAbility(abilityId: number): boolean
    hasEncounterHalf(): boolean
    hasEncounterNone(): boolean
    hasCancelSurprise(): boolean
    hasRaisePreemptive(): boolean
    hasGoldDouble(): boolean
    hasDropItemDouble(): boolean
    ratePreemptive(troopAgi: number): number
    rateSurprise(troopAgi: number): number
    performVictory(): void
    performEscape(): void
    removeBattleStates(): void
    requestMotionRefresh(): void
    onEscapeFailure(): void
}
declare class Game_CharacterBase {
    _x: number
    _y: number
    _realX: number
    _realY: number
    _moveSpeed: number
    _moveFrequency: number
    _opacity: number
    _blendMode: number
    _direction: number
    _pattern: number
    _priorityType: number
    _tileId: number
    _characterName: string
    _characterIndex: number
    _isObjectCharacter: boolean
    _walkAnime: boolean
    _stepAnime: boolean
    _directionFix: boolean
    _through: boolean
    _transparent: boolean
    _bushDepth: number
    _animationId: number
    _balloonId: number
    _animationPlaying: boolean
    _balloonPlaying: boolean
    _animationCount: number
    _stopCount: number
    _jumpCount: number
    _jumpPeak: number
    _movementSuccess: boolean
    constructor()
    get x(): number
    get y(): number
    initialize(): void
    initMembers(): void
    pos(x: number, y: number): boolean
    posNt(x: number, y: number): boolean
    moveSpeed(): number
    setMoveSpeed(moveSpeed: number): void
    moveFrequency(): number
    setMoveFrequency(moveFrequency: number): void
    opacity(): number
    setOpacity(opacity: number): void
    blendMode(): number
    setBlendMode(blendMode: number): void
    isNormalPriority(): boolean
    setPriorityType(priorityType: number): void
    isMoving(): boolean
    isJumping(): boolean
    jumpHeight(): number
    isStopping(): boolean
    checkStop(threshold: number): boolean
    resetStopCount(): void
    realMoveSpeed(): number
    distancePerFrame(): number
    isDashing(): boolean
    isDebugThrough(): boolean
    straighten(): void
    reverseDir(d: number): number
    canPass(x: number, y: number, d: number): boolean
    canPassDiagonally(x: number, y: number, horz: number, vert: number): boolean
    isMapPassable(x: number, y: number, d: number): boolean
    isCollidedWithCharacters(x: number, y: number): boolean
    isCollidedWithEvents(x: number, y: number): boolean
    isCollidedWithVehicles(x: number, y: number): boolean
    setPosition(x: number, y: number): void
    copyPosition(character: Game_CharacterBase): void
    locate(x: number, y: number): void
    direction(): number
    setDirection(d: number): void
    isTile(): boolean
    isObjectCharacter(): boolean
    shiftY(): number
    scrolledX(): number
    scrolledY(): number
    screenX(): number
    screenY(): number
    screenZ(): number
    isNearTheScreen(): boolean
    update(...args: any[]): void
    updateStop(): void
    updateJump(): void
    updateMove(): void
    updateAnimation(): void
    animationWait(): number
    updateAnimationCount(): void
    updatePattern(): void
    maxPattern(): number
    pattern(): number
    setPattern(pattern: number): void
    isOriginalPattern(): boolean
    resetPattern(): void
    refreshBushDepth(): void
    isOnLadder(): boolean
    isOnBush(): boolean
    terrainTag(): number
    regionId(): number
    increaseSteps(): void
    tileId(): number
    characterName(): string
    characterIndex(): number
    setImage(characterName: string, characterIndex: number): void
    setTileImage(tileId: number): void
    checkEventTriggerTouchFront(d: number): void
    checkEventTriggerTouch(x: number, y: number): void
    isMovementSucceeded(): boolean
    setMovementSuccess(success: boolean): void
    moveStraight(d: number): void
    moveDiagonally(horz: number, vert: number): void
    jump(xPlus: number, yPlus: number): void
    hasWalkAnime(): boolean
    setWalkAnime(walkAnime: boolean): void
    hasStepAnime(): boolean
    setStepAnime(stepAnime: boolean): void
    isDirectionFixed(): boolean
    setDirectionFix(directionFix: boolean): void
    isThrough(): boolean
    setThrough(through: boolean): void
    isTransparent(): boolean
    bushDepth(): number
    setTransparent(transparent: boolean): void
    startAnimation(): void
    startBalloon(): void
    isAnimationPlaying(): boolean
    isBalloonPlaying(): boolean
    endAnimation(): void
    endBalloon(): void
}
declare class Game_Character extends Game_CharacterBase {
    static ROUTE_END: number
    static ROUTE_MOVE_DOWN: number
    static ROUTE_MOVE_LEFT: number
    static ROUTE_MOVE_RIGHT: number
    static ROUTE_MOVE_UP: number
    static ROUTE_MOVE_LOWER_L: number
    static ROUTE_MOVE_LOWER_R: number
    static ROUTE_MOVE_UPPER_L: number
    static ROUTE_MOVE_UPPER_R: number
    static ROUTE_MOVE_RANDOM: number
    static ROUTE_MOVE_TOWARD: number
    static ROUTE_MOVE_AWAY: number
    static ROUTE_MOVE_FORWARD: number
    static ROUTE_MOVE_BACKWARD: number
    static ROUTE_JUMP: number
    static ROUTE_WAIT: number
    static ROUTE_TURN_DOWN: number
    static ROUTE_TURN_LEFT: number
    static ROUTE_TURN_RIGHT: number
    static ROUTE_TURN_UP: number
    static ROUTE_TURN_90D_R: number
    static ROUTE_TURN_90D_L: number
    static ROUTE_TURN_180D: number
    static ROUTE_TURN_90D_R_L: number
    static ROUTE_TURN_RANDOM: number
    static ROUTE_TURN_TOWARD: number
    static ROUTE_TURN_AWAY: number
    static ROUTE_SWITCH_ON: number
    static ROUTE_SWITCH_OFF: number
    static ROUTE_CHANGE_SPEED: number
    static ROUTE_CHANGE_FREQ: number
    static ROUTE_WALK_ANIME_ON: number
    static ROUTE_WALK_ANIME_OFF: number
    static ROUTE_STEP_ANIME_ON: number
    static ROUTE_STEP_ANIME_OFF: number
    static ROUTE_DIR_FIX_ON: number
    static ROUTE_DIR_FIX_OFF: number
    static ROUTE_THROUGH_ON: number
    static ROUTE_THROUGH_OFF: number
    static ROUTE_TRANSPARENT_ON: number
    static ROUTE_TRANSPARENT_OFF: number
    static ROUTE_CHANGE_IMAGE: number
    static ROUTE_CHANGE_OPACITY: number
    static ROUTE_CHANGE_BLEND_MODE: number
    static ROUTE_PLAY_SE: number
    static ROUTE_SCRIPT: number
    _moveRouteForcing: boolean
    _moveRoute: RMMZData.MoveRoute | null
    _moveRouteIndex: number
    _originalMoveRoute: RMMZData.MoveRoute | null
    _originalMoveRouteIndex: number
    _waitCount: number
    initialize(...args: any[]): void
    initMembers(): void
    memorizeMoveRoute(): void
    restoreMoveRoute(): void
    isMoveRouteForcing(): boolean
    setMoveRoute(moveRoute: RMMZData.MoveRoute): void
    forceMoveRoute(moveRoute: RMMZData.MoveRoute): void
    updateStop(): void
    updateRoutineMove(): void
    processMoveCommand(command: RMMZData.MoveRouteCommand): void
    deltaXFrom(x: number): number
    deltaYFrom(y: number): number
    moveRandom(): void
    moveTowardCharacter(character: Game_Character): void
    moveAwayFromCharacter(character: Game_Character): void
    turnTowardCharacter(character: Game_Character): void
    turnAwayFromCharacter(character: Game_Character): void
    turnTowardPlayer(): void
    turnAwayFromPlayer(): void
    moveTowardPlayer(): void
    moveAwayFromPlayer(): void
    moveForward(): void
    moveBackward(): void
    processRouteEnd(): void
    advanceMoveRouteIndex(): void
    turnRight90(): void
    turnLeft90(): void
    turn180(): void
    turnRightOrLeft90(): void
    turnRandom(): void
    swap(character: Game_Character): void
    findDirectionTo(goalX: number, goalY: number): number
    searchLimit(): number
}
declare class Game_Follower extends Game_Character {
    _memberIndex: number
    constructor(memberIndex: number)
    initialize(...args: any[]): void
    refresh(): void
    actor(): Game_Actor
    isVisible(): boolean
    isGathered(): boolean
    update(): void
    chaseCharacter(character: Game_Character): void
}
declare class Game_Followers {
    _visible: boolean
    _gathering: boolean
    _data: Game_Follower[]
    constructor()
    initialize(): void
    setup(): void
    isVisible(): boolean
    show(): void
    hide(): void
    data(): Game_Follower[]
    reverseData(): Game_Follower[]
    follower(index: number): Game_Follower
    refresh(): void
    update(): void
    updateMove(): void
    jumpAll(): void
    synchronize(x: number, y: number, d: number): void
    gather(): void
    areGathering(): boolean
    visibleFollowers(): Game_Follower[]
    areMoving(): boolean
    areGathered(): boolean
    isSomeoneCollided(x: number, y: number): boolean
}
declare class Game_Player extends Game_Character {
    _vehicleType: string
    _vehicleGettingOn: boolean
    _vehicleGettingOff: boolean
    _dashing: boolean
    _needsMapReload: boolean
    _transferring: boolean
    _newMapId: number
    _newX: number
    _newY: number
    _newDirection: number
    _fadeType: number
    _followers: Game_Followers
    _encounterCount: number
    initialize(...args: any[]): void
    initMembers(): void
    clearTransferInfo(): void
    followers(): Game_Followers
    refresh(): void
    isStopping(): boolean
    reserveTransfer(mapId: number, x: number, y: number, d?: number, fadeType?: number): void
    setupForNewGame(): void
    requestMapReload(): void
    isTransferring(): boolean
    newMapId(): number
    fadeType(): number
    performTransfer(): void
    isMapPassable(x: number, y: number, d: number): boolean
    vehicle(): Game_Vehicle | null
    isInBoat(): boolean
    isInShip(): boolean
    isInAirship(): boolean
    isInVehicle(): boolean
    isNormal(): boolean
    isDashing(): boolean
    isDebugThrough(): boolean
    isCollided(x: number, y: number): boolean
    centerX(): number
    centerY(): number
    center(x: number, y: number): void
    locate(x: number, y: number): void
    increaseSteps(): void
    makeEncounterCount(): void
    makeEncounterTroopId(): number
    meetsEncounterConditions(encounter: RMMZData.Encounter): boolean
    executeEncounter(): boolean
    startMapEvent(x: number, y: number, triggers: number[], normal: boolean): void
    moveByInput(): void
    canMove(): boolean
    getInputDirection(): number
    executeMove(direction: number): void
    update(sceneActive: boolean): void
    updateDashing(): void
    isDashButtonPressed(): boolean
    updateScroll(lastScrolledX: number, lastScrolledY: number): void
    updateVehicle(): void
    updateVehicleGetOn(): void
    updateVehicleGetOff(): void
    updateNonmoving(wasMoving: boolean, sceneActive: boolean): void
    triggerAction(): boolean
    triggerButtonAction(): boolean
    triggerTouchAction(): boolean
    triggerTouchActionD1(x1: number, y1: number): boolean
    triggerTouchActionD2(x2: number, y2: number): boolean
    triggerTouchActionD3(x2: number, y2: number): boolean
    updateEncounterCount(): void
    canEncounter(): boolean
    encounterProgressValue(): number
    checkEventTriggerHere(triggers: number[]): void
    checkEventTriggerThere(triggers: number[]): void
    checkEventTriggerTouch(x: number, y: number): void
    canStartLocalEvents(): boolean
    getOnOffVehicle(): boolean
    getOnVehicle(): boolean
    getOffVehicle(): boolean
    forceMoveForward(): void
    isOnDamageFloor(): boolean
    moveStraight(d: number): void
    moveDiagonally(horz: number, vert: number): void
    jump(xPlus: number, yPlus: number): void
    showFollowers(): void
    hideFollowers(): void
    gatherFollowers(): void
    areFollowersGathering(): boolean
    areFollowersGathered(): boolean
}
declare class Game_Event extends Game_Character {
    _mapId: number
    _eventId: number
    _moveType: number
    _trigger: number | null
    _starting: boolean
    _erased: boolean
    _pageIndex: number
    _originalPattern: number
    _originalDirection: number
    _prelockDirection: number
    _locked: boolean
    _interpreter: Game_Interpreter | null
    constructor(mapId: number, eventId: number)
    initialize(...args: any[]): void
    initMembers(): void
    eventId(): number
    event(): RMMZData.Event | null
    page(): RMMZData.EventPage
    list(): RMMZData.EventCommand[]
    isCollidedWithCharacters(x: number, y: number): boolean
    isCollidedWithEvents(x: number, y: number): boolean
    isCollidedWithPlayerCharacters(x: number, y: number): boolean
    lock(): void
    unlock(): void
    updateStop(): void
    updateSelfMovement(): void
    stopCountThreshold(): number
    moveTypeRandom(): void
    moveTypeTowardPlayer(): void
    isNearThePlayer(): boolean
    moveTypeCustom(): void
    isStarting(): boolean
    clearStartingFlag(): void
    isTriggerIn(triggers: (number | null)[]): boolean
    start(): void
    erase(): void
    refresh(): void
    findProperPageIndex(): number
    meetsConditions(page: RMMZData.EventPage): boolean
    setupPage(): void
    clearPageSettings(): void
    setupPageSettings(): void
    isOriginalPattern(): boolean
    resetPattern(): void
    checkEventTriggerTouch(x: number, y: number): void
    checkEventTriggerAuto(): void
    update(): void
    updateParallel(): void
    locate(x: number, y: number): void
    forceMoveRoute(moveRoute: RMMZData.MoveRoute): void
}
declare class Game_Vehicle extends Game_Character {
    _type: string
    _mapId: number
    _altitude: number
    _driving: boolean
    _bgm: any
    constructor(type: string)
    initialize(...args: any[]): void
    initMembers(): void
    isBoat(): boolean
    isShip(): boolean
    isAirship(): boolean
    resetDirection(): void
    initMoveSpeed(): void
    vehicle(): RMMZData.Vehicle | null
    loadSystemSettings(): void
    refresh(): void
    setLocation(mapId: number, x: number, y: number): void
    pos(x: number, y: number): boolean
    isMapPassable(x: number, y: number, d: number): boolean
    getOn(): void
    getOff(): void
    setBgm(bgm: any): void
    playBgm(): void
    syncWithPlayer(): void
    screenY(): number
    shadowX(): number
    shadowY(): number
    shadowOpacity(): number
    canMove(): boolean
    update(): void
    updateAirship(): void
    updateAirshipAltitude(): void
    maxAltitude(): number
    isLowest(): boolean
    isHighest(): boolean
    isTakeoffOk(): boolean
    isLandOk(x: any, y: any, d: number): boolean
}
declare class Game_CommonEvent {
    _commonEventId: number
    _interpreter: Game_Interpreter | null
    constructor(commonEventId: number)
    initialize(commonEventId: number): void
    event(): RMMZData.CommonEvent
    list(): RMMZData.EventCommand[]
    refresh(): void
    isActive(): boolean
    update(): void
}
type ItemObject = RMMZData.Item | RMMZData.Weapon | RMMZData.Armor
declare class Game_Item {
    _dataClass: string
    _itemId: number
    constructor(item?: RMMZData.Item)
    initialize(item?: RMMZData.Item): void
    isSkill(): boolean
    isItem(): boolean
    isUsableItem(): boolean
    isWeapon(): boolean
    isArmor(): boolean
    isEquipItem(): boolean
    isNull(): boolean
    itemId(): number
    object(): ItemObject | null
    setObject(item: ItemObject | null): void
    setEquip(isWeapon: boolean, itemId: number): void
}
declare class Game_Interpreter {
    _depth: number
    _branch: any
    _indent: number
    _frameCount: number
    _freezeChecker: number
    _mapId: number
    _eventId: number
    _list: RMMZData.EventCommand[] | null
    _index: number
    _waitCount: number
    _waitMode: string
    _comments: any
    _characterId: number
    _childInterpreter: Game_Interpreter | null
    constructor(depth?: number)
    initialize(depth?: number): void
    checkOverflow(): void
    clear(): void
    setup(list: RMMZData.EventCommand[], eventId?: number): void
    loadImages(): void
    eventId(): number
    isOnCurrentMap(): boolean
    setupReservedCommonEvent(): boolean
    isRunning(): boolean
    update(): void
    updateChild(): boolean
    updateWait(): boolean | null
    updateWaitCount(): boolean
    updateWaitMode(): boolean | null
    setWaitMode(waitMode: string): void
    wait(duration: number): void
    fadeSpeed(): number
    executeCommand(this: any): boolean
    checkFreeze(): boolean
    terminate(): void
    skipBranch(): void
    currentCommand(): RMMZData.EventCommand
    nextEventCode(): number
    iterateActorId(param: number, callback: (actor: Game_Actor) => void): void
    iterateActorEx(param1: number, param2: any, callback: (actor: Game_Actor) => void): void
    iterateActorIndex(param: number, callback: (actor: Game_Actor) => void): void
    iterateEnemyIndex(param: number, callback: (enemy: Game_Enemy) => void): void
    iterateBattler(param1: number, param2: any, callback: (battler: Game_Battler) => void): void
    character(param: number): Game_Player | Game_Event | null
    operateValue(operation: number, operandType: number, operand: any): any
    changeHp(target: Game_Battler, value: number, allowDeath: any): void
    command101(params: any[]): boolean
    command102(params: any): boolean
    setupChoices(params: string | any[]): void
    command402(params: any[]): boolean
    command403(): boolean
    command103(params: any): boolean
    setupNumInput(params: any[]): void
    command104(params: any): boolean
    setupItemChoice(params: any[]): void
    command105(params: any[]): boolean
    command108(params: any[]): boolean
    command109(): boolean
    command111(params: any[]): boolean
    command411(): boolean
    command112(): boolean
    command413(): boolean
    command113(): boolean
    command115(): boolean
    command117(params: number[]): boolean
    setupChild(list: any, eventId: number): void
    command118(): boolean
    command119(params: any[]): boolean
    jumpTo(index: number): void
    command121(params: number[]): boolean
    command122(params: any[]): boolean
    gameDataOperand(type: any, param1: number, param2: number): number
    operateVariable(variableId: any, operationType: any, value: number): void
    command123(params: any[]): boolean
    command124(params: number[]): boolean
    command125(params: any[]): boolean
    command126(params: number[]): boolean
    command127(params: any[]): boolean
    command128(params: any[]): boolean
    command129(params: any[]): boolean
    command132(params: any[]): boolean
    command133(params: any[]): boolean
    command134(params: number[]): boolean
    command135(params: number[]): boolean
    command136(params: number[]): boolean
    command137(params: number[]): boolean
    command138(params: any[]): boolean
    command139(params: any[]): boolean
    command140(params: any[]): boolean
    command201(params: any[]): boolean
    command202(params: any[]): boolean
    command203(params: any[]): boolean
    command204(params: any[]): boolean
    command205(params: any[]): boolean
    command206(): boolean
    command211(params: number[]): boolean
    command212(params: any[]): boolean
    command213(params: any[]): boolean
    command214(): boolean
    command216(params: number[]): boolean
    command217(): boolean
    command221(): boolean
    command222(): boolean
    command223(params: any[]): boolean
    command224(params: any[]): boolean
    command225(params: any[]): boolean
    command230(params: any[]): boolean
    command231(params: any[]): boolean
    command232(params: any[]): boolean
    picturePoint(params: any[]): Point
    command233(params: any[]): boolean
    command234(params: any[]): boolean
    command235(params: any[]): boolean
    command236(params: any[]): boolean
    command241(params: IAudioObject[]): boolean
    command242(params: number[]): boolean
    command243(): boolean
    command244(): boolean
    command245(params: any[]): boolean
    command246(params: number[]): boolean
    command249(params: {
        name: any
    }[]): boolean
    command250(params: {
        name: any
    }[]): boolean
    command251(): boolean
    command261(params: any[]): boolean
    videoFileExt(): ".webm" | ".mp4"
    command281(params: number[]): boolean
    command282(params: any[]): boolean
    command283(params: any[]): boolean
    command284(params: any[]): boolean
    command285(params: any[]): boolean
    command301(params: any[]): boolean
    command601(): boolean
    command602(): boolean
    command603(): boolean
    command302(params: any[]): boolean
    command303(params: any[]): boolean
    command311(params: any[]): boolean
    command312(params: any[]): boolean
    command326(params: any[]): boolean
    command313(params: any[]): boolean
    command314(params: any[]): boolean
    command315(params: any[]): boolean
    command316(params: any[]): boolean
    command317(params: any[]): boolean
    command318(params: any[]): boolean
    command319(params: any[]): boolean
    command320(params: any[]): boolean
    command321(params: any[]): boolean
    command322(params: any[]): boolean
    command323(params: any[]): boolean
    command324(params: any[]): boolean
    command325(params: any[]): boolean
    command331(params: any[]): boolean
    command332(params: any[]): boolean
    command342(params: any[]): boolean
    command333(params: any[]): boolean
    command334(params: any[]): boolean
    command335(params: any[]): boolean
    command336(params: any[]): boolean
    command337(params: any[]): boolean
    command339(params: any[]): boolean
    command340(): boolean
    command351(): boolean
    command352(): boolean
    command353(): boolean
    command354(): boolean
    command355(): boolean
    command356(params: string[]): boolean
    pluginCommand(command: any, args: any): void
    command357(params: any[]): boolean
}
// @ts-ignore
declare class Game_Troop extends Game_Unit<Game_Enemy> {
    static LETTER_TABLE_HALF: string[]
    static LETTER_TABLE_FULL: string[]
    _interpreter: Game_Interpreter
    _turnCount: number
    _enemies: Game_Enemy[]
    _troopId: number
    _eventFlags: {
        [key: number]: boolean
    }
    _namesCount: {
        [key: string]: number
    }
    initialize(): void
    isEventRunning(): boolean
    updateInterpreter(): void
    turnCount(): number
    members(): Game_Enemy[]
    clear(): void
    troop(): RMMZData.Troop
    setup(troopId: number): void
    makeUniqueNames(): void
    updatePluralFlags(): void
    letterTable(): string[]
    enemyNames(): string[]
    meetsConditions(page: any): boolean
    setupBattleEvent(): void
    increaseTurn(): void
    expTotal(): number
    goldTotal(): number
    goldRate(): 1 | 2
    makeDropItems(): ItemObject[]
    isTpbTurnEnd(): boolean
}
declare class Game_Screen {
    _brightness: number
    _tone: any
    _flashColor: any
    _shake: number
    _zoomX: number
    _zoomY: number
    _zoomScale: any
    _weatherType: any
    _weatherPower: any
    _pictures: any
    _fadeOutDuration: number
    _fadeInDuration: number
    _toneTarget: number[]
    _toneDuration: number
    _flashDuration: number
    _shakePower: number
    _shakeSpeed: number
    _shakeDuration: number
    _shakeDirection: number
    _zoomScaleTarget: number
    _zoomDuration: number
    _weatherPowerTarget: number
    _weatherDuration: number
    constructor()
    initialize(...args: any[]): void
    clear(): void
    onBattleStart(): void
    brightness(): number
    tone(): any
    flashColor(): any
    shake(): number
    zoomX(): number
    zoomY(): number
    zoomScale(): any
    weatherType(): any
    weatherPower(): any
    picture(pictureId: number): any
    realPictureId(pictureId: number): number
    clearFade(): void
    clearTone(): void
    clearFlash(): void
    clearShake(): void
    clearZoom(): void
    clearWeather(): void
    clearPictures(): void
    eraseBattlePictures(): void
    maxPictures(): number
    startFadeOut(duration: number): void
    startFadeIn(duration: number): void
    startTint(tone: any, duration: number): void
    startFlash(color: any, duration: number): void
    startShake(power: number, speed: number, duration: number): void
    startZoom(x: number, y: number, scale: number, duration: number): void
    setZoom(x: number, y: number, scale: number): void
    changeWeather(type: string, power: number, duration: number): void
    update(): void
    updateFadeOut(): void
    updateFadeIn(): void
    updateTone(): void
    updateFlash(): void
    updateShake(): void
    updateZoom(): void
    updateWeather(): void
    updatePictures(): void
    startFlashForDamage(): void
    showPicture(pictureId: number, name: string, origin: Point, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number): void
    movePicture(pictureId: number, origin: Point, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: number, duration: number, easingType: any): void
    rotatePicture(pictureId: number, speed: number): void
    tintPicture(pictureId: number, tone: any, duration: any): void
    erasePicture(pictureId: number): void
}
declare class Game_Map {
    _interpreter: Game_Interpreter
    _mapId: number
    _tilesetId: number
    _events: Game_Event[]
    _commonEvents: Game_CommonEvent[]
    _vehicles: Game_Vehicle[]
    _displayX: number
    _displayY: number
    _nameDisplay: boolean
    _scrollDirection: number
    _scrollRest: number
    _scrollSpeed: number
    _parallaxName: string
    _parallaxZero: boolean
    _parallaxLoopX: boolean
    _parallaxLoopY: boolean
    _parallaxSx: number
    _parallaxSy: number
    _parallaxX: number
    _parallaxY: number
    _battleback1Name: string | null
    _battleback2Name: string | null
    _needsRefresh: boolean
    _tileEvents: any
    constructor(...args: any[])
    initialize(...args: any[]): void
    setup(mapId: number): void
    isEventRunning(): boolean
    tileWidth(): number
    tileHeight(): number
    bushDepth(): number
    mapId(): number
    tilesetId(): number
    displayX(): number
    displayY(): number
    parallaxName(): string
    battleback1Name(): string | null
    battleback2Name(): string | null
    requestRefresh(): void
    isNameDisplayEnabled(): boolean
    disableNameDisplay(): void
    enableNameDisplay(): void
    createVehicles(): void
    refereshVehicles(): void
    vehicles(): Game_Vehicle[]
    vehicle(type: number | string): Game_Vehicle | null
    boat(): Game_Vehicle
    ship(): Game_Vehicle
    airship(): Game_Vehicle
    setupEvents(): void
    events(): Game_Event[]
    event(eventId: number): Game_Event
    eraseEvent(eventId: number): void
    autorunCommonEvents(): RMMZData.CommonEvent[]
    parallelCommonEvents(): RMMZData.CommonEvent[]
    setupScroll(): void
    setupParallax(): void
    setupBattleback(): void
    setDisplayPos(x: number, y: number): void
    parallaxOx(): number
    parallaxOy(): number
    tileset(): RMMZData.Tileset
    tilesetFlags(): number[]
    displayName(): string
    width(): number
    height(): number
    data(): number[]
    isLoopHorizontal(): boolean
    isLoopVertical(): boolean
    isDashDisabled(): boolean
    encounterList(): RMMZData.Encounter[]
    encounterStep(): number
    isOverworld(): boolean
    screenTileX(): number
    screenTileY(): number
    adjustX(x: number): number
    adjustY(y: number): number
    roundX(x: number): number
    roundY(y: number): number
    xWithDirection(x: number, d: number): number
    yWithDirection(y: number, d: number): number
    roundXWithDirection(x: number, d: number): number
    roundYWithDirection(y: number, d: number): number
    deltaX(x1: number, x2: number): number
    deltaY(y1: number, y2: number): number
    distance(x1: any, y1: any, x2: any, y2: any): number
    canvasToMapX(x: number): number
    canvasToMapY(y: number): number
    autoplay(): void
    refreshIfNeeded(): void
    refresh(): void
    refreshTileEvents(): void
    eventsXy(x: number, y: number): Game_Event[]
    eventsXyNt(x: number, y: number): Game_Event[]
    tileEventsXy(x: number, y: number): any
    eventIdXy(x: any, y: any): number
    scrollDown(distance: number): void
    scrollLeft(distance: number): void
    scrollRight(distance: number): void
    scrollUp(distance: number): void
    isValid(x: number, y: number): boolean
    checkPassage(x: number, y: number, bit: number): boolean
    tileId(x: number, y: number, z: number): number
    layeredTiles(x: number, y: number): number[]
    allTiles(x: number, y: number): any
    autotileType(x: number, y: number, z: number): number
    isPassable(x: any, y: any, d: number): boolean
    isBoatPassable(x: any, y: any): boolean
    isShipPassable(x: any, y: any): boolean
    isAirshipLandOk(x: any, y: any): boolean
    checkLayeredTilesFlags(x: any, y: any, bit: number): boolean
    isLadder(x: any, y: any): boolean
    isBush(x: any, y: any): boolean
    isCounter(x: any, y: any): boolean
    isDamageFloor(x: any, y: any): boolean
    terrainTag(x: any, y: any): number
    regionId(x: any, y: any): number
    startScroll(direction: number, distance: number, speed: number): void
    isScrolling(): boolean
    update(sceneActive: any): void
    updateScroll(): void
    scrollDistance(): number
    doScroll(direction: number, distance: number): void
    updateEvents(): void
    updateVehicles(): void
    updateParallax(): void
    changeTileset(tilesetId: number): void
    changeBattleback(battleback1Name: string, battleback2Name: string): void
    changeParallax(name: string, loopX: boolean, loopY: boolean, sx: number, sy: number): void
    updateInterpreter(): void
    unlockEvent(eventId: number): void
    setupStartingEvent(): boolean
    setupTestEvent(): boolean
    setupStartingMapEvent(): boolean
    setupAutorunCommonEvent(): boolean
    isAnyEventStarting(): boolean
}
declare class Game_Message {
    _texts: string[]
    _choices: string[]
    _speakerName: string
    _faceName: string
    _faceIndex: number
    _background: number
    _positionType: number
    _choiceDefaultType: number
    _choiceCancelType: number
    _choiceBackground: number
    _choicePositionType: number
    _numInputVariableId: number
    _numInputMaxDigits: number
    _itemChoiceVariableId: number
    _itemChoiceItypeId: number
    _scrollMode: boolean
    _scrollSpeed: number
    _scrollNoFast: boolean
    _choiceCallback: Function | null
    constructor(...args: any[])
    initialize(): void
    clear(): void
    choices(): string[]
    speakerName(): string
    faceName(): string
    faceIndex(): number
    background(): number
    positionType(): number
    choiceDefaultType(): number
    choiceCancelType(): number
    choiceBackground(): number
    choicePositionType(): number
    numInputVariableId(): number
    numInputMaxDigits(): number
    itemChoiceVariableId(): number
    itemChoiceItypeId(): number
    scrollMode(): boolean
    scrollSpeed(): number
    scrollNoFast(): boolean
    add(text: string): void
    setSpeakerName(speakerName: string): void
    setFaceImage(faceName: string, faceIndex: number): void
    setBackground(background: number): void
    setPositionType(positionType: number): void
    setChoices(choices: string[], defaultType: number, cancelType: number): void
    setChoiceBackground(background: number): void
    setChoicePositionType(positionType: number): void
    setNumberInput(variableId: number, maxDigits: number): void
    setItemChoice(variableId: number, itemType: number): void
    setScroll(speed: number, noFast: boolean): void
    setChoiceCallback(callback: Function): void
    onChoice(n: number): void
    hasText(): boolean
    isChoice(): boolean
    isNumberInput(): boolean
    isItemChoice(): boolean
    isBusy(): boolean
    newPage(): void
    allText(): string
    isRTL(): boolean
}
declare class Game_SelfSwitches {
    _data: { [key: string]: boolean }
    constructor(...args: any[])
    initialize(): void
    clear(): void
    value(key: [number, number, string]): boolean
    setValue(key: [number, number, string], value: boolean): void
    onChange(): void
}
declare class Game_Switches {
    _data: boolean[]
    constructor()
    initialize(): void
    clear(): void
    value(switchId: number): boolean
    setValue(switchId: number, value: boolean): void
    onChange(): void
}
declare class Game_Temp {
    _isPlaytest: boolean
    _destinationX: number | null
    _destinationY: number | null
    _touchTarget: any
    _touchState: string
    _needsBattleRefresh: boolean
    _commonEventQueue: number[]
    _animationQueue: IAnimationRequest[]
    _balloonQueue: IBalloonRequest[]
    _lastActionData: number[]
    constructor()
    initialize(): void
    isPlaytest(): boolean
    setDestination(x: number, y: number): void
    clearDestination(): void
    isDestinationValid(): boolean
    destinationX(): number | null
    destinationY(): number | null
    setTouchState(target: any, state: string): void
    clearTouchState(): void
    touchTarget(): any
    touchState(): string
    requestBattleRefresh(): void
    clearBattleRefreshRequest(): void
    isBattleRefreshRequested(): boolean
    reserveCommonEvent(commonEventId: number): void
    retrieveCommonEvent(): RMMZData.CommonEvent
    clearCommonEventReservation(): void
    isCommonEventReserved(): boolean
    requestAnimation(targets: (Game_Character | Game_Battler)[], animationId: number, mirror?: boolean): void
    retrieveAnimation(): IAnimationRequest | undefined
    requestBalloon(target: Game_Character, balloonId: number): void
    retrieveBalloon(): IBalloonRequest | undefined
    lastActionData(type: number): number
    setLastActionData(type: number, value: number): void
    setLastUsedSkillId(skillID: number): void
    setLastUsedItemId(itemID: number): void
    setLastSubjectActorId(actorID: number): void
    setLastSubjectEnemyIndex(enemyIndex: number): void
    setLastTargetActorId(actorID: number): void
    setLastTargetEnemyIndex(enemyIndex: number): void
}
interface IAnimationRequest {
    targets: (Game_Character | Game_Battler)[]
    animationId: number
    mirror: boolean
}
interface IBalloonRequest {
    target: Game_Character
    balloonId: number
}
declare class Game_Timer {
    _frames: number
    _working: boolean
    constructor(...args: any[])
    initialize(): void
    update(sceneActive: boolean): void
    start(count: number): void
    stop(): void
    isWorking(): boolean
    seconds(): number
    frames(): number
    onExpire(): void
}
declare class Game_Variables {
    _data: number[]
    constructor()
    initialize(): void
    clear(): void
    value(variableId: number): number
    setValue(variableId: number, value: number): void
    onChange(): void
}

// rmmz_managers
declare var $dataActors: RMMZData.Actor[]
declare var $dataClasses: RMMZData.Class[]
declare var $dataSkills: RMMZData.Item[]
declare var $dataItems: RMMZData.Item[]
declare var $dataWeapons: RMMZData.Weapon[]
declare var $dataArmors: RMMZData.Armor[]
declare var $dataEnemies: RMMZData.Enemy[]
declare var $dataTroops: RMMZData.Troop[]
declare var $dataStates: RMMZData.State[]
declare var $dataAnimations: RMMZData.Animation[]
declare var $dataTilesets: RMMZData.Tileset[]
declare var $dataCommonEvents: RMMZData.CommonEvent[]
declare var $dataSystem: RMMZData.System
declare var $dataMapInfos: RMMZData.MapInfo
declare var $dataMap: RMMZData.Map
declare var $gameTemp: Game_Temp
declare var $gameSystem: Game_System
declare var $gameScreen: Game_Screen
declare var $gameTimer: Game_Timer
declare var $gameMessage: Game_Message
declare var $gameSwitches: Game_Switches
declare var $gameVariables: Game_Variables
declare var $gameSelfSwitches: Game_SelfSwitches
declare var $gameActors: Game_Actors
declare var $gameParty: Game_Party
declare var $gameTroop: Game_Troop
declare var $gameMap: Game_Map
declare var $gamePlayer: Game_Player
declare var $testEvent: RMMZData.EventCommand[] | null
declare class DataManager {
    constructor()
    static _globalInfo: ISaveInfo[] | null
    static _errors: any[]
    static _databaseFiles: {
        name: string
        src: string
    }[]
    static loadGlobalInfo(): void
    static removeInvalidGlobalInfo(): void
    static saveGlobalInfo(): void
    static isGlobalInfoLoaded(): boolean
    static loadDatabase(): void
    static loadDataFile(name: string, src: string): void
    static onXhrLoad(xhr: XMLHttpRequest, name: string | number, src: any, url: string): void
    static onXhrError(name: any, src: any, url: string): void
    static isDatabaseLoaded(): boolean
    static loadMapData(mapId: string | number): void
    static makeEmptyMap(): void
    static isMapLoaded(): boolean
    static onLoad(object: any): void
    static isMapObject(object: any): boolean
    static extractArrayMetadata(array: ({
        note: string
        meta?: MetaDataType
    })[]): void
    static extractMetadata(data: {
        note: string
        meta?: MetaDataType
    }): void
    static checkError(): void
    static isBattleTest(): any
    static isEventTest(): any
    static isSkill(item: ItemObject | null): boolean | null
    static isItem(item: ItemObject | null): boolean | null
    static isWeapon(item: ItemObject | null): boolean | null
    static isArmor(item: ItemObject | null): boolean | null
    static createGameObjects(): void
    static setupNewGame(): void
    static setupBattleTest(): void
    static setupEventTest(): void
    static isAnySavefileExists(): boolean
    static latestSavefileId(): number
    static earliestSavefileId(): number
    static emptySavefileId(): number
    static loadAllSavefileImages(): void
    static loadSavefileImages(info: any): void
    static maxSavefiles(): number
    static savefileInfo(savefileId: number): ISaveInfo | null
    static savefileExists(savefileId: number): any
    static saveGame(savefileId: number): Promise<number>
    static loadGame(savefileId: number): Promise<number>
    static makeSavename(savefileId: number): string
    static selectSavefileForNewGame(): void
    static makeSavefileInfo(): any
    static makeSaveContents(): any
    static extractSaveContents(contents: any): void
    static correctDataErrors(): void
}
interface ISaveInfo {
    characters: [string, number][]
    playtime: number
}
declare class EffectManager {
    constructor()
    static _cache: any
    static _errorUrls: string[]
    static load(filename: string): any
    static startLoading(url: string): any
    static clear(): void
    static onLoad(url: string): void
    static onError(url: string): void
    static makeUrl(filename: string): string
    static checkErrors(): void
    static throwLoadError(url: string): void
    static isReady(): boolean
}
declare class FontManager {
    constructor()
    static _urls: any
    static _states: any
    static load(family: string, filename: string): void
    static isReady(): boolean
    static startLoading(family: string, url: string): void
    static throwLoadError(family: string): void
    static makeUrl(filename: string): string
}
declare class ImageManager {
    constructor()
    static iconWidth: number
    static iconHeight: number
    static faceWidth: number
    static faceHeight: number
    static _cache: any
    static _system: {}
    static _emptyBitmap: Bitmap
    static loadAnimation(filename: string): Bitmap
    static loadBattleback1(filename: string): Bitmap
    static loadBattleback2(filename: string): Bitmap
    static loadEnemy(filename: string): Bitmap
    static loadCharacter(filename: string): Bitmap
    static loadFace(filename: string): Bitmap
    static loadParallax(filename: string): Bitmap
    static loadPicture(filename: string): Bitmap
    static loadSvActor(filename: string): Bitmap
    static loadSvEnemy(filename: string): Bitmap
    static loadSystem(filename: string): Bitmap
    static loadTileset(filename: string): Bitmap
    static loadTitle1(filename: string): Bitmap
    static loadTitle2(filename: string): Bitmap
    static loadBitmap(folder: string, filename: string): Bitmap
    static loadBitmapFromUrl(url: string): Bitmap
    static clear(): void
    static isReady(): boolean
    static throwLoadError(bitmap: Bitmap): void
    static isObjectCharacter(filename: string): boolean
    static isBigCharacter(filename: string): boolean
    static isZeroParallax(filename: string): boolean
}
declare class ConfigManager {
    constructor()
    static alwaysDash: boolean
    static commandRemember: boolean
    static touchUI: boolean
    static _isLoaded: boolean
    static get bgmVolume(): number
    static set bgmVolume(value: number)
    static get bgsVolume(): number
    static set bgsVolume(value: number)
    static get meVolume(): number
    static set meVolume(value: number)
    static get seVolume(): number
    static set seVolume(value: number)
    static load(): void
    static save(): void
    static isLoaded(): boolean
    static makeData(): IConfig
    static applyData(config: IConfig): void
    static readFlag(config: IConfig, name: keyof IConfig, defaultValue: any): any
    static readVolume(config: IConfig, name: keyof IConfig): number
}
interface IConfig {
    alwaysDash: boolean
    commandRemember: boolean
    touchUI: boolean
    bgmVolume: number
    bgsVolume: number
    meVolume: number
    seVolume: number
}
declare class AudioManager {
    constructor()
    static _bgmVolume: number
    static _bgsVolume: number
    static _meVolume: number
    static _seVolume: number
    static _currentBgm: any
    static _currentBgs: any
    static _bgmBuffer: any
    static _bgsBuffer: any
    static _meBuffer: any
    static _seBuffers: any
    static _staticBuffers: any
    static _replayFadeTime: number
    static _path: string
    static _currentMe: any
    static get bgmVolume(): number
    static set bgmVolume(value: number)
    static get bgsVolume(): number
    static set bgsVolume(value: number)
    static get meVolume(): number
    static set meVolume(value: number)
    static get seVolume(): number
    static set seVolume(value: number)
    static playBgm(bgm: IAudioObject | null, pos?: number): void
    static replayBgm(bgm: any): void
    static isCurrentBgm(bgm: IAudioObject | null): any
    static updateBgmParameters(bgm: any): void
    static updateCurrentBgm(bgm: any, pos: number | undefined): void
    static stopBgm(): void
    static fadeOutBgm(duration: number): void
    static fadeInBgm(duration: any): void
    static playBgs(bgs: any, pos?: number): void
    static replayBgs(bgs: any): void
    static isCurrentBgs(bgs: any): any
    static updateBgsParameters(bgs: any): void
    static updateCurrentBgs(bgs: any, pos: any): void
    static stopBgs(): void
    static fadeOutBgs(duration: number): void
    static fadeInBgs(duration: any): void
    static playMe(me: {
        name: any
    }): void
    static updateMeParameters(me: any): void
    static fadeOutMe(duration: number): void
    static stopMe(): void
    static playSe(se: {
        name: any
    }): void
    static updateSeParameters(buffer: any, se: any): void
    static cleanupSe(): void
    static stopSe(): void
    static playStaticSe(se: {
        name: any
    }): void
    static loadStaticSe(se: {
        name: any
    }): void
    static isStaticSe(se: {
        name: any
    }): boolean
    static stopAll(): void
    static saveBgm(): IAudioObject | {
        name: any
        volume: any
        pitch: any
        pan: any
        pos: any
    }
    static saveBgs(): IAudioObject | {
        name: any
        volume: any
        pitch: any
        pan: any
        pos: any
    }
    static makeEmptyAudioObject(): IAudioObject
    static createBuffer(folder: string, name: any): any
    static updateBufferParameters(buffer: {
        volume: number
        pitch: number
        pan: number
    }, configVolume: number, audio: {
        volume: any
        pitch: any
        pan: any
    }): void
    static audioFileExt(): string
    static checkErrors(): void
    static throwLoadError(webAudio: {
        retry: {
            bind: (arg0: any) => any
        }
        url: any
    }): void
}
interface IAudioObject {
    name: string
    volume: number
    pitch: number
    pan?: number
    pos?: number
}
declare class BattleManager {
    static _canEscape: boolean
    static _canLose: boolean
    static _phase: string
    static _inputting: boolean
    static _battleTest: boolean
    static _eventCallback: Function | null
    static _preemptive: boolean
    static _surprise: boolean
    static _currentActor: Game_Actor | null
    static _actionForcedBattler: Game_Battler | null
    static _mapBgm: any
    static _mapBgs: any
    static _actionBattlers: Game_Battler[]
    static _subject: Game_Battler | null
    static _action: Game_Action | null
    static _targets: Game_Battler[]
    static _logWindow: Window_BattleLog | null
    static _spriteset: Spriteset_Battle | null
    static _escapeRatio: number
    static _escaped: boolean
    static _rewards: any
    static _tpbNeedsPartyCommand: boolean
    static _formationController: any
    constructor()
    static setup(troopId: number, canEscape: boolean, canLose: boolean): void
    static initMembers(): void
    static isTpb(): boolean
    static isActiveTpb(): boolean
    static isBattleTest(): boolean
    static setBattleTest(battleTest: boolean): void
    static setEventCallback(callback: Function): void
    static setLogWindow(logWindow: Window_BattleLog): void
    static setSpriteset(spriteset: Spriteset_Battle): void
    static onEncounter(): void
    static ratePreemptive(): number
    static rateSurprise(): number
    static saveBgmAndBgs(): void
    static playBattleBgm(): void
    static playVictoryMe(): void
    static playDefeatMe(): void
    static replayBgmAndBgs(): void
    static makeEscapeRatio(): void
    static update(timeActive: boolean): void
    static updatePhase(timeActive: any): void
    static updateEvent(): boolean
    static updateEventMain(): boolean
    static isBusy(): string | boolean
    static updateTpbInput(): void
    static checkTpbInputClose(): void
    static checkTpbInputOpen(): void
    static isPartyTpbInputtable(): boolean
    static needsActorInputCancel(): boolean | null
    static isTpbMainPhase(): boolean
    static isInputting(): boolean
    static isInTurn(): boolean
    static isTurnEnd(): boolean
    static isAborting(): boolean
    static isBattleEnd(): boolean
    static canEscape(): boolean
    static canLose(): boolean
    static isEscaped(): boolean
    static actor(): Game_Actor | null
    static startBattle(): void
    static displayStartMessages(): void
    static startInput(): void
    static inputtingAction(): Game_Action | null
    static selectNextCommand(): void
    static selectNextActor(): void
    static selectPreviousCommand(): void
    static selectPreviousActor(): void
    static changeCurrentActor(forward: boolean): void
    static startActorInput(): void
    static finishActorInput(): void
    static cancelActorInput(): void
    static updateStart(): void
    static startTurn(): void
    static updateTurn(timeActive: any): void
    static updateTpb(): void
    static updateAllTpbBattlers(): void
    static updateTpbBattler(battler: Game_Battler): void
    static checkTpbTurnEnd(): void
    static processTurn(): void
    static endBattlerActions(battler: Game_Battler): void
    static endTurn(): void
    static updateTurnEnd(): void
    static endAllBattlersTurn(): void
    static displayBattlerStatus(battler: any, current: boolean): void
    static getNextSubject(): Game_Battler | null
    static allBattleMembers(): Game_Battler[]
    static makeActionOrders(): void
    static startAction(): void
    static updateAction(): void
    static endAction(): void
    static invokeAction(subject: Game_Battler, target: Game_Battler): void
    static invokeNormalAction(subject: any, target: any): void
    static invokeCounterAttack(subject: Game_Battler, target: Game_Battler): void
    static invokeMagicReflection(subject: any, target: any): void
    static applySubstitute(target: Game_Battler): Game_Battler
    static checkSubstitute(target: Game_Battler): boolean
    static isActionForced(): boolean
    static forceAction(battler: Game_Battler): void
    static processForcedAction(): void
    static abort(): void
    static checkBattleEnd(): boolean
    static checkAbort(): boolean
    static processVictory(): void
    static processEscape(): boolean
    static onEscapeSuccess(): void
    static onEscapeFailure(): void
    static processPartyEscape(): void
    static processAbort(): void
    static processDefeat(): void
    static endBattle(result: number): void
    static updateBattleEnd(): void
    static makeRewards(): void
    static displayVictoryMessage(): void
    static displayDefeatMessage(): void
    static displayEscapeSuccessMessage(): void
    static displayEscapeFailureMessage(): void
    static displayRewards(): void
    static displayExp(): void
    static displayGold(): void
    static displayDropItems(): void
    static gainRewards(): void
    static gainExp(): void
    static gainGold(): void
    static gainDropItems(): void
}
declare class ColorManager {
    static _windowskin: Bitmap
    constructor()
    static loadWindowskin(): void
    static textColor(n: number): string
    static normalColor(): string
    static systemColor(): string
    static crisisColor(): string
    static deathColor(): string
    static gaugeBackColor(): string
    static hpGaugeColor1(): string
    static hpGaugeColor2(): string
    static mpGaugeColor1(): string
    static mpGaugeColor2(): string
    static mpCostColor(): string
    static powerUpColor(): string
    static powerDownColor(): string
    static ctGaugeColor1(): string
    static ctGaugeColor2(): string
    static tpGaugeColor1(): string
    static tpGaugeColor2(): string
    static tpCostColor(): string
    static pendingColor(): string
    static hpColor(actor: Game_Battler | null): string
    static mpColor(actor: Game_Battler | null): string
    static tpColor(actor: Game_Battler | null): string
    static paramchangeTextColor(change: number): string
    static damageColor(colorType: number): "#ffffff" | "#b9ffb5" | "#ffff90" | "#80b0ff" | "#808080"
    static outlineColor(): string
    static dimColor1(): string
    static dimColor2(): string
    static itemBackColor1(): string
    static itemBackColor2(): string
}
declare class PluginManager {
    constructor()
    static _scripts: string[]
    static _errorUrls: string[]
    static _parameters: any
    static _commands: any
    static setup(plugins: any[]): void
    static parameters(name: string): any
    static setParameters(name: string, parameters: any): void
    static loadScript(filename: string): void
    static onError(e: any): void
    static makeUrl(filename: string): string
    static checkErrors(): void
    static throwLoadError(url: string): void
    static registerCommand(pluginName: string, commandName: string, func: Function): void
    static callCommand(self: any, pluginName: string, commandName: string, args: any[]): void
}
declare class SceneManager {
    constructor()
    static _scene: Scene_Base | null
    static _nextScene: Scene_Base | null
    static _stack: (new () => Scene_Base)[]
    static _exiting: boolean
    static _previousScene: Scene_Base | null
    static _previousClass: Function | null
    static _backgroundBitmap: Bitmap | null
    static _smoothDeltaTime: number
    static _elapsedTime: number
    static run(sceneClass: new () => Scene_Base): void
    static initialize(): void
    static checkBrowser(): void
    static checkPluginErrors(): void
    static initGraphics(): void
    static initAudio(): void
    static initVideo(): void
    static initInput(): void
    static setupEventHandlers(): void
    static update(deltaTime: number): void
    static determineRepeatNumber(deltaTime: number): number
    static terminate(): void
    static onError(event: any): void
    static onReject(event: {
        message: any
        reason: any
    }): void
    static onUnload(): void
    static onKeyDown(event: {
        ctrlKey: any
        altKey: any
        keyCode: any
    }): void
    static reloadGame(): void
    static showDevTools(): void
    static catchException(e: unknown): void
    static catchNormalError(e: any): void
    static catchLoadError(e: any[]): void
    static catchUnknownError(e: any): void
    static updateMain(): void
    static updateFrameCount(): void
    static updateInputData(): void
    static updateEffekseer(): void
    static changeScene(): void
    static updateScene(): void
    static isGameActive(): any
    static onSceneTerminate(): void
    static onSceneCreate(): void
    static onBeforeSceneStart(): void
    static onSceneStart(): void
    static isSceneChanging(): boolean
    static isCurrentSceneBusy(): boolean | null
    static isNextScene(sceneClass: Function): boolean | null
    static isPreviousScene(sceneClass: Function | null): boolean
    static goto(sceneClass: (new () => Scene_Base) | null): void
    static push(sceneClass: new () => Scene_Base): void
    static pop(): void
    static exit(): void
    static clearStack(): void
    static stop(): void
    static prepareNextScene(...args: any[]): void
    static snap(): Bitmap
    static snapForBackground(): void
    static backgroundBitmap(): Bitmap | null
    static resume(): void
}
declare class SoundManager {
    constructor()
    static preloadImportantSounds(): void
    static loadSystemSound(n: number): void
    static playSystemSound(n: number): void
    static playCursor(): void
    static playOk(): void
    static playCancel(): void
    static playBuzzer(): void
    static playEquip(): void
    static playSave(): void
    static playLoad(): void
    static playBattleStart(): void
    static playEscape(): void
    static playEnemyAttack(): void
    static playEnemyDamage(): void
    static playEnemyCollapse(): void
    static playBossCollapse1(): void
    static playBossCollapse2(): void
    static playActorDamage(): void
    static playActorCollapse(): void
    static playRecovery(): void
    static playMiss(): void
    static playEvasion(): void
    static playMagicEvasion(): void
    static playReflection(): void
    static playShop(): void
    static playUseItem(): void
    static playUseSkill(): void
}
declare class _StorageManager {
    constructor()
    static _forageKeys: any[]
    static _forageKeysUpdated: boolean
    static isLocalMode(): boolean
    static saveObject(saveName: string, object: any): Promise<any>
    static loadObject(saveName: string): Promise<any>
    static objectToJson(object: any): Promise<string>
    static jsonToObject(json: string): Promise<unknown>
    static jsonToZip(json: string): Promise<any>
    static zipToJson(zip: any): Promise<unknown>
    static saveZip(saveName: string, zip: any): any
    static loadZip(saveName: string): any
    static exists(saveName: string): any
    static remove(saveName: string): any
    static saveToLocalFile(saveName: string, zip: any): Promise<unknown>
    static loadFromLocalFile(saveName: string): Promise<unknown>
    static localFileExists(saveName: string): any
    static removeLocalFile(saveName: string): void
    static saveToForage(saveName: string, zip: any): any
    static loadFromForage(saveName: string): any
    static forageExists(saveName: string): boolean
    static removeForage(saveName: string): any
    static updateForageKeys(): any
    static forageKeysUpdated(): boolean
    static fsMkdir(path: string): void
    static fsRename(oldPath: string, newPath: string): void
    static fsUnlink(path: string): void
    static fsReadFile(path: string): any
    static fsWriteFile(path: string, data: any): void
    static fileDirectoryPath(): string
    static filePath(saveName: string): string
    static forageKey(saveName: string): string
    static forageTestKey(): string
}
declare class TextManager {
    static level: string
    static levelA: string
    static hp: string
    static hpA: string
    static mp: string
    static mpA: string
    static tp: string
    static tpA: string
    static exp: string
    static expA: string
    static fight: string
    static escape: string
    static attack: string
    static guard: string
    static item: string
    static skill: string
    static equip: string
    static status: string
    static formation: string
    static save: string
    static gameEnd: string
    static options: string
    static weapon: string
    static armor: string
    static keyItem: string
    static equip2: string
    static optimize: string
    static clear: string
    static newGame: string
    static continue_: string
    static toTitle: string
    static cancel: string
    static buy: string
    static sell: string
    static alwaysDash: string
    static commandRemember: string
    static touchUI: string
    static bgmVolume: string
    static bgsVolume: string
    static meVolume: string
    static seVolume: string
    static possession: string
    static expTotal: string
    static expNext: string
    static saveMessage: string
    static loadMessage: string
    static file: string
    static autosave: string
    static partyName: string
    static emerge: string
    static preemptive: string
    static surprise: string
    static escapeStart: string
    static escapeFailure: string
    static victory: string
    static defeat: string
    static obtainExp: string
    static obtainGold: string
    static obtainItem: string
    static levelUp: string
    static obtainSkill: string
    static useItem: string
    static criticalToEnemy: string
    static criticalToActor: string
    static actorDamage: string
    static actorRecovery: string
    static actorGain: string
    static actorLoss: string
    static actorDrain: string
    static actorNoDamage: string
    static actorNoHit: string
    static enemyDamage: string
    static enemyRecovery: string
    static enemyGain: string
    static enemyLoss: string
    static enemyDrain: string
    static enemyNoDamage: string
    static enemyNoHit: string
    static evasion: string
    static magicEvasion: string
    static magicReflection: string
    static counterAttack: string
    static substitute: string
    static buffAdd: string
    static debuffAdd: string
    static buffRemove: string
    static actionFailure: string
    constructor()
    static basic(basicId: number): string
    static param(paramId: number): string
    static command(commandId: number): string
    static message(messageId: string): string
    static getter(method: string, param: number | string): any
    static get currencyUnit(): string
}
// rmmz_scenes
declare class Scene_Base extends Stage {
    _started: boolean
    _active: boolean
    _fadeSign: number
    _fadeDuration: number
    _fadeWhite: boolean | number
    _fadeOpacity: number
    _windowLayer: WindowLayer
    _colorFilter: ColorFilter
    initialize(): void
    create(): void
    isActive(): boolean
    isReady(): boolean
    start(): void
    update(): void
    stop(): void
    isStarted(): boolean
    isBusy(): boolean
    isFading(): boolean
    terminate(): void
    createWindowLayer(): void
    addWindow(window: Window | Sprite_Button): void
    startFadeIn(duration: number, white: number | boolean): void
    startFadeOut(duration: number, white?: number | boolean): void
    createColorFilter(): void
    updateColorFilter(): void
    updateFade(): void
    updateChildren(): void
    popScene(): void
    checkGameover(): void
    fadeOutAll(): void
    fadeSpeed(): number
    slowFadeSpeed(): number
    scaleSprite(sprite: Sprite): void
    centerSprite(sprite: {
        x: number
        y: number
        anchor: {
            x: number
            y: number
        }
    }): void
    isBottomHelpMode(): boolean
    isBottomButtonMode(): boolean
    isRightInputMode(): boolean
    mainCommandWidth(): number
    buttonAreaTop(): number
    buttonAreaBottom(): number
    buttonAreaHeight(): number
    buttonY(): number
    calcWindowHeight(numLines: number, selectable: boolean): number
    requestAutosave(): void
    isAutosaveEnabled(): boolean
    executeAutosave(): void
    onAutosaveSuccess(): void
    onAutosaveFailure(): void
}
declare class Scene_Gameover extends Scene_Base {
    _backSprite: Sprite
    initialize(): void
    create(): void
    start(): void
    update(): void
    stop(): void
    terminate(): void
    playGameoverMusic(): void
    createBackground(): void
    adjustBackground(): void
    isTriggered(): boolean
    gotoTitle(): void
}
declare class Scene_Boot extends Scene_Base {
    _databaseLoaded: boolean
    initialize(): void
    create(): void
    isReady(): boolean
    onDatabaseLoaded(): void
    setEncryptionInfo(): void
    loadSystemImages(): void
    loadPlayerData(): void
    loadGameFonts(): void
    isPlayerDataLoaded(): boolean
    start(): void
    startNormalGame(): void
    resizeScreen(): void
    adjustBoxSize(): void
    adjustWindow(): void
    screenScale(): number
    updateDocumentTitle(): void
    checkPlayerLocation(): void
}
declare class Scene_MenuBase extends Scene_Base {
    _actor: any
    _backgroundFilter: PIXI.filters.BlurFilter
    _backgroundSprite: Sprite
    _helpWindow: Window_Help
    _cancelButton: Sprite_Button
    _pageupButton: Sprite_Button
    _pagedownButton: Sprite_Button
    initialize(): void
    create(): void
    update(): void
    helpAreaTop(): number
    helpAreaBottom(): number
    helpAreaHeight(): number
    mainAreaTop(): number
    mainAreaBottom(): number
    mainAreaHeight(): number
    actor(): any
    updateActor(): void
    createBackground(): void
    setBackgroundOpacity(opacity: number): void
    createHelpWindow(): void
    helpWindowRect(): Rectangle
    createButtons(): void
    needsCancelButton(): boolean
    createCancelButton(): void
    needsPageButtons(): boolean
    createPageButtons(): void
    updatePageButtons(): void
    arePageButtonsEnabled(): boolean
    nextActor(): void
    previousActor(): void
    onActorChange(): void
}
declare class Scene_Menu extends Scene_MenuBase {
    _statusWindow: any
    _commandWindow: Window_MenuCommand
    _goldWindow: Window_Gold
    alchemy: any
    battleFormation: any
    initialize(): void
    helpAreaHeight(): number
    create(): void
    start(): void
    createCommandWindow(): void
    commandWindowRect(): Rectangle
    createGoldWindow(): void
    goldWindowRect(): Rectangle
    createStatusWindow(): void
    statusWindowRect(): Rectangle
    commandItem(): void
    commandPersonal(): void
    commandFormation(): void
    commandOptions(): void
    commandSave(): void
    commandGameEnd(): void
    onPersonalOk(): void
    onPersonalCancel(): void
    onFormationOk(): void
    onFormationCancel(): void
}
declare class Scene_Debug extends Scene_MenuBase {
    _rangeWindow: Window_DebugRange
    _editWindow: Window_DebugEdit
    _debugHelpWindow: Window_Base
    initialize(): void
    create(): void
    needsCancelButton(): boolean
    createRangeWindow(): void
    rangeWindowRect(): Rectangle
    createEditWindow(): void
    editWindowRect(): Rectangle
    createDebugHelpWindow(): void
    debugHelpWindowRect(): Rectangle
    onRangeOk(): void
    onEditCancel(): void
    refreshHelpWindow(): void
    helpText(): string
}
declare class Scene_Equip extends Scene_MenuBase {
    _statusWindow: Window_EquipStatus
    _commandWindow: Window_EquipCommand
    _slotWindow: Window_EquipSlot
    _itemWindow: Window_EquipItem
    initialize(): void
    create(): void
    createStatusWindow(): void
    statusWindowRect(): Rectangle
    createCommandWindow(): void
    commandWindowRect(): Rectangle
    createSlotWindow(): void
    slotWindowRect(): Rectangle
    createItemWindow(): void
    itemWindowRect(): Rectangle
    statusWidth(): number
    needsPageButtons(): boolean
    arePageButtonsEnabled(): boolean
    refreshActor(): void
    commandEquip(): void
    commandOptimize(): void
    commandClear(): void
    onSlotOk(): void
    onSlotCancel(): void
    onItemOk(): void
    executeEquipChange(): void
    onItemCancel(): void
    onActorChange(): void
    hideItemWindow(): void
}
declare class Scene_File extends Scene_MenuBase {
    _listWindow: Window_SavefileList
    initialize(): void
    create(): void
    helpAreaHeight(): number
    start(): void
    savefileId(): number
    isSavefileEnabled(savefileId: number): boolean
    createHelpWindow(): void
    helpWindowRect(): Rectangle
    createListWindow(): void
    listWindowRect(): Rectangle
    mode(): "save" | "load" | null
    needsAutosave(): boolean
    activateListWindow(): void
    helpWindowText(): string
    firstSavefileId(): number
    onSavefileOk(): void
}
declare class Scene_Load extends Scene_File {
    _loadSuccess: boolean
    initialize(): void
    terminate(): void
    mode(): "load"
    helpWindowText(): string
    firstSavefileId(): number
    onSavefileOk(): void
    executeLoad(savefileId: number): void
    onLoadSuccess(): void
    onLoadFailure(): void
    reloadMapIfUpdated(): void
}
declare class Scene_Save extends Scene_File {
    initialize(): void
    mode(): "save"
    helpWindowText(): string
    firstSavefileId(): number
    onSavefileOk(): void
    executeSave(savefileId: number): void
    onSaveSuccess(): void
    onSaveFailure(): void
}
declare class Scene_GameEnd extends Scene_MenuBase {
    _commandWindow: Window_GameEnd
    initialize(): void
    create(): void
    stop(): void
    createBackground(): void
    createCommandWindow(): void
    commandWindowRect(): Rectangle
    commandToTitle(): void
}
declare class Scene_Name extends Scene_MenuBase {
    _actorId: number
    _maxLength: number
    _editWindow: Window_NameEdit
    _inputWindow: Window_NameInput
    initialize(): void
    prepare(actorId: number, maxLength: number): void
    create(): void
    start(): void
    createEditWindow(): void
    editWindowRect(): Rectangle
    createInputWindow(): void
    inputWindowRect(): Rectangle
    onInputOk(): void
}
declare class Scene_Options extends Scene_MenuBase {
    _optionsWindow: Window_Options
    initialize(): void
    create(): void
    terminate(): void
    createOptionsWindow(): void
    optionsWindowRect(): Rectangle
    maxCommands(): number
    maxVisibleCommands(): number
}
declare class Scene_Shop extends Scene_MenuBase {
    _goods: number[][]
    _purchaseOnly: boolean
    _item: ItemObject | null
    _goldWindow: Window_Gold
    _commandWindow: Window_ShopCommand
    _dummyWindow: Window_Base
    _numberWindow: Window_ShopNumber
    _statusWindow: Window_ShopStatus
    _buyWindow: Window_ShopBuy
    _categoryWindow: Window_ItemCategory
    _sellWindow: Window_ShopSell
    initialize(): void
    prepare(goods: number[][], purchaseOnly: boolean): void
    create(): void
    createGoldWindow(): void
    goldWindowRect(): Rectangle
    createCommandWindow(): void
    commandWindowRect(): Rectangle
    createDummyWindow(): void
    dummyWindowRect(): Rectangle
    createNumberWindow(): void
    numberWindowRect(): Rectangle
    createStatusWindow(): void
    statusWindowRect(): Rectangle
    createBuyWindow(): void
    buyWindowRect(): Rectangle
    createCategoryWindow(): void
    categoryWindowRect(): Rectangle
    createSellWindow(): void
    sellWindowRect(): Rectangle
    statusWidth(): number
    activateBuyWindow(): void
    activateSellWindow(): void
    commandBuy(): void
    commandSell(): void
    onBuyOk(): void
    onBuyCancel(): void
    onCategoryOk(): void
    onCategoryCancel(): void
    onSellOk(): void
    onSellCancel(): void
    onNumberOk(): void
    onNumberCancel(): void
    doBuy(number: number): void
    doSell(number: number): void
    endNumberInput(): void
    maxBuy(): number
    maxSell(): number
    money(): number
    currencyUnit(): string
    buyingPrice(): number
    sellingPrice(): number
}
declare class Scene_Status extends Scene_MenuBase {
    _profileWindow: Window_Help
    _statusWindow: Window_Status
    _statusParamsWindow: Window_StatusParams
    _statusEquipWindow: Window_StatusEquip
    initialize(): void
    create(): void
    helpAreaHeight(): number
    createProfileWindow(): void
    profileWindowRect(): Rectangle
    createStatusWindow(): void
    statusWindowRect(): Rectangle
    createStatusParamsWindow(): void
    statusParamsWindowRect(): Rectangle
    createStatusEquipWindow(): void
    statusEquipWindowRect(): Rectangle
    statusParamsWidth(): number
    statusParamsHeight(): number
    profileHeight(): number
    start(): void
    needsPageButtons(): boolean
    refreshActor(): void
    onActorChange(): void
}
declare abstract class Scene_ItemBase extends Scene_MenuBase {
    _actorWindow: Window_MenuActor
    _itemWindow: Window_ItemList | Window_SkillList
    abstract playSeForItem(): void
    initialize(): void
    create(): void
    createActorWindow(): void
    actorWindowRect(): Rectangle
    item(): any
    user(): Game_Battler
    isCursorLeft(): boolean
    showActorWindow(): void
    hideActorWindow(): void
    isActorWindowActive(): boolean
    onActorOk(): void
    onActorCancel(): void
    determineItem(): void
    useItem(): void
    activateItemWindow(): void
    itemTargetActors(): Game_Actor[]
    canUse(): boolean
    isItemEffectsValid(): boolean
    applyItem(): void
    checkCommonEvent(): void
}
declare class Scene_Item extends Scene_ItemBase {
    _categoryWindow: Window_ItemCategory
    initialize(): void
    create(): void
    createCategoryWindow(): void
    categoryWindowRect(): Rectangle
    createItemWindow(): void
    itemWindowRect(): Rectangle
    user(): Game_Battler
    onCategoryOk(): void
    onItemOk(): void
    onItemCancel(): void
    playSeForItem(): void
    useItem(): void
}
declare class Scene_Skill extends Scene_ItemBase {
    _skillTypeWindow: Window_SkillType
    _statusWindow: Window_SkillStatus
    _itemWindow: Window_SkillList
    initialize(): void
    create(): void
    start(): void
    createSkillTypeWindow(): void
    skillTypeWindowRect(): Rectangle
    createStatusWindow(): void
    statusWindowRect(): Rectangle
    createItemWindow(): void
    itemWindowRect(): Rectangle
    needsPageButtons(): boolean
    arePageButtonsEnabled(): boolean
    refreshActor(): void
    user(): any
    commandSkill(): void
    onItemOk(): void
    onItemCancel(): void
    playSeForItem(): void
    useItem(): void
    onActorChange(): void
}
declare class Scene_Message extends Scene_Base {
    _messageWindow: Window_Message
    _scrollTextWindow: Window_ScrollText
    _goldWindow: Window_Gold
    _nameBoxWindow: Window_NameBox
    _choiceListWindow: Window_ChoiceList
    _numberInputWindow: Window_NumberInput
    _eventItemWindow: Window_EventItem
    initialize(): void
    isMessageWindowClosing(): boolean
    createAllWindows(): void
    createMessageWindow(): void
    messageWindowRect(): Rectangle
    createScrollTextWindow(): void
    scrollTextWindowRect(): Rectangle
    createGoldWindow(): void
    goldWindowRect(): Rectangle
    createNameBoxWindow(): void
    createChoiceListWindow(): void
    createNumberInputWindow(): void
    createEventItemWindow(): void
    eventItemWindowRect(): Rectangle
    associateWindows(): void
}
declare class Scene_Battle extends Scene_Message {
    _statusWindow: Window_BattleStatus | null
    _skillWindow: any
    _itemWindow: any
    _partyCommandWindow: any
    _actorCommandWindow: any
    _actorWindow: any
    _enemyWindow: any
    _logWindow: any
    _helpWindow: any
    _cancelButton: any
    _spriteset: Spriteset_Battle | null
    initialize(): void
    create(): void
    start(): void
    update(): void
    updateVisibility(): void
    updateBattleProcess(): void
    isTimeActive(): boolean
    isAnyInputWindowActive(): any
    changeInputWindow(): void
    stop(): void
    terminate(): void
    shouldAutosave(): boolean | null
    needsSlowFadeOut(): boolean | null
    updateLogWindowVisibility(): void
    updateStatusWindowVisibility(): void
    shouldOpenStatusWindow(): boolean
    updateStatusWindowPosition(): void
    statusWindowX(): number
    updateInputWindowVisibility(): void
    needsInputWindowChange(): boolean
    updateCancelButton(): void
    createDisplayObjects(): void
    createSpriteset(): void
    createAllWindows(): void
    createLogWindow(): void
    logWindowRect(): Rectangle
    createStatusWindow(): void
    statusWindowRect(): Rectangle
    createPartyCommandWindow(): void
    partyCommandWindowRect(): Rectangle
    createActorCommandWindow(): void
    actorCommandWindowRect(): Rectangle
    createHelpWindow(): void
    helpWindowRect(): Rectangle
    createSkillWindow(): void
    skillWindowRect(): Rectangle
    createItemWindow(): void
    itemWindowRect(): Rectangle
    createActorWindow(): void
    actorWindowRect(): Rectangle
    createEnemyWindow(): void
    enemyWindowRect(): Rectangle
    helpAreaTop(): number
    helpAreaBottom(): number
    helpAreaHeight(): number
    buttonAreaTop(): number
    windowAreaHeight(): number
    createButtons(): void
    createCancelButton(): void
    closeCommandWindows(): void
    hideSubInputWindows(): void
    startPartyCommandSelection(): void
    commandFight(): void
    commandEscape(): void
    startActorCommandSelection(): void
    commandAttack(): void
    commandSkill(): void
    commandGuard(): void
    commandItem(): void
    commandCancel(): void
    selectNextCommand(): void
    selectPreviousCommand(): void
    startActorSelection(): void
    onActorOk(): void
    onActorCancel(): void
    startEnemySelection(): void
    onEnemyOk(): void
    onEnemyCancel(): void
    onSkillOk(): void
    onSkillCancel(): void
    onItemOk(): void
    onItemCancel(): void
    onSelectAction(): void
    endCommandSelection(): void
}
declare class Scene_Map extends Scene_Message {
    _waitCount: number
    _encounterEffectDuration: number
    _mapLoaded: boolean
    _touchCount: number
    _menuEnabled: boolean
    _transfer: boolean
    _lastMapWasNull: boolean
    menuCalling: boolean
    _mapNameWindow: Window_MapName
    _spriteset: Spriteset_Map
    _menuButton: Sprite_Button
    initialize(): void
    create(): void
    isReady(): boolean
    onMapLoaded(): void
    onTransfer(): void
    start(): void
    onTransferEnd(): void
    shouldAutosave(): boolean
    update(): void
    updateMainMultiply(): void
    updateMain(): void
    isPlayerActive(): boolean
    isFastForward(): boolean
    stop(): void
    isBusy(): boolean
    terminate(): void
    needsFadeIn(): boolean
    needsSlowFadeOut(): boolean | null
    updateWaitCount(): boolean
    updateDestination(): void
    updateMenuButton(): void
    hideMenuButton(): void
    updateMapNameWindow(): void
    isMenuEnabled(): boolean
    isMapTouchOk(): boolean
    processMapTouch(): void
    isAnyButtonPressed(): boolean
    onMapTouch(): void
    isSceneChangeOk(): boolean
    updateScene(): void
    createDisplayObjects(): void
    createSpriteset(): void
    createAllWindows(): void
    createMapNameWindow(): void
    mapNameWindowRect(): Rectangle
    createButtons(): void
    createMenuButton(): void
    updateTransferPlayer(): void
    updateEncounter(): void
    updateCallMenu(): void
    isMenuCalled(): boolean
    callMenu(): void
    updateCallDebug(): void
    isDebugCalled(): boolean
    fadeInForTransfer(): void
    fadeOutForTransfer(): void
    launchBattle(): void
    stopAudioOnBattleStart(): void
    startEncounterEffect(): void
    updateEncounterEffect(): void
    snapForBattleBackground(): void
    startFlashForEncounter(duration: number): void
    encounterEffectSpeed(): number
}
declare class Scene_Title extends Scene_Base {
    _commandWindow: any
    _gameTitleSprite: any
    _backSprite1: Sprite
    _backSprite2: Sprite
    initialize(): void
    create(): void
    start(): void
    update(): void
    isBusy(): any
    terminate(): void
    createBackground(): void
    createForeground(): void
    drawGameTitle(): void
    adjustBackground(): void
    createCommandWindow(): void
    commandWindowRect(): Rectangle
    commandNewGame(): void
    commandContinue(): void
    commandOptions(): void
    playTitleMusic(): void
}
// rmmz_sprites
declare class Sprite_Animation extends Sprite {
    targetObjects: any[]
    z: number
    _targets: Sprite[]
    _animation: any
    _mirror: boolean
    _delay: number
    _previous: any
    _effect: any
    _handle: any
    _playing: boolean
    _started: boolean
    _frameIndex: number
    _maxTimingFrames: number
    _flashColor: number[]
    _flashDuration: number
    _viewportSize: number
    initialize(): void
    initMembers(): void
    destroy(options?: any): void
    setup(targets: Sprite[], animation: Sprite_Animation | Sprite_AnimationMV, mirror: boolean, delay: number, previous: Sprite_Animation | Sprite_AnimationMV | null): void
    update(): void
    canStart(): boolean
    shouldWaitForPrevious(): boolean
    updateEffectGeometry(): void
    updateMain(): void
    processSoundTimings(): void
    processFlashTimings(): void
    checkEnd(): void
    updateFlash(): void
    isPlaying(): boolean
    setRotation(x: any, y: any, z: any): void
    _render(renderer: PIXI.Renderer): void
    setProjectionMatrix(renderer: {
        view: {
            height: number
        }
    }): void
    setCameraMatrix(renderer: PIXI.Renderer): void
    setViewport(renderer: PIXI.Renderer): void
    targetPosition(renderer: PIXI.Renderer): Point
    targetSpritePosition(sprite: Sprite): PIXI.Point
    resetViewport(renderer: {
        gl: {
            viewport: (arg0: number, arg1: number, arg2: any, arg3: any) => void
        }
        view: {
            width: any
            height: any
        }
    }): void
    onBeforeRender(renderer: any): void
    onAfterRender(renderer: any): void
}
declare class Sprite_AnimationMV extends Sprite {
    targetObjects: any
    _targets: Sprite[]
    _animation: any
    _mirror: boolean
    _delay: number
    _rate: number
    _duration: number
    _flashColor: number[]
    _flashDuration: number
    _screenFlashDuration: number
    _hidingDuration: number
    _hue1: number
    _hue2: number
    _bitmap1: Bitmap | null
    _bitmap2: Bitmap | null
    _cellSprites: Sprite[]
    _screenFlashSprite: ScreenSprite | null
    initialize(): void
    initMembers(): void
    setup(targets: any[], animation: any, mirror: boolean, delay: number): void
    setupRate(): void
    setupDuration(): void
    update(): void
    updateFlash(): void
    updateScreenFlash(): void
    absoluteX(): number
    absoluteY(): number
    updateHiding(): void
    isPlaying(): boolean
    loadBitmaps(): void
    isReady(): boolean | null
    createCellSprites(): void
    createScreenFlashSprite(): void
    updateMain(): void
    updatePosition(): void
    updateFrame(): void
    currentFrameIndex(): number
    updateAllCellSprites(frame: string | any[]): void
    updateCellSprite(sprite: Sprite, cell: any[]): void
    processTimingData(timing: {
        flashDuration: number
        flashScope: any
        flashColor: any
        se: {
            name: any
        }
    }): void
    startFlash(color: number[], duration: number): void
    startScreenFlash(color: any[], duration: number): void
    startHiding(duration: number): void
    onEnd(): void
}
declare class Sprite_Balloon extends Sprite {
    targetObject: any
    _target: Sprite | null
    _balloonId: number
    _duration: number
    initialize(): void
    initMembers(): void
    loadBitmap(): void
    setup(targetSprite: Sprite, balloonId: number): void
    update(): void
    updatePosition(): void
    updateFrame(): void
    speed(): number
    waitTime(): number
    frameIndex(): number
    isPlaying(): boolean
}
declare class Sprite_Character extends Sprite {
    _character: Game_Character | null
    _balloonDuration: number
    _tilesetId: number
    _upperBody: Sprite | null
    _lowerBody: Sprite | null
    _tileId: number
    _characterName: string
    _characterIndex: number
    _isBigCharacter: boolean
    _bushDepth: number
    constructor(character: Game_Character)
    // @ts-ignore
    initialize(character: Game_Character): void
    initMembers(): void
    setCharacter(character: Game_Character): void
    checkCharacter(character: Game_Character): boolean
    update(): void
    updateVisibility(): void
    isTile(): boolean
    isObjectCharacter(): boolean
    isEmptyCharacter(): boolean
    tilesetBitmap(tileId: number): Bitmap
    updateBitmap(): void
    isImageChanged(): boolean
    setTileBitmap(): void
    setCharacterBitmap(): void
    updateFrame(): void
    updateTileFrame(): void
    updateCharacterFrame(): void
    characterBlockX(): number
    characterBlockY(): number
    characterPatternX(): number
    characterPatternY(): number
    patternWidth(): number
    patternHeight(): number
    updateHalfBodySprites(): void
    createHalfBodySprites(): void
    updatePosition(): void
    updateOther(): void
}
declare class Sprite_Battleback extends TilingSprite {
    constructor(type: number)
    // @ts-ignore
    initialize(type: number): void
    adjustPosition(): void
    battleback1Bitmap(): Bitmap
    battleback2Bitmap(): Bitmap
    battleback1Name(): string
    battleback2Name(): string
    overworldBattleback1Name(): string
    overworldBattleback2Name(): string
    normalBattleback1Name(): string
    normalBattleback2Name(): string
    terrainBattleback1Name(type: number): "Wasteland" | "DirtField" | "Desert" | "Lava1" | "Lava2" | "Snowfield" | "Clouds" | "PoisonSwamp" | null
    terrainBattleback2Name(type: number): "Wasteland" | "Desert" | "Snowfield" | "Clouds" | "PoisonSwamp" | "Forest" | "Cliff" | "Lava" | undefined
    defaultBattleback1Name(): string
    defaultBattleback2Name(): string
    shipBattleback1Name(): string
    shipBattleback2Name(): string
    autotileType(z: number): number
}
declare class Sprite_Damage extends Sprite {
    _duration: number
    _flashColor: number[]
    _flashDuration: number
    _colorType: number
    initialize(): void
    destroy(options?: any): void
    setup(target: Game_Battler): void
    setupCriticalEffect(): void
    fontFace(): string
    fontSize(): number
    damageColor(): "#ffffff" | "#b9ffb5" | "#ffff90" | "#80b0ff" | "#808080"
    outlineColor(): string
    outlineWidth(): number
    createMiss(): void
    createDigits(value: number): void
    createChildSprite(width: number, height: number): IDamageSprite
    createBitmap(width: number, height: number): Bitmap
    update(): void
    updateChild(sprite: IDamageSprite): void
    updateFlash(): void
    updateOpacity(): void
    isPlaying(): boolean
}
interface IDamageSprite extends Sprite {
    dy: number
    ry: number
}
declare class Sprite_Destination extends Sprite {
    _frameCount: number
    initialize(): void
    destroy(options?: any): void
    update(): void
    createBitmap(): void
    updatePosition(): void
    updateAnimation(): void
}
declare class Sprite_Gauge extends Sprite {
    _battler: Game_Battler | null
    _statusType: string
    _value: number
    _maxValue: number
    _targetValue: number
    _targetMaxValue: number
    _duration: number
    _flashingCount: number
    initialize(): void
    initMembers(): void
    destroy(options?: {
        children?: boolean
        texture?: boolean
        baseTexture?: boolean
    }): void
    createBitmap(): void
    bitmapWidth(): number
    bitmapHeight(): number
    textHeight(): number
    gaugeHeight(): number
    gaugeX(): number
    labelY(): number
    labelFontFace(): string
    labelFontSize(): number
    valueFontFace(): string
    valueFontSize(): number
    setup(battler: Game_Battler, statusType: string): void
    update(): void
    updateBitmap(): void
    updateTargetValue(value: number, maxValue: number): void
    smoothness(): 5 | 20
    updateGaugeAnimation(): void
    updateFlashing(): void
    flashingColor1(): number[]
    flashingColor2(): number[]
    isValid(): boolean
    currentValue(): number
    currentMaxValue(): number
    label(): string
    gaugeBackColor(): string
    gaugeColor1(): string
    gaugeColor2(): string
    labelColor(): string
    labelOutlineColor(): string
    labelOutlineWidth(): number
    valueColor(): string
    valueOutlineColor(): string
    valueOutlineWidth(): number
    redraw(): void
    drawGauge(): void
    drawGaugeRect(x: number, y: number, width: number, height: number): void
    gaugeRate(): number
    drawLabel(): void
    setupLabelFont(): void
    measureLabelWidth(): number
    labelOpacity(): 255 | 160
    drawValue(): void
    setupValueFont(): void
}
declare class Sprite_Name extends Sprite {
    _battler: Game_Battler | null
    _name: string
    _textColor: string
    initialize(): void
    initMembers(): void
    // @ts-ignore
    destroy(options: any): void
    createBitmap(): void
    bitmapWidth(): number
    bitmapHeight(): number
    fontFace(): string
    fontSize(): number
    setup(battler: Game_Battler): void
    update(): void
    updateBitmap(): void
    name(): string
    textColor(): string
    outlineColor(): string
    outlineWidth(): number
    redraw(): void
    setupFont(): void
}
declare class Sprite_StateIcon extends Sprite {
    _battler: Game_Battler | null
    _iconIndex: number
    _animationCount: number
    _animationIndex: number
    initialize(): void
    initMembers(): void
    loadBitmap(): void
    setup(battler: Game_Battler): void
    update(): void
    animationWait(): number
    updateIcon(): void
    shouldDisplay(): boolean | null
    updateFrame(): void
}
declare class Sprite_StateOverlay extends Sprite {
    _battler: Game_Battler | null
    _overlayIndex: number
    _animationCount: number
    _pattern: number
    initialize(): void
    initMembers(): void
    loadBitmap(): void
    setup(battler: Game_Battler): void
    update(): void
    animationWait(): number
    updatePattern(): void
    updateFrame(): void
}
declare class Sprite_Timer extends Sprite {
    _seconds: number
    initialize(): void
    destroy(options?: any): void
    createBitmap(): void
    fontFace(): string
    fontSize(): number
    update(): void
    updateBitmap(): void
    redraw(): void
    timerText(): string
    updatePosition(): void
    updateVisibility(): void
}
declare class Sprite_Weapon extends Sprite {
    _weaponImageId: number
    _animationCount: number
    _pattern: number
    initialize(): void
    initMembers(): void
    setup(weaponImageId: number): void
    update(): void
    animationWait(): number
    updatePattern(): void
    loadBitmap(): void
    updateFrame(): void
    isPlaying(): boolean
}
declare class Sprite_Clickable extends Sprite {
    _pressed: boolean
    _hovered: boolean
    initialize(...args: any[]): void
    update(): void
    processTouch(): void
    isPressed(): boolean
    isClickEnabled(): boolean
    isBeingTouched(): boolean
    hitTest(x: number, y: number): boolean
    onMouseEnter(): void
    onMouseExit(): void
    onPress(): void
    onClick(): void
}
declare class Sprite_Picture extends Sprite_Clickable {
    _pictureId: number
    _pictureName: string
    constructor(pictureId: number)
    initialize(...args: any[]): void
    picture(): any
    update(): void
    updateBitmap(): void
    updateOrigin(): void
    updatePosition(): void
    updateScale(): void
    updateTone(): void
    updateOther(): void
    loadBitmap(): void
}
declare class Sprite_Button extends Sprite_Clickable {
    _buttonType: string
    _clickHandler: Function | null
    _coldFrame: Rectangle | null
    _hotFrame: Rectangle | null
    constructor(buttonType: string)
    initialize(buttonType: string): void
    setupFrames(): void
    blockWidth(): number
    blockHeight(): number
    loadButtonImage(): void
    buttonData(): {
        x: number
        w: number
    }
    update(): void
    checkBitmap(): void
    updateFrame(): void
    updateOpacity(): void
    setColdFrame(x: number, y: number, width: number, height: number): void
    setHotFrame(x: number, y: number, width: number, height: number): void
    setClickHandler(method: Function): void
    onClick(): void
}
declare class Sprite_Battler extends Sprite_Clickable {
    _battler: Game_Battler | null
    _damages: Sprite_Damage[]
    _homeX: number
    _homeY: number
    _offsetX: number
    _offsetY: number
    _targetOffsetX: number
    _targetOffsetY: number
    _movementDuration: number
    _selectionEffectCount: number
    initialize(battler: Game_Battler): void
    initMembers(): void
    setBattler(battler: Game_Battler): void
    checkBattler(battler: Game_Battler): boolean
    mainSprite(): Sprite
    setHome(x: number, y: number): void
    update(): void
    updateVisibility(): void
    updateMain(): void
    updateBitmap(): void
    updateFrame(): void
    updateMove(): void
    updatePosition(): void
    updateDamagePopup(): void
    updateSelectionEffect(): void
    setupDamagePopup(): void
    createDamageSprite(): void
    destroyDamageSprite(sprite: Sprite_Damage): void
    damageOffsetX(): number
    damageOffsetY(): number
    startMove(x: number, y: number, duration: number): void
    onMoveEnd(): void
    isEffecting(): boolean
    isMoving(): boolean
    inHomePosition(): boolean
    onMouseEnter(): void
    onPress(): void
    onClick(): void
}
declare class Sprite_Actor extends Sprite_Battler {
    static MOTIONS: {
        walk: { index: number, loop: boolean }
        wait: { index: number, loop: boolean }
        chant: { index: number, loop: boolean }
        guard: { index: number, loop: boolean }
        damage: { index: number, loop: boolean }
        evade: { index: number, loop: boolean }
        thrust: { index: number, loop: boolean }
        swing: { index: number, loop: boolean }
        missile: { index: number, loop: boolean }
        skill: { index: number, loop: boolean }
        spell: { index: number, loop: boolean }
        item: { index: number, loop: boolean }
        escape: { index: number, loop: boolean }
        victory: { index: number, loop: boolean }
        dying: { index: number, loop: boolean }
        abnormal: { index: number, loop: boolean }
        sleep: { index: number, loop: boolean }
        dead: { index: number, loop: boolean }
    }
    _battlerName: string
    _motion: any
    _motionCount: number
    _pattern: number
    _mainSprite: Sprite
    _shadowSprite: Sprite
    _weaponSprite: Sprite_Weapon
    _stateSprite: Sprite_StateOverlay
    _actor: Game_Actor
    initialize(battler: Game_Battler): void
    initMembers(): void
    mainSprite(): Sprite
    createMainSprite(): void
    createShadowSprite(): void
    createWeaponSprite(): void
    createStateSprite(): void
    setBattler(battler: Game_Battler): void
    moveToStartPosition(): void
    setActorHome(index: number): void
    update(): void
    updateShadow(): void
    updateMain(): void
    setupMotion(): void
    setupWeaponAnimation(): void
    startMotion(motionType: string): void
    updateTargetPosition(): void
    shouldStepForward(): boolean
    updateBitmap(): void
    updateFrame(): void
    updateMove(): void
    updateMotion(): void
    updateMotionCount(): void
    motionSpeed(): number
    refreshMotion(): void
    startEntryMotion(): void
    stepForward(): void
    stepBack(): void
    retreat(): void
    onMoveEnd(): void
    damageOffsetX(): number
    damageOffsetY(): number
}
declare class Sprite_Enemy extends Sprite_Battler {
    _enemy: Game_Enemy | null
    _appeared: boolean
    _battlerName: string | null
    _battlerHue: number
    _effectType: string | null
    _effectDuration: number
    _shake: number
    _stateIconSprite: Sprite_StateIcon
    constructor(battler: Game_Enemy)
    // @ts-ignore
    initialize(battler: Game_Enemy): void
    initMembers(): void
    createStateIconSprite(): void
    // @ts-ignore
    setBattler(battler: Game_Enemy): void
    update(): void
    updateBitmap(): void
    loadBitmap(name: string): void
    setHue(hue: any): void
    updateFrame(): void
    updatePosition(): void
    updateStateSprite(): void
    initVisibility(): void
    setupEffect(): void
    startEffect(effectType: string): void
    startAppear(): void
    startDisappear(): void
    startWhiten(): void
    startBlink(): void
    startCollapse(): void
    startBossCollapse(): void
    startInstantCollapse(): void
    updateEffect(): void
    isEffecting(): boolean
    revertToNormal(): void
    updateWhiten(): void
    updateBlink(): void
    updateAppear(): void
    updateDisappear(): void
    updateCollapse(): void
    updateBossCollapse(): void
    updateInstantCollapse(): void
    damageOffsetX(): number
    damageOffsetY(): number
}
declare class Spriteset_Base extends Sprite {
    _animationSprites: (Sprite_Animation | Sprite_AnimationMV)[]
    _baseSprite: Sprite
    _blackScreen: any
    _baseColorFilter: ColorFilter
    _pictureContainer: Sprite
    _timerSprite: Sprite_Timer
    _overallColorFilter: ColorFilter
    _effectsContainer: any
    initialize(): void
    destroy(options?: any): void
    loadSystemImages(): void
    createLowerLayer(): void
    createUpperLayer(): void
    update(): void
    createBaseSprite(): void
    createBaseFilters(): void
    createPictures(): void
    pictureContainerRect(): Rectangle
    createTimer(): void
    createOverallFilters(): void
    updateBaseFilters(): void
    updateOverallFilters(): void
    updatePosition(): void
    findTargetSprite(target: any): any
    updateAnimations(): void
    processAnimationRequests(): void
    createAnimation(request: IAnimationRequest): void
    createAnimationSprite(targets: any[], animation: any, mirror: boolean, delay: number): void
    isMVAnimation(animation: RMMZData.Animation): boolean
    makeTargetSprites(targets: any): any[]
    lastAnimationSprite(): Sprite_Animation | Sprite_AnimationMV
    isAnimationForEach(animation: RMMZData.Animation): boolean
    animationBaseDelay(): number
    animationNextDelay(): number
    animationShouldMirror(target: Game_Battler): boolean
    removeAnimation(sprite: Sprite_Animation | Sprite_AnimationMV): void
    removeAllAnimations(): void
    isAnimationPlaying(): boolean
}
declare class Spriteset_Battle extends Spriteset_Base {
    _battlebackLocated: boolean
    _backgroundFilter: PIXI.filters.BlurFilter
    _backgroundSprite: Sprite
    _back1Sprite: Sprite_Battleback
    _back2Sprite: Sprite_Battleback
    _battleField: Sprite
    _enemySprites: Sprite_Enemy[]
    _actorSprites: Sprite_Actor[]
    initialize(): void
    loadSystemImages(): void
    createLowerLayer(): void
    createBackground(): void
    createBattleback(): void
    createBattleField(): void
    battleFieldOffsetY(): number
    update(): void
    updateBattleback(): void
    createEnemies(): void
    compareEnemySprite(a: Sprite_Enemy, b: Sprite_Enemy): number
    createActors(): void
    updateActors(): void
    findTargetSprite(target: any): any
    battlerSprites(): Sprite_Battler[]
    isEffecting(): boolean
    isAnyoneMoving(): boolean
    isBusy(): boolean
}
declare class Spriteset_Map extends Spriteset_Base {
    _balloonSprites: Sprite_Balloon[]
    _characterSprites: Sprite_Character[]
    _parallax: any
    _tilemap: Tilemap
    _tileset: any
    _shadowSprite: Sprite
    _destinationSprite: Sprite_Destination
    _weather: Weather
    _parallaxName: string
    initialize(): void
    destroy(options?: any): void
    loadSystemImages(): void
    createLowerLayer(): void
    update(): void
    hideCharacters(): void
    createParallax(): void
    createTilemap(): void
    loadTileset(): void
    createCharacters(): void
    createShadow(): void
    createDestination(): void
    createWeather(): void
    updateTileset(): void
    updateParallax(): void
    updateTilemap(): void
    updateShadow(): void
    updateWeather(): void
    updateBalloons(): void
    processBalloonRequests(): void
    createBalloon(request: IBalloonRequest): void
    removeBalloon(sprite: Sprite_Balloon): void
    removeAllBalloons(): void
    findTargetSprite(target: Game_Character): Sprite_Character | undefined
    animationBaseDelay(): number
}
// rmmz_windows
declare class Window_Base extends Window {
    _opening: boolean
    _closing: boolean
    _dimmerSprite: Sprite | null
    constructor(rect: Rectangle)
    initialize(...args: any[]): void
    destroy(options: any): void
    checkRectObject(rect: any): void
    lineHeight(): number
    itemWidth(): number
    itemHeight(): number
    itemPadding(): number
    baseTextRect(): Rectangle
    loadWindowskin(): void
    updatePadding(): void
    updateBackOpacity(): void
    fittingHeight(numLines: number): number
    updateTone(): void
    createContents(): void
    destroyContents(): void
    contentsWidth(): number
    contentsHeight(): number
    resetFontSettings(): void
    resetTextColor(): void
    update(): void
    updateOpen(): void
    updateClose(): void
    // @ts-ignore
    open(): void
    close(): void
    isOpening(): boolean
    isClosing(): boolean
    show(): void
    hide(): void
    activate(): void
    deactivate(): void
    systemColor(): string
    translucentOpacity(): number
    changeTextColor(color: any): void
    changeOutlineColor(color: string): void
    changePaintOpacity(enabled: number | boolean | null): void
    drawRect(x: number, y: number, width: number, height: number): void
    drawText(text: string | number, x: number, y: number, maxWidth?: number, align?: CanvasTextAlign): void
    textWidth(text: string): number
    drawTextEx(text: any, x: number, y: number, width: number): any
    textSizeEx(text: any): {
        width: any
        height: any
    }
    createTextState(text: any, x: number, y: number, width: number): any
    processAllText(textState: {
        index?: any
        text?: any
    }): void
    flushTextState(textState: any): void
    createTextBuffer(rtl: boolean): "" | "‫"
    convertEscapeCharacters(text: string): string
    actorName(n: number): string
    partyMemberName(n: number): string
    processCharacter(textState: any): void
    processControlCharacter(textState: any, c: string): void
    processNewLine(textState: {
        x: any
        startX: any
        y: any
        height: any
    }): void
    obtainEscapeCode(textState: {
        text: string
        index: number
    }): string
    obtainEscapeParam(textState: any): number | ""
    processEscapeCharacter(code: string, textState: any): void
    processColorChange(colorIndex: number): void
    processDrawIcon(iconIndex: number, textState: any): void
    makeFontBigger(): void
    makeFontSmaller(): void
    calcTextHeight(textState: any): number
    maxFontSizeInLine(line: string): number
    drawIcon(iconIndex: number, x: any, y: any): void
    drawFace(faceName: any, faceIndex: number, x: number, y: number, width?: number, height?: number): void
    drawCharacter(characterName: string, characterIndex: number, x: number, y: number): void
    drawItemName(item: ItemObject | null, x: number, y: number, width: number): void
    drawCurrencyValue(value: string | number, unit: any, x: number, y: number, width: number): void
    setBackgroundType(type: number): void
    showBackgroundDimmer(): void
    createDimmerSprite(): void
    hideBackgroundDimmer(): void
    updateBackgroundDimmer(): void
    refreshDimmerBitmap(): void
    playCursorSound(): void
    playOkSound(): void
    playBuzzerSound(): void
}
declare class Window_BattleLog extends Window_Base {
    _lines: string[]
    _methods: {
        name: string
        params: any[]
    }[]
    _waitCount: number
    _waitMode: string
    _baseLineStack: number[]
    _spriteset: Spriteset_Battle | null
    initialize(rect: Rectangle): void
    setSpriteset(spriteset: Spriteset_Battle): void
    maxLines(): number
    numLines(): number
    messageSpeed(): number
    isBusy(): string | boolean
    update(): void
    updateWait(): boolean
    updateWaitCount(): boolean
    updateWaitMode(): boolean
    setWaitMode(waitMode: string): void
    callNextMethod(): void
    isFastForward(): boolean
    push(methodName: string, ...args: any[]): void
    clear(): void
    wait(): void
    waitForEffect(): void
    waitForMovement(): void
    addText(text: string): void
    pushBaseLine(): void
    popBaseLine(): void
    waitForNewLine(): void
    popupDamage(target: Game_Battler): void
    performActionStart(subject: Game_Battler, action: Game_Action): void
    performAction(subject: Game_Battler, action: Game_Action): void
    performActionEnd(subject: Game_Battler): void
    performDamage(target: Game_Battler): void
    performMiss(target: Game_Battler): void
    performRecovery(target: Game_Battler): void
    performEvasion(target: Game_Battler): void
    performMagicEvasion(target: Game_Battler): void
    performCounter(target: Game_Battler): void
    performReflection(target: Game_Battler): void
    performSubstitute(substitute: Game_Battler, target: Game_Battler): void
    performCollapse(target: Game_Battler): void
    showAnimation(subject: Game_Battler, targets: Game_Battler[], animationId: number): void
    showAttackAnimation(subject: Game_Battler, targets: Game_Battler[]): void
    showActorAttackAnimation(subject: Game_Actor, targets: Game_Battler[]): void
    showEnemyAttackAnimation(subject: Game_Enemy, targets: Game_Battler[]): void
    showNormalAnimation(targets: Game_Battler[], animationId: number, mirror?: boolean): void
    refresh(): void
    drawBackground(): void
    backRect(): Rectangle
    lineRect(index: number): Rectangle
    backColor(): string
    backPaintOpacity(): number
    drawLineText(index: number): void
    startTurn(): void
    startAction(subject: Game_Battler, action: Game_Action, targets: Game_Battler[]): void
    endAction(subject: Game_Battler): void
    displayCurrentState(subject: Game_Battler): void
    displayRegeneration(subject: Game_Battler): void
    displayAction(subject: Game_Battler, item: RMMZData.Item): void
    displayItemMessage(fmt: string, subject: Game_Battler, item: RMMZData.Item): void
    displayCounter(target: Game_Battler): void
    displayReflection(target: Game_Battler): void
    displaySubstitute(substitute: Game_Battler, target: Game_Battler): void
    displayActionResults(subject: Game_Battler, target: Game_Battler): void
    displayFailure(target: Game_Battler): void
    displayCritical(target: Game_Battler): void
    displayDamage(target: Game_Battler): void
    displayMiss(target: Game_Battler): void
    displayEvasion(target: Game_Battler): void
    displayHpDamage(target: Game_Battler): void
    displayMpDamage(target: Game_Battler): void
    displayTpDamage(target: Game_Battler): void
    displayAffectedStatus(target: Game_Battler): void
    displayAutoAffectedStatus(target: Game_Battler): void
    displayChangedStates(target: Game_Battler): void
    displayAddedStates(target: Game_Battler): void
    displayRemovedStates(target: Game_Battler): void
    displayChangedBuffs(target: Game_Battler): void
    displayBuffs(target: Game_Battler, buffs: number[], fmt: string): void
    makeHpDamageText(target: Game_Battler): string
    makeMpDamageText(target: Game_Battler): string
    makeTpDamageText(target: Game_Battler): string
}
declare class Window_MapName extends Window_Base {
    _showCount: number
    initialize(rect: Rectangle): void
    update(): void
    updateFadeIn(): void
    updateFadeOut(): void
    open(): void
    close(): void
    refresh(): void
    drawBackground(x: number, y: number, width: number, height: number): void
}
declare class Window_Message extends Window_Base {
    _background: number
    _positionType: number
    _waitCount: number
    _faceBitmap: Bitmap | null
    _textState: any
    _goldWindow: Window_Gold | null
    _nameBoxWindow: Window_NameBox | null
    _choiceListWindow: Window_ChoiceList | null
    _numberInputWindow: Window_NumberInput | null
    _eventItemWindow: Window_EventItem | null
    _showFast: boolean
    _lineShowFast: boolean
    _pauseSkip: boolean
    initialize(rect: Rectangle): void
    initMembers(): void
    setGoldWindow(goldWindow: Window_Gold | null): void
    setNameBoxWindow(nameBoxWindow: Window_NameBox | null): void
    setChoiceListWindow(choiceListWindow: Window_ChoiceList | null): void
    setNumberInputWindow(numberInputWindow: Window_NumberInput | null): void
    setEventItemWindow(eventItemWindow: Window_EventItem | null): void
    clearFlags(): void
    update(): void
    checkToNotClose(): void
    synchronizeNameBox(): void
    canStart(): boolean
    startMessage(): void
    newLineX(textState: {
        rtl: any
    }): number
    updatePlacement(): void
    updateBackground(): void
    terminateMessage(): void
    updateWait(): boolean
    updateLoading(): boolean
    updateInput(): boolean
    isAnySubWindowActive(): boolean
    updateMessage(): boolean
    shouldBreakHere(textState: any): boolean
    canBreakHere(textState: {
        text: {
            [x: string]: any
        }
        index: string | number
        rtl: any
    }): boolean
    onEndOfText(): void
    startInput(): boolean
    isTriggered(): boolean
    doesContinue(): boolean
    areSettingsChanged(): boolean
    updateShowFast(): void
    newPage(textState: any): void
    updateSpeakerName(): void
    loadMessageFace(): void
    drawMessageFace(): void
    processControlCharacter(textState: any, c: string): void
    processNewLine(textState: any): void
    processNewPage(textState: any): void
    isEndOfText(textState: any): boolean
    needsNewPage(textState: any): boolean
    processEscapeCharacter(code: string, textState: any): void
    startWait(count: number): void
    startPause(): void
    isWaiting(): boolean
}
declare class Window_NameBox extends Window_Base {
    _name: string
    _messageWindow: Window_Message
    constructor()
    initialize(): void
    setMessageWindow(messageWindow: Window_Message): void
    setName(name: string): void
    clear(): void
    start(): void
    updatePlacement(): void
    updateBackground(): void
    windowWidth(): number
    windowHeight(): number
    refresh(): void
}
declare class Window_Scrollable extends Window_Base {
    _scrollX: number
    _scrollY: number
    _scrollBaseX: number
    _scrollBaseY: number
    _scrollTargetX: number
    _scrollTargetY: number
    _scrollDuration: number
    _scrollAccelX: number
    _scrollAccelY: number
    _scrollTouching: boolean
    _scrollLastTouchX: number
    _scrollLastTouchY: number
    _scrollLastCursorVisible: boolean
    initialize(...args: any[]): void
    clearScrollStatus(): void
    // @ts-ignore
    scrollX(): number
    // @ts-ignore
    scrollY(): number
    scrollBaseX(): number
    scrollBaseY(): number
    // @ts-ignore
    scrollTo(x: number, y: number): void
    // @ts-ignore
    scrollBy(x: number, y: number): void
    smoothScrollTo(x: number, y: number): void
    smoothScrollBy(x: number, y: number): void
    setScrollAccel(x: number, y: number): void
    overallWidth(): number
    overallHeight(): number
    maxScrollX(): number
    maxScrollY(): number
    scrollBlockWidth(): number
    scrollBlockHeight(): number
    smoothScrollDown(n: number): void
    smoothScrollUp(n: number): void
    update(): void
    processWheelScroll(): void
    processTouchScroll(): void
    isWheelScrollEnabled(): boolean
    isTouchScrollEnabled(): boolean
    isScrollEnabled(): boolean
    isTouchedInsideFrame(): boolean
    onTouchScrollStart(): void
    onTouchScroll(): void
    onTouchScrollEnd(): void
    updateSmoothScroll(): void
    updateScrollAccel(): void
    updateArrows(): void
    updateOrigin(): void
    updateScrollBase(baseX: number, baseY: number): void
    paint(): void
}
declare class Window_ScrollText extends Window_Base {
    _reservedRect: Rectangle
    _text: string | null
    _allTextHeight: number
    initialize(rect: Rectangle): void
    update(): void
    startMessage(): void
    refresh(): void
    updatePlacement(): void
    contentsHeight(): number
    updateMessage(): void
    scrollSpeed(): number
    isFastForward(): boolean
    fastForwardRate(): number
    terminateMessage(): void
}
declare class Window_Selectable extends Window_Scrollable {
    _index: number
    _cursorFixed: boolean
    _cursorAll: boolean
    _helpWindow: Window_Help | null
    _handlers: {
        [key: string]: Function
    }
    _doubleTouch: boolean
    _canRepeat: boolean
    initialize(...args: any[]): void
    index(): number
    cursorFixed(): boolean
    setCursorFixed(cursorFixed: boolean): void
    cursorAll(): boolean
    setCursorAll(cursorAll: boolean): void
    maxCols(): number
    maxItems(): number
    colSpacing(): number
    rowSpacing(): number
    itemWidth(): number
    itemHeight(): number
    contentsHeight(): number
    maxRows(): number
    overallHeight(): number
    activate(): void
    deactivate(): void
    select(index: number): void
    forceSelect(index: number): void
    smoothSelect(index: number): void
    deselect(): void
    reselect(): void
    row(): number
    topRow(): number
    maxTopRow(): number
    setTopRow(row: number): void
    maxPageRows(): number
    maxPageItems(): number
    maxVisibleItems(): number
    isHorizontal(): boolean
    topIndex(): number
    itemRect(index: number): Rectangle
    itemRectWithPadding(index: any): Rectangle
    itemLineRect(index: number): Rectangle
    setHelpWindow(helpWindow: Window_Help | null): void
    showHelpWindow(): void
    hideHelpWindow(): void
    setHandler(symbol: string, method: Function): void
    isHandled(symbol: string | null): boolean
    callHandler(symbol: string): void
    isOpenAndActive(): boolean
    isCursorMovable(): boolean
    cursorDown(wrap: boolean): void
    cursorUp(wrap: boolean): void
    cursorRight(wrap: boolean): void
    cursorLeft(wrap: boolean): void
    cursorPagedown(): void
    cursorPageup(): void
    isScrollEnabled(): boolean
    update(): void
    processCursorMove(): void
    processHandling(): void
    processTouch(): void
    isHoverEnabled(): boolean
    onTouchSelect(trigger: boolean): void
    onTouchOk(): void
    onTouchCancel(): void
    hitIndex(): number
    hitTest(x: number, y: number): number
    isTouchOkEnabled(): boolean
    isOkEnabled(): boolean
    isCancelEnabled(): boolean
    isOkTriggered(): boolean
    isCancelTriggered(): boolean
    processOk(): void
    callOkHandler(): void
    processCancel(): void
    callCancelHandler(): void
    processPageup(): void
    processPagedown(): void
    updateInputData(): void
    ensureCursorVisible(smooth: boolean): void
    callUpdateHelp(): void
    updateHelp(): void
    setHelpWindowItem(item: any): void
    isCurrentItemEnabled(): boolean | null
    drawAllItems(): void
    drawItem(...args: any[]): void
    clearItem(index: any): void
    drawItemBackground(index: number): void
    drawBackgroundRect(rect: Rectangle): void
    redrawItem(index: number): void
    redrawCurrentItem(): void
    refresh(): void
    paint(): void
    refreshCursor(): void
    refreshCursorForAll(): void
}
declare class Window_SkillList extends Window_Selectable {
    _actor: Game_Actor | null
    _stypeId: number
    _data: RMMZData.Item[]
    initialize(rect: Rectangle): void
    setActor(actor: Game_Actor): void
    setStypeId(stypeId: number): void
    maxCols(): number
    colSpacing(): number
    maxItems(): number
    item(): RMMZData.Item | null
    itemAt(index: number): RMMZData.Item | null
    isCurrentItemEnabled(): boolean
    includes(item: RMMZData.Item): boolean
    isEnabled(item: RMMZData.Item): boolean
    makeItemList(): void
    selectLast(): void
    drawItem(index: number): void
    costWidth(): number
    drawSkillCost(skill: RMMZData.Item, x: number, y: number, width: number): void
    updateHelp(): void
    refresh(): void
}
declare class Window_ShopBuy extends Window_Selectable {
    _money: number
    _shopGoods: number[][]
    _data: ItemObject[]
    _price: number[]
    _statusWindow: Window_ShopStatus
    initialize(rect: Rectangle): void
    setupGoods(shopGoods: number[][]): void
    maxItems(): number
    item(): ItemObject | null
    itemAt(index: number): ItemObject | null
    setMoney(money: number): void
    isCurrentItemEnabled(): boolean | null
    price(item: ItemObject | null): number
    isEnabled(item: ItemObject | null): boolean | null
    refresh(): void
    makeItemList(): void
    goodsToItem(goods: number[]): RMMZData.Armor | RMMZData.Item | RMMZData.Weapon | null
    drawItem(index: number): void
    priceWidth(): number
    setStatusWindow(statusWindow: Window_ShopStatus): void
    updateHelp(): void
}
declare class Window_ShopNumber extends Window_Selectable {
    _item: ItemObject | null
    _max: number
    _price: number
    _number: number
    _currencyUnit: any
    _buttons: Sprite_Button[]
    initialize(rect: Rectangle): void
    isScrollEnabled(): boolean
    number(): number
    setup(item: ItemObject | null, max: number, price: number): void
    setCurrencyUnit(currencyUnit: any): void
    createButtons(): void
    placeButtons(): void
    totalButtonWidth(): number
    buttonSpacing(): number
    refresh(): void
    drawCurrentItemName(): void
    drawMultiplicationSign(): void
    multiplicationSign(): string
    multiplicationSignX(): number
    drawNumber(): void
    drawHorzLine(): void
    drawTotalPrice(): void
    itemNameY(): number
    totalPriceY(): number
    buttonY(): number
    cursorWidth(): number
    cursorX(): number
    maxDigits(): number
    update(): void
    playOkSound(): void
    processNumberChange(): void
    changeNumber(amount: number): void
    itemRect(): Rectangle
    isTouchOkEnabled(): boolean
    onButtonUp(): void
    onButtonUp2(): void
    onButtonDown(): void
    onButtonDown2(): void
    onButtonOk(): void
}
declare class Window_StatusBase extends Window_Selectable {
    _additionalSprites: any
    initialize(rect: Rectangle): void
    loadFaceImages(): void
    refresh(): void
    hideAdditionalSprites(): void
    placeActorName(actor: Game_Actor, x: number, y: number): void
    placeStateIcon(actor: Game_Actor, x: number, y: number): void
    placeGauge(actor: Game_Actor, type: string, x: number, y: number): void
    createInnerSprite(key: string, spriteClass: any): any
    placeTimeGauge(actor: Game_Actor, x: number, y: number): void
    placeBasicGauges(actor: Game_Actor, x: number, y: number): void
    gaugeLineHeight(): number
    drawActorCharacter(actor: Game_Actor, x: number, y: number): void
    drawActorFace(actor: Game_Actor, x: number, y: number, width?: number, height?: number): void
    drawActorName(actor: Game_Actor, x: number, y: number, width?: number): void
    drawActorClass(actor: Game_Actor, x: number, y: number, width?: number): void
    drawActorNickname(actor: Game_Actor, x: number, y: number, width: number): void
    drawActorLevel(actor: Game_Actor, x: number, y: number): void
    drawActorIcons(actor: Game_Actor, x: number, y: number, width?: number): void
    drawActorSimpleStatus(actor: Game_Actor, x: number, y: number): void
    actorSlotName(actor: Game_Actor, index: number): string
}
declare class Window_Status extends Window_StatusBase {
    _actor: Game_Actor | null
    initialize(rect: Rectangle): void
    setActor(actor: Game_Actor): void
    refresh(): void
    drawBlock1(): void
    block1Y(): number
    drawBlock2(): void
    block2Y(): number
    drawBasicInfo(x: number, y: number): void
    drawExpInfo(x: number, y: number): void
    expTotalValue(): number | "-------"
    expNextValue(): number | "-------"
}
declare class Window_StatusEquip extends Window_StatusBase {
    _actor: Game_Actor | null
    initialize(rect: Rectangle): void
    setActor(actor: Game_Actor): void
    maxItems(): number
    itemHeight(): number
    drawItem(index: number): void
    drawItemBackground(): void
}
declare class Window_StatusParams extends Window_StatusBase {
    _actor: Game_Actor | null
    initialize(rect: Rectangle): void
    setActor(actor: Game_Actor): void
    maxItems(): number
    itemHeight(): number
    drawItem(index: number): void
    drawItemBackground(): void
}
declare class Window_NameEdit extends Window_StatusBase {
    _actor: Game_Actor | null
    _maxLength: number
    _name: string
    _defaultName: string
    initialize(rect: Rectangle): void
    setup(actor: Game_Actor, maxLength: number): void
    // @ts-ignore
    name(): string
    restoreDefault(): boolean
    add(ch: string): boolean
    back(): boolean
    faceWidth(): number
    charWidth(): number
    left(): number
    itemRect(index: number): Rectangle
    underlineRect(index: any): Rectangle
    underlineColor(): string
    drawUnderline(index: number): void
    drawChar(index: number): void
    refresh(): void
}
declare class Window_NameInput extends Window_Selectable {
    static LATIN1: string[]
    static LATIN2: string[]
    static RUSSIA: string[]
    static JAPAN1: string[]
    static JAPAN2: string[]
    static JAPAN3: string[]
    _editWindow: Window_NameEdit | null
    _page: number
    initialize(rect: Rectangle): void
    setEditWindow(editWindow: Window_NameEdit): void
    table(): string[][]
    maxCols(): number
    maxItems(): number
    itemWidth(): number
    groupSpacing(): number
    character(): string
    isPageChange(): boolean
    isOk(): boolean
    itemRect(index: number): Rectangle
    drawItem(index: number): void
    updateCursor(): void
    isCursorMovable(): boolean
    cursorDown(wrap: boolean): void
    cursorUp(wrap: boolean): void
    cursorRight(wrap: boolean): void
    cursorLeft(wrap: boolean): void
    cursorPagedown(): void
    cursorPageup(): void
    processCursorMove(): void
    processHandling(): void
    isCancelEnabled(): boolean
    processCancel(): void
    processJump(): void
    processBack(): void
    processOk(): void
    onNameAdd(): void
    onNameOk(): void
}
declare class Window_NumberInput extends Window_Selectable {
    _number: number
    _maxDigits: number
    _messageWindow?: Window_Message
    _buttons: Sprite_Button[]
    constructor()
    initialize(): void
    setMessageWindow(messageWindow: Window_Message): void
    start(): void
    updatePlacement(): void
    windowWidth(): number
    windowHeight(): number
    maxCols(): number
    maxItems(): number
    itemWidth(): number
    itemRect(index: number): Rectangle
    isScrollEnabled(): boolean
    isHoverEnabled(): boolean
    createButtons(): void
    placeButtons(): void
    totalButtonWidth(): number
    buttonSpacing(): number
    buttonY(): number
    update(): void
    processDigitChange(): void
    changeDigit(up: boolean): void
    isTouchOkEnabled(): boolean
    isOkEnabled(): boolean
    isCancelEnabled(): boolean
    processOk(): void
    drawItem(index: number): void
    onButtonUp(): void
    onButtonDown(): void
    onButtonOk(): void
}
declare class Window_ItemList extends Window_Selectable {
    _category: string | null
    _data: any[]
    initialize(rect: Rectangle): void
    setCategory(category: string | null): void
    maxCols(): number
    colSpacing(): number
    maxItems(): number
    item(): any
    itemAt(index: number): any
    isCurrentItemEnabled(): boolean
    includes(item: RMMZData.Weapon | RMMZData.Armor | RMMZData.Item | null): boolean | null
    needsNumber(): boolean
    isEnabled(item: RMMZData.Weapon | RMMZData.Armor | RMMZData.Item): boolean
    makeItemList(): void
    selectLast(): void
    drawItem(index: number): void
    numberWidth(): number
    drawItemNumber(item: any, x: number, y: number, width: number): void
    updateHelp(): void
    refresh(): void
}
declare class Window_ShopSell extends Window_ItemList {
    initialize(rect: Rectangle): void
    isEnabled(item: ItemObject): boolean
}
declare class Window_ShopStatus extends Window_StatusBase {
    _item: ItemObject | null
    _pageIndex: number
    initialize(rect: Rectangle): void
    refresh(): void
    setItem(item: ItemObject | null): void
    isEquipItem(): boolean | null
    drawPossession(x: number, y: number): void
    drawEquipInfo(x: number, y: number): void
    statusMembers(): Game_Actor[]
    pageSize(): number
    maxPages(): number
    drawActorEquipInfo(x: number, y: number, actor: Game_Actor): void
    drawActorParamChange(x: number, y: number, actor: Game_Actor, item1: ItemObject): void
    paramId(): 2 | 3
    currentEquippedItem(actor: Game_Actor, etypeId: number | undefined): RMMZData.Armor | RMMZData.Weapon | null
    update(): void
    updatePage(): void
    isPageChangeEnabled(): boolean
    isPageChangeRequested(): boolean
    changePage(): void
}
declare class Window_SkillStatus extends Window_StatusBase {
    _actor: Game_Actor | null
    initialize(rect: Rectangle): void
    setActor(actor: Game_Actor): void
    refresh(): void
}
declare class Window_SavefileList extends Window_Selectable {
    _mode: "save" | "load" | null
    _autosave: boolean
    initialize(rect: Rectangle): void
    setMode(mode: "save" | "load" | null, autosave: boolean): void
    maxItems(): number
    numVisibleRows(): number
    itemHeight(): number
    drawItem(index: number): void
    indexToSavefileId(index: number): number
    savefileIdToIndex(savefileId: number): number
    isEnabled(savefileId: number): boolean
    savefileId(): number
    selectSavefile(savefileId: any): void
    drawTitle(savefileId: string | number, x: number, y: number): void
    drawContents(info: ISaveInfo, rect: Rectangle): void
    drawPartyCharacters(info: ISaveInfo, x: any, y: number): void
    drawPlaytime(info: ISaveInfo, x: number, y: number, width: number | undefined): void
    playOkSound(): void
}
declare class Window_BattleItem extends Window_ItemList {
    initialize(rect: Rectangle): void
    includes(item: RMMZData.Item): boolean
    show(): void
    hide(): void
}
declare class Window_BattleSkill extends Window_SkillList {
    initialize(rect: Rectangle): void
    show(): void
    hide(): void
}
declare class Window_BattleActor extends Window_BattleStatus {
    initialize(...args: any[]): void
    show(): void
    hide(): void
    select(index: number): void
    processTouch(): void
}
declare class Window_BattleEnemy extends Window_Selectable {
    _enemies: any[]
    initialize(rect: Rectangle): void
    maxCols(): number
    maxItems(): number
    enemy(): any
    enemyIndex(): any
    drawItem(index: number): void
    show(): void
    hide(): void
    refresh(): void
    select(index: number): void
    processTouch(): void
}
declare class Window_BattleStatus extends Window_StatusBase {
    _bitmapsReady: number
    initialize(rect: Rectangle): void
    extraHeight(): number
    maxCols(): number
    itemHeight(): number
    maxItems(): number
    rowSpacing(): number
    updatePadding(): void
    actor(index: number): Game_Actor
    selectActor(actor: Game_Actor | null): void
    update(): void
    preparePartyRefresh(): void
    performPartyRefresh(): void
    drawItem(index: number): void
    drawItemImage(index: number): void
    drawItemStatus(index: number): void
    faceRect(index: number): Rectangle
    nameX(rect: Rectangle): number
    nameY(rect: Rectangle): number
    stateIconX(rect: Rectangle): number
    stateIconY(rect: Rectangle): number
    basicGaugesX(rect: Rectangle): number
    basicGaugesY(rect: Rectangle): number
}
declare class Window_EquipSlot extends Window_StatusBase {
    _actor: Game_Actor | null
    _itemWindow: Window_EquipItem
    _statusWindow: Window_EquipStatus
    initialize(rect: Rectangle): void
    setActor(actor: Game_Actor): void
    update(): void
    maxItems(): number
    item(): RMMZData.Armor | RMMZData.Weapon | null
    itemAt(index: number): RMMZData.Armor | RMMZData.Weapon | null
    drawItem(index: number): void
    slotNameWidth(): number
    isEnabled(index: number): boolean
    isCurrentItemEnabled(): boolean
    setStatusWindow(statusWindow: Window_EquipStatus): void
    setItemWindow(itemWindow: Window_EquipItem): void
    updateHelp(): void
}
declare class Window_EquipStatus extends Window_StatusBase {
    _actor: Game_Actor | null
    _tempActor: Game_Actor | null
    initialize(rect: Rectangle): void
    setActor(actor: Game_Actor): void
    colSpacing(): number
    refresh(): void
    setTempActor(tempActor: Game_Actor | null): void
    drawAllParams(): void
    drawItem(x: number, y: number, paramId: number): void
    drawParamName(x: number, y: number, paramId: number): void
    drawCurrentParam(x: number, y: number, paramId: number): void
    drawRightArrow(x: number, y: number): void
    drawNewParam(x: number, y: number, paramId: number): void
    rightArrowWidth(): number
    paramWidth(): number
    paramX(): number
    paramY(index: number): number
}
declare class Window_Command extends Window_Selectable {
    _list: IWindowCommand[]
    initialize(...args: any[]): void
    maxItems(): number
    clearCommandList(): void
    makeCommandList(): void
    addCommand(name: string, symbol: string, enabled?: boolean, ext?: any): void
    commandName(index: number): string
    commandSymbol(index: number): string
    isCommandEnabled(index: number): boolean
    currentData(): IWindowCommand | null
    isCurrentItemEnabled(): boolean
    currentSymbol(): string | null
    currentExt(): any
    findSymbol(symbol: any): number
    selectSymbol(symbol: string | null): void
    findExt(ext: any): number
    selectExt(ext: any): void
    drawItem(index: number): void
    itemTextAlign(): CanvasTextAlign
    isOkEnabled(): boolean
    callOkHandler(): void
    refresh(): void
}
interface IWindowCommand {
    name: string
    symbol: string
    enabled: boolean
    ext: any
}
declare class Window_SkillType extends Window_Command {
    _actor: Game_Actor | null
    _skillWindow: Window_SkillList
    initialize(rect: Rectangle): void
    setActor(actor: any): void
    makeCommandList(): void
    update(): void
    setSkillWindow(skillWindow: any): void
    selectLast(): void
}
declare class Window_TitleCommand extends Window_Command {
    initialize(...args: any[]): void
    static _lastCommandSymbol: string | null
    static initCommandPosition(): void
    makeCommandList(): void
    isContinueEnabled(): boolean
    processOk(): void
    selectLast(): void
}
declare class Window_Options extends Window_Command {
    initialize(rect: Rectangle): void
    makeCommandList(): void
    addGeneralOptions(): void
    addVolumeOptions(): void
    drawItem(index: number): void
    statusWidth(): number
    statusText(index: number): string
    isVolumeSymbol(symbol: string): boolean
    booleanStatusText(value: any): "ON" | "OFF"
    volumeStatusText(value: any): string
    processOk(): void
    cursorRight(): void
    cursorLeft(): void
    changeVolume(symbol: keyof ConfigManager, forward: boolean, wrap: boolean): void
    volumeOffset(): number
    changeValue(symbol: keyof ConfigManager, value: any): void
    getConfigValue(symbol: keyof ConfigManager): any
    setConfigValue(symbol: keyof ConfigManager, volume: number): void
}
declare class Window_PartyCommand extends Window_Command {
    initialize(rect: Rectangle): void
    makeCommandList(): void
    setup(): void
}
declare class Window_MenuCommand extends Window_Command {
    initialize(rect: Rectangle): void
    static _lastCommandSymbol: string | null
    static initCommandPosition(): void
    makeCommandList(): void
    addMainCommands(): void
    addFormationCommand(): void
    addOriginalCommands(): void
    addOptionsCommand(): void
    addSaveCommand(): void
    addGameEndCommand(): void
    needsCommand(name: string): boolean
    areMainCommandsEnabled(): boolean
    isFormationEnabled(): boolean
    isOptionsEnabled(): boolean
    isSaveEnabled(): boolean
    isGameEndEnabled(): boolean
    processOk(): void
    selectLast(): void
}
declare class Window_HorzCommand extends Window_Command {
    initialize(rect: Rectangle): void
    maxCols(): number
    itemTextAlign(): CanvasTextAlign
}
declare class Window_GameEnd extends Window_Command {
    initialize(rect: Rectangle): void
    makeCommandList(): void
}
declare class Window_ShopCommand extends Window_HorzCommand {
    private _purchaseOnly
    initialize(rect: Rectangle): void
    setPurchaseOnly(purchaseOnly: boolean): void
    maxCols(): number
    makeCommandList(): void
}
declare class Window_ChoiceList extends Window_Command {
    _background: number
    _messageWindow: Window_Message
    _cancelButton: Sprite_Button
    constructor()
    initialize(): void
    setMessageWindow(messageWindow: Window_Message): void
    createCancelButton(): void
    start(): void
    update(): void
    updateCancelButton(): void
    selectDefault(): void
    updatePlacement(): void
    updateBackground(): void
    placeCancelButton(): void
    windowX(): number
    windowY(): number
    windowWidth(): number
    windowHeight(): number
    numVisibleRows(): number
    maxLines(): 4 | 8
    maxChoiceWidth(): number
    makeCommandList(): void
    drawItem(index: number): void
    isCancelEnabled(): boolean
    needsCancelButton(): boolean
    callOkHandler(): void
    callCancelHandler(): void
}
declare class Window_ActorCommand extends Window_Command {
    _actor: Game_Actor | null
    initialize(rect: Rectangle): void
    makeCommandList(): void
    addAttackCommand(): void
    addSkillCommands(): void
    addGuardCommand(): void
    addItemCommand(): void
    setup(actor: Game_Actor): void
    actor(): Game_Actor | null
    processOk(): void
    selectLast(): void
}
declare class Window_ItemCategory extends Window_HorzCommand {
    _itemWindow: Window_ItemList
    initialize(rect: Rectangle): void
    maxCols(): number
    update(): void
    makeCommandList(): void
    needsCommand(name: string): boolean
    setItemWindow(itemWindow: Window_ItemList): void
    needsSelection(): boolean
}
declare class Window_EquipCommand extends Window_HorzCommand {
    initialize(rect: Rectangle): void
    maxCols(): number
    makeCommandList(): void
}
declare class Window_EquipItem extends Window_ItemList {
    _actor: Game_Actor | null
    _slotId: number
    _statusWindow: Window_EquipStatus
    initialize(rect: Rectangle): void
    maxCols(): number
    colSpacing(): number
    setActor(actor: Game_Actor): void
    setSlotId(slotId: number): void
    includes(item: RMMZData.Weapon | RMMZData.Armor | null): boolean | null
    etypeId(): number
    isEnabled(): boolean
    selectLast(): void
    setStatusWindow(statusWindow: Window_EquipStatus): void
    updateHelp(): void
    playOkSound(): void
}
declare class Window_EventItem extends Window_ItemList {
    _messageWindow: Window_Message
    _cancelButton: Sprite_Button
    initialize(rect: Rectangle): void
    setMessageWindow(messageWindow: Window_Message): void
    createCancelButton(): void
    start(): void
    update(): void
    updateCancelButton(): void
    updatePlacement(): void
    placeCancelButton(): void
    includes(item: RMMZData.Item): boolean | null
    needsNumber(): boolean
    isEnabled(item: RMMZData.Item): boolean
    onOk(): void
    onCancel(): void
}
declare class Window_Gold extends Window_Selectable {
    initialize(rect: Rectangle): void
    colSpacing(): number
    refresh(): void
    value(): number
    currencyUnit(): string
    open(): void
}
declare class Window_Help extends Window_Base {
    _text: string
    initialize(rect: Rectangle): void
    setText(text: string): void
    clear(): void
    setItem(item: {
        description: string
    }): void
    refresh(): void
}
declare class Window_MenuActor extends Window_MenuStatus {
    initialize(rect: Rectangle): void
    processOk(): void
    selectLast(): void
    selectForItem(item: RMMZData.Item): void
}
declare class Window_MenuStatus extends Window_StatusBase {
    _formationMode: boolean
    _pendingIndex: number
    initialize(rect: Rectangle): void
    maxItems(): number
    numVisibleRows(): number
    itemHeight(): number
    actor(index: number): Game_Actor
    drawItem(index: number): void
    drawPendingItemBackground(index: number): void
    drawItemImage(index: number): void
    drawItemStatus(index: number): void
    processOk(): void
    isCurrentItemEnabled(): boolean
    selectLast(): void
    formationMode(): boolean
    setFormationMode(formationMode: boolean): void
    pendingIndex(): number
    setPendingIndex(index: number): void
}
declare class Window_DebugEdit extends Window_Selectable {
    _mode: "switch" | "variable"
    _topId: number
    initialize(rect: Rectangle): void
    maxItems(): number
    drawItem(index: number): void
    itemName(dataId: number): string
    itemStatus(dataId: number): string
    setMode(mode: "switch" | "variable"): void
    setTopId(id: number): void
    currentId(): number
    update(): void
    updateSwitch(): void
    updateVariable(): void
    deltaForVariable(): 0 | 1 | 10 | -1 | -10
}
declare class Window_DebugRange extends Window_Selectable {
    static lastTopRow: number
    static lastIndex: number
    _maxSwitches: number
    _maxVariables: number
    _editWindow: Window_DebugEdit
    initialize(rect: Rectangle): void
    maxItems(): number
    update(): void
    mode(index?: number): "variable" | "switch"
    topId(index: number): number
    isSwitchMode(index: number): boolean
    drawItem(index: number): void
    isCancelTriggered(): boolean
    processCancel(): void
    setEditWindow(editWindow: Window_DebugEdit): void
}
