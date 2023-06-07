export interface INickname {
  current: string;
  previous: string;
}

export interface IPlayer {
  _id: string;
  nickname: INickname;
  login: string;
  update: string;
}

export interface IParticipant {
  position: string;
  nickname: string;
  points: string;
}

export interface IRaceTime {
  update: string;
  start: string;
  end: string;
}