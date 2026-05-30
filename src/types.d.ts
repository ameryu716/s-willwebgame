export interface structure_data {
    links: card_info[];
    links_portfolio: card_info[];
    links_stamp: card_info[];
}

export interface structure_tag {
    class: string;
    color: string;
    name: string;
}

export interface card_info {
    class?: string;
    thumbnail_url: string;
    thumbnail_alt?: string;
    title: string;
    subtitle?: string;
    tags?: structure_tag[];
    description: string;
    url: string;
    division: "tool" | "game" | "generator" | "portfolio" | "stamp";
}

declare module "toastify-js";
