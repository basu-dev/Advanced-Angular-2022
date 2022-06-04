import { Pipe, PipeTransform } from "@angular/core";
import { MediaMatchPipeBase } from "./media-match.base";

@Pipe({
    name: 'mediaMatch'
})
export class MediaMatchPipe extends MediaMatchPipeBase implements PipeTransform {
    constructor() { super(); }
}