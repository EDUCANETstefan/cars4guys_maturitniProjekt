import {IKomentar} from "./IKomentar";

export interface IOtazka {
  nadpis: string;
  obsah: string;
  id: string;
  komentare: Array<IKomentar>

}

export interface IOtazkaData {
  obsah: string
  nadpis: string
}
