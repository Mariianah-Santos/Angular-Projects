export interface Post {
    id?: string;
    userName: string;
    text: string;
    datePost: Date;
    Comment: string;
    like: number;
}

export interface Comment {
    id?: string;
    userName: string;
    textComment: string;
    datePost: Date;
}