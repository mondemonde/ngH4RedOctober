export enum SqrStatus {
    None='None',
    Warship='Warship',
    Sub='Sub',
    TorpedoLeftUp='TorpedoLeftUp',
    TorperdoRightUp='TorpedoRightUp',
    TorpedoLeftDown='TorpedoLeftDown',
    TorpedoRightDown='TorpedoRightDown',
    DepthCharge='DepthCharge',
    Exploded='Exploded'
}

export enum GameCompAbout {
    RadarDistance,
    SubPosition,   
    WarshipPosition,
    Terminal,
    Square,
    ConsoleLog 
}

export enum GameCycle {
    Sub=9,
    Warship=3,
    DepthCharge=1   
}
export enum GameMode {
    Intro,
    Demo,
    Play,
    Pause,
    Replay,
    Credits   
}

export enum GameCmd {
    Intro = 'intro',
    Demo ='demo',
    Play = 'play',
    Pause = 'pause',
    Replay ='replay',
    Credits= 'credits'   
}







