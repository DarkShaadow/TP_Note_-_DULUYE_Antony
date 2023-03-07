export interface Music {
    id: string;
    title: string;
    description?: string;
    album: string;
    artist: string;
    duration: string;
    date: Date;
    styles: string[];
    picture?: string;
}
