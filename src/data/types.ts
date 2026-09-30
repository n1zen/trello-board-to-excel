// this contains the shape of the Boards, Lists, and Cards

interface TrelloBoard {
    id: string;
    name: string;
}

interface TrelloList {
    id: string;
    name: string;
    pos: number;
}

interface TrelloCard {
    id: string;
    idList: string;
    name: string;
    desc: string | null;
    start: string | null;
    due: string | null;
    pos: number;
}