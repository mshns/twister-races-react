export interface INicknameDB {
  current: string;
  previous: string;
}

export interface IPlayerDB {
  _id: string;
  nickname: INicknameDB;
  login: string;
  update: string;
}

export interface IPlayerApi {
  position: number;
  nickname: string;
  points: number;
}

export interface IPlayer {
  position: number;
  nickname: string;
  points: number;
  prize: string;
  bonus: string;
  isAffiliate: boolean;
}

export interface IRaceTime {
  start: string;
  end: string;
  update: string;
}

export interface IData {
  storoCurrentPlayers: IPlayer[];
  networkCurrentPlayers: IPlayer[];
  currentRaceTime: IRaceTime;
  storoPreviousPlayers: IPlayer[];
  networkPreviousPlayers: IPlayer[];
  previousRaceTime: IRaceTime;
  isFetching: boolean;
}
