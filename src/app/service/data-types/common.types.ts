export interface Banner {
  targetId: number;
  url: string;
  imageUrl: string;
}

export interface HotTag {
  name: string;
  id: number;
  position: number;
}

// 歌手
export interface Singer {
  id: number;
  name: string;
  picUrl: string;
  albumSize: number;
}

// 歌曲
export interface Song {
  id: number;
  name: string;
  url: string;
  ar: Singer[];
  al: {
    id: number;
    name: string;
    picUrl: string;
  };
  dt: number;
}

// 歌单
export interface SongSheet {
  name: string;
  id: number;
  playCount: number;
  picUrl: string;
  tracks: Song[];
}
