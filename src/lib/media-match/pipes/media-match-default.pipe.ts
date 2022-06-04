import { Pipe, PipeTransform } from "@angular/core";
import { MediaMatchPipeBase } from "./media-match.base";

@Pipe({
    name: 'mediaMatchDefault'
})
export class MediaMatchDefaultPipe extends MediaMatchPipeBase implements PipeTransform {
    constructor() { super(); }
}