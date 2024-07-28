export interface structure_data {
    links: card_info[];
}

export interface structure_tag {
    class: string;
    color: string;
    name: string;
}

export interface card_info {
    thumbnail_url: string;
    thumbnail_alt?: string;
    title: string;
    subtitle?: string;
    tags: structure_tag[];
    description: string;
    relative_url: string;
    division: "tool" | "game";
}

declare module "toastify-js";