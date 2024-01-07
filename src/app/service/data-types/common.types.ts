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

// 歌单
export interface SongSheet {
  name: string;
  id: number;
  playCount: number;
  picUrl: string;
}
